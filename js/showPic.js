function showPic(which) {
    var source=which.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);

    var text=which.getAttribute("title");
    var des=document.getElementById("description");
    des.firstChild.nodeValue="nihao";
}
function countBodyChildren(){
    var body_element=document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length)
}
// window.onload=countBodyChildren;