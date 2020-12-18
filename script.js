

window.addEventListener('load', (event) => {
function convertJp() {
    $('.symbol-17NLytxZ').each(function(index) {
        var title = $(this).attr('title');
        $(this).find('.symbolNameText-2EYOR9jS').html(title.split(',')[0]);
        $(this).find('.symbolNameText-2EYOR9jS').css('fontSize', '11px');
     });
     $('.tv-data-mode--delayed--for-symbol-list').html('遅');
}
convertJp();
$('.listContainer-1OhjZIMS').scroll(function(){
    convertJp();
});
$('.scrollable-3Hp_e-W2').hover(function(){
    convertJp();
});
});