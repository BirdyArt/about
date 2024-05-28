import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { Box, Link, Typography } from "@mui/material";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

const Careers = () => {
  return (
    <Box
      height={window.innerHeight}
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"#F0F0F0"}
      px={32}
    >
      <Box>
        <Typography variant="h4" fontWeight={300} textAlign={"center"}>
          Careers
        </Typography>
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              MAY 2022 - PRESENT
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ paddingTop: "2px" }}>
              <Typography variant="h6">
                Frontend Software Developer @ Merchant Growth (fulltime)
              </Typography>
              <Typography variant="body2">
                Vancouver |{" "}
                <Link
                  href="https://merchantgrowth.com"
                  color="text.secondary"
                  sx={{ textDecoration: "none" }}
                >
                  https://www.merchantgrowth.com/
                </Link>
              </Typography>
              <Typography variant="body1" mt={2}>
                As a frontend software developer, I am responsible for
                developing customer facing and internal UI and working closely
                with the product team to deliver the best user experience.
                Occasionally I would help backend team with smaller tasks in our
                .NET backend. I was working on revolutionary CEBA app that
                allowed clients seamlessly apply for loans and get instant
                approval. App had many complicated integrations (id
                verification, decisioning engine, bank account verification) and
                was able to handle large volumes.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              JULY 2021 - MAY 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ paddingTop: "2px" }}>
              <Typography variant="h6">
                Software Developer @ IdyaFlow (fulltime)
              </Typography>
              <Typography variant="body2">
                Vancouver |{" "}
                <Link
                  href="https://www.idyaflow.com/"
                  color="text.secondary"
                  sx={{ textDecoration: "none" }}
                >
                  https://www.idyaflow.com/
                </Link>
              </Typography>
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
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              JULY 2021 - MAY 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ paddingTop: "2px" }}>
              <Typography variant="h6">
                Frontend Software Developer / Facilitator @ Chingu (fulltime)
              </Typography>
              <Typography variant="body2">
                Vancouver |{" "}
                <Link
                  href="https://www.chingu.io/"
                  color="text.secondary"
                  sx={{ textDecoration: "none" }}
                >
                  https://www.chingu.io/
                </Link>
              </Typography>
              <Typography variant="body1" mt={2}>
                As a frontend software developer, I was working on various
                projects with people from all over the world. I was helping
                facilitate teams and was responsible for delivering projects on
                time. I was also helping with the code reviews and mentoring
                community newcomers.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              OCTOBER 2013 - JULY 2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ paddingTop: "2px" }}>
              <Typography variant="h6">
                Dark times before I switched to Tech (fulltime)
              </Typography>
              <Typography variant="body2">
                Canada |{" "}
                <Link
                  href="https://www.mapcrunch.com/"
                  color="text.secondary"
                  sx={{ textDecoration: "none" }}
                >
                  https://www.mapcrunch.com/
                </Link>
              </Typography>
              <Typography variant="body1" mt={2}>
                I did a lot of different jobs before I switched to tech. I was a
                coffee shop manager on Commercial Drive, product coordinator
                (that one actually was kind of technical as I was writing macros
                in Excel and working with Adobe creative suite) at large tourist
                company focused on Canada and Alaska and other various non tech
                jobs.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Box>
  );
};

export default Careers;
