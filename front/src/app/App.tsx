import { useEffect, useState } from "react";
import { TripApiResponse, TripSet } from "types";
import { TripsAPI } from "./api";
import ItemRender from "components/ItemRender/ItemRender";

import "./App.css";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [tripData, setTripData] = useState<TripApiResponse>();
  const [sortAscending, setSortAscending] = useState<boolean>(false);

  const [unitStyleFilter, setUnitStyleFilter] = useState<string>("");

  useEffect(() => {
    TripsAPI.fetchTripData().then((tripData) => {
      setTripData(tripData);
      setLoading(false);
    });
  }, []);

  const handleFilterInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUnitStyleFilter(event.target.value);
  };

  const renderItems = () => {
    if (tripData?.tripSet && tripData.tripSet.length > 0) {
      const data: Array<TripSet> = tripData.tripSet;

      return data
        .sort((a, b) => {
          const dateA = a.convertedCheckInDate?.getTime() || 0;
          const dateB = b.convertedCheckInDate?.getTime() || 0;
          return sortAscending ? dateB - dateA : dateA - dateB;
        })
        .filter((item) =>
          item.unitStyleName
            .toLowerCase()
            .includes(unitStyleFilter.toLowerCase())
        )
        .map((item: TripSet) => (
          <ItemRender
            heroImage={item.heroImage}
            unitName={item.unitName}
            unitStyleName={item.unitStyleName}
            checkInDate={item.checkInDate}
          />
        ));
    }
    return null;
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Holiday Booking Options!</h1>
      </div>
      <span>Here is the list of options that we have available!</span>
      {loading && (
        <>
          <br />
          <b>LOADING...</b>
        </>
      )}
      <div className="filter-container">
        <button
          className="sort-button"
          onClick={() => {
            setSortAscending(!sortAscending);
          }}
        >
          Sort By {sortAscending ? "Closest" : "Furthest"}
        </button>
        Filter: <input onChange={handleFilterInputChange}></input>
      </div>
      <div className="items">{renderItems()}</div>
    </div>
  );
}

export default App;
