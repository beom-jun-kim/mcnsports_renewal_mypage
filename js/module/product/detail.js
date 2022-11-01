window.addEventListener('load', function(){
    stickyMenu();
    alignPrice();
});

function removeClassChildren(el, className, addEl){
	for(var i = 0; i < el.children.length; i++){
    	el.children[i].classList.remove(className);
    }
    if(addEl != undefined){
    	addEl.classList.add(className)
    }
}

function toggleSelectMenu(position,Arr,menu,pos) {
    var fixMenu = document.querySelector('#fixMenu.additionalInfo');
    var fixMenuInfo = document.querySelector('#fixMenu.productInfo');
    
    if( position > 300 && position <= (Arr[0]-pos)){
        fixMenuInfo.classList.add('fixed');
        fixMenu.classList.remove('fixed');
    }else if( position > (Arr[0]-pos) && position <= (Arr[1]-pos) ){
        fixMenu.classList.add('fixed');
        removeClassChildren(menu,'selected',menu.children[0])
    }else if( position > (Arr[1]-pos) && position <= (Arr[2]-pos) ){
        removeClassChildren(menu,'selected',menu.children[1])
    }else if( position > Arr[2]-pos ){
        removeClassChildren(menu,'selected',menu.children[2])
    }else {
        fixMenu.classList.remove('fixed');
        removeClassChildren(menu,'selected',menu.children[0])
    }
}

function stickyMenu(){
	var menus = document.querySelectorAll('.ec-base-tab .menu');
    var fixHeader = document.querySelector('#header.fixHeader');
    var fixMenu = document.querySelector('#fixMenu.additionalInfo');
    var fixMenuInfo = document.querySelector('#fixMenu.productInfo');
    
    var before = [0];
    
        if( menus.length > 0 && fixMenu != undefined){
            var menu = fixMenu.children[1];
    		window.addEventListener("scroll", function(e){
    		var position = window.pageYOffset || document.documentElement.scrollTop;
            var device = window.innerWidth < 768 ? 'MO' : 'PC';

            var arr = [];
                
            for(var i = 0; i < menus.length - 1; i++ ){
                arr.push(getOffset(menus[i]).top);
            }
                
            if(position > 300 ){
                if(before.pop() > window.scrollY) {
                    fixHeader.classList.add('fixed');
                    fixMenuInfo.classList.remove('fixed');
                } else {
                    fixHeader.classList.remove('fixed');
                }
                before.push(window.scrollY);
            }else {
                fixHeader.classList.remove('fixed');
                fixMenuInfo.classList.remove('fixed');
            }
                     
            if(device === 'MO'){
                toggleSelectMenu(position,arr,menu,70)
            }else{
                toggleSelectMenu(position,arr,menu,0)
            }    
        	})
        }
}

function alignPrice(){
    var records = document.querySelectorAll('.infoArea .xans-product-detaildesign tr td span');
    addPriceClass('#span_product_price_text','productPrice');
	addPriceClass('#span_product_price_sale','salePrice');
  	addPriceClass('#span_product_price_custom','customPrice');
}

function addPriceClass(el,className){
    var item = document.querySelector(el)
    if( item != undefined) {
        item.closest('tr').classList.add(className);
    }
}

function removePagingArea(oTarget)
{
    if ($(oTarget).length < 1 && (oTarget != '#prdReview' || oTarget != '#prdQna')) return;

    if ($(oTarget).css('display') == 'block') {
        if (oTarget == '#prdReview') {
            var record = $('.xans-record-', '.xans-product-review').first();
            if (record.length < 1 || record.is(':not(:visible)')) {
                $('.xans-product-reviewpaging').remove();
             }
         } else if (oTarget == '#prdQnA') {
            var record = $('.xans-record-', '.xans-product-qna').first();
            if (record.length < 1 || record.is(':not(:visible)')) {
                $('.xans-product-qnapaging').remove();
            }
         }
     }
}

$(function() {

    $('#actionCartClone, #actionWishClone, #actionBuyClone, #actionWishSoldoutClone').off().on('click', function() {
        try {
            var id = $(this).attr('id').replace(/Clone/g, '');
            if (typeof(id) !== 'undefined') $('#' + id).trigger('click');
            else return false;
        } catch(e) {
            return false;
        }
    });

    function productDetailOrigin(){
        var imgChk = $('#prdDetailContent').find('img').length;
        if(imgChk <= 0){
            $('#prdDetailBtn').remove();
        }
    }
    productDetailOrigin();

    // Add Image
    var oTarget = $('.xans-product-mobileimage ul');
    var oAppend = oTarget.first().children('li').clone();

    oTarget.slice(1).each(function() {
        $(this).children().wrap(function() {
            return '<li>' + $(this).html() + oAppend.html() + '</li>';
        });

        $(this).children('li').children('img').first().remove();
    });
});

