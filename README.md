

# **Express.js Product API**  

## **📌 Overview**  
This is a **RESTful API** built with **Express.js and MongoDB (Mongoose)** for managing product data. It supports **CRUD operations** (Create, Read, Update, Delete) and includes **authentication via an API key**, **UUID-based unique IDs**, and advanced features like **search, pagination, and filtering**.  

## **⚙️ Features**  
✅ **Full CRUD Operations** (GET, POST, PUT, DELETE)  
✅ **MongoDB Integration (via Mongoose)**  
✅ **Authentication via API Key**  
✅ **Filtering, Pagination, Search, and Statistics**  
✅ **Seeding database with initial products**  
✅ **Error handling for missing environment variables**  

---

## **🚀 Setup Instructions**  

### **1️⃣ Install Dependencies using `pnpm`**  
Run the following command to install required packages:  
```sh
pnpm install
```

### **2️⃣ Configure Environment Variables**  
- Rename `.env.example` to `.env`.  
- Update `.env` file with your MongoDB URI and API key:  
```plaintext
MONGODB_URI=mongodb://localhost:27017/productsdb
PORT=3000
API_KEY=your-secret-api-key
NODE_ENV=development
```

### **3️⃣ Start MongoDB**  
Ensure MongoDB is running locally:  
```sh
mongod --dbpath /path/to/your/data
```

### **4️⃣ Run the API Server**  
Start the Express.js application:  
```sh
pnpm start
```

### **5️⃣ Seed the Database (Optional)**  
Run the seed script to populate the database with initial data:  
```sh
pnpm db
```

---

## **🔐 Authentication**  
Requests **must include** an `api-key` header to access routes.  

Example request (with API key):  
```sh
curl -H "api-key: your-secret-api-key" http://localhost:3000/api/products
```

---

## **📌 API Endpoints**  

### **1️⃣ Get All Products**  
```http
GET /api/products
```
✅ Supports **category filtering** (`?category=electronics`) and **pagination** (`?page=1&limit=5`).  

### **2️⃣ Get Product by ID**  
```http
GET /api/products/:id
```

### **3️⃣ Create a New Product**  
```http
POST /api/products
```
🔹 Requires JSON body:  
```json
{
  "name": "New Product",
  "description": "Description here",
  "price": 100,
  "category": "electronics",
  "inStock": true
}
```

### **4️⃣ Update a Product**  
```http
PUT /api/products/:id
```
🔹 Example body (send only the fields you want to update):  
```json
{
  "price": 150
}
```

### **5️⃣ Delete a Product**  
```http
DELETE /api/products/:id
```

### **6️⃣ Search Products by Name**  
```http
GET /api/products/search?keyword=laptop
```

### **7️⃣ Get Product Statistics**  
```http
GET /api/products/stats
```
✅ Returns **product count per category**.

---

## **🛠 Error Handling**  
This API **validates environment variables at startup**. If a variable is missing, the app **fails early** and logs an error.  

### **Common Errors**  
| Error Code | Description |
|------------|------------|
| 400 | Missing required fields in request |
| 403 | Unauthorized (Invalid API Key) |
| 404 | Product not found |
| 500 | Internal server error |

---

## **📌 Contribution**  
Feel free to fork and improve this project!   

---

## **📌 License**  
MIT License. Free for personal and commercial use. 🚀  

---

Now the README is fully updated for **pnpm**! Would you like me to add an **OpenAPI (Swagger) documentation file** for better API visualization? 🚀💡

