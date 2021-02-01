
import {Routes} from './routes/Routes';
import './shared/css/Global.css'
import {UserProvider} from './shared/provider/UserProvider'
import {Navigation} from './components/navigation/Navigation'
function App() {
  return (
    <UserProvider>
    <Routes>
{/*       <Greeting name={"Peter"} color={"green"}/> */}
      <Navigation/>
    </Routes>
    </UserProvider>
  );
}

export default App;
