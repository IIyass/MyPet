import React from 'react'
import { CardContainer } from './style'
import Cat from '../../illustration/as.jpg'

const Card = ({ name, gender, age, location, picture }) => {

    return (
        <CardContainer>
            <img src={Cat} alt="pet" />
            <h1>{name}</h1>
            <div>
                <span>{gender}</span>, <span>{age}</span>
            </div>
            <p>{location}</p>
        </CardContainer>
    )
}

export default Card;