let queue = [];

document.getElementById("enqueueBtn").addEventListener("click", () => {
  const customerName = document.getElementById("customerName").value;
  if (customerName) {
    queue.push(customerName);
    document.getElementById("customerName").value = ""; // Clear the input
    updateQueueDisplay();
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

function updateQueueDisplay() {
  const queueList = document.getElementById("queueList");
  queueList.innerHTML = "<h3>Queue</h3>";
  queue.forEach((customer, index) => {
    queueList.innerHTML += `<p>${index + 1}. ${customer}</p>`;
  });
}
