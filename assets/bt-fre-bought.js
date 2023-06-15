var BTFreBought = {
	selectors: {
		selectedClass: 'selected',
		checkbox: '.pg__fre-check',
		variantSelect: '.variant-id',
		pItem: '.pg',
		totalPrice: '.freb__total-price',
		addBtn: '.freb__add-btn',
		qtyBox: '.qty-box__input--fre',
		wrap: '.fre-bought'
	},

	updateTotalBox: function(wrap) {
		var price = 0;
		var comparePrice = 0;
		var ins = this;
		var count = 0;
		wrap.find(this.selectors.pItem + '.' + this.selectors.selectedClass).each(function() {
			var option = $(this).find(ins.selectors.variantSelect + ' option:selected');
			var qty = parseInt($(this).find(ins.selectors.qtyBox).first().val());
			if(option.data('available')) {
				price += parseInt(option.data('price')) * qty;
				comparePrice += parseInt(option.data('compare-price')) * qty;
				count++;
			}
		});
		wrap.find(this.selectors.totalPrice).html(this.getTotalPriceHtml(price, comparePrice));
		if(count > 0) {
			wrap.find(this.selectors.addBtn).removeAttr('disabled');
		} else {
			wrap.find(this.selectors.addBtn).attr('disabled', 'disabled');
		}
		BT.convertCurrencySilence(wrap.find('span.money'));
	},

	getTotalPriceHtml: function(price, comparePrice) {
    var priceHtml = '';
    if(comparePrice > price) {
    	priceHtml += '<span class="product-price__price product-price__price--freb">' + BT.getPriceHtml(price) + '</span>';
      priceHtml += '<s class="product-price__price product-price__price--freb">' + BT.getPriceHtml(comparePrice) + '</s>';      
    } else {
      priceHtml += '<span class="product-price__price product-price__price--freb">' + BT.getPriceHtml(price) + '</span>';
    }
    return priceHtml;
  },

  init: function() {
		var ins = this;
		$(this.selectors.checkbox).unbind('click');
		$(this.selectors.checkbox).on('click', function(e){
			e.preventDefault();
			$(this).closest(ins.selectors.pItem).toggleClass(ins.selectors.selectedClass);
			ins.updateTotalBox($(this).closest(ins.selectors.wrap));
		});
		$(this.selectors.variantSelect).unbind('change');
		$(this.selectors.variantSelect).on('change', function(){
			var variantId = $(this).val();
			var option = $(this).children('option[value="' + variantId + '"]');
			var pg = $(this).closest(ins.selectors.pItem);
			if(!option.data('available')) {
				pg.find(ins.selectors.checkbox).attr('disabled', 'disabled');
			} else {
				pg.find(ins.selectors.checkbox).removeAttr('disabled');
			}
			ins.updateTotalBox(pg.closest(ins.selectors.wrap));
		});
		$(this.selectors.addBtn).unbind('click');
		$(this.selectors.addBtn).on('click', function() {
			var wrap = $(this).closest(ins.selectors.wrap), params = [];
			var selectedItems = wrap.find(ins.selectors.pItem + '.' + ins.selectors.selectedClass);
			selectedItems.each(function() {
				var option = $(this).find(ins.selectors.variantSelect + ' option:selected');
				var qty = $(this).find(ins.selectors.qtyBox).first().val();
				if(option.data('available')) {
					var variantId = option.attr('value');
					params.push({id: variantId, quantity: qty});
				}
			});
			BT.showLoadingFull();

			BT.callAjax(theme.cartAddUrl, 'post', {items: params}, 'json', function(){
  			document.location.href = theme.cartUrl;
  		});
		});
		$(document).on('change', this.selectors.qtyBox, function() {
			ins.updateTotalBox($(this).closest(ins.selectors.wrap));
		});
		BT.applyCustomColorSwatches(this.selectors.wrap);
	}
}