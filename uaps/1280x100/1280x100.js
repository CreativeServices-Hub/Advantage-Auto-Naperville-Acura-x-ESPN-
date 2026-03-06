(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"1280x100_atlas_1", frames: [[0,0,2560,200],[0,202,2560,200],[0,404,2560,200],[0,606,2560,200],[0,808,2560,200],[0,1010,2560,200]]}
];


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



(lib._1280x100_1 = function() {
	this.initialize(ss["1280x100_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.AAAcuraNaperville_0001s_0000_GetLibraryImage = function() {
	this.initialize(ss["1280x100_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.AAAcuraNaperville_0001s_0000s_0000_ShopNow = function() {
	this.initialize(ss["1280x100_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.AAAcuraNaperville_0001s_0000s_0001_Rectangle3 = function() {
	this.initialize(ss["1280x100_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.AAAcuraNaperville_0001s_0001_ExperiencetheNewAcuraIntegrainNaperville = function() {
	this.initialize(ss["1280x100_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.AAAcuraNaperville_0001s_0002_Group1 = function() {
	this.initialize(ss["1280x100_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.AAAcuraNaperville_0001s_0000s_0000_ShopNow();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,100);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.AAAcuraNaperville_0001s_0000s_0001_Rectangle3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,100);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.AAAcuraNaperville_0001s_0001_ExperiencetheNewAcuraIntegrainNaperville();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,100);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.AAAcuraNaperville_0001s_0002_Group1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,100);


// stage content:
(lib._1280x100 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_8
	this.instance = new lib._1280x100_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240));

	// Layer_2
	this.instance_1 = new lib.AAAcuraNaperville_0001s_0000_GetLibraryImage();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(240));

	// Layer_5
	this.instance_2 = new lib.Symbol5("synched",0);
	this.instance_2.setTransform(640,195,1,1,0,0,0,640,209);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48).to({_off:false},0).to({y:209,alpha:1},11,cjs.Ease.backOut).wait(181));

	// Layer_4
	this.instance_3 = new lib.Symbol4("synched",0);
	this.instance_3.setTransform(640,225,1,1,0,0,0,640,209);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45).to({_off:false},0).to({y:209,alpha:1},12,cjs.Ease.backOut).wait(183));

	// Layer_3
	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.setTransform(640,225,1,1,0,0,0,640,209);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).to({y:209,alpha:1},13,cjs.Ease.quintOut).wait(204));

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhTxAGgMA+shX1MBo3BK2Mg+sBX1g");
	var mask_graphics_1 = new cjs.Graphics().p("EhU8AFqMA+shX1MBrNBMiMg+sBX1g");
	var mask_graphics_2 = new cjs.Graphics().p("EhWDAE4MA+thX1MBtaBOGMg+tBX1g");
	var mask_graphics_3 = new cjs.Graphics().p("EhXEAEJMA+thX0MBvcBPjMg+tBX0g");
	var mask_graphics_4 = new cjs.Graphics().p("EhYAADeMA+thX1MBxUBQ6Mg+tBX1g");
	var mask_graphics_5 = new cjs.Graphics().p("EhY4AC3MA+thX1MBzEBSIMg+tBX1g");
	var mask_graphics_6 = new cjs.Graphics().p("EhZrACSMA+thX1MB0qBTSMg+tBX1g");
	var mask_graphics_7 = new cjs.Graphics().p("EhaaABxMA+thX1MB2IBUUMg+tBX1g");
	var mask_graphics_8 = new cjs.Graphics().p("EhbFABSMA+thX1MB3eBVSMg+tBX1g");
	var mask_graphics_9 = new cjs.Graphics().p("EhbsAA2MA+thX1MB4sBWKMg+tBX1g");
	var mask_graphics_10 = new cjs.Graphics().p("EhcPAAdMA+thX1MB5yBW8Mg+tBX1g");
	var mask_graphics_11 = new cjs.Graphics().p("EhcvAAGMA+thX0MB6yBXpMg+tBX0g");
	var mask_graphics_12 = new cjs.Graphics().p("EhdLgANMA+thX2MB7qBYRMg+tBX2g");
	var mask_graphics_13 = new cjs.Graphics().p("EhdkgAfMA+shX2MB8dBY1Mg+sBX2g");
	var mask_graphics_14 = new cjs.Graphics().p("Ehd6gAvMA+shX2MB9JBZVMg+sBX2g");
	var mask_graphics_15 = new cjs.Graphics().p("EheOgA9MA+thX2MB9wBZxMg+tBX2g");
	var mask_graphics_16 = new cjs.Graphics().p("EhefgBJMA+thX2MB+SBaJMg+tBX2g");
	var mask_graphics_17 = new cjs.Graphics().p("EhetgBTMA+shX2MB+vBadMg+sBX2g");
	var mask_graphics_18 = new cjs.Graphics().p("Ehe6gBcMA+thX2MB/IBavMg+tBX2g");
	var mask_graphics_19 = new cjs.Graphics().p("EhfEgBjMA+thX2MB/cBa9Mg+tBX2g");
	var mask_graphics_20 = new cjs.Graphics().p("EhfMgBpMA+shX2MB/tBbJMg+sBX2g");
	var mask_graphics_21 = new cjs.Graphics().p("EhfTgBuMA+thX2MB/6BbTMg+tBX2g");
	var mask_graphics_22 = new cjs.Graphics().p("EhfYgByMA+shX2MCAFBbbMg+sBX2g");
	var mask_graphics_23 = new cjs.Graphics().p("EhfcgB0MA+shX2MCANBbfMg+sBX2g");
	var mask_graphics_24 = new cjs.Graphics().p("EhffgB2MA+thX2MCASBbjMg+tBX2g");
	var mask_graphics_25 = new cjs.Graphics().p("EhfhgB4MA+thX2MCAWBbnMg+tBX2g");
	var mask_graphics_26 = new cjs.Graphics().p("EhfigB5MA+thX2MCAYBbpMg+tBX2g");
	var mask_graphics_27 = new cjs.Graphics().p("EhfjgB5MA+thX2MCAaBbpMg+tBX2g");
	var mask_graphics_28 = new cjs.Graphics().p("EhfjgB5MA+thX2MCAaBbpMg+tBX2g");
	var mask_graphics_29 = new cjs.Graphics().p("EhfjgB5MA+thX2MCAaBbpMg+tBX2g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:919.1619,y:405.0796}).wait(1).to({graphics:mask_graphics_1,x:924.5637,y:383.6938}).wait(1).to({graphics:mask_graphics_2,x:929.5934,y:363.7818}).wait(1).to({graphics:mask_graphics_3,x:934.2639,y:345.2917}).wait(1).to({graphics:mask_graphics_4,x:938.588,y:328.1702}).wait(1).to({graphics:mask_graphics_5,x:942.5804,y:312.3657}).wait(1).to({graphics:mask_graphics_6,x:946.2533,y:297.8244}).wait(1).to({graphics:mask_graphics_7,x:949.6206,y:284.4941}).wait(1).to({graphics:mask_graphics_8,x:952.6946,y:272.3224}).wait(1).to({graphics:mask_graphics_9,x:955.49,y:261.2565}).wait(1).to({graphics:mask_graphics_10,x:958.019,y:251.2435}).wait(1).to({graphics:mask_graphics_11,x:960.2955,y:242.2309}).wait(1).to({graphics:mask_graphics_12,x:962.3322,y:234.166}).wait(1).to({graphics:mask_graphics_13,x:964.1435,y:226.9962}).wait(1).to({graphics:mask_graphics_14,x:965.7419,y:220.6692}).wait(1).to({graphics:mask_graphics_15,x:967.1405,y:215.132}).wait(1).to({graphics:mask_graphics_16,x:968.3528,y:210.3313}).wait(1).to({graphics:mask_graphics_17,x:969.3923,y:206.2161}).wait(1).to({graphics:mask_graphics_18,x:970.2724,y:202.7322}).wait(1).to({graphics:mask_graphics_19,x:971.006,y:199.827}).wait(1).to({graphics:mask_graphics_20,x:971.6067,y:197.4492}).wait(1).to({graphics:mask_graphics_21,x:972.0878,y:195.5448}).wait(1).to({graphics:mask_graphics_22,x:972.4626,y:194.0616}).wait(1).to({graphics:mask_graphics_23,x:972.7439,y:192.9469}).wait(1).to({graphics:mask_graphics_24,x:972.9454,y:192.1487}).wait(1).to({graphics:mask_graphics_25,x:973.0809,y:191.6131}).wait(1).to({graphics:mask_graphics_26,x:973.1628,y:191.2883}).wait(1).to({graphics:mask_graphics_27,x:973.2052,y:191.1217}).wait(1).to({graphics:mask_graphics_28,x:973.2209,y:191.0605}).wait(1).to({graphics:mask_graphics_29,x:973.1772,y:190.9714}).wait(211));

	// Layer_1
	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.setTransform(640,209,1,1,0,0,0,640,209);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(240));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,36,640,80);
// library properties:
lib.properties = {
	id: '701A06AFE8A041F889E936E2C9FAF60F',
	width: 1280,
	height: 100,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/1280x100_atlas_1.png", id:"1280x100_atlas_1"}
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
an.compositions['701A06AFE8A041F889E936E2C9FAF60F'] = {
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