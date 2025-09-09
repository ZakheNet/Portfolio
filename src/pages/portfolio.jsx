import '../styles/Portfolio.css'
import hero from '../Images/hero3.png'
import SkillSet from '../components/skillSet'
import Certificates from '../components/certificates'
import Projects from '../components/projects'

export default function Portfolio(){
    return(

        <div className="portfolio">
            <section className="heroSection">

            <div className='heroStuff'>
                <div className='heroBox justify-content-center justify-content-md-between'>
                    <div style={{display:'flex',flexDirection:"column",justifyContent:'center'}}>
                         <div className="heroInfo">
                        <p className="greeting">Hello, World!</p>
                        <div className="myName">
                            <p className='hovLtr'>I</p>
                            <p className='hovLtr'>'</p>
                            <p className='hovLtr'>m </p>
                            <p className='hovLtr'> Z</p>
                            <p className='hovLtr'>A</p>
                            <p className='hovLtr'>K</p>
                            <p className='hovLtr'>H</p>
                            <p className='hovLtr'>E</p>  
                        </div>
                        <p className="role">Frontend Web Developer <span style={{}}></span></p>
                    </div>
                    </div>
                    <div>
                    <div className="heroContainer">
                    <div className="heroImgBox">
                        <img src={hero} alt="My photo" className='hero'/>
                    </div>
                    </div>
                        <div className="call">
                            +27 60 436 1116
                        </div>
                        <div className="mail">
                            ZakheNet@gmail.com
                        </div>
                    </div>
                </div>
                
                <div className="about">
                    <p className="bio">Im a passionate self-taught web developer who enjoys solving problems, building fast and responsive web Apps</p>
                </div>
                

            </div>

            </section>
            <section id='skills' className="skills">
                <h1 className="sectionTittle">Skills</h1>
                <div className="mySkills">
                    <SkillSet />
                </div>
            </section>
            <section id='projects' className='projects'>
                <h1 className="sectionTittle">Projects</h1>
                <div className="projectsBox">
                    <Projects />
                </div>

            </section>
            <section className='certificates'>
                <h1 className="sectionTittle">Certificates</h1>
                <div className="certified">
                    <Certificates />
                </div>

            </section>
            
        </div>    
    )
}