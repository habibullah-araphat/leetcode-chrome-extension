let removeDifficultyBtn = document.getElementById('removeDifficulty');

chrome.storage.local.get('removeDifficulty', function(data) {
    let buttonText = "";
    let scriptName = "";
    if(data.removeDifficulty==true){
        buttonText = "Show";
        scriptName = "remove.js";
    }else{
        buttonText = "Hide";
        scriptName = "show.js";
    }
    removeDifficultyBtn.textContent = buttonText;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: scriptName});
    });
});
removeDifficultyBtn.onclick = function(element) {
    chrome.storage.local.get('removeDifficulty', function(data) {
        let buttonText = "";
        let scriptName = "";
        data.removeDifficulty = !data.removeDifficulty;
        if(data.removeDifficulty==true){
            buttonText = "Show";
            scriptName = "remove.js";
        }else{
            buttonText = "Hide";
            scriptName = "show.js";
        }
        removeDifficultyBtn.textContent = buttonText;
        chrome.storage.local.set({removeDifficulty: data.removeDifficulty}, function() {
            console.log('Next button val: '+buttonText);
        });
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                {file: scriptName});
        });
    });

};