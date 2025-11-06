// index: montar prompt a partir do formulário e ir para response.html
document.getElementById("send").addEventListener("click", () => {
  const btn = document.getElementById("send");

  const title = document.getElementById("title")?.value?.trim() || "";
  const theme = document.getElementById("theme")?.value?.trim() || "";
  const duration = document.getElementById("duration")?.value || "";
  const keywords = document.getElementById("keywords")?.value?.trim() || "";
  const tone = document.getElementById("tone")?.value || "";

  const prompt = `
Você é um roteirista profissional especializado em vídeos para YouTube.
Gere um roteiro completo em Markdown com base nas informações:

• Título: ${title}
• Tema: ${theme}
• Duração desejada: ${duration}
• Palavras-chave: ${keywords}
• Tom: ${tone}

Estrutura desejada:
1) Hook (0–7s)
2) Abertura (quem é, por que assistir)
3) Entrega principal em tópicos (com frases guia)
4) Mini-CTA no meio (sutil)
5) Objeções & respostas rápidas (2–3)
6) CTA final coerente com o vídeo
7) Encerramento
Inclua uma lista de possíveis capítulos (timestamps sugeridos) e um bloco final de SEO (título alternativo, descrição e tags).
`.trim();

  // feedback visual rápido
  btn.disabled = true;
  const original = btn.innerHTML;
  btn.innerHTML = "⏳ Preparando…";

  // passa o prompt para a página de resposta
  sessionStorage.setItem("prompt", prompt);
  window.location.href = "response.html";

  // por segurança, reabilita se algo impedir o redirect
  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = original;
  }, 1500);
});
