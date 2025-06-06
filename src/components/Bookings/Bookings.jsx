import { useState, useEffect } from "react";

// import Search from "@/components/Search/Search";
import SearchResults from "@/components/SearchResults/SearchResults.jsx";
// import FakeBookings from "@/data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  // const search = (searchVal) => {
  //   console.info("TO DO!", searchVal);
  // };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(`http://54.217.140.104:3001/bookings`);
        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBookings();
  }, []);

  return (
    <main className="bookings">
      {/* <Search search={search} /> */}
      <SearchResults results={bookings} />
    </main>
  );
};

export default Bookings;
