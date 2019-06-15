# integration-service

Requisitos:
    Ter o Node.Js instalado
    Ter o NPM instalado
    Instalar todas as dependências do projeto (Executar o comando: 'npm install' no terminal dentro da pasta do projeto )
    Ainda dentro da pasta, no terminal, digite 'npm start'.





OBS.: A quantidade de dados que a API retorna por fazer alguns computadores com pouca memória/capacidade de processamento travarem. Para isso, no arquivo /src/services/integration.service.ts a linha 17 pode ser descomentada, fazendo com que apenas parte dos resultados sejam usados e menos requisições por endereço feitas.
Foi necessário para o desenvolvimento, pois a máquina usada no desenvolvimento do teste não conseguia processar se fosse utilizar os 100000 registros.
Provavelmente isso não afeta o resultado final nem a validade do teste, pois a amostra utilizada prova o conceito.