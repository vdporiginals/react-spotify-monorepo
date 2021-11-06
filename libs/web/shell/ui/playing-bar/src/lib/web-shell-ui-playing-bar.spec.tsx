import { render } from '@testing-library/react';

import WebShellUiPlayingBar from './web-shell-ui-playing-bar';

describe('WebShellUiPlayingBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebShellUiPlayingBar />);
    expect(baseElement).toBeTruthy();
  });
});
