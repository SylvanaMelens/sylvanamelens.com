/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Card.css'

export default class CardCertificate extends Component {
    render(){
        const { outerLink, src } = this.props.details 
    
        return (
            <div>
                 <a 
                    href={ outerLink } 
                    target='_blank' 
                    rel='noopener noreferrer'>
                    <img 
                        className='image-certif' 
                        src={ src } 
                        alt={ src }/>
                </a>
            </div>
            )
    }

    static propTypes = {
        details: PropTypes.object.isRequired
    }
}
