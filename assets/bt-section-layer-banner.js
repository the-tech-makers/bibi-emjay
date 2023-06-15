theme.layerBanner = {};
theme.LayerBannerSection = (function() {
  function runSliderBanner(wrap) {
    wrap.find('.zoom-fade.lazyloaded').addClass('ignore-effect');
    BT.initSlider(wrap, true);
  }

  function LayerBannerSection(container) {
    this.wrap = $(container);
    if(!this.wrap.hasClass('customize-page')) {
      var timeout = BT.data.cacheWindowWidth < BT.options.windowScreen.desktop ? 2300 : 1800;
      setTimeout(function(){
        runSliderBanner(this.wrap);
      }.bind(this), timeout);
    } else {
      runSliderBanner(this.wrap);
    }
    BT.applyCustomColorSwatches(this.wrap);
    BT.initDealCountdown(this.wrap);
    
    this.slider = this.wrap.find(BT.getSliderSelector());
  }

  return LayerBannerSection;
})();

theme.LayerBannerSection.prototype = _.assignIn({}, theme.LayerBannerSection.prototype, {
  onBlockSelect: function(evt) {
    var ele = $(evt.target);
    var slider = this.slider;
    var bannerItem = ele.hasClass('banner-item') ? ele : ele.parents('.banner-item');
    if(slider.hasClass('slick-initialized')) {
      if(!ele.hasClass('slick-current') && !ele.parents('.banner-item').hasClass('slick-current')) {
        var newIndex = bannerItem.attr('data-slick-index');
        slider.slick('slickGoTo', newIndex, true);
      }
      slider.slick('slickPause');
    } else {
      if(!BT.isInViewport(bannerItem, evt.currentTarget.defaultView)) {
        var offset = bannerItem.offset().top - 100;
        $('html, body').animate({
          scrollTop: offset
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
theme.sections.constructors['layer-banner'] = theme.LayerBannerSection;