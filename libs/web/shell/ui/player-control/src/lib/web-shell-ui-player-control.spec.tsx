import { render } from '@testing-library/react';

import WebShellUiPlayerControl from './web-shell-ui-player-control';

describe('WebShellUiPlayerControl', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebShellUiPlayerControl />);
    expect(baseElement).toBeTruthy();
  });
});
