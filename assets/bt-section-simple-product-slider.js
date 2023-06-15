theme.simpleProductSlider = {};
theme.SimpleProductSliderSection = (function() {
  function SimpleProductSliderSection(container) {
    var wrap = $(container);
    this.wrap = wrap;
    var sectionId = wrap.attr('data-section-id');
    this.sectionId = sectionId;
    var delay = wrap.hasClass('load-ajax') ? -470 : 170;
    BT.initScrollingWindowTriggerOnce(wrap, 'simple-product-slider_' + sectionId, delay, function() {
      if(wrap.hasClass('load-ajax')) {
        var gridSelector = '#sps-products-' + sectionId;
        var grid = $(gridSelector);
        BT.loadDynamicProductsAjax(grid.attr('data-ajax-params'), 1, function(html) {
          grid.html($('.products', html).html());
          BT.initDealCountdown(grid);
          BT.initSlider(wrap, false);
          BT.applyCustomColorSwatches(grid);
          BT.reLoadReview(grid);
          BT.popularAddedWishlistItems(grid);
          BT.convertCurrencySilence(gridSelector + ' span.money');
        });
      } else {
        BT.initDealCountdown(wrap);
        BT.initSlider(wrap, true);
        BT.applyCustomColorSwatches(wrap);
      }
    });
  }

  return SimpleProductSliderSection;
})();

theme.SimpleProductSliderSection.prototype = _.assignIn({}, theme.SimpleProductSliderSection.prototype, {
  onSelect: function(evt) {
    if(evt.detail.load) {
      BT.reLoadReview(this.wrap);
      BT.convertCurrencySilence(this.wrap.find('span.money'));
    }
  },
  onBlockSelect: function(evt) {
    if(!BT.isInViewport(this.wrap, evt.currentTarget.defaultView)) {
      var offset = this.wrap.offset().top - 100;
      $('html, body').animate({
        scrollTop: offset
      }, 400);
    }
  },

  onUnload: function() {
    BT.destroyScrollingWindowTriggerOnce('simple-product-slider_' + this.sectionId);
    delete this.sectionId;
    delete this.wrap;
  }
});
theme.sections.constructors['simple-product-slider'] = theme.SimpleProductSliderSection;