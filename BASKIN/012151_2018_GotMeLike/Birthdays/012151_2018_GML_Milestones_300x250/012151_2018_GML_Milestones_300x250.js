(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.cake = function() {
	this.initialize(img.cake);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.candle1 = function() {
	this.initialize(img.candle1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.candle2 = function() {
	this.initialize(img.candle2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.candle3 = function() {
	this.initialize(img.candle3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.legal = function() {
	this.initialize(img.legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.logo = function() {
	this.initialize(img.logo);
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


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,300,250), null);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_1, new cjs.Rectangle(0,0,300,250), null);


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


(lib.candle3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.candle3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.candle3_1, new cjs.Rectangle(0,0,300,250), null);


(lib.candle2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.candle2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.candle2_1, new cjs.Rectangle(0,0,300,250), null);


(lib.candle1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.candle1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.candle1_1, new cjs.Rectangle(0,0,300,250), null);


(lib.cake_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cake();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cake_1, new cjs.Rectangle(0,0,300,250), null);


(lib.candles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_360 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(360).call(this.frame_360).wait(1));

	// 50
	this.instance = new lib.candle3_1();
	this.instance.parent = this;
	this.instance.setTransform(150,459,1,1,0,0,0,150,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120).to({_off:false},0).to({y:300},29,cjs.Ease.quartOut).to({y:459},30,cjs.Ease.quartIn).to({_off:true},1).wait(120).to({_off:false},0).to({y:300},29,cjs.Ease.quartOut).to({y:459},30,cjs.Ease.quartIn).to({_off:true},1).wait(1));

	// 21
	this.instance_1 = new lib.candle2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,459,1,1,0,0,0,150,300);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({_off:false},0).to({y:300},29,cjs.Ease.quartOut).to({y:459},30,cjs.Ease.quartIn).to({_off:true},1).wait(120).to({_off:false},0).to({y:300},29,cjs.Ease.quartOut).to({y:459},30,cjs.Ease.quartIn).to({_off:true},1).wait(61));

	// 16
	this.instance_2 = new lib.candle1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,459,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:300},29,cjs.Ease.quartOut).to({y:459},30,cjs.Ease.quartIn).to({_off:true},1).wait(120).to({_off:false},0).to({y:300},29,cjs.Ease.quartOut).to({y:459},30,cjs.Ease.quartIn).to({_off:true},1).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,159,300,250);


// stage content:
(lib._012151_2018_GML_Milestones_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//FlashTalking clickTag
		this.clickTag.addEventListener("click", clickThrough);
		
		function clickThrough() {
			myFT.clickTag(1);
		}
	}
	this.frame_67 = function() {
		//Pause function
		var tl = this;
		tl.stop();
		var delay = 6350;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_129 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(67).call(this.frame_67).wait(62).call(this.frame_129).wait(1));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.parent = this;
	this.clickTag.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(130));

	// legal
	this.instance = new lib.legal_1();
	this.instance.parent = this;
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(86).to({_off:false},0).to({alpha:1},43,cjs.Ease.cubicOut).wait(1));

	// Cake
	this.instance_1 = new lib.cake_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(456,300,1,1,0,0,0,150,300);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72).to({_off:false},0).to({x:150},44,cjs.Ease.cubicOut).wait(14));

	// text3
	this.instance_2 = new lib.text3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(134.1,-87,1,1,39.2,0,0,134,119.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:120,rotation:-1.7,y:122},50,cjs.Ease.quartIn).to({rotation:0,x:134,y:120},3,cjs.Ease.quartIn).wait(77));

	// text2
	this.instance_3 = new lib.text2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(19,-13.8,1,1,-37.9,0,0,18.9,80);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({regX:19,regY:80.1,rotation:1,y:82.1},50,cjs.Ease.quartIn).to({regY:80,rotation:0,y:80},3,cjs.Ease.quartIn).wait(71));

	// text1
	this.instance_4 = new lib.text1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(131.1,-90.9,1,1,35.5,0,0,130.6,53.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({regY:54,rotation:-0.4,y:56.1},50,cjs.Ease.quartIn).to({regX:130.5,rotation:0,x:131,y:54.1},3,cjs.Ease.quartIn).wait(63));

	// logo
	this.instance_5 = new lib.logo_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(43.1,209.1,0.421,0.421,0,0,0,43.1,209);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:43,scaleX:1,scaleY:1,x:43,y:209,alpha:1},58,cjs.Ease.elasticOut).wait(72));

	// Candles
	this.instance_6 = new lib.candles();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(67).to({_off:false},0).to({_off:true},1).wait(62));

	// back
	this.instance_7 = new lib.back();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98,-139.6,390.5,514.7);
// library properties:
lib.properties = {
	id: '2223DAE7740E48509D7598A6580DA45F',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1523648513838", id:"back"},
		{src:"images/cake.png?1523648513838", id:"cake"},
		{src:"images/candle1.jpg?1523648513838", id:"candle1"},
		{src:"images/candle2.jpg?1523648513838", id:"candle2"},
		{src:"images/candle3.jpg?1523648513838", id:"candle3"},
		{src:"images/legal.png?1523648513838", id:"legal"},
		{src:"images/logo.png?1523648513838", id:"logo"},
		{src:"images/text1.png?1523648513838", id:"text1"},
		{src:"images/text2.png?1523648513838", id:"text2"},
		{src:"images/text3.png?1523648513838", id:"text3"}
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