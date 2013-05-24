//
//Copyright 2013
//This file is free to use, modify, and distribute as long as this header remains intact.
//

var canvaseIdElement01239481 = 0;

function CanvasElement(containerId, elemId, width, height, context, onkeypress, onkeydown, onkeyup, click)
{

	args = {
		containerId: false,
		elemId: false,
		width: false,
		height: false,
		context: "2d",
        onkeypress: false,
        onkeydown: false,
        onkeyup: false,
        click: false,
	}
	if(arguments.length == 1)
	{
		args.containerId = arguments[0].containerId;
		args.elemId = arguments[0].elemId;
		if('width' in arguments[0])
			args.width = arguments[0].width;
		if('height' in arguments[0])
			args.height = arguments[0].height;
		if('context' in arguments[0])
			args.context = arguments[0].context;
		if('onkeypress' in arguments[0])
			args.onkeypress = arguments[0].onkeypress;
		if('onkeydown' in arguments[0])
			args.onkeydown = arguments[0].onkeydown;
		if('onkeyup' in arguments[0])
			args.onkeyup = arguments[0].onkeyup;
		if('click' in arguments[0])
			args.click = arguments[0].click;
	}
	else
	{
		args.containerId = containerId;
		args.elemId = elemId;
		if(typeof width !== "undefined")
			args.width = width;
		if(typeof height !== "undefined")
			args.height = height;
		if(typeof context !== "undefined")
			args.context = context;
        if(typeof onkeypress !== "undefined")
            args.onkeypress = onkeypress;
        if(typeof onkeydown !== "undefined")
            args.onkeydown = onkeydown;
        if(typeof onkeyup !== "undefined")
            args.onkeyup = onkeyup;
        if(typeof click !== "undefined")
            args.click = click;
	}
	this.canvas = document.createElement("canvas");
	this.canvas.setAttribute("id", args.elemId);
    this.canvas.setAttribute("tabindex", canvaseIdElement01239481);
    this.canvas.focus();
    this.canvas.setAttribute("style","border:solid black 2px");
    
    if(args.click != false)
        this.canvas.addEventListener("click",args.click);
    if(args.onkeypress != false)
        this.canvas.onkeypress = args.onkeypress;
    if(args.onkeydown != false)
        this.canvas.onkeydown = args.onkeydown;
    if(args.onkeyup != false)
        this.canvas.onkeyup = args.onkeyup;
	if(args.width)
		this.setWidth(args.width);
	if(args.height)
		this.setHeight(args.height);
	
	document.getElementById(args.containerId).appendChild(this.canvas);
	this.context = this.canvas.getContext(args.context);
    canvaseIdElement01239481++;
}

