function showPic(which) {
    var source=which.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);

    var text1=which.getAttribute("title");
    // alert(text1);
    var des=document.getElementById("description");
    des.firstChild.nodeValue=text1;
}
function countBodyChildren(){
    var body_element=document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length)
}
function prepareGallery() {
    alert("tets")
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    var image = document.getElementById("imageGallery");
    if (!image) return false;
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++){
        links[i].onclick=function () {
            showPic(this);
            return false;
        }
    }
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload=func
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);
