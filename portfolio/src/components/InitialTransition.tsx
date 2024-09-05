import { useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import useVariants from "../hooks/useVariants";

const InitialTransition = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const variants = useVariants();
  const { blackBox, textContainer, text } = variants;

  return (
    <motion.div
      style={{
        position: "absolute",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "black",
      }}
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    >
      <motion.svg
        variants={textContainer}
        style={{
          position: "absolute",
          zIndex: 50,
          display: "flex",
          width: "100%",
        }}
      >
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          style={{ color: "white" }}
        >
          <rect
            style={{ width: "100%", height: "100%", fill: "currentcolor" }}
          />
          <motion.rect
            variants={text}
            style={{
              width: "100%",
              height: "100%",
              fill: "currentcolor",
              color: "grey",
            }}
          />
        </pattern>
        <text
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{
            fill: "url(#pattern)",
            fontSize: desktop ? "4vw" : "6vh",
            fontWeight: 700,
            fontFamily: "staatliches",
          }}
        >
          ARTEM SOBOLEV
        </text>
      </motion.svg>
    </motion.div>
  );
};

export default InitialTransition;
