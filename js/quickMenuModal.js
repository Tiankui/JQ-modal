/*
 * Author: zhouweiping(Tiankui)
 * Email: eric.prototype@gmail.com
 * Data: 2013-04-21
 * It's distributed under the MIT license(http://mit-license.org).
 */

;(function($) {
  function QuickMenuModal(option) {
    var OPTS = $.extend({
      form: $('#J_choose_sites form'),
      sites: $('#J_choose_sites .sites-box'),
      disableClass: 'disable',
      enableClass: 'choosed',
      submit: $('#J_quickMenu_submit')
    },option),
    _inputArr = OPTS.form.find('input');


    function enableSites(e) {
      console.log('enable');
      var self = $(this),
      sibling = OPTS.sites.find('a');
      if (self.hasClass(OPTS.enableClass)) {
        self.removeClass(OPTS.enableClass);
        enableForm();
      }else{ 
        if (sibling.hasClass(OPTS.enableClass)) {
          sibling.removeClass(OPTS.enableClass);
        }
        self.addClass(OPTS.enableClass);
        disableForm();
      }
      e.preventDefault();
    }

    function disableSites() {
      console.log('disableSites');
      if (!OPTS.sites.hasClass(OPTS.disableClass)) {
        OPTS.sites.addClass(OPTS.disableClass)
        .find('a').off('click',enableSites);
      }
    }

    function disableForm() {
      OPTS.form.addClass(OPTS.disableClass);
      OPTS.form.find('input').attr({'value':'','disabled':'disabled'});
    }

    function enableForm() {
      OPTS.form.removeClass(OPTS.disableClass);
      OPTS.form.find('input').removeAttr('disabled');
    }

    function siteSubmit(){
      var _choosed = OPTS.sites.find('.'+OPTS.enableClass),
      _data = {};
      if (_choosed.length !== 0 ) {
        _data.name = _choosed.text();
        _data.src = _choosed.attr('href');
      }else{
        _data.name = _inputArr[0].value;
        _data.src = _inputArr[1].value;
      }
      $.ajax({
        url: 'mydomain.com/url',
        type: 'POST',
        dataType: 'json',
        data: _data ,
        complete: function (jqXHR, textStatus) {
          // callback
        },
        success: function (data, textStatus, jqXHR) {
          // success callback
          $.modal.close();
        },
        error: function (jqXHR, textStatus, errorThrown) {
          // error callback
          alert('err');
        }
      });
    }

    _inputArr[0].focus();

    //init <a>s
    OPTS.sites.find('a').on('click',enableSites);

    //input actions
    _inputArr.on('keyup',function (e) {
      if (_inputArr[0].value.length !== 0 || _inputArr[1].value.length !== 0) {
        disableSites();
      }else{
        if (OPTS.sites.hasClass(OPTS.disableClass)) {
          OPTS.sites.removeClass(OPTS.disableClass);
        }
        OPTS.sites.find('a').on('click',enableSites);
      }
    });

    OPTS.submit.on('click',function (e) {
      siteSubmit();
      e.preventDefault();
    });
  }

  $.QuickMenuModal = QuickMenuModal;

})(jQuery);
