import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("calls search function with input value", async () => {
    const user = userEvent.setup();

    const mockSearch = vi.fn();

    render(<SearchBar onSearch={mockSearch} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    //search for sherlock holmes
    await user.type(input, "Sherlock Holmes");

    await user.click(button);
    //check if it calls text sherlock holmes
    expect(mockSearch).toHaveBeenCalledWith("Sherlock Holmes");
  });
});
