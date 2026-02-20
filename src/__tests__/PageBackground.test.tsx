import { render } from '@testing-library/react';
import PageBackground from '@/components/PageBackground';
import { headers } from 'next/headers';

jest.mock('next/headers', () => ({
  headers: jest.fn(),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, quality }: { src: string; alt: string; quality?: number }) => (
    <img src={src} alt={alt} data-quality={String(quality)} />
  ),
}));

const mockHeaders = headers as jest.Mock;

function makeHeaders(deviceType: string) {
  return { get: (name: string) => (name === 'x-device-type' ? deviceType : null) };
}

describe('PageBackground', () => {
  afterEach(() => jest.restoreAllMocks());

  describe('desktop', () => {
    it('renders a video element', async () => {
      mockHeaders.mockResolvedValue(makeHeaders('desktop'));
      const el = await PageBackground({ videoSrc: '/videos/test.mp4' });
      const { container } = render(el);
      expect(container.querySelector('video')).toBeTruthy();
      expect(container.querySelector('img')).toBeNull();
    });

    it('video source matches the provided videoSrc', async () => {
      mockHeaders.mockResolvedValue(makeHeaders('desktop'));
      const el = await PageBackground({ videoSrc: '/videos/memories.mp4' });
      const { container } = render(el);
      expect(container.querySelector('source')).toHaveAttribute('src', '/videos/memories.mp4');
    });

    it('applies the videoId to the video element when provided', async () => {
      mockHeaders.mockResolvedValue(makeHeaders('desktop'));
      const el = await PageBackground({ videoSrc: '/videos/visions.mp4', videoId: 'visions' });
      const { container } = render(el);
      expect(container.querySelector('video')).toHaveAttribute('id', 'visions');
    });

    it('defaults to desktop when x-device-type header is absent', async () => {
      mockHeaders.mockResolvedValue({ get: () => null });
      const el = await PageBackground({ videoSrc: '/videos/test.mp4' });
      const { container } = render(el);
      expect(container.querySelector('video')).toBeTruthy();
    });
  });

  describe('mobile', () => {
    it('renders an image instead of a video', async () => {
      mockHeaders.mockResolvedValue(makeHeaders('mobile'));
      const el = await PageBackground({ videoSrc: '/videos/test.mp4' });
      const { container } = render(el);
      expect(container.querySelector('video')).toBeNull();
      expect(container.querySelector('img')).toBeTruthy();
    });

    it('uses quality 70', async () => {
      mockHeaders.mockResolvedValue(makeHeaders('mobile'));
      const el = await PageBackground({ videoSrc: '/videos/test.mp4' });
      const { container } = render(el);
      expect(container.querySelector('img')).toHaveAttribute('data-quality', '70');
    });

    it('selects a background image from the m1-m18 pool', async () => {
      mockHeaders.mockResolvedValue(makeHeaders('mobile'));
      const el = await PageBackground({ videoSrc: '/videos/test.mp4' });
      const { container } = render(el);
      const src = container.querySelector('img')?.getAttribute('src') ?? '';
      expect(src).toMatch(/^\/images\/m(1[0-2]|[1-9])\.png$/);
    });

    it('selects image m7 when Math.random returns 0.5', async () => {
      jest.spyOn(Math, 'random').mockReturnValue(0.5);
      mockHeaders.mockResolvedValue(makeHeaders('mobile'));
      const el = await PageBackground({ videoSrc: '/videos/test.mp4' });
      const { container } = render(el);
      // Math.floor(0.5 * 12) + 1 = 7
      expect(container.querySelector('img')).toHaveAttribute('src', '/images/m7.png');
    });
  });

  describe('tablet', () => {
    it('renders an image instead of a video', async () => {
      mockHeaders.mockResolvedValue(makeHeaders('tablet'));
      const el = await PageBackground({ videoSrc: '/videos/test.mp4' });
      const { container } = render(el);
      expect(container.querySelector('video')).toBeNull();
      expect(container.querySelector('img')).toBeTruthy();
    });

    it('uses quality 80', async () => {
      mockHeaders.mockResolvedValue(makeHeaders('tablet'));
      const el = await PageBackground({ videoSrc: '/videos/test.mp4' });
      const { container } = render(el);
      expect(container.querySelector('img')).toHaveAttribute('data-quality', '80');
    });

    it('selects a background image from the m1-m18 pool', async () => {
      mockHeaders.mockResolvedValue(makeHeaders('tablet'));
      const el = await PageBackground({ videoSrc: '/videos/test.mp4' });
      const { container } = render(el);
      const src = container.querySelector('img')?.getAttribute('src') ?? '';
      expect(src).toMatch(/^\/images\/m(1[0-2]|[1-9])\.png$/);
    });
  });
});
