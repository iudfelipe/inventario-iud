import axios from 'axios';

const host = 'http://localhost:3001';

// tipos
export const getTipos = () => {
    return axios.get(`${host}/equipo/tipos`);
};

export const getTipoById = (id) => {
    return axios.get(`${host}/equipo/tipos`, { params: { id } });
};

export const getTiposActivos = () => {
    return axios.get(`${host}/equipo/tipos/activo`);
};

export const createTipoEquipo = (data) => {   
    return axios.post(`${host}/equipo/tipos/create`, data);
};

export const updateTipoEquipo = (data) => {
    return axios.post(`${host}/equipo/tipos/update`, data);
};

// estados
export const getEstados = () => {
    return axios.get(`${host}/equipo/estados`);
};

export const getEstadoById = (id) => {
    return axios.get(`${host}/equipo/estados`, { params: { id } });
};

export const getEstadosActivos = () => {
    return axios.get(`${host}/equipo/estados/activo`);
};

export const createEstadoEquipo = (data) => {  
    return axios.post(`${host}/equipo/estados/create`, data);
};

export const updateEstadoEquipo = (data) => {
    return axios.post(`${host}/equipo/estados/update`, data);
};

// marcas
export const getMarcas = () => {
    return axios.get(`${host}/marca`);
};

export const getMarcaById = (id) => {
    return axios.get(`${host}/marca`, { params: { id } });
};

export const getMarcasActivas = () => {
    return axios.get(`${host}/marca/activo`);
};

export const createMarca = (data) => {  
    return axios.post(`${host}/marca/create`, data);
};

export const updateMarca = (data) => {
    return axios.post(`${host}/marca/update`, data);
};

// usuarios
export const getUsuarios = () => {
    return axios.get(`${host}/usuario`);
};

export const getUsuarioById = (id) => {
    return axios.get(`${host}/usuario`, { params: { id } });
};

export const getUsuariosActivos = () => {
    return axios.get(`${host}/usuario/activo`);
};

export const createUsuario = (data) => {  
    return axios.post(`${host}/usuario/create`, data);
};

export const updateUsuario = (data) => {
    return axios.post(`${host}/usuario/update`, data);
};

// inventario
export const getInventario = () => {
    return axios.get(`${host}/inventario`);
};

export const getInventarioById = (id) => {
    return axios.get(`${host}/inventario`, { id });
};

export const createInventario = (data) => {  
    return axios.post(`${host}/inventario/create`, data);
};

export const updateInventario = (data) => {
    return axios.post(`${host}/inventario/update`, data);
};