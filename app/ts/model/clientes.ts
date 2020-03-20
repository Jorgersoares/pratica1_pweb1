class Clientes{

    private _clientes: Array<Cliente>;

    constructor() {
        this._clientes = Array<Cliente>();
    }

    inserir(cliente: Cliente){
        this._clientes.push(cliente);
    }

    remover(cpf : string){
        const client = this.pesquisar(cpf);
        if(client){
            this._clientes = this._clientes.filter(cliente => cliente.cpf !== cpf);
        }
    }

    listar(){
        return this._clientes;
    }

    pesquisar(cpf:string){
        return this._clientes.find(cliente => cliente.cpf === cpf)
    }
}
