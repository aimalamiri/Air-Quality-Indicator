import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { getCountriesAction } from './redux/countries/countries'
import DropDown from './components/DropDown'

function App() {
  const countries = useAppSelector((state: any) => state.countries)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCountriesAction())
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <DropDown name="countries" options={countries[0] ? countries[0] : []} />
      </header>
    </div>
  )
}

export default App
