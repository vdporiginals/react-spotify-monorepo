import { render } from '@testing-library/react';

import WebShellUiMainView from './web-shell-ui-main-view';

describe('WebShellUiMainView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebShellUiMainView />);
    expect(baseElement).toBeTruthy();
  });
});
