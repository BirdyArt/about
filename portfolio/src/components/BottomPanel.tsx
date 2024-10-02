import { Box, Button, ButtonGroup } from "@mui/material";
import { FilePdf, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import useVariants from "../hooks/useVariants";

const BottomPanel = ({ isOpen }: { isOpen: boolean }) => {
  const variants = useVariants();
  const { box4 } = variants;

  return (
    <Box
      sx={{
        borderTopColor: "black",
        borderTopStyle: "solid",
        borderTopWidth: "max(6px, 0.5vw)",
      }}
    >
      <motion.div
        style={{
          height: "calc(15vh - 12px)",
          width: "100vw",
          backgroundColor: "#F7F7F7",
          boxSizing: "border-box",
        }}
        animate={!isOpen ? "open" : "closed"}
        variants={box4}
      >
        <ButtonGroup
          variant="text"
          aria-label="Basic button group"
          fullWidth
          sx={{
            height: "100%",
          }}
        >
          <Button
            href="/cv.pdf"
            download
            aria-label="read cv link"
            sx={{
              borderRight: "none !important",
              color: "black",
              pt: 3,
              borderRadius: 0,
            }}
          >
            <FilePdf size={36} fill="black" weight="bold" />
          </Button>
          <Button
            href="https://www.linkedin.com/in/artem-sobolev/"
            target="_blank"
            aria-label="linkedin link"
            sx={{
              borderRight: "none !important",
              color: "black",
              pt: 3,
            }}
          >
            <LinkedinLogo size={36} fill="black" weight="bold" />
          </Button>
          <Button
            href="https://github.com/BirdyArt"
            target="_blank"
            aria-label="github link"
            sx={{ color: "black", pt: 3, borderRadius: 0 }}
          >
            <GithubLogo size={36} fill="black" weight="bold" />
          </Button>
        </ButtonGroup>
      </motion.div>
    </Box>
  );
};

export default BottomPanel;
