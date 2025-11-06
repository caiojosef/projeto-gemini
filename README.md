# 🎬 Gerador de Roteiros com IA (Gemini API)

Aplicação simples e moderna que gera **roteiros completos para vídeos de YouTube** usando a **API do Google Gemini**.  
O projeto é dividido em duas partes: um **backend em Node.js/Express** e um **frontend HTML/CSS/JS puro**.

---

## 🚀 Funcionalidades

- Formulário para inserir informações do vídeo (título, tema, duração, tom etc.);
- Integração direta com a API do Gemini para gerar roteiros completos;
- Conversão e exibição formatada em Markdown (títulos, listas, negritos...);
- Separação entre página de entrada (`index.html`) e resultado (`response.html`);
- Copiar o roteiro com 1 clique.

---

## 🛠️ Tecnologias Utilizadas

**Backend**
- Node.js + Express
- CORS
- Dotenv
- SDK oficial do Gemini (`@google/genai`)

**Frontend**
- HTML5 / CSS3 / JavaScript puro
- Live Server (para desenvolvimento local)

---


---

## ⚙️ Configuração e Execução

### 1️⃣ Clonar o repositório

git clone https://github.com/seu-usuario/projeto-gemini.git
cd projeto-gemini
2️⃣ Configurar o backend
Entre na pasta backend e instale as dependências:


cd backend
npm install
Crie um arquivo .env com a sua chave do Gemini:


GEMINI_API_KEY=sua-chave-aqui
PORT=5500
Inicie o servidor:


npm start
O backend será iniciado em:


http://localhost:5500
3️⃣ Rodar o frontend
O frontend é totalmente estático.
Para rodar localmente, use a extensão Live Server do VS Code.

Clique com o botão direito em index.html

Selecione “Open with Live Server”

O site abrirá no navegador, geralmente em http://127.0.0.1:5500 ou http://127.0.0.1:5501

💡 Importante: o backend precisa estar rodando (npm start) antes de enviar o prompt,
pois o frontend se comunica via fetch("http://localhost:5500/api/gemini").

🧠 Como Funciona
O usuário preenche o formulário e clica em Gerar Roteiro;

O JavaScript monta um prompt estruturado e o envia via fetch para o backend;

O backend envia esse prompt para a API do Gemini;

O Gemini responde com o roteiro em texto Markdown;

O frontend exibe o resultado formatado, com títulos, listas e negritos.

🧩 Scripts principais

Iniciar o backend
npm start
Rodar o frontend
Via Live Server do VS Code

Ou qualquer servidor estático (ex: npx serve frontend)

📜 Licença
Este projeto é de uso livre para fins educacionais e demonstração.
Desenvolvido por Caio Josef.
