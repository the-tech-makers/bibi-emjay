$.extend(true, BT, {
	openRpInterval: function(minuteFrom, minuteTo, openTime, closeTime) {
    var selector = this.selectors.rp, ins = this;
    if($(selector.wrap).hasClass('hide')) {
      return;
    }
    var rp = $(selector.wrap);
    var length = $(selector.item).length - 1;
    var arrayIndex = Array.from(Array(length + 1).keys());
    if(arrayIndex.length == 0) {
      arrayIndex = Array.from(Array(length + 1).keys());
    }
    index = this.getRandomInt(0, arrayIndex.length - 1); 
    arrayIndex.splice(index, 1);
    $(selector.item).hide();
    var activeItem = $(selector.item + '[data-index="' + index +'"]');
    activeItem.find(selector.minuteNumber).html(this.getRandomInt(minuteFrom, minuteTo));
    activeItem.show();
    var image = activeItem.find('img'), delay = 0;
    if(!image.hasClass('loaded')) {
      delay = 300;
      image.attr('src', image.attr('data-src'));
      image.addClass('loaded');
    }
    rp.slideDown(this.options.rp.duration, function() {
      if(ins.data.rp.openTimeInterval) {
        clearTimeout(ins.data.rp.openTimeInterval);
      }
      ins.data.rp.openTimeInterval = setTimeout(function() {
        ins.hideRpInterval(minuteFrom, minuteTo, openTime, closeTime);
      }, openTime);
    });
  },

  hideRpInterval: function(minuteFrom, minuteTo, openTime, closeTime) {
    var ins = this;
    $(this.selectors.rp.wrap).slideUp(ins.options.rp.duration, function() {
      if(ins.data.rp.closeTimeInterval) {
        clearTimeout(ins.data.rp.closeTimeInterval);
      }
      ins.data.rp.closeTimeInterval = setTimeout(function() {
        ins.openRpInterval(minuteFrom, minuteTo, openTime, closeTime);
      }, closeTime);
    });
  },
  runSalesNotification: function() {
  	var ins = this, cookieName = this.options.rp.cookieName, cookie = this.getCookie(cookieName);
  	this.loadSnippetAjax('recommended-products', function() {
      var selector = ins.selectors.rp;
      if($(selector.wrap).length > 0) {
        var rp = $(selector.wrap);
        var limit = rp.data('limit'),
        minuteFrom = rp.data('minute-from'),
        minuteTo = rp.data('minute-to'),
        openTime = rp.data('interval') * 1000,
        closeTime = rp.data('closing-interval') * 1000,
        index;
        var length = $(selector.item).length - 1;
        var list = [], i = 0, show = 0;
        for(i = 0; i < limit; i++){
          list.push(i);
        }
        list = ins.shuffleArray(list);
        if(cookie != 1) {
          if(ins.data.rp.closeTimeInterval) {
            clearTimeout(ins.data.rp.closeTimeInterval);
          }
          setTimeout(function() {
            ins.openRpInterval(minuteFrom, minuteTo, openTime, closeTime);
          }, closeTime);
        }

        // Close recommended products
        $(document).on('click', selector.closeBtn, function(e) {
          e.preventDefault();
          clearTimeout(ins.data.rp.openTimeInterval);
          ins.setCookie(cookieName, 1, 1);
          $(selector.wrap).slideUp(ins.options.rp.duration);
        });
      }
    });
  }
});
BT.runSalesNotification();