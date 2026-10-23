from pathlib import Path
from flask import Flask, render_template

# Resolve folders relative to this file so the app works reliably on Render.
BASE_DIR = Path(__file__).resolve().parent
app = Flask(
    __name__,
    template_folder=str(BASE_DIR / "templates"),
    static_folder=str(BASE_DIR / "static"),
)

@app.route("/")
def home():
    gallery = [
        {"file": "photo1.jpg", "caption": "A little mirror moment ✨", "number": "01"},
        {"file": "photo2.jpg", "caption": "Purple-day memories 💜", "number": "02"},
        {"file": "photo3.jpg", "caption": "Beautiful places, beautiful you 🌷", "number": "03"},
        {"file": "photo4.jpg", "caption": "Cute little moments 💗", "number": "04"},
        {"file": "photo5.jpg", "caption": "Always iconic, Kenuu 🌹", "number": "05"},
    ]
    return render_template("index.html", gallery=gallery)

if __name__ == "__main__":
    app.run(debug=True)
