import axios from 'axios';
import {GET_CITY} from './types';

export const getCity=()=>dispatch=>{
    axios.get('http://localhost:5000/api/cities')
        .then(res=>dispatch({
            type:GET_CITY,
            payload:res.data.data
        })
        );
};
