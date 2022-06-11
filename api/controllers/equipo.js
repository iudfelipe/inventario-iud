const db = require('../utils/dbUtils');
const { query } = db.init();

module.exports = {
    // getPrueba: async (req, res) => {
    //     const result = await query("SELECT * FROM equipos");

    //     res.json({ 
    //         message: 'OK',
    //         data: result
    //     });
    // },
    createTipoEquipo: async  (req, res) => {
        console.log('[POST] /equipo req.body: ', req.body);
        
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

    },
};
