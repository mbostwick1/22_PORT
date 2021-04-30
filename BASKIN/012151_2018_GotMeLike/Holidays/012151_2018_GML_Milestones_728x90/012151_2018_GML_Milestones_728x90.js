(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.cake = function() {
	this.initialize(img.cake);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.candle1 = function() {
	this.initialize(img.candle1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.candle2 = function() {
	this.initialize(img.candle2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.candle3 = function() {
	this.initialize(img.candle3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.text2 = function() {
	this.initialize(img.text2);
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


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,728,90), null);


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


(lib.candle3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.candle3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.candle3_1, new cjs.Rectangle(0,0,728,90), null);


(lib.candle2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.candle2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.candle2_1, new cjs.Rectangle(0,0,728,90), null);


(lib.candle1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.candle1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.candle1_1, new cjs.Rectangle(0,0,728,90), null);


(lib.cake_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cake();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cake_1, new cjs.Rectangle(0,0,728,90), null);


// stage content:
(lib._012151_2018_GML_Milestones_728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//FlashTalking clickTag
		this.clickTag.addEventListener("click", clickThrough);
		
		function clickThrough() {
			myFT.clickTag(1);
		}
	}
	this.frame_523 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(523).call(this.frame_523).wait(1));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.parent = this;
	this.clickTag.setTransform(364,45,1,1,0,0,0,364,45);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(524));

	// cake
	this.instance = new lib.cake_1();
	this.instance.parent = this;
	this.instance.setTransform(533,45,1,1,0,0,0,364,45);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(487).to({_off:false},0).to({x:364},36,cjs.Ease.cubicOut).wait(1));

	// candle3
	this.instance_1 = new lib.candle3_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(364,105,1,1,0,0,0,364,45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(112).to({_off:false},0).wait(15).to({y:85},0).wait(15).to({y:70},0).wait(15).to({y:55},0).wait(15).to({y:45},0).wait(15).to({y:55},0).wait(15).to({y:70},0).wait(15).to({y:85},0).wait(15).to({y:105},0).wait(15).to({y:85},0).wait(15).to({y:70},0).wait(15).to({y:55},0).wait(15).to({y:45},0).wait(15).to({y:55},0).wait(15).to({y:70},0).wait(15).to({y:85},0).wait(15).to({y:105},0).wait(15).to({y:85},0).wait(15).to({y:70},0).wait(15).to({y:55},0).wait(15).to({y:45},0).wait(15).to({y:55},0).wait(15).to({y:70},0).wait(15).to({y:85},0).wait(15).to({y:105},0).to({_off:true},15).wait(37));

	// candle2
	this.instance_2 = new lib.candle2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(364,105,1,1,0,0,0,364,45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(97).to({_off:false},0).wait(15).to({y:85},0).wait(15).to({y:70},0).wait(15).to({y:55},0).wait(15).to({y:45},0).wait(15).to({y:55},0).wait(15).to({y:70},0).wait(15).to({y:85},0).wait(15).to({y:105},0).wait(15).to({y:85},0).wait(15).to({y:70},0).wait(15).to({y:55},0).wait(15).to({y:45},0).wait(15).to({y:55},0).wait(15).to({y:70},0).wait(15).to({y:85},0).wait(15).to({y:105},0).wait(15).to({y:85},0).wait(15).to({y:70},0).wait(15).to({y:55},0).wait(15).to({y:45},0).wait(15).to({y:55},0).wait(15).to({y:70},0).wait(15).to({y:85},0).wait(15).to({y:105},0).to({_off:true},15).wait(52));

	// candle1
	this.instance_3 = new lib.candle1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(364,105,1,1,0,0,0,364,45);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(82).to({_off:false},0).wait(15).to({y:85},0).wait(15).to({y:70},0).wait(15).to({y:55},0).wait(15).to({y:45},0).wait(15).to({y:55},0).wait(15).to({y:70},0).wait(15).to({y:85},0).wait(15).to({y:105},0).wait(15).to({y:85},0).wait(15).to({y:70},0).wait(15).to({y:55},0).wait(15).to({y:45},0).wait(15).to({y:55},0).wait(15).to({y:70},0).wait(15).to({y:85},0).wait(15).to({y:105},0).wait(15).to({y:85},0).wait(15).to({y:70},0).wait(15).to({y:55},0).wait(15).to({y:45},0).wait(15).to({y:55},0).wait(15).to({y:70},0).wait(15).to({y:85},0).wait(15).to({y:105},0).to({_off:true},15).wait(67));

	// text2
	this.instance_4 = new lib.text2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(104.1,-21.9,1,1,-32.2,0,0,104,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:0.4,x:104,y:76},50,cjs.Ease.quartIn).to({rotation:0,y:75},3,cjs.Ease.cubicIn).wait(403).to({x:129},31,cjs.Ease.quadOut).wait(37));

	// text1
	this.instance_5 = new lib.text1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(384.9,-38,1,1,26.4,0,0,383.9,35);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({regX:384,rotation:-0.4,x:384,y:36},50,cjs.Ease.quartIn).to({rotation:0,y:35},3,cjs.Ease.cubicIn).wait(392).to({x:409},31,cjs.Ease.quadOut).wait(37));

	// logo
	this.instance_6 = new lib.logo_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(48,45,0.422,0.422,0,0,0,48,45);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,alpha:1},58,cjs.Ease.elasticOut).wait(466));

	// back
	this.instance_7 = new lib.back();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(524));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(340.1,-373.1,752,508.2);
// library properties:
lib.properties = {
	id: '3E3B5D2063EE426AB9CFCF85489663B7',
	width: 728,
	height: 90,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1522704382599", id:"back"},
		{src:"images/cake.png?1522704382599", id:"cake"},
		{src:"images/candle1.png?1522704382599", id:"candle1"},
		{src:"images/candle2.png?1522704382599", id:"candle2"},
		{src:"images/candle3.png?1522704382599", id:"candle3"},
		{src:"images/logo.png?1522704382599", id:"logo"},
		{src:"images/text1.png?1522704382599", id:"text1"},
		{src:"images/text2.png?1522704382599", id:"text2"}
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