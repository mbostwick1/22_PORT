(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.candy = function() {
	this.initialize(img.candy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);// helper functions:

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

}).prototype = getMCSymbolPrototype(lib.text2_1, new cjs.Rectangle(0,0,300,600), null);


(lib.text1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1_1, new cjs.Rectangle(0,0,300,600), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,300,600), null);


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

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,300,600), null);


(lib.candy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.candy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.candy_1, new cjs.Rectangle(0,0,300,600), null);


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

}).prototype = getMCSymbolPrototype(lib.back_1, new cjs.Rectangle(0,0,300,600), null);


(lib.kittyMummy = function(mode,startPosition,loop) {
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
	this.shape_12.graphics.f("#212121").s().p("AgIAvIAAhXIAIgGQAGAsADAxg");
	this.shape_12.setTransform(182.4,349.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#212121").s().p("AAAASQAAgqgOgSQgQgRAMADQAHABAJAFQAiAbgKBIIgYAIQACgSAAgVg");
	this.shape_13.setTransform(183.9,349.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#212121").s().p("AABAyQgCgEAAgHQAFg4gTgYIgEgDQgQgJAjAAQAUAAAEAmQACAXgEAjQgBAEgDAEQgDADgFAAQgFAAgEgEg");
	this.shape_14.setTransform(177.9,349.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#212121").s().p("AgRAyQgFgOAJglQAHgjAKgVIAJACQAJAFgDAKQgEARgLBJQgDAEgEADIgFABQgGAAgDgIg");
	this.shape_15.setTransform(174.2,349.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#212121").s().p("AAGAwQgMgIgNgZIgJgWIAAgUQAJgTAUgDQAXgCADAYQAEAegFAZQgDAWgKAAQgDAAgEgCg");
	this.shape_16.setTransform(179.5,344.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#212121").s().p("AjDBOQi3g3jgheIBDgwIDTBqQDlBqBbADQB/gGDRhNQCgg6AmgaQAMgHAgAPQAQAJANAIQjHBfjSAtQiAAbhGAAQgvAAiQgrg");
	this.shape_17.setTransform(180.5,333);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6E627A").s().p("AhlA3QhThAACgWQADgjA0gYQA1gZBKAAQBMAAA2AZQA2AYAAAjQAAAXhRA/QhQA9gXABQgUgBhRg9g");
	this.shape_18.setTransform(185.3,233.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#282828").s().p("Ah2ArQgxgwAAhGIABgRQAHBBAvAqQAwAsBAAAQBBAAAwgsQAwgqAGhBIABARQAABGgxAwQgxAyhGAAQhEAAgygyg");
	this.shape_19.setTransform(202.1,251.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#282828").s().p("Ah1ArQgygwAAhGIABgRQAGBBAwAqQAwAsBAAAQBBAAAwgsQAwgqAGhBIABARQAABGgyAwQgwAyhGAAQhFAAgwgyg");
	this.shape_20.setTransform(168.6,251.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPARQgFglgFgGQgGgJAdgGQANgDAQgBQgBAbgNAfQgLAbgIAGIgBAAQgFAAgDgdg");
	this.shape_21.setTransform(206.4,263.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAHAuQgIgGgLgbQgNgegBgcIAdAEQAdAGgGAJQgFAGgFAlQgDAdgFAAIgBAAg");
	this.shape_22.setTransform(163,263.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3D3D3D").s().p("AgFAHQgDgDAAgEQAAgCADgDQADgDACAAQAEAAADADQACACAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_23.setTransform(145.5,79.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#282828").s().p("AhcAeQgJgGAGgJQAFgKAJAGQA0AjA0ggQAogXAMghQAEgKALADQALADgEAKQgWA4g6AWQgXAJgWAAQgiAAgegVg");
	this.shape_24.setTransform(352.9,173.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#282828").s().p("AgwAvQgpgIgmgaQgJgGAGgIQAFgKAJAGQBLAxBHgZQA5gTAZgrQAFgJAKAGQAKAFgGAKQgPAZgaATQgYASgeAKQgaAJgZAAQgRAAgQgDg");
	this.shape_25.setTransform(353.2,164.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#282828").s().p("AgQAqQg6gWgWg4QgEgKALgDQALgDADAKQAOAhAnAXQAzAgA1gjQAJgGAFAKQAGAJgJAGQgeAVgiAAQgWAAgXgJg");
	this.shape_26.setTransform(16.9,173.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#282828").s().p("AgjApQgegKgZgTQgagSgPgaQgFgJAJgGQAKgFAGAJQAZArA5ATQBHAYBKgxQAJgGAGAKQAGAJgJAGQgnAagoAHQgQAEgRAAQgZAAgagJg");
	this.shape_27.setTransform(16.6,164.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#282828").s().p("Ag+CIQg/gXAOg+QADgOAPAEQAOAEgDAOQgHAhAeAPQAbAOAngFQAogFATgVQASgUgOgaQgTAIgTgCQgbgEgFgYQgEgRAJgOQALgOASAAQAVACAWAWIABgCQAEgJgCgOQgEgcgcgcQgYgXgdgMQgOgFAEgOQAEgPAMAFQA4AVAnA+QAkA6gjAfQAEAIADAJQAQA4hLAhQgbAMgbAAQgaAAgbgKgAAzASQgLgMgJAAQgIAMARgCQAGADAFgBg");
	this.shape_28.setTransform(179.9,320.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B2B2B").s().p("AAIBlQgWgzgKgtQgLg1AMgeQAIgUARgHQAEgCAFACQAEACABAEQACAEgCAFQgCAEgEACQgJADgDAMQgJAVAJAtQAIAsAXAyQACAFgCAEQgCAEgEACIgFABQgHAAgDgGg");
	this.shape_29.setTransform(198.4,527.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2B2B2B").s().p("AgdBlQgUgqgIg7QgJhEAagOQAkgUAegEQAQgCAKADQAEABADAEQACAEgBAEQgBAFgEACQgEACgFgBQgHgBgNACQgaADgdARQgMAHAHA2QAGA2ATAnQACAEgBAFQgCAEgEACIgFABQgHAAgDgGg");
	this.shape_30.setTransform(210.3,524.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B2B2B").s().p("AgWBqQgEgCgBgEQgCgFACgEQAWgyAIgrQAIgsgJgXQgEgMgJgDQgEgCgCgEQgCgFABgEQACgEAEgCQAFgCAEACQARAHAJAVQAMAegLA1QgJAugWAxQgDAGgHAAg");
	this.shape_31.setTransform(161.6,528);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2B2B2B").s().p("AALBqQgEgCgCgEQgBgFACgEQAVgtAIgYQAQgugJgWQgFgLgNgFQgigMgagGIgUgDQgFgBgDgDQgDgDAAgFQAAgFAEgDQADgDAFAAIAWADQAcAGAlAOQAWAIAJAVQALAcgQAyQgIAbgYAyQgDAGgHAAIgFgBg");
	this.shape_32.setTransform(149.4,524.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#282828").s().p("AlfhWQBRgPD7BAQD5A+B6BAg");
	this.shape_33.setTransform(283.1,247.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#282828").s().p("AlJiWQBSAADsBsQDpBqBsBXg");
	this.shape_34.setTransform(256.1,266.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#282828").s().p("AoAijQCAAAFuB1QFrB0CnBeg");
	this.shape_35.setTransform(275.8,259.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#282828").s().p("AAUglQD7hABRAPIq/CvQB6hAD5g+g");
	this.shape_36.setTransform(85,247.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#282828").s().p("AAMgqQDshsBSAAIqTEtQBthXDohqg");
	this.shape_37.setTransform(112,266.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#282828").s().p("AATguQFuh1B/AAIwAFHQCpheFqh0g");
	this.shape_38.setTransform(92.3,259.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#282828").s().p("AAUglQD7hABRAPIq/CvQB6hAD5g+g");
	this.shape_39.setTransform(85,247.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#282828").s().p("AAMgqQDshsBSAAIqTEtQBthXDohqg");
	this.shape_40.setTransform(112,266.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#282828").s().p("AATguQFuh1B/AAIwAFHQCpheFqh0g");
	this.shape_41.setTransform(92.3,259.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2B2B2B").s().p("AhUANQg6gXgOgTIANgKQATAbBTAWQBoAdBegdQgJAGADAKIABACQgsAMgwAAQhJAAhHgbg");
	this.shape_42.setTransform(225.2,379.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2B2B2B").s().p("AiSAcIABAAQABgFgCgFQgCgFgFgCIgGgDQBgAdBrgcQBUgVATgaIANAKQgOATg7AVQhHAbhKAAQguAAgqgLg");
	this.shape_43.setTransform(133.9,379.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("ACDT7QgFgDgCgGQg1iwBBhdQArg9CMg8QALgEgCgLQgCgMgMAAIpzAAQgMAAgCAMQgCALAKAEQCNA8ArA9QBBBdg1CwQgCAGgFADQgFACgGgCIgdgJQj2hJiZiEQiuiUgnjSIgBgCQhFjQD3scQAqAKAuAAQBLAABHgbQA7gWAOgTIgNgKQgTAahUAXQhsAchggdQgRgJgOgKQh1hRBQjDQBLi4DIi1IACgCQBohVAXhdQAGgbAAgeQAAgZACgCIAEgCIC8gOQAFAAAAgGQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIBGAFIABAAIBGgFQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAGAGAAIC7AOQADAAACACQABADgDAUQgDAZAFAZQAPBVBuByIACACQDJC3BNCxQBTC/hzBQQgSAMgSAIIgBABQhfAdhogdQhTgWgUgcIgNAKQAPAUA5AXQBHAbBLAAQAvAAAtgMQD2MbhFDRIAAACQgoDSitCUQiaCEj2BJIgdAJIgEABIgGgBg");
	this.shape_44.setTransform(179.8,412.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2B2B2B").s().p("AhuHcQg4gvAjhrQAahRBMiFQBSiSAahBQAXg6AIgsQALg7gMgvQgbhniYgtQgLgEAKgIQAKgIAJADQCaAuAhBmQAeBdg2CDQgRAqhaCjIg5BqQggA9gQAwQgQAvACAgQABArAfAaQAHAFgOAGQgHADgFAAQgFAAgDgCg");
	this.shape_45.setTransform(145.7,447);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#282828").s().p("AC8ALQhBgkhKgKQhfgOhdAjQhZAhhEBIQAjhhBeg3QBfg4BwAQQBcAMBGA6QBFA3AaBRQgvg5g+glg");
	this.shape_46.setTransform(275.1,114.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#282828").s().p("AjJgfQBGg5BcgNQBwgQBfA4QBeA3AjBhQhEhIhZghQhcgjhgAOQhKAKhAAlQg/AkgvA6QAahRBFg4g");
	this.shape_47.setTransform(96.6,113.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AhHBIQgegeAAgqQAAgpAegeQAegdApgBQAqABAeAdQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegeg");
	this.shape_48.setTransform(251,159);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4E4658").s().p("AngG6QgjhBgHhkQgHhkAYhtQA4j+CviRQCoiLDPARQDYARB4C2QBKBvAMCKQALCEgxB7QAhhugOhyQgPh1hAhgQhriii/gYQi1gYiiBtQB5hCCAAVQCHAXBMBwQBYCAgkCpQgkCpiBBVQiXBliqgZQidgXhQhvQgggtgJhBQgHg/APhIQglBvgCBvQgDBsAeBMg");
	this.shape_49.setTransform(268.1,170.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhHBIQgegeAAgqQAAgpAegeQAegdApgBQAqABAeAdQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegeg");
	this.shape_50.setTransform(95.1,159);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4E4658").s().p("AH0EQQgDhuglhwQAQBIgIA/QgIBBghAtQhQBvidAXQipAZiXhlQiBhVgkipQgkipBXiAQBNhwCHgXQCAgVB4BCQihhti2AYQi/AYhrCiQg/BggPB1QgPByAiBuQgxh7ALiEQAMiKBKhvQB4i2DYgRQDPgRCoCLQCvCRA4D+QAYBtgHBkQgGBkgkBBIgJAOQAfhLgDhtg");
	this.shape_51.setTransform(103.2,170.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AioH4QhugHhTglQhVgngkhBQgLgSgCgJQgqikAvjAQA4jlCgiAQCniGDNAPQDWAPB2CtQBCBgAPB2QAPBxgiBvQgbBXg1BGQg4BJhNAtQi3BsjTAAQgaAAgbgCg");
	this.shape_52.setTransform(268.2,178.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6E627A").s().p("AF+FwQihhqk/hNQhkgXhpgTIhUgMQAkiqB5i1QA9hbA2g6QCBBaC3EpQBlCmBaC0QAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgDABIgCgBg");
	this.shape_53.setTransform(264.4,71.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6E627A").s().p("AmCFwQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQBai0BlimQC3kpCAhaIAjApQAqAzAmA5QB6C1AkCqQiAAQihAmQk/BNiiBqIgCABIgCgBg");
	this.shape_54.setTransform(106.2,71.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AkXGOQhNgtg3hJQg2hHgbhWQgihvAPhxQAPh2BChgQB2itDWgPQDNgPCnCGQChCAA4DoQAwDEgrCdQgCAHgLAUQglBBhVAnQhSAlhvAHQgaACgbAAQjTAAi3hsg");
	this.shape_55.setTransform(103.2,178.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AspUDQlkiRixjvQjMjVidkuQgwhegnhcIgchJQA5gGBKgaQCTg1BRhlQAAj1BxkYQDAnaHNlyQCZBMB+DIQBuCwAhCpQCChGCVAAQCNAAB9A/QAjiqBtisQB9jFCYhLQHNFyC/HaQBxEXAAD2QBRBlCTA1QBKAaA5AGQgrB/hcCrQi4FVjyDZQjEDOlLB4QlVB8mNAAQm2AAlsiUg");
	this.shape_56.setTransform(184.5,147);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AlJKdQCbhYBminQCEjZhCjaQhVkVAniTQAsilDgiLIgEAjQgDAvAGA6QAUC7BiDpQBICohqDyQhlDpi0CAQiPBmiEAsQgqANgjAGIgbADg");
	this.shape_57.setTransform(267.8,379.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#212121").s().p("AnmJKQkoiFlejwQkajDjjjGQjQi1AXgQQDViVIihfQH5hYJrgOQJvgOHaBBQIEBICfCQQkGEWlbEeQq1I9mkArQgeADgfAAQjZAAk7iNgAzriIQA+BLBDBKQDXDuDFCNQCvB9CPAjQAvAUAoAOQDuBYClgRQCGgOCthOQEAiUFhllQCwixB+iUIAFABIABAAIAJACIADAAIADAAIATAAIADAAIAGAAIAkgGIADgBIAEAAIALgDIAEgBIAIgCIAbgIIADgCIAIgCIApgRIAcgOIAEgDIAHgDIAYgQIACgCIAEgCIAUgQIAIgJIABgBIACgDIABgBIADgDIABgBIACgDIAAgBIACgDIABgCIABgCIABgCIACgEIABgDIAAgBIABgDIAAAAIAAgEIAAgEIAAgDIAAgBQgDgPgRgNIgBAAIgFgDQi2hwnAg2QmfgyoKAOQoHANmxBHQnQBMjWB5QggATAaAiQAXAeA7AgQA6AfA9AQQBCARAmgJg");
	this.shape_58.setTransform(186.5,273.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgKAHQgtgQgjgPQDGAxgTAAQgLAAhYgSg");
	this.shape_59.setTransform(158.8,333.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DC4247").s().p("Ak1JUQBkAVAIgBQALgDjOg0QhggFhQgxQglgWhphYQjFiQjXjzQhDhLg9hOIgwg9QglAKhDgTQg9gRg7ggQg8gigYgfQgagkAggTQDWh7HRhOQGxhIIIgNQILgNGfA0QHAA3C2BzIAGADQASANACAQIAAAJIAAADIAAABIgBADIAAABIgBADIgBABIgBAEIgCADIgBABIgBADIgHAKIgHAHIgBACIgHAGIgCACIgSAPIgYAQIgHAEIgDACIgNAHIgaANIgeAMIgPAGIgEABIgEABIgmALIgEABIgHACIgEAAIgDABIgZAEIgEAAIgDAAIgDAAIgDABIgTAAIgDgBIgCAAIgEAAIgCgBIgEAAIgBAAIgFgCQh+CYiwC1QlhFtj/CYQisBQiIAOQgaADgdAAQiTAAjJhMg");
	this.shape_60.setTransform(186.4,275.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#212121").s().p("AtlNFQhognAfgcQA1guAGgpQAIg4h7AVQhWAPg7ASQgVAHgPgSQgPgRAIgVQB7lJDEnqQDcorA0hlQAKgUAVAAQFyAAFeADQJaADASAJQASAJCzKjQBgFqB3HRQADANgFAMQgFAMgLAGQg1AdgxAQQhKAYgygJQgigGAMgPIAnggQAagVgFgOQgGgShCgMQh9gWrbBqQqhBihbAdQgQAFgVAAQgwAAhKgbg");
	this.shape_61.setTransform(174.5,401.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(88));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.6,3.9,366.8,536.3);


// stage content:
(lib._015141_2018_GrPP_Candy_Halloween_300x600 = function(mode,startPosition,loop) {
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
		var delay = 800;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_70 = function() {
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
	this.frame_159 = function() {
		this.kitty_mc.play(2);
	}
	this.frame_160 = function() {
		//Pause function
		var tl = this;
		tl.stop();
		var delay = 5000;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_161 = function() {
		this.kitty_mc.play(2);
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(35).call(this.frame_70).wait(89).call(this.frame_159).wait(1).call(this.frame_160).wait(1).call(this.frame_161).wait(1));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.parent = this;
	this.clickTag.setTransform(150,300,1.875,1,0,0,0,80,300);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(162));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(162));

	// kitty
	this.kitty_mc = new lib.kittyMummy();
	this.kitty_mc.name = "kitty_mc";
	this.kitty_mc.parent = this;
	this.kitty_mc.setTransform(149.6,154,0.461,0.461,0,0,0,185,271.3);

	this.timeline.addTween(cjs.Tween.get(this.kitty_mc).wait(162));

	// cta
	this.instance = new lib.cta_1();
	this.instance.parent = this;
	this.instance.setTransform(150,511,0.382,0.382,0,0,0,150,510.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).to({regY:511,scaleX:1,scaleY:1,alpha:1},35,cjs.Ease.elasticOut).wait(3));

	// candy
	this.instance_1 = new lib.candy_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(300,300,1,1,0,0,0,80,300);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({x:80},35,cjs.Ease.quartOut).wait(1).to({x:-163},35,cjs.Ease.quartOut).wait(56));

	// text2
	this.instance_2 = new lib.text2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).to({alpha:1},35,cjs.Ease.quartOut).wait(38));

	// text1
	this.instance_3 = new lib.text1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(361,300,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:80},35,cjs.Ease.quartOut).wait(127));

	// logo
	this.instance_4 = new lib.logo_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(80,300,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(162));

	// back
	this.instance_5 = new lib.back_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(80,300,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(162));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,299,582,602);
// library properties:
lib.properties = {
	id: 'EEFB96014AED4486850A76CAECAEBCA8',
	width: 300,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1537905179216", id:"back"},
		{src:"images/candy.png?1537905179216", id:"candy"},
		{src:"images/cta.png?1537905179216", id:"cta"},
		{src:"images/logo.png?1537905179216", id:"logo"},
		{src:"images/text1.png?1537905179216", id:"text1"},
		{src:"images/text2.png?1537905179216", id:"text2"}
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