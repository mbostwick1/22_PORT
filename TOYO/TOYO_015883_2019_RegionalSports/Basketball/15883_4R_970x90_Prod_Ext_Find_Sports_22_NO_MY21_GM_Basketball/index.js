(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back1 = function() {
	this.initialize(img.back1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,180);


(lib.back2 = function() {
	this.initialize(img.back2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,180);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,180);


(lib.headline11 = function() {
	this.initialize(img.headline11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,180);


(lib.headline12 = function() {
	this.initialize(img.headline12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,180);


(lib.headline21 = function() {
	this.initialize(img.headline21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,180);


(lib.headline22 = function() {
	this.initialize(img.headline22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,180);


(lib.headline31 = function() {
	this.initialize(img.headline31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,180);


(lib.headline32 = function() {
	this.initialize(img.headline32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,180);


(lib.headline33 = function() {
	this.initialize(img.headline33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,180);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,180);


(lib.player = function() {
	this.initialize(img.player);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,180);


(lib.runner = function() {
	this.initialize(img.runner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,180);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1363,219);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1248,225);


(lib.toyota = function() {
	this.initialize(img.toyota);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,180);// helper functions:

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


(lib.toyota_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.toyota();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.toyota_1, new cjs.Rectangle(0,0,970,90), null);


(lib.text2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2_1, new cjs.Rectangle(0,0,624,112.5), null);


(lib.text1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text1_top
	this.instance = new lib.text1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1_1, new cjs.Rectangle(0,0,681.5,109.5), null);


(lib.runner_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.runner();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.runner_1, new cjs.Rectangle(0,0,970,90), null);


(lib.player_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.player();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.player_1, new cjs.Rectangle(0,0,970,90), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,970,90), null);


(lib.invisible_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.headline33_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.headline33();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headline33_1, new cjs.Rectangle(0,0,970,90), null);


(lib.headline32_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.headline32();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headline32_1, new cjs.Rectangle(0,0,970,90), null);


(lib.headline31_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.headline31();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headline31_1, new cjs.Rectangle(0,0,970,90), null);


(lib.headline22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.headline22();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headline22_1, new cjs.Rectangle(0,0,970,90), null);


(lib.headline21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.headline21();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headline21_1, new cjs.Rectangle(0,0,970,90), null);


(lib.headline12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.headline12();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headline12_1, new cjs.Rectangle(0,0,970,90), null);


(lib.headline11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.headline11();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headline11_1, new cjs.Rectangle(0,0,970,90), null);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cta();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,970,90), null);


(lib.back2_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.back2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back2_image, new cjs.Rectangle(0,0,970,90), null);


(lib.back1_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.back1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back1_image, new cjs.Rectangle(0,0,970,90), null);


(lib.back_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.back1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back_image, new cjs.Rectangle(0,0,970,90), null);


(lib.headline3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_163 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(163).call(this.frame_163).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AWbGqIAAh4MAgqAAAIAAB4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:352.475,y:42.575}).wait(163).to({graphics:null,x:0,y:0}).wait(1));

	// headline3_bottom
	this.instance = new lib.headline33_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({x:148},0).wait(3).to({x:150,alpha:0.8008},0).wait(5).to({alpha:1},0).to({_off:true},1).wait(129));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AWbFuIAAh4MAgqAAAIAAB4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:352.475,y:36.575}).wait(35).to({graphics:null,x:0,y:0}).wait(129));

	// headline3_top
	this.instance_1 = new lib.headline33_1();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({x:152},0).wait(5).to({x:146},0).wait(3).to({x:152,alpha:0.8008},0).wait(4).to({x:150,alpha:1},0).wait(130));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("A0dBQIAAifMAo7AAAIAACfg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:570.05,y:53}).wait(163).to({graphics:null,x:0,y:0}).wait(1));

	// headline2_bottom
	this.instance_2 = new lib.headline32_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({x:152},0).wait(5).to({x:150,alpha:0.8203},0).wait(7).to({alpha:1},0).to({_off:true},129).wait(1));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("A0dBQIAAifMAo7AAAIAACfg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:570.05,y:37}).wait(163).to({graphics:null,x:0,y:0}).wait(1));

	// headline2_top
	this.instance_3 = new lib.headline32_1();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({x:140},0).wait(6).to({x:155,alpha:0.6914},0).wait(3).to({x:144,alpha:1},0).wait(5).to({x:150},0).wait(130));

	// headline1_bottom
	this.instance_4 = new lib.headline31_1();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},163).wait(1));

	// headline1_top
	this.instance_5 = new lib.headline31_1();
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(164));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,970,90);


(lib.headline2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyLB+IAAj7MAkXAAAIAAD7g");
	mask.setTransform(624.7,45.725);

	// headline2_top
	this.instance = new lib.headline22_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({x:149},0).wait(6).to({x:150,alpha:0.8203},0).wait(3).to({alpha:1},0).wait(158));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyLB9IAAj5MAkXAAAIAAD5g");
	mask_1.setTransform(624.7,69.775);

	// headline2_bottom
	this.instance_1 = new lib.headline22_1();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({x:157},0).wait(4).to({x:145},0).wait(6).to({x:147,alpha:0.8203},0).wait(3).to({x:150,alpha:1},0).wait(156));

	// headline1_bottom
	this.instance_2 = new lib.headline21_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,970,90);


(lib.headline1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8WBuIAAjbMA4tAAAIAADbg");
	mask.setTransform(656.4,47);

	// headline2_top
	this.instance = new lib.headline12_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({x:147},0).wait(4).to({x:142},0).wait(4).to({x:137},0).wait(2).to({x:150},0).wait(137));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A8WBuIAAjbMA4tAAAIAADbg");
	mask_1.setTransform(656.4,69);

	// headline2_bottom
	this.instance_1 = new lib.headline12_1();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({x:142},0).wait(3).to({x:169},0).wait(5).to({x:141},0).wait(4).to({x:150},0).wait(137));

	// headline1_bottom
	this.instance_2 = new lib.headline11_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,970,90);


