import Image from 'next/image';
import PageBackground from '@/components/PageBackground';

const albums = [
  { src: '/images/child-inc-wav.jpg', href: 'https://kwahzee.bandcamp.com/album/wav', alt: 'wav' },
  { src: '/images/child-inc-drones.jpg', href: 'https://kwahzee.bandcamp.com/album/here-comes-the-warm-drones', alt: 'drones' },
  { src: '/images/child-inc-default.jpg', href: 'https://kwahzee.bandcamp.com/album/de-fault-music', alt: 'de fault' },
  { src: '/images/child-inc-deathmetal.jpg', href: 'https://kwahzee.bandcamp.com/album/death-metal-music', alt: 'death metal' },
  { src: '/images/ths-goodbye.jpg', href: 'https://thathideoussound.bandcamp.com/album/goodbye-suffering-hello-god', alt: 'goodbye suffering' },
  { src: '/images/ths-wasted.jpg', href: 'https://thathideoussound.bandcamp.com/album/wasted-life', alt: 'wasted life' },
  { src: '/images/ths-ep.jpeg', href: 'https://thathideoussound.bandcamp.com/album/that-hideous-sound-ep', alt: 'ths ep' },
  { src: '/images/soundcloud.png', href: 'https://soundcloud.com/thathideoussound', alt: 'soundcloud' },
  { src: '/images/vrt-demo.jpg', href: 'https://volumereferencetone.bandcamp.com/album/demo-3', alt: 'vrt demo' },
  { src: '/images/harvey.jpg', href: 'https://harvey2.bandcamp.com/album/7-monoliths', alt: 'harvey' },
  
];

export default function Audio() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'black' }}>
      <PageBackground videoSrc="/videos/memories.mp4" />

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '420px',
        margin: '0 auto',
        padding: '100px 20px 60px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}>
        {albums.map((album, i) => (
          <a
            key={i}
            href={album.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              position: 'relative',
              width: '100%',
              aspectRatio: '1 / 1',
              cursor: 'pointer',
            }}
          >
            <Image
              src={album.src}
              alt={album.alt}
              fill
              sizes="(max-width: 480px) 90vw, 420px"
              style={{ objectFit: 'contain' }}
            />
          </a>
        ))}
      </div>
    </main>
  );
}
