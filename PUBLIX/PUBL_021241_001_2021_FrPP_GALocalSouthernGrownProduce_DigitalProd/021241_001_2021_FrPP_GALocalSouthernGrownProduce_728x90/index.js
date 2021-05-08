(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.cta_btn = function() {
	this.initialize(img.cta_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.text11 = function() {
	this.initialize(img.text11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.text12 = function() {
	this.initialize(img.text12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.text12_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.text12();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text12_1, new cjs.Rectangle(0,0,728,90), null);


(lib.text11_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.text11();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text11_1, new cjs.Rectangle(0,0,728,90), null);


(lib.cta_btn_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cta_btn();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_btn_1, new cjs.Rectangle(0,0,728,90), null);


(lib.cta_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cta();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,728,90), null);


(lib.clickTag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.back_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back_1, new cjs.Rectangle(0,0,728,90), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,96,184];
	// timeline functions:
	this.frame_0 = function() {
		//DOUBLECLICK CLICKTAG//
		
		this.clickTag.on("click", function(){
			window.open(clickTag, "_blank");        
		});
	}
	this.frame_96 = function() {
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 400);
	}
	this.frame_184 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(96).call(this.frame_96).wait(88).call(this.frame_184).wait(1));

	// clickTag
	this.clickTag = new lib.clickTag();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(364,45,1,1,0,0,0,364,45);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.clickTag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(185));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(185));

	// cta
	this.instance = new lib.cta_1();
	this.instance.setTransform(150,119,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(134).to({_off:false},0).to({y:125,alpha:1},49,cjs.Ease.quadOut).wait(2));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_97 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_98 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_99 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_100 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_101 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_102 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_103 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_104 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_105 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_106 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_107 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_108 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_109 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_110 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_111 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_112 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_113 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_114 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_115 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_116 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_117 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_118 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_119 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_120 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_121 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_122 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_123 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_124 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_125 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_126 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_127 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_128 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_129 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_130 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_131 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_132 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_133 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_134 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_135 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_136 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_137 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_138 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_139 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_140 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_141 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_142 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");
	var mask_graphics_143 = new cjs.Graphics().p("AoMCHIAAkNIQZAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(97).to({graphics:mask_graphics_97,x:474.5,y:56.5}).wait(1).to({graphics:mask_graphics_98,x:479.1,y:56.5}).wait(1).to({graphics:mask_graphics_99,x:483.6,y:56.5}).wait(1).to({graphics:mask_graphics_100,x:488,y:56.5}).wait(1).to({graphics:mask_graphics_101,x:492.3,y:56.5}).wait(1).to({graphics:mask_graphics_102,x:496.5,y:56.5}).wait(1).to({graphics:mask_graphics_103,x:500.6,y:56.5}).wait(1).to({graphics:mask_graphics_104,x:504.6,y:56.5}).wait(1).to({graphics:mask_graphics_105,x:508.5,y:56.5}).wait(1).to({graphics:mask_graphics_106,x:512.25,y:56.5}).wait(1).to({graphics:mask_graphics_107,x:515.95,y:56.5}).wait(1).to({graphics:mask_graphics_108,x:519.55,y:56.5}).wait(1).to({graphics:mask_graphics_109,x:523.05,y:56.5}).wait(1).to({graphics:mask_graphics_110,x:526.45,y:56.5}).wait(1).to({graphics:mask_graphics_111,x:529.7,y:56.5}).wait(1).to({graphics:mask_graphics_112,x:532.9,y:56.5}).wait(1).to({graphics:mask_graphics_113,x:536,y:56.5}).wait(1).to({graphics:mask_graphics_114,x:538.95,y:56.5}).wait(1).to({graphics:mask_graphics_115,x:541.85,y:56.5}).wait(1).to({graphics:mask_graphics_116,x:544.65,y:56.5}).wait(1).to({graphics:mask_graphics_117,x:547.3,y:56.5}).wait(1).to({graphics:mask_graphics_118,x:549.9,y:56.5}).wait(1).to({graphics:mask_graphics_119,x:552.35,y:56.5}).wait(1).to({graphics:mask_graphics_120,x:554.75,y:56.5}).wait(1).to({graphics:mask_graphics_121,x:557,y:56.5}).wait(1).to({graphics:mask_graphics_122,x:559.2,y:56.5}).wait(1).to({graphics:mask_graphics_123,x:561.25,y:56.5}).wait(1).to({graphics:mask_graphics_124,x:563.25,y:56.5}).wait(1).to({graphics:mask_graphics_125,x:565.1,y:56.5}).wait(1).to({graphics:mask_graphics_126,x:566.9,y:56.5}).wait(1).to({graphics:mask_graphics_127,x:568.55,y:56.5}).wait(1).to({graphics:mask_graphics_128,x:570.1,y:56.5}).wait(1).to({graphics:mask_graphics_129,x:571.6,y:56.5}).wait(1).to({graphics:mask_graphics_130,x:572.95,y:56.5}).wait(1).to({graphics:mask_graphics_131,x:574.2,y:56.5}).wait(1).to({graphics:mask_graphics_132,x:575.4,y:56.5}).wait(1).to({graphics:mask_graphics_133,x:576.45,y:56.5}).wait(1).to({graphics:mask_graphics_134,x:577.4,y:56.5}).wait(1).to({graphics:mask_graphics_135,x:578.25,y:56.5}).wait(1).to({graphics:mask_graphics_136,x:579,y:56.5}).wait(1).to({graphics:mask_graphics_137,x:579.7,y:56.5}).wait(1).to({graphics:mask_graphics_138,x:580.25,y:56.5}).wait(1).to({graphics:mask_graphics_139,x:580.7,y:56.5}).wait(1).to({graphics:mask_graphics_140,x:581.05,y:56.5}).wait(1).to({graphics:mask_graphics_141,x:581.3,y:56.5}).wait(1).to({graphics:mask_graphics_142,x:581.45,y:56.5}).wait(1).to({graphics:mask_graphics_143,x:581.5,y:56.5}).wait(42));

	// cta_btn
	this.instance_1 = new lib.cta_btn_1();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(97).to({_off:false},0).wait(88));

	// text12
	this.instance_2 = new lib.text12_1();
	this.instance_2.setTransform(150,135,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({y:125,alpha:1},90,cjs.Ease.quadInOut).wait(90));

	// text11
	this.instance_3 = new lib.text11_1();
	this.instance_3.setTransform(150,135,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:125,alpha:1},90,cjs.Ease.quadInOut).wait(95));

	// back
	this.instance_4 = new lib.back_1();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(185));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(363,39,366,61);
// library properties:
lib.properties = {
	id: '90CE9A07CC2147BDA6C7E08CF861CD67',
	width: 728,
	height: 90,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1620326295232", id:"back"},
		{src:"images/cta.png?1620326295232", id:"cta"},
		{src:"images/cta_btn.png?1620326295232", id:"cta_btn"},
		{src:"images/text11.png?1620326295232", id:"text11"},
		{src:"images/text12.png?1620326295232", id:"text12"}
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
an.compositions['90CE9A07CC2147BDA6C7E08CF861CD67'] = {
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;