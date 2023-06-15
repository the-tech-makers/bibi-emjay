$.extend(true, BT, {
  loadRecentViewedProductsSingle: function(point) {
    if(typeof point == 'undefined' || point.length == 0) {
      return;
    }
    var ins = this;
    var wrap = point.find('.rencent-view-ele');
    var list = wrap.find('.recent-view-list');
    var productHandle = wrap.attr('data-handle');
    var limit = parseInt(wrap.attr('data-limit'));
    var handleItems = this.getCookieItemsValue(true, this.options.recentView.cookieName);
    var index = handleItems.indexOf(productHandle);
    if(index > -1) {
      handleItems.splice(index, 1);
    }
    if(handleItems.length > 0) {
      handleItems.reverse();
      var q = handleItems.join(',');
      this.callAjax(theme.rootUrl, 'GET', {view:'recent_view_slider', q: q}, null, function(html) {
        if(list.hasClass('slick-initialized')) {
          list.slick('unslick');
        }
        list.html(html);
        if(list.find('.grid__item').length > 0) {
          ins.convertCurrencySilence(list.find('span.money'));
          ins.applyCustomColorSwatches(list);
          wrap.fadeIn(300, function() {
            ins.initSlider(wrap, false, false);
            ins.popularAddedWishlistItems(wrap);
          });
        }
      });
    }
  },

  sendRecommendationTrekkieEvent: function(grid) {
    if (
      !window.ShopifyAnalytics ||
      !window.ShopifyAnalytics.lib ||
      !window.ShopifyAnalytics.lib.track
    ) {
      return;
    }

    var numberOfRecommendationsDisplayed = grid.find(
      '.grid__item'
    ).length;

    window.ShopifyAnalytics.lib.track('Product Recommendations Displayed', {
      theme: Shopify.theme.name,
      didPageJumpOccur: true,
      numberOfRecommendationsDisplayed: numberOfRecommendationsDisplayed
    });
  },

  loadRecommendationProduct: function(ele) {
    var ins = this;
    if(ele.length > 0) {
      var productId = ele.attr('data-product-id');
      var limit = ele.attr('data-limit');
      var view = ele.data('view');
      if(!ele.hasClass('loaded')) {
        ins.callAjax(theme.recommendationUrl + '.json', 'GET', {product_id: productId, limit: limit}, 'json', function(response) {
          if(response.products.length > 0) {
            var handles = [], urls = {};
            $.each(response.products, function(index, product) {
              handles.push(product.handle);
              urls[product.handle] = product.url;
            });
            var handleQuery = handles.join(',');
            ins.callAjax(theme.rootUrl, 'GET', {view: view, 'q': handleQuery}, null, function(html) {
              var grid;
              if(view == 'recommendation') {
                grid = ele.children('.cross-sell-list');
                grid.html(html);
                grid.addClass(ins.selectors.slider.useTouchMobile + ' ' + ins.selectors.slider.default.replace('.',''));
                ins.initSlider(ele, false, false);
                ins.initDealCountdown(grid);
              } else {
                grid = ele.parents('.freb__inner').first();
                grid.append(html);
              }
              ins.addRecommendationUrls(grid, urls);
              ins.sendRecommendationTrekkieEvent(grid); 
              ins.convertCurrencySilence(grid.find('span.money'));
              ins.applyCustomColorSwatches(grid);
              ins.reLoadReview(grid);
              BTFreBought.init();
              ele.parent().find('.loading-not-full').remove(); 
            });
          } else {
            ele.hide();
          }
        }, function() {
          ele.hide();
        })
      } else {
        var grid;
        if(view == 'recommendation') {
          grid = ele.children('.cross-sell-list');
          grid.addClass(ins.selectors.slider.useTouchMobile + ' ' + ins.selectors.slider.default.replace('.',''));
          ins.initSlider(ele, false, false);
          ins.initDealCountdown(grid);
          ins.popularAddedWishlistItems(grid);
        } else {
          grid = ele.parents('.freb__inner').first();
          BTFreBought.init(); 
        }
        ins.applyCustomColorSwatches(grid);
      }
    }
  },

  initStickyCartProductPage: function() {
    if($('.sc').length > 0) {
      var ins = this;
      $('.sc').removeClass('hide');
      $(window).on(this.data.scrollEventName, function(e, direction) {
        if(ins.data.pageLoaded && BT.data.updatingProductOptions == false) {
          if(direction == 'down') {
            var btn = $('.button--single-cart-main');
            var headerHeight = $('.sticky-menu.active').length > 0 ? $('.sticky-menu').height() : 0;
            if($(window).scrollTop() + headerHeight > btn.offset().top) {
              $('.sc').addClass('sc--active');
            } else {
              $('.sc').removeClass('sc--active');
            }
          } else {
            $('.sc').removeClass('sc--active');
          }
        }
      });

      var scSliding = false, statusClass = 'sc__close--working';
      if(ins.data.cacheWindowWidth < 992) {
        $('.sc__close').removeClass(statusClass);
        $('.sc__inner').hide();
        $('.sc').removeClass('open');
      } else {
        $('.sc__inner').show();
        $('.sc').addClass('open');
      }

      $('.sc__close').on('click', function(e) {
        e.preventDefault();
        if(scSliding) {
          return;
        }
        scSliding = true;
        $('.sc__inner').toggle('slow', function() {
          $('.sc__close').toggleClass(statusClass);
          scSliding = false;
          $('.sc').toggleClass('open');
        });
      });

      $('.sc__trigger').on('click touchend', function(e) {
        e.preventDefault();
        if(scSliding) {
          return;
        }
        scSliding = true;
        var effect = $('.sc').hasClass('open') ? 'slideUp': 'slideDown';
        if($('.sc').hasClass('open')) {
          $('.sc__inner').slideUp(300, toogleScClass);
        } else {
          $('.sc__inner').slideDown(300, toogleScClass);
        }
      });
      function toogleScClass() {
        $('.sc__close').toggleClass(statusClass);
        scSliding = false;
        $('.sc').toggleClass('open');
      }
      // Sync the main quantity input and this one in sticky panel
      $('.qty-box__input--single').on('change', function() {
        var input = this;
        $('.qty-box__input--single').each(function(){
          if(!$(this).is(input)) {
            $(this).val($(input).val());
          }
        });
      });
    }
  },

  alignReviewMasonryForm: function(){
    var reviewForm = $('.product-review-masonry');
    if(reviewForm.length > 0) {
      reviewForm.removeAttr('style');
      var mediaMasonry = $('.product-media-masonry-align');
      var offset = mediaMasonry.offset().top + mediaMasonry.outerHeight() + 20;
      var delta = offset - reviewForm.offset().top;
      if(delta < 0 ) {
        reviewForm.css('margin-top', delta + 'px');
      }
    }
  },

  initAlignReviewForm: function() {
    var reviewForm = $('.product-review-masonry');
    if(reviewForm.length > 0) {
      this.alignReviewMasonryForm();
      var ins = this;
      $(window).on(this.data.resizeEventName, function(e) {
        setTimeout(function() {
          ins.alignReviewMasonryForm();
        }, 300);
      });
    }
  },

  initTabAccordion: function() {
    var ins = this;
    $(document).on('click', '.tab-accordion__trigger', function(e) {
      e.preventDefault();
      if($(this).hasClass('working')) {
        return;
      }
      $(this).addClass('working');
      var btn = $(this);
      var tabContent = btn.parent().first();
      var tabList = tabContent.siblings('.nav-tabs');
      var newTabPane = $(btn.attr('href'));
      btn.toggleClass('open');
      
      if(btn.hasClass('open')) {
        newTabPane.slideDown(300, function() {
          btn.removeClass('working');
        });
      } else {
        newTabPane.slideUp(300, function() {
          btn.removeClass('working');
        });
      }
    });
    $(document).on('shown.bs.tab', '.tab-accordion-list a[data-toggle="tab"]', function (e) {
      var href = $(e.target).attr('href');
      var tabPane = $(href);
      tabPane.addClass('open').show();
      tabPane.siblings('.tab-accordion__trigger[href="' + href + '"]').addClass('open');
    });
    $(document).on('hidden.bs.tab', '.tab-accordion-list a[data-toggle="tab"]', function (e) {
      var href = $(e.target).attr('href');
      var tabPane = $(href);
      tabPane.removeClass('open').hide();
      tabPane.siblings('.tab-accordion__trigger[href="' + href + '"]').removeClass('open');
    });
  },

  initSizeChart: function() {
    if($('.sizechart-trigger').length > 0) {
      var ins = this;
      $('.sizechart-trigger').unbind('click');
      $('.sizechart-trigger').on('click', function(e) {
        e.preventDefault();
        if($(this).hasClass('sizechart-trigger--inline')) {
          var sizechartTable = $('.sizechart-table');
          var sizechartTab = sizechartTable.parents('.tab-pane');
          var delay = 0;
          if(!sizechartTab.hasClass('.active')) {
            var tabId = sizechartTab.attr('id');
            $('.nav-tab-item a[href="#' + tabId + '"]').trigger('click');
            delay = 300;
          }
          setTimeout(function() {
            var offset = sizechartTable.offset().top - 80;
            if($('.use-sticky').length > 0) {
              offset -= 60;
            }
            offset = offset + 'px';
            $('body,html').animate({
              scrollTop: offset
            }, 800);
          }, delay);
        } else {
          var modalId = $(this).attr('data-modal-id');
          ins.showPopup('#' + modalId);
        }
      });
    }
    if($('.sizeChartModal .rte').length > 0) {
      $('.sizeChartModal').removeClass('hide');
      this.rteWrap('.sizeChartModal .rte');
    }
  }
});
theme.productTemplate = {};
theme.ProductTemplateSection = (function() {
  function ProductTemplateSection(container) {
    var $container = this.$container = $(container);
    var sectionId = this.sectionId = $container.attr('data-section-id');
    var block = this.obj = '#ProductSection-' + sectionId;
    var scriptDataTag = $container.find('.product-single-json');
    if(scriptDataTag.length > 0) {
      var handle = scriptDataTag.attr('data-handle');
      BT.data.productGroup[handle] = $.parseJSON(scriptDataTag.html());
      BT.addProductRecentView(handle);
      BT.updateStorePickup($container.find(BT.selectors.productGroup.wrap).first(),BT.data.productGroup[handle][scriptDataTag.attr('data-current-variant-id')]);
    }
    BT.data.loadedSnippets.push('preload-product-single-general.scss');
    var timeout = BT.data.cacheWindowWidth < 768 ? 2000: 500;
    BT.initProductThumbsSlider(block);
    BT.initProductMainSliderAndZoom(block, 2300, 1500);
    BT.initDealCountdown(block);
    
    BT.applyCustomColorSwatches(block);

    setTimeout(function() {
      BT.initStickyCartProductPage();
      if($('.sc').length > 0) {
        BT.applyCustomColorSwatches('.sc');
      }
      BT.rteWrap(block + ' .rte');

      var upsellWrap = $('.upsell-ele--single');
      if(upsellWrap.length > 0) {
        BT.loadUpsell($container.find(BT.selectors.upsell.wrap));
      }

      var recentPoint = $('.rencent-view-ele-point');
      if(recentPoint.length > 0) {
        BT.loadRecentViewedProductsSingle(recentPoint);
      }

      // BT.calculateMinHeightHover('.related-list');
      var crosssellEle = $('.load-crossell');
      if(crosssellEle.length > 0) {
        BT.loadRecommendationProduct(crosssellEle);
      } else if($('.freb__inner').length > 0) {
        BTFreBought.init(); 
      }
      
      BT.initSizeChart();
      BT.runProgressBar($container.find('.progress-bar'));

      if($('.pg__review-stars--trigger').length > 0) {
        $('.pg__review-stars--trigger').unbind('click');
        $('.pg__review-stars--trigger').on('click',function(e) {
          e.preventDefault();
          var reviewForm = $('.pg__review-form');
          var offsetObj = reviewForm;
          var delay = 0;
          var tabPane = reviewForm.parents('.tab-pane');
          if(tabPane.length > 0) {
            var tabId = tabPane.attr('id');
            offsetObj = $('.nav-tab-item a[href="#' + tabId + '"]');
            if(!tabPane.hasClass('.active')) {
              offsetObj.trigger('click');
            }
            delay = 300;
          }

          if(!BT.isInViewport(offsetObj, window)) {
            var offset = offsetObj.offset().top - 100;
            if($('.use-sticky').length > 0) {
              offset -= 60;
            }
            $('html, body').animate({
              scrollTop: offset
            }, 400);
          }
        });
      }

      BT.init3dModel(this.$container, sectionId);
    }.bind(this), timeout);

    theme.productTemplate[block] = '#' + $container.attr('id');
  }

  return ProductTemplateSection;
})();

theme.ProductTemplateSection.prototype = _.assignIn({}, theme.ProductTemplateSection.prototype, {
  onSelect: function(evt) {
    if(evt.detail.load) {
      BT.reLoadReview(this.obj);
      BT.alignReviewMasonryForm();
    }
    $(evt.target).find('.product-single,.sc').removeAttr('data-history');
  },
  onBlockSelect: function(evt) {
    var tab = $(evt.target);
    var tabNav = $('a[href="#' + tab.attr('id') + '"]');
    if(!tab.hasClass('active')) {
      tabNav.trigger('click');
    }
    if(!BT.isInViewport(tabNav, evt.currentTarget.defaultView)) {
      var offset = tabNav.offset().top - 100;
      $('html, body').animate({
        scrollTop: offset
      }, 400);
    }
  },
  onUnload: function() {
    delete theme.productTemplate[this.obj];
    theme.ProductModel.removeSectionModels(this.sectionId);
  }
});
// $(document).ready(function() {
BT.initAlignReviewForm();
BT.initTabAccordion();
theme.sections.constructors['product'] = theme.ProductTemplateSection;
  // theme.sections.register('product', theme.ProductTemplateSection);
// });