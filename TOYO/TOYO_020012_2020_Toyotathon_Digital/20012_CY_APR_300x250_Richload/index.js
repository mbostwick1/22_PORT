(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.bookCover = function() {
	this.initialize(img.bookCover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,417);


(lib.CL = function() {
	this.initialize(img.CL);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,417);


(lib.CL_wheel = function() {
	this.initialize(img.CL_wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.CY = function() {
	this.initialize(img.CY);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,417);


(lib.CY_wheel = function() {
	this.initialize(img.CY_wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.details = function() {
	this.initialize(img.details);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.HI = function() {
	this.initialize(img.HI);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,417);


(lib.HI_wheel = function() {
	this.initialize(img.HI_wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.offerTitle = function() {
	this.initialize(img.offerTitle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.options = function() {
	this.initialize(img.options);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.pageFlip = function() {
	this.initialize(img.pageFlip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,235);


(lib.redTree = function() {
	this.initialize(img.redTree);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,416);


(lib.RV = function() {
	this.initialize(img.RV);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,417);


(lib.RV_wheel = function() {
	this.initialize(img.RV_wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


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
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text5 = function() {
	this.initialize(img.text5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.whiteTree = function() {
	this.initialize(img.whiteTree);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,337);// helper functions:

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


(lib.whiteTree_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.whiteTree();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whiteTree_right, new cjs.Rectangle(0,0,150,168.5), null);


(lib.sparkle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAAIgzgDIAzgGIACg3IAIA3IA6AFIg6AEIgCBAg");
	this.shape.setTransform(6,6.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sparkle, new cjs.Rectangle(0,0,12,12.9), null);


(lib.RV_wheel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RV_wheel();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RV_wheel_mc, new cjs.Rectangle(0,0,75,75), null);


(lib.RV_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// car
	this.instance = new lib.RV();
	this.instance.setTransform(0,0,0.6,0.5995);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RV_1, new cjs.Rectangle(0,0,300,250), null);


(lib.redTree_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.redTree();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redTree_right, new cjs.Rectangle(0,0,140,208), null);


(lib.redTree_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.redTree();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redTree_left, new cjs.Rectangle(0,0,140,208), null);


(lib.pageFlip_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pageFlip();
	this.instance.setTransform(0,0,0.5001,0.4861);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pageFlip_1, new cjs.Rectangle(0,0,114,114.3), null);


(lib.options_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.options();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.options_1, new cjs.Rectangle(0,0,300,250), null);


(lib.offer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// *
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAHIgIAPIgJgGIAMgNIgRgDIADgLIAQAHIgBgRIAKAAIgCARIAQgHIADALIgQADIALANIgJAGg");
	this.shape.setTransform(112.625,9.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// dynamic_field1
	this.dynamic_field1 = new cjs.Text("0.0%", "27px 'Toyota Type'", "#FFFFFF");
	this.dynamic_field1.name = "dynamic_field1";
	this.dynamic_field1.textAlign = "right";
	this.dynamic_field1.lineHeight = 39;
	this.dynamic_field1.lineWidth = 63;
	this.dynamic_field1.parent = this;
	this.dynamic_field1.setTransform(112.35,-5.8,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field1).wait(1));

	// dynamic_field2
	this.dynamic_field2 = new cjs.Text("APR FOR 00 MONTHS", "7px 'Toyota Type'", "#FFFFFF");
	this.dynamic_field2.name = "dynamic_field2";
	this.dynamic_field2.textAlign = "right";
	this.dynamic_field2.lineHeight = 10;
	this.dynamic_field2.lineWidth = 162;
	this.dynamic_field2.parent = this;
	this.dynamic_field2.setTransform(197.7927,3.2,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field2).wait(1));

	// dynamic_field3
	this.dynamic_field3 = new cjs.Text("$0 DOWN WITH APPROVED CREDIT", "7px 'Toyota Type'", "#FFFFFF");
	this.dynamic_field3.name = "dynamic_field3";
	this.dynamic_field3.textAlign = "right";
	this.dynamic_field3.lineHeight = 7;
	this.dynamic_field3.lineWidth = 75;
	this.dynamic_field3.parent = this;
	this.dynamic_field3.setTransform(196.7286,11.2,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field3).wait(1));

	// dynamic_field4
	this.dynamic_field4 = new cjs.Text("PLUS $500 BONUS CASH", "bold 8px 'Toyota Type Black'", "#FFFFFF");
	this.dynamic_field4.name = "dynamic_field4";
	this.dynamic_field4.textAlign = "right";
	this.dynamic_field4.lineHeight = 8;
	this.dynamic_field4.lineWidth = 124;
	this.dynamic_field4.parent = this;
	this.dynamic_field4.setTransform(197.1321,30.95,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.offer_mc, new cjs.Rectangle(14,-8,186,55.3), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,300,250), null);


(lib.invisible_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.HI_wheel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HI_wheel();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HI_wheel_mc, new cjs.Rectangle(0,0,75,75), null);


(lib.HI_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HI();
	this.instance.setTransform(0,0,0.6,0.5995);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HI_1, new cjs.Rectangle(0,0,300,250), null);


(lib.details_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFFF").s().p("AizBGIAAiLIFnAAIAACLg");
	this.shape.setTransform(18,7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,14);


(lib.details_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.details();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.details_1, new cjs.Rectangle(0,0,300,250), null);


(lib.CY_wheel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CY_wheel();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CY_wheel_mc, new cjs.Rectangle(0,0,75,75), null);


(lib.CY_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// car
	this.instance = new lib.CY();
	this.instance.setTransform(0,0,0.6,0.5995);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CY_1, new cjs.Rectangle(0,0,300,250), null);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cta();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,300,250), null);


(lib.CL_wheel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CL_wheel();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CL_wheel_mc, new cjs.Rectangle(0,0,75,75), null);


(lib.CL_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CL();
	this.instance.setTransform(0,0,0.6,0.5995);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CL_1, new cjs.Rectangle(0,0,300,250), null);


(lib.bottomStar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghFOQgIgBgFgXIghjmQgBgJgEgJQgIgRgRABQgaAChJAJIhTAKQgKAAgGgDQgKgGAagQQAZgPAZgLIATgJIBZgxQAHgCAFgIQALgQgIgeQgIgegThaIgQhVQgCgNACgJQAFgSAVAWICfCtQADADAEABQAIADAHgJQAHgJA6g8IA4g6QANgGAKABQAVAAgKAgIhFDZIAPAdQALATCTDHIAFAVQgHANg9giQhjg4hbhDIgMgDQgMABgCAPIgUBbQgQBRgCAiQgLAYgJAAIgBAAg");
	this.shape.setTransform(6.0323,7.0172,0.1794,0.1794,14.9986);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bottomStar, new cjs.Rectangle(0.4,0.5,10.5,12.2), null);


(lib.bookCover_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bookCover();
	this.instance.setTransform(0,0,0.6,0.5995);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C1272C").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bookCover_1, new cjs.Rectangle(0,0,300,250), null);


(lib.back_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back_1, new cjs.Rectangle(0,0,300,250), null);


(lib.whiteTree_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_37 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(37).call(this.frame_37).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AQcQaMAAAggzIOYAAMAAAAgzg");
	mask.setTransform(197.25,56.5);

	// right
	this.instance = new lib.whiteTree_right();
	this.instance.setTransform(304,37,0.1107,1,0,0,83.0876,75,83.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:84,scaleX:1,skewY:0},37,cjs.Ease.backOut).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AJ+QaMAAAggzINvAAMAAAAgzg");
	mask_1.setTransform(151.7,56);

	// left
	this.instance_1 = new lib.whiteTree_right();
	this.instance_1.setTransform(304,37.15,0.0507,1,0,0,-74.754,75,84.1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:84,scaleX:1,skewY:0,y:37},37,cjs.Ease.backOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(222.6,-49,162.20000000000002,198.2);


(lib.star2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BottomStar
	this.instance = new lib.bottomStar();
	this.instance.setTransform(7.65,6.1,0.7562,0.5275,0,0,0,6.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:6.5,scaleX:1.0849,scaleY:1.0849,rotation:9.0165,x:7.75,y:6.25},34).to({regX:6.4,scaleX:0.6875,scaleY:0.6875,rotation:0,x:7.65,y:6.1},58).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,-1.1,13.3,14.799999999999999);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BottomStar
	this.instance = new lib.bottomStar();
	this.instance.setTransform(7.65,6.1,0.6875,0.6875,0,0,0,6.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:6.5,scaleX:1.085,scaleY:1.085,rotation:-5.9827,y:6.2},58).to({regY:6.4,scaleX:0.6875,scaleY:0.6875,rotation:0,y:6.1},61).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,-0.8,12.7,14.3);


(lib.sparkle_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Layer_1
	this.instance = new lib.sparkle();
	this.instance.setTransform(6.05,6.45,0.4917,0.4917,0,0,0,6,6.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:6.5,scaleX:0.6535,scaleY:0.6535,rotation:32.1422,x:6,y:6.65,alpha:1},5).to({regX:6.3,regY:6.4,scaleX:0.9449,scaleY:0.9449,rotation:90,x:5.95},17).to({regX:6.2,regY:6.3,scaleX:0.6858,scaleY:0.6858,rotation:107.1412,x:6.05,y:6.55},12).to({regX:6,regY:6.2,scaleX:0.4916,scaleY:0.4916,rotation:120.0012,x:6,y:6.45,alpha:0},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0.7,12.2,11.600000000000001);


(lib.RV_wheelSpinIn_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// wheel_mc
	this.instance = new lib.RV_wheel_mc();
	this.instance.setTransform(38,38,1,1,0,0,0,38,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9999,scaleY:0.9999,rotation:-720,x:38.05},44,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-15.5,107.19999999999999,107.1);


(lib.RV_AnimationIn_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ALMPVIjSiWIAAkEICghQIBaAKIAUAVQAYAaATAhQA8BpgNB9QgMB9hGAjQgZANgXAAQgKAAgKgDg");
	mask.setTransform(86.8578,98.3625);

	// wheelSpin_mc
	this.instance = new lib.RV_wheelSpinIn_mc();
	this.instance.setTransform(175.3,155.4,0.4735,0.5003,0,0,180,-0.3,0.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wheelSpin_mc
	this.instance_1 = new lib.RV_wheelSpinIn_mc();
	this.instance_1.setTransform(58.05,165.45,0.1905,0.3869,0,0,180,35.1,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// vehicle_mc
	this.instance_2 = new lib.RV_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RV_AnimationIn_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.redTree_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_37 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(37).call(this.frame_37).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AQfQaMAAAggzINwAAMAAAAgzg");
	mask.setTransform(193.5097,57.05);

	// right
	this.instance = new lib.redTree_right();
	this.instance.setTransform(299.05,56.95,0.1034,1,0,0,73.9617,70,103.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:104,scaleX:1,skewY:0,x:299,y:57},37,cjs.Ease.backOut).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AJuQaMAAAggzINtAAMAAAAgzg");
	mask_1.setTransform(149.8532,57.05);

	// left
	this.instance_1 = new lib.redTree_left();
	this.instance_1.setTransform(299.05,57.1,0.168,1,0,0,-80.2135,70,104);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,skewY:0,x:299,y:57},37,cjs.Ease.backOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(224,-47.9,150.7,210);


(lib.offerTitle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_80 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(80).call(this.frame_80).wait(1));

	// Layer_11
	this.instance = new lib.sparkle_anim();
	this.instance.setTransform(261.8,45.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).wait(9));

	// Layer_10
	this.instance_1 = new lib.sparkle_anim();
	this.instance_1.setTransform(133.35,40.2,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).wait(48));

	// Layer_8
	this.instance_2 = new lib.bottomStar();
	this.instance_2.setTransform(53.55,41.9,0.6875,0.6875,0,0,0,6.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(81));

	// Layer_7
	this.instance_3 = new lib.bottomStar();
	this.instance_3.setTransform(260.65,108.95,0.7562,0.5275,0,0,0,6.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(81));

	// Layer_6
	this.instance_4 = new lib.bottomStar();
	this.instance_4.setTransform(150.65,114.95,0.7562,0.5275,0,0,0,6.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(81));

	// Layer_5
	this.instance_5 = new lib.bottomStar();
	this.instance_5.setTransform(194.6,99.75,0.6875,0.6875,0,-44.9991,135.0009,6.2,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(81));

	// Layer_4
	this.instance_6 = new lib.bottomStar();
	this.instance_6.setTransform(89.5,56.9,0.6875,0.6875,0,14.9986,-165.0014,6.3,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(81));

	// Layer_3
	this.instance_7 = new lib.bottomStar();
	this.instance_7.setTransform(113.5,89.9,0.6875,0.6875,15.0001,0,0,6.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(81));

	// Layer_1
	this.instance_8 = new lib.offerTitle();
	this.instance_8.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(81));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.HI_wheelSpinIn_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// wheel_mc
	this.instance = new lib.HI_wheel_mc();
	this.instance.setTransform(38,38,1,1,0,0,0,38,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9999,scaleY:0.9999,rotation:-720,x:38.05},44,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-15.5,107.19999999999999,107.1);


(lib.HI_AnimationIn_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// wheelSpin_mc
	this.instance = new lib.HI_wheelSpinIn_mc();
	this.instance.setTransform(149.5,174.05,0.4864,0.5603,0,0,180,38,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wheelSpin_mc
	this.instance_1 = new lib.HI_wheelSpinIn_mc();
	this.instance_1.setTransform(43.55,162.4,0.2006,0.4198,0,0,180,34.6,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// vehicle_mc
	this.instance_2 = new lib.HI_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HI_AnimationIn_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.CY_wheelSpinIn_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// wheel_mc
	this.instance = new lib.CY_wheel_mc();
	this.instance.setTransform(38,38,1,1,0,0,0,38,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9999,scaleY:0.9999,rotation:-720,x:38.05},44,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-15.5,107.19999999999999,107.1);


(lib.CY_AnimationIn_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ALpPVIjSiWIAAkEICghQIBaAKIAUAVQAYAaASAhQA8BpgMB9QgNB9hGAjQgYANgXAAQgKAAgKgDg");
	mask.setTransform(89.7078,98.3625);

	// wheelSpin_mc
	this.instance = new lib.CY_wheelSpinIn_mc();
	this.instance.setTransform(181.6,150.95,0.4848,0.5069,0,0,180,-0.2,0.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wheelSpin_mc
	this.instance_1 = new lib.CY_wheelSpinIn_mc();
	this.instance_1.setTransform(49.65,164.65,0.1999,0.3669,0,0,180,35.8,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// vehicle_mc
	this.instance_2 = new lib.CY_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CY_AnimationIn_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.CL_wheelSpinIn_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// wheel_mc
	this.instance = new lib.CL_wheel_mc();
	this.instance.setTransform(38,38,1,1,0,0,0,38,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9999,scaleY:0.9999,rotation:-720,x:38.05},44,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-15.5,107.19999999999999,107.1);


(lib.CL_AnimationIn_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag/C7QhHhAgZg0QgWguAIgvQAJg6AGgNQALgdAigUQAygeBZgyIAZAPQAdAWAZAhQBNBpgGCuQgFATgYAXQgZAZghAPQgiAOgeAAQgvAAgpgkg");
	mask.setTransform(164.9185,169.8367);

	// wheelSpin_mc
	this.instance = new lib.CL_wheelSpinIn_mc();
	this.instance.setTransform(184.5,153,0.4622,0.4797,0,0,180);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wheelSpin_mc
	this.instance_1 = new lib.CL_wheelSpinIn_mc();
	this.instance_1.setTransform(51.15,164.75,0.2201,0.3716,0,0,180,36.6,43.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// vehicle_mc
	this.instance_2 = new lib.CL_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CL_AnimationIn_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.text5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_11
	this.instance = new lib.sparkle_anim();
	this.instance.setTransform(261.8,49.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91).to({_off:false},0).wait(51));

	// Layer_10
	this.instance_1 = new lib.sparkle_anim();
	this.instance_1.setTransform(217.35,77.2,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).wait(79));

	// Layer_9
	this.instance_2 = new lib.sparkle_anim();
	this.instance_2.setTransform(39.5,50.55,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).wait(108));

	// Layer_8
	this.instance_3 = new lib.star();
	this.instance_3.setTransform(30.55,40.9,0.8835,0.8835,59.9996,0,0,5.7,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(142));

	// Layer_7
	this.instance_4 = new lib.star2();
	this.instance_4.setTransform(249.4,33.8,1,1,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(142));

	// Layer_6
	this.instance_5 = new lib.star2();
	this.instance_5.setTransform(199.4,133.8,0.8835,0.8835,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(142));

	// Layer_5
	this.instance_6 = new lib.star();
	this.instance_6.setTransform(232.55,87.85,0.7415,0.7415,45,0,0,5.7,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(142));

	// Layer_4
	this.instance_7 = new lib.star();
	this.instance_7.setTransform(153.55,37.8,0.6,0.6,-45,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(142));

	// Layer_3
	this.instance_8 = new lib.star();
	this.instance_8.setTransform(125.5,122.85,0.7325,0.7325,29.9991,0,0,5.7,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(142));

	// Layer_2
	this.instance_9 = new lib.star2();
	this.instance_9.setTransform(63.45,86.85,1,1,74.9998,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(142));

	// Layer_1
	this.instance_10 = new lib.text5();
	this.instance_10.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(142));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_11 copy
	this.instance = new lib.sparkle_anim();
	this.instance.setTransform(134.8,104.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).wait(35));

	// Layer_11
	this.instance_1 = new lib.sparkle_anim();
	this.instance_1.setTransform(209.8,84.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42).to({_off:false},0).wait(78));

	// Layer_10
	this.instance_2 = new lib.sparkle_anim();
	this.instance_2.setTransform(69.35,58.2,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},0).wait(56));

	// Layer_9
	this.instance_3 = new lib.sparkle_anim();
	this.instance_3.setTransform(260.5,58.55,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).wait(94));

	// Layer_8
	this.instance_4 = new lib.star();
	this.instance_4.setTransform(34.5,44.8,0.8835,0.8835,0,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Layer_7
	this.instance_5 = new lib.star2();
	this.instance_5.setTransform(213.4,35.8,1,1,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Layer_6
	this.instance_6 = new lib.star2();
	this.instance_6.setTransform(191.4,122.8,0.8835,0.8835,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// Layer_5
	this.instance_7 = new lib.star();
	this.instance_7.setTransform(237.55,94.85,0.7415,0.7415,45,0,0,5.7,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Layer_4
	this.instance_8 = new lib.star();
	this.instance_8.setTransform(123.55,32.8,0.6,0.6,-45,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// Layer_3
	this.instance_9 = new lib.star();
	this.instance_9.setTransform(96.5,113.85,0.7325,0.7325,29.9991,0,0,5.7,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	// Layer_2
	this.instance_10 = new lib.star2();
	this.instance_10.setTransform(58.45,89.85,1,1,74.9998,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	// Layer_1
	this.instance_11 = new lib.text4();
	this.instance_11.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_11
	this.instance = new lib.sparkle_anim();
	this.instance.setTransform(245.8,53.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(77).to({_off:false},0).wait(43));

	// Layer_10
	this.instance_1 = new lib.sparkle_anim();
	this.instance_1.setTransform(92.35,120.2,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51).to({_off:false},0).wait(69));

	// Layer_9
	this.instance_2 = new lib.sparkle_anim();
	this.instance_2.setTransform(151.5,53.55,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).wait(98));

	// Layer_8
	this.instance_3 = new lib.star();
	this.instance_3.setTransform(43.5,42.8,0.8835,0.8835,0,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// Layer_7
	this.instance_4 = new lib.star2();
	this.instance_4.setTransform(172.4,32.8,1,1,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Layer_6
	this.instance_5 = new lib.star2();
	this.instance_5.setTransform(205.4,132.8,0.8835,0.8835,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Layer_5
	this.instance_6 = new lib.star();
	this.instance_6.setTransform(249.55,102.85,0.7415,0.7415,45,0,0,5.7,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// Layer_4
	this.instance_7 = new lib.star();
	this.instance_7.setTransform(100.55,42.8,0.6,0.6,-45,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Layer_3
	this.instance_8 = new lib.star();
	this.instance_8.setTransform(105.5,135.85,0.7325,0.7325,29.9991,0,0,5.7,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// Layer_2
	this.instance_9 = new lib.star2();
	this.instance_9.setTransform(58.45,94.85,1,1,74.9998,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	// Layer_1
	this.instance_10 = new lib.text3();
	this.instance_10.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_11
	this.instance = new lib.sparkle_anim();
	this.instance.setTransform(56.8,45.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(76).to({_off:false},0).wait(44));

	// Layer_10
	this.instance_1 = new lib.sparkle_anim();
	this.instance_1.setTransform(213.35,45.2,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).wait(70));

	// Layer_9
	this.instance_2 = new lib.sparkle_anim();
	this.instance_2.setTransform(119.5,105.55,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).wait(98));

	// Layer_8
	this.instance_3 = new lib.star();
	this.instance_3.setTransform(38.5,40.8,0.8835,0.8835,0,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// Layer_7
	this.instance_4 = new lib.star2();
	this.instance_4.setTransform(253.4,35.8,1,1,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Layer_6
	this.instance_5 = new lib.star2();
	this.instance_5.setTransform(172.4,121.8,0.8835,0.8835,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Layer_5
	this.instance_6 = new lib.star();
	this.instance_6.setTransform(229.55,91.85,0.7415,0.7415,45,0,0,5.7,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// Layer_4
	this.instance_7 = new lib.star();
	this.instance_7.setTransform(121.55,70.8,0.6,0.6,-45,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Layer_3
	this.instance_8 = new lib.star();
	this.instance_8.setTransform(68.5,93.85,0.7325,0.7325,29.9991,0,0,5.7,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// Layer_2
	this.instance_9 = new lib.star2();
	this.instance_9.setTransform(158.45,28.85,1,1,74.9998,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	// Layer_1
	this.instance_10 = new lib.text2();
	this.instance_10.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_11
	this.instance = new lib.sparkle_anim();
	this.instance.setTransform(138.8,98.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).wait(31));

	// Layer_10
	this.instance_1 = new lib.sparkle_anim();
	this.instance_1.setTransform(227.35,77.2,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).wait(61));

	// Layer_9
	this.instance_2 = new lib.sparkle_anim();
	this.instance_2.setTransform(50.5,44.55,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(96));

	// Layer_8
	this.instance_3 = new lib.star();
	this.instance_3.setTransform(30.5,43.8,0.8835,0.8835,0,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// Layer_7
	this.instance_4 = new lib.star2();
	this.instance_4.setTransform(215.4,29.8,1,1,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Layer_6
	this.instance_5 = new lib.star2();
	this.instance_5.setTransform(198.4,121.8,0.8835,0.8835,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Layer_5
	this.instance_6 = new lib.star();
	this.instance_6.setTransform(248.55,85.85,0.7415,0.7415,45,0,0,5.7,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// Layer_4
	this.instance_7 = new lib.star();
	this.instance_7.setTransform(145.55,31.8,0.6,0.6,-45,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Layer_3
	this.instance_8 = new lib.star();
	this.instance_8.setTransform(103.5,109.85,0.7325,0.7325,29.9991,0,0,5.7,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// Layer_2
	this.instance_9 = new lib.star2();
	this.instance_9.setTransform(48.45,81.85,1,1,74.9998,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	// Layer_1
	this.instance_10 = new lib.text1();
	this.instance_10.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//////////////////////////////////////////////////////////////////////////////////////////
		// START VARS
		//////////////////////////////////////////////////////////////////////////////////////////
		
		var XMLID;
		var offerType;
		/*var offerTitle = "";*/
		var root = this;
		var frequency = 5; // default value is 3. A higher number is more responsive, but also more computationally expensive.
		var manifest;
		var preload;
		var legalText = "";
		
		//dynamic legal window
		var legalDiv;
		var legalDivHolder;
		var legalClose;
		stage.enableMouseOver(frequency);
		
		
		//////////////////////////////////////////////////////////////////////////////////////////
		// END VARS
		//////////////////////////////////////////////////////////////////////////////////////////
		// START EVENT HANDLERS (ie. clicks, mouseovers, etc)
		//////////////////////////////////////////////////////////////////////////////////////////
		
		this.details_btn.on("click", legal_click.bind(this));
		
		function legal_click() {
			legalDivHolder.style.display = "block";
		}
		
		this.clickTag.on("click", bgClick.bind(this));
		function bgClick() {
			myFT.clickTag(1, myFT.instantAds.clickTag);
		}
		
		
		//////////////////////////////////////////////////////////////////////////////////////////
		// END EVENT HANDLERS (ie. clicks, mouseovers, etc)
		//////////////////////////////////////////////////////////////////////////////////////////
		// START INSTANT FUNCTIONALITY
		//////////////////////////////////////////////////////////////////////////////////////////
		
		function check_InstantAds() {
			if (myFT.instantAdsLoaded) {
				console.log("myFT.instantAdsLoaded checkIA yes: " + myFT.instantAdsLoaded);
				instantAds_Implementation();
			} else {
				myFT.addEventListener('instantads', instantAds_Implementation);
			}
		}
		
		function instantAds_Implementation() {
		
			XMLID = myFT.instantAds.xmlIDNumber;
		
			offerType = myFT.instantAds.offerType;
		
			console.log("myFT.instantAdsLoaded imp: " + myFT.instantAdsLoaded);
			console.log("Instant Ads ready");
		
			setupManifest(XMLID);
			startPreload();
		}
		
		
		//////////////////////////////////////////////////////////////////////////////////////////
		// END INSTANT FUNCTIONALITY
		//////////////////////////////////////////////////////////////////////////////////////////
		// START IMAGE AND XML LOADER
		//////////////////////////////////////////////////////////////////////////////////////////
		// This file demonstrates how to load XML as well as preload an image being set by instantAds.
		//////////////////////////////////////////////////////////////////////////////////////////
		
		function setupManifest(_xmlid) {
			manifest = [{
				src: 'https://cdn.flashtalking.com/feeds/southeast_toyota/xml/' + _xmlid + '.xml',
				id: "myxml"
			}];
		}
		
		function startPreload() {
			preload = new createjs.LoadQueue(true);
			preload.on("fileload", handleFileLoad)
			preload.on("complete", loadComplete);
			preload.on("error", loadError);
			preload.loadManifest(manifest);
		
		}
		function getDataByTagName(event, fieldName) {
			var thisText = event.result.getElementsByTagName(fieldName)[0].childNodes[0].nodeValue;
			return thisText;
		}
		
		function handleFileLoad(event) {
			if (event.item.type == "xml") {
				console.log(getDataByTagName(event, "field4"));
				root.offer_mc.dynamic_field1.text = getDataByTagName(event, "field1");
				root.offer_mc.dynamic_field2.text = getDataByTagName(event, "field2");
				root.offer_mc.dynamic_field3.text = getDataByTagName(event, "field3");
				root.offer_mc.dynamic_field4.text = swapDagger(getDataByTagName(event, "field4"));
				legalText = swapDagger(getDataByTagName(event, "legal"));
				setLegalText(legalText);
			}
			if (event.item.id == "heroCar") {
				var bitmap1 = new createjs.Bitmap(event.result);
				root.heroCar.removeAllChildren();
				root.heroCar.addChild(bitmap1);
			}
			if (event.item.id == "offerTitle") {
				var bitmap2 = new createjs.Bitmap(event.result);
				root.offerTitle.removeAllChildren();
				root.offerTitle.addChild(bitmap2);
			}
		}
		
		
		//////////////////////////////////////////////////////////////////////////////////////////
		// Set Up and Populate Legal Panel 
		//////////////////////////////////////////////////////////////////////////////////////////
		
		function setLegalText(_legalText) {
			legalDivHolder = document.createElement('div');
			legalDivHolder.id = 'legalDivHolder';
			legalDivHolder.className = 'legalDivHolder';
			document.getElementsByTagName('body')[0].appendChild(legalDivHolder);
		
			legalDivHolder.style.width = "270px";
			legalDivHolder.style.height = "230px";
			legalDivHolder.style.top = "0px";
			legalDivHolder.style.padding = "20px";
			legalDivHolder.style.position = "absolute";
			legalDivHolder.style.display = "none";
			legalDivHolder.style.backgroundColor = "rgba(255,255,255,.95)";
		
			legalDiv = document.createElement('div');
			legalDiv.id = 'legalDiv';
			legalDiv.className = 'legalDiv';
			legalDivHolder.appendChild(legalDiv);
		
			legalDiv.innerHTML = _legalText;
		
			legalDiv.style.position = "absolute";
			legalDiv.style.top = "20px";
			legalDiv.style.width = "270px"
			legalDiv.style.height = "210px";
			legalDiv.style.overflow = "auto";
			legalDiv.style.fontFamily = "Arial";
			legalDiv.style.fontSize = "11px";
			legalDiv.style.color = "#333333";
			legalDiv.style.backgroundColor = "rgba(255,255,255,0)";
		
			legalClose = document.createElement('div');
			legalClose.id = 'legalClose';
			legalClose.className = 'legalClose';
			legalDivHolder.appendChild(legalClose);
		
			legalClose.style.position = "absolute";
			legalClose.style.display = "innerBlock";
			legalClose.style.top = "3px";
			legalClose.style.right = "20px";
			legalClose.style.fontFamily = "arial";
			legalClose.style.fontSize = "11px";
		
			legalClose.style.padding = "2px 4px 2px"
			legalClose.style.backgroundColor = "#d51e29";
			legalClose.style.color = "#FFF";
			legalClose.innerHTML = "X";
		
			legalClose.style.cursor = "pointer";
			legalClose.style.userSelect = "none";
			legalClose.style.webkitUserSelect = "none";
			legalClose.style.MozUserSelect = "none";
		
			var el = document.getElementById("legalClose"),
				s = el.style;
			el.setAttribute("unselectable", "on"); // For IE and Opera
		
			legalClose.addEventListener('click', function () {
				legalDivHolder.style.display = "none";
			});
		}
		
		function loadError(evt) {
			console.log("Error!", evt);
		}
		
		function loadComplete(event) {
			console.log("all preloadjs files loaded");
		/*	root.offerTitle.offerTitle.text = myFT.instantAds.offerTitle;*/
			root.play();
		}
		
		function swapDagger(_raw, _dagr) {
			var str = _raw;
			if (!_dagr) {
				_dagr = "�";
			}
			return str.replace(_dagr, "†");
		}
		
		check_InstantAds();
	}
	this.frame_91 = function() {
		var tl = this;
		tl.stop();
		var delay = 1500;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_151 = function() {
		var tl = this;
		tl.stop();
		var delay = 1300;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_243 = function() {
		var tl = this;
		tl.stop();
		var delay = 1700;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_307 = function() {
		var tl = this;
		tl.stop();
		var delay = 1500;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_371 = function() {
		var tl = this;
		tl.stop();
		var delay = 1300;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_444 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(91).call(this.frame_91).wait(60).call(this.frame_151).wait(92).call(this.frame_243).wait(64).call(this.frame_307).wait(64).call(this.frame_371).wait(73).call(this.frame_444).wait(2));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(446));

	// details_btn
	this.details_btn = new lib.details_btn();
	this.details_btn.name = "details_btn";
	this.details_btn.setTransform(250.15,95,0.8374,0.7194,0,0,0,18.2,7);
	new cjs.ButtonHelper(this.details_btn, 0, 1, 2, false, new lib.details_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.details_btn).wait(446));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(446));

	// pageFlip5
	this.instance = new lib.pageFlip_1();
	this.instance.setTransform(323.15,271.05,0.4908,0.4908,0,0,0,57.2,57.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(371).to({_off:false},0).wait(1).to({regX:57,regY:57.1,scaleX:0.658,scaleY:0.658,x:312,y:261.3},0).wait(1).to({scaleX:0.8266,scaleY:0.8266,x:300.9,y:251.65},0).wait(1).to({scaleX:0.9962,scaleY:0.9962,x:289.75,y:241.9},0).wait(1).to({scaleX:1.1663,scaleY:1.1663,x:278.55,y:232.15},0).wait(1).to({scaleX:1.3363,scaleY:1.3363,x:267.35,y:222.4},0).wait(1).to({scaleX:1.5058,scaleY:1.5058,x:256.2,y:212.7},0).wait(1).to({scaleX:1.674,scaleY:1.674,x:245.1,y:203.05},0).wait(1).to({scaleX:1.8406,scaleY:1.8406,x:234.15,y:193.45},0).wait(1).to({scaleX:2.005,scaleY:2.005,x:223.35,y:184.05},0).wait(1).to({scaleX:2.1667,scaleY:2.1667,x:212.7,y:174.7},0).wait(1).to({scaleX:2.3254,scaleY:2.3254,x:202.25,y:165.65},0).wait(1).to({scaleX:2.4806,scaleY:2.4806,x:192.05,y:156.75},0).wait(1).to({scaleX:2.632,scaleY:2.632,x:182.05,y:148.1},0).wait(1).to({scaleX:2.7793,scaleY:2.7793,x:172.35,y:139.65},0).wait(1).to({scaleX:2.9224,scaleY:2.9224,x:162.95,y:131.4},0).wait(1).to({scaleX:3.0609,scaleY:3.0609,x:153.85,y:123.5},0).wait(1).to({scaleX:3.1949,scaleY:3.1949,x:145.05,y:115.8},0).wait(1).to({scaleX:3.3242,scaleY:3.3242,x:136.55,y:108.35},0).wait(1).to({regX:56.9,scaleX:3.4487,scaleY:3.4487,x:129.2,y:102.05},0).wait(1).to({regX:57,scaleX:3.4114,scaleY:3.4114,x:119.25,y:91.8},0).wait(1).to({scaleX:3.3761,scaleY:3.3761,x:109.5,y:82},0).wait(1).to({scaleX:3.3426,scaleY:3.3426,x:100.3,y:72.75},0).wait(1).to({scaleX:3.3111,scaleY:3.3111,x:91.6,y:64.05},0).wait(1).to({scaleX:3.2815,scaleY:3.2815,x:83.4,y:55.85},0).wait(1).to({scaleX:3.2537,scaleY:3.2537,x:75.7,y:48.2},0).wait(1).to({scaleX:3.2275,scaleY:3.2275,x:68.45,y:41},0).wait(1).to({scaleX:3.2031,scaleY:3.2031,x:61.75,y:34.2},0).wait(1).to({scaleX:3.1803,scaleY:3.1803,x:55.45,y:27.9},0).wait(1).to({scaleX:3.159,scaleY:3.159,x:49.55,y:22.05},0).wait(1).to({scaleX:3.1391,scaleY:3.1391,x:44.1,y:16.55},0).wait(1).to({scaleX:3.1207,scaleY:3.1207,x:39,y:11.45},0).wait(1).to({scaleX:3.1037,scaleY:3.1037,x:34.3,y:6.7},0).wait(1).to({scaleX:3.0879,scaleY:3.0879,x:29.95,y:2.35},0).wait(1).to({scaleX:3.0733,scaleY:3.0733,x:25.95,y:-1.65},0).wait(1).to({scaleX:3.0599,scaleY:3.0599,x:22.2,y:-5.35},0).wait(1).to({scaleX:3.0477,scaleY:3.0477,x:18.8,y:-8.75},0).wait(1).to({scaleX:3.0365,scaleY:3.0365,x:15.75,y:-11.8},0).wait(1).to({scaleX:3.0263,scaleY:3.0263,x:12.95,y:-14.65},0).wait(1).to({scaleX:3.0171,scaleY:3.0171,x:10.35,y:-17.2},0).wait(1).to({scaleX:3.0088,scaleY:3.0088,x:8.1,y:-19.5},0).wait(1).to({scaleX:3.0014,scaleY:3.0014,x:6.1,y:-21.5},0).wait(1).to({scaleX:2.9949,scaleY:2.9949,x:4.25,y:-23.35},0).wait(1).to({scaleX:2.9892,scaleY:2.9892,x:2.7,y:-24.9},0).wait(1).to({scaleX:2.9843,scaleY:2.9843,x:1.35,y:-26.25},0).wait(1).to({scaleX:2.9801,scaleY:2.9801,x:0.15,y:-27.4},0).wait(1).to({regX:57.1,regY:57,scaleX:2.9767,scaleY:2.9767,x:-1.25,y:-28.4},0).to({_off:true},1).wait(28));

	// cta
	this.instance_1 = new lib.cta_1();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(400).to({_off:false},0).to({alpha:1},44,cjs.Ease.quadOut).wait(2));

	// options
	this.instance_2 = new lib.options_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(400).to({_off:false},0).to({alpha:1},44,cjs.Ease.quadOut).wait(2));

	// details
	this.instance_3 = new lib.details_1();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(400).to({_off:false},0).to({alpha:1},44,cjs.Ease.quadOut).wait(2));

	// offer_mc
	this.offer_mc = new lib.offer_mc();
	this.offer_mc.name = "offer_mc";
	this.offer_mc.setTransform(161,89,1,1,0,0,0,93,44);
	this.offer_mc.alpha = 0;
	this.offer_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.offer_mc).wait(400).to({_off:false},0).to({alpha:1},44,cjs.Ease.quadOut).wait(2));

	// offerTitle
	this.instance_4 = new lib.offerTitle_1();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(400).to({_off:false},0).to({alpha:1},44,cjs.Ease.quadOut).wait(2));

	// Camry copy
	this.instance_5 = new lib.CY_AnimationIn_mc();
	this.instance_5.setTransform(-270,102.1,0.8948,0.8948,0,0,0,149.7,125.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(400).to({_off:false},0).to({regX:150,regY:125.4,scaleX:1.0813,scaleY:1.0813,x:82.45,y:135.65},44,cjs.Ease.cubicOut).wait(2));

	// RT1 copy 2
	this.instance_6 = new lib.redTree_1();
	this.instance_6.setTransform(28,110.1,0.6231,0.6231,0,0,0,297.8,69.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(409).to({_off:false},0).wait(37));

	// RT2 copy 2
	this.instance_7 = new lib.redTree_1();
	this.instance_7.setTransform(290.05,141.05,0.623,0.623,0,0,0,299.2,64.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(400).to({_off:false},0).wait(46));

	// WT3 copy 2
	this.instance_8 = new lib.whiteTree_1();
	this.instance_8.setTransform(59.7,114.05,0.5284,0.5284,0,0,0,298.9,64.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(405).to({_off:false},0).wait(41));

	// WT4 copy 2
	this.instance_9 = new lib.whiteTree_1();
	this.instance_9.setTransform(245.25,160,0.48,0.48,0,0,0,299.2,64.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(416).to({_off:false},0).wait(30));

	// RT4 copy 2
	this.instance_10 = new lib.redTree_1();
	this.instance_10.setTransform(215.05,143.05,0.3868,0.3868,0,0,0,299.5,64.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(423).to({_off:false},0).wait(23));

	// pageFlip4
	this.instance_11 = new lib.pageFlip_1();
	this.instance_11.setTransform(323.15,271.05,0.4908,0.4908,0,0,0,57.2,57.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(307).to({_off:false},0).wait(1).to({regX:57,regY:57.1,scaleX:0.658,scaleY:0.658,x:312,y:261.3},0).wait(1).to({scaleX:0.8266,scaleY:0.8266,x:300.9,y:251.65},0).wait(1).to({scaleX:0.9962,scaleY:0.9962,x:289.75,y:241.9},0).wait(1).to({scaleX:1.1663,scaleY:1.1663,x:278.55,y:232.15},0).wait(1).to({scaleX:1.3363,scaleY:1.3363,x:267.35,y:222.4},0).wait(1).to({scaleX:1.5058,scaleY:1.5058,x:256.2,y:212.7},0).wait(1).to({scaleX:1.674,scaleY:1.674,x:245.1,y:203.05},0).wait(1).to({scaleX:1.8406,scaleY:1.8406,x:234.15,y:193.45},0).wait(1).to({scaleX:2.005,scaleY:2.005,x:223.35,y:184.05},0).wait(1).to({scaleX:2.1667,scaleY:2.1667,x:212.7,y:174.7},0).wait(1).to({scaleX:2.3254,scaleY:2.3254,x:202.25,y:165.65},0).wait(1).to({scaleX:2.4806,scaleY:2.4806,x:192.05,y:156.75},0).wait(1).to({scaleX:2.632,scaleY:2.632,x:182.05,y:148.1},0).wait(1).to({scaleX:2.7793,scaleY:2.7793,x:172.35,y:139.65},0).wait(1).to({scaleX:2.9224,scaleY:2.9224,x:162.95,y:131.4},0).wait(1).to({scaleX:3.0609,scaleY:3.0609,x:153.85,y:123.5},0).wait(1).to({scaleX:3.1949,scaleY:3.1949,x:145.05,y:115.8},0).wait(1).to({scaleX:3.3242,scaleY:3.3242,x:136.55,y:108.35},0).wait(1).to({regX:56.9,scaleX:3.4487,scaleY:3.4487,x:129.2,y:102.05},0).wait(1).to({regX:57,scaleX:3.4114,scaleY:3.4114,x:119.25,y:91.8},0).wait(1).to({scaleX:3.3761,scaleY:3.3761,x:109.5,y:82},0).wait(1).to({scaleX:3.3426,scaleY:3.3426,x:100.3,y:72.75},0).wait(1).to({scaleX:3.3111,scaleY:3.3111,x:91.6,y:64.05},0).wait(1).to({scaleX:3.2815,scaleY:3.2815,x:83.4,y:55.85},0).wait(1).to({scaleX:3.2537,scaleY:3.2537,x:75.7,y:48.2},0).wait(1).to({scaleX:3.2275,scaleY:3.2275,x:68.45,y:41},0).wait(1).to({scaleX:3.2031,scaleY:3.2031,x:61.75,y:34.2},0).wait(1).to({scaleX:3.1803,scaleY:3.1803,x:55.45,y:27.9},0).wait(1).to({scaleX:3.159,scaleY:3.159,x:49.55,y:22.05},0).wait(1).to({scaleX:3.1391,scaleY:3.1391,x:44.1,y:16.55},0).wait(1).to({scaleX:3.1207,scaleY:3.1207,x:39,y:11.45},0).wait(1).to({scaleX:3.1037,scaleY:3.1037,x:34.3,y:6.7},0).wait(1).to({scaleX:3.0879,scaleY:3.0879,x:29.95,y:2.35},0).wait(1).to({scaleX:3.0733,scaleY:3.0733,x:25.95,y:-1.65},0).wait(1).to({scaleX:3.0599,scaleY:3.0599,x:22.2,y:-5.35},0).wait(1).to({scaleX:3.0477,scaleY:3.0477,x:18.8,y:-8.75},0).wait(1).to({scaleX:3.0365,scaleY:3.0365,x:15.75,y:-11.8},0).wait(1).to({scaleX:3.0263,scaleY:3.0263,x:12.95,y:-14.65},0).wait(1).to({scaleX:3.0171,scaleY:3.0171,x:10.35,y:-17.2},0).wait(1).to({scaleX:3.0088,scaleY:3.0088,x:8.1,y:-19.5},0).wait(1).to({scaleX:3.0014,scaleY:3.0014,x:6.1,y:-21.5},0).wait(1).to({scaleX:2.9949,scaleY:2.9949,x:4.25,y:-23.35},0).wait(1).to({scaleX:2.9892,scaleY:2.9892,x:2.7,y:-24.9},0).wait(1).to({scaleX:2.9843,scaleY:2.9843,x:1.35,y:-26.25},0).wait(1).to({scaleX:2.9801,scaleY:2.9801,x:0.15,y:-27.4},0).wait(1).to({regX:57.1,regY:57,scaleX:2.9767,scaleY:2.9767,x:-1.25,y:-28.4},0).to({_off:true},1).wait(92));

	// mask copy 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_371 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_graphics_372 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_graphics_373 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_graphics_374 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_graphics_375 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_graphics_376 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_graphics_377 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_graphics_378 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_graphics_379 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_graphics_380 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_graphics_381 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_graphics_382 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_graphics_383 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_graphics_384 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_graphics_385 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_graphics_386 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_graphics_387 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_graphics_388 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_graphics_389 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_graphics_390 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_graphics_391 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_graphics_392 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_graphics_393 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_graphics_394 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_graphics_395 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_graphics_396 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_graphics_397 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_graphics_398 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_graphics_399 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_graphics_400 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_graphics_401 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_graphics_402 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_graphics_403 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_graphics_404 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_graphics_405 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_graphics_406 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_graphics_407 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_graphics_408 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_graphics_409 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_graphics_410 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_graphics_411 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_graphics_412 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_graphics_413 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_graphics_414 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_graphics_415 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_graphics_416 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_graphics_417 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(371).to({graphics:mask_graphics_371,x:176.95,y:114.75}).wait(1).to({graphics:mask_graphics_372,x:165.55,y:105.15}).wait(1).to({graphics:mask_graphics_373,x:154,y:95.45}).wait(1).to({graphics:mask_graphics_374,x:142.4,y:85.7}).wait(1).to({graphics:mask_graphics_375,x:130.8,y:75.9}).wait(1).to({graphics:mask_graphics_376,x:119.2,y:66.15}).wait(1).to({graphics:mask_graphics_377,x:107.75,y:56.5}).wait(1).to({graphics:mask_graphics_378,x:96.4,y:46.95}).wait(1).to({graphics:mask_graphics_379,x:85.25,y:37.6}).wait(1).to({graphics:mask_graphics_380,x:74.35,y:28.4}).wait(1).to({graphics:mask_graphics_381,x:63.7,y:19.45}).wait(1).to({graphics:mask_graphics_382,x:53.4,y:10.75}).wait(1).to({graphics:mask_graphics_383,x:43.4,y:2.35}).wait(1).to({graphics:mask_graphics_384,x:33.75,y:-5.75}).wait(1).to({graphics:mask_graphics_385,x:24.5,y:-13.55}).wait(1).to({graphics:mask_graphics_386,x:15.6,y:-21.05}).wait(1).to({graphics:mask_graphics_387,x:7.1,y:-28.2}).wait(1).to({graphics:mask_graphics_388,x:-1,y:-35}).wait(1).to({graphics:mask_graphics_389,x:-8.75,y:-41.5}).wait(1).to({graphics:mask_graphics_390,x:-16.1,y:-47.7}).wait(1).to({graphics:mask_graphics_391,x:-28,y:-56.25}).wait(1).to({graphics:mask_graphics_392,x:-39.3,y:-64.4}).wait(1).to({graphics:mask_graphics_393,x:-50,y:-72.05}).wait(1).to({graphics:mask_graphics_394,x:-60.1,y:-79.3}).wait(1).to({graphics:mask_graphics_395,x:-69.65,y:-86.15}).wait(1).to({graphics:mask_graphics_396,x:-78.6,y:-92.6}).wait(1).to({graphics:mask_graphics_397,x:-87.05,y:-98.65}).wait(1).to({graphics:mask_graphics_398,x:-94.95,y:-104.35}).wait(1).to({graphics:mask_graphics_399,x:-102.4,y:-109.7}).wait(1).to({graphics:mask_graphics_400,x:-109.35,y:-114.7}).wait(1).to({graphics:mask_graphics_401,x:-115.85,y:-119.4}).wait(1).to({graphics:mask_graphics_402,x:-121.95,y:-123.75}).wait(1).to({graphics:mask_graphics_403,x:-127.6,y:-127.8}).wait(1).to({graphics:mask_graphics_404,x:-132.85,y:-131.6}).wait(1).to({graphics:mask_graphics_405,x:-137.7,y:-135.05}).wait(1).to({graphics:mask_graphics_406,x:-142.2,y:-138.3}).wait(1).to({graphics:mask_graphics_407,x:-146.35,y:-141.25}).wait(1).to({graphics:mask_graphics_408,x:-150.15,y:-144}).wait(1).to({graphics:mask_graphics_409,x:-153.6,y:-146.5}).wait(1).to({graphics:mask_graphics_410,x:-156.75,y:-148.75}).wait(1).to({graphics:mask_graphics_411,x:-159.6,y:-150.8}).wait(1).to({graphics:mask_graphics_412,x:-162.15,y:-152.65}).wait(1).to({graphics:mask_graphics_413,x:-164.45,y:-154.3}).wait(1).to({graphics:mask_graphics_414,x:-166.45,y:-155.75}).wait(1).to({graphics:mask_graphics_415,x:-168.25,y:-157}).wait(1).to({graphics:mask_graphics_416,x:-169.75,y:-158.1}).wait(1).to({graphics:mask_graphics_417,x:-171,y:-159}).wait(27).to({graphics:null,x:0,y:0}).wait(2));

	// RT1 copy 2
	this.instance_12 = new lib.redTree_1();
	this.instance_12.setTransform(30.95,177.05,0.9027,0.9027,0,0,0,297.9,69);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(337).to({_off:false},0).to({_off:true},107).wait(2));

	// text5
	this.instance_13 = new lib.text5_1();
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(327).to({_off:false},0).to({alpha:1},44,cjs.Ease.cubicOut).to({_off:true},73).wait(2));

	// Camry
	this.instance_14 = new lib.CY_AnimationIn_mc();
	this.instance_14.setTransform(-115.15,136.3,0.6933,0.6933,0,0,0,149.7,125.8);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(327).to({_off:false},0).to({regX:149.9,regY:125.4,scaleX:0.8378,scaleY:0.8378,x:157.85,y:162.35},44,cjs.Ease.cubicOut).to({_off:true},73).wait(2));

	// RT2 copy 2
	this.instance_15 = new lib.redTree_1();
	this.instance_15.setTransform(289.1,140.1,0.623,0.623,0,0,0,299.2,64.3);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(327).to({_off:false},0).to({_off:true},117).wait(2));

	// WT3 copy 2
	this.instance_16 = new lib.whiteTree_1();
	this.instance_16.setTransform(60.7,170.3,0.4416,0.4416,0,0,0,298.9,64.5);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(348).to({_off:false},0).to({_off:true},96).wait(2));

	// WT4 copy 2
	this.instance_17 = new lib.whiteTree_1();
	this.instance_17.setTransform(256.25,161.85,0.3938,0.3938,0,0,0,299.2,64.4);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(364).to({_off:false},0).to({_off:true},80).wait(2));

	// RT4 copy 2
	this.instance_18 = new lib.redTree_1();
	this.instance_18.setTransform(230.95,164.85,0.2872,0.2872,0,0,0,299.2,64.6);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(355).to({_off:false},0).to({_off:true},89).wait(2));

	// pageFlip3
	this.instance_19 = new lib.pageFlip_1();
	this.instance_19.setTransform(323.15,271.05,0.4908,0.4908,0,0,0,57.2,57.4);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(243).to({_off:false},0).wait(1).to({regX:57,regY:57.1,scaleX:0.658,scaleY:0.658,x:312,y:261.3},0).wait(1).to({scaleX:0.8266,scaleY:0.8266,x:300.9,y:251.65},0).wait(1).to({scaleX:0.9962,scaleY:0.9962,x:289.75,y:241.9},0).wait(1).to({scaleX:1.1663,scaleY:1.1663,x:278.55,y:232.15},0).wait(1).to({scaleX:1.3363,scaleY:1.3363,x:267.35,y:222.4},0).wait(1).to({scaleX:1.5058,scaleY:1.5058,x:256.2,y:212.7},0).wait(1).to({scaleX:1.674,scaleY:1.674,x:245.1,y:203.05},0).wait(1).to({scaleX:1.8406,scaleY:1.8406,x:234.15,y:193.45},0).wait(1).to({scaleX:2.005,scaleY:2.005,x:223.35,y:184.05},0).wait(1).to({scaleX:2.1667,scaleY:2.1667,x:212.7,y:174.7},0).wait(1).to({scaleX:2.3254,scaleY:2.3254,x:202.25,y:165.65},0).wait(1).to({scaleX:2.4806,scaleY:2.4806,x:192.05,y:156.75},0).wait(1).to({scaleX:2.632,scaleY:2.632,x:182.05,y:148.1},0).wait(1).to({scaleX:2.7793,scaleY:2.7793,x:172.35,y:139.65},0).wait(1).to({scaleX:2.9224,scaleY:2.9224,x:162.95,y:131.4},0).wait(1).to({scaleX:3.0609,scaleY:3.0609,x:153.85,y:123.5},0).wait(1).to({scaleX:3.1949,scaleY:3.1949,x:145.05,y:115.8},0).wait(1).to({scaleX:3.3242,scaleY:3.3242,x:136.55,y:108.35},0).wait(1).to({regX:56.9,scaleX:3.4487,scaleY:3.4487,x:129.2,y:102.05},0).wait(1).to({regX:57,scaleX:3.4114,scaleY:3.4114,x:119.25,y:91.8},0).wait(1).to({scaleX:3.3761,scaleY:3.3761,x:109.5,y:82},0).wait(1).to({scaleX:3.3426,scaleY:3.3426,x:100.3,y:72.75},0).wait(1).to({scaleX:3.3111,scaleY:3.3111,x:91.6,y:64.05},0).wait(1).to({scaleX:3.2815,scaleY:3.2815,x:83.4,y:55.85},0).wait(1).to({scaleX:3.2537,scaleY:3.2537,x:75.7,y:48.2},0).wait(1).to({scaleX:3.2275,scaleY:3.2275,x:68.45,y:41},0).wait(1).to({scaleX:3.2031,scaleY:3.2031,x:61.75,y:34.2},0).wait(1).to({scaleX:3.1803,scaleY:3.1803,x:55.45,y:27.9},0).wait(1).to({scaleX:3.159,scaleY:3.159,x:49.55,y:22.05},0).wait(1).to({scaleX:3.1391,scaleY:3.1391,x:44.1,y:16.55},0).wait(1).to({scaleX:3.1207,scaleY:3.1207,x:39,y:11.45},0).wait(1).to({scaleX:3.1037,scaleY:3.1037,x:34.3,y:6.7},0).wait(1).to({scaleX:3.0879,scaleY:3.0879,x:29.95,y:2.35},0).wait(1).to({scaleX:3.0733,scaleY:3.0733,x:25.95,y:-1.65},0).wait(1).to({scaleX:3.0599,scaleY:3.0599,x:22.2,y:-5.35},0).wait(1).to({scaleX:3.0477,scaleY:3.0477,x:18.8,y:-8.75},0).wait(1).to({scaleX:3.0365,scaleY:3.0365,x:15.75,y:-11.8},0).wait(1).to({scaleX:3.0263,scaleY:3.0263,x:12.95,y:-14.65},0).wait(1).to({scaleX:3.0171,scaleY:3.0171,x:10.35,y:-17.2},0).wait(1).to({scaleX:3.0088,scaleY:3.0088,x:8.1,y:-19.5},0).wait(1).to({scaleX:3.0014,scaleY:3.0014,x:6.1,y:-21.5},0).wait(1).to({scaleX:2.9949,scaleY:2.9949,x:4.25,y:-23.35},0).wait(1).to({scaleX:2.9892,scaleY:2.9892,x:2.7,y:-24.9},0).wait(1).to({scaleX:2.9843,scaleY:2.9843,x:1.35,y:-26.25},0).wait(1).to({scaleX:2.9801,scaleY:2.9801,x:0.15,y:-27.4},0).wait(1).to({regX:57.1,regY:57,scaleX:2.9767,scaleY:2.9767,x:-1.25,y:-28.4},0).to({_off:true},1).wait(156));

	// mask copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_307 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_308 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_1_graphics_309 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_310 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_311 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_312 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_313 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_1_graphics_314 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_1_graphics_315 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_316 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_317 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_318 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_1_graphics_319 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_320 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_321 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_1_graphics_322 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_323 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_1_graphics_324 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_1_graphics_325 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_1_graphics_326 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_327 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_328 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_1_graphics_329 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_330 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_331 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_332 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_1_graphics_333 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_1_graphics_334 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_1_graphics_335 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_336 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_337 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_338 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_1_graphics_339 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_340 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_341 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_1_graphics_342 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_1_graphics_343 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_1_graphics_344 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_345 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_1_graphics_346 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_347 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_348 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_1_graphics_349 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_350 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_351 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_352 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_1_graphics_353 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(307).to({graphics:mask_1_graphics_307,x:176.95,y:114.75}).wait(1).to({graphics:mask_1_graphics_308,x:162,y:103}).wait(1).to({graphics:mask_1_graphics_309,x:147.35,y:91.45}).wait(1).to({graphics:mask_1_graphics_310,x:133.05,y:80.2}).wait(1).to({graphics:mask_1_graphics_311,x:119.05,y:69.2}).wait(1).to({graphics:mask_1_graphics_312,x:105.4,y:58.5}).wait(1).to({graphics:mask_1_graphics_313,x:92.1,y:48}).wait(1).to({graphics:mask_1_graphics_314,x:79.1,y:37.75}).wait(1).to({graphics:mask_1_graphics_315,x:66.45,y:27.8}).wait(1).to({graphics:mask_1_graphics_316,x:54.1,y:18.1}).wait(1).to({graphics:mask_1_graphics_317,x:42.1,y:8.65}).wait(1).to({graphics:mask_1_graphics_318,x:30.45,y:-0.5}).wait(1).to({graphics:mask_1_graphics_319,x:19.1,y:-9.45}).wait(1).to({graphics:mask_1_graphics_320,x:8.1,y:-18.1}).wait(1).to({graphics:mask_1_graphics_321,x:-2.6,y:-26.5}).wait(1).to({graphics:mask_1_graphics_322,x:-12.95,y:-34.65}).wait(1).to({graphics:mask_1_graphics_323,x:-23,y:-42.55}).wait(1).to({graphics:mask_1_graphics_324,x:-32.7,y:-50.2}).wait(1).to({graphics:mask_1_graphics_325,x:-42.1,y:-57.55}).wait(1).to({graphics:mask_1_graphics_326,x:-51.1,y:-64.7}).wait(1).to({graphics:mask_1_graphics_327,x:-59.85,y:-71.55}).wait(1).to({graphics:mask_1_graphics_328,x:-68.2,y:-78.15}).wait(1).to({graphics:mask_1_graphics_329,x:-76.3,y:-84.5}).wait(1).to({graphics:mask_1_graphics_330,x:-84,y:-90.55}).wait(1).to({graphics:mask_1_graphics_331,x:-91.4,y:-96.4}).wait(1).to({graphics:mask_1_graphics_332,x:-98.5,y:-101.95}).wait(1).to({graphics:mask_1_graphics_333,x:-105.2,y:-107.25}).wait(1).to({graphics:mask_1_graphics_334,x:-111.65,y:-112.3}).wait(1).to({graphics:mask_1_graphics_335,x:-117.7,y:-117.1}).wait(1).to({graphics:mask_1_graphics_336,x:-123.5,y:-121.6}).wait(1).to({graphics:mask_1_graphics_337,x:-128.9,y:-125.9}).wait(1).to({graphics:mask_1_graphics_338,x:-134,y:-129.9}).wait(1).to({graphics:mask_1_graphics_339,x:-138.75,y:-133.65}).wait(1).to({graphics:mask_1_graphics_340,x:-143.2,y:-137.15}).wait(1).to({graphics:mask_1_graphics_341,x:-147.3,y:-140.35}).wait(1).to({graphics:mask_1_graphics_342,x:-151.1,y:-143.35}).wait(1).to({graphics:mask_1_graphics_343,x:-154.55,y:-146.05}).wait(1).to({graphics:mask_1_graphics_344,x:-157.7,y:-148.5}).wait(1).to({graphics:mask_1_graphics_345,x:-160.45,y:-150.7}).wait(1).to({graphics:mask_1_graphics_346,x:-162.95,y:-152.65}).wait(1).to({graphics:mask_1_graphics_347,x:-165.1,y:-154.35}).wait(1).to({graphics:mask_1_graphics_348,x:-166.9,y:-155.75}).wait(1).to({graphics:mask_1_graphics_349,x:-168.35,y:-156.95}).wait(1).to({graphics:mask_1_graphics_350,x:-169.5,y:-157.85}).wait(1).to({graphics:mask_1_graphics_351,x:-170.35,y:-158.5}).wait(1).to({graphics:mask_1_graphics_352,x:-170.85,y:-158.85}).wait(1).to({graphics:mask_1_graphics_353,x:-171,y:-159}).wait(91).to({graphics:null,x:0,y:0}).wait(2));

	// RT1 copy
	this.instance_20 = new lib.redTree_1();
	this.instance_20.setTransform(23.95,177.05,0.9027,0.9027,0,0,0,297.9,69);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(271).to({_off:false},0).to({_off:true},173).wait(2));

	// text4
	this.instance_21 = new lib.text4_1();
	this.instance_21.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(263).to({_off:false},0).to({alpha:1},44,cjs.Ease.cubicOut).to({_off:true},137).wait(2));

	// RAV4
	this.instance_22 = new lib.RV_AnimationIn_mc();
	this.instance_22.setTransform(-136.85,127.65,0.7154,0.7154,0,0,0,149.7,125.8);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(263).to({_off:false},0).to({regX:150,regY:125.4,scaleX:0.8644,scaleY:0.8644,x:144.9,y:154.5},44,cjs.Ease.cubicOut).to({_off:true},137).wait(2));

	// RT2 copy
	this.instance_23 = new lib.redTree_1();
	this.instance_23.setTransform(289.1,148.1,0.623,0.623,0,0,0,299.2,64.3);
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(263).to({_off:false},0).to({_off:true},181).wait(2));

	// WT3 copy
	this.instance_24 = new lib.whiteTree_1();
	this.instance_24.setTransform(60.7,165.3,0.4416,0.4416,0,0,0,298.9,64.5);
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(281).to({_off:false},0).to({_off:true},163).wait(2));

	// WT4 copy
	this.instance_25 = new lib.whiteTree_1();
	this.instance_25.setTransform(256.25,171.9,0.461,0.461,0,0,0,299.4,64.5);
	this.instance_25._off = true;

	var maskedShapeInstanceList = [this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(296).to({_off:false},0).to({_off:true},148).wait(2));

	// RT4 copy
	this.instance_26 = new lib.redTree_1();
	this.instance_26.setTransform(230.95,154.85,0.2872,0.2872,0,0,0,299.2,64.6);
	this.instance_26._off = true;

	var maskedShapeInstanceList = [this.instance_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(288).to({_off:false},0).to({_off:true},156).wait(2));

	// pageFlip2
	this.instance_27 = new lib.pageFlip_1();
	this.instance_27.setTransform(323.15,271.05,0.4908,0.4908,0,0,0,57.2,57.4);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(155).to({_off:false},0).wait(1).to({regX:57,regY:57.1,scaleX:0.658,scaleY:0.658,x:312,y:261.3},0).wait(1).to({scaleX:0.8266,scaleY:0.8266,x:300.9,y:251.65},0).wait(1).to({scaleX:0.9962,scaleY:0.9962,x:289.75,y:241.9},0).wait(1).to({scaleX:1.1663,scaleY:1.1663,x:278.55,y:232.15},0).wait(1).to({scaleX:1.3363,scaleY:1.3363,x:267.35,y:222.4},0).wait(1).to({scaleX:1.5058,scaleY:1.5058,x:256.2,y:212.7},0).wait(1).to({scaleX:1.674,scaleY:1.674,x:245.1,y:203.05},0).wait(1).to({scaleX:1.8406,scaleY:1.8406,x:234.15,y:193.45},0).wait(1).to({scaleX:2.005,scaleY:2.005,x:223.35,y:184.05},0).wait(1).to({scaleX:2.1667,scaleY:2.1667,x:212.7,y:174.7},0).wait(1).to({scaleX:2.3254,scaleY:2.3254,x:202.25,y:165.65},0).wait(1).to({scaleX:2.4806,scaleY:2.4806,x:192.05,y:156.75},0).wait(1).to({scaleX:2.632,scaleY:2.632,x:182.05,y:148.1},0).wait(1).to({scaleX:2.7793,scaleY:2.7793,x:172.35,y:139.65},0).wait(1).to({scaleX:2.9224,scaleY:2.9224,x:162.95,y:131.4},0).wait(1).to({scaleX:3.0609,scaleY:3.0609,x:153.85,y:123.5},0).wait(1).to({scaleX:3.1949,scaleY:3.1949,x:145.05,y:115.8},0).wait(1).to({scaleX:3.3242,scaleY:3.3242,x:136.55,y:108.35},0).wait(1).to({regX:56.9,scaleX:3.4487,scaleY:3.4487,x:129.2,y:102.05},0).wait(1).to({regX:57,scaleX:3.4114,scaleY:3.4114,x:119.25,y:91.8},0).wait(1).to({scaleX:3.3761,scaleY:3.3761,x:109.5,y:82},0).wait(1).to({scaleX:3.3426,scaleY:3.3426,x:100.3,y:72.75},0).wait(1).to({scaleX:3.3111,scaleY:3.3111,x:91.6,y:64.05},0).wait(1).to({scaleX:3.2815,scaleY:3.2815,x:83.4,y:55.85},0).wait(1).to({scaleX:3.2537,scaleY:3.2537,x:75.7,y:48.2},0).wait(1).to({scaleX:3.2275,scaleY:3.2275,x:68.45,y:41},0).wait(1).to({scaleX:3.2031,scaleY:3.2031,x:61.75,y:34.2},0).wait(1).to({scaleX:3.1803,scaleY:3.1803,x:55.45,y:27.9},0).wait(1).to({scaleX:3.159,scaleY:3.159,x:49.55,y:22.05},0).wait(1).to({scaleX:3.1391,scaleY:3.1391,x:44.1,y:16.55},0).wait(1).to({scaleX:3.1207,scaleY:3.1207,x:39,y:11.45},0).wait(1).to({scaleX:3.1037,scaleY:3.1037,x:34.3,y:6.7},0).wait(1).to({scaleX:3.0879,scaleY:3.0879,x:29.95,y:2.35},0).wait(1).to({scaleX:3.0733,scaleY:3.0733,x:25.95,y:-1.65},0).wait(1).to({scaleX:3.0599,scaleY:3.0599,x:22.2,y:-5.35},0).wait(1).to({scaleX:3.0477,scaleY:3.0477,x:18.8,y:-8.75},0).wait(1).to({scaleX:3.0365,scaleY:3.0365,x:15.75,y:-11.8},0).wait(1).to({scaleX:3.0263,scaleY:3.0263,x:12.95,y:-14.65},0).wait(1).to({scaleX:3.0171,scaleY:3.0171,x:10.35,y:-17.2},0).wait(1).to({scaleX:3.0088,scaleY:3.0088,x:8.1,y:-19.5},0).wait(1).to({scaleX:3.0014,scaleY:3.0014,x:6.1,y:-21.5},0).wait(1).to({scaleX:2.9949,scaleY:2.9949,x:4.25,y:-23.35},0).wait(1).to({scaleX:2.9892,scaleY:2.9892,x:2.7,y:-24.9},0).wait(1).to({scaleX:2.9843,scaleY:2.9843,x:1.35,y:-26.25},0).wait(1).to({scaleX:2.9801,scaleY:2.9801,x:0.15,y:-27.4},0).wait(1).to({regX:57.1,regY:57,scaleX:2.9767,scaleY:2.9767,x:-1.25,y:-28.4},0).to({_off:true},1).wait(244));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_243 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_2_graphics_244 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_2_graphics_245 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_2_graphics_246 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_2_graphics_247 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_2_graphics_248 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_2_graphics_249 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_2_graphics_250 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_2_graphics_251 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_2_graphics_252 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_2_graphics_253 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_2_graphics_254 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_2_graphics_255 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_2_graphics_256 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_2_graphics_257 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_2_graphics_258 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_2_graphics_259 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_2_graphics_260 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_2_graphics_261 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_2_graphics_262 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_2_graphics_263 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_2_graphics_264 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_2_graphics_265 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_2_graphics_266 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_2_graphics_267 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_2_graphics_268 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_2_graphics_269 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_2_graphics_270 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_2_graphics_271 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_2_graphics_272 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_2_graphics_273 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_2_graphics_274 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_2_graphics_275 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_2_graphics_276 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_2_graphics_277 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_2_graphics_278 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_2_graphics_279 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_2_graphics_280 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_2_graphics_281 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_2_graphics_282 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_2_graphics_283 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_2_graphics_284 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_2_graphics_285 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_2_graphics_286 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_2_graphics_287 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_2_graphics_288 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_2_graphics_289 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(243).to({graphics:mask_2_graphics_243,x:176.95,y:114.75}).wait(1).to({graphics:mask_2_graphics_244,x:164.65,y:105.9}).wait(1).to({graphics:mask_2_graphics_245,x:152.2,y:97}).wait(1).to({graphics:mask_2_graphics_246,x:139.7,y:88}).wait(1).to({graphics:mask_2_graphics_247,x:127.2,y:79}).wait(1).to({graphics:mask_2_graphics_248,x:114.75,y:70.05}).wait(1).to({graphics:mask_2_graphics_249,x:102.35,y:61.15}).wait(1).to({graphics:mask_2_graphics_250,x:90.15,y:52.4}).wait(1).to({graphics:mask_2_graphics_251,x:78.15,y:43.75}).wait(1).to({graphics:mask_2_graphics_252,x:66.4,y:35.3}).wait(1).to({graphics:mask_2_graphics_253,x:54.9,y:27.1}).wait(1).to({graphics:mask_2_graphics_254,x:43.8,y:19.1}).wait(1).to({graphics:mask_2_graphics_255,x:33,y:11.35}).wait(1).to({graphics:mask_2_graphics_256,x:22.65,y:3.9}).wait(1).to({graphics:mask_2_graphics_257,x:12.65,y:-3.3}).wait(1).to({graphics:mask_2_graphics_258,x:3.05,y:-10.15}).wait(1).to({graphics:mask_2_graphics_259,x:-6.1,y:-16.75}).wait(1).to({graphics:mask_2_graphics_260,x:-14.85,y:-23.05}).wait(1).to({graphics:mask_2_graphics_261,x:-23.2,y:-29}).wait(1).to({graphics:mask_2_graphics_262,x:-31.1,y:-34.7}).wait(1).to({graphics:mask_2_graphics_263,x:-41.85,y:-44.25}).wait(1).to({graphics:mask_2_graphics_264,x:-52.05,y:-53.35}).wait(1).to({graphics:mask_2_graphics_265,x:-61.7,y:-61.9}).wait(1).to({graphics:mask_2_graphics_266,x:-70.85,y:-70}).wait(1).to({graphics:mask_2_graphics_267,x:-79.45,y:-77.65}).wait(1).to({graphics:mask_2_graphics_268,x:-87.55,y:-84.85}).wait(1).to({graphics:mask_2_graphics_269,x:-95.15,y:-91.65}).wait(1).to({graphics:mask_2_graphics_270,x:-102.35,y:-98}).wait(1).to({graphics:mask_2_graphics_271,x:-109.05,y:-103.95}).wait(1).to({graphics:mask_2_graphics_272,x:-115.35,y:-109.55}).wait(1).to({graphics:mask_2_graphics_273,x:-121.2,y:-114.75}).wait(1).to({graphics:mask_2_graphics_274,x:-126.7,y:-119.65}).wait(1).to({graphics:mask_2_graphics_275,x:-131.8,y:-124.15}).wait(1).to({graphics:mask_2_graphics_276,x:-136.55,y:-128.35}).wait(1).to({graphics:mask_2_graphics_277,x:-140.9,y:-132.3}).wait(1).to({graphics:mask_2_graphics_278,x:-145,y:-135.9}).wait(1).to({graphics:mask_2_graphics_279,x:-148.7,y:-139.2}).wait(1).to({graphics:mask_2_graphics_280,x:-152.15,y:-142.25}).wait(1).to({graphics:mask_2_graphics_281,x:-155.3,y:-145.05}).wait(1).to({graphics:mask_2_graphics_282,x:-158.15,y:-147.55}).wait(1).to({graphics:mask_2_graphics_283,x:-160.7,y:-149.85}).wait(1).to({graphics:mask_2_graphics_284,x:-163,y:-151.9}).wait(1).to({graphics:mask_2_graphics_285,x:-165.1,y:-153.75}).wait(1).to({graphics:mask_2_graphics_286,x:-166.9,y:-155.35}).wait(1).to({graphics:mask_2_graphics_287,x:-168.5,y:-156.75}).wait(1).to({graphics:mask_2_graphics_288,x:-169.85,y:-158}).wait(1).to({graphics:mask_2_graphics_289,x:-171,y:-159}).wait(155).to({graphics:null,x:0,y:0}).wait(2));

	// RT
	this.instance_28 = new lib.redTree_1();
	this.instance_28.setTransform(9,194,0.7071,0.7071,0,0,0,299.7,57.1);
	this.instance_28._off = true;

	var maskedShapeInstanceList = [this.instance_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(183).to({_off:false},0).to({_off:true},261).wait(2));

	// WT
	this.instance_29 = new lib.whiteTree_1();
	this.instance_29.setTransform(288.65,219,0.6211,0.6211,0,0,0,299.8,51.1);
	this.instance_29._off = true;

	var maskedShapeInstanceList = [this.instance_29];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(174).to({_off:false},0).to({_off:true},270).wait(2));

	// text3
	this.instance_30 = new lib.text3_1();
	this.instance_30.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	var maskedShapeInstanceList = [this.instance_30];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(170).to({_off:false},0).to({alpha:1},44,cjs.Ease.cubicOut).to({_off:true},230).wait(2));

	// CorollaIn
	this.instance_31 = new lib.CL_AnimationIn_mc();
	this.instance_31.setTransform(-73,153,0.3737,0.3737,0,0,0,150.2,125.7);
	this.instance_31._off = true;

	var maskedShapeInstanceList = [this.instance_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(170).to({_off:false},0).to({regX:150.3,regY:125.2,scaleX:0.4516,scaleY:0.4516,x:59.3,y:170.5},44,cjs.Ease.cubicOut).to({_off:true},52).wait(180));

	// HighlanderIn
	this.instance_32 = new lib.HI_AnimationIn_mc();
	this.instance_32.setTransform(-42,147.75,0.3121,0.3121,0,0,0,149.5,125.8);
	this.instance_32._off = true;

	var maskedShapeInstanceList = [this.instance_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(180).to({_off:false},0).to({regX:150,regY:125.5,scaleX:0.3771,scaleY:0.3771,x:123.95,y:169.05},44,cjs.Ease.cubicOut).to({_off:true},42).wait(180));

	// RAV4In
	this.instance_33 = new lib.RV_AnimationIn_mc();
	this.instance_33.setTransform(34.85,158.6,0.2988,0.2988,0,0,0,149.8,125.9);
	this.instance_33._off = true;

	var maskedShapeInstanceList = [this.instance_33];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(190).to({_off:false},0).to({regX:150.2,regY:125.4,scaleX:0.361,scaleY:0.361,x:188,y:166},44,cjs.Ease.cubicOut).to({_off:true},32).wait(180));

	// CamryIn
	this.instance_34 = new lib.CY_AnimationIn_mc();
	this.instance_34.setTransform(85.95,155.1,0.2746,0.2746,0,0,0,150.6,126);
	this.instance_34._off = true;

	var maskedShapeInstanceList = [this.instance_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(199).to({_off:false},0).to({regY:125.2,scaleX:0.3318,scaleY:0.3318,x:237.45,y:165.55},44,cjs.Ease.cubicOut).to({_off:true},23).wait(180));

	// RT3
	this.instance_35 = new lib.redTree_1();
	this.instance_35.setTransform(63.75,154.3,0.361,0.361,0,0,0,299.9,57.5);
	this.instance_35._off = true;

	var maskedShapeInstanceList = [this.instance_35];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(189).to({_off:false},0).to({_off:true},255).wait(2));

	// WT3
	this.instance_36 = new lib.whiteTree_1();
	this.instance_36.setTransform(42.15,162.65,0.3303,0.3303,0,0,0,299.9,51.3);
	this.instance_36._off = true;

	var maskedShapeInstanceList = [this.instance_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(198).to({_off:false},0).to({_off:true},246).wait(2));

	// RT2
	this.instance_37 = new lib.redTree_1();
	this.instance_37.setTransform(268.35,143.2,0.3863,0.3863,0,0,0,300.2,57.5);
	this.instance_37._off = true;

	var maskedShapeInstanceList = [this.instance_37];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(216).to({_off:false},0).to({_off:true},228).wait(2));

	// WT2
	this.instance_38 = new lib.whiteTree_1();
	this.instance_38.setTransform(242,150,0.3534,0.3534,0,0,0,300.1,51.2);
	this.instance_38._off = true;

	var maskedShapeInstanceList = [this.instance_38];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(208).to({_off:false},0).to({_off:true},236).wait(2));

	// pageFlip1
	this.instance_39 = new lib.pageFlip_1();
	this.instance_39.setTransform(323.15,271.05,0.4908,0.4908,0,0,0,57.2,57.4);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(91).to({_off:false},0).wait(1).to({regX:57,regY:57.1,scaleX:0.658,scaleY:0.658,x:312,y:261.3},0).wait(1).to({scaleX:0.8266,scaleY:0.8266,x:300.9,y:251.65},0).wait(1).to({scaleX:0.9962,scaleY:0.9962,x:289.75,y:241.9},0).wait(1).to({scaleX:1.1663,scaleY:1.1663,x:278.55,y:232.15},0).wait(1).to({scaleX:1.3363,scaleY:1.3363,x:267.35,y:222.4},0).wait(1).to({scaleX:1.5058,scaleY:1.5058,x:256.2,y:212.7},0).wait(1).to({scaleX:1.674,scaleY:1.674,x:245.1,y:203.05},0).wait(1).to({scaleX:1.8406,scaleY:1.8406,x:234.15,y:193.45},0).wait(1).to({scaleX:2.005,scaleY:2.005,x:223.35,y:184.05},0).wait(1).to({scaleX:2.1667,scaleY:2.1667,x:212.7,y:174.7},0).wait(1).to({scaleX:2.3254,scaleY:2.3254,x:202.25,y:165.65},0).wait(1).to({scaleX:2.4806,scaleY:2.4806,x:192.05,y:156.75},0).wait(1).to({scaleX:2.632,scaleY:2.632,x:182.05,y:148.1},0).wait(1).to({scaleX:2.7793,scaleY:2.7793,x:172.35,y:139.65},0).wait(1).to({scaleX:2.9224,scaleY:2.9224,x:162.95,y:131.4},0).wait(1).to({scaleX:3.0609,scaleY:3.0609,x:153.85,y:123.5},0).wait(1).to({scaleX:3.1949,scaleY:3.1949,x:145.05,y:115.8},0).wait(1).to({scaleX:3.3242,scaleY:3.3242,x:136.55,y:108.35},0).wait(1).to({regX:56.9,scaleX:3.4487,scaleY:3.4487,x:129.2,y:102.05},0).wait(1).to({regX:57,scaleX:3.4114,scaleY:3.4114,x:119.25,y:91.8},0).wait(1).to({scaleX:3.3761,scaleY:3.3761,x:109.5,y:82},0).wait(1).to({scaleX:3.3426,scaleY:3.3426,x:100.3,y:72.75},0).wait(1).to({scaleX:3.3111,scaleY:3.3111,x:91.6,y:64.05},0).wait(1).to({scaleX:3.2815,scaleY:3.2815,x:83.4,y:55.85},0).wait(1).to({scaleX:3.2537,scaleY:3.2537,x:75.7,y:48.2},0).wait(1).to({scaleX:3.2275,scaleY:3.2275,x:68.45,y:41},0).wait(1).to({scaleX:3.2031,scaleY:3.2031,x:61.75,y:34.2},0).wait(1).to({scaleX:3.1803,scaleY:3.1803,x:55.45,y:27.9},0).wait(1).to({scaleX:3.159,scaleY:3.159,x:49.55,y:22.05},0).wait(1).to({scaleX:3.1391,scaleY:3.1391,x:44.1,y:16.55},0).wait(1).to({scaleX:3.1207,scaleY:3.1207,x:39,y:11.45},0).wait(1).to({scaleX:3.1037,scaleY:3.1037,x:34.3,y:6.7},0).wait(1).to({scaleX:3.0879,scaleY:3.0879,x:29.95,y:2.35},0).wait(1).to({scaleX:3.0733,scaleY:3.0733,x:25.95,y:-1.65},0).wait(1).to({scaleX:3.0599,scaleY:3.0599,x:22.2,y:-5.35},0).wait(1).to({scaleX:3.0477,scaleY:3.0477,x:18.8,y:-8.75},0).wait(1).to({scaleX:3.0365,scaleY:3.0365,x:15.75,y:-11.8},0).wait(1).to({scaleX:3.0263,scaleY:3.0263,x:12.95,y:-14.65},0).wait(1).to({scaleX:3.0171,scaleY:3.0171,x:10.35,y:-17.2},0).wait(1).to({scaleX:3.0088,scaleY:3.0088,x:8.1,y:-19.5},0).wait(1).to({scaleX:3.0014,scaleY:3.0014,x:6.1,y:-21.5},0).wait(1).to({scaleX:2.9949,scaleY:2.9949,x:4.25,y:-23.35},0).wait(1).to({scaleX:2.9892,scaleY:2.9892,x:2.7,y:-24.9},0).wait(1).to({scaleX:2.9843,scaleY:2.9843,x:1.35,y:-26.25},0).wait(1).to({scaleX:2.9801,scaleY:2.9801,x:0.15,y:-27.4},0).wait(1).to({regX:57.1,regY:57,scaleX:2.9767,scaleY:2.9767,x:-1.25,y:-28.4},0).to({_off:true},1).wait(308));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_155 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_156 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_3_graphics_157 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_158 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_159 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_160 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_161 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_3_graphics_162 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_3_graphics_163 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_164 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_165 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_166 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_3_graphics_167 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_168 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_169 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_3_graphics_170 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_171 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_3_graphics_172 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_3_graphics_173 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_3_graphics_174 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_175 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_176 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_3_graphics_177 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_178 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_179 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_180 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_3_graphics_181 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_3_graphics_182 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_3_graphics_183 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_184 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_185 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_186 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_3_graphics_187 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_188 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_189 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_3_graphics_190 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_3_graphics_191 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_3_graphics_192 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_193 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_3_graphics_194 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_195 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_196 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_3_graphics_197 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_198 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_199 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_200 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_3_graphics_201 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(155).to({graphics:mask_3_graphics_155,x:176.95,y:114.75}).wait(1).to({graphics:mask_3_graphics_156,x:162,y:103}).wait(1).to({graphics:mask_3_graphics_157,x:147.35,y:91.45}).wait(1).to({graphics:mask_3_graphics_158,x:133.05,y:80.2}).wait(1).to({graphics:mask_3_graphics_159,x:119.05,y:69.2}).wait(1).to({graphics:mask_3_graphics_160,x:105.4,y:58.5}).wait(1).to({graphics:mask_3_graphics_161,x:92.1,y:48}).wait(1).to({graphics:mask_3_graphics_162,x:79.1,y:37.75}).wait(1).to({graphics:mask_3_graphics_163,x:66.45,y:27.8}).wait(1).to({graphics:mask_3_graphics_164,x:54.1,y:18.1}).wait(1).to({graphics:mask_3_graphics_165,x:42.1,y:8.65}).wait(1).to({graphics:mask_3_graphics_166,x:30.45,y:-0.5}).wait(1).to({graphics:mask_3_graphics_167,x:19.1,y:-9.45}).wait(1).to({graphics:mask_3_graphics_168,x:8.1,y:-18.1}).wait(1).to({graphics:mask_3_graphics_169,x:-2.6,y:-26.5}).wait(1).to({graphics:mask_3_graphics_170,x:-12.95,y:-34.65}).wait(1).to({graphics:mask_3_graphics_171,x:-23,y:-42.55}).wait(1).to({graphics:mask_3_graphics_172,x:-32.7,y:-50.2}).wait(1).to({graphics:mask_3_graphics_173,x:-42.1,y:-57.55}).wait(1).to({graphics:mask_3_graphics_174,x:-51.1,y:-64.7}).wait(1).to({graphics:mask_3_graphics_175,x:-59.85,y:-71.55}).wait(1).to({graphics:mask_3_graphics_176,x:-68.2,y:-78.15}).wait(1).to({graphics:mask_3_graphics_177,x:-76.3,y:-84.5}).wait(1).to({graphics:mask_3_graphics_178,x:-84,y:-90.55}).wait(1).to({graphics:mask_3_graphics_179,x:-91.4,y:-96.4}).wait(1).to({graphics:mask_3_graphics_180,x:-98.5,y:-101.95}).wait(1).to({graphics:mask_3_graphics_181,x:-105.2,y:-107.25}).wait(1).to({graphics:mask_3_graphics_182,x:-111.65,y:-112.3}).wait(1).to({graphics:mask_3_graphics_183,x:-117.7,y:-117.1}).wait(1).to({graphics:mask_3_graphics_184,x:-123.5,y:-121.6}).wait(1).to({graphics:mask_3_graphics_185,x:-128.9,y:-125.9}).wait(1).to({graphics:mask_3_graphics_186,x:-134,y:-129.9}).wait(1).to({graphics:mask_3_graphics_187,x:-138.75,y:-133.65}).wait(1).to({graphics:mask_3_graphics_188,x:-143.2,y:-137.15}).wait(1).to({graphics:mask_3_graphics_189,x:-147.3,y:-140.35}).wait(1).to({graphics:mask_3_graphics_190,x:-151.1,y:-143.35}).wait(1).to({graphics:mask_3_graphics_191,x:-154.55,y:-146.05}).wait(1).to({graphics:mask_3_graphics_192,x:-157.7,y:-148.5}).wait(1).to({graphics:mask_3_graphics_193,x:-160.45,y:-150.7}).wait(1).to({graphics:mask_3_graphics_194,x:-162.95,y:-152.65}).wait(1).to({graphics:mask_3_graphics_195,x:-165.1,y:-154.35}).wait(1).to({graphics:mask_3_graphics_196,x:-166.9,y:-155.75}).wait(1).to({graphics:mask_3_graphics_197,x:-168.35,y:-156.95}).wait(1).to({graphics:mask_3_graphics_198,x:-169.5,y:-157.85}).wait(1).to({graphics:mask_3_graphics_199,x:-170.35,y:-158.5}).wait(1).to({graphics:mask_3_graphics_200,x:-170.85,y:-158.85}).wait(1).to({graphics:mask_3_graphics_201,x:-171,y:-159}).wait(243).to({graphics:null,x:0,y:0}).wait(2));

	// WT1
	this.instance_40 = new lib.whiteTree_1();
	this.instance_40.setTransform(7,222,1,1,0,0,0,298,69);
	this.instance_40._off = true;

	var maskedShapeInstanceList = [this.instance_40];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(116).to({_off:false},0).to({_off:true},328).wait(2));

	// WT2
	this.instance_41 = new lib.whiteTree_1();
	this.instance_41.setTransform(296.05,218.25,0.9706,0.9706,0,0,0,299.1,64.5);
	this.instance_41._off = true;

	var maskedShapeInstanceList = [this.instance_41];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(107).to({_off:false},0).to({_off:true},337).wait(2));

	// text2
	this.instance_42 = new lib.text2_1();
	this.instance_42.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_42.alpha = 0;
	this.instance_42._off = true;

	var maskedShapeInstanceList = [this.instance_42];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(107).to({_off:false},0).to({alpha:1},44,cjs.Ease.cubicOut).to({_off:true},293).wait(2));

	// Corolla
	this.instance_43 = new lib.CL_AnimationIn_mc();
	this.instance_43.setTransform(-116.2,134.4,0.6835,0.6835,0,0,0,149.8,125.6);
	this.instance_43._off = true;

	var maskedShapeInstanceList = [this.instance_43];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(107).to({_off:false},0).to({regX:149.9,regY:125.4,scaleX:0.8259,scaleY:0.8259,x:152.9,y:160.15},44,cjs.Ease.cubicOut).to({_off:true},293).wait(2));

	// WT3
	this.instance_44 = new lib.whiteTree_1();
	this.instance_44.setTransform(43.1,165.9,0.5525,0.5525,0,0,0,299.1,64.5);
	this.instance_44._off = true;

	var maskedShapeInstanceList = [this.instance_44];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(122).to({_off:false},0).to({_off:true},322).wait(2));

	// WT4
	this.instance_45 = new lib.whiteTree_1();
	this.instance_45.setTransform(242.95,162.8,0.4418,0.4418,0,0,0,299.1,64.3);
	this.instance_45._off = true;

	var maskedShapeInstanceList = [this.instance_45];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(130).to({_off:false},0).to({_off:true},314).wait(2));

	// bookCover
	this.instance_46 = new lib.bookCover_1();
	this.instance_46.setTransform(0,125,1,1,0,0,0,0,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(30).to({scaleX:0.0134,skewY:-176.4645,x:2},38,cjs.Ease.quadIn).to({_off:true},1).wait(377));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_91 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_92 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_4_graphics_93 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_94 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_95 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_96 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_97 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_4_graphics_98 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_4_graphics_99 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_100 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_101 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_102 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_4_graphics_103 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_104 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_105 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_4_graphics_106 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_107 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_4_graphics_108 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_4_graphics_109 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_4_graphics_110 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_111 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_112 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_4_graphics_113 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_114 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_115 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_116 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_4_graphics_117 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_4_graphics_118 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_4_graphics_119 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_120 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_121 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_122 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvjMg+LA9Ag");
	var mask_4_graphics_123 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_124 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_125 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_4_graphics_126 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_4_graphics_127 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvkMg+LA8/g");
	var mask_4_graphics_128 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_129 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_4_graphics_130 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_131 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_132 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");
	var mask_4_graphics_133 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_134 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_135 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_136 = new cjs.Graphics().p("Eg2aAGuMA+Lg8/MAuqAvkMg+LA8/g");
	var mask_4_graphics_137 = new cjs.Graphics().p("Eg2aAGvMA+Lg9AMAuqAvjMg+LA9Ag");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(91).to({graphics:mask_4_graphics_91,x:176.95,y:114.75}).wait(1).to({graphics:mask_4_graphics_92,x:162,y:103}).wait(1).to({graphics:mask_4_graphics_93,x:147.35,y:91.45}).wait(1).to({graphics:mask_4_graphics_94,x:133.05,y:80.2}).wait(1).to({graphics:mask_4_graphics_95,x:119.05,y:69.2}).wait(1).to({graphics:mask_4_graphics_96,x:105.4,y:58.5}).wait(1).to({graphics:mask_4_graphics_97,x:92.1,y:48}).wait(1).to({graphics:mask_4_graphics_98,x:79.1,y:37.75}).wait(1).to({graphics:mask_4_graphics_99,x:66.45,y:27.8}).wait(1).to({graphics:mask_4_graphics_100,x:54.1,y:18.1}).wait(1).to({graphics:mask_4_graphics_101,x:42.1,y:8.65}).wait(1).to({graphics:mask_4_graphics_102,x:30.45,y:-0.5}).wait(1).to({graphics:mask_4_graphics_103,x:19.1,y:-9.45}).wait(1).to({graphics:mask_4_graphics_104,x:8.1,y:-18.1}).wait(1).to({graphics:mask_4_graphics_105,x:-2.6,y:-26.5}).wait(1).to({graphics:mask_4_graphics_106,x:-12.95,y:-34.65}).wait(1).to({graphics:mask_4_graphics_107,x:-23,y:-42.55}).wait(1).to({graphics:mask_4_graphics_108,x:-32.7,y:-50.2}).wait(1).to({graphics:mask_4_graphics_109,x:-42.1,y:-57.55}).wait(1).to({graphics:mask_4_graphics_110,x:-51.1,y:-64.7}).wait(1).to({graphics:mask_4_graphics_111,x:-59.85,y:-71.55}).wait(1).to({graphics:mask_4_graphics_112,x:-68.2,y:-78.15}).wait(1).to({graphics:mask_4_graphics_113,x:-76.3,y:-84.5}).wait(1).to({graphics:mask_4_graphics_114,x:-84,y:-90.55}).wait(1).to({graphics:mask_4_graphics_115,x:-91.4,y:-96.4}).wait(1).to({graphics:mask_4_graphics_116,x:-98.5,y:-101.95}).wait(1).to({graphics:mask_4_graphics_117,x:-105.2,y:-107.25}).wait(1).to({graphics:mask_4_graphics_118,x:-111.65,y:-112.3}).wait(1).to({graphics:mask_4_graphics_119,x:-117.7,y:-117.1}).wait(1).to({graphics:mask_4_graphics_120,x:-123.5,y:-121.6}).wait(1).to({graphics:mask_4_graphics_121,x:-128.9,y:-125.9}).wait(1).to({graphics:mask_4_graphics_122,x:-134,y:-129.9}).wait(1).to({graphics:mask_4_graphics_123,x:-138.75,y:-133.65}).wait(1).to({graphics:mask_4_graphics_124,x:-143.2,y:-137.15}).wait(1).to({graphics:mask_4_graphics_125,x:-147.3,y:-140.35}).wait(1).to({graphics:mask_4_graphics_126,x:-151.1,y:-143.35}).wait(1).to({graphics:mask_4_graphics_127,x:-154.55,y:-146.05}).wait(1).to({graphics:mask_4_graphics_128,x:-157.7,y:-148.5}).wait(1).to({graphics:mask_4_graphics_129,x:-160.45,y:-150.7}).wait(1).to({graphics:mask_4_graphics_130,x:-162.95,y:-152.65}).wait(1).to({graphics:mask_4_graphics_131,x:-165.1,y:-154.35}).wait(1).to({graphics:mask_4_graphics_132,x:-166.9,y:-155.75}).wait(1).to({graphics:mask_4_graphics_133,x:-168.35,y:-156.95}).wait(1).to({graphics:mask_4_graphics_134,x:-169.5,y:-157.85}).wait(1).to({graphics:mask_4_graphics_135,x:-170.35,y:-158.5}).wait(1).to({graphics:mask_4_graphics_136,x:-170.85,y:-158.85}).wait(1).to({graphics:mask_4_graphics_137,x:-171,y:-159}).wait(307).to({graphics:null,x:0,y:0}).wait(2));

	// RT1
	this.instance_47 = new lib.redTree_1();
	this.instance_47.setTransform(12,162,1,1,0,0,0,298,69);
	this.instance_47._off = true;

	var maskedShapeInstanceList = [this.instance_47];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(59).to({_off:false},0).to({_off:true},385).wait(2));

	// RT2
	this.instance_48 = new lib.redTree_1();
	this.instance_48.setTransform(288.05,175.05,0.8471,0.8471,0,0,0,299.1,64.2);
	this.instance_48._off = true;

	var maskedShapeInstanceList = [this.instance_48];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(47).to({_off:false},0).to({_off:true},397).wait(2));

	// text1
	this.instance_49 = new lib.text1_1();
	this.instance_49.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_49.alpha = 0;
	this.instance_49._off = true;

	var maskedShapeInstanceList = [this.instance_49];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(47).to({_off:false},0).to({alpha:1},44,cjs.Ease.cubicOut).to({_off:true},353).wait(2));

	// HighlanderIn copy
	this.instance_50 = new lib.HI_AnimationIn_mc();
	this.instance_50.setTransform(-97,136.1,0.6311,0.6311,0,0,0,149.9,125.5);
	this.instance_50._off = true;

	var maskedShapeInstanceList = [this.instance_50];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(47).to({_off:false},0).to({regY:125.2,scaleX:0.7626,scaleY:0.7626,x:151.55,y:159.85},44,cjs.Ease.cubicOut).to({_off:true},353).wait(2));

	// RT3
	this.instance_51 = new lib.redTree_1();
	this.instance_51.setTransform(53.05,157.8,0.4418,0.4418,0,0,0,299.1,64.3);
	this.instance_51._off = true;

	var maskedShapeInstanceList = [this.instance_51];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(65).to({_off:false},0).to({_off:true},379).wait(2));

	// RT4
	this.instance_52 = new lib.redTree_1();
	this.instance_52.setTransform(252.95,155.8,0.4418,0.4418,0,0,0,299.1,64.3);
	this.instance_52._off = true;

	var maskedShapeInstanceList = [this.instance_52];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(52).to({_off:false},0).to({_off:true},392).wait(2));

	// logo
	this.instance_53 = new lib.logo_1();
	this.instance_53.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(446));

	// back
	this.instance_54 = new lib.back_1();
	this.instance_54.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(446));

	// offerLoad
	this.offer_mc_1 = new lib.offer_mc();
	this.offer_mc_1.name = "offer_mc_1";
	this.offer_mc_1.setTransform(161,89,1,1,0,0,0,93,44);

	this.timeline.addTween(cjs.Tween.get(this.offer_mc_1).wait(446));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-253.9,-73.1,642.6,387.6);
