import { render } from '@testing-library/react';

import WebShellFeatureWebLayout from './web-shell-feature-web-layout';

describe('WebShellFeatureWebLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebShellFeatureWebLayout />);
    expect(baseElement).toBeTruthy();
  });
});
