import Link from "next/link";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={'/'} className="">Home</Link></li>
      <li><Link href={'/stats'}>Stats</Link></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;