import React from 'react';
import { RecentPostContainer, PetsLayout } from './style';
import { Container } from '../../common';
import Card from '../PetCard';
import Pet from './Pet.json';

const RecentPost = (props) => {

    return (
        <RecentPostContainer as={Container}>
            <h1>Featured Pets</h1>
            <PetsLayout>
                {Pet.map(({ name, gender, location, age, id }) => {
                    return <Card
                        key={id}
                        name={name}
                        gender={gender}
                        location={location}
                        age={age}
                    />
                })}
            </PetsLayout>
        </RecentPostContainer>
    )
}


export default RecentPost;