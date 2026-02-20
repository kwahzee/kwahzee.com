import { headers } from 'next/headers';
import Image from 'next/image';

const TOTAL_IMAGES = 18;

interface PageBackgroundProps {
  videoSrc: string;
  videoId?: string;
}

export default async function PageBackground({ videoSrc, videoId }: PageBackgroundProps) {
  const headersList = await headers();
  const deviceType = headersList.get('x-device-type') || 'desktop';
  const imageSrc = `/images/m${Math.floor(Math.random() * TOTAL_IMAGES) + 1}.png`;

  if (deviceType === 'mobile' || deviceType === 'tablet') {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          quality={deviceType === 'mobile' ? 70 : 80}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
    );
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      id={videoId}
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
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
