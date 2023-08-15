import "./App.css";

import Home from "./components/Home/Home";
import MediaDetails from "./components/MediaDetails/MediaDetails";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import LittleSwiper from "./components/LittleSwiper/LittleSwiperProfil";
import Profil from "./components/Profil/Profil";
import Movies from "./components/Movies/Movies";
import Offer from "./components/Offers/Offer";
function App() {
  return (
    <div className="App">
      {/* <NavBar></NavBar> */}
      {/* <Profil /> */}
      {/* <Home /> */}
      {/* <Movies /> */}
      {/* <MediaDetails /> */}
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      <Offer />
    </div>
  );
}

export default App;
