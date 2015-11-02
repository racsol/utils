/**
  * Move caret to the end of textarea
  */
public static moveCaretToEnd(element:HTMLTextAreaElement):void {
	element.focus();
	element.setSelectionRange(element.value.length,element.value.length);
	element.scrollTop = element.scrollHeight;
	element.scrollLeft = element.scrollWidth;
}