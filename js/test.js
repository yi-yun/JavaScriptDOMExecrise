window.onload=prearelink
function popUp(url) {
    window.open(url,"popUp","wigth=320,height=480");
}
function prearelink(params) {
    var links=document.getElementsByTagName("a");
    for (var i=0;i<links.length;i++){
        if(links[i].getAttribute("class")=="popUp"){
            links[i].onclick=function () {
                popUp(this.getAttribute("href"));
                return false;   
            }
        }
    }
}