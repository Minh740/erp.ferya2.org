/* ============================== MAIN ============================== */
var LOCAL_DO_URL = "/cp/do/";

$(function () {
    $('input').focus(function () {
        $(this).removeClass('error');
    });

    $('textarea').focus(function () {
        $(this).removeClass('error');
    });

    $('select').focus(function () {
        $(this).removeClass('error');
    });

    // only allow number in textbox 
    $(".accept-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});

function Logout() {
    $.post(LOCAL_DO_URL + 'admin/admin-logout.aspx', function () {
        location.href = '/cp-login';
    });
}

function ResetForm() {
    $('input').each(function () {
        $(this).val('');
    });

    $('textarea').each(function () {
        $(this).val('');
    });

    $('select').each(function () {
        $(this).val(0);
    });
}

function Search(strSearch, processPath) {
    $("#table").html('<div class="spinner spinner-2"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>');

    $.post(LOCAL_DO_URL + processPath, {
        strSearch: strSearch,
    }, function (data) {
        $("#table").html(data);
    });
}

function Cancel() {
    parent.history.back();
    return false;
}
/* ============================== MAIN ============================== */