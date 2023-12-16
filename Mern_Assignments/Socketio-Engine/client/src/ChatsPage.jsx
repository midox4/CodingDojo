//import {MultiChatSocket, MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
import { PrettyChatWindow } from "react-chat-engine-pretty";

function ChatsPage(props) {
  // const chatProps= useMultiChatLogic('d01f12db-6090-4390-b39a-4e9a83bc0641', props.user.username, props.user.secret)

  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="d01f12db-6090-4390-b39a-4e9a83bc0641"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />

      {/* <MultiChatSocket  {...chatProps}  />
    <MultiChatWindow  {...chatProps} tyle={{height:'100%'}} /> */}
    </div>
  );
}

export default ChatsPage;
