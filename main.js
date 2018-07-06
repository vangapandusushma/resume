function LoadJson(file,callback) {}
var a=new XMLHttpRequest();
a.overrideMimeType("application/json");
a.open("GET",file,true);
a.onreadystatechange=function(){
  if(a.readState==4 && a.status=="200"){
callback(a.responseText);
}
}
a.send();
}
LoadJson("main.json",function(text){
  Jet data=JSON.parse(text);
  console.log(data);
  console.log(data.co);
})
var right=document.getElementById('right');
var career=document.createElement('h4');
career.textContent="Career object:";
career.appendChild(document.createElement("HR"));
function careerobj(careerobj){
  var cop=document.createElement("h4");
  cop.textContent=careerobject;
  career.appendChild(cop);
  right.appendChild(career);
}
Eductional qualifications
var edu=document.createElement("h4");
edu.textContent="educational qualifications:";
edu.appendChild(document.createElement)

}
console.log(a);
}
