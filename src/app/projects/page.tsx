import Link from 'next/link';
import PageBackground from '@/components/PageBackground';

export default function Projects() {
  return (
    <main style={{ height: '100vh', overflow: 'hidden', backgroundColor: 'black' }}>
      <PageBackground videoSrc="/videos/futures.mp4" />

      <div className="projects-links">
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
