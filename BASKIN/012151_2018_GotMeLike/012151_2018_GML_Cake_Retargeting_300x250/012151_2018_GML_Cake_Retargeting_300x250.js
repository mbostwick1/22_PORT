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


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.PP = function() {
	this.initialize(img.PP);
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
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text5 = function() {
	this.initialize(img.text5);
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


(lib.text5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text5_1, new cjs.Rectangle(0,0,300,250), null);


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


(lib.PP_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.PP();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.PP_1, new cjs.Rectangle(0,0,300,250), null);


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


(lib.girl_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.girl_1, new cjs.Rectangle(0,0,300,250), null);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,300,250), null);


(lib.cake_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cake();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cake_1, new cjs.Rectangle(0,0,300,250), null);


// stage content:
(lib._012151_2018_GML_Cake_Retargeting_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//FlashTalking clickTag
		this.clickTag.addEventListener("click", clickThrough);
		
		function clickThrough() {
			myFT.clickTag(1);
		}
	}
	this.frame_451 = function() {
		//FlashTalking clickTag
		this.clickTag.addEventListener("click", clickThrough);
		
		function clickThrough() {
			myFT.clickTag(1);
		}
	}
	this.frame_529 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(451).call(this.frame_451).wait(78).call(this.frame_529).wait(1));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.parent = this;
	this.clickTag.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(530));

	// cta
	this.instance = new lib.cta_1();
	this.instance.parent = this;
	this.instance.setTransform(150.1,95.1,0.547,0.547,0,0,0,150,95.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(493).to({_off:false},0).to({scaleX:1,scaleY:1,x:150,alpha:1},36,cjs.Ease.elasticOut).wait(1));

	// text5
	this.instance_1 = new lib.text5_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(476).to({_off:false},0).wait(54));

	// text4
	this.instance_2 = new lib.text4_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.1,-30.9,1,1,-38,0,0,19,135);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:134.9,rotation:1.2,x:19,y:135.9},50,cjs.Ease.quartIn).to({regY:135,rotation:0,y:135},3,cjs.Ease.quartIn).wait(398).to({alpha:0},25,cjs.Ease.cubicOut).wait(54));

	// text3
	this.instance_3 = new lib.text3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(134,-12,1,1,32.5,0,0,134,120);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({rotation:-1.7,x:134.1,y:122},50,cjs.Ease.quartIn).to({rotation:0,x:134,y:120},3,cjs.Ease.quartIn).wait(392).to({alpha:0},25,cjs.Ease.cubicOut).wait(54));

	// text2
	this.instance_4 = new lib.text2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(18.9,-13.9,1,1,-31.7,0,0,18.9,80);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({regX:19,regY:80.1,rotation:1,x:19,y:82.1},50,cjs.Ease.quartIn).to({regY:80,rotation:0,y:80},3,cjs.Ease.quartIn).wait(386).to({alpha:0},25,cjs.Ease.cubicOut).wait(54));

	// text1
	this.instance_5 = new lib.text1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(131,-34,1,1,25.5,0,0,130.5,53.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).to({regX:130.6,regY:54,rotation:-0.4,x:131.1,y:56.1},50,cjs.Ease.quartIn).to({regX:130.5,rotation:0,x:131,y:54.1},3,cjs.Ease.quartIn).wait(378).to({alpha:0},25,cjs.Ease.cubicOut).wait(54));

	// girl
	this.instance_6 = new lib.girl_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(451).to({regY:45.1,scaleX:1.39,scaleY:1.39,x:389.6,y:62.6,alpha:0},25,cjs.Ease.cubicInOut).wait(54));

	// cake
	this.instance_7 = new lib.cake_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(199.2,117.7,0.677,0.677,0,0,0,150.2,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(105).to({_off:false},0).wait(15).to({x:198.7,y:94.5},0).wait(15).to({x:200.5,y:77.5},0).wait(14).to({x:198.7,y:94.5},0).wait(15).to({x:199.2,y:117.7},0).to({_off:true},15).wait(74).to({_off:false},0).wait(15).to({x:198.7,y:94.5},0).wait(15).to({x:200.5,y:77.5},0).wait(15).to({x:198.7,y:94.5},0).wait(15).to({x:199.2,y:117.7},0).to({_off:true},14).wait(74).to({_off:false},0).wait(17).to({x:198.7,y:94.5},0).wait(16).to({x:200.5,y:77.5},0).wait(17).to({regX:150,scaleX:1,scaleY:1,x:150,y:125},25,cjs.Ease.cubicInOut).wait(54));

	// PP
	this.instance_8 = new lib.PP_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(258.5,130,0.819,0.819,0,0,0,150.1,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(179).to({_off:false},0).wait(14).to({regX:150.2,regY:124.9,x:257.7,y:107.3},0).wait(15).to({regX:150.1,regY:124.8,x:257.2,y:88.5},0).wait(15).to({regX:150.2,regY:124.9,x:257.7,y:107.3},0).wait(15).to({regX:150.1,regY:125,x:258.5,y:130},0).to({_off:true},15).wait(74).to({_off:false},0).wait(14).to({regX:150.2,regY:124.9,x:257.7,y:107.3},0).wait(15).to({regX:150.1,regY:124.8,x:257.2,y:88.5},0).wait(15).to({regX:150.2,regY:124.9,x:257.7,y:107.3},0).wait(15).to({regX:150.1,regY:125,x:258.5,y:130},0).to({_off:true},15).wait(50).to({_off:false,regX:150,regY:124.8,scaleX:0.78,scaleY:0.78,x:207.6,y:62.9,alpha:0},0).to({regY:125,scaleX:1,scaleY:1,x:150,y:125,alpha:1},25,cjs.Ease.cubicInOut).wait(54));

	// blue
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0695EE").s().p("AoMHCIAAuDIQZAAIAAODg");
	this.shape.setTransform(247.6,100);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(6,149,238,0.996)").s().p("AoNHCIAAuDIQbAAIAAODg");
	this.shape_1.setTransform(247.5,100.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(6,149,238,0.992)").s().p("AoNHDIAAuFIQbAAIAAOFg");
	this.shape_2.setTransform(247.4,100.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(6,149,238,0.984)").s().p("AoPHFIAAuJIQfAAIAAOJg");
	this.shape_3.setTransform(247.2,100.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(6,149,238,0.969)").s().p("AoTHHIAAuNIQmAAIAAONg");
	this.shape_4.setTransform(247,101.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(6,149,238,0.945)").s().p("AoXHMIAAuXIQvAAIAAOXg");
	this.shape_5.setTransform(246.5,102.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(6,149,238,0.914)").s().p("AoeHRIAAuhIQ9AAIAAOhg");
	this.shape_6.setTransform(245.9,103.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(6,149,238,0.871)").s().p("AonHZIAAuxIRPAAIAAOxg");
	this.shape_7.setTransform(245,105.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(6,149,238,0.816)").s().p("AoyHiIAAvDIRlAAIAAPDg");
	this.shape_8.setTransform(244,107.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(6,149,238,0.745)").s().p("ApAHvIAAvcISBAAIAAPcg");
	this.shape_9.setTransform(242.6,109.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(6,149,238,0.663)").s().p("ApRH9IAAv5ISjAAIAAP5g");
	this.shape_10.setTransform(241,113.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(6,149,238,0.561)").s().p("ApmIPIAAwdITNAAIAAQdg");
	this.shape_11.setTransform(239.1,117.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(6,149,238,0.447)").s().p("Ap9IjIAAxFIT7AAIAARFg");
	this.shape_12.setTransform(236.8,121.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(6,149,238,0.345)").s().p("AqRI0IAAxnIUjAAIAARng");
	this.shape_13.setTransform(234.9,125.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(6,149,238,0.263)").s().p("AqjJDIAAyFIVHAAIAASFg");
	this.shape_14.setTransform(233.2,128.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(6,149,238,0.192)").s().p("AqxJPIAAydIVjAAIAASdg");
	this.shape_15.setTransform(231.9,131.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(6,149,238,0.137)").s().p("Aq8JZIAAyxIV5AAIAASxg");
	this.shape_16.setTransform(230.8,133.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(6,149,238,0.094)").s().p("ArFJgIAAy/IWLAAIAAS/g");
	this.shape_17.setTransform(230,135.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(6,149,238,0.063)").s().p("ArLJmIAAzLIWXAAIAATLg");
	this.shape_18.setTransform(229.4,136.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(6,149,238,0.039)").s().p("ArQJqIAAzTIWhAAIAATTg");
	this.shape_19.setTransform(228.9,137.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(6,149,238,0.024)").s().p("ArTJtIAAzZIWnAAIAATZg");
	this.shape_20.setTransform(228.6,138);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(6,149,238,0.016)").s().p("ArVJuIAAzbIWrAAIAATbg");
	this.shape_21.setTransform(228.4,138.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(6,149,238,0.012)").s().p("ArWJvIAAzdIWtAAIAATdg");
	this.shape_22.setTransform(228.4,138.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(6,149,238,0.008)").s().p("ArXJvIAAzdIWuAAIAATdg");
	this.shape_23.setTransform(228.3,138.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},451).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[]},1).wait(53));

	// logo
	this.instance_9 = new lib.logo_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(43.1,209.1,0.421,0.421,0,0,0,43.1,209);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:43,scaleX:1,scaleY:1,x:43,y:209,alpha:1},58,cjs.Ease.elasticOut).wait(472));

	// back
	this.instance_10 = new lib.back();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(530));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(71,-185.2,390.4,560.3);
// library properties:
lib.properties = {
	id: '2223DAE7740E48509D7598A6580DA45F',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1522246170664", id:"back"},
		{src:"images/cake.png?1522246170664", id:"cake"},
		{src:"images/cta.png?1522246170664", id:"cta"},
		{src:"images/girl.png?1522246170664", id:"girl"},
		{src:"images/logo.png?1522246170664", id:"logo"},
		{src:"images/PP.png?1522246170664", id:"PP"},
		{src:"images/text1.png?1522246170664", id:"text1"},
		{src:"images/text2.png?1522246170664", id:"text2"},
		{src:"images/text3.png?1522246170664", id:"text3"},
		{src:"images/text4.png?1522246170664", id:"text4"},
		{src:"images/text5.png?1522246170664", id:"text5"}
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