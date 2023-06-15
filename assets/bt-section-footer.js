theme.footer = {};
theme.FooterSection = (function() {
  function FooterSection(container) {
    var $container = this.wrap = $(container);
    var sectionId = $container.attr('data-section-id');
    var block = this.obj = '#' + sectionId;

    if($('.social-app').length > 0) {
      $('.social-app').each(function() {
        var ele = $(this);
        var suffixEvent = 'social_app_' + ele.attr('data-block-id');
        BT.initScrollingWindowTriggerOnce(ele, suffixEvent, -270, function() {
          if(ele.hasClass('social-app--fb')) {
            var dataAppId = ele.attr('data-app-id');
            if(dataAppId) {
              var url = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=" + dataAppId;
              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = url;
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
            }
          } else {
            var script = document.createElement('script');
            script.src = "//platform.twitter.com/widgets.js";
            script.charset = "utf-8";
            script.async = true;
            document.getElementsByTagName('head')[0].appendChild(script);
          }
          setTimeout(function() {ele.removeClass('loading');},1000);
        });
      });
    }

    if($container.find('.pcol__items').length > 0) {
      if(Shopify.designMode) {
        BT.addProductMetaData($container, false);
      } else {
        $container.addClass('load-product-columns-ajax');
        BT.loadProductColumnsAjax($container);
      }
    }

    if(theme.newsTerms && $container.find('.newsletter--footer').length > 0) {
      $container.find('.newsletter--footer').each(function() {
        BT.initNewsTerms('#' + $(this).attr('id'));
      });
    }
 
    theme.footer[block] = '#' + $container.attr('id');
  }
  return FooterSection;
})();

theme.FooterSection.prototype = _.assignIn({}, theme.FooterSection.prototype, {
  onSelect: function(evt) {
    if(evt.detail.load) {
      BT.reLoadReview(this.wrap);
      BT.convertCurrencySilence(this.wrap.find('span.money'));
    }
    $(evt.target).find('.product-single,.sc').removeAttr('data-history');
  },
  onUnload: function() {
    delete theme.footer[this.obj];
  }
});
theme.sections.constructors['footer'] = theme.FooterSection;