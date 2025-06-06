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

## Game Heist WEB APP

![Screenshot 2025-05-21 034905](https://github.com/user-attachments/assets/30785a58-d102-4433-8bed-6f7ad7bdf396)
![Screenshot 2025-05-21 034917](https://github.com/user-attachments/assets/6f66bb59-9d63-4fd0-a31b-991bed4f90ec)
![Screenshot 2025-05-21 034931](https://github.com/user-attachments/assets/825d4ca6-62ac-45ee-b3f5-cd6573aff4d6)
![Screenshot 2025-05-21 034939](https://github.com/user-attachments/assets/fe08d5e6-f56f-456f-a4e2-568f6d50021e)
![Screenshot 2025-05-21 034953](https://github.com/user-attachments/assets/2af5a96a-4b41-43b7-91f1-a60ccb549388)
![Screenshot 2025-05-21 035002](https://github.com/user-attachments/assets/ad6627ae-962d-4e95-a493-706b475b49b2)
![Screenshot 2025-05-21 035220](https://github.com/user-attachments/assets/5b8e9221-f812-4533-82df-6b51c1314fa3)
![Screenshot 2025-05-21 035237](https://github.com/user-attachments/assets/9bff835d-3751-4ab2-a2ec-61fbd997a8c7)
![Screenshot 2025-05-21 040444](https://github.com/user-attachments/assets/977946e7-8e3c-4a35-a049-bf56dedb665f)
![Screenshot 2025-05-21 040503](https://github.com/user-attachments/assets/464b0db4-bce1-43f8-a066-4e7535ae2c02)
![Screenshot 2025-05-21 040519](https://github.com/user-attachments/assets/d6c3cf73-7de1-4e01-96dc-829981c3b5e5)
![Screenshot 2025-05-21 041858](https://github.com/user-attachments/assets/3ab2ea0a-a028-4c83-be43-6706624b5257)
![Screenshot 2025-05-21 042350](https://github.com/user-attachments/assets/300d5f49-9a54-4042-be79-247854381487)

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


