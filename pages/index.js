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
  let layerOptions = [1, 2, 3, 4];
  const [theme, setTheme] = useState(getRandomItem(Object.keys(themes)));
  const [layers, setLayers] = useState(2);
  const [colors, setColors] = useState(getRandomItem(Object.keys(colorCombos)));

  return (
    <main className="relative">
      {/* <nav className="fixed top-0 z-20 flex flex-row justify-between w-full px-8 pt-4 pb-8 space-x-8 shadow-lg bg-slate-700"> */}
      <nav className="z-20 grid w-full gap-8 px-8 pt-4 pb-8 shadow-lg bg-slate-700 md:fixed md:top-0 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-12">
        <SelectionMenu
          title={`themes (${theme})`}
          items={Object.keys(themes)}
          setItem={setTheme}
        />
        <SelectionMenu
          title={"layers"}
          items={layerOptions}
          setItem={setLayers}
        />
        <SelectionMenu
          title={`colors (${colors})`}
          items={Object.keys(colorCombos)}
          setItem={setColors}
        />
        <button
          className="flex items-center justify-center px-6 py-2 text-xl rounded-lg shadow-xl bg-slate-100 hover:bg-slate-200"
          onClick={() => {
            setTheme(getRandomItem(Object.keys(themes)));
            // setLayers(getRandomItem(layerOptions));
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
      <footer className="flex flex-col items-center justify-center w-full py-12 bg-slate-800">
        <a
          href="https://github.com/jishnupdas/tailwind-gradients"
          className="mx-auto text-sm text-white"
        >
          https://github.com/jishnupdas/tailwind-gradients
        </a>
        <p className="py-4 text-sm text-gray-400">feel free to fork and PR</p>
      </footer>
    </main>
  );
};

export default Home;
