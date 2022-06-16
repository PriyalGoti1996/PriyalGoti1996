import Unreadmsg from "./Unreadmsg";
function Mailbox() {
    const Message = ["hello", "hey", "good", "morning", "have", "nice", "day"]

  
    return (

        <div>
        <Unreadmsg unReadmessage={Message}/>
        </div>
    )
}
export default Mailbox;
