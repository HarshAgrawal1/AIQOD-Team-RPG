# Voice Cloning Web App  

This is a **Node.js-based web application** that allows users to upload a **sample voice** and **text input**, then generates a speech file using the **XTTS v2** model for download.

## 🚀 Features  
- Upload a sample voice and text input  
- Generate speech using the **XTTS v2 model**  
- Download the generated speech file  
- Built with **Node.js, Express.js, and Multer**  

## 🛠️ Technologies Used  
- **Node.js** - Backend runtime  
- **Express.js** - Web framework  
- **Multer** - File upload handling  
- **XTTS v2** - AI-powered text-to-speech model  
- **FFmpeg** (optional) - Audio processing  

## 💂️ Project Structure  
```
/voice-cloning-app
│── /uploads            # Directory for uploaded files
│── /public             # Frontend assets (HTML, CSS, JS)
│── index.js           # Main Express server
│── package.json        # Dependencies and scripts
│── README.md           # Project documentation
```

## ⚡ Installation  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/voice-cloning-app.git
   cd voice-cloning-app
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Run the server**  
   ```bash
   node server.js
   ```
   Or use **nodemon** for auto-restart:  
   ```bash
   npm install -g nodemon
   nodemon server.js
   ```

4. **Expose your server using ngrok**  
   ```bash
   ngrok http 5000
   ```

5. **Access the web app**  
   Open [http://localhost:5000](http://localhost:5000) in your browser.

## 🛠️ API Endpoints  

### 🔹 Upload Voice and Text  
**POST** `/process`  
- **Body**: `voiceFile` (audio file), `text` (string)  
- **Response**: Generates speech and provides a download link  

### 🔹 Download Speech File  
**GET** `/download/  
- **Response**: Serves the generated speech file  

## 📌 To-Do  
- [ ] Implement authentication  
- [ ] Support multiple audio formats  
- [ ] Deploy on a cloud service  



