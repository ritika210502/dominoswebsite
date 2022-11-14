var getorder = document.getElementsByClassName('order');
var len=getorder.length;
var ordername=new Array(len);

for(var j=0;j<=getorder.length;j++){
ordername[j]=document.getElementsByClassName('card-title').innerContent;
console.log(ordername[j]);

//order now javascript
for (var i = 0; i <= len; i++) {
    console.log(getorder);

    getorder[i].addEventListener("click", function () {
        if (prompt("PRESS ANY KEY TO PLACE "+ordername[j]+" ORDER ")) {
            alert("your "+ordername[j]+" order has been placed");
        }
        else {
            alert("your "+ordername[j]+" order has been cancel");
        }

    })
}

}