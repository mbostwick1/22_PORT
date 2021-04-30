(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.headline1 = function() {
	this.initialize(img.headline1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.headline2 = function() {
	this.initialize(img.headline2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.highlander = function() {
	this.initialize(img.highlander);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.image2 = function() {
	this.initialize(img.image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.image3 = function() {
	this.initialize(img.image3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,583);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.options = function() {
	this.initialize(img.options);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.toyota = function() {
	this.initialize(img.toyota);
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


(lib.toyota_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.toyota();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.toyota_1, new cjs.Rectangle(0,0,300,250), null);


(lib.redBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED1B2F").s().p("AgYTiMAAAgnDIAxAAMAAAAnDg");
	this.shape.setTransform(2.5,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redBar, new cjs.Rectangle(0,0,5,250), null);


(lib.options_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.options();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.options_1, new cjs.Rectangle(0,0,300,250), null);


(lib.offerTitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAqBgIgohQIgBAAIglAAIgOBQIgVAAIAii/IA2AAQAaAAAOANQAPANAAAWQAAAXgNARQgNAPgZAFIAsBTgAghAAIAlAAQAMAAAMgFQAKgFAHgKQAHgKgBgPQABgRgLgHQgLgIgSAAIggAAg");
	this.shape.setTransform(164.9,34.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhFBgIAii/IBpAAIgDASIhVAAIgLBFIBRAAIgDAQIhSAAIgMBFIBWAAIgEATg");
	this.shape_1.setTransform(149.1,34.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhXBgIAhi/IA2AAQApAAAYAWQAYAVgBAnQAAAfgNAZQgOAZgZAOQgYAOghAAgAhBBOIAuAAQAaAAATgMQAUgMALgVQALgUAAgYQAAgggTgRQgTgRgjAAIggAAg");
	this.shape_2.setTransform(130.85,34.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AApBgIhVifIgdCfIgUAAIAii/IATAAIBWCfIAcifIAUAAIgiC/g");
	this.shape_3.setTransform(110.65,34.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABABgIgMg/IhQAAIgiA/IgVAAIBqi/IAWAAIAnC/gAAwARIgShZIgwBZIBCAAg");
	this.shape_4.setTransform(89.875,34.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1BgIAii/IATAAIgeCsIBUAAIgCATg");
	this.shape_5.setTransform(75.1,34.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlBgIAQhXIhsAAIgPBXIgUAAIAii/IAUAAIgQBXIBsAAIAPhXIAUAAIgiC/g");
	this.shape_6.setTransform(58.55,34.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyBYQgTgLgLgUQgLgTAAgaQAAgeAOgZQAOgZAZgPQAZgOAfgBQAUAAAQAHQAQAFAPAKIgIASQgOgJgOgGQgOgFgSAAQgZAAgUAMQgUAMgLAUQgLAUAAAYQAAAVAIAPQAIARAQAIQAPAJAUAAQATAAAQgIQAQgIAJgNQAKgOAEgPIhDAAIADgQIBVAAIgQBaIgTAAIAGgfQgbAhgrABQgYAAgTgLg");
	this.shape_7.setTransform(37.325,34.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaBgIAhi/IAUAAIghC/g");
	this.shape_8.setTransform(22.975,34.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAlBgIAQhXIhsAAIgPBXIgVAAIAji/IAUAAIgQBXIBsAAIAPhXIAUAAIghC/g");
	this.shape_9.setTransform(9.15,34.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpBCQgLgPAAgZQAAgbAIgZQAGgaANgNQAIgHAJgEQAIgDAKAAQAVAAALAOQALAOAAAZQAAAegIAZQgHAZgMANQgIAHgIADQgJADgJAAQgVAAgMgOgAgNg2QgLALgFAXQgHAWAAAZQAAASAIAKQAHALAOAAQAHAAAFgCQAFgDAFgFQAKgLAGgXQAGgWAAgZQAAgngcAAQgMAAgKAKg");
	this.shape_10.setTransform(192.55,11.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag0BPIABgLIA6g5QAQgPAHgKQAHgKAAgNQAAgMgHgHQgHgIgOAAQgUAAgSAUIgIgNQAWgVAaAAQAUAAALALQALALAAARQAAAQgIANQgJAMgSASIguAtIBLAAIgCAOg");
	this.shape_11.setTransform(179.325,11.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpBCQgLgPAAgZQAAgbAIgZQAGgaANgNQAIgHAJgEQAIgDAKAAQAVAAALAOQALAOAAAZQAAAegHAZQgIAZgMANQgIAHgIADQgIADgKAAQgVAAgMgOgAgNg2QgKALgHAXQgGAWAAAZQAAASAIAKQAHALAOAAQAHAAAFgCQAFgDAFgFQAKgLAGgXQAGgWAAgZQAAgngcAAQgNAAgJAKg");
	this.shape_12.setTransform(167.25,11.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag0BPIABgLIA6g5QAQgPAHgKQAHgKAAgNQAAgMgHgHQgHgIgOAAQgUAAgSAUIgIgNQAWgVAaAAQAUAAALALQALALAAARQAAAQgIANQgJAMgSASIguAtIBLAAIgCAOg");
	this.shape_13.setTransform(154.025,11.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAMBOIgPiEIhACEIgQAAIgRibIAQAAIANCDIBAiDIAOAAIAQCDIA9iDIARAAIhICbg");
	this.shape_14.setTransform(133.075,11.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag4BOIAcibIBVAAIgDAPIhEAAIgKA3IBCAAIgDAOIhBAAIgLA4IBGAAIgCAPg");
	this.shape_15.setTransform(114.625,11.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAhBOIhFiCIgXCCIgRAAIAcibIAQAAIBGCCIAWiCIAQAAIgbCbg");
	this.shape_16.setTransform(99.9,11.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgmAHIACgNIBLAAIgCANg");
	this.shape_17.setTransform(86.375,13.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgsBOIAcibIAQAAIgZCMIBFAAIgCAPg");
	this.shape_18.setTransform(75.65,11.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgrBOIAcibIAPAAIgYCMIBEAAIgDAPg");
	this.shape_19.setTransform(64.35,11.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA1BOIgLgzIhBAAIgcAzIgRAAIBXibIARAAIAhCbgAAnANIgOhIIgoBIIA2AAg");
	this.shape_20.setTransform(50.8,11.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag4BOIAcibIBVAAIgDAPIhEAAIgKA3IBCAAIgDAOIhBAAIgLA4IBGAAIgCAPg");
	this.shape_21.setTransform(33.275,11.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAeBOIANhHIhXAAIgNBHIgQAAIAcibIAPAAIgMBGIBYAAIAMhGIAQAAIgbCbg");
	this.shape_22.setTransform(18.75,11.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AghBOIAZiMIgsAAIACgPIBnAAIgDAPIgqAAIgYCMg");
	this.shape_23.setTransform(6.075,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.offerTitle, new cjs.Rectangle(-3.3,-15.7,275.6,68.5), null);


(lib.offer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// *
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAKIgMAUIgMgIIAQgSIgXgEIAFgPIAVAJIgCgXIAPAAIgDAXIAXgJIAEAPIgXAEIAPASIgMAIg");
	this.shape.setTransform(-5.2,-76.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// dynamic_field1
	this.dynamic_field1 = new cjs.Text("0.0%", "23px 'Toyota Type Book'", "#FFFFFF");
	this.dynamic_field1.name = "dynamic_field1";
	this.dynamic_field1.lineHeight = 33;
	this.dynamic_field1.lineWidth = 67;
	this.dynamic_field1.parent = this;
	this.dynamic_field1.setTransform(-63.7,-89.35,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field1).wait(1));

	// dynamic_field2
	this.dynamic_field2 = new cjs.Text("APR FOR 00 MONTHS", "7px 'Toyota Type'", "#FFFFFF");
	this.dynamic_field2.name = "dynamic_field2";
	this.dynamic_field2.lineHeight = 10;
	this.dynamic_field2.lineWidth = 119;
	this.dynamic_field2.parent = this;
	this.dynamic_field2.setTransform(1.4427,-81.8,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field2).wait(1));

	// dynamic_field3
	this.dynamic_field3 = new cjs.Text("$0 DOWN WITH APPROVED CREDIT", "7px 'Toyota Type'", "#FFFFFF");
	this.dynamic_field3.name = "dynamic_field3";
	this.dynamic_field3.lineHeight = 8;
	this.dynamic_field3.lineWidth = 85;
	this.dynamic_field3.parent = this;
	this.dynamic_field3.setTransform(1.4286,-73,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field3).wait(1));

	// dynamic_field4
	this.dynamic_field4 = new cjs.Text("PLUS $500 BONUS CASH", "bold 8px 'Toyota Type'", "#FFFFFF");
	this.dynamic_field4.name = "dynamic_field4";
	this.dynamic_field4.lineHeight = 11;
	this.dynamic_field4.lineWidth = 119;
	this.dynamic_field4.parent = this;
	this.dynamic_field4.setTransform(0.4321,-53.8,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.offer_mc, new cjs.Rectangle(-65.9,-91.5,202.9,54), null);


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


(lib.image3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.image3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image3_1, new cjs.Rectangle(0,0,350,291.5), null);


(lib.image2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.image2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image2_1, new cjs.Rectangle(0,0,300,250), null);


(lib.image1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.image1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image1_1, new cjs.Rectangle(0,0,300,250), null);


(lib.highlander_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.highlander();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.highlander_1, new cjs.Rectangle(0,0,300,250), null);


(lib.headline2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.headline2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headline2_1, new cjs.Rectangle(0,0,300,250), null);


(lib.headline1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.headline1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headline1_1, new cjs.Rectangle(0,0,300,250), null);


(lib.details_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAcQgFgCgEgDIADgHIAHAEIAIACQAFAAADgDQADgCAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgDgDIgHgDIgIgDQgDgCgCgDQgCgDAAgEQAAgIAFgEQAFgEAHAAIAJABIAHACIgCAIIgHgDIgHgBQgDAAgDACQgDACAAAEQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAIAEADIAGADIAJADQADABACADQACADAAAFQAAAIgFAFQgGAEgIAAQgEAAgFgBg");
	this.shape.setTransform(31.975,4.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAdIAAg4IAIAAIAAAwIAXAAIAAAIg");
	this.shape_1.setTransform(27.875,4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAdIAAg4IAHAAIAAA4g");
	this.shape_2.setTransform(24.375,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARAdIgGgSIgVAAIgGASIgJAAIAWg4IAHAAIAWA4gAAIAEIgIgWIgIAWIAQAAg");
	this.shape_3.setTransform(20.475,4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAdIAAgxIgQAAIAAgHIAnAAIAAAHIgQAAIAAAxg");
	this.shape_4.setTransform(15.65,4.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAdIAAg4IAgAAIAAAHIgXAAIAAARIAXAAIAAAGIgXAAIAAASIAYAAIAAAIg");
	this.shape_5.setTransform(11.3,4.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAdIAAg4IATAAQAIgBAGAEQAHADAEAHQADAGAAAIQAAAIgDAHQgEAGgHAEQgGADgIABgAgPAVIAKAAQAGAAAFgCQAEgDADgFQADgFAAgGQAAgFgDgFQgDgFgEgCQgFgDgGAAIgKAAg");
	this.shape_6.setTransform(6.075,4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAFIgEAJIgGgEIAHgIIgKgCIACgGIAKAEIgBgLIAFAAIAAALIAJgEIACAGIgKACIAHAIIgFAEg");
	this.shape_7.setTransform(1.225,3.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66FFFF").s().p("AizAtIAAhZIFnAAIAABZg");
	this.shape_8.setTransform(18,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-3.7,38.9,15.399999999999999);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cta();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,300,250), null);


(lib.image3Anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_479 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(479).call(this.frame_479).wait(1));

	// Layer_1
	this.instance = new lib.image3_1();
	this.instance.setTransform(175.05,145.8,0.8629,0.8629,0,0,0,175,145.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:145.7,scaleX:1.0399,scaleY:1.0399,y:139.8},479,cjs.Ease.quadOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-11.7,363.9,303.09999999999997);


(lib.image2Anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_300 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(300).call(this.frame_300).wait(33));

	// image2
	this.instance = new lib.image2_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:149.7,regY:124.5,scaleX:1.2172,scaleY:1.2172,x:150.05,y:130.75},300).wait(33));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-21.2,365.4,304.7);


(lib.image1Anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_239 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(239).call(this.frame_239).wait(1));

	// image1
	this.instance = new lib.image1_1();
	this.instance.setTransform(149.85,125.05,1.1512,1.1512,0,0,0,149.8,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:150,regY:125,scaleX:1,scaleY:1,x:150,y:125},239).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.6,-18.7,345.40000000000003,287.8);


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
				src: 'https://offers.seteventshowroom.com/xml/' + _xmlid + '.xml',
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
	this.frame_1 = function() {
		var tl = this;
		tl.stop();
		var delay = 500;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_61 = function() {
		var tl = this;
		tl.stop();
		var delay = 2000;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_114 = function() {
		var tl = this;
		tl.stop();
		var delay = 2000;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_175 = function() {
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
	this.frame_234 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(60).call(this.frame_61).wait(53).call(this.frame_114).wait(61).call(this.frame_175).wait(59).call(this.frame_234).wait(1));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(235));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(235));

	// line
	this.instance = new lib.redBar();
	this.instance.setTransform(-2.5,125,1,1,0,0,0,2.5,125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({x:303.5},59,cjs.Ease.quadOut).wait(1).to({x:-2.5},52,cjs.Ease.quadOut).wait(1).to({x:303.5},60,cjs.Ease.quadOut).wait(1).to({x:302.5},0).to({x:-3.5},58,cjs.Ease.quadOut).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_176 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_177 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_178 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_179 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_180 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_181 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_182 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_183 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_184 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_185 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_186 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_187 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_188 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_189 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_190 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_191 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_192 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_193 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_194 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_195 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_196 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_197 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_198 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_199 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_200 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_201 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_202 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_203 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_204 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_205 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_206 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_207 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_208 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_209 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_210 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_211 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_212 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_213 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_214 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_215 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_216 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_217 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_218 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_219 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_220 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_221 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_222 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_223 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_224 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_225 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_226 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_227 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_228 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_229 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_230 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_231 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_232 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_233 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_234 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(176).to({graphics:mask_graphics_176,x:454,y:125}).wait(1).to({graphics:mask_graphics_177,x:443.6,y:125}).wait(1).to({graphics:mask_graphics_178,x:433.35,y:125}).wait(1).to({graphics:mask_graphics_179,x:423.25,y:125}).wait(1).to({graphics:mask_graphics_180,x:413.4,y:125}).wait(1).to({graphics:mask_graphics_181,x:403.7,y:125}).wait(1).to({graphics:mask_graphics_182,x:394.15,y:125}).wait(1).to({graphics:mask_graphics_183,x:384.8,y:125}).wait(1).to({graphics:mask_graphics_184,x:375.65,y:125}).wait(1).to({graphics:mask_graphics_185,x:366.7,y:125}).wait(1).to({graphics:mask_graphics_186,x:357.9,y:125}).wait(1).to({graphics:mask_graphics_187,x:349.3,y:125}).wait(1).to({graphics:mask_graphics_188,x:340.85,y:125}).wait(1).to({graphics:mask_graphics_189,x:332.6,y:125}).wait(1).to({graphics:mask_graphics_190,x:324.55,y:125}).wait(1).to({graphics:mask_graphics_191,x:316.65,y:125}).wait(1).to({graphics:mask_graphics_192,x:308.95,y:125}).wait(1).to({graphics:mask_graphics_193,x:301.4,y:125}).wait(1).to({graphics:mask_graphics_194,x:294.05,y:125}).wait(1).to({graphics:mask_graphics_195,x:286.9,y:125}).wait(1).to({graphics:mask_graphics_196,x:279.9,y:125}).wait(1).to({graphics:mask_graphics_197,x:273.1,y:125}).wait(1).to({graphics:mask_graphics_198,x:266.5,y:125}).wait(1).to({graphics:mask_graphics_199,x:260.05,y:125}).wait(1).to({graphics:mask_graphics_200,x:253.8,y:125}).wait(1).to({graphics:mask_graphics_201,x:247.75,y:125}).wait(1).to({graphics:mask_graphics_202,x:241.85,y:125}).wait(1).to({graphics:mask_graphics_203,x:236.15,y:125}).wait(1).to({graphics:mask_graphics_204,x:230.6,y:125}).wait(1).to({graphics:mask_graphics_205,x:225.25,y:125}).wait(1).to({graphics:mask_graphics_206,x:220.1,y:125}).wait(1).to({graphics:mask_graphics_207,x:215.1,y:125}).wait(1).to({graphics:mask_graphics_208,x:210.3,y:125}).wait(1).to({graphics:mask_graphics_209,x:205.65,y:125}).wait(1).to({graphics:mask_graphics_210,x:201.25,y:125}).wait(1).to({graphics:mask_graphics_211,x:196.95,y:125}).wait(1).to({graphics:mask_graphics_212,x:192.9,y:125}).wait(1).to({graphics:mask_graphics_213,x:189,y:125}).wait(1).to({graphics:mask_graphics_214,x:185.25,y:125}).wait(1).to({graphics:mask_graphics_215,x:181.75,y:125}).wait(1).to({graphics:mask_graphics_216,x:178.4,y:125}).wait(1).to({graphics:mask_graphics_217,x:175.2,y:125}).wait(1).to({graphics:mask_graphics_218,x:172.2,y:125}).wait(1).to({graphics:mask_graphics_219,x:169.4,y:125}).wait(1).to({graphics:mask_graphics_220,x:166.75,y:125}).wait(1).to({graphics:mask_graphics_221,x:164.35,y:125}).wait(1).to({graphics:mask_graphics_222,x:162.05,y:125}).wait(1).to({graphics:mask_graphics_223,x:159.95,y:125}).wait(1).to({graphics:mask_graphics_224,x:158.05,y:125}).wait(1).to({graphics:mask_graphics_225,x:156.35,y:125}).wait(1).to({graphics:mask_graphics_226,x:154.8,y:125}).wait(1).to({graphics:mask_graphics_227,x:153.45,y:125}).wait(1).to({graphics:mask_graphics_228,x:152.25,y:125}).wait(1).to({graphics:mask_graphics_229,x:151.25,y:125}).wait(1).to({graphics:mask_graphics_230,x:150.45,y:125}).wait(1).to({graphics:mask_graphics_231,x:149.8,y:125}).wait(1).to({graphics:mask_graphics_232,x:149.35,y:125}).wait(1).to({graphics:mask_graphics_233,x:149.1,y:125}).wait(1).to({graphics:mask_graphics_234,x:149,y:125}).wait(1));

	// details
	this.instance_1 = new lib.details_btn();
	this.instance_1.setTransform(21,89);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.details_btn(), 3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(176).to({_off:false},0).wait(59));

	// cta
	this.instance_2 = new lib.cta_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(176).to({_off:false},0).wait(59));

	// options
	this.instance_3 = new lib.options_1();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(176).to({_off:false},0).wait(59));

	// toyota
	this.instance_4 = new lib.toyota_1();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(176).to({_off:false},0).wait(59));

	// offer_mc
	this.instance_5 = new lib.offer_mc();
	this.instance_5.setTransform(117,75,1,1,0,0,0,43.6,-64.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(176).to({_off:false},0).wait(59));

	// logo_bug
	this.instance_6 = new lib.logo_1();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(235));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_176 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_177 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_178 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_179 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_180 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_181 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_182 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_183 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_184 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_185 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_186 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_187 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_188 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_189 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_190 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_191 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_192 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_193 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_194 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_195 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_196 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_197 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_198 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_199 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_200 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_201 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_202 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_203 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_204 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_205 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_206 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_207 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_208 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_209 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_210 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_211 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_212 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_213 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_214 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_215 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_216 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_217 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_218 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_219 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_220 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_221 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_222 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_223 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_224 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_225 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_226 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_227 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_228 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_229 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_230 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_231 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_232 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_233 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_234 = new cjs.Graphics().p("A35TiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(176).to({graphics:mask_1_graphics_176,x:150,y:125}).wait(1).to({graphics:mask_1_graphics_177,x:139.55,y:125}).wait(1).to({graphics:mask_1_graphics_178,x:129.25,y:125}).wait(1).to({graphics:mask_1_graphics_179,x:119.15,y:125}).wait(1).to({graphics:mask_1_graphics_180,x:109.25,y:125}).wait(1).to({graphics:mask_1_graphics_181,x:99.5,y:125}).wait(1).to({graphics:mask_1_graphics_182,x:89.95,y:125}).wait(1).to({graphics:mask_1_graphics_183,x:80.6,y:125}).wait(1).to({graphics:mask_1_graphics_184,x:71.4,y:125}).wait(1).to({graphics:mask_1_graphics_185,x:62.4,y:125}).wait(1).to({graphics:mask_1_graphics_186,x:53.6,y:125}).wait(1).to({graphics:mask_1_graphics_187,x:44.95,y:125}).wait(1).to({graphics:mask_1_graphics_188,x:36.5,y:125}).wait(1).to({graphics:mask_1_graphics_189,x:28.2,y:125}).wait(1).to({graphics:mask_1_graphics_190,x:20.1,y:125}).wait(1).to({graphics:mask_1_graphics_191,x:12.2,y:125}).wait(1).to({graphics:mask_1_graphics_192,x:4.45,y:125}).wait(1).to({graphics:mask_1_graphics_193,x:-3.1,y:125}).wait(1).to({graphics:mask_1_graphics_194,x:-10.45,y:125}).wait(1).to({graphics:mask_1_graphics_195,x:-17.65,y:125}).wait(1).to({graphics:mask_1_graphics_196,x:-24.65,y:125}).wait(1).to({graphics:mask_1_graphics_197,x:-31.45,y:125}).wait(1).to({graphics:mask_1_graphics_198,x:-38.1,y:125}).wait(1).to({graphics:mask_1_graphics_199,x:-44.55,y:125}).wait(1).to({graphics:mask_1_graphics_200,x:-50.85,y:125}).wait(1).to({graphics:mask_1_graphics_201,x:-56.95,y:125}).wait(1).to({graphics:mask_1_graphics_202,x:-62.85,y:125}).wait(1).to({graphics:mask_1_graphics_203,x:-68.6,y:125}).wait(1).to({graphics:mask_1_graphics_204,x:-74.15,y:125}).wait(1).to({graphics:mask_1_graphics_205,x:-79.5,y:125}).wait(1).to({graphics:mask_1_graphics_206,x:-84.7,y:125}).wait(1).to({graphics:mask_1_graphics_207,x:-89.7,y:125}).wait(1).to({graphics:mask_1_graphics_208,x:-94.5,y:125}).wait(1).to({graphics:mask_1_graphics_209,x:-99.15,y:125}).wait(1).to({graphics:mask_1_graphics_210,x:-103.6,y:125}).wait(1).to({graphics:mask_1_graphics_211,x:-107.9,y:125}).wait(1).to({graphics:mask_1_graphics_212,x:-111.95,y:125}).wait(1).to({graphics:mask_1_graphics_213,x:-115.9,y:125}).wait(1).to({graphics:mask_1_graphics_214,x:-119.6,y:125}).wait(1).to({graphics:mask_1_graphics_215,x:-123.15,y:125}).wait(1).to({graphics:mask_1_graphics_216,x:-126.5,y:125}).wait(1).to({graphics:mask_1_graphics_217,x:-129.7,y:125}).wait(1).to({graphics:mask_1_graphics_218,x:-132.7,y:125}).wait(1).to({graphics:mask_1_graphics_219,x:-135.55,y:125}).wait(1).to({graphics:mask_1_graphics_220,x:-138.15,y:125}).wait(1).to({graphics:mask_1_graphics_221,x:-140.6,y:125}).wait(1).to({graphics:mask_1_graphics_222,x:-142.9,y:125}).wait(1).to({graphics:mask_1_graphics_223,x:-145,y:125}).wait(1).to({graphics:mask_1_graphics_224,x:-146.9,y:125}).wait(1).to({graphics:mask_1_graphics_225,x:-148.65,y:125}).wait(1).to({graphics:mask_1_graphics_226,x:-150.2,y:125}).wait(1).to({graphics:mask_1_graphics_227,x:-151.55,y:125}).wait(1).to({graphics:mask_1_graphics_228,x:-152.7,y:125}).wait(1).to({graphics:mask_1_graphics_229,x:-153.7,y:125}).wait(1).to({graphics:mask_1_graphics_230,x:-154.55,y:125}).wait(1).to({graphics:mask_1_graphics_231,x:-155.2,y:125}).wait(1).to({graphics:mask_1_graphics_232,x:-155.65,y:125}).wait(1).to({graphics:mask_1_graphics_233,x:-155.9,y:125}).wait(1).to({graphics:mask_1_graphics_234,x:-153,y:125}).wait(1));

	// options copy
	this.instance_7 = new lib.options_1();
	this.instance_7.setTransform(150,148,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},234).wait(1));

	// highlander
	this.instance_8 = new lib.highlander_1();
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},234).wait(1));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_2 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_3 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_4 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_5 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_6 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_7 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_8 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_9 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_10 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_11 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_12 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_13 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_14 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_15 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_16 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_17 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_18 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_19 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_20 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_21 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_22 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_23 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_24 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_25 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_26 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_27 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_28 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_29 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_30 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_31 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_32 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_33 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_34 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_35 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_36 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_37 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_38 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_39 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_40 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_41 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_42 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_43 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_44 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_45 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_46 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_47 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_48 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_49 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_50 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_51 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_52 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_53 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_54 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_55 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_56 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_57 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_58 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_59 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_60 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_61 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_62 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_63 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_64 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_65 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_66 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_67 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_68 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_69 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_70 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_71 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_72 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_73 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_74 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_75 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_76 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_77 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_78 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_79 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_80 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_81 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_82 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_83 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_84 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_85 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_86 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_87 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_88 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_89 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_90 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_91 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_92 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_93 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_94 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_95 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_96 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_97 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_98 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_99 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_100 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_101 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_102 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_103 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_104 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_105 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_106 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_107 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_108 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_109 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_110 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_111 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_112 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_113 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_114 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_2_graphics_2,x:-155,y:125}).wait(1).to({graphics:mask_2_graphics_3,x:-144.75,y:125}).wait(1).to({graphics:mask_2_graphics_4,x:-134.7,y:125}).wait(1).to({graphics:mask_2_graphics_5,x:-124.75,y:125}).wait(1).to({graphics:mask_2_graphics_6,x:-115.05,y:125}).wait(1).to({graphics:mask_2_graphics_7,x:-105.5,y:125}).wait(1).to({graphics:mask_2_graphics_8,x:-96.1,y:125}).wait(1).to({graphics:mask_2_graphics_9,x:-86.9,y:125}).wait(1).to({graphics:mask_2_graphics_10,x:-77.9,y:125}).wait(1).to({graphics:mask_2_graphics_11,x:-69.05,y:125}).wait(1).to({graphics:mask_2_graphics_12,x:-60.4,y:125}).wait(1).to({graphics:mask_2_graphics_13,x:-51.85,y:125}).wait(1).to({graphics:mask_2_graphics_14,x:-43.55,y:125}).wait(1).to({graphics:mask_2_graphics_15,x:-35.4,y:125}).wait(1).to({graphics:mask_2_graphics_16,x:-27.45,y:125}).wait(1).to({graphics:mask_2_graphics_17,x:-19.65,y:125}).wait(1).to({graphics:mask_2_graphics_18,x:-12,y:125}).wait(1).to({graphics:mask_2_graphics_19,x:-4.55,y:125}).wait(1).to({graphics:mask_2_graphics_20,x:2.7,y:125}).wait(1).to({graphics:mask_2_graphics_21,x:9.8,y:125}).wait(1).to({graphics:mask_2_graphics_22,x:16.75,y:125}).wait(1).to({graphics:mask_2_graphics_23,x:23.5,y:125}).wait(1).to({graphics:mask_2_graphics_24,x:30.05,y:125}).wait(1).to({graphics:mask_2_graphics_25,x:36.45,y:125}).wait(1).to({graphics:mask_2_graphics_26,x:42.65,y:125}).wait(1).to({graphics:mask_2_graphics_27,x:48.7,y:125}).wait(1).to({graphics:mask_2_graphics_28,x:54.6,y:125}).wait(1).to({graphics:mask_2_graphics_29,x:60.3,y:125}).wait(1).to({graphics:mask_2_graphics_30,x:65.8,y:125}).wait(1).to({graphics:mask_2_graphics_31,x:71.15,y:125}).wait(1).to({graphics:mask_2_graphics_32,x:76.3,y:125}).wait(1).to({graphics:mask_2_graphics_33,x:81.3,y:125}).wait(1).to({graphics:mask_2_graphics_34,x:86.1,y:125}).wait(1).to({graphics:mask_2_graphics_35,x:90.75,y:125}).wait(1).to({graphics:mask_2_graphics_36,x:95.25,y:125}).wait(1).to({graphics:mask_2_graphics_37,x:99.55,y:125}).wait(1).to({graphics:mask_2_graphics_38,x:103.65,y:125}).wait(1).to({graphics:mask_2_graphics_39,x:107.6,y:125}).wait(1).to({graphics:mask_2_graphics_40,x:111.35,y:125}).wait(1).to({graphics:mask_2_graphics_41,x:114.95,y:125}).wait(1).to({graphics:mask_2_graphics_42,x:118.35,y:125}).wait(1).to({graphics:mask_2_graphics_43,x:121.6,y:125}).wait(1).to({graphics:mask_2_graphics_44,x:124.7,y:125}).wait(1).to({graphics:mask_2_graphics_45,x:127.55,y:125}).wait(1).to({graphics:mask_2_graphics_46,x:130.3,y:125}).wait(1).to({graphics:mask_2_graphics_47,x:132.8,y:125}).wait(1).to({graphics:mask_2_graphics_48,x:135.2,y:125}).wait(1).to({graphics:mask_2_graphics_49,x:137.4,y:125}).wait(1).to({graphics:mask_2_graphics_50,x:139.4,y:125}).wait(1).to({graphics:mask_2_graphics_51,x:141.25,y:125}).wait(1).to({graphics:mask_2_graphics_52,x:142.9,y:125}).wait(1).to({graphics:mask_2_graphics_53,x:144.4,y:125}).wait(1).to({graphics:mask_2_graphics_54,x:145.7,y:125}).wait(1).to({graphics:mask_2_graphics_55,x:146.85,y:125}).wait(1).to({graphics:mask_2_graphics_56,x:147.8,y:125}).wait(1).to({graphics:mask_2_graphics_57,x:148.6,y:125}).wait(1).to({graphics:mask_2_graphics_58,x:149.2,y:125}).wait(1).to({graphics:mask_2_graphics_59,x:149.65,y:125}).wait(1).to({graphics:mask_2_graphics_60,x:149.9,y:125}).wait(1).to({graphics:mask_2_graphics_61,x:150,y:125}).wait(1).to({graphics:mask_2_graphics_62,x:151,y:125}).wait(1).to({graphics:mask_2_graphics_63,x:139.35,y:125}).wait(1).to({graphics:mask_2_graphics_64,x:127.9,y:125}).wait(1).to({graphics:mask_2_graphics_65,x:116.7,y:125}).wait(1).to({graphics:mask_2_graphics_66,x:105.75,y:125}).wait(1).to({graphics:mask_2_graphics_67,x:95,y:125}).wait(1).to({graphics:mask_2_graphics_68,x:84.45,y:125}).wait(1).to({graphics:mask_2_graphics_69,x:74.15,y:125}).wait(1).to({graphics:mask_2_graphics_70,x:64.1,y:125}).wait(1).to({graphics:mask_2_graphics_71,x:54.25,y:125}).wait(1).to({graphics:mask_2_graphics_72,x:44.65,y:125}).wait(1).to({graphics:mask_2_graphics_73,x:35.25,y:125}).wait(1).to({graphics:mask_2_graphics_74,x:26.05,y:125}).wait(1).to({graphics:mask_2_graphics_75,x:17.15,y:125}).wait(1).to({graphics:mask_2_graphics_76,x:8.4,y:125}).wait(1).to({graphics:mask_2_graphics_77,x:-0.05,y:125}).wait(1).to({graphics:mask_2_graphics_78,x:-8.35,y:125}).wait(1).to({graphics:mask_2_graphics_79,x:-16.35,y:125}).wait(1).to({graphics:mask_2_graphics_80,x:-24.2,y:125}).wait(1).to({graphics:mask_2_graphics_81,x:-31.75,y:125}).wait(1).to({graphics:mask_2_graphics_82,x:-39.1,y:125}).wait(1).to({graphics:mask_2_graphics_83,x:-46.25,y:125}).wait(1).to({graphics:mask_2_graphics_84,x:-53.15,y:125}).wait(1).to({graphics:mask_2_graphics_85,x:-59.8,y:125}).wait(1).to({graphics:mask_2_graphics_86,x:-66.3,y:125}).wait(1).to({graphics:mask_2_graphics_87,x:-72.5,y:125}).wait(1).to({graphics:mask_2_graphics_88,x:-78.5,y:125}).wait(1).to({graphics:mask_2_graphics_89,x:-84.25,y:125}).wait(1).to({graphics:mask_2_graphics_90,x:-89.8,y:125}).wait(1).to({graphics:mask_2_graphics_91,x:-95.15,y:125}).wait(1).to({graphics:mask_2_graphics_92,x:-100.25,y:125}).wait(1).to({graphics:mask_2_graphics_93,x:-105.1,y:125}).wait(1).to({graphics:mask_2_graphics_94,x:-109.75,y:125}).wait(1).to({graphics:mask_2_graphics_95,x:-114.15,y:125}).wait(1).to({graphics:mask_2_graphics_96,x:-118.35,y:125}).wait(1).to({graphics:mask_2_graphics_97,x:-122.3,y:125}).wait(1).to({graphics:mask_2_graphics_98,x:-126.05,y:125}).wait(1).to({graphics:mask_2_graphics_99,x:-129.55,y:125}).wait(1).to({graphics:mask_2_graphics_100,x:-132.8,y:125}).wait(1).to({graphics:mask_2_graphics_101,x:-135.85,y:125}).wait(1).to({graphics:mask_2_graphics_102,x:-138.7,y:125}).wait(1).to({graphics:mask_2_graphics_103,x:-141.3,y:125}).wait(1).to({graphics:mask_2_graphics_104,x:-143.7,y:125}).wait(1).to({graphics:mask_2_graphics_105,x:-145.85,y:125}).wait(1).to({graphics:mask_2_graphics_106,x:-147.75,y:125}).wait(1).to({graphics:mask_2_graphics_107,x:-149.45,y:125}).wait(1).to({graphics:mask_2_graphics_108,x:-150.9,y:125}).wait(1).to({graphics:mask_2_graphics_109,x:-152.15,y:125}).wait(1).to({graphics:mask_2_graphics_110,x:-153.2,y:125}).wait(1).to({graphics:mask_2_graphics_111,x:-154,y:125}).wait(1).to({graphics:mask_2_graphics_112,x:-154.55,y:125}).wait(1).to({graphics:mask_2_graphics_113,x:-154.9,y:125}).wait(1).to({graphics:mask_2_graphics_114,x:-155,y:125}).wait(1).to({graphics:null,x:0,y:0}).wait(120));

	// headline1
	this.instance_9 = new lib.headline1_1();
	this.instance_9.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({_off:true},113).wait(120));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_115 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_116 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_117 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_118 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_119 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_120 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_121 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_122 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_123 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_124 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_125 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_126 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_127 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_128 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_129 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_130 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_131 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_132 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_133 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_134 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_135 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_136 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_137 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_138 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_139 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_140 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_141 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_142 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_143 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_144 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_145 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_146 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_147 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_148 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_149 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_150 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_151 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_152 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_153 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_154 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_155 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_156 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_157 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_158 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_159 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_160 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_161 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_162 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_163 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_164 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_165 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_166 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_167 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_168 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_169 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_170 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_171 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_172 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_173 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_174 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_3_graphics_175 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(115).to({graphics:mask_3_graphics_115,x:-155,y:125}).wait(1).to({graphics:mask_3_graphics_116,x:-144.9,y:125}).wait(1).to({graphics:mask_3_graphics_117,x:-134.95,y:125}).wait(1).to({graphics:mask_3_graphics_118,x:-125.15,y:125}).wait(1).to({graphics:mask_3_graphics_119,x:-115.55,y:125}).wait(1).to({graphics:mask_3_graphics_120,x:-106.15,y:125}).wait(1).to({graphics:mask_3_graphics_121,x:-96.85,y:125}).wait(1).to({graphics:mask_3_graphics_122,x:-87.75,y:125}).wait(1).to({graphics:mask_3_graphics_123,x:-78.85,y:125}).wait(1).to({graphics:mask_3_graphics_124,x:-70.1,y:125}).wait(1).to({graphics:mask_3_graphics_125,x:-61.5,y:125}).wait(1).to({graphics:mask_3_graphics_126,x:-53.1,y:125}).wait(1).to({graphics:mask_3_graphics_127,x:-44.85,y:125}).wait(1).to({graphics:mask_3_graphics_128,x:-36.75,y:125}).wait(1).to({graphics:mask_3_graphics_129,x:-28.85,y:125}).wait(1).to({graphics:mask_3_graphics_130,x:-21.1,y:125}).wait(1).to({graphics:mask_3_graphics_131,x:-13.55,y:125}).wait(1).to({graphics:mask_3_graphics_132,x:-6.15,y:125}).wait(1).to({graphics:mask_3_graphics_133,x:1.05,y:125}).wait(1).to({graphics:mask_3_graphics_134,x:8.1,y:125}).wait(1).to({graphics:mask_3_graphics_135,x:15,y:125}).wait(1).to({graphics:mask_3_graphics_136,x:21.7,y:125}).wait(1).to({graphics:mask_3_graphics_137,x:28.25,y:125}).wait(1).to({graphics:mask_3_graphics_138,x:34.65,y:125}).wait(1).to({graphics:mask_3_graphics_139,x:40.85,y:125}).wait(1).to({graphics:mask_3_graphics_140,x:46.85,y:125}).wait(1).to({graphics:mask_3_graphics_141,x:52.75,y:125}).wait(1).to({graphics:mask_3_graphics_142,x:58.45,y:125}).wait(1).to({graphics:mask_3_graphics_143,x:63.95,y:125}).wait(1).to({graphics:mask_3_graphics_144,x:69.3,y:125}).wait(1).to({graphics:mask_3_graphics_145,x:74.5,y:125}).wait(1).to({graphics:mask_3_graphics_146,x:79.5,y:125}).wait(1).to({graphics:mask_3_graphics_147,x:84.35,y:125}).wait(1).to({graphics:mask_3_graphics_148,x:89.05,y:125}).wait(1).to({graphics:mask_3_graphics_149,x:93.55,y:125}).wait(1).to({graphics:mask_3_graphics_150,x:97.85,y:125}).wait(1).to({graphics:mask_3_graphics_151,x:102.05,y:125}).wait(1).to({graphics:mask_3_graphics_152,x:106.05,y:125}).wait(1).to({graphics:mask_3_graphics_153,x:109.85,y:125}).wait(1).to({graphics:mask_3_graphics_154,x:113.5,y:125}).wait(1).to({graphics:mask_3_graphics_155,x:117,y:125}).wait(1).to({graphics:mask_3_graphics_156,x:120.3,y:125}).wait(1).to({graphics:mask_3_graphics_157,x:123.45,y:125}).wait(1).to({graphics:mask_3_graphics_158,x:126.45,y:125}).wait(1).to({graphics:mask_3_graphics_159,x:129.25,y:125}).wait(1).to({graphics:mask_3_graphics_160,x:131.9,y:125}).wait(1).to({graphics:mask_3_graphics_161,x:134.35,y:125}).wait(1).to({graphics:mask_3_graphics_162,x:136.65,y:125}).wait(1).to({graphics:mask_3_graphics_163,x:138.75,y:125}).wait(1).to({graphics:mask_3_graphics_164,x:140.7,y:125}).wait(1).to({graphics:mask_3_graphics_165,x:142.5,y:125}).wait(1).to({graphics:mask_3_graphics_166,x:144.1,y:125}).wait(1).to({graphics:mask_3_graphics_167,x:145.55,y:125}).wait(1).to({graphics:mask_3_graphics_168,x:146.85,y:125}).wait(1).to({graphics:mask_3_graphics_169,x:147.95,y:125}).wait(1).to({graphics:mask_3_graphics_170,x:148.85,y:125}).wait(1).to({graphics:mask_3_graphics_171,x:149.65,y:125}).wait(1).to({graphics:mask_3_graphics_172,x:150.25,y:125}).wait(1).to({graphics:mask_3_graphics_173,x:150.65,y:125}).wait(1).to({graphics:mask_3_graphics_174,x:150.9,y:125}).wait(1).to({graphics:mask_3_graphics_175,x:151,y:125}).wait(60));

	// offerTitle
	this.instance_10 = new lib.offerTitle();
	this.instance_10.setTransform(58.05,168.1,1,1,0,0,0,47.5,159.6);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(115).to({_off:false},0).wait(120));

	// image3
	this.instance_11 = new lib.image3Anim();
	this.instance_11.setTransform(125,104.25,1,1,0,0,0,150,125);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(115).to({_off:false},0).wait(120));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_62 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_63 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_64 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_65 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_66 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_67 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_68 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_69 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_70 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_71 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_72 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_73 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_74 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_75 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_76 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_77 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_78 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_79 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_80 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_81 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_82 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_83 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_84 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_85 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_86 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_87 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_88 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_89 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_90 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_91 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_92 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_93 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_94 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_95 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_96 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_97 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_98 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_99 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_100 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_101 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_102 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_103 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_104 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_105 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_106 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_107 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_108 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_109 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_110 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_111 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_112 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_113 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_4_graphics_114 = new cjs.Graphics().p("A3WTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_4_graphics_62,x:452,y:125}).wait(1).to({graphics:mask_4_graphics_63,x:440.55,y:125}).wait(1).to({graphics:mask_4_graphics_64,x:429.3,y:125}).wait(1).to({graphics:mask_4_graphics_65,x:418.25,y:125}).wait(1).to({graphics:mask_4_graphics_66,x:407.5,y:125}).wait(1).to({graphics:mask_4_graphics_67,x:396.9,y:125}).wait(1).to({graphics:mask_4_graphics_68,x:386.55,y:125}).wait(1).to({graphics:mask_4_graphics_69,x:376.4,y:125}).wait(1).to({graphics:mask_4_graphics_70,x:366.5,y:125}).wait(1).to({graphics:mask_4_graphics_71,x:356.85,y:125}).wait(1).to({graphics:mask_4_graphics_72,x:347.35,y:125}).wait(1).to({graphics:mask_4_graphics_73,x:338.1,y:125}).wait(1).to({graphics:mask_4_graphics_74,x:329.1,y:125}).wait(1).to({graphics:mask_4_graphics_75,x:320.3,y:125}).wait(1).to({graphics:mask_4_graphics_76,x:311.75,y:125}).wait(1).to({graphics:mask_4_graphics_77,x:303.4,y:125}).wait(1).to({graphics:mask_4_graphics_78,x:295.25,y:125}).wait(1).to({graphics:mask_4_graphics_79,x:287.35,y:125}).wait(1).to({graphics:mask_4_graphics_80,x:279.7,y:125}).wait(1).to({graphics:mask_4_graphics_81,x:272.2,y:125}).wait(1).to({graphics:mask_4_graphics_82,x:265,y:125}).wait(1).to({graphics:mask_4_graphics_83,x:258,y:125}).wait(1).to({graphics:mask_4_graphics_84,x:251.2,y:125}).wait(1).to({graphics:mask_4_graphics_85,x:244.6,y:125}).wait(1).to({graphics:mask_4_graphics_86,x:238.25,y:125}).wait(1).to({graphics:mask_4_graphics_87,x:232.15,y:125}).wait(1).to({graphics:mask_4_graphics_88,x:226.25,y:125}).wait(1).to({graphics:mask_4_graphics_89,x:220.55,y:125}).wait(1).to({graphics:mask_4_graphics_90,x:215.1,y:125}).wait(1).to({graphics:mask_4_graphics_91,x:209.9,y:125}).wait(1).to({graphics:mask_4_graphics_92,x:204.9,y:125}).wait(1).to({graphics:mask_4_graphics_93,x:200.1,y:125}).wait(1).to({graphics:mask_4_graphics_94,x:195.55,y:125}).wait(1).to({graphics:mask_4_graphics_95,x:191.2,y:125}).wait(1).to({graphics:mask_4_graphics_96,x:187.05,y:125}).wait(1).to({graphics:mask_4_graphics_97,x:183.15,y:125}).wait(1).to({graphics:mask_4_graphics_98,x:179.5,y:125}).wait(1).to({graphics:mask_4_graphics_99,x:176.05,y:125}).wait(1).to({graphics:mask_4_graphics_100,x:172.8,y:125}).wait(1).to({graphics:mask_4_graphics_101,x:169.8,y:125}).wait(1).to({graphics:mask_4_graphics_102,x:167.05,y:125}).wait(1).to({graphics:mask_4_graphics_103,x:164.45,y:125}).wait(1).to({graphics:mask_4_graphics_104,x:162.15,y:125}).wait(1).to({graphics:mask_4_graphics_105,x:160,y:125}).wait(1).to({graphics:mask_4_graphics_106,x:158.15,y:125}).wait(1).to({graphics:mask_4_graphics_107,x:156.45,y:125}).wait(1).to({graphics:mask_4_graphics_108,x:155,y:125}).wait(1).to({graphics:mask_4_graphics_109,x:153.8,y:125}).wait(1).to({graphics:mask_4_graphics_110,x:152.8,y:125}).wait(1).to({graphics:mask_4_graphics_111,x:152,y:125}).wait(1).to({graphics:mask_4_graphics_112,x:151.45,y:125}).wait(1).to({graphics:mask_4_graphics_113,x:151.1,y:125}).wait(1).to({graphics:mask_4_graphics_114,x:150.5,y:125}).wait(61).to({graphics:null,x:0,y:0}).wait(60));

	// headline2
	this.instance_12 = new lib.headline2_1();
	this.instance_12.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(62).to({_off:false},0).wait(173));

	// image2
	this.instance_13 = new lib.image2Anim();
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(62).to({_off:false},0).to({_off:true},113).wait(60));

	// image1
	this.instance_14 = new lib.image1Anim();
	this.instance_14.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},114).wait(121));

	// load
	this.instance_15 = new lib.offer_mc();
	this.instance_15.setTransform(154,150.05,1,1,0,0,0,43.6,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(235));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(127.4,106.3,195.4,166.7);
// library properties:
lib.properties = {
	id: '6DBC25FFFD4048B3B488CE195B1E3C32',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/cta.png?1587487465886", id:"cta"},
		{src:"images/headline1.png?1587487465886", id:"headline1"},
		{src:"images/headline2.png?1587487465886", id:"headline2"},
		{src:"images/highlander.png?1587487465886", id:"highlander"},
		{src:"images/image1.jpg?1587487465886", id:"image1"},
		{src:"images/image2.jpg?1587487465886", id:"image2"},
		{src:"images/image3.jpg?1587487465886", id:"image3"},
		{src:"images/logo.png?1587487465886", id:"logo"},
		{src:"images/options.png?1587487465886", id:"options"},
		{src:"images/toyota.png?1587487465886", id:"toyota"}
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