// Define the bot's responses to certain keywords or phrases
const responses = {
"hello": "Hi there!",
"how are you": "I'm doing well, thank you. How about you?",
"what is your name": "My name is SODI the bot. What's yours?",
"what is the weather like today": "I'm sorry, I don't have access to live weather data.",
"what Can you do": " I Can answer question, provide information on variety of topics, and even tell jokes if you'd like.",
"what is the capital of Ghana": "Accra",
"how do i reset my password": " To reset your password, go to your account settings and look for the option to change your password. If you're having trouble,please contact our support team for assistance. ",
"what is the meaning of life":"That's a philosophical question that people have been asking for centuries. Some believe that the meaning of life is to find happiness, while others believe it's to fulfill a certain purpose or destiny. Ultimately, the meaning of life is a personal and subjective concept that varies from person to person.",
"what is the difference between HTML and CSS":"HTML is used to create the structure of a webpage, while CSS is used to style and format the content of a webpage.",
"how do i create a website":"To create a website, you'll need to first choose a domain name and hosting provider. Then, you can use a website builder or coding language like HTML, CSS, and JavaScript to create the website's design and functionality.",
"what is the difference between a frontend developer and a backend developer":"A frontend developer is responsible for creating the user interface and user experience of a website or web application, while a backend developer is responsible for creating and maintaining the server-side functionality and database management of a website or web application",
"how do i create a chatbot": "To create a chatbot, you'll need to first choose a platform and programming language, such as Facebook Messenger and JavaScript or Slack and Python. Then, you can use a chatbot development platform or coding language to create the chatbot's functionality and responses.",
"what time is it": new 
Date().toLocaleTimeString(), 
"default": "I'm sorry, I don't understand. Can you please rephrase your question?"
};

// Get the chatbox elements
const conversation = document.getElementById("conversation");
const input = document.getElementById("input");

// Function to send a message
function sendMessage() {
// Get the user's message
const message = input.value;
// Create a new message element and append it to the conversation area
const userMessage = document.createElement("div");
userMessage.classList.add("message", "user-message");
userMessage.textContent = message;
conversation.appendChild(userMessage);
// Clear the input area
input.value = "";
// Get the bot's response and create a new message element for it
const botMessage = document.createElement("div");
botMessage.classList.add("message", "bot-message");
botMessage.textContent = getBotResponse(message.toLowerCase());
conversation.appendChild(botMessage);
// Scroll to the bottom of the conversation area
conversation.scrollTop = conversation.scrollHeight;
}

// Function to clear the conversation area
function clearConversation() {
conversation.innerHTML = "";
}

// Function to get the bot's response to a message
function getBotResponse(message) {
// Check if the message matches any keywords or phrases in the responses object
for (let key in responses) {
  if (message.includes(key)) {
   // Return the bot's response for that keyword or phrase
   return responses[key];
  }
}
// If no match is found, return the default response
return responses["default"];
}

