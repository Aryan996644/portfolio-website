import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setScroll(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[999] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-150"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
