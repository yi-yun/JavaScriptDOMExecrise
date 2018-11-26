function showPic(which) {
    var source=which.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);

    var text1=which.getAttribute("title");
    alert(text1);
    var des=document.getElementById("description");
    des.firstChild.nodeValue=text1;
}
function countBodyChildren(){
    var body_element=document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length)
}
// window.onload=countBodyChildren;