(lib.back2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_480 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(480).call(this.frame_480).wait(1));

	// Layer_1
	this.instance = new lib.back2_image();
	this.instance.setTransform(150.05,125.05,1.056,1.056,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:150,y:119},480).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-6.9,1024.3,95.10000000000001);


(lib.back1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// back1
	this.instance = new lib.back1_image();
	this.instance.setTransform(257.95,38,1.1033,1.1033,0,0,0,270.9,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:271,scaleX:1,scaleY:1,x:271},299).wait(62));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.9,-2.8,1070.2,99.39999999999999);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//FlashTalking clickTag
		this.clickTag.addEventListener("click", clickThrough);
		
		function clickThrough() {
			myFT.clickTag(1);
		}
	}
	this.frame_35 = function() {
		//Pause function
		var tl = this;
		tl.stop();
		var delay = 300;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_221 = function() {
		//Pause function
		var tl = this;
		tl.stop();
		var delay = 300;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_246 = function() {
		//Pause function
		var tl = this;
		tl.stop();
		var delay = 250;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_457 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(186).call(this.frame_221).wait(25).call(this.frame_246).wait(211).call(this.frame_457).wait(1));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(485,45,6.0626,0.15,0,0,0,80,300.1);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(458));

	// toyota
	this.instance = new lib.toyota_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(361).to({_off:false},0).wait(97));

	// 4runner
	this.instance_1 = new lib.runner_1();
	this.instance_1.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},361).wait(97));

	// logo
	this.instance_2 = new lib.logo_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(458));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_364 = new cjs.Graphics().p("EA0HAFFIAAkYIYEAAIAAEYg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(364).to({graphics:mask_graphics_364,x:487.5,y:32.5}).wait(94));

	// cta_too
	this.instance_3 = new lib.cta_1();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(364).to({_off:false},0).wait(94));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_364 = new cjs.Graphics().p("EA0HAHMIAAkYIYEAAIAAEYg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(364).to({graphics:mask_1_graphics_364,x:487.5,y:46}).wait(94));

	// cta_bottom
	this.instance_4 = new lib.cta_1();
	this.instance_4.setTransform(155,125,1,1,0,0,0,150,125);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(364).to({_off:false},0).wait(5).to({x:144},0).wait(8).to({x:155},0).wait(4).to({x:150},0).wait(77));

	// headline3
	this.instance_5 = new lib.headline3();
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(357).to({_off:false},0).to({regX:150.3,scaleX:0.9901,scaleY:0.9887,x:150.3,y:125.05},100,cjs.Ease.quadOut).wait(1));

	// headline2
	this.instance_6 = new lib.headline2();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(252).to({_off:false},0).wait(1).to({regX:485,regY:45,scaleX:0.9998,scaleY:0.9998,x:484.9,y:45},0).wait(1).to({scaleX:0.9997,scaleY:0.9997},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,x:484.8,y:45.05},0).wait(1).to({scaleX:0.9993,scaleY:0.9993,x:484.75,y:45},0).wait(1).to({scaleX:0.9992,scaleY:0.9992,x:484.7,y:45.05},0).wait(1).to({scaleX:0.999,scaleY:0.999,x:484.65},0).wait(1).to({scaleX:0.9988,scaleY:0.9988,x:484.6,y:45.1},0).wait(1).to({scaleX:0.9987,scaleY:0.9986,x:484.55},0).wait(1).to({scaleX:0.9985,scaleY:0.9985,x:484.45,y:45.15},0).wait(1).to({scaleX:0.9983,scaleY:0.9983,y:45.1},0).wait(1).to({scaleX:0.9982,scaleY:0.9981,x:484.35},0).wait(1).to({scaleX:0.998,scaleY:0.998,y:45.15},0).wait(1).to({scaleX:0.9978,scaleY:0.9978,x:484.3},0).wait(1).to({scaleX:0.9977,scaleY:0.9976,x:484.2,y:45.2},0).wait(1).to({scaleX:0.9975,scaleY:0.9975},0).wait(1).to({scaleX:0.9974,scaleY:0.9973,x:484.1,y:45.25},0).wait(1).to({scaleX:0.9972,scaleY:0.9971,y:45.2},0).wait(1).to({scaleX:0.997,scaleY:0.997,x:484},0).wait(1).to({scaleX:0.9969,scaleY:0.9968,y:45.25},0).wait(1).to({scaleX:0.9967,scaleY:0.9966,x:483.9},0).wait(1).to({scaleX:0.9966,scaleY:0.9965,x:483.85,y:45.3},0).wait(1).to({scaleX:0.9964,scaleY:0.9963,x:483.8},0).wait(1).to({scaleX:0.9962,scaleY:0.9961,x:483.75,y:45.35},0).wait(1).to({scaleX:0.9961,scaleY:0.996,x:483.7,y:45.3},0).wait(1).to({scaleX:0.9959,scaleY:0.9958,x:483.65},0).wait(1).to({scaleX:0.9958,scaleY:0.9957,x:483.6,y:45.35},0).wait(1).to({scaleX:0.9956,scaleY:0.9955},0).wait(1).to({scaleX:0.9955,scaleY:0.9954,x:483.5,y:45.4},0).wait(1).to({scaleX:0.9953,scaleY:0.9952},0).wait(1).to({scaleX:0.9952,scaleY:0.9951,x:483.4},0).wait(1).to({scaleX:0.9951,scaleY:0.9949},0).wait(1).to({scaleX:0.9949,scaleY:0.9948,x:483.35},0).wait(1).to({scaleX:0.9948,scaleY:0.9947,x:483.3,y:45.45},0).wait(1).to({scaleX:0.9947,scaleY:0.9945,x:483.25},0).wait(1).to({scaleX:0.9945,scaleY:0.9944,x:483.2},0).wait(1).to({scaleX:0.9944,scaleY:0.9943,y:45.5},0).wait(1).to({scaleX:0.9943,scaleY:0.9941,x:483.1},0).wait(1).to({scaleX:0.9941,scaleY:0.994},0).wait(1).to({scaleX:0.994,scaleY:0.9939,x:483.05},0).wait(1).to({scaleX:0.9939,scaleY:0.9938},0).wait(1).to({scaleX:0.9938,scaleY:0.9936,x:483},0).wait(1).to({scaleX:0.9937,scaleY:0.9935,x:482.9,y:45.55},0).wait(1).to({scaleX:0.9936,scaleY:0.9934},0).wait(1).to({scaleX:0.9934,scaleY:0.9933,x:482.85},0).wait(1).to({scaleX:0.9933,scaleY:0.9932,x:482.8},0).wait(1).to({scaleX:0.9932,scaleY:0.9931,y:45.6},0).wait(1).to({scaleX:0.9931,scaleY:0.993,x:482.75},0).wait(1).to({scaleX:0.993,scaleY:0.9928,x:482.7},0).wait(1).to({scaleX:0.9929,scaleY:0.9927},0).wait(1).to({scaleX:0.9928,scaleY:0.9926,x:482.65},0).wait(1).to({scaleX:0.9927,scaleY:0.9925,x:482.6},0).wait(1).to({scaleX:0.9926,scaleY:0.9924},0).wait(1).to({scaleX:0.9925,x:482.55,y:45.65},0).wait(1).to({scaleX:0.9924,scaleY:0.9923},0).wait(1).to({scaleY:0.9922},0).wait(1).to({scaleX:0.9923,scaleY:0.9921,x:482.5},0).wait(1).to({scaleX:0.9922,scaleY:0.992,x:482.45,y:45.7},0).wait(1).to({scaleX:0.9921,scaleY:0.9919,x:482.4},0).wait(1).to({scaleX:0.992,scaleY:0.9918},0).wait(1).to({scaleX:0.9919,scaleY:0.9917},0).wait(1).to({x:482.35,y:45.65},0).wait(1).to({scaleX:0.9918,scaleY:0.9916,x:482.3,y:45.7},0).wait(1).to({scaleX:0.9917,scaleY:0.9915,x:482.35},0).wait(1).to({scaleX:0.9916,scaleY:0.9914,x:482.3},0).wait(1).to({x:482.25},0).wait(1).to({scaleX:0.9915,scaleY:0.9913},0).wait(1).to({scaleX:0.9914,scaleY:0.9912,y:45.75},0).wait(1).to({x:482.2},0).wait(1).to({scaleX:0.9913,scaleY:0.9911},0).wait(1).to({scaleX:0.9912,scaleY:0.991,x:482.15},0).wait(1).to({x:482.1},0).wait(1).to({scaleX:0.9911,scaleY:0.9909,x:482.15},0).wait(1).to({x:482.1},0).wait(1).to({scaleX:0.991,scaleY:0.9908,y:45.8},0).wait(1).to({scaleY:0.9907,x:482.05},0).wait(1).to({scaleX:0.9909},0).wait(1).to({scaleY:0.9906},0).wait(1).to({scaleX:0.9908},0).wait(1).to({scaleY:0.9905,x:482,y:45.75},0).wait(1).to({scaleX:0.9907},0).wait(1).to({scaleY:0.9904,x:481.95,y:45.8},0).wait(1).to({scaleX:0.9906},0).wait(2).to({scaleX:0.9905,scaleY:0.9903},0).wait(2).to({scaleY:0.9902,x:481.9},0).wait(1).to({scaleX:0.9904},0).wait(2).to({scaleY:0.9901,x:481.85},0).wait(1).to({scaleX:0.9903,y:45.85},0).wait(2).to({scaleY:0.99,x:481.8},0).wait(1).to({scaleX:0.9902,x:481.85},0).wait(2).to({scaleY:0.9899},0).wait(1).to({scaleX:0.9901,x:481.8},0).wait(3).to({scaleY:0.9898},0).wait(1).to({scaleX:0.99,x:481.75},0).wait(3).to({scaleY:0.9897},0).wait(1).to({regX:150.2,regY:125,x:150.2,y:125},0).to({_off:true},1).wait(101));

	// headline22
	this.instance_7 = new lib.headline22_1();
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(247).to({_off:false},0).to({_off:true},5).wait(206));

	// headline21
	this.instance_8 = new lib.headline21_1();
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(247).to({_off:false},0).to({_off:true},5).wait(206));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_222 = new cjs.Graphics().p("A0LEdIAAo5MAq3AAAIAAI5gAcNEaIAAoIMAvYAAAIAAIIg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(222).to({graphics:mask_2_graphics_222,x:483.725,y:18.875}).wait(25).to({graphics:null,x:0,y:0}).wait(211));

	// text2_top
	this.instance_9 = new lib.text2_1();
	this.instance_9.setTransform(529.55,108.4,0.9302,0.9302,0,0,0,164.2,124.9);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(222).to({_off:false},0).wait(9).to({regX:164.3,x:525.85},0).wait(9).to({regX:164.2,x:529.55},0).to({_off:true},7).wait(211));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_222 = new cjs.Graphics().p("A0LIDIAAo4MAq3AAAIAAI4gAcNHTIAAoIMAvYAAAIAAIIg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(222).to({graphics:mask_3_graphics_222,x:483.725,y:51.525}).wait(25).to({graphics:null,x:0,y:0}).wait(211));

	// text2_bottom
	this.instance_10 = new lib.text2_1();
	this.instance_10.setTransform(529.55,108.4,0.9302,0.9302,0,0,0,164.2,124.9);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(222).to({_off:false},0).wait(4).to({regX:164.3,x:523.1},0).wait(4).to({x:539.85},0).wait(6).to({regX:164.4,x:520.4,alpha:0.7891},0).wait(4).to({regX:164.2,x:529.55,alpha:1},0).to({_off:true},7).wait(211));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_212 = new cjs.Graphics().p("A1KMIIAA4OMAqVAAAIAAYOg");
	var mask_4_graphics_361 = new cjs.Graphics().p("AtgHOIAAubIbBAAIAAObg");
	var mask_4_graphics_367 = new cjs.Graphics().p("AyWF8IAAr3MAktAAAIAAL3g");
	var mask_4_graphics_373 = new cjs.Graphics().p("A1KF8IAAr3MAqVAAAIAAL3g");
	var mask_4_graphics_377 = new cjs.Graphics().p("A1KHnIAAvNMAqVAAAIAAPNg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(212).to({graphics:mask_4_graphics_212,x:373.5,y:41.6}).wait(9).to({graphics:null,x:0,y:0}).wait(140).to({graphics:mask_4_graphics_361,x:355.5,y:33.55}).wait(6).to({graphics:mask_4_graphics_367,x:270.75,y:57.475}).wait(6).to({graphics:mask_4_graphics_373,x:260.5,y:2.075}).wait(4).to({graphics:mask_4_graphics_377,x:363.75,y:28.675}).wait(4).to({graphics:null,x:0,y:0}).wait(77));

	// back2
	this.instance_11 = new lib.back2_1();
	this.instance_11.setTransform(154.65,139.05,1.0703,1.0703,0,0,0,149.9,125);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(206).to({_off:false},0).to({_off:true},15).wait(140).to({_off:false,regX:150,regY:124.9,scaleX:1.0802,scaleY:1.0802,x:144.05,y:141.9},0).to({_off:true},20).wait(77));

	// back2
	this.instance_12 = new lib.back2_1();
	this.instance_12.setTransform(150,131.5,1,1,0,0,0,150,125);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(206).to({_off:false},0).wait(252));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_179 = new cjs.Graphics().p("EAj3AIYIAAwvIYYAAIAAQvg");
	var mask_5_graphics_186 = new cjs.Graphics().p("AWNF8IAAr3IYXAAIAAL3g");
	var mask_5_graphics_190 = new cjs.Graphics().p("AUIHlIAAq7IYXAAIAAK7g");
	var mask_5_graphics_195 = new cjs.Graphics().p("EAgWAJZIAAyxIYXAAIAASxg");
	var mask_5_graphics_204 = new cjs.Graphics().p("EAkYAHWIAArIIU0AAIAALIg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(179).to({graphics:mask_5_graphics_179,x:385.475,y:47.45}).wait(7).to({graphics:mask_5_graphics_186,x:298.05,y:30.05}).wait(4).to({graphics:mask_5_graphics_190,x:284.7,y:48.5}).wait(5).to({graphics:mask_5_graphics_195,x:362.9,y:41.125}).wait(9).to({graphics:mask_5_graphics_204,x:366.025,y:47.025}).wait(2).to({graphics:null,x:0,y:0}).wait(252));

	// player2
	this.instance_13 = new lib.player_1();
	this.instance_13.setTransform(124.7,142.05,1.106,1.106,0,0,0,149.8,124.8);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(179).to({_off:false},0).to({_off:true},27).wait(252));

	// player1
	this.instance_14 = new lib.player_1();
	this.instance_14.setTransform(149.9,125,1.0233,1.0233,0,0,0,149.9,125);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(179).to({_off:false},0).to({regX:150,scaleX:1,scaleY:1,x:150},27,cjs.Ease.quadOut).wait(252));

	// headline1
	this.instance_15 = new lib.headline1();
	this.instance_15.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(65).to({_off:false},0).to({regX:150.2,regY:125.1,scaleX:0.9901,scaleY:0.99,x:150.2,y:125.1},113).wait(280));

	// headline12
	this.instance_16 = new lib.headline12_1();
	this.instance_16.setTransform(189,125,1,1,0,0,0,150,125);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50).to({_off:false},0).wait(5).to({x:159},0).wait(4).to({x:229},0).wait(5).to({x:150},0).to({_off:true},1).wait(393));

	// headline11
	this.instance_17 = new lib.headline11_1();
	this.instance_17.setTransform(86,125,1,1,0,0,0,150,125);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50).to({_off:false},0).wait(5).to({x:156},0).wait(4).to({x:151},0).wait(5).to({x:150},0).to({_off:true},1).wait(393));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_0 = new cjs.Graphics().p("EgqAADsIAAnXMBUBAAAIAAHXg");
	var mask_6_graphics_34 = new cjs.Graphics().p("EgqHAD2IAAnrMBUPAAAIAAHrg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:mask_6_graphics_0,x:731.15,y:37.325}).wait(34).to({graphics:mask_6_graphics_34,x:697.075,y:-4.6}).wait(16).to({graphics:null,x:0,y:0}).wait(408));

	// text1_top
	this.instance_18 = new lib.text1_1();
	this.instance_18.setTransform(665.45,113.35,0.745,0.745,0,0,0,251.6,125);

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(12).to({x:667.7,alpha:0.8594},0).wait(4).to({x:663.95,alpha:1},0).wait(6).to({x:661.7},0).wait(3).to({x:665.45},0).wait(9).to({x:635.05,y:73.05},0).to({_off:true},16).wait(408));

	// mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_0 = new cjs.Graphics().p("EgqAADsIAAnXMBUBAAAIAAHXg");
	var mask_7_graphics_34 = new cjs.Graphics().p("EgqHAD2IAAnrMBUPAAAIAAHrg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:mask_7_graphics_0,x:731.15,y:83.6}).wait(34).to({graphics:mask_7_graphics_34,x:697.075,y:43.575}).wait(16).to({graphics:null,x:0,y:0}).wait(408));

	// text1_bottom
	this.instance_19 = new lib.text1_1();
	this.instance_19.setTransform(665.45,113.35,0.745,0.745,0,0,0,251.6,125);

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10).to({x:650.55},0).wait(5).to({x:704.95,alpha:0.7305},0).wait(5).to({x:643.1,alpha:1},0).wait(5).to({x:665.45},0).wait(9).to({x:635.05,y:73.05},0).wait(5).to({x:611.25},0).wait(7).to({x:649.95,alpha:0.7305},0).to({_off:true},4).wait(408));

	// mask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_152 = new cjs.Graphics().p("AGjHTIAAulIVWAAIAAOlg");
	var mask_8_graphics_156 = new cjs.Graphics().p("An/G/IAApbMAiUAAAIAAJbg");
	var mask_8_graphics_164 = new cjs.Graphics().p("AiVG3IAAttMAiUAAAIAANtg");
	var mask_8_graphics_169 = new cjs.Graphics().p("AnrFnIAAl4MAiUAAAIAAF4g");
	var mask_8_graphics_175 = new cjs.Graphics().p("AIFHwIAAveIRjAAIAAPeg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(152).to({graphics:mask_8_graphics_152,x:178.525,y:35.4}).wait(4).to({graphics:mask_8_graphics_156,x:168.5,y:44.725}).wait(8).to({graphics:mask_8_graphics_164,x:204.65,y:38}).wait(5).to({graphics:mask_8_graphics_169,x:170.475,y:35.85}).wait(6).to({graphics:mask_8_graphics_175,x:164.025,y:37.45}).wait(283));

	// back1
	this.instance_20 = new lib.back_image();
	this.instance_20.setTransform(93.15,139.95,1.195,1.195,0,0,0,150,125);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(152).to({_off:false},0).wait(306));

	// back1
	this.back1 = new lib.back1_1();
	this.back1.name = "back1";
	this.back1.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.back1).wait(458));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(421,24.9,660.5999999999999,76.9);
// library properties:
lib.properties = {
	id: 'E3CAD0644C274132B22676728C38525C',
	width: 970,
	height: 90,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back1.jpg?1605816228074", id:"back1"},
		{src:"images/back2.jpg?1605816228074", id:"back2"},
		{src:"images/cta.png?1605816228074", id:"cta"},
		{src:"images/headline11.png?1605816228074", id:"headline11"},
		{src:"images/headline12.png?1605816228074", id:"headline12"},
		{src:"images/headline21.png?1605816228074", id:"headline21"},
		{src:"images/headline22.png?1605816228074", id:"headline22"},
		{src:"images/headline31.png?1605816228074", id:"headline31"},
		{src:"images/headline32.png?1605816228074", id:"headline32"},
		{src:"images/headline33.png?1605816228074", id:"headline33"},
		{src:"images/logo.png?1605816228074", id:"logo"},
		{src:"images/player.jpg?1605816228074", id:"player"},
		{src:"images/runner.png?1605816228074", id:"runner"},
		{src:"images/text1.png?1605816228074", id:"text1"},
		{src:"images/text2.png?1605816228074", id:"text2"},
		{src:"images/toyota.png?1605816228074", id:"toyota"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

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
an.compositions['E3CAD0644C274132B22676728C38525C'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;