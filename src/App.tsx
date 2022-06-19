import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { getCountriesAction } from './redux/countries/countries'
import DropDown from './components/DropDown'
import { getStates } from './redux/states/states'

function App() {
  const [value] = useState<string>('')
  const countries = useAppSelector((state: any) => state.countries)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCountriesAction())
  }, [])

  const changeCountry = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const country = event.target.value
    dispatch(getStates(country))
  }

  return (
    <div className="App">
      <header className="App-header">
        <DropDown
          name="countries"
          value={value}
          onChange={changeCountry}
          options={countries[0] ? countries[0] : []}
        />
      </header>
    </div>
  )
}

export default App
