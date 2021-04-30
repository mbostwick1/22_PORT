(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bookCover = function() {
	this.initialize(img.bookCover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.border = function() {
	this.initialize(img.border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


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
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


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
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


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
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.offerTitle = function() {
	this.initialize(img.offerTitle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.options = function() {
	this.initialize(img.options);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


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
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.text5 = function() {
	this.initialize(img.text5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


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

}).prototype = getMCSymbolPrototype(lib.options_1, new cjs.Rectangle(0,0,300,600), null);


(lib.offer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// *
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAHIgIAPIgJgGIAMgNIgRgDIADgLIAQAHIgBgRIAKAAIgCARIAQgHIADALIgQADIALANIgJAGg");
	this.shape.setTransform(111.625,7.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// dynamic_field1
	this.dynamic_field1 = new cjs.Text("0.0%", "30px 'Toyota Type'", "#FFFFFF");
	this.dynamic_field1.name = "dynamic_field1";
	this.dynamic_field1.textAlign = "right";
	this.dynamic_field1.lineHeight = 43;
	this.dynamic_field1.lineWidth = 81;
	this.dynamic_field1.parent = this;
	this.dynamic_field1.setTransform(111.3138,-8.8,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field1).wait(1));

	// dynamic_field2
	this.dynamic_field2 = new cjs.Text("APR FOR 00 MONTHS", "8px 'Toyota Type'", "#FFFFFF");
	this.dynamic_field2.name = "dynamic_field2";
	this.dynamic_field2.lineHeight = 11;
	this.dynamic_field2.lineWidth = 162;
	this.dynamic_field2.parent = this;
	this.dynamic_field2.setTransform(122.2427,1.2,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field2).wait(1));

	// dynamic_field3
	this.dynamic_field3 = new cjs.Text("$0 DOWN WITH APPROVED CREDIT", "8px 'Toyota Type'", "#FFFFFF");
	this.dynamic_field3.name = "dynamic_field3";
	this.dynamic_field3.lineHeight = 8;
	this.dynamic_field3.lineWidth = 75;
	this.dynamic_field3.parent = this;
	this.dynamic_field3.setTransform(122.2286,10.2,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field3).wait(1));

	// dynamic_field4
	this.dynamic_field4 = new cjs.Text("PLUS $500 BONUS CASH", "bold 10px 'Toyota Type Black'", "#FFFFFF");
	this.dynamic_field4.name = "dynamic_field4";
	this.dynamic_field4.textAlign = "center";
	this.dynamic_field4.lineHeight = 11;
	this.dynamic_field4.lineWidth = 124;
	this.dynamic_field4.parent = this;
	this.dynamic_field4.setTransform(126.6821,31.95,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.offer_mc, new cjs.Rectangle(18.6,-11,287.4,60.8), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,300,600), null);


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

}).prototype = getMCSymbolPrototype(lib.details_1, new cjs.Rectangle(0,0,300,600), null);


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

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,300,600), null);


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

	// Layer_3
	this.instance_1 = new lib.border();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C1272C").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,299.9992,1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bookCover_1, new cjs.Rectangle(0,0,300,600), null);


(lib.back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F192E").s().p("A3bQQMAAAggfMAu3AAAMAAAAgfg");
	this.shape.setTransform(150,496.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F253B").s().p("A3bfkMAAAg/HMAu3AAAMAAAA/Hg");
	this.shape_1.setTransform(150,202);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back, new cjs.Rectangle(0,0,300,600.1), null);


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
	this.instance.setTransform(227.8,459.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).wait(9));

	// Layer_10
	this.instance_1 = new lib.sparkle_anim();
	this.instance_1.setTransform(72.35,460.2,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).wait(48));

	// Layer_16
	this.instance_2 = new lib.bottomStar();
	this.instance_2.setTransform(240.6,52.85,0.7118,0.7118,-29.9981,0,0,6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(81));

	// Layer_15
	this.instance_3 = new lib.bottomStar();
	this.instance_3.setTransform(233.15,140.15,0.6875,0.6875,0,-104.9992,74.9995,6.2,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(81));

	// Layer_14
	this.instance_4 = new lib.bottomStar();
	this.instance_4.setTransform(253.65,264.8,0.7037,0.7037,-29.9991,0,0,6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(81));

	// Layer_13
	this.instance_5 = new lib.bottomStar();
	this.instance_5.setTransform(119.9,183.15,0.9101,0.9101,0,-14.9983,165.0017,6.5,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(81));

	// Layer_12
	this.instance_6 = new lib.bottomStar();
	this.instance_6.setTransform(60.65,242.85,0.7894,0.7894,0,0,0,6.5,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(81));

	// Layer_2
	this.instance_7 = new lib.bottomStar();
	this.instance_7.setTransform(215.75,194.4,0.6874,0.6874,-75.0013,0,0,6.3,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(81));

	// Layer_8
	this.instance_8 = new lib.bottomStar();
	this.instance_8.setTransform(40.55,46.9,0.6875,0.6875,0,0,0,6.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(81));

	// Layer_6
	this.instance_9 = new lib.bottomStar();
	this.instance_9.setTransform(34.65,145.95,0.7562,0.5275,0,0,0,6.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(81));

	// Layer_5
	this.instance_10 = new lib.bottomStar();
	this.instance_10.setTransform(261.6,97.75,0.6875,0.6875,0,-44.9991,135.0009,6.2,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(81));

	// Layer_3
	this.instance_11 = new lib.bottomStar();
	this.instance_11.setTransform(83.5,89.9,0.6875,0.6875,14.9989,0,0,6.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(81));

	// Layer_1
	this.instance_12 = new lib.offerTitle();
	this.instance_12.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(81));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.HI_wheelSpinOut_mc = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9999,scaleY:0.9999,rotation:-720,x:38.05},44,cjs.Ease.cubicIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-15.5,107.19999999999999,107.1);


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


