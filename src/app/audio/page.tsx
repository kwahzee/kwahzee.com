import Image from 'next/image';

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
        <source src="/videos/memories.mp4" type="video/mp4" />
      </video>

      <div style={{
        position: 'fixed',
        top: '12%',
        left: '18%',
        width: '62%',
        height: '74%',
        display: 'grid',
        gridTemplateColumns: '373fr 447fr 434fr 352fr',
        gridTemplateRows: 'repeat(3, 1fr)',
        gap: '18px',
        zIndex: 1,
      }}>
        {albums.map((album, i) => (
          <a
            key={i}
            href={album.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ position: 'relative', display: 'block', overflow: 'hidden', cursor: 'pointer' }}
          >
            <Image
              src={album.src}
              alt={album.alt}
              fill
              sizes="18vw"
              style={{ objectFit: 'contain' }}
            />
          </a>
        ))}
      </div>
    </main>
  );
}