// library properties:
lib.properties = {
	id: '6DBC25FFFD4048B3B488CE195B1E3C32',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1603901359042", id:"back"},
		{src:"images/bookCover.png?1603901359042", id:"bookCover"},
		{src:"images/CL.png?1603901359042", id:"CL"},
		{src:"images/CL_wheel.png?1603901359042", id:"CL_wheel"},
		{src:"images/cta.png?1603901359042", id:"cta"},
		{src:"images/CY.png?1603901359042", id:"CY"},
		{src:"images/CY_wheel.png?1603901359042", id:"CY_wheel"},
		{src:"images/details.png?1603901359042", id:"details"},
		{src:"images/HI.png?1603901359042", id:"HI"},
		{src:"images/HI_wheel.png?1603901359042", id:"HI_wheel"},
		{src:"images/logo.png?1603901359042", id:"logo"},
		{src:"images/offerTitle.png?1603901359042", id:"offerTitle"},
		{src:"images/options.png?1603901359042", id:"options"},
		{src:"images/pageFlip.png?1603901359042", id:"pageFlip"},
		{src:"images/redTree.png?1603901359042", id:"redTree"},
		{src:"images/RV.png?1603901359042", id:"RV"},
		{src:"images/RV_wheel.png?1603901359042", id:"RV_wheel"},
		{src:"images/text1.png?1603901359042", id:"text1"},
		{src:"images/text2.png?1603901359042", id:"text2"},
		{src:"images/text3.png?1603901359042", id:"text3"},
		{src:"images/text4.png?1603901359042", id:"text4"},
		{src:"images/text5.png?1603901359042", id:"text5"},
		{src:"images/whiteTree.png?1603901359042", id:"whiteTree"}
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
an.compositions['6DBC25FFFD4048B3B488CE195B1E3C32'] = {
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