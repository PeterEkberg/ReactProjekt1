
import { Routes } from './routes/Routes';
import './shared/css/Global.css'
import { UserProvider } from './shared/provider/UserProvider'
import { CharacterProvider } from './shared/provider/CharacterProvider'
import { Navigation } from './components/navigation/Navigation'
function App() {
  return (
    <UserProvider>
      <CharacterProvider>
        <Routes>
          {/*       <Greeting name={"Peter"} color={"green"}/> */}
          <Navigation />
        </Routes>
      </CharacterProvider>
    </UserProvider>
  );
}

export default App;
