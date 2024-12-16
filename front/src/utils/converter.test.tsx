import { renderDate } from "./converters";

describe("Date Rendering", () => {
  it("should return a correct date from a UTC string", () => {
    let dateValue: string = "2021-10-25T00:00:00Z";
    let expectedDate: string = "25 / 10 / 2021";
    expect(expectedDate).toEqual(renderDate(dateValue));
  });

  it("should return a correct date from a simpler UTC string", () => {
    let dateValue: string = "2021-07-11";
    let expectedDate: string = "11 / 7 / 2021";
    expect(expectedDate).toEqual(renderDate(dateValue));
  });

  it("should return an empty string when nothing is passed in", () => {
    let expectedDate: string = "";
    expect(expectedDate).toEqual(renderDate(""));
  });

  it("should return an empty string when an invalid date is passed in", () => {
    let expectedDate: string = "";
    expect(expectedDate).toEqual(renderDate("asgasgasgasgsag"));
  });
});
