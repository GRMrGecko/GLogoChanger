var MGMLogoURLs;
var MGMLogosText;
var MGMCustomHome;
var MGMCustomSearch;
var MGMLoadedInfo = false;

console.log("hello");

function fourthJuly10(element) {
	var parent = element.parentNode;
	parent.removeChild(element);
	var style = document.createElement("style");
	style.innerHTML = "#doodle{width:530px;height:175px;background:url(http://www.google.com/logos/goldberg10-hp-bg.png) top left no-repeat;position:relative;cursor:pointer;}#doodle div{position:absolute;background-image:url(http://www.google.com/logos/goldberg10-hp-sprite.png);}";
	parent.insertBefore(style,null);
	var doodle = document.createElement("div");
	doodle.id = "doodle";
	doodle.setAttribute("onclick", "google.July4FW.goldberg(event)");
	parent.insertBefore(doodle,null);
	var script = document.createElement("script");
	script.innerHTML = "(function(){var d=true; try{if(!google.July4FW)google.July4FW={};var f,i,j,k,l,m,n=0,o=false,p=[],q,r=[[0],[87,114,34,40],[92,49,82,105],[92,49,82,107],[93,47,81,114],[100,136,40,26],[100,136,40,26],[144,68,37,61],[153,56,37,49],[158,42,42,50],[168,27,39,53],[179,14,47,54],[183,0,47,68],[194,0,105,109],[204,0,105,122],[217,0,93,123],[222,45,89,80],[220,50,91,70],[214,55,84,53],[251,80,45,29],[251,81,41,29],[252,81,37,29],[252,89,11,21],[252,89,11,21],[251,82,61,38],[251,82,61,42],[251,84,79,45],[272,86,37,32],[280,90,36, 34],[288,95,35,33],[294,100,38,31],[303,102,38,34],[313,107,37,34],[319,7,88,158],[312,7,95,157],[312,8,95,155],[312,8,142,159],[312,8,144,163],[314,12,155,161],[307,6,164,168],[304,0,167,174],[302,0,169,174],[302,19,163,156],[316,19,149,156],[323,19,142,156],[319,19,146,156],[400,19,65,107],[400,19,65,98],[400,19,65,98],[417,82,42,64],[419,83,42,63],[419,83,44,64],[420,85,46,59],[0],[0],[0],[463,79,15,28],[463,76,16,31],[464,74,15,30],[464,71,16,31],[465,68,15,31],[465,65,16,31],[466,63,15,30],[466, 60,16,31],[467,57,16,31],[468,56,15,29],[461,56,22,72],[461,55,22,73],[464,54,19,77],[467,54,16,77],[468,54,15,77],[0],[470,88,25,66],[0],[469,97,24,59],[466,102,26,54],[466,64,36,92],[476,19,34,113],[484,0,28,87],[492,0,20,41]],s=r.length,t,u,v=-1,w=-1,x;google.July4FW.init=function(){if(!x&&window.location.href.indexOf(\"#\")==-1){x=d;f=document.createElement(\"img\");i=document.createElement(\"img\");f.src=\"/logos/goldberg10-hp-stars.png\";i.src=\"/logos/goldberg10-hp-sprite.png\";if(j=document.getElementById(\"doodle\")){y(); window.setTimeout(function(){document.f&&document.f.q&&document.f.q.value==\"\"&&j&&j.childNodes.length<= 2&&google.July4FW.goldberg()},5E3);google.j&&google.j.en&&z()}else o=d}};var z=function(){if(!google.rein||!google.dstr)window.setTimeout(z,50);else if(!google.July4FW.jesr){google.July4FW.jesr=d;google.rein&&google.rein.push(google.July4FW.init);google.dstr&&google.dstr.push(function(){o=d;google.unlisten(document,\"click\",A)})}},A=function(){o||(o=d)},D=function(){google.listen(document,\"click\", A);if(k=document.getElementById(\"lga\")){q=google.style.getPageOffsetTop(k)+k.offsetHeight+10;B(2E3);C()}},B=function(b){if(!(o||b<= 0)){var e=google.style.getPageOffsetLeft(j)+50,a=j.offsetWidth-100,h=e+a/2,c=document.createElement(\"div\"),g=document.createElement(\"img\");g.src=f.src;c.appendChild(g);c.src=f.src;c.style.zIndex=12+s+p.length;c.style.position=\"absolute\";c.style.overflow=\"hidden\";c.style.top=\"25px\";c.top=25;c.height=c.width=g.height=10;g.width=30;g.style.position=\"absolute\";g.style.top= 0;g.starColor=n;g.style.left=0-c.width*n+\"px\";if(++n>2)n=0;c.left=e+Math.floor(Math.random()*(a+1));c.style.left=c.left-c.width/2+\"px\";c.vy=1;c.vx=3*(c.left-h)/j.offsetWidth;p.push(c);k.appendChild(c);window.setTimeout(function(){B(b-30)},30)}},C=function(){var b=p;p=[];for(var e=0;e< b.length;++e){var a=b[e],h=a.firstChild;a.top+=a.vy;a.vy+=0.6;a.left+=a.vx;if(a.height< 30){a.height+=1;a.width+=1}a.style.left=a.left-a.width/2+\"px\";a.style.top=a.top+\"px\";if(a.top+30>=q||a.left+30>=(typeof window.innerWidth== \"number\"?window.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth)||a.left< 0)a.parentNode.removeChild(a);else{if(a.top+30>q-50&&a.height>5){a.height-=5;a.width-=5}p.push(a)}a.style.height=a.height+\"px\";a.style.width=a.width+\"px\";h.height=a.height;h.width=3*a.width;h.style.left=0-a.width*h.starColor+\"px\"}if(p.length>0)window.setTimeout(C,20);else o=d},E=function(b,e,a,h,c,g){b.style.left=e+\"px\";b.style.top=a+\"px\"; b.style.width=h+\"px\";b.style.height=c+\"px\";b.style.zIndex=g},y=function(){for(;j.childNodes.length>0;)j.removeChild(j.firstChild);m=document.createElement(\"div\");E(m,\"0\",\"0\",\"85\",\"135\",10);m.style.backgroundPosition=\"-1620px -34px\";j.appendChild(m);l=document.createElement(\"div\");E(l,\"15\",\"50\",\"70\",\"70\",11);l.style.backgroundPosition=\"-3682px -104px\";l.opacity=100;j.appendChild(l);F(0)},F=function(b){if(b>15)b=0;var e=b< 9?b:16-b;l.style.backgroundPosition=-3682-e*70+\"px -104px\";w=window.setTimeout(function(){F(b+ 1)},40)},G=function(){if(l.opacity>0){l.opacity-=20;l.style.opacity=l.opacity/100;l.style.filter=\"alpha(opacity=\"+l.opacity+\")\";w=window.setTimeout(G,40)}},H=function(){var b=r[u];if(b[0]){var e=document.createElement(\"div\");E(e,b[0],b[1],b[2],b[3],u+10+2+2);e.style.backgroundPosition=t+\"px 0\";j.appendChild(e);t-=b[2]}if(++u==s){window.clearTimeout(v);window.setTimeout(D,500)}};google.July4FW.goldberg=function(b){window.clearTimeout(v);window.clearTimeout(w);v=w=-1;t=u=0;o=false;v=window.setInterval(H,50);l.style.backgroundPosition=\"-4312px -104px\";G()}}catch(I){google.ml(I,false,{_sn:\"4TH\"})};})();google.July4FW.init()";
	parent.insertBefore(script,null);
}

