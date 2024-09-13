import { useMediaQuery, useTheme } from "@mui/material";
import { UseVariantsReturn } from "../types";

export default function useVariants(): UseVariantsReturn {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  return {
    blackBox: {
      initial: {
        height: "100%",
        bottom: 0,
      },
      animate: {
        height: 0,
        transition: {
          when: "afterChildren",
          duration: 1.5,
          ease: [0.87, 0, 0.13, 1],
        },
      },
    },
    textContainer: {
      initial: {
        opacity: 1,
        height: desktop ? "8vw" : "12vh",
      },
      animate: {
        opacity: 0,
        height: 0,
        transition: {
          duration: 0.3,
          when: "afterChildren",
        },
      },
    },
    text: {
      initial: {
        y: 0,
      },
      animate: {
        y: desktop ? "4.1vw" : "6.1vh",
        transition: {
          duration: 2,
          ease: [0.87, 0, 0.13, 1],
        },
      },
    },
    box1: {
      open: {
        x: desktop ? "0.5vw" : 0,
        y: desktop ? 0 : 7,
        transition: {
          duration: 1.5,
          ease: [0.87, 0, 0.13, 1],
        },
      },
      closed: {
        x: desktop ? "-90vw" : 0,
        y: desktop ? 0 : "-86vh",
        transition: {
          duration: 1.5,
          ease: [0.87, 0, 0.13, 1],
        },
      },
    },
    box2: {
      open: {
        y: "-50vh",
        transition: {
          duration: 1.5,
          ease: [0.87, 0, 0.13, 1],
        },
      },
      closed: {
        y: 0,
        transition: {
          duration: 1.5,
          ease: [0.87, 0, 0.13, 1],
        },
      },
    },
    box3: {
      open: {
        y: "50vh",
        transition: {
          duration: 1.5,
          ease: [0.87, 0, 0.13, 1],
        },
      },
      closed: {
        y: 0,
        transition: {
          duration: 1.5,
          ease: [0.87, 0, 0.13, 1],
        },
      },
    },
    box4: {
      open: {
        y: "85vh",
        transition: {
          duration: 1.5,
          ease: [0.87, 0, 0.13, 1],
        },
      },
      closed: {
        y: 0,
        transition: {
          duration: 1.5,
          ease: [0.87, 0, 0.13, 1],
        },
      },
    },
    button: {
      open: {
        rotate: 0,
        color: "#388e3c",
        transition: {
          duration: 1.5,
          ease: [0.87, 0, 0.13, 1],
        },
      },
      closed: {
        rotate: 315,
        color: "#d32f2f",
        transition: {
          duration: 1.5,
          ease: [0.87, 0, 0.13, 1],
        },
      },
    },
    aboutMe: {
      offscreen: {
        // y: 50,
        filter: "blur(5px)",
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 1,
        },
      },
      onscreen: {
        // y: 0,
        filter: "blur(0px)",
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 1,
        },
      },
    },
    container: {
      open: {
        opacity: 1,
        transition: { opacity: { duration: 1, delay: 1.2 } },
      },
      closed: { opacity: 0 },
    },
  };
}
