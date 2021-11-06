import { render } from '@testing-library/react';

import DuyphuongProjectReactSpotifySpotifyLibsWebShellUiNavigationBar from './~-duyphuong-project-react-spotify-spotify-libs-web-shell-ui-navigation-bar';

describe('DuyphuongProjectReactSpotifySpotifyLibsWebShellUiNavigationBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DuyphuongProjectReactSpotifySpotifyLibsWebShellUiNavigationBar />
    );
    expect(baseElement).toBeTruthy();
  });
});
