import { TripApiResponse } from "types";

export async function fetchTripData(): Promise<TripApiResponse> {
  try {
    const API_URL = "/data/trips.json";
    const response = await fetch(API_URL);

    const data = (await response.json()) as TripApiResponse;

    if (data.tripSet && data.tripSet?.length > 0) {
      //modify data.tripSet to return with generated CheckInDates for sorting

      data.tripSet = data.tripSet?.map((trip) => ({
        ...trip,
        convertedCheckInDate: trip.checkInDate
          ? new Date(trip.checkInDate)
          : undefined,
      }));
    }

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
