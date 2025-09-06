import '../styles/Photoshop.css'
import Party1 from '../Images/Photoshops/Party.jpg'
import Party2 from '../Images/Photoshops/Party2.jpg'
import Grad from '../Images/Photoshops/grad.jpg'
import AllGrads from '../Images/Photoshops/AllGrads.png'
import Anime1 from '../Images/Photoshops/anim1.jpg'
import Anime2 from '../Images/Photoshops/anim2.png'
import Anime3 from '../Images/Photoshops/anim3.png'
import Anime4 from '../Images/Photoshops/smoke.png'
import BeeCert from '../Images/Photoshops/beeCert.png'
import BeePoster from '../Images/Photoshops/beePoster.png'
import Jd3 from '../Images/Photoshops/jd3.jpg'
import Kid1OG from '../Images/Photoshops/kid1OG.jpg'
import Kid2OG from '../Images/Photoshops/kid2OG.jpg'
import Kid1Edit from '../Images/Photoshops/kid1Edit.png'
import Kid2Edit from '../Images/Photoshops/kid2Edit.png'
import KbsLogo from '../Images/Photoshops/kbsLogo.png'
import GoldKing from '../Images/Photoshops/goldKing.jpg'
import { Link } from 'react-router'



export default function Photoshop(){

    return(
        <div className="photoshop">
            <h1 className='mainTittle'>PHOTOSHOP PROJECTS:</h1>
            <article>
                <h2 className='explain'>Used Photoshop to design birthday party invitation posters</h2>
                <div className='dualPics'>
                    <img src={Party1} alt="photoshop Image" />
                    <img src={Party2} alt="photoshop Image" />
                </div>
            </article>

            <article>
                <h2 className='explain'>Designed and individually replaced backgrounds for over 200 primary learners for graduation framed photos</h2>
                <div className='dualPics'>
                    <img src={Grad} alt="photoshop Image" />
                    <img src={AllGrads} alt="photoshop Image" />
                </div>
            </article>

            <article>
                <h2 className='explain'>Used Photoshops' pen tool to manually re-imagine and design cartoon versions of potrait photos</h2>
                <div className='dualPics'>
                    <img src={Anime1} alt="photoshop Image" />
                    <img src={Anime2} alt="photoshop Image" />
                    <img src={Anime3} alt="photoshop Image" />
                    <img src={Anime4} alt="photoshop Image" />
                </div>
            </article>

             <article>
                <h2 className='explain'>Worked with the stuff of a local school to create a poster and certificate for the schools' event</h2>
                <div className='dualPics'>
                    <img src={BeePoster} alt="photoshop Image" />
                    <img src={BeeCert} alt="photoshop Image" />
                </div>
            </article>

            <article>
                <h2 className='explain'>'A rising start', helped a small local artist design their cover photo for their song</h2>
                <div className='dualPics'>
                    <img src={Jd3} alt="photoshop Image" />
                </div>
            </article>

            <article>
                <h2 className='explain'>After camera-man forgets taking pictures of 2 learners during a school trip photoshoot, I demonstrated good background removal, replacing and blending techniques</h2>
                <div className='dualPics'>
                    <div className='beforeAfter'>
                        <img src={Kid1OG} alt="photoshop Image" />
                    <img src={Kid1Edit} alt="photoshop Image" />

                    </div>
                    <div className='beforeAfter'>
                        <img src={Kid2OG} alt="photoshop Image" />
                    <img src={Kid2Edit} alt="photoshop Image" />
                    </div>                    
                </div>
            </article>

             <article>
                <h2 className='explain'>Finally, my logo which is used for my google play store games and a cool picture of me!</h2>
                <div className='dualPics'>
                    <img src={KbsLogo} alt="photoshop Image" />
                    <img src={GoldKing} alt="photoshop Image" />
                </div>
            </article>
            <a href="#"><button className="theEnd">Back to top</button></a>
            <Link to={'/'} className="theEnd">Back to Portfolio</Link>

        </div>
    )
}