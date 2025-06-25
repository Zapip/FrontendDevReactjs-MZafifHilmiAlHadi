# Restaurant – Front-End Technical Test

A single-page application (SPA) to display and filter restaurant data based on category, open status, and price range. Built as a submission for the Front-End Developer technical test.

---

## 🚀 Tech Stack

- **React 19** with `react-router-dom`
- **NodeJS 22**
- **Vite** (for development & build)
- **CSS Modules**
- **Fetch API** (use mockapi.oi)

---

## Local Setup

```bash
git clone https://github.com/Zapip/FrontendDevReactjs-MZafifHilmiAlHadi.git
cd FrontendDevReactjs-MZafifHilmiAlHadi
```

```bash
npm install
```

```bash
cp .env.example .env

# Salin environment file.
```

```bash
npm run dev
```

## API Structure

### GET /restaurants

<pre> 
json{
  "id": "1",
  "name": "Pecel Lele Pak Kumis Yogyakarta",
  "description": "Deskripsi restoran...",
  "location": "49165 W 4th Avenue",
  "rating": 4.5,
  "categories": ["Indonesian", "Chinese"],
  "photos": [
    "https://example.com/photo1.jpg",
    "https://example.com/photo2.jpg"
  ],
  "isOpen": true,
  "lowerprice": 25,
  "higherprice": 50,
  "currency": "IDR"
}</pre>

### GET /reviews?restaurantId=1

<pre> 
json{
  "id": "r1",
  "restaurantId": "1",
  "name": "Lena Rohan",
  "avatar": "https://example.com/avatar.jpg",
  "rating": 5,
  "text": "Pengalaman makan yang luar biasa!"
}
</pre>

## 📦 Features

### ✅ Restaurant List (`/`)

- Menampilkan daftar restoran
- Dapat difilter berdasarkan:
  - **Status buka saat ini (Open Now)**
  - ~~Kategori / Cuisine~~: Masih terkendala
  - **Rentang harga** (low / mid / high)

### ✅ Restaurant Detail (`/restaurant/:id`)

- Menampilkan:
  - Nama, deskripsi, dan lokasi
  - Galeri foto restoran
  - Rentang harga
  - Status buka / tutup
  - Rating bintang (1–5)
  - Daftar review (avatar, nama, rating, dan komentar)

---

## Filtering Logic

### Price Range

| Label             | Logika                              |
| ----------------- | ----------------------------------- |
| Under Rp20.000    | lowerprice ≤ 20 && higherprice ≤ 20 |
| Rp20.000–Rp50.000 | lowerprice ≥ 20 && higherprice ≤ 50 |
| Above Rp50.000    | lowerprice ≥ 50 && higherprice ≥ 50 |

### Categories

- Field `categories` berupa array, contoh:  
  `"categories": ["Indonesian", "Chinese"]`
- Karena menggunakan mock API (`json-server`), filtering dilakukan **di sisi client (frontend)**

### Open Now

- Filter dilakukan terhadap properti `isOpen: true`

---

## Project Structure

```bash
technical-test-FE/
├── public/                 
│   └── _redirects          
│   └── vite.svg
│
├── src/                    
│   ├── assets/             
│   │
│   ├── components/         
│   │   ├── icons/          
│   │   │   ├── Rating.jsx
│   │   │   ├── StarFilled.jsx
│   │   │   ├── StarHalf.jsx
│   │   │   └── StarOutline.jsx
│   │   ├── FilterNavigation.jsx
│   │   ├── RestaurantCard.jsx
│   │   └── RestaurantList.jsx
│   │
│   ├── pages/              
│   │   ├── Detail.jsx      
│   │   └── Home.jsx        
│   │
│   ├── services/           
│   │   └── api.js
│   │
│   ├── utils/              
│   │   ├── currencyFormat.js
│   │   └── filterRestaurants.js
│   │
│   ├── App.jsx             
│   ├── App.css             
│   ├── index.css           
│   └── main.jsx            
│
├── .env.example            
├── index.html              
├── package.json
├── vite.config.js
└── README.md               
```
---

## Kendala

- Fitur **login** belum di implementasikan
- Fitur **peta (map)** belum disertakan karena bersifat opsional
- Filter kategori belum bisa

---
