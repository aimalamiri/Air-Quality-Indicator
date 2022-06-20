import { ThunkDispatch } from 'redux-thunk'
import axios, { API_KEY } from '../../services/axios'

const LIST_CITIES: string = 'air-quality-indicator/states/LIST_CITIES'

export default (state: [], action: any): Array<string> => {
  switch (action.type) {
    case LIST_CITIES:
      return [...state, action.payload]
    default:
      return []
  }
}

export const getCities = (country: string, state: string) => async (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  const response = await axios.get(
    `cities?state=${state}&country=${country}&key=${API_KEY}`
  )

  if (response.data.status === 'success') {
    const cities = Object.values(response.data.data).map((city: any) => {
      return city.city
    })
    dispatch({
      type: LIST_CITIES,
      payload: cities,
    })
  }
}
