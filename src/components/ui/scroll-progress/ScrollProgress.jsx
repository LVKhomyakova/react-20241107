'use client';
import { useEffect, useState } from "react";
import classes from './ScrollProgress.module.css'

export const ScrollProgress = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = (document.documentElement.scrollTop * 100) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      setValue(position);
    };
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className={classes.bar}>
      <div className={classes.progress} style={{width: value + '%'}}></div>
    </div>
  );
}