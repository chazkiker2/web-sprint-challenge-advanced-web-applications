import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import userEvent from "@testing-library/user-event";
import { fetchColors as mockFetchColors } from "../utils/fetchColors";
jest.mock("../utils/fetchColors.js");

const res = {
	data: [
		{ color: "aliceblue", code: { hex: "#f0f8ff" }, id: 0 },
		{ color: "prussianblue", code: { hex: "#1D3557" }, id: 1 },
		{ color: "black", code: { hex: "#000" }, id: 2 },
		{ color: "off-white", code: { hex: "#fff" }, id: 3 },
	],
};

test("renders without errors", () => {
	mockFetchColors.mockResolvedValueOnce(res);
	render(<BubblePage />);
})

test("Fetches data and renders the bubbles", async () => {
	jest.resetAllMocks();
	mockFetchColors.mockResolvedValueOnce(res);
	render(<BubblePage />);
	expect(mockFetchColors).toHaveBeenCalledTimes(1);

	await waitFor(() => {
		const aliceBlue = screen.getByText(/aliceblue/i);
		const prussianBlue = screen.getByText(/prussianblue/i);
		const black = screen.getByText(/black/i);
		const offWhite = screen.getByText(/off-white/i);
		expect(aliceBlue).toBeInTheDocument();
		expect(prussianBlue).toBeInTheDocument();
		expect(black).toBeInTheDocument();
		expect(offWhite).toBeInTheDocument();
	});


});
