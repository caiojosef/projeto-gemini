// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(cors());    
app.use(express.json());


app.use((req, res, next) => {
    console.log(`📩 ${req.method} ${req.url}`);
    next();
});

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post("/api/gemini", async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt || !prompt.trim()) {
            return res.status(400).json({ error: "Campo 'prompt' é obrigatório." });
        }

        
        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        // No SDK novo, a resposta já tem .text
        res.json({ result: result.text });
    } catch (err) {
        console.error("Erro Gemini:", err?.response?.data || err);
        res.status(500).json({ error: "Erro ao chamar a API Gemini." });
    }
});

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(` Servidor rodando em http://localhost:${port}`));
