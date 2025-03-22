# HTML/CSS
### 1 - Por que criar a div container ao invés de usar o próprio body?

> Usar uma div container permite maior controle sobre o layout, como aplicar margens automáticas para centralizar o conteúdo, definir larguras específicas e estilizações que não afetem todo o body. O body geralmente é usado como base global, enquanto o container organiza o conteúdo principal.


### 2 - O que acontece se o CSS abaixo não estiver no lugar certo? Existe uma ordem necessária?

```
 .ocultar { 
   display: none; 
 }
```
> A ordem do CSS no style é o MAIS IMPORTANTE e irá refletir a prioridade entre as regras aplicadas. Por exemplo no código abaixo:
```` 
<style>
      .vermelha {
        background-color: red;
      }        

      .azul {
        background-color: blue;
      }
    
    </style>
  </head>
  <body>
    <div class="container">
      <div class="azul vermelha">
        <p>Conteúdo da DIV</p>
      </div>
    </div>
  </body>
````
> No CSS, vemos primeiro o estilo que aplica um fundo vermelho, depois o estilo do fundo azul.
> Na aplicação da CLASS, vemos que primeiro seria azul, depois vermelha, mas, a DIV ficará azul, pois ela respeita a ordem declarada no style. E sempre a "regra" mais recente (de cima para baixo), será aplicada. Nesse caso, a regra mais recente é a .azul, então o fundo da div será azul. 



# HTML Table
### 3 - Qual a função das tags < th>, < td>, < tbody> e < thead>?

