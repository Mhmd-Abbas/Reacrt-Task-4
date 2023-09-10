import { useContext, useState } from "react";
import List from "./components/List.js";
import size from "./components/MyContext.js";

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
    <size.Provider value = {imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List/>
      </size.Provider>
    </>
  );
}
