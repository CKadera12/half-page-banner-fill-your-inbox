(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,1022,232,208],[646,1793,51,64],[594,1793,50,91],[0,602,232,208],[0,812,232,208],[0,1232,232,208],[234,602,232,208],[302,0,232,208],[0,1652,232,208],[536,210,232,208],[468,630,232,208],[468,420,232,208],[536,0,232,208],[0,1442,232,208],[302,210,232,208],[234,812,232,208],[234,1232,232,208],[234,1442,232,208],[234,1652,232,208],[468,840,232,208],[468,1050,232,208],[468,1260,232,208],[468,1470,232,208],[234,1022,232,208],[0,0,300,600],[594,1680,106,111],[468,1680,124,362],[302,420,129,163]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.candleonehalfbanner = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.candleredhalfbanner = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cookieberries = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cookieeight = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cookieeighteen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cookieeleven = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.cookiefifteen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.cookiefive = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.cookiefour = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.cookiefourteen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.cookiefrosting = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.cookiegreens = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.cookienine = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.cookieninetten = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.cookieone = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.cookieseven = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.cookieseventeen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.cookiesix = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.cookiesixteen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.cookieten = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.cookiethirteen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.cookiethree = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.cookietwo = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.halfbannertable = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.toprightcandleshalfbanner = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.towelhalfbanner = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.whitebiteshalfbanner = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.whitecandlehalfbanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.candleonehalfbanner();
	this.instance.parent = this;
	this.instance.setTransform(-25.5,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitecandlehalfbanner, new cjs.Rectangle(-25.5,-32,51,64), null);


