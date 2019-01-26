'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.set({removeDifficulty: true}, function() {
    console.log('Hide problem difficulty activated.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'leetcode.com', schemes: ['https']},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
