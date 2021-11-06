import { render } from '@testing-library/react';

import WebShellUiPlayerUtility from './web-shell-ui-player-utility';

describe('WebShellUiPlayerUtility', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebShellUiPlayerUtility />);
    expect(baseElement).toBeTruthy();
  });
});
