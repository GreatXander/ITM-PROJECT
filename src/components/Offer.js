import React, { Component } from 'react'
import { ReactComponent as OfferTag } from '../svgs/offer__tag.svg'
import './Offer.css'

export default class Offer extends Component {
    render() {
        return (
            <div className="section__main">
                <div className="section__header">
                    <OfferTag className="header__tag tag" />
                </div>
            </div>
        )
    }
}
