(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.astronaunt = function() {
	this.initialize(img.astronaunt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


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
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


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
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.eventLogo = function() {
	this.initialize(img.eventLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


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
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.offerEnds = function() {
	this.initialize(img.offerEnds);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.offerTitle = function() {
	this.initialize(img.offerTitle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.options = function() {
	this.initialize(img.options);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


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
p.nominalBounds = new cjs.Rectangle(0,0,493,323);


(lib.text_ALLin = function() {
	this.initialize(img.text_ALLin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text_go = function() {
	this.initialize(img.text_go);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text_greatSavings = function() {
	this.initialize(img.text_greatSavings);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text_RS = function() {
	this.initialize(img.text_RS);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text_wild = function() {
	this.initialize(img.text_wild);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


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
	this.shape.setTransform(9.6647,30.9831,0.9203,0.9203);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.W2, new cjs.Rectangle(0,0,19.4,62), null);


(lib.W1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4E6128","#6B753E","#8A8B57"],[0,0.38,0.835],2.7,12.5,-17.5,0.9).s().p("AhyBnIgBgDIAJgRQAHgdgFgdQgFgWgNgjIAAAAQAcA3gHA2QALgSARgSQgEgLABgSQAAgVACgKIAHgiQAEgWABgNIAAgBIABAAQAAANgEATIgHAgQgCAQgBASQABAUADAKIARgSQAFgHAGgQQAEgOACgRIACgaQACgPAEgJIABAAQgEALgBATIgDAeQgCAQgGAPIgDAHIAUgQQAHgHADgIIALgZQAMgiANgRIAAABQgLASgPAoIgKAZIgBABIACgCQAWgPAYgYIAVgYQAKgMAHgTQABgBAAABQgDAOgLAQQgHAJgPAQIgWAXQAzgdA8gJQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgxAIgrAWQgSAIgSANQAJgCANADIAYAEQAdAGAhgHIABAAIgBABQgaAHgcgDIgdgGQgRgDgKABIgYARQAJgBAMAEIATAJQAjARAZgEIABABIgBABQgXAEgagMIgbgMQgRgHgKADQgMAJgFAGQAIADALAIIARAPQAYAQAZAAIABABIgBABQgWABgVgOQgIgEgMgKQgRgNgHgDIgRARIAAABQAQATAgALQAWAHAhACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQgfAAgbgKQgggMgNgRQgSAUgMATIAGACIgDADIgGgBIgJAQIgBgBg");
	this.shape.setTransform(14.4138,12.6334,0.9999,0.9999,2.4508);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4E6128","#666129"],[0,1],6.3,10,-17.2,-3.6).s().p("Ah6BuIABgFQACgDAAgGIABgLQAAgIgBgMQgBgUgGgUQgIgcgTgwQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAhATALAnQAKAhgGApQAIgIABgNQABgHAAgRQgBgYADgUQAGgzAWgnQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAIACABIgEBOIgCAeQgCASgEANQANgPAFgSIACgSIAAgUQADggAZgsQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIABACQgEAPgFAxQgDAogNAVQALgJAIgPIAHgSQADgPADgFQANgjAcgZIACgBQABABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgQAsgEAIQgLAcgPAUQAdgUAQgXQAQgWASgsQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIABABQAOArg0AqIAPgIQAVgNAOgHQAQgHAVABQAPgBAWAEIABACIgBACQggAVguAJIgmAJQgUAGgQAJQAnAFAWAAQAhgBAbgNIACAAIAAACQgYAcgpABQgUAAgUgFIgUgHQgOgDgFAJQAwAbBBgBIABABQAAAAAAABQABAAgBABQAAAAAAAAQAAAAAAAAQgbARgpgHQgTgDgTgJIgUgMQgIgEgKAMQAJAIARAGIAbAJQAZAJAYAPIABACIgCACQgfADgbgIQgcgKgWgWIgCgDIgEgBQgFABABAIQABAKAwARQAPAFAVAEIAkAGIACABQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQhUARgsgrQgGgGgBAAQgDAAgFAHIgJAPIgCABIgDAFIgBABIAAABQgGAFgBAGIgBABIgLgEg");
	this.shape_1.setTransform(15.1787,11.0524,0.9999,0.9999,2.4508);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.W1, new cjs.Rectangle(0,0,30.9,22.6), null);


(lib.L1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1F3729","#334F2C"],[0,1],-10.2,0,10.3,0).s().p("AhaDUIgCgBIAAgBIADgRIgMgRIAAgFIABACIALARIACgRIgOgUIAAgFIACAEIANASIAHghQgGgEgLgMIgEgEIAAgEIAFAFIAQARIACgIQgIgFgNgNIABgFIAVAUIAHgYIgWgVIgDgDIgDgHIgBgCIAKALIATATIAFgMQgFgEgSgWIgLgOIABgEIAPASIATAXIAFgUQgKgNgTgfIACgFIAdAuIAEgMIgXgyIgNghIAAgEIAQAkIALAYIAKAYIAQgpQgGgHgQgfIgNgYIADgCIAMAXQAHAOAOAYIAHgNIgBAAIgMgRIgKgRIgKgTIACgDIAgA2IARglIgPgRIgNgTIgPgUIAAgFIAsA7IAIgRIAAAAIAEgKIAAAAIgeg+IADgBIAdA8IAFgJIAHgMIAAgCIgSgxIACgDIATAyIAAABIAGgKIAAAAIgOg6IADgEIANA7IAYghIgLgqIADAAIAKAnIAPgSQgEgLgGgMIACgCIAKAWIAIgKIgBAAIgHgUIADgCIAGAUIATgWIABACIgMAOIANADIgBADIgNgEIgBABIgQAVIASAAIgBAEQgLAAgIgCIgPATIAhgCIABAEIgkABIgLAPIAUgCIAegGIABADIgTADQggAHgDgBIgPAXIA1gOIAQgEIgCADIhFASIgEAIQANgFAggGIALgDIgDAEIgGABQghAJgQADIgMAUIAuAAIASgBIABAEIgsAAQgRAAgFgBIgNAdIAaABIAwACIgCADIgWgBQgjgBgQgCIgFAKQARgBAjABIAWgBIgDADIhIABIgQAkIA6gEIAOgCIAAAEIgSABQggAEgXgBIgJAYIBWgDIAAAAIAAADIg9ADIgZgBIgHAQIA3gEIAhgBIgDAEIgcAAIg5ADIgLAiQAIgCAPgBIAogFIgBADIgpAFIgWACIgHAaQANgBAhgJIAWgFIAAADIgYAGQgdAIgQAAIgCAMIAwgKIAUgFIgCAEIgTAEQghAIgPADIgEAPIAOACIAQABIAIAAIgBAEIgIgBQgXgBgHgCIgCAQIAgAAIADAAIgBAEIgCAAQgXAAgKgCIgDASIAfgFIgEAEIgcAEIgCATIgBABIgBgBg");
	this.shape.setTransform(10.8305,16.6824,0.8795,0.8041,4.7729);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#1F3729","#334F2C"],[0,1],-0.7,0,0.8,0).s().p("AAABuQgFgcgBhOQgBhJAEggIABgLIADAAQgDAiACBOQABBKAGAlQAAAAAAABQAAAAAAAAQgBABgBAAQgBAAgBAAQgDgBAAgCg");
	this.shape_1.setTransform(0.9605,41.0753,0.8795,0.8041,4.7729);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#4E6128","#6B753E","#8A8B57"],[0,0.38,0.835],-10.3,0,10.4,0).s().p("AhaDWQgLgHAAgSIgBgbIAAgfQABgRAGgMQAFgKgCgJQgBgFgEgHQgEgNACgKIALgZQAFgNgEgRQgDgQABgHQABgNAJgHQAOgJAGgGQAGgIABgSIAAgWQACgNAHgHQAGgFAQgEQAPgEAGgHQADgFAIgNQAHgMAGgFQAHgGAJAAQAPAAAEgCIAMgJQAIgHAJgBQALgCAEALQADAKgJANQgLAPgBAHQAAADAHATQAFAMgJAIIgLAHQgHAFgCAFQgDAHACATQACAPgBAHQgBAMgHAJIgSATQgHAKAEARQADAPAAAHQgBAMgJAIIgSANQgMAIgCAJQgCAFgBAKIgBAPQgEAKgKAIQgRALgEAIIgFANIgGAMQgNAXgZAMIgBABIgBgBg");
	this.shape_2.setTransform(10.8841,16.5381,0.8795,0.8041,4.7729);

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

}).prototype = getMCSymbolPrototype(lib.text_RS_1, new cjs.Rectangle(0,0,300,250), null);


(lib.text_IN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjlDmIAAnLIHLAAIAAHLg");
	mask.setTransform(216,45);

	// IN
	this.instance = new lib.text_ALLin();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text_IN, new cjs.Rectangle(193,22,46,46), null);


(lib.text_go_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text_go();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text_go_1, new cjs.Rectangle(0,0,300,250), null);


(lib.text_ALL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlTDhIAAnBIKnAAIAAHBg");
	mask.setTransform(163,45.5);

	// ALL
	this.instance = new lib.text_ALLin();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text_ALL, new cjs.Rectangle(129,23,68,45), null);


(lib.space_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.space();
	this.instance.setTransform(0,0,0.5,0.6424);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.space_1, new cjs.Rectangle(0,0,246.5,207.5), null);


(lib.SAVINGS_OG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsVC0IAAlnIYrAAIAAFng");
	mask.setTransform(157,79);

	// SAVINGS
	this.instance = new lib.text_greatSavings();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SAVINGS_OG, new cjs.Rectangle(78,61,158,36), null);


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

}).prototype = getMCSymbolPrototype(lib.options_1, new cjs.Rectangle(0,0,300,250), null);


(lib.ON_GS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkhCgIAAk/IJDAAIAAE/g");
	mask.setTransform(98,46);

	// ON
	this.instance = new lib.text_greatSavings();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ON_GS, new cjs.Rectangle(69,30,58,32), null);


(lib.offerTitle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.offerTitle();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.offerTitle_1, new cjs.Rectangle(0,0,300,250), null);


(lib.offer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// *
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAOIgJARIgQgMIANgPIgTgEIAGgSIASAIIgCgUIATAAIgCAUIASgIIAGASIgTAEIANAPIgQAMg");
	this.shape.setTransform(80.175,-2.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// dynamic_field1
	this.dynamic_field1 = new cjs.Text("0.0%", "bold 30px 'Toyota Type Black'");
	this.dynamic_field1.name = "dynamic_field1";
	this.dynamic_field1.lineHeight = 43;
	this.dynamic_field1.lineWidth = 82;
	this.dynamic_field1.parent = this;
	this.dynamic_field1.setTransform(-1.75,-19.8,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field1).wait(1));

	// dynamic_field2
	this.dynamic_field2 = new cjs.Text("APR FOR 00 MONTHS", "8px 'Toyota Type'");
	this.dynamic_field2.name = "dynamic_field2";
	this.dynamic_field2.lineHeight = 11;
	this.dynamic_field2.lineWidth = 162;
	this.dynamic_field2.parent = this;
	this.dynamic_field2.setTransform(86.1427,-9.8,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field2).wait(1));

	// dynamic_field3
	this.dynamic_field3 = new cjs.Text("$0 DOWN WITH APPROVED CREDIT", "8px 'Toyota Type'");
	this.dynamic_field3.name = "dynamic_field3";
	this.dynamic_field3.lineHeight = 9;
	this.dynamic_field3.lineWidth = 94;
	this.dynamic_field3.parent = this;
	this.dynamic_field3.setTransform(86.1286,0.2,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field3).wait(1));

	// dynamic_field4
	this.dynamic_field4 = new cjs.Text("PLUS $500 BONUS CASH", "bold 9px 'Toyota Type Black'");
	this.dynamic_field4.name = "dynamic_field4";
	this.dynamic_field4.textAlign = "center";
	this.dynamic_field4.lineHeight = 13;
	this.dynamic_field4.lineWidth = 162;
	this.dynamic_field4.parent = this;
	this.dynamic_field4.setTransform(92.9821,83.2,1.1202,1.0991);

	this.timeline.addTween(cjs.Tween.get(this.dynamic_field4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.offer_mc, new cjs.Rectangle(-4,-22,273.9,121.5), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,300,250), null);


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
	mask.graphics.p("AoWCbIAAk1IQtAAIAAE1g");
	mask.setTransform(176.5,44.5);

	// great
	this.instance = new lib.text_greatSavings();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GREAT_OS, new cjs.Rectangle(123,29,107,31), null);


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

}).prototype = getMCSymbolPrototype(lib.eventLogo_1, new cjs.Rectangle(0,0,300,250), null);


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

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,300,250), null);


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
	this.shape_1.setTransform(16.9066,9.8507,1.0426,1.0426);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E7B941","#F9D649"],[0,1],-8.2,-1,8.5,0.8).s().p("AgHBrQgugCgUglQgOgaADgfQACgRgEgPQgEACgCgCQgDgEAFgFIAAgBQADgDADAAQADAAACAEQAEALgBARQgCAPABACIAFAGQAGAHABAGQADAPAQAKQANAJANACQAFABAEgEQAEgDAAgFQABgUgjgdQgkgcABgZQACggAigRQAggSAvAEQAjADAMARQAJAMgBAWQgBAOgJAOQgKAPgLgBIgCgBQAKgNAGgSQAIgYgHgNQgLgSgnABQgqABgYAcQgWAZAnAZQAVAOAtAVQAcASgPAkQgPAjgrAAIgHAAg");
	this.shape_2.setTransform(10.377,11.1657,1.0426,1.0426);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E7B941","#F9D649"],[0,0.361],11.7,0.2,-25.1,-0.3).s().p("AgUBsQgogEgTgfQgMgTAAgTIABgJIABgGIACgFQAMgUgKgfQgBgDAFgFQAIATgCAYQgEAeAPAaQATAlAtACQAyADAQgmQAQgkgcgSQgugVgVgOQgmgZAWgZQAYgcApgBQAogBAKASQAIANgJAYQgGASgKANQgFgBgBgMQgGgegSgCQgGAAgEADQgEAEgBAGQgBAPAjAdQAjAdgCAbQgCAjgcARQgWAOgiAAQgLAAgOgCg");
	this.shape_3.setTransform(9.4814,12.5055,1.0426,1.0426);

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
	this.shape_1.setTransform(9.2496,0.7534,1.0426,1.0426);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E2B13F","#E4B440","#EBBF43","#F6D047","#F9D548"],[0,0.345,0.651,0.937,1],18.9,3.9,-6.4,-0.5).s().p("AALCwQglgGgXgdQgYgeAEgnQADgtAgg2QAfg4AAgHQABgLgJgBQgIgBgNAJQgPALgNATQgTAcgPAgQgRAigCAUQgBAIgCADQgCAEgHgBQgTgDgQgHQAJgmAeg4IArhLQARgdgqghQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAgADALAfQAGAPABAOIgBANQgBACAhgZQAngZAbAMQAgANgiA4QgrA7gEALQgWA8ALApQARBMCBgwIARgFQABgFAEAAQABAAABAAQABAAAAABQABAAAAAAQABAAAAABQADADgDAHQgDAGgDAAQghgDgPAXIgCACQgKALgWAFQgNADgPAAQgQAAgRgDg");
	this.shape_2.setTransform(19.3699,18.8947,1.0426,1.0426);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E7B941","#F9D649"],[0,0.243],-12.2,-1.9,45.6,8.6).s().p("AhBARQADgKAzhNQAigzgdgOQgbgMgnAXQghAZAAgCIABgNQABAAAdgVQAkgUAhAEQAVADALANQALAOgCAUQgBAVgdA2QgdA1gDAiQgCAaANATQAOATAZAFQALACAIgBIAIgBIABAAQAEAAAEACQACABAOgHQAPgHALACQABAAAAAAQABAAABAAQAAAAAAABQABAAAAABIgbAIQg6AWgkAAQhdAAAriIg");
	this.shape_3.setTransform(24.9664,18.8062,1.0426,1.0426);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E7B941","#F9D649"],[0,1],-5.6,-1,5.5,1).s().p("Ag3BVQACgWApg8QAog7ACgbIgDgQQgDgNADgDQApAhgRAdIgqBKQgeA5gJAmQgbgNACgSg");
	this.shape_4.setTransform(5.7726,12.4305,1.0426,1.0426);

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
	this.shape_2.setTransform(13.2524,15.6329,1.0426,1.0426);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E7B941","#F9D649"],[0,1],-9.7,-1.2,3.2,0.7).s().p("Ag3BnQgMgcAQg7QACgJAnhCQAYgtgWgLQgWgJgeAVQgZAWAAgCIABgLQABAAAWgTQAcgSAZACQARACAJALQAJALgBARQgBASgWAvQgUAugBAdQgBAXAKAPQAKAQAVACQAPACAGgDIABAAQADAAADACQACABAKgHQAMgGAIABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIgVAJQgwAWgdAAQghAAgKgbg");
	this.shape_3.setTransform(17.4546,15.3221,1.0426,1.0426);

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
	this.shape_1.setTransform(6.5417,36.4335,1.0426,1.0426);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E7B941","#F9D649"],[0,1],19.2,5,-23.5,-7.1).s().p("AhaCwIgCgBIgBAAIgDgCIgCgCQgDgCgFgJIgCgFIgNgXQgMgaACgeQADglACgRIAAgBIAMgqIALgbQAJgRAOgUQASgYAQgMIANgKQAQgNAIgFQATgMAKgBIACAAIADgBIAEAAQAQAAAIAFIABAAIABABIAAAAQAMACAXgHIAJgDIALgDIABgCIACgBIABgBIADgCIACgBIAAAAIAEAAQAEAAACADIACADIgCACIACAFQABAEgBADQgBAEgDABQgGABgEgJQgFADgIACIggAHQgQADgQABQgnAAgpA0Qg8BKAICIQACAiAIAWIgFAAIgBAAIgCAAg");
	this.shape_2.setTransform(15.5192,18.3443,1.0426,1.0426);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E7B941","#F9D649"],[0,1],13.5,4.6,-8.7,-3.1).s().p("AhwB1QgIiHA8hLQAqg0AmAAQAQgBAQgDIAggHQASgEAJgMQAEAGgBAJIgBACIgFAFIgCACIgCACIgDAEIgLAEIgEABIgOAEIgTAJIgGAFIgvA1QgdAggOAcQgJATgGAZQgFAVgCAQIgBAKQgCAVgDAJQgHAZgNAZIgEAEIgBAAIgBABIgDACIgCABQgIgWgCgig");
	this.shape_3.setTransform(17.6285,18.631,1.0426,1.0426);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E2B13F","#E4B440","#EBBF43","#F6D047","#F9D548"],[0,0.345,0.651,0.937,1],-4.1,-0.2,4.2,0.2).s().p("AgKAsQgPgCgIgLQgJgKABgQQABgSAQgQQAQgQATACQAPACAIAKQAJALgBAPQgBATgPAQQgOAOgQAAIgGAAg");
	this.shape_4.setTransform(4.2998,43.0137,1.0426,1.0426);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.exclamationBanana, new cjs.Rectangle(-0.1,-0.2,29.6,47.800000000000004), null);


(lib.B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#855F41").s().p("AgBACQAAgBABAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBgBgBgBQAAgBgBAAQAAgBAAAAQAAAAAAgBIAEABIAEADQAAAAAAABQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBABAAAAIgEADIAAgFg");
	this.shape.setTransform(22.9813,7.5058,1.0426,1.0426);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#855F41").s().p("AgBAGQgCAAgCgCIgBgEIAAgEQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAABABIAFAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABIACACIABABIgBADIgCACQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgBAAg");
	this.shape_1.setTransform(8.1894,22.9285,1.0426,1.0426);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9D649").s().p("AgFABQgBgEAGgBQAGAAABAEQAAAFgHAAIgBAAQgEAAAAgEg");
	this.shape_2.setTransform(8.1423,23.0225,1.0426,1.0426);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E2B13F","#E4B440","#EBBF43","#F6D047","#F9D548"],[0,0.345,0.651,0.937,1],52.4,3,-18.9,-1.3).s().p("AglCsQgogXAEgoQAFg8AYhBQAghcArgMIALgBQANAAAIACQgJAIgOASQgUAZgPAaIglBeQgdBgAzAIQAbAFAWgaQAVgZADgkQABgWgjghQgagYAegUQAkgXAQghQAIgQABgMQABgWgPgNQgKgIgMgCQhfgVgoA5QgMASgGAYQgDAMAAAIQgBAWAFAPIAFAPIgBADQgbgSgHgRQgWgpAMgmQAZhLCnAKIAYAFQAcAJAOAOQAvAshhBSQgKAFgFAIQgKAPAbAPQAlAVABAuQABAzg3AfQgeAQgbAAQgVAAgTgKg");
	this.shape_3.setTransform(16.3614,20.5174,1.0426,1.0426);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E7B941","#F9D649"],[0,1],-20.8,-1.2,18.8,1).s().p("AgSDEQgugHgRgbQgLgRACgVQAAgsAIgzQgEAAgBgDQgHgUgLgIQgTgGgQgUQgTgZABgdQACg+A6geQA2gcBUAGQA8AEAfAaQAeAagCAoQgBApgiAaQgWASgfAHQgBABAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAABAAQBCAcgDA7QgCA5gxAgQgkAXgqAAQgLAAgMgCgAAoh6IgLABQgrAMggBcQgYBBgFA8QgEAoAoAXQArAYA2geQA3gfgBgzQgBguglgVQgbgPAKgPQAFgIAKgFQBhhSgvgsQgOgOgcgJIgYgFQingKgZBLQgMAmAWApQAHARAbASQAJAJAEAHQAOhOAcgnQAlg0A7AZQAMAEgJAFIgBABQgHgCgKAAIgEAAg");
	this.shape_4.setTransform(16.5718,20.5996,1.0426,1.0426);

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
	this.shape_1.setTransform(14.3694,14.1936,1.0426,1.0426);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E7B941","#F9D649"],[0,1],-9.9,-0.5,7.7,0.4).s().p("Ag4BeQgNgPgCgaQgDgvAagsQAbguAsgXQgdAigQAkQgVAxATAjQAYAsAjgfQASgPANgYIgBAVQAAAYAIANIgKgJQgMAJgOAJQgcATgeAAIgDABQgUAAgMgOg");
	this.shape_2.setTransform(7.546,12.9049,1.0426,1.0426);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E7B941","#F9D649"],[0,1],8.1,1.3,2.9,0.4).s().p("AgMBJQgYgeAEg0QADgqAPgdQAKgTACgKQACgMgGgLQARAHALAKQALAKAAAHQABAGgUAsQgTA0ADAvQABALACAIIADAKIgBADIAAADQAAACAKANQALANABAMQACAFgFACQgJgdgZgfg");
	this.shape_3.setTransform(22.1292,14.5958,1.0426,1.0426);

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
	this.shape_1.setTransform(12.123,13.3621,1.0425,1.0425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E7B941","#F9D649"],[0,1],-3.1,-0.4,3.4,0.4).s().p("AgQBCQgTgdAGgvQAFgnAOgaQAKgSABgIQADgLgEgKQANAHAKAKQAJAKAAAGQAAAGgUAnQgSAvAAArQAAALACAHIACAJIgBAEIAAACQAAACAHAMQAIANABALQABAFgEABQgGgagUgfg");
	this.shape_2.setTransform(19.3813,13.9042,1.0425,1.0425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E7B941","#F9D649"],[0,1],-8.1,-1,7.1,0.8).s().p("AgUBiQgTgBgKgOQgLgOgBgYQAAgsAZgnQAagpAngSQgcAdgOAgQgWAsAPAiQATAqAfgaQARgNAMgWIgCAUQgBAWAGAMIgIgJIgXAQQgYAOgYAAIgDAAg");
	this.shape_3.setTransform(6.3953,11.4641,1.0426,1.0426);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.A2, new cjs.Rectangle(0,0,22.7,26.8), null);


(lib.A1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#855F41").s().p("AAAAEIgEgDIACgDQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIABAAIABACQABAAABABQABAAAAAAQAAAAAAAAQABABgBAAIAAADIgDAAIgBAAg");
	this.shape.setTransform(17.3346,24.4219,1.0426,1.0426);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E2B13F","#E4B440","#EBBF43","#F6D047","#F9D548"],[0,0.345,0.651,0.937,1],12.9,0.7,-2,-0.5).s().p("ABDB4IgBAAQgGAAgBgFQgEgZgMgMQgWgEgPgUQgFgMABgUIACgSQgKAUgOALQgdAYgQgoQgMgfAUgpQANgeAZgaQAXgLAWABQAUABARAKQAEAJgCAKQgDAJgIAPQgNAZgFAjQgHAsARAcQAOAXAGAYIABAAQAEACgBADIgDABgAgSgxQgVAiAAAaQAAAKAHABQAPABAXgsQAVgpAAgNQAAgHgFAAIgBAAQgSAAgVAhg");
	this.shape_1.setTransform(10.5114,12.479,1.0426,1.0426);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E7B941","#F9D649"],[0,1],-4.7,0.2,6.6,-0.1).s().p("AgSBbQgQgBgJgOQgKgNABgXQAAgoAXgkQAXgmAigQQgZAbgMAdQgUApAMAfQAQAoAcgXQAOgMALgUIgCASQgBAVAFALIgHgIQgKAHgLAHQgTAMgUAAIgFAAg");
	this.shape_2.setTransform(5.551,10.4423,1.0426,1.0426);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E7B941","#F9D649"],[0,1],-7,-0.3,1.6,0.1).s().p("AgQA9QgQgbAGgsQAFgkANgYQAIgQACgIQADgLgEgJQAMAHAIAKQAHAJAAAGQAAAGgSAkQgQAqgBApQAAARADAIIgBADIAAACQAAACAFAMQAHAMABAKQAAAFgDABQgFgZgQgdg");
	this.shape_3.setTransform(17.0295,13.0358,1.0426,1.0426);

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

}).prototype = getMCSymbolPrototype(lib.astronaunt_1, new cjs.Rectangle(0,0,300,250), null);


(lib.W = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkgEOIAAobIJBAAIifIbg");
	mask.setTransform(146.925,45.4);

	// W2
	this.instance = new lib.W2();
	this.instance.setTransform(159.15,84.1,1,1,-2.7078,0,0,7.8,61.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:7.9,rotation:1.4585,x:159.25},62,cjs.Ease.quadInOut).to({regX:7.8,rotation:-2.7078,x:159.15},60,cjs.Ease.quadInOut).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AkhEOIAAobIJDAAIAAIbg");
	mask_1.setTransform(116.05,45.4);

	// W1
	this.instance_1 = new lib.W1();
	this.instance_1.setTransform(113.05,75.95,1,1,-8.381,0,0,3.5,20.9);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:3.4,regY:21,rotation:-13.9943,y:76.1},60,cjs.Ease.cubicInOut).to({regX:3.5,regY:20.9,rotation:-8.381,y:75.95},62,cjs.Ease.cubicInOut).wait(1));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AmoEnIAApNINRAAIAAJNg");
	mask_2.setTransform(133.5,47.5);

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
p.nominalBounds = new cjs.Rectangle(91,18,85,59);


(lib.L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkhEOIAAobIJDAAIAAIbg");
	mask.setTransform(209.05,45.5);

	// L1
	this.instance = new lib.L1();
	this.instance.setTransform(212,88,1,1,0,0,0,2.2,28.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:2.4,rotation:5.2356,x:212.2,y:88.05},67,cjs.Ease.quadInOut).to({regX:2.2,rotation:0,x:212,y:88},55,cjs.Ease.quadInOut).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ai4EdIAAo5IFxAAIAAI5g");
	mask_1.setTransform(213.5,46.5);

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
p.nominalBounds = new cjs.Rectangle(195,18,38.69999999999999,57);


(lib.I = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai4FKIAAqTIFxAAIAAKTg");
	mask.setTransform(196.5,55);

	// I1
	this.instance = new lib.I1();
	this.instance.setTransform(173,70.1,1,1,5.0082,0,0,2.2,25.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.2074,y:70.15},60,cjs.Ease.quadInOut).to({rotation:5.0082,y:70.1},62,cjs.Ease.quadInOut).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AheEiIAApDIC9AAIAAJDg");
	mask_1.setTransform(185.5,47);

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
p.nominalBounds = new cjs.Rectangle(176,18,23.5,58);


(lib.D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnD7IAAn1IDUAAQBuAABGBDQBHBFAABwQAABwhHBIQhHBFhtAAg");
	mask.setTransform(258,47.25);

	// D1
	this.instance = new lib.D1();
	this.instance.setTransform(288.1,45.95,1,1,-144.7574,0,0,1.9,25.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:25.3,rotation:-135.272,x:288.05,y:46.05},61,cjs.Ease.sineInOut).to({regY:25.4,rotation:-144.7574,x:288.1,y:45.95},61,cjs.Ease.sineInOut).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AkDEnIAApNIIHAAIAAJNg");
	mask_1.setTransform(258,47.5);

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
p.nominalBounds = new cjs.Rectangle(232,18,52,59);


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
	mask.graphics.p("ADCFJQh3h9AAjGQAAjRCHh+QCBh4DIAAQCBAAB1A4QAjARAPAlQAOAlgPAlIgIASQgQAogoAPQgoAQgngTQhMgkhLAAQhgAAg6A2QhCA+AAB3QAABxA7A7QA2A2BdAAQBmAAA3g+QALgNgHgPQgGgPgRAAIhFAAQghAAgXgXQgXgXAAghIAAgaQAAgfAXgYQAXgXAhAAIEHAAQAhAAAXAXQAXAYAAAfIAAFPQAAAigZAZQgYAYgiAAIhnAAQgLAAgHgIQgIgHAAgLQAAgPgOgHQgNgHgNAJQhUA6h1AAQivAAhzh5gAi2GSQgigiAAgwIAAqAQAAgwAigjQAigiAxAAQAwAAAiAiQAiAjAAAwIAAKAQAAAwgiAiQgiAjgwAAQgxAAgigjgAr9G1QhHAAgygyQgygyAAhHIAAoUQAAhHAygyQAygyBHAAIDCAAQB+AABKA9QBIA9AABlQAABrhOA/QgLAIABAOQABANAMAGQA0AbAdAyQAfA1AABEQAABshIBCQhJBEh9AAgAq2BhQgIAHAAALIAABtQAAALAIAHQAHAHALAAIBeAAQAnAAAWgUQAYgVAAgnQAAgmgXgVQgWgVgoAAIheAAQgLAAgHAIgAq2jxQgIAHAAALIAABtQAAALAIAHQAHAIALAAIBCAAQAvAAAXgWQAWgTAAglQAAgogZgVQgYgVgrAAIhCAAQgLAAgHAHg");
	mask.setTransform(93.675,45.025);

	// Layer_2
	this.instance = new lib.space_1();
	this.instance.setTransform(105.2,6.8,1,1,0,0,0,123.2,103.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:103.7,scaleX:1.0916,scaleY:1.0916,x:88.25,y:11.7},180).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187.4,90.1);


(lib.bananas_AnimationOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// exclamationBanana
	this.instance = new lib.exclamationBanana();
	this.instance.setTransform(180.2,29.2,1,1,0,0,0,14.8,23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:180.1,y:-52.15},15,cjs.Ease.backIn).wait(29));

	// S
	this.instance_1 = new lib.S();
	this.instance_1.setTransform(155.1,31.25,1,1,0,0,0,10.1,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({x:155,y:-50.1},15,cjs.Ease.backIn).wait(25));

	// A3
	this.instance_2 = new lib.A3();
	this.instance_2.setTransform(132.4,31.95,1,1,0,0,0,12.8,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({x:132.3,y:-49.4},15,cjs.Ease.backIn).wait(22));

	// N2
	this.instance_3 = new lib.N2();
	this.instance_3.setTransform(111.85,31,1,1,0,0,0,18.1,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({x:111.75,y:-50.35},15,cjs.Ease.backIn).wait(18));

	// A2
	this.instance_4 = new lib.A2();
	this.instance_4.setTransform(83.95,26.6,1,1,0,0,0,11.3,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({x:83.85,y:-54.75},15,cjs.Ease.backIn).wait(14));

	// N1
	this.instance_5 = new lib.N1();
	this.instance_5.setTransform(67,28,1,1,0,0,0,13.7,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({x:66.9,y:-53.35},15,cjs.Ease.backIn).wait(10));

	// A1
	this.instance_6 = new lib.A1();
	this.instance_6.setTransform(42.05,23,1,1,0,0,0,10,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({x:41.95,y:-58.35},15,cjs.Ease.backIn).wait(6));

	// B
	this.instance_7 = new lib.B();
	this.instance_7.setTransform(16.6,20.6,1,1,0,0,0,16.6,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28).to({x:16.5,y:-60.75},15,cjs.Ease.backIn).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-81.3,195,142.4);


