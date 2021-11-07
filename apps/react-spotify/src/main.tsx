import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/app';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { WebShellFeatureWebLayout } from '@react-spotify/shell/feature/web-layout';
import { WebShellUiNavigationBar } from '@react-spotify/ui/navigation-bar';
import { WebShellUiMainView } from '@react-spotify/ui/main-view';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Route path='/web-layout'
             component={WebShellFeatureWebLayout} />
      <Route path='/player-utility'
             component={WebShellFeatureWebLayout} />
      <Route path='/player-playback'
             component={WebShellUiNavigationBar} />
      <Route path='/player-control'
             component={WebShellFeatureWebLayout} />
      <Route path='/track-info'
             component={WebShellUiNavigationBar} />
      <Route path='/playing-bar'
             component={WebShellFeatureWebLayout} />
      <Route path='/top-header'
             component={WebShellUiNavigationBar} />
      <Route path='/main-view'
             component={WebShellUiMainView} />
      <Route
        path='/navigation-playlist'
        component={WebShellUiNavigationBar}
      />
      <Route
        path='/navigation-menu-list'
        component={WebShellUiNavigationBar}
      />
      <Route path='/navigation-bar'
             component={WebShellUiNavigationBar} />
      <Route
        path='/page-2'
        exact
        render={() => (
          <div>
            <Link to='/'>Click here to go back to root page.</Link>
          </div>
        )}
      />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
