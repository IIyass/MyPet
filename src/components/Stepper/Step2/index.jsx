import React from 'react';
import { Button } from '../../UI/Button';
import { Step2Container } from './style';


const Step1 = () => {


    return (

        <Step2Container>
            <h1>Description du bien</h1>
            <form>
                <div className="selectInput">
                    <label>Pet Name</label>
                    <input
                        placeholder="name"
                        name="name" />
                </div>
                <div className="selectInput">
                    <label>Description</label>
                    <textarea
                        placeholder="description"
                        name="description"
                        id="location-select"
                        rows="10" />
                </div>
                <Button>Next</Button>
            </form>
        </Step2Container>
    )
}

export default Step1;