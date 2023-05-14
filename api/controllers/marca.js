const db = require('../utils/dbUtils');
const { query } = db.init();

module.exports = {
    getMarcas: async (req, res) => {
        console.log('[GET] /marca/ req.query: ', req.query);
        const { id } = req.query;

        let queryString = "SELECT * FROM marcas";

        if (id) queryString = `SELECT * FROM marcas WHERE id = ${id}`;

        const result = await query(queryString);

        res.json({ 
            message: 'OK',
            data: result
        });
    },
    getMarcasActivas: async (req, res) => {
        console.log('[GET] /marca/activo');

        let queryString = "SELECT * FROM marcas WHERE estado = 1";

        const result = await query(queryString);

        res.json({ 
            message: 'OK',
            data: result
        });
    },
    createMarca: async  (req, res) => {
        console.log('[POST] /marca/create req.body: ', req.body);
        
        const { name, status, createdDate, updateDate } = req.body;
        const intStatus = status ? 1 : 0;

        try {
            await query(`INSERT INTO marcas (nombre, estado, fechaCreacion, fechaActualizacion)
                VALUES ('${name}', '${intStatus}', '${createdDate}', '${updateDate}')`);

            res.status(200).json({ message: 'marca creada' });

        } catch (e) {
            console.log('My server log error: ', e)
            res.status(400).json({ message: 'no se pudo crear la marca' });
        }       
    },
    updateMarca: async (req, res) => {
        console.log('[POST] /marca/update req.body: ', req.body);

        const { id, name, status, createdDate, updateDate } = req.body;
        const intStatus = status ? 1 : 0;

        try {
            await query(`
                UPDATE marcas SET 
                nombre = '${name}',
                estado = ${intStatus},
                fechaCreacion = '${createdDate}',
                fechaActualizacion = '${updateDate}'
                WHERE id = ${id}
            `);

            res.status(200).json({ message: 'marca actualizada' });

        } catch (e) {
            console.log('My server log error: ', e)
            res.status(400).json({ message: 'no se pudo actualizar la marca' });
        }    
    },
};
