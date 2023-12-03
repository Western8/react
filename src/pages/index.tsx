import { Inter } from 'next/font/google'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { push } = useRouter();
  useEffect(() => {
    push('/page/1');
  }, []);

  return;
}
