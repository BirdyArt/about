import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineItemClasses,
} from "@mui/lab";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import {
  Bounce,
  Fade,
  Flip,
  Hinge,
  JackInTheBox,
  Rotate,
  Slide,
} from "react-awesome-reveal";

const Careers = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const styleSx = desktop
    ? { [`& .${timelineOppositeContentClasses.root}`]: { flex: 0.2 } }
    : { [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 } };

  return (
    <Box
      height={{ xs: "100%", lg: window.innerHeight }}
      display={{ xs: "block", md: "flex" }}
      justifyContent={"center"}
      alignItems={"center"}
      px={{ xs: 2, md: 24 }}
    >
      <Box>
        <JackInTheBox triggerOnce>
          <Typography
            fontFamily={"staatliches"}
            fontSize={32}
            lineHeight={"40px"}
            fontWeight={600}
            textAlign={"center"}
            color="black"
            mb={2}
          >
            Careers
          </Typography>
        </JackInTheBox>
        <Timeline sx={styleSx}>
          <Fade triggerOnce>
            <TimelineItem>
              {desktop ? (
                <TimelineOppositeContent color="text.secondary">
                  05/2022 - NOW
                </TimelineOppositeContent>
              ) : null}
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ paddingTop: { xs: "7px", md: "2px" } }}>
                {!desktop ? (
                  <Typography variant="body1" color="text.secondary">
                    05/2022 - NOW
                  </Typography>
                ) : null}
                <Typography variant="h6">
                  Frontend Software Developer @ Merchant Growth
                </Typography>
                <Typography variant="body2">Vancouver, BC</Typography>
                <Typography variant="body1" mt={2}>
                  As a frontend software developer, I am responsible for
                  developing customer facing and internal UI and working closely
                  with the product team to deliver the best user experience.
                  Occasionally I would help backend team with smaller tasks in
                  our .NET backend. I was working on revolutionary CEBA app that
                  allowed clients seamlessly apply for loans and get instant
                  approval. App had many complicated integrations (id
                  verification, decisioning engine, bank account verification)
                  and was able to handle large volumes.
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Fade>
          <Fade triggerOnce>
            <TimelineItem>
              {desktop ? (
                <TimelineOppositeContent color="text.secondary">
                  07/2021 - 05/2022
                </TimelineOppositeContent>
              ) : null}
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ paddingTop: { xs: "7px", md: "2px" } }}>
                {!desktop ? (
                  <Typography variant="body1" color="text.secondary">
                    07/2021 - 05/2022
                  </Typography>
                ) : null}
                <Typography variant="h6">
                  Software Developer @ IdyaFlow
                </Typography>
                <Typography variant="body2">Vancouver, BC</Typography>
                <Typography variant="body1" mt={2}>
                  As a software developer, I completely overhauled all company's
                  marketplace apps UI (boat renting, baby gear marketplace etc.)
                  using modern technologies and best practices. I introduced and
                  implemented live chat (using sockets) and applications testing
                  (E2E and Unit). I was also helping writing APIs (NodeJS) and
                  working with databases (MongoDB).
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Fade>
          <Fade triggerOnce>
            <TimelineItem>
              {desktop ? (
                <TimelineOppositeContent color="text.secondary">
                  12/2020 - 07/2021
                </TimelineOppositeContent>
              ) : null}
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ paddingTop: { xs: "7px", md: "2px" } }}>
                {!desktop ? (
                  <Typography variant="body1" color="text.secondary">
                    12/2020 - 07/2021
                  </Typography>
                ) : null}
                <Typography variant="h6">
                  Frontend Software Developer / Facilitator @ Chingu
                </Typography>
                <Typography variant="body2">Vancouver, BC</Typography>
                <Typography variant="body1" mt={2}>
                  As a frontend software developer, I was working on various
                  projects with people from all over the world. I was helping
                  facilitate teams and was responsible for delivering projects
                  on time. I was also helping with the code reviews and
                  mentoring community newcomers.
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Fade>
          <Fade triggerOnce>
            <TimelineItem>
              {desktop ? (
                <TimelineOppositeContent color="text.secondary">
                  10/2013 - 12/2020
                </TimelineOppositeContent>
              ) : null}
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ paddingTop: { xs: "7px", md: "2px" } }}>
                {!desktop ? (
                  <Typography variant="body1" color="text.secondary">
                    10/2013 - 12/2020
                  </Typography>
                ) : null}
                <Typography variant="h6">
                  Dark times before I switched to Tech @ Non-tech jobs
                </Typography>
                <Typography variant="body2">Vancouver, BC</Typography>
                <Typography variant="body1" mt={2}>
                  I did a lot of different jobs before I switched to tech. I was
                  a coffee shop manager on Commercial Drive, product coordinator
                  (that one actually was kind of technical as I was writing
                  macros in Excel and working with Adobe creative suite) at
                  large tourism company focused on Canada and Alaska and other
                  various non tech jobs.
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Fade>
        </Timeline>
      </Box>
    </Box>
  );
};

export default Careers;
