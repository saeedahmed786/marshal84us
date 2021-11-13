import React from 'react'
import { Link } from 'react-router-dom'

export const Panel = () => {
    return (
        <div className="panel">
            <div className="panel-body">
                <ul className="nav nav-tabs nav-tabs-line border-0">
                    <li className="nav-item" role="presentation"><Link className="nav-link  px-0 mr-20 " to="/projects"  ><i className="icon wb-home" aria-hidden="true"></i> Generative Art </Link></li>
                    <li className="nav-item" role="presentation"><Link className="nav-link px-0 mx-20" to="/project-details" ><i className="icon wb-user" aria-hidden="true"></i> Generative Storytelling </Link></li>
                    <li className="nav-item" role="presentation"><Link className="active nav-link px-0 mx-20" to="/projects" ><i className="icon wb-user" aria-hidden="true"></i> Contract ERC 721 </Link></li>
                    <li className="nav-item" role="presentation"><Link className="nav-link px-0 mx-20" to="/project-type" ><i className="icon wb-user" aria-hidden="true"></i> Minting Landing Page </Link></li>
                </ul>
            </div>
        </div>
    )
}
