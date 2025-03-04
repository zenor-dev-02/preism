import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface AuthRequest extends Request {
  user?: any;
  token?: string;
}

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.header('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const token = authHeader.replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const tokenExists = await prisma.token.findFirst({
      where: {
        userId: user.id,
        token,
        expiresAt: {
          gt: new Date(),
        },
      },
    });

    if (!tokenExists) {
      return res.status(401).json({ message: 'Token expired or invalid' });
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate' });
  }
}; 