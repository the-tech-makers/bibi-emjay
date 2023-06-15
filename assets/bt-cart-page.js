var BTCartPage = {
	selectors: {
		content: '.cart-page__content',
		updateAllBtn: '.cart__update__all',
		qtyInput: '.cart__qty-input',
		upsell: {
			wrap: '.cart-page__upsell',
			content: '.cart-page__upsell__content'
		},
    crosssell: {
      wrap: '.cart-page__cross_sell',
      content: '.cart-page__cross_sell__content'
    },
    itemsTable: '.cart-page__items-table',
    countdown: '.cart-countdown'
	},

	data: {
		cartUpsellRequests: [],
    cartCrosssellRequests: [],
    item_size: 0
	},

	cleanOldUpsellRequests: function() {
    $(this.data.cartUpsellRequests).each(function(index, xhr) {
      if(xhr && xhr.readyState != 4){
        xhr.abort();
      }
    });
    this.data.cartUpsellRequests = [];
  },

  cleanOldCrosssellRequests: function() {
    $(this.data.cartCrosssellRequests).each(function(index, xhr) {
      if(xhr && xhr.readyState != 4){
        xhr.abort();
      }
    });
    this.data.cartCrosssellRequests = [];
  },

	loadUpsellProduct: function() {
    var ins = this, selector = this.selectors.upsell;
    var upsellEle = $(selector.wrap);
    if(upsellEle.length == 0) {
      return;
    }
    this.cleanOldUpsellRequests();
    this.data.cartUpsellRequests.push(BT.callAjax(theme.cartUrl, 'GET', {view: 'upsell_tags'}, null, function(response) {
      try {
        var tags = $.parseJSON(response.replace('<!-- BEGIN template -->','').replace('<!-- cart.upsell_tags -->','').replace('<!-- END template -->',''));
        var upsellIds = [];
        var productList = $(selector.content);
        var length = tags.length;
        var upsellList = [];
        var limit = upsellRandom ? 100 : parseInt(upsellEle.attr('data-limit'));
        if(productList.hasClass('slick-initialized')) {
          productList.slick('unslick');
        }
        productList.html('');
        productList.siblings(BT.selectors.loadingNotFull).show();
        var totalLoad = 0;
        $(selector.wrap).show();
        var view = upsellEle.attr('data-slider') ? 'upsell_slider' : 'upsell';
        if(length > 0) {
          $(tags).each(function(indexTag, tag) {
            ins.data.cartUpsellRequests.push(BT.callAjax(theme.collectionAllUrl + '/' + tag, 'GET', {view:view}, null, function(responseHtml) {
              totalLoad++;
              var finalResponseHtml = responseHtml.replace('<!-- BEGIN template --><!-- collection.upsell -->','').replace('<!-- END template -->','');
              $('.product-item', finalResponseHtml).each(function() {
                var id = $(this).attr('data-id');
                if(upsellIds.indexOf(id) < 0 && upsellIds.length < limit) {
                  upsellList.push($(this).html());
                  upsellIds.push(id);
                }
              });
              if(totalLoad == length) {
                if(upsellRandom) {
                  upsellList = BT.shuffleArray(upsellList);
                }
                productList.siblings(BT.selectors.loadingNotFull).hide();
                if(upsellList.length > 0) {
                	var index = 0;
				          $(upsellList).each(function(i, value) {
				            if(index < limit) {
				              productList.append(value);  
				            }
				            index++;
				          });
				          BT.convertCurrencySilence(selector.content + ' span.money');
					        productList.removeClass(BT.selectors.waitingData.replace('.',''));
					        if($(selector.content).hasClass('slick-initialized')) {
				        		$(selector.content).slick('unslick');
				        	}
                  BT.applyCustomColorSwatches(productList);
                  BT.popularAddedWishlistItems(productList);
					        setTimeout(function() {
					        	BT.initSlider(selector.wrap, false);	
					        }, 500);
                } else {
                	$(selector.wrap).hide();
                }
              }
            }));
          });
        } else {
          productList.siblings(BT.selectors.loadingNotFull).hide();
          $(selector.wrap).hide();
        }
       
      } catch(e) {
        // console.log(e);
      }
    }));
  },

  loadCrosssellProduct: function(needUpdateIds) {
    var ins = this, selector = this.selectors.crosssell;
    var crosssellEle = $(selector.wrap);
    if(crosssellEle.length == 0) {
      return;
    }
    this.cleanOldCrosssellRequests();
    if(needUpdateIds) {
      var table = $(this.selectors.itemsTable);
      if(table.length > 0) {
        var productIds = [];
        table.find('tbody .cart__row').each(function() {
          productIds.push($(this).attr('data-product-id'));
        });
        crosssellEle.attr('data-product-ids',productIds.join(','));
      } else {
        crosssellEle.attr('data-product-ids','');
      }
    }

    var ids = crosssellEle.attr('data-product-ids');
    if(ids) {
      var idsArray = ids.split(',');
      var limit = parseInt(crosssellEle.attr('data-limit'));
      var handles = [], urls = {};
      var requestLength = idsArray.length;
      var countRequest = 0;
      var grid = crosssellEle.children(selector.content);
      if(grid.hasClass('slick-initialized')) {
        grid.slick('unslick');
      }
      grid.html('');
      crosssellEle.children(BT.selectors.loadingNotFull).show();
      crosssellEle.removeClass('hide');
      $.each(idsArray, function(indexId, productId) {
        ins.data.cartCrosssellRequests.push(BT.callAjax(theme.recommendationUrl + '.json', 'GET', {product_id: productId, limit: limit}, 'json', function(response) {
          countRequest++;
          if(response.products.length > 0) {
            $.each(response.products, function(index, product) {
              if(idsArray.indexOf(product.id) < 0) {
                if(handles[index]) {
                  handles[index] = handles[index] + ',' + product.handle;
                } else {
                  handles[index] = product.handle;
                }
                urls[product.handle] = product.url;
              } 
            });
          }
          if(countRequest == requestLength) {
            handles = handles.join(',').split(',').filter(function(elem,idx,arr){ return arr.indexOf(elem) >= idx; });
            if(handles.length > limit) {
              handles = handles.slice(0, limit - 1);
            }
            crosssellEle.children(BT.selectors.loadingNotFull).hide();
            if(handles.length > 0) {
              var handleQuery = handles.join(',');
              ins.data.cartCrosssellRequests.push(BT.callAjax(theme.rootUrl, 'GET', {view: 'recommendation', 'q': handleQuery}, null, function(html) {
                grid.html(html);
                BT.convertCurrencySilence(grid.find('span.money'));
                BT.addRecommendationUrls(grid, urls);
                grid.addClass(BT.selectors.slider.useTouchMobile + ' ' + BT.selectors.slider.default.replace('.',''));
                BT.initSlider(crosssellEle, false);
                BT.initDealCountdown(grid);
                BT.applyCustomColorSwatches(grid);
                BT.reLoadReview(grid);
                BT.popularAddedWishlistItems(grid);
              }));
            } else {
              crosssellEle.addClass('hide');
            }
          }
        }));
      });
    } else {
      crosssellEle.addClass('hide');
    }
  },

	initCartEvent: function() {
		var ins = this;
		$(document).on('ajaxCart.afterCartLoad', function() {
			BT.callAjax(theme.cartUrl, 'GET', {view: 'ajax'}, null, function(html) {
				$(ins.selectors.content).html($(ins.selectors.content, html).html());
        BT.convertCurrencySilence(ins.selectors.content + ' span.money');
        var oldItemSize = ins.data.item_size;
        ins.updateItemSize();
        if(oldItemSize != ins.data.item_size) {
          ins.loadUpsellProduct();
          ins.loadCrosssellProduct(true);
        }
				if (window.Shopify && Shopify.StorefrontExpressButtons) {
	        Shopify.StorefrontExpressButtons.initialize();
	      }
        BT.resetCartTerms();
        if(ins.data.item_size == 0 && $(ins.selectors.countdown).length > 0) {
          $(ins.selectors.countdown).addClass('hide');
          BT.setCookie('countdown_reverse_cart-page',null);
        }
	      if($('#shipping-calculator').length > 0 && "undefined" != typeof Shopify.Cart && "undefined" != typeof Shopify.Cart.ShippingCalculator) {
          Shopify.Cart.ShippingCalculator.show( {
            submitButton: theme.strings.shippingCalcSubmitButton,
            submitButtonDisabled: theme.strings.shippingCalcSubmitButtonDisabled,
            customerIsLoggedIn: theme.strings.shippingCalcCustomerIsLoggedIn,
            moneyFormat: theme.strings.shippingCalcMoneyFormat                                     
          });
        }
			});
		});

		$(document).on('click', this.selectors.updateAllBtn, function(e) {
			e.preventDefault();
			BT.showLoadingFull();
      var ajaxData = {};
			var updateData = [];
			$(ins.selectors.qtyInput).each(function() {
				updateData.push($(this).val());
			});
      ajaxData.updates = updateData;
      if($('#CartSpecialInstructions').length > 0) {
        ajaxData.note = $('#CartSpecialInstructions').val();
      }
      BT.callAjax(theme.cartUpdateUrl, 'POST', ajaxData, 'json', function(response) {
				BT.updateHeaderCartHtml(true);
				BT.hideLoadingFull();
			});
		});
	},

  updateItemSize: function() {
    var table = $(this.selectors.itemsTable);
    if(table.length > 0) {
      this.data.item_size = table.find('tbody .cart__row').length;
    } else {
      this.data.item_size = 0;
    }
  },

	init: function() {
		this.initCartEvent();
	}
}

theme.cartTemplate = {};
theme.CartTemplateSection = (function() {
  function CartTemplateSection(container) {
  	BTCartPage.loadUpsellProduct();
    BTCartPage.loadCrosssellProduct(false);
    BTCartPage.updateItemSize();
    BT.initDealCountdown('.cart-countdown');
  }
  return CartTemplateSection;
})();

theme.CartTemplateSection.prototype = _.assignIn({}, theme.CartTemplateSection.prototype, {
  onSelect: function(evt) {
    if(evt.detail.load) {
      if($('.cart-countdown').length > 0) {
        BT.setCookie('countdown_reverse_cart-page',null);
        BT.initDealCountdown('.cart-countdown');
      }
    }
  },
  onUnload: function() {
  }
});

BTCartPage.init();
theme.sections.constructors['cart-template'] = theme.CartTemplateSection;