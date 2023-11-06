import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import WelcomeMessage from "./WelcomeMessage";
import MessengerContent from "./MessengerContent";

const MainContainer = styled(Box)({
  display: "flex",
  flexGrow: 1,
  marginTop: "48px",
  backgroundColor: "#36393f",
});

const Messenger = () => {
  const { chosenChatDetails } = useSelector((state) => state.chat);
  return (
    <MainContainer>
      {!chosenChatDetails ? <WelcomeMessage /> : <MessengerContent />}
    </MainContainer>
  );
};

export default Messenger;
