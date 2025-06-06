# 🧠 ThinkBoard - MERN Stack Project

ThinkBoard is a MERN stack (MongoDB, Express.js, React.js, Node.js) project designed to serve as a simple note board or idea management platform. It includes both backend and frontend implementations, structured cleanly for scalability and maintainability.

---

## 📁 Project Structure

```
MERN-THINKBOARD/
│
├── Backend/
│   ├── src/
│   │   ├── config/           # Database configuration
│   │   ├── controllers/      # Route logic
│   │   ├── middleware/       # Custom middlewares like rate limiter
│   │   ├── models/           # Mongoose models
│   │   ├── routes/           # Express routes
│   │   └── index.js          # Main server entry
│   ├── .env
│   ├── package.json
│   └── ...
│
├── Frontend/
│   ├── package.json
│   ├── ...
│
└── README.md
```

---

## 🚀 Features

- ✅ RESTful API using Express.js
- ✅ MongoDB integration with Mongoose
- ✅ Rate limiting middleware
- ✅ Modular code structure
- ✅ Basic root route for testing: `GET /` → `Welcome to my thinkboard APIs`

---

## 🔧 Tech Stack

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- Custom middlewares

### Frontend (Planned or In Progress):
- React.js
- Modern CSS or Tailwind

---

## ⚙️ Installation & Setup

1. **Clone the repo:**

```bash
git clone https://github.com/Felicien407/ThinkBoard.git
cd ThinkBoard
```

2. **Backend Setup:**

```bash
cd Backend
npm install
```

3. **Environment Variables:**

Create a `.env` file in the `Backend/` folder and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

4. **Run the server:**

```bash
npm run dev
```

You should see:
```
Server is listening on port 5000
```

---

## 📡 API Endpoints (Example)

- `GET /` — Welcome message
- `GET /api/notes` — Get all notes (to be implemented)
- `POST /api/notes` — Create a new note (to be implemented)

> More routes will be listed once implemented.

---

## 🛡️ Rate Limiting

Basic rate limiter middleware is enabled using:

```js
app.use(rateLimiter);
```

---

## 🙌 Author

- **Felicien Niyomwungeri**
- GitHub: [@Felicien407](https://github.com/Felicien407)

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐️ Support

If you like this project, give it a ⭐️ on GitHub to support!
