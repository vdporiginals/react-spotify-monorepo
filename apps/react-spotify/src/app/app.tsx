import { Link, Route } from 'react-router-dom';

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

      {/* END: routes */}
    </button>
  );
}

export default App;
