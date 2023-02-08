import { render, screen } from "@testing-library/react";
import CharactersList from "../CharactersList";
import { MemoryRouter } from "react-router-dom";

const mockData = {
  page: 1,
  charactersList: [
    {
      name: "Testing name",
      image: "",
      id: 1,
      species: "test species",
      status: "alive",
    },
  ],
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/characters",
  }),
}));

test("renders character", () => {
  render(
    <MemoryRouter initialEntries={['/characters']}>
      <CharactersList
        page={mockData.page}
        charactersList={mockData.charactersList}
      />
    </MemoryRouter>
  );
  const linkElement = screen.getByTestId(`character-1`);

  expect(linkElement).toBeInTheDocument();
});
