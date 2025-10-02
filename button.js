var video=  document.getElementById("sample");
var source= document.getElementById("fun");
var top_r= document.getElementById('top_r');
var l=document.getElementById("top");
//seek and hide
top_r.addEventListener('click', reset);
function reset(){
  
  if(l.style.display === 'none'){
  l.style.display= "block";
}
else {
  l.style.display = 'none';
}
};
//user varification
  var button=document.getElementById("top_b");
  button.addEventListener("click", check);
  function check(){
  var user=document.getElementById("username");
  var pass=document.getElementById("pass");
  if(user.value == 'loco' && pass.value == '10')
  {
    window.location.href='main.html';
  }
  else{
    alert("wrong bitch!!");
  }
}
//song name
function cent(){
  source.src="clips/50 cent.mp4";
  video.load();
}

function wave(){
  source.src="clips/Untitled Project.mp4";
  video.load();
}
//download
function download()
{
var s= document.getElementById("resu");
var url = s.value;
var filename=url.split('/').pop();
const a= document.createElement("a");
a.href= url;
a.download= filename;
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
}
//darkmode
function toggle()
{
  var l=document.body.classList;
  l.toggle('theme');
  var Namechg= document.getElementById("hello");
  if(Namechg.innerHTML === "dark_mode")
  {
    Namechg.innerHTML= "white_mode";
  }
 else
  {
    Namechg.innerHTML = "dark_mode";
  }
}
var speed=document.getElementById("speed");
speed.oninput = function () {
video.playbackRate=this.value;}