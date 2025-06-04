import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { useAuthSession } from "@/hooks/useAuthSession";
import { useRouter } from "next/navigation";
import "@testing-library/jest-dom";

// Mock dependencies
jest.mock("@/hooks/useAuthSession");
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));
jest.mock("@/components/mode-toggle", () => ({
  ModeToggle: () => <button data-testid="mode-toggle">Toggle Theme</button>,
}));

describe("Header", () => {
  const mockLogout = jest.fn();
  const mockRouter = { push: jest.fn() };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    jest.clearAllMocks();
  });

  it("renders logo and navigation links", () => {
    (useAuthSession as jest.Mock).mockReturnValue({
      session: null,
      logout: mockLogout,
    });
    render(<Header />);
    expect(screen.getByText(/savannah/i)).toBeInTheDocument();
    expect(screen.getByText(/discover/i)).toBeInTheDocument();
  });

  it("renders search button with icon", () => {
    (useAuthSession as jest.Mock).mockReturnValue({
      session: null,
      logout: mockLogout,
    });
    render(<Header />);
    expect(screen.getByRole("link", { name: /search/i })).toBeInTheDocument();
    expect(screen.getByTestId("lucide-search")).toBeInTheDocument();
  });

  it("renders login button when no session", () => {
    (useAuthSession as jest.Mock).mockReturnValue({
      session: null,
      logout: mockLogout,
    });
    render(<Header />);
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("renders logout button when session exists", () => {
    (useAuthSession as jest.Mock).mockReturnValue({
      session: { user: { id: "123" } },
      logout: mockLogout,
    });
    render(<Header />);
    expect(
      screen.getByRole("button", { name: /log out/i })
    ).toBeInTheDocument();
  });

  it("calls logout when logout button is clicked", () => {
    (useAuthSession as jest.Mock).mockReturnValue({
      session: { user: { id: "123" } },
      logout: mockLogout,
    });
    render(<Header />);
    fireEvent.click(screen.getByRole("button", { name: /log out/i }));
    expect(mockLogout).toHaveBeenCalled();
  });

  it("renders mode toggle", () => {
    (useAuthSession as jest.Mock).mockReturnValue({
      session: null,
      logout: mockLogout,
    });
    render(<Header />);
    expect(screen.getByTestId("mode-toggle")).toBeInTheDocument();
  });
});
