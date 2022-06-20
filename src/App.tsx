import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { getCountriesAction } from './redux/countries/countries'
import DropDown from './components/DropDown'
import { getStates } from './redux/states/states'
import { getCities } from './redux/cities/cities'
import { getCityData } from './redux/city/city'

function App() {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedCity, setSelectetedCity] = useState('')

  const countries = useAppSelector((state: any) => state.countries)
  const states = useAppSelector((state: any) => state.states)
  const cities = useAppSelector((state: any) => state.cities)
  const cityData = useAppSelector((state: any) => state.city)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCountriesAction())
  }, [])

  const changeCountry = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const country = event.target.value
    setSelectedCountry(country)
    dispatch(getStates(country))
  }

  const changeState = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const state = event.target.value
    setSelectedState(state)
    dispatch(getCities(selectedCountry, state))
  }

  const changeCity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = event.target.value
    dispatch(getCityData(city, selectedState, selectedCountry))
    setSelectetedCity(event.target.value)
    console.log(selectedCity)
    console.log(cityData)
  }

  return (
    <div className="App">
      {countries.length > 0 ? (
        <DropDown
          name="country"
          onChange={changeCountry}
          options={countries[0] ? countries[0] : []}
        />
      ) : null}
      {states.length > 0 ? (
        <DropDown
          name="state"
          onChange={changeState}
          options={states[0] ? states[0] : []}
        />
      ) : null}
      {cities.length > 0 ? (
        <DropDown
          name="city"
          onChange={changeCity}
          options={cities[0] ? cities[0] : []}
        />
      ) : null}
    </div>
  )
}

export default App
