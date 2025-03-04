import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

interface AuthRequest extends Request {
  user?: any;
  token?: string;
}

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    // Generate token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    // Save token
    await prisma.token.create({
      data: {
        token,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      },
    });

    res.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      token,
    });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    // Save token
    await prisma.token.create({
      data: {
        token,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      },
    });

    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      token,
    });
  } catch (error) {
    res.status(400).json({ message: 'Error logging in' });
  }
};

export const logout = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.token) {
      return res.status(400).json({ message: 'No token provided' });
    }

    // Delete token
    await prisma.token.deleteMany({
      where: {
        token: req.token,
        userId: req.user.id,
      },
    });

    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error logging out' });
  }
}; 