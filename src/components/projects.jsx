import '../styles/project.css'
import PhotoshopPrj from '../Images/ProjectThumbnail/Photoshop.png'
import KbsGames from '../Images/ProjectThumbnail/KbsGamesPR.png'
import TodoList from '../Images/ProjectThumbnail/TodoList.png'
import BizCard from '../Images/ProjectThumbnail/BizCard.png'
import WeCode from '../Images/ProjectThumbnail/WeCode.png'
import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router'


const projects=[
    {name:"Business Card Maker",image:BizCard,
    codeLink:"",liveLink:"https://play.google.com/store/apps/dev?id=8952403180123485246&hl=en_US",about:"App that dynamically designs business cards.",
    stacks:["","Bootstrap","React"]},

    {name:"Bootcamp homepage",image:WeCode, codeLink:"https://github.com/ZakheNet/WeCodeBootcamp",liveLink:"https://zakhenet.github.io/WeCodeBootcamp/",about:"A coding bootcamp landing homepage",
    stacks:["","Bootstrap","Vanilla JavaScript"]},
    {name:"Todo List App",image:TodoList,

    codeLink:"",liveLink:"https://play.google.com/store/apps/dev?id=8952403180123485246&hl=en_US",about:"A fully functional TodoList app.",
    stacks:["React","",""]},

    {name:"Photoshop Work",image:PhotoshopPrj,
    codeLink:"",liveLink:"",about:"My Adobe Photoshop projects.",
    stacks:["","Photoshop",""]},

    {name:"PlayStore Games",image:KbsGames,
    codeLink:"",liveLink:"https://play.google.com/store/apps/dev?id=8952403180123485246&hl=en_US",about:"My published android games made with Unity Engine.",
    stacks:["C#","Unity 2d","Photoshop"]},
]





export default function Projects(){

    const ProjectElements=projects.map(cert=>MakeProject(cert))

    return(ProjectElements)
}

function MakeProject(data){

    const StackElements=data.stacks.map(stack=>MakeStack(stack))


    return(
    <div className='project' key={nanoid()}>
       <h1 className='projectName'>{data.name}</h1>
       <div className="views">
        <img className='prjImage' src={data.image}/>
        <p className="description">
        {data.about}
       </p>
       </div>
       <div className="stacksUsed">
        <p className="stacksTittle">Stacks Used:</p>
        <div className="stacks">
            {StackElements}
        </div>
       </div>
       
       <div className="actions">
        {data.liveLink==""?<></>:<div className="actionPack">
            <p className="actionLabel">see</p>
            <button className="action">LIVE</button>
        </div>}
        {data.codeLink==""?<></>:<div className="actionPack">
            <p className="actionLabel">see</p>
            <a href={data.codeLink}><button className="action">CODE</button></a>
        </div>}
       </div>
    </div>)
}

function MakeStack(stack){
    if(stack=="")return
    return(
        <p className={`stack${stack} stack`}>{stack}</p>
    )
}