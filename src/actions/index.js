import * as types from './types';
import { insta } from './dbconnect'

export function get_photos(photos) {
    console.log('GET', photos)
    return (dispatch) => {
      const response = dispatch({
        type: types.LOAD_PHOTOS,
        payload: insta.get()
      })
   
      response.then((data) => {
        console.log('LOAD_PHOTOS_FULLFILL', data.value.data)
        //return data.action.data
      })
    }
  }

  //payload: client.put(`${url}/${usuario._id}`, usuario)