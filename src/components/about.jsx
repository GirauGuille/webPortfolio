import React from 'react'
import yo from '../img/yo3.png'
import cvPdf from '../img/GuillermoGirauCV.pdf'
import TypewriterWithAuthor from "../components/TypewriterWithAuthor"

function about() {
    return (
        <div className='about' id='about'>
            <h2 className='cTitle'>SOBRE MI</h2>
            <div className="aboutInfo">
                <div className='sobreMi'>
                    <p>Nací en Buenos Aires, Argentina en el año <strong>1990</strong>. Al finalizar el secundario estudié <strong>"Diseño Gráfico"</strong>. Una carrera que me formó para diseñar la imagen de las empresas, crear logotipos, folletos, packaging, entre otras. Unos años después, decidí incorporarme en el mundo IT. En el 2023 me gradué con el curso de <strong>"Desarrollo web full Stack - MERN"</strong>, el cual me dió las herramientas necesarias para desarrollar aplicaciones y sitios web respondiendo a los intereses de los clientes.</p>
                    <div className="personalData">
{/*                         
                        <span className='data'><b>Correo:</b> girauguillermo@gmail.com</span>
                        <span className='data'><b>Teléfono:</b> 1133127266</span>
                        <span className='data'><b>Idiomas:</b> Español, Ingles</span> */}
                    </div>
                    <button className="btnCV">
                        <a href={cvPdf} target="_blank">DESCARGÁ MI CV</a>
                    </button>
                </div>
                <img className='foto' src={yo} alt="Guillermo Lucas Girau" />
            </div>
            <div className="frase">
                <div className='chapa'>
                    <div className="agujero agujero1"></div>
                    <div className="agujero agujero2"></div>
                    <div className="agujero agujero3"></div>
                    <div className="agujero agujero4"></div>
                    <TypewriterWithAuthor text="ELIGE UN TRABAJO QUE TE APASIONE Y NO TENDRÁS QUE TRABAJAR NI UN DÍA DE TU VIDA" author="Confucio" />
                </div>
            </div>
            
        </div>
    )
}

export default about