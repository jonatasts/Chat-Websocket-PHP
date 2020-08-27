$(document).ready(function () {
    $('#action_menu_btn').click(function () {
        $('.action_menu').toggle();
    });
});

//TABLE ->Write on keyup event of keyword input element
$("#search").keyup(function () {
	if ($("#search").val() != "") {
		_this = this;
		// Show only matching TR, hide rest of them
		$.each($("ul.contacts li"), function () {
			if ($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
				$(this).hide();
			else
				$(this).show();
		});
	} else {
		let cont = 1;

		$.each($("ul.contacts li"), function () {
			if (cont <= 7)
				$(this).show();
			else
				$(this).hide();
			cont++;
		});
	}
});