import "./about.css"
import about from "../../img/abouts.png"
import award from "../../img/awards.png"
import { ThemeContext } from "../../Context";
import { useContext } from "react";
const About = ()=>{
    const theme = useContext(ThemeContext);
    return(
        <div className="a">
            <div className="a-left">
            <div className="a-card bg" style={{backgroundColor : theme.state.darkMode ? "rgb(227, 208, 208)" : "#333"}}></div>
            <div className="a-card">
                <img src={about} alt="" className="a-img" 
                />
            </div>
            </div>
            <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">It is a long established fact that a reader will be distracted by the
          readable content
          If you're more in the design space, show off your skills by creating your own awesome logo for your online portfolio website.</p> <br></br>
            <p className="a-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Eum dolor in delectus sapiente expedita nisi itaque laudantium qui aspernatur provident reiciendis ad, 
                commodi vel tempore esse recusandae est culpa fuga iusto enim necessitatibus vero doloremque. 
                Voluptatem similique voluptas, atque nam culpa modi. Repudiandae nam, 
                eius voluptatem consequuntur temporibus amet modi.</p>
            <div className="a-award">
                <img src={award} alt="" className="a-award-img"></img>
                <div className="a-award-texts">
                    <h4 className="a-award-title" style={{color : theme.state.darkMode ? "rgb(112, 112, 244)" : "#555"}}>International Technical Content Writer Awards 2021</h4>
                    <p className="a-award-texts">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Ducimus voluptatibus animi inventore repellat dolores, 
                        vel fuga sed voluptatem amet nam!
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About;