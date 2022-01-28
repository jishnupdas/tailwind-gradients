import React, { useEffect, useState } from "react";
import { getRandomItem } from "../utils";
import { gradientChoices } from "./options";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CopyIcon from "../UIElements/CopyIcon";
import CheckIcon from "../UIElements/CheckIcon";

const GradientCard = ({ text, colorsArray, theme, layers }) => {
  const gradientlayers = Array.apply(0, Array(2)).map(() => {
    // let midColor = getRandomItem(colors);
    let shades = [500, 600, 700];
    return {
      gradient: getRandomItem(gradientChoices),
      from: `from-${getRandomItem(colorsArray)}-${getRandomItem(shades)}`,
      // via: `via-${midColor}-500`,
      via: `via-${getRandomItem(colorsArray)}-${getRandomItem(shades)}`,
      to: `to-${getRandomItem(colorsArray)}-${getRandomItem(shades)}`,
    };
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setCopied(false);
    }, 1000);
  }, [copied]);

  return (
    <div className="relative grid w-full overflow-hidden bg-gray-800 place-items-center">
      <div className="z-10 grid w-full h-full p-12 backdrop-blur-5xl place-items-center lg:px-16 lg:py-24">
        <div className="z-10 grid px-8 py-6 shadow-2xl place-items-center rounded-xl bg-slate-900/30 shadow-slate-900/30 2xl:px-10 2xl:py-8">
          <span
            className="font-mono text-xl font-bold text-white 2xl:text-2xl"
            dangerouslySetInnerHTML={{ __html: text }}
          ></span>
          <div className="absolute top-0 right-0">
            <CopyToClipboard
              text={CodeBlock({
                blendMode: theme,
                gradientlayers: gradientlayers,
              })}
              onCopy={() => setCopied(true)}
            >
              <button className="px-4 py-2 text-gray-200 transition-all duration-300 bg-white/30 hover:bg-white/90 hover:text-gray-600">
                {copied !== true ? <CopyIcon /> : <CheckIcon />}
              </button>
            </CopyToClipboard>
          </div>
          {/* <pre className="">
            <code className="font-mono text-white">
              <CodeBlock blendMode={theme} gradientlayers={gradientlayers} />
            </code>
          </pre> */}
        </div>
      </div>

      <GradientBkg blendMode={theme} gradientlayers={gradientlayers} />
    </div>
  );
};

export default GradientCard;

const GradientBkg = ({ blendMode, gradientlayers }) => {
  return gradientlayers.map(({ gradient, from, via, to }, index) => (
    <div
      key={index}
      className={`absolute top-0 right-0 h-full w-full ${blendMode} ${gradient} ${from} ${via} ${to}`}
    ></div>
  ));
};

const CodeBlock = ({ blendMode, gradientlayers }) => {
  return `
<div class="relative grid w-full h-full overflow-hidden bg-gray-800 place-items-center">
  <div class="z-10 w-full h-full p-12 backdrop-blur-5xl">
    <!-- your content here -->
  </div>
  ${gradientlayers.map(
    ({ gradient, from, via, to }) =>
      `
  <div class="absolute top-0 right-0 h-full w-full ${blendMode} ${gradient} ${from} ${via} ${to}">
  </div>
`
  )}
</div>`;
};
