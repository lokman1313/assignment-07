import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#244D3F]  p-10">
  <aside>
    <h2 className="text-5xl font-bold text-white my-4">TeenKeeper</h2>
    <p  className="text-gray-300">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
   
  </aside>
  <nav>
    <p className="font-semibold text-white">Social Links</p>
    <div className="grid grid-flow-col gap-4">
      <Link className="p-2 bg-white rounded-full" href={''}><AiFillInstagram /></Link>
      <Link className="p-2 bg-white rounded-full" href={''}><FaFacebookSquare /></Link>
      <Link className="p-2 bg-white rounded-full" href={''}><FaXTwitter /></Link>
    </div>
  </nav>
  <div className="border-t border-[#1b5a46] py-4 md:flex justify-between w-4/6">
    <p className="text-gray-400"> Copyright © {new Date().getFullYear()} - All right reserved</p>
    <div className="flex gap-4 text-gray-400">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookies</p>
    </div>
  </div>
</footer>
    );
};

export default Footer;