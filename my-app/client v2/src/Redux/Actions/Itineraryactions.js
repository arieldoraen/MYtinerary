import axios from 'axios';
import { GET_ITINERARY } from './types';

export const getItinerary = (city) => dispatch => {
	axios.get('http://localhost:5000/api/itinerarys/'+city).then(res =>
		dispatch({
			type: GET_ITINERARY,
			payload: res.data.data
		})
	);
};
