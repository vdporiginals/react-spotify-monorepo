import { render } from '@testing-library/react';

import App from './app';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('should render successfully', () => {
    // const { baseElement } = render(<App />);
    const tree = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(tree).toBeTruthy();
  });
});
