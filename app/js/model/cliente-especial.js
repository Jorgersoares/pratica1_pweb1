class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._dependentes = Array();
    }
    adicionarDepedente(dependente) {
        this._dependentes.push(dependente);
    }
    listarDepedentes() {
        return this._dependentes;
    }
}
