import React from "react";
import "./Navbar.css"
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div id="navbar-bg">
      <div className="topbar navbar-slig">
        <div className="container">
          <address className="topbar-item">
            <div className="icon">
              <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">
            Kafe Xazar , Mingəçevir
              
            </span>
          </address>

          <div className="separator"></div>

          <div className="topbar-item item-2">
            <div className="icon">
              <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">Gündəlik : 9.00 am to 12.00 pm</span>
          </div>

          <a href="tel:+11234567890" className="topbar-item link">
            <div className="icon">
              <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">+00 000 00 00</span>
          </a>

          <div className="separator"></div>

          <a href="mailto:booking@restaurant.com" className="topbar-item link">
            <div className="icon">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">Xazar@gmail.com</span>
          </a>
        </div>
      </div>
      <header className="header navbar-slig" data-header>
        <div className="container">
          <a href="#" className="logo">
            
            <Link to="/" >
            <div className="div-img" style={{ width: "160px", height: "60px" }}>
              <svg
                width="160"
                height="60"
                viewBox="0 -9 370 214.52357181165266"
                className="looka-1j8o68f"
              >
                <defs id="SvgjsDefs1820"></defs>
                <g
                  id="SvgjsG1821"
                  featurekey="symbolFeature-0"
                  transform="matrix(0.6840765769950442,0,0,0.6840765769950442,-122.17382617966572,-84.40236053182112)"
                  fill="#ffffff"
                >
                  <g xmlns="http://www.w3.org/2000/svg" fill="">
                    <path d="M229.67 134.42q1.11-1.8-.44-.35-4.07 3.84-8.12 8.93c-16.39 20.55-12.2 49.49 3.16 69.17q8.23 10.54 10.96 14.47 9.39 13.54 13.2 28.6 1.49 5.88 2.74 19.71 4.42 48.98 8.73 97.97c.87 9.83 1.82 16.24-3.56 22.92-7.1 8.83-17.61 12.48-28.32 14.62a.36.35 5.7 0 1-.4-.48c1.04-2.44 1.6-5.1 1.85-7.73q4.7-50.52 9.68-101.02 1.56-15.89 1.83-19.04.82-9.48.07-15.79c-1.66-13.91-6.09-29.86-15.26-40.91-12.35-14.88-21.64-30.23-21.93-50.13q-.41-27.47 21.07-45.36c7.85-6.53 15.85-12.28 22.76-19.56q.49-.51.47.19-.29 14.57-3.71 27.38c-3.28 12.25-11.1 21.71-19.93 30.75-3.95 4.05-8 10.79-8.49 16.84q-.13 1.65-.42.02c-2.83-15.6 1.65-31.05 10.07-44.71q3.3-5.37 3.99-6.49M285.23 197.57q.12.02.2 0 4.3-.8 4.41-4.92l2.16-78.81q.09-3.33 3.27-3.25l.13.01q3.29.03 3.36 3.15l1.88 79.13q.1 4.22 4.93 4.62.37.03 1.96-.65a4.2 4.17 78.6 0 0 2.54-3.86l.07-79.24q0-3.18 3.22-3.17.11.01.13.01 3.19.02 3.41 3.21 2.98 43.81 4.69 55.68 1.89 13.13 2.96 20.06c1.03 6.68-1.47 10.5-6.34 15.47q-5.49 5.61-7.22 7.44-11.89 12.63-14.46 29.13-.86 5.47-.05 14.84 3.66 42.3 9.93 116.08c.43 5.09 1.51 10.78.34 15.14-3.92 14.59-25.12 21.19-38.16 23.02a.57.57 0 0 1-.54-.89c1.71-2.37 3.9-3.06 4.29-6.59q3.2-29.42 16.21-150.66c1.37-12.77-3.63-27.73-11.35-38.47q-2.57-3.59-7.98-9.05-5.43-5.49-4.09-12.95c4.5-25.12 6.15-53.56 8.19-78.48q.26-3.22 3.57-2.94.04.01.13 0a3.61 3.23 89.5 0 1 3.3 3.62l.01 78.23q0 4.37 4.9 5.09"></path>
                    <path d="M245.87 162.64q2.69-1.59 4.05-4.89.62-1.51.89.11c1.27 7.67-1.01 12.92-6.08 19.14q-2.86 3.5-11.15 12.57-6.61 7.22-8.18 16.59-.15.88-.48.05c-1.74-4.34-5.6-12.57-5.17-19.11.48-7.42 9.14-18.45 15.62-21.7 3.29-1.64 7.53-1.02 10.5-2.76m-21.89 38.41a.08.08 0 0 0 .14.02q.21-.25.18-.83c-.49-9.87 3.19-18.08 9.86-25.19q.14-.14-.01-.27-.12-.1-.24 0c-8.25 6.34-13.18 15.86-9.93 26.27M232.76 270.49c-4.22-12.29-13.14-15.89-23.99-20.47-19.55-8.25-25.65-24.36-27.48-44.1q-.08-.85.46-.19c8.03 9.84 18.16 14.72 30.16 21.63 15.39 8.85 20.37 25.68 21.26 43.05q.07 1.49-.41.08"></path>
                    <path d="M179.1 258.15c6.03 4.01 10.3.92 15.88-1.17 5.77-2.15 14.61.17 20.35 2.44 6.22 2.46 9.11 6.39 12.24 12.78q1.49 3.02 4.78 10.92.36.87-.36.27-6.26-5.14-14.45-6.97c-12.22-2.73-18.76-3.89-26.49-6.78q-4-1.49-6.72-3.89-3.1-2.73-5.57-7.29-.45-.84.34-.31m38.66 10.62q6.47 3.74 11.02 9.62.08.11.19.11.02 0 .09-.03.14-.07.01-.31-3.95-7.29-10.38-11-6.42-3.71-14.71-3.5-.27.01-.26.17.01.07.02.09.05.1.19.11 7.37 1 13.83 4.74"></path>
                  </g>
                </g>
                <g
                  id="SvgjsG1822"
                  featurekey="nameFeature-0"
                  transform="matrix(1.6418613721447555,0,0,1.6418613721447555,118.05463530558875,39.06860132531403)"
                  fill="#ffffff"
                >
                  <path d="M30.72 38.64 c0.52 0.04 0.36 1.36 -0.08 1.36 l-11.52 0 c-0.48 0 -0.64 -1.32 -0.08 -1.36 c2.52 -0.2 2.16 -1.6 0.28 -4.24 l-4.24 -5.92 l-4.68 5.92 c-2.24 2.8 -1.72 4.04 0.56 4.24 c0.44 0.04 0.4 1.36 -0.12 1.36 l-9.2 0 c-0.52 0 -0.64 -1.32 -0.12 -1.36 c1.6 -0.12 3.88 -1.6 5.96 -4.24 l6.24 -7.84 l-6.36 -8.92 c-2.16 -3 -4.16 -4.16 -5.76 -4.28 c-0.56 -0.04 -0.44 -1.36 0.12 -1.36 l11.48 0 c0.48 0 0.6 1.32 0.12 1.36 c-2.6 0.24 -2.24 1.56 -0.32 4.24 l3.68 5.2 l4.12 -5.2 c2.16 -2.72 1.76 -4.08 -0.48 -4.24 c-0.56 -0.04 -0.4 -1.36 0.08 -1.36 l9.2 0 c0.48 0 0.6 1.32 0.08 1.36 c-1.56 0.12 -3.88 1.6 -5.96 4.24 l-5.64 7.12 l6.84 9.64 c2.12 2.96 4.2 4.16 5.8 4.28 z M62.92 38.64 c0.56 0.08 0.4 1.36 -0.08 1.36 l-10.56 0 c-0.52 0 -0.56 -1.28 -0.12 -1.36 c1.48 -0.28 3.08 -0.8 1.6 -4.24 l-0.44 -1 c-0.4 -0.96 -1.08 -1.04 -2.28 -1.04 l-8.16 0 c-1.2 0 -1.88 0.08 -2.28 1.04 l-0.4 1 c-1.4 3.44 0.12 3.96 2.04 4.24 c0.52 0.08 0.4 1.36 -0.12 1.36 l-8.64 0 c-0.48 0 -0.6 -1.28 -0.12 -1.36 c1.64 -0.28 2.6 -0.84 4.08 -4.24 l6.76 -15.52 c1.56 -3.52 2.04 -5.16 2.04 -6.68 c0 -0.24 2.8 -0.88 2.92 -0.6 l9.76 22.76 c1.44 3.4 2.4 4.04 4 4.28 z M50.76 30.119999999999997 c0.56 0 1.16 -0.08 0.92 -0.64 l-4.68 -11.2 l-4.72 11.2 c-0.24 0.56 0.36 0.64 0.92 0.64 l7.56 0 z M85 40.24 c-2.2 -0.56 -6.28 -0.44 -10.24 -0.44 c-3.48 0 -6.6 0.08 -8.88 0.32 c-0.36 0.04 -0.76 -0.88 -0.56 -1.2 l16.28 -24.4 l-7.08 -0.04 c-4.52 -0.04 -5.96 1.12 -7 2.36 c-0.44 0.52 -1.52 0.2 -1.28 -0.52 l1.44 -4.04 c0.24 -0.68 1.04 -0.64 1.52 -0.52 c2.2 0.56 6.2 0.44 9.72 0.44 c3.28 0 6.4 -0.08 8.68 -0.32 c0.36 -0.04 0.76 0.88 0.56 1.2 l-16.28 24.4 l7.8 0.04 c4.52 0.04 5.96 -1.12 7 -2.36 c0.44 -0.52 1.52 -0.2 1.28 0.52 l-1.44 4.04 c-0.24 0.68 -1.04 0.64 -1.52 0.52 z M120.88 38.64 c0.56 0.08 0.4 1.36 -0.08 1.36 l-10.56 0 c-0.52 0 -0.56 -1.28 -0.12 -1.36 c1.48 -0.28 3.08 -0.8 1.6 -4.24 l-0.44 -1 c-0.4 -0.96 -1.08 -1.04 -2.28 -1.04 l-8.16 0 c-1.2 0 -1.88 0.08 -2.28 1.04 l-0.4 1 c-1.4 3.44 0.12 3.96 2.04 4.24 c0.52 0.08 0.4 1.36 -0.12 1.36 l-8.64 0 c-0.48 0 -0.6 -1.28 -0.12 -1.36 c1.64 -0.28 2.6 -0.84 4.08 -4.24 l6.76 -15.52 c1.56 -3.52 2.04 -5.16 2.04 -6.68 c0 -0.24 2.8 -0.88 2.92 -0.6 l9.76 22.76 c1.44 3.4 2.4 4.04 4 4.28 z M108.72 30.119999999999997 c0.56 0 1.16 -0.08 0.92 -0.64 l-4.68 -11.2 l-4.72 11.2 c-0.24 0.56 0.36 0.64 0.92 0.64 l7.56 0 z M153.24 39 c0.32 0 0.24 1.08 0 1.16 c-2.52 0.84 -6 0.72 -8.4 -2.36 l-6.16 -7.92 c-1.72 -2.24 -3.76 -2.56 -6.56 -2.6 l0 7.76 c0 2.8 1.92 3.28 4.48 3.6 c0.28 0.04 0.08 1.36 -0.24 1.36 l-12.12 0 c-0.32 0 -0.56 -1.32 -0.24 -1.36 c2.04 -0.28 3.32 -1.08 3.32 -3.6 l0 -17.84 c0 -2.64 -1.4 -3.4 -3.32 -3.92 c-0.32 -0.08 -0.12 -1.4 0.24 -1.36 c1.56 0.2 3.32 0.24 4.6 0.24 c2.96 0 5.72 -0.24 7.64 -0.24 c6.04 0 10.08 2.48 10.08 7.4 c0 4.64 -3.76 6.92 -7.12 7.12 l0 0.2 c1.6 0 2.76 0.68 4.52 2.88 l5.96 7.48 c1.24 1.56 2.44 2 3.32 2 z M133.28 25.439999999999998 c5.96 0 8.24 -1.04 8.24 -5.04 c0 -4.28 -2.72 -6.4 -6.28 -6.4 c-2.36 0 -3.12 0.96 -3.12 3.2 l0 8.24 l1.16 0 z"></path>
                </g>
                <g
                  id="SvgjsG1823"
                  featurekey="sloganFeature-0"
                  transform="matrix(1.6418693285293728,0,0,1.6418693285293728,117.00145459146086,110.33103162450227)"
                  fill="#ffffff"
                >
                  <path d="M10.176 20 l-4.3848 -5.9961 l-1.0352 0 l0 5.9961 l-2.9297 0 l0 -14.111 l2.9297 0 l0 5.5469 l0.99609 0 l4.4238 -5.5469 l3.5742 0 l-5.4688 6.748 l5.6348 7.3633 l-3.7402 0 z M37.964335937499996 20 l-1.0254 -2.9102 l-5.9277 0 l-1.0254 2.9102 l-2.998 0 l5.1953 -14.111 l3.584 0 l5.1953 14.111 l-2.998 0 z M31.8701359375 14.6387 l4.209 0 l-2.0996 -5.9863 z M63.905765625 8.467 l-5.3711 0 l0 3.2031 l4.6387 0 l0 2.5488 l-4.6387 0 l0 5.7813 l-2.9492 0 l0 -14.111 l8.3203 0 l0 2.5781 z M87.0949609375 8.467 l-5.2344 0 l0 3.2031 l4.6387 0 l0 2.5488 l-4.6387 0 l0 3.1934 l5.2344 0 l0 2.5879 l-8.1836 0 l0 -14.111 l8.1836 0 l0 2.5781 z"></path>
                </g>
              </svg>
            </div>
            </Link>
           
          </a>

          <nav className="navbar" data-navbar>
            <button
              className="close-btn"
              aria-label="Close menu"
              data-nav-toggler
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>

            <a href="#" className="logo">
              <img
                src="./assets/images/logo.svg"
                width="160"
                height="50"
                alt="Grilli - Home"
              />
            </a>

            {/* <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#home" className="navbar-link hover-underline active">
                  <div className="separator"></div>
                  <span className="span">Home</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#menu" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">Menus</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#about" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">About Us</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">Our Chefs</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">Contact</span>
                </a>
              </li>
            </ul> */}

            <div className="text-center">
              <p className="headline-1 navbar-title">Visit Us</p>

              <address className="body-4">
                Restaurant St, Delicious City, <br />
                London 9578, UK
              </address>

              <p className="body-4 navbar-text">Open: 9:30 am - 2:30 pm</p>

              <a
                href="mailto:booking@grilli.com"
                className="body-4 sidebar-link"
              >
                booking@grilli.com
              </a>

              <div className="separator"></div>

              <p className="contact-label">Booking Request</p>

              <a
                href="tel:+88123123456"
                className="body-1 contact-number hover-underline"
              >
                +88-123-123456
              </a>
            </div>
          </nav>

          <Link to="/kafe-location" className="btn btn-secondary">
            <span className="text text-1">Xeritede goster</span>
            <span className="text text-2" aria-hidden="true">
              Xeritede goster
            </span>
          </Link>

          <button
            className="nav-open-btn"
            aria-label="Open menu"
            data-nav-toggler
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>

          <div className="overlay" data-nav-toggler data-overlay></div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
