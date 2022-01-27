import React from "react";
import { getRandomItem } from "../utils";
import RandomIcon from "./RandomIcon";

const SelectionMenu = ({ title, items, setItem }) => {
  return (
    <div className="w-full">
      <div className="flex items-center pb-4 space-x-4">
        <button
          className="px-6 py-2 text-xl shadow-xl bg-slate-400 hover:bg-slate-200"
          onClick={() => {
            setItem(getRandomItem(items));
          }}
        >
          <RandomIcon />
        </button>
        <label className="block text-lg font-medium capitalize text-slate-400">
          {title}{" "}
        </label>
      </div>
      <select
        id={title}
        name={title}
        className="block w-full px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 accent-slate-500"
        onChange={(e) => setItem(e.target.value)}
        // size={5}
      >
        {items.map((itemName, index) => (
          <option
            key={index}
            value={itemName}
            onChange={() => setItem(itemName)}
          >
            {itemName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectionMenu;
