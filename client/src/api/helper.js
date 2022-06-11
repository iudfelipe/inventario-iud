import axios from 'axios';

const host = 'http://localhost:3001';

// export const getTest = () => {
//     axios.post(`${host}/equipo`).then(resp => {

//         console.log('FE says: ', resp.data);
//     })
//     .catch((e) => console.log('Api helper error: ', e));
// };

export const createEquipo = (data) => {
    return axios.post(`${host}/equipo/tipo/create`, data);
};

export const updateEquipo = (data) => {
    return axios.post(`${host}/equipo/tipo/update`, data);
};