import React, { Component } from 'react'
import { ReactComponent as UsTag } from '../svgs/us__tag.svg'
import './Us.css'

export default class Us extends Component {
    render() {
        return (
            <div className="section__main">
                <div className="section__header">
                    <UsTag className="header__tag tag" />
                </div>
            </div>
        )
    }
}