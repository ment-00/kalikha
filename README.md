# KALIKHA – Sustainable Filipino Essentials

*Inspired by Nature, Made for Living.*

An e-commerce website built with **ReactJS + Vite**, **React-Bootstrap**, **React Router DOM**, JavaScript and CSS.

## Getting started

```bash
npm install
npm run dev
```

Open the address Vite shows (usually http://localhost:5173).
To make a production build: `npm run build`, then `npm run preview`.

## Pages and routes

| Route | Page |
|---|---|
| `/` | Home: hero, featured products, commercial video, Why Choose KALIKHA, impact calculator, mission banner |
| `/shop` | Shop: all 27 products with category filters (`/shop?category=Personal%20Care`) |
| `/shop/:productId` | Product Details: one dynamic route used by every product |
| `/cart` | Shopping Cart: quantities, remove, subtotals, total, demo checkout |
| `/about` | About Us: story, mission, vision, core values, team |
| `/contact` | Contact Us: contact info and validated form |
| `*` | 404 page |

## Features

- Responsive navbar that collapses on mobile, highlights the active page and shows a live cart count
- Add to Cart from the Shop page and from Product Details (with a quantity selector)
- Cart quantities can be changed or removed, and subtotals and the total update automatically
- The cart is saved in `localStorage`, so it survives navigation and page refreshes
- An "Added to cart" pop-up appears on every page
- Contact form validation (name, email format, subject, message length) with a success message
- Demo checkout (no payment gateway)
- Home page commercial video with a custom play button (it pauses when scrolled away)
- Interactive extras: a hero collage that moves with the mouse, an impact calculator with a growing plant, and fade-in on scroll (turned off for visitors who prefer reduced motion)

## Project structure

```
public/
  images/products/   product images + placeholder.svg
  videos/            commercial video + poster
src/
  assets/            hero-bg.svg
  components/        Navbar, Footer, ProductCard, ProductImg, CartItem, QuantitySelector,
                     Layout, PageBanner, Logo, VideoShowcase, ImpactCalculator, Reveal
  context/           CartContext.jsx (cart state + localStorage)
  data/              products.js (catalog), store.js (contact details)
  pages/             Home, Shop, ProductDetails, Cart, About, Contact, NotFound
  App.jsx            routes
  main.jsx           BrowserRouter + CartProvider + styles
  index.css          theme colors, typography, buttons, forms
  App.css            component and page styles
```

## Store details

The email, phone number and location are in `src/data/store.js`. The footer and Contact page both read from there.

## Adding a product

Open `src/data/products.js`, copy one product block, paste it at the end of the list, and edit it:

```js
{
  id: 'reusable-straw-set',          // unique, lowercase-with-dashes; page becomes /shop/reusable-straw-set
  name: 'Reusable Straw Set',
  price: 129,
  category: 'Kitchen Essentials',    // a new category name appears in the Shop filters automatically
  image: `${IMAGE_DIR}straw-set.jpg`, // leave this out to show a "Photo coming soon" placeholder
  featured: false,                   // true = also show it on the Home page
  description: 'One-line summary shown on the product card.',
  details: 'Longer paragraph shown on the product page.',
  benefits: ['Benefit one', 'Benefit two', 'Benefit three'],
},
```

## Adding the real product photos

1. Put the photos in `public/images/products/`. Square images (for example 1000 × 1000) look best.
2. In `src/data/products.js`, change that product's file name, for example
   `` image: `${IMAGE_DIR}tote-bag.jpg` ``.

If a file name is mistyped, the "Photo coming soon" placeholder shows instead of a broken image.

## Video

The commercial is `public/videos/kalikha-commercial.mp4`, and the image shown before it plays is `kalikha-commercial-poster.jpg`. To use a different video, replace these files and keep the same names.
