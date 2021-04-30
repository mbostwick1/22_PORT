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
p.nominalBounds = new cjs.Rectangle(0,0,1456,207);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.legal = function() {
	this.initialize(img.legal);
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


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,728,90), null);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_1, new cjs.Rectangle(0,0,728,90), null);


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


(lib.girl_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.girl_1, new cjs.Rectangle(0,0,728,90), null);


(lib.endCake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cake();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.endCake, new cjs.Rectangle(0,0,728,103.5), null);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,728,90), null);


(lib.cakeGlasses = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cake();
	this.instance.parent = this;
	this.instance.setTransform(90,0,0.278,0.278);

	this.instance_1 = new lib.cake();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cakeGlasses, new cjs.Rectangle(0,0,495,57.6), null);


// stage content:
(lib._012151_2018_GML_Cake_Prospecting_728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//FlashTalking clickTag
		this.clickTag.addEventListener("click", clickThrough);
		
		function clickThrough() {
			myFT.clickTag(1);
		}
	}
	this.frame_405 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(405).call(this.frame_405).wait(1));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.parent = this;
	this.clickTag.setTransform(364,45,1,1,0,0,0,364,45);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(406));

	// legal
	this.instance = new lib.legal_1();
	this.instance.parent = this;
	this.instance.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(388).to({_off:false},0).to({alpha:1},17,cjs.Ease.quadOut).wait(1));

	// cta
	this.instance_1 = new lib.cta_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(470,45.1,0.556,0.556,0,0,0,470,45.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(369).to({_off:false},0).to({regY:45,scaleX:1,scaleY:1,y:45,alpha:1},36,cjs.Ease.elasticOut).wait(1));

	// text3
	this.instance_2 = new lib.text3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(352).to({_off:false},0).wait(54));

	// text2
	this.instance_3 = new lib.text2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(114.6,-29.4,1,1,-31.9,0,0,113,71);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:1,x:113.1,y:74},50,cjs.Ease.quartIn).to({rotation:0,x:113,y:71},3,cjs.Ease.cubicIn).wait(274).to({alpha:0},25,cjs.Ease.cubicOut).wait(54));

	// text1
	this.instance_4 = new lib.text1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(342,-27,1,1,35.7,0,0,343,31.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({regY:32,rotation:-0.4,x:343.1,y:33.1},50,cjs.Ease.quartIn).to({rotation:0,x:343,y:32},3,cjs.Ease.cubicIn).wait(266).to({alpha:0},25,cjs.Ease.cubicOut).wait(54));

	// girl
	this.instance_5 = new lib.girl_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(327).to({scaleX:1.78,scaleY:1.78,x:196.2,y:43.1,alpha:0},25,cjs.Ease.cubicInOut).wait(54));

	// endCake
	this.instance_6 = new lib.endCake();
	this.instance_6.parent = this;
	this.instance_6.setTransform(459.2,49.8,0.556,0.556,0,0,0,363.9,51.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(327).to({_off:false},0).to({regX:364,scaleX:1,scaleY:1,x:364,y:51.8,alpha:1},25,cjs.Ease.cubicInOut).wait(54));

	// cakes
	this.instance_7 = new lib.cakeGlasses();
	this.instance_7.parent = this;
	this.instance_7.setTransform(414.5,82.8,1,1,0,0,0,247.5,28.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(91).to({_off:false},0).wait(15).to({x:415.5,y:65.8},0).wait(15).to({x:414.5,y:49.8},0).wait(14).to({x:415.5,y:65.8},0).wait(15).to({x:414.5,y:82.8},0).wait(15).to({x:415.5,y:65.8},0).wait(16).to({x:414.5,y:49.8},0).wait(16).to({x:415.5,y:65.8},0).wait(16).to({x:414.5,y:82.8},0).wait(16).to({x:415.5,y:65.8},0).wait(16).to({x:414.5,y:49.8},0).wait(16).to({x:415.5,y:65.8},0).wait(16).to({x:414.5,y:82.8},0).wait(16).to({x:415.5,y:65.8},0).wait(17).to({x:414.5,y:49.8},0).wait(17).to({scaleX:1.78,scaleY:1.78,x:285.9,y:51.6,alpha:0},25,cjs.Ease.cubicInOut).wait(54));

	// pink
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF559D").s().p("AtWHCIAAuDIatAAIAAODg");
	this.shape.setTransform(551.5,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,85,157,0.996)").s().p("AtXHDIAAuFIawAAIAAOFg");
	this.shape_1.setTransform(551.5,45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,85,157,0.992)").s().p("AtbHFIAAuJIa2AAIAAOJg");
	this.shape_2.setTransform(551.4,45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,85,157,0.984)").s().p("AthHIIAAuPIbDAAIAAOPg");
	this.shape_3.setTransform(551.2,45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,85,157,0.969)").s().p("AtrHNIAAuZIbXAAIAAOZg");
	this.shape_4.setTransform(550.8,44.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,85,157,0.945)").s().p("At7HWIAAurIb3AAIAAOrg");
	this.shape_5.setTransform(550.3,44.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,85,157,0.914)").s().p("AuQHhIAAvBIchAAIAAPBg");
	this.shape_6.setTransform(549.6,44.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,85,157,0.871)").s().p("AutHwIAAvfIdbAAIAAPfg");
	this.shape_7.setTransform(548.6,44.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,85,157,0.816)").s().p("AvSIDIAAwFIelAAIAAQFg");
	this.shape_8.setTransform(547.4,44.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,85,157,0.745)").s().p("AwAIcIAAw3MAgBAAAIAAQ3g");
	this.shape_9.setTransform(545.9,44.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,85,157,0.663)").s().p("Aw4I5IAAxxMAhxAAAIAARxg");
	this.shape_10.setTransform(544,44.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,85,157,0.561)").s().p("Ax8JcIAAy3MAj5AAAIAAS3g");
	this.shape_11.setTransform(541.8,44.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,85,157,0.447)").s().p("AzJKFIAA0JMAmTAAAIAAUJg");
	this.shape_12.setTransform(539.2,43.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,85,157,0.345)").s().p("A0MKpIAA1RMAoZAAAIAAVRg");
	this.shape_13.setTransform(536.9,43.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,85,157,0.263)").s().p("A1FLGIAA2LMAqLAAAIAAWLg");
	this.shape_14.setTransform(535.1,43.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,85,157,0.192)").s().p("A1yLfIAA28MArmAAAIAAW8g");
	this.shape_15.setTransform(533.6,43.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,85,157,0.137)").s().p("A2YLyIAA3jMAsxAAAIAAXjg");
	this.shape_16.setTransform(532.3,43.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,85,157,0.094)").s().p("A20MBIAA4BMAtpAAAIAAYBg");
	this.shape_17.setTransform(531.4,43.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,85,157,0.063)").s().p("A3KMMIAA4XMAuVAAAIAAYXg");
	this.shape_18.setTransform(530.7,43.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,85,157,0.039)").s().p("A3ZMVIAA4pMAu0AAAIAAYpg");
	this.shape_19.setTransform(530.2,43.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,85,157,0.024)").s().p("A3kMaIAA4zMAvJAAAIAAYzg");
	this.shape_20.setTransform(529.8,43.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,85,157,0.016)").s().p("A3qMdIAA45MAvVAAAIAAY5g");
	this.shape_21.setTransform(529.6,43.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,85,157,0.012)").s().p("A3tMfIAA49MAvbAAAIAAY9g");
	this.shape_22.setTransform(529.5,43.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,85,157,0.008)").s().p("A3vMgIAA4/MAvfAAAIAAY/g");
	this.shape_23.setTransform(529.4,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},327).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[]},1).wait(53));

	// logo
	this.instance_8 = new lib.logo_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(48,45,0.422,0.422,0,0,0,48,45);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,alpha:1},58,cjs.Ease.elasticOut).wait(348));

	// back
	this.instance_9 = new lib.back();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(406));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(345.2,-369.4,746.9,504.4);
// library properties:
lib.properties = {
	id: '3E3B5D2063EE426AB9CFCF85489663B7',
	width: 728,
	height: 90,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1522186155744", id:"back"},
		{src:"images/cake.png?1522186155744", id:"cake"},
		{src:"images/cta.png?1522186155744", id:"cta"},
		{src:"images/girl.png?1522186155744", id:"girl"},
		{src:"images/legal.png?1522186155744", id:"legal"},
		{src:"images/logo.png?1522186155744", id:"logo"},
		{src:"images/text1.png?1522186155744", id:"text1"},
		{src:"images/text2.png?1522186155744", id:"text2"},
		{src:"images/text3.png?1522186155744", id:"text3"}
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