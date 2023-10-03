import React from "react";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Autorization from "./pages/autorization";
import Todo from "./pages/todoList";
import Slider from "./pages/slider";
import Navbar from "./pages/homePage";
import UserData from "./pages/userGreeting";


function App (){
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserData/>}/>
        <Route path="/todoList" element={<Todo />} />
        <Route path="/autorization" element={<Autorization />} />
        <Route path="/slider" element={<Slider />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;