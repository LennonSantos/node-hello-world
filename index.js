// Importa o módulo http do Node.js
const http = require('http');

// Cria um servidor que responde "Hello, World!" para todas as requisições
const server = http.createServer((req, res) => {
  // Define o cabeçalho da resposta HTTP
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Envia a resposta
  res.end('Hello, World!\n');
});

// Define a porta onde o servidor irá rodar
const PORT = 3000;

// Inicia o servidor
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
