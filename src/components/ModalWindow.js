import React, { Component } from 'react'
import './ModalWindow.css'

export default class ModalWindow extends Component {
    render() {
        return (
            <div className="modal__window-main">
                <div className="modal__window-content">
                    <h2 className="modal__window-title">{this.props.title}</h2>
                </div>
            </div>
        )
    }
}
