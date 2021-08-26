import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Header, Navbar, Footer, About, Contact } from "./components/common";

function App() {
  return (
    <div className="App">
      <Header text="This is header section" data_obj="Alina" />
      <Navbar />
      <Footer text="LinkedIn" />
      <Switch>
        <Route exact path="/" />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </div>
  );
}
export default App;
