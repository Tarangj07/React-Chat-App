import React, { useState } from "react";
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    scroll.current.scrollIntoView({ behaviour: "smooth", block: 'end' });
    console.log(scroll.current)
  };

  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message">
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="form-input__input"
        placeholder="Type a message..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;
