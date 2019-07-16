console.log('index.js!');

import "./base.css";
import imgObj from "./imgCont.js";



imgObj.init();


var mbody = document.getElementById('mbody');
var mbody1 = document.getElementById('mbody1');
setTimeout(()=>{
	mbody.innerHTML = `<img src="http://51coach.com/xcxcl/images/slchImg/20170331225159498.jpg" />
			<img src="http://51coach.com/xcxcl/images/slchImg/20170331225407309.jpg" />
			<img src="http://51coach.com/xcxcl/images/slchImg/20170331230038789.jpg" />
			<img src="http://51coach.com/xcxcl/images/slchImg/20170331230148374.jpg" />`;
},3000)

setTimeout(()=>{
	var mImg = document.createElement('img');
	mImg.src = 'http://51coach.com/xcxcl/images/slchImg/20170331231704154.jpg';
	
	mbody.appendChild(mImg);
},1000)


