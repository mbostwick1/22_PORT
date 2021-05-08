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
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.cta_btn = function() {
	this.initialize(img.cta_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.text11 = function() {
	this.initialize(img.text11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.text12 = function() {
	this.initialize(img.text12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);// helper functions:

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

}).prototype = getMCSymbolPrototype(lib.text12_1, new cjs.Rectangle(0,0,320,50), null);


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

}).prototype = getMCSymbolPrototype(lib.text11_1, new cjs.Rectangle(0,0,320,50), null);


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

}).prototype = getMCSymbolPrototype(lib.cta_btn_1, new cjs.Rectangle(0,0,320,50), null);


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

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,320,50), null);


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

}).prototype = getMCSymbolPrototype(lib.back_1, new cjs.Rectangle(0,0,320,50), null);


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

	this.actionFrames = [0,77,165];
	// timeline functions:
	this.frame_0 = function() {
		//DOUBLECLICK CLICKTAG//
		
		this.clickTag.on("click", function(){
			window.open(clickTag, "_blank");        
		});
	}
	this.frame_77 = function() {
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 400);
	}
	this.frame_165 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(77).call(this.frame_77).wait(88).call(this.frame_165).wait(1));

	// clickTag
	this.clickTag = new lib.clickTag();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(160,25,0.4396,0.5555,0,0,0,364,45);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.clickTag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(166));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A4/j5MAx/AAAIAAHzMgx/AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(166));

	// cta
	this.instance = new lib.cta_1();
	this.instance.setTransform(150,119,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(115).to({_off:false},0).to({y:125,alpha:1},49,cjs.Ease.quadOut).wait(2));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_78 = new cjs.Graphics().p("AEYC+IAAkNINSAAIAAENg");
	var mask_graphics_79 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_80 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_81 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_82 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_83 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_84 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_85 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_86 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_87 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_88 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_89 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_90 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_91 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_92 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_93 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_94 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_95 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_96 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_97 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_98 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_99 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_100 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_101 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_102 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_103 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_104 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_105 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_106 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_107 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_108 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_109 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_110 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_111 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_112 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_113 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_114 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_115 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_116 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_117 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_118 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_119 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_120 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_121 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_122 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_123 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");
	var mask_graphics_124 = new cjs.Graphics().p("AmoCHIAAkNINRAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(78).to({graphics:mask_graphics_78,x:113.0144,y:19}).wait(1).to({graphics:mask_graphics_79,x:187.2,y:24.5}).wait(1).to({graphics:mask_graphics_80,x:190.8,y:24.5}).wait(1).to({graphics:mask_graphics_81,x:194.25,y:24.5}).wait(1).to({graphics:mask_graphics_82,x:197.7,y:24.5}).wait(1).to({graphics:mask_graphics_83,x:201,y:24.5}).wait(1).to({graphics:mask_graphics_84,x:204.3,y:24.5}).wait(1).to({graphics:mask_graphics_85,x:207.45,y:24.5}).wait(1).to({graphics:mask_graphics_86,x:210.55,y:24.5}).wait(1).to({graphics:mask_graphics_87,x:213.55,y:24.5}).wait(1).to({graphics:mask_graphics_88,x:216.5,y:24.5}).wait(1).to({graphics:mask_graphics_89,x:219.35,y:24.5}).wait(1).to({graphics:mask_graphics_90,x:222.1,y:24.5}).wait(1).to({graphics:mask_graphics_91,x:224.8,y:24.5}).wait(1).to({graphics:mask_graphics_92,x:227.4,y:24.5}).wait(1).to({graphics:mask_graphics_93,x:229.95,y:24.5}).wait(1).to({graphics:mask_graphics_94,x:232.4,y:24.5}).wait(1).to({graphics:mask_graphics_95,x:234.75,y:24.5}).wait(1).to({graphics:mask_graphics_96,x:237.05,y:24.5}).wait(1).to({graphics:mask_graphics_97,x:239.25,y:24.5}).wait(1).to({graphics:mask_graphics_98,x:241.4,y:24.5}).wait(1).to({graphics:mask_graphics_99,x:243.45,y:24.5}).wait(1).to({graphics:mask_graphics_100,x:245.4,y:24.5}).wait(1).to({graphics:mask_graphics_101,x:247.3,y:24.5}).wait(1).to({graphics:mask_graphics_102,x:249.1,y:24.5}).wait(1).to({graphics:mask_graphics_103,x:250.85,y:24.5}).wait(1).to({graphics:mask_graphics_104,x:252.5,y:24.5}).wait(1).to({graphics:mask_graphics_105,x:254.05,y:24.5}).wait(1).to({graphics:mask_graphics_106,x:255.55,y:24.5}).wait(1).to({graphics:mask_graphics_107,x:256.95,y:24.5}).wait(1).to({graphics:mask_graphics_108,x:258.25,y:24.5}).wait(1).to({graphics:mask_graphics_109,x:259.5,y:24.5}).wait(1).to({graphics:mask_graphics_110,x:260.7,y:24.5}).wait(1).to({graphics:mask_graphics_111,x:261.75,y:24.5}).wait(1).to({graphics:mask_graphics_112,x:262.75,y:24.5}).wait(1).to({graphics:mask_graphics_113,x:263.7,y:24.5}).wait(1).to({graphics:mask_graphics_114,x:264.55,y:24.5}).wait(1).to({graphics:mask_graphics_115,x:265.3,y:24.5}).wait(1).to({graphics:mask_graphics_116,x:266,y:24.5}).wait(1).to({graphics:mask_graphics_117,x:266.6,y:24.5}).wait(1).to({graphics:mask_graphics_118,x:267.1,y:24.5}).wait(1).to({graphics:mask_graphics_119,x:267.55,y:24.5}).wait(1).to({graphics:mask_graphics_120,x:267.9,y:24.5}).wait(1).to({graphics:mask_graphics_121,x:268.2,y:24.5}).wait(1).to({graphics:mask_graphics_122,x:268.4,y:24.5}).wait(1).to({graphics:mask_graphics_123,x:268.5,y:24.5}).wait(1).to({graphics:mask_graphics_124,x:268.55,y:24.5}).wait(42));

	// cta_btn
	this.instance_1 = new lib.cta_btn_1();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(78).to({_off:false},0).wait(88));

	// text12
	this.instance_2 = new lib.text12_1();
	this.instance_2.setTransform(150,135,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({y:125,alpha:1},71,cjs.Ease.quadInOut).wait(90));

	// text11
	this.instance_3 = new lib.text11_1();
	this.instance_3.setTransform(150,131,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:125,alpha:1},71,cjs.Ease.quadInOut).wait(95));

	// back
	this.instance_4 = new lib.back_1();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(166));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(159,19,162,41);
// library properties:
lib.properties = {
	id: '90CE9A07CC2147BDA6C7E08CF861CD67',
	width: 320,
	height: 50,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1620327028840", id:"back"},
		{src:"images/cta.png?1620327028840", id:"cta"},
		{src:"images/cta_btn.png?1620327028840", id:"cta_btn"},
		{src:"images/text11.png?1620327028840", id:"text11"},
		{src:"images/text12.png?1620327028840", id:"text12"}
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