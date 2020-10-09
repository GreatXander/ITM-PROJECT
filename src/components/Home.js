import React, { Component } from 'react'
import { ReactComponent as SchoolDraw } from '../svgs/school__draw.svg'
import { ReactComponent as BookRed } from '../svgs/book__red.svg'
import { ReactComponent as BookBlue } from '../svgs/book__blue.svg'
import { ReactComponent as Eraser } from '../svgs/eraser.svg'
import { ReactComponent as Ball } from '../svgs/ball.svg'
import { ReactComponent as WelcomeTag } from '../svgs/welcome__tag.svg'
import { ReactComponent as InstituteTag } from '../svgs/institute__tag.svg'
import { ReactComponent as InfoTag } from '../svgs/info__tag.svg'
import './Home.css'

import HomeMenu from './HomeMenu'

export default class Home extends Component {
    render() {
        return (
            <>
            <div className="home__container welcome__container">
                <div className="home__container-inner welcome">
                    <SchoolDraw className="school__draw svg" />
                    <WelcomeTag className="welcome__tag tag" />
                    <p className="home__inner-text">Te damos la bienvenida a la <strong>Institución de 
                    Educación Media</strong> más importante y diversa de <strong> Santiago De Los Caballeros</strong>. 
                    <strong> Con más de 45 años de trayectoria, ITM ha sido un pilar fundamental</strong> en la 
                    formación de los <strong> técnicos-profesionales que necesita República Dominicana</strong>.
                    </p>
                </div>
            </div>

            <div className="home__container">
                <div className="home__container-inner">
                    <Eraser className="eraser__svg svg" />
                    <InstituteTag className="tag" />
                    <p className="home__inner-text">
                    <strong>Nuestro compromiso con la calidad no sólo se refleja en nuestra acreditación institucional</strong>, 
                    sino también en <strong> nuestro modelo de enseñanza</strong>, <strong> en la empleabilidad de nuestros alumnos y 
                    en nuestra infraestructura</strong>. Un rasgo que nos diferencia, es nuestra <strong>estrecha vinculación con el mundo productivo</strong>. 
                    </p>
                </div>
            </div>
            
            <div className="home__division-container">
                <div className="home__division">
                    <h2 className="home__division-title">NUESTRO SISTEMA</h2>
                </div>
            </div>

            <HomeMenu />

            <div className="home__division-container">
                <div className="home__division">
                    <h2 className="home__division-title">MÁS SOBRE NOSOTROS</h2>
                </div>
            </div>

            <div className="home__container">
                <div className="home__container-inner">
                    <BookBlue className="books__svg svg"/>
                    <InfoTag className="tag" />
                    <p className="home__inner-text">
                    <strong>Nuestras autoridades educativas piden a las escuelas la omnipresencia de una educación emocional</strong>; nos solicita a los
                    docentes que enfoquemos la atención en el contexto del alumno en todos sus ámbitos. <strong>Es necesario ofrecer a los alumnos un 
                    abanico de experiencias que les permita vivir los elementos de su riqueza interior</strong>.
                    </p>
                </div>
            </div>
            

            <div className="home__container">
                <div className="home__container-inner">
                    <BookRed className="books__svg svg" />
                    <InfoTag className="tag" />
                    <p className="home__inner-text">
                    <strong>El dibujo, la pintura o la construcción constituyen un proceso complejo en el que el niño reúne diversos elementos de su 
                    experiencia</strong> para formar un todo con un nuevo significado. En el proceso <strong>el niño nos da algo más que un dibujo o una escultura; nos proporciona una parte de sí mismo: 
                    cómo piensa, cómo siente y cómo ve</strong>.
                    </p>
                </div>
            </div>

            <div className="home__container">
                <div className="home__container-inner">
                    <Ball className="books__svg svg" />
                    <InfoTag className="tag" />
                    <p className="home__inner-text">
                    La expresión <strong>"Deporte Escolar"</strong> da lugar a un campo conceptual amplio en muchos sentidos, en tanto que <strong>debe permitir identificar 
                    claramente el tipo de práctica o actividad que se envuelve en tal expresión</strong>. El Deporte Escolar puede ser un <strong>instrumento que contribuya a la adquisición de habilidades sociales en 
                    las personas</strong>.
                    </p>
                </div>
            </div>
            </>
        )
    }
}