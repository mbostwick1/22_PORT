(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.bridge = function() {
	this.initialize(img.bridge);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,1050);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,938);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.pizza = function() {
	this.initialize(img.pizza);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,1050);


(lib.PP1 = function() {
	this.initialize(img.PP1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,1050);


(lib.PP2 = function() {
	this.initialize(img.PP2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,1050);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.text4 = function() {
	this.initialize(img.text4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);// helper functions:

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

}).prototype = getMCSymbolPrototype(lib.text4_1, new cjs.Rectangle(0,0,160,600), null);


(lib.text3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3_1, new cjs.Rectangle(0,0,160,600), null);


(lib.text2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2_1, new cjs.Rectangle(0,0,160,600), null);


(lib.text1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1_1, new cjs.Rectangle(0,0,160,600), null);


(lib.PP2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.PP2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.571,0.571);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.PP2_1, new cjs.Rectangle(0,0,160,600), null);


(lib.PP1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.PP1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.571,0.571);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.PP1_1, new cjs.Rectangle(0,0,160,600), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,160,600), null);


(lib.invisible_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.girl_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_348 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(348).call(this.frame_348).wait(1));

	// pizza
	this.instance = new lib.pizza();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.571,0.571);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({rotation:20,x:155.7,y:-8.9},0).wait(10).to({rotation:40,x:305,y:36},0).wait(10).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:155.7,y:-8.9},0).wait(10).to({rotation:40,x:305,y:36},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:155.7,y:-8.9},0).wait(10).to({rotation:40,x:305,y:36},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:155.7,y:-8.9},0).wait(10).to({rotation:40,x:305,y:36},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:155.7,y:-8.9},0).wait(10).to({rotation:40,x:305,y:36},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:155.7,y:-8.9},0).wait(10).to({rotation:40,x:305,y:36},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:155.7,y:-8.9},0).wait(10).to({rotation:40,x:305,y:36},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:155.7,y:-8.9},0).wait(10).to({rotation:40,x:305,y:36},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:155.7,y:-8.9},0).wait(10).to({rotation:40,x:305,y:36},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:155.7,y:-8.9},0).wait(10).to({rotation:40,x:305,y:36},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:155.7,y:-8.9},0).wait(10).to({rotation:40,x:305,y:36},0).wait(11).to({rotation:0,x:0,y:0},0).wait(9).to({rotation:20,x:155.7,y:-8.9},0).wait(10).to({rotation:40,x:305,y:36},0).wait(1));

	// bridge
	this.instance_1 = new lib.bridge();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.571,0.571);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(349));

	// girl
	this.instance_2 = new lib.girl();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(349));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,160,600), null);


// stage content:
(lib._012151_2018_GML_PolarPizza_Prospecting_160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//FlashTalking clickTag
		this.clickTag.addEventListener("click", clickThrough);
		
		function clickThrough() {
			myFT.clickTag(1);
		}
	}
	this.frame_348 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(348).call(this.frame_348).wait(1));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.parent = this;
	this.clickTag.setTransform(80,300,1,1,0,0,0,80,300);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(349));

	// cta
	this.instance = new lib.cta_1();
	this.instance.parent = this;
	this.instance.setTransform(80,252.1,0.55,0.55,0,0,0,80,252.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(312).to({_off:false},0).to({regY:252,scaleX:1,scaleY:1,y:252,alpha:1},36,cjs.Ease.elasticOut).wait(1));

	// logo
	this.instance_1 = new lib.logo_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80.1,61.1,0.41,0.41,0,0,0,80,61);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:80,y:61,alpha:1},58,cjs.Ease.elasticOut).wait(291));

	// text4
	this.instance_2 = new lib.text4_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(295).to({_off:false},0).to({alpha:1},36,cjs.Ease.cubicOut).wait(18));

	// text3
	this.instance_3 = new lib.text3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(135.2,-13.4,1,1,30,0,0,135,195.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60).to({_off:false},0).to({regX:134.9,rotation:-1.7,x:135,y:197.1},50,cjs.Ease.quartIn).to({regX:135,regY:195,rotation:0,y:195},3,cjs.Ease.cubicIn).wait(157).to({alpha:0},25,cjs.Ease.cubicOut).to({_off:true},1).wait(53));

	// text2
	this.instance_4 = new lib.text2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(24.4,-55.5,1,1,-32.2,0,0,24,153.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66).to({_off:false},0).to({regY:153,rotation:0.8,x:24.1,y:154},50,cjs.Ease.quartIn).to({rotation:0,x:24,y:153},3,cjs.Ease.cubicIn).wait(151).to({alpha:0},25,cjs.Ease.cubicOut).to({_off:true},1).wait(53));

	// text1
	this.instance_5 = new lib.text1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(137.3,-80.5,1,1,37.5,0,0,137,128);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(72).to({_off:false},0).to({regY:128.1,rotation:-0.9,x:137,y:129.2},50,cjs.Ease.quartIn).to({regY:128,rotation:0,y:128},3,cjs.Ease.cubicIn).wait(145).to({alpha:0},25,cjs.Ease.cubicOut).to({_off:true},1).wait(53));

	// girl
	this.instance_6 = new lib.girl_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(440,-149.1,1.352,1.352,0,0,0,363.9,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60).to({regX:364,regY:45,scaleX:1,scaleY:1,x:364,y:45},65,cjs.Ease.quintOut).wait(145).to({regX:363.9,scaleX:1.37,scaleY:1.37,x:440.1,y:-102.1,alpha:0},25,cjs.Ease.cubicInOut).to({_off:true},1).wait(53));

	// PP2
	this.instance_7 = new lib.PP2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-80,300,1,1,0,0,0,80,300);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(270).to({_off:false},0).to({x:80},25,cjs.Ease.cubicInOut).wait(54));

	// PP1
	this.instance_8 = new lib.PP1_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(228,300,1,1,0,0,0,80,300);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(270).to({_off:false},0).to({x:80},25,cjs.Ease.cubicInOut).wait(54));

	// back
	this.instance_9 = new lib.back();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(349));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28,90.4,216.4,811.3);
// library properties:
lib.properties = {
	id: 'D983B667FE41457BA3C572672CBEBD23',
	width: 160,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1522165259714", id:"back"},
		{src:"images/bridge.png?1522165259714", id:"bridge"},
		{src:"images/cta.png?1522165259714", id:"cta"},
		{src:"images/girl.jpg?1522165259714", id:"girl"},
		{src:"images/logo.png?1522165259714", id:"logo"},
		{src:"images/pizza.png?1522165259714", id:"pizza"},
		{src:"images/PP1.png?1522165259714", id:"PP1"},
		{src:"images/PP2.png?1522165259714", id:"PP2"},
		{src:"images/text1.png?1522165259714", id:"text1"},
		{src:"images/text2.png?1522165259714", id:"text2"},
		{src:"images/text3.png?1522165259714", id:"text3"},
		{src:"images/text4.png?1522165259714", id:"text4"}
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
an.compositions['D983B667FE41457BA3C572672CBEBD23'] = {
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