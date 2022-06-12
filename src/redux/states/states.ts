import { ThunkDispatch } from 'redux-thunk'
import axios, { API_KEY } from '../../services/axios'

const LIST_STATES: string = 'air-quality-indicator/states/LIST_STATES'

export default (state: [], action: any): Array<string> => {
  switch (action.type) {
    case LIST_STATES:
      return [...state, action.payload]
    default:
      return []
  }
}

export const getStates = () => async (dispatch: ThunkDispatch<{}, {}, any>) => {
  const response = await axios.get(`states&key=${API_KEY}`)

  dispatch({
    type: LIST_STATES,
    payload: response.data,
  })
}
