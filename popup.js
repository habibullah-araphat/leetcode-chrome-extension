let removeDifficultyBtn = document.getElementById('removeDifficulty');

chrome.storage.sync.get('removeDifficulty', function(data) {
    let buttonText = "";
    if(data.removeDifficulty==true){
        buttonText = "Show";
    }else{
        buttonText = "Hide";
    }
    removeDifficultyBtn.textContent = buttonText;
});