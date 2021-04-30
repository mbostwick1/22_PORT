(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.bridge = function() {
	this.initialize(img.bridge);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.pizza = function() {
	this.initialize(img.pizza);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.PP = function() {
	this.initialize(img.PP);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);// helper functions:

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

}).prototype = getMCSymbolPrototype(lib.text3_1, new cjs.Rectangle(0,0,320,50), null);


(lib.text2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2_1, new cjs.Rectangle(0,0,320,50), null);


(lib.text1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1_1, new cjs.Rectangle(0,0,320,50), null);


(lib.PP_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.PP();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.PP_1, new cjs.Rectangle(0,0,320,50), null);


(lib.pizza_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pizza();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pizza_1, new cjs.Rectangle(0,0,320,50), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,320,50), null);


(lib.invisible_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160,25);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,320,50), null);


(lib.girl_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_348 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(348).call(this.frame_348).wait(1));

	// pizza
	this.instance = new lib.pizza_1();
	this.instance.parent = this;
	this.instance.setTransform(298,25,1,1,0,0,0,298,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({rotation:20},0).wait(10).to({regX:298.1,regY:24.9,rotation:40,x:298.1},0).wait(10).to({regX:298,regY:25,rotation:0,x:298},0).wait(9).to({rotation:20},0).wait(10).to({regX:298.1,regY:24.9,rotation:40,x:298.1},0).wait(11).to({regX:298,regY:25,rotation:0,x:298},0).wait(9).to({rotation:20},0).wait(10).to({regX:298.1,regY:24.9,rotation:40,x:298.1},0).wait(11).to({regX:298,regY:25,rotation:0,x:298},0).wait(9).to({rotation:20},0).wait(10).to({regX:298.1,regY:24.9,rotation:40,x:298.1},0).wait(11).to({regX:298,regY:25,rotation:0,x:298},0).wait(9).to({rotation:20},0).wait(10).to({regX:298.1,regY:24.9,rotation:40,x:298.1},0).wait(11).to({regX:298,regY:25,rotation:0,x:298},0).wait(9).to({rotation:20},0).wait(10).to({regX:298.1,regY:24.9,rotation:40,x:298.1},0).wait(11).to({regX:298,regY:25,rotation:0,x:298},0).wait(9).to({rotation:20},0).wait(10).to({regX:298.1,regY:24.9,rotation:40,x:298.1},0).wait(11).to({regX:298,regY:25,rotation:0,x:298},0).wait(9).to({rotation:20},0).wait(10).to({regX:298.1,regY:24.9,rotation:40,x:298.1},0).wait(11).to({regX:298,regY:25,rotation:0,x:298},0).wait(9).to({rotation:20},0).wait(10).to({regX:298.1,regY:24.9,rotation:40,x:298.1},0).wait(11).to({regX:298,regY:25,rotation:0,x:298},0).wait(9).to({rotation:20},0).wait(10).to({regX:298.1,regY:24.9,rotation:40,x:298.1},0).wait(11).to({regX:298,regY:25,rotation:0,x:298},0).wait(9).to({rotation:20},0).wait(10).to({regX:298.1,regY:24.9,rotation:40,x:298.1},0).wait(11).to({regX:298,regY:25,rotation:0,x:298},0).wait(9).to({rotation:20},0).wait(10).to({regX:298.1,regY:24.9,rotation:40,x:298.1},0).wait(1));

	// bridge
	this.instance_1 = new lib.bridge();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(349));

	// girl
	this.instance_2 = new lib.girl();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(349));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


// stage content:
(lib._012151_2018_GML_PolarPizza_Prospecting_320x50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//FlashTalking clickTag
		this.clickTag.addEventListener("click", clickThrough);
		
		function clickThrough() {
			myFT.clickTag(1);
		}
	}
	this.frame_318 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(318).call(this.frame_318).wait(1));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.parent = this;
	this.clickTag.setTransform(160,25,1,1,0,0,0,160,25);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(319));

	// cta
	this.instance = new lib.cta_1();
	this.instance.parent = this;
	this.instance.setTransform(284.1,25.1,0.556,0.556,0,0,0,284.1,25);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(282).to({_off:false},0).to({regX:284,scaleX:1,scaleY:1,x:284,y:25,alpha:1},36,cjs.Ease.elasticOut).wait(1));

	// text3
	this.instance_1 = new lib.text3_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(265).to({_off:false},0).to({alpha:1},36,cjs.Ease.cubicOut).wait(18));

	// text2
	this.instance_2 = new lib.text2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(65.1,-11.9,1,1,-27.9,0,0,63.9,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:64,rotation:0.7,x:64.1,y:42.1},50,cjs.Ease.quartIn).to({rotation:0,x:64,y:41},3,cjs.Ease.quartIn).wait(187).to({alpha:0},25,cjs.Ease.cubicOut).wait(54));

	// text1
	this.instance_3 = new lib.text1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(205.3,-21.6,1,1,27.2,0,0,205,18);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({regX:205.1,rotation:-0.8,x:205.2,y:19.1},50,cjs.Ease.quartIn).to({regX:205,rotation:0,x:205,y:18},3,cjs.Ease.quartIn).wait(180).to({alpha:0},25,cjs.Ease.cubicOut).wait(54));

	// girl
	this.instance_4 = new lib.girl_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(293,25,1,1,0,0,0,293,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(240).to({regX:292.9,regY:24.9,scaleX:1.7,scaleY:1.7,x:277,y:25.1,alpha:0},25,cjs.Ease.cubicInOut).wait(54));

	// Pizza
	this.instance_5 = new lib.PP_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(160,68,1,1,0,0,0,160,25);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(252).to({_off:false},0).to({y:25},25,cjs.Ease.quintOut).wait(42));

	// logo
	this.instance_6 = new lib.logo_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(29,25,0.423,0.423,0,0,0,29,25.1);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:25,scaleX:1,scaleY:1,alpha:1},58,cjs.Ease.elasticOut).wait(261));

	// back
	this.instance_7 = new lib.back();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(319));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.4,-142.8,330.6,217.9);
// library properties:
lib.properties = {
	id: '19E4B7055C70476499C9F35D0B17B03A',
	width: 320,
	height: 50,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1522266301563", id:"back"},
		{src:"images/bridge.png?1522266301563", id:"bridge"},
		{src:"images/cta.png?1522266301563", id:"cta"},
		{src:"images/girl.png?1522266301563", id:"girl"},
		{src:"images/logo.png?1522266301563", id:"logo"},
		{src:"images/pizza.png?1522266301563", id:"pizza"},
		{src:"images/PP.png?1522266301563", id:"PP"},
		{src:"images/text1.png?1522266301563", id:"text1"},
		{src:"images/text2.png?1522266301563", id:"text2"},
		{src:"images/text3.png?1522266301563", id:"text3"}
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
an.compositions['19E4B7055C70476499C9F35D0B17B03A'] = {
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