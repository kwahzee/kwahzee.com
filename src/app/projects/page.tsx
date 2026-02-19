import Link from 'next/link';

export default function Projects() {
  return (
    <main style={{ height: '100vh', overflow: 'hidden', backgroundColor: 'black' }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 0,
        }}
      >
        <source src="/videos/futures.mp4" type="video/mp4" />
      </video>

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
