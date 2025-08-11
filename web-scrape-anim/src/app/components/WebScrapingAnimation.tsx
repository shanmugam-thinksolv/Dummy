"use client";

import React, { useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";

// A single self-contained component that visually explains the web scraping process
// with modern 2D animations using Framer Motion and Tailwind CSS.

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 200 } },
};

const nodeVariants: Variants = {
  idle: { scale: 1, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" },
  pulse: {
    scale: [1, 1.04, 1],
    transition: { repeat: Infinity, repeatType: "loop", duration: 2.2 },
  },
};

const arrowVariants: Variants = {
  initial: { pathLength: 0, opacity: 0.6 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.3 },
  },
};

const dotVariants: Variants = {
  start: { x: 0, opacity: 0 },
  end: (distance: number) => ({
    x: distance,
    opacity: [0, 1, 1, 0],
    transition: { duration: 1.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.2 },
  }),
};

const staggerIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

function IconBrowser() {
  return (
    <svg viewBox="0 0 128 96" className="w-10 h-10" aria-hidden>
      <rect x="2" y="8" width="124" height="86" rx="10" fill="currentColor" className="text-slate-200 dark:text-slate-700" />
      <rect x="2" y="8" width="124" height="20" rx="10" fill="#ffffff" className="dark:fill-slate-100/70" />
      <circle cx="18" cy="18" r="4" fill="#ef4444" />
      <circle cx="34" cy="18" r="4" fill="#f59e0b" />
      <circle cx="50" cy="18" r="4" fill="#10b981" />
      <rect x="14" y="44" width="100" height="38" rx="6" fill="#ffffff" className="dark:fill-white/90" />
    </svg>
  );
}

function IconServer() {
  return (
    <svg viewBox="0 0 96 96" className="w-10 h-10" aria-hidden>
      <rect x="8" y="14" width="80" height="20" rx="6" fill="currentColor" className="text-slate-200 dark:text-slate-700" />
      <rect x="8" y="38" width="80" height="20" rx="6" fill="currentColor" className="text-slate-200 dark:text-slate-700" />
      <rect x="8" y="62" width="80" height="20" rx="6" fill="currentColor" className="text-slate-200 dark:text-slate-700" />
      <circle cx="20" cy="24" r="3" fill="#22c55e" />
      <circle cx="20" cy="48" r="3" fill="#22c55e" />
      <circle cx="20" cy="72" r="3" fill="#22c55e" />
    </svg>
  );
}

function IconHtml() {
  return (
    <svg viewBox="0 0 96 96" className="w-10 h-10" aria-hidden>
      <rect x="14" y="10" width="68" height="76" rx="8" fill="currentColor" className="text-slate-200 dark:text-slate-700" />
      <path d="M28 32 L42 40 L28 48" stroke="#0ea5e9" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M68 32 L54 40 L68 48" stroke="#0ea5e9" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="26" y="56" width="44" height="8" rx="4" fill="#0ea5e9" />
    </svg>
  );
}

function IconParser() {
  return (
    <svg viewBox="0 0 96 96" className="w-10 h-10" aria-hidden>
      <circle cx="48" cy="48" r="30" fill="currentColor" className="text-slate-200 dark:text-slate-700" />
      <rect x="26" y="44" width="44" height="8" rx="4" fill="#a78bfa" />
      <rect x="44" y="26" width="8" height="44" rx="4" fill="#a78bfa" />
    </svg>
  );
}

function IconDatabase() {
  return (
    <svg viewBox="0 0 96 96" className="w-10 h-10" aria-hidden>
      <ellipse cx="48" cy="20" rx="28" ry="10" fill="currentColor" className="text-slate-200 dark:text-slate-700" />
      <rect x="20" y="20" width="56" height="40" fill="currentColor" className="text-slate-200 dark:text-slate-700" />
      <ellipse cx="48" cy="60" rx="28" ry="10" fill="currentColor" className="text-slate-200 dark:text-slate-700" />
      <ellipse cx="48" cy="40" rx="28" ry="10" fill="#ffffff" className="dark:fill-white/90" />
    </svg>
  );
}

