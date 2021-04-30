(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bookCover = function() {
	this.initialize(img.bookCover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


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
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


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
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


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
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.offerTitle = function() {
	this.initialize(img.offerTitle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.options = function() {
	this.initialize(img.options);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


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
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.text4 = function() {
	this.initialize(img.text4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.text5 = function() {
	this.initialize(img.text5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


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

}).prototype = getMCSymbolPrototype(lib.options_1, new cjs.Rectangle(0,0,728,90), null);


(lib.offer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// *
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAHIgIAPIgJgGIAMgNIgRgDIADgLIAQAHIgBgRIAKAAIgCARIAQgHIADALIgQADIALANIgJAGg");
	this.shape.setTransform(118.625,9.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// dynamic_field1
	this.dynamic_field1 = new cjs.Text("0.0%", "28px 'Toyota Type'", "#FFFFFF");
	this.dynamic_field1.name = "dynamic_field1";
	this.dynamic_field1.textAlign = "right";
	this.dynamic_field1.lineHeight = 40;
	this.dynamic_field1.lineWidth = 71;
	this.dynamic_field1.parent = this;
	this.dynamic_field1.setTransform(115.3463,-5.8,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field1).wait(1));

	// dynamic_field2
	this.dynamic_field2 = new cjs.Text("APR FOR 00 MONTHS", "8px 'Toyota Type'", "#FFFFFF");
	this.dynamic_field2.name = "dynamic_field2";
	this.dynamic_field2.lineHeight = 11;
	this.dynamic_field2.lineWidth = 162;
	this.dynamic_field2.parent = this;
	this.dynamic_field2.setTransform(129.2427,1.2,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field2).wait(1));

	// dynamic_field3
	this.dynamic_field3 = new cjs.Text("$0 DOWN WITH APPROVED CREDIT", "8px 'Toyota Type'", "#FFFFFF");
	this.dynamic_field3.name = "dynamic_field3";
	this.dynamic_field3.lineHeight = 8;
	this.dynamic_field3.lineWidth = 75;
	this.dynamic_field3.parent = this;
	this.dynamic_field3.setTransform(129.2286,10.2,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field3).wait(1));

	// dynamic_field4
	this.dynamic_field4 = new cjs.Text("PLUS $500 BONUS CASH", "bold 10px 'Toyota Type Black'", "#FFFFFF");
	this.dynamic_field4.name = "dynamic_field4";
	this.dynamic_field4.lineHeight = 11;
	this.dynamic_field4.lineWidth = 124;
	this.dynamic_field4.parent = this;
	this.dynamic_field4.setTransform(46.2321,32.95,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.offer_mc, new cjs.Rectangle(34.1,-8,278.9,58.8), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,728,90), null);


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

}).prototype = getMCSymbolPrototype(lib.details_1, new cjs.Rectangle(0,0,728,90), null);


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

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,728,90), null);


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
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C1272C").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bookCover_1, new cjs.Rectangle(0,0,728,90), null);


(lib.back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#121A31").s().p("Eg5GACvIAAldMByNAAAIAAFdg");
	this.shape.setTransform(364.475,72.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E263D").s().p("Eg43AFPIAAqdMBxvAAAIAAKdg");
	this.shape_1.setTransform(364,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back, new cjs.Rectangle(-1,0,731,90.1), null);


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
	this.instance.setTransform(595.8,17.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).wait(9));

	// Layer_10
	this.instance_1 = new lib.sparkle_anim();
	this.instance_1.setTransform(429.35,18.2,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).wait(48));

	// Layer_8
	this.instance_2 = new lib.bottomStar();
	this.instance_2.setTransform(93.55,11.9,0.6875,0.6875,0,0,0,6.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(81));

	// Layer_7
	this.instance_3 = new lib.bottomStar();
	this.instance_3.setTransform(700.65,8.95,0.7562,0.5275,0,0,0,6.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(81));

	// Layer_6
	this.instance_4 = new lib.bottomStar();
	this.instance_4.setTransform(380.65,14.95,0.7562,0.5275,0,0,0,6.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(81));

	// Layer_5
	this.instance_5 = new lib.bottomStar();
	this.instance_5.setTransform(624.6,29.75,0.6875,0.6875,0,-44.9991,135.0009,6.2,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(81));

	// Layer_4
	this.instance_6 = new lib.bottomStar();
	this.instance_6.setTransform(189.5,26.9,0.6875,0.6875,0,14.9986,-165.0014,6.3,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(81));

	// Layer_3
	this.instance_7 = new lib.bottomStar();
	this.instance_7.setTransform(250.5,9.9,0.6875,0.6875,14.9989,0,0,6.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(81));

	// Layer_1
	this.instance_8 = new lib.offerTitle();
	this.instance_8.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(81));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


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
	this.instance.setTransform(659.8,20.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91).to({_off:false},0).wait(51));

	// Layer_10
	this.instance_1 = new lib.sparkle_anim();
	this.instance_1.setTransform(624.35,42.2,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).wait(79));

	// Layer_9
	this.instance_2 = new lib.sparkle_anim();
	this.instance_2.setTransform(487.5,39.55,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).wait(108));

	// Layer_8
	this.instance_3 = new lib.star();
	this.instance_3.setTransform(190.5,20.85,0.8835,0.8835,59.9996,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(142));

	// Layer_7
	this.instance_4 = new lib.star2();
	this.instance_4.setTransform(684.4,9.8,1,1,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(142));

	// Layer_6
	this.instance_5 = new lib.star2();
	this.instance_5.setTransform(470.4,13.8,0.8835,0.8835,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(142));

	// Layer_5
	this.instance_6 = new lib.star();
	this.instance_6.setTransform(673.55,42.85,0.7415,0.7415,45,0,0,5.7,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(142));

	// Layer_4
	this.instance_7 = new lib.star();
	this.instance_7.setTransform(262.55,8.8,0.6,0.6,-45,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(142));

	// Layer_3
	this.instance_8 = new lib.star();
	this.instance_8.setTransform(413.5,11.85,0.7325,0.7325,29.9991,0,0,5.7,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(142));

	// Layer_2
	this.instance_9 = new lib.star2();
	this.instance_9.setTransform(371.45,14.85,1,1,74.9998,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(142));

	// Layer_1
	this.instance_10 = new lib.text5();
	this.instance_10.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(142));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.text4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_11 copy
	this.instance = new lib.sparkle_anim();
	this.instance.setTransform(531.8,66.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).wait(35));

	// Layer_11
	this.instance_1 = new lib.sparkle_anim();
	this.instance_1.setTransform(606.8,24.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42).to({_off:false},0).wait(78));

	// Layer_10
	this.instance_2 = new lib.sparkle_anim();
	this.instance_2.setTransform(480.35,24.2,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},0).wait(56));

	// Layer_9
	this.instance_3 = new lib.sparkle_anim();
	this.instance_3.setTransform(670.5,25.55,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).wait(94));

	// Layer_8
	this.instance_4 = new lib.star();
	this.instance_4.setTransform(189.5,24.8,0.8835,0.8835,0,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Layer_7
	this.instance_5 = new lib.star2();
	this.instance_5.setTransform(683.4,11.8,1,1,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Layer_5
	this.instance_6 = new lib.star();
	this.instance_6.setTransform(467.55,7.85,0.7415,0.7415,45,0,0,5.7,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// Layer_4
	this.instance_7 = new lib.star();
	this.instance_7.setTransform(403.55,22.8,0.6,0.6,-45,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Layer_2
	this.instance_8 = new lib.star2();
	this.instance_8.setTransform(253.45,9.85,1,1,74.9998,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// Layer_1
	this.instance_9 = new lib.text4();
	this.instance_9.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.text3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_11
	this.instance = new lib.sparkle_anim();
	this.instance.setTransform(636.8,49.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(77).to({_off:false},0).wait(43));

	// Layer_10
	this.instance_1 = new lib.sparkle_anim();
	this.instance_1.setTransform(571.35,72.2,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51).to({_off:false},0).wait(69));

	// Layer_9
	this.instance_2 = new lib.sparkle_anim();
	this.instance_2.setTransform(521.5,17.55,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).wait(98));

	// Layer_8
	this.instance_3 = new lib.star();
	this.instance_3.setTransform(340.5,12.8,0.8835,0.8835,0,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// Layer_7
	this.instance_4 = new lib.star2();
	this.instance_4.setTransform(462.4,8.8,1,1,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Layer_6
	this.instance_5 = new lib.star2();
	this.instance_5.setTransform(695.4,22.8,0.8835,0.8835,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Layer_5
	this.instance_6 = new lib.star();
	this.instance_6.setTransform(501.55,20.85,0.7415,0.7415,45,0,0,5.7,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// Layer_4
	this.instance_7 = new lib.star();
	this.instance_7.setTransform(421.55,7.8,0.6,0.6,-45,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Layer_3
	this.instance_8 = new lib.star();
	this.instance_8.setTransform(622.5,7.85,0.7325,0.7325,29.9991,0,0,5.7,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// Layer_2
	this.instance_9 = new lib.star2();
	this.instance_9.setTransform(253.45,6.85,1,1,74.9998,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	// Layer_1
	this.instance_10 = new lib.text3();
	this.instance_10.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.text2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_11
	this.instance = new lib.sparkle_anim();
	this.instance.setTransform(501.8,18.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(76).to({_off:false},0).wait(44));

	// Layer_10
	this.instance_1 = new lib.sparkle_anim();
	this.instance_1.setTransform(640.35,19.2,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).wait(70));

	// Layer_9
	this.instance_2 = new lib.sparkle_anim();
	this.instance_2.setTransform(566.5,69.55,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).wait(98));

	// Layer_8
	this.instance_3 = new lib.star();
	this.instance_3.setTransform(38.5,40.8,0.8835,0.8835,0,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// Layer_7
	this.instance_4 = new lib.star2();
	this.instance_4.setTransform(276.4,11.8,1,1,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Layer_6
	this.instance_5 = new lib.star2();
	this.instance_5.setTransform(425.4,25.8,0.8835,0.8835,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Layer_5
	this.instance_6 = new lib.star();
	this.instance_6.setTransform(486.55,11.85,0.7415,0.7415,45,0,0,5.7,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// Layer_4
	this.instance_7 = new lib.star();
	this.instance_7.setTransform(121.55,10.8,0.6,0.6,-45,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Layer_2
	this.instance_8 = new lib.star2();
	this.instance_8.setTransform(188.45,28.85,1,1,74.9998,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// Layer_1
	this.instance_9 = new lib.text2();
	this.instance_9.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.text1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_11
	this.instance = new lib.sparkle_anim();
	this.instance.setTransform(499.8,47.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).wait(31));

	// Layer_10
	this.instance_1 = new lib.sparkle_anim();
	this.instance_1.setTransform(666.35,20.2,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).wait(61));

	// Layer_9
	this.instance_2 = new lib.sparkle_anim();
	this.instance_2.setTransform(574.5,19.55,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(96));

	// Layer_8
	this.instance_3 = new lib.star();
	this.instance_3.setTransform(30.5,43.8,0.8835,0.8835,0,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// Layer_7
	this.instance_4 = new lib.star2();
	this.instance_4.setTransform(405.4,10.8,1,1,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Layer_6
	this.instance_5 = new lib.star2();
	this.instance_5.setTransform(256.4,17.8,0.8835,0.8835,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Layer_5
	this.instance_6 = new lib.star();
	this.instance_6.setTransform(462.55,19.85,0.7415,0.7415,45,0,0,5.7,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// Layer_4
	this.instance_7 = new lib.star();
	this.instance_7.setTransform(177.55,21.8,0.6,0.6,-45,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Layer_3
	this.instance_8 = new lib.star();
	this.instance_8.setTransform(681.9,11.05,0.7325,0.7325,29.9991,0,0,7,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// Layer_2
	this.instance_9 = new lib.star2();
	this.instance_9.setTransform(86.45,11.85,1,1,74.9998,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	// Layer_1
	this.instance_10 = new lib.text1();
	this.instance_10.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


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
	this.frame_98 = function() {
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
	this.frame_158 = function() {
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
	this.frame_250 = function() {
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
	this.frame_314 = function() {
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
	this.frame_378 = function() {
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
	this.frame_451 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(98).call(this.frame_98).wait(60).call(this.frame_158).wait(92).call(this.frame_250).wait(64).call(this.frame_314).wait(64).call(this.frame_378).wait(73).call(this.frame_451).wait(113));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},453).wait(111));

	// details_btn
	this.details_btn = new lib.details_btn();
	this.details_btn.name = "details_btn";
	this.details_btn.setTransform(584.95,71,1.0119,0.7194,0,0,0,18.2,7);
	new cjs.ButtonHelper(this.details_btn, 0, 1, 2, false, new lib.details_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.details_btn).to({_off:true},453).wait(111));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(364,45,2.4267,0.36,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).to({_off:true},453).wait(111));

	// pageFlip5
	this.instance = new lib.pageFlip_1();
	this.instance.setTransform(757,85.95,0.4908,0.4908,-14.998,0,0,57.3,57.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(378).to({_off:false},0).wait(1).to({regX:57,regY:57.1,scaleX:0.6416,scaleY:0.6416,rotation:-14.9979,x:727.4,y:76.3},0).wait(1).to({scaleX:0.7939,scaleY:0.7939,x:697.75,y:66.6},0).wait(1).to({scaleX:0.947,scaleY:0.947,rotation:-14.9978,x:667.95,y:56.95},0).wait(1).to({scaleX:1.1004,scaleY:1.1004,x:638.05,y:47.15},0).wait(1).to({scaleX:1.2532,scaleY:1.2532,rotation:-14.9977,x:608.25,y:37.5},0).wait(1).to({regX:57.4,regY:57.4,scaleX:1.4048,scaleY:1.4048,rotation:-14.9976,x:579.3,y:28.3},0).wait(1).to({regX:57,regY:57.1,scaleX:1.4699,scaleY:1.4699,x:547.8,y:24.25},0).wait(1).to({scaleX:1.5339,scaleY:1.5339,x:517.45,y:20.65},0).wait(1).to({scaleX:1.5965,scaleY:1.5965,x:487.8,y:17},0).wait(1).to({scaleX:1.6576,scaleY:1.6576,rotation:-14.9977,x:458.9,y:13.55},0).wait(1).to({scaleX:1.7169,scaleY:1.7169,x:430.8,y:10.1},0).wait(1).to({scaleX:1.7743,scaleY:1.7743,x:403.6,y:6.85},0).wait(1).to({scaleX:1.8297,scaleY:1.8297,x:377.45,y:3.6},0).wait(1).to({scaleX:1.883,scaleY:1.883,x:352.15,y:0.6},0).wait(1).to({scaleX:1.934,scaleY:1.934,x:328.05,y:-2.4},0).wait(1).to({scaleX:1.9829,scaleY:1.9829,x:304.85,y:-5.15},0).wait(1).to({scaleX:2.0295,scaleY:2.0295,x:282.85,y:-7.85},0).wait(1).to({scaleX:2.0739,scaleY:2.0739,x:261.8,y:-10.35},0).wait(1).to({scaleX:2.1161,scaleY:2.1161,x:241.8,y:-12.8},0).wait(1).to({scaleX:2.1561,scaleY:2.1561,x:222.8,y:-15.1},0).wait(1).to({scaleX:2.1941,scaleY:2.1941,x:204.85,y:-17.3},0).wait(1).to({scaleX:2.23,scaleY:2.23,x:187.85,y:-19.35},0).wait(1).to({scaleX:2.2639,scaleY:2.2639,x:171.8,y:-21.3},0).wait(1).to({scaleX:2.2959,scaleY:2.2959,x:156.65,y:-23.1},0).wait(1).to({scaleX:2.3261,scaleY:2.3261,x:142.35,y:-24.85},0).wait(1).to({scaleX:2.3544,scaleY:2.3544,x:129,y:-26.5},0).wait(1).to({scaleX:2.3811,scaleY:2.3811,x:116.4,y:-27.95},0).wait(1).to({scaleX:2.406,scaleY:2.406,x:104.5,y:-29.45},0).wait(1).to({scaleX:2.4294,scaleY:2.4294,x:93.45,y:-30.8},0).wait(1).to({scaleX:2.4513,scaleY:2.4513,x:83.1,y:-32.05},0).wait(1).to({scaleX:2.4717,scaleY:2.4717,x:73.45,y:-33.2},0).wait(1).to({scaleX:2.4907,scaleY:2.4907,x:64.5,y:-34.35},0).wait(1).to({scaleX:2.5083,scaleY:2.5083,x:56.1,y:-35.3},0).wait(1).to({scaleX:2.5246,scaleY:2.5246,x:48.4,y:-36.25},0).wait(1).to({scaleX:2.5397,scaleY:2.5397,x:41.3,y:-37.1},0).wait(1).to({scaleX:2.5536,scaleY:2.5536,x:34.7,y:-37.9},0).wait(1).to({scaleX:2.5664,scaleY:2.5664,x:28.6,y:-38.65},0).wait(1).to({scaleX:2.5781,scaleY:2.5781,x:23.1,y:-39.35},0).wait(1).to({scaleX:2.5887,scaleY:2.5887,x:18.1,y:-39.9},0).wait(1).to({scaleX:2.5982,scaleY:2.5982,x:13.55,y:-40.45},0).wait(1).to({scaleX:2.6069,scaleY:2.6069,x:9.45,y:-40.95},0).wait(1).to({scaleX:2.6145,scaleY:2.6145,x:5.85,y:-41.4},0).wait(1).to({scaleX:2.6213,scaleY:2.6213,x:2.6,y:-41.75},0).wait(1).to({scaleX:2.6272,scaleY:2.6272,x:-0.2,y:-42.15},0).wait(1).to({scaleX:2.6323,scaleY:2.6323,x:-2.55,y:-42.45},0).wait(1).to({regX:57.6,regY:57.5,scaleX:2.6365,scaleY:2.6365,x:-3.2,y:-42.1},0).to({_off:true},1).wait(139));

	// cta
	this.instance_1 = new lib.cta_1();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(407).to({_off:false},0).to({alpha:1},44,cjs.Ease.quadOut).to({_off:true},2).wait(111));

	// options
	this.instance_2 = new lib.options_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(407).to({_off:false},0).to({alpha:1},44,cjs.Ease.quadOut).to({_off:true},2).wait(111));

	// details
	this.instance_3 = new lib.details_1();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(407).to({_off:false},0).to({alpha:1},44,cjs.Ease.quadOut).to({_off:true},2).wait(111));

	// offer_mc
	this.offer_mc = new lib.offer_mc();
	this.offer_mc.name = "offer_mc";
	this.offer_mc.setTransform(476.65,72,1,1,0,0,0,93,44);
	this.offer_mc.alpha = 0;
	this.offer_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.offer_mc).wait(407).to({_off:false},0).to({alpha:1},44,cjs.Ease.quadOut).to({_off:true},2).wait(111));

	// offerTitle
	this.instance_4 = new lib.offerTitle_1();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(407).to({_off:false},0).to({alpha:1},44,cjs.Ease.quadOut).to({_off:true},2).wait(111));

	// RT1 copy 2
	this.instance_5 = new lib.redTree_1();
	this.instance_5.setTransform(226.65,53.95,0.5523,0.5523,0,0,0,297.9,69.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(407).to({_off:false},0).to({_off:true},46).wait(111));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_407 = new cjs.Graphics().p("AxuHCIAAuDMAjdAAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(407).to({graphics:mask_graphics_407,x:342.5,y:45}).wait(157));

	// Camry copy
	this.instance_6 = new lib.CY_AnimationIn_mc();
	this.instance_6.setTransform(120.05,16.15,0.5355,0.5355,0,0,0,149.8,125.8);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(407).to({_off:false},0).to({regX:149.9,regY:125.2,scaleX:0.6471,scaleY:0.6471,x:320.85,y:35.15},44,cjs.Ease.cubicOut).to({_off:true},2).wait(111));

	// RT2 copy 2
	this.instance_7 = new lib.redTree_1();
	this.instance_7.setTransform(400.05,39.8,0.2712,0.2712,0,0,0,299.2,64.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(416).to({_off:false},0).to({_off:true},37).wait(111));

	// WT4 copy 2
	this.instance_8 = new lib.whiteTree_1();
	this.instance_8.setTransform(260,47,0.2512,0.2512,0,0,0,299.4,64.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(423).to({_off:false},0).to({_off:true},30).wait(111));

	// pageFlip4
	this.instance_9 = new lib.pageFlip_1();
	this.instance_9.setTransform(757,85.95,0.4908,0.4908,-14.998,0,0,57.3,57.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(314).to({_off:false},0).wait(1).to({regX:57,regY:57.1,scaleX:0.6416,scaleY:0.6416,rotation:-14.9979,x:727.4,y:76.3},0).wait(1).to({scaleX:0.7939,scaleY:0.7939,x:697.75,y:66.6},0).wait(1).to({scaleX:0.947,scaleY:0.947,rotation:-14.9978,x:667.95,y:56.95},0).wait(1).to({scaleX:1.1004,scaleY:1.1004,x:638.05,y:47.15},0).wait(1).to({scaleX:1.2532,scaleY:1.2532,rotation:-14.9977,x:608.25,y:37.5},0).wait(1).to({regX:57.4,regY:57.4,scaleX:1.4048,scaleY:1.4048,rotation:-14.9976,x:579.3,y:28.3},0).wait(1).to({regX:57,regY:57.1,scaleX:1.4699,scaleY:1.4699,x:547.8,y:24.25},0).wait(1).to({scaleX:1.5339,scaleY:1.5339,x:517.45,y:20.65},0).wait(1).to({scaleX:1.5965,scaleY:1.5965,x:487.8,y:17},0).wait(1).to({scaleX:1.6576,scaleY:1.6576,rotation:-14.9977,x:458.9,y:13.55},0).wait(1).to({scaleX:1.7169,scaleY:1.7169,x:430.8,y:10.1},0).wait(1).to({scaleX:1.7743,scaleY:1.7743,x:403.6,y:6.85},0).wait(1).to({scaleX:1.8297,scaleY:1.8297,x:377.45,y:3.6},0).wait(1).to({scaleX:1.883,scaleY:1.883,x:352.15,y:0.6},0).wait(1).to({scaleX:1.934,scaleY:1.934,x:328.05,y:-2.4},0).wait(1).to({scaleX:1.9829,scaleY:1.9829,x:304.85,y:-5.15},0).wait(1).to({scaleX:2.0295,scaleY:2.0295,x:282.85,y:-7.85},0).wait(1).to({scaleX:2.0739,scaleY:2.0739,x:261.8,y:-10.35},0).wait(1).to({scaleX:2.1161,scaleY:2.1161,x:241.8,y:-12.8},0).wait(1).to({scaleX:2.1561,scaleY:2.1561,x:222.8,y:-15.1},0).wait(1).to({scaleX:2.1941,scaleY:2.1941,x:204.85,y:-17.3},0).wait(1).to({scaleX:2.23,scaleY:2.23,x:187.85,y:-19.35},0).wait(1).to({scaleX:2.2639,scaleY:2.2639,x:171.8,y:-21.3},0).wait(1).to({scaleX:2.2959,scaleY:2.2959,x:156.65,y:-23.1},0).wait(1).to({scaleX:2.3261,scaleY:2.3261,x:142.35,y:-24.85},0).wait(1).to({scaleX:2.3544,scaleY:2.3544,x:129,y:-26.5},0).wait(1).to({scaleX:2.3811,scaleY:2.3811,x:116.4,y:-27.95},0).wait(1).to({scaleX:2.406,scaleY:2.406,x:104.5,y:-29.45},0).wait(1).to({scaleX:2.4294,scaleY:2.4294,x:93.45,y:-30.8},0).wait(1).to({scaleX:2.4513,scaleY:2.4513,x:83.1,y:-32.05},0).wait(1).to({scaleX:2.4717,scaleY:2.4717,x:73.45,y:-33.2},0).wait(1).to({scaleX:2.4907,scaleY:2.4907,x:64.5,y:-34.35},0).wait(1).to({scaleX:2.5083,scaleY:2.5083,x:56.1,y:-35.3},0).wait(1).to({scaleX:2.5246,scaleY:2.5246,x:48.4,y:-36.25},0).wait(1).to({scaleX:2.5397,scaleY:2.5397,x:41.3,y:-37.1},0).wait(1).to({scaleX:2.5536,scaleY:2.5536,x:34.7,y:-37.9},0).wait(1).to({scaleX:2.5664,scaleY:2.5664,x:28.6,y:-38.65},0).wait(1).to({scaleX:2.5781,scaleY:2.5781,x:23.1,y:-39.35},0).wait(1).to({scaleX:2.5887,scaleY:2.5887,x:18.1,y:-39.9},0).wait(1).to({scaleX:2.5982,scaleY:2.5982,x:13.55,y:-40.45},0).wait(1).to({scaleX:2.6069,scaleY:2.6069,x:9.45,y:-40.95},0).wait(1).to({scaleX:2.6145,scaleY:2.6145,x:5.85,y:-41.4},0).wait(1).to({scaleX:2.6213,scaleY:2.6213,x:2.6,y:-41.75},0).wait(1).to({scaleX:2.6272,scaleY:2.6272,x:-0.2,y:-42.15},0).wait(1).to({scaleX:2.6323,scaleY:2.6323,x:-2.55,y:-42.45},0).wait(1).to({regX:57.6,regY:57.5,scaleX:2.6365,scaleY:2.6365,x:-3.2,y:-42.1},0).to({_off:true},1).wait(203));

	// mask copy 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_314 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_315 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_316 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_317 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_318 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_319 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_320 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_321 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_322 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_323 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_324 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_325 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_326 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_327 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_328 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_329 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_330 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_331 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_332 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_333 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_334 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_335 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_336 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_337 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_338 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_339 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_340 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_341 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_342 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_343 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_344 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_345 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_346 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_347 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_348 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_349 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_350 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_351 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_352 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_353 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_354 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_355 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_356 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_357 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_358 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_359 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_360 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_1_graphics_378 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_1_graphics_379 = new cjs.Graphics().p("EhYKAR6MAU2gkQMCbfAAcMgU3AkRg");
	var mask_1_graphics_380 = new cjs.Graphics().p("EhYSASGMAVGgkpMCbfAAeMgVHAkpg");
	var mask_1_graphics_381 = new cjs.Graphics().p("EhYaASTMAVWglCMCbfAAdMgVXAlCg");
	var mask_1_graphics_382 = new cjs.Graphics().p("EhYiASfMAVmglbMCbfAAeMgVnAlbg");
	var mask_1_graphics_383 = new cjs.Graphics().p("EhYqASrMAV3glzMCbeAAeMgV4Alzg");
	var mask_1_graphics_384 = new cjs.Graphics().p("EhYyAS3MAWHgmMMCbfAAfMgWJAmMg");
	var mask_1_graphics_385 = new cjs.Graphics().p("EhY6ATDMAWXgmkMCbeAAeMgWYAmlg");
	var mask_1_graphics_386 = new cjs.Graphics().p("EhZCATPMAWngm8MCbeAAfMgWoAm8g");
	var mask_1_graphics_387 = new cjs.Graphics().p("EhZKATbMAW3gnUMCbeAAgMgW4AnTg");
	var mask_1_graphics_388 = new cjs.Graphics().p("EhZRATmMAXGgnqMCbdAAfMgXHAnqg");
	var mask_1_graphics_389 = new cjs.Graphics().p("EhZZATxMAXVgoBMCbeAAgMgXWAoBg");
	var mask_1_graphics_390 = new cjs.Graphics().p("EhZgAT7MAXkgoVMCbcAAgMgXjAoVg");
	var mask_1_graphics_391 = new cjs.Graphics().p("EhZmAUFMAXxgoqMCbcAAgMgXxAorg");
	var mask_1_graphics_392 = new cjs.Graphics().p("EhZtAUPMAX+go+MCbdAAhMgX/Ao+g");
	var mask_1_graphics_393 = new cjs.Graphics().p("EhZzAUZMAYKgpSMCbdAAiMgYLApQg");
	var mask_1_graphics_394 = new cjs.Graphics().p("EhZ5AUhMAYWgpiMCbdAAgMgYYApkg");
	var mask_1_graphics_395 = new cjs.Graphics().p("EhZ/AUqMAYigp0MCbdAAhMgYjAp1g");
	var mask_1_graphics_396 = new cjs.Graphics().p("EhaEAUyMAYtgqFMCbcAAiMgYuAqFg");
	var mask_1_graphics_397 = new cjs.Graphics().p("EhaJAU6MAY3gqVMCbcAAiMgY4AqVg");
	var mask_1_graphics_398 = new cjs.Graphics().p("EhaOAVBMAZBgqjMCbcAAiMgZCAqjg");
	var mask_1_graphics_399 = new cjs.Graphics().p("EhaTAVIMAZLgqyMCbcAAjMgZLAqxg");
	var mask_1_graphics_400 = new cjs.Graphics().p("EhaXAVPMAZTgq/MCbcAAiMgZUAq/g");
	var mask_1_graphics_401 = new cjs.Graphics().p("EhabAVVMAZcgrMMCbbAAjMgZdArMg");
	var mask_1_graphics_402 = new cjs.Graphics().p("EhagAVbMAZlgrXMCbbAAiMgZlArYg");
	var mask_1_graphics_403 = new cjs.Graphics().p("EhajAVhMAZrgrjMCbcAAjMgZsArig");
	var mask_1_graphics_404 = new cjs.Graphics().p("EhanAVmMAZzgruMCbcAAjMgZ0Arug");
	var mask_1_graphics_405 = new cjs.Graphics().p("EhaqAVqMAZ5gr3MCbcAAjMgZ6Ar4g");
	var mask_1_graphics_406 = new cjs.Graphics().p("EhatAVvMAZ/gsAMCbcAAjMgaAAsAg");
	var mask_1_graphics_407 = new cjs.Graphics().p("EhawAV0MAaGgsKMCbbAAjMgaGAsKg");
	var mask_1_graphics_408 = new cjs.Graphics().p("EhayAV4MAaKgsSMCbbAAjMgaLAsSg");
	var mask_1_graphics_409 = new cjs.Graphics().p("Eha1AV8MAaQgsaMCbbAAkMgaQAsZg");
	var mask_1_graphics_410 = new cjs.Graphics().p("Eha3AV/MAaUgsgMCbbAAjMgaVAsgg");
	var mask_1_graphics_411 = new cjs.Graphics().p("Eha5AWCMAaYgsnMCbbAAkMgaZAsng");
	var mask_1_graphics_412 = new cjs.Graphics().p("Eha7AWFMAacgstMCbbAAkMgadAstg");
	var mask_1_graphics_413 = new cjs.Graphics().p("Eha9AWIMAaggszMCbbAAkMgahAszg");
	var mask_1_graphics_414 = new cjs.Graphics().p("Eha/AWKMAakgs3MCbbAAjMgalAs4g");
	var mask_1_graphics_415 = new cjs.Graphics().p("EhbAAWNMAangs9MCbaAAkMganAs9g");
	var mask_1_graphics_416 = new cjs.Graphics().p("EhbCAWPMAaqgtBMCbbAAkMgarAtBg");
	var mask_1_graphics_417 = new cjs.Graphics().p("EhbDAWRMAasgtFMCbbAAkMgatAtFg");
	var mask_1_graphics_418 = new cjs.Graphics().p("EhbEAWTMAavgtJMCbaAAkMgavAtIg");
	var mask_1_graphics_419 = new cjs.Graphics().p("EhbGAWUMAaygtLMCbaAAkMgaxAtLg");
	var mask_1_graphics_420 = new cjs.Graphics().p("EhbGAWWMAazgtPMCbaAAkMgazAtPg");
	var mask_1_graphics_421 = new cjs.Graphics().p("EhbHAWXMAa0gtRMCbbAAkMga1AtRg");
	var mask_1_graphics_422 = new cjs.Graphics().p("EhbIAWYMAa2gtTMCbbAAkMga3AtTg");
	var mask_1_graphics_423 = new cjs.Graphics().p("EhbIAWZMAa3gtVMCbaAAkMga3AtVg");
	var mask_1_graphics_424 = new cjs.Graphics().p("EhbJAWaMAa4gtXMCbbAAkMga5AtXg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(314).to({graphics:mask_1_graphics_314,x:1238,y:116.025}).wait(1).to({graphics:mask_1_graphics_315,x:1205.45,y:111.175}).wait(1).to({graphics:mask_1_graphics_316,x:1172.55,y:106.325}).wait(1).to({graphics:mask_1_graphics_317,x:1139.5,y:101.425}).wait(1).to({graphics:mask_1_graphics_318,x:1106.4,y:96.525}).wait(1).to({graphics:mask_1_graphics_319,x:1073.4,y:91.625}).wait(1).to({graphics:mask_1_graphics_320,x:1040.7,y:86.775}).wait(1).to({graphics:mask_1_graphics_321,x:1010.75,y:81.975}).wait(1).to({graphics:mask_1_graphics_322,x:981.3,y:77.275}).wait(1).to({graphics:mask_1_graphics_323,x:952.45,y:72.625}).wait(1).to({graphics:mask_1_graphics_324,x:924.35,y:68.125}).wait(1).to({graphics:mask_1_graphics_325,x:897.1,y:63.775}).wait(1).to({graphics:mask_1_graphics_326,x:870.65,y:59.525}).wait(1).to({graphics:mask_1_graphics_327,x:845.2,y:55.475}).wait(1).to({graphics:mask_1_graphics_328,x:820.7,y:51.525}).wait(1).to({graphics:mask_1_graphics_329,x:797.2,y:47.775}).wait(1).to({graphics:mask_1_graphics_330,x:774.75,y:44.175}).wait(1).to({graphics:mask_1_graphics_331,x:753.3,y:40.775}).wait(1).to({graphics:mask_1_graphics_332,x:732.85,y:37.475}).wait(1).to({graphics:mask_1_graphics_333,x:713.45,y:34.375}).wait(1).to({graphics:mask_1_graphics_334,x:695,y:31.425}).wait(1).to({graphics:mask_1_graphics_335,x:677.55,y:28.625}).wait(1).to({graphics:mask_1_graphics_336,x:661.05,y:25.975}).wait(1).to({graphics:mask_1_graphics_337,x:645.4,y:23.475}).wait(1).to({graphics:mask_1_graphics_338,x:630.7,y:21.125}).wait(1).to({graphics:mask_1_graphics_339,x:616.85,y:18.875}).wait(1).to({graphics:mask_1_graphics_340,x:603.8,y:16.825}).wait(1).to({graphics:mask_1_graphics_341,x:591.55,y:14.825}).wait(1).to({graphics:mask_1_graphics_342,x:580.05,y:13.025}).wait(1).to({graphics:mask_1_graphics_343,x:569.3,y:11.275}).wait(1).to({graphics:mask_1_graphics_344,x:559.25,y:9.675}).wait(1).to({graphics:mask_1_graphics_345,x:549.85,y:8.175}).wait(1).to({graphics:mask_1_graphics_346,x:541.1,y:6.775}).wait(1).to({graphics:mask_1_graphics_347,x:533,y:5.475}).wait(1).to({graphics:mask_1_graphics_348,x:525.5,y:4.275}).wait(1).to({graphics:mask_1_graphics_349,x:518.55,y:3.175}).wait(1).to({graphics:mask_1_graphics_350,x:512.15,y:2.125}).wait(1).to({graphics:mask_1_graphics_351,x:506.25,y:1.175}).wait(1).to({graphics:mask_1_graphics_352,x:500.9,y:0.325}).wait(1).to({graphics:mask_1_graphics_353,x:496,y:-0.425}).wait(1).to({graphics:mask_1_graphics_354,x:491.6,y:-1.175}).wait(1).to({graphics:mask_1_graphics_355,x:487.65,y:-1.775}).wait(1).to({graphics:mask_1_graphics_356,x:484.15,y:-2.375}).wait(1).to({graphics:mask_1_graphics_357,x:481,y:-2.875}).wait(1).to({graphics:mask_1_graphics_358,x:478.3,y:-3.275}).wait(1).to({graphics:mask_1_graphics_359,x:475.95,y:-3.675}).wait(1).to({graphics:mask_1_graphics_360,x:474,y:-3.975}).wait(18).to({graphics:mask_1_graphics_378,x:265.15,y:75.725}).wait(1).to({graphics:mask_1_graphics_379,x:232.85,y:70.95}).wait(1).to({graphics:mask_1_graphics_380,x:200.225,y:66.125}).wait(1).to({graphics:mask_1_graphics_381,x:167.425,y:61.275}).wait(1).to({graphics:mask_1_graphics_382,x:134.575,y:56.425}).wait(1).to({graphics:mask_1_graphics_383,x:101.825,y:51.575}).wait(1).to({graphics:mask_1_graphics_384,x:69.35,y:46.775}).wait(1).to({graphics:mask_1_graphics_385,x:39.2,y:42.05}).wait(1).to({graphics:mask_1_graphics_386,x:9.575,y:37.35}).wait(1).to({graphics:mask_1_graphics_387,x:-19.45,y:32.8}).wait(1).to({graphics:mask_1_graphics_388,x:-47.725,y:28.35}).wait(1).to({graphics:mask_1_graphics_389,x:-75.175,y:24.025}).wait(1).to({graphics:mask_1_graphics_390,x:-101.75,y:19.85}).wait(1).to({graphics:mask_1_graphics_391,x:-127.4,y:15.825}).wait(1).to({graphics:mask_1_graphics_392,x:-152.05,y:11.925}).wait(1).to({graphics:mask_1_graphics_393,x:-175.675,y:8.2}).wait(1).to({graphics:mask_1_graphics_394,x:-198.3,y:4.65}).wait(1).to({graphics:mask_1_graphics_395,x:-219.875,y:1.25}).wait(1).to({graphics:mask_1_graphics_396,x:-240.425,y:-1.975}).wait(1).to({graphics:mask_1_graphics_397,x:-259.975,y:-5.075}).wait(1).to({graphics:mask_1_graphics_398,x:-278.525,y:-7.975}).wait(1).to({graphics:mask_1_graphics_399,x:-296.1,y:-10.75}).wait(1).to({graphics:mask_1_graphics_400,x:-312.725,y:-13.35}).wait(1).to({graphics:mask_1_graphics_401,x:-328.45,y:-15.825}).wait(1).to({graphics:mask_1_graphics_402,x:-343.25,y:-18.15}).wait(1).to({graphics:mask_1_graphics_403,x:-357.2,y:-20.375}).wait(1).to({graphics:mask_1_graphics_404,x:-370.35,y:-22.425}).wait(1).to({graphics:mask_1_graphics_405,x:-382.675,y:-24.35}).wait(1).to({graphics:mask_1_graphics_406,x:-394.225,y:-26.175}).wait(1).to({graphics:mask_1_graphics_407,x:-405.075,y:-27.875}).wait(1).to({graphics:mask_1_graphics_408,x:-415.175,y:-29.475}).wait(1).to({graphics:mask_1_graphics_409,x:-424.625,y:-30.975}).wait(1).to({graphics:mask_1_graphics_410,x:-433.425,y:-32.325}).wait(1).to({graphics:mask_1_graphics_411,x:-441.575,y:-33.625}).wait(1).to({graphics:mask_1_graphics_412,x:-449.125,y:-34.825}).wait(1).to({graphics:mask_1_graphics_413,x:-456.125,y:-35.9}).wait(1).to({graphics:mask_1_graphics_414,x:-462.575,y:-36.925}).wait(1).to({graphics:mask_1_graphics_415,x:-468.475,y:-37.85}).wait(1).to({graphics:mask_1_graphics_416,x:-473.875,y:-38.725}).wait(1).to({graphics:mask_1_graphics_417,x:-478.775,y:-39.475}).wait(1).to({graphics:mask_1_graphics_418,x:-483.225,y:-40.2}).wait(1).to({graphics:mask_1_graphics_419,x:-487.2,y:-40.825}).wait(1).to({graphics:mask_1_graphics_420,x:-490.775,y:-41.375}).wait(1).to({graphics:mask_1_graphics_421,x:-493.9,y:-41.875}).wait(1).to({graphics:mask_1_graphics_422,x:-496.625,y:-42.3}).wait(1).to({graphics:mask_1_graphics_423,x:-498.975,y:-42.65}).wait(1).to({graphics:mask_1_graphics_424,x:-500.95,y:-42.975}).wait(27).to({graphics:null,x:0,y:0}).wait(113));

	// RT1 copy 2
	this.instance_10 = new lib.redTree_1();
	this.instance_10.setTransform(227.05,61.1,0.634,0.634,0,0,0,298.1,69.1);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(334).to({_off:false},0).to({_off:true},117).wait(113));

	// text5
	this.instance_11 = new lib.text5_1();
	this.instance_11.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(334).to({_off:false},0).to({alpha:1},44,cjs.Ease.cubicOut).to({_off:true},73).wait(113));

	// Camry
	this.instance_12 = new lib.CY_AnimationIn_mc();
	this.instance_12.setTransform(163.75,26.05,0.5534,0.5534,0,0,0,149.7,125.9);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(320).to({_off:false},0).to({regX:150.1,regY:125.2,scaleX:0.6688,scaleY:0.6688,x:332.75,y:31.5},44,cjs.Ease.cubicOut).to({_off:true},87).wait(113));

	// RT2 copy 2
	this.instance_13 = new lib.redTree_1();
	this.instance_13.setTransform(708,50.95,0.623,0.623,0,0,0,299.2,64.3);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(345).to({_off:false},0).to({_off:true},106).wait(113));

	// WT3 copy 2
	this.instance_14 = new lib.whiteTree_1();
	this.instance_14.setTransform(434.75,44.25,0.3784,0.3784,0,0,0,299.2,64.5);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(355).to({_off:false},0).to({_off:true},96).wait(113));

	// pageFlip3
	this.instance_15 = new lib.pageFlip_1();
	this.instance_15.setTransform(757,85.95,0.4908,0.4908,-14.998,0,0,57.3,57.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(250).to({_off:false},0).wait(1).to({regX:57,regY:57.1,scaleX:0.6416,scaleY:0.6416,rotation:-14.9979,x:727.4,y:76.3},0).wait(1).to({scaleX:0.7939,scaleY:0.7939,x:697.75,y:66.6},0).wait(1).to({scaleX:0.947,scaleY:0.947,rotation:-14.9978,x:667.95,y:56.95},0).wait(1).to({scaleX:1.1004,scaleY:1.1004,x:638.05,y:47.15},0).wait(1).to({scaleX:1.2532,scaleY:1.2532,rotation:-14.9977,x:608.25,y:37.5},0).wait(1).to({regX:57.4,regY:57.4,scaleX:1.4048,scaleY:1.4048,rotation:-14.9976,x:579.3,y:28.3},0).wait(1).to({regX:57,regY:57.1,scaleX:1.4699,scaleY:1.4699,x:547.8,y:24.25},0).wait(1).to({scaleX:1.5339,scaleY:1.5339,x:517.45,y:20.65},0).wait(1).to({scaleX:1.5965,scaleY:1.5965,x:487.8,y:17},0).wait(1).to({scaleX:1.6576,scaleY:1.6576,rotation:-14.9977,x:458.9,y:13.55},0).wait(1).to({scaleX:1.7169,scaleY:1.7169,x:430.8,y:10.1},0).wait(1).to({scaleX:1.7743,scaleY:1.7743,x:403.6,y:6.85},0).wait(1).to({scaleX:1.8297,scaleY:1.8297,x:377.45,y:3.6},0).wait(1).to({scaleX:1.883,scaleY:1.883,x:352.15,y:0.6},0).wait(1).to({scaleX:1.934,scaleY:1.934,x:328.05,y:-2.4},0).wait(1).to({scaleX:1.9829,scaleY:1.9829,x:304.85,y:-5.15},0).wait(1).to({scaleX:2.0295,scaleY:2.0295,x:282.85,y:-7.85},0).wait(1).to({scaleX:2.0739,scaleY:2.0739,x:261.8,y:-10.35},0).wait(1).to({scaleX:2.1161,scaleY:2.1161,x:241.8,y:-12.8},0).wait(1).to({scaleX:2.1561,scaleY:2.1561,x:222.8,y:-15.1},0).wait(1).to({scaleX:2.1941,scaleY:2.1941,x:204.85,y:-17.3},0).wait(1).to({scaleX:2.23,scaleY:2.23,x:187.85,y:-19.35},0).wait(1).to({scaleX:2.2639,scaleY:2.2639,x:171.8,y:-21.3},0).wait(1).to({scaleX:2.2959,scaleY:2.2959,x:156.65,y:-23.1},0).wait(1).to({scaleX:2.3261,scaleY:2.3261,x:142.35,y:-24.85},0).wait(1).to({scaleX:2.3544,scaleY:2.3544,x:129,y:-26.5},0).wait(1).to({scaleX:2.3811,scaleY:2.3811,x:116.4,y:-27.95},0).wait(1).to({scaleX:2.406,scaleY:2.406,x:104.5,y:-29.45},0).wait(1).to({scaleX:2.4294,scaleY:2.4294,x:93.45,y:-30.8},0).wait(1).to({scaleX:2.4513,scaleY:2.4513,x:83.1,y:-32.05},0).wait(1).to({scaleX:2.4717,scaleY:2.4717,x:73.45,y:-33.2},0).wait(1).to({scaleX:2.4907,scaleY:2.4907,x:64.5,y:-34.35},0).wait(1).to({scaleX:2.5083,scaleY:2.5083,x:56.1,y:-35.3},0).wait(1).to({scaleX:2.5246,scaleY:2.5246,x:48.4,y:-36.25},0).wait(1).to({scaleX:2.5397,scaleY:2.5397,x:41.3,y:-37.1},0).wait(1).to({scaleX:2.5536,scaleY:2.5536,x:34.7,y:-37.9},0).wait(1).to({scaleX:2.5664,scaleY:2.5664,x:28.6,y:-38.65},0).wait(1).to({scaleX:2.5781,scaleY:2.5781,x:23.1,y:-39.35},0).wait(1).to({scaleX:2.5887,scaleY:2.5887,x:18.1,y:-39.9},0).wait(1).to({scaleX:2.5982,scaleY:2.5982,x:13.55,y:-40.45},0).wait(1).to({scaleX:2.6069,scaleY:2.6069,x:9.45,y:-40.95},0).wait(1).to({scaleX:2.6145,scaleY:2.6145,x:5.85,y:-41.4},0).wait(1).to({scaleX:2.6213,scaleY:2.6213,x:2.6,y:-41.75},0).wait(1).to({scaleX:2.6272,scaleY:2.6272,x:-0.2,y:-42.15},0).wait(1).to({scaleX:2.6323,scaleY:2.6323,x:-2.55,y:-42.45},0).wait(1).to({regX:57.6,regY:57.5,scaleX:2.6365,scaleY:2.6365,x:-3.2,y:-42.1},0).to({_off:true},1).wait(267));

	// mask copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_250 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_251 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_252 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_253 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_254 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_255 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_256 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_257 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_258 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_259 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_260 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_261 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_262 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_263 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_264 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_265 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_266 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_267 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_268 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_269 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_270 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_271 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_272 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_273 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_274 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_275 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_276 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_277 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_278 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_279 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_280 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_281 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_282 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_283 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_284 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_285 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_286 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_287 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_288 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_289 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_290 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_291 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_292 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_293 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_294 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_295 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_296 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_2_graphics_314 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_2_graphics_315 = new cjs.Graphics().p("EhYKAR6MAU2gkQMCbfAAcMgU3AkRg");
	var mask_2_graphics_316 = new cjs.Graphics().p("EhYSASGMAVGgkpMCbfAAeMgVHAkpg");
	var mask_2_graphics_317 = new cjs.Graphics().p("EhYaASTMAVWglCMCbfAAdMgVXAlCg");
	var mask_2_graphics_318 = new cjs.Graphics().p("EhYiASfMAVmglbMCbfAAeMgVnAlbg");
	var mask_2_graphics_319 = new cjs.Graphics().p("EhYqASrMAV3glzMCbeAAeMgV4Alzg");
	var mask_2_graphics_320 = new cjs.Graphics().p("EhYyAS3MAWHgmMMCbfAAfMgWJAmMg");
	var mask_2_graphics_321 = new cjs.Graphics().p("EhY6ATDMAWXgmkMCbeAAeMgWYAmlg");
	var mask_2_graphics_322 = new cjs.Graphics().p("EhZCATPMAWngm8MCbeAAfMgWoAm8g");
	var mask_2_graphics_323 = new cjs.Graphics().p("EhZKATbMAW3gnUMCbeAAgMgW4AnTg");
	var mask_2_graphics_324 = new cjs.Graphics().p("EhZRATmMAXGgnqMCbdAAfMgXHAnqg");
	var mask_2_graphics_325 = new cjs.Graphics().p("EhZZATxMAXVgoBMCbeAAgMgXWAoBg");
	var mask_2_graphics_326 = new cjs.Graphics().p("EhZgAT7MAXkgoVMCbcAAgMgXjAoVg");
	var mask_2_graphics_327 = new cjs.Graphics().p("EhZmAUFMAXxgoqMCbcAAgMgXxAorg");
	var mask_2_graphics_328 = new cjs.Graphics().p("EhZtAUPMAX+go+MCbdAAhMgX/Ao+g");
	var mask_2_graphics_329 = new cjs.Graphics().p("EhZzAUZMAYKgpSMCbdAAiMgYLApQg");
	var mask_2_graphics_330 = new cjs.Graphics().p("EhZ5AUhMAYWgpiMCbdAAgMgYYApkg");
	var mask_2_graphics_331 = new cjs.Graphics().p("EhZ/AUqMAYigp0MCbdAAhMgYjAp1g");
	var mask_2_graphics_332 = new cjs.Graphics().p("EhaEAUyMAYtgqFMCbcAAiMgYuAqFg");
	var mask_2_graphics_333 = new cjs.Graphics().p("EhaJAU6MAY3gqVMCbcAAiMgY4AqVg");
	var mask_2_graphics_334 = new cjs.Graphics().p("EhaOAVBMAZBgqjMCbcAAiMgZCAqjg");
	var mask_2_graphics_335 = new cjs.Graphics().p("EhaTAVIMAZLgqyMCbcAAjMgZLAqxg");
	var mask_2_graphics_336 = new cjs.Graphics().p("EhaXAVPMAZTgq/MCbcAAiMgZUAq/g");
	var mask_2_graphics_337 = new cjs.Graphics().p("EhabAVVMAZcgrMMCbbAAjMgZdArMg");
	var mask_2_graphics_338 = new cjs.Graphics().p("EhagAVbMAZlgrXMCbbAAiMgZlArYg");
	var mask_2_graphics_339 = new cjs.Graphics().p("EhajAVhMAZrgrjMCbcAAjMgZsArig");
	var mask_2_graphics_340 = new cjs.Graphics().p("EhanAVmMAZzgruMCbcAAjMgZ0Arug");
	var mask_2_graphics_341 = new cjs.Graphics().p("EhaqAVqMAZ5gr3MCbcAAjMgZ6Ar4g");
	var mask_2_graphics_342 = new cjs.Graphics().p("EhatAVvMAZ/gsAMCbcAAjMgaAAsAg");
	var mask_2_graphics_343 = new cjs.Graphics().p("EhawAV0MAaGgsKMCbbAAjMgaGAsKg");
	var mask_2_graphics_344 = new cjs.Graphics().p("EhayAV4MAaKgsSMCbbAAjMgaLAsSg");
	var mask_2_graphics_345 = new cjs.Graphics().p("Eha1AV8MAaQgsaMCbbAAkMgaQAsZg");
	var mask_2_graphics_346 = new cjs.Graphics().p("Eha3AV/MAaUgsgMCbbAAjMgaVAsgg");
	var mask_2_graphics_347 = new cjs.Graphics().p("Eha5AWCMAaYgsnMCbbAAkMgaZAsng");
	var mask_2_graphics_348 = new cjs.Graphics().p("Eha7AWFMAacgstMCbbAAkMgadAstg");
	var mask_2_graphics_349 = new cjs.Graphics().p("Eha9AWIMAaggszMCbbAAkMgahAszg");
	var mask_2_graphics_350 = new cjs.Graphics().p("Eha/AWKMAakgs3MCbbAAjMgalAs4g");
	var mask_2_graphics_351 = new cjs.Graphics().p("EhbAAWNMAangs9MCbaAAkMganAs9g");
	var mask_2_graphics_352 = new cjs.Graphics().p("EhbCAWPMAaqgtBMCbbAAkMgarAtBg");
	var mask_2_graphics_353 = new cjs.Graphics().p("EhbDAWRMAasgtFMCbbAAkMgatAtFg");
	var mask_2_graphics_354 = new cjs.Graphics().p("EhbEAWTMAavgtJMCbaAAkMgavAtIg");
	var mask_2_graphics_355 = new cjs.Graphics().p("EhbGAWUMAaygtLMCbaAAkMgaxAtLg");
	var mask_2_graphics_356 = new cjs.Graphics().p("EhbGAWWMAazgtPMCbaAAkMgazAtPg");
	var mask_2_graphics_357 = new cjs.Graphics().p("EhbHAWXMAa0gtRMCbbAAkMga1AtRg");
	var mask_2_graphics_358 = new cjs.Graphics().p("EhbIAWYMAa2gtTMCbbAAkMga3AtTg");
	var mask_2_graphics_359 = new cjs.Graphics().p("EhbIAWZMAa3gtVMCbaAAkMga3AtVg");
	var mask_2_graphics_360 = new cjs.Graphics().p("EhbJAWaMAa4gtXMCbbAAkMga5AtXg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(250).to({graphics:mask_2_graphics_250,x:1238,y:116.025}).wait(1).to({graphics:mask_2_graphics_251,x:1205.45,y:111.175}).wait(1).to({graphics:mask_2_graphics_252,x:1172.55,y:106.325}).wait(1).to({graphics:mask_2_graphics_253,x:1139.5,y:101.425}).wait(1).to({graphics:mask_2_graphics_254,x:1106.4,y:96.525}).wait(1).to({graphics:mask_2_graphics_255,x:1073.4,y:91.625}).wait(1).to({graphics:mask_2_graphics_256,x:1040.7,y:86.775}).wait(1).to({graphics:mask_2_graphics_257,x:1010.75,y:81.975}).wait(1).to({graphics:mask_2_graphics_258,x:981.3,y:77.275}).wait(1).to({graphics:mask_2_graphics_259,x:952.45,y:72.625}).wait(1).to({graphics:mask_2_graphics_260,x:924.35,y:68.125}).wait(1).to({graphics:mask_2_graphics_261,x:897.1,y:63.775}).wait(1).to({graphics:mask_2_graphics_262,x:870.65,y:59.525}).wait(1).to({graphics:mask_2_graphics_263,x:845.2,y:55.475}).wait(1).to({graphics:mask_2_graphics_264,x:820.7,y:51.525}).wait(1).to({graphics:mask_2_graphics_265,x:797.2,y:47.775}).wait(1).to({graphics:mask_2_graphics_266,x:774.75,y:44.175}).wait(1).to({graphics:mask_2_graphics_267,x:753.3,y:40.775}).wait(1).to({graphics:mask_2_graphics_268,x:732.85,y:37.475}).wait(1).to({graphics:mask_2_graphics_269,x:713.45,y:34.375}).wait(1).to({graphics:mask_2_graphics_270,x:695,y:31.425}).wait(1).to({graphics:mask_2_graphics_271,x:677.55,y:28.625}).wait(1).to({graphics:mask_2_graphics_272,x:661.05,y:25.975}).wait(1).to({graphics:mask_2_graphics_273,x:645.4,y:23.475}).wait(1).to({graphics:mask_2_graphics_274,x:630.7,y:21.125}).wait(1).to({graphics:mask_2_graphics_275,x:616.85,y:18.875}).wait(1).to({graphics:mask_2_graphics_276,x:603.8,y:16.825}).wait(1).to({graphics:mask_2_graphics_277,x:591.55,y:14.825}).wait(1).to({graphics:mask_2_graphics_278,x:580.05,y:13.025}).wait(1).to({graphics:mask_2_graphics_279,x:569.3,y:11.275}).wait(1).to({graphics:mask_2_graphics_280,x:559.25,y:9.675}).wait(1).to({graphics:mask_2_graphics_281,x:549.85,y:8.175}).wait(1).to({graphics:mask_2_graphics_282,x:541.1,y:6.775}).wait(1).to({graphics:mask_2_graphics_283,x:533,y:5.475}).wait(1).to({graphics:mask_2_graphics_284,x:525.5,y:4.275}).wait(1).to({graphics:mask_2_graphics_285,x:518.55,y:3.175}).wait(1).to({graphics:mask_2_graphics_286,x:512.15,y:2.125}).wait(1).to({graphics:mask_2_graphics_287,x:506.25,y:1.175}).wait(1).to({graphics:mask_2_graphics_288,x:500.9,y:0.325}).wait(1).to({graphics:mask_2_graphics_289,x:496,y:-0.425}).wait(1).to({graphics:mask_2_graphics_290,x:491.6,y:-1.175}).wait(1).to({graphics:mask_2_graphics_291,x:487.65,y:-1.775}).wait(1).to({graphics:mask_2_graphics_292,x:484.15,y:-2.375}).wait(1).to({graphics:mask_2_graphics_293,x:481,y:-2.875}).wait(1).to({graphics:mask_2_graphics_294,x:478.3,y:-3.275}).wait(1).to({graphics:mask_2_graphics_295,x:475.95,y:-3.675}).wait(1).to({graphics:mask_2_graphics_296,x:474,y:-3.975}).wait(18).to({graphics:mask_2_graphics_314,x:265.15,y:75.725}).wait(1).to({graphics:mask_2_graphics_315,x:232.85,y:70.95}).wait(1).to({graphics:mask_2_graphics_316,x:200.225,y:66.125}).wait(1).to({graphics:mask_2_graphics_317,x:167.425,y:61.275}).wait(1).to({graphics:mask_2_graphics_318,x:134.575,y:56.425}).wait(1).to({graphics:mask_2_graphics_319,x:101.825,y:51.575}).wait(1).to({graphics:mask_2_graphics_320,x:69.35,y:46.775}).wait(1).to({graphics:mask_2_graphics_321,x:39.2,y:42.05}).wait(1).to({graphics:mask_2_graphics_322,x:9.575,y:37.35}).wait(1).to({graphics:mask_2_graphics_323,x:-19.45,y:32.8}).wait(1).to({graphics:mask_2_graphics_324,x:-47.725,y:28.35}).wait(1).to({graphics:mask_2_graphics_325,x:-75.175,y:24.025}).wait(1).to({graphics:mask_2_graphics_326,x:-101.75,y:19.85}).wait(1).to({graphics:mask_2_graphics_327,x:-127.4,y:15.825}).wait(1).to({graphics:mask_2_graphics_328,x:-152.05,y:11.925}).wait(1).to({graphics:mask_2_graphics_329,x:-175.675,y:8.2}).wait(1).to({graphics:mask_2_graphics_330,x:-198.3,y:4.65}).wait(1).to({graphics:mask_2_graphics_331,x:-219.875,y:1.25}).wait(1).to({graphics:mask_2_graphics_332,x:-240.425,y:-1.975}).wait(1).to({graphics:mask_2_graphics_333,x:-259.975,y:-5.075}).wait(1).to({graphics:mask_2_graphics_334,x:-278.525,y:-7.975}).wait(1).to({graphics:mask_2_graphics_335,x:-296.1,y:-10.75}).wait(1).to({graphics:mask_2_graphics_336,x:-312.725,y:-13.35}).wait(1).to({graphics:mask_2_graphics_337,x:-328.45,y:-15.825}).wait(1).to({graphics:mask_2_graphics_338,x:-343.25,y:-18.15}).wait(1).to({graphics:mask_2_graphics_339,x:-357.2,y:-20.375}).wait(1).to({graphics:mask_2_graphics_340,x:-370.35,y:-22.425}).wait(1).to({graphics:mask_2_graphics_341,x:-382.675,y:-24.35}).wait(1).to({graphics:mask_2_graphics_342,x:-394.225,y:-26.175}).wait(1).to({graphics:mask_2_graphics_343,x:-405.075,y:-27.875}).wait(1).to({graphics:mask_2_graphics_344,x:-415.175,y:-29.475}).wait(1).to({graphics:mask_2_graphics_345,x:-424.625,y:-30.975}).wait(1).to({graphics:mask_2_graphics_346,x:-433.425,y:-32.325}).wait(1).to({graphics:mask_2_graphics_347,x:-441.575,y:-33.625}).wait(1).to({graphics:mask_2_graphics_348,x:-449.125,y:-34.825}).wait(1).to({graphics:mask_2_graphics_349,x:-456.125,y:-35.9}).wait(1).to({graphics:mask_2_graphics_350,x:-462.575,y:-36.925}).wait(1).to({graphics:mask_2_graphics_351,x:-468.475,y:-37.85}).wait(1).to({graphics:mask_2_graphics_352,x:-473.875,y:-38.725}).wait(1).to({graphics:mask_2_graphics_353,x:-478.775,y:-39.475}).wait(1).to({graphics:mask_2_graphics_354,x:-483.225,y:-40.2}).wait(1).to({graphics:mask_2_graphics_355,x:-487.2,y:-40.825}).wait(1).to({graphics:mask_2_graphics_356,x:-490.775,y:-41.375}).wait(1).to({graphics:mask_2_graphics_357,x:-493.9,y:-41.875}).wait(1).to({graphics:mask_2_graphics_358,x:-496.625,y:-42.3}).wait(1).to({graphics:mask_2_graphics_359,x:-498.975,y:-42.65}).wait(1).to({graphics:mask_2_graphics_360,x:-500.95,y:-42.975}).wait(201).to({graphics:null,x:0,y:0}).wait(3));

	// RT1 copy
	this.instance_16 = new lib.redTree_1();
	this.instance_16.setTransform(228.35,51,0.5376,0.5376,0,0,0,297.9,69);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(278).to({_off:false},0).to({_off:true},173).wait(113));

	// text4
	this.instance_17 = new lib.text4_1();
	this.instance_17.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(270).to({_off:false},0).to({alpha:1},44,cjs.Ease.cubicOut).to({_off:true},137).wait(113));

	// RAV4
	this.instance_18 = new lib.RV_AnimationIn_mc();
	this.instance_18.setTransform(120,17,0.5542,0.5542,0,0,0,149.7,125.6);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(256).to({_off:false},0).to({regX:150,regY:125.3,scaleX:0.6697,scaleY:0.6697,x:325.7,y:34.45},44,cjs.Ease.cubicOut).to({_off:true},151).wait(113));

	// RT2 copy
	this.instance_19 = new lib.redTree_1();
	this.instance_19.setTransform(710.15,52.1,0.6642,0.6642,0,0,0,299.3,64.3);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(270).to({_off:false},0).to({_off:true},181).wait(113));

	// WT3 copy
	this.instance_20 = new lib.whiteTree_1();
	this.instance_20.setTransform(435.9,42.95,0.3515,0.3515,0,0,0,299,64.3);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(288).to({_off:false},0).to({_off:true},163).wait(113));

	// pageFlip2
	this.instance_21 = new lib.pageFlip_1();
	this.instance_21.setTransform(757,85.95,0.4908,0.4908,-14.998,0,0,57.3,57.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(162).to({_off:false},0).wait(1).to({regX:57,regY:57.1,scaleX:0.6416,scaleY:0.6416,rotation:-14.9979,x:727.4,y:76.3},0).wait(1).to({scaleX:0.7939,scaleY:0.7939,x:697.75,y:66.6},0).wait(1).to({scaleX:0.947,scaleY:0.947,rotation:-14.9978,x:667.95,y:56.95},0).wait(1).to({scaleX:1.1004,scaleY:1.1004,x:638.05,y:47.15},0).wait(1).to({scaleX:1.2532,scaleY:1.2532,rotation:-14.9977,x:608.25,y:37.5},0).wait(1).to({regX:57.4,regY:57.4,scaleX:1.4048,scaleY:1.4048,rotation:-14.9976,x:579.3,y:28.3},0).wait(1).to({regX:57,regY:57.1,scaleX:1.4699,scaleY:1.4699,x:547.8,y:24.25},0).wait(1).to({scaleX:1.5339,scaleY:1.5339,x:517.45,y:20.65},0).wait(1).to({scaleX:1.5965,scaleY:1.5965,x:487.8,y:17},0).wait(1).to({scaleX:1.6576,scaleY:1.6576,rotation:-14.9977,x:458.9,y:13.55},0).wait(1).to({scaleX:1.7169,scaleY:1.7169,x:430.8,y:10.1},0).wait(1).to({scaleX:1.7743,scaleY:1.7743,x:403.6,y:6.85},0).wait(1).to({scaleX:1.8297,scaleY:1.8297,x:377.45,y:3.6},0).wait(1).to({scaleX:1.883,scaleY:1.883,x:352.15,y:0.6},0).wait(1).to({scaleX:1.934,scaleY:1.934,x:328.05,y:-2.4},0).wait(1).to({scaleX:1.9829,scaleY:1.9829,x:304.85,y:-5.15},0).wait(1).to({scaleX:2.0295,scaleY:2.0295,x:282.85,y:-7.85},0).wait(1).to({scaleX:2.0739,scaleY:2.0739,x:261.8,y:-10.35},0).wait(1).to({scaleX:2.1161,scaleY:2.1161,x:241.8,y:-12.8},0).wait(1).to({scaleX:2.1561,scaleY:2.1561,x:222.8,y:-15.1},0).wait(1).to({scaleX:2.1941,scaleY:2.1941,x:204.85,y:-17.3},0).wait(1).to({scaleX:2.23,scaleY:2.23,x:187.85,y:-19.35},0).wait(1).to({scaleX:2.2639,scaleY:2.2639,x:171.8,y:-21.3},0).wait(1).to({scaleX:2.2959,scaleY:2.2959,x:156.65,y:-23.1},0).wait(1).to({scaleX:2.3261,scaleY:2.3261,x:142.35,y:-24.85},0).wait(1).to({scaleX:2.3544,scaleY:2.3544,x:129,y:-26.5},0).wait(1).to({scaleX:2.3811,scaleY:2.3811,x:116.4,y:-27.95},0).wait(1).to({scaleX:2.406,scaleY:2.406,x:104.5,y:-29.45},0).wait(1).to({scaleX:2.4294,scaleY:2.4294,x:93.45,y:-30.8},0).wait(1).to({scaleX:2.4513,scaleY:2.4513,x:83.1,y:-32.05},0).wait(1).to({scaleX:2.4717,scaleY:2.4717,x:73.45,y:-33.2},0).wait(1).to({scaleX:2.4907,scaleY:2.4907,x:64.5,y:-34.35},0).wait(1).to({scaleX:2.5083,scaleY:2.5083,x:56.1,y:-35.3},0).wait(1).to({scaleX:2.5246,scaleY:2.5246,x:48.4,y:-36.25},0).wait(1).to({scaleX:2.5397,scaleY:2.5397,x:41.3,y:-37.1},0).wait(1).to({scaleX:2.5536,scaleY:2.5536,x:34.7,y:-37.9},0).wait(1).to({scaleX:2.5664,scaleY:2.5664,x:28.6,y:-38.65},0).wait(1).to({scaleX:2.5781,scaleY:2.5781,x:23.1,y:-39.35},0).wait(1).to({scaleX:2.5887,scaleY:2.5887,x:18.1,y:-39.9},0).wait(1).to({scaleX:2.5982,scaleY:2.5982,x:13.55,y:-40.45},0).wait(1).to({scaleX:2.6069,scaleY:2.6069,x:9.45,y:-40.95},0).wait(1).to({scaleX:2.6145,scaleY:2.6145,x:5.85,y:-41.4},0).wait(1).to({scaleX:2.6213,scaleY:2.6213,x:2.6,y:-41.75},0).wait(1).to({scaleX:2.6272,scaleY:2.6272,x:-0.2,y:-42.15},0).wait(1).to({scaleX:2.6323,scaleY:2.6323,x:-2.55,y:-42.45},0).wait(1).to({regX:57.6,regY:57.5,scaleX:2.6365,scaleY:2.6365,x:-3.2,y:-42.1},0).to({_off:true},1).wait(355));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_162 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_163 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_164 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_165 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_166 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_167 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_168 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_169 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_170 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_171 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_172 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_173 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_174 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_175 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_176 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_177 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_178 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_179 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_180 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_181 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_182 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_183 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_184 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_185 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_186 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_187 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_188 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_189 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_190 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_191 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_192 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_193 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_194 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_195 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_196 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_197 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_198 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_199 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_200 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_201 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_202 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_203 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_204 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_205 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_206 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_207 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_208 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_3_graphics_250 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_3_graphics_251 = new cjs.Graphics().p("EhYKAR6MAU2gkQMCbfAAcMgU3AkRg");
	var mask_3_graphics_252 = new cjs.Graphics().p("EhYSASGMAVGgkpMCbfAAeMgVHAkpg");
	var mask_3_graphics_253 = new cjs.Graphics().p("EhYaASTMAVWglCMCbfAAdMgVXAlCg");
	var mask_3_graphics_254 = new cjs.Graphics().p("EhYiASfMAVmglbMCbfAAeMgVnAlbg");
	var mask_3_graphics_255 = new cjs.Graphics().p("EhYqASrMAV3glzMCbeAAeMgV4Alzg");
	var mask_3_graphics_256 = new cjs.Graphics().p("EhYyAS3MAWHgmMMCbfAAfMgWJAmMg");
	var mask_3_graphics_257 = new cjs.Graphics().p("EhY6ATDMAWXgmkMCbeAAeMgWYAmlg");
	var mask_3_graphics_258 = new cjs.Graphics().p("EhZCATPMAWngm8MCbeAAfMgWoAm8g");
	var mask_3_graphics_259 = new cjs.Graphics().p("EhZKATbMAW3gnUMCbeAAgMgW4AnTg");
	var mask_3_graphics_260 = new cjs.Graphics().p("EhZRATmMAXGgnqMCbdAAfMgXHAnqg");
	var mask_3_graphics_261 = new cjs.Graphics().p("EhZZATxMAXVgoBMCbeAAgMgXWAoBg");
	var mask_3_graphics_262 = new cjs.Graphics().p("EhZgAT7MAXkgoVMCbcAAgMgXjAoVg");
	var mask_3_graphics_263 = new cjs.Graphics().p("EhZmAUFMAXxgoqMCbcAAgMgXxAorg");
	var mask_3_graphics_264 = new cjs.Graphics().p("EhZtAUPMAX+go+MCbdAAhMgX/Ao+g");
	var mask_3_graphics_265 = new cjs.Graphics().p("EhZzAUZMAYKgpSMCbdAAiMgYLApQg");
	var mask_3_graphics_266 = new cjs.Graphics().p("EhZ5AUhMAYWgpiMCbdAAgMgYYApkg");
	var mask_3_graphics_267 = new cjs.Graphics().p("EhZ/AUqMAYigp0MCbdAAhMgYjAp1g");
	var mask_3_graphics_268 = new cjs.Graphics().p("EhaEAUyMAYtgqFMCbcAAiMgYuAqFg");
	var mask_3_graphics_269 = new cjs.Graphics().p("EhaJAU6MAY3gqVMCbcAAiMgY4AqVg");
	var mask_3_graphics_270 = new cjs.Graphics().p("EhaOAVBMAZBgqjMCbcAAiMgZCAqjg");
	var mask_3_graphics_271 = new cjs.Graphics().p("EhaTAVIMAZLgqyMCbcAAjMgZLAqxg");
	var mask_3_graphics_272 = new cjs.Graphics().p("EhaXAVPMAZTgq/MCbcAAiMgZUAq/g");
	var mask_3_graphics_273 = new cjs.Graphics().p("EhabAVVMAZcgrMMCbbAAjMgZdArMg");
	var mask_3_graphics_274 = new cjs.Graphics().p("EhagAVbMAZlgrXMCbbAAiMgZlArYg");
	var mask_3_graphics_275 = new cjs.Graphics().p("EhajAVhMAZrgrjMCbcAAjMgZsArig");
	var mask_3_graphics_276 = new cjs.Graphics().p("EhanAVmMAZzgruMCbcAAjMgZ0Arug");
	var mask_3_graphics_277 = new cjs.Graphics().p("EhaqAVqMAZ5gr3MCbcAAjMgZ6Ar4g");
	var mask_3_graphics_278 = new cjs.Graphics().p("EhatAVvMAZ/gsAMCbcAAjMgaAAsAg");
	var mask_3_graphics_279 = new cjs.Graphics().p("EhawAV0MAaGgsKMCbbAAjMgaGAsKg");
	var mask_3_graphics_280 = new cjs.Graphics().p("EhayAV4MAaKgsSMCbbAAjMgaLAsSg");
	var mask_3_graphics_281 = new cjs.Graphics().p("Eha1AV8MAaQgsaMCbbAAkMgaQAsZg");
	var mask_3_graphics_282 = new cjs.Graphics().p("Eha3AV/MAaUgsgMCbbAAjMgaVAsgg");
	var mask_3_graphics_283 = new cjs.Graphics().p("Eha5AWCMAaYgsnMCbbAAkMgaZAsng");
	var mask_3_graphics_284 = new cjs.Graphics().p("Eha7AWFMAacgstMCbbAAkMgadAstg");
	var mask_3_graphics_285 = new cjs.Graphics().p("Eha9AWIMAaggszMCbbAAkMgahAszg");
	var mask_3_graphics_286 = new cjs.Graphics().p("Eha/AWKMAakgs3MCbbAAjMgalAs4g");
	var mask_3_graphics_287 = new cjs.Graphics().p("EhbAAWNMAangs9MCbaAAkMganAs9g");
	var mask_3_graphics_288 = new cjs.Graphics().p("EhbCAWPMAaqgtBMCbbAAkMgarAtBg");
	var mask_3_graphics_289 = new cjs.Graphics().p("EhbDAWRMAasgtFMCbbAAkMgatAtFg");
	var mask_3_graphics_290 = new cjs.Graphics().p("EhbEAWTMAavgtJMCbaAAkMgavAtIg");
	var mask_3_graphics_291 = new cjs.Graphics().p("EhbGAWUMAaygtLMCbaAAkMgaxAtLg");
	var mask_3_graphics_292 = new cjs.Graphics().p("EhbGAWWMAazgtPMCbaAAkMgazAtPg");
	var mask_3_graphics_293 = new cjs.Graphics().p("EhbHAWXMAa0gtRMCbbAAkMga1AtRg");
	var mask_3_graphics_294 = new cjs.Graphics().p("EhbIAWYMAa2gtTMCbbAAkMga3AtTg");
	var mask_3_graphics_295 = new cjs.Graphics().p("EhbIAWZMAa3gtVMCbaAAkMga3AtVg");
	var mask_3_graphics_296 = new cjs.Graphics().p("EhbJAWaMAa4gtXMCbbAAkMga5AtXg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(162).to({graphics:mask_3_graphics_162,x:1238,y:116.025}).wait(1).to({graphics:mask_3_graphics_163,x:1205.45,y:111.175}).wait(1).to({graphics:mask_3_graphics_164,x:1172.55,y:106.325}).wait(1).to({graphics:mask_3_graphics_165,x:1139.5,y:101.425}).wait(1).to({graphics:mask_3_graphics_166,x:1106.4,y:96.525}).wait(1).to({graphics:mask_3_graphics_167,x:1073.4,y:91.625}).wait(1).to({graphics:mask_3_graphics_168,x:1040.7,y:86.775}).wait(1).to({graphics:mask_3_graphics_169,x:1010.75,y:81.975}).wait(1).to({graphics:mask_3_graphics_170,x:981.3,y:77.275}).wait(1).to({graphics:mask_3_graphics_171,x:952.45,y:72.625}).wait(1).to({graphics:mask_3_graphics_172,x:924.35,y:68.125}).wait(1).to({graphics:mask_3_graphics_173,x:897.1,y:63.775}).wait(1).to({graphics:mask_3_graphics_174,x:870.65,y:59.525}).wait(1).to({graphics:mask_3_graphics_175,x:845.2,y:55.475}).wait(1).to({graphics:mask_3_graphics_176,x:820.7,y:51.525}).wait(1).to({graphics:mask_3_graphics_177,x:797.2,y:47.775}).wait(1).to({graphics:mask_3_graphics_178,x:774.75,y:44.175}).wait(1).to({graphics:mask_3_graphics_179,x:753.3,y:40.775}).wait(1).to({graphics:mask_3_graphics_180,x:732.85,y:37.475}).wait(1).to({graphics:mask_3_graphics_181,x:713.45,y:34.375}).wait(1).to({graphics:mask_3_graphics_182,x:695,y:31.425}).wait(1).to({graphics:mask_3_graphics_183,x:677.55,y:28.625}).wait(1).to({graphics:mask_3_graphics_184,x:661.05,y:25.975}).wait(1).to({graphics:mask_3_graphics_185,x:645.4,y:23.475}).wait(1).to({graphics:mask_3_graphics_186,x:630.7,y:21.125}).wait(1).to({graphics:mask_3_graphics_187,x:616.85,y:18.875}).wait(1).to({graphics:mask_3_graphics_188,x:603.8,y:16.825}).wait(1).to({graphics:mask_3_graphics_189,x:591.55,y:14.825}).wait(1).to({graphics:mask_3_graphics_190,x:580.05,y:13.025}).wait(1).to({graphics:mask_3_graphics_191,x:569.3,y:11.275}).wait(1).to({graphics:mask_3_graphics_192,x:559.25,y:9.675}).wait(1).to({graphics:mask_3_graphics_193,x:549.85,y:8.175}).wait(1).to({graphics:mask_3_graphics_194,x:541.1,y:6.775}).wait(1).to({graphics:mask_3_graphics_195,x:533,y:5.475}).wait(1).to({graphics:mask_3_graphics_196,x:525.5,y:4.275}).wait(1).to({graphics:mask_3_graphics_197,x:518.55,y:3.175}).wait(1).to({graphics:mask_3_graphics_198,x:512.15,y:2.125}).wait(1).to({graphics:mask_3_graphics_199,x:506.25,y:1.175}).wait(1).to({graphics:mask_3_graphics_200,x:500.9,y:0.325}).wait(1).to({graphics:mask_3_graphics_201,x:496,y:-0.425}).wait(1).to({graphics:mask_3_graphics_202,x:491.6,y:-1.175}).wait(1).to({graphics:mask_3_graphics_203,x:487.65,y:-1.775}).wait(1).to({graphics:mask_3_graphics_204,x:484.15,y:-2.375}).wait(1).to({graphics:mask_3_graphics_205,x:481,y:-2.875}).wait(1).to({graphics:mask_3_graphics_206,x:478.3,y:-3.275}).wait(1).to({graphics:mask_3_graphics_207,x:475.95,y:-3.675}).wait(1).to({graphics:mask_3_graphics_208,x:474,y:-3.975}).wait(42).to({graphics:mask_3_graphics_250,x:265.15,y:75.725}).wait(1).to({graphics:mask_3_graphics_251,x:232.85,y:70.95}).wait(1).to({graphics:mask_3_graphics_252,x:200.225,y:66.125}).wait(1).to({graphics:mask_3_graphics_253,x:167.425,y:61.275}).wait(1).to({graphics:mask_3_graphics_254,x:134.575,y:56.425}).wait(1).to({graphics:mask_3_graphics_255,x:101.825,y:51.575}).wait(1).to({graphics:mask_3_graphics_256,x:69.35,y:46.775}).wait(1).to({graphics:mask_3_graphics_257,x:39.2,y:42.05}).wait(1).to({graphics:mask_3_graphics_258,x:9.575,y:37.35}).wait(1).to({graphics:mask_3_graphics_259,x:-19.45,y:32.8}).wait(1).to({graphics:mask_3_graphics_260,x:-47.725,y:28.35}).wait(1).to({graphics:mask_3_graphics_261,x:-75.175,y:24.025}).wait(1).to({graphics:mask_3_graphics_262,x:-101.75,y:19.85}).wait(1).to({graphics:mask_3_graphics_263,x:-127.4,y:15.825}).wait(1).to({graphics:mask_3_graphics_264,x:-152.05,y:11.925}).wait(1).to({graphics:mask_3_graphics_265,x:-175.675,y:8.2}).wait(1).to({graphics:mask_3_graphics_266,x:-198.3,y:4.65}).wait(1).to({graphics:mask_3_graphics_267,x:-219.875,y:1.25}).wait(1).to({graphics:mask_3_graphics_268,x:-240.425,y:-1.975}).wait(1).to({graphics:mask_3_graphics_269,x:-259.975,y:-5.075}).wait(1).to({graphics:mask_3_graphics_270,x:-278.525,y:-7.975}).wait(1).to({graphics:mask_3_graphics_271,x:-296.1,y:-10.75}).wait(1).to({graphics:mask_3_graphics_272,x:-312.725,y:-13.35}).wait(1).to({graphics:mask_3_graphics_273,x:-328.45,y:-15.825}).wait(1).to({graphics:mask_3_graphics_274,x:-343.25,y:-18.15}).wait(1).to({graphics:mask_3_graphics_275,x:-357.2,y:-20.375}).wait(1).to({graphics:mask_3_graphics_276,x:-370.35,y:-22.425}).wait(1).to({graphics:mask_3_graphics_277,x:-382.675,y:-24.35}).wait(1).to({graphics:mask_3_graphics_278,x:-394.225,y:-26.175}).wait(1).to({graphics:mask_3_graphics_279,x:-405.075,y:-27.875}).wait(1).to({graphics:mask_3_graphics_280,x:-415.175,y:-29.475}).wait(1).to({graphics:mask_3_graphics_281,x:-424.625,y:-30.975}).wait(1).to({graphics:mask_3_graphics_282,x:-433.425,y:-32.325}).wait(1).to({graphics:mask_3_graphics_283,x:-441.575,y:-33.625}).wait(1).to({graphics:mask_3_graphics_284,x:-449.125,y:-34.825}).wait(1).to({graphics:mask_3_graphics_285,x:-456.125,y:-35.9}).wait(1).to({graphics:mask_3_graphics_286,x:-462.575,y:-36.925}).wait(1).to({graphics:mask_3_graphics_287,x:-468.475,y:-37.85}).wait(1).to({graphics:mask_3_graphics_288,x:-473.875,y:-38.725}).wait(1).to({graphics:mask_3_graphics_289,x:-478.775,y:-39.475}).wait(1).to({graphics:mask_3_graphics_290,x:-483.225,y:-40.2}).wait(1).to({graphics:mask_3_graphics_291,x:-487.2,y:-40.825}).wait(1).to({graphics:mask_3_graphics_292,x:-490.775,y:-41.375}).wait(1).to({graphics:mask_3_graphics_293,x:-493.9,y:-41.875}).wait(1).to({graphics:mask_3_graphics_294,x:-496.625,y:-42.3}).wait(1).to({graphics:mask_3_graphics_295,x:-498.975,y:-42.65}).wait(1).to({graphics:mask_3_graphics_296,x:-500.95,y:-42.975}).wait(268));

	// text3
	this.instance_22 = new lib.text3_1();
	this.instance_22.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(177).to({_off:false},0).to({alpha:1},44,cjs.Ease.cubicOut).to({_off:true},230).wait(113));

	// CorollaIn
	this.instance_23 = new lib.CL_AnimationIn_mc();
	this.instance_23.setTransform(148,26,0.3737,0.3737,0,0,0,150.2,125.7);
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(168).to({_off:false},0).to({regX:150.3,regY:125.2,scaleX:0.4516,scaleY:0.4516,x:292.3,y:45.5},44,cjs.Ease.cubicOut).to({_off:true},61).wait(291));

	// HighlanderIn
	this.instance_24 = new lib.HI_AnimationIn_mc();
	this.instance_24.setTransform(197,33.75,0.3121,0.3121,0,0,0,149.5,125.8);
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(178).to({_off:false},0).to({regX:150,regY:125.5,scaleX:0.3771,scaleY:0.3771,x:356.95,y:44.05},44,cjs.Ease.cubicOut).to({_off:true},51).wait(291));

	// RAV4In
	this.instance_25 = new lib.RV_AnimationIn_mc();
	this.instance_25.setTransform(273.85,35.6,0.2988,0.2988,0,0,0,149.8,125.9);
	this.instance_25._off = true;

	var maskedShapeInstanceList = [this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(188).to({_off:false},0).to({regX:150.2,regY:125.4,scaleX:0.361,scaleY:0.361,x:421,y:41},44,cjs.Ease.cubicOut).to({_off:true},41).wait(291));

	// CamryIn
	this.instance_26 = new lib.CY_AnimationIn_mc();
	this.instance_26.setTransform(318.95,31.1,0.2746,0.2746,0,0,0,150.6,126);
	this.instance_26._off = true;

	var maskedShapeInstanceList = [this.instance_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(197).to({_off:false},0).to({regY:125.2,scaleX:0.3318,scaleY:0.3318,x:470.45,y:40.55},44,cjs.Ease.cubicOut).to({_off:true},32).wait(291));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_162 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_163 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_164 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_165 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_166 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_167 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_168 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_169 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_170 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_171 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_172 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_173 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_174 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_175 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_176 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_177 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_178 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_179 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_180 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_181 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_182 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_183 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_184 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_185 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_186 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_187 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_188 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_189 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_190 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_191 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_192 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_193 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_194 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_195 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_196 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_197 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_198 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_199 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_200 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_201 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_202 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_203 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_204 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_205 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_206 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_207 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_208 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_4_graphics_250 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_4_graphics_251 = new cjs.Graphics().p("EhYKAR6MAU2gkQMCbfAAcMgU3AkRg");
	var mask_4_graphics_252 = new cjs.Graphics().p("EhYSASGMAVGgkpMCbfAAeMgVHAkpg");
	var mask_4_graphics_253 = new cjs.Graphics().p("EhYaASTMAVWglCMCbfAAdMgVXAlCg");
	var mask_4_graphics_254 = new cjs.Graphics().p("EhYiASfMAVmglbMCbfAAeMgVnAlbg");
	var mask_4_graphics_255 = new cjs.Graphics().p("EhYqASrMAV3glzMCbeAAeMgV4Alzg");
	var mask_4_graphics_256 = new cjs.Graphics().p("EhYyAS3MAWHgmMMCbfAAfMgWJAmMg");
	var mask_4_graphics_257 = new cjs.Graphics().p("EhY6ATDMAWXgmkMCbeAAeMgWYAmlg");
	var mask_4_graphics_258 = new cjs.Graphics().p("EhZCATPMAWngm8MCbeAAfMgWoAm8g");
	var mask_4_graphics_259 = new cjs.Graphics().p("EhZKATbMAW3gnUMCbeAAgMgW4AnTg");
	var mask_4_graphics_260 = new cjs.Graphics().p("EhZRATmMAXGgnqMCbdAAfMgXHAnqg");
	var mask_4_graphics_261 = new cjs.Graphics().p("EhZZATxMAXVgoBMCbeAAgMgXWAoBg");
	var mask_4_graphics_262 = new cjs.Graphics().p("EhZgAT7MAXkgoVMCbcAAgMgXjAoVg");
	var mask_4_graphics_263 = new cjs.Graphics().p("EhZmAUFMAXxgoqMCbcAAgMgXxAorg");
	var mask_4_graphics_264 = new cjs.Graphics().p("EhZtAUPMAX+go+MCbdAAhMgX/Ao+g");
	var mask_4_graphics_265 = new cjs.Graphics().p("EhZzAUZMAYKgpSMCbdAAiMgYLApQg");
	var mask_4_graphics_266 = new cjs.Graphics().p("EhZ5AUhMAYWgpiMCbdAAgMgYYApkg");
	var mask_4_graphics_267 = new cjs.Graphics().p("EhZ/AUqMAYigp0MCbdAAhMgYjAp1g");
	var mask_4_graphics_268 = new cjs.Graphics().p("EhaEAUyMAYtgqFMCbcAAiMgYuAqFg");
	var mask_4_graphics_269 = new cjs.Graphics().p("EhaJAU6MAY3gqVMCbcAAiMgY4AqVg");
	var mask_4_graphics_270 = new cjs.Graphics().p("EhaOAVBMAZBgqjMCbcAAiMgZCAqjg");
	var mask_4_graphics_271 = new cjs.Graphics().p("EhaTAVIMAZLgqyMCbcAAjMgZLAqxg");
	var mask_4_graphics_272 = new cjs.Graphics().p("EhaXAVPMAZTgq/MCbcAAiMgZUAq/g");
	var mask_4_graphics_273 = new cjs.Graphics().p("EhabAVVMAZcgrMMCbbAAjMgZdArMg");
	var mask_4_graphics_274 = new cjs.Graphics().p("EhagAVbMAZlgrXMCbbAAiMgZlArYg");
	var mask_4_graphics_275 = new cjs.Graphics().p("EhajAVhMAZrgrjMCbcAAjMgZsArig");
	var mask_4_graphics_276 = new cjs.Graphics().p("EhanAVmMAZzgruMCbcAAjMgZ0Arug");
	var mask_4_graphics_277 = new cjs.Graphics().p("EhaqAVqMAZ5gr3MCbcAAjMgZ6Ar4g");
	var mask_4_graphics_278 = new cjs.Graphics().p("EhatAVvMAZ/gsAMCbcAAjMgaAAsAg");
	var mask_4_graphics_279 = new cjs.Graphics().p("EhawAV0MAaGgsKMCbbAAjMgaGAsKg");
	var mask_4_graphics_280 = new cjs.Graphics().p("EhayAV4MAaKgsSMCbbAAjMgaLAsSg");
	var mask_4_graphics_281 = new cjs.Graphics().p("Eha1AV8MAaQgsaMCbbAAkMgaQAsZg");
	var mask_4_graphics_282 = new cjs.Graphics().p("Eha3AV/MAaUgsgMCbbAAjMgaVAsgg");
	var mask_4_graphics_283 = new cjs.Graphics().p("Eha5AWCMAaYgsnMCbbAAkMgaZAsng");
	var mask_4_graphics_284 = new cjs.Graphics().p("Eha7AWFMAacgstMCbbAAkMgadAstg");
	var mask_4_graphics_285 = new cjs.Graphics().p("Eha9AWIMAaggszMCbbAAkMgahAszg");
	var mask_4_graphics_286 = new cjs.Graphics().p("Eha/AWKMAakgs3MCbbAAjMgalAs4g");
	var mask_4_graphics_287 = new cjs.Graphics().p("EhbAAWNMAangs9MCbaAAkMganAs9g");
	var mask_4_graphics_288 = new cjs.Graphics().p("EhbCAWPMAaqgtBMCbbAAkMgarAtBg");
	var mask_4_graphics_289 = new cjs.Graphics().p("EhbDAWRMAasgtFMCbbAAkMgatAtFg");
	var mask_4_graphics_290 = new cjs.Graphics().p("EhbEAWTMAavgtJMCbaAAkMgavAtIg");
	var mask_4_graphics_291 = new cjs.Graphics().p("EhbGAWUMAaygtLMCbaAAkMgaxAtLg");
	var mask_4_graphics_292 = new cjs.Graphics().p("EhbGAWWMAazgtPMCbaAAkMgazAtPg");
	var mask_4_graphics_293 = new cjs.Graphics().p("EhbHAWXMAa0gtRMCbbAAkMga1AtRg");
	var mask_4_graphics_294 = new cjs.Graphics().p("EhbIAWYMAa2gtTMCbbAAkMga3AtTg");
	var mask_4_graphics_295 = new cjs.Graphics().p("EhbIAWZMAa3gtVMCbaAAkMga3AtVg");
	var mask_4_graphics_296 = new cjs.Graphics().p("EhbJAWaMAa4gtXMCbbAAkMga5AtXg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(162).to({graphics:mask_4_graphics_162,x:1238,y:116.025}).wait(1).to({graphics:mask_4_graphics_163,x:1205.45,y:111.175}).wait(1).to({graphics:mask_4_graphics_164,x:1172.55,y:106.325}).wait(1).to({graphics:mask_4_graphics_165,x:1139.5,y:101.425}).wait(1).to({graphics:mask_4_graphics_166,x:1106.4,y:96.525}).wait(1).to({graphics:mask_4_graphics_167,x:1073.4,y:91.625}).wait(1).to({graphics:mask_4_graphics_168,x:1040.7,y:86.775}).wait(1).to({graphics:mask_4_graphics_169,x:1010.75,y:81.975}).wait(1).to({graphics:mask_4_graphics_170,x:981.3,y:77.275}).wait(1).to({graphics:mask_4_graphics_171,x:952.45,y:72.625}).wait(1).to({graphics:mask_4_graphics_172,x:924.35,y:68.125}).wait(1).to({graphics:mask_4_graphics_173,x:897.1,y:63.775}).wait(1).to({graphics:mask_4_graphics_174,x:870.65,y:59.525}).wait(1).to({graphics:mask_4_graphics_175,x:845.2,y:55.475}).wait(1).to({graphics:mask_4_graphics_176,x:820.7,y:51.525}).wait(1).to({graphics:mask_4_graphics_177,x:797.2,y:47.775}).wait(1).to({graphics:mask_4_graphics_178,x:774.75,y:44.175}).wait(1).to({graphics:mask_4_graphics_179,x:753.3,y:40.775}).wait(1).to({graphics:mask_4_graphics_180,x:732.85,y:37.475}).wait(1).to({graphics:mask_4_graphics_181,x:713.45,y:34.375}).wait(1).to({graphics:mask_4_graphics_182,x:695,y:31.425}).wait(1).to({graphics:mask_4_graphics_183,x:677.55,y:28.625}).wait(1).to({graphics:mask_4_graphics_184,x:661.05,y:25.975}).wait(1).to({graphics:mask_4_graphics_185,x:645.4,y:23.475}).wait(1).to({graphics:mask_4_graphics_186,x:630.7,y:21.125}).wait(1).to({graphics:mask_4_graphics_187,x:616.85,y:18.875}).wait(1).to({graphics:mask_4_graphics_188,x:603.8,y:16.825}).wait(1).to({graphics:mask_4_graphics_189,x:591.55,y:14.825}).wait(1).to({graphics:mask_4_graphics_190,x:580.05,y:13.025}).wait(1).to({graphics:mask_4_graphics_191,x:569.3,y:11.275}).wait(1).to({graphics:mask_4_graphics_192,x:559.25,y:9.675}).wait(1).to({graphics:mask_4_graphics_193,x:549.85,y:8.175}).wait(1).to({graphics:mask_4_graphics_194,x:541.1,y:6.775}).wait(1).to({graphics:mask_4_graphics_195,x:533,y:5.475}).wait(1).to({graphics:mask_4_graphics_196,x:525.5,y:4.275}).wait(1).to({graphics:mask_4_graphics_197,x:518.55,y:3.175}).wait(1).to({graphics:mask_4_graphics_198,x:512.15,y:2.125}).wait(1).to({graphics:mask_4_graphics_199,x:506.25,y:1.175}).wait(1).to({graphics:mask_4_graphics_200,x:500.9,y:0.325}).wait(1).to({graphics:mask_4_graphics_201,x:496,y:-0.425}).wait(1).to({graphics:mask_4_graphics_202,x:491.6,y:-1.175}).wait(1).to({graphics:mask_4_graphics_203,x:487.65,y:-1.775}).wait(1).to({graphics:mask_4_graphics_204,x:484.15,y:-2.375}).wait(1).to({graphics:mask_4_graphics_205,x:481,y:-2.875}).wait(1).to({graphics:mask_4_graphics_206,x:478.3,y:-3.275}).wait(1).to({graphics:mask_4_graphics_207,x:475.95,y:-3.675}).wait(1).to({graphics:mask_4_graphics_208,x:474,y:-3.975}).wait(42).to({graphics:mask_4_graphics_250,x:265.15,y:75.725}).wait(1).to({graphics:mask_4_graphics_251,x:232.85,y:70.95}).wait(1).to({graphics:mask_4_graphics_252,x:200.225,y:66.125}).wait(1).to({graphics:mask_4_graphics_253,x:167.425,y:61.275}).wait(1).to({graphics:mask_4_graphics_254,x:134.575,y:56.425}).wait(1).to({graphics:mask_4_graphics_255,x:101.825,y:51.575}).wait(1).to({graphics:mask_4_graphics_256,x:69.35,y:46.775}).wait(1).to({graphics:mask_4_graphics_257,x:39.2,y:42.05}).wait(1).to({graphics:mask_4_graphics_258,x:9.575,y:37.35}).wait(1).to({graphics:mask_4_graphics_259,x:-19.45,y:32.8}).wait(1).to({graphics:mask_4_graphics_260,x:-47.725,y:28.35}).wait(1).to({graphics:mask_4_graphics_261,x:-75.175,y:24.025}).wait(1).to({graphics:mask_4_graphics_262,x:-101.75,y:19.85}).wait(1).to({graphics:mask_4_graphics_263,x:-127.4,y:15.825}).wait(1).to({graphics:mask_4_graphics_264,x:-152.05,y:11.925}).wait(1).to({graphics:mask_4_graphics_265,x:-175.675,y:8.2}).wait(1).to({graphics:mask_4_graphics_266,x:-198.3,y:4.65}).wait(1).to({graphics:mask_4_graphics_267,x:-219.875,y:1.25}).wait(1).to({graphics:mask_4_graphics_268,x:-240.425,y:-1.975}).wait(1).to({graphics:mask_4_graphics_269,x:-259.975,y:-5.075}).wait(1).to({graphics:mask_4_graphics_270,x:-278.525,y:-7.975}).wait(1).to({graphics:mask_4_graphics_271,x:-296.1,y:-10.75}).wait(1).to({graphics:mask_4_graphics_272,x:-312.725,y:-13.35}).wait(1).to({graphics:mask_4_graphics_273,x:-328.45,y:-15.825}).wait(1).to({graphics:mask_4_graphics_274,x:-343.25,y:-18.15}).wait(1).to({graphics:mask_4_graphics_275,x:-357.2,y:-20.375}).wait(1).to({graphics:mask_4_graphics_276,x:-370.35,y:-22.425}).wait(1).to({graphics:mask_4_graphics_277,x:-382.675,y:-24.35}).wait(1).to({graphics:mask_4_graphics_278,x:-394.225,y:-26.175}).wait(1).to({graphics:mask_4_graphics_279,x:-405.075,y:-27.875}).wait(1).to({graphics:mask_4_graphics_280,x:-415.175,y:-29.475}).wait(1).to({graphics:mask_4_graphics_281,x:-424.625,y:-30.975}).wait(1).to({graphics:mask_4_graphics_282,x:-433.425,y:-32.325}).wait(1).to({graphics:mask_4_graphics_283,x:-441.575,y:-33.625}).wait(1).to({graphics:mask_4_graphics_284,x:-449.125,y:-34.825}).wait(1).to({graphics:mask_4_graphics_285,x:-456.125,y:-35.9}).wait(1).to({graphics:mask_4_graphics_286,x:-462.575,y:-36.925}).wait(1).to({graphics:mask_4_graphics_287,x:-468.475,y:-37.85}).wait(1).to({graphics:mask_4_graphics_288,x:-473.875,y:-38.725}).wait(1).to({graphics:mask_4_graphics_289,x:-478.775,y:-39.475}).wait(1).to({graphics:mask_4_graphics_290,x:-483.225,y:-40.2}).wait(1).to({graphics:mask_4_graphics_291,x:-487.2,y:-40.825}).wait(1).to({graphics:mask_4_graphics_292,x:-490.775,y:-41.375}).wait(1).to({graphics:mask_4_graphics_293,x:-493.9,y:-41.875}).wait(1).to({graphics:mask_4_graphics_294,x:-496.625,y:-42.3}).wait(1).to({graphics:mask_4_graphics_295,x:-498.975,y:-42.65}).wait(1).to({graphics:mask_4_graphics_296,x:-500.95,y:-42.975}).wait(1).to({graphics:null,x:0,y:0}).wait(267));

	// mountains
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111B31").s().p("EgqBAEEIAAhaIBaAAIEsmPICqDvIEYkhIDIFJIDwkXIDIDIIEEjmIDIDmIDIjcIBuDIIEsjmICLFJID6kXICqDSIDSj6IC0ENIDSkDIEEDcIC0i+IFUF7IEEk/IDcEXIGamZIAAJXg");
	this.shape_1.setTransform(459,38);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(162).to({_off:false},0).to({_off:true},135).wait(267));

	// pageFlip1
	this.instance_27 = new lib.pageFlip_1();
	this.instance_27.setTransform(757,85.95,0.4908,0.4908,-14.998,0,0,57.3,57.5);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(98).to({_off:false},0).wait(1).to({regX:57,regY:57.1,scaleX:0.6416,scaleY:0.6416,rotation:-14.9979,x:727.4,y:76.3},0).wait(1).to({scaleX:0.7939,scaleY:0.7939,x:697.75,y:66.6},0).wait(1).to({scaleX:0.947,scaleY:0.947,rotation:-14.9978,x:667.95,y:56.95},0).wait(1).to({scaleX:1.1004,scaleY:1.1004,x:638.05,y:47.15},0).wait(1).to({scaleX:1.2532,scaleY:1.2532,rotation:-14.9977,x:608.25,y:37.5},0).wait(1).to({regX:57.4,regY:57.4,scaleX:1.4048,scaleY:1.4048,rotation:-14.9976,x:579.3,y:28.3},0).wait(1).to({regX:57,regY:57.1,scaleX:1.4699,scaleY:1.4699,x:547.8,y:24.25},0).wait(1).to({scaleX:1.5339,scaleY:1.5339,x:517.45,y:20.65},0).wait(1).to({scaleX:1.5965,scaleY:1.5965,x:487.8,y:17},0).wait(1).to({scaleX:1.6576,scaleY:1.6576,rotation:-14.9977,x:458.9,y:13.55},0).wait(1).to({scaleX:1.7169,scaleY:1.7169,x:430.8,y:10.1},0).wait(1).to({scaleX:1.7743,scaleY:1.7743,x:403.6,y:6.85},0).wait(1).to({scaleX:1.8297,scaleY:1.8297,x:377.45,y:3.6},0).wait(1).to({scaleX:1.883,scaleY:1.883,x:352.15,y:0.6},0).wait(1).to({scaleX:1.934,scaleY:1.934,x:328.05,y:-2.4},0).wait(1).to({scaleX:1.9829,scaleY:1.9829,x:304.85,y:-5.15},0).wait(1).to({scaleX:2.0295,scaleY:2.0295,x:282.85,y:-7.85},0).wait(1).to({scaleX:2.0739,scaleY:2.0739,x:261.8,y:-10.35},0).wait(1).to({scaleX:2.1161,scaleY:2.1161,x:241.8,y:-12.8},0).wait(1).to({scaleX:2.1561,scaleY:2.1561,x:222.8,y:-15.1},0).wait(1).to({scaleX:2.1941,scaleY:2.1941,x:204.85,y:-17.3},0).wait(1).to({scaleX:2.23,scaleY:2.23,x:187.85,y:-19.35},0).wait(1).to({scaleX:2.2639,scaleY:2.2639,x:171.8,y:-21.3},0).wait(1).to({scaleX:2.2959,scaleY:2.2959,x:156.65,y:-23.1},0).wait(1).to({scaleX:2.3261,scaleY:2.3261,x:142.35,y:-24.85},0).wait(1).to({scaleX:2.3544,scaleY:2.3544,x:129,y:-26.5},0).wait(1).to({scaleX:2.3811,scaleY:2.3811,x:116.4,y:-27.95},0).wait(1).to({scaleX:2.406,scaleY:2.406,x:104.5,y:-29.45},0).wait(1).to({scaleX:2.4294,scaleY:2.4294,x:93.45,y:-30.8},0).wait(1).to({scaleX:2.4513,scaleY:2.4513,x:83.1,y:-32.05},0).wait(1).to({scaleX:2.4717,scaleY:2.4717,x:73.45,y:-33.2},0).wait(1).to({scaleX:2.4907,scaleY:2.4907,x:64.5,y:-34.35},0).wait(1).to({scaleX:2.5083,scaleY:2.5083,x:56.1,y:-35.3},0).wait(1).to({scaleX:2.5246,scaleY:2.5246,x:48.4,y:-36.25},0).wait(1).to({scaleX:2.5397,scaleY:2.5397,x:41.3,y:-37.1},0).wait(1).to({scaleX:2.5536,scaleY:2.5536,x:34.7,y:-37.9},0).wait(1).to({scaleX:2.5664,scaleY:2.5664,x:28.6,y:-38.65},0).wait(1).to({scaleX:2.5781,scaleY:2.5781,x:23.1,y:-39.35},0).wait(1).to({scaleX:2.5887,scaleY:2.5887,x:18.1,y:-39.9},0).wait(1).to({scaleX:2.5982,scaleY:2.5982,x:13.55,y:-40.45},0).wait(1).to({scaleX:2.6069,scaleY:2.6069,x:9.45,y:-40.95},0).wait(1).to({scaleX:2.6145,scaleY:2.6145,x:5.85,y:-41.4},0).wait(1).to({scaleX:2.6213,scaleY:2.6213,x:2.6,y:-41.75},0).wait(1).to({scaleX:2.6272,scaleY:2.6272,x:-0.2,y:-42.15},0).wait(1).to({scaleX:2.6323,scaleY:2.6323,x:-2.55,y:-42.45},0).wait(1).to({regX:57.6,regY:57.5,scaleX:2.6365,scaleY:2.6365,x:-3.2,y:-42.1},0).to({_off:true},1).wait(419));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_98 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_99 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_100 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_101 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_102 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_103 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_104 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_105 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_106 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_107 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_108 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_109 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_110 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_111 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_112 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_113 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_114 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_115 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_116 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_117 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_118 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_119 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_120 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_121 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_122 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_123 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_124 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_125 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_126 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_127 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_128 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_129 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_130 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_131 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_132 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_133 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_134 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_135 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_136 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_137 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_138 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_139 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_140 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_141 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_142 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_143 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_144 = new cjs.Graphics().p("EhYCARuMAUlgj4MCbgAAdMgUmAj4g");
	var mask_5_graphics_162 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_5_graphics_163 = new cjs.Graphics().p("EhYKAR6MAU2gkQMCbfAAcMgU3AkRg");
	var mask_5_graphics_164 = new cjs.Graphics().p("EhYSASGMAVGgkpMCbfAAeMgVHAkpg");
	var mask_5_graphics_165 = new cjs.Graphics().p("EhYaASTMAVWglCMCbfAAdMgVXAlCg");
	var mask_5_graphics_166 = new cjs.Graphics().p("EhYiASfMAVmglbMCbfAAeMgVnAlbg");
	var mask_5_graphics_167 = new cjs.Graphics().p("EhYqASrMAV3glzMCbeAAeMgV4Alzg");
	var mask_5_graphics_168 = new cjs.Graphics().p("EhYyAS3MAWHgmMMCbfAAfMgWJAmMg");
	var mask_5_graphics_169 = new cjs.Graphics().p("EhY6ATDMAWXgmkMCbeAAeMgWYAmlg");
	var mask_5_graphics_170 = new cjs.Graphics().p("EhZCATPMAWngm8MCbeAAfMgWoAm8g");
	var mask_5_graphics_171 = new cjs.Graphics().p("EhZKATbMAW3gnUMCbeAAgMgW4AnTg");
	var mask_5_graphics_172 = new cjs.Graphics().p("EhZRATmMAXGgnqMCbdAAfMgXHAnqg");
	var mask_5_graphics_173 = new cjs.Graphics().p("EhZZATxMAXVgoBMCbeAAgMgXWAoBg");
	var mask_5_graphics_174 = new cjs.Graphics().p("EhZgAT7MAXkgoVMCbcAAgMgXjAoVg");
	var mask_5_graphics_175 = new cjs.Graphics().p("EhZmAUFMAXxgoqMCbcAAgMgXxAorg");
	var mask_5_graphics_176 = new cjs.Graphics().p("EhZtAUPMAX+go+MCbdAAhMgX/Ao+g");
	var mask_5_graphics_177 = new cjs.Graphics().p("EhZzAUZMAYKgpSMCbdAAiMgYLApQg");
	var mask_5_graphics_178 = new cjs.Graphics().p("EhZ5AUhMAYWgpiMCbdAAgMgYYApkg");
	var mask_5_graphics_179 = new cjs.Graphics().p("EhZ/AUqMAYigp0MCbdAAhMgYjAp1g");
	var mask_5_graphics_180 = new cjs.Graphics().p("EhaEAUyMAYtgqFMCbcAAiMgYuAqFg");
	var mask_5_graphics_181 = new cjs.Graphics().p("EhaJAU6MAY3gqVMCbcAAiMgY4AqVg");
	var mask_5_graphics_182 = new cjs.Graphics().p("EhaOAVBMAZBgqjMCbcAAiMgZCAqjg");
	var mask_5_graphics_183 = new cjs.Graphics().p("EhaTAVIMAZLgqyMCbcAAjMgZLAqxg");
	var mask_5_graphics_184 = new cjs.Graphics().p("EhaXAVPMAZTgq/MCbcAAiMgZUAq/g");
	var mask_5_graphics_185 = new cjs.Graphics().p("EhabAVVMAZcgrMMCbbAAjMgZdArMg");
	var mask_5_graphics_186 = new cjs.Graphics().p("EhagAVbMAZlgrXMCbbAAiMgZlArYg");
	var mask_5_graphics_187 = new cjs.Graphics().p("EhajAVhMAZrgrjMCbcAAjMgZsArig");
	var mask_5_graphics_188 = new cjs.Graphics().p("EhanAVmMAZzgruMCbcAAjMgZ0Arug");
	var mask_5_graphics_189 = new cjs.Graphics().p("EhaqAVqMAZ5gr3MCbcAAjMgZ6Ar4g");
	var mask_5_graphics_190 = new cjs.Graphics().p("EhatAVvMAZ/gsAMCbcAAjMgaAAsAg");
	var mask_5_graphics_191 = new cjs.Graphics().p("EhawAV0MAaGgsKMCbbAAjMgaGAsKg");
	var mask_5_graphics_192 = new cjs.Graphics().p("EhayAV4MAaKgsSMCbbAAjMgaLAsSg");
	var mask_5_graphics_193 = new cjs.Graphics().p("Eha1AV8MAaQgsaMCbbAAkMgaQAsZg");
	var mask_5_graphics_194 = new cjs.Graphics().p("Eha3AV/MAaUgsgMCbbAAjMgaVAsgg");
	var mask_5_graphics_195 = new cjs.Graphics().p("Eha5AWCMAaYgsnMCbbAAkMgaZAsng");
	var mask_5_graphics_196 = new cjs.Graphics().p("Eha7AWFMAacgstMCbbAAkMgadAstg");
	var mask_5_graphics_197 = new cjs.Graphics().p("Eha9AWIMAaggszMCbbAAkMgahAszg");
	var mask_5_graphics_198 = new cjs.Graphics().p("Eha/AWKMAakgs3MCbbAAjMgalAs4g");
	var mask_5_graphics_199 = new cjs.Graphics().p("EhbAAWNMAangs9MCbaAAkMganAs9g");
	var mask_5_graphics_200 = new cjs.Graphics().p("EhbCAWPMAaqgtBMCbbAAkMgarAtBg");
	var mask_5_graphics_201 = new cjs.Graphics().p("EhbDAWRMAasgtFMCbbAAkMgatAtFg");
	var mask_5_graphics_202 = new cjs.Graphics().p("EhbEAWTMAavgtJMCbaAAkMgavAtIg");
	var mask_5_graphics_203 = new cjs.Graphics().p("EhbGAWUMAaygtLMCbaAAkMgaxAtLg");
	var mask_5_graphics_204 = new cjs.Graphics().p("EhbGAWWMAazgtPMCbaAAkMgazAtPg");
	var mask_5_graphics_205 = new cjs.Graphics().p("EhbHAWXMAa0gtRMCbbAAkMga1AtRg");
	var mask_5_graphics_206 = new cjs.Graphics().p("EhbIAWYMAa2gtTMCbbAAkMga3AtTg");
	var mask_5_graphics_207 = new cjs.Graphics().p("EhbIAWZMAa3gtVMCbaAAkMga3AtVg");
	var mask_5_graphics_208 = new cjs.Graphics().p("EhbJAWaMAa4gtXMCbbAAkMga5AtXg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(98).to({graphics:mask_5_graphics_98,x:1238,y:116.025}).wait(1).to({graphics:mask_5_graphics_99,x:1205.45,y:111.175}).wait(1).to({graphics:mask_5_graphics_100,x:1172.55,y:106.325}).wait(1).to({graphics:mask_5_graphics_101,x:1139.5,y:101.425}).wait(1).to({graphics:mask_5_graphics_102,x:1106.4,y:96.525}).wait(1).to({graphics:mask_5_graphics_103,x:1073.4,y:91.625}).wait(1).to({graphics:mask_5_graphics_104,x:1040.7,y:86.775}).wait(1).to({graphics:mask_5_graphics_105,x:1010.75,y:81.975}).wait(1).to({graphics:mask_5_graphics_106,x:981.3,y:77.275}).wait(1).to({graphics:mask_5_graphics_107,x:952.45,y:72.625}).wait(1).to({graphics:mask_5_graphics_108,x:924.35,y:68.125}).wait(1).to({graphics:mask_5_graphics_109,x:897.1,y:63.775}).wait(1).to({graphics:mask_5_graphics_110,x:870.65,y:59.525}).wait(1).to({graphics:mask_5_graphics_111,x:845.2,y:55.475}).wait(1).to({graphics:mask_5_graphics_112,x:820.7,y:51.525}).wait(1).to({graphics:mask_5_graphics_113,x:797.2,y:47.775}).wait(1).to({graphics:mask_5_graphics_114,x:774.75,y:44.175}).wait(1).to({graphics:mask_5_graphics_115,x:753.3,y:40.775}).wait(1).to({graphics:mask_5_graphics_116,x:732.85,y:37.475}).wait(1).to({graphics:mask_5_graphics_117,x:713.45,y:34.375}).wait(1).to({graphics:mask_5_graphics_118,x:695,y:31.425}).wait(1).to({graphics:mask_5_graphics_119,x:677.55,y:28.625}).wait(1).to({graphics:mask_5_graphics_120,x:661.05,y:25.975}).wait(1).to({graphics:mask_5_graphics_121,x:645.4,y:23.475}).wait(1).to({graphics:mask_5_graphics_122,x:630.7,y:21.125}).wait(1).to({graphics:mask_5_graphics_123,x:616.85,y:18.875}).wait(1).to({graphics:mask_5_graphics_124,x:603.8,y:16.825}).wait(1).to({graphics:mask_5_graphics_125,x:591.55,y:14.825}).wait(1).to({graphics:mask_5_graphics_126,x:580.05,y:13.025}).wait(1).to({graphics:mask_5_graphics_127,x:569.3,y:11.275}).wait(1).to({graphics:mask_5_graphics_128,x:559.25,y:9.675}).wait(1).to({graphics:mask_5_graphics_129,x:549.85,y:8.175}).wait(1).to({graphics:mask_5_graphics_130,x:541.1,y:6.775}).wait(1).to({graphics:mask_5_graphics_131,x:533,y:5.475}).wait(1).to({graphics:mask_5_graphics_132,x:525.5,y:4.275}).wait(1).to({graphics:mask_5_graphics_133,x:518.55,y:3.175}).wait(1).to({graphics:mask_5_graphics_134,x:512.15,y:2.125}).wait(1).to({graphics:mask_5_graphics_135,x:506.25,y:1.175}).wait(1).to({graphics:mask_5_graphics_136,x:500.9,y:0.325}).wait(1).to({graphics:mask_5_graphics_137,x:496,y:-0.425}).wait(1).to({graphics:mask_5_graphics_138,x:491.6,y:-1.175}).wait(1).to({graphics:mask_5_graphics_139,x:487.65,y:-1.775}).wait(1).to({graphics:mask_5_graphics_140,x:484.15,y:-2.375}).wait(1).to({graphics:mask_5_graphics_141,x:481,y:-2.875}).wait(1).to({graphics:mask_5_graphics_142,x:478.3,y:-3.275}).wait(1).to({graphics:mask_5_graphics_143,x:475.95,y:-3.675}).wait(1).to({graphics:mask_5_graphics_144,x:474,y:-3.975}).wait(18).to({graphics:mask_5_graphics_162,x:265.15,y:75.725}).wait(1).to({graphics:mask_5_graphics_163,x:232.85,y:70.95}).wait(1).to({graphics:mask_5_graphics_164,x:200.225,y:66.125}).wait(1).to({graphics:mask_5_graphics_165,x:167.425,y:61.275}).wait(1).to({graphics:mask_5_graphics_166,x:134.575,y:56.425}).wait(1).to({graphics:mask_5_graphics_167,x:101.825,y:51.575}).wait(1).to({graphics:mask_5_graphics_168,x:69.35,y:46.775}).wait(1).to({graphics:mask_5_graphics_169,x:39.2,y:42.05}).wait(1).to({graphics:mask_5_graphics_170,x:9.575,y:37.35}).wait(1).to({graphics:mask_5_graphics_171,x:-19.45,y:32.8}).wait(1).to({graphics:mask_5_graphics_172,x:-47.725,y:28.35}).wait(1).to({graphics:mask_5_graphics_173,x:-75.175,y:24.025}).wait(1).to({graphics:mask_5_graphics_174,x:-101.75,y:19.85}).wait(1).to({graphics:mask_5_graphics_175,x:-127.4,y:15.825}).wait(1).to({graphics:mask_5_graphics_176,x:-152.05,y:11.925}).wait(1).to({graphics:mask_5_graphics_177,x:-175.675,y:8.2}).wait(1).to({graphics:mask_5_graphics_178,x:-198.3,y:4.65}).wait(1).to({graphics:mask_5_graphics_179,x:-219.875,y:1.25}).wait(1).to({graphics:mask_5_graphics_180,x:-240.425,y:-1.975}).wait(1).to({graphics:mask_5_graphics_181,x:-259.975,y:-5.075}).wait(1).to({graphics:mask_5_graphics_182,x:-278.525,y:-7.975}).wait(1).to({graphics:mask_5_graphics_183,x:-296.1,y:-10.75}).wait(1).to({graphics:mask_5_graphics_184,x:-312.725,y:-13.35}).wait(1).to({graphics:mask_5_graphics_185,x:-328.45,y:-15.825}).wait(1).to({graphics:mask_5_graphics_186,x:-343.25,y:-18.15}).wait(1).to({graphics:mask_5_graphics_187,x:-357.2,y:-20.375}).wait(1).to({graphics:mask_5_graphics_188,x:-370.35,y:-22.425}).wait(1).to({graphics:mask_5_graphics_189,x:-382.675,y:-24.35}).wait(1).to({graphics:mask_5_graphics_190,x:-394.225,y:-26.175}).wait(1).to({graphics:mask_5_graphics_191,x:-405.075,y:-27.875}).wait(1).to({graphics:mask_5_graphics_192,x:-415.175,y:-29.475}).wait(1).to({graphics:mask_5_graphics_193,x:-424.625,y:-30.975}).wait(1).to({graphics:mask_5_graphics_194,x:-433.425,y:-32.325}).wait(1).to({graphics:mask_5_graphics_195,x:-441.575,y:-33.625}).wait(1).to({graphics:mask_5_graphics_196,x:-449.125,y:-34.825}).wait(1).to({graphics:mask_5_graphics_197,x:-456.125,y:-35.9}).wait(1).to({graphics:mask_5_graphics_198,x:-462.575,y:-36.925}).wait(1).to({graphics:mask_5_graphics_199,x:-468.475,y:-37.85}).wait(1).to({graphics:mask_5_graphics_200,x:-473.875,y:-38.725}).wait(1).to({graphics:mask_5_graphics_201,x:-478.775,y:-39.475}).wait(1).to({graphics:mask_5_graphics_202,x:-483.225,y:-40.2}).wait(1).to({graphics:mask_5_graphics_203,x:-487.2,y:-40.825}).wait(1).to({graphics:mask_5_graphics_204,x:-490.775,y:-41.375}).wait(1).to({graphics:mask_5_graphics_205,x:-493.9,y:-41.875}).wait(1).to({graphics:mask_5_graphics_206,x:-496.625,y:-42.3}).wait(1).to({graphics:mask_5_graphics_207,x:-498.975,y:-42.65}).wait(1).to({graphics:mask_5_graphics_208,x:-500.95,y:-42.975}).wait(354).to({graphics:null,x:0,y:0}).wait(2));

	// WT1
	this.instance_28 = new lib.whiteTree_1();
	this.instance_28.setTransform(225,64,0.5918,0.5918,0,0,0,298,69);
	this.instance_28._off = true;

	var maskedShapeInstanceList = [this.instance_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(123).to({_off:false},0).to({_off:true},328).wait(113));

	// WT2
	this.instance_29 = new lib.whiteTree_1();
	this.instance_29.setTransform(702.1,70.35,0.7327,0.7327,0,0,0,299.2,64.7);
	this.instance_29._off = true;

	var maskedShapeInstanceList = [this.instance_29];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(114).to({_off:false},0).to({_off:true},337).wait(113));

	// text2
	this.instance_30 = new lib.text2_1();
	this.instance_30.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	var maskedShapeInstanceList = [this.instance_30];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(114).to({_off:false},0).to({alpha:1},44,cjs.Ease.cubicOut).to({_off:true},293).wait(113));

	// Corolla
	this.instance_31 = new lib.CL_AnimationIn_mc();
	this.instance_31.setTransform(151.6,10.35,0.5276,0.5276,0,0,0,150,125.5);
	this.instance_31._off = true;

	var maskedShapeInstanceList = [this.instance_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(104).to({_off:false},0).to({regY:125.3,scaleX:0.7361,scaleY:0.7361,x:351.45,y:33.25},44,cjs.Ease.cubicOut).to({_off:true},303).wait(113));

	// WT4
	this.instance_32 = new lib.whiteTree_1();
	this.instance_32.setTransform(459,43,0.2755,0.2755,0,0,0,299.1,64.5);
	this.instance_32._off = true;

	var maskedShapeInstanceList = [this.instance_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(129).to({_off:false},0).to({_off:true},322).wait(113));

	// bookCover
	this.instance_33 = new lib.bookCover_1();
	this.instance_33.setTransform(0,125,1,1,0,0,0,0,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(30).to({scaleX:0.0134,skewY:-176.4645,x:2},45,cjs.Ease.quadIn).to({_off:true},1).wait(488));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_98 = new cjs.Graphics().p("EhYCARuMAUmgj4MCbfAAdMgUmAj4g");
	var mask_6_graphics_99 = new cjs.Graphics().p("EhYKAR6MAU2gkQMCbfAAcMgU3AkRg");
	var mask_6_graphics_100 = new cjs.Graphics().p("EhYSASGMAVGgkpMCbfAAeMgVHAkpg");
	var mask_6_graphics_101 = new cjs.Graphics().p("EhYaASTMAVWglCMCbfAAdMgVXAlCg");
	var mask_6_graphics_102 = new cjs.Graphics().p("EhYiASfMAVmglbMCbfAAeMgVnAlbg");
	var mask_6_graphics_103 = new cjs.Graphics().p("EhYqASrMAV3glzMCbeAAeMgV4Alzg");
	var mask_6_graphics_104 = new cjs.Graphics().p("EhYyAS3MAWHgmMMCbfAAfMgWJAmMg");
	var mask_6_graphics_105 = new cjs.Graphics().p("EhY6ATDMAWXgmkMCbeAAeMgWYAmlg");
	var mask_6_graphics_106 = new cjs.Graphics().p("EhZCATPMAWngm8MCbeAAfMgWoAm8g");
	var mask_6_graphics_107 = new cjs.Graphics().p("EhZKATbMAW3gnUMCbeAAgMgW4AnTg");
	var mask_6_graphics_108 = new cjs.Graphics().p("EhZRATmMAXGgnqMCbdAAfMgXHAnqg");
	var mask_6_graphics_109 = new cjs.Graphics().p("EhZZATxMAXVgoBMCbeAAgMgXWAoBg");
	var mask_6_graphics_110 = new cjs.Graphics().p("EhZgAT7MAXkgoVMCbcAAgMgXjAoVg");
	var mask_6_graphics_111 = new cjs.Graphics().p("EhZmAUFMAXxgoqMCbcAAgMgXxAorg");
	var mask_6_graphics_112 = new cjs.Graphics().p("EhZtAUPMAX+go+MCbdAAhMgX/Ao+g");
	var mask_6_graphics_113 = new cjs.Graphics().p("EhZzAUZMAYKgpSMCbdAAiMgYLApQg");
	var mask_6_graphics_114 = new cjs.Graphics().p("EhZ5AUhMAYWgpiMCbdAAgMgYYApkg");
	var mask_6_graphics_115 = new cjs.Graphics().p("EhZ/AUqMAYigp0MCbdAAhMgYjAp1g");
	var mask_6_graphics_116 = new cjs.Graphics().p("EhaEAUyMAYtgqFMCbcAAiMgYuAqFg");
	var mask_6_graphics_117 = new cjs.Graphics().p("EhaJAU6MAY3gqVMCbcAAiMgY4AqVg");
	var mask_6_graphics_118 = new cjs.Graphics().p("EhaOAVBMAZBgqjMCbcAAiMgZCAqjg");
	var mask_6_graphics_119 = new cjs.Graphics().p("EhaTAVIMAZLgqyMCbcAAjMgZLAqxg");
	var mask_6_graphics_120 = new cjs.Graphics().p("EhaXAVPMAZTgq/MCbcAAiMgZUAq/g");
	var mask_6_graphics_121 = new cjs.Graphics().p("EhabAVVMAZcgrMMCbbAAjMgZdArMg");
	var mask_6_graphics_122 = new cjs.Graphics().p("EhagAVbMAZlgrXMCbbAAiMgZlArYg");
	var mask_6_graphics_123 = new cjs.Graphics().p("EhajAVhMAZrgrjMCbcAAjMgZsArig");
	var mask_6_graphics_124 = new cjs.Graphics().p("EhanAVmMAZzgruMCbcAAjMgZ0Arug");
	var mask_6_graphics_125 = new cjs.Graphics().p("EhaqAVqMAZ5gr3MCbcAAjMgZ6Ar4g");
	var mask_6_graphics_126 = new cjs.Graphics().p("EhatAVvMAZ/gsAMCbcAAjMgaAAsAg");
	var mask_6_graphics_127 = new cjs.Graphics().p("EhawAV0MAaGgsKMCbbAAjMgaGAsKg");
	var mask_6_graphics_128 = new cjs.Graphics().p("EhayAV4MAaKgsSMCbbAAjMgaLAsSg");
	var mask_6_graphics_129 = new cjs.Graphics().p("Eha1AV8MAaQgsaMCbbAAkMgaQAsZg");
	var mask_6_graphics_130 = new cjs.Graphics().p("Eha3AV/MAaUgsgMCbbAAjMgaVAsgg");
	var mask_6_graphics_131 = new cjs.Graphics().p("Eha5AWCMAaYgsnMCbbAAkMgaZAsng");
	var mask_6_graphics_132 = new cjs.Graphics().p("Eha7AWFMAacgstMCbbAAkMgadAstg");
	var mask_6_graphics_133 = new cjs.Graphics().p("Eha9AWIMAaggszMCbbAAkMgahAszg");
	var mask_6_graphics_134 = new cjs.Graphics().p("Eha/AWKMAakgs3MCbbAAjMgalAs4g");
	var mask_6_graphics_135 = new cjs.Graphics().p("EhbAAWNMAangs9MCbaAAkMganAs9g");
	var mask_6_graphics_136 = new cjs.Graphics().p("EhbCAWPMAaqgtBMCbbAAkMgarAtBg");
	var mask_6_graphics_137 = new cjs.Graphics().p("EhbDAWRMAasgtFMCbbAAkMgatAtFg");
	var mask_6_graphics_138 = new cjs.Graphics().p("EhbEAWTMAavgtJMCbaAAkMgavAtIg");
	var mask_6_graphics_139 = new cjs.Graphics().p("EhbGAWUMAaygtLMCbaAAkMgaxAtLg");
	var mask_6_graphics_140 = new cjs.Graphics().p("EhbGAWWMAazgtPMCbaAAkMgazAtPg");
	var mask_6_graphics_141 = new cjs.Graphics().p("EhbHAWXMAa0gtRMCbbAAkMga1AtRg");
	var mask_6_graphics_142 = new cjs.Graphics().p("EhbIAWYMAa2gtTMCbbAAkMga3AtTg");
	var mask_6_graphics_143 = new cjs.Graphics().p("EhbIAWZMAa3gtVMCbaAAkMga3AtVg");
	var mask_6_graphics_144 = new cjs.Graphics().p("EhbJAWaMAa4gtXMCbbAAkMga5AtXg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(98).to({graphics:mask_6_graphics_98,x:265.15,y:75.725}).wait(1).to({graphics:mask_6_graphics_99,x:232.85,y:70.95}).wait(1).to({graphics:mask_6_graphics_100,x:200.225,y:66.125}).wait(1).to({graphics:mask_6_graphics_101,x:167.425,y:61.275}).wait(1).to({graphics:mask_6_graphics_102,x:134.575,y:56.425}).wait(1).to({graphics:mask_6_graphics_103,x:101.825,y:51.575}).wait(1).to({graphics:mask_6_graphics_104,x:69.35,y:46.775}).wait(1).to({graphics:mask_6_graphics_105,x:39.2,y:42.05}).wait(1).to({graphics:mask_6_graphics_106,x:9.575,y:37.35}).wait(1).to({graphics:mask_6_graphics_107,x:-19.45,y:32.8}).wait(1).to({graphics:mask_6_graphics_108,x:-47.725,y:28.35}).wait(1).to({graphics:mask_6_graphics_109,x:-75.175,y:24.025}).wait(1).to({graphics:mask_6_graphics_110,x:-101.75,y:19.85}).wait(1).to({graphics:mask_6_graphics_111,x:-127.4,y:15.825}).wait(1).to({graphics:mask_6_graphics_112,x:-152.05,y:11.925}).wait(1).to({graphics:mask_6_graphics_113,x:-175.675,y:8.2}).wait(1).to({graphics:mask_6_graphics_114,x:-198.3,y:4.65}).wait(1).to({graphics:mask_6_graphics_115,x:-219.875,y:1.25}).wait(1).to({graphics:mask_6_graphics_116,x:-240.425,y:-1.975}).wait(1).to({graphics:mask_6_graphics_117,x:-259.975,y:-5.075}).wait(1).to({graphics:mask_6_graphics_118,x:-278.525,y:-7.975}).wait(1).to({graphics:mask_6_graphics_119,x:-296.1,y:-10.75}).wait(1).to({graphics:mask_6_graphics_120,x:-312.725,y:-13.35}).wait(1).to({graphics:mask_6_graphics_121,x:-328.45,y:-15.825}).wait(1).to({graphics:mask_6_graphics_122,x:-343.25,y:-18.15}).wait(1).to({graphics:mask_6_graphics_123,x:-357.2,y:-20.375}).wait(1).to({graphics:mask_6_graphics_124,x:-370.35,y:-22.425}).wait(1).to({graphics:mask_6_graphics_125,x:-382.675,y:-24.35}).wait(1).to({graphics:mask_6_graphics_126,x:-394.225,y:-26.175}).wait(1).to({graphics:mask_6_graphics_127,x:-405.075,y:-27.875}).wait(1).to({graphics:mask_6_graphics_128,x:-415.175,y:-29.475}).wait(1).to({graphics:mask_6_graphics_129,x:-424.625,y:-30.975}).wait(1).to({graphics:mask_6_graphics_130,x:-433.425,y:-32.325}).wait(1).to({graphics:mask_6_graphics_131,x:-441.575,y:-33.625}).wait(1).to({graphics:mask_6_graphics_132,x:-449.125,y:-34.825}).wait(1).to({graphics:mask_6_graphics_133,x:-456.125,y:-35.9}).wait(1).to({graphics:mask_6_graphics_134,x:-462.575,y:-36.925}).wait(1).to({graphics:mask_6_graphics_135,x:-468.475,y:-37.85}).wait(1).to({graphics:mask_6_graphics_136,x:-473.875,y:-38.725}).wait(1).to({graphics:mask_6_graphics_137,x:-478.775,y:-39.475}).wait(1).to({graphics:mask_6_graphics_138,x:-483.225,y:-40.2}).wait(1).to({graphics:mask_6_graphics_139,x:-487.2,y:-40.825}).wait(1).to({graphics:mask_6_graphics_140,x:-490.775,y:-41.375}).wait(1).to({graphics:mask_6_graphics_141,x:-493.9,y:-41.875}).wait(1).to({graphics:mask_6_graphics_142,x:-496.625,y:-42.3}).wait(1).to({graphics:mask_6_graphics_143,x:-498.975,y:-42.65}).wait(1).to({graphics:mask_6_graphics_144,x:-500.95,y:-42.975}).wait(307).to({graphics:null,x:0,y:0}).wait(113));

	// RT1
	this.instance_34 = new lib.redTree_1();
	this.instance_34.setTransform(224.05,43,0.7269,0.7269,0,0,0,298.1,68.9);
	this.instance_34._off = true;

	var maskedShapeInstanceList = [this.instance_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(66).to({_off:false},0).to({_off:true},385).wait(113));

	// RT2
	this.instance_35 = new lib.redTree_1();
	this.instance_35.setTransform(705.8,45.15,0.5608,0.5608,0,0,0,299.1,64.3);
	this.instance_35._off = true;

	var maskedShapeInstanceList = [this.instance_35];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(54).to({_off:false},0).to({_off:true},397).wait(113));

	// text1
	this.instance_36 = new lib.text1_1();
	this.instance_36.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	var maskedShapeInstanceList = [this.instance_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(54).to({_off:false},0).to({alpha:1},44,cjs.Ease.cubicOut).to({_off:true},353).wait(113));

	// HighlanderIn copy
	this.instance_37 = new lib.HI_AnimationIn_mc();
	this.instance_37.setTransform(171.2,16.5,0.3916,0.3916,0,0,0,149.9,125.4);
	this.instance_37.alpha = 0;
	this.instance_37._off = true;

	var maskedShapeInstanceList = [this.instance_37];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(54).to({_off:false},0).wait(1).to({regX:150,regY:125,scaleX:0.4049,scaleY:0.4049,x:181.55,y:17.5,alpha:0.1246},0).wait(1).to({scaleX:0.4181,scaleY:0.4181,x:191.75,y:18.65,alpha:0.248},0).wait(1).to({scaleX:0.431,scaleY:0.431,x:201.8,y:19.85,alpha:0.3693},0).wait(1).to({scaleX:0.4436,scaleY:0.4436,x:211.6,y:20.9,alpha:0.4874},0).wait(1).to({scaleX:0.4558,scaleY:0.4558,x:221,y:21.95,alpha:0.6012},0).wait(1).to({scaleX:0.4674,scaleY:0.4674,x:230,y:23,alpha:0.7099},0).wait(1).to({scaleX:0.4784,scaleY:0.4784,x:238.5,y:23.95,alpha:0.8129},0).wait(1).to({scaleX:0.4887,scaleY:0.4887,x:246.55,y:24.85,alpha:0.9096},0).wait(1).to({regY:125.3,scaleX:0.4984,scaleY:0.4984,x:254,y:25.85,alpha:1},0).wait(1).to({regY:125,scaleX:0.5081,scaleY:0.5081,x:261.5,y:26.55},0).wait(1).to({scaleX:0.5171,scaleY:0.5171,x:268.5,y:27.35},0).wait(1).to({scaleX:0.5254,scaleY:0.5254,x:274.9,y:28.1},0).wait(1).to({scaleX:0.533,scaleY:0.533,x:280.85,y:28.75},0).wait(1).to({scaleX:0.5401,scaleY:0.5401,x:286.25,y:29.35},0).wait(1).to({scaleX:0.5465,scaleY:0.5465,x:291.25,y:29.9},0).wait(1).to({scaleX:0.5524,scaleY:0.5524,x:295.85,y:30.45},0).wait(1).to({scaleX:0.5578,scaleY:0.5578,x:300,y:30.9},0).wait(1).to({scaleX:0.5627,scaleY:0.5627,x:303.85,y:31.35},0).wait(1).to({scaleX:0.5673,scaleY:0.5673,x:307.4,y:31.75},0).wait(1).to({scaleX:0.5714,scaleY:0.5714,x:310.6,y:32.15},0).wait(1).to({scaleX:0.5752,scaleY:0.5752,x:313.55,y:32.45},0).wait(1).to({scaleX:0.5787,scaleY:0.5787,x:316.25,y:32.75},0).wait(1).to({scaleX:0.5819,scaleY:0.5819,x:318.7,y:33.05},0).wait(1).to({scaleX:0.5848,scaleY:0.5848,x:320.9,y:33.3},0).wait(1).to({scaleX:0.5874,scaleY:0.5874,x:322.95,y:33.55},0).wait(1).to({scaleX:0.5898,scaleY:0.5898,x:324.85,y:33.75},0).wait(1).to({scaleX:0.592,scaleY:0.592,x:326.55,y:33.9},0).wait(1).to({scaleX:0.594,scaleY:0.594,x:328.1,y:34.1},0).wait(1).to({scaleX:0.5958,scaleY:0.5958,x:329.45,y:34.2},0).wait(1).to({scaleX:0.5974,scaleY:0.5974,x:330.7,y:34.35},0).wait(1).to({scaleX:0.5989,scaleY:0.5989,x:331.9,y:34.5},0).wait(1).to({scaleX:0.6002,scaleY:0.6002,x:332.85,y:34.6},0).wait(1).to({scaleX:0.6013,scaleY:0.6013,x:333.75,y:34.7},0).wait(1).to({scaleX:0.6023,scaleY:0.6023,x:334.55,y:34.8},0).wait(1).to({scaleX:0.6032,scaleY:0.6032,x:335.25,y:34.9},0).wait(1).to({scaleX:0.604,scaleY:0.604,x:335.85,y:34.95},0).wait(1).to({scaleX:0.6047,scaleY:0.6047,x:336.35,y:35.05},0).wait(1).to({scaleX:0.6052,scaleY:0.6052,x:336.8},0).wait(1).to({scaleX:0.6057,scaleY:0.6057,x:337.15,y:35.1},0).wait(1).to({scaleX:0.6061,scaleY:0.6061,x:337.45,y:35.15},0).wait(1).to({scaleX:0.6063,scaleY:0.6063,x:337.65},0).wait(1).to({scaleX:0.6065,scaleY:0.6065,x:337.85},0).wait(1).to({scaleX:0.6067,scaleY:0.6067,x:337.9,y:35.2},0).wait(1).to({regY:125.1,x:337.95,y:35.35},0).to({_off:true},353).wait(113));

	// RT3
	this.instance_38 = new lib.redTree_1();
	this.instance_38.setTransform(441.05,38,0.2966,0.2966,0,0,0,299.4,64.4);
	this.instance_38._off = true;

	var maskedShapeInstanceList = [this.instance_38];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(72).to({_off:false},0).to({_off:true},379).wait(113));

	// logo
	this.instance_39 = new lib.logo_1();
	this.instance_39.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).to({_off:true},453).wait(111));

	// back
	this.instance_40 = new lib.back();
	this.instance_40.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).to({_off:true},453).wait(111));

	// offerLoad
	this.offer_mc_1 = new lib.offer_mc();
	this.offer_mc_1.name = "offer_mc_1";
	this.offer_mc_1.setTransform(161,89,1,1,0,0,0,93,44);

	this.timeline.addTween(cjs.Tween.get(this.offer_mc_1).to({_off:true},453).wait(111));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-375.2,791.1,517.1);
