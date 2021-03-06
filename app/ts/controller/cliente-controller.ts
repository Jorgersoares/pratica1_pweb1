class ClienteController {

    private inputNome : HTMLInputElement;
    private inputCpf : HTMLInputElement;
    private conta : HTMLSelectElement;

    private clientes : Clientes;
    private contas : Contas;

    constructor() {
        this.inputNome = <HTMLInputElement>document.querySelector('#nome');
        this.inputCpf = <HTMLInputElement>document.querySelector('#cpf');
        this.conta = <HTMLSelectElement>document.querySelector('#contas')
        this.clientes = new Clientes();
        this.contas = new Contas();
    }

    inserir(event : Event){
        event.preventDefault();
        const selected_conta = this.contas.pesquisar(this.conta.value);
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, selected_conta);
        this.clientes.inserir(novoCliente);
        console.log(this.clientes.listar())
        this.inserirClienteNoHTML(novoCliente);
    }

    adicionarContasSelect(){
        this.contas.listar().forEach(conta => {
            const elementoOption = document.createElement('option');
            elementoOption.value = conta.numero;
            elementoOption.text = conta.numero;
            this.conta.appendChild(elementoOption)
        })
    }

    inserirClienteNoHTML(cliente : Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = `Nome: ${cliente.nome} Conta: ${cliente.conta}`;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.nome);
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
        );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
