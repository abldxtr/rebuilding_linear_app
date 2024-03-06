import { F1 } from "./f_1";

export const Features = () => {
  return (
    <div className="py-8 lg:py-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* after img sec */}
        <div className="flex flex-col md:items-center">
          <span className="font-mono text-sm tracking-tight text-[rgb(103_232_249)]">
            Overview
          </span>
          <h2 className="font-display mt-4 text-left text-2xl font-light leading-[1.125] text-white md:text-center md:text-4xl lg:text-5xl">
            Revolutionizing the way
            <span className="text-white/50">
              you <br />
              understand documents
            </span>
          </h2>
          <p className="mx-auto mt-4 text-left leading-relaxed text-white/50 md:max-w-2xl md:text-center lg:mt-8">
            Recharger lets you have a conversation with your documents.{" "}
            <br className="hidden lg:block" />
            Just ask and retrieve the information you need, all in a simple
            chat.
          </p>
        </div>
        {/* first */}
        <F1 />
      </div>
    </div>
  );
};
