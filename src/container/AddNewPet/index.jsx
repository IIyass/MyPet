import React from 'react';
import { Hero, Body } from './style';
import { Stepper, Step } from 'react-form-stepper';
import { Container } from '../../common'
import Step1 from '../../components/Stepper/Step1'
import Step2 from '../../components/Stepper/Step2'
import Step3 from '../../components/Stepper/Step3'
import Step4 from '../../components/Stepper/Step4'

const AddNewPet = (props) => {

    const HandleStepForm = (step) => {
        switch (step) {
            case 0: return <Step1 />;
            case 1: return <Step2 />;
            case 2: return <Step3 />;
            case 3: return <Step4 />;
            default: return null;
        }
    }

    return (
        <Hero as={Container}>
            <Stepper connectorStateColors activeStep={0} >
                <Step label="Commencez par l’essentiel" />
                <Step inactiveBgColor="blue" label="Décrivez-nous votre bien" />
                <Step inactiveBgColor="blue" label="Photos" />
                <Step inactiveBgColor="blue" label="Vos informations" />
            </Stepper>
            <Body>
                {HandleStepForm(0)}
            </Body>
        </Hero>
    )
}

export default AddNewPet