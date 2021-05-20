import { render, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '@/components/header';

describe('Header test', () => {
  test('should jump to not-found page when click NotFound link', async () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );

    expect(global.location.pathname).toBe('/');

    fireEvent.click(getByText('NotFound'));

    await waitFor(() => {
      expect(global.location.pathname).toBe('/not-found');
    });
  });
});
