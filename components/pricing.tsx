export const Pricing = () => {
  return (
    <div className="py-8 lg:py-16">
      {/* <div className="relative"> */}

      <div className="py relative mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-950 p-1.5">
            <div className="h-1.5 w-8 rounded-lg bg-white"></div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <span className="font-mono text-sm tracking-tight text-[rgb(103_232_249)]">
            Pricing
          </span>
          <h2 className="font-display mt-4 text-center text-2xl font-light leading-[1.125] text-white md:text-4xl lg:text-5xl">
            Choose the plan <br />
            that <span className="text-white/50">fits you best</span>
          </h2>
          <p className="mx-auto mt-4 text-center leading-relaxed text-white/50 md:max-w-2xl lg:mt-8">
            Get started for free and upgrade once you feel like it. There's a
            plan for everyone, from individual users to large teams.
          </p>
        </div>
        {/* <!-- main pricing --> */}
      </div>
      <div className="mt-12 lg:mt-28">
        <div className="mx-auto grid max-w-5xl gap-4 px-4 md:px-8 lg:grid-cols-3 lg:gap-0">
          {/* <!-- 1 --> */}
          <div className="lg:pb-5bg-blue-50/10 w-full overflow-hidden border-r-0 lg:flex lg:items-center lg:rounded-bl-3xl lg:rounded-tl-3xl lg:border lg:border-gray-100/40">
            <div className="relative w-full lg:px-10">
              <div className="font-mono text-white">Starter</div>
              <div className="mt-4 flex items-end">
                <div className="font-lead text-4xl font-bold text-white">
                  $29
                </div>
                <span className="ml-1 text-sm text-white/50">/ month</span>
              </div>
              <div className="mt-8 divide-y divide-white/10 text-sm font-medium text-white/75">
                <div className="py-2">Real-time chat</div>
                <div className="py-2">Dynamic suggestions</div>
                <div className="py-2">Detailed analysis</div>
                <div className="py-2">Chat history</div>
              </div>
              <div className="mt-12">
                <a
                  href="#"
                  className="inline-block w-full rounded-lg bg-white/5 px-4 py-2 text-center font-medium text-white transition duration-300 hover:bg-white/10"
                >
                  {" "}
                  Get started{" "}
                </a>
              </div>
            </div>
          </div>

          {/* <!-- 2 --> */}
          <div className="overflow-hidden lg:flex lg:scale-y-125 lg:items-center lg:rounded-3xl lg:border lg:border-gray-100/40 lg:py-5 lg:pb-5">
            <div className="relative w-full lg:px-10">
              <div className="font-mono text-white">Basic</div>
              <div className="mt-4 flex items-end">
                <div className="font-lead text-4xl font-bold text-white">
                  $49
                </div>
                <span className="ml-1 text-sm text-white/50">/ month</span>
              </div>
              <div className="mt-8 divide-y divide-white/10 text-sm font-medium text-white/75">
                <div className="py-2">Real-time chat</div>
                <div className="py-2">Dynamic suggestions</div>
                <div className="py-2">Detailed analysis</div>
                <div className="py-2">Chat history</div>
                <div className="py-2">Intelligent summarization</div>
                <div className="py-2">Key metric identification</div>
              </div>
              <div className="mt-12">
                <a
                  href="#"
                  className="inline-block w-full rounded-lg bg-white px-4 py-2 text-center font-medium text-zinc-950 transition duration-300 hover:bg-white/80"
                >
                  {" "}
                  Get started for free{" "}
                </a>
              </div>
            </div>
          </div>

          {/* <!-- 3 --> */}
          <div className="w-full overflow-hidden border-l-0 lg:flex lg:items-center lg:rounded-br-3xl lg:rounded-tr-3xl lg:border lg:border-gray-100/40 lg:pb-5">
            <div className="relative w-full lg:px-10">
              <div className="font-mono text-white">Enterprise</div>
              <div className="mt-4 flex items-end">
                <div className="font-lead text-4xl font-bold text-white">
                  $490
                </div>
                <span className="ml-1 text-sm text-white/50">/ month</span>
              </div>
              <div className="mt-8 divide-y divide-white/10 text-sm font-medium text-white/75">
                <div className="py-2">Dynamic suggestions</div>
                <div className="py-2">Detailed analysis</div>
                <div className="py-2">Intelligent summarization</div>

                <div className="py-2">Key metric identification</div>
              </div>
              <div className="mt-12">
                <a
                  href="#"
                  className="inline-block w-full rounded-lg bg-white/5 px-4 py-2 text-center font-medium text-white transition duration-300 hover:bg-white/10"
                >
                  {" "}
                  Get started{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
