//Pattern Code//
	var changeOpacity = function(patternUnit){
		patternUnit.style.opacity = 1;

	}
    
    var getLines = function() {
        var lines = "";
        for(var j = 0; j < 19; j++) {
			var changeColor = (j / 19) * 255;
			var changeAngle = 90 + (10 * j);
			lines += `<div class="patternUnit" 
			               style="opacity: 0; height: 130px; background-color: rgb(${255 - changeColor}, 0, ${changeColor}); 
			               transform: rotate(${changeAngle}deg);">
			          </div>`;
		}
    	return lines;

    	
    }
	
	var getCollection = function(lines, ii) {
		//console.log(i);
		var collection = `<div id="collection-${ii}" class="myCollection" 
		                       style="transform: rotate(${ii * 180}deg);">${lines}
		                  </div>`;
        return collection;
	}

	var appendToX = function(id, lines) {
        var collection = getCollection(lines, i);

		document.getElementById(id).insertAdjacentHTML('beforeend', collection);

        var collectionId = `collection-${i}`;
		var lines_ = document.querySelectorAll(`#${collectionId} .patternUnit`);

		for (var k = 0; k < lines_.length; k++) {
		    setTimeout(changeOpacity, 200 * k, lines_[k]);
	    }

	    collectionClicks(collectionId);

		i = i + 1;
	}

    var i = 0;
    var lines = getLines();
    var myinterval = setInterval(appendToX, 300, "line", lines);
    setTimeout(function(){
    	clearInterval(myinterval);
    }, 10000);

  

//Event Code

	var backgroundColorChange = function(event){
		var browserWidth = window.innerWidth;
		var browerHeight = window.innerHeight;
		var body = document.querySelector("body");
		var percertageX = event.pageX/browserWidth;
		var percertageY = event.pageY/browerHeight;
		var black = 0 + (50 * percertageX);
		var red = 0 + (50 * percertageY);
		
		body.style.backgroundColor = `rgb(${black},${black},${black})`;
		console.log(body.style.backgroundColor);
	}

	//window.addEventListener("mousemove", backgroundColorChange);

	var backgroundOpacityChange = function(event){
		var browserHeight = window.innerHeight;
		var body = document.querySelector("body");
		var percertageY = event.pageY/browserHeight;
		var backgroundOpacity = 1 * percertageY;

		body.style.opacity = backgroundOpacity;
		console.log(backgroundOpacity);
	}

	//window.addEventListener("mousemove", backgroundOpacityChange);

	// var linemarginChange = function(){
	// 	var linemargin = document.querySelectorAll(".patternUnit");
	// 	if(keypressed && keycode = 'right'){
	// 		linemargin++;
	// 	}
	// }

	var collectionAngleChange = function(thisCollectionElement){
		console.log("hello!", thisCollectionElement)
		var isClicked = false;
		


		var collectionAngle = thisCollectionElement.style.transform += "rotate(45deg)";
		// if(isClicked === !isClicked){
		// 	collectionAngle += "rotate(180deg)";
		// } 
	}

	// window.addEventListener("click", collectionAngleChange);


	var collectionClicks = function(thisCollectionId){
		var thisCollectionElement = document.querySelector(`#${thisCollectionId}`); //('#' + thisCollectionId)
		thisCollectionElement.addEventListener("click", function(){
			collectionAngleChange(thisCollectionElement)
		})			
	}

	var slider = document.getElementById("slider");
	//var singleLines = document.querySelectorAll(".patternUnit");
	

	var changeLinesHeight = function() {
		var singleLines = document.querySelectorAll(".patternUnit");
		// var frameHeight = document.querySelectorAll(".myCollection");
		var linesHeight = slider.value;
		for (var i = 0; i < singleLines.length; i++) {
			singleLines[i].style.height = linesHeight + "px";
			// frameHeight[i].style.height = linesHeight + "px";
		}
		console.log(slider.value);
	}

	slider.addEventListener("input", changeLinesHeight);

	var hideSlider = function() {
		slider.style.opacity = 0;
	}

	var x;
	document.addEventListener("mousemove", function() {
		slider.style.opacity = 1;

		if (x) {
			clearTimeout(x);
		}
		x = setTimeout(hideSlider, 1200);
	})



