import { useEffect, useRef, useState } from "react"
import { message, Modal, Select } from "antd";
import { IoMdSettings } from 'react-icons/io';
import '../../Styles/WeatherWidget.css'
import { City, Country } from "country-state-city";


function SetLocationPane({callback}) {

    const [showModal, toggleShowModal] = useState(false);
    const [cities, setCities] = useState([])
    const [currentCity, setCurrentCity] = useState(null)
    const [currentCountry, setCurrentCountry] = useState(null)
    const [currentUnits, setCurrentUnits] = useState(null)

    const countries = [].concat(...Country.getAllCountries()).map(({name, isoCode})=>{
        return {value: name, label: name, countryCode: isoCode}
    });
    
    
    const toggle = () => toggleShowModal(!showModal)

    const submit = (value) =>{
        if(currentCity && currentCountry && currentUnits){
            console.log(currentCity)
            const countryCode = countries.find((country) => country.value === currentCountry).countryCode
            console.log(countryCode)
            console.log(currentUnits)
            console.log({city: currentCity, country: countryCode, units:currentUnits})
            callback({city: currentCity, country: countryCode, units:currentUnits})
        }
        else{
            message.error("Fill out all fields ya cunt")
        }
    }

    const countryChangeHandler = (value) => {
        setCurrentCountry(value)
        setCurrentCity(null)

        const countryData = countries.find((country) => country.value === value)
        setCities( [].concat(...City.getCitiesOfCountry(countryData.countryCode)).map(({name}) => {
            return {value: name, label:name}
        }))
    }

    const units = [
        {
            label: "Kelvin",
            value: "standard"
        },
        {
            label: "Metric",
            value: "metric"
        },
        {
            label: "Imperial",
            value: "imperial"
        }
    ]

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
                value={currentCountry}
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
            <Select
                value = {currentUnits}
                onChange={(value) => setCurrentUnits(value)}
                options={units}
                placeholder="Unit Type"
                style={{width:"300px"}}
            />
            </Modal>
        </>
    )
}

export default SetLocationPane;