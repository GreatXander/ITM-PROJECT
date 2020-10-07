import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HeaderSchoolTitle.css'

export default class HeaderSchoolTitle extends Component {
    render() {
        return (
            <Link to="/" className="school__title-container">
                <h2 className="school__title">Instituto Tecnológico México</h2>
            </Link>
        )
    }
}