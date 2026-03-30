# cinevault-backend by Ignacio Zambudio


# 🎬 CineVault API

Backend REST API for CineVault, a fullstack application to manage movies and watchlists. Built with Node.js, Express and MongoDB.

## 🚀 Live Demo

**API URL:** https://cinevault-backend-gmzp.onrender.com

## 🛠️ Tech Stack

- **Node.js** + **Express** — server and REST API
- **MongoDB Atlas** — database
- **Mongoose** — ODM for MongoDB
- **JWT** — authentication
- **bcryptjs** — password hashing
- **dotenv** — environment variables
- **CORS** — cross-origin requests

## 📁 Project Structure

```
cinevault-backend/
├── scr/
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js   # Auth logic
│   │   ├── movieController.js  # Movie logic
│   │   └── watchlistController.js # Watchlist logic
│   ├── middlewares/
│   │   └── auth.js             # JWT middleware
│   ├── models/
│   │   ├── User.js             # User model
│   │   ├── Movie.js            # Movie model
│   │   └── Watchlist.js        # Watchlist model
│   ├── routes/
│   │   ├── authRoutes.js       # Auth routes
│   │   ├── movieRoutes.js      # Movie routes
│   │   └── watchlistRoutes.js  # Watchlist routes
│   └── utils/
│       └── generatetoken.js    # JWT token generator
├── .env.example
├── .gitignore
├── index.js
└── package.json
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/IgnacioZambudio/cinevault-backend.git
cd cinevault-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root of the project based on `.env.example`:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

### 4. Run the server

```bash
# Development
npm run dev

# Production
npm start
```

The server will start at `http://localhost:5000`

## 📡 API Endpoints

### Auth

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register a new user | ❌ |
| POST | `/api/auth/login` | Login and get token | ❌ |
| GET | `/api/auth/me` | Get current user | ✅ |

### Movies

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/movies` | Get all movies | ❌ |
| GET | `/api/movies/:id` | Get movie by ID | ❌ |
| POST | `/api/movies` | Create movie | ✅ Admin only |
| PUT | `/api/movies/:id` | Update movie | ✅ Admin only |
| DELETE | `/api/movies/:id` | Delete movie | ✅ Admin only |

### Watchlist

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/watchlist` | Get my watchlist | ✅ |
| POST | `/api/watchlist` | Add movie to watchlist | ✅ |
| PUT | `/api/watchlist/:id` | Update watchlist entry | ✅ |
| DELETE | `/api/watchlist/:id` | Remove from watchlist | ✅ |

## 🔐 Authentication

This API uses **JWT (JSON Web Tokens)** for authentication.

1. Register or login to get a token
2. Include the token in the `Authorization` header:

```
Authorization: Bearer your_token_here
```

## 📦 Request & Response Examples

### Register
```json
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

### Create Movie (Admin only)
```json
POST /api/movies
{
  "title": "Inception",
  "genre": "Sci-Fi",
  "year": 2010,
  "synopsis": "A mind-bending thriller about dream infiltration.",
  "poster": "https://example.com/inception.jpg"
}
```

### Add to Watchlist
```json
POST /api/watchlist
{
  "movieId": "movie_id_here",
  "status": "pending"
}
```

## 📬 Postman Documentation

Import the Postman collection to test all endpoints:
- Collection file: `CineVault.postman_collection.json`
- Collection link: `https://ignazambudio-9516980.postman.co/workspace/Ignacio-Zambudio's-Workspace~81d47cdb-bdf6-442d-844e-de54845b14da/collection/53613429-2808b594-300a-4d8a-82e7-03d03802f352?action=share&source=copy-link&creator=53613429`

## 🌍 Deployment

This API is deployed on **Render**: https://cinevault-backend-gmzp.onrender.com

## 👤 Author

**Ignacio Zambudio**
- GitHub: [@IgnacioZambudio](https://github.com/IgnacioZambudio)
