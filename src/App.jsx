import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/navbar.jsx";
import {Auth} from "./pages/auth/index.jsx";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from './theme';
import {Home} from "./pages/home/index.jsx";

function App() {
    return (
        <div>
            <ChakraProvider theme={theme}>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path={"/"} element={<Home />}/>
                    <Route path={"/auth"} element={<Auth />}/>
                    <Route path={"/rated"} element={<h1>Rated</h1>}/>
                </Routes>
            </Router>
            </ChakraProvider>
        </div>
    );
}

export default App;
