//let contaController = new ContaController();
let clienteController = new ClienteController();
//contaController.listar();
clienteController.adicionarContasSelect();
//Cria objeto da classe de armazenamento de clientes
let clientes = new Clientes();
const c1 = new Conta('1', 100);
const c2 = new Conta('2', 150);
//Cria clientes
const cli1 = new Cliente('jorge', '111.111.111-01', c1);
const cli2 = new Cliente('maria', '111.111.111-02', c2);
//Manipula clientes
clientes.inserir(cli1);
clientes.inserir(cli2);
console.log(clientes.pesquisar('111.111.111-01'));
clientes.remover('111.111.111-01');
console.log(clientes.listar());
//Cria cliente especial
const cliE1 = new ClienteEspecial('joao', '123', c1);
cliE1.adicionarDepedente(cli1);
console.log(cliE1);
