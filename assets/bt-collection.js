var BTCollection = {
	selectors: {
		filter: '.cf',
		filterContent: '.cf__content',
		filterLink: '.cf__link',
		filterCurrentLink: '.cf__link--current-js',
		filterCurrentInlineLink: '.cf__link--current-inline-js',
		filterCurrentInline: '.cf__current-inline',
		filterLinkAuto: '.cf__link--auto',
		filterLinkOption: '.cf__link--option',
		filterLinkColor: '.cf__link--color',
		filterContentAuto: '.cf__item__content--auto',
		filterPriceSlider: '.cf__price-slider',
		filterPriceFrom: '.cf__price-from',
		filterPriceTo: '.cf__price-to',
		filterPageAutoClass: 'cf__link--page-auto',
		filterClearAll: '.cf__link--clear-all',
		products: '.collection__products',
		currentTags: '.collection__current-tags',
		productsInner: '.products',
		modeLink: '.ct__mode__link',
		sort: '.ct__sort',
		total: '.ct__total',
		pagination: '.pagination',
		scrollBtn: '.collection__scroll',
		paginationButton: '.collection__scroll,.button--more,.pagination',
		productGrid: '.grid--products',
		productItem: '.grid__item',
		recentViewWrap: '.cf__item--recent-view',
		recentViewList: '.cf__item--recent-view__content',
		wrap: '#collection-template'
	},

	options: {
		clickEvent: 'click',
		ajaxView: 'ajax'
	},

	data: {
		collectionUrl: '',
		priceSlider: []
	},

	ignoreViewParam: function(str) {
		if(str != '' && str != undefined) {
			str = str.replace(/\?view=ajax\"/g,'"').replace(/\?view=ajax\&/g,'?').replace(/\&view=ajax/g,'');
		}
		return str;
	},

	updateHtml: function(html, updateAdditionalInfo) {
		var selector = this.selectors;
		var filterStr = $(selector.filter, html).html();
		$(selector.filter).html(this.ignoreViewParam(filterStr));
		var newGrid = $(selector.productGrid, html);
		$(selector.productGrid).html(newGrid.html());
		if(newGrid.hasClass('grid--full')) {
			$(selector.productGrid).addClass('grid--full');
		} else {
			$(selector.productGrid).removeClass('grid--full');
		}
		if(updateAdditionalInfo) {
			$('.breadcrumbs-page-title').html($('.breadcrumbs-page-title', html).html());
			$('.breadcrumbs').html($('.breadcrumbs', html).html());
			$('.collection__top').html($('.collection__top', html).html());
		}
		$(selector.currentTags).html(this.ignoreViewParam($(selector.currentTags, html).html()));
		BT.reLoadReview(selector.productGrid);
		BtCurrency.convertSilence(shopCurrency, BtCurrency.currentCurrency, $(selector.wrap).find('span.money'));
		BT.applyCustomColorSwatches(selector.products);
		BT.applyCustomColorSwatches(selector.filter);
		BT.initDealCountdown(selector.products);
		BT.popularAddedWishlistItems(selector.products);
		// Remove old current inline
		if($(selector.filterCurrentInline).length > 0) {
			$(selector.filterCurrentInline).remove();
		}
		var currentInline = $(selector.filterCurrentInline, html);
		if(currentInline.length > 0) {
			$(selector.products).prepend(currentInline[0].outerHTML);
		}
		$(selector.total).html($(selector.total, html).html());

		var collectionContent = $('.collection__content');
		if(collectionContent.offset().top < $(window).scrollTop()) {
			$('html, body').animate({
        scrollTop: (collectionContent.offset().top - 100)
      }, 400);
		}
		
		// Update sort by
		if($(this.selectors.sort).length > 0) {
			$(this.selectors.sort).html($(this.selectors.sort, html).html());
			$(this.selectors.sort).removeClass('active');
		}

		// Update scroll button
		if($(selector.paginationButton, html).length > 0) {
			if($(selector.paginationButton).length > 0) {
				$(selector.paginationButton).remove();
			}
			$(selector.products).append($(selector.paginationButton, html).get(0).outerHTML);
			if($(selector.scrollBtn).length > 0) {
				this.initInfiniteScrollCollection(selector.products);
			}
		} else if($(selector.paginationButton).length > 0) {
			if($(selector.scrollBtn).length > 0) {
				this.destroyInfiniteScroll();
			}
			$(selector.paginationButton).remove();
		}
	},

	collectAutoFilterParams: function(wrap, collectSortByParam, pageParam) {
		var ins = this, filterParams = [], currentLinkSelector = '.current', result = {};
		if(!wrap.length) {
			wrap = $(this.selectors.filterContent).first();
		}
		wrap.find(this.selectors.filterContentAuto).each(function() {
			var filterValues = [];
			$(this).find(currentLinkSelector).each(function() {
				filterValues.push($(this).attr('data-value'));
			});
			if(filterValues.length > 0) {
				filterParams.push($(this).attr('data-option-name') + '=' + filterValues.join('+'));
			}
		});
		
		var windowParams = new URLSearchParams(window.location.search);
		if(windowParams.has('q')) {
			result.q = windowParams.get('q');
		}
		if(collectSortByParam) {
			if(windowParams.has('sort_by')) {
				result.sort_by = windowParams.get('sort_by');
			}
		}

		if(pageParam && pageParam !== 1) {
			filterParams.push('btpage=' + pageParam);
		}
		if(wrap.find(this.selectors.filterPriceSlider).length > 0) {
			var slider = $(this.selectors.filterPriceSlider);
			var range = slider[0].noUiSlider.get();
			var priceMin = slider.attr('data-min')*1;
			var priceMax = slider.attr('data-max')*1;
			if(range[0] > priceMin || range[1] < priceMax) {
				filterParams.push('price=' + range.join('-'));
			}
		}
		var filterParamsStr = filterParams.join(',');
		if(filterParamsStr) {
			result.f = filterParamsStr;
		}
		return result;
	},

	resetPricesliders: function() {
		$.each(this.data.priceSlider, function(index, slider){
			var sliderIns = $(slider);
			slider.noUiSlider.updateOptions({start:[sliderIns.attr('data-min'), sliderIns.attr('data-max')]}, true);
		});
	},

	initPriceSliders: function() {
		var ins = this;
		// Destroy old slider
		$.each(this.data.priceSlider, function(index, slider){
			slider.noUiSlider.destroy();
		});
		this.data.priceSlider = [];
		$(this.selectors.filterPriceSlider).each(function() {
			var ele = $(this);
			var cfContent = ele.parents(ins.selectors.filterContent);
			var slider = document.getElementById(ele.attr('id'));
			var start = $(this).attr('data-start')*1;
			var end = $(this).attr('data-end')*1;
			var min = $(this).attr('data-min')*1;
			var max = $(this).attr('data-max')*1;
			noUiSlider.create(slider, {
		    connect: [false, true, false],
		    start: [start, end],
		    range: {
		        'min': min,
		        'max': max
		    },
		    step: 1,
		    format: {
		    	from: function(value) {
		    		return Math.round(value);
		    	},
		    	to: function(value) {
		    		return Math.round(value);
		    	}
		    },
		    direction: (rtl ? 'rtl' : 'ltr')
			});
			slider.noUiSlider.on('update', function(values, handle, unencoded, tap, positions, noUiSlider) {
				ele.parent().find(ins.selectors.filterPriceFrom).html(BT.getPriceHtml(values[0]));
				ele.parent().find(ins.selectors.filterPriceTo).html(BT.getPriceHtml(values[1]));
				BtCurrency.convertSilence(shopCurrency, BtCurrency.currentCurrency, '.cf__price span.money');
			});
			slider.noUiSlider.on('change', function(values, handle, unencoded, tap, positions, noUiSlider) {
				slider.setAttribute('disabled', true);
				ins.updateNewContent(ins.data.collectionUrl, ins.collectAutoFilterParams(cfContent, true), false, true);
			});
			ins.data.priceSlider.push(slider);
		});
	},

	addHistoryUrlToState: function(url, params) {
		if(this.inIframe()) {
			return;
		}
		try {
			var newUrl = this.ignoreViewParam(url), newParams;
			if(params != undefined && params != null) {
				newParams = new URLSearchParams(params);	
			} else {
				newParams = new URLSearchParams(window.location.search)
			}
			
			newParams.delete('section_id');
			newParams.delete('view');
			var newParamsStr = newParams.toString();
			if(newParamsStr != '') {
				if(url.indexOf('?') < 0) {
					newUrl += '?';
				} else {
					newUrl += '&';
				}
				newUrl += newParamsStr;
			}
			window.history.pushState({path: newUrl}, '', newUrl);	
		} catch (e) {
			console.log(e);
		}
	},

	inIframe: function() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
	},

	updateNewContent: function(url, params, updateAdditionalInfo, updateHistory) {
		BT.showLoadingFull();
		params.view = 'ajax';
		BT.callAjax(url, 'GET', params, null, function(html) {
			this.updateHtml(html, updateAdditionalInfo);
			this.initPriceSliders();
			BT.hideLoadingFull();

			if(url.indexOf('/search?') < 0) {
				this.data.collectionUrl = url.split('?')[0];	
			}
			if(updateHistory) {
				// Update history
				this.addHistoryUrlToState(url, params);
			}
		}.bind(this));
	},

	initAjaxLinkEvent: function() {
		var ins = this, autoClass = this.selectors.filterLinkAuto.replace('.',''), currentClass = 'current';
		$(document).on(this.options.clickEvent, this.selectors.filterLink, function(e) {
			e.preventDefault();
			var link = $(this);
			var href = link.attr('href');
			var params = {};
			if(link.hasClass(autoClass)) {
				if(link.hasClass(ins.selectors.filterLinkOption.replace('.',''))) {
					link.toggleClass(currentClass);
				}
				params = ins.collectAutoFilterParams(link.parents(ins.selectors.filterContent).first(),href.indexOf('sort_by') < 0, link.hasClass(ins.selectors.filterPageAutoClass) ? parseInt(link.attr('data-value')) : 0);
			}
			if(href == '#') {
				href = ins.data.collectionUrl;
			}
			ins.updateNewContent(href, params, link.hasClass('cfc__link'), true);			
		});
		$(document).on(this.options.clickEvent, this.selectors.filterCurrentLink, function(e) {
			e.preventDefault();
			var optionName = $(this).attr('data-option-name');
			$(this).removeClass(currentClass);
			var params = ins.collectAutoFilterParams($(this).parents(ins.selectors.filterContent), true, 0);
			ins.updateNewContent(ins.data.collectionUrl, params, false, true);			
		});
		$(document).on(this.options.clickEvent, this.selectors.filterCurrentInlineLink, function(e) {
			e.preventDefault();
			var triggerEle = $($(this).attr('data-trigger'));
			if(triggerEle.length > 0) {
				triggerEle.trigger('click');
			}
		});
		$(document).on(this.options.clickEvent, this.selectors.filterClearAll, function(e) {
			e.preventDefault();
			var cfContent = $(this).parents(ins.selectors.filterContent);
			cfContent.find(ins.selectors.filterCurrentLink).removeClass(currentClass);
			var params = ins.collectAutoFilterParams(cfContent, true, 0);
			ins.updateNewContent(ins.data.collectionUrl, params, false, true);			
		});
	},

	initPopState: function() {
		this.addHistoryUrlToState(window.location.pathname);
		$(window).bind("popstate", function(e) {
	    var state = e.originalEvent.state;
	    if ( state !== null ) { 
	      this.updateNewContent(state.path, {}, true, false);
	    }
		}.bind(this));
	},

	initViewModeEvent: function() {
		var ins = this;
		$(document).on(this.options.clickEvent, this.selectors.modeLink, function(e) {
			e.preventDefault();
			if($(this).hasClass('active')) {
				return;
			}
			var oldActive;
			if($(this).parent().hasClass('ct__mode__grid-mobile')) {
				oldActive = $('.ct__mode__grid-list');
				var desktopMode = $(this).attr('data-mode');
				$('.ct__mode__grid-desktop [data-mode="' + desktopMode +'"]').parent().addClass('active');
			} else {
				oldActive = $(this).parent().siblings('.active:not(.ct__mode__grid-mobile)');
				if($(this).parent().hasClass('ct__mode__grid-desktop')) {
					$('.ct__mode__grid-mobile').addClass('active').children().attr('data-mode',$(this).attr('data-mode'));
				} else {
					$('.ct__mode__grid-mobile').removeClass('active');
				}
			}
			var oldMode = oldActive.children(ins.selectors.modeLink).attr('data-mode');
			oldActive.removeClass('active');
			$(this).parent().addClass('active');
			$(ins.selectors.products).find(ins.selectors.productGrid).removeClass(oldMode).addClass($(this).attr('data-mode'));
		});
	},

	destroyInfiniteScroll: function() {
		BT.destroyInfiniteScroll('collection-template');
	},

	initInfiniteScrollCollection: function(wrap) {
		this.destroyInfiniteScroll();
		BT.initInfiniteScroll(wrap);
	},

	openCurrentFilterDropdown: function() {
		$('.cfc__link.active').each(function() {
			var link = $(this);
			link.parents('.cfc__dropdown').each(function() {
				var dropdown = $(this);
				dropdown.show();
				dropdown.parent('.link-list__item').addClass('open');
			});
		});
	},

	loadRecentViewProducts: function() {
		var wrap = $(this.selectors.recentViewWrap);
		if(wrap.length > 0) {
			var list = $(this.selectors.recentViewList);
			var handleItems = BT.getCookieItemsValue(true, BT.options.recentView.cookieName);
			if(handleItems.length > 0) {
				handleItems.reverse();
				var q = handleItems.join(',');
				BT.callAjax(theme.rootUrl, 'GET', {view:'recent_view_list', q: q}, null, function(html) {
		      list.html(html);
		      if(list.find('.item').length > 0) {
		        BT.convertCurrencySilence(list.find('span.money'));
		        BT.reLoadReview(list);
		        wrap.removeClass('hide');
		      }
		    });
			}
			
		}
	},

	init: function() {
		this.initAjaxLinkEvent();
		this.initViewModeEvent();
		BT.initExpandTrigger();
		this.loadRecentViewProducts();
		this.initPopState();
		// this.openCurrentFilterDropdown();
	}
}

theme.collectionTemplate = {};
theme.CollectionTemplateSection = (function() {
  function CollectionTemplateSection(container) {
  	var $container = this.$container = $(container);
  	this.obj = '#' + $container.attr('data-section-id');
  	BTCollection.data.collectionUrl = $container.attr('data-url');
  	BtCurrency.convertSilence(shopCurrency, BtCurrency.currentCurrency, $container.find('span.money'));
    BTCollection.initInfiniteScrollCollection($container);
    BT.applyCustomColorSwatches($container);
    BT.initDealCountdown($container.find(BTCollection.selectors.products));
    BTCollection.initPriceSliders();
  }
  return CollectionTemplateSection;
})();

theme.CollectionTemplateSection.prototype = _.assignIn({}, theme.CollectionTemplateSection.prototype, {
  onUnload: function() {
    BTCollection.destroyInfiniteScroll();
  }
});

BTCollection.init();
theme.sections.constructors['collection-template'] = theme.CollectionTemplateSection;