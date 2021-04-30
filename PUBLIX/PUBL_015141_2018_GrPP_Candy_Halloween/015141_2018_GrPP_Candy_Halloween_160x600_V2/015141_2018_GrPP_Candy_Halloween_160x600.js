(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.candy = function() {
	this.initialize(img.candy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);// helper functions:

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

}).prototype = getMCSymbolPrototype(lib.text2_1, new cjs.Rectangle(0,0,160,600), null);


(lib.text1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1_1, new cjs.Rectangle(0,0,160,600), null);


(lib.rightPaw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9C3A6").s().p("AANCGQgIgEgEgIQgDgIACgJQAMgigOhFQgPhEgbgfQgGgHABgJQABgJAHgGQAGgHAKABQAJABAGAHQAhAoASBRQARBQgQAtQgFAPgQAAg");
	this.shape.setTransform(28,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9C3A6").s().p("AiVAyQgFgHABgJQACgKAHgFQA7gpBKgSQAygMBbgGQAJgBAHAGQAHAGABAKQABAJgHAHQgGAHgJABQhWAFgvAKQhBAQg1AmQgGAEgHAAQgLAAgHgKg");
	this.shape_1.setTransform(16.5,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9C3A6").s().p("ABzAwQgIAAgGgFQgHgGgBgIQgBgEgJgFQgagSg2gDQg4gFg4ANQgJADgIgFQgIgFgDgIQgCgJAFgIQAEgIAJgCQA/gQBBAFQBCAGAkAYQAaAQADAWQABAKgGAHQgFAIgJABg");
	this.shape_2.setTransform(18.1,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9C3A6").s().p("AhDDfQgogOgbgcQglgoAIhkQAIhfAohFQAohEA9gbQA9gbBLARQAJADAFAHQAFAIgCAJQgCAKgIAFQgIAFgJgDQhGgQgzAdQgoAXgbAvQgnBDgEBVQgEBMAWAXQAjAlBCACQA4ADAZgRQAXgQALgoQARg5gjg+QgEgIACgJQADgJAIgFQAIgEAJACQAJADAFAIQAqBNgUBKQgPA5gmAaQgPAKgaAHQgbAGgeAAQgoAAgjgMg");
	this.shape_3.setTransform(16.5,23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9E3D5").s().p("AgBDVQhLgEgpgrQgYgZgBhFQgBhIAahCQAdhOA2glQA/gtBYAVIAADCQAlBEgQBBQgNAyggAWQgcATg2AAIgMAAg");
	this.shape_4.setTransform(16.5,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rightPaw, new cjs.Rectangle(0,0,33.1,47.1), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,160,600), null);


(lib.leftPaw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9C3A6").s().p("AACgDQhGgIg5AjIgYglQBGgtBXALQBYAKA2A6IghAeQgrgvhIgHg");
	this.shape.setTransform(16.1,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E3D5").s().p("AiHABQA+gnBPAJQBQAIAyA1g");
	this.shape_1.setTransform(15.9,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9C3A6").s().p("AiSAlQASgXA1gYQAhgQAkgLQBxgmAoASIgSApQgZgLhhAgQhhAhgUAag");
	this.shape_2.setTransform(17,34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9E3D5").s().p("AgDgUQBpgjAfAOIkKBXQAZggBpgig");
	this.shape_3.setTransform(17.5,34.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9C3A6").s().p("AhADlQgagGgPgLQglgagQg5QgUhKAqhMQAFgIAJgDQAJgDAIAFQAIAEADAJQACAJgEAIQgjA/ARA5QALAnAXAQQAZARA4gCQBCgDAjglQAWgXgEhMQgEhUgnhEQgcgvgngWQgzgehGARQgJACgIgFQgHgFgDgJQgCgJAFgIQAFgIAJgCQBMgSA8AbQA9AbAoBEQAoBFAIBfQAIBkglAoQgbAcgoAPQgjAMgoAAQgeAAgbgHg");
	this.shape_4.setTransform(16.5,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9E3D5").s().p("AhcDCQgggWgNgyQgQhBAlhEIAAjCQBYgVA/AsQA2AmAdBOQAaBCgBBIQgBBFgYAZQgpArhLAEIgMAAQg2AAgcgTg");
	this.shape_5.setTransform(16.5,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.leftPaw, new cjs.Rectangle(0,0,33.1,47.1), null);


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

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,160,600), null);


(lib.catg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282828").s().p("AlfhWQBRgPD7BAQD5A+B6BAg");
	this.shape.setTransform(283.8,246);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282828").s().p("AlJiVQBSAADsBsQDpBqBsBVg");
	this.shape_1.setTransform(256.8,265.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#282828").s().p("AoAijQCAAAFuB1QFrB1CnBdg");
	this.shape_2.setTransform(276.5,257.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#282828").s().p("AAUglQD7hABRAPIq/CvQB6hAD5g+g");
	this.shape_3.setTransform(85.7,246);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#282828").s().p("AAMgpQDshsBSAAIqTErQBthVDohqg");
	this.shape_4.setTransform(112.7,265.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#282828").s().p("AATguQFuh1CAAAIwAFHQCnhdFrh1g");
	this.shape_5.setTransform(93,257.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9C3A6").s().p("AANCGQgIgEgEgIQgDgIACgJQAMgigOhFQgPhEgbgfQgGgHABgJQABgJAHgGQAGgHAKABQAJABAGAHQAhAoASBRQARBQgQAtQgFAPgQAAg");
	this.shape_6.setTransform(210.1,352.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D9C3A6").s().p("AADApQgqgChFgqQgbgQgHgJQgHgJAXAIQAzASBPgEQBKgFBCgVQhMBTg8AAIgFgBg");
	this.shape_7.setTransform(184.6,238.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#282828").s().p("AC7AMQhAglhKgKQhfgOhdAjQhZAhhEBIQAjhhBeg3QBfg4BwAQQBcANBGA5QBFA4AaBRQgvg6g/gkg");
	this.shape_8.setTransform(273.2,114);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#282828").s().p("AjJgfQBGg5BcgNQBwgQBfA4QBeA3AjBiQhEhJhZggQhdgjhfANQhKALhAAkQg/AkgvA6QAahRBFg4g");
	this.shape_9.setTransform(94.7,112.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9C3A6").s().p("AgfAhQgZgQgQgWQgPgXgEgZIAsgIQAGAiAkAZQAnAaAxgKIAJAsQgPADgTAAQgxAAgogcg");
	this.shape_10.setTransform(263.8,431.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E9E3D5").s().p("AgZAaQgugdgHgsICdBcQgQADgPAAQgnAAgigWg");
	this.shape_11.setTransform(264.7,430.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D9C3A6").s().p("AAFBsQgRh0gmhZIApgRQApBgASB4IABAGIgsAHg");
	this.shape_12.setTransform(254.8,436.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E9E3D5").s().p("AgchsQAaA9AQBIQAHAiAIAyg");
	this.shape_13.setTransform(254.8,436.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D9C3A6").s().p("AiPAGIAXgmQAwAcBRgGQA4gFBCgTIANAqQhcAbhGAAQhKAAgzgdg");
	this.shape_14.setTransform(275.5,417.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E9E3D5").s().p("AiGgMIENAAQhZAZhDAAQhDAAgugZg");
	this.shape_15.setTransform(275.8,417.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D9C3A6").s().p("AgpAkQhFgZgZgtIAngWQAYArBRARQBLARAkgOIAQAqQgVAIglAAQg/AAg4gVg");
	this.shape_16.setTransform(279.5,408.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E9E3D5").s().p("AgCAfQhbgWgdgxID1BJQgVAIgdAAQghAAgqgKg");
	this.shape_17.setTransform(280.1,407.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D9C3A6").s().p("AlxAZQATgDBDgEQCqgLBxgMQDLgXCbgoIALAsQidAnjOAYQhtAMixAMIhSAGg");
	this.shape_18.setTransform(179.7,489.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E9E3D5").s().p("AFjgtQjBAwkKAZQjAANg6AFg");
	this.shape_19.setTransform(180.6,489.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D9C3A6").s().p("AleAiQgJgCgGgHQgFgIABgJQABgIAIgGQAHgFAJABQDAAaDmgVQCOgOB6gcQAJgCAIAFQAIAFACAJQACAKgFAIQgFAHgJACQhRAShjANQiYAViOAAQh7AAhpgPg");
	this.shape_20.setTransform(179.3,478.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D9C3A6").s().p("AlPBBQgDgJADgJQAEgIAIgEQCEg4CzgfQCxggCXAIQAJAAAHAHQAGAHgBAJQAAAKgHAGQgHAGgJAAQiTgIirAfQitAdiAA3QgEACgFAAQgOAAgHgNg");
	this.shape_21.setTransform(179.6,466.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D9C3A6").s().p("AlIAtQgHgHAAgJQAAgKAHgGQAGgHAKAAQAIAAAygGQD8gmE6gMQAJgBAHAHQAHAGAAAJQABAKgHAHQgGAGgJABQk4ALj6AmQg2AHgKAAQgKAAgGgGg");
	this.shape_22.setTransform(179.4,452.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D9C3A6").s().p("ABcAxQgcgSg4gRQhAgUgvAAQgKAAgGgGQgHgHAAgJQAAgKAHgGQAGgHAKAAQA2AABHAXQA9ATAhATQAIAFACAJQACAJgFAIQgGALgNAAQgGAAgGgDg");
	this.shape_23.setTransform(205.4,433.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E9E3D5").s().p("AhngcQAxAABEAVQA6ARAgATg");
	this.shape_24.setTransform(205.4,433.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D9C3A6").s().p("AE7BJQgmgXjZgnQjxgsiRADQgJABgHgHQgGgGgBgKQAAgJAHgHQAGgGAJgBQCPgDD2AsQDlAoAvAcQAJAFACAJQACAJgFAIQgGALgNAAQgGAAgGgDg");
	this.shape_25.setTransform(178,444.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E9E3D5").s().p("AlGg0QCPgDD0AsQDfAnArAZg");
	this.shape_26.setTransform(178,444.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D9C3A6").s().p("AmlBaQgJAAgGgHQgHgGAAgKQAAgJAHgGQAHgHAJAAIAAAAQDbAEC3gVQCKgQBtgcQBPgVA6gaQAdgNAOgJQAHgGAJACQAKABAFAIQAFAIgBAJQgCAJgHAFQg4Amh6AiQjzBEltAAg");
	this.shape_27.setTransform(183.5,427.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E9E3D5").s().p("AmkBDINKiGQg0AliEAiQjuBAldAAIhHgBg");
	this.shape_28.setTransform(183.6,427.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D9C3A6").s().p("ABKBLQhHgSg3gvQglgfgKgVQgEgIAEgJQADgJAJgEQAIgEAJAEQAJADADAJQAKAQAgAaQAuAkA3ANQAJADAFAHQAFAIgDAJQgCAIgGAFQgGAEgIAAg");
	this.shape_29.setTransform(198.3,529.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E9E3D5").s().p("AgjgFQgkgdgHgRICdBnQg/gPgzgqg");
	this.shape_30.setTransform(198.3,529.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D9C3A6").s().p("AgYAmQhOgWgXgZQgLgNACgPQABgJAHgGQAIgFAJABQAIABAFAFQAFAGABAHQAPAPA+ARQBDASA7AAQAJAAAHAGQAGAHAAAJQAAAKgGAGQgHAHgJAAQg/AAhKgUg");
	this.shape_31.setTransform(204.5,517.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E9E3D5").s().p("AgkAKQhPgYADgUIDhBFQhHAAhOgZg");
	this.shape_32.setTransform(204.5,517.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D9C3A6").s().p("ABbBaQghhOhcgkQg7gZhJgEQgJAAgGgHQgGgGAAgJQgBgIAGgHQAGgHAIgBIAsgDQAxgDAuADQCPAKBDA+QAHAHAAAJQABAKgHAFQgGAHgJAAQgKABgHgHQgrgohcgNQBTAsAjBOQADAJgDAIQgEAJgIAEQgEACgFAAQgOAAgHgOg");
	this.shape_33.setTransform(235.2,499.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E9E3D5").s().p("AgQgqQhCgdhTgEIAmgEQAvgCAsACQCMAIA+A7Ig2BdQgkhShcgpg");
	this.shape_34.setTransform(235.2,499.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D9C3A6").s().p("ACiBBQgig2hlgZQhjgahoASQgKABgHgFQgIgGgBgJQgCgJAGgIQAFgHAJgCQBwgTBtAcQB3AeAsBFQAFAIgCAJQgCAJgIAFQgFAEgHAAQgMAAgHgLg");
	this.shape_35.setTransform(235.6,489.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E9E3D5").s().p("Ai0gtQBrgSBoAaQBuAcAoA+g");
	this.shape_36.setTransform(235.6,489.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D9C3A6").s().p("AjkA3QgIgGgBgJQgBgKAGgHQAfglBKgWQBBgUBKgCQBLgCA6ASQA5ARAeAgQAHAHgBAJQAAAKgHAGQgHAGgJAAQgKgBgGgHQgXgZgxgNQgygOhAACQhFACg7ARQg8ATgWAbQgGAIgLAAQgJAAgFgFg");
	this.shape_37.setTransform(237.6,476.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E9E3D5").s().p("AiDgLQA4gUBGgEQCggKA8BDImuAPQAZgdA7gTg");
	this.shape_38.setTransform(237.6,476.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D9C3A6").s().p("AgcDaQgDgIADgJQADgIAIgFQAXgKAAggQgBgZgRhPQgRhEgIgsQgMhIAAhBQAAgKAGgHQAHgGAJgBQAKAAAGAHQAHAHAAAJQAAA+ALBFQAHAoAQBFQAWBYgCAiQgCA3gvAVIgIACQgPgBgGgNg");
	this.shape_39.setTransform(214.7,476.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D9C3A6").s().p("ABMB2QAIg3gMgrQgNgqgggbQgbgWgkgGQgkgFgkANIgPgrQAvgRAwAIQAvAHAlAeQApAiARA2QARA2gLBDg");
	this.shape_40.setTransform(225.5,506.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E9E3D5").s().p("AhshkQBZggBEA5QBMA/gUB8g");
	this.shape_41.setTransform(224.8,507.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D9C3A6").s().p("AjoBlQgJgCgFgIQgGgIACgJQAPhJBXgyQBRgvBdgDQBXgDA7AlQA8AmATBEQACAJgFAIQgEAIgJACQgJADgIgFQgIgEgDgJQgShChBgaQgqgRg2ACQhUADhGApQhFAogLA1QgBAIgHAFQgGAFgIAAg");
	this.shape_42.setTransform(236.8,461.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D9C3A6").s().p("ABKCaQgJAAgGgHQgHgGAAgJIgBgXQAAhDgHglQgKg9gdgcQgcgagxADQgJAAgHgGQgGgGgCgKQAAgJAGgHQAHgHAJAAQBEgEApAnQAmAlAPBIQAHAnABBNIABAWQAAAKgHAHQgGAGgKABg");
	this.shape_43.setTransform(209.6,517.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E9E3D5").s().p("AhJiCQBlgFAeBmQANAnADB9g");
	this.shape_44.setTransform(209.6,517.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D9C3A6").s().p("ACGCBQgJgCgFgHQgGgIABgJQAHgwgPgnQgQgnglgbQgogcgxgFQgzgEgqAVQgJAEgJgCQgJgDgEgJQgEgIADgJQADgJAIgEQA1gbBAAGQA+AFAyAkQAvAiAVAzQAVAygJA9QgBAIgHAFQgGAGgIAAg");
	this.shape_45.setTransform(213.9,513.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E9E3D5").s().p("AiLhVQAsgXA1ADQAzADAsAaQBmA8gSB7g");
	this.shape_46.setTransform(213.9,513.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D9C3A6").s().p("AhcBHQgGgFgCgIQgCgJAEgIQAFgIAJgCQA3gOAugkQAhgZAJgRQAEgJAJgDQAIgDAJAEQAIAEADAJQAEAIgEAJQgKAUglAfQg3AwhHASIgFAAQgIAAgGgEg");
	this.shape_47.setTransform(161.8,529.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E9E3D5").s().p("ABPgzQgHAQgkAeQgzAqg/APg");
	this.shape_48.setTransform(161.8,529.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D9C3A6").s().p("AiAAzQgGgHAAgJQAAgJAGgHQAHgGAJAAQA7AABDgSQA+gRAPgPQABgHAFgGQAFgFAIgBQAJgBAHAFQAIAGABAJQADAPgMANQgXAZhOAVQhJAVhAAAQgJAAgHgHg");
	this.shape_49.setTransform(155.5,517.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E9E3D5").s().p("ABxgiQADAUhOAYQhPAZhHAAg");
	this.shape_50.setTransform(155.5,517.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D9C3A6").s().p("Ah4BmQgJgEgDgJQgDgJADgIQAihOBTgtQhbAPgsAnQgGAHgKgBQgJAAgGgHQgHgGABgJQAAgJAHgHQBDg+CPgKQBJgFBCAIQAIABAGAHQAGAHgBAIQAAAJgGAGQgGAGgJABQhJAFg7AYQhcAkghBOQgHAOgOAAIgJgCg");
	this.shape_51.setTransform(124.8,499.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E9E3D5").s().p("AilgMQA+g6CMgJQBHgEA6AHQhUAFhBAdQhcApgkBSg");
	this.shape_52.setTransform(124.8,499.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D9C3A6").s().p("AjABJQgIgFgCgKQgCgJAFgIQAshFB3geQBtgcBwAUQAJABAFAIQAGAHgCAKQgBAJgIAFQgIAFgJgBQhogShjAaQhlAagiA2QgHAKgMAAQgHAAgFgDg");
	this.shape_53.setTransform(124.4,488.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E9E3D5").s().p("AgeglQBogaBrASIlpBiQAog+Bugcg");
	this.shape_54.setTransform(124.4,488.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D9C3A6").s().p("AC5A9QgaghhFgZQhFgXhFgCQgvgBgkAKQgjALgTAUQgGAHgKABQgJAAgHgGQgHgHAAgJQgBgIAGgHQAeghA1gOQAogLAyACQBQACBMAdQBNAcAhAoQAGAHgBAKQgBAJgHAGQgGAFgIAAQgLAAgHgIg");
	this.shape_55.setTransform(121.2,477.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E9E3D5").s().p("AjKADQA8hBCVAWQCOAWA2BAg");
	this.shape_56.setTransform(121.2,477.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D9C3A6").s().p("AAADmQgvgWgCg2QgBgjAVhXQAQhFAHgnQALhGAAg+QAAgKAHgGQAGgHAKABQAJgBAHAHQAGAGAAAKQAABCgMBHQgHAogSBJQgRBOgBAaQAAAgAWAKQAJAEADAJQAEAJgEAJQgHANgOgBQgFAAgDgBg");
	this.shape_57.setTransform(145.3,476.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D9C3A6").s().p("AhxADQARg1AqgiQAkgeAvgHQAxgIAuARIgPAqQgjgMglAFQgkAGgbAWQggAagMAqQgNAsAJA3IgtAHQgKhEAQg2g");
	this.shape_58.setTransform(134.5,506.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E9E3D5").s().p("AgwhLQBEg5BZAgIjVDUQgUh8BMg/g");
	this.shape_59.setTransform(135.2,507.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D9C3A6").s().p("ADXBgQgHgFgBgIQgLg2hFgoQhGgphUgCQg2gCgqARQhBAagSBBQgCAJgJAFQgIAFgJgDQgJgCgEgIQgFgIACgJQAThFA8glQA7glBXADQBdADBRAvQBXAyAPBJQACAJgGAIQgFAHgJACIgEABQgIAAgGgFg");
	this.shape_60.setTransform(123.3,460.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D9C3A6").s().p("AoDA/QgGgFgCgIQgCgJAFgIQAFgIAJgCQD2g7C1gSQFJgjECBCQAJADAEAIQAFAIgCAIQgCAJgJAFQgIAFgJgDQj6g/lCAiQizARjxA7IgFAAQgIAAgGgEg");
	this.shape_61.setTransform(184,421.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D9C3A6").s().p("AinBFQgIgEgDgJQgCgJAEgIQA4hjBegKQA4gGA6AbQAzAXAjAnQAGAHgBAJQgBAKgHAGQgHAGgJgBQgJgBgGgHQgcgfgqgTQgvgXgsAFQhHAIgsBOQgHAMgNAAQgFAAgGgDg");
	this.shape_62.setTransform(238.1,425.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D9C3A6").s().p("ACJA9QgrhPhIgHQgsgFgvAWQgqATgcAgQgGAHgJABQgKAAgHgGQgHgGAAgJQgBgKAGgHQAjgnAzgXQA6gbA4AGQBfAKA2BjQAFAIgDAJQgCAJgIAFQgGACgFAAQgNAAgHgLg");
	this.shape_63.setTransform(122,425.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D9C3A6").s().p("ADzDsQgKgBgGgHQgGgHABgJQAFhLgThMIgBgBQh8iQhuAQQhKALhBBQQgUAZgRAeIgNAZQgDAGgHAEQgGAEgHgBQgHgBgGgFQgFgFgCgHQgUheAehVQAphzB4gfQBygdBeBOQBJA9ApBuQApBtgIBxQgBAJgHAGQgGAGgJAAgAhNi3QhRAVgkBDQgaAxgBBDQAigwApghQA1grA7gJQBlgPBoBYQgihCgugmQg4gug/AAQgYAAgZAGg");
	this.shape_64.setTransform(235.5,449.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E9E3D5").s().p("ADfAtQi0jRieBsQgxAigqA9IgfA2QgOg9ANhDQAZiJCCghQCSgmBkCUQAsA/AVBTQAVBSgFBQg");
	this.shape_65.setTransform(235.5,449.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D9C3A6").s().p("AjyDfQgJgBgGgHQgGgHABgKQAEg0AThFIgFgEQgHgHAAgJQAAgJAHgHIAYgXQA1iOBUg7QBMg3BbAXQB4AfApBzQAeBVgUBeQgCAIgGAFQgFAEgIABQgIAAgGgEQgGgFgDgHQgMgkgYgmQgyhMhDgQQhngZiLB9QgbBMgGBQQgBAJgHAGQgGAGgJAAgADYATQgDhAgbguQglg9hMgTQhHgSg7AqQgsAggpBHQBYg7BNAAQAWAAAYAFQBYAWA7BfIAAAAg");
	this.shape_66.setTransform(124.3,448.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E9E3D5").s().p("AjkBCIAYgYQgaBHgIBOgACBgjQiJhmjECzQAUg0AegyQBgifCIAjQCCAhAZCJQANBDgNA9QgfhghJg1g");
	this.shape_67.setTransform(124.3,447.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D9C3A6").s().p("AhJCaQgKAAgGgHQgHgHAAgJIABgWQABhMAHgpQAOhIAngkQApgnBEADQAJABAGAGQAHAHAAAKQgBAJgHAGQgHAHgKgBQgxgCgbAaQgdAbgKA+QgHAkAABDIgBAXQAAAJgHAGQgGAHgJAAg");
	this.shape_68.setTransform(150.5,517.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E9E3D5").s().p("Ag5ghQAehmBlAFIiTEFQAEh9AMgng");
	this.shape_69.setTransform(150.5,517.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D9C3A6").s().p("AiXB8QgGgGgCgIQgIg8AVgzQAUgzAvgiQAygkA/gFQA/gGA1AcQAJAEACAJQADAJgEAIQgEAIgJADQgJADgIgEQgrgWgyAFQgyAEgoAdQgkAagQAnQgQAnAHAwQABAKgFAHQgGAIgJABIgDAAQgJAAgGgFg");
	this.shape_70.setTransform(146.1,513.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E9E3D5").s().p("Ag0hMQAsgaAzgDQA1gDAsAXIkUDAQgSh7Bmg8g");
	this.shape_71.setTransform(146.1,513.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D9C3A6").s().p("Am6A4QgHgEgCgHQgDgJAFgIQAEgJAJgDQCdgwD1gUQEYgWC9ApQAJACAFAHQAGAIgDAJQgCAIgHAFQgIAGgJgCQi4gnkQAWQjvASiaAwIgGABQgHAAgGgEg");
	this.shape_72.setTransform(183,395.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E9E3D5").s().p("AghgdQEUgWC7AoItbAxQCagvDygUg");
	this.shape_73.setTransform(183,395.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D9C3A6").s().p("ArMBTQgGgFgCgHQgDgJAFgIQAEgJAJgCQFvhpGYgUQHVgXC1B5QAIAFACAJQACAJgGAIQgFAIgJACQgJACgIgGQirhynOAZQmTAVlfBlIgHABQgHAAgGgEg");
	this.shape_74.setTransform(179.7,410);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E9E3D5").s().p("ABHg8QHLgWCuB0I1/AeQFvhpGXgTg");
	this.shape_75.setTransform(179.7,410);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D9C3A6").s().p("AHDBvQg+gvlThDQlShDiwAAQgKAAgGgHQgHgGAAgKQAAgJAHgGQAGgHAKAAQBQAACOATQCNASCcAeQCAAaBjAZQCaApAqAfQAIAGABAKQABAIgGAIQgGAJgLAAQgHAAgHgFg");
	this.shape_76.setTransform(200.4,392.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D9C3A6").s().p("AmlBfQgEgJADgJQADgJAIgEQAEgCAIgBIApgGQCbgUBGgRQAdgHBWgdQCNgyBMgSQCCgfBNARQAJACAFAIQAFAHgCAKQgCAJgHAFQgIAFgJgCQhFgPh8AeQhHARiIAvQhaAfgeAIQhGARifAVIgxAHQgNAAgHgMg");
	this.shape_77.setTransform(152.9,395.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E9E3D5").s().p("AgTAHICMgwQC7g6BdAVImkBVQhNAaggAHQhBAQhtAPIhjANg");
	this.shape_78.setTransform(152.9,395.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D9C3A6").s().p("AgnATIgFgsQAggDAfAGQAQAEAKAEIgSApQgcgNgmAFg");
	this.shape_79.setTransform(182.2,375);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E9E3D5").s().p("AgngDQAdgDAbAGQAOACAJADg");
	this.shape_80.setTransform(181.9,375.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D9C3A6").s().p("Ag3gCQALgBAdgNQAcgOAMgLIAfAhQgRAPgkARQgjARgUABg");
	this.shape_81.setTransform(182.6,358.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E9E3D5").s().p("AAvgVQgOANghAOQgfAQgPAAg");
	this.shape_82.setTransform(182,358.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D9C3A6").s().p("AAwBDQgIgEgEgJQgDgJAEgIQAFgOgPgPQgOgQgWgJQgZgKgTAGQgJACgIgEQgIgFgDgJQgCgJAEgIQAFgIAJgCQAhgKAlAPQAiANAWAZQAQATAEATQAFAUgIASQgGAOgPAAIgJgCg");
	this.shape_83.setTransform(143.7,324.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E9E3D5").s().p("Ag8gqQArgMAsAhQAtAhgPAjg");
	this.shape_84.setTransform(143.7,324.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D9C3A6").s().p("AkaA8QgHgFgCgHQgCgJAEgIQAEgJAJgCQCFgoCJgXQC1gfBjASQAJABAGAIQAFAIgCAJQgBAJgIAFQgIAGgJgCQhWgPihAZQiNAWiMArIgHABQgIAAgFgEg");
	this.shape_85.setTransform(157.8,318.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E9E3D5").s().p("AALgXQCngbBcAQIobBLQCLgqCNgWg");
	this.shape_86.setTransform(157.8,318.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D9C3A6").s().p("Ag2A7Qh9glhMhHQgHgHAAgJQAAgJAGgHQAHgGAJgBQAJAAAHAGQBeBYCrAcQA/ALA6gBQAzgBASgJQAIgEAJADQAJADAEAIQAEAJgDAIQgDAJgIAEQgcAPhKAAQhnAAhkgeg");
	this.shape_87.setTransform(188.7,310.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E9E3D5").s().p("AAkA5QixgehjhcIHhB3QgWALg3ABIgSAAQg1AAg5gJg");
	this.shape_88.setTransform(188.7,310.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D9C3A6").s().p("AgyBsQgJAAgGgGQgHgGAAgJQgDgrAQgxQASg6AggaQAegZAlALQAJACAEAJQAFAIgDAJQgCAJgJAEQgIAFgJgDQgOgEgNAKQgUASgOArQgOAqACAjQABAJgGAHQgGAHgJABg");
	this.shape_89.setTransform(215.1,322.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D9C3A6").s().p("ABUA8IgEgHQgfgrgbgQQgvgdhGAUQgJADgIgFQgIgEgDgJQgCgJAEgIQAFgJAJgCQBZgZBAAoQAjAVAkAyIAEAGQAFAHgCAJQgBAKgIAFQgGAEgHAAQgLAAgHgJg");
	this.shape_90.setTransform(133.8,333);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D9C3A6").s().p("AiVAyQgFgHABgJQACgKAHgFQA7gpBKgSQAygMBbgGQAJgBAHAGQAHAGABAKQABAJgHAHQgGAHgJABQhWAFgvAKQhBAQg1AmQgGAEgHAAQgLAAgHgKg");
	this.shape_91.setTransform(199,363);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D9C3A6").s().p("ABzAwQgIAAgGgFQgHgGgBgIQgBgEgJgFQgagSg2gDQg4gFg4ANQgJADgIgFQgIgFgDgIQgCgJAFgIQAEgIAJgCQA/gQBBAFQBCAGAkAYQAaAQADAWQABAKgGAHQgFAIgJABg");
	this.shape_92.setTransform(200.6,352.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D9C3A6").s().p("Ah5A0QgIgFgDgJQgDgIAEgJQAVglBZgYQBagZA0AYQAIADAEAJQADAIgEAJQgEAJgIADQgJACgJgDQgggOhJAQQhLARgNAYQgGAMgOAAQgFAAgFgCg");
	this.shape_93.setTransform(225.2,333.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D9C3A6").s().p("AhXAkQgHgHABgJQABgKAHgGQBUhLBTAuQAIAEADAJQACAJgEAHQgFAJgJACQgIADgJgFQghgRgfAJQgXAIgdAZQgFAFgKAAQgJAAgHgHg");
	this.shape_94.setTransform(235.1,339.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D9C3A6").s().p("ABiDSQgIgDgEgJQgDgJAEgIQAfhDgGhIQgGhIgpg3QgjgvgygUQgzgVg8AJQgJABgIgGQgHgFgBgKQgCgJAGgHQAGgIAJgBQBIgKA/AaQA+AZApA4QAwBBAIBUQAHBVgkBNQgGAOgPAAQgEAAgFgDg");
	this.shape_95.setTransform(225.7,360);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D9C3A6").s().p("AABDJQgGgHABgJQABgJAGgHQAjgfAJg4QAIgvgNgyQgOg5gggpQghgogogKQgJgCgFgIQgFgIACgJQADgJAIgFQAIgFAJACQA0ANApAxQApAxASBGQARBFgOA+QgPA+gqAkQgGAGgJAAQgKAAgGgIg");
	this.shape_96.setTransform(218,359.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E9E3D5").s().p("AhIi5QAwALAkAuQAjAsAQA9QAQA7gLA4QgLA7goAjg");
	this.shape_97.setTransform(218,359.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D9C3A6").s().p("AiAAXQgIgFgCgKQgCgIAGgIQAFgHAJgCQAwgJBYABQBUABAYAIQAIADAFAIQAEAIgDAIQgGAQgQAAQgEAAgDgCQgQgFhMgBQhTgCgtAJIgFABQgHAAgFgEg");
	this.shape_98.setTransform(181.4,344.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D9C3A6").s().p("Al2BeQgIgFgDgJQgDgIAEgJQAthXAZggQAOgSAMgDQAsgKDegGQEHgJA+AeQAFACAEAFQA1BEAQAhQAJATgDALQgEANgLAEQgIAEgJgDQgJgEgDgIQgDgHABgHQgKgagzhBQg6gXjpAHQixAFhXALQgTAUgyBhQgGAMgOAAQgGAAgEgCg");
	this.shape_99.setTransform(179.5,334.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D9C3A6").s().p("AACgDQhGgIg5AjIgYglQBGgtBXALQBYAKA2A6IghAeQgrgvhIgHg");
	this.shape_100.setTransform(163.2,354.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#E9E3D5").s().p("AiHABQA+gnBPAJQBQAIAyA1g");
	this.shape_101.setTransform(163,354.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D9C3A6").s().p("AiSAlQASgXA1gYQAhgQAkgLQBxgmAoASIgSApQgZgLhhAgQhhAhgUAag");
	this.shape_102.setTransform(164.2,372.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E9E3D5").s().p("AgDgUQBpgjAfAOIkKBXQAZggBpgig");
	this.shape_103.setTransform(164.6,372.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D9C3A6").s().p("AAsBwQgUghAAg8QAAgpAKgxQg+AJgTAHQgKAIgKgDQgKgCgFgIQgFgIADgJQADgNATgHQAdgLBdgNQANgBAIAIQAHAJgDAMQgLArgDAtQgGBBASAcQAFAIgCAJQgDAJgIAFQgFADgGAAQgNAAgHgKg");
	this.shape_104.setTransform(144,350.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D9C3A6").s().p("AADC1Qgyh2AChsQAChtA2gkQAIgFAJABQAIACAGAIQAFAIgCAJQgCAJgHAFQgjAYgBBXQgCBhAuBsQAEAJgEAJQgDAIgJAEQgEACgFAAQgPAAgFgOg");
	this.shape_105.setTransform(137.7,360.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D9C3A6").s().p("Ag4DDQhFiAAshxQAbhDA7gyQgGgGgBgJQgBgJAFgHQAGgHAJgBQAugFAOABQASADADAQQAEAUgXAIQgTAHghAdQgvArgUA0QgjBdA6BtQAFAIgDAJQgDAJgIAEQgEADgHAAQgNAAgGgMg");
	this.shape_106.setTransform(128.9,361.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D9C3A6").s().p("AhuDRQgGgFgCgIQgNg0ARhDQARhCAngwQA4hHBPgJQgIgigRgLQgPgKgdALQgIADgIgDQgIgEgEgJQgDgIAEgJQAEgJAIgDQAxgTAjAXQAcASANApQAHAZAAATQABAJgHAHQgHAIgKgBQhKgBgzBBQggAogPA4QgPA4AKArQADAJgFAIQgFAIgJACIgGAAQgHAAgGgEg");
	this.shape_107.setTransform(120.5,353.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D9C3A6").s().p("AhDDfQgogOgbgcQglgoAIhkQAIhfAohFQAohEA9gbQA9gbBLARQAJADAFAHQAFAIgCAJQgCAKgIAFQgIAFgJgDQhGgQgzAdQgoAXgbAvQgnBDgEBVQgEBMAWAXQAjAlBCACQA4ADAZgRQAXgQALgoQARg5gjg+QgEgIACgJQADgJAIgFQAIgEAJACQAJADAFAIQAqBNgUBKQgPA5gmAaQgPAKgaAHQgbAGgeAAQgoAAgjgMg");
	this.shape_108.setTransform(199,361.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E9E3D5").s().p("AgBDVQhLgEgpgrQgYgZgBhFQgBhIAahCQAdhOA2glQA/gtBYAVIAADCQAlBEgQBBQgNAyggAWQgcATg2AAIgMAAg");
	this.shape_109.setTransform(199,361.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D9C3A6").s().p("AhADlQgagGgPgLQglgagQg5QgUhKAqhMQAFgIAJgDQAJgDAIAFQAIAEADAJQACAJgEAIQgjA/ARA5QALAnAXAQQAZARA4gCQBCgDAjglQAWgXgEhMQgEhUgnhEQgcgvgngWQgzgehGARQgJACgIgFQgHgFgDgJQgCgJAFgIQAFgIAJgCQBMgSA8AbQA9AbAoBEQAoBFAIBfQAIBkglAoQgbAcgoAPQgjAMgoAAQgeAAgbgHg");
	this.shape_110.setTransform(163.7,361.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#E9E3D5").s().p("AhcDCQgggWgNgyQgQhBAlhEIAAjCQBYgVA/AsQA2AmAdBOQAaBCgBBIQgBBFgYAZQgpArhLAEIgMAAQg2AAgcgTg");
	this.shape_111.setTransform(163.7,361.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D9C3A6").s().p("AgUBIQg9gQg0gnQgugigXgoIAngXQATAhAnAdQAtAhA0ANQBgAZBcg2IAXAmQhKAshPAAQgjAAgjgJg");
	this.shape_112.setTransform(225.7,375.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E9E3D5").s().p("AgvAuQhggkgshJIF3BWQhFAphHAAQgwAAgvgSg");
	this.shape_113.setTransform(226.1,374.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D9C3A6").s().p("Ai9AyIANgrQCIApBug1QA4gbAdglIAjAcQgYAfgqAaQhUA1hlABQg/gBhBgTg");
	this.shape_114.setTransform(136.6,376.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#E9E3D5").s().p("AixAgIFjhSQgeAng8AdQhEAhhMAAQg6AAg/gTg");
	this.shape_115.setTransform(136,375.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D9C3A6").s().p("AgkAhQhZgShHgYIAPgrQBdAgBpASQByARA5gMIAJAsQgYAGgmAAQhIAAhjgUg");
	this.shape_116.setTransform(281.3,355);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E9E3D5").s().p("AAHATQhpgShcgfIF9A4QgYAFgiAAQg0AAhKgMg");
	this.shape_117.setTransform(281.4,355);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#D9C3A6").s().p("AifBkQAYhHB7hHQBag1BGgTIAMAsQgXAGgnARQgtAUgpAWQhtA+gTA6g");
	this.shape_118.setTransform(276.9,342.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#E9E3D5").s().p("AgGggQBWgxBCgSIkjDHQAVhBB2hDg");
	this.shape_119.setTransform(277.7,342.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#D9C3A6").s().p("AiTAZQAygzBngVQBlgUApAcIgaAlQgegUhYAWQhWAWggAig");
	this.shape_120.setTransform(276.3,328.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#E9E3D5").s().p("AADgaQBfgWAkAZIkLA8QAqgpBegWg");
	this.shape_121.setTransform(276.5,329.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D9C3A6").s().p("Ay/EAQAigTD4hMQEqhcFFhUQO5j5I7geIADAsQo4AfuxD1QlEBVkmBaQj3BMghASg");
	this.shape_122.setTransform(139.9,166.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D9C3A6").s().p("AhTApQhAgQhuglIgogOIAOgrIAoAOQChA3BdAPQCqAdBdg4IAYAlQhKAthtAAQhWAAhwgdg");
	this.shape_123.setTransform(181.2,299.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#E9E3D5").s().p("AgOAiQhIgOjJhDII/A2QhDAphnAAQg9AAhHgOg");
	this.shape_124.setTransform(180.9,299.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D9C3A6").s().p("AlnATIAFgsQC2AWDAgDQDAgDCLgcIAJArQiiAgjiAAQiqAAihgTg");
	this.shape_125.setTransform(188.2,287);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#E9E3D5").s().p("AlkgDILIgMQiFAai6AEIhEABQilAAiggTg");
	this.shape_126.setTransform(188.2,287);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D9C3A6").s().p("AgrA7QjWgSjZggQipgXhkgVIAJgsQEnA7GWAjQIaAvDkg9IALAsQiDAjjvAAQi2AAjrgVg");
	this.shape_127.setTransform(202.7,266.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#E9E3D5").s().p("AgoAlQmUgkkmg6IXFBQQiDAjjmAAQizAAjvgVg");
	this.shape_128.setTransform(202.6,266.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D9C3A6").s().p("A0BDzIAEgtQBgAHElgTQFZgWFagsQGkg2FThMQG8hlD/iEIAVAoQm8DmuuB/QlQAtlfAZQkVAUigAAQgjAAgSgBg");
	this.shape_129.setTransform(207.7,239.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#E9E3D5").s().p("Az6DdMAn1gG7QnKDtvvCAQlgAtlcAWQjUANhsAAQgnAAgZgCg");
	this.shape_130.setTransform(207.3,239.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#D9C3A6").s().p("Ahrg6QhSgXhTgOIhEgJIAEgtQAgADAsAHQBWAPBUAXQEJBLCmCNIgdAjQifiIkEhIg");
	this.shape_131.setTransform(265.6,35.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#E9E3D5").s().p("AlMiBIBEAJQBUAOBTAXQEKBKCjCLg");
	this.shape_132.setTransform(265,35.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#D9C3A6").s().p("AgegKQkqggimgFIABgtQASAAB4AIQChALCQAPQHFAwBcBCIgaAlQhPg6mkgtg");
	this.shape_133.setTransform(264.2,64.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#E9E3D5").s().p("AnnhIQCfAFEkAeQG2AvBWA+g");
	this.shape_134.setTransform(263.6,64.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#D9C3A6").s().p("AmZDyQBBh5E5i/QB+hNByg3QBzg3AwgFQAZgEANAPIgjAdIAGAFQgWgDhgArQhvAziJBSQiXBZhmBSQhmBSgdA2g");
	this.shape_135.setTransform(97.2,44.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E9E3D5").s().p("AAWhSQCKhQBsgwQBugwANAQIsOHpQBEh+FZjLg");
	this.shape_136.setTransform(97.4,45);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#D9C3A6").s().p("AntA/IHDhlQG6haBeAeIgNAqQhLgXlsBGQkCAxkKBCg");
	this.shape_137.setTransform(106.1,63.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#E9E3D5").s().p("Ag1gNQHChcBbAcIvPCig");
	this.shape_138.setTransform(106,63.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#D9C3A6").s().p("A1pIbQA9kICVj3QDElEFMkLIALgJIANAHQCeBOCCDOQAxBMAkBWQAlBUASBNQB9g7CLAAQCEAAB2A0QAqinBqikQB+jCCYhLIANgHIALAJQGZFIDJGdIAPAfIhVADQkQANnnAvQnvAxkkAmQmbA1lMBHImdBagAxlAgQiQDphAD5IFYhLQFNhHGcg2QEjgmHzgxQHngvESgNIAQAAQjCl8l5kyQiRBPh2DAQhkCkghCcIgGAdIgagOQh5g8iGAAQiPAAh+BEIgbAOIgFgeQgojJiDi0QhwiYhzhAQk0D6i7Esg");
	this.shape_139.setTransform(178.7,57.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E9E3D5").s().p("AyDArQDDlDFKkIQCZBMB+DIQBuCvAhCpQCDhHCUAAQCNABB9A+QAjioBtitQB9jECYhLQGUFFDHGYIgzACQkbANncAvQnmAwkbAkQmoA3lUBIIl6BTQA7kCCSj0g");
	this.shape_140.setTransform(178.5,57.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#D9C3A6").s().p("A0ZJFQiVi/h0juQgkhLgdhGIgWg4IgHgVIAVgIIE+hrQE7hqBKgVQKci/I+g8QJAg7LQAxIARACIAEAPQAnCgADCMIAAAbIgagEQkigpmsA2QmrA3lvB9Qk2BpmHCvQmJCwk2CrIgRAJgAEwoFQo4A7qUC9QhwAho6DBQAnBnA+B6QBkDDB7ChQE3irGEitQGFitEyhoQFrh8Gog3QGng4EpAlQgFhygfiGQk9gVkgAAQlnAAk7Ahg");
	this.shape_141.setTransform(166.5,164);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#E9E3D5").s().p("A4RCPQglhKgbhFIgWg1IE1hoQFDhtBLgVQKajAJBg7QI8g6LLAxQAnCdADCKQktgrm4A6QmoA4lmB6Qk9BrmQC0QmDCukwCoQiUi/hyjsg");
	this.shape_142.setTransform(166.8,163.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#D9C3A6").s().p("AhWFuQg/gNgYgSIgHgFIgCgHQgoiIgJhVQgLhhAXhIQAtiNDniQIArgaIgJAxIgCAjQgBAuAHA5QAWC3BaDiIADAFQAaBAAAAcIAAAMIgRAMQg3Aoh1AAQhDAAhCgNgAizgsQgfBtBFDtQAvAYBrAHQB8AHA1gjQgEgWgSgrIgCgFQhJi1geibQgVhrABhSQi8B8giB6g");
	this.shape_143.setTransform(282.7,336.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#E9E3D5").s().p("AAFFXQh9gIgpgeQgniGgJhTQgLhdAXhFQAYhIBAhAQA+g+BzhIIgCAjQgCAuAHA6QAVC6BeDqQAbA/AAAaIgHAFQgxAkhmAAQgXAAgbgCg");
	this.shape_144.setTransform(282.8,338.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#D9C3A6").s().p("Anad9IgcgJQkzhbikiyQh8iHghiwQhDjODdreIAGgSIASACQA5AGA8gJQAlgGBGgSQA9gQAegGQA2gKAxgBQAQgBAQgJQgygCg8AIQgjAFhFAOQhHAPglAFQg9AIgzgFIgcgDIAKgfQgPgHgTgNQhIgygFhbQgHhsBViQQBUiRCViHIAEgEQAmgkARgRQASgTANgTIAJgOIARAGQAlANCFgJQg9gThTgeIgVgHIAHgVQALgggFgUQkXgnjrhmQjphligiWIghgfIAtgIQaMkdNNlFQEKhnCWheQBLgvAXgcIApARQgyCNhdCqQi4FSjvDYQioCwkMBzQkMB0lBAiQgIBbCBCGIACADQCSCFBVCJQBdCUgHBtQgGBYhFAwQgSAMgOAHQBMD2AtC+QBtiSAMicIACglIAgAUQA7AlBWAGQBSAGA1gXIAxgVIgTAxQgwB8hQBsQhRBshfBEQg5Aog6AhQAsD9gjBsQghCvh8CIQikCykyBbIgcAJIgMACQgIAAgJgEQgNgIgFgOQgzirA2hhQAohKCAg7IoiAAQB6A4AqBHQA7Bkg0CuQgFAOgNAIQgIAEgJAAQgGAAgGgCgAgLWnQAMAAAKAIQAKAJADANQACANgGALQgGALgMAFQiJA7gnA6Qg1BQAtCeIAUgHQDchCCRhxQC/iUApjbIABgEQAihkgvkAIgDgQIAOgIQA8ghBBgtQBQg5BIhbQBIhcAuhnQg4ALhAgGQhEgHg3gZQgXCsiFCcIgdAjIgKgsQgxjThUkQIAAgBQgEgMAEgMQAEgLALgHIAEgDQAPgHARgLQAzgkAFhCQAGhehTiFQhTiHiQiCIgEgFQhghlgbhRQgOgtAHgvIAEgWIARgCQE+ggEKhwQEKhxClitIABgBQC7ipCbj4QBoimBLiyQijBylXCAQtLE64+ETQCdCHDeBbQDfBbEGAjIAbAEIgHAWIAAACQAIAbgHAgQCgA6A9AJQASADAEAPIAEANIgKAKQgPAPh/AHQhrAHgvgKQgXAdg6A2IgEAEQiNB/hSCKQhTCIAHBhQAEBGA2AlQANAJAPAIIAFACQASAJAEAUQAoABAygIQAegEA+gNQBQgRAogFQBGgIA8AGQATACAKALQAIAJAAAMQgBAXggAUQgfAUgfABQguABgyAKQgfAGg5AOQhCASgmAGQg9AKg4gEQh2GMghDvQgYC2AaBQIABAEQApDbC/CUQCRBxDcBCIAVAHQAwimhChTQgpg0iRg9IgQgHQgKgEgEgJQgFgJACgKQACgLAIgGQAIgHAKAAg");
	this.shape_145.setTransform(212.7,349.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#E9E3D5").s().p("AjQduQgFgDgCgGQg1iwBBhdQArg9CNg8QAKgEgCgLQgCgMgLAAIqaAAQgGAAgBAFQAAAFAEADQBXAlAeAQQA8AgAgAlQBOBeg5C8QgBAGgGADQgFACgGgCIgcgJQj2hJiaiEQitiUgojSIAAgCQhCjGDcrZQBXAJB6gfQCPgkBFgCQAigBAcgZQAbgYghgDQhYgJiTAfQiVAfhJgHIAEgLIAAgBQADgMgKgFIgHgCQgRgJgOgKQh1hRBQjDQBMi3DIi1IABgCQAoglAQgQQATgVAOgVQArAQCMgKQCSgKgrgHQhDgLixhAQALghgDgXQgGgSABgFQkagnjuhmQjphlieiTQZekVNWk/QEahpCihiQBthBAPgfQgyCMhcCpQi1FNjuDWQilCtkLBzQkQB1lFAgQgGAvALAkQAZBOBfBkIACACQDIC3BNCwQBTC/hzBQQgSAMgRAIIgCABQgJAGADAKIABACQBWEYAvDMQBBhMAmhSQAthfAGhhQBAAoBdAHQBXAGA5gZQgtB3hOBpQhQBrhdBCQg8ArhCAlQAvEFgjBpIAAACQgoDSiuCUQiZCEj1BJIgdAJIgFABIgGgBg");
	this.shape_146.setTransform(214.1,348.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#6E627A").s().p("AF+FxQihhsk/hLQhkgZhpgRIhUgNQAkipB6i3QA9haA2g6QCABbC3EoQBlCmBaC0QAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgDAAIgCAAg");
	this.shape_147.setTransform(263.9,70.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#6E627A").s().p("AmCFxQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQBai0BlimQC3koCAhbIAjAoQAqA0AmA4QB6C3AkCpQiAARigAmQlABLihBsIgCAAIgDAAg");
	this.shape_148.setTransform(105.7,70.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AhHBIQgegeAAgqQAAgpAegeQAegdApAAQAqAAAeAdQAeAeAAApQAAAqgeAeQgeAegqgBQgpABgegeg");
	this.shape_149.setTransform(250.2,157.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#4E4658").s().p("AngG6QgkhBgHhkQgGhkAYhtQA4j+CviRQCoiLDPARQDYARB4C2QBKBvAMCKQALCEgxB7QAhhugOhyQgPh1hAhgQhriii/gYQi1gYiiBtQB5hCB/AVQCIAXBMBwQBYCAgkCpQgkCpiBBVQiYBlipgZQidgXhQhvQgggtgJhBQgHg/APhIQglBvgCBvQgDBsAeBMg");
	this.shape_150.setTransform(267.3,169.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AhHBIQgegeAAgqQAAgpAegeQAegdApAAQAqAAAeAdQAeAeAAApQAAAqgeAeQgeAegqgBQgpABgegeg");
	this.shape_151.setTransform(94.2,157.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#4E4658").s().p("AH0EQQgChvglhvQAQBIgIA/QgJBBggAtQhQBvidAXQipAZiYhlQiBhVgjipQglipBYiAQBMhwCIgXQB/gVB5BCQiihti1AYQi/AYhrCiQhABggPB1QgOByAhBuQgxh7ALiEQAMiKBKhvQB4i2DYgRQDPgRCoCLQCvCRA4D+QAYBtgHBkQgGBkgkBBIgIAOQAehMgDhsg");
	this.shape_152.setTransform(102.3,169.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AioH4QhugHhTglQhVgngkhBQgMgTgCgIQgpikAvjAQA4jlCgiAQCniGDNAPQDWAPB2CtQBCBgAPB2QAPBxgiBvQgbBWg1BHQg4BJhNAtQi3BsjTAAQgaAAgbgCg");
	this.shape_153.setTransform(267.3,177.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AkXGOQhNgtg3hJQg2hHgbhWQgihvAPhxQAPh2BChgQB2itDWgPQDNgPCnCGQChCAA4DoQAwDEgrCdQgDAJgLASQgkBBhVAnQhTAlhuAHQgaACgbAAQjTAAi3hsg");
	this.shape_154.setTransform(102.4,177.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#6E627A").s().p("AhlA2QhTg/ACgWQADgjA0gZQA1gZBKAAQBMAAA2AZQA2AZAAAjQAAAXhRA+QhQA+gXAAQgUAAhRg+g");
	this.shape_155.setTransform(184.8,232.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#282828").s().p("Ah2ArQgxgwAAhGIABgQQAHA/AvArQAwAsBAAAQBBAAAwgsQAwgrAGg/IABAQQAABGgxAwQgxAxhGAAQhEAAgygxg");
	this.shape_156.setTransform(201.5,250.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#282828").s().p("Ah2ArQgxgwAAhGIABgQQAHA/AvArQAwAsBAAAQBBAAAwgsQAwgrAGg/IABAQQAABGgxAwQgyAxhFAAQhEAAgygxg");
	this.shape_157.setTransform(168.1,250.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#282828").s().p("AlfhWQBRgPD7BAQD5A+B6BAg");
	this.shape_158.setTransform(283.8,246);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#282828").s().p("AlJiVQBSAADsBsQDpBqBsBVg");
	this.shape_159.setTransform(256.8,265.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#282828").s().p("AoAijQCAAAFuB1QFrB1CnBdg");
	this.shape_160.setTransform(276.5,257.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#282828").s().p("AAUglQD7hABRAPIq/CvQB6hAD5g+g");
	this.shape_161.setTransform(85.7,246);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#282828").s().p("AAMgpQDshsBSAAIqTErQBthVDohqg");
	this.shape_162.setTransform(112.7,265.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#282828").s().p("AATguQFuh1CAAAIwAFHQCnhdFrh1g");
	this.shape_163.setTransform(93,257.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("EABUAp4QgFgDgCgGQg1iwBBhdQArg9CNg8QAKgEgCgLQgDgMgLAAIpzAAQgMAAgCAMQgCALAKAEQCNA8ArA9QBBBdg1CwQgCAGgFADQgFACgGgCIgcgJQj2hJiaiEQitiUgojSIgBgCQglhyA6knQAwjzBulhIAAgBQADgMgLgFIgGgCQgRgJgOgKQh1hRBQjDQBLi4DJi1IABgCQBlhSAYhaQAIgbAAgfIABgeQlSgukPiHQkLiHiQjCQjMjVidktQgwhegnhcIgchJIAmgHQAvgJAugRQCTg1BShlQAAj2BwkXQDAnbHNlxQCZBMB+DIQBuCvAhCqQCDhHCUAAQCNAAB9A/QAjipBtitQB9jECYhLQHNFxC/HbQBxEXAAD2QBRBlCTA1QBKAbA5AGQgrB/hcCqQi4FVjyDaQilCtkLByQkQB1lGAgQgGAvALAkQAYBOBhBkIABACQDJC3BNCxQBTC/hzBQQgSAMgSAIIgBABQgJAGADAKIABACQBWEYAvDMQBfhvAmh8QAtiUgsiSQhVkVAniTQAsilDgiLIgEAjQgCAvAGA6QATC7BjDpQBHCohpDzQhlDpi0CAQg8ArhDAlQAwEFgjBpIgBACQgoDSitCUQiaCEj2BJIgcAJIgFABIgGgBg");
	this.shape_164.setTransform(184.8,270.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#282828").s().p("AC8AMQhBglhKgKQhfgNhdAjQhZAghEBJQAjhiBeg3QBfg4BwAQQBcANBGA5QBFA4AaBRQgvg6g+gkg");
	this.shape_165.setTransform(268.9,112.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#282828").s().p("AjJgfQBGg5BcgNQBwgQBfA4QBeA3AjBiQhEhJhZggQhdgjhfANQhKALhAAkQg/AkgvA6QAahRBFg4g");
	this.shape_166.setTransform(90.4,111.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#D9C3A6").s().p("AjaIWQhzgmgXhZQgShHAPhcQAJg6Ajh5QAdhlANg7QAVhgAEhVQAJidgWhNQgHgYgJgNIgIgJIADABIAHgsQAeAEAUAzQAhBUgLC6QgEBZgWBjQgNA9geBmQghB0gJA1QgOBXAQA/QAKAmAlAcQgahBAIhUQAIhHAdhDQAehCAahmQAehyAKhsQAbkdhzhUIAagkQCLBlggE6QgMBzghB5QgbBmgcA9QggBIgDBKQgDBYAqA6IAJAKQBbAbCVgEQBxgEBlgSIBpgUIjECGIgFABQhDAJg5AAQiwAAhUhXgACbI4IATgOQiOARhzgKQBdAaCRgTg");
	this.shape_167.setTransform(314.9,471.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#E9E3D5").s().p("AimIHQBMAYB0ABQCPACCIgZIhnBHQhDAJg4AAQipAAhMhSgAknGUQgQg+ALhQQAIg5AchkQAmiEAKgrQAZhsAFhfQAKi1gfhPQgJgZgNgLIgKgGIA1gZQB/BdgdEqQgLBvgfB2QgbBngdBAQgeBCgGBGQgIBVAfA/QAOAbATAVQhsgjgVhQg");
	this.shape_168.setTransform(311,471.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#D9C3A6").s().p("AiPDPIAPgaQA2hbgChpQgChqg4hNIAkgaQA9BSAGBuQAGBtgyBkIClAoQAMhdgEhXQgDhXgThBQgahUgygjIAYgmQBsBKALDgQAGBxgSBuIgEAYg");
	this.shape_169.setTransform(104.2,285.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#E9E3D5").s().p("AhvDFQA4hfgBhtQAAhyg+hWIB/gqQBlBFAIDdQAEBwgQBhg");
	this.shape_170.setTransform(104.4,285.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.catg, new cjs.Rectangle(0,0,368.8,541.2), null);


(lib.candy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.candy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.candy_1, new cjs.Rectangle(0,0,160,600), null);


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

	// back
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8766AC").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.back_1, new cjs.Rectangle(0,0,160,600), null);


(lib.kittyMummy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(88));

	// leftPaw
	this.instance = new lib.leftPaw();
	this.instance.parent = this;
	this.instance.setTransform(153,349.1,1,1,0,0,0,5.1,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88));

	// rightPaw
	this.instance_1 = new lib.rightPaw();
	this.instance_1.parent = this;
	this.instance_1.setTransform(207.1,351.1,1,1,0,0,0,24.1,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88));

	// bag
	this.instance_2 = new lib.bag();
	this.instance_2.parent = this;
	this.instance_2.setTransform(183.1,362,1,1,0,0,0,66.7,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:3.5},9,cjs.Ease.quadOut).to({rotation:-3.7},9,cjs.Ease.quadOut).to({regX:66.8,rotation:2.8},9,cjs.Ease.quadOut).to({regX:66.7,rotation:-3},10,cjs.Ease.quadOut).to({rotation:3.5},9,cjs.Ease.quadOut).to({rotation:-3.7,y:362.1},10,cjs.Ease.quadOut).to({rotation:0,y:362},11,cjs.Ease.quadOut).wait(20));

	// cat
	this.instance_3 = new lib.catg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(184.4,270.6,1,1,0,0,0,184.4,270.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(88));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,368.8,541.2);


// stage content:
(lib._015141_2018_GrPP_Candy_Halloween_160x600 = function(mode,startPosition,loop) {
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
	this.clickTag.setTransform(80,300,1,1,0,0,0,80,300);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(162));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(162));

	// kittyMummy
	this.kitty_mc = new lib.kittyMummy();
	this.kitty_mc.name = "kitty_mc";
	this.kitty_mc.parent = this;
	this.kitty_mc.setTransform(79.1,158,0.396,0.396,0,0,0,184.7,270.8);

	this.timeline.addTween(cjs.Tween.get(this.kitty_mc).wait(162));

	// cta
	this.instance = new lib.cta_1();
	this.instance.parent = this;
	this.instance.setTransform(80.1,505.1,0.337,0.337,0,0,0,80,505.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).to({regY:505,scaleX:1,scaleY:1,x:80,y:505,alpha:1},35,cjs.Ease.elasticOut).wait(3));

	// candy
	this.instance_1 = new lib.candy_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(240,300,1,1,0,0,0,80,300);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({x:80},35,cjs.Ease.quartOut).wait(1).to({x:-80},35,cjs.Ease.quartOut).wait(56));

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
	this.instance_3.setTransform(240,300,1,1,0,0,0,80,300);

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
p.nominalBounds = new cjs.Rectangle(79,299,321,602);
// library properties:
lib.properties = {
	id: 'EEFB96014AED4486850A76CAECAEBCA8',
	width: 160,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1537905225695", id:"back"},
		{src:"images/candy.png?1537905225695", id:"candy"},
		{src:"images/cta.png?1537905225695", id:"cta"},
		{src:"images/logo.png?1537905225695", id:"logo"},
		{src:"images/text1.png?1537905225695", id:"text1"},
		{src:"images/text2.png?1537905225695", id:"text2"}
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