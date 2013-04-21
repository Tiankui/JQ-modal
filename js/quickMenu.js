/*
 * Author: zhouweiping(Tiankui)
 * Email: eric.prototype@gmail.com
 * Data: 2013-04-18
 *
 * Run!!the chariot to the devil!
 */

;(function($){

  var _config = $('#J_quickMenu_config'),
  _add = $('#J_quickMenu_add'),
  _closeWrapper = $('.quick-menu ul'),
  _closeArr = $('.quick-menu .close');

  _config.on('click',function(e){
    _closeWrapper.toggleClass('close-set');
    e.preventDefault();
  });

  _closeArr.each(function(index,item){
    $(item).on('click',function(e){
      var _self = $(this),
      _id = _self.attr('id');
      //move this to ajax complete
      _self.parent().remove();
      //$.ajax({
      //url: 'mydomain.com/url',
      //type: 'POST',
      //dataType: 'xml/html/script/json',
      //data: $.param(  ),
      //complete: function (jqXHR, textStatus) {
      //}
      //error: function (jqXHR, textStatus, errorThrow) {
        // body...
      //}
      //});
      e.preventDefault();
    });
  });

  _add.on('click',function(e){
    console.log('quickMenu');
    $(this).modal({
      opacity: 0.5,
      zIndex: 3000
    });

    //define in the quickMenuModal file
    $.QuickMenuModal();

    e.preventDefault();
  });
})(jQuery);
