# 🌿 GreenLeaf – Online Plant Store (React App)

GreenLeaf is a responsive e-commerce web application built using **React** and **Bootstrap**, designed for buying houseplants online.  
The project demonstrates React fundamentals such as **components, routing, state management, props, and conditional rendering**.

---

## 🚀 Features

### 🏠 Landing Page

- Attractive background image
- Realistic company name and description
- “Get Started” button linking to product listing
- Footer with basic branding
- Fully responsive design

---

### 🪴 Product Listing Page

- Displays **6 unique houseplants**
- Plants grouped into **3 categories**:
  - Indoor
  - Medicinal
  - Outdoor
- Each product shows:
  - Thumbnail image
  - Plant name
  - Price
- **Search bar** to filter plants by name
- **Category filter buttons**
- **Add to Cart** button:
  - Adds item to cart
  - Increments cart count
  - Button disables after adding

---

### 🧭 Header (Visible on All Pages)

- Website logo/name
- Navigation links
- Shopping cart icon with **live item count**

---

### 🛒 Shopping Cart Page

- Displays:
  - Total number of items
  - Total cart value
- Each cart item includes:
  - Thumbnail
  - Name
  - Unit price
  - Increase (+) button
  - Decrease (−) button
  - Delete button
- Buttons:
  - **Checkout** (Coming Soon)
  - **Continue Shopping**

---

## 🛠️ Tech Stack

- **React**
- **React Router DOM**
- **Bootstrap 5**
- JavaScript (ES6)
- HTML5 & CSS3

---

## 📂 Project Structure

```
src/
│── components/
│ ├── Header.js
│ ├── Footer.js
│ ├── ProductCard.js
│
│── pages/
│ ├── LandingPage.js
│ ├── ProductList.js
│ ├── CartPage.js
│
│── data/
│ ├── plants.js
│
│── App.js
│── index.js
│── App.css

```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/greenleaf-plant-store.git
```

2. Navigate to the project directory:

```
cd greenleaf-plant-store
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

The app will run at:

```http://localhost:3000

```

## 📱 Responsiveness

- Fully responsive for desktop, tablet, and mobile
- Built using Bootstrap grid system and utility classes

## 🎓 Learning Outcomes

- React component-based architecture
- Routing with React Router
- State management using useState
- Conditional rendering
- Handling events (add, remove, update cart)
- Responsive UI design

## 🔮 Future Enhancements

- Cart persistence using localStorage
- Authentication (Login / Signup)
- Online payment integration
- Backend API integration
- Admin dashboard

## Author's:
Mo Fahim Raj
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://www.linkedin.com/in/mo-fahim-raj-175b9b304/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black)](https://github.com/Fahimraj12)
![GitHub stars](https://img.shields.io/github/stars/Fahimraj12/fahimraj12?style=social)
