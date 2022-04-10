import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppNavigator } from "./Components/AppNavigator";
import { Pokedex } from "./Containers/Pokedex";

function App() {
  return (
   <Router>
    <AppNavigator />
    <Route path="/" component={Pokedex} />
   </Router> 
  );
}

export default App;
