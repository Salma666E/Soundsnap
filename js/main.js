var search = document.getElementById("search");
var searchFlag=false;
document.addEventListener("click",function(){
    if(searchFlag){
        search.setAttribute("style","border-color: transparent");
        searchFlag=false;
    }
    else{
        searchFlag=true;
    }
},true);
search.addEventListener("click",function(){
    search.setAttribute("style","border:2px solid green");
    searchFlag=true;
},false);
///////////////////////////////////////////////////////////////////////
var Get_started_link = document.getElementById("liA");
Get_started_link.addEventListener("mouseover",function(){
    Get_started_link.setAttribute("style","color: rgb(35, 158, 127)");
});
Get_started_link.addEventListener("mouseout",function(){
    Get_started_link.setAttribute("style","color: rgb(177, 251, 233)");
});
///////////////////////////////////////////////////////////////////////
var butt_BuySound = document.getElementById("butt");
butt_BuySound.addEventListener("mouseover",function(){
    butt_BuySound.setAttribute("style","background-color: rgb(37, 35, 35)");
});
butt_BuySound.addEventListener("mouseout",function(){
    butt_BuySound.setAttribute("style","background-color: black");
});
//////////////////////////////////////////////////////////////////////
var videos = document.getElementById("vidList");
var vid = document.getElementsByTagName("video");
videos.addEventListener("mouseover",function(event){
    for(var i=0 ;i<vid.length ;i++){
        if(vid[i]==event.target){
            vid[i].play();
            break;
        }
    }
});
videos.addEventListener("mouseout",function(event){
    for(var i=0 ;i<vid.length ;i++){
        if(vid[i]==event.target){
            vid[i].pause();
            break;
        }
    }
});
///////////////////////////////////////////////////////////////////////
var framImg3 = document.getElementById("choosFrams");
var im = document.getElementsByClassName("fullImg");
var old_background;
framImg3.addEventListener("mouseover",function(event){
    for(var i=0 ;i<im.length ;i++){
        if(im[i]==event.target){
            old_background=im[i].style.background;
            im[i].style.background="#D0ECE7";
            im[i].style.color = "green";
            break;
        }
    }
});
framImg3.addEventListener("mouseout",function(event){
    for(var i=0 ;i<im.length ;i++){
        if(im[i]==event.target){
            im[i].style.background= old_background;
            im[i].style.color = "#fff";
            break;
        }
    }
});
///////////////////////////////////////////////////////////////////////
var tab=document.getElementById("tab");
var p = document.getElementsByClassName("p");
tab.addEventListener("click",function(event){
    if(event.target.className=="p")
        for(var i=0 ;i<p.length ;i++){
            if(p[i]==event.target){
                p[i].style.color = "black";
                switch(i){
                    case 0:
                        document.getElementById("hr").style.marginLeft="";
                        document.getElementById("DIV1").style.display="inline-block";
                        document.getElementById("DIV2").style.display="none";
                        document.getElementById("DIV3").style.display="none";
                        break;
                    case 1:
                        if(document.getElementById("hr").style.marginLeft=="" || document.getElementById("hr").style.marginLeft=="170px")
                            document.getElementById("hr").style.marginLeft="90px";
                            document.getElementById("DIV2").style.display="inline-block";
                            document.getElementById("DIV1").style.display="none";
                            document.getElementById("DIV3").style.display="none";
                        break;
                    case 2:
                        if(document.getElementById("hr").style.marginLeft=="90px" || document.getElementById("hr").style.marginLeft=="" )
                            document.getElementById("hr").style.marginLeft="170px";
                            document.getElementById("DIV3").style.display="inline-block";
                            document.getElementById("DIV2").style.display="none";
                            document.getElementById("DIV1").style.display="none";
                        break;
                }
            }
            else
                p[i].style.color = " rgb(192, 189, 189)";
        }
});
///////////////////////////////////////////////////////////////////////
var DIV1 = document.getElementById("DIV1");
var imfull = document.getElementsByClassName("full");
var old_Img;
DIV1.addEventListener("mouseover",function(event){
    for(var i=0 ;i<imfull.length ;i++){
        if(imfull[i]==event.target){
            old_Img=imfull[i].style.backgroundImage;
            imfull[i].style.background="#D0ECE7";
            imfull[i].children[0].style.color = "green";
            break;
        }
    }
});
DIV1.addEventListener("mouseout",function(event){
    for(var i=0 ;i<imfull.length ;i++){
        if(imfull[i]==event.target){
            imfull[i].style.backgroundImage= old_Img;
            imfull[i].children[0].style.color = "#fff";
            break;
        }
    }
});