import { Link, Route } from 'react-router-dom';
import { WebShellUiNavigationBar } from '@react-spotify/ui/navigation-bar';
import { WebShellFeatureWebLayout } from '@react-spotify/shell/feature/web-layout';
import { WebShellUiMainView } from '@react-spotify/ui/main-view';
import { WebShellUiPlayerPlayback } from '@react-spotify/ui/player-playback';
import { WebShellUiTrackInfo } from '@react-spotify/ui/track-info';
import { WebShellUiNavigationMenuList } from '@react-spotify/ui/navigation-menu-list';
import { WebShellUiPlayerControl } from '@react-spotify/ui/player-control';
import { WebShellUiPlayingBar } from '@react-spotify/ui/playing-bar';
import { WebShellUiPlayerUtility } from '@react-spotify/ui/player-utility';
import { WebShellUiTopHeader } from '@react-spotify/ui/top-header';

export function App() {
  return (
    <button className='bg-yellow-400'
            name='hello'>
      {' '}
      hello fdlksnflksdnflksdnflksdnflsdnflksnflksnflksdnflnsdlfndslk
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role='navigation'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/web-layout'>WebShellFeatureWebLayout</Link>
          </li>
          <li>
            <Link to='/player-utility'>WebShellUiPlayerUtility</Link>
          </li>
          <li>
            <Link to='/player-playback'>WebShellUiPlayerPlayback</Link>
          </li>
          <li>
            <Link to='/player-control'>WebShellUiPlayerControl</Link>
          </li>
          <li>
            <Link to='/track-info'>WebShellUiTrackInfo</Link>
          </li>
          <li>
            <Link to='/playing-bar'>WebShellUiPlayingBar</Link>
          </li>
          <li>
            <Link to='/top-header'>WebShellUiTopHeader</Link>
          </li>
          <li>
            <Link to='/main-view'>WebShellUiMainView</Link>
          </li>
          <li>
            <Link to='/navigation-playlist'>WebShellUiNavigationPlaylist</Link>
          </li>
          <li>
            <Link to='/navigation-menu-list'>WebShellUiNavigationMenuList</Link>
          </li>
          <li>
            <Link to='/navigation-bar'>WebShellUiNavigationBar</Link>
          </li>
          <li>
            <Link to='/navigation-bar'>
              DuyphuongProjectReactSpotifySpotifyLibsWebShellUiNavigationBar
            </Link>
          </li>
          <li>
            <Link to='/navigation-bar'>NavigationBar</Link>
          </li>
          <li>
            <Link to='/page-2'>Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path='/'
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to='/page-2'>Click here for page 2.</Link>
          </div>
        )}
      />
      <Route path='/web-layout'
             component={WebShellFeatureWebLayout} />
      <Route path='/player-utility'
             component={WebShellUiPlayerUtility} />
      <Route path='/player-playback'
             component={WebShellUiPlayerPlayback} />
      <Route path='/player-control'
             component={WebShellUiPlayerControl} />
      <Route path='/track-info'
             component={WebShellUiTrackInfo} />
      <Route path='/playing-bar'
             component={WebShellUiPlayingBar} />
      <Route path='/top-header'
             component={WebShellUiTopHeader} />
      <Route path='/main-view'
             component={WebShellUiMainView} />
      {/*<Route*/}
      {/*  path='/navigation-playlist'*/}
      {/*  component={WebShellUiNavigationPlaylist}*/}
      {/*/>*/}
      <Route
        path='/navigation-menu-list'
        component={WebShellUiNavigationMenuList}
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
      {/* END: routes */}
    </button>
  );
}

export default App;
