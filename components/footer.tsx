export const Footer = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:py-16">
      {/* <!-- line --> */}
      <div className="relative w-full py-6">
        <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-950 p-1.5">
            <div className="h-1.5 w-8 rounded-lg bg-white"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0">
        {/* <!-- 1 --> */}

        <div className="grid w-full grid-cols-2 md:flex md:w-1/3 md:flex-col md:justify-between md:px-2">
          <div className="   ">
            <a href="/" className="inline-flex items-center gap-2">
              <div className="flex whitespace-nowrap text-lg font-normal md:text-2xl">
                <span className="">re</span>
                <span className="text-[rgb(34_211_238)]">char</span>
                <span>ger</span>
              </div>
            </a>
          </div>
          <div className="flex gap-3">
            <a href="#">
              <span className="sr-only">YouTube</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 text-white hover:text-white/90"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#">
              <span className="sr-only">X / Twitter</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white hover:text-white/90"
              >
                <path
                  d="M12.927 11.3515L18.5111 5H17.1879L12.3392 10.5149L8.4666 5H4L9.85615 13.3395L4 20H5.32332L10.4436 14.1761L14.5334 20H19L12.9267 11.3515H12.927ZM11.1146 13.413L10.5212 12.5825L5.80014 5.97476H7.83269L11.6426 11.3075L12.236 12.1379L17.1885 19.0696H15.156L11.1146 13.4133V13.413Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a href="#">
              <span className="sr-only">TikTok</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white hover:text-white/90"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.1895 4C15.4589 6.41238 16.7519 7.85062 19 8.00363V10.7169C17.6972 10.8495 16.556 10.4058 15.2287 9.56938V14.644C15.2287 21.0907 8.47946 23.1052 5.76606 18.4845C4.02243 15.5111 5.09016 10.2936 10.6835 10.0845V12.9457C10.2574 13.0171 9.80187 13.1293 9.38556 13.2772C8.14151 13.7158 7.43622 14.5369 7.63214 15.9854C8.00927 18.7599 12.8973 19.581 12.4908 14.1595V4.0051H15.1895V4Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/* <!-- 2 --> */}

        <div className="grid grid-cols-2 gap-4 md:w-2/3 lg:grid-cols-3">
          {/* <!-- first --> */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-sm text-white">Product</h1>
            <ul className="[&_li]:footlink flex flex-col space-y-2">
              <li>Getting started</li>
              <li>Use cases</li>
              <li>API reference</li>
              <li>Examples</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* <!-- second --> */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-sm text-white">Tools</h1>

            <ul className="[&_li]:footlink flex flex-col space-y-2">
              <li>Invoice AI Scanner</li>
              <li>Bank statement analyzer</li>
              <li>Merge PDFs</li>
              <li>PDF to HTML</li>
            </ul>
          </div>

          {/* <!-- third --> */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-sm text-white">Resources</h1>

            <ul className="[&_li]:footlink flex flex-col space-y-2">
              <li>Affiliate program</li>
              <li>Privacy policy</li>
              <li>Company</li>
              <li>Terms of service</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};