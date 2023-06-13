# AdotaPet
Trabalho de Engenharia de Software - ICMC - 1 semestre - 2023 - Grupo 2



Relatório do Projeto:

## Sumário
* [Integrantes](#integrantes)
* [Descrição do Projeto](#descrição-do-projeto)
* [Requisitos](#requisitos)
* [Comentários sobre o Código](#comentários-sobre-o-código)
* [Plano de Testes](#plano-de-testes)
* [Resultado dos Testes](#resultado-dos-testes)
* [Tutorial da Instalação da Aplicação](#tutorial-da-instalação-da-aplicação)
* [Problemas encontrados](#problemas-encontrados)
* [Comentários adicionais](#comentários-adicionais)  

## Integrantes
 - Rafael Corona  |  Número USP: 4769989
 - coloquem o nome e nusp de vcs
 -  
 -
 -
 
 ## Descrição do Projeto
- Neste projeto, vamos implementar um sistema para aproximar pessoas interessadas em adotar animais e o canil municipal de São Carlos. A idea é que, por meio desse sistema, sejam disponibilizadas informações a quem está pensando em adotar um animal para que essas pessoas possam escolher animais que se adaptem ao seu estilo de vida e preferências mais facilmente.

## Requisitos
- O sistema possui dois tipos de usuários, Clientes e Administradores:  
     - Administradores são resposáveis por registrar/gerenciar administradores, clientes e os produtos/serviços providos. A aplicação já vem com uma conta admin com senha admin  
     - Clientes são usuários que acessam o sistema para comprar produtos/serviços 
- Os dados de Administrador incluem: nome, id, celular, email, senha. 
- Os dados de cada cliente incluem: nome, id, endereço, celular, email, senha, foto.  
- Os dados de cada vídeo-aula incluem: nome, id, foto da prévia, descrição, preço, quantidade vendida, URL para o vídeo.
- Venda de vídeo-aulas: As licenças para assistir video-aulas são selecionadas, e incluídas no carrinho. Licenças são compradas usando o número de um cartão de crédito (qualquer número é aceitado pelo sistema). A quantidade de licenças vendidas é adicionada à quantidade vendida. Carrinhos são esvaziados somente no pagamanto ou pelos clientes. 
- Gerenciamento de Produtos/Serviços: Administradores podem criar/atualizar/ler/deletar novos produtos e serviços.
- Prévia de video-aula: será possível que Clientes e Administradores visualizem a prévia de uma aula antes de realizar a compra da mesma
- O sistema deve ser responsivo e prover boa usabilidade e requisitos de acessibilidade


#### Informações armazenadas no servidor
 - Dados de usuário cliente: (nome, id, endereço, celular, email, senha, foto)
 - Dados de usuário administrador: (nome, id, celular, email, senha)
 - Dados de cada vídeo aula: (nome, id, foto da prévia, descrição, preço, quantidade vendida, URL para o vídeo)
 - Total de aulas vendidas

#### Mockups
É possível encontrar os mockups para a interface seguindo o link abaixo ou na pasta [./mockups](../master/Mockups). Usando o figma, é possível simular o diagrama de navegação e ver a mudança de página interativamente.  
 
 - *https://www.figma.com/file/AXy83V3YRN11acqzAENMed/Mockup-AdotaPet?type=design&node-id=0%3A1&t=Rjfwdq3PePUrJdEl-1*


## Comentários sobre o Código
- O código foi estruturado da seguinte maneira:
   - Arquivos css: os arquivos que vão adicionar estilo para as páginas html, temos um para cada página. Além do css individual temos um arquivo de reset para resetar as configurações padrão e um arquivo style para o footer e header!
   - Arquivos html: para cada página temos um arquivo html contendo seu conteúdo
   - imagens: imagens usadas nas páginas
## Plano de Testes   
Planejamos testar a consistência e responsividade do sistema em diversos dispositivos e navegadores
## Resultado dos Testes  
Até o momento não foram realizados testes
## Tutorial da Instalação da Aplicação  
## Problemas encontrados  
Até o momento não foram encontrados grandes problemas
## Comentários adicionais  
