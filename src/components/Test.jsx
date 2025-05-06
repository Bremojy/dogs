import { useState, useRef, useEffect } from 'react';
import Navbar from './Navbar';
const Test = () => {
const [messages, setMessages] = useState([
{ sender: 'bot', text: "Hello I'm your chatbot. Type 'quit' to end the chat." }
]);
const [userInput, setUserInput] = useState('');
const endOfChatRef = useRef(null)
 

const pairs = [
[/(hi|hey|hello|hola|good\s(morning|afternoon|evening))/i, [
"Hi, how can I help you today?",
"Hello there, how can I assist you?"
]],
[/(.*)(buy| purchase|get|adopt)(.*)/i, [
"Great! We have Golden Retrievers, German Shepherds, and Labradors available. Would you like to know about a breed?",
]],
[/(.*)(train|training|obedience|behavior)(.*)/i, [
"We offer obedience and behavioral training. Would you like to book a session or know our packages?",
]],
[/(.*)(Duration|How long|Length|Weeks|Months)(.*)/i, [
"It depends on the dog,s age. For dogs above 6, we train them in months. For dogs that are 6 years old and below, we train them in weeks."
]],
[/(.*)(apply|register|join)(.*)/i, [
"You can join by registering online by visiting https://dogs-ecru-nu.vercel.app/ or visiting our office"
]],
[/(.*)(location|located|address)(.*)/i, [
"We are located at Nairobi 'CBD',Kenya.... dog's world street."
]]
];
 


const getResponse = (input) => {
for (const [pattern, responses] of pairs) {
if (pattern.test(input)) {
return responses[Math.floor(Math.random() * responses.length)];
}
}
// Fallback if no pattern matched
const fallbackResponses = [
"Sorry I didn't get that",
"Please clarify",
"Pardon me?"
];
return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
};
 

const handleSubmit = (e) => {
e.preventDefault();
const trimmedInput = userInput.trim();
if (!trimmedInput) return;
 

const newMessages = [...messages, { sender: 'user', text: trimmedInput }];
if (trimmedInput.toLowerCase() === 'quit') {
newMessages.push({ sender: 'bot', text: "Goodbye! Talk later." });
} else {
const response = getResponse(trimmedInput);
newMessages.push({ sender: 'bot', text: response });
}
 

setMessages(newMessages);
setUserInput('');
};

useEffect(() => {
endOfChatRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [messages]);
 

return (

<div style={{ maxWidth: '500px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
    <Navbar/>
<h2>ChatBot</h2>
<div style={{
border: '1px solid #ccc',
padding: '10px',
height: '300px',
overflowY: 'auto',
marginBottom: '10px',
borderRadius: '5px',
backgroundColor: '#f9f9f9'
}}>
{messages.map((msg, index) => (
<div key={index} style={{
textAlign: msg.sender === 'user' ? 'right' : 'left',
margin: '5px 0'
}}>
<strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
</div>
))}
<div ref={endOfChatRef} />
</div>
<form onSubmit={handleSubmit} style={{ display: 'flex' }}>
<input
type="text"
value={userInput}
onChange={(e) => setUserInput(e.target.value)}
placeholder="Type your message..."
style={{ flex: 1, padding: '8px' }}
/>
<button type="submit" style={{ padding: '8px 16px' }}>Send</button>
</form>
</div>
);
};
 

export default Test;
