import React, { Component } from 'react'
import { ReactComponent as LibraryTag } from '../svgs/library__tag.svg'
import './Library.css'

export default class Library extends Component {
    render() {
        return (
            <div className="section__main">
                <div className="section__header">
                    <LibraryTag className="header__tag tag" />
                </div>
            </div>
        )
    }
}