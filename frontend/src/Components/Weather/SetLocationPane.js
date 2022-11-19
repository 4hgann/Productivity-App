import { useEffect, useRef, useState } from "react"
import { Modal, Select } from "antd";
import { IoMdSettings } from 'react-icons/io';
import '../../Styles/WeatherWidget.css'
import { City, Country } from "country-state-city";


function SetLocationPane({callbackHandler}) {

    const [showModal, toggleShowModal] = useState(false);
    const [cities, setCities] = useState([])
    const [currentCity, setCurrentCity] = useState(null)

    const countries = [].concat(...Country.getAllCountries()).map(({name, isoCode})=>{
        return {value: name, label: name, countryCode: isoCode}
    });
    
    let chosenCountry;
    let chosenCity;
    
    const toggle = () => toggleShowModal(!showModal)

    const submit = () =>{
        console.log(chosenCountry)
    }

    const countryChangeHandler = (value) => {
        chosenCountry = value;
        setCurrentCity(null)
        // Fetch country code of element
        const countryData = countries.find((country) => country.value === chosenCountry)
        setCities( [].concat(...City.getCitiesOfCountry(countryData.countryCode)).map(({name}) => {
            return {value: name, label:name}
        }))
    }
    





    return(
        <>
            <IoMdSettings className="button widget-button" onClick ={toggle}/>

            <Modal title="Configure Weather Data" visible={showModal} onOk={submit} onCancel={toggle}>
            <Select
                options={countries}
                placeholder="Choose a country"
                optionFilterProp="children"
                filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
                value={chosenCountry}
                onChange={(value) => countryChangeHandler(value)}
                allowClear
                showSearch
                style={{width:"300px"}}
            />

            <Select
                options={cities}
                placeholder="Choose a city"
                optionFilterProp="children"
                filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
                value={currentCity}
                allowClear
                onChange={(value) => setCurrentCity(value)}
                showSearch
                style={{width:"300px"}}
            />
            </Modal>
        </>
    )
}

export default SetLocationPane;