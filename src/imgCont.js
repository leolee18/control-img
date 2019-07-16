const imgObj = {
	qsa:null,
	init(){
		var that = this;
		this.ready(function(){
			if(!that.qsa){
				that.qsa = document.querySelectorAll.bind(document);
			}
			var imgs = that.qsa('img');
			for(var i=0;i<imgs.length;i++){
				if(!imgs[i].sh){
					imgs[i].sh = true;
					if(imgs[i].complete){
						that.imgLoad.call(imgs[i],null)
					}else{
						imgs[i].onload = that.imgLoad;
					}
				}
			}
		});
		
		document.addEventListener("DOMSubtreeModified", function(e) {
			if(!that.qsa){
				that.qsa = document.querySelectorAll.bind(document);
			}
			var imgs = that.qsa('img');
			for(var i=0;i<imgs.length;i++){
				if(!imgs[i].sh){
					imgs[i].sh = true;
					imgs[i].onload = that.imgLoad;
				}
			}
		});
	},
	imgLoad(e){
		if(this.onload){
			this.removeEventListener("load",this.onload,true);
		}
		setTimeout(()=>{
			this.style.opacity = 1;
			this.style.transform = 'scale(1,1)';
		},10);
	},
	ready(fn){
		if(document.addEventListener){//兼容非IE  
        document.addEventListener("DOMContentLoaded",mr,false);  
				function mr(){
				    document.removeEventListener("DOMContentLoaded",mr,false);  
				    fn();
				}
    }else if(document.attachEvent){//兼容IE  
       IEContentLoaded (window, fn);
    }
		
		function IEContentLoaded (w, fn) {
        var d = w.document, done = false,
        init = function () {
            if (!done) {
                done = true;
                fn();
            }
        };
        (function () {
            try {
                d.documentElement.doScroll('left');
            } catch (e) {
                setTimeout(arguments.callee, 50);
                return;
            }
            init();
        })();
        d.onreadystatechange = function() {
            if (d.readyState == 'complete') {
                d.onreadystatechange = null;
                init();
            }
        };
    }
	}
}



export default imgObj;