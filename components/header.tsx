export const Header = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-10 bg-zinc-950/30 backdrop-blur-lg">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header>
          <nav className="flex items-center justify-between py-4">
            {/* <!-- left logo --> */}
            <div className="   ">
              <a href="/" className="inline-flex items-center gap-2">
                <div className="flex whitespace-nowrap text-lg font-normal md:text-2xl">
                  <span className="">re</span>
                  <span className="text-[rgb(34_211_238)]">char</span>
                  <span>ger</span>
                </div>
              </a>
            </div>
            {/* <!-- right menue --> */}
            <div className="hidden items-center gap-x-8 md:flex">
              <a
                href="/"
                className="inline-block text-sm text-white/75 transition hover:text-white"
              >
                {" "}
                Overview{" "}
              </a>
              <a
                href="/"
                className="inline-block text-sm text-white/75 transition hover:text-white"
              >
                {" "}
                Features{" "}
              </a>
              <a
                href="/"
                className="inline-block text-sm text-white/75 transition hover:text-white"
              >
                {" "}
                F.A.Q.{" "}
              </a>
              <a
                href="/"
                className="inline-block text-sm text-white/75 transition hover:text-white"
              >
                {" "}
                Pricing{" "}
              </a>
              <a
                href="/"
                className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur transition duration-300 hover:bg-white/25"
              >
                {" "}
                Get started{" "}
              </a>
            </div>
            {/* <!-- icone for open nav --> */}
            <div className="flex cursor-pointer hover:text-gray-200 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6 transition duration-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                ></path>
              </svg>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};
