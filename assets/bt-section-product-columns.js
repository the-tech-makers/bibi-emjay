theme.productColumns = {};
theme.ProductColumnsSection = (function() {
  function ProductColumnsSection(container) {
    this.wrap = $(container);
    if(!this.wrap.hasClass('load-product-columns-ajax')) {
      BT.addProductMetaData(this.wrap, false);
    } else {
      BT.loadProductColumnsAjax(this.wrap);
    }    
  }

  return ProductColumnsSection;
})();

theme.ProductColumnsSection.prototype = _.assignIn({}, theme.ProductColumnsSection.prototype, {
  onSelect: function(evt) {
    if(evt.detail.load) {
      BT.reLoadReview(this.wrap);
      BT.convertCurrencySilence(this.wrap.find('span.money'));
    }
    $(evt.target).find('.product-single,.sc').removeAttr('data-history');
  },
  onBlockSelect: function(evt) {
    var ele = $(evt.target);
    if(!BT.isInViewport(ele, evt.currentTarget.defaultView)) {
      var offset = ele.offset().top - 100;
      $('html, body').animate({
        scrollTop: offset
      }, 400);
    }
  },
  onUnload: function() {
    BT.destroySlider(this.wrap);
    BT.destroyDealCountdown(this.wrap);
    delete this.wrap;
  }
});
theme.sections.constructors['product-columns'] = theme.ProductColumnsSection;