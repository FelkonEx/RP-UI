import { act } from "react"; // This should be from 'react' now
import { render } from "@testing-library/react";
import ItemRender from "./ItemRender";

it("renders correctly and matches snapshot", async () => {
  const { asFragment } = render(
    <ItemRender
      heroImage="test_hero_image.png"
      unitName="testUnitName"
      unitStyleName="testUnitStyleName"
      checkInDate="2024-01-06"
    />
  );

  /* eslint-disable testing-library/no-unnecessary-act */
  await act(async () => {});
  // from the console: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`... but it's importing from react 🤔

  expect(asFragment()).toMatchSnapshot();
});
