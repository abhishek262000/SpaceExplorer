
function valid(){
    
     
    var name1 = document.getElementById("uname").value;
var title1 = document.f123.optitle.value;
var desc1 = document.getElementById("desc").value;
document.getElementById("myDIV").style.visibility = "hidden";
var no =Math.random()*5;
/*var name1 = "Abhi";
var title1 = "Mars";
var desc1 = "red planet";
*/

    var x1 = document.createElement("IMG");
    x1.setAttribute("src", "./images/ast1.png");
    x1.setAttribute("width", "330");
    x1.setAttribute("height", "200");
    x1.setAttribute("class", "img2");
    


    var x = document.createElement("ARTICLE");
    x.setAttribute("id", "my"+no);
    document.getElementById("home1").appendChild(x);
    document.getElementById("my"+no).appendChild(x1);

    var heading = document.createElement("H2");
    heading.setAttribute("id", "myhead"+no);
    heading.innerHTML=title1;
    document.getElementById("my"+no).appendChild(heading);

    var x3 = document.createElement("SPAN");
    x3.setAttribute("class", "own");
    x3.innerHTML=" Shared by "+name1;
    document.getElementById("myhead"+no).appendChild(x3);
   

    var para = document.createElement("P");
    para.innerHTML=desc1; 
    document.getElementById("my"+no).appendChild(para);

//document.getElementsByTagName("ARTICLE")[0].setAttribute("id", "democlass");
//document.getElementById("home").appendChild(p1);
}
