(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.cake = function() {
	this.initialize(img.cake);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,762,100);


(lib.logo = function() {
	this.initialize(img.logo);
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


(lib.girl_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.girl_1, new cjs.Rectangle(0,0,381,50), null);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,320,50), null);


(lib.cake_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cake();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cake_1, new cjs.Rectangle(0,0,320,50), null);


// stage content:
(lib._012151_2018_GML_Cake_Retargeting_320x50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//FlashTalking clickTag
		this.clickTag.addEventListener("click", clickThrough);
		
		function clickThrough() {
			myFT.clickTag(1);
		}
	}
	this.frame_515 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(515).call(this.frame_515).wait(1));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.parent = this;
	this.clickTag.setTransform(160,25,1,1,0,0,0,160,25);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(516));

	// cta
	this.instance = new lib.cta_1();
	this.instance.parent = this;
	this.instance.setTransform(288,25.4,0.563,0.563,0,0,0,288,25.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(479).to({_off:false},0).to({regY:25.2,scaleX:1,scaleY:1,y:25.2,alpha:1},36,cjs.Ease.elasticOut).wait(1));

	// text3
	this.instance_1 = new lib.text3_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(462).to({_off:false},0).wait(54));

	// text2
	this.instance_2 = new lib.text2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(65.1,-11.9,1,1,-27.9,0,0,63.9,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:64,rotation:0.7,x:64.1,y:42.1},50,cjs.Ease.quartIn).to({rotation:0,x:64,y:41},3,cjs.Ease.quartIn).wait(384).to({alpha:0},25,cjs.Ease.cubicOut).wait(54));

	// text1
	this.instance_3 = new lib.text1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(205.3,-21.6,1,1,27.2,0,0,205,18);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({regX:205.1,rotation:-0.8,x:205.2,y:19.1},50,cjs.Ease.quartIn).to({regX:205,rotation:0,x:205,y:18},3,cjs.Ease.quartIn).wait(377).to({alpha:0},25,cjs.Ease.cubicOut).wait(54));

	// girl
	this.instance_4 = new lib.girl_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(437).to({regX:363.9,scaleX:1.29,scaleY:1.29,x:310,y:45.5,alpha:0},25,cjs.Ease.cubicInOut).wait(54));

	// cakes
	this.instance_5 = new lib.cake_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(247.1,48.6,0.781,0.781,0,0,0,160.2,25.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(91).to({_off:false},0).wait(15).to({y:38.6},0).wait(15).to({y:29.6},0).wait(14).to({y:38.6},0).wait(15).to({y:48.6},0).to({_off:true},15).wait(74).to({_off:false},0).wait(15).to({y:38.6},0).wait(15).to({y:29.6},0).wait(14).to({y:38.6},0).wait(15).to({y:48.6},0).to({_off:true},15).wait(74).to({_off:false},0).wait(16).to({y:38.6},0).wait(17).to({y:29.6},0).wait(17).to({regX:160,regY:25,scaleX:0.92,scaleY:0.92,x:172.1,y:25.1},25,cjs.Ease.cubicInOut).wait(54));

	// PP_glasses
	this.instance_6 = new lib.PP_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(251.3,56.8,1,1,0,0,0,160,25);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(165).to({_off:false},0).wait(14).to({x:251.5,y:46.8},0).wait(15).to({y:37.8},0).wait(15).to({y:46.8},0).wait(15).to({x:251.3,y:56.8},0).to({_off:true},15).wait(74).to({_off:false},0).wait(14).to({x:251.5,y:46.8},0).wait(15).to({y:37.8},0).wait(15).to({y:46.8},0).wait(15).to({x:251.3,y:56.8},0).to({_off:true},15).wait(50).to({_off:false,scaleX:0.84,scaleY:0.84,x:234.1,y:30.1,alpha:0},0).to({scaleX:1,scaleY:1,x:160,y:25,alpha:1},25,cjs.Ease.cubicInOut).wait(54));

	// pink
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF559D").s().p("AjWDIIAAmPIGtAAIAAGPg");
	this.shape.setTransform(295.5,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,85,157,0.996)").s().p("AjWDIIAAmPIGtAAIAAGPg");
	this.shape_1.setTransform(295.4,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,85,157,0.992)").s().p("AjXDJIAAmRIGuAAIAAGRg");
	this.shape_2.setTransform(295,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,85,157,0.984)").s().p("AjXDJIAAmRIGvAAIAAGRg");
	this.shape_3.setTransform(294.3,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,85,157,0.969)").s().p("AjYDKIAAmTIGxAAIAAGTg");
	this.shape_4.setTransform(293.2,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,85,157,0.945)").s().p("AjaDLIAAmVIG1AAIAAGVg");
	this.shape_5.setTransform(291.4,24.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,85,157,0.914)").s().p("AjcDNIAAmZIG4AAIAAGZg");
	this.shape_6.setTransform(289,24.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,85,157,0.871)").s().p("AjfDPIAAmeIG/AAIAAGeg");
	this.shape_7.setTransform(285.8,24.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,85,157,0.816)").s().p("AjiDTIAAmlIHFAAIAAGlg");
	this.shape_8.setTransform(281.7,24.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,85,157,0.745)").s().p("AjmDXIAAmtIHNAAIAAGtg");
	this.shape_9.setTransform(276.6,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,85,157,0.663)").s().p("AjsDcIAAm3IHZAAIAAG3g");
	this.shape_10.setTransform(270.3,23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,85,157,0.561)").s().p("AjyDiIAAnDIHlAAIAAHDg");
	this.shape_11.setTransform(262.8,22.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,85,157,0.447)").s().p("Aj5DpIAAnRIHzAAIAAHRg");
	this.shape_12.setTransform(254.2,22.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,85,157,0.345)").s().p("AkADvIAAndIIAAAIAAHdg");
	this.shape_13.setTransform(246.7,21.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,85,157,0.263)").s().p("AkFDzIAAnmIILAAIAAHmg");
	this.shape_14.setTransform(240.4,21.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,85,157,0.192)").s().p("AkKD4IAAnvIIVAAIAAHvg");
	this.shape_15.setTransform(235.3,20.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,85,157,0.137)").s().p("AkND7IAAn1IIbAAIAAH1g");
	this.shape_16.setTransform(231.2,20.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,85,157,0.094)").s().p("AkQD9IAAn5IIhAAIAAH5g");
	this.shape_17.setTransform(228,20.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,85,157,0.063)").s().p("AkSD/IAAn9IIlAAIAAH9g");
	this.shape_18.setTransform(225.6,20);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,85,157,0.039)").s().p("AkTEBIAAoBIInAAIAAIBg");
	this.shape_19.setTransform(223.8,19.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,85,157,0.024)").s().p("AkUEBIAAoBIIpAAIAAIBg");
	this.shape_20.setTransform(222.7,19.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,85,157,0.016)").s().p("AkVECIAAoDIIrAAIAAIDg");
	this.shape_21.setTransform(222,19.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,85,157,0.012)").s().p("AkVECIAAoDIIrAAIAAIDg");
	this.shape_22.setTransform(221.6,19.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,85,157,0.008)").s().p("AkVECIAAoDIIrAAIAAIDg");
	this.shape_23.setTransform(221.5,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},327).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[]},1).wait(163));

	// logo
	this.instance_7 = new lib.logo_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(29,25,0.423,0.423,0,0,0,29,25.1);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:25,scaleX:1,scaleY:1,alpha:1},58,cjs.Ease.elasticOut).wait(458));

	// back
	this.instance_8 = new lib.back();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(516));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.4,-142.8,391.6,217.9);
// library properties:
lib.properties = {
	id: '19E4B7055C70476499C9F35D0B17B03A',
	width: 320,
	height: 50,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1522101869443", id:"back"},
		{src:"images/cake.png?1522101869443", id:"cake"},
		{src:"images/cta.png?1522101869443", id:"cta"},
		{src:"images/girl.png?1522101869443", id:"girl"},
		{src:"images/logo.png?1522101869443", id:"logo"},
		{src:"images/PP.png?1522101869443", id:"PP"},
		{src:"images/text1.png?1522101869443", id:"text1"},
		{src:"images/text2.png?1522101869443", id:"text2"},
		{src:"images/text3.png?1522101869443", id:"text3"}
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