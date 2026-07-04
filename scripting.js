var imgstate = 1;
function enlargeimg(obj)
{
	pos=findpos(obj);
	img=new Image;
	img.src=obj.src;
	d=document.getElementById("div3");
	e=document.getElementById("largeimg");
	e.innerHTML='<a style="font-size:20px" href="javascript:closediv();">Close Picture | סגור תמונה</a><img src="' + obj.src + '"><br><a style="font-size:20px" href="javascript:closediv();">Close Picture | סגור תמונה</a>';
	d.style.top=pos[1]-100;
	d.style.display="block";
	x=20+img.width;
	e.style.width=x.toString()+"px";
}
function closediv()
{
	e=document.getElementById("div3");
	e.style.display="none";
}
function findpos(obj) {
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		curleft = obj.offsetLeft
		curtop = obj.offsetTop
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		}
	}
	return [curleft,curtop];
}
var imgstate = 1;
function enlargeimg(obj)
{
	pos=findpos(obj);
	img=new Image;
	img.src=obj.src;
	d=document.getElementById("div3");
	e=document.getElementById("largeimg");
	e.innerHTML='<a style="font-size:20px" href="javascript:closediv();">Close Picture | סגור תמונה</a><img src="' + obj.src + '"><br><a style="font-size:20px" href="javascript:closediv();">Close Picture | סגור תמונה</a>';
	d.style.top=pos[1]-100;
	d.style.display="block";
	x=20+img.width;
	e.style.width=x.toString()+"px";
}
function closediv()
{
	e=document.getElementById("div3");
	e.style.display="none";
}
function findpos(obj) {
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		curleft = obj.offsetLeft
		curtop = obj.offsetTop
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		}
	}
	return [curleft,curtop];
}
