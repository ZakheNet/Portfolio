import '../styles/project.css'
import PhotoshopPrj from '../Images/Photoshops/anim3.png'
import KbsGames from '../Images/ProjectThumbnail/KbsGamesPR.png'
import TodoList from '../Images/ProjectThumbnail/TodoList.png'
import BizCard from '../Images/ProjectThumbnail/BizCard.png'
import WeCode from '../Images/ProjectThumbnail/WeCode.png'
import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router'


const projects=[{name:"Business Card Maker",image:BizCard,isLive:false,isCode:false,codeLink:"",liveLink:"https://play.google.com/store/apps/dev?id=8952403180123485246&hl=en_US",about:"My original idea of a app that designs business cards."},{name:"Bootcamp homepage",image:WeCode,isLive:false,isCode:false,codeLink:"",liveLink:"",about:"An enrollment homepage for an online coding bootcamp"},{name:"Todo List App",image:TodoList,isLive:false,isCode:false,codeLink:"",liveLink:"https://play.google.com/store/apps/dev?id=8952403180123485246&hl=en_US",about:"A simple yet fully functional TodoList app."},{name:"Photoshop Work",image:PhotoshopPrj,isLive:true,isCode:false,codeLink:"",liveLink:"/Photoshop",about:"Some of my Adobe Photoshop projects over the years."},{name:"PlayStore Games",image:KbsGames,isLive:true,isCode:false,codeLink:"",liveLink:"https://play.google.com/store/apps/dev?id=8952403180123485246&hl=en_US",about:"My published android games made with Unity Engine."},]

export default function Certificates(){

    const CertificateElements=projects.map(cert=>MakeCertificate(cert))

    return(CertificateElements)
}

function MakeCertificate(data){


    return(
    <div className='project' key={nanoid()}>
        <h1 className='projectName'>{data.name}</h1>
        <div className="projectBody">
            <div className="picInfoPair">
                <div className="projectImgBox">
                <img className='projectImg' src={data.image} alt="project preview" />
                </div>
                <p className="projectAbout">
                    {data.about}
                </p>
            </div>
            <div className="action">
                {data.liveLink[0]=='/'?(data.isLive?<Link to={data.liveLink} className='linkBtn' >See LIVE</Link>:<></>):(data.isLive?<a target='_blank' href={data.liveLink} className='linkBtn' >See LIVE</a>:<></>)}
                {data.isCode?<a target='_blank' href={data.codeLink} className='linkBtn' >View Code</a>:<></>}
            </div>
        </div>
    </div>)
}