(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.bridge = function() {
	this.initialize(img.bridge);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.endPizza = function() {
	this.initialize(img.endPizza);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,206);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.pizza = function() {
	this.initialize(img.pizza);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);// helper functions:

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


(lib.text3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3_1, new cjs.Rectangle(0,0,728,90), null);


(lib.text2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2_1, new cjs.Rectangle(0,0,728,90), null);


(lib.text1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1_1, new cjs.Rectangle(0,0,728,90), null);


(lib.rightPizza = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pizza();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rightPizza, new cjs.Rectangle(0,0,728,90), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,728,90), null);


(lib.leftPizza = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pizza();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leftPizza, new cjs.Rectangle(0,0,728,90), null);


(lib.invisible_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.endPizza_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.endPizza();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.endPizza_1, new cjs.Rectangle(0,0,728,90), null);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,728,90), null);


(lib.bridge_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bridge();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bridge_1, new cjs.Rectangle(0,0,728,90), null);


(lib.girl_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_359 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(359).call(this.frame_359).wait(1));

	// rightPizza
	this.instance = new lib.rightPizza();
	this.instance.parent = this;
	this.instance.setTransform(693,48,1,1,0,0,0,515,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({regY:38.4,rotation:20},0).wait(10).to({rotation:40,y:48.1},0).wait(10).to({regY:38.5,rotation:0,y:48},0).wait(10).to({regY:38.4,rotation:20},0).wait(10).to({rotation:40,y:48.1},0).wait(10).to({regY:38.5,rotation:0,y:48},0).wait(10).to({regY:38.4,rotation:20},0).wait(10).to({rotation:40,y:48.1},0).wait(10).to({regY:38.5,rotation:0,y:48},0).wait(10).to({regY:38.4,rotation:20},0).wait(10).to({rotation:40,y:48.1},0).wait(10).to({regY:38.5,rotation:0,y:48},0).wait(10).to({regY:38.4,rotation:20},0).wait(10).to({rotation:40,y:48.1},0).wait(10).to({regY:38.5,rotation:0,y:48},0).wait(10).to({regY:38.4,rotation:20},0).wait(10).to({rotation:40,y:48.1},0).wait(10).to({regY:38.5,rotation:0,y:48},0).wait(10).to({regY:38.4,rotation:20},0).wait(10).to({rotation:40,y:48.1},0).wait(10).to({regY:38.5,rotation:0,y:48},0).wait(10).to({regY:38.4,rotation:20},0).wait(10).to({rotation:40,y:48.1},0).wait(10).to({regY:38.5,rotation:0,y:48},0).wait(10).to({regY:38.4,rotation:20},0).wait(10).to({rotation:40,y:48.1},0).wait(10).to({regY:38.5,rotation:0,y:48},0).wait(10).to({regY:38.4,rotation:20},0).wait(10).to({rotation:40,y:48.1},0).wait(10).to({regY:38.5,rotation:0,y:48},0).wait(10).to({regY:38.4,rotation:20},0).wait(10).to({rotation:40,y:48.1},0).wait(10).to({regY:38.5,rotation:0,y:48},0).wait(10).to({regY:38.4,rotation:20},0).wait(10).to({rotation:40,y:48.1},0).wait(11));

	// leftPizza
	this.instance_1 = new lib.leftPizza();
	this.instance_1.parent = this;
	this.instance_1.setTransform(615,47,1,1,0,0,0,516,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({rotation:20,x:615.1,y:47.1},0).wait(10).to({regX:515.9,rotation:40,x:615,y:47},0).wait(10).to({regX:516,rotation:0},0).wait(10).to({rotation:20,x:615.1,y:47.1},0).wait(10).to({regX:515.9,rotation:40,x:615,y:47},0).wait(10).to({regX:516,rotation:0},0).wait(10).to({rotation:20,x:615.1,y:47.1},0).wait(10).to({regX:515.9,rotation:40,x:615,y:47},0).wait(10).to({regX:516,rotation:0},0).wait(10).to({rotation:20,x:615.1,y:47.1},0).wait(10).to({regX:515.9,rotation:40,x:615,y:47},0).wait(10).to({regX:516,rotation:0},0).wait(10).to({rotation:20,x:615.1,y:47.1},0).wait(10).to({regX:515.9,rotation:40,x:615,y:47},0).wait(10).to({regX:516,rotation:0},0).wait(10).to({rotation:20,x:615.1,y:47.1},0).wait(10).to({regX:515.9,rotation:40,x:615,y:47},0).wait(10).to({regX:516,rotation:0},0).wait(10).to({rotation:20,x:615.1,y:47.1},0).wait(10).to({regX:515.9,rotation:40,x:615,y:47},0).wait(10).to({regX:516,rotation:0},0).wait(10).to({rotation:20,x:615.1,y:47.1},0).wait(10).to({regX:515.9,rotation:40,x:615,y:47},0).wait(10).to({regX:516,rotation:0},0).wait(10).to({rotation:20,x:615.1,y:47.1},0).wait(10).to({regX:515.9,rotation:40,x:615,y:47},0).wait(10).to({regX:516,rotation:0},0).wait(10).to({rotation:20,x:615.1,y:47.1},0).wait(10).to({regX:515.9,rotation:40,x:615,y:47},0).wait(10).to({regX:516,rotation:0},0).wait(10).to({rotation:20,x:615.1,y:47.1},0).wait(10).to({regX:515.9,rotation:40,x:615,y:47},0).wait(10).to({regX:516,rotation:0},0).wait(10).to({rotation:20,x:615.1,y:47.1},0).wait(10).to({regX:515.9,rotation:40,x:615,y:47},0).wait(11));

	// bridge
	this.instance_2 = new lib.bridge_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(463,54,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(360));

	// girl
	this.instance_3 = new lib.girl();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.588,0.588);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,906,121.1);


