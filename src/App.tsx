import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { getCountriesAction } from './redux/countries/countries'

function App() {
  const countries = useAppSelector((state: any) => state.countries)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCountriesAction())
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {countries.map((country: string) => (
          <span>{country + ', '}</span>
        ))}
      </header>
    </div>
  )
}

export default App
