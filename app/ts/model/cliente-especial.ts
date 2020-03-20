class ClienteEspecial extends Cliente{

    private _dependentes : Array<Cliente>;

    constructor(nome : string, cpf : string, conta : Conta) {
        super(nome,cpf,conta);
        this._dependentes = Array<Cliente>();
    }

    adicionarDepedente(dependente : Cliente){
        this._dependentes.push(dependente);
    }

    listarDepedentes(){
        return this._dependentes;
    }


}
