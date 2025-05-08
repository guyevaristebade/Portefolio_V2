"use client";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { ReactNode, Children } from "react";

interface AnimeComponentProps {
  children: ReactNode;
}

const AnimeComponent: React.FC<AnimeComponentProps> = ({ children }) => {
  const pathname = usePathname();

  const variants = {
    initial: {
      opacity: 0,
      rotateX: -90,
      transformOrigin: "top",
    },
    animate: (i: number) => ({
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        style={{
          perspective: "1000px",
        }}
      >
        {Children.map(children, (child, index) => (
          <motion.div
            custom={index}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {child}
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};

export default AnimeComponent;
