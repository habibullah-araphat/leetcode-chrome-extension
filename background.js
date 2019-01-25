'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({removeDifficulty: true}, function() {
    console.log('Hide problem difficulty activated.');
  });
});
