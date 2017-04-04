function addItem()
{
  var input = document.getElementById("newItem").value;
  var list = document.getElementById("listDisplay");
  var item = document.getElementById("li");
  //This creates a new list item element for the document object model (DOM)
  var itemName = document.createTextNode(input);
  //This creates plain text element from the value of the variable input to put in the DOM
  item.appendChild(itemName);
  //This puts that plain text element as the innerHTML (child)
  list.appendChild(item);
  //This puts the li element (item) inside the ul in the document (list) so it can be seen on the screen
  document.getElementById("newItem").value = "";
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
