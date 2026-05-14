import type { Transition } from "framer-motion";

export const quick: Transition = { duration: 0.15, ease: "easeOut" };
export const standard: Transition = { duration: 0.3, ease: "easeOut" };
export const smooth: Transition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1],
};
export const spring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};
export const drawer: Transition = { duration: 0.3, ease: [0.4, 0, 0.2, 1] };
