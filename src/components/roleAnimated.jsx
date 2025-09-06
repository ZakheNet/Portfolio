import { useState } from "react"

const roles=["Frontend Web Developer","Frontend freelancer","I develop for the web","Web App Coder"]

export default function Role(){
    let index=0
    const [role,setRole]=useState("")

    while(true){
        console.log("heyy")
        wait(1)
    return(<p>{role}</p>)
    }

}

function wait(sec){
    let tNow=Date.now()
    while(tNow<tNow+(sec*1000)){
        continue
    }
}