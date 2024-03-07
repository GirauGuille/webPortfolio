import React from 'react'
import college from '../data/education.json'

function education() {
    return (
        <div className='timeLine'>
            <div className="education">
                {college.map((item) => (
                    <div key={item.id} className='infoTimeline'>
                        <div className="time">
                            <div className='date'><b>{item.year}</b></div>
                            <div className='decoration'>
                                <div className="linea"></div>
                                <div className="dot"></div>
                            </div>
                        </div>
                        <div className="content">
                            <img className='imgTitle' src={item.img} alt={item.title} />
                            <div className='infoCourse'>
                                <div className="title"><b>{item.title}</b></div>
                                <div className="school">{item.institucion}</div>
                            <div className="toolsCourse">
                                {item.tools.map((tools, index) => (
                                    <img key={index} className='toolImage' src={tools} alt={`Tool ${index + 1}`} />
                                ))}
                            </div>
                            </div>
                            <img className='imgSchool' src={`../src/img/school/${item.logoI}`} alt={item.title} />
                        </div>
                    </div>
                ))}
                <div className='infoTimeline'>
                        <div className="time">
                            <div className='date'><b>AHORA</b></div>
                            <div className='decoration'>
                                <div className="linea"></div>
                                <div className="dot"></div>
                            </div>
                        </div>
                        <div className="content">

                            <img className='imgTitle' src="https://firebasestorage.googleapis.com/v0/b/miportfolio-fc1de.appspot.com/o/title%2FEllipsis-3.1s-202px.gif?alt=media&token=635889ee-df9b-4f4b-983b-350c07aa076a" alt="" />
                            <div className='infoCourse'>
                                <div className="title"><b>React Native</b></div>
                                <div className="school">Youtube</div>
                            <div className="toolsCourse"><img className='imgnative' src="https://firebasestorage.googleapis.com/v0/b/miportfolio-fc1de.appspot.com/o/tools%2Freact%20native.png?alt=media&token=0f353f20-516c-4447-9700-7a42cbe29e9f" alt="react native"/>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default education