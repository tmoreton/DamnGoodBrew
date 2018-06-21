// Start Mobile Nav Function
$('#open-nav').click(function(){
	$('#nav').removeClass("hidden-mobile");
	$('#open-nav').addClass("hidden");
	$('#close-nav').removeClass("hidden");
});

$('#close-nav').click(function(){
	$('#nav').addClass("hidden-mobile");
	$('#open-nav').removeClass("hidden");
	$('#close-nav').addClass("hidden");
});
// End Mobile Nav Function

// Start Modal Function
$('.open-modal').click(function(){
	$('#modal').removeClass("hidden");
});

$('#close-modal').click(function(){
	$('#modal').addClass("hidden");
});
// End Modal Function