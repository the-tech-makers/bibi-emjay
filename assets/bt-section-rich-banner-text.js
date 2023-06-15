/********* --- Rich Banner Text --- *********/
theme.richBannerText = {};
theme.RichBannerTextSection = (function() {
  function runSliderBanner(wrap, effect) {
    BT.initSlider(wrap, true, effect);
  }

  function RichBannerTextSection(container) {
    this.wrap = $(container);
    var effect = BT.data.cacheWindowWidth < BT.options.windowScreen.desktop ? false : true;
    if(!this.wrap.hasClass('customize-page')) {
      var timeout = BT.data.cacheWindowWidth < BT.options.windowScreen.desktop ? 2300 : 0;
      setTimeout(function(){
        runSliderBanner(this.wrap, effect);
      }.bind(this), timeout);
    } else {
      runSliderBanner(this.wrap, effect);
    }
    BT.applyCustomColorSwatches(this.wrap);
    BT.initDealCountdown(this.wrap);
    if(this.wrap.find('.load-ajax').length > 0) {
      var sectionId = this.wrap.attr('data-section-id');
      var wrap = this.wrap;
      var delay = BT.data.cacheWindowWidth >= 992 ? -170 : -370; 
      BT.initScrollingWindowTriggerOnce(this.wrap, 'rich-banner-product-list_' + sectionId, delay, function() {
        wrap.find('.load-ajax').each(function() {
          var grid = $(this);
          BT.loadDynamicProductsAjax(grid.attr('data-ajax-params'), 1, function(html) {
            var finalHtml = $('.products', html).html();
            if(grid.find('.rb__products-heading').length > 0) {
              finalHtml = '<div class="grid__item rb__products-heading">' + grid.find('.rb__products-heading').html() + '</div>' + finalHtml;
            }
            grid.html(finalHtml);
            BT.initDealCountdown(grid);
            BT.applyCustomColorSwatches(grid);
            BT.reLoadReview(grid);
            BT.popularAddedWishlistItems(grid);
            BT.convertCurrencySilence('#' + grid.attr('id') + ' span.money');
          });
        });
      });
    }
    
    this.slider = this.wrap.find(BT.getSliderSelector());
  }

  return RichBannerTextSection;
})();

theme.RichBannerTextSection.prototype = _.assignIn({}, theme.RichBannerTextSection.prototype, {
  onBlockSelect: function(evt) {
    var ele = $(evt.target);
    if(ele.attr('data-slick-index') != undefined) {
      this.slider.slick('slickGoTo', ele.attr('data-slick-index'), true).slick('slickPause');
    } else {
      if(!BT.isInViewport(ele, evt.currentTarget.defaultView)) {
        $('html, body').animate({
          scrollTop: (ele.offset().top - 100)
        }, 400);
      }
    }
  },
  onBlockDeselect: function() {
    // Resume auto-rotate
    if(this.slider.hasClass('slick-initialized')) {
      this.slider.slick('slickPlay');
    }
  },
  onUnload: function() {
    BT.destroySlider(this.wrap);
    BT.destroyDealCountdown(this.wrap);
    delete this.slider;
    delete this.wrap;
  }
});
theme.sections.constructors['rich-banner-text'] = theme.RichBannerTextSection;