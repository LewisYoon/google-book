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

### Book Grid Card view (Search Results)

### Book Card Details (When hovered)

### Book Modal Details (When clicked)

Add a screenshot here.

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
