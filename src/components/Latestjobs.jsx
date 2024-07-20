import '../index.css';


const LatestJobs = () => {
  return (
    <section className="py-12 bg-white pb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sky-900 mb-8 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Latest Jobs
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-[8%]">
          {/* Job 1 */}
          <a href="#" className="group">
            <div className=" border-2 bg-gray-200 rounded-3xl shadow-2xl shadow-black/40 relative overflow-hidden p-6 flex flex-col h-full hover:border-gray-400 transition duration-300">
              <div className="flex justify-between">
                <span className="pr-2 block">
                  <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center font-medium bg-gray-300">
                    MAINTENANCE & RELIABILITY
                  </span>
                </span>
                <div className="text-sm">15/07/2024</div>
              </div>
              <div className="mt-6 pb-4 mb-4 border-b-2 border-gray-400 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold">
                  Reliability Engineer Grondstoffen
                </h2>
                <p className="mt-1 text-md flex-1 line-clamp-3">
                  Jouw verantwoordelijkheden zijn: Als customer support officer
                  ben je samen met je collega’s hét commerciële aanspreekpunt
                  voor onze klanten, bij al hun vragen en/of opmerkingen. Je
                  staat dagelijks onze klanten te woord via telefoon of e-mail
                  en beantwoordt vakkundig al hun productvragen.
                </p>
                <div className="flex overflow-x-hidden scrollbar-hide mt-4">
                  <span className="pr-2 block">
                    <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                      <span className="-ml-1.5">
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3337 4.83333C13.3337 4.05836 13.3337 3.67087 13.2485 3.35295C13.0173 2.49022 12.3434 1.81635 11.4807 1.58519C11.1628 1.5 10.7753 1.5 10.0003 1.5C9.22535 1.5 8.83786 1.5 8.51994 1.58519C7.65721 1.81635 6.98335 2.49022 6.75218 3.35295C6.66699 3.67087 6.66699 4.05836 6.66699 4.83333M4.33366 16.5H15.667C16.6004 16.5 17.0671 16.5 17.4236 16.3183C17.7372 16.1586 17.9922 15.9036 18.152 15.59C18.3337 15.2335 18.3337 14.7668 18.3337 13.8333V7.5C18.3337 6.56658 18.3337 6.09987 18.152 5.74335C17.9922 5.42975 17.7372 5.17478 17.4236 5.01499C17.0671 4.83333 16.6004 4.83333 15.667 4.83333H4.33366C3.40024 4.83333 2.93353 4.83333 2.57701 5.01499C2.2634 5.17478 2.00844 5.42975 1.84865 5.74335C1.66699 6.09987 1.66699 6.56658 1.66699 7.5V13.8333C1.66699 14.7668 1.66699 15.2335 1.84865 15.59C2.00844 15.9036 2.2634 16.1586 2.57701 16.3183C2.93353 16.5 3.40024 16.5 4.33366 16.5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span>Permanent</span>
                    </span>
                  </span>
                  <span className="pr-2 block">
                    <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                      <span className="-ml-1.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5 2.04819C11.7108 1.80032 10.871 1.66669 10 1.66669C5.39763 1.66669 1.66667 5.39765 1.66667 10C1.66667 14.6024 5.39763 18.3334 10 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10C18.3333 8.57058 17.9734 7.2252 17.3393 6.04956M14.1667 4.79169H14.1708M8.75005 18.2402L8.75014 16.4041C8.75014 16.3047 8.78572 16.2085 8.85045 16.133L10.9219 13.7162C11.0922 13.5176 11.0394 13.213 10.8123 13.0833L8.43212 11.7231C8.36745 11.6862 8.31387 11.6326 8.27695 11.5679L6.72539 8.84888C6.64464 8.70737 6.48882 8.62591 6.32653 8.64036L1.72016 9.05064M17.5 5.00002C17.5 6.84097 15.8333 8.33335 14.1667 10C12.5 8.33335 10.8333 6.84097 10.8333 5.00002C10.8333 3.15907 12.3257 1.66669 14.1667 1.66669C16.0076 1.66669 17.5 3.15907 17.5 5.00002ZM14.375 4.79169C14.375 4.90675 14.2817 5.00002 14.1667 5.00002C14.0516 5.00002 13.9583 4.90675 13.9583 4.79169C13.9583 4.67663 14.0516 4.58335 14.1667 4.58335C14.2817 4.58335 14.375 4.67663 14.375 4.79169Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span>Belgium</span>
                    </span>
                  </span>
                  <span className="pr-2 block">
                    <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                      <span className="-ml-1.5">
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.16699 8.16667H5.16699C4.23357 8.16667 3.76686 8.16667 3.41034 8.34832C3.09674 8.50811 2.84177 8.76308 2.68198 9.07668C2.50033 9.4332 2.50033 9.89991 2.50033 10.8333V16.5M17.5003 16.5V4.16667C17.5003 3.23325 17.5003 2.76654 17.3187 2.41002C17.1589 2.09641 16.9039 1.84144 16.5903 1.68166C16.2338 1.5 15.7671 1.5 14.8337 1.5H11.8337C10.9002 1.5 10.4335 1.5 10.077 1.68166C9.7634 1.84144 9.50844 2.09641 9.34865 2.41002C9.16699 2.76654 9.16699 3.23325 9.16699 4.16667V16.5M18.3337 16.5H1.66699M12.0837 4.83333H14.5837M12.0837 8.16667H14.5837M12.0837 11.5H14.5837"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span>On site</span>
                    </span>
                  </span>
                </div>
              </div>
              <div>
                <button className="font-medium rounded-xl flex items-center justify-center transition-colors text-left bg-transparent border-transparent p-0 hover:underline hover:text-amber-400 text-base py-0 px-0">
                  Job details
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up-right"
                    >
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17L17 7"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div className="bg-noise absolute inset-0 mix-blend-soft-light pointer-events-none"></div>
            </div>
          </a>
          {/* Job 2 */}
          <a href="#" className="group">
            <div className=" border-2 bg-gray-200 rounded-3xl shadow-2xl shadow-black/40 relative overflow-hidden  p-6 flex flex-col h-full hover:border-gray-400 transition duration-300">
              <div className="flex justify-between">
                <span className="pr-2 block">
                  <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center font-medium bg-gray-300">
                    ELECTRICAL ENGINEERING
                  </span>
                </span>
                <div className="text-sm">15/07/2024</div>
              </div>
              <div className="mt-6 pb-4 mb-4 border-b-2 border-gray-400 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold">
                  Automation Engineer grondstoffen
                </h2>
                <p className="mt-1 text-md flex-1 line-clamp-3">
                  Jouw verantwoordelijkheden zijn: Als customer support officer
                  ben je samen met je collega’s hét commerciële aanspreekpunt
                  voor onze klanten, bij al hun vragen en/of opmerkingen. Je
                  staat dagelijks onze klanten te woord via telefoon of e-mail
                  en beantwoordt vakkundig al hun productvragen.
                </p>
                <div className="flex overflow-x-hidden scrollbar-hide mt-4">
                  <span className="pr-2 block">
                    <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                      <span className="-ml-1.5">
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3337 4.83333C13.3337 4.05836 13.3337 3.67087 13.2485 3.35295C13.0173 2.49022 12.3434 1.81635 11.4807 1.58519C11.1628 1.5 10.7753 1.5 10.0003 1.5C9.22535 1.5 8.83786 1.5 8.51994 1.58519C7.65721 1.81635 6.98335 2.49022 6.75218 3.35295C6.66699 3.67087 6.66699 4.05836 6.66699 4.83333M4.33366 16.5H15.667C16.6004 16.5 17.0671 16.5 17.4236 16.3183C17.7372 16.1586 17.9922 15.9036 18.152 15.59C18.3337 15.2335 18.3337 14.7668 18.3337 13.8333V7.5C18.3337 6.56658 18.3337 6.09987 18.152 5.74335C17.9922 5.42975 17.7372 5.17478 17.4236 5.01499C17.0671 4.83333 16.6004 4.83333 15.667 4.83333H4.33366C3.40024 4.83333 2.93353 4.83333 2.57701 5.01499C2.2634 5.17478 2.00844 5.42975 1.84865 5.74335C1.66699 6.09987 1.66699 6.56658 1.66699 7.5V13.8333C1.66699 14.7668 1.66699 15.2335 1.84865 15.59C2.00844 15.9036 2.2634 16.1586 2.57701 16.3183C2.93353 16.5 3.40024 16.5 4.33366 16.5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span>Permanent</span>
                    </span>
                  </span>
                  <span className="pr-2 block">
                    <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                      <span className="-ml-1.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5 2.04819C11.7108 1.80032 10.871 1.66669 10 1.66669C5.39763 1.66669 1.66667 5.39765 1.66667 10C1.66667 14.6024 5.39763 18.3334 10 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10C18.3333 8.57058 17.9734 7.2252 17.3393 6.04956M14.1667 4.79169H14.1708M8.75005 18.2402L8.75014 16.4041C8.75014 16.3047 8.78572 16.2085 8.85045 16.133L10.9219 13.7162C11.0922 13.5176 11.0394 13.213 10.8123 13.0833L8.43212 11.7231C8.36745 11.6862 8.31387 11.6326 8.27695 11.5679L6.72539 8.84888C6.64464 8.70737 6.48882 8.62591 6.32653 8.64036L1.72016 9.05064M17.5 5.00002C17.5 6.84097 15.8333 8.33335 14.1667 10C12.5 8.33335 10.8333 6.84097 10.8333 5.00002C10.8333 3.15907 12.3257 1.66669 14.1667 1.66669C16.0076 1.66669 17.5 3.15907 17.5 5.00002ZM14.375 4.79169C14.375 4.90675 14.2817 5.00002 14.1667 5.00002C14.0516 5.00002 13.9583 4.90675 13.9583 4.79169C13.9583 4.67663 14.0516 4.58335 14.1667 4.58335C14.2817 4.58335 14.375 4.67663 14.375 4.79169Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span>Belgium</span>
                    </span>
                  </span>
                  <span className="pr-2 block">
                    <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                      <span className="-ml-1.5">
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.16699 8.16667H5.16699C4.23357 8.16667 3.76686 8.16667 3.41034 8.34832C3.09674 8.50811 2.84177 8.76308 2.68198 9.07668C2.50033 9.4332 2.50033 9.89991 2.50033 10.8333V16.5M17.5003 16.5V4.16667C17.5003 3.23325 17.5003 2.76654 17.3187 2.41002C17.1589 2.09641 16.9039 1.84144 16.5903 1.68166C16.2338 1.5 15.7671 1.5 14.8337 1.5H11.8337C10.9002 1.5 10.4335 1.5 10.077 1.68166C9.7634 1.84144 9.50844 2.09641 9.34865 2.41002C9.16699 2.76654 9.16699 3.23325 9.16699 4.16667V16.5M18.3337 16.5H1.66699M12.0837 4.83333H14.5837M12.0837 8.16667H14.5837M12.0837 11.5H14.5837"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span>On site</span>
                    </span>
                  </span>
                </div>
              </div>
              <div>
                <button className="font-medium rounded-xl flex items-center justify-center transition-colors text-left bg-transparent border-transparent p-0 hover:underline hover:text-amber-400 text-base py-0 px-0">
                  Job details
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up-right"
                    >
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17L17 7"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div className="bg-noise absolute inset-0 mix-blend-soft-light pointer-events-none"></div>
            </div>
          </a>
          {/* Job 3 */}
          <a href="#" className="group">
            <div className=" border-2 bg-gray-200 rounded-3xl shadow-2xl shadow-black/40 relative overflow-hidden  p-6 flex flex-col h-full hover:border-gray-400 transition duration-300">
              <div className="flex justify-between">
                <span className="pr-2 block">
                  <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center font-medium bg-gray-300">
                    ELECTRICAL ENGINEERING
                  </span>
                </span>
                <div className="text-sm">15/07/2024</div>
              </div>
              <div className="mt-6 pb-4 mb-4 border-b-2 border-gray-400 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold">
                  E&I Engineer Hoogspanning
                </h2>
                <p className="mt-1 text-md flex-1 line-clamp-3">
                  Jouw verantwoordelijkheden zijn: Als customer support officer
                  ben je samen met je collega’s hét commerciële aanspreekpunt
                  voor onze klanten, bij al hun vragen en/of opmerkingen. Je
                  staat dagelijks onze klanten te woord via telefoon of e-mail
                  en beantwoordt vakkundig al hun productvragen.
                </p>
                <div className="flex overflow-x-hidden scrollbar-hide mt-4">
                  <span className="pr-2 block">
                    <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                      <span className="-ml-1.5">
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3337 4.83333C13.3337 4.05836 13.3337 3.67087 13.2485 3.35295C13.0173 2.49022 12.3434 1.81635 11.4807 1.58519C11.1628 1.5 10.7753 1.5 10.0003 1.5C9.22535 1.5 8.83786 1.5 8.51994 1.58519C7.65721 1.81635 6.98335 2.49022 6.75218 3.35295C6.66699 3.67087 6.66699 4.05836 6.66699 4.83333M4.33366 16.5H15.667C16.6004 16.5 17.0671 16.5 17.4236 16.3183C17.7372 16.1586 17.9922 15.9036 18.152 15.59C18.3337 15.2335 18.3337 14.7668 18.3337 13.8333V7.5C18.3337 6.56658 18.3337 6.09987 18.152 5.74335C17.9922 5.42975 17.7372 5.17478 17.4236 5.01499C17.0671 4.83333 16.6004 4.83333 15.667 4.83333H4.33366C3.40024 4.83333 2.93353 4.83333 2.57701 5.01499C2.2634 5.17478 2.00844 5.42975 1.84865 5.74335C1.66699 6.09987 1.66699 6.56658 1.66699 7.5V13.8333C1.66699 14.7668 1.66699 15.2335 1.84865 15.59C2.00844 15.9036 2.2634 16.1586 2.57701 16.3183C2.93353 16.5 3.40024 16.5 4.33366 16.5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span>Permanent</span>
                    </span>
                  </span>
                  <span className="pr-2 block">
                    <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                      <span className="-ml-1.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5 2.04819C11.7108 1.80032 10.871 1.66669 10 1.66669C5.39763 1.66669 1.66667 5.39765 1.66667 10C1.66667 14.6024 5.39763 18.3334 10 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10C18.3333 8.57058 17.9734 7.2252 17.3393 6.04956M14.1667 4.79169H14.1708M8.75005 18.2402L8.75014 16.4041C8.75014 16.3047 8.78572 16.2085 8.85045 16.133L10.9219 13.7162C11.0922 13.5176 11.0394 13.213 10.8123 13.0833L8.43212 11.7231C8.36745 11.6862 8.31387 11.6326 8.27695 11.5679L6.72539 8.84888C6.64464 8.70737 6.48882 8.62591 6.32653 8.64036L1.72016 9.05064M17.5 5.00002C17.5 6.84097 15.8333 8.33335 14.1667 10C12.5 8.33335 10.8333 6.84097 10.8333 5.00002C10.8333 3.15907 12.3257 1.66669 14.1667 1.66669C16.0076 1.66669 17.5 3.15907 17.5 5.00002ZM14.375 4.79169C14.375 4.90675 14.2817 5.00002 14.1667 5.00002C14.0516 5.00002 13.9583 4.90675 13.9583 4.79169C13.9583 4.67663 14.0516 4.58335 14.1667 4.58335C14.2817 4.58335 14.375 4.67663 14.375 4.79169Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span>Belgium</span>
                    </span>
                  </span>
                  <span className="pr-2 block">
                    <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                      <span className="-ml-1.5">
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.16699 8.16667H5.16699C4.23357 8.16667 3.76686 8.16667 3.41034 8.34832C3.09674 8.50811 2.84177 8.76308 2.68198 9.07668C2.50033 9.4332 2.50033 9.89991 2.50033 10.8333V16.5M17.5003 16.5V4.16667C17.5003 3.23325 17.5003 2.76654 17.3187 2.41002C17.1589 2.09641 16.9039 1.84144 16.5903 1.68166C16.2338 1.5 15.7671 1.5 14.8337 1.5H11.8337C10.9002 1.5 10.4335 1.5 10.077 1.68166C9.7634 1.84144 9.50844 2.09641 9.34865 2.41002C9.16699 2.76654 9.16699 3.23325 9.16699 4.16667V16.5M18.3337 16.5H1.66699M12.0837 4.83333H14.5837M12.0837 8.16667H14.5837M12.0837 11.5H14.5837"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span>On site</span>
                    </span>
                  </span>
                </div>
              </div>
              <div>
                <button className="font-medium rounded-xl flex items-center justify-center transition-colors text-left bg-transparent border-transparent p-0 hover:underline hover:text-amber-400 text-base py-0 px-0 ">
                  Job details
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up-right"
                    >
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17L17 7"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div className="bg-noise absolute inset-0 mix-blend-soft-light pointer-events-none"></div>
            </div>
          </a>
          {/* Job 4 */}
          <a href="#" className="group">
            <div className=" border-2 bg-gray-200 rounded-3xl shadow-2xl shadow-black/40 relative overflow-hidden  p-6 flex flex-col h-full hover:border-gray-400 transition duration-300">
              <div className="flex justify-between">
                <span className="pr-2 block">
                  <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center font-medium bg-gray-300">
                    ELECTRICAL ENGINEERING
                  </span>
                </span>
                <div className="text-sm">15/07/2024</div>
              </div>
              <div className="mt-6 pb-4 mb-4 border-b-2 border-gray-400 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold">
                  E&I Engineer Hoogspanning
                </h2>
                <p className="mt-1 text-md flex-1 line-clamp-3">
                  Jouw verantwoordelijkheden zijn: Als customer support officer
                  ben je samen met je collega’s hét commerciële aanspreekpunt
                  voor onze klanten, bij al hun vragen en/of opmerkingen. Je
                  staat dagelijks onze klanten te woord via telefoon of e-mail
                  en beantwoordt vakkundig al hun productvragen.
                </p>
                <div className="flex overflow-x-hidden scrollbar-hide mt-4">
                  <span className="pr-2 block">
                    <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                      <span className="-ml-1.5">
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3337 4.83333C13.3337 4.05836 13.3337 3.67087 13.2485 3.35295C13.0173 2.49022 12.3434 1.81635 11.4807 1.58519C11.1628 1.5 10.7753 1.5 10.0003 1.5C9.22535 1.5 8.83786 1.5 8.51994 1.58519C7.65721 1.81635 6.98335 2.49022 6.75218 3.35295C6.66699 3.67087 6.66699 4.05836 6.66699 4.83333M4.33366 16.5H15.667C16.6004 16.5 17.0671 16.5 17.4236 16.3183C17.7372 16.1586 17.9922 15.9036 18.152 15.59C18.3337 15.2335 18.3337 14.7668 18.3337 13.8333V7.5C18.3337 6.56658 18.3337 6.09987 18.152 5.74335C17.9922 5.42975 17.7372 5.17478 17.4236 5.01499C17.0671 4.83333 16.6004 4.83333 15.667 4.83333H4.33366C3.40024 4.83333 2.93353 4.83333 2.57701 5.01499C2.2634 5.17478 2.00844 5.42975 1.84865 5.74335C1.66699 6.09987 1.66699 6.56658 1.66699 7.5V13.8333C1.66699 14.7668 1.66699 15.2335 1.84865 15.59C2.00844 15.9036 2.2634 16.1586 2.57701 16.3183C2.93353 16.5 3.40024 16.5 4.33366 16.5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span>Permanent</span>
                    </span>
                  </span>
                  <span className="pr-2 block">
                    <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                      <span className="-ml-1.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5 2.04819C11.7108 1.80032 10.871 1.66669 10 1.66669C5.39763 1.66669 1.66667 5.39765 1.66667 10C1.66667 14.6024 5.39763 18.3334 10 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10C18.3333 8.57058 17.9734 7.2252 17.3393 6.04956M14.1667 4.79169H14.1708M8.75005 18.2402L8.75014 16.4041C8.75014 16.3047 8.78572 16.2085 8.85045 16.133L10.9219 13.7162C11.0922 13.5176 11.0394 13.213 10.8123 13.0833L8.43212 11.7231C8.36745 11.6862 8.31387 11.6326 8.27695 11.5679L6.72539 8.84888C6.64464 8.70737 6.48882 8.62591 6.32653 8.64036L1.72016 9.05064M17.5 5.00002C17.5 6.84097 15.8333 8.33335 14.1667 10C12.5 8.33335 10.8333 6.84097 10.8333 5.00002C10.8333 3.15907 12.3257 1.66669 14.1667 1.66669C16.0076 1.66669 17.5 3.15907 17.5 5.00002ZM14.375 4.79169C14.375 4.90675 14.2817 5.00002 14.1667 5.00002C14.0516 5.00002 13.9583 4.90675 13.9583 4.79169C13.9583 4.67663 14.0516 4.58335 14.1667 4.58335C14.2817 4.58335 14.375 4.67663 14.375 4.79169Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span>Belgium</span>
                    </span>
                  </span>
                  <span className="pr-2 block">
                    <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                      <span className="-ml-1.5">
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.16699 8.16667H5.16699C4.23357 8.16667 3.76686 8.16667 3.41034 8.34832C3.09674 8.50811 2.84177 8.76308 2.68198 9.07668C2.50033 9.4332 2.50033 9.89991 2.50033 10.8333V16.5M17.5003 16.5V4.16667C17.5003 3.23325 17.5003 2.76654 17.3187 2.41002C17.1589 2.09641 16.9039 1.84144 16.5903 1.68166C16.2338 1.5 15.7671 1.5 14.8337 1.5H11.8337C10.9002 1.5 10.4335 1.5 10.077 1.68166C9.7634 1.84144 9.50844 2.09641 9.34865 2.41002C9.16699 2.76654 9.16699 3.23325 9.16699 4.16667V16.5M18.3337 16.5H1.66699M12.0837 4.83333H14.5837M12.0837 8.16667H14.5837M12.0837 11.5H14.5837"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span>On site</span>
                    </span>
                  </span>
                </div>
              </div>
              <div>
                <button className="font-medium rounded-xl flex items-center justify-center transition-colors text-left bg-transparent border-transparent p-0 hover:underline hover:text-amber-400 text-base py-0 px-0 ">
                  Job details
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up-right"
                    >
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17L17 7"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div className="bg-noise absolute inset-0 mix-blend-soft-light pointer-events-none"></div>
            </div>
          </a>
          {/* Job 5 */}
          <a href="#" className="group">
            <div className=" border-2 bg-gray-200 rounded-3xl shadow-2xl shadow-black/40 relative overflow-hidden  p-6 flex flex-col h-full hover:border-gray-400 transition duration-300">
              <div className="flex justify-between">
                <span className="pr-2 block">
                  <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center font-medium bg-gray-300">
                    ELECTRICAL ENGINEERING
                  </span>
                </span>
                <div className="text-sm">15/07/2024</div>
              </div>
              <div className="mt-6 pb-4 mb-4 border-b-2 border-gray-400 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold">
                  E&I Engineer Hoogspanning
                </h2>
                <p className="mt-1 text-md flex-1 line-clamp-3">
                  Jouw verantwoordelijkheden zijn: Als customer support officer
                  ben je samen met je collega’s hét commerciële aanspreekpunt
                  voor onze klanten, bij al hun vragen en/of opmerkingen. Je
                  staat dagelijks onze klanten te woord via telefoon of e-mail
                  en beantwoordt vakkundig al hun productvragen.
                </p>
                <div className="flex overflow-x-hidden scrollbar-hide mt-4">
                  <span className="pr-2 block">
                    <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                      <span className="-ml-1.5">
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3337 4.83333C13.3337 4.05836 13.3337 3.67087 13.2485 3.35295C13.0173 2.49022 12.3434 1.81635 11.4807 1.58519C11.1628 1.5 10.7753 1.5 10.0003 1.5C9.22535 1.5 8.83786 1.5 8.51994 1.58519C7.65721 1.81635 6.98335 2.49022 6.75218 3.35295C6.66699 3.67087 6.66699 4.05836 6.66699 4.83333M4.33366 16.5H15.667C16.6004 16.5 17.0671 16.5 17.4236 16.3183C17.7372 16.1586 17.9922 15.9036 18.152 15.59C18.3337 15.2335 18.3337 14.7668 18.3337 13.8333V7.5C18.3337 6.56658 18.3337 6.09987 18.152 5.74335C17.9922 5.42975 17.7372 5.17478 17.4236 5.01499C17.0671 4.83333 16.6004 4.83333 15.667 4.83333H4.33366C3.40024 4.83333 2.93353 4.83333 2.57701 5.01499C2.2634 5.17478 2.00844 5.42975 1.84865 5.74335C1.66699 6.09987 1.66699 6.56658 1.66699 7.5V13.8333C1.66699 14.7668 1.66699 15.2335 1.84865 15.59C2.00844 15.9036 2.2634 16.1586 2.57701 16.3183C2.93353 16.5 3.40024 16.5 4.33366 16.5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span>Permanent</span>
                    </span>
                  </span>
                  <span className="pr-2 block">
                    <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                      <span className="-ml-1.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5 2.04819C11.7108 1.80032 10.871 1.66669 10 1.66669C5.39763 1.66669 1.66667 5.39765 1.66667 10C1.66667 14.6024 5.39763 18.3334 10 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10C18.3333 8.57058 17.9734 7.2252 17.3393 6.04956M14.1667 4.79169H14.1708M8.75005 18.2402L8.75014 16.4041C8.75014 16.3047 8.78572 16.2085 8.85045 16.133L10.9219 13.7162C11.0922 13.5176 11.0394 13.213 10.8123 13.0833L8.43212 11.7231C8.36745 11.6862 8.31387 11.6326 8.27695 11.5679L6.72539 8.84888C6.64464 8.70737 6.48882 8.62591 6.32653 8.64036L1.72016 9.05064M17.5 5.00002C17.5 6.84097 15.8333 8.33335 14.1667 10C12.5 8.33335 10.8333 6.84097 10.8333 5.00002C10.8333 3.15907 12.3257 1.66669 14.1667 1.66669C16.0076 1.66669 17.5 3.15907 17.5 5.00002ZM14.375 4.79169C14.375 4.90675 14.2817 5.00002 14.1667 5.00002C14.0516 5.00002 13.9583 4.90675 13.9583 4.79169C13.9583 4.67663 14.0516 4.58335 14.1667 4.58335C14.2817 4.58335 14.375 4.67663 14.375 4.79169Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span>Belgium</span>
                    </span>
                  </span>
                  <span className="pr-2 block">
                    <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                      <span className="-ml-1.5">
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.16699 8.16667H5.16699C4.23357 8.16667 3.76686 8.16667 3.41034 8.34832C3.09674 8.50811 2.84177 8.76308 2.68198 9.07668C2.50033 9.4332 2.50033 9.89991 2.50033 10.8333V16.5M17.5003 16.5V4.16667C17.5003 3.23325 17.5003 2.76654 17.3187 2.41002C17.1589 2.09641 16.9039 1.84144 16.5903 1.68166C16.2338 1.5 15.7671 1.5 14.8337 1.5H11.8337C10.9002 1.5 10.4335 1.5 10.077 1.68166C9.7634 1.84144 9.50844 2.09641 9.34865 2.41002C9.16699 2.76654 9.16699 3.23325 9.16699 4.16667V16.5M18.3337 16.5H1.66699M12.0837 4.83333H14.5837M12.0837 8.16667H14.5837M12.0837 11.5H14.5837"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span>On site</span>
                    </span>
                  </span>
                </div>
              </div>
              <div>
                <button className="font-medium rounded-xl flex items-center justify-center transition-colors text-left bg-transparent border-transparent p-0 hover:underline hover:text-amber-400 text-base py-0 px-0 ">
                  Job details
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up-right"
                    >
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17L17 7"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div className="bg-noise absolute inset-0 mix-blend-soft-light pointer-events-none"></div>
            </div>
          </a>
          {/* Job 6 */}
          <a href="#" className="group">
            <div className=" border-2 bg-gray-200 rounded-3xl shadow-2xl shadow-black/40 relative overflow-hidden  p-6 flex flex-col h-full hover:border-gray-400 transition duration-300">
              <div className="flex justify-between">
                <span className="pr-2 block">
                  <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center font-medium bg-gray-300">
                    ELECTRICAL ENGINEERING
                  </span>
                </span>
                <div className="text-sm">15/07/2024</div>
              </div>
              <div className="mt-6 pb-4 mb-4 border-b-2 border-gray-400 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold">
                  E&I Engineer Hoogspanning
                </h2>
                <p className="mt-1 text-md flex-1 line-clamp-3">
                  Jouw verantwoordelijkheden zijn: Als customer support officer
                  ben je samen met je collega’s hét commerciële aanspreekpunt
                  voor onze klanten, bij al hun vragen en/of opmerkingen. Je
                  staat dagelijks onze klanten te woord via telefoon of e-mail
                  en beantwoordt vakkundig al hun productvragen.
                </p>
                <div className="flex overflow-x-hidden scrollbar-hide mt-4">
                  <span className="pr-2 block">
                    <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                      <span className="-ml-1.5">
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3337 4.83333C13.3337 4.05836 13.3337 3.67087 13.2485 3.35295C13.0173 2.49022 12.3434 1.81635 11.4807 1.58519C11.1628 1.5 10.7753 1.5 10.0003 1.5C9.22535 1.5 8.83786 1.5 8.51994 1.58519C7.65721 1.81635 6.98335 2.49022 6.75218 3.35295C6.66699 3.67087 6.66699 4.05836 6.66699 4.83333M4.33366 16.5H15.667C16.6004 16.5 17.0671 16.5 17.4236 16.3183C17.7372 16.1586 17.9922 15.9036 18.152 15.59C18.3337 15.2335 18.3337 14.7668 18.3337 13.8333V7.5C18.3337 6.56658 18.3337 6.09987 18.152 5.74335C17.9922 5.42975 17.7372 5.17478 17.4236 5.01499C17.0671 4.83333 16.6004 4.83333 15.667 4.83333H4.33366C3.40024 4.83333 2.93353 4.83333 2.57701 5.01499C2.2634 5.17478 2.00844 5.42975 1.84865 5.74335C1.66699 6.09987 1.66699 6.56658 1.66699 7.5V13.8333C1.66699 14.7668 1.66699 15.2335 1.84865 15.59C2.00844 15.9036 2.2634 16.1586 2.57701 16.3183C2.93353 16.5 3.40024 16.5 4.33366 16.5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span>Permanent</span>
                    </span>
                  </span>
                  <span className="pr-2 block">
                    <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                      <span className="-ml-1.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5 2.04819C11.7108 1.80032 10.871 1.66669 10 1.66669C5.39763 1.66669 1.66667 5.39765 1.66667 10C1.66667 14.6024 5.39763 18.3334 10 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10C18.3333 8.57058 17.9734 7.2252 17.3393 6.04956M14.1667 4.79169H14.1708M8.75005 18.2402L8.75014 16.4041C8.75014 16.3047 8.78572 16.2085 8.85045 16.133L10.9219 13.7162C11.0922 13.5176 11.0394 13.213 10.8123 13.0833L8.43212 11.7231C8.36745 11.6862 8.31387 11.6326 8.27695 11.5679L6.72539 8.84888C6.64464 8.70737 6.48882 8.62591 6.32653 8.64036L1.72016 9.05064M17.5 5.00002C17.5 6.84097 15.8333 8.33335 14.1667 10C12.5 8.33335 10.8333 6.84097 10.8333 5.00002C10.8333 3.15907 12.3257 1.66669 14.1667 1.66669C16.0076 1.66669 17.5 3.15907 17.5 5.00002ZM14.375 4.79169C14.375 4.90675 14.2817 5.00002 14.1667 5.00002C14.0516 5.00002 13.9583 4.90675 13.9583 4.79169C13.9583 4.67663 14.0516 4.58335 14.1667 4.58335C14.2817 4.58335 14.375 4.67663 14.375 4.79169Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span>Belgium</span>
                    </span>
                  </span>
                  <span className="pr-2 block">
                    <span className="h-7 px-3 text-sm rounded-full whitespace-nowrap flex items-center gap-2 font-medium bg-gray-300">
                      <span className="-ml-1.5">
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.16699 8.16667H5.16699C4.23357 8.16667 3.76686 8.16667 3.41034 8.34832C3.09674 8.50811 2.84177 8.76308 2.68198 9.07668C2.50033 9.4332 2.50033 9.89991 2.50033 10.8333V16.5M17.5003 16.5V4.16667C17.5003 3.23325 17.5003 2.76654 17.3187 2.41002C17.1589 2.09641 16.9039 1.84144 16.5903 1.68166C16.2338 1.5 15.7671 1.5 14.8337 1.5H11.8337C10.9002 1.5 10.4335 1.5 10.077 1.68166C9.7634 1.84144 9.50844 2.09641 9.34865 2.41002C9.16699 2.76654 9.16699 3.23325 9.16699 4.16667V16.5M18.3337 16.5H1.66699M12.0837 4.83333H14.5837M12.0837 8.16667H14.5837M12.0837 11.5H14.5837"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span>On site</span>
                    </span>
                  </span>
                </div>
              </div>
              <div>
                <button className="font-medium rounded-xl flex items-center justify-center transition-colors text-left bg-transparent border-transparent p-0 hover:underline hover:text-amber-400 text-base py-0 px-0 ">
                  Job details
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up-right"
                    >
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17L17 7"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div className="bg-noise absolute inset-0 mix-blend-soft-light pointer-events-none"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
