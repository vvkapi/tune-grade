import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/navbar.jsx";
import {Auth} from "./pages/auth/index.jsx";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from './theme';

function App() {
    return (
        <div>
            <ChakraProvider theme={theme}>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path={"/"} element={<h1>Home</h1>}/>
                    <Route path={"/auth"} element={<Auth />}/>
                    <Route path={"/rated"} element={<h1>Rated</h1>}/>
                </Routes>
            </Router>
            </ChakraProvider>
        </div>
    );
}

export default App;
