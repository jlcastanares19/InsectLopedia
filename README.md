# 🐞 Insectlopedia

**Insectlopedia** is a simple web-based application that displays a list of insects with their details. It features two types of users: **Admin** and **Non-Admin**.

## 📌 Project Features

### Homepage (index.html)
- Landing page where users can choose between:
  - **Explore** (Non-admin access)
  - **Admin Login**

### Explore (non-admin.html)
- Users can view insect details
- Can search for insects
- **Read-only access**: Cannot add, edit, or delete insects
- Can **log out** to return to homepage

### Admin Login
- Login popup with required credentials:
  - **Username:** `johanna`
  - **Password:** `johanna123`
- If login is correct, user is redirected to `main.html` (Admin page)
- If login fails, an error message is shown

### Admin Panel (main.html)
- Admin can:
  - Add new insects
  - Edit existing insects
  - Delete insect entries
  - Log out (redirects back to homepage)
- Admin access is tracked using `localStorage`

---

## 💻 Technologies Used

- **HTML** – Structure of the web pages
- **CSS** – Styling and layout
- **JavaScript** – Interactivity, login validation, localStorage usage

> 📌 *Note: This system does not use a backend. All data is stored and managed on the client side.*

---
