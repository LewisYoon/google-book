import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BookCard from "./BookCard";

// Fake data for testing
const mockData = {
  volumeInfo: {
    title: "Sherlock Holmes",
    authors: ["Sir Arthur Conan Doyle"],
    description: "Detective",
    imageLinks: {
      thumbnail: "image.jpg",
    },
  },
};

// Fake data without Author
const noAuthor = {
  volumeInfo: {
    title: "Sherlock Holmes",
    description: "Detective",
    imageLinks: {
      thumbnail: "image.jpg",
    },
  },
};
// Fake data without title
const noTitle = {
  volumeInfo: {
    authors: ["Sir Arthur Conan Doyle"],
    description: "Detective",
    imageLinks: {
      thumbnail: "image.jpg",
    },
  },
};

// Fake data without image
const noImage = {
  volumeInfo: {
    title: "Sherlock Holmes",
    authors: ["Sir Arthur Conan Doyle"],
    description: "Detective",
  },
};
// Fake data without description

const noDescription = {
  volumeInfo: {
    title: "Sherlock Holmes",
    authors: ["Sir Arthur Conan Doyle"],
    imageLinks: {
      thumbnail: "image.jpg",
    },
  },
};

//check if it renders fake data correctly
describe("BookCard", () => {
  it("renders book information", () => {
    render(<BookCard book={mockData} />);

    expect(screen.getByText("Sherlock Holmes")).toBeInTheDocument();

    expect(screen.getByText("Sir Arthur Conan Doyle")).toBeInTheDocument();

    expect(screen.getByText("Detective")).toBeInTheDocument();
  });

  //check if it renders fallback text

  it("shows fallback text when author is missing", () => {
    render(<BookCard book={noAuthor} />);

    expect(screen.getByText("Unknown Author")).toBeInTheDocument();
  });

  //check if it renders fallback title

  it("shows fallback title when title is missing", () => {
    render(<BookCard book={noTitle} />);

    expect(screen.getByText("Title not avaialble")).toBeInTheDocument();
  });

  //check if it renders without image (does not crash)

  it("Renders when image is missing", () => {
    render(<BookCard book={noImage} />);

    expect(screen.getByText("Sherlock Holmes")).toBeInTheDocument();
  });

  //check if it renders fallback description

  it("shows fallback text when description is missing", () => {
    render(<BookCard book={noDescription} />);

    expect(screen.getByText("No description")).toBeInTheDocument();
  });
});
