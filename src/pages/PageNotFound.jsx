import { Link } from "react-router"

const ParentStyle ={height:"98vh",display:'flex',justifyContent:'center',alignItems:'center',color:'white',fontFamily:'arial',fontSize:'1.6rem',flexDirection:'column'}
const LinkStyle={color:'white'}

export default function NotFound(){
    return(
        <div style={ParentStyle} className="notFound">
            <h1>PAGE NOT FOUND!</h1>
            <Link style={LinkStyle} to='/'>Go back to Portfolio</Link>
        </div>
    )
}


