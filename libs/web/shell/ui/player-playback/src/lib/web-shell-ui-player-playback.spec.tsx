import { render } from '@testing-library/react';

import WebShellUiPlayerPlayback from './web-shell-ui-player-playback';

describe('WebShellUiPlayerPlayback', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebShellUiPlayerPlayback />);
    expect(baseElement).toBeTruthy();
  });
});
