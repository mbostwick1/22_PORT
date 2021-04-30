(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.astronaunt = function() {
	this.initialize(img.astronaunt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.birdBody = function() {
	this.initialize(img.birdBody);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,57);


(lib.CL = function() {
	this.initialize(img.CL);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.CL_wheel = function() {
	this.initialize(img.CL_wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.CY = function() {
	this.initialize(img.CY);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.CY_wheel = function() {
	this.initialize(img.CY_wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.details = function() {
	this.initialize(img.details);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.eventLogo = function() {
	this.initialize(img.eventLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.HI = function() {
	this.initialize(img.HI);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.HI_wheel = function() {
	this.initialize(img.HI_wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.offerEnds = function() {
	this.initialize(img.offerEnds);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.offerTitle = function() {
	this.initialize(img.offerTitle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.options = function() {
	this.initialize(img.options);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.RV = function() {
	this.initialize(img.RV);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.RV_wheel = function() {
	this.initialize(img.RV_wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.space = function() {
	this.initialize(img.space);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,399);


(lib.text_ALLin = function() {
	this.initialize(img.text_ALLin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.text_go = function() {
	this.initialize(img.text_go);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.text_greatSavings = function() {
	this.initialize(img.text_greatSavings);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.text_RS = function() {
	this.initialize(img.text_RS);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.text_wild = function() {
	this.initialize(img.text_wild);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.wing1 = function() {
	this.initialize(img.wing1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,74);


(lib.wing2 = function() {
	this.initialize(img.wing2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,78);// helper functions:

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


(lib.W2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#316C37","#244E41"],[0,1],-21,-1.1,10.8,0.6).s().p("AgXFBIAjgmIABgBQgCAMgDAKQgEAMgHAJQgJALgLABgAgjFNQgKgHgGgRIgKghQAVANALAFIAAAqIgGgDgAgXEZQAKgIAXgNIAEgCIgBASIgGAGQgYAZgGAKgAg/EOIAAABIAAgBIAAAAIgDgIIgLgjIACAEIAIAGIATAPQALAJAIAEIAAAZgAgXDuQAGgBAIgFIALgIIAXgQQgGANgBAIQgDALgBANIglAWgAg+DsIgPgLIgEgMQgGgSACgOIARANIATAPIAVAPIgBAlQgIgHgZgSgAgWDgIAXgOIAggVIgBAAIgEAMIghAXQgPAJgDADgAgUCrQATgHAagQIACgCIACAHQAGAUgBAKIglAZIgTANgAguDOIgSgOIgUgQIAAgBIACgLQApAnANAJIAAAIIgSgOgAg2C4IgagaQAEgTgFgOIgJgRQgGgLgCgHIgBgGIAcAVIAXATIAYASIgDBCQgLgIgQgQgAgSB5QAWgEAwgQQgNANgEAGQgIALAAALIgEACQgOAJgdAOgAhCBoIghgaIABgJIAaARQAqAdAHADIgBATIgqghgAgQBcIAOgIIBLggIADgBIAAAAQAEAVgVAWIgNAEIhAATgAgsBkIg2gmIAJghIAdAQIApAXIgEAtIgVgNgAgPBPQAMgDAPgIIAagPIAfgSIAGAMIhZAmIgBABgAgKAbIBpg+QgGAJgGAHIgPAQQgHAJABAKQABAFAEAJIgfATIgcAPIgXALgAg7ApIgdgQIACgMQABgLgEgIIAVAKQAoAXALAEIgCAiIgogYgAhEAAIgXgNQgHgOgDgIQgFgNACgLIBAArIAbARIgDAaQgSgIgigTgAgIADIBwg7IgFANIhtBAgAgEglIBqg1IABAFQACALAAALQgXAOghASIg5AegAgmgTIhBgtQACgHAIgRIAeAJIA5ARIgHA8IgZgRgAADhgIBRgdIADAHIANAYIgtAWIg6AegAg+hTIgdgIIAFgKIAaAJQArAQAMADIgBAJQgNgFgrgOgAg7hfIgZgKQAFgMAAgMQAAgHgCgIIAaANIAbAPQAQAIALAFIgDAbIg3gTgAAIiIIBbg8QgBAGgFAKIgIARQgIARAFAQIhPAcgAgch5Ig3geQgCgMABgIQABgIAFgJIA7A0QAPAPAEAEIAAALQgGgFgWgKgAgTiNIg5gyIAEgGIAIgJIAZAUIAWATQANAMAIAFIgDAdIgUgUgAANiqQAigWAXgRIAXgRIACAEQAFAIAAAMIhbA7gAg9jRQAIgIAFgGQAFgHADgHIADgJIAzAlIgJA3gAAXjrQAJgEAMgHIAVgNIACgBQADAHAEAFIAQASIgYASQgZATgbARgAglj6IACgJIAAgBIAiAaIARAMIgCALQgRgQgigXgAgOj5IgUgQQADgIAHgIIAIAFQAKAFAaAVIgEAZIgegYgAAdkQIABgBQALgHAWgFQABAOACAHIgDACIgnAWgAgOkYIgIgFIANgQQAbAWAHAEIgEAVIgjgagAgGkxQAIgNAJgJQANgKAMABIgLA6gAAkk3IAVgHQAEAKABAPIABAEIgGABQgUAGgHAEgAAolPQAJAEAGAJIgSAGg");
	this.shape.setTransform(9.6648,30.9836,0.9203,0.9203);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.W2, new cjs.Rectangle(0,0,19.4,62), null);


(lib.W1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4E6128","#6B753E","#8A8B57"],[0,0.38,0.835],2.7,12.5,-17.5,0.9).s().p("AhyBnIgBgDIAJgRQAHgdgFgdQgFgWgNgjIAAAAQAcA3gHA2QALgSARgSQgEgLABgSQAAgVACgKIAHgiQAEgWABgNIAAgBIABAAQAAANgEATIgHAgQgCAQgBASQABAUADAKIARgSQAFgHAGgQQAEgOACgRIACgaQACgPAEgJIABAAQgEALgBATIgDAeQgCAQgGAPIgDAHIAUgQQAHgHADgIIALgZQAMgiANgRIAAABQgLASgPAoIgKAZIgBABIACgCQAWgPAYgYIAVgYQAKgMAHgTQABgBAAABQgDAOgLAQQgHAJgPAQIgWAXQAzgdA8gJQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgxAIgrAWQgSAIgSANQAJgCANADIAYAEQAdAGAhgHIABAAIgBABQgaAHgcgDIgdgGQgRgDgKABIgYARQAJgBAMAEIATAJQAjARAZgEIABABIgBABQgXAEgagMIgbgMQgRgHgKADQgMAJgFAGQAIADALAIIARAPQAYAQAZAAIABABIgBABQgWABgVgOQgIgEgMgKQgRgNgHgDIgRARIAAABQAQATAgALQAWAHAhACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQgfAAgbgKQgggMgNgRQgSAUgMATIAGACIgDADIgGgBIgJAQIgBgBg");
	this.shape.setTransform(14.4176,12.6354,0.9999,0.9999,2.4507);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4E6128","#666129"],[0,1],6.3,10,-17.2,-3.6).s().p("Ah6BuIABgFQACgDAAgGIABgLQAAgIgBgMQgBgUgGgUQgIgcgTgwQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAhATALAnQAKAhgGApQAIgIABgNQABgHAAgRQgBgYADgUQAGgzAWgnQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAIACABIgEBOIgCAeQgCASgEANQANgPAFgSIACgSIAAgUQADggAZgsQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIABACQgEAPgFAxQgDAogNAVQALgJAIgPIAHgSQADgPADgFQANgjAcgZIACgBQABABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgQAsgEAIQgLAcgPAUQAdgUAQgXQAQgWASgsQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIABABQAOArg0AqIAPgIQAVgNAOgHQAQgHAVABQAPgBAWAEIABACIgBACQggAVguAJIgmAJQgUAGgQAJQAnAFAWAAQAhgBAbgNIACAAIAAACQgYAcgpABQgUAAgUgFIgUgHQgOgDgFAJQAwAbBBgBIABABQAAAAAAABQABAAgBABQAAAAAAAAQAAAAAAAAQgbARgpgHQgTgDgTgJIgUgMQgIgEgKAMQAJAIARAGIAbAJQAZAJAYAPIABACIgCACQgfADgbgIQgcgKgWgWIgCgDIgEgBQgFABABAIQABAKAwARQAPAFAVAEIAkAGIACABQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQhUARgsgrQgGgGgBAAQgDAAgFAHIgJAPIgCABIgDAFIgBABIAAABQgGAFgBAGIgBABIgLgEg");
	this.shape_1.setTransform(15.1825,11.0544,0.9999,0.9999,2.4507);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.W1, new cjs.Rectangle(0,0,30.9,22.6), null);


(lib.L1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1F3729","#334F2C"],[0,1],-10.2,0,10.3,0).s().p("AhaDUIgCgBIAAgBIADgRIgMgRIAAgFIABACIALARIACgRIgOgUIAAgFIACAEIANASIAHghQgGgEgLgMIgEgEIAAgEIAFAFIAQARIACgIQgIgFgNgNIABgFIAVAUIAHgYIgWgVIgDgDIgDgHIgBgCIAKALIATATIAFgMQgFgEgSgWIgLgOIABgEIAPASIATAXIAFgUQgKgNgTgfIACgFIAdAuIAEgMIgXgyIgNghIAAgEIAQAkIALAYIAKAYIAQgpQgGgHgQgfIgNgYIADgCIAMAXQAHAOAOAYIAHgNIgBAAIgMgRIgKgRIgKgTIACgDIAgA2IARglIgPgRIgNgTIgPgUIAAgFIAsA7IAIgRIAAAAIAEgKIAAAAIgeg+IADgBIAdA8IAFgJIAHgMIAAgCIgSgxIACgDIATAyIAAABIAGgKIAAAAIgOg6IADgEIANA7IAYghIgLgqIADAAIAKAnIAPgSQgEgLgGgMIACgCIAKAWIAIgKIgBAAIgHgUIADgCIAGAUIATgWIABACIgMAOIANADIgBADIgNgEIgBABIgQAVIASAAIgBAEQgLAAgIgCIgPATIAhgCIABAEIgkABIgLAPIAUgCIAegGIABADIgTADQggAHgDgBIgPAXIA1gOIAQgEIgCADIhFASIgEAIQANgFAggGIALgDIgDAEIgGABQghAJgQADIgMAUIAuAAIASgBIABAEIgsAAQgRAAgFgBIgNAdIAaABIAwACIgCADIgWgBQgjgBgQgCIgFAKQARgBAjABIAWgBIgDADIhIABIgQAkIA6gEIAOgCIAAAEIgSABQggAEgXgBIgJAYIBWgDIAAAAIAAADIg9ADIgZgBIgHAQIA3gEIAhgBIgDAEIgcAAIg5ADIgLAiQAIgCAPgBIAogFIgBADIgpAFIgWACIgHAaQANgBAhgJIAWgFIAAADIgYAGQgdAIgQAAIgCAMIAwgKIAUgFIgCAEIgTAEQghAIgPADIgEAPIAOACIAQABIAIAAIgBAEIgIgBQgXgBgHgCIgCAQIAgAAIADAAIgBAEIgCAAQgXAAgKgCIgDASIAfgFIgEAEIgcAEIgCATIgBABIgBgBg");
	this.shape.setTransform(10.8307,16.6827,0.8795,0.8042,4.7729);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#1F3729","#334F2C"],[0,1],-0.7,0,0.8,0).s().p("AAABuQgFgcgBhOQgBhJAEggIABgLIADAAQgDAiACBOQABBKAGAlQAAAAAAABQAAAAAAAAQgBABgBAAQgBAAgBAAQgDgBAAgCg");
	this.shape_1.setTransform(0.9606,41.0761,0.8795,0.8042,4.7729);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#4E6128","#6B753E","#8A8B57"],[0,0.38,0.835],-10.3,0,10.4,0).s().p("AhaDWQgLgHAAgSIgBgbIAAgfQABgRAGgMQAFgKgCgJQgBgFgEgHQgEgNACgKIALgZQAFgNgEgRQgDgQABgHQABgNAJgHQAOgJAGgGQAGgIABgSIAAgWQACgNAHgHQAGgFAQgEQAPgEAGgHQADgFAIgNQAHgMAGgFQAHgGAJAAQAPAAAEgCIAMgJQAIgHAJgBQALgCAEALQADAKgJANQgLAPgBAHQAAADAHATQAFAMgJAIIgLAHQgHAFgCAFQgDAHACATQACAPgBAHQgBAMgHAJIgSATQgHAKAEARQADAPAAAHQgBAMgJAIIgSANQgMAIgCAJQgCAFgBAKIgBAPQgEAKgKAIQgRALgEAIIgFANIgGAMQgNAXgZAMIgBABIgBgBg");
	this.shape_2.setTransform(10.8843,16.5384,0.8795,0.8042,4.7729);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.L1, new cjs.Rectangle(0,0,21.3,50.2), null);


(lib.I1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0C2605","#537C73","#779E98"],[0,0.031,1],-48.6,0,24.5,0).s().p("AiDCBIAegUIAAgBIgGgTIADgEIAGAVQALgHAMgKQgBgFgLgXIADgEIANAdIAbgYIgQgmIADgEIARAnIAdgbIgBgBIAAgEQgHgfgFgQIADgEQAHAUAGAeIABACIAagaIgBgbQgBgRgDgTIAEgDQAEAYABAPIAAAYIALgKQATgTAMgOIAAAAQADgCgBgqIAAgOIAEgDIABARQAAAWgBAPQASgVAQgYIAZglIABAAQACgBgBAGIgXAjQgPAWgSAVIAjgLIgDAFQgdAJgJAFIgBAAQgQATgQAPIgLAJIAAABQAIADAWACIAMABIgDAEIgJgBQgZgCgJgDIgcAcIAeATIgEADIgegTIgcAaIAZARIgBAAIgEADIgXgRIgdAYIABABIAQANIgFADIgQgOIgUARIAOAJIgFACIgNgIIgZARIgEAFg");
	this.shape.setTransform(13.2167,13.4433);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0C2605","#183F0C"],[0,1],-13.2,0,13.2,0).s().p("Ah/CHIgEgGQAAgEApg8QA0hKArgrQA9g8BBgVQAEgCgGAYQgHAcgPAeQgtBZhMAsIg3AhQgoAWgRAAIgBAAg");
	this.shape_1.setTransform(13.23,13.4477);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.I1, new cjs.Rectangle(0,0,26.5,26.9), null);


(lib.D1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0C2605","#537C73","#779E98"],[0,0.031,1],-48.6,0,24.5,0).s().p("AiDCBIAegUIAAgBIgGgTIADgEIAGAVQALgHAMgKQgBgFgLgXIADgEIANAdIAbgYIgQgmIADgEIARAnIAdgbIgBgBIAAgEQgHgfgFgQIADgEQAHAUAGAeIABACIAagaIgBgbQgBgRgDgTIAEgDQAEAYABAPIAAAYIALgKQATgTAMgOIAAAAQADgCgBgqIAAgOIAEgDIABARQAAAWgBAPQASgVAQgYIAZglIABAAQACgBgBAGIgXAjQgPAWgSAVIAjgLIgDAFQgdAJgJAFIgBAAQgQATgQAPIgLAJIAAABQAIADAWACIAMABIgDAEIgJgBQgZgCgJgDIgcAcIAeATIgEADIgegTIgcAaIAZARIgBAAIgEADIgXgRIgdAYIABABIAQANIgFADIgQgOIgUARIAOAJIgFACIgNgIIgZARIgEAFg");
	this.shape.setTransform(13.2167,13.4433);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0C2605","#183F0C"],[0,1],-13.2,0,13.2,0).s().p("Ah/CHIgEgGQAAgEApg8QA0hKArgrQA9g8BBgVQAEgCgGAYQgHAcgPAeQgtBZhMAsIg3AhQgoAWgRAAIgBAAg");
	this.shape_1.setTransform(13.23,13.4477);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.D1, new cjs.Rectangle(0,0,26.5,26.9), null);


(lib.text_RS_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text_RS();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text_RS_1, new cjs.Rectangle(0,0,160,600), null);


(lib.text_IN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAC5AlMIAAnMIJEAAIAAHMg");
	mask.setTransform(76.5,238);

	// IN
	this.instance = new lib.text_ALLin();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text_IN, new cjs.Rectangle(95,430,58,46), null);


(lib.text_go_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text_go();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text_go_1, new cjs.Rectangle(0,0,160,600), null);


(lib.text_ALL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgEcAlWIAAnCILjAAIAAHCg");
	mask.setTransform(45.525,239);

	// ALL
	this.instance = new lib.text_ALLin();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text_ALL, new cjs.Rectangle(17.1,433,74,45), null);


(lib.space_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.space();
	this.instance.setTransform(0,0,0.5,0.6424);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.space_1, new cjs.Rectangle(0,0,300,256.3), null);


(lib.SAVINGS_OG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMVAllIAAloIYrAAIAAFog");
	mask.setTransform(79,240.5);

	// SAVINGS
	this.instance = new lib.text_greatSavings();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SAVINGS_OG, new cjs.Rectangle(0,445,158,36), null);


(lib.RV_wheel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RV_wheel();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RV_wheel_mc, new cjs.Rectangle(0,0,75,75), null);


(lib.RV_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFGJyQgKgEgPgDIAAAAIgjgEIAAAAQhlgIi7gtIAAAAQjDguhegKIAAAAQgegDhLgEIAAAAQhDgEgmgFIAAAAQhEgIiDghIAAAAQhfgYgngOIAAAAIg9gXIAAAAQgngPgXgIIAAAAQgPgEiMgeIAAAAQhegTg1ghIAAAAQgggTgsgrIAAAAID9ibQgygogKgUIAAAAQgFgLACgSIAAAAQAEgdgBgLIAAAAQgFgSABgIIAAAAQACgRACgbIAAAAQAHgfgCg/IAAAAIgFg4IgKgUIAKg8IAUgKICWiWIAAgUQAVgNCLg5IAAAAQBrggD/AKIAAAAQCOAFD2ARIAAAAQB5AAA/ATIAAAAQAJACA4AdIAAAAQAnAGCQBgIAAAAQBwBKA3AsIAAAAQAqgJCPAUIAAAAQCZAVA+AcIAAAAQA8AaAVAZIAAAAQAMAMAHAbIAAAAQAcAOADAaIAAAAQASANADAbIAAAAIgCAoIAAAAQANAhgCAWIAAAAIgLAsIAAAAQATAyACAgIAAAAQACATgDAdIAAAAQAHAUAAAFIAAAAIgHAPIAAAAQgGAtgeAJIAAAAQgSAGgagKIAAAAQgMAMgiAGIAAAAIhAAMIAAAAQgSAZgmAPIAAAAIgiAKIArgFIAAABIAAAAQgZACgLAJIAAAAQgRANgBAVIAAAAQABgVARgNIAAAAQALgJAZgCIAAAAIAOAAIAAAAQAsABBBAGIAAAAIBjAKIAkADIAAAAQAiAEAUAEIAAAAQAWAFASAGIAAAAQAYAIATAKIAAAAIABABIAAAAQAYANAMAQIAAAAQAPATAAAVIAAAAQAAgVgPgTIAAAAQgMgQgYgNIAAAAIgBgBIAAAAIADABIAAAAIAJAEIAAAAIAvAYQAhAQATAMIAAAAQAAANgDASIAAAAIgBAGIAAAAIltCtgATlHrIAAAAIAAAAIAAAAgATnHrQAIAAAIgEIAAAAQgIAEgIAAgASKFaQgUgEgigEIAAAAIADAAQAdABAQACIAAAAQARAEAZAJIAAAAIAEADIAAAAQgSgGgWgFg");
	mask.setTransform(158.7501,155.3046);

	// car
	this.instance = new lib.RV();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RV_1, new cjs.Rectangle(23.1,91.1,271.29999999999995,128.4), null);


(lib.rightWing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wing2();
	this.instance.setTransform(0,0,0.4809,0.4808);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rightWing, new cjs.Rectangle(0,0,32.7,37.5), null);


(lib.options_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.details();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.options();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.options_1, new cjs.Rectangle(0,0,160,600), null);


(lib.ON_GS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgEhAisIAAlAIJDAAIAAFAg");
	mask.setTransform(25,222);

	// ON
	this.instance = new lib.text_greatSavings();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ON_GS, new cjs.Rectangle(0,412,54,32), null);


(lib.offerTitle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.offerTitle();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.offerTitle_1, new cjs.Rectangle(0,0,160,600), null);


(lib.offer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// *
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAASIgOAZIgVgQIASgVIgbgGIAIgZIAbALIgEgcIAaAAIgCAcIAagLIAIAZIgbAGIATAVIgWAQg");
	this.shape.setTransform(87.25,-4.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// dynamic_field1
	this.dynamic_field1 = new cjs.Text("0.0%", "bold 33px 'Toyota Type Black'");
	this.dynamic_field1.name = "dynamic_field1";
	this.dynamic_field1.lineHeight = 47;
	this.dynamic_field1.lineWidth = 96;
	this.dynamic_field1.parent = this;
	this.dynamic_field1.setTransform(-6.75,-23.8,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field1).wait(1));

	// dynamic_field2
	this.dynamic_field2 = new cjs.Text("APR FOR 00 MONTHS", "8px 'Toyota Type'");
	this.dynamic_field2.name = "dynamic_field2";
	this.dynamic_field2.textAlign = "center";
	this.dynamic_field2.lineHeight = 11;
	this.dynamic_field2.lineWidth = 95;
	this.dynamic_field2.parent = this;
	this.dynamic_field2.setTransform(42.2427,24.5,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field2).wait(1));

	// dynamic_field3
	this.dynamic_field3 = new cjs.Text("$0 DOWN WITH APPROVED CREDIT", "8px 'Toyota Type'");
	this.dynamic_field3.name = "dynamic_field3";
	this.dynamic_field3.textAlign = "center";
	this.dynamic_field3.lineHeight = 9;
	this.dynamic_field3.lineWidth = 94;
	this.dynamic_field3.parent = this;
	this.dynamic_field3.setTransform(42.0286,34.5,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field3).wait(1));

	// dynamic_field4
	this.dynamic_field4 = new cjs.Text("PLUS $500 BONUS CASH", "bold 9px 'Toyota Type Black'");
	this.dynamic_field4.name = "dynamic_field4";
	this.dynamic_field4.textAlign = "center";
	this.dynamic_field4.lineHeight = 13;
	this.dynamic_field4.lineWidth = 162;
	this.dynamic_field4.parent = this;
	this.dynamic_field4.setTransform(37.9821,167.2,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.offer_mc, new cjs.Rectangle(-55,-26,186,209.5), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,160,600), null);


(lib.leftWing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wing1();
	this.instance.setTransform(0,50.55,0.5,0.5,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leftWing, new cjs.Rectangle(0,0,76.7,76.7), null);


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
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HI_wheel_mc, new cjs.Rectangle(0,0,75,75), null);


(lib.HI_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABeKUQpMhSidgXQnvhJhtggQiTgrhZhCQhlhKBhgbQCMgoDIgoQgoAAAAgKQAAgGgFghIgFgfQgNgFgMgJQgZgRAAgTQAAgTgFgpIgFgnQAAgNACgQQAFggANgTQABgYAAg2IgBhcQAAgoAJgJQABgBAegKQASgDAHgEQAPgKAUghQAKgSAkgwQAYghAAgLIgDgUQAAgIANgMQAUgVBqgiQB/gqB/gNQB0gNCQAFQBLADBfAFQA+AAC2ARQDCATApAOQAqAOCUBfQCMBaAyApQAmAIDDAYQCsAVAtARQBVAgAaAXQA4AxAhB+QATBAgDAYQgBALgFAAIgUAoIAIAJQAKANAGAPQARAygfA/QADAIAUAfQAFAHgSAYQgTAZA6AjQAcARAhANIAzAYQA6AeAhAfQBpBki7BLQjOBSm1AHIhQAAQlEAAkbgng");
	mask.setTransform(149.1461,150.5338);

	// Layer 1
	this.instance = new lib.HI();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HI_1, new cjs.Rectangle(0,80.6,300,139.9), null);


(lib.GREAT_OS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgDKAixIAAk2IPvAAIAAE2g");
	mask.setTransform(80.5155,222.5);

	// great
	this.instance = new lib.text_greatSavings();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GREAT_OS, new cjs.Rectangle(60.3,414,99.7,31), null);


(lib.eventLogo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// offerEnds
	this.instance = new lib.offerEnds();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eventLogo
	this.instance_1 = new lib.eventLogo();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eventLogo_1, new cjs.Rectangle(0,0,160,600), null);


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


(lib.CY_wheel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CY_wheel();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CY_wheel_mc, new cjs.Rectangle(0,0,75,75), null);


(lib.CY_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACGH1IkvgSInmhSQnxhVg5gNQg8gNgUgYQgQgUAQgNQAAgMBPgDIB5gFQgIgQgMgsQgDAAgNgHQgTgLgjgMQgngNgCgRQgBgEAMgkIgDhSQgDgpAGgGQAHgGABgSIACg4QAIg9AJgOQAKgPArgKQgGgZAcgFQANgCAPACQAggWA1ghQBqhBBtgyQB9gpBYgIQA5gFC0AEQCWAACWATQCJARBIAYQA4ATCRBMQBKAnBVAuQDkAUB3AiQA1APBQApQAyANAPAeQAIAPgDAMIAGAHQAHAIAHAFQAgAgAHAuQAEAYgDARIAMBAQANBEAFASQAIAAADAGQADAHgEAHQhFAej7AUQgZATgUAIIgPADQCMAACgATQDhAagtAtQguAujMAcQhsAPkkAVQhMAGhwAAQiFAAi5gIg");
	mask.setTransform(151.4562,153.1775);

	// car
	this.instance = new lib.CY();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CY_1, new cjs.Rectangle(21.7,102.3,259.6,101.8), null);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cta();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,160,600), null);


(lib.CL_wheel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CL_wheel();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CL_wheel_mc, new cjs.Rectangle(0,0,75,75), null);


(lib.CL_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4wLLIAUrZIG4haQgogUgUgUQgNgNgKgvQgHgmAAgWQAAgNAFgKIAFgHQASg0AMgSQgHgOABgOIAGg0QgMgfAOgOQASgKAAgFQAAgGAKgHIAKgHIBQgeQASgGAbgSIBfhCQBGg5BXgcQAWgHBbgSQBkgUCWAAQBhAAAsABQBDACBSAHQBWAHA5AMQAuAJB4AgQBeAZCnBaQBUAtBBAoIAUAAQBOAGBzAgQBcAZAjARQAYAIAhAYQAkAXAHAPQAKAUgKAoIAMAIQARAPAVAbQAaAmAFBRQADAvgEAsQAKAKABAFQACAJgNAGQgmAMiLAPIiFAMIEOAUIGaBkIBQJsg");
	mask.setTransform(154,178);

	// Layer 1
	this.instance = new lib.CL();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CL_1, new cjs.Rectangle(0,100.5,300,149.5), null);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.birdBody();
	this.instance.setTransform(0,0,0.4561,0.4561);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(0,0,89,26), null);


(lib.S = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#855F41").s().p("AgCAGQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBQgBgCACgCIADgDQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBABAAIACABQABABAAAAQABAAAAAAQAAABAAAAQABABAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBABIgCADIgCADIgDgBg");
	this.shape.setTransform(1.2358,8.2403,1.0429,1.0429);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#855F41").s().p("AgBACIgDgCIgBgBIACAAIADABIAEAAIACABIgDABIgDAAIAAAAIgBAAg");
	this.shape_1.setTransform(16.9144,9.8522,1.0426,1.0426);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E7B941","#F9D649"],[0,1],-8.2,-1,8.5,0.8).s().p("AgHBrQgugCgUglQgOgaADgfQACgRgEgPQgEACgCgCQgDgEAFgFIAAgBQADgDADAAQADAAACAEQAEALgBARQgCAPABACIAFAGQAGAHABAGQADAPAQAKQANAJANACQAFABAEgEQAEgDAAgFQABgUgjgdQgkgcABgZQACggAigRQAggSAvAEQAjADAMARQAJAMgBAWQgBAOgJAOQgKAPgLgBIgCgBQAKgNAGgSQAIgYgHgNQgLgSgnABQgqABgYAcQgWAZAnAZQAVAOAtAVQAcASgPAkQgPAjgrAAIgHAAg");
	this.shape_2.setTransform(10.3846,11.1673,1.0426,1.0426);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E7B941","#F9D649"],[0,0.361],11.7,0.2,-25.1,-0.3).s().p("AgUBsQgogEgTgfQgMgTAAgTIABgJIABgGIACgFQAMgUgKgfQgBgDAFgFQAIATgCAYQgEAeAPAaQATAlAtACQAyADAQgmQAQgkgcgSQgugVgVgOQgmgZAWgZQAYgcApgBQAogBAKASQAIANgJAYQgGASgKANQgFgBgBgMQgGgegSgCQgGAAgEADQgEAEgBAGQgBAPAjAdQAjAdgCAbQgCAjgcARQgWAOgiAAQgLAAgOgCg");
	this.shape_3.setTransform(9.4889,12.5071,1.0426,1.0426);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S, new cjs.Rectangle(0,0,20.2,24), null);


(lib.N2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#855F41").s().p("AABAHQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAIgDgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAgBIAAgCIACgCQACgDAEADQAEACgBAFQAAAEgGADIgBAAIAAgBg");
	this.shape.setTransform(35.3231,32.2909,1.0429,1.0429);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#855F41").s().p("AgHADIgBgFIADgDIADgBIALAEQgDACgDgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABIgEACIgCAFg");
	this.shape_1.setTransform(9.2556,0.7545,1.0426,1.0426);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E2B13F","#E4B440","#EBBF43","#F6D047","#F9D548"],[0,0.345,0.651,0.937,1],18.9,3.9,-6.4,-0.5).s().p("AALCwQglgGgXgdQgYgeAEgnQADgtAgg2QAfg4AAgHQABgLgJgBQgIgBgNAJQgPALgNATQgTAcgPAgQgRAigCAUQgBAIgCADQgCAEgHgBQgTgDgQgHQAJgmAeg4IArhLQARgdgqghQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAgADALAfQAGAPABAOIgBANQgBACAhgZQAngZAbAMQAgANgiA4QgrA7gEALQgWA8ALApQARBMCBgwIARgFQABgFAEAAQABAAABAAQABAAAAABQABAAAAAAQABAAAAABQADADgDAHQgDAGgDAAQghgDgPAXIgCACQgKALgWAFQgNADgPAAQgQAAgRgDg");
	this.shape_2.setTransform(19.3762,18.8963,1.0426,1.0426);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E7B941","#F9D649"],[0,0.243],-12.2,-1.9,45.6,8.6).s().p("AhBARQADgKAzhNQAigzgdgOQgbgMgnAXQghAZAAgCIABgNQABAAAdgVQAkgUAhAEQAVADALANQALAOgCAUQgBAVgdA2QgdA1gDAiQgCAaANATQAOATAZAFQALACAIgBIAIgBIABAAQAEAAAEACQACABAOgHQAPgHALACQABAAAAAAQABAAABAAQAAAAAAABQABAAAAABIgbAIQg6AWgkAAQhdAAAriIg");
	this.shape_3.setTransform(24.9729,18.8078,1.0426,1.0426);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E7B941","#F9D649"],[0,1],-5.6,-1,5.5,1).s().p("Ag3BVQACgWApg8QAog7ACgbIgDgQQgDgNADgDQApAhgRAdIgqBKQgeA5gJAmQgbgNACgSg");
	this.shape_4.setTransform(5.7785,12.432,1.0426,1.0426);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.N2, new cjs.Rectangle(0,0,36.2,37.6), null);


(lib.N1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#855F41").s().p("AgFAAIABgDQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABAAIADACIAEACQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgGACQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAABIgBABQgCgDABgCg");
	this.shape.setTransform(4.655,0.1925,1.0429,1.0429);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#855F41").s().p("AABAFQgDAAgBgCIgEgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAQAFAAAAgCQAAAAABgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAFgBABABQADADgBACIgCAGIgFgBg");
	this.shape_1.setTransform(25.7514,26.2496,1.0429,1.0429);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E2B13F","#E4B440","#EBBF43","#F6D047","#F9D548"],[0,0.345,0.651,0.937,1],20.1,5.1,-6.8,-0.7).s().p("AALCUQgdgEgTgXQgTgZABghQACgmAYgwQAXgxAAgGQAAgJgHAAQgGgBgKAJQgLAJgKARQgPAYgLAcQgNAegBARQAAANgJgBQgPgCgNgGQAGggAXgxIAghBQAIgPgKgQQgGgMgNgJQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAZACAJAZQAFANABAMIgBALQAAACAYgXQAcgWAZAJQAZAJgaAxQgNAagVAkQgQAzAJAkQAPA/BkgtIAMgFQABgFAEAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABIAAgBQADADgCAGQgCAFgDAAQgaAAgLATIgCACQgHAKgRAFQgNAEgPAAIgUgCg");
	this.shape_2.setTransform(13.2548,15.6337,1.0426,1.0426);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E7B941","#F9D649"],[0,1],-9.7,-1.2,3.2,0.7).s().p("Ag3BnQgMgcAQg7QACgJAnhCQAYgtgWgLQgWgJgeAVQgZAWAAgCIABgLQABAAAWgTQAcgSAZACQARACAJALQAJALgBARQgBASgWAvQgUAugBAdQgBAXAKAPQAKAQAVACQAPACAGgDIABAAQADAAADACQACABAKgHQAMgGAIABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIgVAJQgwAWgdAAQghAAgKgbg");
	this.shape_3.setTransform(17.4571,15.3228,1.0426,1.0426);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E7B941","#F9D649"],[0,1],-4.4,-0.6,4.3,0.7).s().p("AgqBKQABgSAgg1QAegzABgXIgDgOQgDgLACgCQANAJAGALQAKARgIAPIggBAQgWAxgGAgQgVgKAAgPg");
	this.shape_4.setTransform(2.9923,11.028,1.0429,1.0429);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.N1, new cjs.Rectangle(-1.4,-0.3,28,31.6), null);


(lib.exclamationBanana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#855F41").s().p("AAAALIgFgEQgDgCABgDIAAgGQAAgGAGgBQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAEAGQACADAAAFQAAAGgDABIgDABIgDgBg");
	this.shape.setTransform(28.6256,1.0542,1.0429,1.0429);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#855F41").s().p("AgEACIgDgBIgDgBIABAAIAEgBIAHAAQADgBAGABIgDABQgCACgCAAIgEAAIgCABIgCgBg");
	this.shape_1.setTransform(6.5497,36.4354,1.0426,1.0426);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E7B941","#F9D649"],[0,1],19.2,5,-23.5,-7.1).s().p("AhaCwIgCgBIgBAAIgDgCIgCgCQgDgCgFgJIgCgFIgNgXQgMgaACgeQADglACgRIAAgBIAMgqIALgbQAJgRAOgUQASgYAQgMIANgKQAQgNAIgFQATgMAKgBIACAAIADgBIAEAAQAQAAAIAFIABAAIABABIAAAAQAMACAXgHIAJgDIALgDIABgCIACgBIABgBIADgCIACgBIAAAAIAEAAQAEAAACADIACADIgCACIACAFQABAEgBADQgBAEgDABQgGABgEgJQgFADgIACIggAHQgQADgQABQgnAAgpA0Qg8BKAICIQACAiAIAWIgFAAIgBAAIgCAAg");
	this.shape_2.setTransform(15.5275,18.3457,1.0426,1.0426);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E7B941","#F9D649"],[0,1],13.5,4.6,-8.7,-3.1).s().p("AhwB1QgIiHA8hLQAqg0AmAAQAQgBAQgDIAggHQASgEAJgMQAEAGgBAJIgBACIgFAFIgCACIgCACIgDAEIgLAEIgEABIgOAEIgTAJIgGAFIgvA1QgdAggOAcQgJATgGAZQgFAVgCAQIgBAKQgCAVgDAJQgHAZgNAZIgEAEIgBAAIgBABIgDACIgCABQgIgWgCgig");
	this.shape_3.setTransform(17.6368,18.6324,1.0426,1.0426);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E2B13F","#E4B440","#EBBF43","#F6D047","#F9D548"],[0,0.345,0.651,0.937,1],-4.1,-0.2,4.2,0.2).s().p("AgKAsQgPgCgIgLQgJgKABgQQABgSAQgQQAQgQATACQAPACAIAKQAJALgBAPQgBATgPAQQgOAOgQAAIgGAAg");
	this.shape_4.setTransform(4.3078,43.0159,1.0426,1.0426);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.exclamationBanana, new cjs.Rectangle(0,-0.2,29.5,47.800000000000004), null);


(lib.B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#855F41").s().p("AgBACQAAgBABAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBgBgBgBQAAgBgBAAQAAgBAAAAQAAAAAAgBIAEABIAEADQAAAAAAABQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBABAAAAIgEADIAAgFg");
	this.shape.setTransform(22.985,7.5067,1.0426,1.0426);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#855F41").s().p("AgBAGQgCAAgCgCIgBgEIAAgEQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAABABIAFAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABIACACIABABIgBADIgCACQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgBAAg");
	this.shape_1.setTransform(8.1926,22.9299,1.0426,1.0426);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9D649").s().p("AgFABQgBgEAGgBQAGAAABAEQAAAFgHAAIgBAAQgEAAAAgEg");
	this.shape_2.setTransform(8.1455,23.0239,1.0426,1.0426);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E2B13F","#E4B440","#EBBF43","#F6D047","#F9D548"],[0,0.345,0.651,0.937,1],52.4,3,-18.9,-1.3).s().p("AglCsQgogXAEgoQAFg8AYhBQAghcArgMIALgBQANAAAIACQgJAIgOASQgUAZgPAaIglBeQgdBgAzAIQAbAFAWgaQAVgZADgkQABgWgjghQgagYAegUQAkgXAQghQAIgQABgMQABgWgPgNQgKgIgMgCQhfgVgoA5QgMASgGAYQgDAMAAAIQgBAWAFAPIAFAPIgBADQgbgSgHgRQgWgpAMgmQAZhLCnAKIAYAFQAcAJAOAOQAvAshhBSQgKAFgFAIQgKAPAbAPQAlAVABAuQABAzg3AfQgeAQgbAAQgVAAgTgKg");
	this.shape_3.setTransform(16.3648,20.5187,1.0426,1.0426);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E7B941","#F9D649"],[0,1],-20.8,-1.2,18.8,1).s().p("AgSDEQgugHgRgbQgLgRACgVQAAgsAIgzQgEAAgBgDQgHgUgLgIQgTgGgQgUQgTgZABgdQACg+A6geQA2gcBUAGQA8AEAfAaQAeAagCAoQgBApgiAaQgWASgfAHQgBABAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAABAAQBCAcgDA7QgCA5gxAgQgkAXgqAAQgLAAgMgCgAAoh6IgLABQgrAMggBcQgYBBgFA8QgEAoAoAXQArAYA2geQA3gfgBgzQgBguglgVQgbgPAKgPQAFgIAKgFQBhhSgvgsQgOgOgcgJIgYgFQingKgZBLQgMAmAWApQAHARAbASQAJAJAEAHQAOhOAcgnQAlg0A7AZQAMAEgJAFIgBABQgHgCgKAAIgEAAg");
	this.shape_4.setTransform(16.5752,20.601,1.0426,1.0426);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B, new cjs.Rectangle(0,0,33.2,41.3), null);


(lib.A3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#855F41").s().p("AgCADIgCgDQgCgBAEgCQADgCACACIACABQACADgEADIgBABIgEgCg");
	this.shape.setTransform(24.1656,27.9414,1.0429,1.0429);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E2B13F","#E4B440","#EBBF43","#F6D047","#F9D548"],[0,0.345,0.651,0.937,1],17.4,1.9,-4.4,-1.8).s().p("ABfCJQgEAAgDgCQgDgBgBgCQgGgcgSgNQgcgCgZgWQgHgNAAgYIAAgVQgMAYgRAPQgkAfgZgsQgTgjAWgxQAPgkAfgiQAegPAdgBQAbgCAXAJQAGALgDAMQgCAKgJATQgPAdgDAqQgEA0AYAeQAVAaAKAYIACAAQAFAAAAAFQAAADgEABIAAABgAgigxQgZAqACAeQABALAKAAQAUAAAag2QAYgxgBgQQAAgIgHAAQgZACgZAqg");
	this.shape_1.setTransform(14.3763,14.1953,1.0426,1.0426);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E7B941","#F9D649"],[0,1],-9.9,-0.5,7.7,0.4).s().p("Ag4BeQgNgPgCgaQgDgvAagsQAbguAsgXQgdAigQAkQgVAxATAjQAYAsAjgfQASgPANgYIgBAVQAAAYAIANIgKgJQgMAJgOAJQgcATgeAAIgDABQgUAAgMgOg");
	this.shape_2.setTransform(7.5527,12.9065,1.0426,1.0426);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E7B941","#F9D649"],[0,1],8.1,1.3,2.9,0.4).s().p("AgMBJQgYgeAEg0QADgqAPgdQAKgTACgKQACgMgGgLQARAHALAKQALAKAAAHQABAGgUAsQgTA0ADAvQABALACAIIADAKIgBADIAAADQAAACAKANQALANABAMQACAFgFACQgJgdgZgfg");
	this.shape_3.setTransform(22.1363,14.5974,1.0426,1.0426);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.A3, new cjs.Rectangle(0,0,25.6,28.5), null);


(lib.A2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#855F41").s().p("AAAAFQgFgCAAgBIABgCIgBgEIACACQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAIACAAQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAAAIgDADIgCAAIgBAAg");
	this.shape.setTransform(20.1167,26.062,1.0429,1.0429);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E2B13F","#E4B440","#EBBF43","#F6D047","#F9D548"],[0,0.345,0.651,0.937,1],16.5,2,-4.9,-2).s().p("ABJB/QgDgCgBgCQgEgbgPgMQgagFgRgUQgGgMAAgWIACgUQgLAWgQANQggAagTgqQgPghAVgtQAPggAcgdQAagMAaAAQAVAAAVAKQAFAKgDALQgCAJgJARQgPAagFAnQgGAwAUAcQARAbAHAVIAAAAQAFAAAAAEQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABIAAABIgBAAIgFgBgAgXgyQgYAkABAdQAAAKAJABQARAAAZgwQAXgsAAgOQAAgIgGAAIAAAAQgWAAgXAmg");
	this.shape_1.setTransform(12.1339,13.3651,1.0425,1.0425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E7B941","#F9D649"],[0,1],-3.1,-0.4,3.4,0.4).s().p("AgQBCQgTgdAGgvQAFgnAOgaQAKgSABgIQADgLgEgKQANAHAKAKQAJAKAAAGQAAAGgUAnQgSAvAAArQAAALACAHIACAJIgBAEIAAACQAAACAHAMQAIANABALQABAFgEABQgGgagUgfg");
	this.shape_2.setTransform(19.3927,13.9072,1.0425,1.0425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E7B941","#F9D649"],[0,1],-8.1,-1,7.1,0.8).s().p("AgUBiQgTgBgKgOQgLgOgBgYQAAgsAZgnQAagpAngSQgcAdgOAgQgWAsAPAiQATAqAfgaQARgNAMgWIgCAUQgBAWAGAMIgIgJIgXAQQgYAOgYAAIgDAAg");
	this.shape_3.setTransform(6.4006,11.4655,1.0426,1.0426);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.A2, new cjs.Rectangle(0,0,22.7,26.8), null);


(lib.A1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#855F41").s().p("AAAAEIgEgDIACgDQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIABAAIABACQABAAABABQABAAAAAAQAAAAAAAAQABABgBAAIAAADIgDAAIgBAAg");
	this.shape.setTransform(17.3391,24.4236,1.0426,1.0426);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E2B13F","#E4B440","#EBBF43","#F6D047","#F9D548"],[0,0.345,0.651,0.937,1],12.9,0.7,-2,-0.5).s().p("ABDB4IgBAAQgGAAgBgFQgEgZgMgMQgWgEgPgUQgFgMABgUIACgSQgKAUgOALQgdAYgQgoQgMgfAUgpQANgeAZgaQAXgLAWABQAUABARAKQAEAJgCAKQgDAJgIAPQgNAZgFAjQgHAsARAcQAOAXAGAYIABAAQAEACgBADIgDABgAgSgxQgVAiAAAaQAAAKAHABQAPABAXgsQAVgpAAgNQAAgHgFAAIgBAAQgSAAgVAhg");
	this.shape_1.setTransform(10.5156,12.4804,1.0426,1.0426);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E7B941","#F9D649"],[0,1],-4.7,0.2,6.6,-0.1).s().p("AgSBbQgQgBgJgOQgKgNABgXQAAgoAXgkQAXgmAigQQgZAbgMAdQgUApAMAfQAQAoAcgXQAOgMALgUIgCASQgBAVAFALIgHgIQgKAHgLAHQgTAMgUAAIgFAAg");
	this.shape_2.setTransform(5.5551,10.4436,1.0426,1.0426);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E7B941","#F9D649"],[0,1],-7,-0.3,1.6,0.1).s().p("AgQA9QgQgbAGgsQAFgkANgYQAIgQACgIQADgLgEgJQAMAHAIAKQAHAJAAAGQAAAGgSAkQgQAqgBApQAAARADAIIgBADIAAACQAAACAFAMQAHAMABAKQAAAFgDABQgFgZgQgdg");
	this.shape_3.setTransform(17.0339,13.0372,1.0426,1.0426);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.A1, new cjs.Rectangle(0,0,20,25), null);


(lib.astronaunt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.astronaunt();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.astronaunt_1, new cjs.Rectangle(0,0,160,600), null);


(lib.W = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EABUAqYIAAocIJCAAIifIcg");
	mask.setTransform(66.175,271.15);

	// W2
	this.instance = new lib.W2();
	this.instance.setTransform(115.2,555.35,1.0446,1.0446,-2.7078,0,0,7.9,61.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:8,rotation:1.4582,x:115.3,y:555.4},62,cjs.Ease.quadInOut).to({regX:7.9,rotation:-2.7078,x:115.2,y:555.35},60,cjs.Ease.quadInOut).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgBUAqXIAAocIJDAAIAAIcg");
	mask_1.setTransform(49.525,271.1);

	// W1
	this.instance_1 = new lib.W1();
	this.instance_1.setTransform(66.75,545.5,1.0364,1.0364,-8.3804,0,0,3.5,21);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:21.1,rotation:-13.9935,x:66.8,y:545.6},60,cjs.Ease.cubicInOut).to({regY:21,rotation:-8.3804,x:66.75,y:545.5},62,cjs.Ease.cubicInOut).wait(1));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AnGEnIAApNIONAAIAAJNg");
	mask_2.setTransform(89.5,514.5);

	// W
	this.instance_2 = new lib.text_wild();
	this.instance_2.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(123));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44,485,91,59);


(lib.L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkhEOIAAobIJDAAIAAIbg");
	mask.setTransform(178,515.5);

	// L1
	this.instance = new lib.L1();
	this.instance.setTransform(173.95,556.05,1.1822,1.1822,0,0,0,2.2,28.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:2.4,scaleX:1.1821,scaleY:1.1821,rotation:5.2353,x:174.2,y:556.1},67,cjs.Ease.quadInOut).to({regX:2.2,scaleX:1.1822,scaleY:1.1822,rotation:0,x:173.95,y:556.05},55,cjs.Ease.quadInOut).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EAI6ArDIAAqxIGaAAIAAKxg");
	mask_1.setTransform(98.0156,275.5005);

	// L
	this.instance_1 = new lib.text_wild();
	this.instance_1.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(123));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(155.1,482.1,44.5,68.89999999999998);


(lib.I = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai4FKIAAqTIFxAAIAAKTg");
	mask.setTransform(155.3,509.6);

	// I1
	this.instance = new lib.I1();
	this.instance.setTransform(127.35,539.55,1.1227,1.1227,5.0075,0,0,2.3,25.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:2.2,rotation:-5.2069,x:127.25},60,cjs.Ease.quadInOut).to({regX:2.3,rotation:5.0075,x:127.35},62,cjs.Ease.quadInOut).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EAI/ArIIAAsgIC+AAIAAMgg");
	mask_1.setTransform(76.5,276.0135);

	// I
	this.instance_1 = new lib.text_wild();
	this.instance_1.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(123));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(134,472.1,23,80);


(lib.D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkEEbIAAo1IDuAAQB8AABPBNQBQBNAAB+QAAB+hQBQQhPBPh8AAg");
	mask.setTransform(226.125,513.825);

	// D1
	this.instance = new lib.D1();
	this.instance.setTransform(262.45,513.55,1.2587,1.2587,-144.7576,0,0,1.9,25.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:25.3,rotation:-135.2721,x:262.35,y:513.65},61,cjs.Ease.sineInOut).to({regY:25.4,rotation:-144.7576,x:262.45,y:513.55},61,cjs.Ease.sineInOut).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EAKzAq5IAAqRIJDAAIAAKRg");
	mask_1.setTransform(127.0119,274.4934);

	// D
	this.instance_1 = new lib.text_wild();
	this.instance_1.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(123));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196.1,483.3,57.900000000000006,65.69999999999999);


(lib.RV_wheelSpinOut_mc = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9999,scaleY:0.9999,rotation:-720,x:38.05},44,cjs.Ease.cubicIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-15.5,107.19999999999999,107.1);


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


(lib.RV_AnimationOut_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ALMPVIjSiWIAAkEICghQIBaAKIAUAVQAYAaATAhQA8BpgNB9QgMB9hGAjQgZANgXAAQgKAAgKgDg");
	mask.setTransform(86.8578,98.3625);

	// wheelSpin_mc
	this.instance = new lib.RV_wheelSpinOut_mc();
	this.instance.setTransform(175.3,155.4,0.4735,0.5003,0,0,180,-0.3,0.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wheelSpin_mc
	this.instance_1 = new lib.RV_wheelSpinOut_mc();
	this.instance_1.setTransform(58.05,165.45,0.1905,0.3869,0,0,180,35.1,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// vehicle_mc
	this.instance_2 = new lib.RV_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RV_AnimationOut_mc, new cjs.Rectangle(0,0,300,250), null);


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
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// wheelSpin_mc
	this.instance = new lib.HI_wheelSpinOut_mc();
	this.instance.setTransform(148.5,171.05,0.4864,0.5603,0,0,180,38,37.6);

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

}).prototype = getMCSymbolPrototype(lib.HI_AnimationOut_mc, new cjs.Rectangle(-5.7,0,309.7,250), null);


(lib.HI_AnimationIn_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// wheelSpin_mc
	this.instance = new lib.HI_wheelSpinIn_mc();
	this.instance.setTransform(148.5,171.05,0.4864,0.5603,0,0,180,38,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wheelSpin_mc
	this.instance_1 = new lib.HI_wheelSpinIn_mc();
	this.instance_1.setTransform(42.55,162.4,0.2006,0.4198,0,0,180,34.6,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// vehicle_mc
	this.instance_2 = new lib.HI_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HI_AnimationIn_mc, new cjs.Rectangle(-5.7,0,309.7,250), null);


(lib.CY_wheelSpinOut_mc = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9999,scaleY:0.9999,rotation:-720,x:38.05},44,cjs.Ease.cubicIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-15.5,107.19999999999999,107.1);


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


(lib.CY_AnimationOut_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAdD0IjRiWIAAkDICghQIBZAKIAUAUQAYAbASAhQA8BpgMB8QgNB9hGAjQgYAMgXAAQgKAAgKgCg");
	mask.setTransform(161.6078,172.1125);

	// wheelSpin_mc
	this.instance = new lib.CY_wheelSpinOut_mc();
	this.instance.setTransform(182.6,151.95,0.4848,0.5003,0,0,180,-0.2,0.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wheelSpin_mc
	this.instance_1 = new lib.CY_wheelSpinOut_mc();
	this.instance_1.setTransform(49.65,164.65,0.1999,0.3669,0,0,180,35.8,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// vehicle_mc
	this.instance_2 = new lib.CY_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CY_AnimationOut_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.CY_AnimationIn_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAdD0IjRiWIAAkDICghQIBZAKIAUAUQAYAbASAhQA8BpgMB8QgNB9hGAjQgYAMgXAAQgKAAgKgCg");
	mask.setTransform(161.6078,172.1125);

	// wheelSpin_mc
	this.instance = new lib.CY_wheelSpinIn_mc();
	this.instance.setTransform(182.6,151.95,0.4848,0.5003,0,0,180,-0.2,0.3);

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

}).prototype = getMCSymbolPrototype(lib.CL_AnimationOut_mc, new cjs.Rectangle(-5,0,318,256), null);


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

}).prototype = getMCSymbolPrototype(lib.CL_AnimationIn_mc, new cjs.Rectangle(-5,0,318,256), null);


(lib.BIRD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// leftWing
	this.instance = new lib.leftWing();
	this.instance.setTransform(58,41.05,1,1,0,0,0,58,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:17.5,scaleX:1.3448,scaleY:0.6063,y:41.1},132,cjs.Ease.quartInOut).wait(1));

	// Body
	this.instance_1 = new lib.body();
	this.instance_1.setTransform(49.05,38,1,1,0,0,0,24.7,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(133));

	// rightWing
	this.instance_2 = new lib.rightWing();
	this.instance_2.setTransform(60,34,1,1,0,0,0,11,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.5588,y:34.05},132,cjs.Ease.quartInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,0,133.3,100.4);


(lib.BIG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AEuIBQi6jDAAk1QAAlGDTjEQDJi8E4AAQDJAAC2BYQA3AbAXA5QAWA6gXA5IgMAdQgZA9g+AZQhAAYg8gdQh2g5h1AAQiWAAhaBVQhoBhAAC6QAACwBcBcQBUBTCRAAQCfAABWhgQARgUgKgXQgKgYgaAAIhsAAQgzAAgkgkQgkgkAAgzIAAgoQAAgyAkglQAkgkAzAAIGbAAQAyAAAkAkQAkAlAAAyIAAIKQAAA1gmAmQgmAlg1AAIihAAQgQAAgMgLQgMgLAAgRQAAgYgVgLQgVgLgVAOQiCBbi3AAQkQAAi0i9gAkcJzQg2g1AAhMIAAvlQAAhLA2g2QA1g1BMAAQBLAAA1A1QA1A2AABLIAAPlQAABMg1A1Qg1A2hLAAQhMAAg1g2gAypKpQhuAAhOhOQhOhOAAhvIAAs9QAAhuBOhOQBOhOBuAAIEuAAQDFAABzBfQBwBeAACeQAACnh6BiQgRANADAVQABAVATAJQBQAqAtBPQAxBSAABqQAACohwBnQhyBqjDAAgAw7CXQgMAMAAAQIAACqQAAARAMALQAMAMAQAAICTAAQA9AAAjggQAkggAAg9QAAg8gjghQgjggg+AAIiTAAQgQAAgMAMgAw7l4QgMALAAARIAACqQAAARAMALQAMAMAQAAIBoAAQBIAAAlgiQAigeAAg5QAAg+gngiQgmgghCAAIhoAAQgQAAgMALg");
	mask.setTransform(93.325,414.375);

	// Layer_2
	this.instance = new lib.space_1();
	this.instance.setTransform(70.4,354.85,1.28,1.28,0,0,0,123.2,103.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:103.9,scaleX:1.4731,scaleY:1.4731,x:70.5,y:367},212).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.7,344.2,292.1,140.40000000000003);


(lib.bananas_AnimationOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_46 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(46).call(this.frame_46).wait(1));

	// exclamationBanana
	this.instance = new lib.exclamationBanana();
	this.instance.setTransform(180.2,29.2,1,1,0,0,0,14.8,23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:163.1,y:260.85},18,cjs.Ease.backIn).wait(28));

	// S
	this.instance_1 = new lib.S();
	this.instance_1.setTransform(155.1,31.25,1,1,0,0,0,10.1,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({x:138,y:262.9},18,cjs.Ease.backIn).wait(24));

	// A3
	this.instance_2 = new lib.A3();
	this.instance_2.setTransform(132.4,31.95,1,1,0,0,0,12.8,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({x:115.3,y:263.6},18,cjs.Ease.backIn).wait(21));

	// N2
	this.instance_3 = new lib.N2();
	this.instance_3.setTransform(111.85,31,1,1,0,0,0,18.1,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({x:94.75,y:262.65},18,cjs.Ease.backIn).wait(17));

	// A2
	this.instance_4 = new lib.A2();
	this.instance_4.setTransform(83.95,26.6,1,1,0,0,0,11.3,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({x:66.85,y:258.25},18,cjs.Ease.backIn).wait(13));

	// N1
	this.instance_5 = new lib.N1();
	this.instance_5.setTransform(67,28,1,1,0,0,0,13.7,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({x:49.9,y:259.65},18,cjs.Ease.backIn).wait(9));

	// A1
	this.instance_6 = new lib.A1();
	this.instance_6.setTransform(42.05,23,1,1,0,0,0,10,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({x:24.95,y:254.65},18,cjs.Ease.backIn).wait(5));

	// B
	this.instance_7 = new lib.B();
	this.instance_7.setTransform(16.6,20.6,1,1,0,0,0,16.6,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28).to({x:-0.5,y:252.25},18,cjs.Ease.backIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-22.9,213.7,307.59999999999997);


(lib.bananas_Animation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_52 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(52).call(this.frame_52).wait(1));

	// exclamationBanana
	this.instance = new lib.exclamationBanana();
	this.instance.setTransform(160.1,257.85,1,1,0,0,0,14.8,23.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({x:180.2,y:29.2},18,cjs.Ease.backOut).wait(1));

	// S
	this.instance_1 = new lib.S();
	this.instance_1.setTransform(135,259.9,1,1,0,0,0,10.1,12);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({x:155.1,y:31.25},18,cjs.Ease.backOut).wait(6));

	// A3
	this.instance_2 = new lib.A3();
	this.instance_2.setTransform(112.3,260.6,1,1,0,0,0,12.8,14.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({x:132.4,y:31.95},18,cjs.Ease.backOut).wait(11));

	// N2
	this.instance_3 = new lib.N2();
	this.instance_3.setTransform(91.75,259.65,1,1,0,0,0,18.1,18.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({x:111.85,y:31},18,cjs.Ease.backOut).wait(16));

	// A2
	this.instance_4 = new lib.A2();
	this.instance_4.setTransform(63.85,255.25,1,1,0,0,0,11.3,13.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({x:83.95,y:26.6},18,cjs.Ease.backOut).wait(21));

	// N1
	this.instance_5 = new lib.N1();
	this.instance_5.setTransform(46.9,256.65,1,1,0,0,0,13.7,16.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:67,y:28},18,cjs.Ease.backOut).wait(26));

	// A1
	this.instance_6 = new lib.A1();
	this.instance_6.setTransform(21.95,251.65,1,1,0,0,0,10,12.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({x:42.05,y:23},18,cjs.Ease.backOut).wait(31));

	// B
	this.instance_7 = new lib.B();
	this.instance_7.setTransform(-3.5,249.25,1,1,0,0,0,16.6,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:16.6,y:20.6},18,cjs.Ease.backOut).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.1,-22.6,217,304.3);


(lib.ASTROANIM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_177 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(177).call(this.frame_177).wait(2));

	// astro
	this.instance = new lib.astronaunt_1();
	this.instance.setTransform(165.1,485,0.9343,0.9343,0,0,0,157.5,516.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:157.6,regY:516.4,scaleX:1.0354,scaleY:1.0354,rotation:-8.9665,x:165.25,y:484.95},177).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.3,-43.5,260.5,639.4);


(lib.text_wildOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// D
	this.instance = new lib.D();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:419},31,cjs.Ease.cubicIn).wait(9));

	// L
	this.instance_1 = new lib.L();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({x:419},30,cjs.Ease.cubicIn).wait(7));

	// I
	this.instance_2 = new lib.I();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({x:419},30,cjs.Ease.cubicIn).wait(4));

	// W
	this.instance_3 = new lib.W();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({x:419},30,cjs.Ease.cubicIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,569,600);


(lib.text_wild_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// D
	this.instance = new lib.D();
	this.instance.setTransform(409,125,1,1,0,0,0,150,125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:150},30,cjs.Ease.cubicOut).wait(1));

	// L
	this.instance_1 = new lib.L();
	this.instance_1.setTransform(409,125,1,1,0,0,0,150,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({x:150},30,cjs.Ease.cubicOut).wait(4));

	// I
	this.instance_2 = new lib.I();
	this.instance_2.setTransform(409,125,1,1,0,0,0,150,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({x:150},30,cjs.Ease.cubicOut).wait(7));

	// W
	this.instance_3 = new lib.W();
	this.instance_3.setTransform(409,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:150},30,cjs.Ease.cubicOut).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,559,600);


(lib.birdAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Play a Movie Clip
		Plays the specified movie clip on stage.
		
		Instructions:
		1. Use this code for movie clips that are currently stopped.
		*/
		
		this.bird_mc.play();
	}
	this.frame_155 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(155).call(this.frame_155).wait(1));

	// bird
	this.bird_mc = new lib.BIRD();
	this.bird_mc.name = "bird_mc";
	this.bird_mc.setTransform(72.65,27.85,1,1,-23.661,0,0,46.8,39.6);

	this.timeline.addTween(cjs.Tween.get(this.bird_mc).to({regX:46.6,regY:39.5,rotation:35.1684,guide:{path:[72.7,27.9,58.8,31.5,40.3,35.2,-19.7,47.1,-79.4,47.1,-254.6,47.1,-366.8,-53.1]}},155,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-440,-93,579.3,202.5);


(lib.BIG_Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_239 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(239).call(this.frame_239).wait(1));

	// astro
	this.instance = new lib.ASTROANIM();
	this.instance.setTransform(-250.5,373.5,0.8035,0.8035,0.1697,0,0,159.1,119.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:119.7,scaleX:0.8577,scaleY:0.8577,rotation:0.1682,x:-245.5,y:177.75},239,cjs.Ease.sineOut).wait(1));

	// BIG
	this.instance_1 = new lib.BIG();
	this.instance_1.setTransform(-337.4,423.7,0.5763,0.5763,-0.2261,0,0,84,46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:83.9,scaleX:0.6151,scaleY:0.6151,rotation:-0.2231,x:-338.45,y:231.7},239,cjs.Ease.sineOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-443.3,76.8,237,653.2);


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
		
			legalDivHolder.style.width = "130px";
			legalDivHolder.style.height = "580px";
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
			legalDiv.style.top = "30px";
			legalDiv.style.width = "130px"
			legalDiv.style.height = "560px";
			legalDiv.style.overflow = "auto";
			legalDiv.style.fontFamily = "Arial";
			legalDiv.style.fontSize = "11px";
			legalDiv.style.color = "#333333";
			legalDiv.style.textAlign = "center";
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
		var delay = 200;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_46 = function() {
		var tl = this;
		tl.stop();
		var delay = 700;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_131 = function() {
		var tl = this;
		tl.stop();
		var delay = 1100;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_215 = function() {
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
	this.frame_299 = function() {
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
	this.frame_342 = function() {
		this.RV.play();
	}
	this.frame_350 = function() {
		this.CL.play();
	}
	this.frame_406 = function() {
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
	this.frame_407 = function() {
		this.RVOut.play();
	}
	this.frame_415 = function() {
		this.CLOut.play();
	}
	this.frame_438 = function() {
		this.HI.play();
	}
	this.frame_445 = function() {
		this.CY.play();
	}
	this.frame_490 = function() {
		var tl = this;
		tl.stop();
		var delay = 700;
		var startTime = createjs.Ticker.getTime();
		createjs.Ticker.addEventListener('tick', f);
		function f(e) {
			if (createjs.Ticker.getTime() - startTime > delay) {
				tl.play();
				createjs.Ticker.removeEventListener('tick', f);
			}
		}
	}
	this.frame_492 = function() {
		this.HIOut.play();
	}
	this.frame_499 = function() {
		this.CYOut.play();
	}
	this.frame_601 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(45).call(this.frame_46).wait(85).call(this.frame_131).wait(84).call(this.frame_215).wait(84).call(this.frame_299).wait(43).call(this.frame_342).wait(8).call(this.frame_350).wait(56).call(this.frame_406).wait(1).call(this.frame_407).wait(8).call(this.frame_415).wait(23).call(this.frame_438).wait(7).call(this.frame_445).wait(45).call(this.frame_490).wait(2).call(this.frame_492).wait(7).call(this.frame_499).wait(102).call(this.frame_601).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EAMgAu4I4/AAMAAAhdvIY/AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(602));

	// details_btn
	this.details_btn = new lib.details_btn();
	this.details_btn.name = "details_btn";
	this.details_btn.setTransform(81,514,1,1,0,0,0,18,7);
	new cjs.ButtonHelper(this.details_btn, 0, 1, 2, false, new lib.details_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.details_btn).wait(602));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(80,300,0.5333,2.4,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(602));

	// options
	this.instance = new lib.options_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(573).to({_off:false},0).to({alpha:1},28,cjs.Ease.cubicOut).wait(1));

	// cta
	this.instance_1 = new lib.cta_1();
	this.instance_1.setTransform(310,125,1,1,0,0,0,150,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(564).to({_off:false},0).to({x:150},37,cjs.Ease.cubicOut).wait(1));

	// offer_mc
	this.offer_mc = new lib.offer_mc();
	this.offer_mc.name = "offer_mc";
	this.offer_mc.setTransform(100.05,667,1,1,0,0,0,93,44);

	this.timeline.addTween(cjs.Tween.get(this.offer_mc).wait(557).to({x:130,y:487,alpha:0},0).to({alpha:1},28,cjs.Ease.cubicOut).wait(17));

	// offerTitle
	this.instance_2 = new lib.offerTitle_1();
	this.instance_2.setTransform(-16,125,1,1,0,0,0,150,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(545).to({_off:false},0).to({x:150},35,cjs.Ease.cubicOut).wait(22));

	// heroCar
	this.instance_3 = new lib.HI_AnimationIn_mc();
	this.instance_3.setTransform(-180.2,260.65,0.6642,0.6642,0,0,0,150.1,125.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(538).to({_off:false},0).to({regX:150,regY:125,scaleX:0.8026,scaleY:0.8026,x:45.5,y:276.85},44,cjs.Ease.cubicOut).wait(20));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_522 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_523 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_524 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_525 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_526 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_527 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_528 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_529 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_530 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_531 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_532 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_533 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_534 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_535 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_536 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_537 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_538 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_539 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_540 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_541 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_542 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_543 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_544 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_545 = new cjs.Graphics().p("AolSXIAA0TIUTAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(522).to({graphics:mask_graphics_522,x:224,y:170}).wait(1).to({graphics:mask_graphics_523,x:206.65,y:170}).wait(1).to({graphics:mask_graphics_524,x:190.8,y:170}).wait(1).to({graphics:mask_graphics_525,x:176.4,y:170}).wait(1).to({graphics:mask_graphics_526,x:163.35,y:170}).wait(1).to({graphics:mask_graphics_527,x:151.65,y:170}).wait(1).to({graphics:mask_graphics_528,x:141.15,y:170}).wait(1).to({graphics:mask_graphics_529,x:131.8,y:170}).wait(1).to({graphics:mask_graphics_530,x:123.55,y:170}).wait(1).to({graphics:mask_graphics_531,x:116.35,y:170}).wait(1).to({graphics:mask_graphics_532,x:110.1,y:170}).wait(1).to({graphics:mask_graphics_533,x:104.75,y:170}).wait(1).to({graphics:mask_graphics_534,x:100.2,y:170}).wait(1).to({graphics:mask_graphics_535,x:96.45,y:170}).wait(1).to({graphics:mask_graphics_536,x:93.35,y:170}).wait(1).to({graphics:mask_graphics_537,x:90.85,y:170}).wait(1).to({graphics:mask_graphics_538,x:88.9,y:170}).wait(1).to({graphics:mask_graphics_539,x:87.45,y:170}).wait(1).to({graphics:mask_graphics_540,x:86.45,y:170}).wait(1).to({graphics:mask_graphics_541,x:85.75,y:170}).wait(1).to({graphics:mask_graphics_542,x:85.3,y:170}).wait(1).to({graphics:mask_graphics_543,x:85.1,y:170}).wait(1).to({graphics:mask_graphics_544,x:85,y:170}).wait(1).to({graphics:mask_graphics_545,x:75,y:117.5}).wait(57));

	// eventLogo
	this.instance_4 = new lib.eventLogo_1();
	this.instance_4.setTransform(290,125,1,1,0,0,0,150,125);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(522).to({_off:false},0).to({x:150},23,cjs.Ease.cubicOut).wait(57));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Ap1CgIAAk/ITrAAIAAE/g");
	var mask_1_graphics_522 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_523 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_524 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_525 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_526 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_527 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_528 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_529 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_530 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_531 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_532 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_533 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_534 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_535 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_536 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_537 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_538 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_539 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_540 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_541 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_542 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_543 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_544 = new cjs.Graphics().p("ArACgIAAk/IWBAAIAAE/g");
	var mask_1_graphics_545 = new cjs.Graphics().p("ArAKtIAAlAIWBAAIAAFAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:67,y:120}).wait(522).to({graphics:mask_1_graphics_522,x:88.525,y:121}).wait(1).to({graphics:mask_1_graphics_523,x:72.275,y:121}).wait(1).to({graphics:mask_1_graphics_524,x:57.475,y:121}).wait(1).to({graphics:mask_1_graphics_525,x:44.025,y:121}).wait(1).to({graphics:mask_1_graphics_526,x:31.825,y:121}).wait(1).to({graphics:mask_1_graphics_527,x:20.825,y:121}).wait(1).to({graphics:mask_1_graphics_528,x:11.025,y:121}).wait(1).to({graphics:mask_1_graphics_529,x:2.275,y:121}).wait(1).to({graphics:mask_1_graphics_530,x:-5.425,y:121}).wait(1).to({graphics:mask_1_graphics_531,x:-12.175,y:121}).wait(1).to({graphics:mask_1_graphics_532,x:-18.025,y:121}).wait(1).to({graphics:mask_1_graphics_533,x:-23.025,y:121}).wait(1).to({graphics:mask_1_graphics_534,x:-27.275,y:121}).wait(1).to({graphics:mask_1_graphics_535,x:-30.775,y:121}).wait(1).to({graphics:mask_1_graphics_536,x:-33.675,y:121}).wait(1).to({graphics:mask_1_graphics_537,x:-36.025,y:121}).wait(1).to({graphics:mask_1_graphics_538,x:-37.825,y:121}).wait(1).to({graphics:mask_1_graphics_539,x:-39.175,y:121}).wait(1).to({graphics:mask_1_graphics_540,x:-40.125,y:121}).wait(1).to({graphics:mask_1_graphics_541,x:-40.775,y:121}).wait(1).to({graphics:mask_1_graphics_542,x:-41.175,y:121}).wait(1).to({graphics:mask_1_graphics_543,x:-41.375,y:121}).wait(1).to({graphics:mask_1_graphics_544,x:-41.475,y:121}).wait(1).to({graphics:mask_1_graphics_545,x:-41.4855,y:68.5}).wait(57));

	// logo
	this.instance_5 = new lib.logo_1();
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(602));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AlYH0IAAuXIPnAAIAAOXg");
	mask_2.setTransform(65.5,50);

	// Mark
	this.instance_6 = new lib.logo_1();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(602));

	// SAVINGS
	this.instance_7 = new lib.SAVINGS_OG();
	this.instance_7.setTransform(150.5,233,1,1,0,0,0,150,75);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(449).to({_off:false},0).to({x:150,y:75},21,cjs.Ease.cubicOut).wait(37).to({y:263},21,cjs.Ease.cubicIn).wait(74));

	// GREAT
	this.instance_8 = new lib.GREAT_OS();
	this.instance_8.setTransform(182.5,204,1,1,0,0,0,182,46);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(445).to({_off:false},0).to({x:182,y:46},21,cjs.Ease.cubicOut).wait(44).to({y:234},21,cjs.Ease.cubicIn).wait(71));

	// ON
	this.instance_9 = new lib.ON_GS();
	this.instance_9.setTransform(98.5,204,1,1,0,0,0,98,46);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(441).to({_off:false},0).to({x:98,y:46},21,cjs.Ease.cubicOut).wait(51).to({y:234},21,cjs.Ease.cubicIn).wait(68));

	// IN
	this.instance_10 = new lib.text_IN();
	this.instance_10.setTransform(378,125,1,1,0,0,0,150,125);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(349).to({_off:false},0).to({x:150},22,cjs.Ease.quartOut).wait(65).to({x:-72},21,cjs.Ease.cubicOut).to({_off:true},1).wait(144));

	// All
	this.instance_11 = new lib.text_ALL();
	this.instance_11.setTransform(378,125,1,1,0,0,0,150,125);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(344).to({_off:false},0).to({x:150},22,cjs.Ease.quartOut).wait(70).to({x:-72},21,cjs.Ease.cubicOut).to({_off:true},1).wait(144));

	// bird
	this.instance_12 = new lib.birdAnimation();
	this.instance_12.setTransform(227.7,521.9,0.8568,0.8568,0,0,0,63.4,58);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(209).to({_off:false},0).to({_off:true},70).wait(323));

	// wild
	this.instance_13 = new lib.text_wild_1();
	this.instance_13.setTransform(80.25,195.8,0.6751,0.6751,0,0,0,150,125.1);

	this.instance_14 = new lib.text_wildOut();
	this.instance_14.setTransform(221.35,195.8,0.6751,0.6751,0,0,0,358.9,125.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},173).to({state:[{t:this.instance_14}]},56).to({state:[]},50).wait(323));

	// bananas
	this.instance_15 = new lib.bananas_Animation();
	this.instance_15.setTransform(82,454.7,0.7606,0.7606,-3.7729,0,0,97.8,26.7);

	this.instance_16 = new lib.bananas_AnimationOut();
	this.instance_16.setTransform(81.95,454.7,0.7606,0.7606,-3.7729,0,0,97.7,26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},91).to({state:[{t:this.instance_16}]},50).to({state:[]},42).wait(419));

	// text_go
	this.instance_17 = new lib.text_go_1();
	this.instance_17.setTransform(150,227,1,1,0,0,0,150,125);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(23).to({_off:false},0).to({y:125},19,cjs.Ease.backOut).wait(25).to({y:45},24,cjs.Ease.cubicOut).wait(345).to({x:-72},21,cjs.Ease.cubicOut).to({_off:true},1).wait(144));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_67 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_69 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_70 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_72 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_73 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_74 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_75 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_76 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_77 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_78 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_79 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_80 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_81 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_83 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_84 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_85 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_86 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_87 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_88 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_89 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_90 = new cjs.Graphics().p("AtRGzIAAtlIajAAIAANlg");
	var mask_3_graphics_91 = new cjs.Graphics().p("AtRetIAAtmIajAAIAANmg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(67).to({graphics:mask_3_graphics_67,x:85,y:429.575}).wait(1).to({graphics:mask_3_graphics_68,x:85,y:419.975}).wait(1).to({graphics:mask_3_graphics_69,x:85,y:411.175}).wait(1).to({graphics:mask_3_graphics_70,x:85,y:403.175}).wait(1).to({graphics:mask_3_graphics_71,x:85,y:395.875}).wait(1).to({graphics:mask_3_graphics_72,x:85,y:389.225}).wait(1).to({graphics:mask_3_graphics_73,x:85,y:383.275}).wait(1).to({graphics:mask_3_graphics_74,x:85,y:377.975}).wait(1).to({graphics:mask_3_graphics_75,x:85,y:373.225}).wait(1).to({graphics:mask_3_graphics_76,x:85,y:369.075}).wait(1).to({graphics:mask_3_graphics_77,x:85,y:365.425}).wait(1).to({graphics:mask_3_graphics_78,x:85,y:362.225}).wait(1).to({graphics:mask_3_graphics_79,x:85,y:359.525}).wait(1).to({graphics:mask_3_graphics_80,x:85,y:357.225}).wait(1).to({graphics:mask_3_graphics_81,x:85,y:355.325}).wait(1).to({graphics:mask_3_graphics_82,x:85,y:353.725}).wait(1).to({graphics:mask_3_graphics_83,x:85,y:352.475}).wait(1).to({graphics:mask_3_graphics_84,x:85,y:351.525}).wait(1).to({graphics:mask_3_graphics_85,x:85,y:350.775}).wait(1).to({graphics:mask_3_graphics_86,x:85,y:350.225}).wait(1).to({graphics:mask_3_graphics_87,x:85,y:349.875}).wait(1).to({graphics:mask_3_graphics_88,x:85,y:349.675}).wait(1).to({graphics:mask_3_graphics_89,x:85,y:349.575}).wait(1).to({graphics:mask_3_graphics_90,x:85,y:349.525}).wait(1).to({graphics:mask_3_graphics_91,x:85,y:196.525}).wait(511));

	// text_RSG
	this.instance_18 = new lib.text_RS_1();
	this.instance_18.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(67).to({alpha:0},24,cjs.Ease.quartOut).wait(511));

	// CorollaOut
	this.instance_19 = new lib.CL_AnimationOut_mc();
	this.instance_19.setTransform(43.4,251.9,0.8985,0.8985,0,0,0,150.1,125);
	this.instance_19._off = true;

	this.CLOut = new lib.CL_AnimationOut_mc();
	this.CLOut.name = "CLOut";
	this.CLOut.setTransform(125.2,274.45,0.7784,0.7784,0,0,180,153.9,128.2);
	this.CLOut._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(47).to({_off:false},0).to({regX:150.2,scaleX:1.0135,scaleY:1.0135,x:311.2,y:275.3},44,cjs.Ease.cubicIn).to({_off:true},1).wait(510));
	this.timeline.addTween(cjs.Tween.get(this.CLOut).wait(415).to({_off:false},0).to({regX:153.8,scaleX:0.8199,scaleY:0.8199,x:-115.95,y:298.95},44,cjs.Ease.cubicIn).to({_off:true},1).wait(142));

	// CorollaIn
	this.instance_20 = new lib.CL_AnimationIn_mc();
	this.instance_20.setTransform(-189.35,239.45,0.7436,0.7436,0,0,0,150.1,125.4);
	this.instance_20._off = true;

	this.CL = new lib.CL_AnimationIn_mc();
	this.CL.name = "CL";
	this.CL.setTransform(315.85,262.35,0.6784,0.6784,0,0,180,147.4,132.2);
	this.CL._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(2).to({_off:false},0).to({regY:125,scaleX:0.8985,scaleY:0.8985,x:43.4,y:251.9},44,cjs.Ease.cubicOut).to({_off:true},1).wait(555));
	this.timeline.addTween(cjs.Tween.get(this.CL).wait(350).to({_off:false},0).to({scaleX:0.7784,scaleY:0.7784,x:130.25,y:277.55},44,cjs.Ease.cubicOut).to({_off:true},21).wait(187));

	// RAV4Out
	this.instance_21 = new lib.RV_AnimationOut_mc();
	this.instance_21.setTransform(43.4,251.9,0.8985,0.8985,0,0,0,150.1,125);
	this.instance_21._off = true;

	this.RVOut = new lib.RV_AnimationOut_mc();
	this.RVOut.name = "RVOut";
	this.RVOut.setTransform(70.9,240.55,0.5141,0.5141,0,0,180,149.7,125.2);
	this.RVOut._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(132).to({_off:false},0).to({regX:150.2,scaleX:1.0135,scaleY:1.0135,x:311.2,y:275.3},44,cjs.Ease.cubicIn).to({_off:true},1).wait(425));
	this.timeline.addTween(cjs.Tween.get(this.RVOut).wait(407).to({_off:false},0).to({regX:150.1,regY:125.5,scaleX:0.5415,scaleY:0.5415,x:-86.55,y:265.3},44,cjs.Ease.cubicIn).to({_off:true},1).wait(150));

	// RAV4In
	this.instance_22 = new lib.RV_AnimationIn_mc();
	this.instance_22.setTransform(-189.35,239.45,0.7436,0.7436,0,0,0,150.1,125.4);
	this.instance_22._off = true;

	this.RV = new lib.RV_AnimationIn_mc();
	this.RV.name = "RV";
	this.RV.setTransform(228.4,218.3,0.4481,0.4481,0,0,180,149.7,125.2);
	this.RV._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(87).to({_off:false},0).to({regY:125,scaleX:0.8985,scaleY:0.8985,x:43.4,y:251.9},44,cjs.Ease.cubicOut).to({_off:true},1).wait(470));
	this.timeline.addTween(cjs.Tween.get(this.RV).wait(342).to({_off:false},0).to({scaleX:0.5141,scaleY:0.5141,x:70.9,y:240.55},44,cjs.Ease.cubicOut).to({_off:true},21).wait(195));

	// CamryOut
	this.instance_23 = new lib.CY_AnimationOut_mc();
	this.instance_23.setTransform(43.4,251.9,0.8985,0.8985,0,0,0,150.1,125);
	this.instance_23._off = true;

	this.CYOut = new lib.CY_AnimationOut_mc();
	this.CYOut.name = "CYOut";
	this.CYOut.setTransform(121,284.1,0.7878,0.7878,0,0,180,149.9,125.2);
	this.CYOut._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(216).to({_off:false},0).to({regX:150.2,scaleX:1.0135,scaleY:1.0135,x:311.2,y:275.3},44,cjs.Ease.cubicIn).to({_off:true},1).wait(341));
	this.timeline.addTween(cjs.Tween.get(this.CYOut).wait(499).to({_off:false},0).to({regX:150,regY:125.5,scaleX:0.8298,scaleY:0.8298,x:-120,y:310},44,cjs.Ease.cubicIn).to({_off:true},1).wait(58));

	// HighlanderOut
	this.instance_24 = new lib.HI_AnimationOut_mc();
	this.instance_24.setTransform(48.55,255.1,0.8227,0.8227,0,0,0,150,125.1);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(300).to({_off:false},0).to({regX:150.2,regY:125,scaleX:0.9279,scaleY:0.9279,x:293.8,y:276.45},44,cjs.Ease.cubicIn).to({_off:true},1).wait(257));

	// CamryIn
	this.instance_25 = new lib.CY_AnimationIn_mc();
	this.instance_25.setTransform(-189.35,239.45,0.7436,0.7436,0,0,0,150.1,125.4);
	this.instance_25._off = true;

	this.CY = new lib.CY_AnimationIn_mc();
	this.CY.name = "CY";
	this.CY.setTransform(286.95,266.5,0.6866,0.6866,0,0,180,149.8,125.2);
	this.CY._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(171).to({_off:false},0).to({regY:125,scaleX:0.8985,scaleY:0.8985,x:43.4,y:251.9},44,cjs.Ease.cubicOut).to({_off:true},1).wait(386));
	this.timeline.addTween(cjs.Tween.get(this.CY).wait(445).to({_off:false},0).to({regX:149.9,scaleX:0.7878,scaleY:0.7878,x:121,y:284.1},44,cjs.Ease.cubicOut).to({_off:true},10).wait(103));

	// HighlanderOut_LineUP
	this.HIOut = new lib.HI_AnimationOut_mc();
	this.HIOut.name = "HIOut";
	this.HIOut.setTransform(73.45,255.45,0.5021,0.5021,0,0,180,149.8,125.2);
	this.HIOut._off = true;

	this.timeline.addTween(cjs.Tween.get(this.HIOut).wait(492).to({_off:false},0).to({regX:150.1,regY:125.4,scaleX:0.5289,scaleY:0.5289,x:-86.35,y:276.5},44,cjs.Ease.cubicIn).to({_off:true},1).wait(65));

	// HighlanderIn
	this.instance_26 = new lib.HI_AnimationIn_mc();
	this.instance_26.setTransform(-164.5,243.7,0.6808,0.6808,0,0,0,150.1,125.5);
	this.instance_26._off = true;

	this.HI = new lib.HI_AnimationIn_mc();
	this.HI.name = "HI";
	this.HI.setTransform(233.45,241.1,0.4376,0.4376,0,0,180,149.6,125.5);
	this.HI._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(255).to({_off:false},0).to({regX:150,regY:125.1,scaleX:0.8227,scaleY:0.8227,x:48.55,y:255.1},44,cjs.Ease.cubicOut).to({_off:true},1).wait(302));
	this.timeline.addTween(cjs.Tween.get(this.HI).wait(438).to({_off:false},0).to({regX:149.8,regY:125.2,scaleX:0.5021,scaleY:0.5021,x:73.45,y:255.45},44,cjs.Ease.cubicOut).to({_off:true},10).wait(110));

	// Big
	this.instance_27 = new lib.BIG_Animation();
	this.instance_27.setTransform(415.95,537.85,1,1,0,0,0,2.1,525.5);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(255).to({_off:false},0).wait(82).to({alpha:0},11).to({_off:true},1).wait(253));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.6,220,700.8,586.5);
