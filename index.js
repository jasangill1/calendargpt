import { Configuration, OpenAIApi } from "openai";
import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// It's a good practice to store sensitive information like API keys in environment variables
const apiKey = "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";
const organizationId = "org-k7gdf8t0CkOLrnZTvtfeCLwW";

const configuration = new Configuration({
  organization: organizationId,
  apiKey: apiKey,
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cors());

app.post('/generate', async (req, res) => {
  const messages = req.body.messages;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    console.log("API response:", completion.data);
    console.log("Message object:", completion.data.choices[0].message);

    res.json({
      completion: completion.data.choices[0].message,
    });
  } catch (error) {
    console.error("Error generating completion:", error);
    res.status(500).json({ error: "Error generating completion" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
