// placeholder
$(function() {
    function loginPlaceholder(){
        if ($('.xans-member-login').val() != undefined) {
            var loginId = $('#member_id').parent().attr('title');
            $('#member_id').attr('placeholder', loginId);
            $('#member_passwd').attr('placeholder', '비밀번호');
            $('#order_name').attr('placeholder', '주문자명');
            $('#order_password').attr('placeholder', '비회원주문 비밀번호');
        }
    }
    loginPlaceholder();
});

// keyboard
$('.keyboard button').on('click', function(){
    if($(this).hasClass('selected')==true){
        $('.keyboard .btnKey').removeClass('selected');
        $('.view div').hide();
    }
    else{
        $('.keyboard .btnKey').removeClass('selected');
        $('.view div').hide();
        $(this).addClass('selected');
        var key=$(this).attr('title');
        $(this).parent().next().children('.'+key+'').show();
    }
});

// toggle
$('.ec-base-tab').each(function(){
    var selected = $(this).find('> ul > li.selected > a');
});

$('body').on('click', '.ec-base-tab a', function(e){
    var _target = $(this).attr('href');
    if (_target == '#member') {
        $('#member_login_module_id').show();
        $('#order_history_nologin_id').hide();
    } else {
        $('#member_login_module_id').hide();
        $('#order_history_nologin_id').show();
    }
    e.preventDefault();
});

//sns

$(function(){
    var snsWrap = $('.login__sns')
	var sns = $('.login__sns a');
    for(var i=0; i < sns.length; i++){
    	if( snsWrap.hasClass('enable') != true && $(sns[i]).hasClass('displaynone') != true ) {
    		snsWrap.addClass('enable');
   	    }
    }
});

//tab
$(function(){
    var param = location.search;
    if(param.indexOf('noMemberOrder') === 1) {
    	$('.login .ec-base-tab').removeClass('displaynone');
    }
	
})