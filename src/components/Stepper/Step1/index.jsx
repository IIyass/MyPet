import React from 'react';
import { Select } from '../../UI/Select';
import Cities from '../../../Data/Cities.json';
import { Step1Container } from './style';
import { Button } from '../../UI/Button';



const Step1 = () => {

    return (
        <Step1Container>
            <h1>Informations générales</h1>
            <form>
                <div className="select">
                    <label>Are you rehoming a dog or cat?</label>
                    <Select name="sex" id="sex-select"  >
                        <option >--Choose the Sex of Your Pet--</option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                    </Select>
                </div>
                <div className="select">
                    <label>Where ?</label>
                    <Select name="location" id="location-select">
                        <option >--Choose Location--</option>
                        {Cities.map(({ ville, id }) => {
                            return <option key={id} value={ville}>{ville}</option>
                        })}
                    </Select>
                </div>
                <div className="select">
                    <label>Is your pet spayed or neutered?</label>
                    <Select name="location" id="location-select">
                        <option >--Choose option--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </Select>
                </div>

                <div className="select">
                    <label>Why do you need to rehome your pet?</label>
                    <Select name="location" id="location-select">
                        <option >--Choose Location--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </Select>
                </div>
                <Button>Next</Button>
            </form>
        </Step1Container>
    )
}

export default Step1;