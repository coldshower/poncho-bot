export const scrollToBottom = () => {
  const chatBox = document.getElementById('chatbox');
  chatBox.scrollTop = chatBox.scrollHeight;
}