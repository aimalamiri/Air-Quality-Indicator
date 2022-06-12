import axios, { API_KEY } from '../../services/axios'

const LIST_COUNTRIES: string = 'air-quality-indicator/countries/LIST_COUNTRIES'

export default (state: [], action: any): Array<string> => {
  switch (action.type) {
    case LIST_COUNTRIES:
      return [action.payload]
    default:
      return []
  }
}

export const getCountriesAction = () => async (dispatch: any) => {
  const response = await axios.get(`countries?key=${API_KEY}`)
  if (response.data.status === 'success') {
    const countries = Object.values(response.data.data).map((country: any) => {
      return country.country
    })
    dispatch({
      type: LIST_COUNTRIES,
      payload: countries,
    })
  }
}
