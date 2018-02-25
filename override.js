document.getElementById("bub3").addEventListener("click", quote);
function quote() {
    var arr = ["You've got this!", "You gonna ace today!", "Make the most of your 86,400!!"];
    var num = Math.floor((arr.length)*Math.random());
    var hey = arr[num];
    document.getElementById("bub3").innerHTML = hey;
}
(function () {
    var params = {
        // Request parameters
    };
    $.ajax({
        url: "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment?" + $.param(params),
        beforeSend: function (xhrObj) {
            // Request headers
            xhrObj.setRequestHeader("Content-Type", "application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "{subscription key}");
        },
        type: "POST",
        // Request body
        data: {
            "documents": [
                {
                    "language": "en",
                    "id": 1,
                    "text": browser.innerHTML
                }
            ]
        }

    })
        .done(function (data) {
            console.log(browser.innerHTML);
            alert("success");
        })
        .fail(function () {
            alert("error");
        });
});