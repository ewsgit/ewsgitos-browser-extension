chrome.runtime.onInstalled.addListener(() => {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(sender?.tab?.url);
  });
  // chrome.storage.sync.set({ key: value }).then(() => {
  //   console.log("Value is set to " + value);
  // });

  // chrome.storage.sync.get(["key"]).then(result => {
  //   console.log("Value currently is " + result.key);
  // });
});
