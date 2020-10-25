import React, { Component } from 'react'
import './DivisionDiv.css'

export default class divisionDiv extends Component {
    render() {
        return (
            <div className="home__division-container">
                <div className="home__division">
                    <h2 className="home__division-title">{this.props.title}</h2>
                </div>
            </div>
        )
    }
}