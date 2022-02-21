import { getAllAbaRazzis, getAllAbaStories } from "../api/firestore";
import AbaCard from "../components/Card";
import React, { useState, useEffect } from "react";

export default function OverviewPage() {
  const [abaStories, setAbaStories] = useState([]);
  const [abaRazzis, setAbaRazzis] = useState([]);

  async function fetchAllData() {
    setAbaStories(await getAllAbaStories());
    setAbaRazzis(await getAllAbaRazzis());
  }

  useEffect(() => {
    fetchAllData();
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>AbaStories</h1>

      <div className="container">
        {abaStories.map((story, key) => (
          <div className="flex-item" key={key}>
            <AbaCard {...story} />
          </div>
        ))}
      </div>

      <h1 style={{ textAlign: "center" }}>AbaRazzis</h1>

      <div className="container">
        {abaRazzis.map((abaRazzi, key) => (
          <div className="flex-item" key={key}>
            <AbaCard {...abaRazzi} />
          </div>
        ))}
      </div>
    </>
  );
}
