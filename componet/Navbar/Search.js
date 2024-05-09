import React, { useEffect } from "react";
import { useState } from "react";
export default function Search({ Goals, setGoals, setSearch }) {
  const [searchcom, setSearchcom] = useState("");
  useEffect(() => {
    const searchTerm = searchcom.trim();
    const filteredData = Goals.filter((item) =>
      item.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearch(filteredData);
  }, [searchcom, Goals]);
  const handleSearchInputChange = (event) => {
    setSearchcom(event.target.value);
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", direction: "rtl" }}
    >
      <input
        type="text"
        className="input"
        placeholder="جست و جو هدف ..."
        value={searchcom}
        onChange={handleSearchInputChange}
      />
    </div>
  );
}
/*useEffect(() => {
  Handle();
}, [searchcom])
 function Handle() {
    const uppercaseSearchcom = searchcom.toUpperCase();
    const filtered = Goals.filter(
      (goal) => goal.Title.toUpperCase() === uppercaseSearchcom
    );
    console.log(filtered);
  }*/
