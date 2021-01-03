import React from 'react';
import { Select } from '../../UI/Select';
import Cities from '../../../Data/Cities.json';



const Step1 = () => {


    return (

        <>
            <h1>Informations générales</h1>
            <form>

                <Select name="sex" id="sex-select"  >
                    <option >--Choose the Sex of Your Pet--</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                </Select>

                <Select name="location" id="location-select">
                    <option >--Choose Location--</option>
                    {Cities.map(({ ville, id }) => {
                        return <option key={id} value={ville}>{ville}</option>
                    })}
                </Select>



            </form>
        </>
    )
}

export default Step1;