(lib.bananas_Animation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(2));

	// exclamationBanana
	this.instance = new lib.exclamationBanana();
	this.instance.setTransform(180.1,-52.15,1,1,0,0,0,14.8,23.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({x:180.2,y:29.2},15,cjs.Ease.backOut).wait(2));

	// S
	this.instance_1 = new lib.S();
	this.instance_1.setTransform(155,-50.1,1,1,0,0,0,10.1,12);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({x:155.1,y:31.25},15,cjs.Ease.backOut).wait(7));

	// A3
	this.instance_2 = new lib.A3();
	this.instance_2.setTransform(132.3,-49.4,1,1,0,0,0,12.8,14.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({x:132.4,y:31.95},15,cjs.Ease.backOut).wait(12));

	// N2
	this.instance_3 = new lib.N2();
	this.instance_3.setTransform(111.75,-50.35,1,1,0,0,0,18.1,18.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({x:111.85,y:31},15,cjs.Ease.backOut).wait(17));

	// A2
	this.instance_4 = new lib.A2();
	this.instance_4.setTransform(83.85,-54.75,1,1,0,0,0,11.3,13.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({x:83.95,y:26.6},15,cjs.Ease.backOut).wait(22));

	// N1
	this.instance_5 = new lib.N1();
	this.instance_5.setTransform(66.9,-53.35,1,1,0,0,0,13.7,16.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:67,y:28},15,cjs.Ease.backOut).wait(27));

	// A1
	this.instance_6 = new lib.A1();
	this.instance_6.setTransform(41.95,-58.35,1,1,0,0,0,10,12.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({x:42.05,y:23},15,cjs.Ease.backOut).wait(32));

	// B
	this.instance_7 = new lib.B();
	this.instance_7.setTransform(16.5,-60.75,1,1,0,0,0,16.6,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:16.6,y:20.6},15,cjs.Ease.backOut).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-81.3,195,142.4);


