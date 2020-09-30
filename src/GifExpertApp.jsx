import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["League of Legend"]);
  // const handleAdd = () => {
  //     setCategories([...categories, 'Superman'])
  // }
  return (
    <>
      <h2>gifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category, index) => (
          <GifGrid key={category + index} category={category} />
        ))}
      </ol>
    </>
  );
};
