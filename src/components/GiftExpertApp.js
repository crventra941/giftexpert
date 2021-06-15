import { useState } from "react";
import { AddCategory } from './AddCategory';
import { GiftGrid } from "./GiftGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon  Ball']);

  return (
    <div>
      <h2>Gift Expert App</h2>
      <AddCategory setCategory={setCategories} />
      <hr />

      <ol>
        {
          categories.map((category) => (
            <GiftGrid
              key={category}
              category={category} />
            // <li key={category}>{category}</li>
          ))
        }
      </ol>
    </div>
  );
}
