function showPic(which) {
    var source=which.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    if(!placeholder) return false;
    if(placeholder.nodeName!="IMG") return false;//添加检查
    placeholder.setAttribute("src",source);

    // alert(text1);
    //平稳退化
    var des=document.getElementById("description");
    if(des){
        var text1=which.getAttribute("title")?which.getAttribute("title"):"";
        if(des.firstChild.nodeType==3){
            des.firstChild.nodeValue=text1;
        }
    }
    return true;
}
function countBodyChildren(){
    var body_element=document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length)
}
function prepareGallery() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    var image = document.getElementById("imageGallery");
    if (!image) return false;
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++){
        links[i].onclick=function () {
            // showPic(this);
            // return false;
            return !showPic(this);
        }
        // links[i].onkeypress=links[i].onclick;//决定不添加,按任何键都会切换图片,onclick 可以满足 Tab + Enter 的选择 
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
