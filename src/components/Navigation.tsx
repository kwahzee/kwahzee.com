'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith('/projects/') && pathname !== '/projects';

  if (isProjectPage) {
    return null;
  }

  return (
    <>
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 1000
      }}>
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="kwahzee logo"
            width={100}
            height={100}
            style={{ cursor: 'pointer' }}
          />
        </Link>
      </div>

      <nav style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        fontFamily: 'var(--font-gothic), sans-serif',
        fontSize: '24px',
        zIndex: 1000
      }}>
        <Link href="/projects" style={{ color: '#cacaca', textDecoration: 'none', letterSpacing: '2px' }}>
          Projects
        </Link>
        <Link href="/audio" style={{ color: '#cacaca', textDecoration: 'none', letterSpacing: '2px' }}>
          Audio
        </Link>
        <Link href="/video" style={{ color: '#cacaca', textDecoration: 'none', letterSpacing: '2px' }}>
          Video
        </Link>
        <Link href="/blog" style={{ color: '#cacaca', textDecoration: 'none', letterSpacing: '2px' }}>
          Blog
        </Link>
        <Link href="/store" style={{ color: '#cacaca', textDecoration: 'none', letterSpacing: '2px' }}>
          Store
        </Link>
      </nav>
    </>
  );
}
