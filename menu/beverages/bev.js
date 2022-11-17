

var getorder = document.getElementsByClassName('order');
//order now javascript
for (var i = 0; i <= getorder.length; i++) {
    console.log(getorder);
    getorder[i].addEventListener("click", function () {
        if (prompt("DO U WANT TO CONTINUE(press any key)")) {
            alert("your order of has been placed");
        }
        else {
            alert("your order has been cancel");
        }

    })
}
