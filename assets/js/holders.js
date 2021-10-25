(function ($) {
	$(document).ready(function() {
		$.get("http://www.whateverorigin.org/get?url=" + encodeURIComponent("https://etherscan.io/token/0xcd7492db29e2ab436e819b249452ee1bbdf52214"), function(response) {
			$("#holder_count").html($(response).find("#ContentPlaceHolder1_tr_tokenHolders").find(".mr-3").html().trim().split(' ')[0]);
		});
	});
})(jQuery);	

