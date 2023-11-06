import { useEffect } from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Messages from "./messages/Messages";
import NewMessageInput from "./NewMessageInput";
import { getDirectChatHistory } from "../../../realtimeCommunication/socketConnection";
import { useDispatch, useSelector } from "react-redux";
import { toggleChatLoading } from "../../../app/actions/chatActions";

const Wrapper = styled(Box)({
  flexGrow: 1,
});

const MessengerContent = () => {
  const { chosenChatDetails } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleChatLoading());
    getDirectChatHistory({ receiverUserId: chosenChatDetails.id });
  }, [chosenChatDetails, dispatch]);
  return (
    <Wrapper>
      <Messages />
      <NewMessageInput />
    </Wrapper>
  );
};

export default MessengerContent;