```
<th> Define cabeçalhos de tabelas, geralmente usados na primeira linha. O texto é renderizado em negrito e centralizado por padrão.
<td> Representa células normais da tabela (dados).
<thead> Agrupa o cabeçalho da tabela, usado com <th >.
<tbody>: Agrupa o corpo principal da tabela, separado do cabeçalho (< thead>). Usar <thead> e <tbody> ajuda na acessibilidade e organização.
```
Referência para Tables [Clique aqui W3C](https://www.w3schools.com/html/html_tables.asp)

# JavaScript e JSON

### 4 - O que é um JSON ?
> Um JSON é uma estrutura que usamos para armazenar valores, e para acessar os valores, temos as KEYS (chaves)


### 5 - Para que serve JSON.stringify?
>O JSON.stringify converte objetos JavaScript para o formato JSON, necessário para enviar dados ao back-end no corpo da requisição (body)
> Sem converter:
```
const objeto = {
  nome: "João",
  idade: 25,
  ativo: true
}

console.log(objeto["nome"])
console.log(objeto.nome)

// Usando o JSON.stringify:

const json = JSON.stringify(objeto);
console.log(json);

{
  "nome": "João",
  "idade": 25,
  "ativo": true,
}

```





### 6 - O que significa este trecho de código?
  ```
  body: JSON.stringify({
      "descricao": "Notebook Intel Core i7 7700k",
      "valor_custo": 1999.90,
      "qtd_estoque": 2,
      "marca": "DELL"
  });
  O trecho de código acima, indica que iremos enviar no corpo da requisição (body), um JSON de objetos.
  No caso, as informações do notebook, possuem chaves com índices para identificar as informações, por exemplo:
  Se precisarmos saber a MARCA dele, precisamos acessar a key "marca", e lá, encontraremos o valor "DELL".
  ```


# Fetch API e Integração Back-End

### 7 - Para que serve o fetch?
> O fetch é usado para realizar requisições HTTP assíncronas (GET, POST, PUT, DELETE, etc.) entre o front-end e o back-end. Ele permite buscar ou enviar dados, por exemplo, ao interagir com APIs ou servidores.

### 8 - Qual é a diferença entre await e fetch?
> - fetch é o método que realiza a requisição e retorna uma Promise.
> - await é usado para "esperar" o resultado dessa Promise antes de continuar a execução do código.

### 9 - Qual é a função de body: JSON.stringify no fetch?
> Ao enviar uma requisição, o corpo dela (body), terá os dados em um formato de JSON (JSON.stringfy).
> fetch é o comando usado para enviar a requisição.

### 10 - Como evitar erros como "não é possível realizar a leitura de objetos/valores nulos"?
> Isso geralmente acontece porque o elemento ou variável acessado não foi encontrado ou inicializado. Certifique-se de que o elemento existe no DOM antes de manipulá-lo. Use um seletor correto e verifique a existência.

### 11 - Por que os nomes dos campos no JSON precisam corresponder aos nomes dos inputs e variáveis no código?
> Para pegar as informações que o usuário digitou nos inputs, e para enviar elas na requisição.

### 12 - Ainda me perco na parte de conectar o banco com o código usando fetch.
> Nós não temos o comando fetch se conectando diretamente com o BD. Nós fazemos o front pedir algo para o back-end, e o back-end que se comunica com o BD.

# Variáveis e Funções

### 13 - Qual a diferença entre let e const?
> Variáveis declaradas com o comando "const" não podem ter seu valor alterado, já as variáveis com let, podem ser alterados os valores. Exemplo:
```
let nome "Matheus"
nome = "Bruno"
alert(nome) // vai exibir "Bruno"

const idade = 34
idade = 36 // vai dar um erro, pois não é possível alterar o valor de uma variável const
```

### 14 - O que é e qual a necessidade de arrow functions?
> Uma function, é um trecho de código que faz alguma coisa, sempre que você chamar ela, por exemplo:
```
function exibirMensagem(){
  alert("Olá Mundo");
}
```
> Uma Arrow function, é praticamente a mesma coisa, porém ela não tem nome, e não tem como você chamar ela mais de uma vez, pois ela é uma função anônima (sem nome), por isso não se pode chamar mais de 1x.
```
  window.addEventListener("load", () => {
    alert("Olá Mundo");
  });
```

### 15 - Como relacionar uma variável declarada com let no script com innerHTML?
```
let cidade = "Presidente Prudente"

//no HTML, poderia usar assim:
document.getElementById("cidade").innerHTML += `<h2>${cidade}</h2>`;
```

# Conceitos do Back-End

### 16 - O que é .env e como ele vincula a porta do back-end?
> O arquivo .env é usado para armazenar variáveis de ambiente, como configurações sensíveis (porta, credenciais, URLs). Essas variáveis podem ser acessadas no código com bibliotecas como dotenv


### 17 - Para que serve bodyParser e o trecho:
  ``` 
    app.use(bodyParser.urlencoded({ extended: true }));
  ```
> É usado para conseguir interpretar os dados que chegam através do form html < form>.

### 18 - Como vincular o banco de dados ao projeto?
> Escolha uma biblioteca para o banco, como mysql2 ou sequelize para MySQL e configure no back-end:
```
const mysql = require('mysql2/promise');
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senha',
    database: 'meu_banco',
});

conexao.connect(err => {
    if (err) {
      console.error('Erro ao conectar ao banco:', err);
    }
    else {
      console.log('Banco conectado com sucesso!');
    }
});
```

### 19 - Como conectar o HeidiSQL ao VSCode?
> Pode usar uma extensão para usar um SGBD junto no VSCode:
![alt text](image.png)

# Conceitos Gerais
### 20 - Como funciona o CAPTCHA? O que impede robôs de "responderem"?
> Existem algumas formas do CAPTCHA interagir e detectar padrões:
> 1 - Desafios de Reconhecimento Visual ou Auditivo;
> 2 - Análise de Interações;
> 3 - Resolução de Tarefas Simples;
> 4 - Validação de Tokens;
> 5 - Monitoramento de Comportamento;

> Os CAPTCHAs funcionam porque exploram tarefas que humanos realizam intuitivamente (como identificar objetos ou interpretar texto), enquanto robôs dependem de algoritmos que ainda possuem limitações nessas áreas. À medida que a tecnologia avança, os CAPTCHAs também evoluem para se manter eficazes contra bots cada vez mais sofisticados.
>

### 21 - Como pesquisar ou lembrar comandos de forma prática, sem copiar anotações?
> A prática e tempo leva a memorização, mas nem sempre vamos nos lembrar de tudo. 
> Para isso, também podemos consultar sempre a documentação oficial da linguagem ou biblioteca que estamos usando.


Link da [Documentação Oficial](https://www.w3schools.com/) da w3c sobre HTML/CSS/JavaScript

Link da [Documentação Oficial](https://nodejs.org/docs/latest/api/) de NodeJS


# Exercícios para Praticar
### 1 - Projeto ferias parte 1
Crie uma pasta chamada minhas férias, e inicialize um projeto com o comando npm init, preencha as informações do projeto.
Instale os pacotes necessários para criar uma API
> express, mysql2, cors, nodemon

Suba o seu servidor na porta 3000, e crie uma rota, com o método GET. 
Nome da rota: home
para acessar ela, no navegador, você irá digitar: localhost:3000/home
Essa rota, deve devolver uma resposta: Acessando a rota padrão

### 2 - Projeto ferias parte 2
Crie agora, no seu arquivo entry point, a estrutura de código para conexão com o banco.
Tem a estrutura básica nesse arquivo que você está lendo, no item 18.
Agora, crie um BD no HeidiSQL, chamado "ferias" e crie a tabela: atividades
Dentro dela, crie os campos: id (INT, AUTO INCREMENT, NOT NULL, PRIMARY KEY), descricao (varchar 160)
Insira pelo menos 3 atividades, passeios que você fez nas férias.

Voltando no arquivo do entry point, crie uma rota, com o método GET, chamada: ferias
para acessar ela, no navegador, você irá digitar: localhost:3000/ferias

ao acessar ela, você precisa executar um SELECT no BD, e devolver como resposta, um JSON com as informações.