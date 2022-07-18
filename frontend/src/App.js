import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ToDoApp from "./components/ToDoApp";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/todoapp" element={<ToDoApp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