function handleHomeBeforeLoad(event) {
	var element = event.target;
	if (!MGMLoadedInfo) {
		MGMLogoURLs = safari.self.tab.canLoad(event, {name: "getLogos", data: ""});
		MGMLogosText = safari.self.tab.canLoad(event, {name: "getLogosText", data: ""});
		MGMCustomHome = safari.self.tab.canLoad(event, {name: "getSetting", data: "homeLogo"});
		MGMCustomSearch = safari.self.tab.canLoad(event, {name: "getSetting", data: "searchLogo"});
		MGMLoadedInfo = true;
	}
	
	if (element.id=="logo") {
		if (element.getAttribute("MGMChanged"))
			return;
		element.removeAttribute("onload", 0);
		if (MGMCustomHome==null || MGMCustomHome=="") {
			var logoNum = Math.floor(Math.random()*MGMLogoURLs.length);
			var logo = MGMLogoURLs[logoNum];
			element.src = logo;
			var parent = element.parentNode;
			parent.removeChild(parent.children[1]);
			parent.removeChild(parent.children[1]);
			if (logoNum==757) {
				element.setAttribute("onclick","(function(){var f=document.getElementById('fall'),h=0,v=1,y='63px';window.newton&&clearTimeout(window.newton);if(f.style.bottom==y){window.newton=setInterval(function(){if(f){var r=parseInt(f.style.right)+h,b=parseInt(f.style.bottom)-v;f.style.right=r+'px';f.style.bottom=b+'px';if(b>-160){v+=2}else{if(v>9){h=v*0.1;v*=-0.3}else{h=v=0;}}}},25)}else{f.style.bottom=y;f.style.right='244px';}})()");
				var apple = document.createElement("img");
				apple.id = "fall";
				apple.src = "http://www.google.com/logos/newton10-apple.png";
				apple.style.position = "relative"
				apple.style.bottom = "63px"
				apple.style.right = "244px";
				parent.insertBefore(apple,null);
			} else if (logoNum==909) {
				fourthJuly10(element);
			}
			var title = document.createElement("div");
			title.innerHTML = MGMLogosText[logoNum];
			title.style.fontSize = "10px";
			parent.insertBefore(title,null);
		} else {
			element.src = MGMCustomHome;
		}
		element.removeAttribute("width", 0);
		element.removeAttribute("height", 0);
		element.setAttribute("MGMChanged", true);
	} else if (element.src=="https://www.google.com/images/logos/ssl_logo_lg.gif") {
		if (element.getAttribute("MGMChanged"))
			return;
		if (MGMCustomHome==null || MGMCustomHome=="") {
			var logoNum = Math.floor(Math.random()*MGMLogoURLs.length);
			var logo = MGMLogoURLs[logoNum];
			element.src = logo;
			var parent = element.parentNode;
			parent.removeChild(parent.children[1]);
			parent.removeChild(parent.children[1]);
			if (logoNum==757) {
				element.setAttribute("onclick","(function(){var f=document.getElementById('fall'),h=0,v=1,y='48px';window.newton&&clearTimeout(window.newton);if(f.style.bottom==y){window.newton=setInterval(function(){if(f){var r=parseInt(f.style.right)+h,b=parseInt(f.style.bottom)-v;f.style.right=r+'px';f.style.bottom=b+'px';if(b>-170){v+=2}else{if(v>9){h=v*0.1;v*=-0.3}else{h=v=0;}}}},25)}else{f.style.bottom=y;f.style.right='244px';}})()");
				var apple = document.createElement("img");
				apple.id = "fall";
				apple.src = "http://www.google.com/logos/newton10-apple.png";
				apple.style.position = "relative"
				apple.style.bottom = "48px"
				apple.style.right = "244px";
				console.log(element.parentNode);
				element.parentNode.insertBefore(apple,null);
			} else if (logoNum==909) {
				fourthJuly10(element);
			}
			var title = document.createElement("div");
			title.innerHTML = MGMLogosText[logoNum];
			title.style.fontSize = "10px";
			parent.insertBefore(title,null);
		} else {
			element.src = MGMCustomHome;
		}
		element.removeAttribute("width", 0);
		element.removeAttribute("height", 0);
		element.setAttribute("MGMChanged", true);
	}
}
function handleSearchBeforeLoad(event) {
	var element = event.target;
	if (!MGMLoadedInfo) {
		MGMLogoURLs = safari.self.tab.canLoad(event, {name: "getLogos", data: ""});
		MGMLogosText = safari.self.tab.canLoad(event, {name: "getLogosText", data: ""});
		MGMCustomHome = safari.self.tab.canLoad(event, {name: "getSetting", data: "homeLogo"});
		MGMCustomSearch = safari.self.tab.canLoad(event, {name: "getSetting", data: "searchLogo"});
		MGMLoadedInfo = true;
	}
	
	if (element.src.match("nav_logo") && element.width==167) {
		if (element.getAttribute("MGMChanged"))
			return;
		var parent = element.parentNode;
		if (MGMCustomSearch==null || MGMCustomSearch=="") {
			var logoNum = Math.floor(Math.random()*MGMLogoURLs.length);
			element.src = MGMLogoURLs[logoNum];
		} else {
			element.src = MGMCustomSearch;
		}	
		parent.innerHTML = "";
		parent.insertBefore(element,null);
		element.style.top = "0px";
		element.width = "137";
		element.height = "49";
		element.setAttribute("MGMChanged", true);
	} else if (element.src.match("ssl_logo_beta")) {
		if (element.getAttribute("MGMChanged"))
			return;
		if (MGMCustomSearch==null || MGMCustomSearch=="") {
			var logoNum = Math.floor(Math.random()*MGMLogoURLs.length);
			element.src = MGMLogoURLs[logoNum];
		} else {
			element.src = MGMCustomSearch;
		}
		element.width = "137";
		element.height = "49";
		element.setAttribute("MGMChanged", true);
	}
}

