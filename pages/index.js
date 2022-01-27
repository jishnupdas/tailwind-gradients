import React, { useState } from "react";

import GradientCard from "../components/gradientCard/GradientCard";
import Head from "next/head";
import RandomIcon from "../components/UIElements/RandomIcon";
import SelectionMenu from "../components/UIElements/SelectionMenu";
import { colorCombos } from "../components/gradientCard/options";
import { getRandomItem } from "../components/utils";
import quotes from "../data/quotes";
import { themes } from "../components/gradientCard/themes";

const Home = () => {
  const [theme, setTheme] = useState(getRandomItem(Object.keys(themes)));
  const [layers, setLayers] = useState(2);
  const [colors, setColors] = useState(getRandomItem(Object.keys(colorCombos)));

  return (
    <main className="relative">
      <nav className="fixed top-0 z-20 flex flex-row justify-between w-full px-8 pt-4 pb-8 space-x-8 shadow-lg bg-slate-700">
        <SelectionMenu
          title={`themes (${theme})`}
          items={Object.keys(themes)}
          setItem={setTheme}
        />
        <SelectionMenu
          title={"layers"}
          items={[1, 2, 3, 4, 5, 6]}
          setItem={setLayers}
        />
        <SelectionMenu
          title={`colors (${colors})`}
          items={Object.keys(colorCombos)}
          setItem={setColors}
        />
        <button
          className="flex items-center px-6 py-2 text-xl shadow-xl bg-slate-100"
          onClick={() => {
            setTheme(getRandomItem(Object.keys(themes)));
            setLayers(getRandomItem([1, 2, 3, 4, 5, 6]));
            setColors(getRandomItem(Object.keys(colorCombos)));
          }}
        >
          <RandomIcon /> Randomize
        </button>
      </nav>
      <section className="relative grid min-h-screen gap-10 p-12 pt-40 bg-slate-800 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {quotes.map((quote, index) => (
          <GradientCard
            key={index}
            text={quote.h}
            colorsArray={colorCombos[colors]}
            theme={themes[theme]}
            layers={layers}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
