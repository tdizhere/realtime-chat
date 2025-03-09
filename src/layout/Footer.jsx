import { Box, Grid, GridItem } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import MessageForm from "../components/MessageForm";
export default function Footer() {
  return (
    <Box position="fixed" bottom="0" width="100%">
      <MessageForm />

      <Grid
        gridTemplateColumns="auto 1fr"
        textAlign="center"
        alignItems="center"
        py="4px"
        px="30px"
        height="40px"
        bg="white"
      >
        <GridItem justifySelf="start">
          {/* Built by{" "} */}
          {/* <a href="http://shimon-wosner.vercel.app" target="_blank"> */}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter style={{ display: "inline" }} />
            @TanmayDave
          </a>
        </GridItem>
      </Grid>
    </Box>
  );
}
