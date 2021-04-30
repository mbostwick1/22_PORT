(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.bridge = function() {
	this.initialize(img.bridge);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.pizza = function() {
	this.initialize(img.pizza);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.PP1 = function() {
	this.initialize(img.PP1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.PP2 = function() {
	this.initialize(img.PP2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text4 = function() {
	this.initialize(img.text4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.text4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text4_1, new cjs.Rectangle(0,0,300,250), null);


(lib.text3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3_1, new cjs.Rectangle(0,0,300,250), null);


(lib.text2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2_1, new cjs.Rectangle(0,0,300,250), null);


(lib.text1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1_1, new cjs.Rectangle(0,0,300,250), null);


(lib.PP2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.PP2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.PP2_1, new cjs.Rectangle(0,0,300,250), null);


(lib.PP1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.PP1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.PP1_1, new cjs.Rectangle(0,0,300,250), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,300,250), null);


(lib.invisible_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.girl_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_378 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(378).call(this.frame_378).wait(1));

	// pizza
	this.instance = new lib.pizza();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({rotation:20,x:50,y:-83.2},0).wait(10).to({rotation:40,x:125.3,y:-144.2},0).wait(10).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:50,y:-83.2},0).wait(10).to({rotation:40,x:125.3,y:-144.2},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:50,y:-83.2},0).wait(10).to({rotation:40,x:125.3,y:-144.2},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:50,y:-83.2},0).wait(10).to({rotation:40,x:125.3,y:-144.2},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:50,y:-83.2},0).wait(10).to({rotation:40,x:125.3,y:-144.2},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:50,y:-83.2},0).wait(10).to({rotation:40,x:125.3,y:-144.2},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:50,y:-83.2},0).wait(10).to({rotation:40,x:125.3,y:-144.2},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:50,y:-83.2},0).wait(10).to({rotation:40,x:125.3,y:-144.2},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:50,y:-83.2},0).wait(10).to({rotation:40,x:125.3,y:-144.2},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:50,y:-83.2},0).wait(10).to({rotation:40,x:125.3,y:-144.2},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:50,y:-83.2},0).wait(10).to({rotation:40,x:125.3,y:-144.2},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:50,y:-83.2},0).wait(10).to({rotation:40,x:125.3,y:-144.2},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:50,y:-83.2},0).wait(10).to({rotation:40,x:125.3,y:-144.2},0).wait(1));

	// bridge
	this.instance_1 = new lib.bridge();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(379));

	// girl
	this.instance_2 = new lib.girl();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(379));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,300,250), null);


// stage content:
(lib._012151_2018_GML_PolarPizza_Prospecting_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//FlashTalking clickTag
		this.clickTag.addEventListener("click", clickThrough);
		
		function clickThrough() {
			myFT.clickTag(1);
		}
	}
	this.frame_352 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(352).call(this.frame_352).wait(1));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.parent = this;
	this.clickTag.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(353));

	// cta
	this.instance = new lib.cta_1();
	this.instance.parent = this;
	this.instance.setTransform(150.2,76.1,0.553,0.553,0,0,0,150.3,76.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(316).to({_off:false},0).to({regX:150,regY:76,scaleX:1,scaleY:1,x:150,y:76,alpha:1},36,cjs.Ease.elasticOut).wait(1));

	// text4
	this.instance_1 = new lib.text4_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(299).to({_off:false},0).to({alpha:1},36,cjs.Ease.cubicOut).wait(18));

	// text3
	this.instance_2 = new lib.text3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(134,-12,1,1,32.5,0,0,134,120);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58).to({_off:false},0).to({rotation:-1.7,x:134.1,y:122},50,cjs.Ease.quartIn).to({rotation:0,x:134,y:120},3,cjs.Ease.quartIn).wait(163).to({alpha:0},25,cjs.Ease.cubicOut).wait(54));

	// text2
	this.instance_3 = new lib.text2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(18.9,-13.9,1,1,-31.7,0,0,18.9,80);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({_off:false},0).to({regX:19,regY:80.1,rotation:1,x:19,y:82.1},50,cjs.Ease.quartIn).to({regY:80,rotation:0,y:80},3,cjs.Ease.quartIn).wait(157).to({alpha:0},25,cjs.Ease.cubicOut).wait(54));

	// text1
	this.instance_4 = new lib.text1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(131,-34,1,1,25.5,0,0,130.5,53.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(72).to({_off:false},0).to({regX:130.6,regY:54,rotation:-0.4,x:131.1,y:56.1},50,cjs.Ease.quartIn).to({regX:130.5,rotation:0,x:131,y:54.1},3,cjs.Ease.quartIn).wait(149).to({alpha:0},25,cjs.Ease.cubicOut).wait(54));

	// logo
	this.instance_5 = new lib.logo_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(43.1,209.1,0.421,0.421,0,0,0,43.1,209);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:43,scaleX:1,scaleY:1,x:43,y:209,alpha:1},58,cjs.Ease.elasticOut).wait(295));

	// girl
	this.instance_6 = new lib.girl_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(397,20.1,1.487,1.487,0,0,0,363.8,44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(58).to({regX:364,regY:45,scaleX:1,scaleY:1,x:364,y:45},67,cjs.Ease.quintOut).wait(149).to({regX:363.9,regY:44.8,scaleX:1.79,scaleY:1.79,x:415,y:62.8,alpha:0},25,cjs.Ease.cubicInOut).wait(54));

	// PP2
	this.instance_7 = new lib.PP2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(337,125,1,1,0,0,0,150,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(274).to({_off:false},0).to({x:150},25,cjs.Ease.cubicInOut).wait(54));

	// PP1
	this.instance_8 = new lib.PP1_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-41,125,1,1,0,0,0,150,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(274).to({_off:false},0).to({x:150},25,cjs.Ease.cubicInOut).wait(54));

	// back
	this.instance_9 = new lib.back();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(353));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,78.3,446.3,371.9);
// library properties:
lib.properties = {
	id: '2223DAE7740E48509D7598A6580DA45F',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1522266328650", id:"back"},
		{src:"images/bridge.png?1522266328650", id:"bridge"},
		{src:"images/cta.png?1522266328650", id:"cta"},
		{src:"images/girl.jpg?1522266328650", id:"girl"},
		{src:"images/logo.png?1522266328650", id:"logo"},
		{src:"images/pizza.png?1522266328650", id:"pizza"},
		{src:"images/PP1.png?1522266328650", id:"PP1"},
		{src:"images/PP2.png?1522266328650", id:"PP2"},
		{src:"images/text1.png?1522266328650", id:"text1"},
		{src:"images/text2.png?1522266328650", id:"text2"},
		{src:"images/text3.png?1522266328650", id:"text3"},
		{src:"images/text4.png?1522266328650", id:"text4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2223DAE7740E48509D7598A6580DA45F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;