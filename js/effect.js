/* ============================== MAIN ============================== */
function ShowLoading() {
    $('#loading-screen').css('display', 'flex');

    $('html, body').css({
        'height': '100%',
        'overflow': 'hidden',
    });
}

function HideLoading() {
    $('#loading-screen').hide();

    $('html, body').css({
        'height': 'auto',
    });

    $('html').css('overflow', 'auto');
}

function SetTabActive(index) {
    var activeTab = $('.main-menu li').eq(index - 1);
    activeTab.addClass('active');

    // if tab need active is in submenu
    if (activeTab.parents('li').hasClass('dropdown-li')) {
        activeTab.parents('li').addClass('open');
    }
}

$(function () {
    $('#page-content').css('min-height', $(window).height() - 51);
    
    $(document).click(function (event) {
        var _opened = $('#user-info-box').hasClass('open');
        var clickover = $(event.target);

        if (clickover.attr('id') == 'user-detail') return;
        if (clickover.attr('id') == 'user-info-box') return;
        if (clickover.closest('div').attr('id') == 'user-info-box') return;

        if (_opened === true) {
            $('#user-info-box').click();
        }
    });
});
/* ============================== MAIN ============================== */

/* ============================== SIDEBAR ============================== */
$(function () {
    $('.dropdown-li').click(function () {
        $(this).toggleClass('open');
    });

    // submenu link clicked
    $('.dropdown-li .sub-menu a').click(function (e) {
        e.stopPropagation();
    });

    $('#close-menu').click(function () {
        $('#sidebar').removeClass('open');
    });
});
/* ============================== SIDEBAR ============================== */

/* ============================== NAVBAR ============================== */
$(function () {
    $('#user-info-box').click(function (e) {
        $(this).toggleClass('open');
        $('#user-detail').fadeToggle();
    });

    $('#open-menu').click(function () {
        $('#sidebar').addClass('open');
    });
});
/* ============================== NAVBAR ============================== */

/* ============================== LOGIN PAGE ============================== */
$(function () {
    $('#login-container').css('height', $(window).height());
});
/* ============================== LOGIN PAGE ============================== */

/* ============================== INPUT ============================== */
$(function () {
    $('.floating-label-container input').blur(function () {
        if ($(this).val() != "") {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
            $(this).parents('.floating-label-container').find('label').removeClass('floated');
        }
    });

    $('.floating-label-container label').click(function () {
        if ($(this).hasClass('floated')) return;

        $(this).addClass('floated');
        $(this).parents('.floating-label-container').find('input').focus();
    })
});
/* ============================== INPUT ============================== */