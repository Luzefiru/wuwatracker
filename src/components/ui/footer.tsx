import * as React from 'react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t mt-10 pt-2 bg-background">
      <div className="mx-auto w-full max-w-screen-desktop p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center gap-2">
              <div className="aspect-square relative w-14">
                <Image
                  className="object-cover invert dark:invert-0"
                  src="/icons/convene-icon.png"
                  layout="fill"
                  alt="Wuwa Convene Tracker"
                />
              </div>
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Wuwa Tracker
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Developers
              </h2>
              <ul className="text-muted-foreground">
                <li className="mb-4">
                  <a href="https://github.com/Luzefiru/wuwatracker">
                    Report a Bug
                  </a>
                </li>
                <li>
                  <a
                    href="https://ko-fi.com/manage/mypage"
                    className="flex gap-2 items-center"
                  >
                    <span>Ko-fi</span>{' '}
                    <div className="aspect-square relative w-6 flex items-center">
                      <Image
                        className="object-cover"
                        src="/icons/ko-fi.png"
                        width="1239"
                        height="853"
                        alt="Support Us on Ko-fi"
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Resources
              </h2>
              <ul className="text-muted-foreground">
                <li className="mb-4">
                  <a href="https://wutheringwaves.kurogames.com/">
                    Wuthering Waves
                  </a>
                </li>
                <li>
                  <a href="https://kurogames.com/">Kuro Games</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="text-muted-foreground">
                <li className="mb-4">
                  <a href="/terms-and-conditions">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center sm:text-start sm:flex sm:items-center sm:justify-between mt-12">
          <span className="text-sm text-muted-foreground">
            © 2024{' '}
            <a href="/" className="hover:text-primary transition-all">
              Wuwa Tracker
            </a>
            <br />
            All game assets and trademarks are the property of their respective
            owners.
          </span>
          <div className="flex justify-center mt-4 sm:mt-0">
            <a
              href="https://discord.com/invite/wutheringwaves"
              className="text-muted-foreground hover:text-primary transition-all"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="https://x.com/luzefiru"
              className="text-muted-foreground ms-5 hover:text-primary transition-all"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://github.com/Luzefiru"
              className="text-muted-foreground ms-5 hover:text-primary transition-all"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
