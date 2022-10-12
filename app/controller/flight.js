const Vuelo = require('../model/flight');

const getVuelo = (req, res) => {
    try{

        Vuelo.findByPnr(req.params.pnr, (err, data) => {
            if(err){
                res.send({
                    message: `error obteniendo vuelo`
                })
            }else{
                res.send(data);
            }
        })

    }catch(e){
        res.sed({
            message: `error consultado vuelo`
        })
    }
}


module.exports = {getVuelo}