# Ashley B. Serdoncillo — Personal IT Portfolio Web Application

A modern, fully responsive, single-page personal portfolio web application optimized for instant deployment on **Vercel** or local hosting on **XAMPP / Apache**.

---

## 🌟 Key Features

- **Responsive Design System**: Seamless experience across mobile phones, tablets, laptops, and ultra-wide desktop monitors.
- **Dual Theme Engine (Baby Pink & Neon Pink)**:
  - **Light Mode**: Clean, soft, minimalist aesthetic with gentle **baby pink** accents, subtle borders, and high-readability typography.
  - **Dark Mode**: Deep navy/slate background (`#090d16` / `#0f172a`) with vibrant **neon pink** highlights and glowing drop-shadows.
  - Theme choice automatically persists in `localStorage` and respects system preferences.
- **Centralized Data Architecture (`data.js`)**: All personal details, educational history, skills, project items, certificates, and social contact links are separated into a single configuration object in `data.js`. Change your portfolio content anytime without touching the HTML markup!
- **Interactive Modals**:
  - **Project Gallery Slider**: Supports multiple screenshot slides per project, previous/next buttons, navigation dots, keyboard arrows, and captions.
  - **Certificate Inspector**: Fullscreen modal to inspect earned credentials (including Cisco Modern AI and DICT Netiquette certificates).
- **One-Click Contact Actions**: Direct links for Email, Messenger, Facebook, Instagram, plus an instant "Copy Email" button with visual feedback.

---

## 📁 File Structure

```text
Serdon Portfolio/
├── assets/
│   ├── profile.jpg               # Ashley's profile photo
│   ├── cert-cisco-ai.jpg         # Cisco Networking Academy certificate
│   └── cert-dict-netiquette.jpg  # DICT Region II certificate
├── data.js                       # Centralized portfolio data (Edit your info here!)
├── app.js                        # Dynamic rendering & interactive features
├── style.css                     # Minimalist theme styles & neon glow effects
├── index.html                    # Responsive semantic HTML structure
├── vercel.json                   # Vercel deployment configuration & headers
└── README.md                     # Documentation & deployment guide
```

---

## 🚀 How to Deploy to Vercel (Instant & Free)

### Option 1: Via GitHub & Vercel Dashboard (Recommended)
1. Push this folder to a GitHub repository (e.g. `github.com/your-username/portfolio`).
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Leave Framework Preset as **Other** (Root directory `./`).
5. Click **Deploy**. Your site will be live on a custom `.vercel.app` domain in under 10 seconds!

### Option 2: Via Vercel CLI
If you have Node.js and the Vercel CLI installed:
```bash
# In the project directory:
vercel
```
Follow the interactive prompts to deploy directly from your terminal.

---

## 🛠️ How to Customize / Update Your Information

Open `data.js` in your favorite editor:
- **Change Name or Bio**: Edit `PORTFOLIO_DATA.personal.fullName`, `bio.intro`, or `bio.summary`.
- **Add or Edit Education**: Modify the `PORTFOLIO_DATA.education` array.
- **Add or Edit Skills**: Modify the `PORTFOLIO_DATA.skills` array.
- **Add New Projects**: Add entries to `PORTFOLIO_DATA.projects` with your project title, category, description, and gallery slide images.
- **Update Contact Links**: Update `PORTFOLIO_DATA.personal.contacts` for your email, phone, Facebook, Messenger, and Instagram.

---

## 💻 Local Testing

Because this is a clean static web application:
1. **With XAMPP**: Place the folder in `C:\xampp\htdocs\Serdon Portfolio` and access it via `http://localhost/Serdon%20Portfolio/` in your browser.
2. **Direct Browser**: You can double-click `index.html` to open it in Chrome, Edge, or Firefox.
