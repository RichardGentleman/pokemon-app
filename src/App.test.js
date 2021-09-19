import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders pokemon image if request succeeds", async () => {
    render(<App />);

    const imgElement = await screen.findAllByRole("img");
    expect(imgElement).not.toHaveLength(0);
  });
});
