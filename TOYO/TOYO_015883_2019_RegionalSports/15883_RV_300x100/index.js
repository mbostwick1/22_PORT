(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back1 = function() {
	this.initialize(img.back1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,200);


(lib.back2 = function() {
	this.initialize(img.back2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,200);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,200);


(lib.headline11 = function() {
	this.initialize(img.headline11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,200);


(lib.headline12 = function() {
	this.initialize(img.headline12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,200);


(lib.headline21 = function() {
	this.initialize(img.headline21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,200);


(lib.headline22 = function() {
	this.initialize(img.headline22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,200);


(lib.headline31 = function() {
	this.initialize(img.headline31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,200);


(lib.headline32 = function() {
	this.initialize(img.headline32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,200);


(lib.headline33 = function() {
	this.initialize(img.headline33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,200);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,200);


(lib.player = function() {
	this.initialize(img.player);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,200);


(lib.runner = function() {
	this.initialize(img.runner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,200);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1006,500);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,633,174);


(lib.toyota = function() {
	this.initialize(img.toyota);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,200);// helper functions:

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
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.toyota_1, new cjs.Rectangle(0,0,300,100), null);


(lib.text2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2_1, new cjs.Rectangle(0,0,316.5,87), null);


(lib.text1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text1_top
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1_1, new cjs.Rectangle(0,0,503,250), null);


(lib.runner_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.runner();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.runner_1, new cjs.Rectangle(0,0,300,100), null);


(lib.player_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.player();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.player_1, new cjs.Rectangle(0,0,300,100), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,300,100), null);


(lib.invisible_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.headline33_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.headline33();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.headline33_1, new cjs.Rectangle(0,0,300,100), null);


(lib.headline32_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.headline32();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.headline32_1, new cjs.Rectangle(0,0,300,100), null);


(lib.headline31_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.headline31();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.headline31_1, new cjs.Rectangle(0,0,300,100), null);


(lib.headline22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.headline22();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.headline22_1, new cjs.Rectangle(0,0,300,100), null);


(lib.headline21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.headline21();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.headline21_1, new cjs.Rectangle(0,0,300,100), null);


(lib.headline12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.headline12();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.headline12_1, new cjs.Rectangle(0,0,300,100), null);


(lib.headline11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.headline11();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.headline11_1, new cjs.Rectangle(0,0,300,100), null);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,300,100), null);


(lib.back2_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.back2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.back2_image, new cjs.Rectangle(0,0,300,100), null);


(lib.back1_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.back1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.back1_image, new cjs.Rectangle(0,0,300,100), null);


(lib.back_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.back1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.back_image, new cjs.Rectangle(0,0,300,100), null);


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
	var mask_graphics_0 = new cjs.Graphics().p("AreAjIAAhFIW9AAIAABFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:234.5,y:49.6}).wait(163).to({graphics:null,x:0,y:0}).wait(1));

	// headline3_bottom
	this.instance = new lib.headline33_1();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({x:148},0).wait(3).to({x:150,alpha:0.8008},0).wait(5).to({alpha:1},0).to({_off:true},1).wait(129));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AreAjIAAhFIW9AAIAABFg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AreAyIAAhjIW9AAIAABjg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:234.5,y:42.6}).wait(22).to({graphics:mask_1_graphics_22,x:193.5,y:71}).wait(13).to({graphics:null,x:0,y:0}).wait(129));

	// headline3_top
	this.instance_1 = new lib.headline33_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({x:152},0).wait(5).to({x:146},0).wait(3).to({x:152,alpha:0.8008},0).wait(4).to({x:150,alpha:1},0).wait(130));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AAFDIIAAhaIXIAAIAABag");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:148.4917,y:19.9932}).wait(163).to({graphics:null,x:0,y:0}).wait(1));

	// headline2_bottom
	this.instance_2 = new lib.headline32_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({x:152},0).wait(5).to({x:150,alpha:0.8203},0).wait(7).to({alpha:1},0).to({_off:true},129).wait(1));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AAFCbIAAhaIXIAAIAABag");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:148.4917,y:15.4934}).wait(163).to({graphics:null,x:0,y:0}).wait(1));

	// headline2_top
	this.instance_3 = new lib.headline32_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({x:140},0).wait(6).to({x:155,alpha:0.6914},0).wait(3).to({x:144,alpha:1},0).wait(5).to({x:150},0).wait(130));

	// headline1_bottom
	this.instance_4 = new lib.headline31_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},163).wait(1));

	// headline1_top
	this.instance_5 = new lib.headline31_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(164));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,100);


(lib.headline2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABpDbIAAipIWqAAIAACpg");
	mask.setTransform(155.5243,21.8732);

	// headline2_top
	this.instance = new lib.headline22_1();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({x:149},0).wait(6).to({x:150,alpha:0.8203},0).wait(3).to({alpha:1},0).wait(158));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ABpErIAAipIWqAAIAACpg");
	mask_1.setTransform(155.5243,29.9314);

	// headline2_bottom
	this.instance_1 = new lib.headline22_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({x:157},0).wait(4).to({x:145},0).wait(6).to({x:147,alpha:0.8203},0).wait(3).to({x:150,alpha:1},0).wait(156));

	// headline1_bottom
	this.instance_2 = new lib.headline21_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,307,100);


(lib.headline1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsGBLIAAiVIYNAAIAACVg");
	mask.setTransform(236.5,30.5);

	// headline2_top
	this.instance = new lib.headline12_1();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({x:147},0).wait(4).to({x:142},0).wait(4).to({x:137},0).wait(2).to({x:150},0).wait(137));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AsGBLIAAiVIYNAAIAACVg");
	mask_1.setTransform(236.5,45.5);

	// headline2_bottom
	this.instance_1 = new lib.headline12_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({x:142},0).wait(3).to({x:169},0).wait(5).to({x:141},0).wait(4).to({x:150},0).wait(137));

	// headline1_bottom
	this.instance_2 = new lib.headline11_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,314,100);


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
	this.instance.parent = this;
	this.instance.setTransform(150.05,125.05,1.056,1.056,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:150,y:125},480).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-6.9,316.8,107);


