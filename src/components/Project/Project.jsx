import React, { useState } from 'react'
import './Project.css'
import Button from 'react-bootstrap/Button'

const Project = ({image, title, desciption, code, demo}) => {
    const [open, setOpen] = useState(false);

    return(
        
        <div className="project-image">
            <img src={image} alt="project" />
            <div className="project-container">
                <div className="project-content">
                    <h1 className="title">{title}</h1>
                    <p>{desciption}</p>
                    <Button variant="info" target="_blank" className="btns" href={code} alt="code">Project Code</Button>
                    <Button variant="info" target="_blank" className="btns" href={demo}>Visit Site</Button>
                </div>
            </div>
        </div>
    );

}

export default Project