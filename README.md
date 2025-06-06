# 🎮 Game Heist

**Game Heist** is a user-friendly game review web application built with **React + Vite**. The goal of this platform is to provide gamers with a clean and chill environment to explore, submit, and manage reviews of their favorite games. Featuring robust user authentication, personalized content, and a responsive design, Game Heist ensures an intuitive experience for every user.

> 🚀 Live Site: [Game Heist](https://game-heist-syeda-fairooz-nawal.netlify.app/)

---

## 🧩 Features

### 🔐 Authentication & Authorization
- Email/password-based authentication
- Google OAuth login
- Protected routes for review management and watchlist
- Toast/SweetAlert notifications on login, register, and logout

### 🧭 Navigation Structure
- **Navbar**:
  - Logo/Website Name
  - Home
  - All Reviews
  - Add Review _(Protected)_
  - My Reviews _(Protected)_
  - Game WatchList _(Protected)_
  - Login/Register _(conditional)_
  - User Avatar with tooltip or dropdown and logout button

- **Footer**:
  - Includes relevant site links and stylish design

---

## 🏠 Home Page
- **Banner/Slider** with at least 3 informative slides
- **Highest Rated Games** section:
  - Displays top 6 rated games from the database
  - Each game includes "Explore Details" button linking to its full review
- Two additional informative sections

---

## ✍️ Add Review (`/addReview`)
- Protected route for adding game reviews
- Form includes:
  - Game Title
  - Description
  - Rating (1–10)
  - Cover Image URL
  - Publishing Year
  - Genre (dropdown)
  - User Name (read-only)
  - User Email (read-only)
- On submit: review is stored in DB and success alert is shown

---

## 📋 All Reviews (`/reviews`)
- Public page that displays all submitted reviews
- Each review is shown as a card
- Users can click "Explore Details" to view more

---

## 👤 My Reviews (`/myReviews`)
- Protected route that only shows reviews submitted by the logged-in user
- Data displayed in a table format with:
  - Update button (redirects to `/updateReview/:id`)
  - Delete button (with confirmation)

---

## ✏️ Update Review (`/updateReview/:id`)
- Form pre-filled with existing review data
- All fields editable except user name and email
- Upon submission, data is updated in DB and a success alert is shown
- (Optional: Use modal instead of full page)

---

## 💖 Game Watchlist (`/myWatchlist`)
- Protected route to manage user's personalized Watchlist
- Watchlist is stored in a separate collection in the DB
- Displays a table of added games
- Users can only view their own watchlist

---

## ➕ Watchlist Feature
- On the review details page, users can click **"Add to WatchList"**
- Adds the game review (with user’s email and name) to their watchlist in the DB

---

## ❌ 404 Not Found Page
- Custom 404 page for undefined routes

## ⏳ Loading State
- Global loading spinner shown during data fetching

---

## 📁 Tech Stack

| Tech        | Description                     |
|-------------|---------------------------------|
| React + Vite| Modern, fast frontend framework |
| Firebase    | Authentication & Database       |
| TailwindCSS | Responsive UI Styling           |
| React Router| Client-side Routing             |
| SweetAlert2 | User-friendly Alerts/Modals     |
| React Hook Form / useState | Form Handling     |

---

## 🛡️ Environment Variables

To run this project locally, you’ll need to set the following Firebase environment variables:

```env
VITE_APIKEY=your_api_key
VITE_AUTHDOMAIN=your_auth_domain
VITE_PROJECTID=your_project_id
VITE_STORAGEBUCKET=your_storage_bucket
VITE_MESSAGINGSENDERID=your_messaging_sender_id
VITE_APPID=your_app_id

```

## Installation and setup

# Clone the repository
git clone https://github.com/yourusername/game-heist.git
cd game-heist

# Install dependencies
npm install

# Start development server
npm run dev

🤝 Contributions
Pull requests and feature suggestions are welcome!

🧑‍💻 Author
Syeda Fairooz Nawal
Junior MERN Stack Developer
LinkedIn: https://www.linkedin.com/in/syeda-fairooz-nawal-softwaredeveloper/  


