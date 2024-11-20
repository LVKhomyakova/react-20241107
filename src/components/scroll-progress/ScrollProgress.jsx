import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const position = (document.documentElement.scrollTop * 100) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    setValue(position);
  };

  return (
    <div style={{ width: '100%', height: '20px', position: 'fixed', top: 0 }}>
      <div style={{width: value + '%', height: '100%', backgroundColor: 'red'}}></div>
    </div>
  );
}