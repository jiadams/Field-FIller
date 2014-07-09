$(document).ready(function(){
	$('#autofill').ready(function() {
		fieldFiller();
		console.log ('fieldFiller Run');
		selectorFiller();
		console.log ('Selectorfiller Run');
		textareaFiller ();
		console.log('textareas Filled')
	});		
	function fieldFiller() {
		console.log('thefunction is calling');
		$("input[type='text']").each(function() {
			var FieldID = $(this).attr('name');
			console.log ('Field ID has been stored');
			$(this).val(FieldID);
			console.log ('Value has been changed');
			$(this).focus();
			console.log ('select',FieldID);
		});
	}
	function selectorFiller() {
		$("select[class='editselect'").each(function() {
			var SelectID = $(this).attr('name');
			console.log ('var',SelectID);
			$('select[name='+SelectID+'] option:eq(3)').attr('selected', 'selected');
			$(this).focus();
			console.log ('select',SelectID);
		});
	}
	function textareaFiller() {
		$("textarea[class='edit']").each(function() {
			var textAreaID = $(this).attr('name');
			console.log ('var',textAreaID);
			$(this).val(textAreaID);
			$(this).focus();
		});
	}
});
