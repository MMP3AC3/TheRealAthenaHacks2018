document.getElementById("bub3").addEventListener("click", quote);
function quote() {
    var arr = ["You've got this!", 
    "You gonna ace today!", 
    "Make the most of your 86,400!!", 
    "You're Beautiful!!",
    "Just be confident!",
    "Don't be afraid to be a badass!",
    ];
    var num = Math.floor((arr.length)*Math.random());
    var hey = arr[num];
    document.getElementById("bub3").innerHTML = hey;
}
document.getElementById("mag").addEventListener("click", mag);
function mag(){
    $(function () {
        doc = JSON.stringify({
            "documents": [
                {
                    "language": 'en',
                    "id": '1',
                    "text": browse.value
                }
            ]


        })
        $.ajax({

            url: "https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment",
            beforeSend: function (xhrObj) {
                // Request headers
                xhrObj.setRequestHeader("Content-Type", "application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "8f7f16b82fd34fe4989932215f62c821");
            },
            type: "POST",
            // Request body
            // data:"{body}",
            data: doc

        })
            .done(function (data) {
                console.log(browse.value);
                //alert("success");
                console.log(data["documents"][0]["score"]);
                var inputNum = data["documents"][0]["score"];
                if(inputNum <.40&&inputNum>.01){
                    document.getElementById("browse").value = "You should look at the chat bot!";
                }
                else if (inputNum < .01) {
                    window.open("https://suicidepreventionlifeline.org/");
                    document.getElementById("browse").value = "You should look at the chat bot!";
                }
                else{
                    document.getElementById("happy").innerHTML = "I'm glad you feel good! Click on this link:https://www.youtube.com/watch?v=y6Sxv-sUYtM";
                
                }
            })
            .fail(function () {
                //alert("error");
            });
    });
    var result = document.getElementById("browse").value;
    console.log(result);
    var gSearch = "https://www.google.com/search?q=" + result;
    window.open(gSearch, '_blank');
    chrome.tabs.create("popup.html");
    
}