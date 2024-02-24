class Comanda{
    
    constructor(body){
        this.id = body.id;    
        this.numero_mesa = body.numero_mesa;
        this.horario = body.horario;
        this.pago = body.pago;
    }

    getId(){
        return this.id;
    }
    
    getNumero(){
        return this.numero_mesa;
    }

    getHorario(){
        return this.horario;
    }

    getPago(){
        return this.pago;
    }

    setId(id){
        this.id = id;
    }
    
    setNumero(numero){
        this.numero_mesa = numero;
    }

    setHorario(horario){
        this.horario = horario;
    }

    setPago(pago){
        this.pago = pago;
    }
}

module.exports = Comanda;