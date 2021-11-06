import { render } from '@testing-library/react';

import WebShellUiNavigationBar from './web-shell-ui-navigation-bar';

describe('WebShellUiNavigationBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebShellUiNavigationBar />);
    expect(baseElement).toBeTruthy();
  });
});
