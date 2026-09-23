## Book Store Project Explanation

### 1. Introduction

> Good morning sir/mam.
> Mera project ka naam **Book Store Details** hai.
> Yeh ek backend API project hai jo maine **Node.js, Express.js aur MongoDB** ka use karke banaya hai.
> Is project mein maine books ke liye basic **CRUD operations** implement kiye hain, jaise book add karna, book dekhna, update karna aur delete karna.

---

### 2. Folder Structure

> Ab main apne project ka folder structure explain karti hoon.

> Mere project mein ek **src** folder hai.

> Uske andar teen main folders hain.

> Pehla hai **controller** folder, jisme `bookController.js` file hai.
> Is file mein books ke saare functions aur main logic likha hai.

> Dusra hai **Model** folder, jisme `bookModel.js` hai.
> Is file mein maine MongoDB ke liye book ka schema create kiya hai.

> Teesra hai **routes** folder, jisme `bookRoutes.js` file hai.
> Is file mein maine saare API routes define kiye hain.

> Iske alawa `db` folder hai, jisme `db.js` file hai.
> Iska use MongoDB se connection banane ke liye kiya hai.

> Aur project ke root mein `index.js`, `.env`, `package.json` aur `README.md` files hain.

---

### 3. `bookModel.js`

> Ab main apna **bookModel.js** explain karti hoon.

> Isme maine Mongoose ka use karke ek **bookSchema** banaya hai.

> Mere schema mein six fields hain:

> **title, author, price, category, stock aur description.**

> Title aur author ka type String hai.
> Price aur stock ka type Number hai.

> Maine `required` validation bhi use ki hai, jisse ye fields empty nahi reh sakti.

> Uske baad maine **Book model** create kiya hai.

---

### 4. `db.js`

> Ab mera **db.js** file hai.

> Is file mein main **Mongoose** ka use karke MongoDB se connection banati hoon.

> MongoDB ka connection URL maine directly code mein nahi likha hai.
> Maine usko `.env` file mein store kiya hai.

---

### 5. `.env`

> `.env` file mein maine **PORT** aur **MONGO_URI** store kiya hai.

> `dotenv` package ki help se main in environment variables ko apne project mein use karti hoon.

> Maine `.env` ko `.gitignore` mein bhi add kiya hai, taki ye GitHub par upload na ho.

---

### 6. `bookController.js`

> Ab main apna **bookController.js** explain karti hoon.

> Isme maine five main functions banaye hain.

> Sabse pehla hai **addBook**.
> Iska use new book add karne ke liye hota hai.

> Dusra hai **getAllBooks**.
> Iska use database se saari books fetch karne ke liye hota hai.

> Teesra hai **getBook**.
> Iska use ek specific book ko uski ID ke through get karne ke liye hota hai.

> Chautha hai **updateBook**.
> Iska use existing book ki details update karne ke liye hota hai.

> Aur last hai **deleteBook**.
> Iska use book ko delete karne ke liye hota hai.

> Maine database operations ke liye `async` aur `await` ka use kiya hai.

---

### 7. `bookRoutes.js`

> Ab mera **bookRoutes.js** file hai.

> Yahan maine saare API routes define kiye hain.

> Book add karne ke liye **POST** method use ki hai.

> Saari books get karne ke liye **GET** method use ki hai.

> Ek single book ke liye **GET with ID** use kiya hai.

> Book update karne ke liye **PUT** method use ki hai.

> Aur book delete karne ke liye **DELETE** method use kiya hai.

Screen par ye show karna:

```text
POST    /api/v1/books
GET     /api/v1/books
GET     /api/v1/books/:id
PUT     /api/v1/books/:id
DELETE  /api/v1/books/:id
```

---

### 8. `index.js`

> Ab ye meri main **index.js** file hai.

> Sabse pehle maine **Express** aur **dotenv** import kiya hai.

> Uske baad `dotenv.config()` ki help se environment variables load kiye hain.

> Phir maine MongoDB ka connection kiya hai.

> `express.json()` middleware ka use kiya hai, jisse server JSON data receive kar sake.

> Uske baad maine book routes ko `/api/v1/books` ke saath connect kiya hai.

> Aur last mein `app.listen()` ki help se server start kiya hai.

---

## 9. Postman Demo

> Ab main apne API ko **Postman** mein test karke dikhati hoon.

> Sabse pehle main **POST** request bhejungi.

```json
{
  "title": "Ikigai",
  "author": "Héctor García",
  "price": 349,
  "category": "Self Help",
  "stock": 5,
  "description": "A book about a happy life."
}
```

> Request send karne ke baad book successfully database mein add ho jayegi.

> Ab main **GET** request use karke saari books fetch karungi.

> Uske baad **PUT** request se kisi existing book ko ID ke through update kar sakti hoon.

> Aur last mein **DELETE** request se book ko delete kar sakti hoon.

---

## 10. Ending

> Toh ye mera **Book Store Details API project** tha.

> Is project mein maine **Node.js, Express.js, MongoDB, Mongoose, dotenv aur REST API** ka use kiya hai.

> Is project ke through maine CRUD operations implement kiye hain.

> **Thank you.**
