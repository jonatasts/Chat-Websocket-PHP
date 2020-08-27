//Botão de opção na conversa
$('.action_menu_btn').click(function () {
    $('.action_menu').toggle();
});

//Faz a busca das letras digitas no input de busca
$("#search").keyup(function () {
    if ($("#search").val() != "") {
        _this = this;
        // mostra somente a li que conter caracteres ou for igual a string digitada
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

//Alterna o estado de ativo das li de contatos
$(".contacts li").click(function () {
    var id = $(this).attr("id");


    if (!$(this).hasClass("active")) {
        $.each($("ul.contacts li.active"), function () {
            $(this).removeClass("active");
        });

        $(this).addClass("active");
        $(".chat-box").css("display", "none");
        $("div." + id).css("display", "block");
        $("div." + id + " .msg_card_body").scrollTop($("div." + id + " .msg_card_body").innerHeight());
    }
    else {
        $(this).removeClass("active");
        $(".chat-box").css("display", "none");
    }

});
