import React, { Component } from 'react'
import './ProfileButton.css'

export default class ProfileButton extends Component {

    logOut = () => {
        localStorage.removeItem('user');
        window.location.reload();
    }

    render() {
        return (
            <div className="profile__button"
            onClick = {e => this.logOut()}>
                <div className="profile__button-img-container">
                    <img className="profile__button-img" 
                    src={require("../images/example.png")} alt="UserImg" />
                </div>
            <h2 className="profile__button-username">{this.props.username.substr(0, this.props.username.indexOf(' ')+2) + '.'}</h2>
            </div>
        )
    }
}