'use client';

import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

export function BackButton({
  children,
}: PropsWithChildren<{
  className?: string;
}>) {
  const router = useRouter();
  return (
    <button
      className='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white duration-300 hover:bg-blue-800'
      onClick={() => router.back()}
    >
      {children}
    </button>
  );
}
