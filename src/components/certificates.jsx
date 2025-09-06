import '../styles/certificate.css'
import ResponsiveWDfcc from '../Images/certificates/PreviewRWD.png'
import JSAlgorithmDtSt from '../Images/certificates/PreviewJADS.png'

import { nanoid } from '@reduxjs/toolkit'

const certificates =[["Responsive Web Design",ResponsiveWDfcc,"https://www.freecodecamp.org/certification/zakhe/responsive-web-design"],["JavaScript Algorithms & Data Structures",JSAlgorithmDtSt,"https://www.freecodecamp.org/certification/zakhe/javascript-algorithms-and-data-structures-v8"],]

export default function Certificates(){

    const CertificateElements=certificates.map(cert=>MakeCertificate(cert))

    return(CertificateElements)
}

function MakeCertificate(data){


    return(
    <div key={nanoid()} className='certificate'>
        <h1 className='certName'>{data[0]}</h1>
        <img className='certPreview' src={data[1]} alt=""/>
        <p className="viewCert">
            <a target='_blank' href={data[2]}>View Certificate</a>
        </p>
    </div>)
}