import { render, screen } from "@testing-library/react";
import LocationsList from "../LocationsList";
import { MemoryRouter } from "react-router-dom";

const mockData = {
  page: 1,
  locationsList: [
    {
      id: 1,
      name: "test name",
      type: "test type",
      dimension: "test dimension",
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
    <MemoryRouter initialEntries={["/locations"]}>
      <LocationsList
        page={mockData.page}
        locationsList={mockData.locationsList}
      />
    </MemoryRouter>
  );
  const linkElement = screen.getByTestId(`location-1`);

  expect(linkElement).toBeInTheDocument();
});
