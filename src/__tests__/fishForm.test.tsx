import { render, screen, fireEvent } from "@testing-library/react";
import FishForm from "../components/fishForm";

describe("FishForm", () => {
    test("renders input fields", () => {
        render(<FishForm onAdd={jest.fn()} />);
        expect(screen.getByPlaceholderText("Navn")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Art")).toBeInTheDocument();
    });

    test("shows error if submitting empty", () => {
        render(<FishForm onAdd={jest.fn()} />);
        fireEvent.click(screen.getByText("Legg til"));
        expect(screen.getByText("Navn kan ikke være tomt")).toBeInTheDocument();
    });

    test("calls onAdd with correct values", () => {
        const onAddMock = jest.fn();
        render(<FishForm onAdd={onAddMock} />);

        fireEvent.change(screen.getByPlaceholderText("Navn"), {
            target: { value: "Laks" },
        });
        fireEvent.change(screen.getByPlaceholderText("Art"), {
            target: { value: "Atlanterhavslaks" },
        });
        fireEvent.change(screen.getByPlaceholderText("Lengde (cm)"), {
            target: { value: 50 },
        });
        fireEvent.change(screen.getByPlaceholderText("Vekt (kg)"), {
            target: { value: 3 },
        });

        fireEvent.click(screen.getByText("Legg til"));

        expect(onAddMock).toHaveBeenCalledWith({
            name: "Laks",
            species: "Atlanterhavslaks",
            length: 50,
            weight: 3,
        });
    });
});
