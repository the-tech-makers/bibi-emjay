/********* --- Logo list --- *********/
theme.logoList = {};
theme.LogoListSection = (function() {
  function LogoListSection(container) {
    this.wrap = $(container);
    if(!this.wrap.hasClass('customize-page')) {
      var timeout = BT.data.cacheWindowWidth < BT.options.windowScreen.desktop ? 2300 : 1800;
      setTimeout(function(){
        BT.initSlider(this.wrap, true);
      }.bind(this), timeout);
    } else {
      BT.initSlider(this.wrap, true);
    }
    this.slider = this.wrap.find(BT.getSliderSelector());
  }

  return LogoListSection;
})();

theme.LogoListSection.prototype = _.assignIn({}, theme.LogoListSection.prototype, {
  onBlockSelect: function(evt) {
    var ele = $(evt.target);
    var slideEle = ele.hasClass('slick-slide') ? ele : ele.parents('.slick-slide').first();
    if(!slideEle.hasClass('slick-current')) {
      this.slider.slick('slickGoTo', slideEle.attr('data-slick-index'), true);
    }
    this.slider.slick('slickPause');
  },
  onBlockDeselect: function() {
    // Resume auto-rotate
    if(this.slider.hasClass('slick-initialized')) {
      this.slider.slick('slickPlay');
    }
  },
  onUnload: function() {
    BT.destroySlider(this.wrap);
    delete this.slider;
    delete this.wrap;
  }
});
theme.sections.constructors['logo-bar'] = theme.LogoListSection;