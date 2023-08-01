import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Movies from "./components/Home";
import MediaDetails from "./components/MediaDetails/MediaDetails";
import Test from "./components/Test"
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Offer from "./components/Offers/Offer";



function App() {
  return (
    <div className="App">
      {/* <NavBar></NavBar>
      <Home />
      <Movies /> */}
      <MediaDetails />
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <Offer /> */}
    </div>
  );
}

export default App;
