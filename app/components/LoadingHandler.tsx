'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLoading } from '../contexts/LoadingContext';

export default function LoadingHandler() {
  const { setIsLoading } = useLoading();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 當路由變化完成時關閉 loading
    setIsLoading(false);
  }, [pathname, searchParams, setIsLoading]);

  return null;
} 