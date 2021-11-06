import { render } from '@testing-library/react';

import WebShellUiNavigationMenuList from './web-shell-ui-navigation-menu-list';

describe('WebShellUiNavigationMenuList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebShellUiNavigationMenuList />);
    expect(baseElement).toBeTruthy();
  });
});
