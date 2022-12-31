import { message, Modal, Select } from "antd";
import { IoMdSettings } from "react-icons/io";
import { City, Country } from "country-state-city";

import { useState } from "react";

import "../../Styles/WeatherWidget.css";

function SetLocationPane({ callback }) {
  const [showModal, toggleShowModal] = useState(false);
  const [cities, setCities] = useState([]);
  const [currentCity, setCurrentCity] = useState(null);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [currentUnits, setCurrentUnits] = useState(null);

  // Format countries for display in dropdown
  const countries = []
    .concat(...Country.getAllCountries())
    .map(({ name, isoCode }) => {
      return { value: name, label: name, countryCode: isoCode };
    });

  const toggle = () => toggleShowModal(!showModal);

  const submit = () => {
    if (currentCity && currentCountry && currentUnits) {
      const countryCode = countries.find(
        (country) => country.value === currentCountry
      ).countryCode;
      callback({
        city: currentCity,
        country: countryCode,
        units: currentUnits,
      });
    } else {
      message.error("Fields are missing, please fill them all out");
    }
  };

  // On changing the country change the city dropdown content to reflect the new countries cities
  const countryChangeHandler = (value) => {
    setCurrentCountry(value);
    setCurrentCity(null);

    // Fetch and format new country data
    const countryData = countries.find((country) => country.value === value);
    setCities(
      []
        .concat(...City.getCitiesOfCountry(countryData.countryCode))
        .map(({ name }) => {
          return { value: name, label: name };
        })
    );
  };

  const units = [
    {
      label: "Kelvin",
      value: "standard",
    },
    {
      label: "Metric",
      value: "metric",
    },
    {
      label: "Imperial",
      value: "imperial",
    },
  ];

  return (
    <>
      <IoMdSettings className="button widget-button" onClick={toggle} />

      <Modal
        title="Configure Weather Data"
        visible={showModal}
        onOk={submit}
        onCancel={toggle}
      >
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
          style={{ width: "300px" }}
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
          style={{ width: "300px" }}
        />
        <Select
          value={currentUnits}
          onChange={(value) => setCurrentUnits(value)}
          options={units}
          placeholder="Unit Type"
          style={{ width: "300px" }}
        />
      </Modal>
    </>
  );
}

export default SetLocationPane;
