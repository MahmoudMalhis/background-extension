let button = document.querySelector(".button");
var activeTabId;
button.onclick = function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    activeTabId = activeTab.id;
  });
  console.log(activeTabId);
  chrome.scripting.executeScript({
    target: { tabId: activeTabId },
    files: ["script.js"],
  });
};
