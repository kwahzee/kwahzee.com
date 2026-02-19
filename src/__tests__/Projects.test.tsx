import { render, screen } from '@testing-library/react';
import Projects from '@/app/projects/page';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe('Projects page', () => {
  it('renders both project links', () => {
    render(<Projects />);
    expect(screen.getByText(/Oblique Strategies/)).toBeInTheDocument();
    expect(screen.getByText(/IDM Name Generator/)).toBeInTheDocument();
  });

  it('oblique strategies link points to correct route', () => {
    render(<Projects />);
    expect(screen.getByText(/Oblique Strategies/).closest('a'))
      .toHaveAttribute('href', '/projects/oblique-strategies');
  });

  it('IDM generator link points to correct route', () => {
    render(<Projects />);
    expect(screen.getByText(/IDM Name Generator/).closest('a'))
      .toHaveAttribute('href', '/projects/idm-name-generator');
  });

  it('renders background video with correct src', () => {
    render(<Projects />);
    const source = document.querySelector('source');
    expect(source).toHaveAttribute('src', '/videos/futures.mp4');
    expect(source).toHaveAttribute('type', 'video/mp4');
  });

  it('video has muted, loop, and autoPlay attributes', () => {
    render(<Projects />);
    const video = document.querySelector('video');
    expect(video).toHaveAttribute('autoplay');
    expect((video as HTMLVideoElement).muted).toBe(true);
    expect(video).toHaveAttribute('loop');
  });
});