(lib.HI_AnimationOut_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wheelSpin_mc
	this.instance = new lib.HI_wheelSpinOut_mc();
	this.instance.setTransform(149.5,175.05,0.4864,0.5603,0,0,180,38,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wheelSpin_mc
	this.instance_1 = new lib.HI_wheelSpinOut_mc();
	this.instance_1.setTransform(42.55,162.4,0.2006,0.4198,0,0,180,34.6,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// vehicle_mc
	this.instance_2 = new lib.HI_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HI_AnimationOut_mc, new cjs.Rectangle(0,0,300,250), null);


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


(lib.CL_wheelSpinOut_mc = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9999,scaleY:0.9999,rotation:-720,x:38.05},44,cjs.Ease.cubicIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-15.5,107.19999999999999,107.1);


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


(lib.CL_AnimationOut_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag/C7QhHhAgZg0QgWguAIgvQAJg6AGgNQALgdAigUQAygeBZgyIAZAPQAdAWAZAhQBNBpgGCuQgFATgYAXQgZAZghAPQgiAOgeAAQgvAAgpgkg");
	mask.setTransform(164.9185,169.8367);

	// wheelSpin_mc
	this.instance = new lib.CL_wheelSpinOut_mc();
	this.instance.setTransform(184.5,153,0.4622,0.4797,0,0,180);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wheelSpin_mc
	this.instance_1 = new lib.CL_wheelSpinOut_mc();
	this.instance_1.setTransform(51.15,164.75,0.2201,0.3716,0,0,180,36.6,43.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// vehicle_mc
	this.instance_2 = new lib.CL_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CL_AnimationOut_mc, new cjs.Rectangle(0,0,300,250), null);


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
	this.instance.setTransform(255.8,92.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91).to({_off:false},0).wait(51));

	// Layer_10
	this.instance_1 = new lib.sparkle_anim();
	this.instance_1.setTransform(87.35,151.2,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).wait(79));

	// Layer_9
	this.instance_2 = new lib.sparkle_anim();
	this.instance_2.setTransform(47.5,92.55,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).wait(108));

	// Layer_15
	this.instance_3 = new lib.star();
	this.instance_3.setTransform(226.7,223.8,0.8765,0.8765,-14.9997,0,0,5.7,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(142));

	// Layer_14
	this.instance_4 = new lib.star2();
	this.instance_4.setTransform(257.75,263.95,1.0059,1.0059,0,165.0016,-14.9984,5.8,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(142));

	// Layer_13
	this.instance_5 = new lib.star2();
	this.instance_5.setTransform(58.8,241,1.0186,1.0186,0,-104.9978,75.0022,5.8,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(142));

	// Layer_12
	this.instance_6 = new lib.star2();
	this.instance_6.setTransform(59.75,153.6,1,1,150,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(142));

	// Layer_8
	this.instance_7 = new lib.star();
	this.instance_7.setTransform(44.95,65.05,0.9078,0.9078,-29.9984,0,0,5.9,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(142));

	// Layer_7
	this.instance_8 = new lib.star2();
	this.instance_8.setTransform(259.65,39.85,0.6927,0.6927,-14.9991,0,0,5.7,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(142));

	// Layer_6
	this.instance_9 = new lib.star2();
	this.instance_9.setTransform(247.7,162.1,0.9606,0.9606,44.9994,0,0,5.8,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(142));

	// Layer_5
	this.instance_10 = new lib.star();
	this.instance_10.setTransform(210.55,59.85,0.7415,0.7415,45,0,0,5.7,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(142));

	// Layer_4
	this.instance_11 = new lib.star();
	this.instance_11.setTransform(176.7,35.8,0.8765,0.8765,-14.9997,0,0,5.7,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(142));

	// Layer_3
	this.instance_12 = new lib.star();
	this.instance_12.setTransform(119.55,189.9,0.8731,0.8731,59.9981,0,0,5.8,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(142));

	// Layer_2
	this.instance_13 = new lib.star2();
	this.instance_13.setTransform(100.45,29.85,1,1,74.9998,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(142));

	// Layer_1
	this.instance_14 = new lib.text5();
	this.instance_14.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(142));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.text4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_11 copy
	this.instance = new lib.sparkle_anim();
	this.instance.setTransform(69.8,110.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).wait(35));

	// Layer_11
	this.instance_1 = new lib.sparkle_anim();
	this.instance_1.setTransform(214.8,51.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42).to({_off:false},0).wait(78));

	// Layer_10
	this.instance_2 = new lib.sparkle_anim();
	this.instance_2.setTransform(249.35,58.2,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},0).wait(56));

	// Layer_9
	this.instance_3 = new lib.sparkle_anim();
	this.instance_3.setTransform(189.5,196.55,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).wait(94));

	// Layer_15
	this.instance_4 = new lib.star2();
	this.instance_4.setTransform(255.8,247.6,1,1,74.9998,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Layer_14
	this.instance_5 = new lib.star();
	this.instance_5.setTransform(220.25,203,0.963,0.963,0,-0.0018,179.9982,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Layer_12
	this.instance_6 = new lib.star();
	this.instance_6.setTransform(50.1,131.1,0.8919,0.8919,0,-60.0008,119.9992,5.5,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// Layer_8
	this.instance_7 = new lib.star();
	this.instance_7.setTransform(34.35,42.95,0.8064,0.8064,-14.9987,0,0,5.5,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Layer_7
	this.instance_8 = new lib.star2();
	this.instance_8.setTransform(194.4,27.8,1,1,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// Layer_6
	this.instance_9 = new lib.star2();
	this.instance_9.setTransform(244.4,149.8,0.8835,0.8835,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	// Layer_5
	this.instance_10 = new lib.star();
	this.instance_10.setTransform(261.55,60.85,0.7415,0.7415,45,0,0,5.7,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	// Layer_3
	this.instance_11 = new lib.star();
	this.instance_11.setTransform(83.5,221.85,0.7325,0.7325,29.9991,0,0,5.7,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(120));

	// Layer_2
	this.instance_12 = new lib.star2();
	this.instance_12.setTransform(36.45,191.85,1,1,74.9998,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(120));

	// Layer_1
	this.instance_13 = new lib.text4();
	this.instance_13.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.text3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_11
	this.instance = new lib.sparkle_anim();
	this.instance.setTransform(67.8,150.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(77).to({_off:false},0).wait(43));

	// Layer_10
	this.instance_1 = new lib.sparkle_anim();
	this.instance_1.setTransform(232.35,150.2,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51).to({_off:false},0).wait(69));

	// Layer_9
	this.instance_2 = new lib.sparkle_anim();
	this.instance_2.setTransform(108.5,54.55,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).wait(98));

	// Layer_14
	this.instance_3 = new lib.star();
	this.instance_3.setTransform(259.6,111.8,0.9324,0.9324,74.9997,0,0,5.7,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// Layer_13
	this.instance_4 = new lib.star();
	this.instance_4.setTransform(174.45,246.95,0.9177,0.9177,0,-74.9977,105.0023,5.8,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Layer_12
	this.instance_5 = new lib.star2();
	this.instance_5.setTransform(90.15,218,1.0905,1.0905,0,-89.9992,90.0008,5.5,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Layer_8
	this.instance_6 = new lib.star();
	this.instance_6.setTransform(80.5,109.8,0.8835,0.8835,0,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// Layer_7
	this.instance_7 = new lib.star2();
	this.instance_7.setTransform(255.5,36.85,0.9552,0.9552,0,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Layer_5
	this.instance_8 = new lib.star();
	this.instance_8.setTransform(228.5,208.85,0.9324,0.9324,45,0,0,5.7,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// Layer_4
	this.instance_9 = new lib.star();
	this.instance_9.setTransform(36.15,35.05,0.9736,0.9736,-15.0003,0,0,5.7,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	// Layer_3
	this.instance_10 = new lib.star();
	this.instance_10.setTransform(33.5,142.9,0.9177,0.9177,44.998,0,0,5.8,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	// Layer_1
	this.instance_11 = new lib.text3();
	this.instance_11.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.text2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_11
	this.instance = new lib.sparkle_anim();
	this.instance.setTransform(107.8,52.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(76).to({_off:false},0).wait(44));

	// Layer_10
	this.instance_1 = new lib.sparkle_anim();
	this.instance_1.setTransform(72.35,123.2,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).wait(70));

	// Layer_9
	this.instance_2 = new lib.sparkle_anim();
	this.instance_2.setTransform(222.5,189.55,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).wait(98));

	// Layer_12
	this.instance_3 = new lib.star();
	this.instance_3.setTransform(261.8,218.05,0.89,0.89,29.9988,0,0,5.7,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// Layer_8
	this.instance_4 = new lib.star();
	this.instance_4.setTransform(87.5,32.8,0.8835,0.8835,0,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Layer_7
	this.instance_5 = new lib.star2();
	this.instance_5.setTransform(256.4,67.8,1,1,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Layer_6
	this.instance_6 = new lib.star2();
	this.instance_6.setTransform(243.4,151.8,0.8835,0.8835,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// Layer_5
	this.instance_7 = new lib.star();
	this.instance_7.setTransform(123.55,238.85,0.7415,0.7415,45,0,0,5.7,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Layer_4
	this.instance_8 = new lib.star();
	this.instance_8.setTransform(34.65,69.95,1.1074,1.1074,-30.001,0,0,5.5,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// Layer_3
	this.instance_9 = new lib.star();
	this.instance_9.setTransform(49.5,208.85,0.7325,0.7325,29.9991,0,0,5.7,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	// Layer_2
	this.instance_10 = new lib.star2();
	this.instance_10.setTransform(213.45,30.85,1,1,74.9998,0,0,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	// Layer_1
	this.instance_11 = new lib.text2();
	this.instance_11.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.text1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_11
	this.instance = new lib.sparkle_anim();
	this.instance.setTransform(68.8,90.5,1.2106,1.2106,0,0,0,6,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).wait(31));

	// Layer_10
	this.instance_1 = new lib.sparkle_anim();
	this.instance_1.setTransform(232.35,67.2,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).wait(61));

	// Layer_9
	this.instance_2 = new lib.sparkle_anim();
	this.instance_2.setTransform(248.5,177.55,1.2106,1.2106,0,0,0,6,6.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(96));

	// Layer_12
	this.instance_3 = new lib.star();
	this.instance_3.setTransform(122,201.95,0.8496,0.8496,-75.0019,0,0,5.9,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// Layer_8
	this.instance_4 = new lib.star();
	this.instance_4.setTransform(68,27.95,0.8835,0.8835,0,0,180,5.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Layer_7
	this.instance_5 = new lib.star2();
	this.instance_5.setTransform(257.4,22.8,1,1,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Layer_6
	this.instance_6 = new lib.star2();
	this.instance_6.setTransform(265.15,214.05,1.0732,1.2878,29.9975,0,0,5.8,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// Layer_5
	this.instance_7 = new lib.star();
	this.instance_7.setTransform(257.05,117.95,0.7415,0.7415,-45.0008,0,0,5.7,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Layer_4
	this.instance_8 = new lib.star();
	this.instance_8.setTransform(167.95,35,0.9067,0.9067,135,0,0,5.5,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// Layer_3
	this.instance_9 = new lib.star();
	this.instance_9.setTransform(32.05,220.1,0.8497,0.8497,59.9989,0,0,5.9,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	// Layer_2
	this.instance_10 = new lib.star2();
	this.instance_10.setTransform(40.05,113.2,0.9496,0.9496,44.9987,0,0,5.8,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	// Layer_1
	this.instance_11 = new lib.text1();
	this.instance_11.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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
	this.frame_224 = function() {
		var tl = this;
		tl.stop();
		var delay = 1000;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_315 = function() {
		var tl = this;
		tl.stop();
		var delay = 1000;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_379 = function() {
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
	this.frame_443 = function() {
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
	this.frame_516 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(91).call(this.frame_91).wait(60).call(this.frame_151).wait(73).call(this.frame_224).wait(91).call(this.frame_315).wait(64).call(this.frame_379).wait(64).call(this.frame_443).wait(73).call(this.frame_516).wait(2));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,1,1).p("EgXegu3MAu9AAAMAAABdvMgu9AAAg");
	this.shape.setTransform(150.25,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(518));

	// details_btn
	this.details_btn = new lib.details_btn();
	this.details_btn.name = "details_btn";
	this.details_btn.setTransform(135.75,518.95,0.8374,0.7194);
	new cjs.ButtonHelper(this.details_btn, 0, 1, 2, false, new lib.details_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.details_btn).wait(518));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(150,300,1,2.4,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(518));

	// pageFlip5
	this.instance = new lib.pageFlip_1();
	this.instance.setTransform(320.15,620.05,0.4908,0.4908,0,0,0,57.2,57.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(443).to({_off:false},0).wait(1).to({regX:57,regY:57.1,scaleX:0.7,scaleY:0.7,x:310.05,y:606.5},0).wait(1).to({scaleX:0.9114,scaleY:0.9114,x:300,y:593.05},0).wait(1).to({scaleX:1.1239,scaleY:1.1239,x:289.9,y:579.45},0).wait(1).to({scaleX:1.3366,scaleY:1.3366,x:279.8,y:565.85},0).wait(1).to({scaleX:1.5487,scaleY:1.5487,x:269.7,y:552.35},0).wait(1).to({scaleX:1.759,scaleY:1.759,x:259.7,y:538.95},0).wait(1).to({scaleX:1.9667,scaleY:1.9667,x:249.85,y:525.65},0).wait(1).to({scaleX:2.1708,scaleY:2.1708,x:240.15,y:512.6},0).wait(1).to({scaleX:2.3707,scaleY:2.3707,x:230.65,y:499.85},0).wait(1).to({scaleX:2.5656,scaleY:2.5656,x:221.4,y:487.4},0).wait(1).to({scaleX:2.7548,scaleY:2.7548,x:212.35,y:475.35},0).wait(1).to({scaleX:2.9379,scaleY:2.9379,x:203.65,y:463.65},0).wait(1).to({scaleX:3.1145,scaleY:3.1145,x:195.25,y:452.35},0).wait(1).to({scaleX:3.2843,scaleY:3.2843,x:187.2,y:441.55},0).wait(1).to({scaleX:3.4472,scaleY:3.4472,x:179.55,y:431.15},0).wait(1).to({scaleX:3.603,scaleY:3.603,x:172.1,y:421.2},0).wait(1).to({regX:57.1,regY:57.5,scaleX:3.7516,scaleY:3.7516,x:165.75,y:412.8},0).wait(1).to({regX:57,regY:57.1,scaleX:3.747,scaleY:3.747,x:158.9,y:373.55},0).wait(1).to({scaleX:3.7425,scaleY:3.7425,x:152.7,y:337.7},0).wait(1).to({scaleX:3.7383,scaleY:3.7383,x:146.85,y:303.65},0).wait(1).to({scaleX:3.7343,scaleY:3.7343,x:141.25,y:271.4},0).wait(1).to({scaleX:3.7305,scaleY:3.7305,x:136,y:240.9},0).wait(1).to({scaleX:3.7269,scaleY:3.7269,x:131,y:212.15},0).wait(1).to({scaleX:3.7235,scaleY:3.7235,x:126.3,y:184.95},0).wait(1).to({scaleX:3.7203,scaleY:3.7203,x:121.85,y:159.35},0).wait(1).to({scaleX:3.7173,scaleY:3.7173,x:117.7,y:135.25},0).wait(1).to({scaleX:3.7145,scaleY:3.7145,x:113.8,y:112.65},0).wait(1).to({scaleX:3.7119,scaleY:3.7119,x:110.15,y:91.4},0).wait(1).to({scaleX:3.7094,scaleY:3.7094,x:106.7,y:71.55},0).wait(1).to({scaleX:3.7071,scaleY:3.7071,x:103.5,y:52.95},0).wait(1).to({scaleX:3.7049,scaleY:3.7049,x:100.5,y:35.65},0).wait(1).to({scaleX:3.7029,scaleY:3.7029,x:97.7,y:19.55},0).wait(1).to({scaleX:3.701,scaleY:3.701,x:95.1,y:4.55},0).wait(1).to({scaleX:3.6993,scaleY:3.6993,x:92.7,y:-9.3},0).wait(1).to({scaleX:3.6977,scaleY:3.6977,x:90.5,y:-22.15},0).wait(1).to({scaleX:3.6963,scaleY:3.6963,x:88.5,y:-34},0).wait(1).to({scaleX:3.6949,scaleY:3.6949,x:86.6,y:-44.8},0).wait(1).to({scaleX:3.6937,scaleY:3.6937,x:84.9,y:-54.75},0).wait(1).to({scaleX:3.6926,scaleY:3.6926,x:83.35,y:-63.7},0).wait(1).to({scaleX:3.6915,scaleY:3.6915,x:81.9,y:-71.85},0).wait(1).to({scaleX:3.6906,scaleY:3.6906,x:80.65,y:-79.2},0).wait(1).to({scaleX:3.6898,scaleY:3.6898,x:79.5,y:-85.7},0).wait(1).to({scaleX:3.6891,scaleY:3.6891,x:78.55,y:-91.45},0).wait(1).to({scaleX:3.6885,scaleY:3.6885,x:77.65,y:-96.5},0).wait(1).to({scaleX:3.6879,scaleY:3.6879,x:76.9,y:-100.75},0).wait(1).to({regX:57.1,regY:56.9,scaleX:3.6875,scaleY:3.6875,x:77,y:-103.15},0).to({_off:true},1).wait(28));

	// cta
	this.instance_1 = new lib.cta_1();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(472).to({_off:false},0).to({alpha:1},44,cjs.Ease.quadOut).wait(2));

	// options
	this.instance_2 = new lib.options_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(472).to({_off:false},0).to({alpha:1},44,cjs.Ease.quadOut).wait(2));

	// details
	this.instance_3 = new lib.details_1();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(472).to({_off:false},0).to({alpha:1},44,cjs.Ease.quadOut).wait(2));

	// offer_mc
	this.offer_mc = new lib.offer_mc();
	this.offer_mc.name = "offer_mc";
	this.offer_mc.setTransform(121.05,514.25,1,1,0,0,0,93,44);
	this.offer_mc.alpha = 0;
	this.offer_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.offer_mc).wait(472).to({_off:false},0).to({alpha:1},44,cjs.Ease.quadOut).wait(2));

	// offerTitle
	this.instance_4 = new lib.offerTitle_1();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(472).to({_off:false},0).to({alpha:1},44,cjs.Ease.quadOut).wait(2));

	// Camry copy
	this.instance_5 = new lib.CY_AnimationIn_mc();
	this.instance_5.setTransform(-147.8,348.9,0.7652,0.7652,0,0,0,149.7,125.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(472).to({_off:false},0).to({regX:149.9,regY:125.4,scaleX:0.9246,scaleY:0.9246,x:153.5,y:377.55},44,cjs.Ease.cubicOut).wait(2));

	// WT4 copy 2
	this.instance_6 = new lib.whiteTree_1();
	this.instance_6.setTransform(145.7,348.95,1.074,1.074,0,0,0,299.2,64.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(488).to({_off:false},0).wait(30));

	// RT2 copy 2
	this.instance_7 = new lib.redTree_1();
	this.instance_7.setTransform(193.85,306.05,1.0655,1.0655,0,0,0,298.9,64.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(472).to({_off:false},0).wait(46));

	// logo copy 2
	this.instance_8 = new lib.logo_1();
	this.instance_8.setTransform(150,-308,1,1,0,0,0,150,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(467).to({_off:false},0).wait(51));

	// pageFlip4
	this.instance_9 = new lib.pageFlip_1();
	this.instance_9.setTransform(320.15,620.05,0.4908,0.4908,0,0,0,57.2,57.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(379).to({_off:false},0).wait(1).to({regX:57,regY:57.1,scaleX:0.7,scaleY:0.7,x:310.05,y:606.5},0).wait(1).to({scaleX:0.9114,scaleY:0.9114,x:300,y:593.05},0).wait(1).to({scaleX:1.1239,scaleY:1.1239,x:289.9,y:579.45},0).wait(1).to({scaleX:1.3366,scaleY:1.3366,x:279.8,y:565.85},0).wait(1).to({scaleX:1.5487,scaleY:1.5487,x:269.7,y:552.35},0).wait(1).to({scaleX:1.759,scaleY:1.759,x:259.7,y:538.95},0).wait(1).to({scaleX:1.9667,scaleY:1.9667,x:249.85,y:525.65},0).wait(1).to({scaleX:2.1708,scaleY:2.1708,x:240.15,y:512.6},0).wait(1).to({scaleX:2.3707,scaleY:2.3707,x:230.65,y:499.85},0).wait(1).to({scaleX:2.5656,scaleY:2.5656,x:221.4,y:487.4},0).wait(1).to({scaleX:2.7548,scaleY:2.7548,x:212.35,y:475.35},0).wait(1).to({scaleX:2.9379,scaleY:2.9379,x:203.65,y:463.65},0).wait(1).to({scaleX:3.1145,scaleY:3.1145,x:195.25,y:452.35},0).wait(1).to({scaleX:3.2843,scaleY:3.2843,x:187.2,y:441.55},0).wait(1).to({scaleX:3.4472,scaleY:3.4472,x:179.55,y:431.15},0).wait(1).to({scaleX:3.603,scaleY:3.603,x:172.1,y:421.2},0).wait(1).to({regX:57.1,regY:57.5,scaleX:3.7516,scaleY:3.7516,x:165.75,y:412.8},0).wait(1).to({regX:57,regY:57.1,scaleX:3.747,scaleY:3.747,x:158.9,y:373.55},0).wait(1).to({scaleX:3.7425,scaleY:3.7425,x:152.7,y:337.7},0).wait(1).to({scaleX:3.7383,scaleY:3.7383,x:146.85,y:303.65},0).wait(1).to({scaleX:3.7343,scaleY:3.7343,x:141.25,y:271.4},0).wait(1).to({scaleX:3.7305,scaleY:3.7305,x:136,y:240.9},0).wait(1).to({scaleX:3.7269,scaleY:3.7269,x:131,y:212.15},0).wait(1).to({scaleX:3.7235,scaleY:3.7235,x:126.3,y:184.95},0).wait(1).to({scaleX:3.7203,scaleY:3.7203,x:121.85,y:159.35},0).wait(1).to({scaleX:3.7173,scaleY:3.7173,x:117.7,y:135.25},0).wait(1).to({scaleX:3.7145,scaleY:3.7145,x:113.8,y:112.65},0).wait(1).to({scaleX:3.7119,scaleY:3.7119,x:110.15,y:91.4},0).wait(1).to({scaleX:3.7094,scaleY:3.7094,x:106.7,y:71.55},0).wait(1).to({scaleX:3.7071,scaleY:3.7071,x:103.5,y:52.95},0).wait(1).to({scaleX:3.7049,scaleY:3.7049,x:100.5,y:35.65},0).wait(1).to({scaleX:3.7029,scaleY:3.7029,x:97.7,y:19.55},0).wait(1).to({scaleX:3.701,scaleY:3.701,x:95.1,y:4.55},0).wait(1).to({scaleX:3.6993,scaleY:3.6993,x:92.7,y:-9.3},0).wait(1).to({scaleX:3.6977,scaleY:3.6977,x:90.5,y:-22.15},0).wait(1).to({scaleX:3.6963,scaleY:3.6963,x:88.5,y:-34},0).wait(1).to({scaleX:3.6949,scaleY:3.6949,x:86.6,y:-44.8},0).wait(1).to({scaleX:3.6937,scaleY:3.6937,x:84.9,y:-54.75},0).wait(1).to({scaleX:3.6926,scaleY:3.6926,x:83.35,y:-63.7},0).wait(1).to({scaleX:3.6915,scaleY:3.6915,x:81.9,y:-71.85},0).wait(1).to({scaleX:3.6906,scaleY:3.6906,x:80.65,y:-79.2},0).wait(1).to({scaleX:3.6898,scaleY:3.6898,x:79.5,y:-85.7},0).wait(1).to({scaleX:3.6891,scaleY:3.6891,x:78.55,y:-91.45},0).wait(1).to({scaleX:3.6885,scaleY:3.6885,x:77.65,y:-96.5},0).wait(1).to({scaleX:3.6879,scaleY:3.6879,x:76.9,y:-100.75},0).wait(1).to({regX:57.1,regY:56.9,scaleX:3.6875,scaleY:3.6875,x:77,y:-103.15},0).to({_off:true},1).wait(92));

	// mask copy 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_443 = new cjs.Graphics().p("EhVHADOMBfShXyMBK+BRXMhfTBXyg");
	var mask_graphics_444 = new cjs.Graphics().p("EhVHADTMBfOhX4MBLBBRTMhfNBX4g");
	var mask_graphics_445 = new cjs.Graphics().p("EhVHADYMBfJhX9MBLGBRPMhfJBX8g");
	var mask_graphics_446 = new cjs.Graphics().p("EhVHADcMBfFhYCMBLKBRLMhfEBYBg");
	var mask_graphics_447 = new cjs.Graphics().p("EhVHADgMBfAhYGMBLPBRGMhfABYHg");
	var mask_graphics_448 = new cjs.Graphics().p("EhVHADlMBe7hYMMBLUBRDMhe7BYMg");
	var mask_graphics_449 = new cjs.Graphics().p("EhVGADqMBe2hYRMBLXBQ+Mhe2BYRg");
	var mask_graphics_450 = new cjs.Graphics().p("EhVGADuMBeyhYWMBLbBQ7MhexBYWg");
	var mask_graphics_451 = new cjs.Graphics().p("EhVFADzMBeshYbMBLfBQ2MhesBYbg");
	var mask_graphics_452 = new cjs.Graphics().p("EhVFAD3MBeohYfMBLkBQyMhepBYfg");
	var mask_graphics_453 = new cjs.Graphics().p("EhVFAD7MBekhYkMBLnBQvMhejBYkg");
	var mask_graphics_454 = new cjs.Graphics().p("EhVFAD/MBeghYpMBLrBQsMhefBYpg");
	var mask_graphics_455 = new cjs.Graphics().p("EhVFAEDMBechYtMBLvBQoMhecBYtg");
	var mask_graphics_456 = new cjs.Graphics().p("EhVFAEHMBeYhYxMBLzBQkMheYBYxg");
	var mask_graphics_457 = new cjs.Graphics().p("EhVFAELMBeVhY2MBL1BQhMheTBY2g");
	var mask_graphics_458 = new cjs.Graphics().p("EhVEAEOMBeQhY5MBL5BQdMheQBY6g");
	var mask_graphics_459 = new cjs.Graphics().p("EhVEAESMBeNhY9MBL8BQbMheMBY8g");
	var mask_graphics_460 = new cjs.Graphics().p("EhVEAEVMBeJhZBMBMABQYMheJBZBg");
	var mask_graphics_461 = new cjs.Graphics().p("EhVEAEYMBeGhZEMBMDBQVMheFBZEg");
	var mask_graphics_462 = new cjs.Graphics().p("EhVEAEbMBeDhZHMBMGBQSMheCBZHg");
	var mask_graphics_463 = new cjs.Graphics().p("EhVDAEeMBd/hZLMBMJBQQMheABZLg");
	var mask_graphics_464 = new cjs.Graphics().p("EhVDAEhMBd8hZOMBMMBQNMhd9BZOg");
	var mask_graphics_465 = new cjs.Graphics().p("EhVDAEkMBd5hZSMBMOBQLMhd5BZRg");
	var mask_graphics_466 = new cjs.Graphics().p("EhVDAEnMBd3hZVMBMQBQIMhd2BZVg");
	var mask_graphics_467 = new cjs.Graphics().p("EhVDAEpMBd0hZXMBMTBQGMhd0BZXg");
	var mask_graphics_468 = new cjs.Graphics().p("EhVDAEsMBdyhZaMBMVBQEMhdyBZZg");
	var mask_graphics_469 = new cjs.Graphics().p("EhVDAEuMBdwhZdMBMXBQDMhdvBZcg");
	var mask_graphics_470 = new cjs.Graphics().p("EhVDAEwMBduhZfMBMZBQAMhduBZfg");
	var mask_graphics_471 = new cjs.Graphics().p("EhVDAEyMBdshZhMBMaBP+MhdqBZhg");
	var mask_graphics_472 = new cjs.Graphics().p("EhVDAEzMBdqhZiMBMdBP8MhdqBZjg");
	var mask_graphics_473 = new cjs.Graphics().p("EhVCAE1MBdohZkMBMdBP7MhdnBZkg");
	var mask_graphics_474 = new cjs.Graphics().p("EhVDAE2MBdnhZlMBMgBP5MhdnBZmg");
	var mask_graphics_475 = new cjs.Graphics().p("EhVCAE5MBdkhZpMBMhBP5MhdkBZog");
	var mask_graphics_476 = new cjs.Graphics().p("EhVCAE6MBdjhZqMBMiBP4MhdjBZpg");
	var mask_graphics_477 = new cjs.Graphics().p("EhVCAE7MBdihZrMBMjBP2MhdiBZrg");
	var mask_graphics_478 = new cjs.Graphics().p("EhVCAE8MBdghZsMBMlBP1MhdhBZsg");
	var mask_graphics_479 = new cjs.Graphics().p("EhVCAE9MBdghZtMBMlBP0MhdgBZtg");
	var mask_graphics_480 = new cjs.Graphics().p("EhVCAE+MBdfhZuMBMmBPzMhdeBZug");
	var mask_graphics_481 = new cjs.Graphics().p("EhVCAE/MBdehZvMBMnBPyMhddBZvg");
	var mask_graphics_482 = new cjs.Graphics().p("EhVCAFAMBddhZwMBMoBPyMhddBZvg");
	var mask_graphics_483 = new cjs.Graphics().p("EhVCAFAMBdchZwMBMpBPwMhdcBZxg");
	var mask_graphics_484 = new cjs.Graphics().p("EhVCAFBMBdchZyMBMpBPxMhdcBZxg");
	var mask_graphics_485 = new cjs.Graphics().p("EhVCAFBMBdbhZxMBMqBPwMhdbBZxg");
	var mask_graphics_486 = new cjs.Graphics().p("EhVCAFCMBdbhZzMBMqBPwMhdbBZzg");
	var mask_graphics_487 = new cjs.Graphics().p("EhVCAFDMBdahZ0MBMrBPwMhdaBZzg");
	var mask_graphics_488 = new cjs.Graphics().p("EhVCAFDMBdahZ0MBMrBPvMhdZBZ0g");
	var mask_graphics_489 = new cjs.Graphics().p("EhVCAFDMBdZhZ0MBMsBPvMhdZBZ0g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(443).to({graphics:mask_graphics_443,x:143.25,y:300.025}).wait(1).to({graphics:mask_graphics_444,x:131.325,y:288.275}).wait(1).to({graphics:mask_graphics_445,x:119.325,y:276.375}).wait(1).to({graphics:mask_graphics_446,x:107.225,y:264.45}).wait(1).to({graphics:mask_graphics_447,x:95.125,y:252.5}).wait(1).to({graphics:mask_graphics_448,x:83.05,y:240.575}).wait(1).to({graphics:mask_graphics_449,x:71.1,y:228.775}).wait(1).to({graphics:mask_graphics_450,x:59.275,y:217.075}).wait(1).to({graphics:mask_graphics_451,x:47.65,y:205.6}).wait(1).to({graphics:mask_graphics_452,x:36.3,y:194.4}).wait(1).to({graphics:mask_graphics_453,x:25.175,y:183.45}).wait(1).to({graphics:mask_graphics_454,x:14.425,y:172.8}).wait(1).to({graphics:mask_graphics_455,x:4,y:162.5}).wait(1).to({graphics:mask_graphics_456,x:-6.025,y:152.575}).wait(1).to({graphics:mask_graphics_457,x:-15.7,y:143.025}).wait(1).to({graphics:mask_graphics_458,x:-24.975,y:133.9}).wait(1).to({graphics:mask_graphics_459,x:-33.825,y:125.125}).wait(1).to({graphics:mask_graphics_460,x:-42.3,y:116.775}).wait(1).to({graphics:mask_graphics_461,x:-51.25,y:82.2}).wait(1).to({graphics:mask_graphics_462,x:-59.775,y:49.325}).wait(1).to({graphics:mask_graphics_463,x:-67.85,y:18.125}).wait(1).to({graphics:mask_graphics_464,x:-75.5,y:-11.425}).wait(1).to({graphics:mask_graphics_465,x:-82.725,y:-39.4}).wait(1).to({graphics:mask_graphics_466,x:-89.575,y:-65.825}).wait(1).to({graphics:mask_graphics_467,x:-96,y:-90.75}).wait(1).to({graphics:mask_graphics_468,x:-102.1,y:-114.225}).wait(1).to({graphics:mask_graphics_469,x:-107.825,y:-136.3}).wait(1).to({graphics:mask_graphics_470,x:-113.175,y:-157.025}).wait(1).to({graphics:mask_graphics_471,x:-118.2,y:-176.475}).wait(1).to({graphics:mask_graphics_472,x:-122.925,y:-194.7}).wait(1).to({graphics:mask_graphics_473,x:-127.35,y:-211.725}).wait(1).to({graphics:mask_graphics_474,x:-131.45,y:-227.6}).wait(1).to({graphics:mask_graphics_475,x:-135.275,y:-242.4}).wait(1).to({graphics:mask_graphics_476,x:-138.825,y:-256.125}).wait(1).to({graphics:mask_graphics_477,x:-142.125,y:-268.825}).wait(1).to({graphics:mask_graphics_478,x:-145.15,y:-280.6}).wait(1).to({graphics:mask_graphics_479,x:-147.95,y:-291.425}).wait(1).to({graphics:mask_graphics_480,x:-150.55,y:-301.375}).wait(1).to({graphics:mask_graphics_481,x:-152.9,y:-310.425}).wait(1).to({graphics:mask_graphics_482,x:-155.025,y:-318.7}).wait(1).to({graphics:mask_graphics_483,x:-156.95,y:-326.15}).wait(1).to({graphics:mask_graphics_484,x:-158.7,y:-332.85}).wait(1).to({graphics:mask_graphics_485,x:-160.225,y:-338.85}).wait(1).to({graphics:mask_graphics_486,x:-161.6,y:-344.125}).wait(1).to({graphics:mask_graphics_487,x:-162.775,y:-348.725}).wait(1).to({graphics:mask_graphics_488,x:-163.825,y:-352.675}).wait(1).to({graphics:mask_graphics_489,x:-164.675,y:-355.975}).wait(1).to({graphics:null,x:0,y:0}).wait(28));

	// logo copy
	this.instance_10 = new lib.logo_1();
	this.instance_10.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(399).to({_off:false},0).to({_off:true},91).wait(28));

	// text5
	this.instance_11 = new lib.text5_1();
	this.instance_11.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(408).to({_off:false},0).to({alpha:1},35,cjs.Ease.cubicOut).to({_off:true},47).wait(28));

	// Camry
	this.instance_12 = new lib.CY_AnimationIn_mc();
	this.instance_12.setTransform(-151.7,350.55,0.7766,0.7766,0,0,0,149.7,125.8);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(399).to({_off:false},0).to({regX:150,regY:125.4,scaleX:0.9384,scaleY:0.9384,x:154.1,y:379.7},44,cjs.Ease.cubicOut).to({_off:true},47).wait(28));

	// WT1
	this.instance_13 = new lib.whiteTree_1();
	this.instance_13.setTransform(147,362.6,1,1,0,0,0,298,69);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(426).to({_off:false},0).to({_off:true},64).wait(28));

	// RT copy
	this.instance_14 = new lib.redTree_1();
	this.instance_14.setTransform(205.45,324.8,0.8899,0.8899,0,0,0,298.9,64.3);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(399).to({_off:false},0).to({_off:true},91).wait(28));

	// RT
	this.instance_15 = new lib.redTree_1();
	this.instance_15.setTransform(97.95,325,0.8899,0.8899,0,0,0,298.9,64.3);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(414).to({_off:false},0).to({_off:true},76).wait(28));

	// pageFlip3
	this.instance_16 = new lib.pageFlip_1();
	this.instance_16.setTransform(320.15,620.05,0.4908,0.4908,0,0,0,57.2,57.4);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(315).to({_off:false},0).wait(1).to({regX:57,regY:57.1,scaleX:0.7,scaleY:0.7,x:310.05,y:606.5},0).wait(1).to({scaleX:0.9114,scaleY:0.9114,x:300,y:593.05},0).wait(1).to({scaleX:1.1239,scaleY:1.1239,x:289.9,y:579.45},0).wait(1).to({scaleX:1.3366,scaleY:1.3366,x:279.8,y:565.85},0).wait(1).to({scaleX:1.5487,scaleY:1.5487,x:269.7,y:552.35},0).wait(1).to({scaleX:1.759,scaleY:1.759,x:259.7,y:538.95},0).wait(1).to({scaleX:1.9667,scaleY:1.9667,x:249.85,y:525.65},0).wait(1).to({scaleX:2.1708,scaleY:2.1708,x:240.15,y:512.6},0).wait(1).to({scaleX:2.3707,scaleY:2.3707,x:230.65,y:499.85},0).wait(1).to({scaleX:2.5656,scaleY:2.5656,x:221.4,y:487.4},0).wait(1).to({scaleX:2.7548,scaleY:2.7548,x:212.35,y:475.35},0).wait(1).to({scaleX:2.9379,scaleY:2.9379,x:203.65,y:463.65},0).wait(1).to({scaleX:3.1145,scaleY:3.1145,x:195.25,y:452.35},0).wait(1).to({scaleX:3.2843,scaleY:3.2843,x:187.2,y:441.55},0).wait(1).to({scaleX:3.4472,scaleY:3.4472,x:179.55,y:431.15},0).wait(1).to({scaleX:3.603,scaleY:3.603,x:172.1,y:421.2},0).wait(1).to({regX:57.1,regY:57.5,scaleX:3.7516,scaleY:3.7516,x:165.75,y:412.8},0).wait(1).to({regX:57,regY:57.1,scaleX:3.747,scaleY:3.747,x:158.9,y:373.55},0).wait(1).to({scaleX:3.7425,scaleY:3.7425,x:152.7,y:337.7},0).wait(1).to({scaleX:3.7383,scaleY:3.7383,x:146.85,y:303.65},0).wait(1).to({scaleX:3.7343,scaleY:3.7343,x:141.25,y:271.4},0).wait(1).to({scaleX:3.7305,scaleY:3.7305,x:136,y:240.9},0).wait(1).to({scaleX:3.7269,scaleY:3.7269,x:131,y:212.15},0).wait(1).to({scaleX:3.7235,scaleY:3.7235,x:126.3,y:184.95},0).wait(1).to({scaleX:3.7203,scaleY:3.7203,x:121.85,y:159.35},0).wait(1).to({scaleX:3.7173,scaleY:3.7173,x:117.7,y:135.25},0).wait(1).to({scaleX:3.7145,scaleY:3.7145,x:113.8,y:112.65},0).wait(1).to({scaleX:3.7119,scaleY:3.7119,x:110.15,y:91.4},0).wait(1).to({scaleX:3.7094,scaleY:3.7094,x:106.7,y:71.55},0).wait(1).to({scaleX:3.7071,scaleY:3.7071,x:103.5,y:52.95},0).wait(1).to({scaleX:3.7049,scaleY:3.7049,x:100.5,y:35.65},0).wait(1).to({scaleX:3.7029,scaleY:3.7029,x:97.7,y:19.55},0).wait(1).to({scaleX:3.701,scaleY:3.701,x:95.1,y:4.55},0).wait(1).to({scaleX:3.6993,scaleY:3.6993,x:92.7,y:-9.3},0).wait(1).to({scaleX:3.6977,scaleY:3.6977,x:90.5,y:-22.15},0).wait(1).to({scaleX:3.6963,scaleY:3.6963,x:88.5,y:-34},0).wait(1).to({scaleX:3.6949,scaleY:3.6949,x:86.6,y:-44.8},0).wait(1).to({scaleX:3.6937,scaleY:3.6937,x:84.9,y:-54.75},0).wait(1).to({scaleX:3.6926,scaleY:3.6926,x:83.35,y:-63.7},0).wait(1).to({scaleX:3.6915,scaleY:3.6915,x:81.9,y:-71.85},0).wait(1).to({scaleX:3.6906,scaleY:3.6906,x:80.65,y:-79.2},0).wait(1).to({scaleX:3.6898,scaleY:3.6898,x:79.5,y:-85.7},0).wait(1).to({scaleX:3.6891,scaleY:3.6891,x:78.55,y:-91.45},0).wait(1).to({scaleX:3.6885,scaleY:3.6885,x:77.65,y:-96.5},0).wait(1).to({scaleX:3.6879,scaleY:3.6879,x:76.9,y:-100.75},0).wait(1).to({regX:57.1,regY:56.9,scaleX:3.6875,scaleY:3.6875,x:77,y:-103.15},0).to({_off:true},1).wait(156));

	// mask copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_379 = new cjs.Graphics().p("EhVHADOMBfShXyMBK+BRXMhfTBXyg");
	var mask_1_graphics_380 = new cjs.Graphics().p("EhVHADTMBfOhX4MBLBBRTMhfNBX4g");
	var mask_1_graphics_381 = new cjs.Graphics().p("EhVHADYMBfJhX9MBLGBRPMhfJBX8g");
	var mask_1_graphics_382 = new cjs.Graphics().p("EhVHADcMBfFhYCMBLKBRLMhfEBYBg");
	var mask_1_graphics_383 = new cjs.Graphics().p("EhVHADgMBfAhYGMBLPBRGMhfABYHg");
	var mask_1_graphics_384 = new cjs.Graphics().p("EhVHADlMBe7hYMMBLUBRDMhe7BYMg");
	var mask_1_graphics_385 = new cjs.Graphics().p("EhVGADqMBe2hYRMBLXBQ+Mhe2BYRg");
	var mask_1_graphics_386 = new cjs.Graphics().p("EhVGADuMBeyhYWMBLbBQ7MhexBYWg");
	var mask_1_graphics_387 = new cjs.Graphics().p("EhVFADzMBeshYbMBLfBQ2MhesBYbg");
	var mask_1_graphics_388 = new cjs.Graphics().p("EhVFAD3MBeohYfMBLkBQyMhepBYfg");
	var mask_1_graphics_389 = new cjs.Graphics().p("EhVFAD7MBekhYkMBLnBQvMhejBYkg");
	var mask_1_graphics_390 = new cjs.Graphics().p("EhVFAD/MBeghYpMBLrBQsMhefBYpg");
	var mask_1_graphics_391 = new cjs.Graphics().p("EhVFAEDMBechYtMBLvBQoMhecBYtg");
	var mask_1_graphics_392 = new cjs.Graphics().p("EhVFAEHMBeYhYxMBLzBQkMheYBYxg");
	var mask_1_graphics_393 = new cjs.Graphics().p("EhVFAELMBeVhY2MBL1BQhMheTBY2g");
	var mask_1_graphics_394 = new cjs.Graphics().p("EhVEAEOMBeQhY5MBL5BQdMheQBY6g");
	var mask_1_graphics_395 = new cjs.Graphics().p("EhVEAESMBeNhY9MBL8BQbMheMBY8g");
	var mask_1_graphics_396 = new cjs.Graphics().p("EhVEAEVMBeJhZBMBMABQYMheJBZBg");
	var mask_1_graphics_397 = new cjs.Graphics().p("EhVEAEYMBeGhZEMBMDBQVMheFBZEg");
	var mask_1_graphics_398 = new cjs.Graphics().p("EhVEAEbMBeDhZHMBMGBQSMheCBZHg");
	var mask_1_graphics_399 = new cjs.Graphics().p("EhVDAEeMBd/hZLMBMJBQQMheABZLg");
	var mask_1_graphics_400 = new cjs.Graphics().p("EhVDAEhMBd8hZOMBMMBQNMhd9BZOg");
	var mask_1_graphics_401 = new cjs.Graphics().p("EhVDAEkMBd5hZSMBMOBQLMhd5BZRg");
	var mask_1_graphics_402 = new cjs.Graphics().p("EhVDAEnMBd3hZVMBMQBQIMhd2BZVg");
	var mask_1_graphics_403 = new cjs.Graphics().p("EhVDAEpMBd0hZXMBMTBQGMhd0BZXg");
	var mask_1_graphics_404 = new cjs.Graphics().p("EhVDAEsMBdyhZaMBMVBQEMhdyBZZg");
	var mask_1_graphics_405 = new cjs.Graphics().p("EhVDAEuMBdwhZdMBMXBQDMhdvBZcg");
	var mask_1_graphics_406 = new cjs.Graphics().p("EhVDAEwMBduhZfMBMZBQAMhduBZfg");
	var mask_1_graphics_407 = new cjs.Graphics().p("EhVDAEyMBdshZhMBMaBP+MhdqBZhg");
	var mask_1_graphics_408 = new cjs.Graphics().p("EhVDAEzMBdqhZiMBMdBP8MhdqBZjg");
	var mask_1_graphics_409 = new cjs.Graphics().p("EhVCAE1MBdohZkMBMdBP7MhdnBZkg");
	var mask_1_graphics_410 = new cjs.Graphics().p("EhVDAE2MBdnhZlMBMgBP5MhdnBZmg");
	var mask_1_graphics_411 = new cjs.Graphics().p("EhVCAE5MBdkhZpMBMhBP5MhdkBZog");
	var mask_1_graphics_412 = new cjs.Graphics().p("EhVCAE6MBdjhZqMBMiBP4MhdjBZpg");
	var mask_1_graphics_413 = new cjs.Graphics().p("EhVCAE7MBdihZrMBMjBP2MhdiBZrg");
	var mask_1_graphics_414 = new cjs.Graphics().p("EhVCAE8MBdghZsMBMlBP1MhdhBZsg");
	var mask_1_graphics_415 = new cjs.Graphics().p("EhVCAE9MBdghZtMBMlBP0MhdgBZtg");
	var mask_1_graphics_416 = new cjs.Graphics().p("EhVCAE+MBdfhZuMBMmBPzMhdeBZug");
	var mask_1_graphics_417 = new cjs.Graphics().p("EhVCAE/MBdehZvMBMnBPyMhddBZvg");
	var mask_1_graphics_418 = new cjs.Graphics().p("EhVCAFAMBddhZwMBMoBPyMhddBZvg");
	var mask_1_graphics_419 = new cjs.Graphics().p("EhVCAFAMBdchZwMBMpBPwMhdcBZxg");
	var mask_1_graphics_420 = new cjs.Graphics().p("EhVCAFBMBdchZyMBMpBPxMhdcBZxg");
	var mask_1_graphics_421 = new cjs.Graphics().p("EhVCAFBMBdbhZxMBMqBPwMhdbBZxg");
	var mask_1_graphics_422 = new cjs.Graphics().p("EhVCAFCMBdbhZzMBMqBPwMhdbBZzg");
	var mask_1_graphics_423 = new cjs.Graphics().p("EhVCAFDMBdahZ0MBMrBPwMhdaBZzg");
	var mask_1_graphics_424 = new cjs.Graphics().p("EhVCAFDMBdahZ0MBMrBPvMhdZBZ0g");
	var mask_1_graphics_425 = new cjs.Graphics().p("EhVCAFDMBdZhZ0MBMsBPvMhdZBZ0g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(379).to({graphics:mask_1_graphics_379,x:143.25,y:300.025}).wait(1).to({graphics:mask_1_graphics_380,x:131.325,y:288.275}).wait(1).to({graphics:mask_1_graphics_381,x:119.325,y:276.375}).wait(1).to({graphics:mask_1_graphics_382,x:107.225,y:264.45}).wait(1).to({graphics:mask_1_graphics_383,x:95.125,y:252.5}).wait(1).to({graphics:mask_1_graphics_384,x:83.05,y:240.575}).wait(1).to({graphics:mask_1_graphics_385,x:71.1,y:228.775}).wait(1).to({graphics:mask_1_graphics_386,x:59.275,y:217.075}).wait(1).to({graphics:mask_1_graphics_387,x:47.65,y:205.6}).wait(1).to({graphics:mask_1_graphics_388,x:36.3,y:194.4}).wait(1).to({graphics:mask_1_graphics_389,x:25.175,y:183.45}).wait(1).to({graphics:mask_1_graphics_390,x:14.425,y:172.8}).wait(1).to({graphics:mask_1_graphics_391,x:4,y:162.5}).wait(1).to({graphics:mask_1_graphics_392,x:-6.025,y:152.575}).wait(1).to({graphics:mask_1_graphics_393,x:-15.7,y:143.025}).wait(1).to({graphics:mask_1_graphics_394,x:-24.975,y:133.9}).wait(1).to({graphics:mask_1_graphics_395,x:-33.825,y:125.125}).wait(1).to({graphics:mask_1_graphics_396,x:-42.3,y:116.775}).wait(1).to({graphics:mask_1_graphics_397,x:-51.25,y:82.2}).wait(1).to({graphics:mask_1_graphics_398,x:-59.775,y:49.325}).wait(1).to({graphics:mask_1_graphics_399,x:-67.85,y:18.125}).wait(1).to({graphics:mask_1_graphics_400,x:-75.5,y:-11.425}).wait(1).to({graphics:mask_1_graphics_401,x:-82.725,y:-39.4}).wait(1).to({graphics:mask_1_graphics_402,x:-89.575,y:-65.825}).wait(1).to({graphics:mask_1_graphics_403,x:-96,y:-90.75}).wait(1).to({graphics:mask_1_graphics_404,x:-102.1,y:-114.225}).wait(1).to({graphics:mask_1_graphics_405,x:-107.825,y:-136.3}).wait(1).to({graphics:mask_1_graphics_406,x:-113.175,y:-157.025}).wait(1).to({graphics:mask_1_graphics_407,x:-118.2,y:-176.475}).wait(1).to({graphics:mask_1_graphics_408,x:-122.925,y:-194.7}).wait(1).to({graphics:mask_1_graphics_409,x:-127.35,y:-211.725}).wait(1).to({graphics:mask_1_graphics_410,x:-131.45,y:-227.6}).wait(1).to({graphics:mask_1_graphics_411,x:-135.275,y:-242.4}).wait(1).to({graphics:mask_1_graphics_412,x:-138.825,y:-256.125}).wait(1).to({graphics:mask_1_graphics_413,x:-142.125,y:-268.825}).wait(1).to({graphics:mask_1_graphics_414,x:-145.15,y:-280.6}).wait(1).to({graphics:mask_1_graphics_415,x:-147.95,y:-291.425}).wait(1).to({graphics:mask_1_graphics_416,x:-150.55,y:-301.375}).wait(1).to({graphics:mask_1_graphics_417,x:-152.9,y:-310.425}).wait(1).to({graphics:mask_1_graphics_418,x:-155.025,y:-318.7}).wait(1).to({graphics:mask_1_graphics_419,x:-156.95,y:-326.15}).wait(1).to({graphics:mask_1_graphics_420,x:-158.7,y:-332.85}).wait(1).to({graphics:mask_1_graphics_421,x:-160.225,y:-338.85}).wait(1).to({graphics:mask_1_graphics_422,x:-161.6,y:-344.125}).wait(1).to({graphics:mask_1_graphics_423,x:-162.775,y:-348.725}).wait(1).to({graphics:mask_1_graphics_424,x:-163.825,y:-352.675}).wait(1).to({graphics:mask_1_graphics_425,x:-164.675,y:-355.975}).wait(1).to({graphics:null,x:0,y:0}).wait(92));

	// text4
	this.instance_17 = new lib.text4_1();
	this.instance_17.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(348).to({_off:false},0).to({alpha:1},31,cjs.Ease.cubicOut).to({_off:true},47).wait(92));

	// RAV4
	this.instance_18 = new lib.RV_AnimationIn_mc();
	this.instance_18.setTransform(-183.1,343.55,0.8452,0.8452,0,0,0,149.7,125.8);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(335).to({_off:false},0).to({regX:150,regY:125.4,scaleX:1.0213,scaleY:1.0213,x:149.8,y:375.3},44,cjs.Ease.cubicOut).to({_off:true},47).wait(92));

	// RT2
	this.instance_19 = new lib.redTree_1();
	this.instance_19.setTransform(151.7,315.4,0.9281,0.9374,0,0,0,298.9,64.5);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(337).to({_off:false},0).to({_off:true},89).wait(92));

	// WT
	this.instance_20 = new lib.whiteTree_1();
	this.instance_20.setTransform(203.7,357.05,0.94,0.9493,0,0,0,297.9,69.2);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(324).to({_off:false},0).to({_off:true},102).wait(92));

	// WT
	this.instance_21 = new lib.whiteTree_1();
	this.instance_21.setTransform(84.25,357.25,0.94,0.9493,0,0,0,297.9,69.2);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(352).to({_off:false},0).to({_off:true},74).wait(92));

	// pageFlip2
	this.instance_22 = new lib.pageFlip_1();
	this.instance_22.setTransform(320.15,620.05,0.4908,0.4908,0,0,0,57.2,57.4);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(155).to({_off:false},0).wait(1).to({regX:57,regY:57.1,scaleX:0.7,scaleY:0.7,x:310.05,y:606.5},0).wait(1).to({scaleX:0.9114,scaleY:0.9114,x:300,y:593.05},0).wait(1).to({scaleX:1.1239,scaleY:1.1239,x:289.9,y:579.45},0).wait(1).to({scaleX:1.3366,scaleY:1.3366,x:279.8,y:565.85},0).wait(1).to({scaleX:1.5487,scaleY:1.5487,x:269.7,y:552.35},0).wait(1).to({scaleX:1.759,scaleY:1.759,x:259.7,y:538.95},0).wait(1).to({scaleX:1.9667,scaleY:1.9667,x:249.85,y:525.65},0).wait(1).to({scaleX:2.1708,scaleY:2.1708,x:240.15,y:512.6},0).wait(1).to({scaleX:2.3707,scaleY:2.3707,x:230.65,y:499.85},0).wait(1).to({scaleX:2.5656,scaleY:2.5656,x:221.4,y:487.4},0).wait(1).to({scaleX:2.7548,scaleY:2.7548,x:212.35,y:475.35},0).wait(1).to({scaleX:2.9379,scaleY:2.9379,x:203.65,y:463.65},0).wait(1).to({scaleX:3.1145,scaleY:3.1145,x:195.25,y:452.35},0).wait(1).to({scaleX:3.2843,scaleY:3.2843,x:187.2,y:441.55},0).wait(1).to({scaleX:3.4472,scaleY:3.4472,x:179.55,y:431.15},0).wait(1).to({scaleX:3.603,scaleY:3.603,x:172.1,y:421.2},0).wait(1).to({regX:57.1,regY:57.5,scaleX:3.7516,scaleY:3.7516,x:165.75,y:412.8},0).wait(1).to({regX:57,regY:57.1,scaleX:3.747,scaleY:3.747,x:158.9,y:373.55},0).wait(1).to({scaleX:3.7425,scaleY:3.7425,x:152.7,y:337.7},0).wait(1).to({scaleX:3.7383,scaleY:3.7383,x:146.85,y:303.65},0).wait(1).to({scaleX:3.7343,scaleY:3.7343,x:141.25,y:271.4},0).wait(1).to({scaleX:3.7305,scaleY:3.7305,x:136,y:240.9},0).wait(1).to({scaleX:3.7269,scaleY:3.7269,x:131,y:212.15},0).wait(1).to({scaleX:3.7235,scaleY:3.7235,x:126.3,y:184.95},0).wait(1).to({scaleX:3.7203,scaleY:3.7203,x:121.85,y:159.35},0).wait(1).to({scaleX:3.7173,scaleY:3.7173,x:117.7,y:135.25},0).wait(1).to({scaleX:3.7145,scaleY:3.7145,x:113.8,y:112.65},0).wait(1).to({scaleX:3.7119,scaleY:3.7119,x:110.15,y:91.4},0).wait(1).to({scaleX:3.7094,scaleY:3.7094,x:106.7,y:71.55},0).wait(1).to({scaleX:3.7071,scaleY:3.7071,x:103.5,y:52.95},0).wait(1).to({scaleX:3.7049,scaleY:3.7049,x:100.5,y:35.65},0).wait(1).to({scaleX:3.7029,scaleY:3.7029,x:97.7,y:19.55},0).wait(1).to({scaleX:3.701,scaleY:3.701,x:95.1,y:4.55},0).wait(1).to({scaleX:3.6993,scaleY:3.6993,x:92.7,y:-9.3},0).wait(1).to({scaleX:3.6977,scaleY:3.6977,x:90.5,y:-22.15},0).wait(1).to({scaleX:3.6963,scaleY:3.6963,x:88.5,y:-34},0).wait(1).to({scaleX:3.6949,scaleY:3.6949,x:86.6,y:-44.8},0).wait(1).to({scaleX:3.6937,scaleY:3.6937,x:84.9,y:-54.75},0).wait(1).to({scaleX:3.6926,scaleY:3.6926,x:83.35,y:-63.7},0).wait(1).to({scaleX:3.6915,scaleY:3.6915,x:81.9,y:-71.85},0).wait(1).to({scaleX:3.6906,scaleY:3.6906,x:80.65,y:-79.2},0).wait(1).to({scaleX:3.6898,scaleY:3.6898,x:79.5,y:-85.7},0).wait(1).to({scaleX:3.6891,scaleY:3.6891,x:78.55,y:-91.45},0).wait(1).to({scaleX:3.6885,scaleY:3.6885,x:77.65,y:-96.5},0).wait(1).to({scaleX:3.6879,scaleY:3.6879,x:76.9,y:-100.75},0).wait(1).to({regX:57.1,regY:56.9,scaleX:3.6875,scaleY:3.6875,x:77,y:-103.15},0).to({_off:true},1).wait(316));

	// mask copy 3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_315 = new cjs.Graphics().p("EhVHADOMBfShXyMBK+BRXMhfTBXyg");
	var mask_2_graphics_316 = new cjs.Graphics().p("EhVHADTMBfOhX4MBLBBRTMhfNBX4g");
	var mask_2_graphics_317 = new cjs.Graphics().p("EhVHADYMBfJhX9MBLGBRPMhfJBX8g");
	var mask_2_graphics_318 = new cjs.Graphics().p("EhVHADcMBfFhYCMBLKBRLMhfEBYBg");
	var mask_2_graphics_319 = new cjs.Graphics().p("EhVHADgMBfAhYGMBLPBRGMhfABYHg");
	var mask_2_graphics_320 = new cjs.Graphics().p("EhVHADlMBe7hYMMBLUBRDMhe7BYMg");
	var mask_2_graphics_321 = new cjs.Graphics().p("EhVGADqMBe2hYRMBLXBQ+Mhe2BYRg");
	var mask_2_graphics_322 = new cjs.Graphics().p("EhVGADuMBeyhYWMBLbBQ7MhexBYWg");
	var mask_2_graphics_323 = new cjs.Graphics().p("EhVFADzMBeshYbMBLfBQ2MhesBYbg");
	var mask_2_graphics_324 = new cjs.Graphics().p("EhVFAD3MBeohYfMBLkBQyMhepBYfg");
	var mask_2_graphics_325 = new cjs.Graphics().p("EhVFAD7MBekhYkMBLnBQvMhejBYkg");
	var mask_2_graphics_326 = new cjs.Graphics().p("EhVFAD/MBeghYpMBLrBQsMhefBYpg");
	var mask_2_graphics_327 = new cjs.Graphics().p("EhVFAEDMBechYtMBLvBQoMhecBYtg");
	var mask_2_graphics_328 = new cjs.Graphics().p("EhVFAEHMBeYhYxMBLzBQkMheYBYxg");
	var mask_2_graphics_329 = new cjs.Graphics().p("EhVFAELMBeVhY2MBL1BQhMheTBY2g");
	var mask_2_graphics_330 = new cjs.Graphics().p("EhVEAEOMBeQhY5MBL5BQdMheQBY6g");
	var mask_2_graphics_331 = new cjs.Graphics().p("EhVEAESMBeNhY9MBL8BQbMheMBY8g");
	var mask_2_graphics_332 = new cjs.Graphics().p("EhVEAEVMBeJhZBMBMABQYMheJBZBg");
	var mask_2_graphics_333 = new cjs.Graphics().p("EhVEAEYMBeGhZEMBMDBQVMheFBZEg");
	var mask_2_graphics_334 = new cjs.Graphics().p("EhVEAEbMBeDhZHMBMGBQSMheCBZHg");
	var mask_2_graphics_335 = new cjs.Graphics().p("EhVDAEeMBd/hZLMBMJBQQMheABZLg");
	var mask_2_graphics_336 = new cjs.Graphics().p("EhVDAEhMBd8hZOMBMMBQNMhd9BZOg");
	var mask_2_graphics_337 = new cjs.Graphics().p("EhVDAEkMBd5hZSMBMOBQLMhd5BZRg");
	var mask_2_graphics_338 = new cjs.Graphics().p("EhVDAEnMBd3hZVMBMQBQIMhd2BZVg");
	var mask_2_graphics_339 = new cjs.Graphics().p("EhVDAEpMBd0hZXMBMTBQGMhd0BZXg");
	var mask_2_graphics_340 = new cjs.Graphics().p("EhVDAEsMBdyhZaMBMVBQEMhdyBZZg");
	var mask_2_graphics_341 = new cjs.Graphics().p("EhVDAEuMBdwhZdMBMXBQDMhdvBZcg");
	var mask_2_graphics_342 = new cjs.Graphics().p("EhVDAEwMBduhZfMBMZBQAMhduBZfg");
	var mask_2_graphics_343 = new cjs.Graphics().p("EhVDAEyMBdshZhMBMaBP+MhdqBZhg");
	var mask_2_graphics_344 = new cjs.Graphics().p("EhVDAEzMBdqhZiMBMdBP8MhdqBZjg");
	var mask_2_graphics_345 = new cjs.Graphics().p("EhVCAE1MBdohZkMBMdBP7MhdnBZkg");
	var mask_2_graphics_346 = new cjs.Graphics().p("EhVDAE2MBdnhZlMBMgBP5MhdnBZmg");
	var mask_2_graphics_347 = new cjs.Graphics().p("EhVCAE5MBdkhZpMBMhBP5MhdkBZog");
	var mask_2_graphics_348 = new cjs.Graphics().p("EhVCAE6MBdjhZqMBMiBP4MhdjBZpg");
	var mask_2_graphics_349 = new cjs.Graphics().p("EhVCAE7MBdihZrMBMjBP2MhdiBZrg");
	var mask_2_graphics_350 = new cjs.Graphics().p("EhVCAE8MBdghZsMBMlBP1MhdhBZsg");
	var mask_2_graphics_351 = new cjs.Graphics().p("EhVCAE9MBdghZtMBMlBP0MhdgBZtg");
	var mask_2_graphics_352 = new cjs.Graphics().p("EhVCAE+MBdfhZuMBMmBPzMhdeBZug");
	var mask_2_graphics_353 = new cjs.Graphics().p("EhVCAE/MBdehZvMBMnBPyMhddBZvg");
	var mask_2_graphics_354 = new cjs.Graphics().p("EhVCAFAMBddhZwMBMoBPyMhddBZvg");
	var mask_2_graphics_355 = new cjs.Graphics().p("EhVCAFAMBdchZwMBMpBPwMhdcBZxg");
	var mask_2_graphics_356 = new cjs.Graphics().p("EhVCAFBMBdchZyMBMpBPxMhdcBZxg");
	var mask_2_graphics_357 = new cjs.Graphics().p("EhVCAFBMBdbhZxMBMqBPwMhdbBZxg");
	var mask_2_graphics_358 = new cjs.Graphics().p("EhVCAFCMBdbhZzMBMqBPwMhdbBZzg");
	var mask_2_graphics_359 = new cjs.Graphics().p("EhVCAFDMBdahZ0MBMrBPwMhdaBZzg");
	var mask_2_graphics_360 = new cjs.Graphics().p("EhVCAFDMBdahZ0MBMrBPvMhdZBZ0g");
	var mask_2_graphics_361 = new cjs.Graphics().p("EhVCAFDMBdZhZ0MBMsBPvMhdZBZ0g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(315).to({graphics:mask_2_graphics_315,x:143.25,y:300.025}).wait(1).to({graphics:mask_2_graphics_316,x:131.325,y:288.275}).wait(1).to({graphics:mask_2_graphics_317,x:119.325,y:276.375}).wait(1).to({graphics:mask_2_graphics_318,x:107.225,y:264.45}).wait(1).to({graphics:mask_2_graphics_319,x:95.125,y:252.5}).wait(1).to({graphics:mask_2_graphics_320,x:83.05,y:240.575}).wait(1).to({graphics:mask_2_graphics_321,x:71.1,y:228.775}).wait(1).to({graphics:mask_2_graphics_322,x:59.275,y:217.075}).wait(1).to({graphics:mask_2_graphics_323,x:47.65,y:205.6}).wait(1).to({graphics:mask_2_graphics_324,x:36.3,y:194.4}).wait(1).to({graphics:mask_2_graphics_325,x:25.175,y:183.45}).wait(1).to({graphics:mask_2_graphics_326,x:14.425,y:172.8}).wait(1).to({graphics:mask_2_graphics_327,x:4,y:162.5}).wait(1).to({graphics:mask_2_graphics_328,x:-6.025,y:152.575}).wait(1).to({graphics:mask_2_graphics_329,x:-15.7,y:143.025}).wait(1).to({graphics:mask_2_graphics_330,x:-24.975,y:133.9}).wait(1).to({graphics:mask_2_graphics_331,x:-33.825,y:125.125}).wait(1).to({graphics:mask_2_graphics_332,x:-42.3,y:116.775}).wait(1).to({graphics:mask_2_graphics_333,x:-51.25,y:82.2}).wait(1).to({graphics:mask_2_graphics_334,x:-59.775,y:49.325}).wait(1).to({graphics:mask_2_graphics_335,x:-67.85,y:18.125}).wait(1).to({graphics:mask_2_graphics_336,x:-75.5,y:-11.425}).wait(1).to({graphics:mask_2_graphics_337,x:-82.725,y:-39.4}).wait(1).to({graphics:mask_2_graphics_338,x:-89.575,y:-65.825}).wait(1).to({graphics:mask_2_graphics_339,x:-96,y:-90.75}).wait(1).to({graphics:mask_2_graphics_340,x:-102.1,y:-114.225}).wait(1).to({graphics:mask_2_graphics_341,x:-107.825,y:-136.3}).wait(1).to({graphics:mask_2_graphics_342,x:-113.175,y:-157.025}).wait(1).to({graphics:mask_2_graphics_343,x:-118.2,y:-176.475}).wait(1).to({graphics:mask_2_graphics_344,x:-122.925,y:-194.7}).wait(1).to({graphics:mask_2_graphics_345,x:-127.35,y:-211.725}).wait(1).to({graphics:mask_2_graphics_346,x:-131.45,y:-227.6}).wait(1).to({graphics:mask_2_graphics_347,x:-135.275,y:-242.4}).wait(1).to({graphics:mask_2_graphics_348,x:-138.825,y:-256.125}).wait(1).to({graphics:mask_2_graphics_349,x:-142.125,y:-268.825}).wait(1).to({graphics:mask_2_graphics_350,x:-145.15,y:-280.6}).wait(1).to({graphics:mask_2_graphics_351,x:-147.95,y:-291.425}).wait(1).to({graphics:mask_2_graphics_352,x:-150.55,y:-301.375}).wait(1).to({graphics:mask_2_graphics_353,x:-152.9,y:-310.425}).wait(1).to({graphics:mask_2_graphics_354,x:-155.025,y:-318.7}).wait(1).to({graphics:mask_2_graphics_355,x:-156.95,y:-326.15}).wait(1).to({graphics:mask_2_graphics_356,x:-158.7,y:-332.85}).wait(1).to({graphics:mask_2_graphics_357,x:-160.225,y:-338.85}).wait(1).to({graphics:mask_2_graphics_358,x:-161.6,y:-344.125}).wait(1).to({graphics:mask_2_graphics_359,x:-162.775,y:-348.725}).wait(1).to({graphics:mask_2_graphics_360,x:-163.825,y:-352.675}).wait(1).to({graphics:mask_2_graphics_361,x:-164.675,y:-355.975}).wait(1).to({graphics:null,x:0,y:0}).wait(156));

	// RAV4In
	this.instance_23 = new lib.RV_AnimationIn_mc();
	this.instance_23.setTransform(-243.75,366.1,0.6632,0.6632,0,0,0,149.8,125.9);
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(271).to({_off:false},0).to({regX:150.2,regY:125.5,scaleX:0.8014,scaleY:0.8014,x:96.1,y:382.55},44,cjs.Ease.cubicOut).to({_off:true},47).wait(156));

	// CamryIn
	this.instance_24 = new lib.CY_AnimationIn_mc();
	this.instance_24.setTransform(-130.35,358.3,0.6095,0.6095,0,0,0,150.5,126);
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(262).to({_off:false},0).to({regX:150.6,regY:125.3,scaleX:0.7366,scaleY:0.7366,x:205.95,y:381.55},44,cjs.Ease.cubicOut).to({_off:true},56).wait(156));

	// text3
	this.instance_25 = new lib.text3_1();
	this.instance_25.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	var maskedShapeInstanceList = [this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(180).to({_off:false},0).to({alpha:1},34,cjs.Ease.cubicOut).to({_off:true},148).wait(156));

	// CorollaOut
	this.instance_26 = new lib.CL_AnimationOut_mc();
	this.instance_26.setTransform(101.9,385.05,0.7635,0.7635,0,0,0,150.2,125.3);
	this.instance_26._off = true;

	var maskedShapeInstanceList = [this.instance_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(231).to({_off:false},0).to({scaleX:0.8578,scaleY:0.8578,x:412.9,y:420.1},44,cjs.Ease.cubicIn).wait(243));

	// CorollaIn
	this.instance_27 = new lib.CL_AnimationIn_mc();
	this.instance_27.setTransform(-121.85,355.5,0.6318,0.6318,0,0,0,150.2,125.8);
	this.instance_27._off = true;

	var maskedShapeInstanceList = [this.instance_27];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(180).to({_off:false},0).to({regY:125.3,scaleX:0.7635,scaleY:0.7635,x:101.9,y:385.05},44,cjs.Ease.cubicOut).to({_off:true},7).wait(287));

	// HighlanderOut
	this.instance_28 = new lib.HI_AnimationOut_mc();
	this.instance_28.setTransform(211.15,382.6,0.6376,0.6376,0,0,0,150.1,125.5);
	this.instance_28._off = true;

	var maskedShapeInstanceList = [this.instance_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(225).to({_off:false},0).wait(1).to({regX:150,regY:125,y:382.3},0).wait(1).to({scaleX:0.6377,scaleY:0.6377,x:211.25},0).wait(1).to({x:211.35},0).wait(1).to({scaleX:0.6378,scaleY:0.6378,x:211.5},0).wait(1).to({x:211.6,y:382.4},0).wait(1).to({regX:150.1,regY:125.7,scaleX:0.6379,scaleY:0.6379,x:211.85,y:382.8},0).wait(1).to({regX:150,regY:125,scaleX:0.6384,scaleY:0.6384,x:212.75,y:382.4},0).wait(1).to({scaleX:0.6389,scaleY:0.6389,x:213.85,y:382.5},0).wait(1).to({scaleX:0.6394,scaleY:0.6394,x:215,y:382.7},0).wait(1).to({scaleX:0.6401,scaleY:0.6401,x:216.3,y:382.8},0).wait(1).to({scaleX:0.6407,scaleY:0.6407,x:217.7,y:382.95},0).wait(1).to({scaleX:0.6415,scaleY:0.6415,x:219.25,y:383.15},0).wait(1).to({scaleX:0.6423,scaleY:0.6423,x:220.95,y:383.3},0).wait(1).to({scaleX:0.6432,scaleY:0.6432,x:222.85,y:383.5},0).wait(1).to({scaleX:0.6442,scaleY:0.6442,x:224.85,y:383.7},0).wait(1).to({scaleX:0.6453,scaleY:0.6453,x:227.15,y:383.95},0).wait(1).to({scaleX:0.6465,scaleY:0.6465,x:229.65,y:384.25},0).wait(1).to({scaleX:0.6478,scaleY:0.6478,x:232.4,y:384.5},0).wait(1).to({scaleX:0.6493,scaleY:0.6493,x:235.5,y:384.85},0).wait(1).to({scaleX:0.6509,scaleY:0.6509,x:238.9,y:385.2},0).wait(1).to({scaleX:0.6527,scaleY:0.6527,x:242.65,y:385.65},0).wait(1).to({scaleX:0.6547,scaleY:0.6547,x:246.8,y:386.1},0).wait(1).to({scaleX:0.6569,scaleY:0.6569,x:251.4,y:386.55},0).wait(1).to({scaleX:0.6593,scaleY:0.6593,x:256.45,y:387.1},0).wait(1).to({scaleX:0.662,scaleY:0.662,x:262.05,y:387.7},0).wait(1).to({scaleX:0.665,scaleY:0.665,x:268.15,y:388.35},0).wait(1).to({scaleX:0.6682,scaleY:0.6682,x:274.9,y:389.1},0).wait(1).to({scaleX:0.6717,scaleY:0.6717,x:282.25,y:389.85},0).wait(1).to({scaleX:0.6756,scaleY:0.6756,x:290.3,y:390.75},0).wait(1).to({scaleX:0.6797,scaleY:0.6797,x:298.95,y:391.65},0).wait(1).to({scaleX:0.6842,scaleY:0.6842,x:308.35,y:392.7},0).wait(1).to({scaleX:0.689,scaleY:0.689,x:318.35,y:393.8},0).wait(1).to({scaleX:0.6942,scaleY:0.6942,x:329.1,y:394.9},0).wait(1).to({scaleX:0.6996,scaleY:0.6996,x:340.45,y:396.15},0).wait(1).to({scaleX:0.7054,scaleY:0.7054,x:352.4,y:397.4},0).wait(1).to({scaleX:0.7114,scaleY:0.7114,x:364.95,y:398.8},0).wait(1).to({scaleX:0.7177,scaleY:0.7177,x:378,y:400.2},0).wait(1).to({scaleX:0.7242,scaleY:0.7242,x:391.6,y:401.6},0).wait(1).to({scaleX:0.7309,scaleY:0.7309,x:405.55,y:403.15},0).wait(1).to({scaleX:0.7378,scaleY:0.7378,x:419.9,y:404.65},0).wait(1).to({scaleX:0.7448,scaleY:0.7448,x:434.55,y:406.25},0).wait(1).to({scaleX:0.752,scaleY:0.752,x:449.55,y:407.85},0).wait(1).to({scaleX:0.7593,scaleY:0.7593,x:464.7,y:409.5},0).wait(1).to({regX:150.2,regY:125.7,scaleX:0.7667,scaleY:0.7667,x:480.15,y:411.7},0).wait(249));

	// HighlanderIn
	this.instance_29 = new lib.HI_AnimationIn_mc();
	this.instance_29.setTransform(-69.5,346.65,0.5276,0.5276,0,0,0,149.2,126);
	this.instance_29._off = true;

	var maskedShapeInstanceList = [this.instance_29];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(170).to({_off:false},0).to({regX:150.1,regY:125.5,scaleX:0.6376,scaleY:0.6376,x:211.15,y:382.6},44,cjs.Ease.cubicOut).to({_off:true},11).wait(293));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_155 = new cjs.Graphics().p("EhVHADOMBfShXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_156 = new cjs.Graphics().p("EhVIADOMBfThXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_157 = new cjs.Graphics().p("EhVIADOMBfThXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_158 = new cjs.Graphics().p("EhVIADOMBfThXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_159 = new cjs.Graphics().p("EhVIADOMBfThXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_160 = new cjs.Graphics().p("EhVHADOMBfShXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_161 = new cjs.Graphics().p("EhVIADOMBfThXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_162 = new cjs.Graphics().p("EhVHADOMBfShXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_163 = new cjs.Graphics().p("EhVIADOMBfThXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_164 = new cjs.Graphics().p("EhVHADOMBfShXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_165 = new cjs.Graphics().p("EhVHADOMBfShXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_166 = new cjs.Graphics().p("EhVIADOMBfThXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_167 = new cjs.Graphics().p("EhVIADOMBfThXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_168 = new cjs.Graphics().p("EhVIADOMBfThXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_169 = new cjs.Graphics().p("EhVIADOMBfThXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_170 = new cjs.Graphics().p("EhVIADOMBfThXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_171 = new cjs.Graphics().p("EhVHADOMBfShXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_172 = new cjs.Graphics().p("EhVIAPGMBfThXyMBK9BRWMhfSBXzg");
	var mask_3_graphics_173 = new cjs.Graphics().p("EhVHADOMBfShXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_174 = new cjs.Graphics().p("EhVIADOMBfThXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_175 = new cjs.Graphics().p("EhVIADOMBfThXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_176 = new cjs.Graphics().p("EhVHADOMBfShXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_177 = new cjs.Graphics().p("EhVHADOMBfShXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_178 = new cjs.Graphics().p("EhVHADOMBfShXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_179 = new cjs.Graphics().p("EhVIADOMBfThXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_180 = new cjs.Graphics().p("EhVHADOMBfShXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_181 = new cjs.Graphics().p("EhVHADOMBfShXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_182 = new cjs.Graphics().p("EhVIADOMBfThXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_183 = new cjs.Graphics().p("EhVIADOMBfThXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_184 = new cjs.Graphics().p("EhVHADOMBfShXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_185 = new cjs.Graphics().p("EhVIADOMBfThXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_186 = new cjs.Graphics().p("EhVIADOMBfThXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_187 = new cjs.Graphics().p("EhVIADOMBfThXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_188 = new cjs.Graphics().p("EhVHADOMBfShXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_189 = new cjs.Graphics().p("EhVIADOMBfThXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_190 = new cjs.Graphics().p("EhVIADOMBfThXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_191 = new cjs.Graphics().p("EhVIADOMBfThXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_192 = new cjs.Graphics().p("EhVIADOMBfThXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_193 = new cjs.Graphics().p("EhVHADOMBfShXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_194 = new cjs.Graphics().p("EhVHADOMBfShXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_195 = new cjs.Graphics().p("EhVHADOMBfShXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_196 = new cjs.Graphics().p("EhVHADOMBfShXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_197 = new cjs.Graphics().p("EhVHADOMBfShXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_198 = new cjs.Graphics().p("EhVIADOMBfThXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_199 = new cjs.Graphics().p("EhVHADOMBfShXyMBK+BRXMhfTBXyg");
	var mask_3_graphics_200 = new cjs.Graphics().p("EhVIADOMBfThXyMBK9BRXMhfSBXyg");
	var mask_3_graphics_201 = new cjs.Graphics().p("EhVIADOMBfThXyMBK+BRXMhfTBXyg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(155).to({graphics:mask_3_graphics_155,x:590,y:851.025}).wait(1).to({graphics:mask_3_graphics_156,x:574.85,y:840.925}).wait(1).to({graphics:mask_3_graphics_157,x:559.55,y:830.675}).wait(1).to({graphics:mask_3_graphics_158,x:544.15,y:820.425}).wait(1).to({graphics:mask_3_graphics_159,x:528.75,y:810.125}).wait(1).to({graphics:mask_3_graphics_160,x:513.4,y:799.875}).wait(1).to({graphics:mask_3_graphics_161,x:498.15,y:789.675}).wait(1).to({graphics:mask_3_graphics_162,x:483.1,y:779.675}).wait(1).to({graphics:mask_3_graphics_163,x:468.3,y:769.775}).wait(1).to({graphics:mask_3_graphics_164,x:453.85,y:760.125}).wait(1).to({graphics:mask_3_graphics_165,x:439.7,y:750.675}).wait(1).to({graphics:mask_3_graphics_166,x:426,y:741.525}).wait(1).to({graphics:mask_3_graphics_167,x:412.75,y:732.675}).wait(1).to({graphics:mask_3_graphics_168,x:399.95,y:724.125}).wait(1).to({graphics:mask_3_graphics_169,x:387.65,y:715.925}).wait(1).to({graphics:mask_3_graphics_170,x:375.85,y:708.075}).wait(1).to({graphics:mask_3_graphics_171,x:364.55,y:700.525}).wait(1).to({graphics:mask_3_graphics_172,x:353.8,y:617.325}).wait(1).to({graphics:mask_3_graphics_173,x:342.4,y:661.575}).wait(1).to({graphics:mask_3_graphics_174,x:331.55,y:631.375}).wait(1).to({graphics:mask_3_graphics_175,x:321.3,y:602.725}).wait(1).to({graphics:mask_3_graphics_176,x:311.55,y:575.525}).wait(1).to({graphics:mask_3_graphics_177,x:302.35,y:549.875}).wait(1).to({graphics:mask_3_graphics_178,x:293.65,y:525.575}).wait(1).to({graphics:mask_3_graphics_179,x:285.4,y:502.675}).wait(1).to({graphics:mask_3_graphics_180,x:277.7,y:481.125}).wait(1).to({graphics:mask_3_graphics_181,x:270.4,y:460.825}).wait(1).to({graphics:mask_3_graphics_182,x:263.55,y:441.775}).wait(1).to({graphics:mask_3_graphics_183,x:257.15,y:423.925}).wait(1).to({graphics:mask_3_graphics_184,x:251.15,y:407.175}).wait(1).to({graphics:mask_3_graphics_185,x:245.55,y:391.525}).wait(1).to({graphics:mask_3_graphics_186,x:240.3,y:376.975}).wait(1).to({graphics:mask_3_graphics_187,x:235.45,y:363.375}).wait(1).to({graphics:mask_3_graphics_188,x:230.9,y:350.775}).wait(1).to({graphics:mask_3_graphics_189,x:226.7,y:339.075}).wait(1).to({graphics:mask_3_graphics_190,x:222.85,y:328.275}).wait(1).to({graphics:mask_3_graphics_191,x:219.25,y:318.325}).wait(1).to({graphics:mask_3_graphics_192,x:216,y:309.175}).wait(1).to({graphics:mask_3_graphics_193,x:213,y:300.875}).wait(1).to({graphics:mask_3_graphics_194,x:210.3,y:293.275}).wait(1).to({graphics:mask_3_graphics_195,x:207.85,y:286.425}).wait(1).to({graphics:mask_3_graphics_196,x:205.6,y:280.275}).wait(1).to({graphics:mask_3_graphics_197,x:203.65,y:274.775}).wait(1).to({graphics:mask_3_graphics_198,x:201.9,y:269.925}).wait(1).to({graphics:mask_3_graphics_199,x:200.4,y:265.675}).wait(1).to({graphics:mask_3_graphics_200,x:199.1,y:262.075}).wait(1).to({graphics:mask_3_graphics_201,x:198,y:259.025}).wait(161).to({graphics:null,x:0,y:0}).wait(156));

	// border copy
	this.instance_30 = new lib.border();
	this.instance_30.setTransform(0,0,0.5,0.5);
	this.instance_30._off = true;

	var maskedShapeInstanceList = [this.instance_30];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(155).to({_off:false},0).to({_off:true},178).wait(185));

	// mountains
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0F192E").ss(2,1,1).p("A3bQkIAA5dIFKnqIG4QaIIIrQIHzN5IHCrZAXcrZIAAb9");
	this.shape_1.setTransform(150,307);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F192E").s().p("A3bUFIAAnCIAA5dIFKnqIG4QaIIIrQIHzN6IHCraIGQJEIForkIAAb9IAAHCg");
	this.shape_2.setTransform(150,329.5);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},155).to({state:[]},178).wait(185));

	// pageFlip1
	this.instance_31 = new lib.pageFlip_1();
	this.instance_31.setTransform(320.15,620.05,0.4908,0.4908,0,0,0,57.2,57.4);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(91).to({_off:false},0).wait(1).to({regX:57,regY:57.1,scaleX:0.7,scaleY:0.7,x:310.05,y:606.5},0).wait(1).to({scaleX:0.9114,scaleY:0.9114,x:300,y:593.05},0).wait(1).to({scaleX:1.1239,scaleY:1.1239,x:289.9,y:579.45},0).wait(1).to({scaleX:1.3366,scaleY:1.3366,x:279.8,y:565.85},0).wait(1).to({scaleX:1.5487,scaleY:1.5487,x:269.7,y:552.35},0).wait(1).to({scaleX:1.759,scaleY:1.759,x:259.7,y:538.95},0).wait(1).to({scaleX:1.9667,scaleY:1.9667,x:249.85,y:525.65},0).wait(1).to({scaleX:2.1708,scaleY:2.1708,x:240.15,y:512.6},0).wait(1).to({scaleX:2.3707,scaleY:2.3707,x:230.65,y:499.85},0).wait(1).to({scaleX:2.5656,scaleY:2.5656,x:221.4,y:487.4},0).wait(1).to({scaleX:2.7548,scaleY:2.7548,x:212.35,y:475.35},0).wait(1).to({scaleX:2.9379,scaleY:2.9379,x:203.65,y:463.65},0).wait(1).to({scaleX:3.1145,scaleY:3.1145,x:195.25,y:452.35},0).wait(1).to({scaleX:3.2843,scaleY:3.2843,x:187.2,y:441.55},0).wait(1).to({scaleX:3.4472,scaleY:3.4472,x:179.55,y:431.15},0).wait(1).to({scaleX:3.603,scaleY:3.603,x:172.1,y:421.2},0).wait(1).to({regX:57.1,regY:57.5,scaleX:3.7516,scaleY:3.7516,x:165.75,y:412.8},0).wait(1).to({regX:57,regY:57.1,scaleX:3.747,scaleY:3.747,x:158.9,y:373.55},0).wait(1).to({scaleX:3.7425,scaleY:3.7425,x:152.7,y:337.7},0).wait(1).to({scaleX:3.7383,scaleY:3.7383,x:146.85,y:303.65},0).wait(1).to({scaleX:3.7343,scaleY:3.7343,x:141.25,y:271.45},0).wait(1).to({scaleX:3.7305,scaleY:3.7305,x:136,y:240.9},0).wait(1).to({scaleX:3.7269,scaleY:3.7269,x:131,y:212.15},0).wait(1).to({scaleX:3.7235,scaleY:3.7235,x:126.3,y:184.95},0).wait(1).to({scaleX:3.7203,scaleY:3.7203,x:121.85,y:159.35},0).wait(1).to({scaleX:3.7173,scaleY:3.7173,x:117.7,y:135.25},0).wait(1).to({scaleX:3.7145,scaleY:3.7145,x:113.8,y:112.65},0).wait(1).to({scaleX:3.7119,scaleY:3.7119,x:110.15,y:91.4},0).wait(1).to({scaleX:3.7094,scaleY:3.7094,x:106.7,y:71.55},0).wait(1).to({scaleX:3.7071,scaleY:3.7071,x:103.5,y:52.95},0).wait(1).to({scaleX:3.7049,scaleY:3.7049,x:100.5,y:35.65},0).wait(1).to({scaleX:3.7029,scaleY:3.7029,x:97.7,y:19.55},0).wait(1).to({scaleX:3.7011,scaleY:3.7011,x:95.1,y:4.55},0).wait(1).to({scaleX:3.6993,scaleY:3.6993,x:92.7,y:-9.3},0).wait(1).to({scaleX:3.6978,scaleY:3.6978,x:90.5,y:-22.15},0).wait(1).to({scaleX:3.6963,scaleY:3.6963,x:88.5,y:-34},0).wait(1).to({scaleX:3.6949,scaleY:3.6949,x:86.6,y:-44.8},0).wait(1).to({scaleX:3.6937,scaleY:3.6937,x:84.9,y:-54.75},0).wait(1).to({scaleX:3.6926,scaleY:3.6926,x:83.35,y:-63.7},0).wait(1).to({scaleX:3.6916,scaleY:3.6916,x:81.9,y:-71.85},0).wait(1).to({scaleX:3.6907,scaleY:3.6907,x:80.65,y:-79.2},0).wait(1).to({scaleX:3.6899,scaleY:3.6899,x:79.5,y:-85.7},0).wait(1).to({scaleX:3.6891,scaleY:3.6891,x:78.55,y:-91.45},0).wait(1).to({scaleX:3.6885,scaleY:3.6885,x:77.65,y:-96.5},0).wait(1).to({scaleX:3.688,scaleY:3.688,x:76.9,y:-100.75},0).wait(1).to({regX:57.1,regY:56.9,scaleX:3.6875,scaleY:3.6875,x:77,y:-103.15},0).to({_off:true},1).wait(380));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_155 = new cjs.Graphics().p("EhVHADOMBfShXyMBK+BRXMhfTBXyg");
	var mask_4_graphics_156 = new cjs.Graphics().p("EhVHADTMBfOhX4MBLBBRTMhfNBX4g");
	var mask_4_graphics_157 = new cjs.Graphics().p("EhVHADYMBfJhX9MBLGBRPMhfJBX8g");
	var mask_4_graphics_158 = new cjs.Graphics().p("EhVHADcMBfFhYCMBLKBRLMhfEBYBg");
	var mask_4_graphics_159 = new cjs.Graphics().p("EhVHADgMBfAhYGMBLPBRGMhfABYHg");
	var mask_4_graphics_160 = new cjs.Graphics().p("EhVHADlMBe7hYMMBLUBRDMhe7BYMg");
	var mask_4_graphics_161 = new cjs.Graphics().p("EhVGADqMBe2hYRMBLXBQ+Mhe2BYRg");
	var mask_4_graphics_162 = new cjs.Graphics().p("EhVGADuMBeyhYWMBLbBQ7MhexBYWg");
	var mask_4_graphics_163 = new cjs.Graphics().p("EhVFADzMBeshYbMBLfBQ2MhesBYbg");
	var mask_4_graphics_164 = new cjs.Graphics().p("EhVFAD3MBeohYfMBLkBQyMhepBYfg");
	var mask_4_graphics_165 = new cjs.Graphics().p("EhVFAD7MBekhYkMBLnBQvMhejBYkg");
	var mask_4_graphics_166 = new cjs.Graphics().p("EhVFAD/MBeghYpMBLrBQsMhefBYpg");
	var mask_4_graphics_167 = new cjs.Graphics().p("EhVFAEDMBechYtMBLvBQoMhecBYtg");
	var mask_4_graphics_168 = new cjs.Graphics().p("EhVFAEHMBeYhYxMBLzBQkMheYBYxg");
	var mask_4_graphics_169 = new cjs.Graphics().p("EhVFAELMBeVhY2MBL1BQhMheTBY2g");
	var mask_4_graphics_170 = new cjs.Graphics().p("EhVEAEOMBeQhY5MBL5BQdMheQBY6g");
	var mask_4_graphics_171 = new cjs.Graphics().p("EhVEAESMBeNhY9MBL8BQbMheMBY8g");
	var mask_4_graphics_172 = new cjs.Graphics().p("EhVEAEVMBeJhZBMBMABQYMheJBZBg");
	var mask_4_graphics_173 = new cjs.Graphics().p("EhVEAEYMBeGhZEMBMDBQVMheFBZEg");
	var mask_4_graphics_174 = new cjs.Graphics().p("EhVEAEbMBeDhZHMBMGBQSMheCBZHg");
	var mask_4_graphics_175 = new cjs.Graphics().p("EhVDAEeMBd/hZLMBMJBQQMheABZLg");
	var mask_4_graphics_176 = new cjs.Graphics().p("EhVDAEhMBd8hZOMBMMBQNMhd9BZOg");
	var mask_4_graphics_177 = new cjs.Graphics().p("EhVDAEkMBd5hZSMBMOBQLMhd5BZRg");
	var mask_4_graphics_178 = new cjs.Graphics().p("EhVDAEnMBd3hZVMBMQBQIMhd2BZVg");
	var mask_4_graphics_179 = new cjs.Graphics().p("EhVDAEpMBd0hZXMBMTBQGMhd0BZXg");
	var mask_4_graphics_180 = new cjs.Graphics().p("EhVDAEsMBdyhZaMBMVBQEMhdyBZZg");
	var mask_4_graphics_181 = new cjs.Graphics().p("EhVDAEuMBdwhZdMBMXBQDMhdvBZcg");
	var mask_4_graphics_182 = new cjs.Graphics().p("EhVDAEwMBduhZfMBMZBQAMhduBZfg");
	var mask_4_graphics_183 = new cjs.Graphics().p("EhVDAEyMBdshZhMBMaBP+MhdqBZhg");
	var mask_4_graphics_184 = new cjs.Graphics().p("EhVDAEzMBdqhZiMBMdBP8MhdqBZjg");
	var mask_4_graphics_185 = new cjs.Graphics().p("EhVCAE1MBdohZkMBMdBP7MhdnBZkg");
	var mask_4_graphics_186 = new cjs.Graphics().p("EhVDAE2MBdnhZlMBMgBP5MhdnBZmg");
	var mask_4_graphics_187 = new cjs.Graphics().p("EhVCAE5MBdkhZpMBMhBP5MhdkBZog");
	var mask_4_graphics_188 = new cjs.Graphics().p("EhVCAE6MBdjhZqMBMiBP4MhdjBZpg");
	var mask_4_graphics_189 = new cjs.Graphics().p("EhVCAE7MBdihZrMBMjBP2MhdiBZrg");
	var mask_4_graphics_190 = new cjs.Graphics().p("EhVCAE8MBdghZsMBMlBP1MhdhBZsg");
	var mask_4_graphics_191 = new cjs.Graphics().p("EhVCAE9MBdghZtMBMlBP0MhdgBZtg");
	var mask_4_graphics_192 = new cjs.Graphics().p("EhVCAE+MBdfhZuMBMmBPzMhdeBZug");
	var mask_4_graphics_193 = new cjs.Graphics().p("EhVCAE/MBdehZvMBMnBPyMhddBZvg");
	var mask_4_graphics_194 = new cjs.Graphics().p("EhVCAFAMBddhZwMBMoBPyMhddBZvg");
	var mask_4_graphics_195 = new cjs.Graphics().p("EhVCAFAMBdchZwMBMpBPwMhdcBZxg");
	var mask_4_graphics_196 = new cjs.Graphics().p("EhVCAFBMBdchZyMBMpBPxMhdcBZxg");
	var mask_4_graphics_197 = new cjs.Graphics().p("EhVCAFBMBdbhZxMBMqBPwMhdbBZxg");
	var mask_4_graphics_198 = new cjs.Graphics().p("EhVCAFCMBdbhZzMBMqBPwMhdbBZzg");
	var mask_4_graphics_199 = new cjs.Graphics().p("EhVCAFDMBdahZ0MBMrBPwMhdaBZzg");
	var mask_4_graphics_200 = new cjs.Graphics().p("EhVCAFDMBdahZ0MBMrBPvMhdZBZ0g");
	var mask_4_graphics_201 = new cjs.Graphics().p("EhVCAFDMBdZhZ0MBMsBPvMhdZBZ0g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(155).to({graphics:mask_4_graphics_155,x:143.25,y:300.025}).wait(1).to({graphics:mask_4_graphics_156,x:131.325,y:288.275}).wait(1).to({graphics:mask_4_graphics_157,x:119.325,y:276.375}).wait(1).to({graphics:mask_4_graphics_158,x:107.225,y:264.45}).wait(1).to({graphics:mask_4_graphics_159,x:95.125,y:252.5}).wait(1).to({graphics:mask_4_graphics_160,x:83.05,y:240.575}).wait(1).to({graphics:mask_4_graphics_161,x:71.1,y:228.775}).wait(1).to({graphics:mask_4_graphics_162,x:59.275,y:217.075}).wait(1).to({graphics:mask_4_graphics_163,x:47.65,y:205.6}).wait(1).to({graphics:mask_4_graphics_164,x:36.3,y:194.4}).wait(1).to({graphics:mask_4_graphics_165,x:25.175,y:183.45}).wait(1).to({graphics:mask_4_graphics_166,x:14.425,y:172.8}).wait(1).to({graphics:mask_4_graphics_167,x:4,y:162.5}).wait(1).to({graphics:mask_4_graphics_168,x:-6.025,y:152.575}).wait(1).to({graphics:mask_4_graphics_169,x:-15.7,y:143.025}).wait(1).to({graphics:mask_4_graphics_170,x:-24.975,y:133.9}).wait(1).to({graphics:mask_4_graphics_171,x:-33.825,y:125.125}).wait(1).to({graphics:mask_4_graphics_172,x:-42.3,y:116.775}).wait(1).to({graphics:mask_4_graphics_173,x:-51.25,y:82.2}).wait(1).to({graphics:mask_4_graphics_174,x:-59.775,y:49.325}).wait(1).to({graphics:mask_4_graphics_175,x:-67.85,y:18.125}).wait(1).to({graphics:mask_4_graphics_176,x:-75.5,y:-11.425}).wait(1).to({graphics:mask_4_graphics_177,x:-82.725,y:-39.4}).wait(1).to({graphics:mask_4_graphics_178,x:-89.575,y:-65.825}).wait(1).to({graphics:mask_4_graphics_179,x:-96,y:-90.75}).wait(1).to({graphics:mask_4_graphics_180,x:-102.1,y:-114.225}).wait(1).to({graphics:mask_4_graphics_181,x:-107.825,y:-136.3}).wait(1).to({graphics:mask_4_graphics_182,x:-113.175,y:-157.025}).wait(1).to({graphics:mask_4_graphics_183,x:-118.2,y:-176.475}).wait(1).to({graphics:mask_4_graphics_184,x:-122.925,y:-194.7}).wait(1).to({graphics:mask_4_graphics_185,x:-127.35,y:-211.725}).wait(1).to({graphics:mask_4_graphics_186,x:-131.45,y:-227.6}).wait(1).to({graphics:mask_4_graphics_187,x:-135.275,y:-242.4}).wait(1).to({graphics:mask_4_graphics_188,x:-138.825,y:-256.125}).wait(1).to({graphics:mask_4_graphics_189,x:-142.125,y:-268.825}).wait(1).to({graphics:mask_4_graphics_190,x:-145.15,y:-280.6}).wait(1).to({graphics:mask_4_graphics_191,x:-147.95,y:-291.425}).wait(1).to({graphics:mask_4_graphics_192,x:-150.55,y:-301.375}).wait(1).to({graphics:mask_4_graphics_193,x:-152.9,y:-310.425}).wait(1).to({graphics:mask_4_graphics_194,x:-155.025,y:-318.7}).wait(1).to({graphics:mask_4_graphics_195,x:-156.95,y:-326.15}).wait(1).to({graphics:mask_4_graphics_196,x:-158.7,y:-332.85}).wait(1).to({graphics:mask_4_graphics_197,x:-160.225,y:-338.85}).wait(1).to({graphics:mask_4_graphics_198,x:-161.6,y:-344.125}).wait(1).to({graphics:mask_4_graphics_199,x:-162.775,y:-348.725}).wait(1).to({graphics:mask_4_graphics_200,x:-163.825,y:-352.675}).wait(1).to({graphics:mask_4_graphics_201,x:-164.675,y:-355.975}).wait(1).to({graphics:null,x:0,y:0}).wait(316));

	// text2
	this.instance_32 = new lib.text2_1();
	this.instance_32.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	var maskedShapeInstanceList = [this.instance_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(118).to({_off:false},0).to({alpha:1},33,cjs.Ease.cubicOut).to({_off:true},51).wait(316));

	// Corolla
	this.instance_33 = new lib.CL_AnimationIn_mc();
	this.instance_33.setTransform(-145,356.95,0.753,0.753,0,0,0,149.8,125.7);
	this.instance_33._off = true;

	var maskedShapeInstanceList = [this.instance_33];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(107).to({_off:false},0).to({regX:149.9,regY:125.4,scaleX:0.9099,scaleY:0.9099,x:151.45,y:385.25},44,cjs.Ease.cubicOut).to({_off:true},51).wait(316));

	// WT1
	this.instance_34 = new lib.whiteTree_1();
	this.instance_34.setTransform(147,362.6,1,1,0,0,0,298,69);
	this.instance_34._off = true;

	var maskedShapeInstanceList = [this.instance_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(118).to({_off:false},0).to({_off:true},84).wait(316));

	// RT copy
	this.instance_35 = new lib.redTree_1();
	this.instance_35.setTransform(205.45,324.8,0.8899,0.8899,0,0,0,298.9,64.3);
	this.instance_35._off = true;

	var maskedShapeInstanceList = [this.instance_35];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(107).to({_off:false},0).to({_off:true},95).wait(316));

	// RT
	this.instance_36 = new lib.redTree_1();
	this.instance_36.setTransform(97.95,325,0.8899,0.8899,0,0,0,298.9,64.3);
	this.instance_36._off = true;

	var maskedShapeInstanceList = [this.instance_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(127).to({_off:false},0).to({_off:true},75).wait(316));

	// bookCover
	this.instance_37 = new lib.bookCover_1();
	this.instance_37.setTransform(0,125,1,1,0,0,0,0,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(30).to({scaleX:0.0134,skewY:-176.4645,x:2},38,cjs.Ease.quadIn).to({_off:true},1).wait(449));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_91 = new cjs.Graphics().p("EhVHADOMBfShXyMBK+BRXMhfTBXyg");
	var mask_5_graphics_92 = new cjs.Graphics().p("EhVHADTMBfOhX4MBLBBRTMhfNBX4g");
	var mask_5_graphics_93 = new cjs.Graphics().p("EhVHADYMBfJhX9MBLGBRPMhfJBX8g");
	var mask_5_graphics_94 = new cjs.Graphics().p("EhVHADcMBfFhYCMBLKBRLMhfEBYBg");
	var mask_5_graphics_95 = new cjs.Graphics().p("EhVHADgMBfAhYGMBLPBRGMhfABYHg");
	var mask_5_graphics_96 = new cjs.Graphics().p("EhVHADlMBe7hYMMBLUBRDMhe7BYMg");
	var mask_5_graphics_97 = new cjs.Graphics().p("EhVGADqMBe2hYRMBLXBQ+Mhe2BYRg");
	var mask_5_graphics_98 = new cjs.Graphics().p("EhVGADuMBeyhYWMBLbBQ7MhexBYWg");
	var mask_5_graphics_99 = new cjs.Graphics().p("EhVFADzMBeshYbMBLfBQ2MhesBYbg");
	var mask_5_graphics_100 = new cjs.Graphics().p("EhVFAD3MBeohYfMBLkBQyMhepBYfg");
	var mask_5_graphics_101 = new cjs.Graphics().p("EhVFAD7MBekhYkMBLnBQvMhejBYkg");
	var mask_5_graphics_102 = new cjs.Graphics().p("EhVFAD/MBeghYpMBLrBQsMhefBYpg");
	var mask_5_graphics_103 = new cjs.Graphics().p("EhVFAEDMBechYtMBLvBQoMhecBYtg");
	var mask_5_graphics_104 = new cjs.Graphics().p("EhVFAEHMBeYhYxMBLzBQkMheYBYxg");
	var mask_5_graphics_105 = new cjs.Graphics().p("EhVFAELMBeVhY2MBL1BQhMheTBY2g");
	var mask_5_graphics_106 = new cjs.Graphics().p("EhVEAEOMBeQhY5MBL5BQdMheQBY6g");
	var mask_5_graphics_107 = new cjs.Graphics().p("EhVEAESMBeNhY9MBL8BQbMheMBY8g");
	var mask_5_graphics_108 = new cjs.Graphics().p("EhVEAEVMBeJhZBMBMABQYMheJBZBg");
	var mask_5_graphics_109 = new cjs.Graphics().p("EhVEAEYMBeGhZEMBMDBQVMheFBZEg");
	var mask_5_graphics_110 = new cjs.Graphics().p("EhVEAEbMBeDhZHMBMGBQSMheCBZHg");
	var mask_5_graphics_111 = new cjs.Graphics().p("EhVDAEeMBd/hZLMBMJBQQMheABZLg");
	var mask_5_graphics_112 = new cjs.Graphics().p("EhVDAEhMBd8hZOMBMMBQNMhd9BZOg");
	var mask_5_graphics_113 = new cjs.Graphics().p("EhVDAEkMBd5hZSMBMOBQLMhd5BZRg");
	var mask_5_graphics_114 = new cjs.Graphics().p("EhVDAEnMBd3hZVMBMQBQIMhd2BZVg");
	var mask_5_graphics_115 = new cjs.Graphics().p("EhVDAEpMBd0hZXMBMTBQGMhd0BZXg");
	var mask_5_graphics_116 = new cjs.Graphics().p("EhVDAEsMBdyhZaMBMVBQEMhdyBZZg");
	var mask_5_graphics_117 = new cjs.Graphics().p("EhVDAEuMBdwhZdMBMXBQDMhdvBZcg");
	var mask_5_graphics_118 = new cjs.Graphics().p("EhVDAEwMBduhZfMBMZBQAMhduBZfg");
	var mask_5_graphics_119 = new cjs.Graphics().p("EhVDAEyMBdshZhMBMaBP+MhdqBZhg");
	var mask_5_graphics_120 = new cjs.Graphics().p("EhVDAEzMBdqhZiMBMdBP8MhdqBZjg");
	var mask_5_graphics_121 = new cjs.Graphics().p("EhVCAE1MBdohZkMBMdBP7MhdnBZkg");
	var mask_5_graphics_122 = new cjs.Graphics().p("EhVDAE2MBdnhZlMBMgBP5MhdnBZmg");
	var mask_5_graphics_123 = new cjs.Graphics().p("EhVCAE5MBdkhZpMBMhBP5MhdkBZog");
	var mask_5_graphics_124 = new cjs.Graphics().p("EhVCAE6MBdjhZqMBMiBP4MhdjBZpg");
	var mask_5_graphics_125 = new cjs.Graphics().p("EhVCAE7MBdihZrMBMjBP2MhdiBZrg");
	var mask_5_graphics_126 = new cjs.Graphics().p("EhVCAE8MBdghZsMBMlBP1MhdhBZsg");
	var mask_5_graphics_127 = new cjs.Graphics().p("EhVCAE9MBdghZtMBMlBP0MhdgBZtg");
	var mask_5_graphics_128 = new cjs.Graphics().p("EhVCAE+MBdfhZuMBMmBPzMhdeBZug");
	var mask_5_graphics_129 = new cjs.Graphics().p("EhVCAE/MBdehZvMBMnBPyMhddBZvg");
	var mask_5_graphics_130 = new cjs.Graphics().p("EhVCAFAMBddhZwMBMoBPyMhddBZvg");
	var mask_5_graphics_131 = new cjs.Graphics().p("EhVCAFAMBdchZwMBMpBPwMhdcBZxg");
	var mask_5_graphics_132 = new cjs.Graphics().p("EhVCAFBMBdchZyMBMpBPxMhdcBZxg");
	var mask_5_graphics_133 = new cjs.Graphics().p("EhVCAFBMBdbhZxMBMqBPwMhdbBZxg");
	var mask_5_graphics_134 = new cjs.Graphics().p("EhVCAFCMBdbhZzMBMqBPwMhdbBZzg");
	var mask_5_graphics_135 = new cjs.Graphics().p("EhVCAFDMBdahZ0MBMrBPwMhdaBZzg");
	var mask_5_graphics_136 = new cjs.Graphics().p("EhVCAFDMBdahZ0MBMrBPvMhdZBZ0g");
	var mask_5_graphics_137 = new cjs.Graphics().p("EhVCAFDMBdZhZ0MBMsBPvMhdZBZ0g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(91).to({graphics:mask_5_graphics_91,x:143.25,y:300.025}).wait(1).to({graphics:mask_5_graphics_92,x:131.325,y:288.275}).wait(1).to({graphics:mask_5_graphics_93,x:119.325,y:276.375}).wait(1).to({graphics:mask_5_graphics_94,x:107.225,y:264.45}).wait(1).to({graphics:mask_5_graphics_95,x:95.125,y:252.5}).wait(1).to({graphics:mask_5_graphics_96,x:83.05,y:240.575}).wait(1).to({graphics:mask_5_graphics_97,x:71.1,y:228.775}).wait(1).to({graphics:mask_5_graphics_98,x:59.275,y:217.075}).wait(1).to({graphics:mask_5_graphics_99,x:47.65,y:205.6}).wait(1).to({graphics:mask_5_graphics_100,x:36.3,y:194.4}).wait(1).to({graphics:mask_5_graphics_101,x:25.175,y:183.45}).wait(1).to({graphics:mask_5_graphics_102,x:14.425,y:172.8}).wait(1).to({graphics:mask_5_graphics_103,x:4,y:162.5}).wait(1).to({graphics:mask_5_graphics_104,x:-6.025,y:152.575}).wait(1).to({graphics:mask_5_graphics_105,x:-15.7,y:143.025}).wait(1).to({graphics:mask_5_graphics_106,x:-24.975,y:133.9}).wait(1).to({graphics:mask_5_graphics_107,x:-33.825,y:125.125}).wait(1).to({graphics:mask_5_graphics_108,x:-42.3,y:116.775}).wait(1).to({graphics:mask_5_graphics_109,x:-51.25,y:82.2}).wait(1).to({graphics:mask_5_graphics_110,x:-59.775,y:49.325}).wait(1).to({graphics:mask_5_graphics_111,x:-67.85,y:18.125}).wait(1).to({graphics:mask_5_graphics_112,x:-75.5,y:-11.425}).wait(1).to({graphics:mask_5_graphics_113,x:-82.725,y:-39.4}).wait(1).to({graphics:mask_5_graphics_114,x:-89.575,y:-65.825}).wait(1).to({graphics:mask_5_graphics_115,x:-96,y:-90.75}).wait(1).to({graphics:mask_5_graphics_116,x:-102.1,y:-114.225}).wait(1).to({graphics:mask_5_graphics_117,x:-107.825,y:-136.3}).wait(1).to({graphics:mask_5_graphics_118,x:-113.175,y:-157.025}).wait(1).to({graphics:mask_5_graphics_119,x:-118.2,y:-176.475}).wait(1).to({graphics:mask_5_graphics_120,x:-122.925,y:-194.7}).wait(1).to({graphics:mask_5_graphics_121,x:-127.35,y:-211.725}).wait(1).to({graphics:mask_5_graphics_122,x:-131.45,y:-227.6}).wait(1).to({graphics:mask_5_graphics_123,x:-135.275,y:-242.4}).wait(1).to({graphics:mask_5_graphics_124,x:-138.825,y:-256.125}).wait(1).to({graphics:mask_5_graphics_125,x:-142.125,y:-268.825}).wait(1).to({graphics:mask_5_graphics_126,x:-145.15,y:-280.6}).wait(1).to({graphics:mask_5_graphics_127,x:-147.95,y:-291.425}).wait(1).to({graphics:mask_5_graphics_128,x:-150.55,y:-301.375}).wait(1).to({graphics:mask_5_graphics_129,x:-152.9,y:-310.425}).wait(1).to({graphics:mask_5_graphics_130,x:-155.025,y:-318.7}).wait(1).to({graphics:mask_5_graphics_131,x:-156.95,y:-326.15}).wait(1).to({graphics:mask_5_graphics_132,x:-158.7,y:-332.85}).wait(1).to({graphics:mask_5_graphics_133,x:-160.225,y:-338.85}).wait(1).to({graphics:mask_5_graphics_134,x:-161.6,y:-344.125}).wait(1).to({graphics:mask_5_graphics_135,x:-162.775,y:-348.725}).wait(1).to({graphics:mask_5_graphics_136,x:-163.825,y:-352.675}).wait(1).to({graphics:mask_5_graphics_137,x:-164.675,y:-355.975}).wait(1).to({graphics:null,x:0,y:0}).wait(380));

	// text1
	this.instance_38 = new lib.text1_1();
	this.instance_38.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_38.alpha = 0;
	this.instance_38._off = true;

	var maskedShapeInstanceList = [this.instance_38];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(47).to({_off:false},0).to({alpha:1},44,cjs.Ease.cubicOut).to({_off:true},47).wait(380));

	// HighlanderIn copy
	this.instance_39 = new lib.HI_AnimationIn_mc();
	this.instance_39.setTransform(-138.35,348.85,0.738,0.738,0,0,0,149.8,125.7);
	this.instance_39._off = true;

	var maskedShapeInstanceList = [this.instance_39];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(47).to({_off:false},0).to({regX:150,regY:125.3,scaleX:0.8918,scaleY:0.8918,x:152.3,y:376.55},44,cjs.Ease.cubicOut).to({_off:true},47).wait(380));

	// RT2
	this.instance_40 = new lib.redTree_1();
	this.instance_40.setTransform(151.7,311.2,0.8899,0.8899,0,0,0,298.9,64.3);
	this.instance_40._off = true;

	var maskedShapeInstanceList = [this.instance_40];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(67).to({_off:false},0).to({_off:true},71).wait(380));

	// WT
	this.instance_41 = new lib.whiteTree_1();
	this.instance_41.setTransform(201.55,350.8,0.9012,0.9012,0,0,0,297.9,69);
	this.instance_41._off = true;

	var maskedShapeInstanceList = [this.instance_41];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(47).to({_off:false},0).to({_off:true},91).wait(380));

	// WT
	this.instance_42 = new lib.whiteTree_1();
	this.instance_42.setTransform(87,350.95,0.9012,0.9012,0,0,0,297.9,69);
	this.instance_42._off = true;

	var maskedShapeInstanceList = [this.instance_42];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(58).to({_off:false},0).to({_off:true},80).wait(380));

	// border
	this.instance_43 = new lib.border();
	this.instance_43.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(518));

	// logo
	this.instance_44 = new lib.logo_1();
	this.instance_44.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).to({_off:true},399).wait(119));

	// back
	this.instance_45 = new lib.back();
	this.instance_45.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(518));

	// offerLoad
	this.offer_mc_1 = new lib.offer_mc();
	this.offer_mc_1.name = "offer_mc_1";
	this.offer_mc_1.setTransform(161,89,1,1,0,0,0,93,44);

	this.timeline.addTween(cjs.Tween.get(this.offer_mc_1).wait(518));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.1,-133,788.1,781);
// library properties:
lib.properties = {
	id: '6DBC25FFFD4048B3B488CE195B1E3C32',
	width: 300,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bookCover.png?1604617326464", id:"bookCover"},
		{src:"images/border.png?1604617326464", id:"border"},
		{src:"images/CL.png?1604617326464", id:"CL"},
		{src:"images/CL_wheel.png?1604617326464", id:"CL_wheel"},
		{src:"images/cta.png?1604617326464", id:"cta"},
		{src:"images/CY.png?1604617326464", id:"CY"},
		{src:"images/CY_wheel.png?1604617326464", id:"CY_wheel"},
		{src:"images/details.png?1604617326464", id:"details"},
		{src:"images/HI.png?1604617326464", id:"HI"},
		{src:"images/HI_wheel.png?1604617326464", id:"HI_wheel"},
		{src:"images/logo.png?1604617326464", id:"logo"},
		{src:"images/offerTitle.png?1604617326464", id:"offerTitle"},
		{src:"images/options.png?1604617326464", id:"options"},
		{src:"images/pageFlip.png?1604617326464", id:"pageFlip"},
		{src:"images/redTree.png?1604617326464", id:"redTree"},
		{src:"images/RV.png?1604617326464", id:"RV"},
		{src:"images/RV_wheel.png?1604617326464", id:"RV_wheel"},
		{src:"images/text1.png?1604617326464", id:"text1"},
		{src:"images/text2.png?1604617326464", id:"text2"},
		{src:"images/text3.png?1604617326464", id:"text3"},
		{src:"images/text4.png?1604617326464", id:"text4"},
		{src:"images/text5.png?1604617326464", id:"text5"},
		{src:"images/whiteTree.png?1604617326464", id:"whiteTree"}
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