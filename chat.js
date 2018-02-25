function print(){
    document.getElementById("#body").innerHTML = "HELLO!";
    var text = document.getElementById("#myType").value;
    var previous = document.getElementById("#chatWindow").innerHTML;
    document.getElementById("#chatWindow").innerHTML =  previous+"\n"+text;
    //document.getElementById("chatWindow").innerHTML +
}