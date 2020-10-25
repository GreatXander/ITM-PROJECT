import React, { Component } from 'react'
import { ReactComponent as CommunityTag } from '../svgs/community__tag.svg'
import './Community.css'

export default class Community extends Component {
    render() {
        return (
            <div className="section__main">
                <div className="section__header">
                    <CommunityTag className="header__tag tag" />
                </div>
            </div>
        )
    }
}