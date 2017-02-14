
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1  
	alert("yowch! don\'t click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
	  // TASK #2
	var runningTotal = 0
	var double = parseInt(document.querySelector("#compoundInvestment").innerHTML)
	runningTotal = runningTotal + (double * 2)
	console.log(runningTotal)
	document.querySelector("#compoundInvestment").innerHTML = runningTotal
})




document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
	var colorChange = document.querySelector("#circle-bw") 
	if(colorChange.style.background === "black"){
		colorChange.style.background = "white"
	}
	else {
		colorChange.style.background = "black"
	}

})




document.querySelector("#blow-up button").addEventListener('click', function(){
  // TASK #4}
  var sizeChange = document.querySelector(".circle-red")
  	var styleObj = window.getComputedStyle(sizeChange)
	console.log(styleObj.width)
	var doubleWidthInt = parseInt(styleObj.width) * 2
	if(parseInt(sizeChange.style.width) <= 320){
		sizeChange.style.width = doubleWidthInt + "px"
		var doubleHeightInt = parseInt(styleObj.height) * 2
		sizeChange.style.height = doubleHeightInt + "px"
	}
	else{
		sizeChange.style.width = '40px'
		sizeChange.style.height = '40px'
	}
	
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var removeInactive = document.querySelector("#userList")
  var liArray = removeInactive.children
  for (var index = 0; index < liArray.length; index = index + 1) {
      if(liArray[index].classList.contains('inactive')) {
        removeInactive.removeChild(liArray[index]) 
        index = index - 1
      }
  }
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var flipSquares = document.querySelector("#reverse-squares .answer-box")
  console.log("children", flipSquares.children)

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})