function setupCom() {
	if (window.location.pathname=="/") {
		document.addEventListener("beforeload", handleHomeBeforeLoad, true);
	} else {
		var query = window.location.search;
		query = query.substr(1, query.length-1);
		query = query.split("&");
		for (i=0; i<query.length; i++) {
			var pram = query[i].split("=");
			if (pram[0]=="q") {
				document.addEventListener("beforeload", handleSearchBeforeLoad, true);
				break;
			}
		}
	}
}
function setupDiv() {
	var lga = document.getElementById("lga");
	lga.innerHTML = "lga";
	var element = document.createElement("img");
	element.border = 0;
	if (MGMCustomHome==null || MGMCustomHome=="") {
		var logoNum = Math.floor(Math.random()*MGMLogoURLs.length);
		var logo = MGMLogoURLs[logoNum];
		element.src = logo;
		var parent = element.parentNode;
		parent.removeChild(parent.children[1]);
		parent.removeChild(parent.children[1]);
		if (logoNum==757) {
			element.setAttribute("onclick","(function(){var f=document.getElementById('fall'),h=0,v=1,y='63px';window.newton&&clearTimeout(window.newton);if(f.style.bottom==y){window.newton=setInterval(function(){if(f){var r=parseInt(f.style.right)+h,b=parseInt(f.style.bottom)-v;f.style.right=r+'px';f.style.bottom=b+'px';if(b>-160){v+=2}else{if(v>9){h=v*0.1;v*=-0.3}else{h=v=0;}}}},25)}else{f.style.bottom=y;f.style.right='244px';}})()");
			var apple = document.createElement("img");
			apple.id = "fall";
			apple.src = "http://www.google.com/logos/newton10-apple.png";
			apple.style.position = "relative"
			apple.style.bottom = "63px"
			apple.style.right = "244px";
			parent.insertBefore(apple,null);
		} else if (logoNum==909) {
			fourthJuly10(element);
		}
		var title = document.createElement("div");
		title.innerHTML = MGMLogosText[logoNum];
		title.style.fontSize = "10px";
		parent.insertBefore(title,null);
	} else {
		element.src = MGMCustomHome;
	}
}

var host = window.location.host;
console.log(host);
if (host.match(".com")){
	console.log("setup com");
	setupCom();
} else if (host.match(".be")) {
	console.log("setup be");
	setupDiv();
}