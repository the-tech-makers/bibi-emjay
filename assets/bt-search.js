var BTSearch = {
	selectors: {
		filterLink: '.cf__link',
		items: '.search__items',
		itemsInner: '.products',
		modeLink: '.ct__mode__link',
		pagination: '.pagination',
		scrollBtn: '.collection__scroll',
		grid: '.grid',
		item: '.grid__item'
	},

	options: {
		clickEvent: 'click',
		ajaxView: 'ajax'
	},

	data: {
	},

	ignoreViewParam: function(str) {
		if(str != '') {
			str = str.replace(/\?view=ajax\"/g,'"').replace(/\?view=ajax\&/g,'?').replace(/\&view=ajax/g,'');
		}
		return str;
	},

	updateHtml: function(html) {
		var selector = this.selectors;
		$(selector.items + ' ' + selector.grid).html($(selector.items + ' ' + selector.grid, html).html());
		BtCurrency.convertSilence(shopCurrency, BtCurrency.currentCurrency, $(selector.items).find('span.money'));
		BT.applyCustomColorSwatches(selector.items + ' ' + selector.grid);
		BT.reLoadReview(selector.grid);
		// Update pagination
		if($(selector.pagination).length > 0) {
			$(selector.pagination).html($(selector.pagination, html).html());
		}
	},

	initAjaxLinkEvent: function() {
		var ins = this;
		$(document).on(this.options.clickEvent, this.selectors.filterLink, function(e) {
			e.preventDefault();
			BT.showLoadingFull();
			var link = $(this);
			var href = link.attr('href');
			BT.callAjax(href, 'GET', {view: ins.options.ajaxView}, null, function(html) {
				ins.updateHtml(html);
				BT.hideLoadingFull();

				// Update history
				try {
					var newUrl = window.location.protocol + '//' + window.location.host + ins.ignoreViewParam(href);
					window.history.replaceState({path: newUrl}, '', newUrl);	
				} catch (e) {
					console.log(e);
				}
			});
		});
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
			$(ins.selectors.items).find(ins.selectors.grid).removeClass(oldMode).addClass($(this).attr('data-mode'));
		});
	},

	destroyInfiniteScroll: function() {
		BT.destroyInfiniteScroll('collection-template');
	},

	initInfiniteScrollSearch: function(wrap) {
		this.destroyInfiniteScroll();
		BT.initInfiniteScroll(wrap);
	},

	init: function() {
		this.initAjaxLinkEvent();
		this.initViewModeEvent();
	}
}

theme.SearchTemplateSection = (function() {
  function SearchTemplateSection(container) {
  	var $container = this.$container = $(container);
  	BtCurrency.convertSilence(shopCurrency, BtCurrency.currentCurrency, $container.find('span.money'));
    BT.applyCustomColorSwatches($container);
    BTSearch.initInfiniteScrollSearch($container);
  }
  return SearchTemplateSection;
})();

theme.SearchTemplateSection.prototype = _.assignIn({}, theme.SearchTemplateSection.prototype, {
  onSelect: function() {
  },
  onUnload: function() {
    BTSearch.destroyInfinityScroll();
  }
});

BTSearch.init();
theme.sections.constructors['search-template'] = theme.SearchTemplateSection;