CanvasElement.prototype = 
{
	constructor: CanvasElement,
	setContextStyles: function(lineWidth, strokeStyle, lineCap, lineJoin, fillStyle, font, strokeStyle, textAlign,
							textBaseline)
				{
					var args = {
							lineWidth:false,
							strokeStyle:false,
							lineCap:false,
							lineJoin:false,
							fillStyle:false,
							font:false,
							strokeStyle:false,
							textAlign: false,
							textBaseline: false,
						};
						if(arguments.length == 1)
						{
							if('lineWidth' in arguments[0])
								args.lineWidth = arguments[0].lineWidth;
							if('strokeStyle' in arguments[0])
								args.strokeStyle = arguments[0].strokeStyle;
							if('lineCap' in arguments[0])
								args.lineCap = arguments[0].lineCap;
							if('lineJoin' in arguments[0])
								args.lineJoin = arguments[0].lineJoin;
							if('fillStyle' in arguments[0])
								args.fillStyle = arguments[0].fillStyle;
							if('font' in arguments[0])
								args.font = arguments[0].font;
							if('strokeStyle' in arguments[0])
								args.strokeStyle = arguments[0].strokeStyle;
							if('textAlign' in arguments[0])
								args.textAlign = arguments[0].textAlign;
							if('textBaseline' in arguments[0])
								args.textBaseline = arguments[0].textBaseline;
						}
						else
						{
							if(typeof lineWidth !== "undefined")
								args.lineWidth = lineWidth;
							if(typeof strokeStyle !== "undefined")
								args.strokeStyle = strokeStyle;
							if(typeof lineCap !== "undefined")
								args.lineCap = lineCap;
							if(typeof lineJoin !== "undefined")
								args.lineJoin = lineJoin;
							if(typeof fillStyle !== "undefined")
								args.fillStyle = fillStyle;
							if(typeof font !== "undefined")
								args.font = font;
							if(typeof strokeStyle !== "undefined")
								args.strokeStyle = strokeStyle;
							if(typeof textAlign !== "undefined")
								args.textAlign = textAlign;
							if(typeof textBaseline !== "undefined")
								args.textBaseline = textBaseline;
						}
						if(args.lineCap)
							this.context.lineCap = args.lineCap;
						if(args.lineWidth)
							this.context.lineWidth = args.lineWidth;
						if(args.lineJoin)
							this.context.lineJoin = args.lineJoin;
						if(args.strokeStyle)
							this.context.strokeStyle = args.strokeStyle;
						if(args.fillStyle)
							this.context.fillStyle = args.fillStyle;
						if(args.font)
							this.context.font = args.font;
						if(args.strokeStyle)
							this.context.strokeStyle = args.strokeStyle;
						if(args.textAlign)
							this.context.textAlign = args.textAlign;
						if(args.textBaseline)
							this.context.textBaseline = args.textBaseline;
				},
	setWidth: function(width)
				{
					this.canvas.setAttribute("width", width);
					this.width = width;
				},
	setHeight: function(height)
				{
					this.canvas.setAttribute("height", height);
					this.height = height;
				},
	closePath: function(stroke, lineWidth, strokeStyle, lineCap, lineJoin)
			{
				var args = {
					lineWidth:false,
					strokeStyle:false,
					lineCap:false,
					lineJoin:false,
					stroke:false,
				};
				if(arguments.length == 1)
				{
					if('lineWidth' in arguments[0])
						args.lineWidth = arguments[0].lineWidth;
					if('strokeStyle' in arguments[0])
						args.strokeStyle = arguments[0].strokeStyle;
					if('lineCap' in arguments[0])
						args.lineCap = arguments[0].lineCap;
					if('lineJoin' in arguments[0])
						args.lineJoin = arguments[0].lineJoin;
					if('stroke' in arguments[0])
						args.stroke = arguments[0].stroke;
				}
				else
				{
					if(typeof lineWidth !== "undefined")
						args.lineWidth = lineWidth;
					if(typeof strokeStyle !== "undefined")
						args.strokeStyle = strokeStyle;
					if(typeof lineCap !== "undefined")
						args.lineCap = lineCap;
					if(typeof lineJoin !== "undefined")
						args.lineJoin = lineJoin;
					if(typeof stroke !== "undefined")
						args.stroke = stroke;
				}
				this.context.closePath();
				if(stroke)
					this.stroke(args);
			},
	finish: function(lineWidth, strokeStyle, lineCap, lineJoin, fillStyle)
			{
				var args = {
					lineWidth:false,
					strokeStyle:false,
					lineCap:false,
					lineJoin:false,
					fillStyle:false,
				};
				if(arguments.length == 1)
				{
					if('lineWidth' in arguments[0])
						args.lineWidth = arguments[0].lineWidth;
					if('strokeStyle' in arguments[0])
						args.strokeStyle = arguments[0].strokeStyle;
					if('lineCap' in arguments[0])
						args.lineCap = arguments[0].lineCap;
					if('lineJoin' in arguments[0])
						args.lineJoin = arguments[0].lineJoin;
					if('fillStyle' in arguments[0])
						args.fillStyle = arguments[0].fillStyle;
				}
				else
				{
					if(typeof lineWidth !== "undefined")
						args.lineWidth = lineWidth;
					if(typeof strokeStyle !== "undefined")
						args.strokeStyle = strokeStyle;
					if(typeof lineCap !== "undefined")
						args.lineCap = lineCap;
					if(typeof lineJoin !== "undefined")
						args.lineJoin = lineJoin;
					if(typeof fillStyle !== "undefined")
						args.fillStyle = fillStyle;
				}
				this.setContextStyles(args);
				if(args.fillStyle)
					this.context.fill();
				this.context.stroke();
			},
	drawLine : function(startX, startY, endX, endY, lineWidth, strokeStyle, lineCap, lineJoin)
				{
					var args = {
						startX:0,
						startY:0,
						endX:0,
						endY:0,
						lineWidth:false,
						strokeStyle:false,
						lineCap:false,
						lineJoin:false,
						stroke:false,
					};
					if(arguments.length == 1)
					{
						if('lineWidth' in arguments[0])
							args.lineWidth = arguments[0].lineWidth;
						if('strokeStyle' in arguments[0])
							args.strokeStyle = arguments[0].strokeStyle;
						if('lineCap' in arguments[0])
							args.lineCap = arguments[0].lineCap;
						if('lineJoin' in arguments[0])
							args.lineJoin = arguments[0].lineJoin;
						if('stroke' in arguments[0])
							args.stroke = arguments[0].stroke;
					}
					else
					{
						if(typeof lineWidth !== "undefined")
							args.lineWidth = lineWidth;
						if(typeof strokeStyle !== "undefined")
							args.strokeStyle = strokeStyle;
						if(typeof lineCap !== "undefined")
							args.lineCap = lineCap;
						if(typeof lineJoin !== "undefined")
							args.lineJoin = lineJoin;
						if(typeof stroke !== "undefined")
							args.stroke = stroke;
					}
					this.context.beginPath();
					this.moveTo(args.startX, args.startY);
					this.context.lineTo(args.endX, args.endY);
					this.finish(args);
				},
	moveTo : function(destX, destY)
				{
					var args = {
						destX:0,
						destY:0,
					};
					if(arguments.length == 1)
					{
						args.destX = arguments[0].destX;
						args.destY = arguments[0].destY;
					}
					else
					{
						args.destX = destX;
						args.destY = destY;
					}
					this.context.moveTo(args.destX, args.destY);
				},
	startPath : function(startX, startY, lineJoin)
				 {
				 	args = {
				 		startX: 0,
				 		startY: 0,
						lineWidth:false,
						strokeStyle:false,
						lineCap:false,
						lineJoin:false,
				 	}
					if(arguments.length == 1)
					{
						args.startX = arguments[0].startX;
						args.startY = arguments[0].startY;
						if('lineWidth' in arguments[0])
							args.lineWidth = arguments[0].lineWidth;
						if('strokeStyle' in arguments[0])
							args.strokeStyle = arguments[0].strokeStyle;
						if('lineCap' in arguments[0])
							args.lineCap = arguments[0].lineCap;
						if('lineJoin' in arguments[0])
							args.lineJoin = arguments[0].lineJoin;
						if('stroke' in arguments[0])
							args.stroke = arguments[0].stroke;
					}
					else
					{
						args.startX = startX;
						args.startY = startY;
						if(typeof lineWidth !== "undefined")
							args.lineWidth = lineWidth;
						if(typeof strokeStyle !== "undefined")
							args.strokeStyle = strokeStyle;
						if(typeof lineCap !== "undefined")
							args.lineCap = lineCap;
						if(typeof lineJoin !== "undefined")
							args.lineJoin = lineJoin;
						if(typeof stroke !== "undefined")
							args.stroke = stroke;
					}
					this.context.beginPath();
					this.context.moveTo(args.startX, args.startY);
					this.setContextStyles(args);
				 },
	lineTo :function(destX, destY, lineWidth, strokeStyle, lineCap, lineJoin)
			 {
					var args = {
						destX:0,
						destY:0,
						lineWidth:false,
						strokeStyle:false,
						lineCap:false,
				 		lineJoin: false,
						stroke:false,
					};
					if(arguments.length == 1)
					{
						args.destX = arguments[0].destX;
						args.destY = arguments[0].destY;
						if('lineWidth' in arguments[0])
							args.lineWidth = arguments[0].lineWidth;
						if('strokeStyle' in arguments[0])
							args.strokeStyle = arguments[0].strokeStyle;
						if('lineCap' in arguments[0])
							args.lineCap = arguments[0].lineCap;
						if('lineJoin' in arguments[0])
							args.lineJoin = arguments[0].lineJoin;
						if('stroke' in arguments[0])
							args.stroke = arguments[0].stroke;
					}
					else
					{
						args.destX = destX;
						args.destY = destY;
						if(typeof lineWidth !== "undefined")
							args.lineWidth = lineWidth;
						if(typeof strokeStyle !== "undefined")
							args.strokeStyle = strokeStyle;
						if(typeof lineCap !== "undefined")
							args.lineCap = lineCap;
						if(typeof lineJoin !== "undefined")
							args.lineJoin = lineJoin;
						if(typeof stroke !== "undefined")
							args.stroke = stroke;
					}
					this.setContextStyles(args);
					this.context.lineTo(args.destX, args.destY);
 			 },
 	drawArc : function(x, y, radius, startAngle, endAngle, counterClockwise, lineWidth, strokeStyle, lineCap, lineJoin)
				{
					var args = {
						x:0,
						y:0,
						radius:0,
						startAngle:0,
						endAngle:0,
						counterClockwise:false,
						lineWidth:false,
						strokeStyle:false,
						lineCap:false,
						stroke:false,
					};
					if(arguments.length == 1)
					{
						args.x = arguments[0].x;
						args.y = arguments[0].y;
						args.radius = arguments[0].radius;
						args.startAngle = arguments[0].startAngle;
						args.endAngle = arguments[0].endAngle;
						if('counterClockwise' in arguments[0])
							args.counterClockwise = arguments[0].counterClockwise;
						if('lineWidth' in arguments[0])
							args.lineWidth = arguments[0].lineWidth;
						if('strokeStyle' in arguments[0])
							args.strokeStyle = arguments[0].strokeStyle;
						if('lineCap' in arguments[0])
							args.lineCap = arguments[0].lineCap;
						if('lineJoin' in arguments[0])
							args.lineJoin = arguments[0].lineJoin;
						if('stroke' in arguments[0])
							args.stroke = arguments[0].stroke;
					}
					else
					{
						args.x = x;
						args.y = y;
						args.radius = radius;
						args.startAngle = startAngle;
						args.endAngle = endAngle;
						if(typeof counterClockwise !== "undefined")
							args.counterClockwise = counterClockwise;
						if(typeof lineWidth !== "undefined")
							args.lineWidth = lineWidth;
						if(typeof strokeStyle !== "undefined")
							args.strokeStyle = strokeStyle;
						if(typeof lineCap !== "undefined")
							args.lineCap = lineCap;
						if(typeof lineJoin !== "undefined")
							args.lineJoin = lineJoin;
						if(typeof stroke !== "undefined")
							args.stroke = stroke;
					}
					this.context.beginPath();
					this.context.arc(args.x, args.y, args.radius, args.startAngle, args.endAngle, args.counterClockwise);
					this.finish(args);
				},
	arcTo : function(x1, y1, x2, y2, radius, lineWidth, strokeStyle, lineCap, lineJoin)
				{
					var args = {
						x1:0,
						y1:0,
						x2:0,
						y2:0,
						radius:0,
						lineWidth:false,
						strokeStyle:false,
						lineCap:false,
						stroke:false,
					};
					if(arguments.length == 1)
					{
						args.x1 = arguments[0].x1;
						args.y1 = arguments[0].y1;
						args.x2 = arguments[0].x2;
						args.y2 = arguments[0].y2;
						args.radius = arguments[0].radius;
						if('lineWidth' in arguments[0])
							args.lineWidth = arguments[0].lineWidth;
						if('strokeStyle' in arguments[0])
							args.strokeStyle = arguments[0].strokeStyle;
						if('lineCap' in arguments[0])
							args.lineCap = arguments[0].lineCap;
						if('lineJoin' in arguments[0])
							args.lineJoin = arguments[0].lineJoin;
						if('stroke' in arguments[0])
							args.stroke = arguments[0].stroke;
					}
					else
					{
						args.x1 = x1;
						args.y1 = y1;
						args.x2 = x2;
						args.y2 = y2;
						args.radius = radius;
						if(typeof lineWidth !== "undefined")
							args.lineWidth = lineWidth;
						if(typeof strokeStyle !== "undefined")
							args.strokeStyle = strokeStyle;
						if(typeof lineCap !== "undefined")
							args.lineCap = lineCap;
						if(typeof lineJoin !== "undefined")
							args.lineJoin = lineJoin;
						if(typeof stroke !== "undefined")
							args.stroke = stroke;
					}
					this.context.arcTo(args.x1, args.y1, args.x2, args.y2, args.radius);
					this.setContextStyles(args);
				},
	drawArc3Points : function(x0, y0, x1, y1, x2, y2, radius, lineWidth, strokeStyle, lineCap, lineJoin)
				{
					var args = {
						x0:0,
						y0:0,
						x1:0,
						y1:0,
						x2:0,
						y2:0,
						radius:0,
						lineWidth:false,
						strokeStyle:false,
						lineCap:false,
						stroke:false,
					};
					if(arguments.length == 1)
					{
						args.x0 = arguments[0].x0;
						args.y0 = arguments[0].y0;
						args.x1 = arguments[0].x1;
						args.y1 = arguments[0].y1;
						args.x2 = arguments[0].x2;
						args.y2 = arguments[0].y2;
						args.radius = arguments[0].radius;
						if('lineWidth' in arguments[0])
							args.lineWidth = arguments[0].lineWidth;
						if('strokeStyle' in arguments[0])
							args.strokeStyle = arguments[0].strokeStyle;
						if('lineCap' in arguments[0])
							args.lineCap = arguments[0].lineCap;
						if('lineJoin' in arguments[0])
							args.lineJoin = arguments[0].lineJoin;
						if('stroke' in arguments[0])
							args.stroke = arguments[0].stroke;
					}
					else
					{
						args.x0 = x0;
						args.y0 = y0;
						args.x1 = x1;
						args.y1 = y1;
						args.x2 = x2;
						args.y2 = y2;
						args.radius = radius;
						if(typeof lineWidth !== "undefined")
							args.lineWidth = lineWidth;
						if(typeof strokeStyle !== "undefined")
							args.strokeStyle = strokeStyle;
						if(typeof lineCap !== "undefined")
							args.lineCap = lineCap;
						if(typeof lineJoin !== "undefined")
							args.lineJoin = lineJoin;
						if(typeof stroke !== "undefined")
							args.stroke = stroke;
					}
					this.context.beginPath();
					this.moveTo({destX: args.x0, destY: args.y0});
					this.context.arcTo(args.x1, args.y1, args.x2, args.y2, args.radius);
					this.finish(args);
				},
	quadCurveTo : function(x1, y1, x2, y2, lineWidth, strokeStyle, lineCap, lineJoin)
				{
					var args = {
						x1:0,
						y1:0,
						x2:0,
						y2:0,
						lineWidth:false,
						strokeStyle:false,
						lineCap:false,
						stroke:false,
					};
					if(arguments.length == 1)
					{
						args.x1 = arguments[0].x1;
						args.y1 = arguments[0].y1;
						args.x2 = arguments[0].x2;
						args.y2 = arguments[0].y2;
						if('lineWidth' in arguments[0])
							args.lineWidth = arguments[0].lineWidth;
						if('strokeStyle' in arguments[0])
							args.strokeStyle = arguments[0].strokeStyle;
						if('lineCap' in arguments[0])
							args.lineCap = arguments[0].lineCap;
						if('lineJoin' in arguments[0])
							args.lineJoin = arguments[0].lineJoin;
						if('stroke' in arguments[0])
							args.stroke = arguments[0].stroke;
					}
					else
					{
						args.x1 = x1;
						args.y1 = y1;
						args.x2 = x2;
						args.y2 = y2;
						if(typeof lineWidth !== "undefined")
							args.lineWidth = lineWidth;
						if(typeof strokeStyle !== "undefined")
							args.strokeStyle = strokeStyle;
						if(typeof lineCap !== "undefined")
							args.lineCap = lineCap;
						if(typeof lineJoin !== "undefined")
							args.lineJoin = lineJoin;
						if(typeof stroke !== "undefined")
							args.stroke = stroke;
					}
					this.context.quadraticCurveTo(args.x1, args.y1, args.x2, args.y2);
					this.setContextStyles(args);
				},
	quadCurve3Points : function(x0, y0, x1, y1, x2, y2, lineWidth, strokeStyle, lineCap, lineJoin)
				{
					var args = {
						x0:0,
						y0:0,
						x1:0,
						y1:0,
						x2:0,
						y2:0,
						lineWidth:false,
						strokeStyle:false,
						lineCap:false,
						stroke:false,
					};
					if(arguments.length == 1)
					{
						args.x0 = arguments[0].x0;
						args.y0 = arguments[0].y0;
						args.x1 = arguments[0].x1;
						args.y1 = arguments[0].y1;
						args.x2 = arguments[0].x2;
						args.y2 = arguments[0].y2;
						if('lineWidth' in arguments[0])
							args.lineWidth = arguments[0].lineWidth;
						if('strokeStyle' in arguments[0])
							args.strokeStyle = arguments[0].strokeStyle;
						if('lineCap' in arguments[0])
							args.lineCap = arguments[0].lineCap;
						if('lineJoin' in arguments[0])
							args.lineJoin = arguments[0].lineJoin;
						if('stroke' in arguments[0])
							args.stroke = arguments[0].stroke;
					}
					else
					{
						args.x0 = x0;
						args.y0 = y0;
						args.x1 = x1;
						args.y1 = y1;
						args.x2 = x2;
						args.y2 = y2;
						if(typeof lineWidth !== "undefined")
							args.lineWidth = lineWidth;
						if(typeof strokeStyle !== "undefined")
							args.strokeStyle = strokeStyle;
						if(typeof lineCap !== "undefined")
							args.lineCap = lineCap;
						if(typeof lineJoin !== "undefined")
							args.lineJoin = lineJoin;
						if(typeof stroke !== "undefined")
							args.stroke = stroke;
					}
					this.context.beginPath();
					this.moveTo({destX: args.x0, destY: args.y0});
					this.context.quadraticCurveTo(args.x1, args.y1, args.x2, args.y2);
					this.finish(args);
				},
	beizerCurveTo : function(x1, y1, x2, y2, x3, y3, lineWidth, strokeStyle, lineCap, lineJoin)
				{
					var args = {
						x1:0,
						y1:0,
						x2:0,
						y2:0,
						x3:0,
						y3:0,
						lineWidth:false,
						strokeStyle:false,
						lineCap:false,
						stroke:false,
					};
					if(arguments.length == 1)
					{
						args.x1 = arguments[0].x1;
						args.y1 = arguments[0].y1;
						args.x2 = arguments[0].x2;
						args.y2 = arguments[0].y2;
						args.x3 = arguments[0].x3;
						args.y3 = arguments[0].y3;
						if('lineWidth' in arguments[0])
							args.lineWidth = arguments[0].lineWidth;
						if('strokeStyle' in arguments[0])
							args.strokeStyle = arguments[0].strokeStyle;
						if('lineCap' in arguments[0])
							args.lineCap = arguments[0].lineCap;
						if('lineJoin' in arguments[0])
							args.lineJoin = arguments[0].lineJoin;
						if('stroke' in arguments[0])
							args.stroke = arguments[0].stroke;
					}
					else
					{
						args.x1 = x1;
						args.y1 = y1;
						args.x2 = x2;
						args.y2 = y2;
						args.x3 = x3;
						args.y3 = y3;
						if(typeof lineWidth !== "undefined")
							args.lineWidth = lineWidth;
						if(typeof strokeStyle !== "undefined")
							args.strokeStyle = strokeStyle;
						if(typeof lineCap !== "undefined")
							args.lineCap = lineCap;
						if(typeof lineJoin !== "undefined")
							args.lineJoin = lineJoin;
						if(typeof stroke !== "undefined")
							args.stroke = stroke;
					}
					this.context.bezierCurveTo(args.x1, args.y1, args.x2, args.y2, args.x3, args.y3);
					this.setContextStyles(args);
				},
	beizerCurve4Points : function(x0, y0, x1, y1, x2, y2, lineWidth, strokeStyle, lineCap, lineJoin)
				{
					var args = {
						x0:0,
						y0:0,
						x1:0,
						y1:0,
						x2:0,
						y2:0,
						x3:0,
						y3:0,
						lineWidth:false,
						strokeStyle:false,
						lineCap:false,
						stroke:false,
					};
					if(arguments.length == 1)
					{
						args.x0 = arguments[0].x0;
						args.y0 = arguments[0].y0;
						args.x1 = arguments[0].x1;
						args.y1 = arguments[0].y1;
						args.x2 = arguments[0].x2;
						args.y2 = arguments[0].y2;
						args.x3 = arguments[0].x3;
						args.y3 = arguments[0].y3;
						if('lineWidth' in arguments[0])
							args.lineWidth = arguments[0].lineWidth;
						if('strokeStyle' in arguments[0])
							args.strokeStyle = arguments[0].strokeStyle;
						if('lineCap' in arguments[0])
							args.lineCap = arguments[0].lineCap;
						if('lineJoin' in arguments[0])
							args.lineJoin = arguments[0].lineJoin;
						if('stroke' in arguments[0])
							args.stroke = arguments[0].stroke;
					}
					else
					{
						args.x0 = x0;
						args.y0 = y0;
						args.x1 = x1;
						args.y1 = y1;
						args.x2 = x2;
						args.y2 = y2;
						args.x3 = x3;
						args.y3 = y3;
						if(typeof lineWidth !== "undefined")
							args.lineWidth = lineWidth;
						if(typeof strokeStyle !== "undefined")
							args.strokeStyle = strokeStyle;
						if(typeof lineCap !== "undefined")
							args.lineCap = lineCap;
						if(typeof lineJoin !== "undefined")
							args.lineJoin = lineJoin;
						if(typeof stroke !== "undefined")
							args.stroke = stroke;
					}
					this.context.beginPath();
					this.moveTo({destX: args.x0, destY: args.y0});
					this.context.bezierCurveTo(args.x1, args.y1, args.x2, args.y2, args.x3, args.y3);
					this.finish(args);
				},
		rectangle:function(x, y, width, height, lineWidth, strokeStyle, lineCap, lineJoin, fillStyle)
		{
					var args = {
						x:0,
						y:0,
						width:0,
						height:0,
						lineWidth:false,
						strokeStyle:false,
						lineCap:false,
						fillStyle:false,
						stroke:false,
					};
					if(arguments.length == 1)
					{
						args.x = arguments[0].x;
						args.y = arguments[0].y;
						args.width = arguments[0].width;
						args.height = arguments[0].height;
						if('lineWidth' in arguments[0])
							args.lineWidth = arguments[0].lineWidth;
						if('strokeStyle' in arguments[0])
							args.strokeStyle = arguments[0].strokeStyle;
						if('lineCap' in arguments[0])
							args.lineCap = arguments[0].lineCap;
						if('lineJoin' in arguments[0])
							args.lineJoin = arguments[0].lineJoin;
						if('fillStyle' in arguments[0])
							args.fillStyle = arguments[0].fillStyle;
						if('stroke' in arguments[0])
							args.stroke = arguments[0].stroke;
					}
					else
					{
						args.x = x;
						args.y = y;
						args.width = width;
						args.height = height;
						if(typeof lineWidth !== "undefined")
							args.lineWidth = lineWidth;
						if(typeof strokeStyle !== "undefined")
							args.strokeStyle = strokeStyle;
						if(typeof lineCap !== "undefined")
							args.lineCap = lineCap;
						if(typeof lineJoin !== "undefined")
							args.lineJoin = lineJoin;
						if(typeof fillStyle !== "undefined")
							args.fillStyle = fillStyle;
						if(typeof stroke !== "undefined")
							args.stroke = stroke;
					}
					this.context.beginPath();
					this.context.rect(args.x, args.y, args.width, args.height);
					this.finish(args);
		},
		rectangle2Points:function(x1, y1, x2, y2, lineWidth, strokeStyle, lineCap, lineJoin, fillStyle)
		{
					var args = {
						x:0,
						y:0,
						width:0,
						height:0,
						lineWidth:false,
						strokeStyle:false,
						lineCap:false,
						fillStyle:false,
						stroke:false,
					};
					if(arguments.length == 1)
					{
						args.x = arguments[0].x1;
						args.y = arguments[0].y1;
						args.width = arguments[0].x2 - args.x;
						args.height = arguments[0].y2 - args.y;
						if('lineWidth' in arguments[0])
							args.lineWidth = arguments[0].lineWidth;
						if('strokeStyle' in arguments[0])
							args.strokeStyle = arguments[0].strokeStyle;
						if('lineCap' in arguments[0])
							args.lineCap = arguments[0].lineCap;
						if('lineJoin' in arguments[0])
							args.lineJoin = arguments[0].lineJoin;
						if('fillStyle' in arguments[0])
							args.fillStyle = arguments[0].fillStyle;
						if('stroke' in arguments[0])
							args.stroke = arguments[0].stroke;
					}
					else
					{
						args.x = x1;
						args.y = y1;
						args.width = x2 - x1;
						args.height = y2 - y1;
						if(typeof lineWidth !== "undefined")
							args.lineWidth = lineWidth;
						if(typeof strokeStyle !== "undefined")
							args.strokeStyle = strokeStyle;
						if(typeof lineCap !== "undefined")
							args.lineCap = lineCap;
						if(typeof lineJoin !== "undefined")
							args.lineJoin = lineJoin;
						if(typeof fillStyle !== "undefined")
							args.fillStyle = fillStyle;
						if(typeof stroke !== "undefined")
							args.stroke = stroke;
					}
					this.context.beginPath();
					this.context.rect(args.x, args.y, args.width, args.height);
					this.finish(args);
		},
		circle:function(x, y, radius, lineWidth, strokeStyle, lineCap, lineJoin, fillStyle)
		{
					var args = {
						x:0,
						y:0,
						startAngle:0,
						endAngle: 2 * Math.PI,
						radius:0,
						lineWidth:false,
						strokeStyle:false,
						lineCap:false,
						fillStyle:false,
						stroke:false,
					};
					if(arguments.length == 1)
					{
						args.x = arguments[0].x;
						args.y = arguments[0].y;
						args.radius = arguments[0].radius;
						if('lineWidth' in arguments[0])
							args.lineWidth = arguments[0].lineWidth;
						if('strokeStyle' in arguments[0])
							args.strokeStyle = arguments[0].strokeStyle;
						if('lineCap' in arguments[0])
							args.lineCap = arguments[0].lineCap;
						if('lineJoin' in arguments[0])
							args.lineJoin = arguments[0].lineJoin;
						if('fillStyle' in arguments[0])
							args.fillStyle = arguments[0].fillStyle;
						if('stroke' in arguments[0])
							args.stroke = arguments[0].stroke;
					}
					else
					{
						args.x = x;
						args.y = y;
						args.radius = radius;
						if(typeof lineWidth !== "undefined")
							args.lineWidth = lineWidth;
						if(typeof strokeStyle !== "undefined")
							args.strokeStyle = strokeStyle;
						if(typeof lineCap !== "undefined")
							args.lineCap = lineCap;
						if(typeof lineJoin !== "undefined")
							args.lineJoin = lineJoin;
						if(typeof fillStyle !== "undefined")
							args.fillStyle = fillStyle;
						if(typeof stroke !== "undefined")
							args.stroke = stroke;
					}
					this.context.beginPath();
					this.drawArc(args);
					this.finish(args);
		},
		semiCircle:function(x, y, radius, rotation, lineWidth, strokeStyle, lineCap, lineJoin, fillStyle)
		{
					var args = {
						x:0,
						y:0,
						startAngle:0,
						endAngle: Math.PI,
						radius:0,
						lineWidth:false,
						strokeStyle:false,
						lineCap:false,
						fillStyle:false,
						stroke:false,
					};
					if(arguments.length == 1)
					{
						args.x = arguments[0].x;
						args.y = arguments[0].y;
						args.radius = arguments[0].radius;
						if('rotation' in arguments[0])
						{
							args.startAngle += arguments[0].rotation;
							args.endAngle += arguments[0].rotation;
						}
						if('lineWidth' in arguments[0])
							args.lineWidth = arguments[0].lineWidth;
						if('strokeStyle' in arguments[0])
							args.strokeStyle = arguments[0].strokeStyle;
						if('lineCap' in arguments[0])
							args.lineCap = arguments[0].lineCap;
						if('lineJoin' in arguments[0])
							args.lineJoin = arguments[0].lineJoin;
						if('fillStyle' in arguments[0])
							args.fillStyle = arguments[0].fillStyle;
						if('stroke' in arguments[0])
							args.stroke = arguments[0].stroke;
					}
					else
					{
						args.x = x;
						args.y = y;
						args.radius = radius;
						if(typeof rotation !== "undefined")
						{
							args.startAngle += rotation;
							args.endAngle += rotation;
						}
						if(typeof lineWidth !== "undefined")
							args.lineWidth = lineWidth;
						if(typeof strokeStyle !== "undefined")
							args.strokeStyle = strokeStyle;
						if(typeof lineCap !== "undefined")
							args.lineCap = lineCap;
						if(typeof lineJoin !== "undefined")
							args.lineJoin = lineJoin;
						if(typeof fillStyle !== "undefined")
							args.fillStyle = fillStyle;
						if(typeof stroke !== "undefined")
							args.stroke = stroke;
					}
					this.context.beginPath();
					this.drawArc(args);
					this.finish(args);
		},
	linearGradient: function (x1, y1, x2, y2, gradientStops)
		{
			args = {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				gradientStops: null,
			}
			if(arguments.length == 1)
			{
				args.x1 = arguments[0].x1;
				args.y1 = arguments[0].y1;
				args.x2 = arguments[0].x2;
				args.y2 = arguments[0].y2;
				args.gradientStops = arguments[0].gradientStops;
			}
			else
			{
				args.x1 = x1;
				args.y1 = y1;
				args.x2 = x2;
				args.y2 = y2;
				args.gradientStops = gradientStops;
			}
			var linearGradient = this.context.createLinearGradient(args.x1, args.y1, args.x2, args.y2);
			for(var i = 0; i < args.gradientStops.length; i++)
			{
				linearGradient.addColorStop(args.gradientStops[i].offset, args.gradientStops[i].color);
			}
			this.finish({fillStyle:linearGradient});
		},
	radialGradient: function (x1, y1, r1, x2, y2, r2, gradientStops)
		{
			args = {
				x1: 0,
				y1: 0,
				r1: 0,
				x2: 0,
				y2: 0,
				r2: 0,
				gradientStops: null,
			}
			if(arguments.length == 1)
			{
				args.x1 = arguments[0].x1;
				args.y1 = arguments[0].y1;
				args.r1 = arguments[0].r1;
				args.x2 = arguments[0].x2;
				args.y2 = arguments[0].y2;
				args.r2 = arguments[0].r2;
				args.gradientStops = arguments[0].gradientStops;
			}
			else
			{
				args.x1 = x1;
				args.y1 = y1;
				args.r1 = r1;
				args.x2 = x2;
				args.y2 = y2;
				args.r2 = r2;
				args.gradientStops = gradientStops;
			}
			var radialGradient = this.context.createRadialGradient(args.x1, args.y1, args.r1, args.x2, args.y2, args.r2);
			for(var i = 0; i < args.gradientStops.length; i++)
			{
				radialGradient.addColorStop(args.gradientStops[i].offset, args.gradientStops[i].color);
			}
			this.finish({fillStyle:radialGradient});
		},
	pattern: function (imgSrc, fillStyle)
		{
			args = {
				imgSrc: null,
				fillStyle: null,
			}
			if(arguments.length == 1)
			{
				args.imgSrc = arguments[0].imgSrc;
				args.fillStyle = arguments[0].fillStyle;
			}
			else
			{
				args.imgSrc = imgSrc;
				args.fillStyle = fillStyle;
			}
			var imageObj = new Image();
			var context = this.context;
			var finish = this.finish;
			imageObj.onload = function(){
				var pattern = context.createPattern(imageObj, args.fillStyle);
				context.fillStyle = pattern;
				context.fill();
			};
			imageObj.src = args.imgSrc;
		},
	patternElem: function (elemId, fillStyle)
		{
			args = {
				elem: null,
				fillStyle: null,
			}
			if(arguments.length == 1)
			{
				args.elem = document.getElementById(arguments[0].elemId);
				args.fillStyle = arguments[0].fillStyle;
			}
			else
			{
				args.elem = document.getElementById(elemId);
				args.fillStyle = fillStyle;
			}
			this.context.createPattern(args.elem, args.fillStyle);
			this.context.fillStyle = pattern;
			this.context.fill();
		},
	genPatternFromElem: function (elemId, fillStyle)
		{
			args = {
				elem: null,
				fillStyle: null,
			}
			if(arguments.length == 1)
			{
				args.elem = document.getElementById(arguments[0].elemId);
				args.fillStyle = arguments[0].fillStyle;
			}
			else
			{
				args.elem = document.getElementById(elemId);
				args.fillStyle = fillStyle;
			}
			return this.context.createPattern(args.elem, args.fillStyle);
		},
	drawImage: function (imgSrc, x, y, width, height, sx, sy, swidth, sheight)
		{
			args = {
				x:0,
				y:0,
				width:false,
				height:false,
				sx:false,
				sy:false,
				swidth:false,
				sheight:false,
				imgSrc: null,
			}
			if(arguments.length == 1)
			{
				args.imgSrc = arguments[0].imgSrc;
				args.x = arguments[0].x;
				args.y = arguments[0].y;
				
				if('width' in arguments[0])
					args.width = arguments[0].width;
				if('height' in arguments[0])
					args.height = arguments[0].height;
				if('swidth' in arguments[0])
					args.swidth = arguments[0].swidth;
				if('sheight' in arguments[0])
					args.sheight = arguments[0].sheight;
				if('sx' in arguments[0])
					args.sx = arguments[0].sx;
				if('sy' in arguments[0])
					args.sy = arguments[0].sy;
			}
			else
			{
				args.imgSrc = imgSrc;
				args.x = x;
				args.y = y;
				
				if(typeof width !== "undefined")
					args.width = width;
				if(typeof height !== "undefined")
					args.height = height;
				if(typeof swidth !== "undefined")
					args.swidth = swidth;
				if(typeof sheight !== "undefined")
					args.sheight = sheight;
				if(typeof sx !== "undefined")
					args.sx = sx;
				if(typeof sy !== "undefined")
					args.sy = sy;
			}
			var imageObj = new Image();
			var context = this.context;
			imageObj.onload = function(){
				if(args.width == false)
					context.drawImage(imageObj, args.x, args.y);
				else if(args.swidth == false)
					context.drawImage(imageObj, args.x, args.y, args.width, args.height);
				else
					context.drawImage(imageObj, args.sx, args.sy, args.swidth, args.sheight, args.x, args.y, args.width, args.height);
			};
			imageObj.src = args.imgSrc;
		},
	drawImageElement: function (imgElemId, x, y, width, height, sx, sy, swidth, sheight)
		{
			args = {
				x:0,
				y:0,
				width:false,
				height:false,
				sx:false,
				sy:false,
				swidth:false,
				sheight:false,
				imgElemId: null,
			}
			if(arguments.length == 1)
			{
				args.imgElemId = document.getElementById(arguments[0].imgElemId);
				args.x = argumentsp[0].x;
				args.y = argumentsp[0].y;
				
				if('width' in arguments[0])
					args.width = arguments[0].width;
				if('height' in arguments[0])
					args.height = arguments[0].height;
				if('swidth' in arguments[0])
					args.swidth = arguments[0].swidth;
				if('sheight' in arguments[0])
					args.sheight = arguments[0].sheight;
				if('sx' in arguments[0])
					args.sx = arguments[0].sx;
				if('sy' in arguments[0])
					args.sy = arguments[0].sy;
			}
			else
			{
				args.imgElemId = document.getElementById(imgElemId);
				args.x = x;
				args.y = y;
				
				if(typeof width !== "undefined")
					args.width = width;
				if(typeof height !== "undefined")
					args.height = height;
				if(typeof swidth !== "undefined")
					args.swidth = swidth;
				if(typeof sheight !== "undefined")
					args.sheight = sheight;
				if(typeof sx !== "undefined")
					args.sx = sx;
				if(typeof sy !== "undefined")
					args.sy = sy;
			}
			var imageObj = new Image();
			if(args.width == false)
				this.context.drawImage(args.imgElemId, args.x, args.y);
			else if(args.swidth == false)
				this.context.drawImage(args.imgElemId, args.x, args.y, args.width, args.height);
			else
				this.context.drawImage(args.imgElemId, args.sx, args.sy, args.swidth, args.sheight, args.x, args.y, args.width, args.height);
		},
	drawText: function(text, x, y, font, fillStyle, strokeStyle, lineWidth, textAlign, textBaseline)
		{
			args = {
				text: "",
				x: 0,
				y: 0,
				font: false,
				fillStyle: false,
				strokeStyle: false,
				lineWidth: false,
				textAlign: false,
				textBaseline: false,
			}
			if(arguments.length == 1)
			{
				args.x = arguments[0].x;
				args.y = arguments[0].y;
				args.text = arguments[0].text;
				if('font' in arguments[0])
					args.font = arguments[0].font;
				if('fillStyle' in arguments[0])
					args.fillStyle = arguments[0].fillStyle;
				if('strokeStyle' in arguments[0])
					args.strokeStyle = arguments[0].strokeStyle;
				if('lineWidth' in arguments[0])
					args.lineWidth = arguments[0].lineWidth;
				if('textAlign' in arguments[0])
					args.textAlign = arguments[0].textAlign;
				if('textBaseline' in arguments[0])
					args.textBaseline = arguments[0].textBaseline;
			}
			else
			{
				args.x = x;
				args.y = y;
				args.text = text;
				if(typeof font !== "undefined")
					args.font = font;
				if(typeof fillStyle !== "undefined")
					args.fillStyle = fillStyle;
				if(typeof strokeStyle !== "undefined")
					args.strokeStyle = strokeStyle;
				if(typeof lineWidth !== "undefined")
					args.lineWidth = lineWidth;
				if(typeof textAlign !== "undefined")
					args.textAlign = textAlign;
				if(typeof textBaseline !== "undefined")
					args.textBaseline = textBaseline;
			}
			this.setContextStyles(args);
			if(!args.strokeStyle)
				this.context.fillText(args.text, args.x, args.y);
			else
			{
				if(args.fillStyle)
					this.context.fillText(args.text, args.x, args.y);
				this.context.strokeText(args.text, args.x, args.y);
			}
		},
	measureText: function(text)
		{
			args = {
				text:"",
			}
			if(arguments.length == 1)
			{
				args.text = arguments[0].text;
			}
			else
			{
				args.text = text;
			}
			return this.context.measureText(text).width;
		},
	writeWrapText: function(text, x, y, maxWidth, lineHeight, font, fillStyle, strokeStyle, lineWidth, textAlign, textBaseline)
		{
			var args = {
				text:"",
				x:0,
				y:0,
				maxWidth:0,
				lineHeight:0,
				font: false,
				fillStyle: false,
				strokeStyle: false,
				lineWidth: false,
				textAlign: false,
				textBaseline: false,
			};
			if(arguments.length == 1)
			{
				args.x = arguments[0].x;
				args.y = arguments[0].y;
				args.text = arguments[0].text;
				args.maxWidth = arguments[0].maxWidth;
				args.lineHeight = arguments[0].lineHeight;
				if('font' in arguments[0])
					args.font = arguments[0].font;
				if('fillStyle' in arguments[0])
					args.fillStyle = arguments[0].fillStyle;
				if('strokeStyle' in arguments[0])
					args.strokeStyle = arguments[0].strokeStyle;
				if('lineWidth' in arguments[0])
					args.lineWidth = arguments[0].lineWidth;
				if('textAlign' in arguments[0])
					args.textAlign = arguments[0].textAlign;
				if('textBaseline' in arguments[0])
					args.textBaseline = arguments[0].textBaseline;
			}
			else
			{
				args.x = x;
				args.y = y;
				args.text = text;
				args.maxWidth = maxWidth;
				args.lineHeight = lineHeight;
				if(typeof font !== "undefined")
					args.font = font;
				if(typeof fillStyle !== "undefined")
					args.fillStyle = fillStyle;
				if(typeof strokeStyle !== "undefined")
					args.strokeStyle = strokeStyle;
				if(typeof lineWidth !== "undefined")
					args.lineWidth = lineWidth;
				if(typeof textAlign !== "undefined")
					args.textAlign = textAlign;
				if(typeof textBaseline !== "undefined")
					args.textBaseline = textBaseline;
			}
			var words = args.text.split(' ');
			var line = words[0] + " ";
			for(var n = 1; n < words.length; n++)
			{
				var testLine = line + words[n] + " ";
				var width = this.measureText(testLine);
				if(width > args.maxWidth)
				{
					this.drawText({
						text: line,
						x: args.x,
						y: args.y,
						font: args.font,
						fillStyle: args.fillStyle,
						strokeStyle: args.strokeStyle,
						lineWidth: args.lineWidth,
						textAlign: args.textAlign,
						textBaseline: args.textBaseline,
					});
					line = words[n] + ' ';
					args.y += args.lineHeight;
				}
				else
					line = testLine;
			}
			this.drawText({
					text: line,
					x: args.x,
					y: args.y,
					font: args.font,
					fillStyle: args.fillStyle,
					strokeStyle: args.strokeStyle,
					lineWidth: args.lineWidth,
					textAlign: args.textAlign,
					textBaseline: args.textBaseline,
				});
		},
    clear: function()
        {
            this.context.clearRect(0,0,this.width, this.height);
        },
}

function GradientStop(offset, color)
{
	if(arguments.length == 1)
	{
		this.offset = arguments[0].offset;
		this.color = arguments[0].color;
	}
	else
	{
		this.offset = offset;
		this.color = color;
	}
}
