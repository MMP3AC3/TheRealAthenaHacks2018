document.getElementById("Respond").addEventListener("click", print);
function print(){
    //document.getElementById("chatWindow").innerHTML = "HELLO!";
    var text = document.getElementById("myType").value;
    var previous = document.getElementById("chatWindow").innerHTML;
    document.getElementById("chatWindow").innerHTML =  previous+"\r\n"+text;
    //document.getElementById("chatWindow").innerHTML +
}