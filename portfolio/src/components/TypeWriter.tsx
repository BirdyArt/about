import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { SxProps, Theme } from "@mui/material/styles";

type TypewriterProps = {
  text: string;
  delay: number;
  start?: boolean;
  infinite?: boolean;
  sx?: SxProps<Theme>;
};

const Typewriter = ({ text, delay, infinite, sx, start }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (start) {
      let timeout: ReturnType<typeof setTimeout>;
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);
      } else if (infinite) {
        setCurrentIndex(0);
        setCurrentText("");
      }

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, infinite, text, start]);

  return (
    <Typography sx={[...(Array.isArray(sx) ? sx : [sx])]}>
      {currentText}
    </Typography>
  );
};

export default Typewriter;
