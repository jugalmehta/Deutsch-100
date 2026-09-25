# Deutsch in 100 Tagen

A free, self-study German course from A1 to B1 in 100 days, 90 minutes a day.
Plain HTML, CSS and JavaScript. No build step, no backend, no tracking.

## What is inside

- **100 daily plans** in three levels: A1 (days 1-34), A2 (35-64), B1 (65-100), split into 23 modules
- Each lesson day: vocabulary with articles, phrases, pronunciation focus, listening task, speaking or writing output
- **Audio** through your browser's German voice, plus a record-and-compare mic button
- **Flashcards** for the day, the previous day, the module or the whole level
- **Module practice assignments** (quiz plus speaking and writing task) at the end of every module
- **Graded level assignments** on day 34 (A1) and day 64 (A2), and **B1 mock exams** on days 98 and 99
- **Progress tracking**: blocks done per day, minutes studied (timer or manual), streak, scores, B1 readiness checklist
- **Free resources**: DW Learn German, Schubert-Verlag, Goethe-Institut and others

## Access code

The site asks for an access code before showing any content: **`DeUtScH100`**.
It is a simple front-door check, not real security — this is a static site with
no server, so the code sits in plain text in `js/app.js` and anyone who views
the page source can read it. It stops casual visitors, not a determined one.
Share the code by email or message; the page tells visitors to email
`jugalmehta.d@gmail.com` to request it. Once entered, it's remembered on that
browser (or just for that tab, if "Remember me" is unticked).

## Use it locally

Open `index.html` in a browser. That is all. Progress is saved in your browser (localStorage).
Use Settings > Export JSON to back it up or move to another device.

## Deploy to GitHub Pages

1. Create a new repository on GitHub (for example `deutsch-100`).
2. Upload all files from this folder, or from a terminal:
   ```
   git init
   git add .
   git commit -m "German course"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/deutsch-100.git
   git push -u origin main
   ```
3. In the repository go to **Settings > Pages** and set **Source** to **GitHub Actions**.
4. The included workflow (`.github/workflows/pages.yml`) publishes the site on every push to `main`.
   Your course will be at `https://YOUR-USERNAME.github.io/deutsch-100/`.

Alternative without Actions: Settings > Pages > Deploy from a branch > `main` / root.

Progress is stored per browser and per site address, so use the same URL on each device and export/import to sync.

## Edit the course

- `js/course-data.js`: levels, modules, daily lessons, resources
- `js/quizzes.js`: quiz questions, rubrics and assignment setup
- `css/styles.css`: design
- `js/app.js`: application logic

## Notes

- Exam formats, prices and free resource links change. Check the official exam provider (Goethe-Institut, telc) before booking a B1 exam.
- The quiz and lesson content is original to this project. Free exercises on DW, Schubert-Verlag and Goethe-Institut are linked, not copied.
- Not affiliated with DW, Goethe-Institut, Schubert-Verlag or telc.
