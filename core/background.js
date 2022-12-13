"use strict";
chrome.runtime.onInstalled.addListener(() => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        var _a;
        console.log((_a = sender === null || sender === void 0 ? void 0 : sender.tab) === null || _a === void 0 ? void 0 : _a.url);
    });
    // chrome.storage.sync.set({ key: value }).then(() => {
    //   console.log("Value is set to " + value);
    // });
    // chrome.storage.sync.get(["key"]).then(result => {
    //   console.log("Value currently is " + result.key);
    // });
});
