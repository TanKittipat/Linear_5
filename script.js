let queue = [];
const maxQueueSize = 7;

document.getElementById("enqueueBtn").addEventListener("click", () => {
  const customerName = document.getElementById("customerName").value;
  if (queue.length < maxQueueSize) {
    if (customerName) {
      queue.push(customerName);
      document.getElementById("customerName").value = ""; // Clear the input
      updateQueueDisplay();
    }
  } else {
    alert("Queue is Full");
  }
});

document.getElementById("dequeueBtn").addEventListener("click", () => {
  if (queue.length > 0) {
    alert("Next customer: " + queue.shift());
    updateQueueDisplay();
  } else {
    alert("No more customers in the queue.");
  }
});

document.getElementById("cls").addEventListener("click", () => {
  if (queue.length > 0) {
    queue.length = 0;
    alert("Queue Cleared!!!");
    updateQueueDisplay();
  } else {
    alert("No more customers in the queue.");
  }
});

function updateQueueDisplay() {
  const queueList = document.getElementById("queueList");
  queueList.innerHTML =
    "<h3>Queue : " + queue.length + " / " + maxQueueSize + "</h3>";
  queue.forEach((customer, index) => {
    queueList.innerHTML += `<p>${index + 1}. ${customer}</p>`;
  });
}
