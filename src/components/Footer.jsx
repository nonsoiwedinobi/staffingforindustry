const Footer = () => {
  return (
    <div>
      <footer className="bg-white py-12 px-[8%]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between flex-wrap">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-3xl font-bold mb-7 no-translate text-sky-900">
                Staffing4Industry
              </h3>
              <p className="text-black mb-1 font-bold">Location:</p>
              <p className="text-black mb-4">
                Mercatorstraat 132, 2018, Antwerpen, Belgium
              </p>
              <div className="mb-1">
                <p className="font-bold text-black mb-1">Contact:</p>
                <p className="text-black">+32465220659</p>
                <p className="text-black">info@staffing4industry.com</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-between pt-10 md:pt-0">
              <ul className="list-none p-0">
                <li className="mb-2">
                  <a href="about.html" className="text-black hover:underline">
                    About us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="about.html" className="text-black hover:underline">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="about.html" className="text-black hover:underline">
                    Jobs
                  </a>
                </li>
                <li className="mb-2">
                  <a href="about.html" className="text-black hover:underline">
                    Contact us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="about.html" className="text-black hover:underline">
                    FAQs
                  </a>
                </li>
              </ul>
              <ul className="list-none p-0">
                <li className="mb-2">
                  <a href="about.html" className="text-black hover:underline">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a href="about.html" className="text-black hover:underline">
                    Testimonials
                  </a>
                </li>
                <li className="mb-2">
                  <a href="about.html" className="text-black hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-2">
                  <a href="about.html" className="text-black hover:underline">
                    Partners
                  </a>
                </li>
                <li className="mb-2">
                  <a href="about.html" className="text-black hover:underline">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-4 mt-10">
              <a
                href="https://www.facebook.com/staffing4industry/"
                className="text-black text-xl hover:text-yellow-500"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/staffing4industry/"
                className="text-black text-xl hover:text-yellow-500"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/staffing4industry"
                className="text-black text-xl hover:text-yellow-500"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/staffing4industry/"
                className="text-black text-xl hover:text-yellow-500"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCB23323232"
                className="text-black text-xl hover:text-yellow-500"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="w-full h-0.375 bg-black my-8"></div>
          <p>
            © 2024 Staffing4Industry.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
