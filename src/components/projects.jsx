import React from 'react'
import proyects from '../data/proyects.json';
import skillsData from '../data/skills.json';
import { BsGithub } from 'react-icons/bs'
import { TbWorld } from 'react-icons/tb'

const projects = () => {
    return (
        <section className='projects' id='projects'>
            <h2 className='cTitle'>PROYECTOS</h2>
            <div className="cardsContainer">
                {proyects.map((item) => (
                    <div key={item.id} className='cardProyect'>
                        <img className='imgPoyects' src={item.img} alt={item.name} />
                        <div className="description">
                            <h3 className='title'>{item.name}</h3>
                            <div className="links">
                                <button className="btnL">
                                    <a href={item.github}> <BsGithub size={30} /></a>
                                </button>
                                <button className="btnL">
                                    <a href={item.url}> <TbWorld size={30} /></a>
                                </button>
                            </div>
                            <p className="text">{item.description}</p>
                            <div className="tools">
                                {item.tools.map((tools, index) => (
                                    <img key={index} className='iconTools' src={tools} alt={`Tool ${index + 1}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default projects