(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.cake = function() {
	this.initialize(img.cake);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.dude1 = function() {
	this.initialize(img.dude1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.dude2 = function() {
	this.initialize(img.dude2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.text4 = function() {
	this.initialize(img.text4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);// helper functions:

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

}).prototype = getMCSymbolPrototype(lib.text4_1, new cjs.Rectangle(0,0,300,600), null);


(lib.text3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3_1, new cjs.Rectangle(0,0,300,600), null);


(lib.text2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2_1, new cjs.Rectangle(0,0,300,600), null);


(lib.text1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1_1, new cjs.Rectangle(0,0,300,600), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,300,600), null);


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


(lib.DUDE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_790 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(790).call(this.frame_790).wait(1));

	// girl
	this.instance = new lib.dude1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6,0.6);

	this.instance_1 = new lib.dude2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.6,0.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},14).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},14).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},14).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},14).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},14).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(14).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(14).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(14).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(14).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).to({_off:true},15).wait(15).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.cake_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cake();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cake_1, new cjs.Rectangle(0,0,300,600), null);


// stage content:
(lib._012151_2018_GML_HIS_300x600 = function(mode,startPosition,loop) {
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
	this.clickTag.setTransform(150,300,1.875,1,0,0,0,80,300);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(169));

	// Cake
	this.instance = new lib.cake_1();
	this.instance.parent = this;
	this.instance.setTransform(456,300,1,1,0,0,0,150,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105).to({_off:false},0).to({x:150},43,cjs.Ease.cubicOut).wait(21));

	// DUDE
	this.GIRL = new lib.DUDE();
	this.GIRL.name = "GIRL";
	this.GIRL.parent = this;
	this.GIRL.setTransform(0,317);
	this.GIRL._off = true;

	this.timeline.addTween(cjs.Tween.get(this.GIRL).wait(105).to({_off:false},0).to({y:0},43,cjs.Ease.cubicOut).wait(21));

	// text4
	this.instance_1 = new lib.text4_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(51,-70,1,1,-40,0,0,51,273);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({regY:273.1,rotation:2,y:274.1},50,cjs.Ease.quartIn).to({regY:273,rotation:0,y:273},3,cjs.Ease.quartIn).wait(90));

	// text3
	this.instance_2 = new lib.text3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(248,-64,1,1,40,0,0,248,201);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({regY:201.1,rotation:-2,y:202.1},50,cjs.Ease.quartIn).to({regY:201,rotation:0,y:201},3,cjs.Ease.quartIn).wait(82));

	// text2
	this.instance_3 = new lib.text2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(56,-41,1,1,-40,0,0,56,160);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(43).to({_off:false},0).to({rotation:2,y:161},50,cjs.Ease.quartIn).to({rotation:0,y:160},3,cjs.Ease.quartIn).wait(73));

	// text1
	this.instance_4 = new lib.text1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(250,-58,1,1,40,0,0,250,143);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(52).to({_off:false},0).to({rotation:-2,y:144},50,cjs.Ease.quartIn).to({rotation:0,y:143},3,cjs.Ease.quartIn).wait(64));

	// logo
	this.instance_5 = new lib.logo_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.1,59.1,0.413,0.413,0,0,0,150,59.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:59,scaleX:1,scaleY:1,x:150,y:59,alpha:1},58,cjs.Ease.elasticOut).wait(111));

	// back
	this.instance_6 = new lib.back();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(169));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);
// library properties:
lib.properties = {
	id: 'D983B667FE41457BA3C572672CBEBD23',
	width: 300,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1523633485250", id:"back"},
		{src:"images/cake.png?1523633485250", id:"cake"},
		{src:"images/dude1.png?1523633485250", id:"dude1"},
		{src:"images/dude2.png?1523633485250", id:"dude2"},
		{src:"images/logo.png?1523633485250", id:"logo"},
		{src:"images/text1.png?1523633485250", id:"text1"},
		{src:"images/text2.png?1523633485250", id:"text2"},
		{src:"images/text3.png?1523633485250", id:"text3"},
		{src:"images/text4.png?1523633485250", id:"text4"}
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