'use client';
import classNames from 'classnames';
import classes from './TabButton.module.css';
import { useTheme } from "../../../contexts/theme-context/use-theme.js";
import Link from 'next/link'
import { usePathname } from "next/navigation";

// type matchType = 'startsWith' | 'exact';

export const TabButton = ({path, children, matchType = 'exact'}) => {
  const {theme} = useTheme();
  const pathname = usePathname();

  const isActive = () => {
    if (matchType === 'startsWith') {
      return pathname.startsWith(path);
    }
    return pathname === path;
  };

  return (
    <Link
      href={path}
      aria-current={pathname.endsWith(path) ? 'page' : undefined}
      className={classNames(classes.tab, {
          [classes.active]: isActive(),
          [classes.dark]: theme === 'dark'
        })
      }>
      {children}
    </Link>
  );
}