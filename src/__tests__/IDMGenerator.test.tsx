import { render, screen, fireEvent } from '@testing-library/react';
import IDMGenerator from '@/app/projects/idm-name-generator/page';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

describe('IDM Name Generator', () => {
  it('renders all controls', () => {
    render(<IDMGenerator />);
    expect(screen.getByLabelText('Length:')).toBeInTheDocument();
    expect(screen.getByLabelText('Chaos:')).toBeInTheDocument();
    expect(screen.getByLabelText('Amount:')).toBeInTheDocument();
    expect(screen.getByLabelText('Custom Input:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Generate' })).toBeInTheDocument();
  });

  it('displays names after clicking Generate', () => {
    render(<IDMGenerator />);
    fireEvent.click(screen.getByRole('button', { name: 'Generate' }));
    const names = document.querySelectorAll('.name');
    expect(names.length).toBeGreaterThan(0);
  });

  it('generates multiple names when amount is increased', () => {
    render(<IDMGenerator />);
    const amountSlider = screen.getByLabelText('Amount:');
    fireEvent.change(amountSlider, { target: { value: '5' } });
    fireEvent.click(screen.getByRole('button', { name: 'Generate' }));
    const names = document.querySelectorAll('.name');
    expect(names.length).toBe(5);
  });

  it('includes custom input in generated names', () => {
    render(<IDMGenerator />);
    const customInput = screen.getByLabelText('Custom Input:');
    fireEvent.change(customInput, { target: { value: 'test' } });
    fireEvent.click(screen.getByRole('button', { name: 'Generate' }));
    const names = document.querySelectorAll('.name');
    expect(names[0].textContent).toContain('test');
  });

  it('accumulates names across multiple Generate clicks', () => {
    render(<IDMGenerator />);
    const button = screen.getByRole('button', { name: 'Generate' });
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    const names = document.querySelectorAll('.name');
    expect(names.length).toBe(3);
  });

  it('has a back link pointing to /projects', () => {
    render(<IDMGenerator />);
    const backLink = screen.getByText(/back/i).closest('a');
    expect(backLink).toHaveAttribute('href', '/projects');
  });

  it('renders the logo image', () => {
    render(<IDMGenerator />);
    expect(screen.getByAltText('cat')).toBeInTheDocument();
  });

  it('title element is present in the DOM (CSS hides it on mobile)', () => {
    render(<IDMGenerator />);
    expect(document.querySelector('.title')).toBeInTheDocument();
  });
});
