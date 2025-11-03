document.getElementById("send").addEventListener("click", async () => {
  const prompt = document.getElementById("prompt").value;
  const responseDiv = document.getElementById("response");

  responseDiv.textContent = "⏳ Processando...";

  try {
    const res = await fetch("http://localhost:3000/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    responseDiv.textContent = data.result;
  } catch (err) {
    responseDiv.textContent = "❌ Erro ao conectar ao servidor.";
  }
});
