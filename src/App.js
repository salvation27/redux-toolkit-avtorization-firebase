import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import { Switch, Route } from "react-router-dom";
import Nav from './components/Nav/Nav'
import AddProductPage from './pages/AddProductPage'
import Product from './pages/Product'

function App() {
  return (
    <>
    <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/addproduct" component={AddProductPage} />
        <Route exact path="/product" component={Product} />
      </Switch>
    </>
  );
}

export default App;
