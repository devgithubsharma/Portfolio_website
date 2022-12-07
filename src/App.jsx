import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/Contact";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./Context";
import { useContext } from "react";
const App =()=>{
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return <div style={{backgroundColor: darkMode ? "black" : "white" , color: darkMode ? "white" : "black"}}>
        <Toggle />
        <Intro />
        <About />
        <ProductList />
        <Contact />
    </div>
};

export default App;