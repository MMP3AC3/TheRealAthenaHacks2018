document.getElementById("Respond").addEventListener("click", print);
function print(){
    var text = document.getElementById("myType").value;
    var previous = document.getElementById("chatWindow").innerHTML;
    document.getElementById("chatWindow").innerHTML =  previous+"<br />"+text;
        $(function () {
            doc = JSON.stringify({
                "documents": [
                    {
                        "language": 'en',
                        "id": '1',
                        "text": myType.value
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
                    console.log(myType.value);
                    //alert("success");
                    console.log(data["documents"][0]["score"]);
                    var inputNum = data["documents"][0]["score"];
                    if (inputNum < .40 && inputNum > .05) {
                        document.getElementById("chatWindow").innerHTML = "You seem sad, remember to keep your chin up and  believe in yourself!";
                    } else if (inputNum < .05) {
                        document.getElementById("chatWindow").innerHTML = "I'm worried about you, if you need to talk to someone here are some numbers you can call. Follow this link:https://suicidepreventionlifeline.org/";
                    } else if (inputNum > .40) {
                        document.getElementById("chatWindow").innerHTML = "I'm glad you feel good! Click on this link:https://www.ecosia.org/images?q=pugs";
                    }
                })
                .fail(function () {
                    //alert("error");
                });
        });
    }