export default function WebScrapingAnimation() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("pulse");
  }, [controls]);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 p-6 sm:p-8 shadow-xl"
      aria-label="Animated explanation of how web scraping works"
    >
      {/* Accent background orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      {/* Header */}
      <motion.div variants={fadeUp} className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            How Web Scraping Works
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            A high-level flow from request to clean, structured data.
          </p>
        </div>
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => controls.start("pulse")}
          className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-3 py-1.5 text-sm text-slate-700 dark:text-slate-200 shadow-sm hover:bg-white dark:hover:bg-slate-900"
          aria-label="Replay animations"
        >
          Replay
        </motion.button>
      </motion.div>

      {/* Flow Diagram */}
      <motion.div
        variants={staggerIn}
        className="relative grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-6 items-center"
      >
        {/* Node 1: Crawler / Browser */}
        <motion.div
          variants={fadeUp}
          animate={controls}
          className="relative"
        >
          <motion.div
            variants={nodeVariants}
            initial="idle"
            animate="pulse"
            className="flex flex-col items-center gap-2 rounded-xl bg-white/70 dark:bg-slate-900/60 p-4 backdrop-blur-md"
          >
            <IconBrowser />
            <div className="text-center">
              <p className="text-sm font-medium text-slate-800 dark:text-slate-100">Crawler</p>
              <p className="text-xs text-slate-500">Sends HTTP request</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Arrow 1 */}
        <motion.div className="hidden sm:block" variants={fadeUp}>
          <svg viewBox="0 0 240 64" className="w-full h-16">
            <motion.path
              d="M8 32 H210"
              stroke="#0ea5e9"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              variants={arrowVariants}
              initial="initial"
              animate="animate"
            />
            <polygon points="210,24 210,40 232,32" fill="#0ea5e9" />
          </svg>
          <div className="relative -mt-6">
            <motion.div
              className="absolute left-2 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-cyan-500"
              variants={dotVariants}
              custom={200}
              initial="start"
              animate="end"
            />
          </div>
        </motion.div>

        {/* Node 2: Target Website */}
        <motion.div variants={fadeUp} className="relative">
          <motion.div
            variants={nodeVariants}
            initial="idle"
            animate="pulse"
            className="flex flex-col items-center gap-2 rounded-xl bg-white/70 dark:bg-slate-900/60 p-4 backdrop-blur-md"
          >
            <IconServer />
            <div className="text-center">
              <p className="text-sm font-medium text-slate-800 dark:text-slate-100">Target Site</p>
              <p className="text-xs text-slate-500">Serves HTML</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Arrow 2 */}
        <motion.div className="hidden sm:block" variants={fadeUp}>
          <svg viewBox="0 0 240 64" className="w-full h-16 rotate-180">
            <motion.path
              d="M8 32 H210"
              stroke="#22c55e"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              variants={arrowVariants}
              initial="initial"
              animate="animate"
            />
            <polygon points="210,24 210,40 232,32" fill="#22c55e" />
          </svg>
          <div className="relative -mt-6">
            <motion.div
              className="absolute left-2 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-emerald-500"
              variants={dotVariants}
              custom={200}
              initial="start"
              animate="end"
            />
          </div>
        </motion.div>

        {/* Node 3: HTML Response */}
        <motion.div variants={fadeUp} className="relative">
          <motion.div
            variants={nodeVariants}
            initial="idle"
            animate="pulse"
            className="flex flex-col items-center gap-2 rounded-xl bg-white/70 dark:bg-slate-900/60 p-4 backdrop-blur-md"
          >
            <IconHtml />
            <div className="text-center">
              <p className="text-sm font-medium text-slate-800 dark:text-slate-100">HTML</p>
              <p className="text-xs text-slate-500">Raw document</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Arrow 3 */}
        <motion.div className="hidden sm:block" variants={fadeUp}>
          <svg viewBox="0 0 240 64" className="w-full h-16">
            <motion.path
              d="M8 32 H210"
              stroke="#a78bfa"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              variants={arrowVariants}
              initial="initial"
              animate="animate"
            />
            <polygon points="210,24 210,40 232,32" fill="#a78bfa" />
          </svg>
          <div className="relative -mt-6">
            <motion.div
              className="absolute left-2 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-violet-500"
              variants={dotVariants}
              custom={200}
              initial="start"
              animate="end"
            />
          </div>
        </motion.div>

        {/* Node 4: Parser */}
        <motion.div variants={fadeUp} className="relative">
          <motion.div
            variants={nodeVariants}
            initial="idle"
            animate="pulse"
            className="flex flex-col items-center gap-2 rounded-xl bg-white/70 dark:bg-slate-900/60 p-4 backdrop-blur-md"
          >
            <IconParser />
            <div className="text-center">
              <p className="text-sm font-medium text-slate-800 dark:text-slate-100">Parser</p>
              <p className="text-xs text-slate-500">Extracts fields</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Arrow 4 */}
        <motion.div className="hidden sm:block" variants={fadeUp}>
          <svg viewBox="0 0 240 64" className="w-full h-16">
            <motion.path
              d="M8 32 H210"
              stroke="#f59e0b"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              variants={arrowVariants}
              initial="initial"
              animate="animate"
            />
            <polygon points="210,24 210,40 232,32" fill="#f59e0b" />
          </svg>
          <div className="relative -mt-6">
            <motion.div
              className="absolute left-2 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-amber-500"
              variants={dotVariants}
              custom={200}
              initial="start"
              animate="end"
            />
          </div>
        </motion.div>

        {/* Node 5: Structured Data */}
        <motion.div variants={fadeUp} className="relative">
          <motion.div
            variants={nodeVariants}
            initial="idle"
            animate="pulse"
            className="flex flex-col items-center gap-2 rounded-xl bg-white/70 dark:bg-slate-900/60 p-4 backdrop-blur-md"
          >
            <IconDatabase />
            <div className="text-center">
              <p className="text-sm font-medium text-slate-800 dark:text-slate-100">Structured Data</p>
              <p className="text-xs text-slate-500">JSON/CSV/DB</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile arrows (stacked layout) */}
      <div className="sm:hidden mt-4 space-y-2">
        {["#0ea5e9", "#22c55e", "#a78bfa", "#f59e0b"].map((color, idx) => (
          <svg key={idx} viewBox="0 0 320 32" className="w-full h-8">
            <motion.path
              d="M8 16 H296"
              stroke={color}
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              variants={arrowVariants}
              initial="initial"
              animate="animate"
            />
            <polygon points="296,10 296,22 312,16" fill={color} />
          </svg>
        ))}
      </div>

      {/* Legend */}
      <motion.div variants={fadeUp} className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-500" />
          <span>Request flow</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          <span>Response flow</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-violet-500" />
          <span>Transformation to structured data</span>
        </div>
      </motion.div>
    </motion.section>
  );
}