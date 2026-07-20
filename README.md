
# LewBooGle

LewBooGle is a React-based book search app using Google Books API. This app features a responsive glassmorphism interface, interactive hover book cards, and detailed book information through a modal view.

## Features

- Search books by title, author, or keyword using Google Book API call
- Responsive grid layout for different screen sizes
- Interactive book cards with hover effects
- Book detail modal with additional information:
  - Language
  - Page count
  - Categories
  - Description
  - Google Books preview link

## Screenshots

### Home Page
<img width="1440" height="779" alt="Screenshot 2026-07-20 at 4 33 54 pm" src="https://github.com/user-attachments/assets/7b7799a5-0497-47df-9e38-7d9a4d67c026" />

### Book Grid Card view (Search Results)
<img width="1440" height="778" alt="Screenshot 2026-07-20 at 4 35 20 pm" src="https://github.com/user-attachments/assets/197a3395-505b-40b7-8c08-b221e7579c4b" />

### Book Card Details (When hovered)
<img width="1440" height="778" alt="Screenshot 2026-07-20 at 4 35 41 pm" src="https://github.com/user-attachments/assets/6fe3f44f-73fa-454a-9cf1-3dec4fc59cc8" />

### Book Modal Details (When clicked)
<img width="1440" height="778" alt="Screenshot 2026-07-20 at 4 36 05 pm" src="https://github.com/user-attachments/assets/55c616a8-65bd-464d-b1a9-bc53570be689" />


## Built With

- React
- JavaScript
- SCSS Modules
- Google Books API
- Vite

## How to run

### Clone the repository

```bash
git clone <repository-url>
```

### Install dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root and add your API key

```env
VITE_BOOKS_API_KEY=YOUR_API_KEY
```

### Run the application

```bash
npm run dev
```

## Future Improvements

- Add search by options (e.g search by authors)
- Add dark mode
- More detailed testing cases
