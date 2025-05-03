import { AnimatePresence } from "motion/react";
import React, { PropsWithChildren } from "react";

const PageTransition = ({ children }: PropsWithChildren) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

export default PageTransition;
