import Link from 'next/link';

export default function Projects() {
  return (
    <main style={{ padding: '40px', color: 'white', backgroundColor: 'black', minHeight: '100vh' }}>
      <h1>Projects</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px' }}>
        <Link href="/projects/oblique-strategies" style={{ color: '#cacaca', fontSize: '24px' }}>
            → Oblique Strategies
        </Link>
        <Link href="/projects/idm-name-generator" style={{ color: '#cacaca', fontSize: '24px' }}>
            → IDM Name Generator
        </Link>
      </div>
    </main>
  );
}