(lib.back1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// back1
	this.instance = new lib.back1_image();
	this.instance.parent = this;
	this.instance.setTransform(159.05,126.95,1.0882,1.0882,0,0,0,150,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:125,scaleX:1,scaleY:1,x:152,y:119},299).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-8.9,326.59999999999997,108.80000000000001);


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
	this.clickTag.parent = this;
	this.clickTag.setTransform(150,50,1.875,0.1667,0,0,0,80,300);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(458));

	// toyota
	this.instance = new lib.toyota_1();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(361).to({_off:false},0).wait(97));

	// rav4
	this.instance_1 = new lib.runner_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},361).wait(97));

	// logo
	this.instance_2 = new lib.logo_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(458));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_364 = new cjs.Graphics().p("AnLA0IAAhnIOXAAIAABng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(364).to({graphics:mask_graphics_364,x:260,y:78.825}).wait(94));

	// cta_too
	this.instance_3 = new lib.cta_1();
	this.instance_3.parent = this;
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
	var mask_1_graphics_364 = new cjs.Graphics().p("AnLA0IAAhnIOXAAIAABng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(364).to({graphics:mask_1_graphics_364,x:260,y:88.875}).wait(94));

	// cta_bottom
	this.instance_4 = new lib.cta_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(155,125,1,1,0,0,0,150,125);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(364).to({_off:false},0).wait(5).to({x:144},0).wait(8).to({x:155},0).wait(4).to({x:150},0).wait(77));

	// headline3
	this.instance_5 = new lib.headline3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(357).to({_off:false},0).to({regX:150.3,scaleX:0.9901,scaleY:0.9887,x:150.3,y:125.05},100,cjs.Ease.quadOut).wait(1));

	// headline2
	this.instance_6 = new lib.headline2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(252).to({_off:false},0).wait(1).to({regX:153.5,regY:50,scaleX:0.9998,scaleY:0.9998,x:153.45,y:50},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,x:153.5},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,x:153.45},0).wait(1).to({scaleX:0.9993,scaleY:0.9993,x:153.5},0).wait(1).to({scaleX:0.9992,scaleY:0.9992,x:153.45,y:50.05},0).wait(1).to({scaleX:0.999,scaleY:0.999,x:153.5},0).wait(1).to({scaleX:0.9988,scaleY:0.9988,x:153.45,y:50.1},0).wait(1).to({scaleX:0.9987,scaleY:0.9986,x:153.5},0).wait(1).to({scaleX:0.9985,scaleY:0.9985,x:153.45},0).wait(1).to({scaleX:0.9983,scaleY:0.9983,x:153.5},0).wait(1).to({scaleX:0.9982,scaleY:0.9981,x:153.45},0).wait(1).to({scaleX:0.998,scaleY:0.998,x:153.5,y:50.15},0).wait(1).to({scaleX:0.9978,scaleY:0.9978},0).wait(1).to({scaleX:0.9977,scaleY:0.9976,y:50.2},0).wait(1).to({scaleX:0.9975,scaleY:0.9975,y:50.15},0).wait(1).to({scaleX:0.9974,scaleY:0.9973,y:50.2},0).wait(1).to({scaleX:0.9972,scaleY:0.9971},0).wait(1).to({scaleX:0.997,scaleY:0.997},0).wait(1).to({scaleX:0.9969,scaleY:0.9968,y:50.25},0).wait(1).to({scaleX:0.9967,scaleY:0.9966},0).wait(1).to({scaleX:0.9966,scaleY:0.9965},0).wait(1).to({scaleX:0.9964,scaleY:0.9963},0).wait(1).to({scaleX:0.9962,scaleY:0.9961,y:50.3},0).wait(1).to({scaleX:0.9961,scaleY:0.996},0).wait(1).to({scaleX:0.9959,scaleY:0.9958},0).wait(1).to({scaleX:0.9958,scaleY:0.9957,y:50.35},0).wait(1).to({scaleX:0.9956,scaleY:0.9955,x:153.55},0).wait(1).to({scaleX:0.9955,scaleY:0.9954,x:153.5},0).wait(1).to({scaleX:0.9953,scaleY:0.9952,x:153.55},0).wait(1).to({scaleX:0.9952,scaleY:0.9951,x:153.5},0).wait(1).to({scaleX:0.9951,scaleY:0.9949,x:153.55,y:50.4},0).wait(1).to({scaleX:0.9949,scaleY:0.9948,x:153.5},0).wait(1).to({scaleX:0.9948,scaleY:0.9947,x:153.55,y:50.45},0).wait(1).to({scaleX:0.9947,scaleY:0.9945},0).wait(1).to({scaleX:0.9945,scaleY:0.9944,x:153.5,y:50.4},0).wait(1).to({scaleX:0.9944,scaleY:0.9943,x:153.55,y:50.45},0).wait(1).to({scaleX:0.9943,scaleY:0.9941,x:153.5},0).wait(1).to({scaleX:0.9941,scaleY:0.994,x:153.55},0).wait(1).to({scaleX:0.994,scaleY:0.9939,y:50.5},0).wait(1).to({scaleX:0.9939,scaleY:0.9938},0).wait(1).to({scaleX:0.9938,scaleY:0.9936},0).wait(1).to({scaleX:0.9937,scaleY:0.9935},0).wait(1).to({scaleX:0.9936,scaleY:0.9934},0).wait(1).to({scaleX:0.9934,scaleY:0.9933},0).wait(1).to({scaleX:0.9933,scaleY:0.9932,x:153.5},0).wait(1).to({scaleX:0.9932,scaleY:0.9931,x:153.55,y:50.55},0).wait(1).to({scaleX:0.9931,scaleY:0.993},0).wait(1).to({scaleX:0.993,scaleY:0.9928},0).wait(1).to({scaleX:0.9929,scaleY:0.9927,y:50.6},0).wait(1).to({scaleX:0.9928,scaleY:0.9926},0).wait(1).to({scaleX:0.9927,scaleY:0.9925},0).wait(1).to({scaleX:0.9926,scaleY:0.9924,y:50.55},0).wait(1).to({scaleX:0.9925,y:50.6},0).wait(1).to({scaleX:0.9924,scaleY:0.9923},0).wait(1).to({scaleY:0.9922},0).wait(1).to({scaleX:0.9923,scaleY:0.9921},0).wait(1).to({scaleX:0.9922,scaleY:0.992,y:50.65},0).wait(1).to({scaleX:0.9921,scaleY:0.9919},0).wait(1).to({scaleX:0.992,scaleY:0.9918},0).wait(1).to({scaleX:0.9919,scaleY:0.9917},0).wait(2).to({scaleX:0.9918,scaleY:0.9916,y:50.7},0).wait(1).to({scaleX:0.9917,scaleY:0.9915,x:153.6},0).wait(1).to({scaleX:0.9916,scaleY:0.9914,x:153.55,y:50.65},0).wait(2).to({scaleX:0.9915,scaleY:0.9913},0).wait(1).to({scaleX:0.9914,scaleY:0.9912,x:153.6,y:50.7},0).wait(1).to({x:153.55},0).wait(1).to({scaleX:0.9913,scaleY:0.9911},0).wait(1).to({scaleX:0.9912,scaleY:0.991},0).wait(2).to({scaleX:0.9911,scaleY:0.9909,x:153.6},0).wait(2).to({scaleX:0.991,scaleY:0.9908,x:153.55,y:50.75},0).wait(1).to({scaleY:0.9907},0).wait(1).to({scaleX:0.9909},0).wait(1).to({scaleY:0.9906,x:153.6},0).wait(1).to({scaleX:0.9908},0).wait(1).to({scaleY:0.9905},0).wait(1).to({scaleX:0.9907,x:153.55,y:50.7},0).wait(1).to({scaleY:0.9904,y:50.75},0).wait(1).to({scaleX:0.9906},0).wait(2).to({scaleX:0.9905,scaleY:0.9903,x:153.6},0).wait(2).to({scaleY:0.9902},0).wait(1).to({scaleX:0.9904},0).wait(1).to({x:153.55},0).wait(1).to({scaleY:0.9901},0).wait(1).to({scaleX:0.9903,y:50.8},0).wait(2).to({scaleY:0.99},0).wait(1).to({scaleX:0.9902,x:153.6},0).wait(2).to({scaleY:0.9899},0).wait(1).to({scaleX:0.9901},0).wait(3).to({scaleY:0.9898},0).wait(1).to({scaleX:0.99,x:153.55},0).wait(3).to({scaleY:0.9897},0).wait(1).to({regX:150.2,regY:125,x:150.2,y:125},0).to({_off:true},1).wait(101));

	// headline22
	this.instance_7 = new lib.headline22_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(247).to({_off:false},0).to({_off:true},5).wait(206));

	// headline21
	this.instance_8 = new lib.headline21_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(247).to({_off:false},0).to({_off:true},5).wait(206));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_222 = new cjs.Graphics().p("AkbFrIAAovIfjAAIAAIvgA7HB1IAAnfIWrAAIAAHfg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(222).to({graphics:mask_2_graphics_222,x:164.475,y:26.725}).wait(25).to({graphics:null,x:0,y:0}).wait(211));

	// text2_top
	this.instance_9 = new lib.text2_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(161.2,131,1,1,0,0,0,164.2,125);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(222).to({_off:false},0).wait(9).to({x:157.2},0).wait(9).to({x:161.2},0).to({_off:true},7).wait(211));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_222 = new cjs.Graphics().p("AkbJOIAAowIfjAAIAAIwgA7HEIIAAnfIWrAAIAAHfg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(222).to({graphics:mask_3_graphics_222,x:164.475,y:59}).wait(25).to({graphics:null,x:0,y:0}).wait(211));

	// text2_bottom
	this.instance_10 = new lib.text2_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(161.2,131,1,1,0,0,0,164.2,125);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(222).to({_off:false},0).wait(4).to({x:154.2},0).wait(4).to({x:172.2},0).wait(6).to({x:151.2,alpha:0.7891},0).wait(4).to({x:161.2,alpha:1},0).to({_off:true},7).wait(211));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_212 = new cjs.Graphics().p("Aq1IqIAAxTIePAAIAARTg");
	var mask_4_graphics_361 = new cjs.Graphics().p("AtgLfIAA29IbBAAIAAW9g");
	var mask_4_graphics_367 = new cjs.Graphics().p("AyWJdIAAy5MAktAAAIAAS5g");
	var mask_4_graphics_373 = new cjs.Graphics().p("A1KJdIAAy5MAqVAAAIAAS5g");
	var mask_4_graphics_377 = new cjs.Graphics().p("A1KMIIAA4OMAqVAAAIAAYOg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(212).to({graphics:mask_4_graphics_212,x:124.1818,y:23.086}).wait(9).to({graphics:null,x:0,y:0}).wait(140).to({graphics:mask_4_graphics_361,x:213.5,y:176.5}).wait(6).to({graphics:mask_4_graphics_367,x:182.5,y:148.55}).wait(6).to({graphics:mask_4_graphics_373,x:115.5,y:86.55}).wait(4).to({graphics:mask_4_graphics_377,x:159.5,y:86.6}).wait(4).to({graphics:null,x:0,y:0}).wait(77));

	// back2
	this.instance_11 = new lib.back2_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(161,133,1.0847,1.0847,0,0,0,149.8,124.9);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(206).to({_off:false},0).to({_off:true},15).wait(140).to({_off:false,regX:150,scaleX:1.0802,scaleY:1.0802,x:157.05,y:123.9},0).to({_off:true},20).wait(77));

	// back2
	this.instance_12 = new lib.back2_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,126,1,1,0,0,0,150,125);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(206).to({_off:false},0).wait(252));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_179 = new cjs.Graphics().p("AqCIFIAAwJIUFAAIAAQJg");
	var mask_5_graphics_186 = new cjs.Graphics().p("AqCIFIAAwJIUFAAIAAQJg");
	var mask_5_graphics_190 = new cjs.Graphics().p("AqCIFIAAwJIUFAAIAAQJg");
	var mask_5_graphics_195 = new cjs.Graphics().p("AqCIFIAAwJIUFAAIAAQJg");
	var mask_5_graphics_200 = new cjs.Graphics().p("AuYJTIAAylIcxAAIAASlg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(179).to({graphics:mask_5_graphics_179,x:258.15,y:70.45}).wait(7).to({graphics:mask_5_graphics_186,x:124.1,y:45.75}).wait(4).to({graphics:mask_5_graphics_190,x:211.85,y:54.45}).wait(5).to({graphics:mask_5_graphics_195,x:264.85,y:15.35}).wait(5).to({graphics:mask_5_graphics_200,x:192.8,y:-5.45}).wait(6).to({graphics:null,x:0,y:0}).wait(252));

	// player2
	this.instance_13 = new lib.player_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,145.9,1.1856,1.1856,0,0,0,149.8,124.7);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(179).to({_off:false},0).to({_off:true},27).wait(252));

	// player1
	this.instance_14 = new lib.player_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(149.9,125,1.0233,1.0233,0,0,0,149.9,125);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(179).to({_off:false},0).to({regX:150,scaleX:1,scaleY:1,x:150},27,cjs.Ease.quadOut).wait(252));

	// headline1
	this.instance_15 = new lib.headline1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(65).to({_off:false},0).to({regX:150.2,regY:125.1,scaleX:0.9901,scaleY:0.99,x:150.2,y:125.1},113).wait(280));

	// headline12
	this.instance_16 = new lib.headline12_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(189,125,1,1,0,0,0,150,125);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50).to({_off:false},0).wait(5).to({x:159},0).wait(4).to({x:229},0).wait(5).to({x:150},0).to({_off:true},1).wait(393));

	// headline11
	this.instance_17 = new lib.headline11_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(86,125,1,1,0,0,0,150,125);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50).to({_off:false},0).wait(5).to({x:156},0).wait(4).to({x:151},0).wait(5).to({x:150},0).to({_off:true},1).wait(393));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_0 = new cjs.Graphics().p("Egi8ADVIAAmpMBF5AAAIAAGpg");
	var mask_6_graphics_34 = new cjs.Graphics().p("Egi8AE5IAAmpMBFaAAAIAAjIIAfAAIAAGpIgfAAIAADIg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:mask_6_graphics_0,x:165.65,y:7.7}).wait(34).to({graphics:mask_6_graphics_34,x:333.425,y:54.225}).wait(16).to({graphics:null,x:0,y:0}).wait(408));

	// text1_top
	this.instance_18 = new lib.text1_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(166.95,20.65,0.8347,0.8347,0,0,0,251.6,125);

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(12).to({x:169.45,alpha:0.8594},0).wait(4).to({regX:251.5,x:165.2,alpha:1},0).wait(6).to({x:162.7},0).wait(3).to({regX:251.6,x:166.95},0).wait(9).to({regX:251.5,x:334.7,y:77.2},0).to({_off:true},16).wait(408));

	// mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_0 = new cjs.Graphics().p("Egi8ADVIAAmpMBF5AAAIAAGpg");
	var mask_7_graphics_34 = new cjs.Graphics().p("Egi8AE5IAAmpMBFaAAAIAAjIIAfAAIAAGpIgfAAIAADIg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:mask_7_graphics_0,x:165.65,y:49.425}).wait(34).to({graphics:mask_7_graphics_34,x:333.425,y:95.95}).wait(16).to({graphics:null,x:0,y:0}).wait(408));

	// text1_bottom
	this.instance_19 = new lib.text1_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(166.95,20.65,0.8347,0.8347,0,0,0,251.6,125);

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10).to({regX:251.5,x:150.2},0).wait(5).to({regX:251.6,x:211.15,alpha:0.7305},0).wait(5).to({regX:251.5,x:141.85,alpha:1},0).wait(5).to({regX:251.6,x:166.95},0).wait(9).to({regX:251.5,x:334.7,y:77.2},0).wait(5).to({x:307.95},0).wait(7).to({regX:251.4,x:351.35,alpha:0.7305},0).to({_off:true},4).wait(408));

	// mask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_152 = new cjs.Graphics().p("AsIFJIAAqRIYRAAIAAKRg");
	var mask_8_graphics_156 = new cjs.Graphics().p("Am7G7IAAqQIYRAAIAAKQg");
	var mask_8_graphics_164 = new cjs.Graphics().p("AooHdIAAu5IYRAAIAAO5g");
	var mask_8_graphics_169 = new cjs.Graphics().p("ArzEYIAAkXIYRAAIAAEXg");
	var mask_8_graphics_175 = new cjs.Graphics().p("Ap2H0IAAqEIYRAAIAAKEg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(152).to({graphics:mask_8_graphics_152,x:65.3791,y:21.9876}).wait(4).to({graphics:mask_8_graphics_156,x:110.9687,y:44.2767}).wait(8).to({graphics:mask_8_graphics_164,x:100.1125,y:46.5855}).wait(5).to({graphics:mask_8_graphics_169,x:79.8285,y:27.9924}).wait(6).to({graphics:mask_8_graphics_175,x:92.3293,y:49.9905}).wait(283));

	// back1
	this.instance_20 = new lib.back_image();
	this.instance_20.parent = this;
	this.instance_20.setTransform(159.05,135.95,1.1521,1.1521,0,0,0,150,125);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(152).to({_off:false},0).wait(306));

	// back1
	this.back1 = new lib.back1_1();
	this.back1.name = "back1";
	this.back1.parent = this;
	this.back1.setTransform(148,131,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.back1).wait(458));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(86,36.4,471.1,90.9);
