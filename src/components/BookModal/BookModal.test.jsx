import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import BookModal from "./BookModal";

// Fake data for testing
const mockData = {
  volumeInfo: {
    title: "Sherlock Holmes",
    authors: ["Sir Arthur Conan Doyle"],
    description: "Detective",
    publisher: "Penguin",
    publishedDate: "2020",
    language: "en",
    pageCount: 100,
    categories: ["Mystery"],
    previewLink: "https://test.com",
    imageLinks: {
      thumbnail: "image.jpg",
    },
  },
};

// Fake data without description
const noDescription = {
  volumeInfo: {
    title: "Sherlock Holmes",
    authors: ["Sir Arthur Conan Doyle"],
    publisher: "Penguin",
  },
};

// Fake data without preview link
const noPreview = {
  volumeInfo: {
    title: "Sherlock Holmes",
    authors: ["Sir Arthur Conan Doyle"],
    description: "Detective",
  },
};

// Check if it renders fake data correctly
describe("BookModal", () => {
  it("renders book information", () => {
    render(<BookModal book={mockData} onClose={() => {}} />);

    expect(screen.getByText("Sherlock Holmes")).toBeInTheDocument();

    expect(screen.getByText("Sir Arthur Conan Doyle")).toBeInTheDocument();

    expect(screen.getByText("Detective")).toBeInTheDocument();

    expect(screen.getByText("Category: Mystery")).toBeInTheDocument();
  });

  // Check if it renders fallback description

  it("shows fallback description when description is missing", () => {
    render(<BookModal book={noDescription} onClose={() => {}} />);

    expect(screen.getByText("No description available.")).toBeInTheDocument();
  });

  // Check if preview link renders

  it("renders preview link when previewLink exists", () => {
    render(<BookModal book={mockData} onClose={() => {}} />);

    const previewLink = screen.getByText("Preview Book");

    expect(previewLink).toBeInTheDocument();

    expect(previewLink).toHaveAttribute("href", "https://test.com");
  });

  // Check if preview link is hidden when previewLink is missing

  it("does not render preview link when previewLink is missing", () => {
    render(<BookModal book={noPreview} onClose={() => {}} />);

    expect(screen.queryByText("Preview Book")).not.toBeInTheDocument();
  });

  // Check if close button works

  it("calls onClose when close button is clicked", async () => {
    const user = userEvent.setup();

    const mockClose = vi.fn();

    render(<BookModal book={mockData} onClose={mockClose} />);

    const closeButton = screen.getByRole("button");

    await user.click(closeButton);

    expect(mockClose).toHaveBeenCalledOnce();
  });
});
