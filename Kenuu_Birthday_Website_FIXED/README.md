# Kenuu Birthday Surprise 🌹💝

A responsive, premium-style birthday website built with Python Flask, HTML, CSS and JavaScript. It includes a CSS 3D cake, animated candles, a personal letter, a photo gallery, confetti and a wish button. No background music is included.

## 1. Run it on Windows

1. Install Python 3.11 or newer from https://www.python.org/downloads/ . During installation, tick **Add python.exe to PATH**.
2. Extract this ZIP file.
3. Open the extracted `Kenuu_Birthday_Website` folder.
4. Click the folder address bar in File Explorer, type `cmd`, and press Enter.
5. Run these commands:

   ```bat
   py -m venv .venv
   .venv\Scripts\activate
   py -m pip install -r requirements.txt
   py app.py
   ```

6. Open http://127.0.0.1:5000 in your browser.
7. To stop the server, return to Command Prompt and press `Ctrl+C`.

## 2. Add real photos

The five photos you supplied are already included in `static/images/` as optimized JPGs. To replace them later, use these filenames:

- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg`
- `photo5.jpg`

JPG is recommended. If your photo is PNG, either convert it to JPG or update the corresponding filename in `app.py`. Keep photos reasonably compressed (ideally under 1–2 MB each) so the website loads quickly. The gallery now shows your five uploaded photos. The gift box opens an animated birthday note with confetti.

Edit the gallery captions in `app.py` if you want. Edit the birthday note in `templates/index.html` to make the message more personal. After changing code, refresh the browser.

## 3. Publish it online with Render (public link)

You need a GitHub account and a Render account. The public URL will be created by Render; it cannot be generated from your local computer alone.

1. Create/sign in to GitHub at https://github.com/ .
2. Create a **new repository** (for example `kenuu-birthday-surprise`). For a private birthday surprise, choose **Private** if your hosting workflow supports access to the repository; the published website itself will still be public to anyone with its link.
3. Upload the project files to the repository. Upload the `app.py`, `requirements.txt`, `Procfile`, `render.yaml`, `templates` folder and `static` folder. Do not upload `.venv`.
4. Sign in to https://render.com/ and choose **New + → Web Service**.
5. Connect GitHub and select your repository.
6. Use these settings:
   - **Runtime:** Python
   - **Build command:** `pip install -r requirements.txt`
   - **Start command:** `gunicorn app:app`
7. Click **Create Web Service** and wait for the deploy to finish.
8. Render will show a URL like `https://your-service-name.onrender.com`. Open it and test it on your phone. Share that actual URL with Kenuu through WhatsApp or Instagram.

Render's free-plan availability, sleep behaviour and terms may change. If the dashboard asks for a paid plan or the service is unavailable on a free tier, review the current plan options before deploying.

## 4. Before sharing

- Add the photos before deploying, or commit and push the photo files afterwards so Render redeploys.
- Test the link in a private/incognito window and on a phone.
- Don't add private or sensitive photos. Anyone with the public URL may be able to view the page and images.
- This is a website, not a reservation/private account page; the link is public unless you add authentication.
- Keep the `debug=True` setting only for local development. Render runs the site with Gunicorn using the included start command.

## Project structure

```text
Kenuu_Birthday_Website/
├── app.py
├── requirements.txt
├── Procfile
├── render.yaml
├── README.md
├── templates/
│   └── index.html
└── static/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── images/
        ├── photo1.jpg
        ├── photo2.jpg
        ├── photo3.jpg
        ├── photo4.jpg
        └── photo5.jpg
```
