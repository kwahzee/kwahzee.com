import { render, screen } from '@testing-library/react';
import Audio from '@/app/audio/page';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

jest.mock('@/components/PageBackground', () => ({
  __esModule: true,
  default: ({ videoSrc }: { videoSrc: string }) => (
    <video autoPlay muted loop playsInline>
      <source src={videoSrc} type="video/mp4" />
    </video>
  ),
}));

const expectedAlbums = [
  { alt: 'wav', href: 'https://kwahzee.bandcamp.com/album/wav' },
  { alt: 'drones', href: 'https://kwahzee.bandcamp.com/album/here-comes-the-warm-drones' },
  { alt: 'de fault', href: 'https://kwahzee.bandcamp.com/album/de-fault-music' },
  { alt: 'death metal', href: 'https://kwahzee.bandcamp.com/album/death-metal-music' },
  { alt: 'goodbye suffering', href: 'https://thathideoussound.bandcamp.com/album/goodbye-suffering-hello-god' },
  { alt: 'wasted life', href: 'https://thathideoussound.bandcamp.com/album/wasted-life' },
  { alt: 'ths ep', href: 'https://thathideoussound.bandcamp.com/album/that-hideous-sound-ep' },
  { alt: 'vrt demo', href: 'https://volumereferencetone.bandcamp.com/album/demo-3' },
  { alt: 'harvey', href: 'https://harvey2.bandcamp.com/album/7-monoliths' },
  { alt: 'soundcloud', href: 'https://soundcloud.com/thathideoussound' },
];

describe('Audio page', () => {
  it('renders exactly 10 album links', () => {
    render(<Audio />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(10);
  });

  it('every album link opens in a new tab', () => {
    render(<Audio />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('each album has the correct href', () => {
    render(<Audio />);
    expectedAlbums.forEach(({ alt, href }) => {
      const img = screen.getByAltText(alt);
      expect(img.closest('a')).toHaveAttribute('href', href);
    });
  });

  it('renders the background video with correct src', () => {
    render(<Audio />);
    const source = document.querySelector('source');
    expect(source).toHaveAttribute('src', '/videos/memories.mp4');
    expect(source).toHaveAttribute('type', 'video/mp4');
  });

  it('video has muted, loop, and autoPlay attributes', () => {
    render(<Audio />);
    const video = document.querySelector('video');
    expect(video).toHaveAttribute('autoplay');
    expect((video as HTMLVideoElement).muted).toBe(true);
    expect(video).toHaveAttribute('loop');
  });

  it('album links are arranged in a flex column container', () => {
    render(<Audio />);
    const links = screen.getAllByRole('link');
    const column = links[0].parentElement;
    expect(column).toHaveStyle({ flexDirection: 'column' });
  });

  it('each album link uses a square 1:1 aspect ratio', () => {
    render(<Audio />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveStyle({ aspectRatio: '1 / 1' });
    });
  });

  it('column container has a max-width for readable layout', () => {
    render(<Audio />);
    const links = screen.getAllByRole('link');
    const column = links[0].parentElement;
    expect(column).toHaveStyle({ maxWidth: '420px' });
  });
});
