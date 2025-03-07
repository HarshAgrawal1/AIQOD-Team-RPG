const express = require("express");
const multer = require("multer");
const fetch = require("node-fetch");
const FormData = require("form-data");
const fs = require("fs");
const path = require("path");

const cors = require('cors'); // Ensure CORS is enabled if frontend and backend are separate
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(express.static("public")); // Serve static files (HTML, CSS, JS)

// Multer setup for file uploads
app.use(cors());
app.use(bodyParser.json());
const upload = multer({ dest: "uploads/" });


const FLASK_API_URL = "https://b9a8-34-125-246-21.ngrok-free.app/generate"; // Replace with ngrok URL or deployed API

app.post("/process", upload.single("voice"), async (req, res) => {
    try {
        if (!req.file || !req.body.text) {
            return res.status(400).json({ error: "Missing text or voice file" });
        }

        const formData = new FormData();
        formData.append("text", req.body.text);
        formData.append("language", req.body.language || "en");
        formData.append("voice", fs.createReadStream(req.file.path));

        const response = await fetch(FLASK_API_URL, {
            method: "POST",
            body: formData
        });
        const rawResponse = await response.text();
        console.log("Raw Response:", rawResponse);

        console.log(rawResponse);
        // Try parsing JSON safely
        let data;
        try {
            data = JSON.parse(rawResponse);
        } catch (error) {
            console.error("Failed to parse JSON:", rawResponse);
            return res.status(500).json({ error: "Invalid response from server" });
        }

        if (data.error) {
            return res.status(400).json({ error: data.error });
        }

        res.json({ downloadUrl: data.download_url });

    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
