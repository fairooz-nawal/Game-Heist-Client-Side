# React + Vite
Game Heist, a user-friendly game review application. The goal of this project is to design a platform where users can explore and share game reviews. The website has key features such as user authentication and review management to enhance the user experience. The application have a clean and responsive UI, focusing on simplicity and functionality to provide a "chill" experience. 

# Live link : https://game-heist-syeda-fairooz-nawal.netlify.app/

# Layout Structure

## Navbar: The Navbar have the- 

1.Website name/logo
2.Home
3.All Reviews
4.Add Review (Private/Protected Route)
5.My Reviews (Private/Protected Route)
6.Game WatchList (Private/Protected Route)
7.Login/Register (Conditional):
   If the user is not logged in, show:
   Login: Redirects to the login page.
   Register: Redirects to the register page.
   If the user is logged in, show:
   User Avatar (photoURL): Display the user’s profile picture.On hovering, display the user's displayName in a tooltip or dropdown.
   Log Out: Logs the user out and redirects to the homepage.

## Main Section:  

Main Section show different pages based on routes.  
Footer: A Footer have  all relevant information and eye-catching design.

### Home Page: 


Home Page:  Besides the navbar and footer the Home Page contain a banner/Slider, a Highest Rated Game Section, 2 Extra Sections, 


Banner: a slider (you can use any type of slider/carousel)  with a minimum of 3 slides and  meaningful information

Highest Rated Game Section:  Shows at least 6 cards of Highest Rated Game data based on their rating. Here the data are from the database. Each card contain a “Explore Details” button. 
By Clicking on the “Explore Details” button it will redirect you to the details page.

# Authentication

 Login Page: When you click the login button on the navbar it redirects to the login page. You have to use a password and email-based authentication to log in. The login page will have-  

Email 
Password 
Google login

A link that will redirect to the Register page 
🎯Here the email and password should match with the registered email and password. If it doesn’t match, show an error. 
 The Register page has the following - 
Name 
Email 
photoURL 
password  
A Link that will redirect to the login page 
  For password verification you need to follow this -  
Must have an Uppercase letter in the password 
Must have a Lowercase letter in the password  
Length must be at least 6 character 
If any of this isn’t fulfilled it will show an error/toast
After successful login or Register you need to show toast/sweet alert 

### Add Review Page ( /addReview ): 

Add New Review page is where users can submit reviews for games. The form has include:
Game Cover Image/Thumbnail ( a URL for the game cover)
Game Title/ Name (string)
Review Description (text): A detailed review of the game.
Rating (number): Allow users to provide a rating (e.g., 1-5 or 1-10).
Publishing year: (Ex: 2021, 2024) 
Genres (dropdown): Users can select one (e.g., Action, RPG, Adventure).
User Email (Read Only): Pre-filled with the logged-in user's email address.
User Name (Read Only): Pre-filled with the logged-in user's name.
Submit Button: On clicking, the review data will be stored in the database, and a success message will be shown using toast or sweet alert. 

This is a private/protected route, and only logged-in users can access it. Redirect non-logged-in users to the login page.

### Add to WatchList

A "Add to WatchList" button is used for logged-in users to like the review. 
After Clicking on “Add to WatchList" the review data will be stored on the database(with logged-in email and username)  in the watchlist collection with the user email and username. 

### All Reviews(/reviews) 
All Reviews page to display all the reviews added by users.
Fetch all the Reviews data from the database and display it in a card format.

### My  Reviews(/myReviews): 
A private/protected route where a user can see all the Reviews he/she has added to the database. here a user can only see his/her added data, but he/she can not access other's data.

Reviews displayed in a table format, showing:
3-4 datas
Update button
Delete button

Update Feature:
Clicking the "Update" button will redirect to an Update Review Page (/updateReview/:id) 

Delete Feature:
Clicking the "Delete" button will remove the review after a confirmation prompt. 

Update Review Page (/updateReview/:id)  
Update Review Page where users can update their previously submitted reviews.

The form should include:
All fields from the "Add Review Page" (game title, description, rating, genres, etc.).
Pre-fill the fields with existing data from the database.
User Email and User Name should remain read-only.
Clicking the "Update" button will save changes and display a success message.
Optional: Use a modal instead of a separate page for updating reviews. 

### Game Watchlist Page (/myWatchlist)
The Game Watchlist Page is a private/protected route where logged-in users can manage a list of games they have added to the Watchlist from the Review Details page. You need to show all the data in table format. here a user can only see his/her added data, but he/she can not access other's data. Which data you want to show is your choice. 



### Other Requirements 

404 page: Add a 404 page/Not Found Page
Loading Spinner: Show a loading spinner when the data is in a loading state. 
