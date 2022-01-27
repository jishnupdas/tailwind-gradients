import React from "react";
import { getRandomItem } from "../utils";
import { gradientChoices } from "./options";

const GradientCard = ({ text, colorsArray, theme }) => {
  return (
    <div className="relative grid w-full overflow-hidden place-items-center">
      <div className="z-10 grid w-full h-full p-12 place-items-center backdrop-blur-2xl lg:px-16 lg:py-24 2xl:px-24 2xl:py-32">
        {/* backdrop-blur-5xl */}
        <div className="z-10 grid max-w-2xl px-8 py-6 shadow-2xl place-items-center rounded-xl bg-slate-900/30 shadow-slate-900/30 brightness-100 2xl:px-12 2xl:py-10">
          <span
            className="font-mono text-xl font-bold text-white 2xl:text-2xl"
            dangerouslySetInnerHTML={{ __html: text }}
          ></span>
        </div>
      </div>
      <GradientBkg colors={colorsArray} blendMode={theme} />
    </div>
  );
};

export default GradientCard;

const GradientBkg = ({ colors, blendMode, layers = 2 }) => {
  const gradientlayers = Array.apply(0, Array(layers)).map(() => {
    // let midColor = getRandomItem(colors);
    return {
      gradient: getRandomItem(gradientChoices),
      from: `from-${getRandomItem(colors)}-${getRandomItem([500, 600, 700])}`,
      // via: `via-${midColor}-500`,
      via: `via-${getRandomItem(colors)}-${getRandomItem([500, 600, 700])}`,
      to: `to-${getRandomItem(colors)}-${getRandomItem([500, 600, 700])}`,
    };
  });

  return (
    <>
      {gradientlayers.map(({ gradient, from, via, to }, index) => (
        <div
          key={index}
          className={`absolute top-0 right-0 h-full w-full ${blendMode} ${gradient} ${from} ${via} ${to}`}
        ></div>
      ))}
    </>
  );
};

{
  /* <div
        className={`absolute top-0 right-0 h-full w-full ${g0} from-sky-700/70 via-purple-500/40 to-rose-700/90`}
      ></div>
      <div
        className={`absolute top-0 right-0 h-full w-full ${g1} from-sky-600 via-purple-500/40 to-indigo-900/60`}
      ></div> */
}
