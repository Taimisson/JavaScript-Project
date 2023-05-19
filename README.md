# Hemocentro - Sistema de Cadastro de Doadores de Sangue

Este é um projeto em JavaScript que implementa um sistema de cadastro de doadores de sangue para um Hemocentro. O programa permite cadastrar doadores, listar os doadores cadastrados, buscar doadores por tipo sanguíneo e buscar doadores por data da última doação.

## Funcionalidades

O programa oferece as seguintes funcionalidades:

1. **Cadastrar doador**: Permite cadastrar um novo doador de sangue. Solicita informações como nome, idade, peso, tipo sanguíneo e data da última doação.

2. **Listar doadores**: Exibe uma listagem de todos os doadores cadastrados, mostrando os campos nome, idade, peso, tipo sanguíneo e data da última doação.

3. **Buscar doador por tipo sanguíneo**: Permite buscar doadores com base no tipo sanguíneo informado. Apresenta uma listagem dos doadores que possuem o tipo sanguíneo pesquisado.

4. **Buscar doador por data da última doação**: Permite buscar doadores com base na data da última doação informada. Apresenta uma listagem dos doadores que fizeram doação nessa data.

5. **Sair**: Encerra o programa.

## Instruções de Uso

Ao executar o programa, será exibido um menu com as opções disponíveis. Para selecionar uma opção, digite o número correspondente e pressione Enter.

Caso selecione a opção 1, você será solicitado a fornecer os dados do doador, como nome, idade, peso, tipo sanguíneo e data da última doação.

Caso selecione a opção 2, será exibida uma listagem com os doadores cadastrados, exibindo os campos nome, idade, peso, tipo sanguíneo e data da última doação.

Caso selecione a opção 3, você será solicitado a informar o tipo sanguíneo que deseja buscar. Será exibida uma listagem dos doadores que possuem o tipo sanguíneo informado.

Caso selecione a opção 4, você será solicitado a informar a data da última doação que deseja buscar. Será exibida uma listagem dos doadores que fizeram a última doação nessa data.

Caso selecione a opção 5, o programa será encerrado.

## Observações

- O programa utiliza um array chamado `doadoresSangue` para armazenar os dados dos doadores cadastrados.

- O programa utiliza um laço de repetição `while` para manter o menu ativo até que a opção de sair seja selecionada.

- O programa utiliza a função `prompt` para solicitar informações ao usuário e a função `alert` para exibir mensagens na tela.

- O tipo sanguíneo é armazenado em letras minúsculas para facilitar a busca.

- As datas são inseridas no formato "DD/MM/AAAA".

- O programa valida se existem doadores cadastrados antes de realizar uma busca.

- Caso uma opção inválida seja selecionada no menu, será exibida uma mensagem de erro.

---
Este projeto foi desenvolvido em JavaScript por Taimisson C. Schardosim. Sinta-se à vontade para utilizar, modificar e contribuir com o código.
