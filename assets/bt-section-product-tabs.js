$.extend(true, BT, {
  initProductTabs: function(wrap, sectionId) {
    var ins = this;
    var firstSliderWrap;
    if(typeof wrap == 'string') {
      firstSliderWrap = wrap + ' .tab-pane:first';
      wrap = $(wrap);
    } else {
      firstSliderWrap = wrap.find('.tab-pane:first');
    }
    this.convertCurrencySilence(wrap.find('span.money'));
    this.initScrollingWindowTriggerOnce(wrap, 'product-tabs_deal_slider_' + sectionId, -170, function() {
      ins.initDealCountdown(wrap);
      ins.initSlider(firstSliderWrap, false, false);
    });
    this.initInfiniteScroll(wrap);
    if(wrap.find(this.selectors.waitingTabData).length > 0) {
      ins.initScrollingWindowTriggerOnce(wrap, 'product-tabs_ajax_' + sectionId, -450, function() {
        BT.renderSectionByAjaxApi(sectionId, {view: 'ajax'}, function(response) {
          wrap.find(ins.selectors.waitingTabData).each(function() {
            var parent = $(this).parent();
            $(this).remove();
            parent.html('');
            var html = $('#' + parent.attr('id'), response).parent()[0].outerHTML;
            ins.afterLoadDynamicProductsAjaxInTab(parent, html);
            BT.initSlider(parent.parent(), false, false);
          });
          BT.addProductMetaData(wrap, true);
        });
      });
    }
    wrap.find('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      var tabContent = $(e.target).attr('href');
      if ($(tabContent).find(ins.selectors.infiniteScroll.wait).length > 0) {
        $(tabContent).find(ins.selectors.infiniteScroll.wait).removeClass(ins.selectors.infiniteScroll.wait.replace('.','')).addClass(ins.selectors.infiniteScroll.button.replace('.',''));
        ins.initInfiniteScroll($(tabContent));
      }
    });
  },

  unLoadProductTabs: function(wrap) {
    var sectionId = wrap.attr('data-section-id');
    this.destroyInfiniteScroll(wrap.attr('data-section-id'));
    this.destroyScrollingWindowTriggerOnce('product-tabs_ajax_' + sectionId);
    this.destroyScrollingWindowTriggerOnce('product-tabs_deal_slider_' + sectionId);
    this.destroyDealCountdown(wrap);
  }
});

theme.productTabs = {};
theme.ProductTabsSection = (function() {
  function ProductTabsSection(container) {
    this.wrap = $(container);
    var sectionId = this.wrap.attr('data-section-id');
    BT.initProductTabs(this.wrap, sectionId);
    BT.applyCustomColorSwatches(this.wrap);
  }

  return ProductTabsSection;
})();

theme.ProductTabsSection.prototype = _.assignIn({}, theme.ProductTabsSection.prototype, {
  onBlockSelect: function(evt) {
    var tab = $(evt.target);
    if(!tab.hasClass('active')) {
      var tabNav = $('a[href="#' + tab.attr('id') + '"]');
      tabNav.trigger('click');
    }
    if(!BT.isInViewport(this.wrap, evt.currentTarget.defaultView)) {
      var offset = this.wrap.offset().top - 100;
      $('html, body').animate({
        scrollTop: offset
      }, 400);
    }
    if(evt.detail.load && tab.hasClass('init-slider-holder')) {
      setTimeout(function() {
        BT.initSlider(tab);
      }, 300);
    }
  },

  onUnload: function() {
    BT.unLoadProductTabs(this.wrap);
    delete this.wrap;
  }
});

theme.sections.constructors['product-tabs'] = theme.ProductTabsSection;