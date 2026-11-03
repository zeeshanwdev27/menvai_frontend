import { Copyright } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaDiscord,
  FaPinterest,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";

import { Link } from "react-router-dom";



function Footer() {
  return (
    <>
      <div className=" lg:py-10 px-5 lg:px-14 w-full border-t border-gray-200 shadow-sm overflow-hidden flex flex-col gap-8">
  {/* First Row */}
        {/* <div className="flex flex-col gap-3 mt-7 lg:mt-0">
              <Link to="/" className="flex justify-center lg:justify-start">
      <img
        src='/logo.png'
        className="h-8 lg:h-8 object-contain cursor-pointer"
        alt="GYMSHARK_LOGO"
      />
    </Link>

    <p className="text-sm text-center lg:text-start">EVERYDAY COMFORT STARTS HERE</p>
          
        </div> */}

  {/* Second Row */}
        <div className="lg:flex lg:justify-between w-full">


                  <div className="flex flex-col gap-3 mt-7 lg:mt-0">
              <Link to="/" className="flex justify-center lg:justify-start">
      <img
        src='/logo.png'
        className="h-8 lg:h-8 object-contain cursor-pointer"
        alt="GYMSHARK_LOGO"
      />
    </Link>

    <p className="text-sm text-center lg:text-start">EVERYDAY COMFORT STARTS HERE</p>
          
        </div>

          <div className="hidden lg:flex justify-center items-center gap-2">
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/5PrfyA9tb7E5sX4VJOvUXU/5c7d1da15bcb3ea9bc846698b14da4c0/visa-card.svg"
              alt="visa_card"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/LwfpWwq8TXIansB91xPmD/d20403df94193ad356b8ea0a2df4e9f1/mastercard-card.svg"
              alt="mastercard"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/7shmU9DfzLDbUk4b6obKoX/d3dd37478163f60363dc9c982b6fd56e/amex-card.svg"
              alt="americanexpress"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/30jtAlNtcunM6pu0L8Xar/f528a13df611d9585b73a36fe35b8797/paypal-card.svg"
              alt="paypal"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/5AUy4FwF2qwCL5Xog760Xf/1839c30ce2dbe6b7119f4dab3f15920b/applepay-card.svg"
              alt="applepay"
            />
          </div>

          {/* <div className="flex justify-center items-center gap-3 mb-5 lg:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="lg:w-6 lg:h-6 w-5 h-5 hover:text-blue-500 transition-colors" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="lg:w-6 lg:h-6 w-5 h-5 hover:text-pink-500 transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="lg:w-5 lg:h-5 w-4 h-4 hover:text-[#FE2C55] transition-colors" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="lg:w-6 lg:h-6 w-5 h-5 hover:text-sky-500 transition-colors" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="lg:w-6 lg:h-6 w-5 h-5 hover:text-red-500 transition-colors" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="lg:w-6 lg:h-6 w-5 h-5 hover:text-indigo-500 transition-colors" />
            </a>
            <a
              href="https://twitch.tv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest className="lg:w-6 lg:h-6 w-5 h-5 hover:text-red-500 transition-colors" />
            </a>
          </div> */}

          {/* <div className="lg:hidden flex flex-col gap-3 justify-center items-center">
          <ul className="flex flex-col justify-center items-center gap-3 text-sm">
            <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition">
              Terms and Conditions
            </li>
            <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition">
              Terms of Use
            </li>
            <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition">
              Privacy Notice
            </li>
            <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition">
              Cookie Policy
            </li>
            <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition">
              Modern Slavery
            </li>
          </ul>
          <div className="flex gap-2 justify-center items-center">
            <a
              href="https://twitch.tv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GiWorld className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </a>
            <p className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition text-sm">
              ROW
            </p>
          </div>
        </div> */}

        <div className="lg:hidden flex justify-center items-center gap-2 py-7">
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/5PrfyA9tb7E5sX4VJOvUXU/5c7d1da15bcb3ea9bc846698b14da4c0/visa-card.svg"
              alt="visa_card"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/LwfpWwq8TXIansB91xPmD/d20403df94193ad356b8ea0a2df4e9f1/mastercard-card.svg"
              alt="mastercard"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/7shmU9DfzLDbUk4b6obKoX/d3dd37478163f60363dc9c982b6fd56e/amex-card.svg"
              alt="americanexpress"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/30jtAlNtcunM6pu0L8Xar/f528a13df611d9585b73a36fe35b8797/paypal-card.svg"
              alt="paypal"
            />
            <img
              className="w-10"
              src="https://images.ctfassets.net/wl6q2in9o7k3/5AUy4FwF2qwCL5Xog760Xf/1839c30ce2dbe6b7119f4dab3f15920b/applepay-card.svg"
              alt="applepay"
            />
          </div>


          

        </div>
      </div>

  {/* Bottom Footer */}
      <div className="flex justify-center lg:justify-between py-5 px-5 lg:px-14 w-full overflow-hidden">
        <div className="flex justify-center items-center gap-1">
          <Copyright className="w-3 font-light pt-0.5" />
          <span className="text-sm text-black">
            2026 | MENVIA | All Rights Reserved. 
          </span>
        </div>

        <div className="hidden lg:flex gap-3 justify-center items-center">
          <ul className="flex justify-center items-center gap-3 text-sm">
            <Link to="/terms-and-conditions">
            <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition">
              Terms and Conditions
            </li>
            </Link>
            <Link to="/privacy-policy">
            <li className="font-semibold text-black cursor-pointer opacity-70 hover:opacity-100 transition">
              Privacy Policy
            </li>
            </Link>
          </ul>


        </div>

      </div>
    </>
  );
}

export default Footer;
