import { render } from '@testing-library/react';

import WebShellUiTopHeader from './web-shell-ui-top-header';

describe('WebShellUiTopHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebShellUiTopHeader />);
    expect(baseElement).toBeTruthy();
  });
});
