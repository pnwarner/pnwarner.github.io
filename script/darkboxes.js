var grayTable = {};
var quadrant = 1;
var currentArea = 0;
var currentVisibleElements = 0;
var maxVisibleElements = 20;
var activeBoxes = [];
var logoTolerance = 3;
var prevLogoOffset;
var menuClicked = false;

function makeGrayTable(){
	var position = 0;
	var grayCounter = 0;
	do {
		if (grayCounter == 256){
			grayTable[position]='rgb(255,255,255)';
			return;
		}
		grayTable[position]='rgb(' + grayCounter + ',' + grayCounter + ',' + grayCounter + ')';
		position++;
		grayCounter += 8;
	}while(grayCounter <= 256)
}
			
function createQuadrants(gridArea){
	var nameString = 'area' + gridArea;
	var newNameString = 'area' + (currentArea + 1);
	var idString =  'q' + quadrant;
	var elementToWorkIn = document.getElementsByClassName(nameString);
	elementToWorkIn[0].innerHTML += '<div class="' + newNameString + '" id="' + idString + '"></div>';
	currentArea++;
	if (quadrant==4){
		quadrant=1;
		return;
	} else {
		quadrant++;
	}
	createQuadrants(gridArea);
}
			
function addQuadrantClass(gridArea){
	var elementName = 'area' + gridArea;
	var elementToWorkIn = document.getElementsByClassName(elementName);
	elementToWorkIn[0].classList.add('quadrant');
}
			
function makeGrid(gridArea){
	if (gridArea==0){
		var mainArea = document.getElementById('dark_boxes');
		mainArea.innerHTML = '<div class="inh_full_area area0" id="main"></div>';
	}
	addQuadrantClass(gridArea);
	createQuadrants(gridArea);
}
			
function loopGrid(numOfTimes){
	for(var x = 0; x < numOfTimes; x++){
		makeGrid(x+1);
	}
}

function showLogo(){
	var logoDiv = document.getElementsByClassName('dark_boxes_logo');
	logoDiv[0].innerHTML += '<img id="dark_boxes_img" src="include/media/template/paradoxresearch/ident_medium-light.svg" style="position: absolute; height: 0; width: auto; z-index: 2; opacity: 0.8;" />';
	logoDiv[0].innerHTML += '<p style="position: absolute; font-size: 3em;" id="dark_boxes_logo_name">Paradox Research</p>';
	var logoImg = document.getElementById('dark_boxes_img');
	var headerNavBar = document.getElementById('nav_bar');
	var logoText = document.getElementById('dark_boxes_logo_name');
	var interval = setInterval(function() {
		//make logo same height as parent element
		var divHeight = logoDiv[0].offsetHeight;
		var offsetHeight = Math.floor(divHeight * 0.8);
		//get the height of the nav bar too, so the img stays in the banner area
		var navHeight =  headerNavBar.offsetHeight;
		var logoTextHeight = logoText.offsetHeight;
		var logoImgWidth = logoImg.offsetWidth;
		var topOffset = Math.floor(divHeight * 0.1);
		if ((window.matchMedia("(orientation: portrait)").matches) && (logoDiv[0].offsetWidth < 545)) {
			var logoTextOffsetTop = Math.floor((divHeight * 0.125)+(logoTextHeight * 0.125)+navHeight);
			logoImg.style.left = '10px';
			var logoTextOffsetLeft = Math.floor(logoImgWidth + 20);
		}else{
			var logoTextOffsetTop = Math.floor((divHeight * 0.25)+(logoTextHeight * 0.25)+navHeight);
			var imgOffsetLeft = Math.floor(((logoDiv[0].offsetWidth * 0.5)-(logoImg.offsetWidth * 0.5))-(logoText.offsetWidth * 0.5));
			logoTextOffsetLeft = imgOffsetLeft + logoImg.offsetWidth + 10;
			//console.log("set at: " + imgOffsetLeft);
			//console.log("prev offset: " + prevLogoOffset);
			//console.log("diff: " + (imgOffsetLeft - prevLogoOffset));
			if (prevLogoOffset == 0){
				prevLogoOffset = imgOffsetLeft;
				logoImg.style.left = imgOffsetLeft + 'px';
				//NEED TO SET TOLERANCE RANGE!!
			} else if (((imgOffsetLeft - prevLogoOffset) <= logoTolerance) && (((imgOffsetLeft - prevLogoOffset)* -1) <= logoTolerance)){
				//do nothing
				//console.log("Too much");
			} else if (((imgOffsetLeft - prevLogoOffset) >= (logoTolerance) && ((imgOffsetLeft - prevLogoOffset)* -1) >= logoTolerance * -1)){
				//do nothing
				//console.log("Too little");
			} else {
				prevLogoOffset = imgOffsetLeft;
				logoImg.style.left = imgOffsetLeft + 'px';
			} 
		}
		//console.log("Image offset: " + (topOffset + navHeight));
		logoImg.style.height = offsetHeight + 'px';
		logoImg.style.top = (topOffset + navHeight) + 'px';
		logoText.style.left = logoTextOffsetLeft + 'px';
		logoText.style.top = logoTextOffsetTop + 'px';
	},10);
}

function startBoxShow(){
	var interval = setInterval(function() {
		if(currentVisibleElements < maxVisibleElements){
			currentVisibleElements++;
			var randAreaNum = getValidAreaNumber();
			fadeElementInAndOut(randAreaNum);
		}
		//clearInterval(interval); //Turns timer off
	}, 325);
}

function fadeElementInAndOut(areaNumber){
	var blah = document.getElementsByClassName('area'+areaNumber);
	blah[0].style.opacity='0';
	var randomColorNum=randomNumber(0,32);
	var randomColor=grayTable[randomColorNum];
	blah[0].style.backgroundColor = randomColor;
	fadeIn(blah[0], function(){
		fadeOut(blah[0], function(){
			clearElement(blah[0]);
			removeA(activeBoxes,areaNumber);
		});
	});
}
			
function clearElement(element){
	setTimeout(function(){
		element.removeAttribute("style");
		currentVisibleElements--;
	}, 1);
}
			
function fadeIn(element, callback){
	var randTime=randomNumber(15,100);
	var op = 0;
	var timer = setInterval(function () {
		if (op >= 1){
			clearInterval(timer);
			callback();
		}
		element.style.opacity = op;
		op += 0.01;
	}, randTime);
}
			
function fadeOut(element, callback){
	var randTime=randomNumber(15,100);
	var op = 1;  // initial opacity
	var timer = setInterval(function () {
		if (op <= 0){
			clearInterval(timer);
			callback();
		}
		element.style.opacity = op;
		op -= 0.01;
	}, randTime);			
}
			
function randomNumber(minInt, maxInt){
	var randomNum =Math.floor(Math.random() * (+maxInt - +minInt)) + +minInt; 
	return randomNum;
}
			
function getValidAreaNumber(){
	var i = 0;
	var arrayItemExists = true;
	do{
		var randAreaNum=randomNumber(1,84);
		var y = activeBoxes.includes(randAreaNum);
		if(y){
			arrayItemExists = true;
		} else {
			arrayItemExists = false;
		}
	}while(arrayItemExists);
	activeBoxes.push(randAreaNum);
	return randAreaNum;
}

function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

function main(){
	makeGrid(0);
	loopGrid(20);
	makeGrayTable();
	//showLogo();
	startBoxShow();
}

main();