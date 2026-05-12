'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-background border-b border-divider'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="px-8 py-5 flex items-center justify-between">
        <a href="#hero" aria-label="Iron Productions home">
          <Image
            src="/Logo.png"
            alt="Iron Productions"
            height={36}
            width={180}
            className="h-9 w-auto"
            priority
          />
        </a>

        <a
          href="#contact"
          className={`text-base px-6 py-3 font-medium transition-all duration-300 hover:opacity-75 ${
            scrolled
              ? 'bg-foreground text-background'
              : 'bg-foreground text-background md:bg-background md:text-foreground'
          }`}
        >
          BOOK A CALL
        </a>
      </div>

    </motion.header>
  );
}
