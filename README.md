# 🧩 Google Classroom Quick File Downloader

A lightweight Chrome extension that adds a quick download button to every file shared in **Google Classroom** — so you can download Drive and file attachments instantly.

---

## ⚙️ Features
- Adds a small ⬇️ button next to each classroom file.
- Supports:
  - Google Drive links  
  - `.pdf`, `.docx`, `.pptx`, `.xlsx`, `.txt`, `.jpg`, `.png`, `.gif`, `.webp`
- Click once to directly download the file — no redirects, no extra steps.
- Supports any Chromium based browser.

---

## 📦 Installation (Developer Mode)
1. Download or clone this repo:
   ```bash
   git clone https://github.com/yourusername/classroom-quick-downloader.git
   ```
2. Open **Chrome → Extensions → Manage Extensions**  
   or visit:  
   ```
   chrome://extensions/
   ```
3. Enable **Developer Mode** (top right corner).  
4. Click **Load unpacked** → select this project folder.  
5. Open Google Classroom — you’ll see ⬇️ buttons appear next to files.

---

## 🧠 How it works
- `content.js` scans the Classroom page and adds quick download buttons beside supported file links.  
- `background.js` handles the actual download when a button is clicked.  
- `manifest.json` defines permissions and Chrome extension configuration.

---

## 🧰 Permissions
- `downloads` – to trigger file downloads.  
- `activeTab`, `scripting` – to inject buttons dynamically.  
- `https://classroom.google.com/*`, `https://drive.google.com/*` – to access Classroom and Drive pages.

---

## 🪪 License
MIT License — free to use and modify.

---

## ☕ Buy me a coffee
If you liked this simple extension, please donate to my PayPal to help me out
