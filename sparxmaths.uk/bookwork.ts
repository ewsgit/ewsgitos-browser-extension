/*
  remove the atrocity that is the sparxmaths bookwork check
*/

document.body.style.background = "red";

console.log("Settings ");

let value = "test";

chrome.runtime.sendMessage({ a: "bad" }, res => {
  console.log(res);
});

// chrome.storage.sync.set({ key: value }).then(() => {
//   console.log("Value is set to " + value);
// });

// chrome.storage.sync.get(["key"]).then(result => {
//   console.log("Value currently is " + result.key);
// });
