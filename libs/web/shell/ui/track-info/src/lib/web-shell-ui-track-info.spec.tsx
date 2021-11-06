import { render } from '@testing-library/react';

import WebShellUiTrackInfo from './web-shell-ui-track-info';

describe('WebShellUiTrackInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebShellUiTrackInfo />);
    expect(baseElement).toBeTruthy();
  });
});
