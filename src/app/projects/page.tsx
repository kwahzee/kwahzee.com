import Link from 'next/link';
import PageBackground from '@/components/PageBackground';

export default function Projects() {
  return (
    <main style={{ height: '100vh', overflow: 'hidden', backgroundColor: 'black' }}>
      <PageBackground videoSrc="/videos/futures.mp4" />

      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        zIndex: 1,
      }}>
        <Link href="/projects/oblique-strategies" style={{ color: '#cacaca', fontSize: '24px', textDecoration: 'none' }}>
          → Oblique Strategies
        </Link>
        <Link href="/projects/idm-name-generator" style={{ color: '#cacaca', fontSize: '24px', textDecoration: 'none' }}>
          → IDM Name Generator
        </Link>
      </div>
    </main>
  );
}