(lib.ASTROANIM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_178 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(178).call(this.frame_178).wait(1));

	// astro
	this.instance = new lib.astronaunt_1();
	this.instance.setTransform(288,37,0.9343,0.9343,0,0,0,288,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:287.9,regY:36.9,scaleX:1.1052,scaleY:1.1052,rotation:2.7031,x:288.1,y:37.1},178).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.9,-18.6,344.29999999999995,291.6);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:359},31,cjs.Ease.cubicIn).wait(9));

	// L
	this.instance_1 = new lib.L();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({x:359},30,cjs.Ease.cubicIn).wait(7));

	// I
	this.instance_2 = new lib.I();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({x:359},30,cjs.Ease.cubicIn).wait(4));

	// W
	this.instance_3 = new lib.W();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({x:359},30,cjs.Ease.cubicIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,509,250);


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
	this.instance.setTransform(359,125,1,1,0,0,0,150,125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:150},30,cjs.Ease.cubicOut).wait(1));

	// L
	this.instance_1 = new lib.L();
	this.instance_1.setTransform(359,125,1,1,0,0,0,150,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({x:150},30,cjs.Ease.cubicOut).wait(4));

	// I
	this.instance_2 = new lib.I();
	this.instance_2.setTransform(359,125,1,1,0,0,0,150,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({x:150},30,cjs.Ease.cubicOut).wait(7));

	// W
	this.instance_3 = new lib.W();
	this.instance_3.setTransform(359,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:150},30,cjs.Ease.cubicOut).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,509,250);


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
	this.frame_258 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(258).call(this.frame_258).wait(42));

	// astro
	this.instance = new lib.ASTROANIM();
	this.instance.setTransform(19.75,252.05,0.8512,0.8512,0,0,0,159.1,119.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:150,y:-46.65},258).wait(42));

	// BIG
	this.instance_1 = new lib.BIG();
	this.instance_1.setTransform(47.8,168.7,0.8315,0.8315,0,0,0,84,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:84.4,regY:45.8,scaleX:1.1206,scaleY:1.1193,x:168.2,y:-135.1},258).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-294.9,429.2,646.4);


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
	this.frame_335 = function() {
		this.HI.play();
	}
	this.frame_344 = function() {
		this.CY.play();
	}
	this.frame_353 = function() {
		this.RV.play();
	}
	this.frame_362 = function() {
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
	this.frame_449 = function() {
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
	this.frame_451 = function() {
		this.HIOut.play();
	}
	this.frame_458 = function() {
		this.CYOut.play();
	}
	this.frame_465 = function() {
		this.RVOut.play();
	}
	this.frame_470 = function() {
		this.CLOut.play();
	}
	this.frame_568 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(45).call(this.frame_46).wait(85).call(this.frame_131).wait(84).call(this.frame_215).wait(84).call(this.frame_299).wait(36).call(this.frame_335).wait(9).call(this.frame_344).wait(9).call(this.frame_353).wait(9).call(this.frame_362).wait(44).call(this.frame_406).wait(43).call(this.frame_449).wait(2).call(this.frame_451).wait(7).call(this.frame_458).wait(7).call(this.frame_465).wait(5).call(this.frame_470).wait(98).call(this.frame_568).wait(1));

	// details_btn
	this.details_btn = new lib.details_btn();
	this.details_btn.name = "details_btn";
	this.details_btn.setTransform(209,211,1,1,0,0,0,18,7);
	new cjs.ButtonHelper(this.details_btn, 0, 1, 2, false, new lib.details_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.details_btn).wait(569));

	// clickTag
	this.clickTag = new lib.invisible_btn();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(569));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(569));

	// options
	this.instance = new lib.options_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(540).to({_off:false},0).to({alpha:1},28,cjs.Ease.cubicOut).wait(1));

	// cta
	this.instance_1 = new lib.cta_1();
	this.instance_1.setTransform(260,125,1,1,0,0,0,150,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(540).to({_off:false},0).to({x:150},28,cjs.Ease.cubicOut).wait(1));

	// offer_mc
	this.offer_mc = new lib.offer_mc();
	this.offer_mc.name = "offer_mc";
	this.offer_mc.setTransform(102.45,333,1,1,0,0,0,93,44);

	this.timeline.addTween(cjs.Tween.get(this.offer_mc).wait(531).to({x:102,y:263,alpha:0},0).to({alpha:1},28,cjs.Ease.cubicOut).wait(10));

	// offerTitle
	this.instance_2 = new lib.offerTitle_1();
	this.instance_2.setTransform(4,125,1,1,0,0,0,150,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(524).to({_off:false},0).to({x:150},28,cjs.Ease.cubicOut).wait(17));

	// eventLogo
	this.instance_3 = new lib.eventLogo_1();
	this.instance_3.setTransform(450,125,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(481).to({_off:false},0).to({x:150},23,cjs.Ease.cubicOut).wait(65));

	// logo
	this.instance_4 = new lib.logo_1();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(481).to({y:178},23,cjs.Ease.cubicOut).to({_off:true},1).wait(64));

	// IN
	this.instance_5 = new lib.text_IN();
	this.instance_5.setTransform(318,125,1,1,0,0,0,150,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(349).to({_off:false},0).to({x:150},22,cjs.Ease.quartOut).wait(35).to({y:35},21,cjs.Ease.cubicOut).to({_off:true},1).wait(141));

	// All
	this.instance_6 = new lib.text_ALL();
	this.instance_6.setTransform(318,125,1,1,0,0,0,150,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(344).to({_off:false},0).to({x:150},22,cjs.Ease.quartOut).wait(40).to({y:35},21,cjs.Ease.cubicOut).to({_off:true},1).wait(141));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_209 = new cjs.Graphics().p("AO2KMQhEgYitgVIifgOQgogVgogdQgcgWhWgrQhOgpg6gYQgvgVhGgMQgrgHhZgKQg4gGiigDIiYgBQgUgCgkABQhFAAhLALQhkAGilBXQhSAsg/ArInqAdIAAzhMAu3AAAIAAVFQhuAGh8AAQj3gBhFgZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(209).to({graphics:mask_graphics_209,x:149.5,y:67.25}).wait(70).to({graphics:null,x:0,y:0}).wait(290));

	// bird
	this.instance_7 = new lib.birdAnimation();
	this.instance_7.setTransform(358,100.05,1,1,0,0,0,63.4,58);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(209).to({_off:false},0).to({_off:true},70).wait(290));

	// wild
	this.instance_8 = new lib.text_wild_1();
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);

	this.instance_9 = new lib.text_wildOut();
	this.instance_9.setTransform(359,125,1,1,0,0,0,359,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},173).to({state:[{t:this.instance_9}]},56).to({state:[]},50).wait(290));

	// bananas
	this.instance_10 = new lib.bananas_Animation();
	this.instance_10.setTransform(194.6,49.05,1,1,0,0,0,97.5,26.5);

	this.instance_11 = new lib.bananas_AnimationOut();
	this.instance_11.setTransform(194.5,49.05,1,1,0,0,0,97.4,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},91).to({state:[{t:this.instance_11}]},50).to({state:[]},42).wait(386));

	// text_go
	this.instance_12 = new lib.text_go_1();
	this.instance_12.setTransform(317,45,1,1,0,0,0,150,125);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24).to({_off:false},0).to({y:125},16,cjs.Ease.backOut).wait(27).to({x:150},24,cjs.Ease.cubicOut).wait(253).to({x:186},22,cjs.Ease.cubicOut).wait(40).to({y:35},21,cjs.Ease.cubicOut).to({_off:true},1).wait(141));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_67 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_83 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");
	var mask_1_graphics_91 = new cjs.Graphics().p("AtRClIAAlJIajAAIAAFJg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(67).to({graphics:mask_1_graphics_67,x:116,y:47.5}).wait(1).to({graphics:mask_1_graphics_68,x:96,y:47.5}).wait(1).to({graphics:mask_1_graphics_69,x:77.65,y:47.5}).wait(1).to({graphics:mask_1_graphics_70,x:60.9,y:47.5}).wait(1).to({graphics:mask_1_graphics_71,x:45.65,y:47.5}).wait(1).to({graphics:mask_1_graphics_72,x:31.85,y:47.5}).wait(1).to({graphics:mask_1_graphics_73,x:19.45,y:47.5}).wait(1).to({graphics:mask_1_graphics_74,x:8.35,y:47.5}).wait(1).to({graphics:mask_1_graphics_75,x:-1.5,y:47.5}).wait(1).to({graphics:mask_1_graphics_76,x:-10.25,y:47.5}).wait(1).to({graphics:mask_1_graphics_77,x:-17.85,y:47.5}).wait(1).to({graphics:mask_1_graphics_78,x:-24.45,y:47.5}).wait(1).to({graphics:mask_1_graphics_79,x:-30.1,y:47.5}).wait(1).to({graphics:mask_1_graphics_80,x:-34.9,y:47.5}).wait(1).to({graphics:mask_1_graphics_81,x:-38.9,y:47.5}).wait(1).to({graphics:mask_1_graphics_82,x:-42.2,y:47.5}).wait(1).to({graphics:mask_1_graphics_83,x:-44.8,y:47.5}).wait(1).to({graphics:mask_1_graphics_84,x:-46.85,y:47.5}).wait(1).to({graphics:mask_1_graphics_85,x:-48.4,y:47.5}).wait(1).to({graphics:mask_1_graphics_86,x:-49.5,y:47.5}).wait(1).to({graphics:mask_1_graphics_87,x:-50.25,y:47.5}).wait(1).to({graphics:mask_1_graphics_88,x:-50.65,y:47.5}).wait(1).to({graphics:mask_1_graphics_89,x:-50.9,y:47.5}).wait(1).to({graphics:mask_1_graphics_90,x:-51,y:47.5}).wait(1).to({graphics:mask_1_graphics_91,x:-51,y:47.5}).wait(1).to({graphics:null,x:0,y:0}).wait(477));

	// text_RSG
	this.instance_13 = new lib.text_RS_1();
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},92).wait(477));

	// CorollaOut
	this.instance_14 = new lib.CL_AnimationOut_mc();
	this.instance_14.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_14._off = true;

	this.CLOut = new lib.CL_AnimationOut_mc();
	this.CLOut.name = "CLOut";
	this.CLOut.setTransform(263.1,151.3,0.7191,0.7191,0,0,180,154,128);
	this.CLOut._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(47).to({_off:false},0).to({scaleX:1.128,scaleY:1.128,x:448,y:151},44,cjs.Ease.cubicIn).to({_off:true},1).wait(477));
	this.timeline.addTween(cjs.Tween.get(this.CLOut).wait(470).to({_off:false},0).to({regX:153.8,regY:128.2,scaleX:0.7574,scaleY:0.7574,x:-116.9,y:184.4},44,cjs.Ease.cubicIn).to({_off:true},1).wait(54));

	// CorollaIn
	this.instance_15 = new lib.CL_AnimationIn_mc();
	this.instance_15.setTransform(-108.95,111.05,0.8276,0.8276,0,0,0,150.2,125.3);
	this.instance_15._off = true;

	this.CL = new lib.CL_AnimationIn_mc();
	this.CL.name = "CL";
	this.CL.setTransform(536.95,123.05,0.6267,0.6267,0,0,180,147.5,132.1);
	this.CL._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(2).to({_off:false},0).to({regX:150,regY:125,scaleX:1,scaleY:1,x:150,y:125},44,cjs.Ease.cubicOut).to({_off:true},1).wait(522));
	this.timeline.addTween(cjs.Tween.get(this.CL).wait(362).to({_off:false},0).to({regY:132,scaleX:0.7191,scaleY:0.7191,x:267.8,y:154.15},44,cjs.Ease.cubicOut).to({_off:true},64).wait(99));

	// RAV4Out
	this.instance_16 = new lib.RV_AnimationOut_mc();
	this.instance_16.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_16._off = true;

	this.RVOut = new lib.RV_AnimationOut_mc();
	this.RVOut.name = "RVOut";
	this.RVOut.setTransform(191.9,138.95,0.6743,0.6743,0,0,180,150,125);
	this.RVOut._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(132).to({_off:false},0).to({scaleX:1.128,scaleY:1.128,x:448,y:151},44,cjs.Ease.cubicIn).to({_off:true},1).wait(392));
	this.timeline.addTween(cjs.Tween.get(this.RVOut).wait(465).to({_off:false},0).to({regX:149.8,regY:125.2,scaleX:0.7103,scaleY:0.7103,x:-191.85,y:171.4},44,cjs.Ease.cubicIn).to({_off:true},1).wait(59));

	// RAV4In
	this.instance_17 = new lib.RV_AnimationIn_mc();
	this.instance_17.setTransform(-108.95,111.05,0.8276,0.8276,0,0,0,150.2,125.3);
	this.instance_17._off = true;

	this.RV = new lib.RV_AnimationIn_mc();
	this.RV.name = "RV";
	this.RV.setTransform(470.85,109.7,0.5877,0.5877,0,0,180,150,125);
	this.RV._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(87).to({_off:false},0).to({regX:150,regY:125,scaleX:1,scaleY:1,x:150,y:125},44,cjs.Ease.cubicOut).to({_off:true},1).wait(437));
	this.timeline.addTween(cjs.Tween.get(this.RV).wait(353).to({_off:false},0).to({scaleX:0.6743,scaleY:0.6743,x:191.9,y:138.95},44,cjs.Ease.cubicOut).to({_off:true},68).wait(104));

	// CamryOut
	this.instance_18 = new lib.CY_AnimationOut_mc();
	this.instance_18.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_18._off = true;

	this.CYOut = new lib.CY_AnimationOut_mc();
	this.CYOut.name = "CYOut";
	this.CYOut.setTransform(126.8,133.05,0.5976,0.5976,0,0,180,150,125.1);
	this.CYOut._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(216).to({_off:false},0).to({scaleX:1.128,scaleY:1.128,x:448,y:151},44,cjs.Ease.cubicIn).to({_off:true},1).wait(308));
	this.timeline.addTween(cjs.Tween.get(this.CYOut).wait(458).to({_off:false},0).to({regX:149.9,regY:125.2,scaleX:0.6295,scaleY:0.6295,x:-260.5,y:165.1},44,cjs.Ease.cubicIn).to({_off:true},1).wait(66));

	// HighlanderOut
	this.instance_19 = new lib.HI_AnimationOut_mc();
	this.instance_19.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(300).to({_off:false},0).to({scaleX:1.128,scaleY:1.128,x:448,y:151},44,cjs.Ease.cubicIn).to({_off:true},1).wait(224));

	// CamryIn
	this.instance_20 = new lib.CY_AnimationIn_mc();
	this.instance_20.setTransform(-108.95,111.05,0.8276,0.8276,0,0,0,150.2,125.3);
	this.instance_20._off = true;

	this.CY = new lib.CY_AnimationIn_mc();
	this.CY.name = "CY";
	this.CY.setTransform(414.05,104.6,0.5208,0.5208,0,0,180,150.1,125.1);
	this.CY._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(171).to({_off:false},0).to({regX:150,regY:125,scaleX:1,scaleY:1,x:150,y:125},44,cjs.Ease.cubicOut).to({_off:true},1).wait(353));
	this.timeline.addTween(cjs.Tween.get(this.CY).wait(344).to({_off:false},0).to({regX:150,scaleX:0.5976,scaleY:0.5976,x:126.8,y:133.05},44,cjs.Ease.cubicOut).to({_off:true},70).wait(111));

	// HighlanderOut_LineUP
	this.HIOut = new lib.HI_AnimationOut_mc();
	this.HIOut.name = "HIOut";
	this.HIOut.setTransform(71.15,130.2,0.5,0.5,0,0,180,150,125);
	this.HIOut._off = true;

	this.timeline.addTween(cjs.Tween.get(this.HIOut).wait(451).to({_off:false},0).to({regX:149.9,regY:125.2,scaleX:0.5267,scaleY:0.5267,x:-319.15,y:162.15},44,cjs.Ease.cubicIn).to({_off:true},1).wait(73));

	// HighlanderIn
	this.instance_21 = new lib.HI_AnimationIn_mc();
	this.instance_21.setTransform(-108.95,111.05,0.8276,0.8276,0,0,0,150.2,125.3);
	this.instance_21._off = true;

	this.HI = new lib.HI_AnimationIn_mc();
	this.HI.name = "HI";
	this.HI.setTransform(365.6,102.1,0.4358,0.4358,0,0,180,150,125);
	this.HI._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(255).to({_off:false},0).to({regX:150,regY:125,scaleX:1,scaleY:1,x:150,y:125},44,cjs.Ease.cubicOut).to({_off:true},1).wait(269));
	this.timeline.addTween(cjs.Tween.get(this.HI).wait(335).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:71.15,y:130.2},44,cjs.Ease.cubicOut).to({_off:true},72).wait(118));

	// heroCar
	this.instance_22 = new lib.HI_AnimationIn_mc();
	this.instance_22.setTransform(-99.3,112.4,0.7482,0.7482,0,0,0,150.1,125.4);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(509).to({_off:false},0).to({regX:150,regY:125,scaleX:0.904,scaleY:0.904,x:144.85,y:127},44,cjs.Ease.cubicOut).wait(16));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_255 = new cjs.Graphics().p("AUOQMQAGgHAEgIIAAATIgKgEgA03H5IAAgJIAHAGIAIAFIgPgCgA03wQMApPAAAIAAMnQAJAIAHALQASAdgDAgQgBANgGARIgKAdIgQA7QgKAjgJAVIgMAaQgFAOgCAMQgBANAGAWQAGAZABAJQACAcgPAZQgPAZgaALQgKAEgTADIgcAIQgRAHggAWQgfAWgTAGQgZAIgbgIQgbgIgSgTQgSgTgFgcQgFgbAKgZIAFgOQACgIgCgGQgCgEgMgKQgRgQgLgkQgOgsgIgMQgGgJgLgNIgSgUQgHgJgFgKQgWgLgggMQglgOiPgRQijgUgggHQgpgih1hLQh7hQgjgLQgigLiigQQiXgPg0AAQhPgEg+gCQh4gEhhAKQhpALhqAjQhYAdgRARQgLALAAAFIACARQAAAKgTAbQgeApgJAOQgRAcgMAHQgFAEgQADIgaAJQgHAHAAAhIABBNQAAAsgBAUQgLAQgEAbQgCAOAAAJIAEAhQAEAjAAAQQAAAQAVAOQALAIAKADIAEAbIAEAgQAAAJAiAAQinAgh0AiIgEABg");
	var mask_2_graphics_256 = new cjs.Graphics().p("AUfQcQAGgHAFgIQgFAPgFAAIgBAAgA1JwbMApzAAAIAAMwQAJAJAHALQASAegDAgQgBANgGARIgLAeIgQA8QgKAjgJAWIgMAZQgFAPgCANQgBANAGAVQAGAZABAJQACAdgPAaQgQAZgaALQgKAEgTAEIgcAHQgSAHggAXQgfAWgUAGQgZAIgbgIQgcgHgSgUQgSgUgFgcQgFgcAKgZIAFgNQACgJgCgGQgCgFgMgKQgSgPgLglQgOgsgIgNIgSgWIgSgUQgHgKgFgKQgWgKgggNQgmgOiRgSQilgTgggIQgqgih2hMQh+hRgjgLQgigLikgRQiagOg0AAQhQgFg/gCQh5gEhjALQhrALhrAjQhZAdgRARQgLALAAAGIACARQAAAKgUAbQgeApgJAPQgRAcgMAIQgGAEgPACIgbAKQgHAHAAAiIABBNQAAAtgBAUQgLAQgEAcQgCAOAAAKIAEAhQAEAkAAAPQAAAQAVAPQALAHALAEIAEAbIAEAhQAAAIAiAAQipAih2AiIgEABg");
	var mask_2_graphics_257 = new cjs.Graphics().p("AUwQpQAGgHAEgIQgEAPgFAAIgBAAgA1awoMAqUAAAIAAM7QAJAIAIAMQASAdgDAhQgBAOgGARIgLAeQgEANgMAvQgLAkgJAWIgMAaQgFAPgCANQgBANAGAWQAGAZABAJQADAdgQAaQgQAbgaAKQgKAEgUAEIgcAIQgSAGghAYQggAWgTAGQgaAIgbgIQgdgHgSgUQgSgUgFgdQgFgcAKgZIAFgOQACgJgCgGQgCgEgMgLQgSgPgMgmQgOgtgIgMQgGgJgMgOIgSgUQgHgKgFgKIg3gXQgngPiSgRQingVghgHQgqgjh4hNQh/hRgjgMQgkgLilgRQicgPg1AAQhRgEhAgCQh7gEhjAKQhsAMhtAjQhaAegSARQgLALAAAGIACASQAAAJgUAcQgeAqgJAPQgSAcgMAIQgGAEgPACQgaAJgBABQgIAHAAAjIABBOQABAtgCAVQgLAQgEAcQgCAOAAAKIAEAhQAFAlAAAQQAAAQAVAPQALAHALAEIAEAbIAEAhQAAAJAiAAQirAih3AiIgEABg");
	var mask_2_graphics_258 = new cjs.Graphics().p("AVAQ2QAGgHAEgJQgFAQgEAAIgBAAgA1qw1MAq0AAAIAANFQAKAIAHAMQATAegEAhQgBAOgGARIgLAfIgQA9QgLAkgJAWIgMAaQgGAQgBAMQgBAOAFAWQAHAaABAJQACAdgPAbQgQAagbALQgKAEgUAEIgdAIQgSAGghAYQggAXgUAGQgaAIgcgIQgcgIgTgUQgSgUgFgdQgGgdALgZIAFgOQACgJgCgGQgCgFgNgKQgRgQgMgmQgPgtgIgNQgGgJgMgOIgSgUQgIgKgEgLQgXgKghgNQgngPiVgSQipgUghgHQgqgkh6hOQiAhSgkgMQgkgLingRQiegPg1AAQhSgFhBgCQh8gEhlALQhtALhuAkQhcAegSASQgKALAAAGIACASQAAAKgVAcQgfAqgJAPQgRAcgNAJQgFAEgQACIgbAKQgIAHAAAjIABBPQAAAugBAVQgLAQgEAcQgCAOAAALIAEAiQAEAkAAAQQAAARAWAPQALAHALAFIAEAbIAEAhQAAAJAjAAQitAih5AjIgEABg");
	var mask_2_graphics_259 = new cjs.Graphics().p("AVPRCQAGgIAFgIQgGAQgEAAIgBAAgA15xBMArTAAAIAANOQAJAJAHALQATAfgDAhQgBAOgGASIgLAfIgRA9QgKAlgKAXIgMAaQgGAQgBAMQgBAOAFAWQAHAaABAJQACAegPAbQgRAagbALQgKAFgUADIgdAIQgSAHgiAYQggAXgUAGQgbAIgcgIQgdgIgSgUQgTgVgFgdQgFgcAKgaIAFgOQACgJgCgHQgCgEgMgLQgSgPgMgnQgPgugIgNQgGgJgMgOIgTgVQgHgKgFgKQgXgLgigNQgngPiWgSQirgUgigIQgrgkh7hOQiBhUgkgMQglgLipgRQifgPg2AAIiVgHQh9gEhmALQhvALhvAkQhdAfgSASQgLALAAAGIADASQAAAKgVAcQgfArgJAPQgSAdgNAIQgGAEgQADQgaAIgBACQgIAHAAAjIABBQQAAAvgBAVQgLAQgEAdQgCAOAAAKIAEAjQAEAlAAAQQAAARAWAPQALAHALAFIAEAbIAFAiQAAAJAjAAQivAjh6AjIgEABg");
	var mask_2_graphics_260 = new cjs.Graphics().p("AVdROQAGgIAEgIQgEAQgFAAIgBAAgA2IxNMArvAAAIAANYQAKAJAHALQAUAfgEAiQgBAOgGASIgLAfIgRA+QgLAlgJAXIgMAbQgGAQgCAMQgBAOAGAWQAHAbAAAJQADAegQAbQgRAbgbALQgKAFgUAEIgeAHQgSAHgiAZQghAXgUAGQgbAIgcgIQgdgIgTgVQgTgUgFgeQgGgdALgaIAFgOQACgJgCgGQgCgFgNgLQgSgQgMgnQgPgugIgOIgSgWIgTgWQgIgKgEgKIg6gYQgogPiXgTQitgUgigIQgrgkh8hPQiDhVglgMQgkgMisgRQihgPg2AAQhUgFhCgCQh/gEhnALQhwAMhwAkQheAfgSASQgLALAAAHIACASQAAAKgVAcQgfArgKAQQgRAdgNAJQgGAEgRACIgbAKQgIAHAAAkIABBRQAAAvgBAVQgLARgEAdQgDAOAAALIAFAiQAEAmAAAQQAAARAWAPQALAIALAEIAFAcIAEAiQAAAJAkAAQixAjh8AkIgDABg");
	var mask_2_graphics_261 = new cjs.Graphics().p("AVrRYQAGgHAEgJQgFAQgEAAIgBAAgA2WxXMAsLAAAIAANfQAKAJAHAMQAUAfgEAiQgBAOgGASIgLAgIgRA/QgLAlgKAXIgMAbQgGAQgBANQgBAOAFAXQAHAaABAKQADAegRAbQgQAcgcALQgKAEgUAEIgfAIQgSAHgiAYQghAYgVAGQgbAIgcgIQgegIgTgVQgTgVgFgdQgGgeALgaIAFgPQADgJgDgGQgCgFgMgKQgTgRgMgnQgPgvgJgNQgGgJgMgOIgTgWQgIgKgEgLIg6gYQgogPiagTQiugUgigIQgsgkh9hRQiFhVglgMQglgMitgRQiigQg3AAIiYgHQiAgEhoALQhxAMhxAlQhfAfgSASQgLAMAAAGIACASQAAAKgVAdQggAsgJAPQgSAegNAIQgGAFgRACIgcAKQgIAIAAAjIABBSQABAwgCAVQgLARgEAdQgCAOAAALIAEAjQAEAmAAARQAAARAXAPQALAIALAEIAFAcIAEAjQAAAJAkAAQizAjh9AkIgDABg");
	var mask_2_graphics_262 = new cjs.Graphics().p("AV4RjQAGgIAFgIQgGAQgEAAIgBAAgA2jxiMAsmAAAIAANoQAJAJAIAMQATAfgDAjQgBAOgGASIgMAgIgRA/QgLAmgKAYIgMAbQgGAQgCANQgBAOAGAXQAHAbABAJQADAfgRAbQgRAcgcALQgKAEgUAEIgfAIQgSAHgjAZQghAYgVAGQgbAIgdgIQgegIgTgVQgTgVgGgeQgFgeALgaIAFgPQACgJgCgGQgCgFgNgLQgSgQgNgoQgPgwgJgNQgFgJgNgOIgTgWQgIgKgFgLQgYgLgigNQgpgPiagTQiwgVgjgIQgsglh/hRQiFhWgmgMQglgMiugSQikgPg4AAIiZgHQiBgFhpAMQhyAMhyAlQhgAfgSATQgMALAAAHIACASQAAAKgVAdQggAsgJAQQgTAegNAIQgGAFgQACQgbAJgBABQgJAIAAAkIABBSQABAwgCAWQgLARgEAdQgCAPAAALIAEAjQAEAmAAARQAAARAXAQQALAIAMAEIAEAdIAEAiQAAAJAlAAQi1Akh+AkIgDABg");
	var mask_2_graphics_263 = new cjs.Graphics().p("AWERtQAGgIAFgJQgGARgEAAIgBAAgA2wxsMAs/AAAIAANwQAJAJAIAMQAUAggEAiQgBAPgGASIgLAgIgSBAQgLAngKAXIgMAbQgGARgCANQgBAOAGAXQAHAbABAKQADAegRAcQgRAcgcALQgLAFgUAEIgfAIQgSAHgjAZQgiAXgVAHQgcAIgdgIQgdgIgUgVQgTgWgGgeQgFgeALgaIAFgPQACgJgCgHQgCgFgNgLQgTgQgMgoQgPgwgJgOQgGgJgNgOIgTgWQgIgKgFgLQgYgLgjgOQgpgPicgTQixgVgjgIQgtglh/hSQiHhXgmgMQglgMiwgSQimgQg4AAQhWgEhEgCQiDgFhpALQhzANh0AlQhgAggTASQgLAMAAAGIACATQAAAKgVAeQghAsgJAQQgTAegNAJQgGAEgRACIgcAKQgIAIAAAkIABBUQAAAwgBAWQgMARgEAeQgCAOAAALIAEAkQAFAnAAAQQAAASAWAQQAMAHALAFIAFAdIAEAjQAAAJAlAAQi2Akh/AkIgEACg");
	var mask_2_graphics_264 = new cjs.Graphics().p("AWPR2QAHgIAEgJQgFARgFAAIgBAAgA28x1MAtWAAAIAAN2QAKAKAIAMQAUAggEAjQgBAOgGATIgMAgIgSBAQgLAngKAYIgMAbQgGARgCANQgBAOAGAXQAHAcABAKQADAfgRAcQgRAcgcALQgLAFgVAEIgfAIQgSAHgkAZQgiAYgVAGQgcAJgdgIQgegJgTgVQgUgWgGgeQgFgeALgbIAFgPQADgJgDgHQgCgFgNgLQgTgQgMgpQgQgwgJgOQgGgJgMgOIgUgXQgHgKgFgLQgZgLgjgOQgpgPidgTQizgWgjgHQgtgmiBhSQiIhYgmgMQgmgNixgRQingQg5AAIibgHQiEgFhqAMQh0AMh1AmQhhAggTATQgLALAAAHIACASQAAALgVAeQghAsgKAQQgSAegNAJQgHAFgRACIgcAKQgIAIAAAlIABBTQAAAxgBAWQgMASgEAeQgDAOAAAMIAFAjQAEAnAAARQAAASAXAQQAMAIALAEIAFAdIAEAjQAAAJAlAAQi3AliAAlIgEABg");
	var mask_2_graphics_265 = new cjs.Graphics().p("AWaR/QAHgIAEgJQgFARgFAAIgBAAgA3Hx+MAtsAAAIAAN+QAKAJAIAMQAUAggEAkQgBAOgGATIgMAhIgSBAQgLAogKAXIgMAcQgHARgBANQgBAOAGAYQAHAbABAKQACAfgRAdQgRAcgcALQgLAFgVAEIgfAIQgTAHgjAaQgjAYgVAGQgcAJgdgJQgfgIgTgWQgUgVgGgfQgFgeALgbIAFgPQADgKgDgGQgCgFgNgLQgTgRgNgpQgPgwgJgOQgGgKgNgOIgUgWQgHgLgGgLQgYgLgjgOQgqgPiegUQi1gVgjgIQgtgmiChTQiJhYgmgNQgmgMizgSQiogQg5AAQhYgFhFgCQiFgEhrALQh1ANh1AmQhiAggTATQgLALAAAHIACATQAAAKgWAeQghAtgKAQQgSAfgOAJQgGAEgRACIgdALQgIAIAAAlIABBUQAAAxgBAWQgMASgEAeQgCAPAAALIAEAkQAFAoAAARQAAARAXAQQALAIAMAFIAFAdIAEAjQAAAKAlAAQi4AkiCAlIgDACg");
	var mask_2_graphics_266 = new cjs.Graphics().p("AWkSHQAHgIAFgJQgGARgFAAIgBAAgA3SyGMAuCAAAIAAOEQAJAJAIANQAVAggEAjQgBAPgHATIgLAhIgSBBQgLAngLAYIgMAcQgHARgBANQgBAPAGAXQAHAcABAKQADAggRAcQgSAcgcAMQgLAFgVAEQgWAFgKADQgTAHgjAaQgjAYgVAGQgdAJgdgIQgfgJgTgWQgUgVgGgfQgGgfAMgbIAFgPQACgKgCgGQgCgFgNgLQgTgRgNgpQgQgxgJgOQgGgKgNgOIgUgXQgIgKgFgLQgYgMgkgNQgqgQifgTQi2gWgjgIQgugmiDhUQiKhYgmgNQgngNi0gRQipgRg6AAQhYgFhGgCQiFgEhsALQh2ANh2AmQhiAggTATQgMAMAAAHIACATQAAAKgWAfQghAtgKAQQgSAfgOAJQgGAEgSACQgbAKgBABQgJAIAAAlIABBVQABAygCAWQgLASgFAeQgCAPAAALIAEAlQAFAnAAARQAAASAXAQQAMAIALAFIAFAdIAFAkQAAAJAlAAQi6AliCAmIgEABg");
	var mask_2_graphics_267 = new cjs.Graphics().p("AWuSOQAHgIAEgIQgFARgFAAIgBgBgA3cyOMAuVAAAIAAOKQAKAJAIANQAVAggEAkQgBAPgHATIgLAhIgSBCQgMAngKAYIgNAdQgGARgCANQgBAOAHAYQAHAcAAAKQADAggRAcQgRAdgdAMQgLAEgVAEIggAJQgTAHgkAaQgjAYgVAHQgdAIgegIQgegIgUgWQgUgWgGgfQgGgfAMgcIAFgPQADgJgDgHQgCgFgNgLQgTgRgNgpQgQgygJgOQgGgJgNgPIgVgXQgHgKgFgLQgZgMgkgOQgqgPihgUQi2gWgkgIQgugmiEhVQiKhZgogNQgmgMi2gSQiqgQg6AAQhZgFhGgCQiGgFhtAMQh3AMh2AnQhkAggTAUQgLALAAAHIACATQAAALgWAeQgiAugJAQQgTAfgOAJQgGAEgSADIgdAKQgIAIAAAmIABBVQAAAygBAXQgMASgEAeQgDAPAAAMIAFAkQAEAoAAARQAAASAYAQQAMAIALAFIAFAeQAFAeAAAGQAAAJAlAAQi7AliDAmIgEABg");
	var mask_2_graphics_268 = new cjs.Graphics().p("AW3SWQAHgIAEgJQgFARgFAAIgBAAgA3lyVMAunAAAIAAOQQAKAJAIANQAVAggEAkQgBAPgHATIgLAiQgFAOgOA0QgLAogKAYIgNAcQgHARgBAOQgBAOAGAYQAHAcABAKQADAggRAdQgSAdgdAMQgLAEgVAEIggAJQgTAHglAaQgiAYgWAHQgdAJgegJQgfgIgUgWQgUgWgGgfQgFggALgbIAGgQQACgJgCgHQgCgFgOgLQgTgRgNgqQgQgygJgOQgGgJgOgPIgUgXQgIgKgFgLQgZgMgkgOQgqgQiigUQi4gWgkgIQgugmiEhVQiMhagngNQgngMi3gSQirgRg6AAQhagFhGgCQiHgFhuAMQh3ANh4AnQhkAhgTATQgMAMAAAHIADATQAAAKgWAfQgiAugKAQQgTAfgOAJQgGAFgSACIgdALQgIAIAAAmIABBWQAAAygBAXQgMASgFAeQgCAPAAAMIAFAlQAEAoAAARQAAASAYARQAMAIALAEIAFAeIAFAkQAAAKAlAAQi8AliEAmIgDABg");
	var mask_2_graphics_269 = new cjs.Graphics().p("AXAScQAHgIAEgJQgFASgFAAIgBgBgA3uycMAu5AAAIAAOVQAKAJAIANQAVAhgEAkQgBAPgGATIgMAiIgTBCQgLAogKAZIgNAcQgHARgBAOQgBAPAGAYQAHAcABAKQADAggSAdQgRAdgeAMQgKAFgWAEIggAIQgTAHglAaQgjAZgWAHQgcAJgfgJQgfgIgUgXQgUgWgGgfQgGgfAMgcIAFgQQADgJgDgHQgCgFgNgMQgUgRgNgpQgQgygJgPQgGgJgNgPIgVgXQgHgLgGgLQgZgMgkgNQgrgRiigTQi5gXgkgIQgvgmiFhWQiMhagogNQgngNi4gSQisgQg7AAQhagFhHgCQiIgFhuAMQh4AMh4AoQhkAggUAUQgMAMAAAHIADATQAAALgXAeQgiAugJARQgUAfgNAKQgHAEgRACQgdAKgBABQgIAIAAAmIABBXQAAAygBAXQgMASgFAfQgCAPAAAMIAFAlQAEAoAAASQAAASAYAQQAMAIAMAFIAEAeIAFAkQAAAKAmAAQi9AliFAmIgEACg");
	var mask_2_graphics_270 = new cjs.Graphics().p("AXISjQAHgIAEgJQgFARgFAAIgBAAgA32yiMAvJAAAIAAOZQAKAKAIANQAVAhgDAkQgBAPgHAUIgMAhIgTBDQgLAogKAZIgNAdQgHARgBANQgBAPAGAYQAHAdABAKQADAggSAdQgRAdgeAMQgLAFgVAEQgXAFgKAEQgTAHglAaQgjAZgWAHQgdAIgfgIQgfgJgUgWQgUgWgGggQgGgfAMgcIAFgQQADgKgDgGQgCgFgOgMQgTgRgNgqQgQgygJgPQgHgJgNgPIgUgXQgIgLgFgLQgagMgkgOQgrgQijgUQi7gWgkgIQgvgniGhWQiNhbgngNQgogNi4gSQiugRg7AAIihgHQiJgEhvALQh4ANh5AoQhlAhgUATQgMAMAAAHIADATQAAALgXAfQgiAugKARQgTAfgOAKQgGAEgSADQgdAJgBACQgIAIAAAmIABBXQAAAzgBAXQgMASgFAfQgCAPAAAMIAFAlQAEAoAAASQAAASAYARQAMAIAMAFIAFAeIAEAkQAAAKAnAAQi/AmiFAmIgEABg");
	var mask_2_graphics_271 = new cjs.Graphics().p("AXPSpQAHgIAFgJQgGARgFAAIgBAAgA3+yoMAvZAAAIAAOeQAKAKAIANQAVAhgEAkQgBAPgGAUIgMAiQgFAOgOA1QgLApgLAYIgNAdQgHARgBAOQgBAPAGAYQAHAdABAKQADAggRAdQgSAegeAMQgLAEgVAFIghAIQgUAHgkAbQgkAZgWAGQgdAJgfgIQgfgJgUgWQgVgXgGgfQgFggALgcIAGgQQACgJgCgHQgCgFgOgMQgUgRgNgqQgQgzgJgOQgGgKgOgPQgPgPgFgIQgIgLgFgLQgagMglgOQgrgQikgUQi7gXgkgIQgwgniGhWQiOhbgogOQgngMi6gTQiugQg7AAQhbgFhIgDQiJgEhwAMQh5AMh5AoQhmAhgTAUQgMAMAAAHIACATQAAALgWAfQgjAvgKAQQgTAggOAJQgGAFgSACQgdAKgBABQgIAIAAAnIABBXQAAAzgBAXQgMASgFAgQgDAPAAAMIAFAlQAFApAAASQAAASAYAQQAMAJAMAEIAFAfIAEAkQAAAKAnAAQjAAmiGAmIgEACg");
	var mask_2_graphics_272 = new cjs.Graphics().p("AXWSuQAHgIAFgJQgGASgFAAIgBgBgA4FyuMAvnAAAIAAOjQAKAJAIANQAVAhgEAlQgBAPgGAUIgMAiQgFAPgOA1QgMAogKAZIgNAdQgHARgBAOQgBAPAGAYQAHAdABAKQADAhgSAdQgSAegdAMQgLAEgWAFIghAIQgTAIglAaQgkAZgWAHQgdAJgfgJQgggIgUgXQgVgXgGgfQgFggALgcIAGgQQACgKgCgHQgCgFgOgLQgUgSgNgqQgQgzgJgOQgHgKgNgPIgVgXQgIgLgFgMQgZgLglgPQgsgQilgUQi7gXglgIQgwgniHhXQiOhbgogOQgogMi6gTQivgRg8AAIijgHQiKgFhwAMQh6ANh6AoQhmAhgTAUQgMAMAAAHIACAUQAAALgXAfQgiAvgKAQQgUAggOAKQgGAEgSACIgeALQgJAJAAAmIABBYQABAzgCAYQgMASgEAfQgDAPAAAMIAFAmQAFApAAASQAAASAYARQAMAIAMAFIAFAeIAFAlQAAAKAmAAQjAAmiHAnIgEABg");
	var mask_2_graphics_273 = new cjs.Graphics().p("AXcS0QAIgIAEgJQgFARgFAAIgCAAgA4MyzMAv0AAAIAAOnQALAKAHANQAVAhgDAlQgBAPgHAUIgMAiQgFAPgOA1QgLApgLAYIgNAeQgHARgCAOQAAAPAGAYQAIAdAAALQADAggSAeQgRAdgeAMQgLAFgXAEQgXAGgJADQgUAHglAbQgkAZgWAHQgeAJgfgJQgfgIgVgXQgUgXgGggQgGggAMgcIAGgQQACgKgCgGQgDgGgNgLQgUgSgOgqQgPgzgLgPQgFgJgOgPIgVgYQgHgLgGgLQgZgMgmgOQgrgRimgUQi9gXgkgIQgwgniHhXQiQhcgogOQgogNi7gSQiwgRg7AAQhcgFhIgCQiLgFhwAMQh7ANh7AoQhmAigTATQgMAMAAAIIACATQAAALgXAfQgjAvgKARQgTAggOAKQgHAEgRACQgdAKgBACQgJAIAAAmIABBZQAAAzgBAYQgMASgFAfQgDAQAAAMIAFAlQAFApAAASQAAATAYARQAMAIANAFIAEAeQAFAfAAAGQAAAKAmAAQjAAmiHAnIgFABg");
	var mask_2_graphics_274 = new cjs.Graphics().p("AXiS4QAHgIAFgJQgFASgFAAIgCgBgA4Sy4MAwAAAAIAAOrQAKAJAJANQAVAigEAlQgBAPgHAUIgMAjQgFAOgOA1QgLAqgLAYIgNAeQgHARgBAOQgBAPAGAZQAHAdABAKQADAhgSAdQgSAegeAMQgLAFgWAEIghAJQgUAHglAbQgkAZgWAHQgeAJgfgJQgfgIgVgXQgVgXgGggQgGggAMgcIAGgQQACgKgCgHQgCgFgOgMQgUgRgOgrQgQgzgJgPQgHgKgNgPIgVgXQgIgLgFgMQgagMglgOQgsgQimgVQi9gWglgJQgwgniIhYQiQhcgpgNQgngNi8gTQixgRg8AAQhcgFhJgCQiLgFhxAMQh6ANh7AoQhnAigUAUQgMAMAAAHIACAUQAAALgWAfQgjAvgLARQgTAggOAKQgHAEgSADQgdAJgBACQgIAIAAAnIABBZQAAAzgBAYQgNASgEAgQgDAPAAAMIAFAmQAFApAAASQAAATAYARQAMAIAMAFIAFAeIAFAlQAAAKAnAAQjCAniIAnIgEABg");
	var mask_2_graphics_275 = new cjs.Graphics().p("AXoS9QAHgJAFgJQgGASgFAAIgBAAgA4Xy8MAwLAAAIAAOuQAKAJAIANQAWAigEAlQgBAQgHAUIgMAiQgFAPgOA1QgMApgKAZIgOAeQgGARgCAOQgBAPAGAZQAIAdABAKQADAhgSAeQgSAegfAMQgLAFgWAEIghAJQgUAHglAbQgkAZgWAHQgeAJgfgIQgggJgVgXQgVgXgGggQgFggALgdIAGgQQADgKgDgGQgCgGgOgLQgUgSgNgrQgRgzgJgPQgHgKgNgPIgVgXQgIgLgFgMQgagMglgOQgsgRingUQi+gXglgIQgwgoiJhYQiQhcgpgOQgogNi9gSQixgRg8AAQhcgFhJgDQiMgFhxANQh7ANh8AoQhnAigUAUQgMAMAAAHIACAUQAAALgXAfQgjAwgKARQgTAggOAJQgHAFgSACQgdAKgBABQgJAJAAAnIABBZQAAA0gBAXQgMASgFAgQgDAQAAAMIAFAmQAFApAAASQAAATAZARQAMAIAMAFIAFAeIAFAmQAAAKAmAAQjCAmiIAnIgEACg");
	var mask_2_graphics_276 = new cjs.Graphics().p("AXtTBQAHgIAFgKQgGASgFAAIgBAAgA4dzAMAwWAAAIAAOxQAKAKAIANQAWAhgEAmQgBAPgHAUIgMAjQgFAOgOA2QgMAqgLAZIgNAdQgHASgBAOQgBAPAGAZQAIAdAAAKQADAhgSAeQgSAegeAMQgLAFgWAEQgYAGgJADQgUAHgmAbQgkAagWAGQgeAKgfgJQgggJgVgXQgVgXgGggQgGggAMgdIAGgQQACgKgCgHQgCgFgOgMQgUgRgOgrQgQg0gKgPQgGgJgOgQIgVgXQgIgLgFgMQgagMgmgOQgsgRingUQi/gXglgJQgwgoiJhXQiRhdgpgOQgogNi9gTQiygRg8AAQhdgFhJgCQiMgFhyAMQh8AOh7AoQhoAigUAUQgMAMAAAHIACAUQAAALgXAgQgjAvgKARQgUAggOAKQgHAFgSACQgdAKgBABQgJAIAAAoIABBZQABA0gCAXQgMATgFAgQgCAPAAANIAFAmQAFApAAASQAAATAYARQAMAIAMAFIAFAfQAFAfAAAGQAAAKAnAAQjDAniJAnIgEACg");
	var mask_2_graphics_277 = new cjs.Graphics().p("AXyTFQAHgJAEgJQgFASgFAAIgBAAgA4hzEMAweAAAIAAO0QALAKAIANQAWAigEAlQgBAQgHAUIgMAiIgUBFQgLAqgLAZIgNAdQgHASgCAOQgBAPAHAZQAHAdABALQADAhgSAeQgSAegfAMQgLAFgWAEQgXAFgKAEQgUAHgmAbQgkAagXAGQgdAKgggJQgggJgVgXQgVgXgGggQgFghALgcIAGgRQADgJgDgHQgCgGgOgLQgUgSgOgrQgQg0gKgPQgGgJgOgQIgVgYQgIgKgFgMQgagMgmgPQgsgQiogVQi/gXglgIQgxgoiJhYQiRhdgpgOQgpgNi9gTQizgRg8AAQhdgFhKgCQiMgFhyAMQh8ANh9ApQhnAigUAUQgNAMAAAHIADAUQAAALgXAgQgjAvgLASQgTAggPAKQgGAEgSADQgeAJgBACQgJAIAAAnIABBaQABA0gCAYQgMASgFAgQgCAQAAAMIAFAmQAFAqAAASQAAATAYARQAMAIANAFIAEAfIAFAlQAAAKAnAAQjDAniJAoIgEABg");
	var mask_2_graphics_278 = new cjs.Graphics().p("AX2TIQAHgIAFgKQgGASgFAAIgBAAgA4mzHMAwoAAAIAAO2QAKAKAIANQAWAigEAmQgBAPgHAUIgMAjQgFAPgOA2QgMAqgLAZIgNAeQgHARgCAOQgBAPAHAZQAHAeABAKQADAhgSAeQgSAegfANQgLAFgWAEQgYAFgJAEQgUAHgmAbQglAagWAHQgeAJgggJQgfgJgWgXQgVgXgGggQgFghALgdIAGgQQADgKgDgHQgCgFgOgMQgUgRgOgsQgQg0gKgOQgGgKgOgPIgVgYQgIgLgFgMQgagMgmgPQgsgQipgVQjAgXglgIQgxgpiKhYQiRhdgpgOQgogNi/gTQizgRg8AAIingHQiNgFhzAMQh8ANh8ApQhpAigUAUQgMAMAAAIIADATQAAAMgYAfQgjAwgKARQgUAhgOAJQgHAFgSACQgeAKgBACQgIAIAAAnIABBaQAAA1gBAXQgNATgFAgQgCAPAAANIAFAmQAFAqAAASQAAATAYARQANAIAMAFIAFAfQAFAgAAAGQAAAKAnAAQjEAniKAnIgEACg");
	var mask_2_graphics_279 = new cjs.Graphics().p("AX6TLQAHgIAFgKQgGASgFAAIgBAAgA4qzKMAwwAAAIAAO4QAKAKAIAOQAWAigEAlQgBAQgHAUIgMAjQgFAPgOA2QgMAqgLAZIgNAeQgHARgCAOQgBAPAHAaQAHAdABAKQADAigSAeQgSAegfAMQgLAFgWAFQgYAFgKADQgUAIgmAbQgkAZgXAHQgeAKgfgJQgggJgWgXQgVgXgGghQgGggAMgdIAGgRQADgJgDgHQgCgGgOgMQgUgRgOgsQgQg0gKgOQgGgKgOgQQgQgQgFgIQgIgKgGgMQgagNgmgOQgsgRipgUQjAgXgmgJQgwgoiLhZQiRhdgqgOQgogNi/gTQizgRg9AAQhegFhJgDQiOgFhyANQh9ANh9ApQhoAigUAUQgNAMAAAIIADATQAAAMgXAgQgkAvgKASQgUAggOAKQgHAEgSADQgeAKgBABQgJAJAAAnIABBaQABA1gCAXQgMATgFAgQgCAQAAAMIAFAmQAFAqAAASQAAATAYARQAMAJANAFIAFAfQAFAgAAAGQAAAJAnAAQjFAoiKAnIgEACg");
	var mask_2_graphics_280 = new cjs.Graphics().p("AX9TOQAHgIAFgKQgGASgFAAIgBAAgA4tzNMAw2AAAIAAO7QAKAKAJANQAWAigEAmQgBAQgHAUIgNAjQgFAPgOA2QgMAqgLAZIgNAeQgHASgBAOQgBAPAGAZQAIAeABAKQACAhgSAfQgSAegfAMQgLAFgWAEQgYAGgKADQgUAIgmAbQgkAZgXAHQgeAKgggJQgggJgVgXQgVgXgGghQgGghAMgdIAGgQQACgKgCgHQgCgFgPgMQgUgSgOgrQgQg0gKgPQgGgKgOgPIgVgZQgIgKgGgMQgagNgmgOQgsgRipgUQjBgYgmgIQgwgoiLhZQiShegpgOQgpgNi/gTQi0gRg9AAQhegFhKgCQiNgFhzAMQh9ANh9ApQhpAigUAVQgMAMAAAHIACAUQAAALgXAgQgkAwgKASQgUAggOAKQgHAEgSADQgeAKgBABQgJAJAAAnIABBaQABA1gCAYQgMASgFAhQgCAPAAANIAFAmQAEAqAAASQAAATAZARQAMAJANAFIAFAfQAFAgAAAGQAAAKAnAAQjFAniKAnIgEACg");
	var mask_2_graphics_281 = new cjs.Graphics().p("AYATQQAHgIAFgJQgFASgFAAIgCgBgA4xzQMAw9AAAIAAO9QALAKAIAOQAWAigEAmQgBAPgHAUIgNAjIgTBGQgMAqgLAZIgNAeQgHASgBAOQgBAPAGAZQAIAeABAKQADAigTAeQgSAegfANQgLAEgWAFQgYAFgKAEQgUAHgmAbQglAagXAHQgeAJgfgJQgggIgWgYQgVgXgGggQgGghAMgdIAGgRQACgJgCgHQgCgGgOgMQgVgRgNgsQgRg0gKgPQgGgKgOgPIgVgZQgIgKgGgMQgagNgmgOQgsgRiqgVQjBgXgmgIQgxgpiKhZQiThegpgNQgpgOjAgTQizgRg+AAQhegFhKgCQiOgFhzAMQh9ANh9ApQhpAjgUAUQgNAMAAAIIADATQAAAMgYAgQgjAwgLARQgTAhgPAKQgHAEgSADQgeAJgBACQgIAIAAAoIABBaQAAA1gBAYQgNATgFAgQgCAQAAAMIAFAnQAFAqAAASQAAATAYARQANAIAMAFIAFAfIAFAmQAAAKAoAAQjGAoiLAnIgEACg");
	var mask_2_graphics_282 = new cjs.Graphics().p("AYDTTQAHgJAFgJQgGASgFAAIgBAAgA4zzSMAxCAAAIAAO/QALAKAIANQAWAjgEAmQgBAPgHAUIgNAkIgTBFQgMAqgLAZIgNAeQgHASgBAOQgBAPAGAaQAIAdAAALQADAhgSAfQgSAegfAMQgLAFgXAFQgXAFgKAEQgVAHgmAbQgkAagXAHQgeAJgggJQgggJgVgXQgWgXgGghQgGggAMgeIAGgQQADgKgDgHQgCgFgOgMQgUgSgOgsQgRg0gKgPQgGgKgOgPIgVgYQgIgLgGgMQgagNgmgOQgsgRiqgVQjCgXgmgIQgxgpiLhZQiShegqgOQgpgNjAgTQi0gRg9AAQhegFhLgDQiOgFhzANQh9ANh+ApQhpAigUAUQgNANAAAHIADAUQAAAMgYAgQgjAwgLARQgUAhgOAKQgHAEgSADQgeAJgBACQgJAIAAAoIABBbQABA1gCAXQgMATgFAgQgDAQAAANIAFAmQAFAqAAATQAAASAZASQANAIAMAFIAFAfIAFAmQAAAKAnAAQjGAoiKAoIgEABg");
	var mask_2_graphics_283 = new cjs.Graphics().p("AYGTUQAHgIAFgJQgGASgFAAIgBgBgA42zUMAxIAAAIAAPAQAKAKAJAOQAVAigEAmQgBAPgHAVIgMAjQgFAPgOA2QgMAqgLAaIgOAeQgGASgCAOQgBAPAHAZQAHAeABALQADAhgSAfQgTAegfAMQgLAFgWAFQgYAFgKAEQgUAHgnAbQgkAagXAHQgeAJgggIQgggJgWgYQgVgXgGghQgGggAMgeIAGgQQADgKgDgHQgCgFgOgMQgVgSgOgsQgQg0gKgPQgGgKgOgQIgWgYQgHgLgGgMQgagMgmgOQgtgRiqgVQjCgXgmgJQgxgpiLhZQiThegqgOQgogNjBgTQi0gSg+AAQhegFhKgCQiPgFhzAMQh+AOh+ApQhpAigUAVQgNAMAAAHIADAUQAAAMgYAgQgjAwgLARQgUAhgOAKQgHAEgSADQgeAKgBABQgJAJAAAnIABBbQABA1gCAYQgMATgFAgQgDAQAAAMIAFAnQAFAqAAATQAAASAZASQAMAIANAFIAFAfQAFAhAAAGQAAAKAnAAQjGAniLAoIgEABg");
	var mask_2_graphics_284 = new cjs.Graphics().p("AYITWQAHgIAFgKQgGATgFAAIgBgBgA44zWMAxMAAAIAAPCQAKAKAJANQAWAigEAnQgBAPgHAUIgNAkQgFAOgOA3QgMAqgLAaIgNAeQgHASgCAOQgBAPAHAZQAHAeABALQADAhgSAfQgTAegeANQgMAEgWAFQgYAFgKAEQgUAHgnAcQgkAZgXAHQgeAKgggJQghgJgVgXQgVgYgGggQgGghAMgeIAGgQQACgKgCgHQgCgFgPgMQgUgSgOgsQgQg0gKgPQgHgKgOgQIgVgYQgIgLgFgMQgbgMgmgPQgtgRiqgUQjCgYgmgIQgxgpiMhZQiThfgpgOQgpgNjBgTQi1gRg9AAQhfgFhKgDQiPgFhzANQh+ANh+ApQhqAjgUAUQgMAMAAAIIACAUQAAALgXAgQgkAxgKARQgUAhgPAKQgHAEgSADQgeAKgBABQgJAIAAAoIABBbQABA1gCAYQgMATgFAgQgDAQAAANIAFAmQAFArAAASQAAATAZARQANAJAMAFIAFAfIAFAmQAAAKAoAAQjHAoiLAoIgEABg");
	var mask_2_graphics_285 = new cjs.Graphics().p("AYKTYQAHgJAFgJQgGASgFAAIgBAAgA46zXMAxQAAAIAAPDQAKAJAJAOQAWAigEAnQgBAPgHAUIgNAkQgFAPgOA2QgMArgLAZIgOAeQgHASgBAOQgBAPAGAaQAIAeABAKQADAigSAeQgTAfgfAMQgLAFgXAEQgXAGgKADQgVAIgmAbQglAagXAHQgeAKgggJQgggJgWgYQgVgXgGghQgGghAMgdIAGgRQACgJgCgHQgCgGgOgMQgVgSgOgsQgQg0gKgPQgHgKgNgQIgWgYQgIgLgFgMQgbgMgmgPQgtgRiqgUQjDgYgmgIQgxgpiMhaQiThegpgOQgpgNjBgTQi1gSg+AAQhegFhLgCQiPgFh0AMQh9AOh/ApQhpAigVAVQgMAMAAAIIADAUQAAALgYAgQgkAxgKARQgUAhgOAKQgHAEgTADQgeAKgBABQgJAJAAAnIABBbQABA2gCAXQgMATgFAhQgCAQAAAMIAFAnQAEAqAAASQAAATAZASQANAIAMAFIAFAgQAFAgAAAGQAAAKAoAAQjHAoiLAnIgEACg");
	var mask_2_graphics_286 = new cjs.Graphics().p("AYMTZQAHgIAFgKQgGATgFAAIgBgBgA48zZMAxUAAAIAAPEQAKAKAJAOQAVAigDAmQgBAQgHAUIgNAkQgFAOgOA3QgMArgLAZIgOAeQgHASgBAOQgBAQAGAZQAIAeABAKQACAigSAfQgSAegfAMQgLAFgXAFQgYAFgKAEQgUAHgmAcQglAagXAHQgeAJgggJQghgJgVgXQgVgYgGghQgGggAMgeIAFgQQADgKgDgHQgCgGgOgMQgUgSgOgrQgRg1gKgPQgGgKgOgPIgWgZQgHgLgGgMQgagMgngPQgsgRirgUQjDgYgmgIQgxgpiMhaQiThegqgOQgpgOjBgTQi2gRg9AAQhfgFhKgDQiPgFh0ANQh+ANh/AqQhpAigVAUQgMANAAAHIADAUQAAAMgYAgQgkAwgKASQgUAhgPAKQgGAEgTADQgeAKgBABQgJAIAAAoIABBbQABA2gCAYQgMATgFAgQgDAQAAAMIAFAnQAFAqAAATQAAATAZARQAMAJANAFIAFAfQAFAgAAAGQAAAKAoAAQjHAoiMAoIgEABg");
	var mask_2_graphics_287 = new cjs.Graphics().p("AYNTaQAHgIAFgKQgGATgFAAIgBgBgA49zaMAxWAAAIAAPFQAKAKAJANQAWAjgEAmQgBAQgHAUIgNAjQgFAPgOA3QgMAqgLAaIgNAeQgHASgCAOQgBAQAHAZQAHAeABAKQADAigSAfQgTAegfANQgLAFgXAEQgXAFgKAEQgVAHgmAcQglAagXAHQgeAJgggJQghgJgVgXQgWgYgGggQgGghAMgeIAGgQQADgKgDgHQgCgGgOgMQgUgSgOgrQgRg1gKgPQgGgKgOgQIgWgYQgIgLgFgMQgbgMgmgPQgtgRirgVQjDgXglgJQgygoiMhaQiThfgqgOQgpgNjBgTQi2gSg9AAQhfgFhLgCQiPgFh0AMQh+AOh/ApQhpAjgVAUQgMANAAAHIACAUQAAALgXAhQgkAwgKASQgUAggPAKQgHAFgSACQgeAKgBACQgJAIAAAoIABBbQAAA2gBAYQgNATgFAgQgCAQAAAMIAFAnQAFArAAASQAAATAZARQAMAJANAFIAFAfQAFAhAAAGQAAAKAoAAQjIAniLAoIgEACg");
	var mask_2_graphics_288 = new cjs.Graphics().p("AYOTbQAHgIAFgJQgGASgFAAIgBgBgA4/zbMAxZAAAIAAPGQAKAKAJANQAWAjgEAmQgBAQgHAUIgNAkQgFAOgOA3QgMArgLAZIgOAfQgGASgCANQgBAQAHAZQAHAeABALQADAigSAeQgTAfgfAMQgLAFgXAEQgYAGgKADQgUAIgnAbQgkAagXAHQgfAKgggJQgggJgWgYQgVgXgGghQgGghAMgdIAGgRQACgKgCgHQgCgFgOgMQgVgSgOgsQgQg1gKgPQgHgKgOgPIgVgZQgIgLgGgMQgagMgmgPQgtgRirgUQjDgYgmgIQgygpiMhaQiThfgqgOQgpgNjCgTQi1gSg+AAQhfgFhLgCQiPgFh0AMQh+AOh/ApQhqAjgUAUQgMANAAAHIACAUQAAALgXAhQgkAwgLASQgUAhgOAKQgHAEgTADQgeAKgBABQgIAIAAAoIABBcQAAA1gBAYQgNATgFAgQgCAQAAANIAFAnQAFAqAAASQAAATAYASQANAIAMAFIAFAgQAFAgAAAGQAAAKAoAAQjHAoiMAoIgEABg");
	var mask_2_graphics_289 = new cjs.Graphics().p("AYPTcQAHgIAFgKQgFASgFAAIgCAAgA5AzbMAxbAAAIAAPGQALAKAIANQAWAjgEAmQgBAQgHAUIgNAkQgFAPgOA2QgMArgLAZIgNAfQgHASgCAOQgBAPAHAaQAHAeABAKQADAigSAeQgTAfgfAMQgLAFgXAFQgYAFgKAEQgUAHgnAcQgkAagXAHQgfAJgggJQgggJgWgXQgVgYgGghQgGghAMgdIAGgRQACgKgCgHQgCgFgPgMQgUgSgOgsQgRg1gKgPQgGgKgOgPIgVgZQgIgLgGgMQgagMgngPQgtgQirgVQjDgYgmgIQgxgpiNhaQiThfgqgOQgpgNjCgTQi1gSg+AAQhfgFhLgCQiPgFh0AMQh/AOh+ApQhqAjgVAUQgMAMAAAIIACAUQAAALgXAhQgkAwgKASQgUAhgPAKQgHAEgSADQgeAKgBABQgJAJAAAnIABBcQAAA1gBAYQgNATgFAhQgCAQAAAMIAFAnQAFAqAAATQAAATAZARQAMAJANAFIAFAfQAFAhAAAGQAAAKAoAAQjIAniMAoIgEACg");
	var mask_2_graphics_290 = new cjs.Graphics().p("AYQTdQAHgJAFgJQgGASgFAAIgBAAgA5BzcMAxdAAAIAAPGQAKAKAJAOQAWAigEAnQgBAPgHAVIgNAjQgFAPgOA3QgMAqgLAaIgOAeQgHASgBAOQgBAQAGAZQAIAeABALQADAigTAeQgSAegfANQgMAFgWAEQgYAGgKADQgVAIgmAbQglAagXAHQgeAKgggJQghgJgVgYQgWgXgGghQgGghAMgdIAGgRQADgKgDgHQgCgFgOgMQgVgSgOgsQgQg1gKgPQgHgKgOgQIgVgYQgIgLgGgMQgagNgmgOQgtgRisgVQjDgXgmgJQgxgpiNhaQiThfgqgOQgpgNjCgTQi2gSg+AAQhegFhLgCQiQgFh0AMQh+AOh/ApQhqAjgUAUQgNANAAAHIADAUQAAAMgYAgQgkAxgKARQgUAhgPAKQgHAFgSACQgeAKgBACQgJAIAAAoIABBbQAAA2gBAYQgNATgFAgQgCAQAAANIAFAnQAFAqAAASQAAATAZASQAMAIANAFIAFAgQAFAgAAAGQAAAKAoAAQjIAoiMAoIgEACg");
	var mask_2_graphics_291 = new cjs.Graphics().p("AYRTdQAGgIAFgKQgFATgFAAIgBgBgA5BzdMAxdAAAIAAPHQALAKAIAOQAWAigEAmQgBAQgHAUIgMAkQgFAPgPA3QgLAqgLAaIgOAeQgHASgBAOQgBAQAGAZQAIAeABALQADAigTAeQgSAfgfAMQgMAFgWAEQgYAGgKADQgVAIgmAbQglAagXAHQgfAKgggJQgggJgWgYQgVgXgGghQgGghAMgdIAGgRQACgKgCgHQgCgFgPgMQgUgSgOgsQgRg1gKgPQgGgKgOgQIgVgYQgIgLgGgMQgagNgngOQgtgRirgVQjDgYgmgIQgygpiMhaQiUhfgqgOQgpgNjCgTQi2gSg+AAQhegFhLgCQiQgFh0AMQh/AOh+ApQhqAjgVAUQgMANAAAHIACAUQAAAMgXAgQgkAwgLASQgUAhgOAKQgHAEgTADQgeAKgBABQgJAJAAAoIABBbQABA2gCAYQgMATgFAgQgDAQAAANIAFAnQAFAqAAASQAAATAZASQANAIAMAFIAFAgQAFAgAAAGQAAAKAoAAQjHAoiMAoIgEACg");
	var mask_2_graphics_292 = new cjs.Graphics().p("AYRTeQAHgJAFgJQgGASgFAAIgBAAgA5CzdMAxfAAAIAAPHQALAKAIAOQAWAigEAnQgBAPgHAVIgMAjQgFAPgPA3QgMArgLAZIgNAfQgHASgCAOQgBAPAHAaQAHAdABALQADAigSAeQgTAfgfAMQgLAFgXAFQgYAFgKAEQgUAHgnAcQglAagXAHQgeAJgggJQghgJgVgXQgWgYgGghQgGghAMgdIAGgRQADgKgDgHQgCgFgOgMQgVgSgNgsQgRg1gKgPQgGgKgOgPIgWgZQgIgLgFgMQgbgMgmgPQgtgRisgVQjDgXgmgJQgygpiMhaQiUhfgqgOQgpgNjCgTQi2gSg+AAQhegFhLgCQiQgFh0AMQh/AOh/ApQhpAjgVAUQgMANAAAHIACAUQAAAMgXAgQgkAxgLARQgUAhgOAKQgHAFgTACQgeAKgBACQgJAIAAAoIABBcQABA1gCAYQgMATgFAgQgDAQAAANIAFAnQAFAqAAATQAAATAZARQANAJAMAFIAFAfQAFAhAAAGQAAAKAoAAQjIAoiMAoIgEABg");
	var mask_2_graphics_293 = new cjs.Graphics().p("AYRTeQAHgIAFgKQgFASgFAAIgCAAgA5CzdMAxfAAAIAAPHQALAKAIAOQAWAigEAnQgBAPgHAVIgMAjQgFAPgPA3QgMArgLAZIgNAfQgHASgCAOQgBAPAHAaQAHAeABAKQADAigSAfQgTAegfANQgLAFgXAEQgXAGgKADQgVAIgmAbQglAagXAHQgfAKgggJQgggJgWgYQgVgXgGghQgGghAMgeIAGgQQACgKgCgHQgCgGgPgMQgUgSgOgsQgRg1gKgPQgGgKgOgPIgWgZQgIgLgFgMQgbgMgmgPQgtgRisgVQjDgXgmgJQgygpiMhaQiUhfgqgOQgpgNjCgTQi2gRg+AAQhfgFhLgDQiPgFh1ANQh+ANh/ApQhqAjgUAUQgNANAAAHIADAUQAAAMgYAgQgkAxgKARQgUAhgPAKQgHAFgSACQgeAKgBACQgJAIAAAoIABBcQAAA1gBAYQgNATgFAhQgCAQAAAMIAFAnQAFArAAASQAAATAZASQAMAIANAFIAFAgQAFAgAAAGQAAAKAoAAQjIAoiMAoIgEACg");
	var mask_2_graphics_294 = new cjs.Graphics().p("AYSTeQAHgIAFgKQgGATgFAAIgBgBgA5CzeMAxgAAAIAAPIQAKAKAJAOQAWAigEAnQgBAPgHAVIgNAjQgFAPgOA3QgMArgLAZIgNAeQgHASgCAOQgBAQAHAZQAHAeABALQADAigSAeQgTAfgfAMQgLAFgXAFQgYAFgKAEQgUAHgnAcQglAagXAHQgeAJgggJQghgJgVgXQgWgYgGghQgGghAMgdIAGgRQADgKgDgHQgCgFgOgMQgVgSgOgsQgQg1gKgPQgHgKgOgPIgVgZQgIgLgGgMQgagMgngPQgtgRirgVQjEgXgmgJQgxgpiNhaQiUhfgqgOQgpgNjCgTQi2gSg+AAQhegFhLgCQiQgFh0AMQh/AOh/ApQhqAjgUAUQgNANAAAHIADAUQAAAMgYAgQgkAxgKARQgUAhgPAKQgHAFgSACQgeAKgBACQgJAIAAAoIABBcQAAA1gBAYQgNATgFAgQgCAQAAANIAFAnQAFAqAAATQAAATAZARQAMAJANAFIAFAfQAFAhAAAGQAAAKAoAAQjIAoiMAoIgEABg");
	var mask_2_graphics_295 = new cjs.Graphics().p("AYSTeQAHgIAFgKQgGATgFAAIgBgBgA5DzeMAxhAAAIAAPIQALAKAIAOQAWAigEAnQgBAPgHAVIgMAjQgFAPgPA3QgMArgLAZIgNAfQgHASgCAOQgBAPAHAaQAHAeABAKQADAigSAfQgTAegfANQgLAFgXAEQgYAGgKADQgUAIgnAbQglAagXAHQgeAKgggJQghgJgVgYQgWgXgGghQgGghAMgeIAGgQQADgKgDgHQgCgGgOgMQgVgSgOgsQgQg1gKgPQgHgKgOgPIgVgZQgIgLgGgMQgagMgngPQgtgRirgVQjEgXgmgJQgxgpiNhaQiUhfgqgOQgpgNjCgTQi2gSg+AAQhfgFhLgCQiPgFh1AMQh+AOh/ApQhqAjgVAUQgMANAAAHIACAUQAAAMgXAgQgkAxgLARQgUAhgOAKQgHAFgTACQgeAKgBACQgJAIAAAoIABBcQABA1gCAYQgMATgFAhQgDAQAAAMIAFAnQAFArAAASQAAATAZASQANAIAMAFIAFAgQAFAgAAAGQAAAKAoAAQjIAoiMAoIgEACg");
	var mask_2_graphics_296 = new cjs.Graphics().p("AYSTfQAHgJAFgJQgGASgFAAIgBAAgA5DzeMAxhAAAIAAPIQALAKAIAOQAWAigEAnQgBAPgHAVIgMAjQgFAPgPA3QgMArgLAZIgNAfQgHASgCAOQgBAPAHAaQAHAeABAKQADAigSAfQgTAegfANQgLAFgXAEQgYAGgKADQgUAIgnAbQglAagXAHQgeAKgggJQghgJgVgYQgWgXgGghQgGghAMgeIAGgQQADgKgDgHQgCgGgOgMQgVgSgOgsQgQg1gKgPQgHgKgOgPIgVgZQgIgLgGgMQgagMgngPQgtgRirgVQjEgXgmgJQgxgpiNhaQiUhfgqgOQgpgNjCgTQi2gSg+AAQhfgFhLgCQiPgFh1AMQh+AOh/ApQhqAjgVAUQgMANAAAHIACAUQAAAMgXAgQgkAxgLARQgUAhgOAKQgHAFgTACQgeAKgBACQgJAIAAAoIABBcQABA1gCAYQgMATgFAhQgDAQAAAMIAFAnQAFArAAASQAAATAZASQANAIAMAFIAFAgQAFAgAAAGQAAAKAoAAQjIAoiMAoIgEACg");
	var mask_2_graphics_297 = new cjs.Graphics().p("AYSTfQAHgJAFgJQgGASgFAAIgBAAgA5DzeMAxhAAAIAAPIQALAKAIAOQAWAigEAnQgBAPgHAVIgMAjQgFAPgPA3QgMArgLAZIgNAfQgHASgCAOQgBAPAHAaQAHAeABAKQADAigSAfQgTAegfANQgLAFgXAEQgYAGgKADQgUAIgnAbQglAagXAHQgeAKgggJQghgJgVgYQgWgXgGghQgGghAMgeIAGgQQADgKgDgHQgCgGgOgMQgVgSgOgsQgQg1gKgPQgHgKgOgPIgVgZQgIgLgGgMQgagMgngPQgtgRirgVQjEgXgmgJQgxgpiNhaQiUhfgqgOQgpgNjCgTQi2gSg+AAQhfgFhLgCQiPgFh1AMQh+AOh/ApQhqAjgVAUQgMANAAAHIACAUQAAAMgXAgQgkAxgLARQgUAhgOAKQgHAFgTACQgeAKgBACQgJAIAAAoIABBcQABA1gCAYQgMATgFAhQgDAQAAAMIAFAnQAFArAAASQAAATAZASQANAIAMAFIAFAgQAFAgAAAGQAAAKAoAAQjIAoiMAoIgEACg");
	var mask_2_graphics_298 = new cjs.Graphics().p("AYSTfQAHgJAFgJQgGASgFAAIgBAAgA5DzeMAxhAAAIAAPIQALAKAIAOQAWAigEAnQgBAPgHAVIgMAjQgFAPgPA3QgMArgLAZIgNAfQgHASgCAOQgBAPAHAaQAHAeABAKQADAigSAfQgTAegfANQgLAFgXAEQgYAGgKADQgUAIgnAbQglAagXAHQgeAKgggJQghgJgVgYQgWgXgGghQgGghAMgeIAGgQQADgKgDgHQgCgGgOgMQgVgSgOgsQgQg1gKgPQgHgKgOgPIgVgZQgIgLgGgMQgagMgngPQgtgRirgVQjEgXgmgJQgxgpiNhaQiUhfgqgOQgpgNjCgTQi2gSg+AAQhfgFhLgCQiPgFh1AMQh+AOh/ApQhqAjgVAUQgMANAAAHIACAUQAAAMgXAgQgkAxgLARQgUAhgOAKQgHAFgTACQgeAKgBACQgJAIAAAoIABBcQABA1gCAYQgMATgFAhQgDAQAAAMIAFAnQAFArAAASQAAATAZASQANAIAMAFIAFAgQAFAgAAAGQAAAKAoAAQjIAoiMAoIgEACg");
	var mask_2_graphics_299 = new cjs.Graphics().p("AYSTcQAHgIAFgKIAAAXIgMgFgA5DJfIAAgLIAIAGIAKAIIgSgDgA5DzgMAxhAAAIAAPIQALAKAIANQAWAjgEAmQgBAQgHAUIgMAkQgFAPgPA3QgMAqgLAaIgNAeQgHASgCAOQgBAQAHAZQAHAeABALQADAigSAeQgTAfgfAMQgLAFgXAFQgYAFgKAEQgUAHgnAcQglAagXAHQgeAJgggJQghgJgVgXQgWgYgGghQgGghAMgdIAGgRQADgKgDgHQgCgFgOgMQgVgSgOgsQgQg1gKgPQgHgKgOgQIgVgYQgIgLgGgMQgagNgngOQgtgRirgVQjEgYgmgIQgxgpiNhaQiUhfgqgOQgpgOjCgTQi2gRg+AAQhfgFhLgDQiPgFh1ANQh+ANh/AqQhqAigVAVQgMAMAAAIIACAUQAAALgXAhQgkAwgLASQgUAhgOAKQgHAEgTADQgeAKgBABQgJAJAAAoIABBbQABA2gCAYQgMATgFAgQgDAQAAANIAFAnQAFAqAAATQAAATAZARQANAJAMAFIAFAfQAFAhAAAGQAAAKAoAAQjIAoiMAoIgEABg");
	var mask_2_graphics_300 = new cjs.Graphics().p("A3bK8IAA13MAu3AAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(255).to({graphics:mask_2_graphics_255,x:-100.5286,y:108.75}).wait(1).to({graphics:mask_2_graphics_256,x:-83.1472,y:109.6105}).wait(1).to({graphics:mask_2_graphics_257,x:-66.5472,y:110.6406}).wait(1).to({graphics:mask_2_graphics_258,x:-50.7228,y:111.6103}).wait(1).to({graphics:mask_2_graphics_259,x:-35.6545,y:112.5603}).wait(1).to({graphics:mask_2_graphics_260,x:-21.2984,y:113.435}).wait(1).to({graphics:mask_2_graphics_261,x:-7.6984,y:114.2899}).wait(1).to({graphics:mask_2_graphics_262,x:5.2266,y:115.085}).wait(1).to({graphics:mask_2_graphics_263,x:17.4766,y:115.8348}).wait(1).to({graphics:mask_2_graphics_264,x:29.0511,y:116.5598}).wait(1).to({graphics:mask_2_graphics_265,x:40.0011,y:117.2345}).wait(1).to({graphics:mask_2_graphics_266,x:50.3255,y:117.8845}).wait(1).to({graphics:mask_2_graphics_267,x:60.0255,y:118.4645}).wait(1).to({graphics:mask_2_graphics_268,x:69.1505,y:119.0392}).wait(1).to({graphics:mask_2_graphics_269,x:77.682,y:119.5642}).wait(1).to({graphics:mask_2_graphics_270,x:85.675,y:120.0642}).wait(1).to({graphics:mask_2_graphics_271,x:93.132,y:120.5142}).wait(1).to({graphics:mask_2_graphics_272,x:100.082,y:120.9639}).wait(1).to({graphics:mask_2_graphics_273,x:106.55,y:121.3392}).wait(1).to({graphics:mask_2_graphics_274,x:112.507,y:121.7139}).wait(1).to({graphics:mask_2_graphics_275,x:118.0314,y:122.0639}).wait(1).to({graphics:mask_2_graphics_276,x:123.1064,y:122.3639}).wait(1).to({graphics:mask_2_graphics_277,x:127.7814,y:122.6841}).wait(1).to({graphics:mask_2_graphics_278,x:132.0064,y:122.9341}).wait(1).to({graphics:mask_2_graphics_279,x:135.8745,y:123.1841}).wait(1).to({graphics:mask_2_graphics_280,x:139.3808,y:123.3889}).wait(1).to({graphics:mask_2_graphics_281,x:142.5058,y:123.5639}).wait(1).to({graphics:mask_2_graphics_282,x:145.3308,y:123.7389}).wait(1).to({graphics:mask_2_graphics_283,x:147.8314,y:123.9139}).wait(1).to({graphics:mask_2_graphics_284,x:150.0308,y:124.0636}).wait(1).to({graphics:mask_2_graphics_285,x:151.9808,y:124.1636}).wait(1).to({graphics:mask_2_graphics_286,x:153.6495,y:124.2636}).wait(1).to({graphics:mask_2_graphics_287,x:155.0808,y:124.3636}).wait(1).to({graphics:mask_2_graphics_288,x:156.3058,y:124.4139}).wait(1).to({graphics:mask_2_graphics_289,x:157.3058,y:124.4886}).wait(1).to({graphics:mask_2_graphics_290,x:158.1558,y:124.5636}).wait(1).to({graphics:mask_2_graphics_291,x:158.8058,y:124.6136}).wait(1).to({graphics:mask_2_graphics_292,x:159.3308,y:124.6136}).wait(1).to({graphics:mask_2_graphics_293,x:159.7058,y:124.6386}).wait(1).to({graphics:mask_2_graphics_294,x:159.9808,y:124.6636}).wait(1).to({graphics:mask_2_graphics_295,x:160.1808,y:124.6636}).wait(1).to({graphics:mask_2_graphics_296,x:160.2808,y:124.6886}).wait(1).to({graphics:mask_2_graphics_297,x:160.3308,y:124.6886}).wait(1).to({graphics:mask_2_graphics_298,x:160.3808,y:124.6886}).wait(1).to({graphics:mask_2_graphics_299,x:160.3808,y:124.9125}).wait(1).to({graphics:mask_2_graphics_300,x:150,y:70}).wait(63).to({graphics:null,x:0,y:0}).wait(206));

	// Big
	this.instance_23 = new lib.BIG_Animation();
	this.instance_23.setTransform(289,74,1,1,0,0,0,187.7,90);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(267).to({_off:false},0).wait(9).to({alpha:1},0).wait(79).to({regX:114.7,regY:-87.9,x:216,y:-103.9},0).to({alpha:0},8).to({_off:true},1).wait(205));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("A3bLuIAA3bMAu3AAAIAAXbg");
	mask_3.setTransform(150,75);

	// SAVINGS
	this.instance_24 = new lib.SAVINGS_OG();
	this.instance_24.setTransform(150.5,173,1,1,0,0,0,150,75);
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(421).to({_off:false},0).to({x:150,y:75},21,cjs.Ease.cubicOut).wait(20).to({y:-27},21,cjs.Ease.cubicIn).to({_off:true},1).wait(85));

	// GREAT
	this.instance_25 = new lib.GREAT_OS();
	this.instance_25.setTransform(182.5,144,1,1,0,0,0,182,46);
	this.instance_25._off = true;

	var maskedShapeInstanceList = [this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(417).to({_off:false},0).to({x:182,y:46},21,cjs.Ease.cubicOut).wait(20).to({y:-56},21,cjs.Ease.cubicIn).to({_off:true},1).wait(89));

	// ON
	this.instance_26 = new lib.ON_GS();
	this.instance_26.setTransform(98.5,144,1,1,0,0,0,98,46);
	this.instance_26._off = true;

	var maskedShapeInstanceList = [this.instance_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(413).to({_off:false},0).to({x:98,y:46},21,cjs.Ease.cubicOut).wait(22).to({y:-56},21,cjs.Ease.cubicIn).to({_off:true},1).wait(91));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.3,35,882.9000000000001,353.5);
