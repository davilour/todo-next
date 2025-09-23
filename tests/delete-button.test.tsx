import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { DeleteButton } from "../src/app/todo-list/components/delete-button";

jest.mock("../actions/todo", () => ({
  DeleteToDos: jest.fn(),
}));

jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

jest.mock("@/app/todo-list/store/todo.store", () => ({
  useTodoStore: () => ({
    makeTodoAsDeleting: jest.fn(),
  }),
}));

jest.mock("@/store/button-state", () => ({
  useButtonState: () => ({
    lock: jest.fn(),
    unlock: jest.fn(),
  }),
}));

describe("DeleteButton", () => {
  const { DeleteToDos } = require("../actions/todo");
  const { toast } = require("sonner");

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar o botão corretamente", () => {
    render(<DeleteButton id="123" />);
    expect(screen.getByRole("button", { name: "Remover" })).toBeInTheDocument();
  });

  it("deve chamar DeleteToDos e mostrar toast de sucesso", async () => {
    (DeleteToDos as jest.Mock).mockResolvedValueOnce(undefined);

    render(<DeleteButton id="123" />);
    fireEvent.click(screen.getByRole("button", { name: "Remover" }));

    await waitFor(() => {
      expect(DeleteToDos).toHaveBeenCalledWith("123");
      expect(toast.success).toHaveBeenCalledWith("Todo deletada com sucesso!");
    });
  });

  it("deve mostrar toast de erro quando DeleteToDos falhar", async () => {
    (DeleteToDos as jest.Mock).mockRejectedValueOnce(new Error("Erro"));

    render(<DeleteButton id="123" />);
    fireEvent.click(screen.getByRole("button", { name: "Remover" }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Erro ao apagar o todo");
    });
  });
});
