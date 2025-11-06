(function () {
    const responseDiv = document.getElementById("response");
    const backBtn = document.getElementById("back");
    const copyBtn = document.getElementById("copy");

    const prompt = sessionStorage.getItem("prompt");

    if (!prompt) {
        responseDiv.textContent = "⚠️ Nenhum prompt encontrado. Volte e preencha o formulário.";
        return;
    }

    backBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });

    copyBtn.addEventListener("click", async () => {
        try {
            const text = responseDiv.innerText;
            await navigator.clipboard.writeText(text);
            copyBtn.textContent = "Copiado!";
            setTimeout(() => (copyBtn.textContent = "Copiar"), 1200);
        } catch {
            alert("Não foi possível copiar o texto.");
        }
    });

    responseDiv.innerHTML = `
    <div class="loading">
      <div class="spinner" aria-hidden="true"></div>
      <span>Processando...</span>
    </div>
  `;

    // === Mini parser de Markdown para HTML ===
    function markdownToHTML(md) {
        if (!md) return "";

        let html = md
            .replace(/^### (.*$)/gim, "<h3>$1</h3>")
            .replace(/^## (.*$)/gim, "<h2>$1</h2>")
            .replace(/^# (.*$)/gim, "<h1>$1</h1>")
            .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
            .replace(/\*(.*?)\*/gim, "<em>$1</em>")
            .replace(/^- (.*$)/gim, "<li>$1</li>")
            .replace(/^\d+\.\s+(.*$)/gim, "<li>$1</li>")
            .replace(/```([\s\S]*?)```/gim, "<pre><code>$1</code></pre>")
            .replace(/\n$/gim, "<br />");

        // Envolve blocos de <li> com <ul>
        html = html.replace(/(<li>[\s\S]*?<\/li>)/gim, "<ul>$1</ul>");
        return html;
    }

    // === Fetch padrão ===
    (async () => {
        try {
            const res = await fetch("http://localhost:5500/api/gemini", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            });

            const data = await res.json();

            if (data?.result) {
                const html = markdownToHTML(data.result);
                responseDiv.innerHTML = html;
            } else {
                responseDiv.textContent = "⚠️ Resposta vazia da IA.";
            }
        } catch (err) {
            console.error(err);
            responseDiv.textContent = "❌ Erro ao conectar ao servidor.";
        }
    })();
})();
