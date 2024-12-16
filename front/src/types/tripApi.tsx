export type TripApiResponse = {
  tripSet: Array<TripSet> | undefined;
  dates: Array<Dates> | undefined;
  description: string | undefined;
  destinations: Array<Destinations> | undefined;
  name: string | undefined;
  id: number | undefined;
  showTripValue: boolean | undefined;
  styles: Array<Styles> | undefined;
};

export interface Dates {
  [key: string]: string;
}

export interface Destinations {
  [key: string]: string;
}

export interface Styles {
  [key: string]: string;
}

export type TripSet = {
  // can extend this out with more API properties if required
  heroImage: string;
  unitName: string;
  unitStyleName: string;
  checkInDate: string;
  convertedCheckInDate: Date | undefined; // not returned from API, but generated when data is converted to this type within API
};
