import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'


const NavItem = ({ NavIcon, NavText, NavRoute, setIsOpen }) => {
    const router = useRouter();
    const isActive = router.asPath === `${NavRoute}`;
    const className = isActive
        ? "rounded-xl !text-white bg-[#6ca484] font-bold tracking-widest shadow-sm"
        : "text-[#3b2c1a]";

    return (
        <Link
            onClick={(e) => setIsOpen(false)}
            href={NavRoute}
            className={`${className} transition flex items-center px-3 hover:bg-[#e7d6c4] hover:text-[#2e2417] rounded-xl py-1.5 font-semibold space-x-3 text-base`}
        >
            {NavIcon}
            <span>{NavText}</span>
        </Link>
    )
}

export default NavItem
