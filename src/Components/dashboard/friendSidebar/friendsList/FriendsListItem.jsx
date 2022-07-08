import { Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import {
  ChatType,
  setChosenChatDetails,
} from "../../../../app/actions/chatActions";
import Avatar from "../../../shared/Avatar";
import OnlineIndicator from "./OnlineIndicator";

const FriendsListItem = (props) => {
  const dispatch = useDispatch();
  const { id, username, isOnline } = props;

  const handleChooseActiveConversation = () => {
    dispatch(setChosenChatDetails({ id, name: username }, ChatType.DIRECT));
  };

  return (
    <Button
      onClick={handleChooseActiveConversation}
      style={{
        width: "100%",
        height: "42px",
        position: "relative",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "black",
      }}
    >
      <Avatar username={username} />
      <Typography
        style={{ marginLeft: "7px", fontWeight: 700, color: "#8e9297" }}
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

export default FriendsListItem;
