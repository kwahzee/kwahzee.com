import { render, screen } from '@testing-library/react';
import Blog from '@/app/blog/page';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe('Blog page', () => {
  it('renders two "go home" links', () => {
    render(<Blog />);
    const links = screen.getAllByText('go home');
    expect(links).toHaveLength(2);
  });

  it('both "go home" links point to the home page', () => {
    render(<Blog />);
    screen.getAllByText('go home').forEach(link => {
      expect(link.closest('a')).toHaveAttribute('href', '/');
    });
  });

  it('does not render an h1 or header element', () => {
    const { container } = render(<Blog />);
    expect(container.querySelector('h1')).toBeNull();
    expect(container.querySelector('header')).toBeNull();
  });

  it('renders at least one blog post article', () => {
    render(<Blog />);
    const articles = document.querySelectorAll('article');
    expect(articles.length).toBeGreaterThan(0);
  });

  it('renders post titles as h2 elements', () => {
    render(<Blog />);
    const headings = document.querySelectorAll('h2');
    expect(headings.length).toBeGreaterThan(0);
  });

  it('renders post dates as time elements', () => {
    render(<Blog />);
    const times = document.querySelectorAll('time');
    expect(times.length).toBeGreaterThan(0);
  });

  it('renders the post titled "new website"', () => {
    render(<Blog />);
    expect(screen.getByText('new website')).toBeInTheDocument();
  });
});
