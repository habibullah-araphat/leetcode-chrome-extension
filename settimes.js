var refreshIntervalId = setInterval(function(){
    chrome.storage.local.get('removeDifficulty', function(data) {
        let scriptName = "";
        if(data.removeDifficulty==undefined){
            data.removeDifficulty = true;
        }
        data.removeDifficulty = data.removeDifficulty;
        if(data.removeDifficulty==true){
            var diffDivRemove = document.querySelector("div[diff]");
            diffDivRemove.style.visibility = "hidden";
        }else{
            var diffDivShow = document.querySelector("div[diff]");
            diffDivShow.style.visibility = "visible";
        }
    });
}, 500);

// setTimeout(function(){ 
//     clearInterval(refreshIntervalId);
// }, 10000);