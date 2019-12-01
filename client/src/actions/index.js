import axios from 'axios';
import { FETCH_USER } from './types';

// this is using promise style
// export const fetchUser = () => {
//     return function(dispatch){
//         axios
//             .get('/api/current_user')
//             .then(res => dispatch({ type: FETCH_USER, payload: res }));
//     };
// };

// this is using async await style with the same result but more readable
export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER, payload: res.data });
};