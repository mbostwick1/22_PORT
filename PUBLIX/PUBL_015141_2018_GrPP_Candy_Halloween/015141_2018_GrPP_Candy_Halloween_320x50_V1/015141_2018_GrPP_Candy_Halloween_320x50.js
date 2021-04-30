(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.candy = function() {
	this.initialize(img.candy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,273);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);// helper functions:

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


(lib.text2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2_1, new cjs.Rectangle(0,0,320,50), null);


(lib.text1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1_1, new cjs.Rectangle(0,0,320,50), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,320,50), null);


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


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,320,50), null);


(lib.candy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.candy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.candy_1, new cjs.Rectangle(0,0,320,136.5), null);


(lib.bag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF6328").s().p("AgDCLIABghQAAgbgJgFQgKgFgcgEQgegEgEAJQgEAIgCAeQgBAbABAFQglAFg2gkQhqhHhIi6IBVAvQA2AcAdAJQAIADAEAGQAFAGgBAIQgEApAGAGQAGAFAdAHQAdAHAFgDQAGgDAEhBQBZANAIAAQAEAAgEAVQgEAYAEALQAGAMAjAAQARgBAIgGQAKgIAAgVQAAgbABgCQAEgDBbgNQBpgaBNhGQg1Cag9BQQgLAPgLABQgPADgCgbQAAgLgGgHQgGgIgHgBQgUgBgVAEQgVAEgBAEQgDAEABAfQABAfADAFQAFAGhCADIgXABQgpAAgDgKg");
	this.shape.setTransform(67.3,129.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF6328").s().p("AgGAzQhNgOgOgaQgNgXA3gXQAygUA2gBQAqgCAIAuQAHAogUAUQgKAJgbAAQgWAAghgGg");
	this.shape_1.setTransform(66,112);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BF6328").s().p("AgBBjQglgIgkgeQghgbgSgiQgTgkAIgZQAKgdAogHQBSgOBFAYQBQAbgHA+QgFArgcAdQgcAdgsAAQgQAAgSgEg");
	this.shape_2.setTransform(90.6,94.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BF6328").s().p("AhoBKQgdgegEgqQgIg+BRgbQBFgYBRAOQApAHAJAdQAIAZgSAkQgSAighAbQgkAeglAIQgSAEgQAAQgsAAgcgdg");
	this.shape_3.setTransform(39.6,94.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BF6328").s().p("AjHAZQgwgNgPgIQgQgHAsAKQCSAiBugNQB2gOCAhHQgoAcgxAcQhkA4gxADIgYAAQhTAAh6ghg");
	this.shape_4.setTransform(73.8,66.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3B3441").s().p("Ak7DOQiChAAAhtQAAiOCChRQB4hLDCAAQDAAAB8BMQCDBSAACMQABBtiEBAQh8A8jAAAQjAAAh6g8g");
	this.shape_5.setTransform(65,30.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F18B3D").s().p("AAAMkQh0ACh6goQh1gliBhPQh6hJgii9QgOhOAHhMQAGhKAYguQA5hvAeh9QAlicgZhvQgIgbgBgaIgBgIQAAipCahfQCPhZDmAAQDjAACRBaQCcBhAACmQABAdgKAeQgZBvAmCdQAdB+A5BvQAZAuAGBKQAHBMgOBOQgiC9h6BJQiCBOh0AmQh2AmhwAAIgJAAg");
	this.shape_6.setTransform(65.1,80.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bag, new cjs.Rectangle(0,0,130.1,160.9), null);


(lib.back_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pattern
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.back_1, new cjs.Rectangle(0,0,320,50), null);


(lib.kitty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(88));

	// paws
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B2B").s().p("AgeBXQgDgEABgEQABgFAEgDQATgMAJg0QAJgpAAguQAAgFAEgDQADgDAEAAQAFAAADADQAEADAAAFQAAAngHApQgNBHgcATQgCACgEAAQgGAAgDgFg");
	this.shape.setTransform(168.3,370.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVhQQAAAhgFAmQgLBJgaARg");
	this.shape_1.setTransform(168.3,370.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B2B2B").s().p("AgeBXQgDgEABgFQABgEAEgDQASgMAKg0QAJgqAAgtQAAgFADgDQAEgDAEAAQAFAAADADQAEADAAAFQgFCOgrAcQgCACgEAAQgGAAgDgFg");
	this.shape_2.setTransform(159.8,371.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAVhQQAAAigFAkQgLBKgaARg");
	this.shape_3.setTransform(159.8,371.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B2B2B").s().p("Ag/ClQgkgKgRgTQgRgTAQhBQAJgnATgtQACgFAEgBQAFgCAEABQAEACACAEQACAFgCAEQgTAvgKArQgKAuAIAJQAUAWA4AIQA5AHAxgQQA+gTAGgwQAHhDgUg7QgWhDgugXQgsgWg4AWQg6AVhEBAQgDADgFAAQgFAAgDgEQgDgDAAgFQAAgEAEgEQBThOBHgSQA1gOAsAWQA3AbAZBKQAWBAgJBJQgDAegWAXQgVAWglAMQgjALgsAAQgoAAgigKg");
	this.shape_4.setTransform(160.1,363);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AguCfQgrgKgSgUQgPgQAVhJQAKgjANggIhVgkQChiYBhBNQAnAfATA+QARA6gIA/QgIBMhxALIgdACQgdAAgdgGg");
	this.shape_5.setTransform(160,362.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B2B2B").s().p("AAQBaQgdgTgMhHQgHgoAAgoQAAgFAEgDQADgDAEAAIABAAQAEAAAEADQADADAAAFQAAAuAJApQAJA0ATAMQAEADABAFQABAEgDAEQgEAFgFAAQgEAAgCgCg");
	this.shape_6.setTransform(193.7,370.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPgJIgFhHIApChQgZgRgLhJg");
	this.shape_7.setTransform(193.8,370.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B2B2B").s().p("AAQBaQgcgTgNhHQgHgpAAgnQAAgFAEgDQADgDAFAAQAEAAAEADQADADAAAFQAAAuAJApQAKA0ASAMQAEADABAEQABAFgDAEQgDAFgGAAQgEAAgCgCg");
	this.shape_8.setTransform(202.2,371.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPgKIgGhGIAqChQgZgRgLhKg");
	this.shape_9.setTransform(202.2,371.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B2B2B").s().p("AhZCkQglgMgVgWQgWgXgDgeQgJhJAWhAQAZhKA3gbQAsgWA1AOQBHASBTBOQAEAEAAAEQAAAFgDADQgDAEgFAAQgFAAgDgDQhEhAg5gVQg5gWgsAWQguAXgWBDQgUA7AHBDQAGAwA+ATQAxAQA5gHQA4gIAUgWQAIgJgKguQgKgrgTgvQgCgEACgFQACgEAEgCQAEgBAFACQAEABACAFQATAtAJAnQAQBBgRATQgRATgkAKQgiAKgoAAQgsAAgjgLg");
	this.shape_10.setTransform(201.9,363);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgnCjQhygLgIhMQgHhAARg5QASg+AogfQBhhNChCYIhWAkIAYBDQAVBJgQAQQgSAUgrAKQgcAGgeAAIgcgCg");
	this.shape_11.setTransform(201.9,362.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(88));

	// bag
	this.instance = new lib.bag();
	this.instance.parent = this;
	this.instance.setTransform(183.1,362,1,1,0,0,0,66.7,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.5},9,cjs.Ease.quadOut).to({rotation:-3.7},9,cjs.Ease.quadOut).to({regX:66.8,rotation:2.8},9,cjs.Ease.quadOut).to({regX:66.7,rotation:-3},10,cjs.Ease.quadOut).to({rotation:3.5},9,cjs.Ease.quadOut).to({rotation:-3.7,y:362.1},10,cjs.Ease.quadOut).to({rotation:0,y:362},11,cjs.Ease.quadOut).wait(20));

	// cat
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3D3D3D").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_12.setTransform(166,34.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3D3D3D").s().p("Ag8BVQgYgWgOghQAZgIAAABQAOAjAbAWQAZAVAagBQAdgQAOgmQAPgngHgqQgFgegigUQgagPgXAAQgPALgHAWQgJAcAFAhQAGAhAQAUQAOAQAQACQAMgJAGgPQAFgRgEgYQgDgUgHgPQgIgOgJgFQgNANABAZQAAAXAMAHIAAgCQAAgBAMgCQANgCAAgBQgBAHgGAEIACAAIgUAFIgDAAQgUABgKgTQgNgXARgWQARgUAagBIABAAQAbABAJAtQAJAsgRAVQgIALgUAHQgSAHgPgCQgmgHgKg2QgIgtAPgkQAIgTAUgJQAMgGARgCQAXgCAdAOQAeAPALAVQANAZgIApQgHAngSAYQgWAegxAFIgIABQgaAAgagWg");
	this.shape_13.setTransform(186.4,-39.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3D3D3D").s().p("AiGBOQgTgbAVgxQAQgmAcgdQADgDALAAQAMgBADgDQgiAjgPAvQgTA9AuAOQAdAJAqgGQAbgFAqgMQAXgHAIgFQANgIAGgSQAOgrgPgpQgSgvgvAKQgbAGgaAVQgcAWgMAZQgPAfAYAUQARAPAWgBQARgJAPgLQAZgTAHgUQAGgUgUgKQgKgFgLgBQgKAIgKARQgSAaAXAEIAAAAIgaAHIAAAAQgSgDAGgTQAEgRANgMQASgQAlgDQApgEAGAaQAGAbgnAbQgZARgaAIIgBABIgKADQgTAFgIABQgOABgMgFQgVgIgGgTQgGgTALgTQALgVAfgWQAggYAigMQBageASBEQAHAbgDAdQgEAkgVAMQgRAKggAIIgzALQg4AOgYADIgPAAQgqAAgPgVg");
	this.shape_14.setTransform(206.8,102.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F18B3D").s().p("AiuCsQisgvhzh7IAAgHQACgUADgVQAMg6AchdQBVBIBtAoQBxApB6AAQB4AABugnQBpgkBUhEQAaCBADBXQhVBPhxAsQh3AuiDAAQhfAAhcgag");
	this.shape_15.setTransform(182.4,57.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3D3D3D").s().p("AgFAaIggAYIASgnIgkgNIAkgHIgKgrIAdAjIAlgXIgRAhIAkAQIgpAGIAHAmg");
	this.shape_16.setTransform(168.9,102.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3D3D3D").s().p("AhQBSQglgjgHgtQgJgyATgxQABgDANgBQANgBABgCQgTAwAJAzQAHAsAfAeQASAQAXAMQAbAOATgCIABAAIAGgEQAIgFAGgGQANgLAMgUQAWgnAAgmQAAgtgjgbQghgagtADQguAaAQBGQAPBFA2ACQATgNAIgWQAIgWgHgVQgFgNgLgMQgMgNgNgFQgKAPABAUQACAVAPAHIABgBQADgDALAAQAMgBACgDQgGAHgNAEQgNAFgKABIgBAAIgDABIADgBQgYAAgGgbQgFgdAUgPQAWgRAdALQAbALALAaQAMAdgPAZQgNAWgdAMIAGgBIgKADQgIADgJABIAAAAQgnAIgXgaQgTgXgFgoQgIhGA2gTIgCAAIAXgGQAjgGAeAIQAkAKARAcQAjA3gnBCQgmBBhBADIgEAAQgrAAglgig");
	this.shape_17.setTransform(150.6,81.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3D3D3D").s().p("AgHAmIgxAlIAbg7Ig1gUIA1gKIgOhAIArA0IA4gjIgaAyIA1AZIg9AIIAKA5g");
	this.shape_18.setTransform(229.4,81.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3D3D3D").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_19.setTransform(191.8,-16.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3D3D3D").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHgAgJgJQgEAEgBAFQABAGAEAEQAEAFAFAAQAGAAAFgFQADgEAAgGQAAgFgDgEQgFgFgGABQgFgBgEAFg");
	this.shape_20.setTransform(197.2,-19.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3D3D3D").s().p("AgGAHQgDgDAAgEQAAgDADgDQAEgDACAAQAEAAADADQADADgBADQABAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_21.setTransform(89.5,92);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3D3D3D").s().p("AgLANQgGgGAAgHQAAgHAGgEQAEgGAHAAQAHAAAGAGQAFAEAAAHQAAAHgFAGQgGAFgHAAQgHAAgEgFgAgFgFQgDACAAADQAAADADADQADADACgBQADABADgDQADgDgBgDQABgDgDgCQgDgCgDgBQgCABgDACg");
	this.shape_22.setTransform(86.6,87.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3D3D3D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_23.setTransform(175.4,95.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3D3D3D").s().p("AgMANQgFgGAAgHQAAgHAFgFQAGgFAGAAQAHAAAGAFQAFAFAAAHQAAAHgFAGQgGAFgHAAQgGAAgGgFgAgFgFQgDACABADQgBADADADQADACACAAQADAAADgCQADgDAAgDQAAgDgDgCQgDgDgDAAQgCAAgDADg");
	this.shape_24.setTransform(172.5,90.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3D3D3D").s().p("AhtCXQg3gXgLg5QgKg0Adg3QAhg8BSgjQBFgeBRgDIgOAEQgJADgFAAQhMADg8AlQhDAogUBEQgMAoAGAhQAGAoAfAWQA0AnBUgHQAmgEAggWQAhgXAOgjQAQgogLgzQgLg2ghgaQgagVglAFQgiAFgeAYQggAXgPAgQgRAiAIAeQANA0A1AKQAzAKAdguQAJgQAEgRQAFgUgEgOQgHgegnADQgbAPgFAYQgEAaAgALQgEgBgKAFQgKAFgEgCQgkgLAKgeQAKgbAfgMIABAAIAAgBQA9gUAUASQARAPgIAhQgGAdgQATQgNAQgVAKQgPAHgaAGQgfAHgbgGQgfgHgSgZQgRgYABggQACgfASgXQAtg3BcgWQA9gPAlAqQAhAlACBBQACA2gjAlQgfAhg2APQgwANgpAAQgrAAglgOg");
	this.shape_25.setTransform(193.6,25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2A2B28").s().p("Aj+EnQimgKiIgXQAIgsgNglQgSgzg6gXQg0gVg4AMQhRATgEBQIgugQQAFgmAMggQgBADgNABQgNABgBADQgKAbgEAaQiIg1hVhEQgbgVgTgVIgMgPQBxg4CUg/IAdALIgWAxIAogeIAiAiIgIgwIAzgHIgsgWIANgaQE7iACPgJIKhAAQC3AHEBBeQgcAVgQAcQgaAvAdAoQAaAhA0AUQA0ASAygSQAogPAKgkQAJghgRggIAkARQASAvgOAmQgPApg1ATQg1AUhFgbQg6gXgtgsQgCgCgNAFQgMAGgBgCQA7A7BPAQQBRAQBKglQAngUAPgeQAOgdgIgkQBvA0BIApQj4ChknBIQkaBFlsAAQh3AAh/gHg");
	this.shape_26.setTransform(181.4,86.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3D3D3D").s().p("AgOARIgoAfIAWgwIgdgMIBcgmIgOAaIAtAWIgzAGIAIAvg");
	this.shape_27.setTransform(95.6,75.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3D3D3D").s().p("AgKAvIg5AsIAghHIhBgZIBBgMIgShOIA1A/IBEgqIgfA9IBAAeIhKAKIAMBFg");
	this.shape_28.setTransform(175.6,3.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3D3D3D").s().p("AgeBZQg0gTgZghQgegoAaguQARgdAbgUIALAEQgfAegIAkQgKAwA2AnQAyAjA0gBQAsgXACgwQABgvgogYIA3AYQASAfgKAhQgKAjgoAQQgZAJgZAAQgZAAgagKg");
	this.shape_29.setTransform(262.7,76.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3D3D3D").s().p("AANAvQgQABgQgGQgRgFgIgKQgbgdAagVQATgRAngIIAUAIIgGgBQgRgFgSAIQgVAIgDARQgDATATARQAQAOAWAEQAOgNgHgWIAcgHQAGAWgMAMQgLAMgWACIgJACg");
	this.shape_30.setTransform(262.9,74.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3D3D3D").s().p("AgnBLQhPgQg7g7QABAAANgEQAMgGACACQAtAtA6AXQBEAbA1gUQA1gUAPgqQAPglgTgvIAlARQAIAlgOAcQgQAfgnATQgzAbg4AAQgXAAgYgFg");
	this.shape_31.setTransform(263.7,83.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3D3D3D").s().p("ABtBQQAGg4gZgmQgVghgvgTQgxgVgkANQgaAJgNAeQgLAaABAkIgagIQAFhPBRgTQA3gMA0AVQA5AXASAyQAOAlgIAsg");
	this.shape_32.setTransform(112.1,104.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3D3D3D").s().p("AgUAaQAEgaAKgaQABgDAMgCQANAAABgDQgMAggFAlg");
	this.shape_33.setTransform(93.3,101.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3D3D3D").s().p("AArAqQgEgdgUgWQgUgZgbgDQgKAJgEARQgEAPADARIgdgHQABgQAHgOQAIgOAMgHQApgWAmAgQAlAdABAtg");
	this.shape_34.setTransform(112.5,107.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2A2B28").s().p("AgyA8Qg3gnALgwQAIgkAfgeIBHAcQgnAIgTAQQgaAWAbAdQAIAKARAFQAQAGAQgBIgEACIAJgDQAWgBALgMQAMgNgGgVIgcAIQAHAVgOAMQgWgEgQgOQgTgPADgUQADgSAVgIQASgHARAEIAGACIAWAJQApAYgCAvQgCAwgrAXIgFAAQgyAAgvgig");
	this.shape_35.setTransform(262.6,76.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2A2B28").s().p("AgqAUQgDgRAEgQQAEgRAKgJQAbADAUAZQAUAWAEAdQgngIgvgMg");
	this.shape_36.setTransform(112.4,107.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2A2B28").s().p("ABOBKQgBgtglgeQgngggoAWQgMAHgIAOQgHAOgBAQIgsgNQgBgkALgaQANgeAagJQAkgNAxAVQAvATAVAhQAZAmgGA4IgggGg");
	this.shape_37.setTransform(112,104.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2A2B28").s().p("AkWJuQhtgohVhIQBQkFCMk2QCWlQB/i1QAXgiAKgMQAXgdAPgJIF4G3IkriWIAnAqQAYAZgmAiIgsAeIBWD/QBeEqAqDQQhUBFhpAkQhuAmh3AAQh7ABhxgpg");
	this.shape_38.setTransform(188,-13.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3B3D39").s().p("AhCB8QitgThog8Qh1hDgBhsQBzB7CsAuQBcAaBfAAQCDAAB2guQBygrBVhPQAFBzgjAjQgxAxiTAXQhSAMhWAAQhCAAhDgHg");
	this.shape_39.setTransform(182.4,70.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3D3D3D").s().p("AgFAHQgDgDAAgEQAAgDADgCQADgDACAAQAEAAADADQACACAAADQAAAEgCADQgDACgEAAQgCAAgDgCg");
	this.shape_40.setTransform(145.5,80.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#282828").s().p("AhcAeQgJgGAGgJQAFgKAJAGQA0AjA0ggQAogXAMghQAEgKALADQALADgEAKQgWA4g6AWQgXAJgWAAQgiAAgegVg");
	this.shape_41.setTransform(352.9,174.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#282828").s().p("AgwAvQgpgIgmgaQgJgGAGgIQAFgKAJAGQBLAxBHgZQA5gTAZgrQAFgJAKAGQAKAFgGAKQgPAZgaATQgYASgeAKQgaAJgZAAQgRAAgQgDg");
	this.shape_42.setTransform(353.2,165.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6E627A").s().p("AhlA2QhTg/ACgWQADgjA0gZQA1gZBKAAQBMAAA2AZQA2AZAAAjQAAAXhRA+QhQA+gXAAQgUAAhRg+g");
	this.shape_43.setTransform(185.3,234.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#282828").s().p("Ah2ArQgxgwAAhFIABgSQAHBBAvAqQAwAsBAAAQBBAAAwgsQAwgqAGhBIABASQAABFgxAwQgxAxhGABQhEgBgygxg");
	this.shape_44.setTransform(202.1,252.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#282828").s().p("Ah1ArQgygwAAhFIABgSQAGBBAwAqQAwAsBAAAQBBAAAwgsQAwgqAGhBIABASQAABFgxAwQgxAxhGABQhFgBgwgxg");
	this.shape_45.setTransform(168.6,252.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#282828").s().p("Ag+CIQg+gXANg+QADgOAPAEQAOAEgDAOQgHAhAeAPQAbAOAngFQAogFATgVQASgUgOgaQgTAIgTgCQgbgEgFgYQgEgRAJgOQALgOASAAQAVACAWAWIACgCQADgJgCgOQgEgcgcgcQgYgXgdgMQgOgFAEgOQAEgPANAFQA4AWAmA9QAkA6gjAfQAEAIADAJQAQA3hKAiQgcAMgbAAQgaAAgbgKgAAzASQgLgMgJAAQgIAMARgCQAGADAFgBg");
	this.shape_46.setTransform(179.9,321.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2B2B2B").s().p("AAIBlQgWgygKguQgLg1AMgeQAIgUARgHQAEgCAFACQAEACABAEQACAEgCAFQgCAEgEACQgJADgDAMQgJAVAJAtQAIAsAXAyQACAEgCAFQgCAEgEACIgFABQgHAAgDgGg");
	this.shape_47.setTransform(198.4,528.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2B2B2B").s().p("AgdBlQgUgqgIg7QgJhEAagOQAkgUAegEQAQgCAKADQAEABADAEQACAEgBAEQgBAFgEACQgEACgFgBQgGgBgNACQgaADgeARQgMAHAHA2QAGA2ATAnQACAFgBAEQgCAEgEACIgFABQgHAAgDgGg");
	this.shape_48.setTransform(210.3,525.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2B2B2B").s().p("AgWBqQgEgCgBgEQgCgFACgEQAXgxAHgsQAIgsgJgXQgEgMgJgDQgEgCgCgEQgCgFABgEQACgEAEgCQAFgCAEACQARAHAJAVQAMAegLA1QgJAugWAxQgDAGgHAAg");
	this.shape_49.setTransform(161.6,528.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2B2B2B").s().p("AALBqQgEgCgCgEQgBgEACgFQAVgtAIgYQAQgugJgWQgFgLgNgFQgigMgagGIgUgDQgFgBgDgDQgDgDAAgFQAAgFAEgDQADgDAFAAQAGAAAQADQAcAGAlAOQAWAIAJAVQALAcgQAyQgJAdgXAwQgDAGgHAAIgFgBg");
	this.shape_50.setTransform(149.4,525.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#282828").s().p("AlfhWQBRgPD7BAQD5A+B5BAg");
	this.shape_51.setTransform(283.1,248.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#282828").s().p("AlJiVQBSAADsBsQDpBqBsBVg");
	this.shape_52.setTransform(256.1,267.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#282828").s().p("AoAijQCAAAFuB1QFrB1CnBdg");
	this.shape_53.setTransform(275.8,260);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#282828").s().p("AAUglQD7hABRAPIq/CvQB6hAD5g+g");
	this.shape_54.setTransform(85,248.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#282828").s().p("AAMgpQDshsBSAAIqTErQBshVDphqg");
	this.shape_55.setTransform(112,267.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#282828").s().p("AATguQFuh1B/AAIwAFHQCphdFqh1g");
	this.shape_56.setTransform(92.3,260);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#282828").s().p("AAUglQD7hABRAPIq/CvQB6hAD5g+g");
	this.shape_57.setTransform(85,248.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#282828").s().p("AAMgpQDshsBSAAIqTErQBshVDphqg");
	this.shape_58.setTransform(112,267.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#282828").s().p("AATguQFuh1B/AAIwAFHQCphdFqh1g");
	this.shape_59.setTransform(92.3,260);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2B2B2B").s().p("AhUAMQg6gVgOgVIANgJQATAcBTAVQBoAdBegdQgJAGADAKIABACQgsAMgwAAQhJAAhHgcg");
	this.shape_60.setTransform(225.2,380.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2B2B2B").s().p("AiSAdIABgBQADgMgLgFIgGgCQBgAdBrgcQBUgWATgaIANAJQgOAUg6AVQhJAbhKAAQgtAAgqgKg");
	this.shape_61.setTransform(134,380.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("ACDT7QgFgDgCgGQg1iwBBhdQArg9CMg8QALgEgCgLQgCgMgMAAIpzAAQgMAAgCAMQgCALAKAEQCNA8ArA9QBBBdg1CwQgCAGgFADQgFACgGgCIgcgJQj2hJiaiEQiuiUgnjSIgBgCQhFjQD3scQAqAKAuAAQBLAABIgbQA6gWAOgTIgNgKQgTAahUAXQhsAchggdQgRgJgOgKQh1hRBQjDQBLi4DJi1IABgCQBohVAXhdQAGgbAAgeQAAgZACgCIAEgCIC8gOQAFAAAAgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAIBGAFIABAAIBGgFQAGgBAAAHQAAAGAGAAIC7AOQADAAACACQABADgDAUQgDAZAFAZQAQBVBuByIABACQDJC3BNCxQBTC/hzBQQgSAMgSAIIgBABQhfAdhogdQhTgWgUgcIgNAKQAPAUA5AXQBHAbBLAAQAvAAAtgMQD2MbhEDRIgBACQgoDSitCUQiaCEj2BJIgcAJIgFABIgGgBg");
	this.shape_62.setTransform(179.8,413.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2B2B2B").s().p("AhuHcQg4gvAjhrQAahRBMiFQBSiSAahBQAXg6AIgsQALg7gMgvQgbhniYgtQgLgEAKgIQAKgIAJADQCaAuAhBmQAeBdg2CDQgRAqhaCjIg5BqQggA9gQAwQgPAuABAhQABArAfAaQAHAFgOAGQgHADgFAAQgFAAgDgCg");
	this.shape_63.setTransform(145.7,447.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#282828").s().p("AC8ALQhBgkhKgKQhfgNhcAiQhZAhhFBIQAjhhBeg3QBfg4BwAQQBcAMBGA6QBFA3AaBRQgvg5g+glg");
	this.shape_64.setTransform(275.1,115.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#282828").s().p("AjJgfQBGg5BcgNQBwgQBfA4QBeA3AjBhQhEhIhZghQhcgjhgAOQhJAKhBAlQg/AkgvA6QAbhRBEg4g");
	this.shape_65.setTransform(96.6,114.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AhHBIQgegeAAgqQAAgpAegeQAegdApAAQAqAAAeAdQAeAeAAApQAAAqgeAeQgeAegqgBQgpABgegeg");
	this.shape_66.setTransform(251,159.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4E4658").s().p("AngG6QgjhBgHhkQgHhkAYhtQA4j+CviRQCoiLDPARQDYARB4C2QBKBvAMCKQALCEgxB7QAhhugOhyQgPh1g/hgQhriii/gYQi2gYiiBtQB5hCCAAVQCHAXBNBwQBXCAgkCpQgkCpiBBVQiXBliqgZQidgXhQhvQgggtgIhBQgIg/APhIQglBvgCBvQgDBsAfBMQgFgGgEgIg");
	this.shape_67.setTransform(268.1,171.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AhHBIQgegeAAgqQAAgpAegeQAegdApAAQAqAAAeAdQAeAeAAApQAAAqgeAeQgeAegqgBQgpABgegeg");
	this.shape_68.setTransform(95.1,159.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#4E4658").s().p("AH0EQQgDhuglhwQAQBIgIA/QgIBBghAtQhQBvicAXQiqAZiXhlQiBhVgkipQgkipBXiAQBNhwCHgXQCAgVB5BCQiihti2AYQi/AYhrCiQg/BggPB1QgPByAiBuQgxh7ALiEQAMiKBKhvQB4i2DYgRQDPgRCoCLQCvCRA4D+QAYBtgHBkQgGBkgkBBIgJAOQAfhLgDhtg");
	this.shape_69.setTransform(103.2,171.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AioH4QhugHhTglQhVgngkhBQgLgSgCgJQgqikAvjAQA4jlCgiAQCniGDNAPQDWAPB2CtQBCBgAPB2QAPBxgiBvQgbBXg1BGQg4BJhNAtQi3BsjTAAQgaAAgbgCg");
	this.shape_70.setTransform(268.2,179.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6E627A").s().p("AF+FxQihhsk/hLQhkgZhpgRIhUgNQAkipB6i3QA9haA2g5QCABaC3EoQBlCmBaC0QAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgDAAIgCAAg");
	this.shape_71.setTransform(264.4,72.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6E627A").s().p("AmCFxQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQBai0BlimQC3koCAhaIAjAnQAqA0AmA4QB6C3AkCpQiAARihAmQk/BLiiBsIgCAAIgCAAg");
	this.shape_72.setTransform(106.2,72.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AkWGOQhOgtg3hJQg2hGgbhXQgihvAPhxQAPh2BChgQB2itDWgPQDNgPCnCGQChCAA4DoQAwDEgrCdQgCAHgLAUQglBBhVAnQhSAlhvAHQgaACgbAAQjTAAi2hsg");
	this.shape_73.setTransform(103.2,179.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AspUDQlkiRixjvQjMjVidkuQgwhegnhcIgchJQA5gGBKgaQCTg1BShlQAAj2BwkXQDAnaHNlyQCZBMB+DIQBuCwAhCpQCChGCVAAQCNAAB9A/QAjiqBtisQB9jFCYhLQHNFyC/HaQBxEXAAD2QBRBlCTA1QBKAaA5AGQgrB/hcCrQi4FVjyDZQjEDOlLB4QlVB8mNAAQm1AAltiUg");
	this.shape_74.setTransform(184.5,147.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AlJKdQCbhYBminQCEjZhCjaQhVkVAniTQAsilDgiLIgEAjQgDAvAGA6QAUC7BiDpQBICohqDyQhlDpi0CAQiPBmiEAsQgqANgjAGIgbADg");
	this.shape_75.setTransform(267.8,380.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(88));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.6,-79.5,363.9,620.6);


// stage content:
(lib._015141_2018_GrPP_Candy_Halloween_320x50 = function(mode,startPosition,loop) {
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
		this.kitty_mc.play(2);
		
		//Pause function
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
	this.frame_87 = function() {
		//Pause function
		var tl = this;
		tl.stop();
		var delay = 2500;
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
		this.kitty_mc.play(2);
	}
	this.frame_176 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(52).call(this.frame_87).wait(88).call(this.frame_175).wait(1).call(this.frame_176).wait(1));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.parent = this;
	this.clickTag.setTransform(160,25,2,0.083,0,0,0,80,300);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(177));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A4/j5MAx/AAAIAAHzMgx/AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(177));

	// cta
	this.instance = new lib.cta_1();
	this.instance.parent = this;
	this.instance.setTransform(277.1,24,0.442,0.442,0,0,0,277,24);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140).to({_off:false},0).to({scaleX:1,scaleY:1,x:277,alpha:1},35,cjs.Ease.elasticOut).wait(2));

	// kitty
	this.kitty_mc = new lib.kitty();
	this.kitty_mc.name = "kitty_mc";
	this.kitty_mc.parent = this;
	this.kitty_mc.setTransform(288.1,28.4,0.117,0.117,0,0,0,185,271.3);

	this.timeline.addTween(cjs.Tween.get(this.kitty_mc).wait(135).to({x:288,y:100},35,cjs.Ease.quintOut).wait(7));

	// candy
	this.instance_1 = new lib.candy_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80,161,1,1,0,0,0,80,300);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).to({y:286},51,cjs.Ease.quartOut).wait(1).to({y:354},35,cjs.Ease.quartOut).wait(54));

	// text2
	this.instance_2 = new lib.text2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(105).to({_off:false},0).to({alpha:1},35,cjs.Ease.quartOut).wait(37));

	// text1
	this.instance_3 = new lib.text1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(80,210,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:300},35,cjs.Ease.quartOut).wait(1).to({y:409,alpha:0},51,cjs.Ease.quartOut).wait(90));

	// logo
	this.instance_4 = new lib.logo_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(80,300,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(177));

	// back
	this.instance_5 = new lib.back_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(80,300,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(177));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(159,-65,322,150);
// library properties:
lib.properties = {
	id: 'EEFB96014AED4486850A76CAECAEBCA8',
	width: 320,
	height: 50,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1537905161911", id:"back"},
		{src:"images/candy.png?1537905161911", id:"candy"},
		{src:"images/cta.png?1537905161911", id:"cta"},
		{src:"images/logo.png?1537905161911", id:"logo"},
		{src:"images/text1.png?1537905161911", id:"text1"},
		{src:"images/text2.png?1537905161911", id:"text2"}
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
an.compositions['EEFB96014AED4486850A76CAECAEBCA8'] = {
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