(lib.whitebiteshalfbanner_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.whitebiteshalfbanner();
	this.instance.parent = this;
	this.instance.setTransform(-64.5,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitebiteshalfbanner_1, new cjs.Rectangle(-64.5,-81.5,129,163), null);


(lib.towelhalfbanner_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.towelhalfbanner();
	this.instance.parent = this;
	this.instance.setTransform(-62,-182);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.towelhalfbanner_1, new cjs.Rectangle(-62,-182,124,362), null);


(lib.somethingdelicioushalfbanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#07744A").s().p("AgQBuIgWgDIgGADIgHACIgEgBIgFgDQgHgGgGgRQgGgRAAgQQAAgHAEgEQADgFAGAAQAJAAALARIAIANQAGAIALAFQALAFALAAQAPAAAIgHQAIgHAAgMQAAgSgigRIgNgGQgigQgLgNQgMgOAAgVQABgbASgSQAUgRAfAAIAOABIAPACIAKgEIAHgBQAKAAAKARQAKARAAASQAAAIgDAEQgDAEgHAAQgFAAgEgEQgFgEgGgKQgIgOgJgFQgIgFgNAAQgLAAgIAHQgHAHAAALQAAAKAIAHQAHAIAaANIACABQA8AdAAAiQAAAegXAUQgXAUgiAAg");
	this.shape.setTransform(81.1,30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#07744A").s().p("AAuBsQgDgDAAgHIAAgQIAAgBIgBAAQgDAAgFAGIgCADQgLAKgNAFQgLAFgQAAQgQAAgOgGQgOgGgJgLQgKgMgFgRQgEgRAAgtIABgOIAAgQIAAgEQgBgSgCgFQgCgEgIgDIgIgDQgNgDAAgIQAAgFAFgEQAEgDAPgFIAcgIIAYgDQAFAAADAEQACAEAAAKIAAAIIgCBQQAAAqAJARQAJAQAWAAQAXAAALgVQAKgWAAgzIAAgQQAAgRgCgFQgCgFgIgCIgIgDQgNgDAAgIQAAgFAFgDQAEgEAPgFIAcgIIAXgDQAGAAADAEQACAEAAAKIAAAMIgCBWIAAAkIABAPQABAIALAFIAFABQAMAEgBAHQAAAFgDADQgEAEgKAEIgdAJQgPAEgIAAQgGAAgDgDg");
	this.shape_1.setTransform(59.1,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#07744A").s().p("AhMBQQgfgfAAgwQAAgvAgggQAfggAwAAQAtAAAeAeQAdAdAAAwQAAAvggAiQgfAhguAAQgtAAgegfgAgog/QgMARAAAdQgBAqATAcQARAcAZAAQAUAAANgSQAOgRAAgdQAAgpgSgcQgTgcgYAAQgVAAgNARg");
	this.shape_2.setTransform(34.7,30.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#07744A").s().p("AglCYQgLgEABgJQgBgHALgEIAFgCQAGgDACgIQACgGAAgRIAAgOIAAgRIAAgWQAAghgCgKQgBgKgEgDIgLgDQgNgEAAgHQAAgFAEgDQAFgEAJgEIAfgKIAWgFQAGAAADAFQACADAAAKIAAANIAAAKIgCA1IAAACIAAA0QgBAUACAJQACAHAFADIAIADQAKAFABAIQAAAIgLADQgLADgbAAQgfAAgLgDgAgahrQgJgHABgLQgBgMAKgIQALgKAOABQAMgBAKAJQAJAIAAALQAAAMgKAHQgKAJgOAAQgNAAgKgIg");
	this.shape_3.setTransform(16.6,25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#07744A").s().p("AhDBQQgegfAAguQAAgwAgghQAgggAuAAQAkAAAYATQAZARAAAZQAAAKgHAGQgHAGgLAAQgKABgHgGQgHgFgGgRQgIgQgHgFQgJgHgNABQgYAAgNASQgOASAAAhQAAAlAUAYQATAYAegBQALABAJgDQAJgDAJgFIAIgHQALgIAHgBQAEABACACQADACAAAFQAAAGgFAHQgEAIgHAFQgRAPgSAHQgRAHgWAAQgsAAgegfg");
	this.shape_4.setTransform(-0.1,30.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#07744A").s().p("AglCYQgKgEAAgJQAAgHAKgEIAGgCQAFgDACgIQACgGABgRIgBgOIAAgRIAAgWQAAghgCgKQgCgKgDgDIgKgDQgOgEAAgHQAAgFAFgDQAEgEAIgEIAhgKIAVgFQAGAAACAFQADADAAAKIAAANIAAAKIgCA1IAAACIgBA0QABAUABAJQACAHAEADIAIADQAMAFgBAIQAAAIgKADQgLADgbAAQggAAgKgDgAgahrQgIgHgBgLQABgMAJgIQAKgKAOABQAOgBAJAJQAJAIAAALQAAAMgKAHQgKAJgOAAQgOAAgJgIg");
	this.shape_5.setTransform(-17.3,25.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#07744A").s().p("AgjCZQgLgEAAgJQAAgHAJgDIALgGQAEgEABgNIABgqIAAghIAAgoIAAgQQAAg1gCgQQgCgPgEgDIgNgFQgNgDAAgIQAAgFADgEQAFgDAPgFIAcgIIAWgDQAGAAADAEQACAEAAAKIgBAQQgBBMAABMIABBJQABAPADAEIANAGQAKAEAAAIQgBAJgKADQgLADgcAAQggAAgJgDg");
	this.shape_6.setTransform(-29.5,25.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#07744A").s().p("AhEBQQgfgfAAguQAAgwAfghQAgggAvAAQApAAAYAXQAYAYAAAnQAAANgEAFQgEAEgQAAIhQAAQgIAAgDgEQgFgDAAgGQAAgFAFgDQADgDAHAAIAsAAIALgCQACgCAAgEQAAgVgNgOQgOgOgTAAQgZAAgNAWQgMAXAAAeQAAAhARAZQARAXAaAAQAQABAKgEQAMgEAKgGIAHgHQALgJAGAAQAEABADADQAEADAAAEQAAAFgFAIQgGAHgJAHQgSAPgSAIQgRAGgUAAQgtAAgdgfg");
	this.shape_7.setTransform(-46.3,30.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#07744A").s().p("AgtCZIgbAAIgSAAIgSABQgaAAgIgEQgIgDAAgJQAAgIALgFQAMgEACgDQADgFACggIABhSIgChOQgCghgCgEQgCgDgLgEQgMgFAAgJQAAgIAJgEQAJgDAaAAIASAAIAVABIAcgBIAZgBQBOAAAsApQArApAABLQAABKgsAmQgsAmhUAAgAguh4QgKADgCAHQgDAIgBAYIgCBBIACBRQABAhADAHQACAGAOAFQAOAFATAAQAxAAAYgeQAZgeAAg7QAAg+gcghQgcgig0AAQgSAAgJAEg");
	this.shape_8.setTransform(-74.1,25.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#07744A").s().p("AhOCLQgbgQAAgYQAAgKAFgHQAGgIAMAAQAJAAAFAGQAEAFADAJQAFAQAOAJQANAJAaAAQAcAAASgLQATgLAAgQQAAgKgHgGQgHgFgNgBIgZADIggACQgmgBgUgNQgVgNAAgRQAAgKAIgKQAHgKAQgJQgNgLgGgNQgGgOAAgRQAAgjAagXQAagXAoABIAWACIAgAGQAIAAAJgEQAKgEANgJIAHAGIACAHQAAAKgHAIQgGAIgNAHIAHARIACASQAAAjgaAWQgaAVgpAAIgWgCIgUgDIgHAIIgCAHQAAAKAKAFQAKAFAVAAIAggDIAhgCQAeAAAPAMQAQAMAAAWQAAAjghAXQgiAVgyAAQgoAAgbgQgAgihpQgMAOAAAVQAAAWALANQALANARAAQARAAAMgNQAMgNAAgWQAAgWgLgNQgMgNgRAAQgRAAgLANg");
	this.shape_9.setTransform(94.8,-16.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#07744A").s().p("AhoBqQgLgEABgKQgBgGALgFIAGgCQAFgCACgIQACgHABgQIgBgOIAAgRIAAgWQAAghgCgLQgCgJgEgDIgJgDQgOgFAAgHQABgEAEgEQAEgEAIgDIAfgKIAWgEQAGAAADADQACADAAAIIAAANIABACIABABIACAAIAAgBIAFgEIAFgFQAXgVAZAAQAQAAAPAHQANAHAKALQAKAMAEAQQAEAPAAAjIAAAcIAAANIAAANQAAAPACAGQACAHAFACIAGACQAKAFAAAGQABAKgLAEQgKACggAAQgeAAgKgCQgKgDAAgJQAAgIALgEIAIgDQAFgDACgJQACgJAAgYQAAhDgJgRQgJgRgXAAQgJAAgLAHQgLAHgFALQgFAKgBAQQgDAQAAAqQAAAUADAIQABAGAEADIAIADQALAEAAAIQAAAJgKADQgLADgbAAQghAAgKgDg");
	this.shape_10.setTransform(70.1,-20.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#07744A").s().p("AglCYQgLgDAAgKQAAgHALgEIAGgCQAFgDACgIQACgGAAgQIAAgPIAAgRIAAgWQAAghgCgKQgCgKgEgCIgJgEQgNgEAAgHQAAgFADgEQAFgDAIgEIAggLIAXgDQAFAAACADQADAEAAALIAAAMIAAAKIgCA1IAAABIgBA0QAAAVACAIQACAJAEACIAIAEQALAEAAAHQABAJgLADQgKAEgcAAQgfgBgLgDgAgZhqQgJgIAAgLQAAgMAKgJQAJgIAOgBQAOABAJAHQAJAJAAALQAAAMgKAHQgKAJgOAAQgOAAgIgHg");
	this.shape_11.setTransform(51.3,-25.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#07744A").s().p("AAeCZQgLgDAAgJQAAgIALgEIAIgDQAFgEACgIQACgKAAgWQAAhFgJgPQgJgSgWAAQgLAAgKAHQgKAHgGAKQgEAKgCAQQgCAQAAAqQAAAVACAHQABAHAFADIAIADQALAEAAAIQAAAJgLADQgKADgcAAQghAAgKgDQgKgEAAgKQAAgGAKgEIAFgDQAGgDADgIQACgKAAgXIAAgjIAAggIgBhgQgCgXgDgFQgCgCgNgEQgNgEAAgHQAAgGAGgEQAFgEATgHIAVgGIAUgCQAHAAADAEQADAEAAAKIgBAJIgBBUIAAAKIABAGIADACIAFgGIAHgIQALgLAMgEQALgGANAAQAkAAASAYQASAXAAAwIABAUIAAAlIAAAMQAAALACAFQACAFAFACIAFACQALAFAAAGQAAAKgKAEQgLADghAAQgcAAgKgDg");
	this.shape_12.setTransform(32.3,-25.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#07744A").s().p("AgKCAQgLgEgHgGQgIgIgEgLQgDgMAAggIAAhxIgTAAIgGgBIgCgGIAAgFQAAgHAXgTIAIgIIAIgHQAWgUAJAAIAFACQACADABADIAAAnIAvAAQAFAAADACQABADAAAFIAAAGQAAAFgBADQgDACgFAAIgsAAIgDACIgBAFIAABpQAAAbAEAHQAFAHAMAAQAIAAAKgDIAPgEQAEAAADADQADACAAAFQAAALgRALQgTAMgXgBQgMABgKgEg");
	this.shape_13.setTransform(12.6,-22.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#07744A").s().p("AhEBQQgfgfAAguQAAgwAfggQAgghAvAAQApAAAYAYQAYAXAAAoQAAANgEAEQgEAEgPAAIhRAAQgIAAgDgDQgFgEAAgFQAAgHAFgCQADgDAHAAIAsAAIALgCQACgCAAgEQAAgVgNgNQgOgPgTAAQgZAAgNAXQgMAVAAAfQAAAhARAZQARAYAaAAQAQAAAKgEQAMgEAKgHIAHgGQALgIAGgBQAEAAADAEQAEADAAAEQAAAFgFAIQgGAHgJAIQgSAOgSAHQgRAHgUAAQgtAAgdgfg");
	this.shape_14.setTransform(-6.3,-20.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#07744A").s().p("AisBqQgKgEAAgKQAAgGAKgFIAGgCQAFgCACgIQADgHAAgQIAAgOIgBgRIAAgNQAAgmgBgMQgCgMgFgDIgJgDQgNgFAAgHQAAgEAEgEIANgHIAfgLIAVgEQAGAAADADQADAEAAAIIAAALIAAACIAAACIACABIABAAIABgBIAFgEIACgCQAagYAaAAQAKAAAJADQAJADAJAGQAHAFAIAKQAIAJABAAQADAAAGgGIAJgKQAOgMALgDQAKgFAMAAQAZAAASAKQATAKAIASQAKATAAA+IAAAVIAAALIAAAKQAAAMACAGQACAGAFACIAGACQAKAFAAAGQAAAKgKAEQgKACghAAQgeAAgKgCQgLgDAAgJQAAgIALgFIAIgDQAFgCADgLQACgKAAgaQAAg+gJgRQgJgRgWAAQgZAAgKAVQgLAWAAAzIAAALQAAAYACAHQACAIAGACIAFACQALAFAAAGQAAAKgKAEQgKACghAAQgcAAgLgCQgKgDAAgJQAAgIALgEIAIgDQAFgDACgIQACgJAAgZQAAhDgJgRQgJgRgWAAQgMAAgKAHQgKAHgFALQgFAKgCARQgCARAAAoQAAAUACAHQABAHAFADIAIADQALAEAAAIQAAAJgKADQgLADgcAAQghAAgKgDg");
	this.shape_15.setTransform(-37.3,-20.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#07744A").s().p("AhNBPQgegeAAgwQAAgvAgggQAgggAuAAQAvAAAdAeQAdAdAAAwQAAAwggAhQgfAhgtAAQgvAAgegggAgog/QgMASAAAcQAAApASAcQARAdAZAAQAUAAANgSQANgRABgdQgBgogRgdQgTgcgYAAQgVAAgNARg");
	this.shape_16.setTransform(-68.5,-20.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#07744A").s().p("Ag0CaQgYgGgPgJQgIgEgGgSQgFgTAAgYQAAgKAEgFQADgFAHAAQAKAAALATIAFAJQANAYAQALQAQAKAWAAQAXAAAQgOQAQgNAAgUQAAgfg+gbIgHgCQg0gWgRgUQgRgSAAgeQAAgnAdgYQAcgYAtgBIAYACIAeAHIAIgGIAIgCQAFABAEADQAEADAFAIQAHANAEAOQAEAOAAALQAAAHgDAEQgEAEgGAAQgLAAgLgPIgDgFQgMgPgOgIQgOgIgSABQgXAAgOALQgNAKAAAUQAAARALAMQALAMAtATIAJAEQAmAQARAOQAMAKAGAPQAGAPAAAQQAAAsgeAZQgeAXg2AAQgaAAgXgEg");
	this.shape_17.setTransform(-92.9,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.somethingdelicioushalfbanner, new cjs.Rectangle(-107.3,-52.5,214.6,105.1), null);


(lib.signuphalfbanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAuQgJgDgFgHIAKgJQADAGAGACQAGADAGAAIAGgBIAGgDIAFgFQABgDAAgEQAAgEgBgDIgFgFIgHgDIgIgDIgJgEIgIgDQgEgEgCgEQgCgEAAgHQAAgHADgFQADgFAFgEQAEgDAGgBIALgCIAIABIAHACQAIADAEAFIgJAJQgDgEgFgDQgFgCgGAAIgFABIgGACQgDADgCADQgBACAAAFQAAAEABACIAEAFIAGACIAHADIAKAEIAJADQAEAEACAEQADAFAAAHQAAAIgDAFQgCAGgFADQgFAEgGABQgGACgFAAQgJAAgIgEg");
	this.shape.setTransform(63.5,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAvIAAhdIAOAAIAABRIApAAIAAAMg");
	this.shape_1.setTransform(56.9,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAvIAAhdIANAAIAABdg");
	this.shape_2.setTransform(51.1,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgAvIgKgXIgsAAIgJAXIgPAAIAphdIALAAIApBdgAASANIgSgsIgRAsIAjAAg");
	this.shape_3.setTransform(44.5,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAkAvIAAhOIggBOIgIAAIgfhOIAAAAIAABOIgNAAIAAhdIAVAAIAbBIIAchIIAVAAIAABdg");
	this.shape_4.setTransform(33.7,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAvIAAhdIA7AAIAAALIguAAIAAAcIAsAAIAAALIgsAAIAAAfIAxAAIAAAMg");
	this.shape_5.setTransform(23.9,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASAvIgYgqIgNAAIAAAqIgOAAIAAhdIAfAAIALAAQAHACAEADQAFADADAFQACAFAAAIQABAKgHAHQgDADgEABIgJADIAaArgAgTgFIAOAAIAIgBQAFgBACgCIAGgEQABgDAAgEQAAgFgBgDQgCgCgEgCQgCgCgEgBIgIgBIgPAAg");
	this.shape_6.setTransform(12.6,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAxIgKgDQgJgEgHgGQgHgHgDgJQgEgJgBgLQABgKAEgJQADgKAHgHQAHgGAJgEQAFgCAFAAIAJgBQALAAAJADIAJAFIAHAFQAHAHAEAKQAEAJAAAKQAAALgEAJQgEAJgHAHIgHAGIgJAEQgJAEgLAAIgJgBgAgOgjQgHADgEAGQgFAFgDAHQgCAHAAAHQAAAHACAIQADAGAFAGQAEAFAHADQAHADAHAAQAIAAAHgDQAHgDAEgFQAFgGADgGQACgIAAgHQAAgHgCgHQgDgHgFgFQgEgGgHgDQgHgCgIAAQgHAAgHACg");
	this.shape_7.setTransform(2.3,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAvIAAhdIA7AAIAAALIgtAAIAAAdIAqAAIAAALIgqAAIAAAqg");
	this.shape_8.setTransform(-6.9,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfAvIAAhdIAeAAQAGgBAGACQAHABAEAEQAFADACAFQACAFAAAHQAAAHgCAFQgDAFgEADQgFACgHACQgFABgHABIgPAAIAAApgAgRgEIAOAAIAIgCIAHgCQADgCACgDQABgDAAgEQAAgFgBgDQgCgCgDgCQgDgCgEgBIgHgBIgPAAg");
	this.shape_9.setTransform(-18,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAwIgHgCIgHgEIgFgFQgFgFgCgHQgCgHAAgHIAAg7IANAAIAAA6QAAAFACAFQAAAFADADQADAEAEACQAFADAGAAQAGAAAFgDQAEgCADgEQADgDACgFIAAgKIAAg6IAOAAIAAA7QAAAHgDAHQgCAHgEAFIgFAFIgHAEIgIACIgIABIgIgBg");
	this.shape_10.setTransform(-27.1,0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXAvIgxhMIAABMIgOAAIAAhdIASAAIAxBKIAAAAIAAhKIANAAIAABdg");
	this.shape_11.setTransform(-40.4,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAuQgJgEgHgGQgHgHgDgJQgEgJgBgLQABgKAEgJQADgKAHgHIAIgFIAIgFQAJgDAKAAIALABIAKACQAJAEAFAFIgJAKQgEgFgGgDIgIgCIgIAAQgHAAgHACQgGADgFAGQgFAFgCAHQgCAHgBAHQABAHACAIQACAGAFAGQAFAFAGADQAHADAIAAQAGAAAHgCQAFAAAEgDIAAgaIgVAAIAAgKIAiAAIAAAtQgHAEgJACIgUACQgKAAgJgEg");
	this.shape_12.setTransform(-51,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAvIAAhdIANAAIAABdg");
	this.shape_13.setTransform(-57.8,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAuQgJgDgFgHIAKgJQADAGAGACQAGADAGAAIAGgBIAGgDIAFgFQABgDAAgEQAAgEgBgDIgFgFIgHgDIgIgDIgJgEIgIgDQgEgEgCgEQgCgEAAgHQAAgHADgFQADgFAFgEQAEgDAGgBIALgCIAIABIAHACQAIADAEAFIgJAJQgDgEgFgDQgFgCgGAAIgFABIgGACQgDADgCADQgBACAAAFQAAAEABACIAEAFIAGACIAHADIAKAEIAJADQAEAEACAEQADAFAAAHQAAAIgDAFQgCAGgFADQgFAEgGABQgGACgFAAQgJAAgIgEg");
	this.shape_14.setTransform(-63.6,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.signuphalfbanner, new cjs.Rectangle(-69.5,-10.2,139,20.5), null);


(lib.redcandlehalfbanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.candleredhalfbanner();
	this.instance.parent = this;
	this.instance.setTransform(-25,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.redcandlehalfbanner, new cjs.Rectangle(-25,-45.5,50,91), null);


(lib.rectanglehalfbanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AtFCsIAAlXIaLAAIAAFXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rectanglehalfbanner, new cjs.Rectangle(-83.7,-17.2,167.6,34.5), null);


(lib.partyreadyrecipeshalfbanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AgPBuIgXgDIgGADIgHACIgFgBIgEgDQgHgGgGgRQgGgRAAgQQAAgHADgEQAEgFAFAAQALAAAJARIAIANQAHAIALAFQALAFAMAAQANAAAJgHQAIgHAAgMQAAgSgjgRIgMgGQghgQgMgNQgMgOABgVQgBgbAUgSQATgRAfAAIAOABIAPACIAKgEIAGgBQALAAAKARQAKARAAASQAAAIgEAEQgDAEgGAAQgEAAgGgEQgEgEgHgKQgHgOgJgFQgJgFgMAAQgLAAgHAHQgIAHAAALQAAAKAIAHQAIAIAZANIADABQA7AdAAAiQAAAegXAUQgWAUgjAAg");
	this.shape.setTransform(67.2,30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("AhFBQQgegfAAguQAAgwAfghQAfggAwAAQApAAAYAXQAYAYAAAnQAAANgEAFQgDAEgQAAIhSAAQgHAAgEgEQgDgDAAgGQAAgFADgDQAEgDAHAAIAsAAIALgCQACgCABgEQgBgVgOgOQgNgOgTAAQgaAAgMAWQgMAXAAAeQAAAhARAZQARAXAaAAQAQABALgEQAKgEAKgGIAIgHQALgJAGAAQAEABAEADQADADAAAEQAAAFgGAIQgFAHgJAHQgTAPgQAIQgRAGgVAAQgsAAgfgfg");
	this.shape_1.setTransform(46.9,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AhmCRQgLgDAAgKQAAgGAJgEIALgFQAEgEACgSQABgRAAg0IAAgiQAAg6gBgRQgDgRgEgDIgKgDQgNgEgBgHQAAgGAFgDQADgDAJgEIAegJQAOgFAIAAQAFAAADAEQADADAAAIIAAAKIAAAEIABACIAIgGIAJgHQANgJALgFQAMgEANgBQAoAAAZAdQAZAeAAAuQAAAygdAgQgcAigsAAQgRAAgHgGQgHgFAAgIQgBgFAEgDQADgEAHAAIAFABIAIABQAXAAAOgUQAOgTAAggQAAglgPgWQgQgWgYAAQgVAAgNAMQgNAMAAAgIAACHIABAVQABAIAEAEQACACAKADIAIADIAEAEIACAGQAAAIgNAEQgMACgeAAQgfABgKgEg");
	this.shape_2.setTransform(22.4,34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AglCYQgLgEAAgJQAAgHALgEIAFgCQAGgDACgIQACgGAAgRIAAgOIAAgRIAAgWQAAghgCgKQgCgKgEgDIgKgDQgNgEABgHQAAgFADgDQAFgEAJgEIAfgKIAXgFQAFAAADAFQACADAAAKIAAANIAAAKIgCA1IAAACIAAA0QgBAUACAJQACAHAFADIAIADQAKAFABAIQAAAIgLADQgLADgbAAQggAAgKgDgAgZhrQgKgHABgLQgBgMAKgIQALgKAOABQANgBAJAJQAJAIAAALQAAAMgKAHQgKAJgOAAQgNAAgJgIg");
	this.shape_3.setTransform(4.4,25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("AhDBQQgegfAAguQAAgwAgghQAgggAuAAQAkAAAZATQAYARAAAZQAAAKgHAGQgHAGgKAAQgLABgHgGQgGgFgIgRQgHgQgHgFQgJgHgNABQgXAAgOASQgOASAAAhQAAAlAUAYQATAYAegBQAKABAKgDQAKgDAIgFIAHgHQAMgIAGgBQAFABACACQADACAAAFQAAAGgFAHQgEAIgHAFQgRAPgRAHQgSAHgWAAQgsAAgegfg");
	this.shape_4.setTransform(-12.4,30.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AhEBQQgfgfAAguQAAgwAfghQAgggAvAAQApAAAYAXQAYAYAAAnQAAANgEAFQgEAEgQAAIhQAAQgIAAgDgEQgFgDAAgGQAAgFAFgDQADgDAHAAIAsAAIALgCQACgCAAgEQAAgVgNgOQgOgOgTAAQgZAAgNAWQgMAXAAAeQAAAhARAZQARAXAaAAQAQABAKgEQAMgEAKgGIAHgHQALgJAGAAQAEABADADQAEADAAAEQAAAFgFAIQgGAHgJAHQgSAPgSAIQgRAGgUAAQgtAAgdgfg");
	this.shape_5.setTransform(-34.6,30.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AAuBqQgUhEgQgNQgOgOgWAAQgQAAAAgNQAAgOANAAQAkAAARgNQAQgOAAgdQAAgcgRgOQgRgPghAAQgQAAgGADQgHACgCAGIgCATIgBAqIAABeIACBAQABAPAEADIAJAEQANAFAAAJQAAAJgLAEQgMADgiAAQghAAgMgDQgMgEAAgJQAAgJANgFIAKgFQAEgDACgaQACgZAAhCIgBhQQgCgfgDgEQgCgDgMgFQgLgFAAgIQAAgHAHgEQAGgEANAAIAvAAIArgBIAhgBQAvAAAYAUQAZAUAAAmQAAAcgQAUQgRAUgdAJIAAACQAXAEANAOQANAPAKAiIAGAVQAIAhAMAAIAGAAIAIgBQAEAAADAEQAEADAAAEQAAAKgNAHQgMAGgUAAQgqAAgOgyg");
	this.shape_6.setTransform(-60.6,25.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006F46").s().p("AhiCNQgKgJAAgOQAAgKAIgIQAHgIALAAIAJACIAGAFIAGAIQAGAIAEAAQALAAALgQQALgPAAgRQAAgSgPgiIgCgFIgihKIgUgpQgDgIgNgFQgIgDgCgDQgDgDABgFQAAgJALgEQALgDAfAAQAfAAAKADQALADAAAJIgBAGIgEAEIgIAEQgIADAAAEIAFAQIARArIAQAnQAFALAEAAQACAAAEgKIAPgiIAQgqQAEgPAAgGQABgGgMgHQgNgGAAgGQAAgHAKgDQAKgDAYAAQAZAAAJADQAKADgBAJQABAIgMADIgJADQgNAGgNAkIgHARIgbBDQgiBZgWAbQgXAagfAAQgPAAgLgIg");
	this.shape_7.setTransform(108.4,-16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006F46").s().p("AhcCBQgagdAAguQAAg0AdggQAdggAtAAIAPACQAHABADAFQAEAFAAAFQAAAMgOAAIgGgBIgFAAQgYAAgOATQgOATAAAhQAAAkAPAWQAQAXAXAAQAWAAAMgMQANgNAAgYIAAg6IAAhhQAAgPgDgGQgDgGgIgDIgGgBQgNgEAAgHQAAgGAGgEQAFgEAQgGIAXgHIAVgCQAHAAADAEQADAEAAAJIAAALIgDCDIACBZQABAUAEADIAOAFQAMACAAAIQAAAJgfAKIgVAGIgRACQgGAAgCgDQgDgEAAgHIAAgKIAAgEIgCgCIgGAFIgJAHQgNAJgLAFQgNAEgNAAQgoAAgYgcg");
	this.shape_8.setTransform(85.7,-25.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006F46").s().p("AAmBkIgLgLIgJAFQgaARgbAAQgfAAgTgSQgTgSAAgdQAAgiAZgSQAYgUAtAAQAKAAAGAEQAFADAAAIQAAAMgPAAQgUAAgNAKQgNAKAAASQAAARALAKQALAKATAAQAUAAAJgJQAJgJAAgWIAAhQQAAgTgJgKQgIgKgOAAQgKAAgJAEQgJAFgJAJIgEAGQgNAQgOAAQgJAAgFgFQgFgGAAgJQAAgUAZgOQAZgNAmAAQAXAAARAGQARAGAJAMQAHAIACANQADANAAAfIAABEQAAAMACAFQACAGAEACIAHABQANAEAAAHQAAALgOAIQgOAIgTAAQgKAAgKgLg");
	this.shape_9.setTransform(61.2,-20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006F46").s().p("AhFBQQgegfAAguQAAgwAfggQAfghAwAAQApAAAYAYQAYAXAAAoQAAANgEAEQgDAEgQAAIhRAAQgIAAgEgDQgDgEAAgFQAAgHADgCQAEgDAHAAIAsAAIALgCQACgCAAgEQAAgVgOgNQgNgPgTAAQgaAAgMAXQgMAVAAAfQAAAhARAZQARAYAaAAQAQAAALgEQAKgEAKgHIAIgGQALgIAGgBQAFAAADAEQADADAAAEQAAAFgFAIQgGAHgJAIQgTAOgQAHQgRAHgVAAQgsAAgfgfg");
	this.shape_10.setTransform(38.4,-20.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006F46").s().p("AAuBqQgUhEgQgNQgOgOgWAAQgQAAAAgNQAAgOANAAQAkAAARgNQAQgOAAgdQAAgcgRgOQgRgPghAAQgQAAgGADQgHACgCAGIgCATIgBAqIAABeIACBAQABAPAEADIAJAEQANAFAAAJQAAAJgLAEQgMADgiAAQghAAgMgDQgMgEAAgJQAAgJANgFIAKgFQAEgDACgaQACgZAAhCIgBhQQgCgfgDgEQgCgDgMgFQgLgFAAgIQAAgHAHgEQAGgEANAAIAvAAIArgBIAhgBQAvAAAYAUQAZAUAAAmQAAAcgQAUQgRAUgdAJIAAACQAXAEANAOQANAPAKAiIAGAVQAIAhAMAAIAGAAIAIgBQAEAAADAEQAEADAAAEQAAAKgNAHQgMAGgUAAQgqAAgOgyg");
	this.shape_11.setTransform(12.4,-25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006F46").s().p("AgpAWQgHAAgCgCQgEgDAAgFIACgKIAFgMQADgGADgCQADgCAJAAIAKAAIATABIAkgCIAGAAQAGAAADACQADADAAAFQABAMgHAKQgHAKgKAAIgKAAIgMgBIgvACIgDAAg");
	this.shape_12.setTransform(-10.5,-20.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006F46").s().p("AhiCNQgKgJAAgOQAAgKAIgIQAHgIALAAIAJACIAHAFIAFAIQAGAIAEAAQALAAALgQQALgPAAgRQAAgSgPgiIgCgFIgihKIgUgpQgDgIgNgFQgIgDgCgDQgDgDABgFQAAgJALgEQALgDAfAAQAfAAAKADQALADAAAJIgBAGIgEAEIgIAEQgIADAAAEIAFAQIARArIAQAnQAGALADAAQACAAAEgKIAPgiIAQgqQAEgPAAgGQABgGgMgHQgMgGAAgGQgBgHAKgDQAKgDAYAAQAaAAAIADQAKADgBAJQABAIgMADIgJADQgMAGgOAkIgHARIgbBDQgiBZgWAbQgXAagfAAQgPAAgLgIg");
	this.shape_13.setTransform(-28.3,-16.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006F46").s().p("AgLCAQgKgEgIgGQgIgIgCgLQgDgMgBggIAAhxIgTAAIgGgBIgCgGIAAgFQAAgHAXgTIAIgIIAJgHQAWgUAHAAIAGACQADADgBADIAAAnIAwAAQAGAAABACQACADAAAFIAAAGQAAAFgCADQgCACgFAAIgrAAIgEACIgBAFIAABpQAAAbAFAHQAEAHAMAAQAIAAAKgDIAOgEQAFAAADADQADACAAAFQAAALgSALQgSAMgXgBQgMABgLgEg");
	this.shape_14.setTransform(-46.5,-22.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006F46").s().p("AhABqQgLgEAAgKQAAgGALgEIAFgDQAGgCACgIQACgHAAgQIAAgOIAAgRIAAgNQAAgmgCgMQgBgMgFgDIgKgDQgMgFAAgHQAAgFADgEQAFgDAJgDIAcgKIATgEQALAAAEAdIAAAFIABAAQALgRAMgJQAMgJAMAAQAOAAAKAJQAIAJAAAPQAAAOgHAJQgHAIgLAAIgLgCIgJgGIgFgIQgDgGgBABQgQAAgFATQgFAVAAA/QAAAUABAJQADAJAGADIAIACQANAFAAAIQAAAIgMAEQgLADgdAAQghAAgKgDg");
	this.shape_15.setTransform(-61.8,-20.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006F46").s().p("AAmBkIgLgLIgJAFQgaARgbAAQgfAAgTgSQgTgSAAgdQAAgiAZgSQAYgUAtAAQAKAAAGAEQAFADAAAIQAAAMgPAAQgUAAgNAKQgNAKAAASQAAARALAKQALAKATAAQAUAAAJgJQAJgJAAgWIAAhQQAAgTgJgKQgIgKgOAAQgKAAgJAEQgJAFgJAJIgEAGQgNAQgOAAQgJAAgFgFQgFgGAAgJQAAgUAZgOQAZgNAmAAQAXAAARAGQARAGAJAMQAHAIACANQADANAAAfIAABEQAAAMACAFQACAGAEACIAHABQANAEAAAHQAAALgOAIQgOAIgTAAQgKAAgKgLg");
	this.shape_16.setTransform(-81.6,-20.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006F46").s().p("AhuCXQgMgEAAgJQAAgJANgFIAKgEQAEgEACgZQACgaAAhCIgBhQQgCgfgDgEQgCgDgMgFQgLgEAAgJQAAgHAHgEQAGgEANAAIAXAAIAYABIArgBIAhgCQAwABAYAUQAYAUAAAoQAAAtgeAXQgdAXg4AAQgVAAAAgOQAAgPASAAQAaAAARgNQAQgPAAgfQAAgegQgNQgRgPgiAAQgQAAgGADQgHACgCAHIgCATIgBAsIAABdIACA9QABAPAEAEIAJAEQANAFAAAJQAAAJgLAEQgMADgiABQghgBgMgDg");
	this.shape_17.setTransform(-105.4,-25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.partyreadyrecipeshalfbanner, new cjs.Rectangle(-120.9,-52.5,241.9,105.1), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.logokale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNgAgYgYQgKAKAAAOQAAAQAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgQQAAgOgKgKQgKgKgPAAQgOAAgKAKgAAMAZIgOgVIgFAAIAAAVIgJAAIAAgzIATAAQARAAAAAPQAAANgNABIAPAWgAgHgDIAGAAQANAAAAgIQAAgHgMAAIgHAAg");
	this.shape.setTransform(130.4,59.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjnEaQgVgDgGgEQgKgFAAgNQAAgKAFgHQAHgHAIAAIARAAQAKAAAFgLQACgKABgXIAAl5QgBgXgCgKQgFgLgKAAIgRAAQgIAAgHgHQgFgHAAgKQAAgNAKgFQAGgEAVgDQBdgNBrAAQBOAAA2ASQA0ASAnAoQAlAlAUA5QAUA4AABEQAABNgZA9QgaA+guAlQglAegxAOQgwAOhFAAQhrAAhdgNgAgwjrQgcAFgJALQgKAMAAAhIAAFjQAAAhAUALQAOAHAnADQBMAEAthAQAqg/AAhwQAAhwgqg/Qgrg/hKAAIgeADg");
	this.shape_1.setTransform(62.2,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBlQgFgDAAgHIAAiTQAAgKgMAAIgyAAQgKAAAAgPIABgNQACgIAHAAICfAAQAMAAAAASQAAASgLAAIgyAAQgMAAAAAKIABCTQAAAHgFADQgEACgKAAQgJAAgEgCg");
	this.shape_2.setTransform(81.2,88.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMBmQgNAAAAgPIAAiuQAAgOANAAICbAAQAGAAADAFQACADAAAJQAAAKgCADQgDAGgHAAIh5AAQgIAAAAAJIAAAbQAAAKAKAAIBFAAQALAAAAASQAAAQgKAAIhFAAQgLAAAAALIAAAeQAAAKAKAAIB4AAQAKAAAAATQAAARgKAAg");
	this.shape_3.setTransform(52.4,88.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxBgIhAhGQgLgJgTAAQgFAAgEAEQgDAFAAAGIAAA8QAAAMgVAAQgRAAAAgNIAAi0QAAgIAFgCQAEgCALAAQASAAAAAMIAAA3QAAANAJAAQALAAAFgDQAEgBAFgFIBJhDQANgLAMAMQAMALgKAKIhAA6QgJAIAJAJIBOBWQAIAIgGAFQgFAFgNAAQgTAAgHgIg");
	this.shape_4.setTransform(22.6,88.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuBeIgfgyQgGgJgKAAIgtAAQgDAAgEADQgEAEABADIAAAyQAAAGgKACIgPAAQgMAAAAgMIAAi5QgBgIAKAAIBqAAQAgAAAUATQAVATAAAfQAAAYgPAPQgIAJgPAKQgHAGADAGIAjAyQAFAIgFADQgEAFgPAAQgQAAgHgJgAg4g4IAAAuQAAAFAEADQAEACAFAAIA+AAQAQAAALgIQALgIAAgRQAAgQgLgJQgLgJgQABIg+AAQgNAAAAAKg");
	this.shape_5.setTransform(-11.1,88.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABCBgIgOgbQgCgHgHAAIhTAAQgJAAgEALIgMAXQgDAHgSAAQgWAAAFgMIBZi4QAFgKAKAAQALAAAFAJIBXC6QADAGgJAEQgGACgIAAQgPAAgDgIgAgEgdIgYAyQgDAIAIAAIAwAAQABAAABAAQAAAAABgBQABAAAAAAQAAgBABAAQACgCgCgDIgZgzQgBgDgEAAQgCAAgCADg");
	this.shape_6.setTransform(-44.3,88.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABZBkQgFgDAAgEIgOhsQgCgGgFAAQgDAAgDADIgxA+QgEAGgFAAQgHAAgEgHIgtg7QgCgDgEAAQgFAAgBAHIgOBoQgCALgTAAQgGAAgFgDQgGgDAAgFIAViwQACgJADgEQAEgEALAAQAKAAAFAJIA4BPQAFAHAEAAQAEAAAHgIIA7hQQAEgIALAAQAGAAADACQAEADACAIIAVC1QABALgXAAQgFAAgFgDg");
	this.shape_7.setTransform(-78.1,88.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AipF/QhPhTAAiLQAAhZAghEQAghCA6gnQAZgTAmgTQAmgTAngOQAKgDgDgJQgCgKgNADQg7ALgrgSQgWgJgdgRQghgUgJgEQgvgWg6AZQgVAJgMgLQgLgLAGgXQAXhWBDg3QBKg9BQAXQA0APAlA0QAmA2AfALQATAGgBAPQAAAOgRADQgaAFgjgRQgggPgdgbQgfgcgvgCQgsgCgbAVQgLAIADAHQAEAHAKgDQAggHAdAGQAoAIAbAgQAkAoAuAPQA4ASAugfIAZgWQANgNAMAEQAPAEgBAUQgBAUgTAZQgiAsg+AeQhFAjgeAdQgwAwgTA9QgPAzAABQQAAByAqBAQAqBABKAAQBKAAArhCQAqhBAAhwQAAhfgXg4QgZg6g2gVQgbgKAFgTQAFgUAhgEQA3gGA8AsQBoBOAACjQAACOhPBVQhQBUiHAAQiDAAhPhUg");
	this.shape_8.setTransform(14.6,-54.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABnDwQhFg1gYheIgBgCQgCgMgHAAQgGAAgCALIgBACQgYBfhGA1QhIA3hoAAQh+AAhMhQQhMhQAAiFQAAiHBMhRQBLhQCAAAQBpAABHA3QBHA2AXBgQACALAGAAQAHgBACgKIABgBQAXhgBGg1QBHg3BoAAQB/AABNBQQBMBPAACFQAACHhMBRQhNBRiBAAQhmAAhHg3gACniqQgpA/AABuQAABrApA/QAoA9BIAAQBGAAApg/QApg/AAhrQAAhsgqg+QgphAhHAAQhGAAgoA/gAmFiqQgoA/AABuQAABsAoA+QAoA9BIAAQBGAAApg/QApg/AAhrQAAhsgqg+QgphAhHAAQhGAAgoA/g");
	this.shape_9.setTransform(-21,30.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai5EbQgWAAgJgFQgIgFAAgOQAAgKAGgHQAHgHAJAAIARAAQAKAAAEgLQADgJAAgYIAAl7QAAgXgDgKQgCgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgJQAAgOAJgGQAIgFAWAAIFvAAQAaAAAEAVIAMA7QAEAQgFAJQgFAJgMAAQgPAAgHgOQgEgFgFgNQgFgQgPgFQgNgEggAAIhtAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAFADAdAAIBFAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAJgOAAQgTAAgEgXIAAgFQgCgNgIgDQgHgEgbAAIhFAAQgeAAgEAEQgIAFAAAZIAACLQAAAbACAGQAGALAMAAIATAAQAKAAAGAHQAGAHAAAKQAAAOgJAFQgIAFgYAAg");
	this.shape_10.setTransform(-98.4,30.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhTEbIgTgEQgIAAgKAJQgKAIgJAAQgLAAgGgHQgGgGgEgQIgVhUQgCgIAAgJQAAgMAHgIQAIgHAMAAQAMAAAJALIAMARQAWAfAhASQAiASAkAAQApAAAagVQAZgUAAgiQAAghgbgfQgbgdg/gsIhNg2QgSgPgTgWQgggmAAgzQAAg9ArgmQArgmBGAAQAlAAAjAIIAWAFIALACQAJAAALgIIAJgFQAEgCAFAAQASAAAGAYIAUBcQABAEAAAIQAAAIgHAGQgHAGgKAAQgMAAgLgOQgNgVgHgIQgGgGgOgLQgjgbgtAAQgcAAgSAPQgRAQAAAaQAAAXAJALQAMASAbAWIApAdQAzAkAWARQAXASAUAUQAWAWAMAfQAMAeAAAhQAABJgyAtQgzAthUAAQgzAAglgNg");
	this.shape_11.setTransform(110.1,30.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah+EYQgLgJgHgYIhJjYQgBgFgEAAQgFAAgBAFIhNDYQgKAagHAHQgNAJgQAAQgTAAgKgJQgLgJgJgYIimm+QgKgagHgHQgHgHgUgFQgOgCgFgFQgFgFAAgLQAAgVAdgBICvAAQAcAAAAAYQAAAKgHAFQgHAFgRABQgOACgGAFQgGAFAAAJQAAAJADAKIBzFHQACAGAFgBQAEAAACgGIA/i2QAIgYgHgYIglhuQgEgJgHgFQgGgEgPgEQgNgDgGgGQgFgEAAgKQAAgaAdAAICnAAQAdAAAAAYQAAASgcAEQgRACgFAFQgGAFAAAMQAAAKAIAZIBfEsQACAFAEAAQAFAAABgGIBdk6QAEgLAAgJQAAgSgdgEQgbgCAAgVQAAgNAHgGQAIgFARgBIElAAQAVABAIAFQAIAFAAAOQAAAKgGAIQgGAGgJAAIgQAAQgLAAgFALQgCAIAAAZIAABtQAAAeAFAGQAGAHAXAAIB0AAQAXAAAHgIQADgDAAgHIABgdIAAhpQAAgbgDgGQgFgLgKAAIgQAAQgKAAgHgGQgGgIAAgKQAAgOAIgFQAJgFAWgBICaAAQAWABAJAFQAJAFAAAOQAAAKgHAIQgGAGgJAAIgSAAQgEAAgEADQgFADgBAFQgDAJAAAYIAAF9QAAAXADAKQABAFAFACQAEADAEABIASAAQAJAAAGAGQAHAIAAAJQAAAOgJAFQgIAGgXAAIiaAAQgWAAgIgGQgIgFAAgOQAAgJAGgIQAHgGAJAAIAQAAQAKAAAFgLQADgGAAgbIAAh8IgBgeQAAgHgDgEQgHgHgXAAIh0AAQgXAAgGAGQgFAHAAAdIAACCQAAAYACAJQAFALALAAIAQAAQAJAAAGAGQAGAIAAAKQAAAOgIAEQgIAGgVAAIiaAAQgWAAgJgGQgIgFAAgOQAAgJAGgIQAHgGAJAAIARAAQAEgBAFgDQAEgCABgFQADgGAAgbIAAl9QAAgwgkAEQgLABgHAKQgIAIgGAWIiHGzQgJAfgKALQgLALgTAAQgTAAgLgJg");
	this.shape_12.setTransform(-74.6,-36.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AihEbQgWAAgIgFQgIgFAAgOQAAgKAGgHQAGgGAJAAIARAAQAEAAAEgDQAEgEACgEQADgIAAgXIAAl/QAAgZgDgJQgDgLgLABIgRAAQgKgBgGgGQgHgHAAgLQAAgNAJgGQAJgFAWAAICcAAQAWAAAJAFQAJAGAAANQAAALgGAHQgHAGgJABIgSAAQgOgBgDALQgDAGAAAcIAAFjQAAAdACAJQACAJAIAFQAGAEALACQALACAagBIAwAAQAvAAAPgfIAIgPQAIgQAPgBQAMAAAFAJQAFAJgEAQIgNBCQgEAVgaAAg");
	this.shape_13.setTransform(69.2,-37.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjREWQgIgGAAgOQAAgJAGgHQAGgGAJAAIARAAQAEAAAEgEQAEgDABgEQAEgIAAgaIAAl7QAAgZgEgIQgBgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgKQAAgNAJgGQAIgFAWAAIFSAAQAZAAAFAVIAMA7QADAQgFAJQgFAIgMAAQgPAAgGgNQgDgCgGgQQgGgQgPgFQgMgEggAAIhQAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAEADAeAAIAmAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAIgOAAQgTAAgEgWIAAgFQgCgNgIgDQgHgEgbAAIgmAAQgeAAgEAEQgIAFAAAZIAABsQAAAiADALQADALAKAEQAPAFAiAAIBVAAQAvAAAPgfIAHgQQAIgQAPAAQAMAAAFAJQAFAJgDAQIgNBCQgDALgHAFQgHAFgOAAIlhAAQgWAAgIgFg");
	this.shape_14.setTransform(114.4,-37.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C6E47").s().p("AqoZNQk7iFjyjyQjyjziFk6QiJlFAAljQAAlkCJlFQCFk6DyjzQDzjyE6iFQFFiJFjAAQFkAAFFCJQE6CFDyDyQDyDzCGE6QCJFFAAFkQAAFjiJFFQiGE6jyDzQjyDyk6CFQlFCJlkAAQljAAlFiJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-175,350,350);


(lib.holidayinspirationhalfbanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AhoBqQgLgEAAgKQAAgGALgEIAFgCQAGgEACgHQADgHgBgQIAAgPIAAgRIAAgVQAAghgCgLQgBgKgFgCIgKgEQgMgEAAgHQAAgFADgDQAEgEAKgEIAegKIAWgDQAGAAADADQADADAAAHIAAAPIAAABIABABIACAAIAAgBIAFgEIAEgFQAYgVAaAAQAPAAAPAHQANAHAKAKQAKAMAEARQAEAPAAAjIAAAcIAAAOIAAAMQAAAPACAGQACAGAGAEIAFACQALAEgBAGQAAAKgKAEQgJADghAAQgeAAgKgDQgKgEAAgIQAAgIAKgEIAIgDQAFgDADgKQABgIAAgXQAAhDgIgSQgJgRgWAAQgKAAgLAHQgLAHgFALQgEAJgCARQgCAQAAAqQAAAVACAHQABAGAEADIAIADQAMAEAAAIQAAAIgLAEQgKADgcAAQghAAgKgDg");
	this.shape.setTransform(92.3,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("AhNBQQgegfAAgwQAAgvAgggQAgggAuAAQAvAAAdAeQAdAdAAAwQAAAvggAiQgfAhgtAAQgvAAgegfgAgog/QgMARAAAdQgBAqATAcQARAcAZAAQAVAAAMgSQANgRABgdQgBgpgRgcQgTgcgYAAQgVAAgNARg");
	this.shape_1.setTransform(67.7,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AglCYQgKgEAAgJQAAgHAKgEIAGgCQAFgDACgIQADgGAAgRIgBgOIAAgRIAAgWQAAghgCgKQgBgKgEgDIgKgDQgNgEgBgHQAAgFAFgDQADgEAJgEIAhgKIAVgFQAGAAACAFQADADAAAKIAAANIAAAKIgCA1IAAACIgBA0QABAUABAJQACAHAEADIAJADQALAFgBAIQAAAIgKADQgKADgcAAQgfAAgLgDgAgahrQgIgHgBgLQABgMAJgIQALgKAOABQAMgBAKAJQAJAIAAALQAAAMgKAHQgKAJgOAAQgNAAgKgIg");
	this.shape_2.setTransform(49.7,25.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AgLCAQgKgDgIgIQgIgGgCgMQgDgMgBggIAAhxIgTAAIgGgBIgCgGIAAgGQAAgGAXgTIAIgIIAJgHQAWgTAHAAIAGACQADABgBADIAAApIAwAAQAGAAABABQACADAAAFIAAAGQAAAFgCACQgCADgFAAIgrAAIgEACIgBAEIAABpQAAAcAFAHQAEAHAMAAQAIAAAKgEIAOgDQAFAAADADQADACAAAFQAAAMgSALQgSAKgXABQgMgBgLgDg");
	this.shape_3.setTransform(36.3,28.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("AAmBkIgLgLIgJAFQgaARgbAAQgfAAgTgSQgTgSAAgdQAAgiAZgSQAYgUAtAAQAKAAAGAEQAFADAAAIQAAAMgPAAQgUAAgNAKQgNAKAAASQAAARALAKQALAKATAAQAUAAAJgJQAJgJAAgWIAAhQQAAgTgJgKQgIgKgOAAQgKAAgJAEQgJAFgJAJIgEAGQgNAQgOAAQgJAAgFgFQgFgGAAgJQAAgUAZgOQAZgNAmAAQAXAAARAGQARAGAJAMQAHAIACANQADANAAAfIAABEQAAAMACAFQACAGAEACIAHABQANAEAAAHQAAALgOAIQgOAIgTAAQgKAAgKgLg");
	this.shape_4.setTransform(17.5,30.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AhABqQgKgEAAgKQAAgGAKgEIAFgCQAGgEACgHQACgHABgQIAAgPIAAgRIAAgMQgBgmgCgNQgBgLgEgDIgKgEQgNgEAAgHQAAgFAEgEQADgDAKgEIAcgJIATgEQALAAAEAdIAAAFIABAAQALgRAMgJQALgJANAAQAOAAAKAJQAIAJAAAOQAAAPgHAJQgGAJgNAAIgKgCIgJgHIgFgIQgCgGgCAAQgPAAgGAVQgFAUAAA/QAAAUABAIQADAKAFADIAJADQANADAAAJQAAAIgMAEQgMADgcAAQggAAgLgDg");
	this.shape_5.setTransform(-1.7,30);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AglCYQgKgEAAgJQAAgHAKgEIAGgCQAFgDACgIQADgGAAgRIgBgOIAAgRIAAgWQAAghgCgKQgBgKgEgDIgKgDQgNgEgBgHQAAgFAFgDQADgEAJgEIAhgKIAVgFQAGAAACAFQADADAAAKIAAANIAAAKIgCA1IAAACIgBA0QABAUABAJQACAHAEADIAJADQALAFgBAIQAAAIgKADQgKADgcAAQgfAAgLgDgAgahrQgIgHgBgLQABgMAJgIQALgKANABQANgBAKAJQAJAIAAALQAAAMgKAHQgKAJgOAAQgNAAgKgIg");
	this.shape_6.setTransform(-16.5,25.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006F46").s().p("AhmCRQgLgDAAgKQAAgGAJgEIALgFQAEgEACgSQABgRAAg0IAAgiQAAg6gBgRQgDgRgEgDIgKgDQgNgEgBgHQAAgGAFgDQADgDAJgEIAegJQAOgFAIAAQAFAAADAEQADADAAAIIAAAKIAAAEIABACIAIgGIAIgHQAOgJALgFQAMgEANgBQAoAAAZAdQAZAeAAAuQAAAygdAgQgcAigsAAQgRAAgHgGQgHgFAAgIQgBgFAEgDQADgEAHAAIAFABIAIABQAXAAAOgUQAOgTAAggQAAglgPgWQgQgWgYAAQgVAAgNAMQgNAMAAAgIAACHIABAVQABAIAEAEQACACAJADIAJADIAEAEIACAGQAAAIgNAEQgMACgeAAQgfABgKgEg");
	this.shape_7.setTransform(-35.6,34);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006F46").s().p("AgQBuIgWgDIgHADIgGACIgFgBIgEgDQgHgGgGgRQgGgRAAgQQAAgHAEgEQADgFAGAAQAKAAAJARIAJANQAGAIALAFQALAFALAAQAOAAAJgHQAIgHAAgMQAAgSgigRIgNgGQghgQgMgNQgMgOAAgVQABgbASgSQAUgRAfAAIAOABIAPACIAKgEIAGgBQALAAAKARQAKARAAASQAAAIgEAEQgDAEgGAAQgFAAgFgEQgEgEgGgKQgJgOgIgFQgIgFgMAAQgMAAgIAHQgHAHAAALQAAAKAIAHQAIAIAZANIADABQA7AdAAAiQAAAegXAUQgXAUgiAAg");
	this.shape_8.setTransform(-56.9,30.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006F46").s().p("AhoBqQgLgEAAgKQAAgGALgEIAFgCQAGgEACgHQADgHgBgQIAAgPIAAgRIAAgVQAAghgCgLQgBgKgFgCIgKgEQgMgEAAgHQAAgFADgDQAEgEAKgEIAegKIAWgDQAGAAADADQADADAAAHIAAAPIAAABIABABIABAAIABgBIAFgEIAEgFQAYgVAaAAQAPAAAOAHQAOAHAKAKQAKAMAEARQAEAPAAAjIAAAcIAAAOIAAAMQAAAPACAGQACAGAGAEIAFACQALAEgBAGQAAAKgKAEQgJADghAAQgeAAgKgDQgKgEAAgIQAAgIAKgEIAIgDQAFgDADgKQABgIAAgXQAAhDgIgSQgJgRgWAAQgKAAgLAHQgLAHgFALQgEAJgCARQgCAQAAAqQAAAVACAHQABAGAEADIAIADQAMAEAAAIQAAAIgLAEQgKADgcAAQghAAgKgDg");
	this.shape_9.setTransform(-78.7,30);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006F46").s().p("AgsCWQgMgEAAgJQAAgJANgFIAJgEQAFgEACgaQACgZAAhCIgBhQQgCgfgEgEQgBgDgLgFQgMgEAAgJQAAgIAKgDQAJgEAlAAQAnAAAIAEQAKADAAAIQAAAJgNAFIgJAFQgFADgBAVIgCBFIABBmQACAlADADQACAEALAEQALAEAAAJQAAAJgMAEQgLADgiAAQggAAgMgDg");
	this.shape_10.setTransform(-98.1,25.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006F46").s().p("AhhCNQgLgJAAgOQAAgKAIgIQAHgIALAAIAJACIAGAFIAGAIQAGAIAEAAQALAAALgQQALgPAAgRQAAgSgPgiIgCgFIgihKIgTgpQgFgIgMgFQgHgDgDgDQgCgDAAgFQAAgJALgEQALgDAfAAQAfAAAKADQALADAAAJIgBAGIgEAEIgIAEQgIADAAAEIAFAQIAQArIARAnQAFALAEAAQACAAAEgKIAPgiIAPgqQAGgPgBgGQABgGgMgHQgNgGAAgGQAAgHAKgDQAKgDAYAAQAZAAAKADQAJADgBAJQABAIgMADIgJADQgNAGgNAkIgHARIgbBDQgiBZgWAbQgXAagfAAQgPAAgKgIg");
	this.shape_11.setTransform(64.2,-16.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006F46").s().p("AAmBkIgLgLIgJAFQgaARgbAAQgfAAgTgSQgTgSAAgdQAAgiAZgSQAYgUAtAAQAKAAAGAEQAFADAAAIQAAAMgPAAQgUAAgNAKQgNAKAAASQAAARALAKQALAKATAAQAUAAAJgJQAJgJAAgWIAAhQQAAgTgJgKQgIgKgOAAQgKAAgJAEQgJAFgJAJIgEAGQgNAQgOAAQgJAAgFgFQgFgGAAgJQAAgUAZgOQAZgNAmAAQAXAAARAGQARAGAJAMQAHAIACANQADANAAAfIAABEQAAAMACAFQACAGAEACIAHABQANAEAAAHQAAALgOAIQgOAIgTAAQgKAAgKgLg");
	this.shape_12.setTransform(42.3,-20.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006F46").s().p("AhcCBQgagdAAguQAAg0AdggQAdggAtAAIAPACQAHABADAFQAEAFAAAFQAAAMgOAAIgGgBIgFAAQgYAAgOATQgOATAAAhQAAAkAPAWQAQAXAXAAQAWAAAMgMQANgNAAgYIAAg6IAAhhQAAgPgDgGQgDgGgIgDIgGgBQgNgEAAgHQAAgGAGgEQAFgEAQgGIAXgHIAVgCQAHAAADAEQADAEAAAJIAAALIgDCDIACBZQABAUAEADIAOAFQAMACAAAIQAAAJgfAKIgVAGIgRACQgGAAgCgDQgDgEAAgHIAAgKIAAgEIgCgCIgGAFIgJAHQgNAJgLAFQgNAEgNAAQgoAAgYgcg");
	this.shape_13.setTransform(18.8,-25.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006F46").s().p("AglCYQgLgDAAgKQAAgHALgEIAFgCQAGgDACgIQADgGgBgQIAAgPIAAgRIAAgWQAAghgCgKQgBgKgFgCIgKgEQgNgEABgHQAAgFADgEQAFgDAJgEIAfgLIAXgDQAFAAADADQACAEAAALIAAAMIAAAKIgCA1IAAABIAAA0QAAAVABAIQACAJAFACIAHAEQAMAEAAAHQAAAJgLADQgLAEgbAAQgggBgKgDgAgZhqQgKgIABgLQgBgMALgJQAKgIAOgBQANABAJAHQAJAJAAALQAAAMgKAHQgKAJgOAAQgOAAgIgHg");
	this.shape_14.setTransform(-0.7,-25.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006F46").s().p("AgkCZQgKgEAAgJQAAgHAJgDIAKgGQAEgEACgNIACgqIAAghIgBgoIAAgQQAAg1gCgQQgBgPgFgDIgNgFQgOgDAAgIQAAgFAEgEQAFgDAPgFIAdgIIAUgDQAHAAACAEQADAEAAAKIgBAQQgCBMAABMIABBJQACAPAEAEIALAGQAKAEAAAIQAAAJgLADQgKADgcAAQgfAAgLgDg");
	this.shape_15.setTransform(-12.9,-25.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006F46").s().p("AhNBPQgegeAAgwQAAgvAgggQAfggAvAAQAuAAAeAeQAdAdAAAwQAAAwggAhQgfAhguAAQguAAgegggAgog/QgMASAAAcQgBApATAcQARAdAZAAQAVAAAMgSQAOgRAAgdQAAgogSgdQgTgcgYAAQgVAAgNARg");
	this.shape_16.setTransform(-30.5,-20.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006F46").s().p("AAvCWQgLgEAAgJQAAgJANgFIAKgEQADgDABgOIACgxIgBgeIgBgJQgDgDgKgCQgKgCgoAAIgtACQgMABgDACIgDAHIgBAQIAAASIACAxQABAOAEADIAJAEQANAFAAAJQAAAJgLAEQgMADgiABQghgBgMgDQgMgEAAgJQAAgJANgFIAKgEQAEgEACgbQACgbAAg/IgChPQgCgggCgEQgCgDgLgEQgMgGAAgIQAAgJAKgDQAJgCAnAAQAlAAAKACQAJADAAAJQAAAIgNAGIgJAEQgEAEgBAMIgCA/QAAAJAIADQAIADAfAAIARAAIAtgBQANgCAEgDIACgEIABgIIAAgKIgCg0QgBgLgDgDIgKgEQgNgGAAgIQAAgJAKgDQAKgCAlAAQAmAAAJACQAKADAAAJQAAAJgNAFIgKAEQgEAEgCAdQgCAcAAA5IACBSQABAgADAFQACADAMAEQALAEAAAJQAAAJgMAEQgMADghABQgigBgMgDg");
	this.shape_17.setTransform(-58.5,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidayinspirationhalfbanner, new cjs.Rectangle(-107.1,-52.5,214.2,105.1), null);


(lib.halfpagecookieone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieone();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfpagecookieone, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookietwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookietwo();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookietwo, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookietwelve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookietwelve, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookiethree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiethree();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookiethree, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookiethirteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiethirteen();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookiethirteen, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookieten = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieten();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookieten, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookiesixteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiesixteen();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookiesixteen, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookiesix = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiesix();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookiesix, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookieseventeen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieseventeen();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookieseventeen, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookieseven = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieseven();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookieseven, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookienineteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieninetten();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookienineteen, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookieninetwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookienine();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookieninetwo, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookienine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookienine();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookienine, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookiegreens = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiegreens();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookiegreens, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookiefrosting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefrosting();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookiefrosting, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookiefourteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefourteen();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookiefourteen, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookiefour = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefour();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookiefour, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookiefive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefive();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookiefive, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookiefifteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefifteen();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookiefifteen, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookieeleven = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieeleven();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookieeleven, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookieeighteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieeighteen();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookieeighteen, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookieeight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieeight();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookieeight, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfcookieberries = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieberries();
	this.instance.parent = this;
	this.instance.setTransform(-116,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcookieberries, new cjs.Rectangle(-116,-104,232,208), null);


(lib.halfbannertable_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.halfbannertable();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfbannertable_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.glassestoprighthalfbanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.toprightcandleshalfbanner();
	this.instance.parent = this;
	this.instance.setTransform(-53,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.glassestoprighthalfbanner, new cjs.Rectangle(-53,-55.5,106,111), null);


(lib.fillyourinboxwithhalfbanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#07744A").s().p("AAeCZQgLgDAAgJQAAgIALgEIAIgDQAFgEACgJQACgIAAgXQAAhEgJgRQgJgRgWAAQgLAAgKAHQgKAHgGAKQgEAJgCARQgCAQAAAqQAAAVACAHQABAHAFADIAIADQALAEAAAIQAAAJgLADQgKADgcAAQghAAgKgDQgKgEAAgKQAAgGAKgEIAFgCQAGgEADgJQACgIAAgYIAAgjIAAggIgBhgQgCgYgDgEQgCgCgNgEQgNgEAAgHQAAgGAGgEQAFgEATgHIAVgGIAUgCQAHAAADAEQADAEAAAJIgBAJIgBBVIAAALIABAEIADADIAFgGIAHgIQALgKAMgGQALgFANAAQAkAAASAXQASAZAAAuIABAVIAAAmIAAALQAAALACAFQACAFAFADIAFABQALAFAAAGQAAAKgKAEQgLADghAAQgcAAgKgDg");
	this.shape.setTransform(91,26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#07744A").s().p("AgLCAQgKgDgIgIQgHgGgEgMQgCgMAAggIAAhxIgUAAIgGgBIgCgGIAAgGQAAgGAWgTIAJgIIAIgHQAXgTAHAAIAGABQACACAAAEIAAAnIAxAAQAEAAADACQACADAAAFIAAAGQAAAFgCADQgDACgEAAIgsAAIgEACIgBAFIAABoQAAAcAFAHQAEAHANAAQAGAAALgDIAOgEQAFAAADADQADACAAAFQAAAMgRALQgTALgXgBQgMAAgLgDg");
	this.shape_1.setTransform(71.2,29.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#07744A").s().p("AglCYQgLgEAAgJQAAgHALgEIAFgCQAGgDACgIQACgGAAgQIAAgPIAAgRIAAgWQAAghgCgKQgCgKgEgDIgKgDQgNgEABgHQAAgFADgDQAFgFAJgDIAfgKIAXgFQAFAAADAFQACAEAAAJIAAANIAAAKIgCA1IAAABIAAA1QgBAUACAIQACAIAFADIAIAEQAKADABAJQAAAIgLADQgLADgbABQggAAgKgEgAgZhrQgKgHABgLQgBgMAKgJQALgJAOABQANgBAJAJQAJAHAAAMQAAALgKAIQgKAJgOAAQgNAAgJgIg");
	this.shape_2.setTransform(57.5,26.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#07744A").s().p("AAMAXIgZhCQgMgegKgFIgHgDQgLgFgBgIQAAgIALgDQALgEAhAAQAdAAALAEQAKADAAAIIgBAHIgFAEIgHADQgIAEgBAEIAFAOIARAsIATApQAEAKADAAQACAAAEgGIAKgTIAXg1QAIgUAAgHIgCgIIgFgFIgGgCQgKgEAAgHQAAgIAKgDQAKgEAZAAQAXAAAKAEQAJADgBAIQABAJgLADIgIADQgKAFgTAsIgFALIgJATQgwBugOAAQgOAAgmhXgAh9AMIgFgNIgPgkQgNgkgKgFIgGgDQgNgFAAgIQAAgIALgDQALgEAjAAQAcAAALAEQAKADAAAIIgBAHIgFAEIgGADQgJAEAAAEIAFASIAQAoIARAoQAGALADAAQAGAAAGgNIAHgPIAFgHQACgCAFAAQAGAAACADQAEADAAAFQAAAGgGAMQgXAxgKAQQgJAQgHAAQgQAAgqhig");
	this.shape_3.setTransform(34.4,31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#07744A").s().p("AAUBnQgLgEgBgIQAAgGAIgEQAGgEAAgCQAAgEgJgPIgmg4Igjg0QgLgQgIgGQgDgDgJgCQgLgDABgHQgBgJALgEQAMgDAbAAQAdAAAMADQALADAAAJQAAAGgHAEQgHAFAAACQAAAFAYAjIACACIAHgLQAUgcAAgDQAAgCgIgFQgHgEAAgGQAAgIAKgEQAKgDAXAAQASAAAJADQAJAEAAAHQAAAJgPAFIgLAFQgJAEgNAQQgNAQgQAbIAmA5QANASAHAGIAPAHQALAEAAAHQAAAJgLAEQgLADgbAAQgdAAgMgDgAhkBnQgJgEAAgIQAAgJAQgEIALgEQAGgDALgOIATgbIAFgFIAHgCQAEAAADADQADADAAAFQAAAFgEAHQgQAXgBAEQAAADAIAEQAJAEAAAGQAAAJgLAEQgLADgXAAQgSAAgJgDg");
	this.shape_4.setTransform(-5.7,31.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#07744A").s().p("AhMBPQgfgfAAgvQAAgvAgggQAgggAvAAQAtAAAeAeQAdAdAAAwQAAAvgfAiQggAhguAAQgtAAgegggAgog/QgNASAAAcQABAqARAcQASAcAZAAQAUAAAOgSQANgRgBgdQABgpgTgcQgRgcgZAAQgVAAgNARg");
	this.shape_5.setTransform(-28.2,31.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#07744A").s().p("AgcCZQgTgFgMgKIgNAJQgHADgFABIgHgCIgIgDIAAgCQAHgJAEgTQADgTAAgvIAAgvIAAgwQAAgogCgNQgBgNgGgDIgLgDQgNgEAAgHQAAgFAEgDQAFgEAPgHIAagGIAVgEQAIAAADAEQADACgBAJIAAAKIgCA/IABBeIAAA3QAAAgAKAKQAKALAXAAQAagBAPgWQAPgWAAgoQAAgigOgUQgPgTgZAAIgHAAIgEAAQgQAAAAgOQAAgLAQgGQAOgGARAAQApAAAYAcQAYAbAAAuQAAA2geAhQgeAfgyAAQgUABgRgFg");
	this.shape_6.setTransform(-53.6,26.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#07744A").s().p("AhoBqQgKgEAAgKQAAgGAKgFIAGgBQAFgDACgIQACgHABgQIgBgPIAAgQIAAgWQAAghgCgLQgCgJgDgDIgKgEQgOgEAAgHQAAgFAFgDQAEgEAIgEIAfgKIAWgDQAGAAADADQACADAAAHIAAAOIABACIABABIACAAIAAgBIAFgEIAFgFQAWgVAaAAQAQAAAPAHQAOAHAJALQAKALAEARQAEAPAAAjIAAAcIAAANIAAANQAAAPACAGQACAHAFADIAGABQAKAFAAAGQABAKgLAEQgKACggAAQgeAAgKgCQgKgEAAgIQAAgIALgEIAIgDQAEgDADgKQACgJAAgWQAAhDgJgSQgJgRgXAAQgJAAgLAHQgKAHgGALQgEAJgDARQgCAQAAAqQAAAVACAHQACAGAEADIAIADQAMAEgBAIQAAAJgKADQgLADgbAAQghAAgKgDg");
	this.shape_7.setTransform(-77.6,31);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#07744A").s().p("AgsCWQgMgEAAgJQAAgJANgFIAKgEQAEgEACgaQACgZAAhCIgBhQQgDgfgDgEQgCgDgKgEQgMgGAAgIQAAgJAJgCQAKgDAmgBQAlABAKADQAJACAAAJQAAAJgNAFIgKAEQgEAEgBAVIgCBGIACBlQABAlACADQACADAMAFQALAEAAAJQAAAJgLAEQgMAEgiAAQggAAgMgEg");
	this.shape_8.setTransform(-97.1,26.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#07744A").s().p("AhABpQgLgDAAgJQAAgIALgDIAGgDQAFgCADgIQACgHAAgQIAAgOIAAgRIAAgNQAAgmgCgMQgCgMgFgDIgJgDQgNgFAAgHQAAgFAEgDQADgEAKgDIAdgKIATgEQAKAAADAdIABAEIABABQALgRAMgJQALgJANAAQAPAAAIAJQAJAJAAAPQAAAOgGAJQgIAJgMgBIgLgCIgIgGIgFgIQgDgFgCAAQgOAAgGATQgFAVAABAQAAASACAKQACAJAFACIAJADQANAFAAAIQAAAIgMADQgLAEgdAAQghAAgKgEg");
	this.shape_9.setTransform(75.5,-19.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#07744A").s().p("AAuBsQgDgDAAgHIAAgQIAAgBIgBAAQgDAAgFAGIgDADQgKAKgNAFQgLAFgQAAQgQAAgOgGQgOgGgKgLQgJgMgEgRQgFgRAAgtIAAgOIAAgQIAAgEQAAgSgCgFQgDgEgHgDIgJgDQgLgDAAgIQAAgFADgEQAFgDAPgFIAcgIIAXgDQAGAAADAEQACAEAAAKIAAAIIgCBQQAAAqAJARQAJAQAVAAQAYAAAKgVQALgWAAgzIAAgQQAAgRgDgFQgCgFgHgCIgJgDQgMgDABgIQgBgFAFgDQAEgEAPgFIAdgIIAVgDQAHAAADAEQACAEAAAKIgBAMIgBBWIAAAkIABAPQACAIALAFIAEABQALAEAAAHQABAFgEADQgEAEgKAEIgeAJQgOAEgIAAQgGAAgDgDg");
	this.shape_10.setTransform(54,-19.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#07744A").s().p("AhNBPQgegeAAgwQAAgvAgggQAgggAuAAQAvAAAdAeQAdAeAAAuQAAAxggAhQgfAhgtAAQgvAAgegggAgog/QgMARAAAdQAAApASAcQARAdAZAAQAUAAANgRQANgSABgdQgBgpgRgcQgTgcgYAAQgVAAgNARg");
	this.shape_11.setTransform(29.6,-19.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#07744A").s().p("AgsCWQgMgEAAgJQAAgJANgFIAJgFQAIgFABhWIAAgUIgagpIgog/QgMgSgIgFIgKgEQgOgFAAgJQAAgIAKgEQAKgCAqAAQAoAAAKACQAKAEAAAIQAAAJgQAGIgCAAIgGAFIgCAGQAAAEAJAQIAqBCIAlg3QAMgUAAgFQgBgGgDgEQgCgEgKgEQgJgCgCgEQgDgCAAgGQAAgIAJgEQAIgCAkAAQAiAAAJACQAJAEAAAIQAAAJgMAFIgQAIQgJAHgUAfQgVAegfA1IABAmQABBHAFAEIAKAFQANAFAAAJQAAAJgLAEQgMADgiABQgggBgMgDg");
	this.shape_12.setTransform(3.9,-24);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#07744A").s().p("AgkCZQgKgEAAgJQAAgHAJgDIAKgGQAEgEACgNIACgqIAAghIgBgoIAAgQQAAg1gCgQQgBgPgFgDIgNgFQgNgDAAgIQAAgFADgEQAFgDAPgFIAdgIIAUgDQAHAAACAEQADAEAAAKIgBAQQgCBMAABMIABBJQACAPAEAEIALAGQALAEgBAIQABAJgMADQgKADgcAAQgfAAgLgDg");
	this.shape_13.setTransform(-27.8,-24.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#07744A").s().p("AgjCZQgLgEAAgJQAAgHAJgDIALgGQAEgEABgNIACgqIAAghIgBgoIAAgQQAAg1gCgQQgCgPgEgDIgNgFQgNgDAAgIQAAgFADgEQAEgDAQgFIAcgIIAWgDQAGAAADAEQACAEAAAKIgBAQQgBBMAABMIAABJQACAPAEAEIAMAGQAKAEgBAIQABAJgLADQgLADgcAAQgfAAgKgDg");
	this.shape_14.setTransform(-39.7,-24.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#07744A").s().p("AglCYQgKgEAAgJQAAgHAKgEIAGgCQAFgDACgIQACgGABgQIgBgPIAAgRIAAgWQAAgigCgJQgCgKgDgCIgKgEQgOgEAAgIQAAgEAFgEQAEgDAIgEIAhgLIAVgDQAGAAACADQADAEAAALIAAAMIAAAKIgCA1IAAABIgBA0QABAVABAIQACAJAEACIAIAEQAMAEgBAHQAAAJgKAEQgLADgbAAQgggBgKgDgAgahqQgIgIgBgLQABgMAJgJQAKgIAOgBQAOABAJAHQAJAJAAALQAAAMgKAIQgKAIgOAAQgOAAgJgHg");
	this.shape_15.setTransform(-51.5,-24.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#07744A").s().p("AhsCYQgLgDAAgKQAAgIALgFQAMgEACgDQACgFACggIAChSIgChOQgCgggCgFQgCgDgMgEQgLgFAAgJQAAgIAJgDQALgDAkAAICCAAIAUgDIALgCIAGACIAEADQAEAIAEAPQAEAPAAAKQAAAJgEAFQgDAFgHABQgGgBgKgPIgGgKQgFgGgJgDQgKgEgOAAIgdAAQgUAAgKADQgLABgEAGQgDAEgBAOIgCApIAAARQAAAKACACQACADAFAAIAiAAQASAAAGgFQAHgEACgOIAAgDQAEgXALAAQAJAAADAMQAEALAAApQAAAogDALQgEAMgJAAQgLAAgEgXIAAgDQgCgOgHgEQgGgGgSAAIghAAQgGAAgCAEQgCAEAAANIAAAQIACA9QABAMADADIAKAEQANAFAAAKQAAAIgMAEQgLAEgiAAQgiAAgMgEg");
	this.shape_16.setTransform(-69.9,-24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fillyourinboxwithhalfbanner, new cjs.Rectangle(-106.1,-51.5,212.2,105.1), null);


(lib.diytipshalfbanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AgQBuIgWgDIgGADIgHACIgEgBIgFgDQgHgGgGgRQgGgRAAgQQAAgHADgEQAEgFAFAAQAKAAALARIAIANQAGAIALAFQALAFALAAQAOAAAJgHQAIgHAAgMQAAgSgigRIgNgGQghgQgMgNQgLgOAAgVQAAgbATgSQATgRAfAAIAOABIAPACIAKgEIAHgBQAKAAAKARQAKARAAASQAAAIgDAEQgDAEgHAAQgEAAgFgEQgFgEgHgKQgHgOgJgFQgJgFgMAAQgLAAgIAHQgHAHAAALQAAAKAIAHQAHAIAaANIACABQA8AdAAAiQAAAegXAUQgXAUgiAAg");
	this.shape.setTransform(75.1,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("AhmCRQgMgDAAgJQAAgIAKgDIALgGQAEgDABgRQACgRAAg1IAAgiQAAg6gCgQQgCgRgEgDIgLgEQgNgEABgIQgBgEAEgEQAFgEAIgDIAegKQAOgDAIAAQAGgBACAEQADAEAAAGIAAALIAAAEIABABIAJgFIAIgGQANgKALgFQAMgFAMABQAoAAAaAdQAYAdAAAtQAAAzgcAhQgcAggsAAQgSAAgGgEQgIgGABgJQAAgEADgEQAEgDAGAAIAFABIAIABQAXAAAOgTQAOgUAAghQAAgkgPgWQgPgXgZAAQgVAAgNANQgMAMAAAgIAACHIAAAWQABAHADAEQADACAKADIAIADIAEAEIACAGQAAAIgNADQgMAEgeAAQgfAAgKgEg");
	this.shape_1.setTransform(52.8,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AglCYQgLgEAAgJQAAgHALgEIAFgCQAGgDACgIQADgGgBgQIAAgPIAAgRIAAgWQAAgigCgJQgBgKgFgCIgKgEQgMgEAAgIQAAgEADgEQAEgDAKgEIAfgLIAXgDQAFAAADADQACAEAAALIAAAMIAAAKIgCA1IAAABIAAA0QAAAVABAIQACAJAEACIAIAEQAMAEAAAHQAAAJgLAEQgKADgcAAQgggBgKgDgAgZhqQgJgIAAgLQAAgMAKgJQAKgIANgBQANABAKAHQAJAJAAALQAAAMgKAIQgKAIgOAAQgOAAgIgHg");
	this.shape_2.setTransform(34.8,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AgsCYQgMgFAAgIQAAgKAMgEQALgEACgDQADgEABgjIABhkIAAg4IgCgiQgBgGgEgBQgDgCgJAAIgJAAQgPgBgIAEQgIADgGAJIgHAOIgGAPIgGAGQgEADgEAAQgGAAgDgGQgDgFAAgNQAAgcAHgSQAGgRAKAAIADAAQAQADAaAAIB9AAQAZAAASgDIACAAQAKAAAHARQAGASAAAcQAAANgCAFQgEAGgGAAIgHgDIgHgGIgGgPIgHgOQgFgJgJgDQgIgEgPABIgJAAQgIAAgEACQgEABAAAGIgCAjIgBA3IABBkQACAjACAEQACADAMAEQALAEAAAKQAAAIgMAFQgMADghAAQggAAgMgDg");
	this.shape_3.setTransform(15,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("AgsCWQgMgEAAgJQAAgJANgFIAKgFQAGgFAChWIAAgUIgagpIgog/QgMgSgIgFIgKgEQgOgFAAgJQAAgIAKgEQAKgCApAAQApAAALACQAKAEgBAIQAAAJgQAGIgCAAIgGAFIgCAGQAAAEAJAQIArBCIAkg3QALgUAAgFQAAgGgCgEQgDgEgLgEQgHgCgDgEQgDgCAAgGQAAgIAJgEQAJgCAjAAQAiAAAJACQAJAEAAAIQAAAJgMAFIgQAIQgJAHgVAfQgUAegfA1IABAmQAABHAGAEIAJAFQAOAFAAAJQAAAJgLAEQgMADgiABQgggBgMgDg");
	this.shape_4.setTransform(-24.3,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AgsCWQgMgEAAgJQAAgJANgFIAKgFQAEgDACgZQACgaAAhCIgBhQQgCgfgEgEQgCgDgKgEQgMgFAAgJQAAgJAJgDQAKgCAmAAQAlAAAJACQAKADAAAJQAAAJgNAFIgJAEQgEAEgCAVIgCBGIACBkQABAlACAFQACADAMAEQALAEAAAJQAAAJgLAEQgMADgiABQgggBgMgDg");
	this.shape_5.setTransform(-44.8,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AgtCZIgbAAIgSAAIgSABQgaAAgIgEQgIgDAAgJQAAgIALgFQAMgEACgDQADgFACggIABhSIgChOQgCghgCgEQgCgDgLgEQgMgFAAgJQAAgIAJgEQAJgDAaAAIASAAIAVABIAcgBIAZgBQBOAAAsApQArApAABLQAABKgsAmQgsAmhUAAgAguh4QgKADgCAHQgDAIgBAYIgCBBIACBRQABAhADAHQACAGAOAFQAOAFATAAQAxAAAYgeQAZgeAAg7QAAg+gcghQgcgig0AAQgSAAgJAEg");
	this.shape_6.setTransform(-68.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.diytipshalfbanner, new cjs.Rectangle(-86.5,-27.2,173,54.6), null);


(lib.ctarectanglevideo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63100").s().p("ArPETIAAolIWfAAIAAIlg");
	this.shape.setTransform(0,0,1.164,0.627);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectanglevideo, new cjs.Rectangle(-83.7,-17.2,167.6,34.5), null);


(lib.blackwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgRBA2FMAAAhsJMAiDAAAMAAABsJg");
	this.shape.setTransform(0,0,0.753,0.867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackwideskyscraper, new cjs.Rectangle(-82.1,-300,164.3,600.1), null);


(lib.halfbannercookieeight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.halfcookieeight();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfbannercookieeight, new cjs.Rectangle(-116,-104,232,208), null);


(lib.ctarollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(3));

	// Layer 1
	this.instance = new lib.ctarectanglevideo();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.7,-17.2,167.6,34.5);


(lib.bluetinhalfbanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_129 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(129).call(this.frame_129).wait(4));

	// cookie-greens
	this.instance = new lib.halfcookiegreens();
	this.instance.parent = this;
	this.instance.setTransform(2,2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78).to({alpha:1},10).wait(44).to({alpha:0},0).wait(1));

	// cookie-berries
	this.instance_1 = new lib.halfcookieberries();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2,2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(78).to({alpha:1},10).wait(44).to({alpha:0},0).wait(1));

	// cookies-frosting
	this.instance_2 = new lib.halfcookiefrosting();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2,2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(78).to({alpha:1},10).wait(44).to({alpha:0},0).wait(1));

	// cookie-nineteen
	this.instance_3 = new lib.halfcookienineteen();
	this.instance_3.parent = this;
	this.instance_3.setTransform(2,2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({alpha:1},0).wait(61).to({alpha:0},0).wait(1));

	// cookie-eighteen
	this.instance_4 = new lib.halfcookieeighteen();
	this.instance_4.parent = this;
	this.instance_4.setTransform(2,2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(67).to({alpha:1},0).wait(65).to({alpha:0},0).wait(1));

	// cookie-seveneteen
	this.instance_5 = new lib.halfcookieseventeen();
	this.instance_5.parent = this;
	this.instance_5.setTransform(2,2);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(63).to({alpha:1},0).wait(69).to({alpha:0},0).wait(1));

	// cookie-sixteen
	this.instance_6 = new lib.halfcookiesixteen();
	this.instance_6.parent = this;
	this.instance_6.setTransform(2,2);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(59).to({alpha:1},0).wait(73).to({alpha:0},0).wait(1));

	// cookie-fifteen
	this.instance_7 = new lib.halfcookiefifteen();
	this.instance_7.parent = this;
	this.instance_7.setTransform(2,2);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(55).to({alpha:1},0).wait(77).to({alpha:0},0).wait(1));

	// cookie-fourteen
	this.instance_8 = new lib.halfcookiefourteen();
	this.instance_8.parent = this;
	this.instance_8.setTransform(2,2);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(51).to({alpha:1},0).wait(81).to({alpha:0},0).wait(1));

	// cookie-thirteen
	this.instance_9 = new lib.halfcookiethirteen();
	this.instance_9.parent = this;
	this.instance_9.setTransform(2,2);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(47).to({alpha:1},0).wait(85).to({alpha:0},0).wait(1));

	// cookie-twelve
	this.instance_10 = new lib.halfcookietwelve();
	this.instance_10.parent = this;
	this.instance_10.setTransform(2,2);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(43).to({alpha:1},0).wait(89).to({alpha:0},0).wait(1));

	// cookie-eleven
	this.instance_11 = new lib.halfcookieeleven();
	this.instance_11.parent = this;
	this.instance_11.setTransform(2,2);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(39).to({alpha:1},0).wait(93).to({alpha:0},0).wait(1));

	// cookie-ten
	this.instance_12 = new lib.halfcookieten();
	this.instance_12.parent = this;
	this.instance_12.setTransform(2,2);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(35).to({alpha:1},0).wait(98));

	// cookie-nine
	this.instance_13 = new lib.halfcookienine();
	this.instance_13.parent = this;
	this.instance_13.setTransform(2,2);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(31).to({alpha:1},0).wait(102));

	// cookie-eight
	this.instance_14 = new lib.halfbannercookieeight();
	this.instance_14.parent = this;
	this.instance_14.setTransform(2,2);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(27).to({alpha:1},0).wait(106));

	// cookie-seven
	this.instance_15 = new lib.halfcookieseven();
	this.instance_15.parent = this;
	this.instance_15.setTransform(2,2);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(23).to({alpha:1},0).wait(110));

	// cookie-six
	this.instance_16 = new lib.halfcookiesix();
	this.instance_16.parent = this;
	this.instance_16.setTransform(2,2);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(19).to({alpha:1},0).wait(114));

	// cookie-five
	this.instance_17 = new lib.halfcookiefive();
	this.instance_17.parent = this;
	this.instance_17.setTransform(2,2);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(15).to({alpha:1},0).wait(118));

	// cookie-four
	this.instance_18 = new lib.halfcookiefour();
	this.instance_18.parent = this;
	this.instance_18.setTransform(2,2);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(11).to({alpha:1},0).wait(122));

	// cookie-three
	this.instance_19 = new lib.halfcookiethree();
	this.instance_19.parent = this;
	this.instance_19.setTransform(2,2);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(7).to({alpha:1},0).wait(126));

	// cookie-two
	this.instance_20 = new lib.halfcookietwo();
	this.instance_20.parent = this;
	this.instance_20.setTransform(2,2);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(3).to({alpha:1},0).wait(130));

	// cookie-one
	this.instance_21 = new lib.halfpagecookieone();
	this.instance_21.parent = this;
	this.instance_21.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(133));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-102,232,208);


// stage content:
(lib.simple_halfpagebannerinboxsomethingdelicious = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_266 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(224).call(this.frame_266).wait(4));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(150.3,301.6,1.456,0.919,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(270));

	// fade-from-white
	this.instance = new lib.blackwideskyscraper();
	this.instance.parent = this;
	this.instance.setTransform(150.2,300,1.826,1,0,0,0,0.1,0);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).wait(261));

	// logo
	this.instance_1 = new lib.logokale("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(80,37.1,0.003,0.003,0,0,0,0,17.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({x:150},0).to({scaleX:0.29,scaleY:0.29,y:42.1,alpha:1},6,cjs.Ease.get(1)).to({regX:0.2,regY:17.7,scaleX:0.27,scaleY:0.27,x:150.1,y:41.7},7,cjs.Ease.get(1)).wait(248));

	// diy-tips
	this.instance_2 = new lib.diytipshalfbanner();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,303.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58).to({alpha:1},10).wait(20).to({alpha:0},5).wait(177));

	// party-ready recipes
	this.instance_3 = new lib.partyreadyrecipeshalfbanner();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,328.4);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({alpha:1},10).wait(20).to({alpha:0},5).wait(207));

	// holiday-inspiration
	this.instance_4 = new lib.holidayinspirationhalfbanner();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,328.4);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(88).to({alpha:1},10).wait(20).to({alpha:0},5).wait(147));

	// something-delicious
	this.instance_5 = new lib.somethingdelicioushalfbanner();
	this.instance_5.parent = this;
	this.instance_5.setTransform(151.2,328.4);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(118).to({alpha:1},10).wait(142));

	// fill-your-inbox-with
	this.instance_6 = new lib.fillyourinboxwithhalfbanner();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,226.8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({y:223.8},0).to({alpha:1},10,cjs.Ease.get(1)).wait(242));

	// sign-up-mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgI+Ah2IAAm9Ib0AAIAAG9g");
	mask.setTransform(120.6,216.6);

	// sign-up
	this.instance_7 = new lib.signuphalfbanner();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,406.2);
	this.instance_7.alpha = 0;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(42).to({y:367.9},0).to({y:411.2,alpha:1},10,cjs.Ease.get(1)).to({y:406.2},8,cjs.Ease.get(1)).wait(210));

	// cta-mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgJrAi0IAAo6Ic0AAIAAI6g");
	mask_1.setTransform(122.6,222.8);

	// cta-rollover
	this.cta_rollover = new lib.ctarollover();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(150.1,405.9);
	this.cta_rollover.alpha = 0;

	var maskedShapeInstanceList = [this.cta_rollover];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(42).to({y:367.9},0).to({x:150,y:410.9,alpha:1},10,cjs.Ease.get(1)).to({x:150.1,y:405.9},8,cjs.Ease.get(1)).wait(210));

	// cta-rectangle-mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AuaEdIAAo5Ic1AAIAAI5g");
	var mask_2_graphics_42 = new cjs.Graphics().p("AuaEdIAAo5Ic1AAIAAI5g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:152.8,y:416.1}).wait(42).to({graphics:mask_2_graphics_42,x:152.8,y:416.1}).wait(228));

	// cta-rectangle
	this.instance_8 = new lib.rectanglehalfbanner();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,405.9);
	this.instance_8.alpha = 0;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(42).to({y:367.9},0).to({y:410.9,alpha:1},10,cjs.Ease.get(1)).to({y:405.9},8,cjs.Ease.get(1)).wait(210));

	// top-left-bites
	this.instance_9 = new lib.whitebiteshalfbanner_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(64.5,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(270));

	// top-right-candles-half-banner
	this.instance_10 = new lib.glassestoprighthalfbanner();
	this.instance_10.parent = this;
	this.instance_10.setTransform(247,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(270));

	// red-candle
	this.instance_11 = new lib.redcandlehalfbanner();
	this.instance_11.parent = this;
	this.instance_11.setTransform(276,201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(270));

	// white-candle
	this.instance_12 = new lib.whitecandlehalfbanner();
	this.instance_12.parent = this;
	this.instance_12.setTransform(274.5,273);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(270));

	// cookie-greens
	this.instance_13 = new lib.halfcookiegreens();
	this.instance_13.parent = this;
	this.instance_13.setTransform(184,499.9);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(143).to({x:186},0).to({y:500.1,alpha:1},10).wait(116).to({x:2,y:2,alpha:0},0).wait(1));

	// cookie-berries
	this.instance_14 = new lib.halfcookieberries();
	this.instance_14.parent = this;
	this.instance_14.setTransform(185,499.9);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(118).to({x:186,y:500.1},0).to({alpha:1},10).wait(141).to({x:2,y:2,alpha:0},0).wait(1));

	// cookies-frosting
	this.instance_15 = new lib.halfcookiefrosting();
	this.instance_15.parent = this;
	this.instance_15.setTransform(185,499.9);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(88).to({x:186},0).to({y:500.1,alpha:1},10).wait(171).to({x:2,y:2,alpha:0},0).wait(1));

	// cookie-nineteen
	this.instance_16 = new lib.halfcookienineteen();
	this.instance_16.parent = this;
	this.instance_16.setTransform(184,499.9);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(71).to({x:186,y:500.1,alpha:1},0).wait(198).to({x:2,y:2,alpha:0},0).wait(1));

	// cookie-eighteen
	this.instance_17 = new lib.halfcookieeighteen();
	this.instance_17.parent = this;
	this.instance_17.setTransform(184,499.9);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(67).to({x:186,y:500.1,alpha:1},0).wait(202).to({x:2,y:2,alpha:0},0).wait(1));

	// cookie-seveneteen
	this.instance_18 = new lib.halfcookieseventeen();
	this.instance_18.parent = this;
	this.instance_18.setTransform(186,499.9);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(63).to({alpha:1},0).wait(206).to({x:2,y:2,alpha:0},0).wait(1));

	// cookie-sixteen
	this.instance_19 = new lib.halfcookiesixteen();
	this.instance_19.parent = this;
	this.instance_19.setTransform(184,499.9);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(59).to({x:186,alpha:1},0).wait(210).to({x:2,y:2,alpha:0},0).wait(1));

	// cookie-fifteen
	this.instance_20 = new lib.halfcookiefifteen();
	this.instance_20.parent = this;
	this.instance_20.setTransform(184,499.9);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(55).to({x:186,alpha:1},0).wait(214).to({x:2,y:2,alpha:0},0).wait(1));

	// cookie-fourteen
	this.instance_21 = new lib.halfcookiefourteen();
	this.instance_21.parent = this;
	this.instance_21.setTransform(184,499.9);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(51).to({x:186,y:500.1,alpha:1},0).wait(218).to({x:2,y:2,alpha:0},0).wait(1));

	// cookie-thirteen
	this.instance_22 = new lib.halfcookiethirteen();
	this.instance_22.parent = this;
	this.instance_22.setTransform(184,499.9);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(47).to({x:186,y:500.1,alpha:1},0).wait(222).to({x:2,y:2,alpha:0},0).wait(1));

	// cookie-twelve
	this.instance_23 = new lib.halfcookietwelve();
	this.instance_23.parent = this;
	this.instance_23.setTransform(184,499.9);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(43).to({x:186,y:500.1,alpha:1},0).wait(226).to({x:2,y:2,alpha:0},0).wait(1));

	// cookie-eleven
	this.instance_24 = new lib.halfcookieeleven();
	this.instance_24.parent = this;
	this.instance_24.setTransform(184,499.9);
	this.instance_24.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(39).to({x:185.8,y:500.1,alpha:1},0).wait(230).to({x:2,y:2,alpha:0},0).wait(1));

	// cookie-ten
	this.instance_25 = new lib.halfcookieten();
	this.instance_25.parent = this;
	this.instance_25.setTransform(184,499.9);
	this.instance_25.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(35).to({x:185.8,y:500.1,alpha:1},0).wait(234).to({x:2,y:2},0).wait(1));

	// cookie-nine
	this.instance_26 = new lib.halfcookienine();
	this.instance_26.parent = this;
	this.instance_26.setTransform(184,499.9);
	this.instance_26.alpha = 0;

	this.instance_27 = new lib.halfcookieninetwo();
	this.instance_27.parent = this;
	this.instance_27.setTransform(186,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26,p:{x:184,y:499.9,alpha:0}}]}).to({state:[{t:this.instance_27}]},31).to({state:[{t:this.instance_26,p:{x:2,y:2,alpha:1}}]},238).wait(1));

	// cookie-eight
	this.instance_28 = new lib.halfbannercookieeight();
	this.instance_28.parent = this;
	this.instance_28.setTransform(184,499.9);
	this.instance_28.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(27).to({x:185.8,y:500.1,alpha:1},0).wait(242).to({x:2,y:2},0).wait(1));

	// cookie-seven
	this.instance_29 = new lib.halfcookieseven();
	this.instance_29.parent = this;
	this.instance_29.setTransform(184,499.9);
	this.instance_29.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(23).to({x:185.8,alpha:1},0).wait(246).to({x:2,y:2},0).wait(1));

	// cookie-six
	this.instance_30 = new lib.halfcookiesix();
	this.instance_30.parent = this;
	this.instance_30.setTransform(184,499.9);
	this.instance_30.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(19).to({x:185.8,y:500.1,alpha:1},0).wait(250).to({x:2,y:2},0).wait(1));

	// cookie-five
	this.instance_31 = new lib.halfcookiefive();
	this.instance_31.parent = this;
	this.instance_31.setTransform(184,499.9);
	this.instance_31.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(15).to({x:185.8,alpha:1},0).wait(254).to({x:2,y:2},0).wait(1));

	// cookie-four
	this.instance_32 = new lib.halfcookiefour();
	this.instance_32.parent = this;
	this.instance_32.setTransform(185.8,499.9);
	this.instance_32.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(11).to({alpha:1},0).wait(258).to({x:2,y:2},0).wait(1));

	// cookie-three
	this.instance_33 = new lib.halfcookiethree();
	this.instance_33.parent = this;
	this.instance_33.setTransform(184,499.9);
	this.instance_33.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(7).to({x:185.8,alpha:1},0).wait(262).to({x:2,y:2},0).wait(1));

	// cookie-two
	this.instance_34 = new lib.halfcookietwo();
	this.instance_34.parent = this;
	this.instance_34.setTransform(184,499.9);
	this.instance_34.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(3).to({x:185.8,alpha:1},0).wait(266).to({x:2,y:2},0).wait(1));

	// cookie-one
	this.instance_35 = new lib.halfpagecookieone();
	this.instance_35.parent = this;
	this.instance_35.setTransform(185.8,499.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(269).to({x:2,y:2},0).wait(1));

	// blue-tin
	this.instance_36 = new lib.bluetinhalfbanner();
	this.instance_36.parent = this;
	this.instance_36.setTransform(183.8,498.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(270));

	// towel
	this.instance_37 = new lib.towelhalfbanner_1();
	this.instance_37.parent = this;
	this.instance_37.setTransform(62,418);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(270));

	// table
	this.instance_38 = new lib.halfbannertable_1();
	this.instance_38.parent = this;
	this.instance_38.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(270));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,302,604.1);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
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
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
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