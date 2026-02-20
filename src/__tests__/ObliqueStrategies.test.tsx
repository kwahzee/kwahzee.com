import { render, screen, fireEvent } from '@testing-library/react';
import ObliqueStrategies from '@/app/projects/oblique-strategies/page';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

jest.mock('next/font/google', () => ({
  Londrina_Outline: () => ({ style: { fontFamily: 'Londrina_Outline' } }),
  Rock_3D: () => ({ style: { fontFamily: 'Rock_3D' } }),
  Yuji_Syuku: () => ({ style: { fontFamily: 'Yuji_Syuku' } }),
}));

const STRATEGIES_COUNT = 114;

describe('Oblique Strategies', () => {
  it('shows initial deck text on load', () => {
    render(<ObliqueStrategies />);
    expect(screen.getByText('Over One Hundred Worthwhile Dilemmas')).toBeInTheDocument();
  });

  it('has a Draw Card button', () => {
    render(<ObliqueStrategies />);
    expect(screen.getByRole('button', { name: 'Draw Card' })).toBeInTheDocument();
  });

  it('shows a strategy after clicking the button', () => {
    render(<ObliqueStrategies />);
    fireEvent.click(screen.getByRole('button', { name: 'Draw Card' }));
    expect(screen.queryByText('Over One Hundred Worthwhile Dilemmas')).not.toBeInTheDocument();
  });

  it('shows a different strategy each click without repeating', () => {
    render(<ObliqueStrategies />);
    const button = screen.getByRole('button', { name: 'Draw Card' });
    const seen = new Set<string>();

    for (let i = 0; i < 10; i++) {
      fireEvent.click(button);
      const card = document.querySelector('.card');
      expect(card).not.toBeNull();
      const text = card!.textContent ?? '';
      expect(seen.has(text)).toBe(false);
      seen.add(text);
    }
  });

  it('resets to initial text after all strategies are exhausted', () => {
    render(<ObliqueStrategies />);
    const button = screen.getByRole('button', { name: 'Draw Card' });

    for (let i = 0; i < STRATEGIES_COUNT; i++) {
      fireEvent.click(button);
    }

    expect(screen.getByText('Over One Hundred Worthwhile Dilemmas')).toBeInTheDocument();
  });

  it('has a back link pointing to /projects', () => {
    render(<ObliqueStrategies />);
    const backLink = screen.getByText(/back/i).closest('a');
    expect(backLink).toHaveAttribute('href', '/projects');
  });

  it('back link has home-btn class for mobile bottom positioning', () => {
    render(<ObliqueStrategies />);
    const backLink = screen.getByText(/back/i).closest('a');
    expect(backLink).toHaveClass('home-btn');
  });
});