// library properties:
lib.properties = {
	id: '6DBC25FFFD4048B3B488CE195B1E3C32',
	width: 728,
	height: 90,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bookCover.png?1604623065311", id:"bookCover"},
		{src:"images/CL.png?1604623065311", id:"CL"},
		{src:"images/CL_wheel.png?1604623065311", id:"CL_wheel"},
		{src:"images/cta.png?1604623065311", id:"cta"},
		{src:"images/CY.png?1604623065311", id:"CY"},
		{src:"images/CY_wheel.png?1604623065311", id:"CY_wheel"},
		{src:"images/details.png?1604623065311", id:"details"},
		{src:"images/HI.png?1604623065311", id:"HI"},
		{src:"images/HI_wheel.png?1604623065311", id:"HI_wheel"},
		{src:"images/logo.png?1604623065311", id:"logo"},
		{src:"images/offerTitle.png?1604623065311", id:"offerTitle"},
		{src:"images/options.png?1604623065311", id:"options"},
		{src:"images/pageFlip.png?1604623065311", id:"pageFlip"},
		{src:"images/redTree.png?1604623065311", id:"redTree"},
		{src:"images/RV.png?1604623065311", id:"RV"},
		{src:"images/RV_wheel.png?1604623065311", id:"RV_wheel"},
		{src:"images/text1.png?1604623065311", id:"text1"},
		{src:"images/text2.png?1604623065311", id:"text2"},
		{src:"images/text3.png?1604623065311", id:"text3"},
		{src:"images/text4.png?1604623065311", id:"text4"},
		{src:"images/text5.png?1604623065311", id:"text5"},
		{src:"images/whiteTree.png?1604623065311", id:"whiteTree"}
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