// stage content:
(lib._012151_2018_GML_PolarPizza_Prospecting_728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//FlashTalking clickTag
		this.clickTag.addEventListener("click", clickThrough);
		
		function clickThrough() {
			myFT.clickTag(1);
		}
	}
	this.frame_366 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(366).call(this.frame_366).wait(1));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.parent = this;
	this.clickTag.setTransform(364,45,1,1,0,0,0,364,45);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(367));

	// cta
	this.instance = new lib.cta_1();
	this.instance.parent = this;
	this.instance.setTransform(377.1,45.1,0.556,0.556,0,0,0,377,45.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(330).to({_off:false},0).to({regY:45,scaleX:1,scaleY:1,x:377,y:45,alpha:1},36,cjs.Ease.elasticOut).wait(1));

	// text3
	this.instance_1 = new lib.text3_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(313).to({_off:false},0).to({alpha:1},36,cjs.Ease.cubicOut).wait(18));

	// text2
	this.instance_2 = new lib.text2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(114.6,-29.4,1,1,-31.9,0,0,113,71);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:1,x:113.1,y:74},50,cjs.Ease.quartIn).to({rotation:0,x:113,y:71},3,cjs.Ease.cubicIn).wait(235).to({alpha:0},25,cjs.Ease.cubicOut).wait(54));

	// text1
	this.instance_3 = new lib.text1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(342,-27,1,1,35.7,0,0,343,31.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({regY:32,rotation:-0.4,x:343.1,y:33.1},50,cjs.Ease.quartIn).to({rotation:0,x:343,y:32},3,cjs.Ease.cubicIn).wait(227).to({alpha:0},25,cjs.Ease.cubicOut).wait(54));

	// endPizza
	this.instance_4 = new lib.endPizza_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(276).to({_off:false},0).to({alpha:1},37,cjs.Ease.quadOut).wait(54));

	// girl
	this.instance_5 = new lib.girl_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(354,51.6,1,1,0,0,0,453,60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(276).to({regX:452.9,regY:60.5,scaleX:0.8,scaleY:0.8,x:393.9,y:41.6,alpha:0},37,cjs.Ease.quadOut).wait(54));

	// logo
	this.instance_6 = new lib.logo_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(48,45,0.422,0.422,0,0,0,48,45);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,alpha:1},58,cjs.Ease.elasticOut).wait(309));

	// back
	this.instance_7 = new lib.back();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(367));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(265,-369.4,906,526.5);
// library properties:
lib.properties = {
	id: '3E3B5D2063EE426AB9CFCF85489663B7',
	width: 728,
	height: 90,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1522266381888", id:"back"},
		{src:"images/bridge.png?1522266381888", id:"bridge"},
		{src:"images/cta.png?1522266381888", id:"cta"},
		{src:"images/endPizza.png?1522266381888", id:"endPizza"},
		{src:"images/girl.png?1522266381888", id:"girl"},
		{src:"images/logo.png?1522266381888", id:"logo"},
		{src:"images/pizza.png?1522266381888", id:"pizza"},
		{src:"images/text1.png?1522266381888", id:"text1"},
		{src:"images/text2.png?1522266381888", id:"text2"},
		{src:"images/text3.png?1522266381888", id:"text3"}
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
an.compositions['3E3B5D2063EE426AB9CFCF85489663B7'] = {
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