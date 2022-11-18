import { useEffect, useRef, useState } from "react"
import { Modal, Select } from "antd";
import { IoMdSettings } from 'react-icons/io';
import '../../Styles/WeatherWidget.css'
import { Country } from "country-state-city";


function SetLocationPane({callbackHandler}) {

    const [showModal, toggleShowModal] = useState(false);
    const [country,setCountry] = useState("")

    const toggle = () => toggleShowModal(!showModal)
    const submit = () =>{
        console.log(country)
    }

    const countries = [].concat(...Country.getAllCountries()).map(({name})=>{
        return {value: name, label: name}
    });

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
                allowClear
                value={country}
                onChange={(value) => setCountry(value)}
                showSearch
                style={{width:"300px"}}
            />
            </Modal>
        </>
    )
}

export default SetLocationPane;