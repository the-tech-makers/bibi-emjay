$.extend(true, BT, {
	runNewsletterPopup: function() {
    var selector = this.selectors.newsPopup, ins = this;
    var cookieName = this.options.newsPopup.cookieName;
    var cookie = this.getCookie(cookieName);
    new Promise(function(resolve, reject) {
      if(cookie == undefined || cookie == null || cookie == 'null') {
        if($(selector.id).length > 0) {
          resolve();
        } else {
          ins.loadSnippetAjax('popup-newsletter', function() {
            resolve();
          }, 800);
        }
      }
    }).then(function() {
      if($(selector.id).length > 0) {
        $(selector.id).removeClass('hide');
        ins.showPopup(selector.id);
        ins.initNewsTerms(selector.id);
      }
    }, function(err) {
      // console.log(err);
    });

    $(document).on('hidden.bs.modal', selector.id, function () {
      if($(selector.checkbox).is(":checked")) {
        ins.setCookie(cookieName, 1, 1);
      }
    }); 
  }
});
BT.runNewsletterPopup();