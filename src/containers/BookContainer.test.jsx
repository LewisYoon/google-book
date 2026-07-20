import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import BooksContainer from "./BooksContainer";
import * as bookServices from "../services/books-services";

// Fake book data
const mockBooks = [
  {
    volumeInfo: {
      title: "Sherlock Holmes",
      authors: ["Sir Arthur Conan Doyle"],
      description: "Detective",
    },
  },
];

//check if it fetches mock data by checking its rendering loading text
describe("BooksContainer", () => {
  it("renders books when search returns results", async () => {
    vi.spyOn(bookServices, "getBooksBySearchTerm").mockResolvedValue(mockBooks);

    render(<BooksContainer searchTerm="Sherlock Holmes" />);
    // Check loading state

    expect(screen.getByText("loading...")).toBeInTheDocument();

    // Check fetched books are rendered
    expect(await screen.findByText("Sherlock Holmes")).toBeInTheDocument();
  });
});
