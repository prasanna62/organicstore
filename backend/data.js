import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Prasana',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'organicstore',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'john',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
   {
     "name": "Sponge Gourd",
     "category": "vegetables",
     "image": "/images/1.jpeg",
     "price": 51.08,
     "countInStock": 100,
      rating: 4.5,
      numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Baby corn cleaned",
     "category": "corn",
     "image": "/images/2.jpeg",
     "price": 151.18,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Baby corn",
     "category": "corn",
     "image": "/images/3.jpeg",
     "price": 33.40,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Chilakarive green",
     "category": "greens",
     "image": "/images/4.png",
     "price": 34.24,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Chakota greens",
     "category": "greens",
     "image": "/images/5.jpg",
     "price": 50.89,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Eggs",
     "category": "eggs",
     "image": "/images/6.jpg",
     "price": 6.59,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Arive greens",
     "category": "spices",
     "image": "/images/7.jpeg",
     "price": 48.72,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "knol-khol",
     "category": "vegetables",
     "image": "/images/8.jpg",
     "price": 43.60,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Chikadi kai",
     "category": "vegetables",
     "image": "/images/9.jpg",
     "price": 65.17,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Garlic cleaned",
     "category": "spices",
     "image": "/images/10.jpeg",
     "price": 222.76,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Garlic",
     "category": "spices",
     "image": "/images/11.jpg",
     "price": 141.53,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Ginger",
     "category": "spices",
     "image": "/images/12.jpg",
     "price": 64.63,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Ground nut Local",
     "category": "nuts",
     "image": "/images/13.jpg",
     "price": 103.39,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Double Beans",
     "category": "vegetables",
     "image": "/images/14.jpeg",
     "price": 111.96,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Double Beans seeds",
     "category": "vegetables",
     "image": "/images/15.jpeg",
     "price": 213.40,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Drumstik",
     "category": "vegetables",
     "image": "/images/16.jpg",
     "price": 112.13,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Cauliflower per Kg",
     "category": "vegetables",
     "image": "/images/17.jpg",
     "price": 59.00,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Cauliflower(M)",
     "category": "vegetables",
     "image": "/images/17.jpg",
     "price": 39.13,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Mushroom Button",
     "category": "vegetables",
     "image": "/images/18.jpg",
     "price": 305.55,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Grapes Dry 250gm",
     "category": "fruits",
     "image": "/images/19.jpg",
     "price": 131.18,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Grapes Red globe",
     "category": "fruits",
     "image": "/images/20.jpeg",
     "price": 505.72,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Lime Local",
     "category": "vegetables",
     "image": "/images/22.jpeg",
     "price": 126.34,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Little gourd",
     "category": "vegetables",
     "image": "/images/23.jpg",
     "price": 34.41,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Ladys finger",
     "category": "vegetables",
     "image": "/images/24.jpg",
     "price": 63.09,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Herali kai",
     "category": "vegetables",
     "image": "/images/25.jpg",
     "price": 89.25,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Grapes T.S.",
     "category": "fruits",
     "image": "/images/26.jpg",
     "price": 131.70,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Avarekai (Field Beans )",
     "category": "vegetables",
     "image": "/images/27.webp",
     "price": 66.19,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Banana cooking R.Banana",
     "category": "vegetables",
     "image": "/images/28.jpeg",
     "price": 66.27,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Jukani",
     "category": "vegetables",
     "image": "/images/29.jpg",
     "price": 174.43,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Sham gadde",
     "category": "vegetables",
     "image": "/images/30.jpg",
     "price": 75.37,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Snake Gourd(S)",
     "category": "vegetables",
     "image": "/images/31.jpg",
     "price": 34.99,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Snake Gourd",
     "category": "vegetables",
     "image": "/images/31.jpg",
     "price": 43.51,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Raddish Red",
     "category": "salads",
     "image": "/images/33.webp",
     "price": 62.81,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Raddish",
     "category": "salads",
     "image": "/images/34.jpg",
     "price": 36.92,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Sweet Potato(Genasu)",
     "category": "vegetables",
     "image": "/images/35.jpeg",
     "price": 48.97,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Potato(B)",
     "category": "vegetables",
     "image": "/images/36.jpeg",
     "price": 32.43,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Potato(M)",
     "category": "vegetables",
     "image": "/images/37.jpg",
     "price": 40.21,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Pumpkin Japan",
     "category": "vegetables",
     "image": "/images/38.webp",
     "price": 26.12,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Pumpkin Red",
     "category": "vegetables",
     "image": "/images/39.jpeg",
     "price": 20.73,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Pumpkin Ash",
     "category": "vegetables",
     "image": "/images/40.jpg",
     "price": 23.14,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Orange malt",
     "category": "juice",
     "image": "/images/41.jpg",
     "price": 73.88,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Grapes Blore blue",
     "category": "fruits",
     "image": "/images/42.jpeg",
     "price": 59.93,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Guava Allahabad(Red)",
     "category": "fruits",
     "image": "/images/43.jpeg",
     "price": 96.96,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Guava",
     "category": "fruits",
     "image": "/images/44.jpeg",
     "price": 72.64,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Chicco(Sapota)",
     "category": "fruits",
     "image": "/images/45.jpeg",
     "price": 55.76,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Custerd Apple",
     "category": "fruits",
     "image": "/images/46.jpeg",
     "price": 54.17,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Chicco(Sapota) rapined",
     "category": "fruits",
     "image": "/images/47.jpg",
     "price": 62.82,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Banana Rasabale",
     "category": "fruits",
     "image": "/images/48.jpeg",
     "price": 63.84,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Banana Nendra",
     "category": "fruits",
     "image": "/images/49.jpeg",
     "price": 78.59,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Banana chandra",
     "category": "fruits",
     "image": "/images/50.webp",
     "price": 80.99,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Banana Yellaki",
     "category": "fruits",
     "image": "/images/51.jpeg",
     "price": 80.83,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Banana pachabale",
     "category": "fruits",
     "image": "/images/52.jpeg",
     "price": 33.84,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Apple Green smith",
     "category": "fruits",
     "image": "/images/53.jpeg",
     "price": 350.28,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Apple Fuji chaina",
     "category": "fruits",
     "image": "/images/54.jpg",
     "price": 290.33,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Apple Newzeland",
     "category": "fruits",
     "image": "/images/55.jpg",
     "price": 298.81,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Apple Washington",
     "category": "fruits",
     "image": "/images/56.jpg",
     "price": 310.14,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Apple Economy",
     "category": "fruits",
     "image": "/images/57.jpeg",
     "price": 159.34,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Apple Delicious",
     "category": "fruits",
     "image": "/images/58.jpg",
     "price": 186.10,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Palak Greens",
     "category": "greens",
     "image": "/images/59.jpg",
     "price": 54.72,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Menthya Greens",
     "category": "greens",
     "image": "/images/60.png",
     "price": 85.29,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Mint Leaves",
     "category": "greens",
     "image": "/images/61.jpeg",
     "price": 58.24,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "G.nut oil Rice Bron 1 lt",
     "category": "oil",
     "image": "/images/62.jpg",
     "price": 139.11,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "G.nut oil Premium1 lt",
     "category": "oil",
     "image": "/images/63.jpeg",
     "price": 163.80,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Ground nut oil 1 lt",
     "category": "oil",
     "image": "/images/64.jpg",
     "price": 158.49,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "G.oil Net rich 500 ml",
     "category": "oil",
     "image": "/images/65.jpg",
     "price": 78.14,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Fruit Juice Tailand",
     "category": "juice",
     "image": "/images/66.jpg",
     "price": 21.42,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Tender Coconut(S)",
     "category": "fruits",
     "image": "/images/67.jpg",
     "price": 25.85,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Pista",
     "category": "spices",
     "image": "/images/68.jpg",
     "price": 178.48,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Thinda",
     "category": "fish",
     "image": "/images/69.jpg",
     "price": 74.23,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Tamarind seedless",
     "category": "fruits",
     "image": "/images/70.jpg",
     "price": 195.71,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Straw Berry",
     "category": "fruits",
     "image": "/images/71.jpg",
     "price": 144.56,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Litchi Local",
     "category": "fruits",
     "image": "/images/72.jpeg",
     "price": 331.86,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Kiwi fruit",
     "category": "fruits",
     "image": "/images/73.jpeg",
     "price": 521.36,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Grapes Krishna sharad",
     "category": "fruits",
     "image": "/images/74.jpg",
     "price": 148.26,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Grapes Flame",
     "category": "fruits",
     "image": "/images/75.jpg",
     "price": 105.46,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Grapes Sonika",
     "category": "fruits",
     "image": "/images/76.jpg",
     "price": 137.48,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Grapes Sharad",
     "category": "fruits",
     "image": "/images/77.jpeg",
     "price": 139.23,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Grapes Dilkush",
     "category": "fruits",
     "image": "/images/78.webp",
     "price": 85.26,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "GrapesAnabi shahi",
     "category": "fruits",
     "image": "/images/79.jpg",
     "price": 28.36,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Hesaru kalu",
     "category": "fruits",
     "image": "/images/80.jpeg",
     "price": 141.41,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Molake kalu",
     "category": "fruits",
     "image": "/images/81.jpg",
     "price": 114.82,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
   {
     "name": "Greens Sabbakki",
     "category": "fruits",
     "image": "/images/82.jpg",
     "price": 77.08,
     "countInStock": 100,
     rating: 4.5,
     numReviews: 120,
     "brand": "organicstore",
     "description": "best quality product"
   },
  //  {
  //    "name": "Parvala",
  //    "category": "vegetables",
  //    "image": "/images/83.jpeg",
  //    "price": 100.79,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Spring Onion(Cleaned)",
  //    "category": "vegetables",
  //    "image": "/images/84.jpeg",
  //    "price": 86.91,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Spring Onion",
  //    "category": "vegetables",
  //    "image": "/images/85.jpeg",
  //    "price": 83.97,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Chocolates Drink box",
  //    "category": "drinks",
  //    "image": "/images/86.jpeg",
  //    "price": 53.53,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Fanda",
  //    "category": "drinks",
  //    "image": "/images/87.jpeg",
  //    "price": 44.64,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Jam 1/2 kg",
  //    "category": "Ketchup & jam",
  //    "image": "/images/88.jpeg",
  //    "price": 98.17,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Coconut oil 500 ml",
  //    "category": "oil",
  //    "image": "/images/89.jpeg",
  //    "price": 126.52,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Stevia powder",
  //    "category": "spices",
  //    "image": "/images/90.jpeg",
  //    "price": 107.08,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Pepper",
  //    "category": "spices",
  //    "image": "/images/91.jpeg",
  //    "price": 124.91,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Sungold oil 5 lt packet",
  //    "category": "oil",
  //    "image": "/images/92.jpeg",
  //    "price": 713.87,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Sun safal Tin 15 lt",
  //    "category": "oil",
  //    "image": "/images/93.jpeg",
  //    "price": 845.91,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Safal deep 500 ml",
  //    "category": "oil",
  //    "image": "/images/94.jpeg",
  //    "price": 66.70,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Ground nut oil 5 lt",
  //    "category": "oil",
  //    "image": "/images/95.jpeg",
  //    "price": 1007.24,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Sungold oil 5 lt",
  //    "category": "oil",
  //    "image": "/images/96.jpeg",
  //    "price": 765.01,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Rice Bran 5 lt",
  //    "category": "oil",
  //    "image": "/images/97.jpeg",
  //    "price": 716.54,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Tamarind Paste 150 gm",
  //    "category": "spices",
  //    "image": "/images/98.jpeg",
  //    "price": 61.91,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Indian red globe",
  //    "category": "other",
  //    "image": "/images/99.jpeg",
  //    "price": 214.06,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Peas seeds",
  //    "category": "vegetables",
  //    "image": "/images/100.jpeg",
  //    "price": 305.86,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Anjura/Fig",
  //    "category": "fish",
  //    "image": "/images/101.jpeg",
  //    "price": 115.76,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Butter fruit",
  //    "category": "fruits",
  //    "image": "/images/102.jpeg",
  //    "price": 138.76,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Bore fruit",
  //    "category": "fruits",
  //    "image": "/images/103.jpeg",
  //    "price": 36.44,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "S.mellon Local (Luck)",
  //    "category": "fruits",
  //    "image": "/images/104.jpeg",
  //    "price": 59.48,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Chilles small cleaned (C.B.P)",
  //    "category": "spices",
  //    "image": "/images/105.jpeg",
  //    "price": 99.74,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Times Rose berry",
  //    "category": "fruits",
  //    "image": "/images/106.jpeg",
  //    "price": 218.49,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Chikkadikai cleaned",
  //    "category": "vegetables",
  //    "image": "/images/107.jpeg",
  //    "price": 75.89,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Orange juice",
  //    "category": "juice",
  //    "image": "/images/108.jpeg",
  //    "price": 24.98,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Thiland Jelly",
  //    "category": "Ketchup & jam",
  //    "image": "/images/109.jpeg",
  //    "price": 35.69,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Thiland Juice",
  //    "category": "juice",
  //    "image": "/images/110.jpeg",
  //    "price": 21.41,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Pineapple juice",
  //    "category": "juice",
  //    "image": "/images/111.jpeg",
  //    "price": 117.80,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mosambi",
  //    "category": "fruits",
  //    "image": "/images/112.jpeg",
  //    "price": 91.72,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "S.mellon namdhari",
  //    "category": "fruits",
  //    "image": "/images/113.jpeg",
  //    "price": 34.62,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Watermellon kiran",
  //    "category": "fruits",
  //    "image": "/images/114.jpeg",
  //    "price": 29.97,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Watermellon",
  //    "category": "fruits",
  //    "image": "/images/115.jpeg",
  //    "price": 25.09,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Tamarind sweet 500gm",
  //    "category": "fruits",
  //    "image": "/images/116.jpeg",
  //    "price": 184.04,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Rose apple",
  //    "category": "fruits",
  //    "image": "/images/117.jpeg",
  //    "price": 243.24,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Plum Australia",
  //    "category": "fruits",
  //    "image": "/images/118.jpeg",
  //    "price": 533.22,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Pineapple",
  //    "category": "fruits",
  //    "image": "/images/119.jpeg",
  //    "price": 64.88,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Papaya sola",
  //    "category": "fruits",
  //    "image": "/images/120.jpeg",
  //    "price": 59.7263322451747,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Papaya Red lady",
  //    "category": "fruits",
  //    "image": "/images/121.jpeg",
  //    "price": 36.20,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Papaya Taiwan",
  //    "category": "fruits",
  //    "image": "/images/122.jpeg",
  //    "price": 34.65,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Papaya nati",
  //    "category": "fruits",
  //    "image": "/images/123.jpeg",
  //    "price": 22.90,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Pomegranate A.raktha",
  //    "category": "fruits",
  //    "image": "/images/124.jpeg",
  //    "price": 153.07,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Pomegranate Bhagav",
  //    "category": "fruits",
  //    "image": "/images/125.jpeg",
  //    "price": 225.26,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Dhantu greens",
  //    "category": "fruits",
  //    "image": "/images/126.jpeg",
  //    "price": 55.07,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Curry leave",
  //    "category": "greens",
  //    "image": "/images/127.jpeg",
  //    "price": 85.26,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Corriander Leave",
  //    "category": "greens",
  //    "image": "/images/128.jpeg",
  //    "price": 63.20,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Kakadi",
  //    "category": "vegetables",
  //    "image": "/images/129.jpeg",
  //    "price": 78.57,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Pickles mixed veg",
  //    "category": "pickles",
  //    "image": "/images/130.jpeg",
  //    "price": 89.24,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "mango Pickles",
  //    "category": "pickles",
  //    "image": "/images/131.jpeg",
  //    "price": 107.08,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Lime Pickles",
  //    "category": "pickles",
  //    "image": "/images/132.jpeg",
  //    "price": 116.03,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Pickles",
  //    "category": "pickles",
  //    "image": "/images/133.jpeg",
  //    "price": 98.14,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Rice Bran 15 lt Tin",
  //    "category": "oil",
  //    "image": "/images/134.jpeg",
  //    "price": 1424.26,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "G. nut sungold 1 lt",
  //    "category": "oil",
  //    "image": "/images/135.jpeg",
  //    "price": 150.04,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "G. nut Golden oil 1 lt",
  //    "category": "oil",
  //    "image": "/images/136.jpeg",
  //    "price": 197.79,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "G. nut oil safal deep1 lt",
  //    "category": "oil",
  //    "image": "/images/137.jpeg",
  //    "price": 130.89,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Apple juice",
  //    "category": "juice",
  //    "image": "/images/138.jpeg",
  //    "price": 117.81,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Litchi Juice",
  //    "category": "juice",
  //    "image": "/images/139.jpeg",
  //    "price": 117.80,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Parsley",
  //    "category": "greens",
  //    "image": "/images/140.jpeg",
  //    "price": 278.62,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Leeks",
  //    "category": "vegetables",
  //    "image": "/images/141.jpeg",
  //    "price": 224.12,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Selari",
  //    "category": "vegetables",
  //    "image": "/images/142.jpeg",
  //    "price": 185.66,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Chikkadikai Round",
  //    "category": "vegetables",
  //    "image": "/images/143.jpeg",
  //    "price": 55.64,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mineral water 1 lt",
  //    "category": "drinks",
  //    "image": "/images/144.jpeg",
  //    "price": 26.75,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Net rich 5 lt oil",
  //    "category": "oil",
  //    "image": "/images/145.jpeg",
  //    "price": 526.65,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Maize",
  //    "category": "corn",
  //    "image": "/images/146.jpeg",
  //    "price": 27.21,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Y.Bananan T.N.",
  //    "category": "fruits",
  //    "image": "/images/147.jpeg",
  //    "price": 256.29,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Chain Berry",
  //    "category": "fruits",
  //    "image": "/images/148.jpeg",
  //    "price": 187.93,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Letteus Greens",
  //    "category": "greens",
  //    "image": "/images/149.jpeg",
  //    "price": 193.17,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Basale Greens",
  //    "category": "greens",
  //    "image": "/images/150.jpeg",
  //    "price": 56.09,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "BaleDindu (Banana stem)",
  //    "category": "vegetables",
  //    "image": "/images/151.jpeg",
  //    "price": 35.62,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Batani kalu",
  //    "category": "fruits",
  //    "image": "/images/152.jpeg",
  //    "price": 352.42,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Sweet corn",
  //    "category": "corn",
  //    "image": "/images/153.jpeg",
  //    "price": 55.80,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Orange Australia",
  //    "category": "fruits",
  //    "image": "/images/154.jpeg",
  //    "price": 200.13,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Orange Nagpura",
  //    "category": "fruits",
  //    "image": "/images/155.jpeg",
  //    "price": 99.14,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Cluster Bean Local",
  //    "category": "vegetables",
  //    "image": "/images/156.jpeg",
  //    "price": 49.17,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mangalore cucumber",
  //    "category": "vegetables",
  //    "image": "/images/157.jpeg",
  //    "price": 30.35,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Cucumber Israle",
  //    "category": "vegetables",
  //    "image": "/images/158.jpeg",
  //    "price": 55.69,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Cucumber Nati",
  //    "category": "vegetables",
  //    "image": "/images/159.jpeg",
  //    "price": 54.49,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Cucumber",
  //    "category": "vegetables",
  //    "image": "/images/160.jpeg",
  //    "price": 31.18,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Chow-Chow",
  //    "category": "vegetables",
  //    "image": "/images/161.jpeg",
  //    "price": 41.11,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Bottle Gourd",
  //    "category": "vegetables",
  //    "image": "/images/162.jpeg",
  //    "price": 36.00,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Dry fruit mixed",
  //    "category": "fruits",
  //    "image": "/images/163.jpeg",
  //    "price": 151.62,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Dry dates",
  //    "category": "nuts",
  //    "image": "/images/164.jpeg",
  //    "price": 185.92,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Peas Delhi",
  //    "category": "vegetables",
  //    "image": "/images/165.jpeg",
  //    "price": 90.67,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Peas local",
  //    "category": "vegetables",
  //    "image": "/images/166.jpeg",
  //    "price": 223.98,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Onion samber",
  //    "category": "vegetables",
  //    "image": "/images/167.jpeg",
  //    "price": 86.25,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Onion small(Economy)",
  //    "category": "vegetables",
  //    "image": "/images/168.jpeg",
  //    "price": 17.45,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Jack fruit",
  //    "category": "fruits",
  //    "image": "/images/169.jpeg",
  //    "price": 26.63,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Onion Big",
  //    "category": "vegetables",
  //    "image": "/images/170.jpeg",
  //    "price": 44.33,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Onion medium",
  //    "category": "vegetables",
  //    "image": "/images/171.jpeg",
  //    "price": 40.93,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mushroom Oyster",
  //    "category": "vegetables",
  //    "image": "/images/172.jpeg",
  //    "price": 179.17,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Brucoli",
  //    "category": "vegetables",
  //    "image": "/images/173.jpeg",
  //    "price": 294.39,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Avare seed (FB seeds)",
  //    "category": "vegetables",
  //    "image": "/images/174.jpeg",
  //    "price": 156.40,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Avarebele (F. Beans spok)",
  //    "category": "vegetables",
  //    "image": "/images/175.jpeg",
  //    "price": 281.52,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Bale hoovu(B.flower)",
  //    "category": "vegetables",
  //    "image": "/images/176.jpeg",
  //    "price": 33.42,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Sweet corn seeds",
  //    "category": "corn",
  //    "image": "/images/177.jpeg",
  //    "price": 84.10,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Kashini (Ganike) Greens",
  //    "category": "greens",
  //    "image": "/images/178.jpeg",
  //    "price": 13.67,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Cauliflower(B)",
  //    "category": "vegetables",
  //    "image": "/images/179.jpeg",
  //    "price": 47.74,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Cabbage chaina",
  //    "category": "vegetables",
  //    "image": "/images/180.jpeg",
  //    "price": 82.72,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Cabbage Red",
  //    "category": "vegetables",
  //    "image": "/images/181.jpeg",
  //    "price": 92.99,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Cabbage",
  //    "category": "vegetables",
  //    "image": "/images/182.jpeg",
  //    "price": 28.39,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Coconut (OS)",
  //    "category": "fruits",
  //    "image": "/images/183.jpeg",
  //    "price": 18.27,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Coconut (S)",
  //    "category": "fruits",
  //    "image": "/images/184.jpeg",
  //    "price": 23.69,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Coconut (M)",
  //    "category": "fruits",
  //    "image": "/images/185.jpeg",
  //    "price": 30.01,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Coconut (B)",
  //    "category": "fruits",
  //    "image": "/images/186.jpeg",
  //    "price": 34.59,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Carrot Nati",
  //    "category": "fruits",
  //    "image": "/images/187.jpeg",
  //    "price": 61.12,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Carrot Delhi",
  //    "category": "fruits",
  //    "image": "/images/188.jpeg",
  //    "price": 46.87,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Chillies small (C.B.P)",
  //    "category": "spices",
  //    "image": "/images/189.jpeg",
  //    "price": 96.63,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Chillies Cleaned",
  //    "category": "spices",
  //    "image": "/images/190.jpeg",
  //    "price": 55.80,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Chillies Bajji",
  //    "category": "spices",
  //    "image": "/images/191.jpeg",
  //    "price": 53.80,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Chillies Green",
  //    "category": "spices",
  //    "image": "/images/192.jpeg",
  //    "price": 56.93,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Capsicum Red/Yellow",
  //    "category": "vegetables",
  //    "image": "/images/193.jpeg",
  //    "price": 160.66,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Capsicum",
  //    "category": "vegetables",
  //    "image": "/images/194.jpeg",
  //    "price": 60.62,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango Raw",
  //    "category": "fruits",
  //    "image": "/images/195.jpeg",
  //    "price": 68.15,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Thogari kai",
  //    "category": "vegetables",
  //    "image": "/images/196.jpeg",
  //    "price": 52.89,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Tomato",
  //    "category": "salads",
  //    "image": "/images/197.jpeg",
  //    "price": 30.27,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Bitter Gourd",
  //    "category": "vegetables",
  //    "image": "/images/198.jpeg",
  //    "price": 48.74,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Yam/S.Root",
  //    "category": "vegetables",
  //    "image": "/images/199.jpeg",
  //    "price": 59.70,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Beet Root",
  //    "category": "vegetables",
  //    "image": "/images/200.jpeg",
  //    "price": 41.76,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Brinjal Bottle",
  //    "category": "vegetables",
  //    "image": "/images/201.jpeg",
  //    "price": 54.55,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Brinjal (R)",
  //    "category": "vegetables",
  //    "image": "/images/202.jpeg",
  //    "price": 37.06,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Brinjal (W)",
  //    "category": "vegetables",
  //    "image": "/images/203.jpeg",
  //    "price": 48.96,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Beans cleaned",
  //    "category": "vegetables",
  //    "image": "/images/204.jpeg",
  //    "price": 68.52,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Beans",
  //    "category": "vegetables",
  //    "image": "/images/205.jpeg",
  //    "price": 66.71,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Amla",
  //    "category": "fruits",
  //    "image": "/images/206.jpeg",
  //    "price": 89.07,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "N.Juice 200 ml",
  //    "category": "juice",
  //    "image": "/images/207.jpeg",
  //    "price": 26.75,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Pomegranate Juice",
  //    "category": "juice",
  //    "image": "/images/208.jpeg",
  //    "price": 117.77,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Brahmi amla juice",
  //    "category": "juice",
  //    "image": "/images/209.jpeg",
  //    "price": 124.97,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Jumbu juice",
  //    "category": "juice",
  //    "image": "/images/210.jpeg",
  //    "price": 223.13,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "G. nut oil Rice 1 lt",
  //    "category": "oil",
  //    "image": "/images/211.jpeg",
  //    "price": 107.52,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Onion flowers",
  //    "category": "vegetables",
  //    "image": "/images/212.jpeg",
  //    "price": 34.78,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Pomegranate Ganesh",
  //    "category": "fruits",
  //    "image": "/images/213.jpeg",
  //    "price": 119.09,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Peas Dharwad",
  //    "category": "vegetables",
  //    "image": "/images/214.jpeg",
  //    "price": 14.16,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Papaya red indian",
  //    "category": "fruits",
  //    "image": "/images/215.jpeg",
  //    "price": 37.17,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Peas Ooty",
  //    "category": "vegetables",
  //    "image": "/images/216.jpeg",
  //    "price": 124.08,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Grapes Crimson",
  //    "category": "fruits",
  //    "image": "/images/217.jpeg",
  //    "price": 48.99,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Indian Black globe Grapes",
  //    "category": "fruits",
  //    "image": "/images/218.jpeg",
  //    "price": 145.78,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Nagapur Orange Economy",
  //    "category": "fruits",
  //    "image": "/images/219.jpeg",
  //    "price": 9.76,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango thotapuri",
  //    "category": "fruits",
  //    "image": "/images/220.jpeg",
  //    "price": 53.55,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango Sendura",
  //    "category": "fruits",
  //    "image": "/images/221.jpeg",
  //    "price": 47.21,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "S.mellon namdhari (Red)",
  //    "category": "fruits",
  //    "image": "/images/222.jpeg",
  //    "price": 35.43,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Cucumber white",
  //    "category": "vegetables",
  //    "image": "/images/223.jpeg",
  //    "price": 34.92,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango Alphans",
  //    "category": "fruits",
  //    "image": "/images/224.jpeg",
  //    "price": 72.85,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango Raw Amblet",
  //    "category": "fruits",
  //    "image": "/images/225.jpeg",
  //    "price": 54.77,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango Badami",
  //    "category": "fruits",
  //    "image": "/images/226.jpeg",
  //    "price": 68.12,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango Raspuri",
  //    "category": "fruits",
  //    "image": "/images/227.jpeg",
  //    "price": 52.83,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "South Af.red berry",
  //    "category": "fruits",
  //    "image": "/images/228.jpeg",
  //    "price": 368.52,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Apple Chilli",
  //    "category": "spices",
  //    "image": "/images/229.jpeg",
  //    "price": 149.32,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Carrot ooty",
  //    "category": "fruits",
  //    "image": "/images/230.jpeg",
  //    "price": 71.97,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango Bygan palli",
  //    "category": "fruits",
  //    "image": "/images/231.jpeg",
  //    "price": 50.12,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango malagova",
  //    "category": "fruits",
  //    "image": "/images/232.jpeg",
  //    "price": 80.01,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Cluster Beans Bunches",
  //    "category": "vegetables",
  //    "image": "/images/233.jpeg",
  //    "price": 25.77,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango mallika",
  //    "category": "fruits",
  //    "image": "/images/234.jpeg",
  //    "price": 73.73,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango Dasheri",
  //    "category": "fruits",
  //    "image": "/images/235.jpeg",
  //    "price": 64.26,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango kalapadu",
  //    "category": "fruits",
  //    "image": "/images/236.jpeg",
  //    "price": 46.50,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Litchi Taiwan/chaina",
  //    "category": "fruits",
  //    "image": "/images/237.jpeg",
  //    "price": 369.55,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango sakkaregutti",
  //    "category": "fruits",
  //    "image": "/images/238.jpeg",
  //    "price": 40.75,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Rumenia Mango",
  //    "category": "fruits",
  //    "image": "/images/239.jpeg",
  //    "price": 74.14,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Apple Chaina Delicious",
  //    "category": "fruits",
  //    "image": "/images/240.jpeg",
  //    "price": 264.54,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango Amarpalli",
  //    "category": "fruits",
  //    "image": "/images/241.jpeg",
  //    "price": 40.72,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango Kesar",
  //    "category": "fruits",
  //    "image": "/images/242.jpeg",
  //    "price": 40.83,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango",
  //    "category": "fruits",
  //    "image": "/images/243.jpeg",
  //    "price": 23.46,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Jambo fruit(Nerale)",
  //    "category": "fruits",
  //    "image": "/images/244.jpeg",
  //    "price": 282.98,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango Neelam",
  //    "category": "fruits",
  //    "image": "/images/245.jpeg",
  //    "price": 47.16,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Grapes Rose",
  //    "category": "fruits",
  //    "image": "/images/246.jpeg",
  //    "price": 71.34,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Berry fruit Ooty",
  //    "category": "fruits",
  //    "image": "/images/247.jpeg",
  //    "price": 26.64,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Plum Ooty",
  //    "category": "fruits",
  //    "image": "/images/248.jpeg",
  //    "price": 180.18,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Orange",
  //    "category": "fruits",
  //    "image": "/images/249.jpeg",
  //    "price": 60.97,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Beans Fruit",
  //    "category": "fruits",
  //    "image": "/images/250.jpeg",
  //    "price": 69.99,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Apple hazarath palli",
  //    "category": "fruits",
  //    "image": "/images/251.jpeg",
  //    "price": 154.60,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Peaches",
  //    "category": "fruits",
  //    "image": "/images/252.jpeg",
  //    "price": 258.89,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Komark fruit",
  //    "category": "fruits",
  //    "image": "/images/253.jpeg",
  //    "price": 38.58,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Sweet corn seeds spok",
  //    "category": "corn",
  //    "image": "/images/254.jpeg",
  //    "price": 49.95,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Berry Golden",
  //    "category": "fruits",
  //    "image": "/images/255.jpeg",
  //    "price": 287.02,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Apple Simla",
  //    "category": "fruits",
  //    "image": "/images/256.jpeg",
  //    "price": 122.57,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Ginger New",
  //    "category": "spices",
  //    "image": "/images/257.jpeg",
  //    "price": 83.62,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Cherry Tomoto",
  //    "category": "vegetables",
  //    "image": "/images/258.jpeg",
  //    "price": 121.79,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Tamrind Chatisghar",
  //    "category": "spices",
  //    "image": "/images/259.jpeg",
  //    "price": 103.91,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Tender Coconut",
  //    "category": "fruits",
  //    "image": "/images/260.jpeg",
  //    "price": 33.45,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango rathnagiri(red)",
  //    "category": "fruits",
  //    "image": "/images/261.jpeg",
  //    "price": 32.57,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Berry Southafrica",
  //    "category": "fruits",
  //    "image": "/images/262.jpeg",
  //    "price": 211.33,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango Alphans box",
  //    "category": "fruits",
  //    "image": "/images/263.jpeg",
  //    "price": 116.42,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Apple Australia",
  //    "category": "fruits",
  //    "image": "/images/264.jpeg",
  //    "price": 188.52,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Potato Baby",
  //    "category": "vegetables",
  //    "image": "/images/265.jpeg",
  //    "price": 52.38,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Orange South Africa",
  //    "category": "fruits",
  //    "image": "/images/266.jpeg",
  //    "price": 148.57,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Apple Golden delicious",
  //    "category": "fruits",
  //    "image": "/images/267.jpeg",
  //    "price": 95.45,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Washington gala apple",
  //    "category": "fruits",
  //    "image": "/images/268.jpeg",
  //    "price": 160.07,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "South Africa Gala apple",
  //    "category": "fruits",
  //    "image": "/images/269.jpeg",
  //    "price": 47.46,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Washington red apple",
  //    "category": "fruits",
  //    "image": "/images/270.jpeg",
  //    "price": 126.41,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Dry apricot",
  //    "category": "nuts",
  //    "image": "/images/271.jpeg",
  //    "price": 20.02,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Berry ball",
  //    "category": "fruits",
  //    "image": "/images/272.jpeg",
  //    "price": 92.22,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Cherry kashmir",
  //    "category": "fruits",
  //    "image": "/images/273.jpeg",
  //    "price": 497.87,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Sweet corn cleaned",
  //    "category": "corn",
  //    "image": "/images/274.jpeg",
  //    "price": 125.14,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Tamarind Paste 450 gm",
  //    "category": "spices",
  //    "image": "/images/275.jpeg",
  //    "price": 164.01,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Cucumber Ooty",
  //    "category": "vegetables",
  //    "image": "/images/276.jpeg",
  //    "price": 212.01,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mosambi polo",
  //    "category": "fruits",
  //    "image": "/images/277.jpeg",
  //    "price": 31.04,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Beans Nati",
  //    "category": "vegetables",
  //    "image": "/images/278.jpeg",
  //    "price": 28.14,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Orange Ooty",
  //    "category": "fruits",
  //    "image": "/images/279.jpeg",
  //    "price": 76.75,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Mango Langada",
  //    "category": "fruits",
  //    "image": "/images/280.jpeg",
  //    "price": 57.70,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Beans Ring",
  //    "category": "fruits",
  //    "image": "/images/281.jpeg",
  //    "price": 23.58,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Cherry fruit",
  //    "category": "fruits",
  //    "image": "/images/282.jpeg",
  //    "price": 110.77,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Chillies Bajji yagani",
  //    "category": "spices",
  //    "image": "/images/283.jpeg",
  //    "price": 51.25,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  },
  //  {
  //    "name": "Tender Coconut(M)",
  //    "category": "fruits",
  //    "image": "/images/284.jpeg",
  //    "price": 27.16,
  //    "countInStock": 100,
  //    "brand": "organicstore",
  //    "description": "best quality product"
  //  }
 ],
};
export default data;