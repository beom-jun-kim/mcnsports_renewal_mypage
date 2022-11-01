$('.xans-product-searchdata').find('button.btnDelete').on('click', function() {
    $('input.keyword', '.xans-product-searchdata').val('').focus();
    $('input.keyword', '.xans-product-searchdata').val(''); 
});

window.addEventListener('load',function(){
    var url = decodeURIComponent(window.location.href);
	var keywordStart = url.indexOf('keyword=')+8;
	var keyword = url.slice(-(url.length-keywordStart));
    var key = keyword.split('&');
    var text = document.querySelector('.searchResult .keyWord');
    text.textContent = "'"+ key[0]+"'"
})