// library properties:
lib.properties = {
	id: '6DBC25FFFD4048B3B488CE195B1E3C32',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/astronaunt.png?1582670545720", id:"astronaunt"},
		{src:"images/birdBody.png?1582670545720", id:"birdBody"},
		{src:"images/CL.jpg?1582670545720", id:"CL"},
		{src:"images/CL_wheel.png?1582670545720", id:"CL_wheel"},
		{src:"images/cta.png?1582670545720", id:"cta"},
		{src:"images/CY.jpg?1582670545720", id:"CY"},
		{src:"images/CY_wheel.png?1582670545721", id:"CY_wheel"},
		{src:"images/details.png?1582670545721", id:"details"},
		{src:"images/eventLogo.png?1582670545721", id:"eventLogo"},
		{src:"images/HI.jpg?1582670545721", id:"HI"},
		{src:"images/HI_wheel.png?1582670545721", id:"HI_wheel"},
		{src:"images/logo.png?1582670545721", id:"logo"},
		{src:"images/offerEnds.png?1582670545721", id:"offerEnds"},
		{src:"images/offerTitle.png?1582670545721", id:"offerTitle"},
		{src:"images/options.png?1582670545721", id:"options"},
		{src:"images/RV.jpg?1582670545721", id:"RV"},
		{src:"images/RV_wheel.png?1582670545721", id:"RV_wheel"},
		{src:"images/space.jpg?1582670545721", id:"space"},
		{src:"images/text_ALLin.png?1582670545721", id:"text_ALLin"},
		{src:"images/text_go.png?1582670545721", id:"text_go"},
		{src:"images/text_greatSavings.png?1582670545721", id:"text_greatSavings"},
		{src:"images/text_RS.png?1582670545721", id:"text_RS"},
		{src:"images/text_wild.png?1582670545721", id:"text_wild"},
		{src:"images/wing1.png?1582670545721", id:"wing1"},
		{src:"images/wing2.png?1582670545721", id:"wing2"}
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