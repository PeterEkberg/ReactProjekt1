
import {Greeting} from './components/greeting/Greeting';
import {Routes} from './routes/Routes';
import './shared/css/Global.css'
import {DesktopNavigation} from './components/navigation/desktopnavigation/DesktopNavigation'
import {UserProvider} from './shared/provider/UserProvider'
function App() {
  return (
    <UserProvider>
    <Routes>
{/*       <Greeting name={"Peter"} color={"green"}/> */}
      <DesktopNavigation/>
    </Routes>
    </UserProvider>
  );
}

export default App;
