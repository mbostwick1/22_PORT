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


(lib.girl1 = function() {
	this.initialize(img.girl1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,417);


(lib.girl2 = function() {
	this.initialize(img.girl2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,417);


(lib.girl3 = function() {
	this.initialize(img.girl3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,417);


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


(lib.GIRL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_720 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(720).call(this.frame_720).wait(29));

	// girl
	this.instance = new lib.girl1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6,0.6);

	this.instance_1 = new lib.girl2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.6,0.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.girl3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.6,0.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},29).wait(61).to({_off:false},0).to({_off:true},29).wait(61).to({_off:false},0).to({_off:true},29).wait(61).to({_off:false},0).to({_off:true},29).wait(61).to({_off:false},0).to({_off:true},29).wait(61).to({_off:false},0).to({_off:true},29).wait(61).to({_off:false},0).to({_off:true},29).wait(61).to({_off:false},0).to({_off:true},29).wait(61).to({_off:false},0).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({_off:true},30).wait(60).to({_off:false},0).to({_off:true},30).wait(60).to({_off:false},0).to({_off:true},30).wait(60).to({_off:false},0).to({_off:true},30).wait(60).to({_off:false},0).to({_off:true},30).wait(60).to({_off:false},0).to({_off:true},30).wait(60).to({_off:false},0).to({_off:true},30).wait(60).to({_off:false},0).to({_off:true},30).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({_off:true},31).wait(59).to({_off:false},0).to({_off:true},31).wait(59).to({_off:false},0).to({_off:true},31).wait(59).to({_off:false},0).to({_off:true},31).wait(59).to({_off:false},0).to({_off:true},31).wait(59).to({_off:false},0).to({_off:true},31).wait(59).to({_off:false},0).to({_off:true},31).wait(59).to({_off:false},0).to({_off:true},31).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.cake_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cake();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cake_1, new cjs.Rectangle(0,0,300,250), null);


// stage content:
(lib._012151_2018_GML_HERS_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//FlashTalking clickTag
		this.clickTag.addEventListener("click", clickThrough);
		
		function clickThrough() {
			myFT.clickTag(1);
		}
	}
	this.frame_168 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(168).call(this.frame_168).wait(1));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.parent = this;
	this.clickTag.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(169));

	// Cake
	this.instance = new lib.cake_1();
	this.instance.parent = this;
	this.instance.setTransform(456,300,1,1,0,0,0,150,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(106).to({_off:false},0).to({x:150},35,cjs.Ease.cubicOut).wait(28));

	// girl
	this.GIRL = new lib.GIRL();
	this.GIRL.name = "GIRL";
	this.GIRL.parent = this;
	this.GIRL.setTransform(150,550,1,1,0,0,0,150,300);
	this.GIRL._off = true;

	this.timeline.addTween(cjs.Tween.get(this.GIRL).wait(106).to({_off:false},0).to({y:300},35,cjs.Ease.quadOut).wait(28));

	// text4
	this.instance_1 = new lib.text4_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.1,-30.9,1,1,-38,0,0,19,135);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).to({regY:134.9,rotation:1.2,x:19,y:135.9},50,cjs.Ease.quartIn).to({regY:135,rotation:0,y:135},3,cjs.Ease.quartIn).wait(83));

	// text3
	this.instance_2 = new lib.text3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(134,-12,1,1,32.5,0,0,134,120);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({rotation:-1.7,x:134.1,y:122},50,cjs.Ease.quartIn).to({rotation:0,x:134,y:120},3,cjs.Ease.quartIn).wait(77));

	// text2
	this.instance_3 = new lib.text2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(18.9,-13.9,1,1,-31.7,0,0,18.9,80);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45).to({_off:false},0).to({regX:19,regY:80.1,rotation:1,x:19,y:82.1},50,cjs.Ease.quartIn).to({regY:80,rotation:0,y:80},3,cjs.Ease.quartIn).wait(71));

	// text1
	this.instance_4 = new lib.text1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(131,-34,1,1,25.5,0,0,130.5,53.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(53).to({_off:false},0).to({regX:130.6,regY:54,rotation:-0.4,x:131.1,y:56.1},50,cjs.Ease.quartIn).to({regX:130.5,rotation:0,x:131,y:54.1},3,cjs.Ease.quartIn).wait(63));

	// logo
	this.instance_5 = new lib.logo_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(43.1,209.1,0.421,0.421,0,0,0,43.1,209);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:43,scaleX:1,scaleY:1,x:43,y:209,alpha:1},58,cjs.Ease.elasticOut).wait(111));

	// back
	this.instance_6 = new lib.back();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(169));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);
// library properties:
lib.properties = {
	id: '2223DAE7740E48509D7598A6580DA45F',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1523633578354", id:"back"},
		{src:"images/cake.png?1523633578354", id:"cake"},
		{src:"images/girl1.png?1523633578354", id:"girl1"},
		{src:"images/girl2.png?1523633578354", id:"girl2"},
		{src:"images/girl3.png?1523633578354", id:"girl3"},
		{src:"images/logo.png?1523633578354", id:"logo"},
		{src:"images/text1.png?1523633578354", id:"text1"},
		{src:"images/text2.png?1523633578354", id:"text2"},
		{src:"images/text3.png?1523633578354", id:"text3"},
		{src:"images/text4.png?1523633578354", id:"text4"}
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