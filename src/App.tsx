import { AuthContextProvider } from './contexts/Authcontext'
import { BrowserRouter, Route, Switch } from "react-router-dom";


import { Room } from './pages/Room';
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/Newroom";
import { AdminRoom } from './pages/AdminRoom';





function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch> 
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
        <Route path="/rooms/:id" component={Room} />
        <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch> 
      </AuthContextProvider>      
    </BrowserRouter>
  );
}

export default App;
