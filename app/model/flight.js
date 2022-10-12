const sql = require('../../config/mysql');

const Vuelo = function(vuelo){
    this.pnr = vuelo.pnr;
    this.status = vuelo.status;
    this.origin = vuelo.origin;
    this.destination = vuelo.destination;
}

Vuelo.findByPnr = (pnr, result) => {

    sql.query(`SELECT pnr, status, origin, destination FROM br_booking_info WHERE pnr = "${pnr}"`,(err, res) => {
        if(err) {
            console.log('error consultando en base de datos', err);
            result(err, null);
            return;
        }
        if(res.length){
            console.log('vuelo encontrado:  '+res[0]);
            result(null, res[0]);
            return;
        }

        result({kind : "not_found"}, null);
    })

}

module.exports = Vuelo;