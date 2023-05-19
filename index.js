let menu;
const doadoresSangue = [];

// Laço de repetição
while (menu !== 5) {
  menu = Number(
    prompt(`===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
        1. Cadastrar doador
        2. Listar doadores
        3. Buscar doador por tipo sanguíneo
        4. Buscar doador por data da última doação
        5. Sair
        Escolha uma opção:
        `)
  );

  // Switch para fazer algo dependendo da função
  switch (menu) {
    case 1:
      cadastrar();
      break;
    case 2:
      listar();
      break;
    case 3:
      buscarDoadorTipoSanguineo();
      break;
    case 4:
      buscarDadosData();
      break;
      case 5 :
        alert("Programa finalizado, volte sempre!")
        break;
    default:
      
        alert("Opção não encontrada, tente novamente!");
      break;

  }
}
// Cadastro de Doador
function cadastrar() {
  const nome = prompt("Digite seu nome");
  const idade = Number(prompt("Digite sua idade"));
  const peso = Number(prompt("Digite seu peso"));
  const tipoSangue = prompt("Digite seu tipo sanguineo").toLowerCase();
  const ultimaData = prompt("Digite a ultima data de doação? DD/MM/AAAA");

  const doador = {
    nome,
    idade,
    peso,
    tipoSangue,
    ultimaData,
  };

  doadoresSangue.push(doador);

  alert("Doador cadastrado com sucesso");
}

// Listar os Doadores
function listar() {
  if (doadoresSangue.length === 0) {
    alert("Não existe doadores cadastrados");
  } else {
    let mensagem = `
        --------------------
        LISTAGEM DE DOADORES:
        --------------------
        NOME | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
        `;

    for (let doador of doadoresSangue) {
      mensagem += `\n         ${doador.nome} ||     ${doador.idade} ||      ${doador.peso} ||    ${doador.tipoSangue} ||       ${doador.ultimaData}`;
    }
    alert(mensagem);
  }
}

// Buscar Doador
function buscarDoadorTipoSanguineo() {
  if (doadoresSangue.length === 0) {
    alert("Não existe doadores cadastrados");
  } else {
    const buscaTipoSanguineo = prompt("Digite o tipo sanguine").toLowerCase();

    let mensagem = `
        ------------------------
        RESULTADO DA BUSCA:
        ------------------------
        NOME | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
        `;

    for (let doador of doadoresSangue) {
      if (doador.tipoSangue.includes(buscaTipoSanguineo)) {
        mensagem += `\n         ${doador.nome} ||     ${doador.idade} ||      ${doador.peso} ||    ${doador.tipoSangue} ||       ${doador.ultimaData}`;
      }
    }

    alert(mensagem);
  }
}

// Buscar Doador pela data
function buscarDadosData() {
  if (doadoresSangue.length === 0) {
    alert("Não existe doadores cadastrados");
  } else {
    const dataBusca = prompt("Digite o a ultima data? DD/MM/AAAA");

    let mensagem = `
        ------------------------
        RESULTADO DA BUSCA:
        ------------------------
        NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
        `;

    for (let doador of doadoresSangue) {
      if (doador.ultimaData === dataBusca) {
        mensagem += `\n         ${doador.nome} ||     ${doador.idade} ||      ${doador.peso} ||    ${doador.tipoSangue} ||       ${doador.ultimaData}`;
      }
    }

    alert(mensagem);
  }
}