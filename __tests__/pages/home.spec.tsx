import { render } from '@testing-library/react';
import Home from '@/pages/home';

describe('Home test', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Webpack React Template')).toBeInTheDocument();
  });
});
