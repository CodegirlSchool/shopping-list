const sendInput = document.querySelector("input");
const elementsContainer = document.querySelector(".items");

sendInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    const messageText = sendInput.value;
    const newMessage = document.createElement("div");

    newMessage.classList.add("items");

    newMessage.textContent = messageText;

    newMessage.addEventListener("click", function () {
      newMessage.classList.toggle("done");
    });

    if (messageText != "") {
      elementsContainer.append(newMessage);
    }

    sendInput.value = "";
  }
});
