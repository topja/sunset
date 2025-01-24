import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ImageCarousel from './ImageCarousel';

const mockImages = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
];

vi.mock('react-multi-carousel', () => ({
  __esModule: true,
  default: vi.fn(({ children }) => <div>{children}</div>),
}));

describe('ImageCarousel Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('closes the lightbox when the close button is clicked', async () => {
    render(<ImageCarousel images={mockImages} />);

    const images = screen.getAllByRole('img');
    fireEvent.click(images[0]);

    const closeButton = screen.getByLabelText('Close'); 
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
    });
  });

  it('opens the lightbox when an image is clicked', () => {
    render(<ImageCarousel images={mockImages} />);

    const images = screen.getAllByRole('img');
    fireEvent.click(images[1]);

    const lightbox = screen.getByRole('presentation'); 
    expect(lightbox).toBeInTheDocument();
  });

  it('navigates to the next image in the lightbox', () => {
    render(<ImageCarousel images={mockImages} />);

    const images = screen.getAllByRole('img');
    fireEvent.click(images[0]);

    const nextButton = screen.getByLabelText('Next'); 
    fireEvent.click(nextButton);

    const displayedImage = screen.getAllByRole('img')[1]; 
    expect(displayedImage).toHaveAttribute('src', mockImages[1]);
  });

  it('navigates to the previous image in the lightbox', () => {
    render(<ImageCarousel images={mockImages} />);

    const images = screen.getAllByRole('img');
    fireEvent.click(images[2]);

    const prevButton = screen.getByLabelText('Previous'); 
    fireEvent.click(prevButton);

    const displayedImage = screen.getAllByRole('img')[1]; 
    expect(displayedImage).toHaveAttribute('src', mockImages[1]);
  });
});
