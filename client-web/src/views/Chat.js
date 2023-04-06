import Talk from 'talkjs';
import { useEffect, useState, useRef } from 'react';
import LoadingScreen from '../components/LoadingScreen';

export default function Chat() {
    const [loading, setLoading] = useState(true)
    const inboxEl = useRef();
    const [talkLoaded, markTalkLoaded] = useState(false);
    Talk.ready.then(() => markTalkLoaded(true))

    useEffect(() => {
        // setLoading(false)
        if (talkLoaded) {
            // Safe to use the SDK here
            const currentUser = new Talk.User({
                id: '1',
                name: 'Hoh Pet Clinic',
                email: 'admin@mail.com',
                photoUrl: 'https://i.pinimg.com/originals/95/e7/b5/95e7b509dd285cbf25140ebf22806383.gif',
                welcomeMessage: `Hi, welcome to ${"Hoh Pet Clinic"}! How can we help you today?`,
                role: 'default',
            });

            const otherUser = new Talk.User(
                {
                    id: "2",
                    name: "Alice",
                    email: "alice@example.com",
                    photoUrl: "https://talkjs.com/images/avatar-1.jpg",
                    welcomeMessage: " ",
                    role: "default",
                }
            );

            const session = new Talk.Session({
                appId: 't0KJ4uWG',
                me: currentUser,
            });

            const conversationId = Talk.oneOnOneId(currentUser, otherUser);
            const conversation = session.getOrCreateConversation(conversationId);
            conversation.setParticipant(currentUser);
            conversation.setParticipant(otherUser);

            // const chatbox = session.createChatbox();
            // chatbox.select(conversation);
            // chatbox.mount(chatboxEl.current);

            const inbox = session.createInbox();
            inbox.mount(inboxEl.current);
            return () => session.destroy();
        }

    }, [talkLoaded]);

    const loadingScreen = () => {
        return <LoadingScreen />;
    }

    return (
        <>
            <div className=' w-full h-full flex justify-center'>
                {/* {loading ? loadingScreen() : ""} */}
                <div className=' w-2/3 h-full flex bg-[#eafdfc] p-4 rounded-md shadow-md'>
                    <div ref={inboxEl} className=" w-full" />
                    {/* <div ref={chatboxEl} className=" w-full" /> */}
                </div>
            </div>
        </>
    )
}