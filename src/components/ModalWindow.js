import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import { ReactComponent as Error } from '../svgs/error.svg'
import './ModalWindow.css'

export default class ModalWindow extends Component {
    render() {
        return (
            <div className="modal__window-main">
                <div className="modal__window-content"> 
                    
                    <Button className="modal__close-button"
                    onClick={e => this.props.setModal({visible: false, component: null})}>
                        <Error className="modal__button-icon" />
                    </Button>
                    
                    <this.props.component functions={this.props.functions}/>
                </div>
            </div>
        )
    }
}
