import { render } from '@testing-library/react';

import WebShellUiNavigationPlaylist from './web-shell-ui-navigation-playlist';

describe('WebShellUiNavigationPlaylist', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebShellUiNavigationPlaylist />);
    expect(baseElement).toBeTruthy();
  });
});
