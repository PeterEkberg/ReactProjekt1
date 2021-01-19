
import {Greeting} from './components/greeting/Greeting';
import {Routes} from './routes/Routes';
import {DesktopNavigation} from './components/navigation/desktopnavigation/DesktopNavigation'
function App() {
  return (
    <Routes>
{/*       <Greeting name={"Peter"} color={"green"}/> */}
      <DesktopNavigation/>
    </Routes>
  );
}

export default App;
