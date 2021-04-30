(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,753,500);


(lib.border = function() {
	this.initialize(img.border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.cake = function() {
	this.initialize(img.cake);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.details = function() {
	this.initialize(img.details);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.spider = function() {
	this.initialize(img.spider);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.spiderWeb = function() {
	this.initialize(img.spiderWeb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.string = function() {
	this.initialize(img.string);
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
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.wood = function() {
	this.initialize(img.wood);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);// helper functions:

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


(lib.wood_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wood();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wood_1, new cjs.Rectangle(0,0,300,250), null);


(lib.text5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text5_1, new cjs.Rectangle(0,0,300,250), null);


(lib.text4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text4_1, new cjs.Rectangle(0,0,300,250), null);


(lib.text3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3_1, new cjs.Rectangle(0,0,300,250), null);


(lib.text2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2_1, new cjs.Rectangle(0,0,300,250), null);


(lib.text1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1_1, new cjs.Rectangle(0,0,300,250), null);


(lib.string_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.string();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.string_1, new cjs.Rectangle(0,0,300,250), null);


(lib.spiderWeb_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.spiderWeb();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.spiderWeb_1, new cjs.Rectangle(0,0,300,250), null);


(lib.spider_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.spider();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.spider_1, new cjs.Rectangle(0,0,300,250), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,300,250), null);


(lib.legalTxt_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B4D86").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgCADgBQAEABADACQACADABADQgBAEgCADQgDADgEgBQgDABgDgDg");
	this.shape.setTransform(174.8,122.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B4D86").s().p("AgKAdIgJgEIAFgLQAGAFAHAAQAHAAAAgFQAAgEgCgCIgIgFQgPgFAAgLQAAgIAFgEQAGgEAIAAQAJAAAIAEIgEALQgEgEgIAAQgGAAAAAFQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAQACACAHADQAHADAEADQADAFAAAGQAAAIgGAEQgGAFgJAAIgJgBg");
	this.shape_1.setTransform(170.6,120.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B4D86").s().p("AgUAWQgHgIAAgNQAAgNAIgIQAJgJAKAAQANAAAIAIQAHAHAAAMIgBAGIgoAAQAAAHAEAEQAFAEAHAAQAIAAAFgFIAGAKQgIAGgOAAQgMAAgIgIgAAOgFQAAgNgNAAQgLAAgCANIAaAAIAAAAg");
	this.shape_2.setTransform(165.1,120.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B4D86").s().p("AgJAdIAAhCIANgEIAABAQAAALAGACQgEAFgGAAQgJAAAAgMg");
	this.shape_3.setTransform(160.7,119.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B4D86").s().p("AgSAiQgIgHABgPQgBgMAJgIQAHgJAMAAQAGAAAFACIAAgWIAOgEIAABRIgOAAIAAgDQgCACgDABIgIABQgMABgGgIgAgHgBQgFAEAAAJQAAASARAAIAFgBIADgCIAAgeQgEgDgFAAQgHABgEAEg");
	this.shape_4.setTransform(155.5,119.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B4D86").s().p("AAMAdIAAggQAAgHgDgEQgDgDgGAAQgCAAgEACQgDABgCADIAAAoIgNAAIAAg4IAJAAIADAFQAFgGAKAAQAKAAAHAGQAFAGAAALIAAAig");
	this.shape_5.setTransform(149.2,120.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1B4D86").s().p("AANAcQgDgCAAgDQgCADgFACQgDACgFAAQgKAAgFgFQgFgEAAgJQAAgKAHgFQAIgFANAAIAFABQAAgLgMAAQgHAAgFADIgDgLQAHgDAJAAQAMAAAGAGQAHAGAAARIAAALQAAAMAEADIgDADIgFABQgDAAgCgCgAgMALQAAAIAJAAQALAAAAgMIAAgFIgFgBQgPAAAAAKg");
	this.shape_6.setTransform(143,120.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1B4D86").s().p("AgQAWQgIgIAAgOQAAgMAJgIQAIgJAOAAQAKAAAHAGIgGAKQgEgFgIAAQgHAAgEAFQgFAGAAAHQAAATAQAAQAIAAAGgFIAFAKQgGAEgFABIgKABQgMAAgIgIg");
	this.shape_7.setTransform(137.3,120.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1B4D86").s().p("AgTAiQgGgHAAgPQAAgMAIgIQAHgJAMAAQAGAAAFACIAAgWIAOgEIAABRIgOAAIAAgDQgBACgFABIgHABQgLABgIgIgAgHgBQgEAEgBAJQAAASARAAIAFgBIADgCIAAgeQgEgDgFAAQgHABgEAEg");
	this.shape_8.setTransform(127.9,119.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1B4D86").s().p("AAMAdIAAggQAAgHgDgEQgDgDgGAAQgCAAgDACQgEABgCADIAAAoIgNAAIAAg4IAKAAIACAFQAGgGAJAAQAKAAAHAGQAFAGAAALIAAAig");
	this.shape_9.setTransform(121.6,120.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1B4D86").s().p("AANAcQgDgCAAgDQgCADgFACQgDACgFAAQgKAAgFgFQgFgEAAgJQAAgKAHgFQAIgFANAAIAFABQAAgLgMAAQgHAAgFADIgDgLQAHgDAJAAQAMAAAGAGQAHAGAAARIAAALQAAAMAEADIgDADIgFABQgDAAgCgCgAgMALQAAAIAJAAQALAAAAgMIAAgFIgFgBQgPAAAAAKg");
	this.shape_10.setTransform(115.5,120.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1B4D86").s().p("AgKAdIgJgEIAFgLQAGAFAHAAQAHAAAAgFQAAgEgCgCIgIgFQgPgFAAgLQAAgIAFgEQAGgEAIAAQAJAAAIAEIgEALQgEgEgIAAQgGAAAAAFQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAQACACAHADQAHADAEADQADAFAAAGQAAAIgGAEQgGAFgJAAIgJgBg");
	this.shape_11.setTransform(106.9,120.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1B4D86").s().p("AgTAiQgGgHAAgPQAAgMAHgIQAJgJALAAQAGAAAFACIAAgWIANgEIAABRIgNAAIAAgDQgBACgFABIgHABQgLABgIgIgAgHgBQgEAEgBAJQAAASARAAIAFgBIADgCIAAgeQgEgDgFAAQgHABgEAEg");
	this.shape_12.setTransform(101.3,119.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1B4D86").s().p("AgTAWQgIgJAAgNQAAgMAIgJQAHgIAMAAQANAAAHAIQAIAIAAANQAAAOgIAIQgHAIgNAAQgMAAgHgIgAgJgNQgEAFAAAIQAAATANAAQAGAAAEgFQAEgFAAgJQAAgSgOAAQgFAAgEAFg");
	this.shape_13.setTransform(95.1,120.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1B4D86").s().p("AgZAnIAAhNIAQAAQASgBAIAGQAJAFAAANQAAAagfAAIgGgBIAAAdgAgLgaIAAAZIAFABQAJAAAEgEQAFgDAAgHQAAgMgTAAg");
	this.shape_14.setTransform(88.9,119.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1B4D86").s().p("AgaAbQgLgMAAgPQAAgOALgMQALgLAPAAQAQAAALALQALAMAAAOQAAAPgLAMQgLALgQAAQgPAAgLgLgAgTgUQgJAJAAALQAAAMAJAJQAIAHALABQAMgBAIgHQAJgJAAgMQAAgLgJgJQgIgHgMgBQgLABgIAHgAAJAVIgJgRIgEAAIAAARIgJAAIAAgqIAMAAQAPAAAAAMQAAAJgHACIALATgAgEgCIAGgBQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIABgEQAAgFgGAAIgDAAg");
	this.shape_15.setTransform(78.6,119.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1B4D86").s().p("AgaAoIAAhPIAOAAIAAAFQAFgFAHgBQAbAAAAAfQAAANgIAHQgHAIgNAAQgGAAgFgCIAAAXgAgMgZIAAAeQAEADAEAAQAJAAAEgFQAEgDAAgJQAAgLgEgEQgEgEgJAAQgEAAgEADg");
	this.shape_16.setTransform(71.3,121.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1B4D86").s().p("AgYAIIAAgkIANAAIAAAjQAAALAKAAQADAAAEgCQAFgDABgDIAAgmIANAAIAAA4IgNAAIAAgFIgIAFIgIABQgUAAAAgVg");
	this.shape_17.setTransform(64.8,120.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1B4D86").s().p("AgUAeQgJgLAAgTQAAgQAKgMQAKgMAPAAQAOAAAIAGIgGALQgFgEgKAAQgJAAgGAIQgGAIAAAMQAAAMAFAIQAGAHAJAAQALAAAGgIIAHAMQgJAJgQAAQgQAAgJgLg");
	this.shape_18.setTransform(58.3,119.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1B4D86").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_19.setTransform(52.9,120);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1B4D86").s().p("AAOAnIgVghIgJAMIAAAVIgOAAIAAhNIAOAAIAAAlIAaglIAQAAIgZAiIAeArg");
	this.shape_20.setTransform(48,119.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1B4D86").s().p("AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALQALALAAAPQAAAQgLALQgLALgQAAQgPAAgLgLgAgTgTQgJAIAAALQAAAMAJAIQAIAJALgBQAMABAIgJQAJgIAAgMQAAgLgJgIQgIgJgMABQgLgBgIAJgAAJAVIgJgRIgEAAIAAARIgJAAIAAgqIAMAAQAPAAAAANQAAAHgHADIALATgAgEgCIAGgBQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBIABgDQAAgFgGAAIgDAAg");
	this.shape_21.setTransform(226.5,104.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1B4D86").s().p("AgKAdIgJgEIAFgLQAGAFAHAAQAHAAAAgFQAAgEgCgCIgIgFQgPgFAAgLQAAgIAFgEQAGgEAIAAQAJAAAIAEIgEALQgEgEgIAAQgGAAAAAFQAAABAAAAQAAABAAABQABAAAAAAQABABAAAAQACACAHADQAHADAEADQADAFAAAGQAAAIgGAEQgGAFgJAAIgJgBg");
	this.shape_22.setTransform(220,105.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1B4D86").s().p("AgHAgQgEgEAAgJIAAgcIgHAAIAAgLIAHAAIAAgMIAMgEIAAAQIAQAAIAAALIgQAAIAAAYQAAAGACACQACADAFAAQAFAAAEgDIAAANQgEABgKAAQgHABgFgGg");
	this.shape_23.setTransform(215.4,104.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1B4D86").s().p("AgYAIIAAgkIANAAIAAAjQAAALAKAAQAEAAADgCQAEgDACgDIAAgmIANAAIAAA4IgNAAIAAgFIgIAFIgIABQgUAAAAgVg");
	this.shape_24.setTransform(210.1,105.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1B4D86").s().p("AAMAdIAAggQAAgHgDgEQgDgDgGAAQgCAAgEACQgDABgCADIAAAoIgNAAIAAg4IAKAAIACAFQAFgGAKAAQAKAAAHAGQAFAGAAALIAAAig");
	this.shape_25.setTransform(203.6,105.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1B4D86").s().p("AgTAWQgIgJAAgNQAAgMAIgJQAHgIAMAAQANAAAHAIQAIAIAAANQAAAOgIAIQgHAIgNAAQgMAAgHgIgAgJgNQgEAFAAAIQAAATANAAQAGAAAEgFQAEgFAAgJQAAgSgOAAQgFAAgEAFg");
	this.shape_26.setTransform(197.3,105.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1B4D86").s().p("AgcAoIAAhOIAVgBQAQAAAKAKQAKAKAAARQAAAqgoAAgAgOgaIAAA1IAHAAQAKAAAGgHQAGgJAAgMQAAgagXAAg");
	this.shape_27.setTransform(190.8,104.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1B4D86").s().p("AgJALIAGgFIACgEQAAgCgEgCQgCgDAAgDQAAgIAIAAQAEAAADACQACADAAAFQAAAOgPAJg");
	this.shape_28.setTransform(181.8,102);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1B4D86").s().p("AAMAdIAAggQAAgHgDgEQgDgDgGAAQgCAAgEACQgDABgCADIAAAoIgNAAIAAg4IAKAAIACAFQAFgGAKAAQAKAAAHAGQAFAGAAALIAAAig");
	this.shape_29.setTransform(176.6,105.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1B4D86").s().p("AgDAoIAAguIgHAAIAAgLIAUAAIAAA5gAgBgaQgCgCgBgDQABgDACgCQABgDADAAQADAAADADQACACAAADQAAADgCACQgDADgDAAQgDAAgBgDg");
	this.shape_30.setTransform(171.6,104.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1B4D86").s().p("AAKApIgQgaIgGAHIAAATIgNAAIAAhOIANgDIAAAtIASgVIAQAAIgTAVIAXAkg");
	this.shape_31.setTransform(167.5,104.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1B4D86").s().p("AAMAdIAAggQAAgHgDgEQgDgDgGAAQgCAAgDACQgEABgCADIAAAoIgNAAIAAg4IAKAAIACAFQAGgGAJAAQALAAAFAGQAGAGAAALIAAAig");
	this.shape_32.setTransform(160.9,105.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1B4D86").s().p("AgYAIIAAgkIANAAIAAAjQAAALAKAAQADAAAEgCQAFgDABgDIAAgmIANAAIAAA4IgNAAIAAgFIgIAFIgIABQgUAAAAgVg");
	this.shape_33.setTransform(154.5,105.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1B4D86").s().p("AgcAoIAAhOIAVgBQAQAAAKAKQAKAKAAARQAAAqgoAAgAgOgaIAAA1IAHAAQAKAAAGgHQAGgJAAgMQAAgagXAAg");
	this.shape_34.setTransform(147.9,104.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1B4D86").s().p("AgKAdIgJgEIAFgLQAGAFAHAAQAHAAAAgFQAAgEgCgCIgIgFQgPgFAAgLQAAgIAFgEQAGgEAIAAQAJAAAIAEIgEALQgEgEgIAAQgGAAAAAFQAAABAAAAQAAABAAABQABAAAAAAQABABAAAAQACACAHADQAHADAEADQADAFAAAGQAAAIgGAEQgGAFgJAAIgJgBg");
	this.shape_35.setTransform(138.5,105.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1B4D86").s().p("AgUAWQgHgIAAgNQAAgNAIgIQAJgJAKAAQANAAAIAIQAHAHAAAMIgBAGIgoAAQAAAHAEAEQAFAEAHAAQAIAAAFgFIAGAKQgIAGgOAAQgLAAgJgIgAAPgFQgBgNgNAAQgLAAgCANIAbAAIAAAAg");
	this.shape_36.setTransform(133,105.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1B4D86").s().p("AgSAiQgIgIAAgNQABgNAHgJQAIgIALAAQAHAAAGADIAAgYIAMgCIAABRIgMAAIAAgEQgCACgFABIgHABQgLAAgHgHgAgHgBQgFAEABAKQAAARAQAAIAEgBIAFgCIAAgeQgFgCgEAAQgIgBgEAFg");
	this.shape_37.setTransform(126.6,104.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1B4D86").s().p("AgYAIIAAgkIANAAIAAAjQAAALAKAAQAEAAAEgCQADgDACgDIAAgmIANAAIAAA4IgNAAIAAgFIgIAFIgIABQgUAAAAgVg");
	this.shape_38.setTransform(120.3,105.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1B4D86").s().p("AgJAdIAAhDIANgCIAAA/QgBAKAHACQgDAHgHgBQgJABAAgNg");
	this.shape_39.setTransform(115.8,104.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1B4D86").s().p("AgQAWQgIgIAAgOQAAgMAJgIQAIgJAOAAQAKAAAHAGIgGAKQgEgFgIAAQgHAAgEAFQgFAGAAAHQAAATAQAAQAIAAAGgFIAFAKQgGAEgFABIgKABQgMAAgIgIg");
	this.shape_40.setTransform(111.1,105.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1B4D86").s().p("AANAdIgNgTIgOATIgPAAIAWgdIgUgcIAPAAIAMASIAMgSIAQAAIgWAcIAYAdg");
	this.shape_41.setTransform(105.3,105.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1B4D86").s().p("AgTAWQgIgIAAgNQAAgNAJgIQAIgJAKAAQANAAAHAIQAIAHAAAMIgBAGIgoAAQABAHADAEQAFAEAGAAQAKAAAFgFIAEAKQgGAGgPAAQgMAAgHgIgAAPgFQgBgNgNAAQgKAAgDANIAbAAIAAAAg");
	this.shape_42.setTransform(99.1,105.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1B4D86").s().p("AgSAdIAAg4IANAAIAAAFQAFgGAJAAQAHAAADACIgFALQgEgCgEAAQgFAAgCAEQgEAEAAAGIAAAgg");
	this.shape_43.setTransform(90.6,105.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1B4D86").s().p("AgUAWQgHgIAAgNQAAgNAJgIQAIgJALAAQAMAAAHAIQAIAHAAAMIgBAGIgoAAQAAAHAFAEQAEAEAGAAQAKAAAFgFIAEAKQgGAGgOAAQgMAAgJgIgAAOgFQgBgNgMAAQgLAAgDANIAbAAIAAAAg");
	this.shape_44.setTransform(84.8,105.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1B4D86").s().p("AgLApIAAguIgJAAIAAgLIAJAAQAAgKAGgHQAFgGAJAAQAFAAAHABIgEAKIgHgBQgEAAgDADQgCAEAAAEIAAACIAMAAIAAALIgMAAIAAAug");
	this.shape_45.setTransform(79.9,104.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1B4D86").s().p("AgLApIAAguIgJAAIAAgLIAJAAQAAgKAGgHQAFgGAJAAQAFAAAHABIgEAKIgHgBQgEAAgDADQgCAEAAAEIAAACIAMAAIAAALIgMAAIAAAug");
	this.shape_46.setTransform(75.8,104.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1B4D86").s().p("AgZAeQgIgMAAgSQAAgRAJgLQAJgMAPAAQAQAAAJALQAJAKAAATQAAASgJALQgJAMgRAAQgQAAgIgLgAgOgUQgFAIAAAMQAAANAFAIQAEAHAJAAQAKAAAFgHQAGgIAAgNQAAgbgUAAQgJAAgFAHg");
	this.shape_47.setTransform(69.7,104.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1B4D86").s().p("AgGAHQgCgDgBgEQABgDACgDQADgCADAAQAEAAADACQADADgBADQABAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_48.setTransform(60.5,107.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1B4D86").s().p("AgTAWQgIgIAAgNQAAgNAJgIQAIgJAKAAQANAAAHAIQAIAHAAAMIgBAGIgoAAQABAHAEAEQAEAEAGAAQAKAAAFgFIAEAKQgGAGgPAAQgMAAgHgIgAAPgFQgBgNgNAAQgKAAgDANIAbAAIAAAAg");
	this.shape_49.setTransform(55.4,105.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1B4D86").s().p("AgSAdIAAg4IANAAIAAAFQAFgGAJAAQAHAAADACIgFALQgEgCgEAAQgFAAgCAEQgEAEAAAGIAAAgg");
	this.shape_50.setTransform(50.3,105.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1B4D86").s().p("AgTAWQgIgJAAgNQAAgMAIgJQAHgIAMAAQANAAAHAIQAIAIAAANQAAAOgIAIQgHAIgNAAQgMAAgHgIgAgJgNQgEAFAAAIQAAATANAAQAGAAAEgFQAEgFAAgJQAAgSgOAAQgFAAgEAFg");
	this.shape_51.setTransform(44.5,105.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1B4D86").s().p("AgHAgQgEgEAAgJIAAgcIgHAAIAAgLIAHAAIAAgMIAMgEIAAAQIAQAAIAAALIgQAAIAAAYQAAAGACACQACADAFAAQAFAAAEgDIAAANQgFABgIAAQgIABgFgGg");
	this.shape_52.setTransform(39.2,104.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1B4D86").s().p("AgKAdIgJgEIAFgLQAGAFAHAAQAHAAAAgFQAAgEgCgCIgIgFQgPgFAAgLQAAgIAFgEQAGgEAIAAQAJAAAIAEIgEALQgEgEgIAAQgGAAAAAFQAAABAAAAQAAABAAABQABAAAAAAQABABAAAAQACACAHADQAHADAEADQADAFAAAGQAAAIgGAEQgGAFgJAAIgJgBg");
	this.shape_53.setTransform(34.7,105.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1B4D86").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_54.setTransform(30.4,105.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1B4D86").s().p("AAMAdIAAggQAAgHgDgEQgDgDgGAAQgCAAgEACQgDABgCADIAAAoIgNAAIAAg4IAJAAIADAFQAFgGAKAAQALAAAFAGQAGAGAAALIAAAig");
	this.shape_55.setTransform(25.2,105.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1B4D86").s().p("AgDAoIAAguIgHAAIAAgLIAUAAIAAA5gAgBgaQgDgCAAgDQAAgDADgCQABgDADAAQADAAADADQACACAAADQAAADgCACQgDADgDAAQgDAAgBgDg");
	this.shape_56.setTransform(20.1,104.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1B4D86").s().p("AgSAiQgIgIAAgNQAAgNAJgJQAHgIALAAQAHAAAFADIAAgYIAOgCIAABRIgOAAIAAgEQgCACgDABIgIABQgMAAgGgHgAgHgBQgFAEABAKQAAARAQAAIAFgBIADgCIAAgeQgEgCgFAAQgHgBgEAFg");
	this.shape_57.setTransform(12.1,104.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1B4D86").s().p("AgDAoIAAguIgHAAIAAgLIAUAAIAAA5gAgBgaQgCgCgBgDQABgDACgCQABgDAEAAQADAAACADQACACAAADQAAADgCACQgCADgDAAQgEAAgBgDg");
	this.shape_58.setTransform(7.2,104.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1B4D86").s().p("AgJAdIAAhDIANgCIAAA/QAAAKAGACQgEAHgGgBQgJABAAgNg");
	this.shape_59.setTransform(4.5,104.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1B4D86").s().p("AANAcQgDgCAAgDQgCADgFACQgDACgFAAQgKAAgFgFQgFgEAAgJQAAgKAHgFQAIgFANAAIAFABQAAgLgMAAQgHAAgFADIgDgLQAHgDAJAAQAMAAAGAGQAHAGAAARIAAALQAAAMAEADIgDADIgFABQgDAAgCgCgAgMALQAAAIAJAAQALAAAAgMIAAgFIgFgBQgPAAAAAKg");
	this.shape_60.setTransform(-0.3,105.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1B4D86").s().p("AgCAdIgag5IAPAAIANAiIAOgiIAPAAIgbA5g");
	this.shape_61.setTransform(-6.2,105.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1B4D86").s().p("AgHAhQgEgFAAgJIAAgcIgHAAIAAgLIAHAAIAAgLIAMgGIAAARIAQAAIAAALIgQAAIAAAYQAAAGACACQACADAFAAQAFAAAEgDIAAANQgEACgKAAQgHgBgFgEg");
	this.shape_62.setTransform(227.1,89.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1B4D86").s().p("AgTAWQgIgJAAgNQAAgMAIgJQAHgIAMAAQANAAAHAIQAIAIAAANQAAAOgIAIQgHAIgNAAQgMAAgHgIgAgJgNQgEAFAAAIQAAATANAAQAGAAAEgFQAEgFAAgJQAAgSgOAAQgFAAgEAFg");
	this.shape_63.setTransform(221.9,90.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1B4D86").s().p("AAXAoIglgxIAAAwIgOAAIAAhOIAHAAIAkAvIAAgvIAOAAIAABPg");
	this.shape_64.setTransform(215.1,89.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1B4D86").s().p("AgGAHQgDgDABgEQgBgDADgDQADgCADgBQAEABADACQACADAAADQAAAEgCADQgDADgEgBQgDABgDgDg");
	this.shape_65.setTransform(206.1,92.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1B4D86").s().p("AgSAdIAAg4IANAAIAAAFQAFgGAJAAQAHAAADACIgFALQgEgCgEAAQgFAAgCAEQgEAEAAAGIAAAgg");
	this.shape_66.setTransform(202.2,90.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1B4D86").s().p("AgTAWQgIgIAAgNQAAgNAIgIQAJgJAKAAQANAAAHAIQAIAHAAAMIgBAGIgoAAQABAHADAEQAFAEAGAAQAKAAAEgFIAGAKQgIAGgOAAQgMAAgHgIgAAPgFQgBgNgNAAQgKAAgDANIAbAAIAAAAg");
	this.shape_67.setTransform(196.4,90.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1B4D86").s().p("AgLAoIAAgtIgJAAIAAgLIAJAAQAAgLAGgGQAFgHAJAAQAFABAHACIgEAKIgHgCQgEAAgDADQgCAEAAAFIAAABIAMAAIAAALIgMAAIAAAtg");
	this.shape_68.setTransform(191.4,89.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1B4D86").s().p("AgLAoIAAgtIgJAAIAAgLIAJAAQAAgLAGgGQAFgHAJAAQAFABAHACIgEAKIgHgCQgEAAgDADQgCAEAAAFIAAABIAMAAIAAALIgMAAIAAAtg");
	this.shape_69.setTransform(187.4,89.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1B4D86").s().p("AgTAWQgIgJAAgNQAAgMAIgJQAHgIAMAAQANAAAHAIQAIAIAAANQAAAOgIAIQgHAIgNAAQgMAAgHgIgAgJgNQgEAFAAAIQAAATANAAQAGAAAEgFQAEgFAAgJQAAgSgOAAQgFAAgEAFg");
	this.shape_70.setTransform(182,90.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#1B4D86").s().p("AgSAdIAAg4IANAAIAAAFQAFgGAJAAQAHAAADACIgFALQgEgCgEAAQgFAAgCAEQgEAEAAAGIAAAgg");
	this.shape_71.setTransform(173.6,90.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1B4D86").s().p("AgTAWQgIgIAAgNQAAgNAJgIQAIgJAKAAQANAAAHAIQAIAHAAAMIgBAGIgoAAQABAHAEAEQAEAEAGAAQAJAAAGgFIAEAKQgGAGgPAAQgMAAgHgIgAAPgFQgCgNgMAAQgKAAgEANIAcAAIAAAAg");
	this.shape_72.setTransform(167.8,90.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1B4D86").s().p("AAMApIAAgjQAAgGgEgCQgDgDgFAAIgGACIgFADIAAApIgNAAIAAhOIANgDIAAAcQAFgFAIAAQALABAGAFQAGAHAAAKIAAAjg");
	this.shape_73.setTransform(161.4,89.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1B4D86").s().p("AgHAhQgEgFAAgJIAAgcIgHAAIAAgLIAHAAIAAgLIAMgGIAAARIAQAAIAAALIgQAAIAAAYQAAAGACACQACADAFAAQAFAAAEgDIAAANQgEACgJAAQgIgBgFgEg");
	this.shape_74.setTransform(156,89.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#1B4D86").s().p("AgTAWQgIgJAAgNQAAgMAIgJQAHgIAMAAQANAAAHAIQAIAIAAANQAAAOgIAIQgHAIgNAAQgMAAgHgIgAgJgNQgEAFAAAIQAAATANAAQAGAAAEgFQAEgFAAgJQAAgSgOAAQgFAAgEAFg");
	this.shape_75.setTransform(150.7,90.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1B4D86").s().p("AgVAcQAPAAAAgHQAAgGgEgKIgSgsIAOAAIAPAnIAOgnIAOAAIgaBBQgCAGgGAFQgHADgJAAg");
	this.shape_76.setTransform(141.4,91.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#1B4D86").s().p("AAMAdIAAggQAAgHgDgEQgDgDgGAAQgCAAgDACQgEABgCADIAAAoIgNAAIAAg4IAKAAIACAFQAGgGAJAAQALAAAFAGQAGAGAAALIAAAig");
	this.shape_77.setTransform(135.3,90.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1B4D86").s().p("AANAcQgDgCAAgDQgCADgFACQgDACgFAAQgKAAgFgFQgFgEAAgJQAAgKAHgFQAIgFANAAIAFABQAAgLgMAAQgHAAgFADIgDgLQAHgDAJAAQAMAAAGAGQAHAGAAARIAAALQAAAMAEADIgDADIgFABQgDAAgCgCgAgMALQAAAIAJAAQALAAAAgMIAAgFIgFgBQgPAAAAAKg");
	this.shape_78.setTransform(129.1,90.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#1B4D86").s().p("AAMApIAAgjQAAgGgEgCQgDgDgFAAIgGACIgFADIAAApIgNAAIAAhOIANgDIAAAcQAFgFAIAAQALABAGAFQAGAHAAAKIAAAjg");
	this.shape_79.setTransform(119.6,89.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#1B4D86").s().p("AgGAhQgFgFAAgJIAAgcIgHAAIAAgLIAHAAIAAgLIAMgGIAAARIAQAAIAAALIgQAAIAAAYQAAAGACACQACADAFAAQAFAAAEgDIAAANQgEACgKAAQgHgBgEgEg");
	this.shape_80.setTransform(114.2,89.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#1B4D86").s().p("AgCAoIAAgtIgIAAIAAgLIAUAAIAAA4gAgBgZQgDgDAAgDQAAgDADgDQABgCADAAQAEAAACACQACADAAADQAAADgCADQgCACgEAAQgDAAgBgCg");
	this.shape_81.setTransform(110.2,89.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#1B4D86").s().p("AAQAdIgQgiIgPAiIgEAAIgXg5IAPAAIALAhIAPghIADAAIAPAhIAMghIAOAAIgWA5g");
	this.shape_82.setTransform(104.5,90.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#1B4D86").s().p("AgTAiQgGgHAAgPQAAgMAHgIQAJgJALAAQAGAAAFACIAAgWIANgEIAABRIgNAAIAAgDQgBACgFABIgHACQgLAAgIgIgAgHgBQgEAEgBAJQAAASARAAIAFgBIADgCIAAgdQgEgEgFAAQgHABgEAEg");
	this.shape_83.setTransform(93.6,89.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#1B4D86").s().p("AgTAWQgIgIAAgNQAAgNAJgIQAIgJAKAAQANAAAHAIQAIAHAAAMIgBAGIgoAAQABAHAEAEQAEAEAGAAQAKAAAFgFIAEAKQgGAGgPAAQgMAAgHgIgAAPgFQgBgNgNAAQgKAAgDANIAbAAIAAAAg");
	this.shape_84.setTransform(87.4,90.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1B4D86").s().p("AAMAdIAAggQAAgHgDgEQgDgDgGAAQgCAAgDACQgEABgCADIAAAoIgNAAIAAg4IAKAAIACAFQAGgGAJAAQAKAAAHAGQAFAGAAALIAAAig");
	this.shape_85.setTransform(81,90.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#1B4D86").s().p("AgDAoIAAgtIgHAAIAAgLIAUAAIAAA4gAgBgZQgDgDABgDQgBgDADgDQABgCAEAAQADAAACACQACADAAADQAAADgCADQgCACgDAAQgEAAgBgCg");
	this.shape_86.setTransform(76,89.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#1B4D86").s().p("AgPAlIgDAFIgIAAIAAhPIAOgEIAAAbQAFgDAHAAQALAAAIAIQAIAIAAALQAAAPgIAIQgIAJgMAAQgIgBgGgEgAgMgCIAAAdQADADAFAAQAJAAAEgEQAEgFAAgKQAAgRgQAAQgGAAgDAEg");
	this.shape_87.setTransform(71.4,89.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#1B4D86").s().p("AAaAdIAAgjQABgLgLAAQgDAAgCACQgEABgBADIAAAoIgMAAIAAglQAAgEgDgDQgCgCgFAAQgDAAgCACIgFAEIAAAoIgNAAIAAg4IAJAAIACAFQAHgGAIAAQALAAAGAGQACgDAFgCIAJgBQAJAAAFAFQAGAGAAAJIAAAlg");
	this.shape_88.setTransform(63.5,90.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#1B4D86").s().p("AgTAWQgIgJAAgNQAAgMAIgJQAHgIAMAAQANAAAHAIQAIAIAAANQAAAOgIAIQgHAIgNAAQgMAAgHgIgAgJgNQgEAFAAAIQAAATANAAQAGAAAEgFQAEgFAAgJQAAgSgOAAQgFAAgEAFg");
	this.shape_89.setTransform(55.6,90.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#1B4D86").s().p("AgQAWQgIgIAAgOQAAgMAJgIQAIgJAOAAQAKAAAHAGIgGAKQgEgFgIAAQgHAAgEAFQgFAGAAAHQAAATAQAAQAIAAAGgFIAFAKQgGAEgFABIgKABQgMAAgIgIg");
	this.shape_90.setTransform(49.7,90.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#1B4D86").s().p("AgTAWQgIgIAAgNQAAgNAJgIQAIgJAKAAQANAAAHAIQAIAHAAAMIgBAGIgoAAQABAHAEAEQAEAEAGAAQAJAAAGgFIAEAKQgGAGgPAAQgMAAgHgIgAAPgFQgCgNgMAAQgKAAgEANIAcAAIAAAAg");
	this.shape_91.setTransform(40.5,90.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#1B4D86").s().p("AgPAlIgDAFIgIAAIAAhPIAOgEIAAAbQAFgDAHAAQALAAAIAIQAIAIAAALQAAAPgIAIQgIAJgMAAQgIgBgGgEgAgMgCIAAAdQADADAFAAQAJAAAEgEQAEgFAAgKQAAgRgQAAQgGAAgDAEg");
	this.shape_92.setTransform(34.2,89.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#1B4D86").s().p("AgHAhQgEgFAAgJIAAgcIgHAAIAAgLIAHAAIAAgLIAMgGIAAARIAQAAIAAALIgQAAIAAAYQAAAGACACQACADAFAAQAFAAAEgDIAAANQgEACgJAAQgIgBgFgEg");
	this.shape_93.setTransform(25.5,89.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1B4D86").s().p("AgTAWQgIgJAAgNQAAgMAIgJQAHgIAMAAQANAAAHAIQAIAIAAANQAAAOgIAIQgHAIgNAAQgMAAgHgIgAgJgNQgEAFAAAIQAAATANAAQAGAAAEgFQAEgFAAgJQAAgSgOAAQgFAAgEAFg");
	this.shape_94.setTransform(20.2,90.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#1B4D86").s().p("AAMAdIAAggQAAgHgDgEQgDgDgGAAQgCAAgEACQgDABgCADIAAAoIgNAAIAAg4IAJAAIADAFQAFgGAKAAQALAAAFAGQAGAGAAALIAAAig");
	this.shape_95.setTransform(13.9,90.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#1B4D86").s().p("AAMAdIAAggQAAgHgDgEQgDgDgGAAQgCAAgDACQgEABgCADIAAAoIgNAAIAAg4IAKAAIACAFQAGgGAJAAQALAAAFAGQAGAGAAALIAAAig");
	this.shape_96.setTransform(7.5,90.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1B4D86").s().p("AANAcQgDgCAAgDQgCADgFACQgDACgFAAQgKAAgFgFQgFgEAAgJQAAgKAHgFQAIgFANAAIAFABQAAgLgMAAQgHAAgFADIgDgLQAHgDAJAAQAMAAAGAGQAHAGAAARIAAALQAAAMAEADIgDADIgFABQgDAAgCgCgAgMALQAAAIAJAAQALAAAAgMIAAgFIgFgBQgPAAAAAKg");
	this.shape_97.setTransform(1.3,90.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1B4D86").s().p("AgUAeQgJgLAAgTQAAgQAKgMQAKgMAPAAQAOAAAIAGIgGALQgFgEgKAAQgJAAgGAIQgGAIAAAMQAAAMAFAIQAGAHAJAAQALAAAGgIIAHAMQgJAJgQAAQgQAAgJgLg");
	this.shape_98.setTransform(-4.9,89.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#1B4D86").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgCADAAQAEAAADACQADADAAADQAAAEgDADQgDACgEABQgDgBgDgCg");
	this.shape_99.setTransform(216.1,78.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1B4D86").s().p("AAMAdIAAggQAAgHgDgEQgDgDgGAAQgCAAgEACQgDABgCADIAAAoIgNAAIAAg4IAJAAIADAFQAFgGAKAAQALAAAFAGQAGAGAAALIAAAig");
	this.shape_100.setTransform(211,75.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1B4D86").s().p("AgTAWQgIgJAAgNQAAgMAIgJQAHgIAMAAQANAAAHAIQAIAIAAANQAAAOgIAIQgHAIgNAAQgMAAgHgIgAgJgNQgEAFAAAIQAAATANAAQAGAAAEgFQAEgFAAgJQAAgSgOAAQgFAAgEAFg");
	this.shape_101.setTransform(204.7,75.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#1B4D86").s().p("AgCAoIAAguIgIAAIAAgLIAUAAIAAA5gAgBgaQgDgCAAgDQAAgDADgCQABgDADAAQAEAAACADQACACAAADQAAADgCACQgCADgEAAQgDAAgBgDg");
	this.shape_102.setTransform(199.8,74.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#1B4D86").s().p("AgGAhQgFgFAAgJIAAgcIgHAAIAAgLIAHAAIAAgMIAMgEIAAAQIAQAAIAAALIgQAAIAAAYQAAAGACADQACACAFAAQAFAAAEgCIAAAMQgEACgKgBQgHAAgEgEg");
	this.shape_103.setTransform(196.1,75.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#1B4D86").s().p("AgQAWQgIgIAAgOQAAgMAJgIQAIgJAOAAQAKAAAHAGIgGAKQgEgFgIAAQgHAAgEAFQgFAGAAAHQAAATAQAAQAIAAAGgFIAFAKQgGAEgFABIgKABQgMAAgIgIg");
	this.shape_104.setTransform(191.2,75.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#1B4D86").s().p("AANAcQgDgCAAgDQgCADgFACQgDACgFAAQgKAAgFgFQgFgEAAgJQAAgKAHgFQAIgFANAAIAFABQAAgLgMAAQgHAAgFADIgDgLQAHgDAJAAQAMAAAGAGQAHAGAAARIAAALQAAAMAEADIgDADIgFABQgDAAgCgCgAgMALQAAAIAJAAQALAAAAgMIAAgFIgFgBQgPAAAAAKg");
	this.shape_105.setTransform(185.5,75.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#1B4D86").s().p("AgKAdIgJgEIAFgLQAGAFAHAAQAHAAAAgFQAAgEgCgCIgIgFQgPgFAAgLQAAgIAFgEQAGgEAIAAQAJAAAIAEIgEALQgEgEgIAAQgGAAAAAFQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAQACACAHADQAHADAEADQADAFAAAGQAAAIgGAEQgGAFgJAAIgJgBg");
	this.shape_106.setTransform(180.2,75.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#1B4D86").s().p("AAMAdIAAggQAAgHgDgEQgDgDgGAAQgCAAgDACQgEABgCADIAAAoIgNAAIAAg4IAKAAIACAFQAGgGAJAAQAKAAAHAGQAFAGAAALIAAAig");
	this.shape_107.setTransform(174.6,75.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#1B4D86").s().p("AANAcQgDgCAAgDQgCADgFACQgDACgFAAQgKAAgFgFQgFgEAAgJQAAgKAHgFQAIgFANAAIAFABQAAgLgMAAQgHAAgFADIgDgLQAHgDAJAAQAMAAAGAGQAHAGAAARIAAALQAAAMAEADIgDADIgFABQgDAAgCgCgAgMALQAAAIAJAAQALAAAAgMIAAgFIgFgBQgPAAAAAKg");
	this.shape_108.setTransform(168.5,75.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1B4D86").s().p("AgSAdIAAg4IANAAIAAAFQAFgGAJAAQAHAAADACIgFALQgEgCgEAAQgFAAgCAEQgEAEAAAGIAAAgg");
	this.shape_109.setTransform(163.5,75.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#1B4D86").s().p("AgHAhQgEgFAAgJIAAgcIgHAAIAAgLIAHAAIAAgMIAMgEIAAAQIAQAAIAAALIgQAAIAAAYQAAAGACADQACACAFAAQAFAAAEgCIAAAMQgEACgJgBQgIAAgFgEg");
	this.shape_110.setTransform(158.7,75.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#1B4D86").s().p("AgSAdIAAg4IANAAIAAAFQAFgGAJAAQAHAAADACIgFALQgEgCgEAAQgFAAgCAEQgEAEAAAGIAAAgg");
	this.shape_111.setTransform(151.2,75.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#1B4D86").s().p("AgTAWQgIgIAAgNQAAgNAJgIQAIgJAKAAQANAAAHAIQAIAHAAAMIgBAGIgoAAQABAHADAEQAFAEAGAAQAKAAAFgFIAEAKQgGAGgPAAQgMAAgHgIgAAPgFQgBgNgNAAQgKAAgDANIAbAAIAAAAg");
	this.shape_112.setTransform(145.4,75.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#1B4D86").s().p("AgaAoIAAhPIAOAAIAAAFQAFgGAHABQAbgBAAAeQAAAOgIAIQgHAHgNAAQgGAAgFgDIAAAYgAgMgYIAAAdQAEACAEAAQAJAAAEgDQAEgEAAgKQAAgKgEgEQgEgEgJAAQgEAAgEAEg");
	this.shape_113.setTransform(139.1,77);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#1B4D86").s().p("AAMAdIAAggQAAgHgDgEQgDgDgGAAQgCAAgEACQgDABgCADIAAAoIgNAAIAAg4IAKAAIACAFQAFgGAKAAQAKAAAHAGQAFAGAAALIAAAig");
	this.shape_114.setTransform(129.4,75.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#1B4D86").s().p("AgTAWQgIgJAAgNQAAgMAIgJQAHgIAMAAQANAAAHAIQAIAIAAANQAAAOgIAIQgHAIgNAAQgMAAgHgIgAgJgNQgEAFAAAIQAAATANAAQAGAAAEgFQAEgFAAgJQAAgSgOAAQgFAAgEAFg");
	this.shape_115.setTransform(123,75.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#1B4D86").s().p("AgaAoIAAhPIAOAAIAAAFQAFgGAHABQAbgBAAAeQAAAOgIAIQgHAHgNAAQgGAAgFgDIAAAYgAgMgYIAAAdQAEACAEAAQAJAAAEgDQAEgEAAgKQAAgKgEgEQgEgEgJAAQgEAAgEAEg");
	this.shape_116.setTransform(116.8,77);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#1B4D86").s().p("AgYAIIAAgkIANAAIAAAjQAAALAKAAQADAAAFgCQAEgDABgDIAAgmIANAAIAAA4IgNAAIAAgFIgIAFIgIABQgUAAAAgVg");
	this.shape_117.setTransform(110.3,75.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#1B4D86").s().p("AgTAWQgIgJAAgNQAAgMAIgJQAHgIAMAAQANAAAHAIQAIAIAAANQAAAOgIAIQgHAIgNAAQgMAAgHgIgAgJgNQgEAFAAAIQAAATANAAQAGAAAEgFQAEgFAAgJQAAgSgOAAQgFAAgEAFg");
	this.shape_118.setTransform(104,75.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#1B4D86").s().p("AgQAWQgIgIAAgOQAAgMAJgIQAIgJAOAAQAKAAAHAGIgGAKQgEgFgIAAQgHAAgEAFQgFAGAAAHQAAATAQAAQAIAAAGgFIAFAKQgGAEgFABIgKABQgMAAgIgIg");
	this.shape_119.setTransform(98.1,75.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#1B4D86").s().p("AABAoIAAg4IgPAKIAAgOQAOgIAKgLIAFAAIAABPg");
	this.shape_120.setTransform(88.5,74.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#1B4D86").s().p("AgHAhQgEgFAAgJIAAgcIgHAAIAAgLIAHAAIAAgMIAMgEIAAAQIAQAAIAAALIgQAAIAAAYQAAAGACADQACACAFAAQAFAAAEgCIAAAMQgFACgIgBQgIAAgFgEg");
	this.shape_121.setTransform(80.1,75.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#1B4D86").s().p("AgCAoIAAguIgIAAIAAgLIAUAAIAAA5gAgBgaQgCgCAAgDQAAgDACgCQABgDADAAQADAAADADQACACAAADQAAADgCACQgDADgDAAQgDAAgBgDg");
	this.shape_122.setTransform(76.1,74.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#1B4D86").s().p("AAbAdIAAgjQAAgLgLAAQgDAAgCACQgDABgCADIAAAoIgMAAIAAglQAAgEgCgDQgDgCgFAAQgDAAgDACIgEAEIAAAoIgNAAIAAg4IAJAAIADAFQAFgGAJAAQAMAAAEAGQADgDAFgCIAJgBQAJAAAGAFQAFAGAAAJIAAAlg");
	this.shape_123.setTransform(70,75.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#1B4D86").s().p("AgCAoIAAguIgIAAIAAgLIAUAAIAAA5gAgBgaQgDgCAAgDQAAgDADgCQABgDADAAQAEAAACADQACACAAADQAAADgCACQgCADgEAAQgDAAgBgDg");
	this.shape_124.setTransform(63.4,74.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#1B4D86").s().p("AgYAnIAAhNIAOAAIAABBIAjAAIAAAMg");
	this.shape_125.setTransform(59.2,74.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#1B4D86").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgCADAAQAEAAADACQADADAAADQAAAEgDADQgDACgEABQgDgBgDgCg");
	this.shape_126.setTransform(50.5,78.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#1B4D86").s().p("AgKAdIgJgEIAFgLQAGAFAHAAQAHAAAAgFQAAgEgCgCIgIgFQgPgFAAgLQAAgIAFgEQAGgEAIAAQAJAAAIAEIgEALQgEgEgIAAQgGAAAAAFQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAQACACAHADQAHADAEADQADAFAAAGQAAAIgGAEQgGAFgJAAIgJgBg");
	this.shape_127.setTransform(46.3,75.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#1B4D86").s().p("AAMAdIAAggQAAgHgDgEQgDgDgGAAQgCAAgEACQgDABgCADIAAAoIgNAAIAAg4IAJAAIADAFQAFgGAKAAQAKAAAHAGQAFAGAAALIAAAig");
	this.shape_128.setTransform(40.7,75.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#1B4D86").s().p("AgTAWQgIgJAAgNQAAgMAIgJQAHgIAMAAQANAAAHAIQAIAIAAANQAAAOgIAIQgHAIgNAAQgMAAgHgIgAgJgNQgEAFAAAIQAAATANAAQAGAAAEgFQAEgFAAgJQAAgSgOAAQgFAAgEAFg");
	this.shape_129.setTransform(34.4,75.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#1B4D86").s().p("AgDAoIAAguIgHAAIAAgLIAUAAIAAA5gAgBgaQgCgCgBgDQABgDACgCQABgDADAAQADAAADADQACACAAADQAAADgCACQgDADgDAAQgDAAgBgDg");
	this.shape_130.setTransform(29.5,74.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#1B4D86").s().p("AgHAhQgEgFAAgJIAAgcIgHAAIAAgLIAHAAIAAgMIAMgEIAAAQIAQAAIAAALIgQAAIAAAYQAAAGACADQACACAFAAQAFAAAEgCIAAAMQgFACgIgBQgIAAgFgEg");
	this.shape_131.setTransform(25.8,75.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#1B4D86").s().p("AANAcQgDgCAAgDQgCADgFACQgDACgFAAQgKAAgFgFQgFgEAAgJQAAgKAHgFQAIgFANAAIAFABQAAgLgMAAQgHAAgFADIgDgLQAHgDAJAAQAMAAAGAGQAHAGAAARIAAALQAAAMAEADIgDADIgFABQgDAAgCgCgAgMALQAAAIAJAAQALAAAAgMIAAgFIgFgBQgPAAAAAKg");
	this.shape_132.setTransform(20.8,75.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#1B4D86").s().p("AgQAWQgIgIAAgOQAAgMAJgIQAIgJAOAAQAKAAAHAGIgGAKQgEgFgIAAQgHAAgEAFQgFAGAAAHQAAATAQAAQAIAAAGgFIAFAKQgGAEgFABIgKABQgMAAgIgIg");
	this.shape_133.setTransform(15,75.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#1B4D86").s().p("AgTAWQgIgJAAgNQAAgMAIgJQAHgIAMAAQANAAAHAIQAIAIAAANQAAAOgIAIQgHAIgNAAQgMAAgHgIgAgJgNQgEAFAAAIQAAATANAAQAGAAAEgFQAEgFAAgJQAAgSgOAAQgFAAgEAFg");
	this.shape_134.setTransform(9.1,75.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#1B4D86").s().p("AgJAdIAAhDIANgCIAAA/QgBAKAHACQgEAHgGgBQgJAAAAgMg");
	this.shape_135.setTransform(4.8,74.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#1B4D86").s().p("AgKAdIgJgEIAFgLQAGAFAHAAQAHAAAAgFQAAgEgCgCIgIgFQgPgFAAgLQAAgIAFgEQAGgEAIAAQAJAAAIAEIgEALQgEgEgIAAQgGAAAAAFQAAABAAAAQAAABAAABQABAAAAAAQABABAAAAQACACAHADQAHADAEADQADAFAAAGQAAAIgGAEQgGAFgJAAIgJgBg");
	this.shape_136.setTransform(226.6,61.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#1B4D86").s().p("AAMAdIAAggQAAgHgDgEQgDgDgGAAQgCAAgEACQgDABgCADIAAAoIgNAAIAAg4IAJAAIADAFQAGgGAJAAQALAAAFAGQAGAGAAALIAAAig");
	this.shape_137.setTransform(221,61);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#1B4D86").s().p("AgCAoIAAgtIgIAAIAAgLIAUAAIAAA4gAgBgZQgDgDAAgDQAAgDADgDQABgCADAAQAEAAACACQACADAAADQAAADgCADQgCACgEAAQgDAAgBgCg");
	this.shape_138.setTransform(216,60);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#1B4D86").s().p("AgPAlIgDAFIgIAAIAAhPIAOgEIAAAbQAFgDAHAAQALAAAIAIQAIAIAAALQAAAPgIAIQgIAJgMAAQgIAAgGgFgAgMgCIAAAcQADAEAFAAQAJAAAEgEQAEgFAAgKQAAgRgQAAQgGAAgDAEg");
	this.shape_139.setTransform(211.4,59.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#1B4D86").s().p("AgPAlIgDAFIgIAAIAAhPIAOgEIAAAbQAFgDAHAAQALAAAIAIQAIAIAAALQAAAPgIAIQgIAJgMAAQgIAAgGgFgAgMgCIAAAcQADAEAFAAQAJAAAEgEQAEgFAAgKQAAgRgQAAQgGAAgDAEg");
	this.shape_140.setTransform(205.1,59.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#1B4D86").s().p("AgTAWQgIgJAAgNQAAgMAIgJQAHgIAMAAQANAAAHAIQAIAIAAANQAAAOgIAIQgHAIgNAAQgMAAgHgIgAgJgNQgEAFAAAIQAAATANAAQAGAAAEgFQAEgFAAgJQAAgSgOAAQgFAAgEAFg");
	this.shape_141.setTransform(198.7,61.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#1B4D86").s().p("AAOAoIgUghIgJAAIAAAhIgOAAIAAhOIAJAAIANgBQAdAAAAAXQAAAHgFAGQgEAFgGACIAXAkgAgPgaIAAAWIAGAAQAJAAADgCQAEgDAAgHQAAgGgEgCQgEgCgJAAg");
	this.shape_142.setTransform(192.7,60);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#1B4D86").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_143.setTransform(186.9,60.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#1B4D86").s().p("AAMAdIAAggQAAgHgDgEQgDgDgGAAQgCAAgDACQgEABgCADIAAAoIgNAAIAAg4IAKAAIACAFQAFgGAKAAQAKAAAHAGQAFAGAAALIAAAig");
	this.shape_144.setTransform(181.7,61);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#1B4D86").s().p("AgCAoIAAgtIgIAAIAAgLIAUAAIAAA4gAgBgZQgDgDABgDQgBgDADgDQABgCAEAAQADAAACACQACADAAADQAAADgCADQgCACgDAAQgEAAgBgCg");
	this.shape_145.setTransform(176.7,60);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#1B4D86").s().p("AAKApIgQgaIgGAHIAAATIgNAAIAAhOIANgDIAAAtIASgUIAQAAIgTAUIAXAkg");
	this.shape_146.setTransform(172.6,59.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#1B4D86").s().p("AgKAdIgJgEIAFgLQAGAFAHAAQAHAAAAgFQAAgEgCgCIgIgFQgPgFAAgLQAAgIAFgEQAGgEAIAAQAJAAAIAEIgEALQgEgEgIAAQgGAAAAAFQAAABAAAAQAAABAAABQABAAAAAAQABABAAAAQACACAHADQAHADAEADQADAFAAAGQAAAIgGAEQgGAFgJAAIgJgBg");
	this.shape_147.setTransform(166.9,61.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#1B4D86").s().p("AANAcQgDgCAAgDQgCADgFACQgDACgFAAQgKAAgFgFQgFgEAAgJQAAgKAHgFQAIgFANAAIAFABQAAgLgMAAQgHAAgFADIgDgLQAHgDAJAAQAMAAAGAGQAHAGAAARIAAALQAAAMAEADIgDADIgFABQgDAAgCgCgAgMALQAAAIAJAAQALAAAAgMIAAgFIgFgBQgPAAAAAKg");
	this.shape_148.setTransform(161.6,61.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#1B4D86").s().p("AgaAoIAAhOIAXgBQALAAAHAGQAHAFAAAKQAAAJgKAFQAOAEAAAQQAAALgIAGQgHAHgNAAgAgMACIAAAaIAIAAQAHAAAFgDQAEgDAAgHQAAgHgEgDQgDgDgJAAgAgMgIIAIAAQAMAAAAgKQAAgJgLAAIgJAAg");
	this.shape_149.setTransform(155.6,60);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#1B4D86").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgCADgBQAEABADACQADADgBADQABAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_150.setTransform(146.8,63.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#1B4D86").s().p("AgXAjIAFgNQAIAGAIAAQAMAAAAgIQAAgEgDgEQgDgEgIgEQgJgEgDgDIgFgHQgCgEAAgFQAAgJAHgGQAHgGAJAAQAOAAAGAFIgEAMQgIgFgIAAQgEAAgCADQgDACAAAEQAAAHAOAHIAMAGQADAEACAEQACAEAAAGQAAAJgIAGQgHAHgMAAQgLAAgJgGg");
	this.shape_151.setTransform(142.1,60);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#1B4D86").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgCADgBQAEABADACQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_152.setTransform(137.2,63.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#1B4D86").s().p("AgVAhQgHgGAAgNIAAg1IAOAAIAAA0QAAAHAEAEQAEADAGAAQAHAAAEgDQAEgEAAgHIAAg0IAOAAIAAA1QAAAMgIAHQgIAHgNAAQgNAAgIgHg");
	this.shape_153.setTransform(131.5,60.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#1B4D86").s().p("AgYAjIAJgLQAHAGAIAAQAFAAAEgBQADgCAAgDQAAgFgIAAIgFAAIgHABQgOAAAAgKQAAgDACgDIAFgEQgKgFABgMQgBgJAIgGQAGgGAKAAQAHAAAFADIAGgGIAJAIIgHAFQAEAFgBAHQAAAKgFAGQgHAEgJAAIgCAAIgDAAIgDABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAABABAAQAAAAABABQABAAAAAAIAGgBIAGgBQATAAABAQQAAAIgIAFQgIAFgKAAQgOAAgKgHgAgHgYQgDADAAAEQAAAGACADQADADAFAAQAEAAACgDQACgDABgGQgBgEgCgDQgDgDgDAAQgFAAgCADg");
	this.shape_154.setTransform(121.8,62);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#1B4D86").s().p("AAMAdIAAggQAAgHgDgEQgDgDgGAAQgCAAgEACQgDABgCADIAAAoIgNAAIAAg4IAJAAIADAFQAGgGAJAAQALAAAFAGQAGAGAAALIAAAig");
	this.shape_155.setTransform(115.8,61);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#1B4D86").s().p("AgCAoIAAgtIgIAAIAAgLIAUAAIAAA4gAgBgZQgCgDAAgDQAAgDACgDQABgCADAAQADAAADACQACADAAADQAAADgCADQgDACgDAAQgDAAgBgCg");
	this.shape_156.setTransform(110.8,60);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#1B4D86").s().p("AgGAgQgFgEAAgJIAAgcIgHAAIAAgLIAHAAIAAgLIAMgGIAAARIAQAAIAAALIgQAAIAAAYQAAAGACACQACADAFAAQAFAAAEgDIAAANQgEACgKAAQgHgBgEgFg");
	this.shape_157.setTransform(107.1,60.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#1B4D86").s().p("AANAcQgDgCAAgDQgCADgFACQgDACgFAAQgKAAgFgFQgFgEAAgJQAAgKAHgFQAIgFANAAIAFABQAAgLgMAAQgHAAgFADIgDgLQAHgDAJAAQAMAAAGAGQAHAGAAARIAAALQAAAMAEADIgDADIgFABQgDAAgCgCgAgMALQAAAIAJAAQALAAAAgMIAAgFIgFgBQgPAAAAAKg");
	this.shape_158.setTransform(102.1,61.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#1B4D86").s().p("AgaApIAAhPIAOAAIAAADQAFgEAHAAQAbAAAAAeQAAANgIAHQgHAIgNAAQgGAAgFgCIAAAYgAgMgZIAAAeQAEACAEABQAJAAAEgFQAEgDAAgJQAAgLgEgEQgEgEgJAAQgEAAgEADg");
	this.shape_159.setTransform(96,62.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#1B4D86").s().p("AgDAoIAAgtIgHAAIAAgLIAUAAIAAA4gAgBgZQgCgDgBgDQABgDACgDQABgCAEAAQADAAACACQACADAAADQAAADgCADQgCACgDAAQgEAAgBgCg");
	this.shape_160.setTransform(90.9,60);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#1B4D86").s().p("AgQAWQgIgIAAgOQAAgMAJgIQAIgJAOAAQAKAAAHAGIgGAKQgEgFgIAAQgHAAgEAFQgFAGAAAHQAAATAQAAQAIAAAGgFIAFAKQgGAEgFABIgKABQgMAAgIgIg");
	this.shape_161.setTransform(86.7,61.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#1B4D86").s().p("AgCAoIAAgtIgIAAIAAgLIAUAAIAAA4gAgBgZQgCgDAAgDQAAgDACgDQABgCAEAAQACAAADACQACADAAADQAAADgCADQgDACgCAAQgEAAgBgCg");
	this.shape_162.setTransform(82.1,60);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#1B4D86").s().p("AgGAgQgFgEAAgJIAAgcIgHAAIAAgLIAHAAIAAgLIAMgGIAAARIAQAAIAAALIgQAAIAAAYQAAAGACACQACADAFAAQAFAAAEgDIAAANQgEACgKAAQgHgBgEgFg");
	this.shape_163.setTransform(78.4,60.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#1B4D86").s().p("AgSAdIAAg4IANAAIAAAFQAFgGAJAAQAHAAADACIgFALQgEgCgEAAQgFAAgCAEQgEAEAAAGIAAAgg");
	this.shape_164.setTransform(74.3,61);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#1B4D86").s().p("AANAcQgDgCAAgDQgCADgFACQgDACgFAAQgKAAgFgFQgFgEAAgJQAAgKAHgFQAIgFANAAIAFABQAAgLgMAAQgHAAgFADIgDgLQAHgDAJAAQAMAAAGAGQAHAGAAARIAAALQAAAMAEADIgDADIgFABQgDAAgCgCgAgMALQAAAIAJAAQALAAAAgMIAAgFIgFgBQgPAAAAAKg");
	this.shape_165.setTransform(68.7,61.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#1B4D86").s().p("AgaApIAAhPIAOAAIAAADQAFgEAHAAQAbAAAAAeQAAANgIAHQgHAIgNAAQgGAAgFgCIAAAYgAgMgZIAAAeQAEACAEABQAJAAAEgFQAEgDAAgJQAAgLgEgEQgEgEgJAAQgEAAgEADg");
	this.shape_166.setTransform(62.6,62.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#1B4D86").s().p("AgHAgQgEgEAAgJIAAgcIgHAAIAAgLIAHAAIAAgLIAMgGIAAARIAQAAIAAALIgQAAIAAAYQAAAGACACQACADAFAAQAFAAAEgDIAAANQgEACgKAAQgHgBgFgFg");
	this.shape_167.setTransform(53.9,60.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#1B4D86").s().p("AANAcQgDgCAAgDQgCADgFACQgDACgFAAQgKAAgFgFQgFgEAAgJQAAgKAHgFQAIgFANAAIAFABQAAgLgMAAQgHAAgFADIgDgLQAHgDAJAAQAMAAAGAGQAHAGAAARIAAALQAAAMAEADIgDADIgFABQgDAAgCgCgAgMALQAAAIAJAAQALAAAAgMIAAgFIgFgBQgPAAAAAKg");
	this.shape_168.setTransform(48.8,61.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#1B4D86").s().p("AgVAcQAPAAAAgHQAAgGgEgLIgSgrIAOAAIAPAnIAOgnIAOAAIgaBCQgCAFgGAFQgHADgJAAg");
	this.shape_169.setTransform(39.6,62.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#1B4D86").s().p("AgJAdIAAhCIANgEIAABAQAAALAGACQgEAFgGABQgJAAAAgNg");
	this.shape_170.setTransform(35.5,59.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#1B4D86").s().p("AAMAdIAAggQAAgHgDgEQgDgDgGAAQgCAAgEACQgDABgCADIAAAoIgNAAIAAg4IAJAAIADAFQAGgGAJAAQALAAAFAGQAGAGAAALIAAAig");
	this.shape_171.setTransform(30.3,61);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#1B4D86").s().p("AgTAWQgIgJAAgNQAAgMAIgJQAHgIAMAAQANAAAHAIQAIAIAAANQAAAOgIAIQgHAIgNAAQgMAAgHgIgAgJgNQgEAFAAAIQAAATANAAQAGAAAEgFQAEgFAAgJQAAgSgOAAQgFAAgEAFg");
	this.shape_172.setTransform(24,61.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#1B4D86").s().p("AgTAiQgGgHgBgPQABgMAHgIQAJgJALAAQAGAAAGACIAAgWIAMgEIAABSIgMAAIAAgEQgCACgFABIgHACQgLAAgIgIgAgHgBQgEAEAAAJQgBASARAAIAEgBIAFgCIAAgdQgFgEgEAAQgIAAgEAFg");
	this.shape_173.setTransform(14.3,59.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#1B4D86").s().p("AgCAoIAAgtIgIAAIAAgLIAUAAIAAA4gAgBgZQgDgDAAgDQAAgDADgDQABgCADAAQAEAAACACQACADAAADQAAADgCADQgCACgEAAQgDAAgBgCg");
	this.shape_174.setTransform(9.4,60);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#1B4D86").s().p("AgJAdIAAhCIAMgEIAABAQAAALAHACQgEAFgGABQgJAAAAgNg");
	this.shape_175.setTransform(6.7,59.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#1B4D86").s().p("AANAcQgDgCAAgDQgCADgFACQgDACgFAAQgKAAgFgFQgFgEAAgJQAAgKAHgFQAIgFANAAIAFABQAAgLgMAAQgHAAgFADIgDgLQAHgDAJAAQAMAAAGAGQAHAGAAARIAAALQAAAMAEADIgDADIgFABQgDAAgCgCgAgMALQAAAIAJAAQALAAAAgMIAAgFIgFgBQgPAAAAAKg");
	this.shape_176.setTransform(1.9,61.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#1B4D86").s().p("AgEAoIgdhPIAPAAIASA0IATg0IAPAAIgfBPg");
	this.shape_177.setTransform(-4.5,60.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#1B4D86").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADABQAEgBADADQADADAAADQAAAEgDADQgDACgEABQgDgBgDgCg");
	this.shape_178.setTransform(224.1,48.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#1B4D86").s().p("AAOAdIgOgTIgOATIgPAAIAWgdIgUgcIAPAAIAMASIAMgSIAQAAIgWAcIAYAdg");
	this.shape_179.setTransform(219.2,46.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#1B4D86").s().p("AANAcQgDgCAAgDQgCADgFACQgDACgFAAQgKAAgFgFQgFgEAAgJQAAgKAHgFQAIgFANAAIAFABQAAgLgMAAQgHAAgFADIgDgLQAHgDAJAAQAMAAAGAGQAHAGAAARIAAALQAAAMAEADIgDADIgFABQgDAAgCgCgAgMALQAAAIAJAAQALAAAAgMIAAgFIgFgBQgPAAAAAKg");
	this.shape_180.setTransform(213.3,46.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#1B4D86").s().p("AgGAhQgFgFAAgJIAAgcIgHAAIAAgLIAHAAIAAgMIAMgEIAAAQIAQAAIAAALIgQAAIAAAYQAAAGACADQACACAFAAQAFAAAEgCIAAAMQgEACgKgBQgHAAgEgEg");
	this.shape_181.setTransform(208.1,45.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#1B4D86").s().p("AgTAWQgIgIAAgNQAAgNAJgIQAIgJAKAAQANAAAHAIQAIAHAAAMIgBAGIgoAAQABAHADAEQAFAEAGAAQAKAAAEgFIAGAKQgIAGgOAAQgMAAgHgIgAAPgFQgBgNgNAAQgKAAgDANIAbAAIAAAAg");
	this.shape_182.setTransform(199.5,46.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#1B4D86").s().p("AgJAdIAAhDIANgCIAAA/QgBAKAHADQgDAFgHAAQgJAAAAgMg");
	this.shape_183.setTransform(195.1,45.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#1B4D86").s().p("AgPAmIgDADIgIAAIAAhPIAOgCIAAAaQAFgDAHAAQALAAAIAIQAIAIAAAMQAAAOgIAIQgIAIgMAAQgIAAgGgDgAgMgDIAAAeQADADAFAAQAJAAAEgFQAEgEAAgKQAAgQgQAAQgGAAgDACg");
	this.shape_184.setTransform(190.1,45.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#1B4D86").s().p("AANAcQgDgCAAgDQgCADgFACQgDACgFAAQgKAAgFgFQgFgEAAgJQAAgKAHgFQAIgFANAAIAFABQAAgLgMAAQgHAAgFADIgDgLQAHgDAJAAQAMAAAGAGQAHAGAAARIAAALQAAAMAEADIgDADIgFABQgDAAgCgCgAgMALQAAAIAJAAQALAAAAgMIAAgFIgFgBQgPAAAAAKg");
	this.shape_185.setTransform(183.9,46.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#1B4D86").s().p("AgQAWQgIgIAAgOQAAgMAJgIQAIgJAOAAQAKAAAHAGIgGAKQgEgFgIAAQgHAAgEAFQgFAGAAAHQAAATAQAAQAIAAAGgFIAFAKQgGAEgFABIgKABQgMAAgIgIg");
	this.shape_186.setTransform(178.2,46.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#1B4D86").s().p("AgDAoIAAguIgHAAIAAgLIAUAAIAAA5gAgBgaQgDgCAAgDQAAgDADgDQABgCADAAQADAAADACQACADAAADQAAADgCACQgDADgDAAQgDAAgBgDg");
	this.shape_187.setTransform(173.6,45.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#1B4D86").s().p("AgJAdIAAhDIAMgCIAAA/QABAKAGADQgDAFgHAAQgJAAAAgMg");
	this.shape_188.setTransform(170.9,45.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#1B4D86").s().p("AgaAoIAAhPIAOAAIAAAFQAFgGAHAAQAbAAAAAeQAAAOgIAIQgHAHgNAAQgGAAgFgDIAAAYgAgMgYIAAAdQAEACAEAAQAJAAAEgDQAEgEAAgKQAAgKgEgEQgEgEgJAAQgEAAgEAEg");
	this.shape_189.setTransform(165.8,47.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#1B4D86").s().p("AgaAoIAAhPIAOAAIAAAFQAFgGAHAAQAbAAAAAeQAAAOgIAIQgHAHgNAAQgGAAgFgDIAAAYgAgMgYIAAAdQAEACAEAAQAJAAAEgDQAEgEAAgKQAAgKgEgEQgEgEgJAAQgEAAgEAEg");
	this.shape_190.setTransform(159.4,47.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#1B4D86").s().p("AANAcQgDgCAAgDQgCADgFACQgDACgFAAQgKAAgFgFQgFgEAAgJQAAgKAHgFQAIgFANAAIAFABQAAgLgMAAQgHAAgFADIgDgLQAHgDAJAAQAMAAAGAGQAHAGAAARIAAALQAAAMAEADIgDADIgFABQgDAAgCgCgAgMALQAAAIAJAAQALAAAAgMIAAgFIgFgBQgPAAAAAKg");
	this.shape_191.setTransform(153.2,46.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#1B4D86").s().p("AgVAcQAPAAAAgIQAAgFgEgKIgSgsIAOAAIAPAnIAOgnIAOAAIgaBBQgCAHgGADQgHAEgJAAg");
	this.shape_192.setTransform(144,47.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#1B4D86").s().p("AANAcQgDgCAAgDQgCADgFACQgDACgFAAQgKAAgFgFQgFgEAAgJQAAgKAHgFQAIgFANAAIAFABQAAgLgMAAQgHAAgFADIgDgLQAHgDAJAAQAMAAAGAGQAHAGAAARIAAALQAAAMAEADIgDADIgFABQgDAAgCgCgAgMALQAAAIAJAAQALAAAAgMIAAgFIgFgBQgPAAAAAKg");
	this.shape_193.setTransform(138.2,46.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#1B4D86").s().p("AgaAoIAAhPIAOAAIAAAFQAFgGAHAAQAbAAAAAeQAAAOgIAIQgHAHgNAAQgGAAgFgDIAAAYgAgMgYIAAAdQAEACAEAAQAJAAAEgDQAEgEAAgKQAAgKgEgEQgEgEgJAAQgEAAgEAEg");
	this.shape_194.setTransform(132.1,47.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#1B4D86").s().p("AgHAhQgEgFAAgJIAAgcIgHAAIAAgLIAHAAIAAgMIAMgEIAAAQIAQAAIAAALIgQAAIAAAYQAAAGACADQACACAFAAQAFAAAEgCIAAAMQgFACgIgBQgIAAgFgEg");
	this.shape_195.setTransform(123.4,45.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#1B4D86").s().p("AgKAdIgJgEIAFgLQAGAFAHAAQAHAAAAgFQAAgEgCgCIgIgFQgPgFAAgLQAAgIAFgEQAGgEAIAAQAJAAAIAEIgEALQgEgEgIAAQgGAAAAAFQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAQACACAHADQAHADAEADQADAFAAAGQAAAIgGAEQgGAFgJAAIgJgBg");
	this.shape_196.setTransform(118.9,46.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#1B4D86").s().p("AgYAIIAAgkIANAAIAAAjQAAALAKAAQAEAAADgCQAEgDACgDIAAgmIANAAIAAA4IgNAAIAAgFIgIAFIgIABQgUAAAAgVg");
	this.shape_197.setTransform(113.3,46.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#1B4D86").s().p("AAbAdIAAgjQAAgLgLAAQgDAAgDACQgCABgBADIAAAoIgNAAIAAglQAAgEgCgDQgDgCgFAAQgDAAgCACIgFAEIAAAoIgNAAIAAg4IAJAAIADAFQAFgGAJAAQAMAAAEAGIAHgFIAJgBQAKAAAGAFQAFAGAAAJIAAAlg");
	this.shape_198.setTransform(105.4,46.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#1B4D86").s().p("AgSAdIAAg4IANAAIAAAFQAFgGAJAAQAHAAADACIgFALQgEgCgEAAQgFAAgCAEQgEAEAAAGIAAAgg");
	this.shape_199.setTransform(95.3,46.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#1B4D86").s().p("AgTAWQgIgIAAgNQAAgNAJgIQAIgJAKAAQANAAAHAIQAIAHAAAMIgBAGIgoAAQABAHAEAEQAEAEAGAAQAJAAAGgFIAEAKQgGAGgPAAQgMAAgHgIgAAPgFQgCgNgMAAQgKAAgEANIAcAAIAAAAg");
	this.shape_200.setTransform(89.5,46.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#1B4D86").s().p("AAbAdIAAgjQAAgLgLAAQgDAAgCACQgDABgCADIAAAoIgMAAIAAglQAAgEgCgDQgDgCgFAAQgDAAgDACIgEAEIAAAoIgNAAIAAg4IAJAAIADAFQAFgGAJAAQAMAAAEAGQADgDAFgCIAJgBQAJAAAGAFQAFAGAAAJIAAAlg");
	this.shape_201.setTransform(81.7,46.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#1B4D86").s().p("AgTAWQgIgJAAgNQAAgMAIgJQAHgIAMAAQANAAAHAIQAIAIAAANQAAAOgIAIQgHAIgNAAQgMAAgHgIgAgJgNQgEAFAAAIQAAATANAAQAGAAAEgFQAEgFAAgJQAAgSgOAAQgFAAgEAFg");
	this.shape_202.setTransform(73.8,46.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#1B4D86").s().p("AgGAhQgFgFAAgJIAAgcIgHAAIAAgLIAHAAIAAgMIAMgEIAAAQIAQAAIAAALIgQAAIAAAYQAAAGACADQACACAFAAQAFAAAEgCIAAAMQgEACgKgBQgHAAgEgEg");
	this.shape_203.setTransform(68.5,45.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#1B4D86").s().p("AgKAdIgJgEIAFgLQAGAFAHAAQAHAAAAgFQAAgEgCgCIgIgFQgPgFAAgLQAAgIAFgEQAGgEAIAAQAJAAAIAEIgEALQgEgEgIAAQgGAAAAAFQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAQACACAHADQAHADAEADQADAFAAAGQAAAIgGAEQgGAFgJAAIgJgBg");
	this.shape_204.setTransform(64,46.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#1B4D86").s().p("AgYAIIAAgkIANAAIAAAjQAAALAKAAQAEAAAEgCQAEgDABgDIAAgmIANAAIAAA4IgNAAIAAgFIgIAFIgIABQgUAAAAgVg");
	this.shape_205.setTransform(58.5,46.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#1B4D86").s().p("AgUAeQgJgLAAgTQAAgQAKgMQAKgMAPAAQAOAAAIAGIgGALQgFgEgKAAQgJAAgGAIQgGAIAAAMQAAAMAFAIQAGAHAJAAQALAAAGgIIAHAMQgJAJgQAAQgQAAgJgLg");
	this.shape_206.setTransform(51.9,45.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#1B4D86").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADABQAEgBADADQACADAAADQAAAEgCADQgDACgEABQgDgBgDgCg");
	this.shape_207.setTransform(43.1,48.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#1B4D86").s().p("AgTAWQgIgIAAgNQAAgNAIgIQAJgJAKAAQANAAAIAIQAHAHAAAMIgBAGIgoAAQAAAHAEAEQAFAEAHAAQAIAAAFgFIAGAKQgIAGgOAAQgLAAgIgIgAAPgFQgBgNgNAAQgLAAgCANIAbAAIAAAAg");
	this.shape_208.setTransform(38.1,46.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#1B4D86").s().p("AgKAdIgJgEIAFgLQAGAFAHAAQAHAAAAgFQAAgEgCgCIgIgFQgPgFAAgLQAAgIAFgEQAGgEAIAAQAJAAAIAEIgEALQgEgEgIAAQgGAAAAAFQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAQACACAHADQAHADAEADQADAFAAAGQAAAIgGAEQgGAFgJAAIgJgBg");
	this.shape_209.setTransform(32.6,46.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#1B4D86").s().p("AANAcQgDgCAAgDQgCADgFACQgDACgFAAQgKAAgFgFQgFgEAAgJQAAgKAHgFQAIgFANAAIAFABQAAgLgMAAQgHAAgFADIgDgLQAHgDAJAAQAMAAAGAGQAHAGAAARIAAALQAAAMAEADIgDADIgFABQgDAAgCgCgAgMALQAAAIAJAAQALAAAAgMIAAgFIgFgBQgPAAAAAKg");
	this.shape_210.setTransform(27.3,46.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#1B4D86").s().p("AAMApIAAgjQAAgGgEgCQgDgDgFAAIgGACIgFADIAAApIgNAAIAAhOIANgDIAAAcQAFgEAIgBQALAAAGAHQAGAFAAALIAAAjg");
	this.shape_211.setTransform(21.1,45.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#1B4D86").s().p("AgQAWQgIgIAAgOQAAgMAJgIQAIgJAOAAQAKAAAHAGIgGAKQgEgFgIAAQgHAAgEAFQgFAGAAAHQAAATAQAAQAIAAAGgFIAFAKQgGAEgFABIgKABQgMAAgIgIg");
	this.shape_212.setTransform(15.1,46.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#1B4D86").s().p("AgSAdIAAg4IANAAIAAAFQAFgGAJAAQAHAAADACIgFALQgEgCgEAAQgFAAgCAEQgEAEAAAGIAAAgg");
	this.shape_213.setTransform(10.3,46.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#1B4D86").s().p("AgYAIIAAgkIANAAIAAAjQAAALAKAAQAEAAADgCQAEgDACgDIAAgmIANAAIAAA4IgNAAIAAgFIgIAFIgIABQgUAAAAgVg");
	this.shape_214.setTransform(4.4,46.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#1B4D86").s().p("AgaAoIAAhPIAOAAIAAAFQAFgGAHAAQAbAAAAAeQAAAOgIAIQgHAHgNAAQgGAAgFgDIAAAYgAgMgYIAAAdQAEACAEAAQAJAAAEgDQAEgEAAgKQAAgKgEgEQgEgEgJAAQgEAAgEAEg");
	this.shape_215.setTransform(-2,47.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#1B4D86").s().p("AgXAhIAFgMQAJAHAGAAQAMAAAAgRQAAgHgDgEQgCgDgHAAQgGAAgGAFIgGgCIAAgnIAqAAIAAAMIgdAAIAAAOQAEgBAEgBQALABAHAGQAGAHAAALQAAAegbAAQgLAAgJgHg");
	this.shape_216.setTransform(228.5,30.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#1B4D86").s().p("AABAoIAAg4IgPAJIAAgNQAPgHAIgLIAGAAIAABOg");
	this.shape_217.setTransform(221.8,30.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#1B4D86").s().p("AgGAzIAAgMQgJAAgIgFIAFgNQAJAGAIAAQALAAAAgIQAAgFgDgDQgDgEgIgEQgJgEgDgDIgFgHQgCgEAAgFQAAgHAFgGQAEgFAIgCIAAgKIALAAIAAAJQAKABAFAEIgEAMQgHgFgJAAQgDAAgDADQgDACAAAEQAAAHAOAHIAMAGQADAEACAEQACAEAAAGQAAAHgFAGQgFAFgJADIAAAMg");
	this.shape_218.setTransform(215.6,30.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#1B4D86").s().p("AAbAdIAAgjQAAgLgLAAQgDAAgCACQgDABgCADIAAAoIgMAAIAAglQAAgEgCgDQgDgCgFAAQgDAAgDACIgEAEIAAAoIgNAAIAAg4IAJAAIACAFQAHgGAIAAQALAAAFAGQADgDAFgCIAJgBQAJAAAFAFQAGAGAAAJIAAAlg");
	this.shape_219.setTransform(204.4,31.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#1B4D86").s().p("AgYAIIAAgkIANAAIAAAjQAAALAKAAQAEAAADgCQAEgDACgDIAAgmIANAAIAAA4IgNAAIAAgFIgIAFIgIABQgUAAAAgVg");
	this.shape_220.setTransform(196.5,31.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#1B4D86").s().p("AAbAdIAAgjQAAgLgLAAQgDAAgDACQgCABgBADIAAAoIgNAAIAAglQAAgEgCgDQgDgCgFAAQgDAAgDACIgEAEIAAAoIgNAAIAAg4IAJAAIADAFQAFgGAJAAQAMAAAEAGIAHgFIAJgBQAKAAAGAFQAFAGAAAJIAAAlg");
	this.shape_221.setTransform(188.5,31.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#1B4D86").s().p("AgCAoIAAguIgIAAIAAgKIAUAAIAAA4gAgBgZQgCgDAAgDQAAgDACgCQABgDAEAAQACAAADADQACACAAADQAAADgCADQgDACgCAAQgEAAgBgCg");
	this.shape_222.setTransform(182,30.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#1B4D86").s().p("AAMAdIAAggQAAgHgDgEQgDgDgGAAQgCAAgDACQgEABgCADIAAAoIgNAAIAAg4IAKAAIACAFQAGgGAJAAQAKAAAHAGQAFAGAAALIAAAig");
	this.shape_223.setTransform(177.3,31.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#1B4D86").s().p("AgDAoIAAguIgHAAIAAgKIAUAAIAAA4gAgBgZQgDgDABgDQgBgDADgCQABgDAEAAQADAAACADQACACAAADQAAADgCADQgCACgDAAQgEAAgBgCg");
	this.shape_224.setTransform(172.3,30.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#1B4D86").s().p("AgBAoIgQgrIgJAqIgNAAIAQhOIAHAAIAQA0IARg0IAHAAIAQBOIgNAAIgJgqIgPArg");
	this.shape_225.setTransform(166.8,30.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#1B4D86").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgDADAAQAEAAADADQACADABADQgBAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_226.setTransform(157.3,33.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#1B4D86").s().p("AgSAiQgHgFAAgMQAAgGAEgFQADgGAGgCQgFgEgCgFQgDgEAAgFQAAgJAGgFQAHgGAJABQALgBAGAGQAGAFAAAJQAAAFgEAFQgDAFgEADQAFACAEAGQAFAFAAAGQAAALgHAGQgHAHgMAAQgMAAgGgHgAgLARQAAAFADADQADADAFAAQAFAAADgCQAEgDAAgFQAAgIgNgIQgKAGAAAJgAgIgUQAAAEADADQADADADACQADgCACgDQADgEAAgDQAAgEgDgCQgCgCgEAAQgIABAAAHg");
	this.shape_227.setTransform(152.2,30.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#1B4D86").s().p("AABAoIAAg4IgPAJIAAgNQAPgHAIgLIAGAAIAABOg");
	this.shape_228.setTransform(145.5,30.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#1B4D86").s().p("AgUAfQgHgLAAgVQAAgRAIgLQAIgLAMABQAbgBAAAoQAAASgHAMQgIAKgNABQgNgBgHgJgAgNgBQAAAQADAHQADAIAHAAQAHgBADgGQAEgHAAgQQAAgQgDgGQgEgGgHgBQgNAAAAAcg");
	this.shape_229.setTransform(139.4,30.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#1B4D86").s().p("AgYAoIAAgEIAYgkQAHgLAAgHQAAgJgKAAQgIAAgFAJIgJgIQADgFAGgEQAFgEAIAAQALAAAHAGQAGAFAAAKQAAAIgIANIgPAZIAcAAIAAAMg");
	this.shape_230.setTransform(133.1,30.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#1B4D86").s().p("AgKALQAKgGAAgFIgBgCQgGgCAAgFQAAgDADgCQADgCADgBQADAAADADQADAEAAADQAAAHgDAEQgDAGgLAIg");
	this.shape_231.setTransform(124.3,34.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#1B4D86").s().p("AgXAhIAGgMQAIAHAGAAQANAAAAgRQAAgHgEgEQgCgDgHAAQgGAAgGAFIgGgCIAAgnIAqAAIAAAMIgcAAIAAAOQADgBAEgBQAMABAGAGQAGAHAAALQAAAegbAAQgLAAgJgHg");
	this.shape_232.setTransform(119.4,30.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#1B4D86").s().p("AgSAdIAAg4IANAAIAAAFQAFgGAJAAQAHAAADACIgFALQgEgCgEAAQgFAAgCAEQgEAEAAAGIAAAgg");
	this.shape_233.setTransform(110.8,31.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#1B4D86").s().p("AgUAWQgHgIAAgNQAAgNAIgIQAJgJALAAQAMAAAIAIQAHAHAAAMIgBAGIgoAAQAAAHAFAEQAEAEAHAAQAJAAAEgFIAFAKQgHAGgNAAQgMAAgJgIgAAOgFQgBgNgMAAQgLAAgDANIAbAAIAAAAg");
	this.shape_234.setTransform(105,31.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#1B4D86").s().p("AgPAlIgDAFIgIAAIAAhPIAOgDIAAAaQAFgDAHAAQALAAAIAIQAIAIAAALQAAAPgIAIQgIAJgMAAQgIAAgGgFgAgMgCIAAAcQADAEAFAAQAJAAAEgFQAEgEAAgKQAAgQgQgBQgGABgDADg");
	this.shape_235.setTransform(98.7,30.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#1B4D86").s().p("AAbAdIAAgjQAAgLgLAAQgDAAgDACQgCABgBADIAAAoIgNAAIAAglQAAgEgCgDQgDgCgFAAQgCAAgEACIgEAEIAAAoIgNAAIAAg4IAJAAIADAFQAFgGAJAAQAMAAAEAGQADgDAEgCIAJgBQAKAAAGAFQAFAGAAAJIAAAlg");
	this.shape_236.setTransform(90.8,31.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#1B4D86").s().p("AgTAWQgIgIAAgNQAAgNAJgIQAIgJAKAAQANAAAHAIQAIAHAAAMIgBAGIgoAAQABAHAEAEQAEAEAGAAQAKAAAFgFIAEAKQgGAGgPAAQgMAAgHgIgAAPgFQgBgNgNAAQgKAAgDANIAbAAIAAAAg");
	this.shape_237.setTransform(82.9,31.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#1B4D86").s().p("AgBAdIgag5IAOAAIANAiIAOgiIAPAAIgbA5g");
	this.shape_238.setTransform(76.8,31.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#1B4D86").s().p("AgTAWQgIgJAAgNQAAgMAIgJQAHgIAMAAQANAAAHAIQAIAIAAANQAAAOgIAIQgHAIgNAAQgMAAgHgIgAgJgNQgEAFAAAIQAAATANAAQAGAAAEgFQAEgFAAgJQAAgSgOAAQgFAAgEAFg");
	this.shape_239.setTransform(70.8,31.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#1B4D86").s().p("AAXAoIglgxIAAAwIgOAAIAAhOIAHAAIAkAvIAAgvIAOAAIAABPg");
	this.shape_240.setTransform(64.1,30.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#1B4D86").s().p("AgKAdIgJgEIAFgLQAGAFAHAAQAHAAAAgFQAAgEgCgCIgIgFQgPgFAAgLQAAgIAFgEQAGgEAIAAQAJAAAIAEIgEALQgEgEgIAAQgGAAAAAFQAAABAAAAQAAABAAABQABAAAAAAQABABAAAAQACACAHADQAHADAEADQADAFAAAGQAAAIgGAEQgGAFgJAAIgJgBg");
	this.shape_241.setTransform(54.8,31.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#1B4D86").s().p("AgUAWQgHgIAAgNQAAgNAJgIQAIgJALAAQAMAAAHAIQAIAHAAAMIgBAGIgoAAQAAAHAFAEQAEAEAHAAQAIAAAGgFIAEAKQgGAGgOAAQgMAAgJgIgAAOgFQgBgNgMAAQgLAAgDANIAbAAIAAAAg");
	this.shape_242.setTransform(49.3,31.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#1B4D86").s().p("AgSAdIAAg4IANAAIAAAFQAFgGAJAAQAHAAADACIgFALQgEgCgEAAQgFAAgCAEQgEAEAAAGIAAAgg");
	this.shape_243.setTransform(44.1,31.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#1B4D86").s().p("AgCAoIAAguIgIAAIAAgKIAUAAIAAA4gAgBgZQgCgDAAgDQAAgDACgCQABgDADAAQADAAADADQACACAAADQAAADgCADQgDACgDAAQgDAAgBgCg");
	this.shape_244.setTransform(39.7,30.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#1B4D86").s().p("AgaApIAAhPIAOAAIAAADQAFgEAHAAQAbAAAAAeQAAANgIAHQgHAIgNAAQgGAAgFgCIAAAYgAgMgZIAAAeQAEACAEAAQAJAAAEgDQAEgEAAgJQAAgLgEgEQgEgEgJAAQgEAAgEADg");
	this.shape_245.setTransform(35.1,32.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#1B4D86").s().p("AANAdIgNgTIgNATIgQAAIAWgdIgVgcIAQAAIAMASIANgSIAPAAIgWAcIAYAdg");
	this.shape_246.setTransform(28.8,31.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#1B4D86").s().p("AgUAWQgHgIAAgNQAAgNAIgIQAJgJALAAQAMAAAIAIQAHAHAAAMIgBAGIgoAAQAAAHAFAEQAEAEAHAAQAJAAAEgFIAFAKQgHAGgNAAQgMAAgJgIgAAOgFQgBgNgMAAQgLAAgDANIAbAAIAAAAg");
	this.shape_247.setTransform(22.6,31.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#1B4D86").s().p("AgSAdIAAg4IANAAIAAAFQAFgGAJAAQAHAAADACIgFALQgEgCgEAAQgFAAgCAEQgEAEAAAGIAAAgg");
	this.shape_248.setTransform(14.2,31.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#1B4D86").s().p("AgUAWQgHgIAAgNQAAgNAIgIQAJgJAKAAQANAAAIAIQAHAHAAAMIgBAGIgoAAQAAAHAEAEQAFAEAHAAQAIAAAFgFIAGAKQgIAGgOAAQgLAAgJgIgAAPgFQgBgNgNAAQgLAAgCANIAbAAIAAAAg");
	this.shape_249.setTransform(8.4,31.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#1B4D86").s().p("AgLApIAAguIgJAAIAAgLIAJAAQAAgLAGgGQAFgHAJABQAFAAAHACIgEAJIgHgBQgEAAgDADQgCAEAAAEIAAACIAMAAIAAALIgMAAIAAAug");
	this.shape_250.setTransform(3.4,30.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#1B4D86").s().p("AgLApIAAguIgJAAIAAgLIAJAAQAAgLAGgGQAFgHAJABQAFAAAHACIgEAJIgHgBQgEAAgDADQgCAEAAAEIAAACIAMAAIAAALIgMAAIAAAug");
	this.shape_251.setTransform(-0.6,30.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#1B4D86").s().p("AgZAeQgIgMAAgSQAAgRAJgLQAJgMAPAAQAQAAAJALQAJAKAAATQAAASgJALQgJAMgRAAQgQAAgIgLgAgOgUQgFAIAAAMQAAANAFAIQAEAHAJAAQAKAAAFgHQAGgIAAgNQAAgbgUAAQgJAAgFAHg");
	this.shape_252.setTransform(-6.7,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legalTxt_mc, new cjs.Rectangle(-14,22,249,105.6), null);


(lib.legalBackground_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bPPIAA+dMAu3AAAIAAedg");
	this.shape.setTransform(150,97.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.legalBackground_mc, new cjs.Rectangle(0,0,300,195), null);


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


(lib.details_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFFF").s().p("AlsBLIAAiVILZAAIAACVg");
	this.shape.setTransform(32.5,5.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.details_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.details();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.details_1, new cjs.Rectangle(0,0,300,250), null);


(lib.CTA_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CTA();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.CTA_1, new cjs.Rectangle(0,0,300,250), null);


(lib.close_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1B4D86").ss(10).p("AlslsILZLZ");
	this.shape.setTransform(36.5,36.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1B4D86").ss(10).p("AFtlsIrZLZ");
	this.shape_1.setTransform(36.5,36.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1B4D86").ss(10).p("AFtFtIrZAAIAArZILZAAg");
	this.shape_2.setTransform(36.5,36.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FFFF").s().p("AomINIAAwaIRNAAIAAQag");
	this.shape_3.setTransform(37.8,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,83,83);


(lib.cake_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cake();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cake_1, new cjs.Rectangle(0,0,600,500), null);


(lib.back_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.back_1, new cjs.Rectangle(0,0,753,500), null);


(lib.details_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{rest:0,detailsIn:4,detailsOut:10});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.close_btn.addEventListener("click", legalOut.bind(this));
		
		function legalOut() {
			this.parent.details_btn.visible = true;
			this.gotoAndPlay("detailsOut");
		}
		
		this.stop();
	}
	this.frame_14 = function() {
		this.gotoAndStop("rest");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(5).call(this.frame_14).wait(1));

	// close_btn
	this.close_btn = new lib.close_btn();
	this.close_btn.name = "close_btn";
	this.close_btn.parent = this;
	this.close_btn.setTransform(285,123,0.205,0.205,0,0,0,36.5,36.5);
	this.close_btn._off = true;
	new cjs.ButtonHelper(this.close_btn, 0, 1, 2, false, new lib.close_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.close_btn).wait(9).to({_off:false},0).to({_off:true},1).wait(5));

	// legal
	this.instance = new lib.legalTxt_mc();
	this.instance.parent = this;
	this.instance.setTransform(150,357.1,1,1,0,0,0,112,60.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({regX:110.4,regY:75.4,x:149,y:253.4},0).wait(1).to({x:149.2,y:212.9},0).wait(1).to({x:149.3,y:192.4},0).wait(1).to({x:149.4,y:182.6},0).wait(1).to({regX:112,regY:60.5,x:151,y:165.1},0).wait(1).to({regX:110.4,regY:75.4,x:149.4,y:182.5},0).wait(1).to({x:149.3,y:191.6},0).wait(1).to({x:149.2,y:210.3},0).wait(1).to({x:149,y:247.3},0).wait(1).to({regX:112,regY:60.5,x:150,y:357.1},0).wait(1));

	// legalBackground_mc
	this.instance_1 = new lib.legalBackground_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,378,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0.949;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1).to({regY:97.5,y:259.1},0).wait(1).to({y:227.9},0).wait(1).to({y:212.1},0).wait(1).to({y:204.6},0).wait(1).to({regY:125,y:230},0).wait(1).to({regY:97.5,y:204.5},0).wait(1).to({y:211.5},0).wait(1).to({y:225.9},0).wait(1).to({y:254.4},0).wait(1).to({regY:125,y:378},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//FlashTalking clickTag
		this.clickTag.addEventListener("click", clickThrough);
		
		function clickThrough() {
			myFT.clickTag(1);
		}
		
		//Pause function
		
		var tl = this;
		tl.stop();
		var delay = 0;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_358 = function() {
		this.details_btn.addEventListener("click", details.bind(this));
		
		function details() {
			this.details_btn.visible = false;
			this.details_mc.gotoAndPlay("detailsIn");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(358).call(this.frame_358).wait(545));

	// details_mc
	this.details_mc = new lib.details_mc();
	this.details_mc.name = "details_mc";
	this.details_mc.parent = this;
	this.details_mc.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.details_mc).wait(903));

	// details_btn
	this.details_btn = new lib.details_btn();
	this.details_btn.name = "details_btn";
	this.details_btn.parent = this;
	this.details_btn.setTransform(66,110,1,1,0,0,0,31,5.5);
	this.details_btn._off = true;
	new cjs.ButtonHelper(this.details_btn, 0, 1, 2, false, new lib.details_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.details_btn).wait(358).to({_off:false},0).wait(545));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.parent = this;
	this.clickTag.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(903));

	// border
	this.instance = new lib.border();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({_off:false},0).wait(764));

	// details
	this.instance_1 = new lib.details_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(358).to({_off:false},0).to({alpha:1},30,cjs.Ease.quadInOut).wait(515));

	// CTA
	this.instance_2 = new lib.CTA_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(178,250,1,1,0,0,0,300,250);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(358).to({_off:false},0).to({x:300},30,cjs.Ease.quadInOut).wait(515));

	// text5
	this.instance_3 = new lib.text5_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(313).to({_off:false},0).to({alpha:1},30,cjs.Ease.quadInOut).wait(560));

	// text4
	this.instance_4 = new lib.text4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(313).to({_off:false},0).to({alpha:1},30,cjs.Ease.quadInOut).wait(560));

	// logo
	this.instance_5 = new lib.logo_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(148).to({_off:false},0).to({alpha:1},31,cjs.Ease.quadOut).wait(724));

	// spider
	this.instance_6 = new lib.spider_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(306,198,1,1,0,0,0,300,250);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(148).to({_off:false},0).to({y:200,alpha:1},31,cjs.Ease.quadOut).wait(59).to({y:240},120,cjs.Ease.quadOut).wait(545));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_148 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_238 = new cjs.Graphics().p("ATxDXIAAmtIBGAAIAAGtg");
	var mask_graphics_239 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_240 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_241 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_242 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_243 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_244 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_245 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_246 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_247 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_248 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_249 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_250 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_251 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_252 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_253 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_254 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_255 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_256 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_257 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_258 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_259 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_260 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_261 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_262 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_263 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_264 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_265 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_266 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_267 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_268 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_269 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_270 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_271 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_272 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_273 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_274 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_275 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_276 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_277 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_278 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_279 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_280 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_281 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_282 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_283 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_284 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_285 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_286 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_287 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_288 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_289 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_290 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_291 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_292 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_293 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_294 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_295 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_296 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_297 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_298 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_299 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_300 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_301 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_302 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_303 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_304 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_305 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_306 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_307 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_308 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_309 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_310 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_311 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_312 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_313 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_314 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_315 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_316 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_317 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_318 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_319 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_320 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_321 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_322 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_323 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_324 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_325 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_326 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_327 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_328 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_329 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_330 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_331 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_332 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_333 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_334 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_335 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_336 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_337 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_338 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_339 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_340 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_341 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_342 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_343 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_344 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_345 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_346 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_347 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_348 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_349 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_350 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_351 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_352 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_353 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_354 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_355 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_356 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_357 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");
	var mask_graphics_358 = new cjs.Graphics().p("AgiDXIAAmtIBFAAIAAGtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(148).to({graphics:mask_graphics_148,x:263.5,y:3.5}).wait(90).to({graphics:mask_graphics_238,x:133.5,y:3.5}).wait(1).to({graphics:mask_graphics_239,x:263.5,y:4.2}).wait(1).to({graphics:mask_graphics_240,x:263.5,y:4.8}).wait(1).to({graphics:mask_graphics_241,x:263.5,y:5.5}).wait(1).to({graphics:mask_graphics_242,x:263.5,y:6.1}).wait(1).to({graphics:mask_graphics_243,x:263.5,y:6.8}).wait(1).to({graphics:mask_graphics_244,x:263.5,y:7.4}).wait(1).to({graphics:mask_graphics_245,x:263.5,y:8.1}).wait(1).to({graphics:mask_graphics_246,x:263.5,y:8.7}).wait(1).to({graphics:mask_graphics_247,x:263.5,y:9.3}).wait(1).to({graphics:mask_graphics_248,x:263.5,y:9.9}).wait(1).to({graphics:mask_graphics_249,x:263.5,y:10.5}).wait(1).to({graphics:mask_graphics_250,x:263.5,y:11.1}).wait(1).to({graphics:mask_graphics_251,x:263.5,y:11.7}).wait(1).to({graphics:mask_graphics_252,x:263.5,y:12.3}).wait(1).to({graphics:mask_graphics_253,x:263.5,y:12.9}).wait(1).to({graphics:mask_graphics_254,x:263.5,y:13.5}).wait(1).to({graphics:mask_graphics_255,x:263.5,y:14.1}).wait(1).to({graphics:mask_graphics_256,x:263.5,y:14.6}).wait(1).to({graphics:mask_graphics_257,x:263.5,y:15.2}).wait(1).to({graphics:mask_graphics_258,x:263.5,y:15.7}).wait(1).to({graphics:mask_graphics_259,x:263.5,y:16.3}).wait(1).to({graphics:mask_graphics_260,x:263.5,y:16.8}).wait(1).to({graphics:mask_graphics_261,x:263.5,y:17.4}).wait(1).to({graphics:mask_graphics_262,x:263.5,y:17.9}).wait(1).to({graphics:mask_graphics_263,x:263.5,y:18.5}).wait(1).to({graphics:mask_graphics_264,x:263.5,y:19}).wait(1).to({graphics:mask_graphics_265,x:263.5,y:19.5}).wait(1).to({graphics:mask_graphics_266,x:263.5,y:20}).wait(1).to({graphics:mask_graphics_267,x:263.5,y:20.5}).wait(1).to({graphics:mask_graphics_268,x:263.5,y:21}).wait(1).to({graphics:mask_graphics_269,x:263.5,y:21.5}).wait(1).to({graphics:mask_graphics_270,x:263.5,y:22}).wait(1).to({graphics:mask_graphics_271,x:263.5,y:22.5}).wait(1).to({graphics:mask_graphics_272,x:263.5,y:23}).wait(1).to({graphics:mask_graphics_273,x:263.5,y:23.5}).wait(1).to({graphics:mask_graphics_274,x:263.5,y:23.9}).wait(1).to({graphics:mask_graphics_275,x:263.5,y:24.4}).wait(1).to({graphics:mask_graphics_276,x:263.5,y:24.8}).wait(1).to({graphics:mask_graphics_277,x:263.5,y:25.3}).wait(1).to({graphics:mask_graphics_278,x:263.5,y:25.7}).wait(1).to({graphics:mask_graphics_279,x:263.5,y:26.2}).wait(1).to({graphics:mask_graphics_280,x:263.5,y:26.6}).wait(1).to({graphics:mask_graphics_281,x:263.5,y:27.1}).wait(1).to({graphics:mask_graphics_282,x:263.5,y:27.5}).wait(1).to({graphics:mask_graphics_283,x:263.5,y:27.9}).wait(1).to({graphics:mask_graphics_284,x:263.5,y:28.3}).wait(1).to({graphics:mask_graphics_285,x:263.5,y:28.7}).wait(1).to({graphics:mask_graphics_286,x:263.5,y:29.1}).wait(1).to({graphics:mask_graphics_287,x:263.5,y:29.5}).wait(1).to({graphics:mask_graphics_288,x:263.5,y:29.9}).wait(1).to({graphics:mask_graphics_289,x:263.5,y:30.3}).wait(1).to({graphics:mask_graphics_290,x:263.5,y:30.7}).wait(1).to({graphics:mask_graphics_291,x:263.5,y:31.1}).wait(1).to({graphics:mask_graphics_292,x:263.5,y:31.4}).wait(1).to({graphics:mask_graphics_293,x:263.5,y:31.8}).wait(1).to({graphics:mask_graphics_294,x:263.5,y:32.1}).wait(1).to({graphics:mask_graphics_295,x:263.5,y:32.5}).wait(1).to({graphics:mask_graphics_296,x:263.5,y:32.8}).wait(1).to({graphics:mask_graphics_297,x:263.5,y:33.2}).wait(1).to({graphics:mask_graphics_298,x:263.5,y:33.5}).wait(1).to({graphics:mask_graphics_299,x:263.5,y:33.9}).wait(1).to({graphics:mask_graphics_300,x:263.5,y:34.2}).wait(1).to({graphics:mask_graphics_301,x:263.5,y:34.5}).wait(1).to({graphics:mask_graphics_302,x:263.5,y:34.8}).wait(1).to({graphics:mask_graphics_303,x:263.5,y:35.1}).wait(1).to({graphics:mask_graphics_304,x:263.5,y:35.4}).wait(1).to({graphics:mask_graphics_305,x:263.5,y:35.7}).wait(1).to({graphics:mask_graphics_306,x:263.5,y:36}).wait(1).to({graphics:mask_graphics_307,x:263.5,y:36.3}).wait(1).to({graphics:mask_graphics_308,x:263.5,y:36.6}).wait(1).to({graphics:mask_graphics_309,x:263.5,y:36.9}).wait(1).to({graphics:mask_graphics_310,x:263.5,y:37.1}).wait(1).to({graphics:mask_graphics_311,x:263.5,y:37.4}).wait(1).to({graphics:mask_graphics_312,x:263.5,y:37.6}).wait(1).to({graphics:mask_graphics_313,x:263.5,y:37.9}).wait(1).to({graphics:mask_graphics_314,x:263.5,y:38.1}).wait(1).to({graphics:mask_graphics_315,x:263.5,y:38.4}).wait(1).to({graphics:mask_graphics_316,x:263.5,y:38.6}).wait(1).to({graphics:mask_graphics_317,x:263.5,y:38.9}).wait(1).to({graphics:mask_graphics_318,x:263.5,y:39.1}).wait(1).to({graphics:mask_graphics_319,x:263.5,y:39.3}).wait(1).to({graphics:mask_graphics_320,x:263.5,y:39.5}).wait(1).to({graphics:mask_graphics_321,x:263.5,y:39.7}).wait(1).to({graphics:mask_graphics_322,x:263.5,y:39.9}).wait(1).to({graphics:mask_graphics_323,x:263.5,y:40.1}).wait(1).to({graphics:mask_graphics_324,x:263.5,y:40.3}).wait(1).to({graphics:mask_graphics_325,x:263.5,y:40.5}).wait(1).to({graphics:mask_graphics_326,x:263.5,y:40.7}).wait(1).to({graphics:mask_graphics_327,x:263.5,y:40.9}).wait(1).to({graphics:mask_graphics_328,x:263.5,y:41}).wait(1).to({graphics:mask_graphics_329,x:263.5,y:41.2}).wait(1).to({graphics:mask_graphics_330,x:263.5,y:41.3}).wait(1).to({graphics:mask_graphics_331,x:263.5,y:41.5}).wait(1).to({graphics:mask_graphics_332,x:263.5,y:41.6}).wait(1).to({graphics:mask_graphics_333,x:263.5,y:41.8}).wait(1).to({graphics:mask_graphics_334,x:263.5,y:41.9}).wait(1).to({graphics:mask_graphics_335,x:263.5,y:42.1}).wait(1).to({graphics:mask_graphics_336,x:263.5,y:42.2}).wait(1).to({graphics:mask_graphics_337,x:263.5,y:42.3}).wait(1).to({graphics:mask_graphics_338,x:263.5,y:42.4}).wait(1).to({graphics:mask_graphics_339,x:263.5,y:42.5}).wait(1).to({graphics:mask_graphics_340,x:263.5,y:42.6}).wait(1).to({graphics:mask_graphics_341,x:263.5,y:42.7}).wait(1).to({graphics:mask_graphics_342,x:263.5,y:42.8}).wait(1).to({graphics:mask_graphics_343,x:263.5,y:42.9}).wait(1).to({graphics:mask_graphics_344,x:263.5,y:43}).wait(1).to({graphics:mask_graphics_345,x:263.5,y:43.1}).wait(1).to({graphics:mask_graphics_346,x:263.5,y:43.1}).wait(1).to({graphics:mask_graphics_347,x:263.5,y:43.2}).wait(1).to({graphics:mask_graphics_348,x:263.5,y:43.2}).wait(1).to({graphics:mask_graphics_349,x:263.5,y:43.3}).wait(1).to({graphics:mask_graphics_350,x:263.5,y:43.3}).wait(1).to({graphics:mask_graphics_351,x:263.5,y:43.4}).wait(1).to({graphics:mask_graphics_352,x:263.5,y:43.4}).wait(1).to({graphics:mask_graphics_353,x:263.5,y:43.5}).wait(1).to({graphics:mask_graphics_354,x:263.5,y:43.5}).wait(1).to({graphics:mask_graphics_355,x:263.5,y:43.5}).wait(1).to({graphics:mask_graphics_356,x:263.5,y:43.5}).wait(1).to({graphics:mask_graphics_357,x:263.5,y:43.5}).wait(1).to({graphics:mask_graphics_358,x:263.5,y:43.5}).wait(545));

	// string
	this.instance_7 = new lib.string_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(156,115,1,1,0,0,0,150,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(148).to({_off:false},0).to({alpha:1},31,cjs.Ease.quadOut).wait(724));

	// spiderWeb
	this.instance_8 = new lib.spiderWeb_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(306,241,1,1,0,0,0,300,250);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(148).to({_off:false},0).to({alpha:1},31,cjs.Ease.quadOut).wait(724));

	// cake
	this.instance_9 = new lib.cake_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(69.1,314.1,0.768,0.768,0,0,0,299.9,250.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(58).to({_off:false},0).to({x:71.1,y:207.1},10,cjs.Ease.quadIn).to({x:72.3,y:220.1},4,cjs.Ease.quadIn).wait(48).to({regX:299.8,scaleX:0.77,scaleY:0.77,x:71.9,y:219.7},0).to({regX:299.7,regY:250.2,scaleX:0.5,scaleY:0.5,x:149.9,y:125.1},46,cjs.Ease.quadInOut).wait(737));

	// text3
	this.instance_10 = new lib.text3_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(148).to({_off:false},0).to({alpha:1},31,cjs.Ease.quadOut).wait(119).to({alpha:0},30,cjs.Ease.quadOut).wait(575));

	// text2
	this.instance_11 = new lib.text2_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(148).to({_off:false},0).to({alpha:1},31,cjs.Ease.quadOut).wait(119).to({alpha:0},30,cjs.Ease.quadOut).wait(575));

	// text1
	this.instance_12 = new lib.text1_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(146.2,91.1,0.503,0.503,0,0,0,146.2,91.3);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(58).to({_off:false},0).to({regX:146,regY:91,scaleX:1.11,scaleY:1.11,x:146.1,y:91,alpha:1},10,cjs.Ease.quadIn).to({regX:145.9,scaleX:1,scaleY:1,x:145.9},4,cjs.Ease.quadOut).wait(48).to({scaleX:0.4,scaleY:0.4,x:145.4,y:59.6,alpha:0},28,cjs.Ease.quadIn).wait(755));

	// wood
	this.instance_13 = new lib.wood_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(72,209.7,1.533,1.533,0,0,0,150,125);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(120).to({_off:false},0).to({scaleX:1,scaleY:1,x:150,y:125},46,cjs.Ease.quadInOut).wait(737));

	// back2
	this.instance_14 = new lib.back_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-30.1,269,1.16,1.16,0,0,0,376.4,250);
	this.instance_14.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regY:249.7,scaleX:0.47,scaleY:0.47,x:153,y:36.9},902).wait(1));

	// back
	this.instance_15 = new lib.back_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(215.5,226,1,1,0,0,0,376.5,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(903));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316.7,101,1058.7,583);
// library properties:
lib.properties = {
	id: '67BD5696477B4A51BA51E0BCDD729EA3',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1538155820221", id:"back"},
		{src:"images/border.png?1538155820221", id:"border"},
		{src:"images/cake.png?1538155820221", id:"cake"},
		{src:"images/CTA.png?1538155820221", id:"CTA"},
		{src:"images/details.png?1538155820221", id:"details"},
		{src:"images/logo.png?1538155820221", id:"logo"},
		{src:"images/spider.png?1538155820221", id:"spider"},
		{src:"images/spiderWeb.png?1538155820221", id:"spiderWeb"},
		{src:"images/string.png?1538155820221", id:"string"},
		{src:"images/text1.png?1538155820221", id:"text1"},
		{src:"images/text2.png?1538155820221", id:"text2"},
		{src:"images/text3.png?1538155820221", id:"text3"},
		{src:"images/text4.png?1538155820221", id:"text4"},
		{src:"images/text5.png?1538155820221", id:"text5"},
		{src:"images/wood.png?1538155820221", id:"wood"}
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
an.compositions['67BD5696477B4A51BA51E0BCDD729EA3'] = {
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