import { generateContent } from "./googleGenerativeAI.js"; // Update path as needed

document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-button');
    const userInput = document.getElementById('user-input');
    const chatOutput = document.getElementById('chat-output');

    sendButton.addEventListener('click', async () => {
        const message = userInput.value.trim();
        if (message) {
            appendMessage('User', message);
            userInput.value = '';
 

            // Generate a response from the chatbot
            const result = await generateContent(`Give me the response in 2-3 sentences: ${message}`);

            // Extract the response text from the result
            const responseText = result && result.candidates && result.candidates.length > 0
                ? result.candidates[0].content.parts[0].text
                : 'Error fetching response';

      

            // Update the UI with the chatbot's response
            appendMessage('Bot', responseText);
        }
    });

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.className = `${sender.toLowerCase()}-message`;
        messageElement.textContent = `${sender}: ${message}`;
        chatOutput.appendChild(messageElement);
        chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to the bottom
    }
});
