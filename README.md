# RUN the programme
step 1 - npm install
step 2 - make your .env file (.env.example file provided)
stem 3 - npm run init:db (for creating the db automatically which you provided in your .env file DATABASE_URL)
step 5 - npm run generate (Generate or re-generate the Prisma Client inside the node_modules/@prisma/client folder — based on your schema.prisma file.)
step 6 - npm start



# Backend-POC (Hapi.js + Prisma + AWS S3)

This is a backend proof of concept (POC) built with **Hapi.js**, **Prisma ORM**, **MySQL**, and **AWS S3** for file handling. The project is structured to support scalable development, clean API architecture, secure user authentication, and file upload functionality.

---

## 📁 Features

- ⚙️ **Hapi.js** server framework
- 🔐 JWT-based authentication
- 📦 Prisma ORM with MySQL
- ☁️ AWS S3 for secure file uploads
- 🧾 Swagger API documentation
- ✅ ESLint + Husky for code quality
- 🚫 Soft delete functionality
- 🧠 Modular folder structure
- 🔁 Auto-create DB if not exist using `init:db` script

---

## 🛠️ Tech Stack

- **Node.js**
- **Hapi.js**
- **Prisma ORM**
- **MySQL**
- **AWS S3**
- **JWT**
- **ESLint** + **Husky**

---
## About Project
- Uploading Images to S3
    A single image per user is stored. If a user uploads a new image, the old image is overwritten in the bucket (e.g. profile-1.jpg). Metadata in DB is updated accordingly.

- Linting & Husky
    ESLint v9 is configured with eslint.config.js. Husky runs lint checks before every commit
---

## 📂 Project Structure
```bash
backend-POC/
├── controllers/       -- Route handlers
├── middlewares/       -- Auth & validation
├── prisma/            -- Prisma schema
├── routes/            -- Hapi route definitions
├── services/          -- Business logic
├── utils/             -- Utility functions (e.g., AWS S3)
├── validations/       -- Joi schemas
├── .env               -- Environment config
├── app.js             -- Entry point
└── package.json
