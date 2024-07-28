'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

export const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={`text-gray-700 duration-300 hover:text-gray-300 ${pathname === href ? 'cursor-default visited:text-gray-300' : ''}`}
        >
          {label}
        </Link>
      ))}
    </>
  );
};
