import React, { useState } from 'react';
import { Select } from '../UI/Select';
import { Button } from '../UI/Button';
import { SearchContainer } from './style';
import Sex from '../../Data/Sex.json'
import Age from '../../Data/Age.json'
import Cities from '../../Data/Cities.json'
const Search = ({ setImage }) => {


    const [tag, setTag] = useState('')
    const [selectedTag, setSelectedTag] = useState(1)

    const handleTags = (newtag, i) => {
        setTag(newtag);
        setSelectedTag(i)
        setImage(newtag);
    }


    return (<SearchContainer selectedTag={selectedTag}>
        <ul id="classification">
            <li onClick={() => handleTags('Dogs', 1)} >Dogs</li>
            <li onClick={() => handleTags('Cats', 2)} >Cats</li>
        </ul>
        <div id="search">
            <Select name="sex" id="sex-select"  >
                <option >--Choose the Sex of Your Pet--</option>
                {Sex.map(({ value, label }) => {
                    return <option key={value} value={value}>{label}</option>
                })}
            </Select>
            <Select name="age" id="age-select">
                <option >--Choose the Age of Your Pet--</option>
                {Age.map(({ value, label }) => {
                    return <option key={value} value={value}>{label}</option>
                })}
            </Select>
            <Select name="location" id="location-select">
                <option >--Choose Location--</option>
                {Cities.map(({ ville, id }) => {
                    return <option key={id} value={ville}>{ville}</option>
                })}
            </Select>
            <Button>Search</Button>
        </div>
    </SearchContainer>
    );
};

export default Search;