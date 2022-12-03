import {
  Stack
} from "@chakra-ui/react";

import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';

import Footer from "./components/Footer";

import NavBar from "./components/NavBar";
import MainScreen from "./Screen/MainScreen";
import PostCardScreen from "./Screen/PostCardScreen";

function App() {

  return (
    <Router>
    <Stack>
      <NavBar/>
      <Routes>
          <Route  index element={<MainScreen/>} />
          <Route path="CardContent/:id" element={<PostCardScreen />}/>
       </Routes>
      <Footer/>
    </Stack>
    </Router>
  );
}

export default App;