// library properties:
lib.properties = {
	id: '6DBC25FFFD4048B3B488CE195B1E3C32',
	width: 160,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/astronaunt.png?1582670502473", id:"astronaunt"},
		{src:"images/birdBody.png?1582670502473", id:"birdBody"},
		{src:"images/CL.jpg?1582670502473", id:"CL"},
		{src:"images/CL_wheel.png?1582670502473", id:"CL_wheel"},
		{src:"images/cta.png?1582670502473", id:"cta"},
		{src:"images/CY.jpg?1582670502473", id:"CY"},
		{src:"images/CY_wheel.png?1582670502473", id:"CY_wheel"},
		{src:"images/details.png?1582670502473", id:"details"},
		{src:"images/eventLogo.png?1582670502473", id:"eventLogo"},
		{src:"images/HI.jpg?1582670502473", id:"HI"},
		{src:"images/HI_wheel.png?1582670502473", id:"HI_wheel"},
		{src:"images/logo.png?1582670502473", id:"logo"},
		{src:"images/offerEnds.png?1582670502473", id:"offerEnds"},
		{src:"images/offerTitle.png?1582670502473", id:"offerTitle"},
		{src:"images/options.png?1582670502473", id:"options"},
		{src:"images/RV.jpg?1582670502473", id:"RV"},
		{src:"images/RV_wheel.png?1582670502473", id:"RV_wheel"},
		{src:"images/space.jpg?1582670502473", id:"space"},
		{src:"images/text_ALLin.png?1582670502473", id:"text_ALLin"},
		{src:"images/text_go.png?1582670502473", id:"text_go"},
		{src:"images/text_greatSavings.png?1582670502473", id:"text_greatSavings"},
		{src:"images/text_RS.png?1582670502473", id:"text_RS"},
		{src:"images/text_wild.png?1582670502473", id:"text_wild"},
		{src:"images/wing1.png?1582670502473", id:"wing1"},
		{src:"images/wing2.png?1582670502473", id:"wing2"}
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