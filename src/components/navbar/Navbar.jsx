"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from '../../assets/logo.png'
import { IoHomeOutline, IoTimeOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";

const Navbar = () => {
  const pathname=usePathname();
    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 sm:px-10">
  <div className="flex-1">
    <Image src={logo} alt="logo"></Image>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={'/'} className={pathname === '/' ? 'btn bg-[#244D3F] text-white' : 'btn btn-ghost'}><IoHomeOutline />Home</Link></li>
      <li><Link href={'/timeline'} className={pathname === '/timeline' ? 'btn bg-[#244D3F] text-white' : 'btn btn-ghost'}><IoTimeOutline />Timeline</Link></li>
      <li><Link href={'/stats'} className={pathname === '/stats' ? 'btn bg-[#244D3F] text-white' : 'btn btn-ghost'}><GoGraph />Stats</Link></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;