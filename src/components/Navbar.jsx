"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

function Navbar() {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      const fixedNav = headerRef.current.offsetTop;

      if (window.scrollY > fixedNav) {
        headerRef.current.classList.add("navbar-island");
        console.log("arka kurang waras");
      } else {
        headerRef.current.classList.remove("navbar-island");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className="absolute z-99 top-0 right-0 w-full">
        <div
          ref={headerRef}
          className="flex justify-between items-center text-primary"
        >
          {/* Dekstop View */}
          <div className="px-12 py-6">
            <Link href={"/"}>
              <Image
                src={"/assets/nav-logo.png"}
                width={150}
                height={75}
                alt={"Logo"}
              />
            </Link>
          </div>
          <div className="px-12">
            <ul className=" flex flex-wrap gap-6 text-lg">
              <li>
                <Link href={"/"}>Beranda</Link>
              </li>
              <li>
                <Link href={"/"}>Profile</Link>
              </li>
              <li>
                <Link href={"/"}>Konsentrasi Kejuruan</Link>
              </li>
              <li>
                <Link href={"/"}>Akademik</Link>
              </li>
              <li>
                <Link href={"/"}>Infromasi</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
