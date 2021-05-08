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
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.cta_btn = function() {
	this.initialize(img.cta_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.text11 = function() {
	this.initialize(img.text11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.text12 = function() {
	this.initialize(img.text12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.text13 = function() {
	this.initialize(img.text13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);// helper functions:

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


(lib.text13_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.text13();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text13_1, new cjs.Rectangle(0,0,300,600), null);


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

}).prototype = getMCSymbolPrototype(lib.text12_1, new cjs.Rectangle(0,0,300,600), null);


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

}).prototype = getMCSymbolPrototype(lib.text11_1, new cjs.Rectangle(0,0,300,600), null);


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

}).prototype = getMCSymbolPrototype(lib.cta_btn_1, new cjs.Rectangle(0,0,300,600), null);


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

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,300,600), null);


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

}).prototype = getMCSymbolPrototype(lib.back_1, new cjs.Rectangle(0,0,300,600), null);


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

	this.actionFrames = [0,102,265];
	// timeline functions:
	this.frame_0 = function() {
		//DOUBLECLICK CLICKTAG//
		
		this.clickTag.on("click", function(){
			window.open(clickTag, "_blank");        
		});
	}
	this.frame_102 = function() {
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 400);
	}
	this.frame_265 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(102).call(this.frame_102).wait(163).call(this.frame_265).wait(1));

	// clickTag
	this.clickTag = new lib.clickTag();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(150,300,0.4121,6.6666,0,0,0,364,45);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.clickTag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(266));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(266));

	// cta
	this.instance = new lib.cta_1();
	this.instance.setTransform(150,119,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140).to({_off:false},0).to({y:125,alpha:1},49,cjs.Ease.quadOut).wait(77));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_103 = new cjs.Graphics().p("AnaCHIAAkNIO1AAIAAENg");
	var mask_graphics_104 = new cjs.Graphics().p("AngCHIAAkNIPCAAIAAENg");
	var mask_graphics_105 = new cjs.Graphics().p("AnnCHIAAkNIPPAAIAAENg");
	var mask_graphics_106 = new cjs.Graphics().p("AntCHIAAkNIPbAAIAAENg");
	var mask_graphics_107 = new cjs.Graphics().p("AnzCHIAAkNIPnAAIAAENg");
	var mask_graphics_108 = new cjs.Graphics().p("An5CHIAAkNIPzAAIAAENg");
	var mask_graphics_109 = new cjs.Graphics().p("An/CHIAAkNIP/AAIAAENg");
	var mask_graphics_110 = new cjs.Graphics().p("AoECHIAAkNIQJAAIAAENg");
	var mask_graphics_111 = new cjs.Graphics().p("AoKCHIAAkNIQVAAIAAENg");
	var mask_graphics_112 = new cjs.Graphics().p("AoPCHIAAkNIQfAAIAAENg");
	var mask_graphics_113 = new cjs.Graphics().p("AoUCHIAAkNIQpAAIAAENg");
	var mask_graphics_114 = new cjs.Graphics().p("AoZCHIAAkNIQzAAIAAENg");
	var mask_graphics_115 = new cjs.Graphics().p("AoeCHIAAkNIQ9AAIAAENg");
	var mask_graphics_116 = new cjs.Graphics().p("AojCHIAAkNIRHAAIAAENg");
	var mask_graphics_117 = new cjs.Graphics().p("AonCHIAAkNIRPAAIAAENg");
	var mask_graphics_118 = new cjs.Graphics().p("AosCHIAAkNIRZAAIAAENg");
	var mask_graphics_119 = new cjs.Graphics().p("AowCHIAAkNIRhAAIAAENg");
	var mask_graphics_120 = new cjs.Graphics().p("Ao0CHIAAkNIRpAAIAAENg");
	var mask_graphics_121 = new cjs.Graphics().p("Ao5CHIAAkNIRzAAIAAENg");
	var mask_graphics_122 = new cjs.Graphics().p("Ao8CHIAAkNIR5AAIAAENg");
	var mask_graphics_123 = new cjs.Graphics().p("ApACHIAAkNISBAAIAAENg");
	var mask_graphics_124 = new cjs.Graphics().p("ApDCHIAAkNISIAAIAAENg");
	var mask_graphics_125 = new cjs.Graphics().p("ApHCHIAAkNISPAAIAAENg");
	var mask_graphics_126 = new cjs.Graphics().p("ApKCHIAAkNISVAAIAAENg");
	var mask_graphics_127 = new cjs.Graphics().p("ApOCHIAAkNISdAAIAAENg");
	var mask_graphics_128 = new cjs.Graphics().p("ApRCHIAAkNISjAAIAAENg");
	var mask_graphics_129 = new cjs.Graphics().p("ApTCHIAAkNISnAAIAAENg");
	var mask_graphics_130 = new cjs.Graphics().p("ApXCHIAAkNISuAAIAAENg");
	var mask_graphics_131 = new cjs.Graphics().p("ApZCHIAAkNISzAAIAAENg");
	var mask_graphics_132 = new cjs.Graphics().p("ApbCHIAAkNIS3AAIAAENg");
	var mask_graphics_133 = new cjs.Graphics().p("ApeCHIAAkNIS9AAIAAENg");
	var mask_graphics_134 = new cjs.Graphics().p("ApgCHIAAkNITBAAIAAENg");
	var mask_graphics_135 = new cjs.Graphics().p("ApiCHIAAkNITFAAIAAENg");
	var mask_graphics_136 = new cjs.Graphics().p("ApkCHIAAkNITJAAIAAENg");
	var mask_graphics_137 = new cjs.Graphics().p("ApmCHIAAkNITNAAIAAENg");
	var mask_graphics_138 = new cjs.Graphics().p("ApoCHIAAkNITQAAIAAENg");
	var mask_graphics_139 = new cjs.Graphics().p("AppCHIAAkNITTAAIAAENg");
	var mask_graphics_140 = new cjs.Graphics().p("ApqCHIAAkNITVAAIAAENg");
	var mask_graphics_141 = new cjs.Graphics().p("AprCHIAAkNITXAAIAAENg");
	var mask_graphics_142 = new cjs.Graphics().p("AptCHIAAkNITaAAIAAENg");
	var mask_graphics_143 = new cjs.Graphics().p("ApuCHIAAkNITdAAIAAENg");
	var mask_graphics_144 = new cjs.Graphics().p("ApuCHIAAkNITdAAIAAENg");
	var mask_graphics_145 = new cjs.Graphics().p("ApvCHIAAkNITfAAIAAENg");
	var mask_graphics_146 = new cjs.Graphics().p("ApwCHIAAkNIThAAIAAENg");
	var mask_graphics_147 = new cjs.Graphics().p("ApvCHIAAkNITgAAIAAENg");
	var mask_graphics_148 = new cjs.Graphics().p("ApwCHIAAkNIThAAIAAENg");
	var mask_graphics_149 = new cjs.Graphics().p("ApwCHIAAkNIThAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(103).to({graphics:mask_graphics_103,x:-14.5,y:176.5}).wait(1).to({graphics:mask_graphics_104,x:-10,y:176.5}).wait(1).to({graphics:mask_graphics_105,x:-5.575,y:176.5}).wait(1).to({graphics:mask_graphics_106,x:-1.25,y:176.5}).wait(1).to({graphics:mask_graphics_107,x:2.95,y:176.5}).wait(1).to({graphics:mask_graphics_108,x:7.075,y:176.5}).wait(1).to({graphics:mask_graphics_109,x:11.1,y:176.5}).wait(1).to({graphics:mask_graphics_110,x:15.025,y:176.5}).wait(1).to({graphics:mask_graphics_111,x:18.825,y:176.5}).wait(1).to({graphics:mask_graphics_112,x:22.55,y:176.5}).wait(1).to({graphics:mask_graphics_113,x:26.175,y:176.5}).wait(1).to({graphics:mask_graphics_114,x:29.675,y:176.5}).wait(1).to({graphics:mask_graphics_115,x:33.1,y:176.5}).wait(1).to({graphics:mask_graphics_116,x:36.425,y:176.5}).wait(1).to({graphics:mask_graphics_117,x:39.65,y:176.5}).wait(1).to({graphics:mask_graphics_118,x:42.775,y:176.5}).wait(1).to({graphics:mask_graphics_119,x:45.825,y:176.5}).wait(1).to({graphics:mask_graphics_120,x:48.725,y:176.5}).wait(1).to({graphics:mask_graphics_121,x:51.55,y:176.5}).wait(1).to({graphics:mask_graphics_122,x:54.275,y:176.5}).wait(1).to({graphics:mask_graphics_123,x:56.925,y:176.5}).wait(1).to({graphics:mask_graphics_124,x:59.45,y:176.5}).wait(1).to({graphics:mask_graphics_125,x:61.875,y:176.5}).wait(1).to({graphics:mask_graphics_126,x:64.2,y:176.5}).wait(1).to({graphics:mask_graphics_127,x:66.425,y:176.5}).wait(1).to({graphics:mask_graphics_128,x:68.575,y:176.5}).wait(1).to({graphics:mask_graphics_129,x:70.6,y:176.5}).wait(1).to({graphics:mask_graphics_130,x:72.55,y:176.5}).wait(1).to({graphics:mask_graphics_131,x:74.4,y:176.5}).wait(1).to({graphics:mask_graphics_132,x:76.1,y:176.5}).wait(1).to({graphics:mask_graphics_133,x:77.75,y:176.5}).wait(1).to({graphics:mask_graphics_134,x:79.3,y:176.5}).wait(1).to({graphics:mask_graphics_135,x:80.725,y:176.5}).wait(1).to({graphics:mask_graphics_136,x:82.05,y:176.5}).wait(1).to({graphics:mask_graphics_137,x:83.325,y:176.5}).wait(1).to({graphics:mask_graphics_138,x:84.45,y:176.5}).wait(1).to({graphics:mask_graphics_139,x:85.5,y:176.5}).wait(1).to({graphics:mask_graphics_140,x:86.425,y:176.5}).wait(1).to({graphics:mask_graphics_141,x:87.275,y:176.5}).wait(1).to({graphics:mask_graphics_142,x:88,y:176.5}).wait(1).to({graphics:mask_graphics_143,x:88.65,y:176.5}).wait(1).to({graphics:mask_graphics_144,x:89.225,y:176.5}).wait(1).to({graphics:mask_graphics_145,x:89.65,y:176.5}).wait(1).to({graphics:mask_graphics_146,x:90,y:176.5}).wait(1).to({graphics:mask_graphics_147,x:90.25,y:176.5}).wait(1).to({graphics:mask_graphics_148,x:90.4,y:176.5}).wait(1).to({graphics:mask_graphics_149,x:90.45,y:176.5}).wait(117));

	// cta_btn
	this.instance_1 = new lib.cta_btn_1();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(103).to({_off:false},0).wait(163));

	// text13
	this.instance_2 = new lib.text13_1();
	this.instance_2.setTransform(150,135,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({y:125,alpha:1},90,cjs.Ease.quadInOut).wait(165));

	// text12
	this.instance_3 = new lib.text12_1();
	this.instance_3.setTransform(150,135,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({y:125,alpha:1},90,cjs.Ease.quadInOut).wait(171));

	// text11
	this.instance_4 = new lib.text11_1();
	this.instance_4.setTransform(150,135,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:125,alpha:1},90,cjs.Ease.quadInOut).wait(176));

	// back
	this.instance_5 = new lib.back_1();
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(266));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149,294,152,316);
// library properties:
lib.properties = {
	id: '90CE9A07CC2147BDA6C7E08CF861CD67',
	width: 300,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1620326124136", id:"back"},
		{src:"images/cta.png?1620326124136", id:"cta"},
		{src:"images/cta_btn.png?1620326124136", id:"cta_btn"},
		{src:"images/text11.png?1620326124136", id:"text11"},
		{src:"images/text12.png?1620326124136", id:"text12"},
		{src:"images/text13.png?1620326124136", id:"text13"}
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