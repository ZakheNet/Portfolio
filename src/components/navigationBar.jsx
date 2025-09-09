import { Link } from "react-router"
import "../styles/Navigation.css"
import background from '../Images/background.jpg'
import { useLocation } from "react-router"
import BackIcon from '../Images/Icons/Back.png'



export default function About(){

    let location =useLocation()

return(
<div>

    <nav
        className="navbar rounded-pill fixed-top m-2 p-0 navbar-expand-md navbar-dark" style={{background:'red'}}
    >
        <div className="container-fluid">
            {location.pathname=='/' || location.pathname=='/Portfolio/'?<p className="portfolioTittle">PORTFOLIO</p>:<Link to={'/'} className="backBox m-2"><img src={BackIcon} /> <p className="backBtn m-0 fw-bold">BACK</p></Link>}
            <button
                 class="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navLinks fw-bold fs-5 justify-content-end gap-4  navbar-collapse" id="collapsibleNavId">
                <ul className="d-flex flex-column flex-md-row gap-4 m-0 p-0 align-items-end">
                    <Link to="/">Home</Link>
                   <a href="#skills">SKills</a>
                   <a href="#projects">Project</a>
                   <a href="mailto:ZakheNet@gmail.com" target="_blank">Email-Me</a>
                </ul>
            </div>
        </div>
    </nav>


    

{/* 
    <section>
        {location.pathname=='/'?<p className="portfolioTittle">PORTFOLIO</p>:<Link to={'/'} className="backBox"><img src={BackIcon} /> <p className="backBtn">BACK</p></Link>}
        <div className="navLinks">
            <Link to="/">Home</Link>
            <a>Skills</a>
            <a>Projects</a>
            <a href="mailto:ZakheNet@gmail.com" target="_blank">Contact</a>
            <button className="themeSet"></button>
        </div>
        
    </section> */}
    <div className="background"><img src={background} alt="" /></div>
</div>
)}