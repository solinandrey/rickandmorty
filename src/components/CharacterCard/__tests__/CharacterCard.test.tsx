import { render, screen, cleanup } from "@testing-library/react";
import CharacterCard from "@components/CharacterCard";
import { MemoryRouter } from "react-router-dom";


const mockData = {
  character: {
    name: "Testing name",
    image: "",
    id: 1,
    species: "test species",
    status: "alive",
  },
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/characters",
  }),
}));

test("renders character", () => {
  render(
    <MemoryRouter initialEntries={["/characters"]}>
      <CharacterCard character={mockData.character}/>
    </MemoryRouter>
  );
  const titleElement = screen.getByTestId('character-name');
  const speciesElement = screen.getByTestId('character-species');
  const statusElement = screen.getByTestId('character-status');

  expect(titleElement).toHaveTextContent('Testing name');
  expect(speciesElement).toHaveTextContent('test species');
  expect(statusElement).toHaveTextContent('alive');
});
