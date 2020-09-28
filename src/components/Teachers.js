import React, { Component } from 'react'
import { ReactComponent as TeachersTag } from '../svgs/teachers__tag.svg'
import './Teachers.css'

export default class Teachers extends Component {
    render() {
        return (
            <div className="section__main">
                <div className="section__header">
                    <TeachersTag className="header__tag tag" />
                </div>
            </div>
        )
    }
}
