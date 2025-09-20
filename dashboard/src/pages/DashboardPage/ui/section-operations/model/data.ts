import plus from "@/assets/plus.svg";
import arrowUp from "@/assets/arrow-up.svg";
import arrows from "@/assets/arrows.svg";

export const buttons = [
  {
    icon: plus,
    text: "Receive",
    fn: () => {},
  },
  {
    icon: arrowUp,
    text: "Send",
    fn: () => {},
  },
  {
    icon: arrows,
    text: "Convert",
    fn: () => {},
  },
] as const;
