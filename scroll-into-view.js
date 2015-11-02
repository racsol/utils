/**
  * Static method to move elements into view in a list vertical list 
  */
function scrollIntoView(parent, el){
	var parentBCR = parent.getBoundingClientRect();
	var elBCR = el.getBoundingClientRect();
	var x = elBCR.top - parentBCR.top;
	var y = parentBCR.height - elBCR.height;
	if(x < 0){
		parent.scrollTop += x;
	}else if(x > y){
		parent.scrollTop += (x - y);
	}
}