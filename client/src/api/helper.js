import axios from 'axios';

const host = 'http://localhost:3001';

export const getTipos = () => {
    return axios.get(`${host}/equipo/tipos`);
};

export const getTipoById = (id) => {
    return axios.get(`${host}/equipo/tipos/${id}`);
};

export const createTipoEquipo = (data) => {
    console.log('createTipoEquipo');
    
    return axios.post(`${host}/equipo/tipo/create`, data);
};

export const updateTipoEquipo = (data) => {
    console.log('updateTipoEquipo');
    return axios.post(`${host}/equipo/tipo/update`, data);
};