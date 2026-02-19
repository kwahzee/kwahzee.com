import { render, screen } from '@testing-library/react';
import Navigation from '@/components/Navigation';
import { usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

const mockUsePathname = usePathname as jest.MockedFunction<typeof usePathname>;

describe('Navigation', () => {
  it('renders logo and all nav links on the home page', () => {
    mockUsePathname.mockReturnValue('/');
    render(<Navigation />);
    expect(screen.getByAltText('kwahzee logo')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Audio')).toBeInTheDocument();
    expect(screen.getByText('Video')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Store')).toBeInTheDocument();
  });

  it('renders on the /projects page', () => {
    mockUsePathname.mockReturnValue('/projects');
    render(<Navigation />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('is hidden on project sub-pages', () => {
    mockUsePathname.mockReturnValue('/projects/oblique-strategies');
    const { container } = render(<Navigation />);
    expect(container.firstChild).toBeNull();
  });

  it('is hidden on idm-name-generator page', () => {
    mockUsePathname.mockReturnValue('/projects/idm-name-generator');
    const { container } = render(<Navigation />);
    expect(container.firstChild).toBeNull();
  });

  it('nav links point to the correct routes', () => {
    mockUsePathname.mockReturnValue('/');
    render(<Navigation />);
    expect(screen.getByText('Projects').closest('a')).toHaveAttribute('href', '/projects');
    expect(screen.getByText('Audio').closest('a')).toHaveAttribute('href', '/audio');
    expect(screen.getByText('Video').closest('a')).toHaveAttribute('href', '/video');
    expect(screen.getByText('Blog').closest('a')).toHaveAttribute('href', '/blog');
    expect(screen.getByText('Store').closest('a')).toHaveAttribute('href', '/store');
  });

  it('logo links to home', () => {
    mockUsePathname.mockReturnValue('/');
    render(<Navigation />);
    expect(screen.getByAltText('kwahzee logo').closest('a')).toHaveAttribute('href', '/');
  });
});
