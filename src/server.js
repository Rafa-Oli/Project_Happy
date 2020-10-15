//importar dependencia
const express = require('express')

//iniciando o express
const server = express()

//criar uma rota
server.get('/', () => {})

//ligar o servidor
server.listen(5500)