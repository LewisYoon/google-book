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

<img width="1440" height="779" alt="Screenshot 2026-07-20 at 4 37 00 pm" src="https://github.com/user-attachments/assets/967ec44e-3bda-4d40-9137-351434ef3a6d" />

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

## Testing

This project uses **React Testing Library** and **Vitest** to test React components based on user behavior.

Tests focus on rendering, user interactions, fallback handling, and asynchronous API states.

### BookCard Tests

BookCard component tests verify that:

- Book information renders correctly from props.

- Author fallback text displays when author data is missing.

- Default title text displays when title data is missing.

- Component does not crash when book image data is unavailable.

- Description fallback text displays when description data is missing.

### BookModal Tests

BookModal component tests verify that:

- Full book details render correctly.

- Category information displays correctly.

- Fallback description appears when description data is missing.

- Preview link renders when previewLink exists.

- Preview link is hidden when previewLink is unavailable.

- Close button triggers the onClose callback when clicked.

### SearchBar Tests

SearchBar component tests verify that:

- User input is captured correctly.

- Search callback function is called with the entered search term when the button is clicked.

### BooksContainer Tests

BooksContainer component tests verify asynchronous search behavior by mocking the API service.

Tests verify that:

- Loading state appears while fetching books.

- Mocked API results are rendered correctly after a successful search.

## Test Results
<img width="750" height="340" alt="Screenshot 2026-07-20 at 5 56 02 pm" src="https://github.com/user-attachments/assets/3f65fcf2-d3d2-44bd-8e40-435e3a4f2164" />


### BookCard Tests

| Expected                                                        | Output |
| --------------------------------------------------------------- | ------ |
| Book title, author, and description should render correctly     | Pass   |
| Should display fallback text when author is missing             | Pass   |
| Should display fallback title when title is missing             | Pass   |
| Should render without crashing when image is missing            | Pass   |
| Should display fallback description when description is missing | Pass   |

### BookModal Tests

| Expected                                                                | Output |
| ----------------------------------------------------------------------- | ------ |
| Should render book title, author, description, and category information | Pass   |
| Should display fallback description when description is missing         | Pass   |
| Should render preview link when previewLink exists                      | Pass   |
| Should hide preview link when previewLink is missing                    | Pass   |
| Should call onClose function when close button is clicked               | Pass   |

### SearchBar Tests

| Expected                                                                              | Output |
| ------------------------------------------------------------------------------------- | ------ |
| Should capture user input correctly                                                   | Pass   |
| Should call search function with the entered search term after clicking search button | Pass   |

### BooksContainer Tests

| Expected                                          | Output |
| ------------------------------------------------- | ------ |
| Should display loading state while fetching books | Pass   |
| Should render books after successful API response | Pass   |

## Future Improvements

- Add search by options (e.g search by authors)
- Add dark mode
- More detailed testing cases