// library properties:
lib.properties = {
	id: 'E3CAD0644C274132B22676728C38525C',
	width: 300,
	height: 100,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back1.jpg?1579106259155", id:"back1"},
		{src:"images/back2.jpg?1579106259155", id:"back2"},
		{src:"images/cta.png?1579106259155", id:"cta"},
		{src:"images/headline11.png?1579106259155", id:"headline11"},
		{src:"images/headline12.png?1579106259155", id:"headline12"},
		{src:"images/headline21.png?1579106259155", id:"headline21"},
		{src:"images/headline22.png?1579106259155", id:"headline22"},
		{src:"images/headline31.png?1579106259155", id:"headline31"},
		{src:"images/headline32.png?1579106259155", id:"headline32"},
		{src:"images/headline33.png?1579106259155", id:"headline33"},
		{src:"images/logo.png?1579106259155", id:"logo"},
		{src:"images/player.jpg?1579106259155", id:"player"},
		{src:"images/runner.png?1579106259155", id:"runner"},
		{src:"images/text1.png?1579106259155", id:"text1"},
		{src:"images/text2.png?1579106259155", id:"text2"},
		{src:"images/toyota.png?1579106259155", id:"toyota"}
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
an.compositions['E3CAD0644C274132B22676728C38525C'] = {
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