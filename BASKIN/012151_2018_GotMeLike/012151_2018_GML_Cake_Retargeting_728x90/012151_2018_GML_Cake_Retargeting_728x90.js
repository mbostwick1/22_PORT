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


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.PP = function() {
	this.initialize(img.PP);
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


(lib.PP_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.PP();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.PP_1, new cjs.Rectangle(0,0,728,90), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,728,90), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cakeGlasses, new cjs.Rectangle(90,0,405,57.6), null);


// stage content:
(lib._012151_2018_GML_Cake_Retargeting_728x90 = function(mode,startPosition,loop) {
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
	this.clickTag.setTransform(364,45,1,1,0,0,0,364,45);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(516));

	// cta
	this.instance = new lib.cta_1();
	this.instance.parent = this;
	this.instance.setTransform(404.1,45,0.556,0.556,0,0,0,404,45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(479).to({_off:false},0).to({regX:404.1,scaleX:1,scaleY:1,alpha:1},36,cjs.Ease.elasticOut).wait(1));

	// text3
	this.instance_1 = new lib.text3_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(462).to({_off:false},0).wait(54));

	// text2
	this.instance_2 = new lib.text2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(114.6,-29.4,1,1,-31.9,0,0,113,71);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:1,x:113.1,y:74},50,cjs.Ease.quartIn).to({rotation:0,x:113,y:71},3,cjs.Ease.cubicIn).wait(384).to({alpha:0},25,cjs.Ease.cubicOut).wait(54));

	// text1
	this.instance_3 = new lib.text1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(342,-27,1,1,35.7,0,0,343,31.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({regY:32,rotation:-0.4,x:343.1,y:33.1},50,cjs.Ease.quartIn).to({rotation:0,x:343,y:32},3,cjs.Ease.cubicIn).wait(376).to({alpha:0},25,cjs.Ease.cubicOut).wait(54));

	// girl
	this.instance_4 = new lib.girl_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(437).to({scaleX:1.78,scaleY:1.78,x:230.2,y:43.1,alpha:0},25,cjs.Ease.cubicInOut).wait(54));

	// endCake
	this.instance_5 = new lib.endCake();
	this.instance_5.parent = this;
	this.instance_5.setTransform(459.2,49.8,0.556,0.556,0,0,0,363.9,51.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(437).to({_off:false},0).to({regX:364,scaleX:1,scaleY:1,x:398,y:51.8,alpha:1},25,cjs.Ease.cubicInOut).wait(54));

	// PP
	this.instance_6 = new lib.PP_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(437).to({_off:false},0).to({alpha:1},25,cjs.Ease.cubicInOut).wait(54));

	// PP_glasses
	this.instance_7 = new lib.PP_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(460.1,89.1,0.673,0.673,0,0,0,364.1,45.1);
	this.instance_7._off = true;

	this.instance_8 = new lib.PP_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(372.1,89.1,0.673,0.673,0,0,0,364.1,45.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8,p:{y:89.1}},{t:this.instance_7}]},165).to({state:[{t:this.instance_8,p:{y:68.1}},{t:this.instance_7}]},14).to({state:[{t:this.instance_8,p:{y:54.1}},{t:this.instance_7}]},15).to({state:[{t:this.instance_8,p:{y:68.1}},{t:this.instance_7}]},15).to({state:[{t:this.instance_8,p:{y:89.1}},{t:this.instance_7}]},15).to({state:[]},15).to({state:[{t:this.instance_8,p:{y:89.1}},{t:this.instance_7}]},74).to({state:[{t:this.instance_8,p:{y:68.1}},{t:this.instance_7}]},14).to({state:[{t:this.instance_8,p:{y:54.1}},{t:this.instance_7}]},15).to({state:[{t:this.instance_8,p:{y:68.1}},{t:this.instance_7}]},15).to({state:[{t:this.instance_8,p:{y:89.1}},{t:this.instance_7}]},15).to({state:[{t:this.instance_7}]},15).to({state:[{t:this.instance_7}]},16).to({state:[{t:this.instance_7}]},17).to({state:[{t:this.instance_7}]},17).to({state:[{t:this.instance_7}]},25).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(165).to({_off:false},0).wait(14).to({y:68.1},0).wait(15).to({y:54.1},0).wait(15).to({y:68.1},0).wait(15).to({y:89.1},0).to({_off:true},15).wait(74).to({_off:false},0).wait(14).to({y:68.1},0).wait(15).to({y:54.1},0).wait(15).to({y:68.1},0).wait(15).to({y:89.1},0).wait(15).to({x:372.1},0).wait(16).to({y:68.1},0).wait(17).to({y:54.1},0).wait(17).to({regX:364,regY:45.2,scaleX:1.12,scaleY:1.12,x:261.1,y:56.2,alpha:0},25,cjs.Ease.cubicInOut).wait(54));

	// cakes
	this.instance_9 = new lib.cake();
	this.instance_9.parent = this;
	this.instance_9.setTransform(170,53,0.278,0.278);

	this.instance_10 = new lib.cakeGlasses();
	this.instance_10.parent = this;
	this.instance_10.setTransform(414.5,82.8,1,1,0,0,0,247.5,28.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10},{t:this.instance_9,p:{y:53}}]},91).to({state:[{t:this.instance_10},{t:this.instance_9,p:{y:38}}]},15).to({state:[{t:this.instance_10},{t:this.instance_9,p:{y:20}}]},15).to({state:[{t:this.instance_10},{t:this.instance_9,p:{y:38}}]},14).to({state:[{t:this.instance_10},{t:this.instance_9,p:{y:53}}]},15).to({state:[]},15).to({state:[{t:this.instance_10},{t:this.instance_9,p:{y:53}}]},74).to({state:[{t:this.instance_10},{t:this.instance_9,p:{y:38}}]},15).to({state:[{t:this.instance_10},{t:this.instance_9,p:{y:20}}]},15).to({state:[{t:this.instance_10},{t:this.instance_9,p:{y:38}}]},14).to({state:[{t:this.instance_10},{t:this.instance_9,p:{y:53}}]},15).to({state:[]},15).to({state:[{t:this.instance_10}]},74).to({state:[{t:this.instance_10}]},16).to({state:[{t:this.instance_10}]},17).to({state:[{t:this.instance_10}]},17).to({state:[{t:this.instance_10}]},25).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(91).to({_off:false},0).wait(15).to({x:415.5,y:65.8},0).wait(15).to({x:414.5,y:49.8},0).wait(14).to({x:415.5,y:65.8},0).wait(15).to({x:414.5,y:82.8},0).to({_off:true},15).wait(74).to({_off:false},0).wait(15).to({x:415.5,y:65.8},0).wait(15).to({x:414.5,y:48.8},0).wait(14).to({x:415.5,y:65.8},0).wait(15).to({x:414.5,y:82.8},0).to({_off:true},15).wait(74).to({_off:false},0).wait(16).to({x:415.5,y:65.8},0).wait(17).to({x:414.5,y:49.8},0).wait(17).to({scaleX:1.78,scaleY:1.78,x:319.9,y:51.6,alpha:0},25,cjs.Ease.cubicInOut).wait(54));

	// blue
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0695EE").s().p("AtWHCIAAuDIatAAIAAODg");
	this.shape.setTransform(551.5,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(6,149,238,0.996)").s().p("AtXHDIAAuFIavAAIAAOFg");
	this.shape_1.setTransform(551.5,45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(6,149,238,0.992)").s().p("AtbHFIAAuJIa3AAIAAOJg");
	this.shape_2.setTransform(551.6,45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(6,149,238,0.984)").s().p("AthHIIAAuPIbDAAIAAOPg");
	this.shape_3.setTransform(551.7,45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(6,149,238,0.969)").s().p("AtrHNIAAuZIbXAAIAAOZg");
	this.shape_4.setTransform(551.9,44.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(6,149,238,0.945)").s().p("At7HWIAAurIb3AAIAAOrg");
	this.shape_5.setTransform(552.2,44.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(6,149,238,0.914)").s().p("AuRHhIAAvBIciAAIAAPBg");
	this.shape_6.setTransform(552.6,44.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(6,149,238,0.871)").s().p("AutHwIAAvfIdbAAIAAPfg");
	this.shape_7.setTransform(553.1,44.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(6,149,238,0.816)").s().p("AvSIDIAAwFIelAAIAAQFg");
	this.shape_8.setTransform(553.7,44.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(6,149,238,0.745)").s().p("AwAIcIAAw3MAgBAAAIAAQ3g");
	this.shape_9.setTransform(554.6,44.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(6,149,238,0.663)").s().p("Aw5I5IAAxxMAhyAAAIAARxg");
	this.shape_10.setTransform(555.6,44.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(6,149,238,0.561)").s().p("Ax8JcIAAy3MAj5AAAIAAS3g");
	this.shape_11.setTransform(556.8,44.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(6,149,238,0.447)").s().p("AzIKFIAA0JMAmRAAAIAAUJg");
	this.shape_12.setTransform(558.2,43.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(6,149,238,0.345)").s().p("A0MKpIAA1RMAoZAAAIAAVRg");
	this.shape_13.setTransform(559.4,43.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(6,149,238,0.263)").s().p("A1FLGIAA2LMAqLAAAIAAWLg");
	this.shape_14.setTransform(560.4,43.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(6,149,238,0.192)").s().p("A1zLfIAA28MArmAAAIAAW8g");
	this.shape_15.setTransform(561.2,43.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(6,149,238,0.137)").s().p("A2YLyIAA3jMAswAAAIAAXjg");
	this.shape_16.setTransform(561.9,43.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(6,149,238,0.094)").s().p("A20MBIAA4BMAtpAAAIAAYBg");
	this.shape_17.setTransform(562.4,43.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(6,149,238,0.063)").s().p("A3KMMIAA4XMAuVAAAIAAYXg");
	this.shape_18.setTransform(562.8,43.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(6,149,238,0.039)").s().p("A3aMVIAA4pMAu0AAAIAAYpg");
	this.shape_19.setTransform(563.1,43.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(6,149,238,0.024)").s().p("A3kMaIAA4zMAvJAAAIAAYzg");
	this.shape_20.setTransform(563.2,43.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(6,149,238,0.016)").s().p("A3qMdIAA45MAvVAAAIAAY5g");
	this.shape_21.setTransform(563.4,43.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(6,149,238,0.012)").s().p("A3tMfIAA49MAvbAAAIAAY9g");
	this.shape_22.setTransform(563.4,43.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(6,149,238,0.008)").s().p("A3vMgIAA4/MAvfAAAIAAY/g");
	this.shape_23.setTransform(563.4,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},437).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[]},1).wait(53));

	// logo
	this.instance_11 = new lib.logo_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(48,45,0.422,0.422,0,0,0,48,45);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1,scaleY:1,alpha:1},58,cjs.Ease.elasticOut).wait(458));

	// back
	this.instance_12 = new lib.back();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(516));

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
		{src:"images/back.jpg?1522101882664", id:"back"},
		{src:"images/cake.png?1522101882664", id:"cake"},
		{src:"images/cta.png?1522101882664", id:"cta"},
		{src:"images/girl.png?1522101882664", id:"girl"},
		{src:"images/logo.png?1522101882664", id:"logo"},
		{src:"images/PP.png?1522101882664", id:"PP"},
		{src:"images/text1.png?1522101882664", id:"text1"},
		{src:"images/text2.png?1522101882664", id:"text2"},
		{src:"images/text3.png?1522101882664", id:"text3"}
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