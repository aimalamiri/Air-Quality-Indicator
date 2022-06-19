import { ThunkDispatch } from 'redux-thunk'
import axios, { API_KEY } from '../../services/axios'

const SPECIFIED_CITY: string = 'air-quality-indicator/states/SPECIFIED_CITY'

export default (state: [], action: any): Array<string> => {
  switch (action.type) {
    case SPECIFIED_CITY:
      return [action.payload]
    default:
      return []
  }
}

export const getCityData = (
  city: string,
  state: string,
  country: string
) => async (dispatch: ThunkDispatch<{}, {}, any>) => {
  const response = await axios.get(
    `city?city=${city}&state=${state}&country=${country}&key=${API_KEY}`
  )

  if (response.data.status === 'success') {
    dispatch({
      type: SPECIFIED_CITY,
      payload: response.data,
    })
  }
}
