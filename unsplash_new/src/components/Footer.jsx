import { FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 ">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaTwitter className="fill-current w-6 h-6" />
            </a>
            <a>
              <FaYoutube className="fill-current w-6 h-6" />
            </a>
            <a>
              <FaTelegram className="fill-current w-6 h-6" />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
