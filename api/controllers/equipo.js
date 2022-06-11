const db = require('../utils/dbUtils');
const { query } = db.init();

module.exports = {
    getTipos: async (req, res) => {
        console.log('[GET] /equipo/tipos/:id? req.params: ', req.params);
        const { id } = req.params;

        let queryString = "SELECT * FROM tipos";

        if (id) queryString = `SELECT * FROM tipos WHERE id = ${id}`;

        const result = await query(queryString);

        res.json({ 
            message: 'OK',
            data: result
        });
    },
    createTipoEquipo: async  (req, res) => {
        console.log('[POST] /equipo/tipo/create req.body: ', req.body);
        
        const { name, status, createdDate, updateDate } = req.body;
        const intStatus = status ? 1 : 0;

        try {
            await query(`INSERT INTO tipos (nombre, estado, fechaCreacion, fechaActualizacion)
                VALUES ('${name}', '${intStatus}', '${createdDate}', '${updateDate}')`);

            res.status(200).json({ message: 'tipo de equpo creado' });

        } catch (e) {
            console.log('My server log error: ', e)
            res.status(400).json({ message: 'no se pudo crear el tipo de equipo' });
        }       
    },
    updateTipoEquipo: async (req, res) => {
        console.log('[POST] /equipo/tipo/update req.body: ', req.body);

        const { id, name, status, createdDate, updateDate } = req.body;
        const intStatus = status ? 1 : 0;

        try {
            await query(`
                UPDATE tipos SET 
                nombre = '${name}',
                estado = ${intStatus},
                fechaCreacion = '${createdDate}',
                fechaActualizacion = '${updateDate}'
                WHERE id = ${id}
            `);

            res.status(200).json({ message: 'tipo de equpo actualizado' });

        } catch (e) {
            console.log('My server log error: ', e)
            res.status(400).json({ message: 'no se pudo actualizar el tipo de equipo' });
        }    
    },
};
