import React, { Component } from 'react'
import './ChangePass.css'

export default class ChangePass extends Component{
    render(){
        return(
            <div className="change-pass__main">
                <div className="change-pass__container">
                    
                    <div className="change-pass__header">
                        <h2 className="change-pass__title">CHANGE MY PASSWORD</h2>
                    </div>

                    <div className="change-pass__body">
                        <h2 className="change-pass__title">EMAIL</h2>
                        <input type="text" className="change-pass__input" placeholder="Insert Your Email..." />
                    </div>
                </div>
            </div>
        )
    }
}