
  

<h1>API EasyPass</h1>

  

  

<p  align="center">

  

  

<img  src="http://img.shields.io/static/v1?label=&message=Typescript&color=blue&style=for-the-badge"/>

  

  

<img  src="http://img.shields.io/static/v1?label=&message=Node&color=green&style=for-the-badge"/>

  

  

<img  src="https://img.shields.io/static/v1?label=STATUS&message=Em%20andamento&color=yellow&style=for-the-badge"/>

  

  

</p>

  

  

### Tópicos

  

 :small_blue_diamond: [Descrição do projeto](#andamento-do-projeto)

:small_blue_diamond: [Andamento do projeto](#descrição-do-projeto)

  

  

:small_blue_diamond: [Configurando o projeto](#configurando-o-projeto)

  

  

:small_blue_diamond: [Tecnologias, plugins e libs](#tecnologias-plugins-e-libs-books)

    

## Descrição do projeto

  

  

<p  align="justify">

  

  

API responsável por tratar os dados do site EasyPass, que é um site que busca armazenar as senhas para não haver a necessidade de decorar várias senhas, assim permintindo criar senhas mais variadas e seguras

  

  

</p>

  
## Andamento do projeto
- [x] Criar banco de dados MongoDB;
 - [x] Criar função de cadastro;

- [x] Criar função de login;

- [ ] Criar função de armazenamento das senhas;

- [ ] Criar função de alteração de cadastro;

- [ ] Criar função de recuperação de login;

- [ ] Hospedar o projeto;

## Configurando o Projeto

  

  

Para rodar o servidor é preciso antes incuir o .env com as seguintes configurações

  

  

```
MONGODB_URI= URI do banco de dados MongoDB  

JWT_SECRET= Chave secreta usada para autenticar token de autenticação
```


  

O projeto é contruído em TypeScript então para iniciar o servidor em modo de desenvolvimento é necessário o uso do ts-node para execução do programa, o que pode ser feito através do seguinte comando, lembre-se de iniciar apenas após instalar as dependências do programa:
```
yarn start
```
ou 
```
npm run start
```
  

## Tecnologias, plugins e libs :books:

  

  

**Tecnologias JS:**

  

  

- Node - 18.x;

  

  

Dependências internas do projeto podem ser encontrada na raiz dentro do package.json, e podem ser instaladas através do seguinte comando

  

  

```

npm install  

```

  

  

ou

  

  

```  

yarn install  

```

  

  

##

  

  

**_Projeto em desenvolvimento_**