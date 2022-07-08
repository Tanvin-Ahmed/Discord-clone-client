import React from "react";
import { styled } from "@mui/system";
import Avatar from "../../../shared/Avatar";
import { Box, Typography } from "@mui/material";

const MainContainer = styled(Box)({
  width: "98%",
  marginTop: "10px",
});

const MessagesHeader = ({ name }) => {
  return (
    <MainContainer>
      <Avatar large username={name} />
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", color: "white", margin: "0px 5px" }}
      >
        {name}
      </Typography>
      <Typography variant="h5" sx={{ color: "#b9bbbe", margin: "0px 5px" }}>
        This is the beginning of your conversation with {name}
      </Typography>
    </MainContainer>
  );
};

export default MessagesHeader;
