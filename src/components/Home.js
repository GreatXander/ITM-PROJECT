import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import { ReactComponent as Director } from '../svgs/director.svg'
import { ReactComponent as SchoolDraw } from '../svgs/school__draw.svg'
import { ReactComponent as BookRed } from '../svgs/book__red.svg'
import { ReactComponent as BackPack } from '../svgs/backpack.svg'
import { ReactComponent as Community } from '../svgs/community.svg'
import { ReactComponent as Pencil } from '../svgs/pencil.svg'
import { ReactComponent as Rule } from '../svgs/rule.svg'
import { ReactComponent as BookBlue } from '../svgs/book__blue.svg'
import { ReactComponent as Eraser } from '../svgs/eraser.svg'
import { ReactComponent as Ball } from '../svgs/ball.svg'
import { ReactComponent as WelcomeTag } from '../svgs/welcome__tag.svg'
import { ReactComponent as InstituteTag } from '../svgs/institute__tag.svg'
import { ReactComponent as InfoTag } from '../svgs/info__tag.svg'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <>
            <div className="public__container welcome__container">
                <div className="public welcome">
                    <SchoolDraw className="school__draw svg" />
                    <WelcomeTag className="welcome__tag tag" />
                    <p className="public__text">Te damos la bienvenida a la <strong>Institución de 
                    Educación Media</strong> más importante y diversa de <strong> Santiago De Los Caballeros</strong>. 
                    <strong> Con más de 45 años de trayectoria, ITM ha sido un pilar fundamental</strong> en la 
                    formación de los <strong> técnicos-profesionales que necesita República Dominicana</strong>.
                    </p>
                </div>
            </div>

            <div className="public__container">
                <div className="public">
                    <Eraser className="eraser__svg svg" />
                    <InstituteTag className="tag" />
                    <p className="public__text">
                    <strong>Nuestro compromiso con la calidad no sólo se refleja en nuestra acreditación institucional</strong>, 
                    sino también en <strong> nuestro modelo de enseñanza</strong>, <strong> en la empleabilidad de nuestros alumnos y 
                    en nuestra infraestructura</strong>. Un rasgo que nos diferencia, es nuestra <strong>estrecha vinculación con el mundo productivo</strong>. 
                    </p>
                </div>
            </div>
            
            <div className="public__container">
                <div className="public public__division">
                    <h2 className="public__division-title">NUESTRO SISTEMA</h2>
                </div>
            </div>

            <div className="public__menu-container">
                <div className="public__menu-option">
                    <Director className="public__menu-svg svg" />
                    <Link to="/nosotros" className="public__link" aria-label="Nosotros">
                    <Button 
                    color="primary" 
                    variant="outlined"
                    className="us__button">
                    Nosotros</Button></Link>
                </div>

                <div className="public__menu-option">
                    <Pencil className="public__menu-svg svg" />
                    <Link to="/oferta_academica" className="public__link" aria-label="Ofertas"
                    ><Button 
                    color="primary" 
                    variant="outlined"
                    className="offer__button">
                    Oferta Académica</Button></Link>
                </div>

                <div className="public__menu-option">
                    <Community className="public__menu-svg svg" />
                    <Link to="/comunidad" className="public__link" aria-label="Comunidad">
                    <Button 
                    color="primary" 
                    variant="outlined"
                    className="community__button">
                    Comunidad</Button></Link>
                </div>

                <div className="public__menu-option">
                    <Rule className="public__menu-svg svg" />
                    <Link to="/maestros" className="public__link" aria-label="Maestros">
                    <Button 
                    color="primary" 
                    variant="outlined"
                    className="teachers__button">
                    Maestros</Button></Link>
                </div>

                <div className="public__menu-option public__menu-last">
                    <BackPack className="public__menu-svg svg" />
                    <Link to="/biblioteca" className="public__link" aria-label="Biblioteca">
                    <Button 
                    color="primary" 
                    variant="outlined"
                    className="library__button">
                    Biblioteca</Button></Link>
                </div>
            </div>

            <div className="public__container">
                <div className="public public__division">
                    <h2 className="public__division-title">MÁS SOBRE NOSOTROS</h2>
                </div>
            </div>

            <div className="public__container">
                <div className="public">
                    <BookBlue className="books__svg svg"/>
                    <InfoTag className="tag" />
                    <p className="public__text">
                    <strong>Nuestras autoridades educativas piden a las escuelas la omnipresencia de una educación emocional</strong>; nos solicita a los
                    docentes que enfoquemos la atención en el contexto del alumno en todos sus ámbitos. <strong>Es necesario ofrecer a los alumnos un 
                    abanico de experiencias</strong> que les permita vivir con intensidad todos y cada uno de los <strong>elementos de su riqueza interior</strong>.
                    </p>
                </div>
            </div>
            

            <div className="public__container">
                <div className="public">
                    <BookRed className="books__svg svg" />
                    <InfoTag className="tag" />
                    <p className="public__text">
                    <strong>El dibujo, la pintura o la construcción constituyen un proceso complejo en el que el niño reúne diversos elementos de su 
                    experiencia</strong> para formar un todo con un nuevo significado. En el proceso de <strong> seleccionar, interpretar y reafirmar 
                    esos elementos</strong>, el niño nos da algo más que un dibujo o una escultura; <strong>nos proporciona una parte de sí mismo: 
                    cómo piensa, cómo siente y cómo ve</strong>.
                    </p>
                </div>
            </div>

            <div className="public__container">
                <div className="public">
                    <Ball className="books__svg svg" />
                    <InfoTag className="tag" />
                    <p className="public__text">
                    La expresión <strong>"Deporte Escolar"</strong> da lugar a un campo conceptual amplio en muchos sentidos, en tanto que <strong>debe permitir identificar 
                    claramente el tipo de práctica o actividad que se envuelve en tal expresión</strong>, precisando, cuál es el significado, el sentido y la 
                    finalidad de la misma. <strong>El Deporte Escolar puede ser un instrumento que contribuya a la adquisición de habilidades sociales en 
                    las personas</strong>.
                    </p>
                </div>
            </div>
            </>
        )
    }
}