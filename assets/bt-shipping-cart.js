/**
 * Module to add a shipping rates calculator to cart page.
 *
 * Copyright (c) 2011-2016 Caroline Schnapp (11heavens.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Modified by David Little, 2016
 */

"object" == typeof Countries && (Countries.updateProvinceLabel = function(e, t) {
    if ("string" == typeof e && Countries[e] && Countries[e].provinces) {
        if ("object" != typeof t && (t = document.getElementById("address_province_label"), null === t)) return;
        t.innerHTML = Countries[e].label;
        var r = jQuery(t).parent();
        r.find("select");
        r.find(".custom-style-select-box-inner").html(Countries[e].provinces[0])
    }
}), "undefined" == typeof Shopify.Cart && (Shopify.Cart = {}), Shopify.Cart.ShippingCalculator = function() {
    var _config = {
            submitButton: "Calculate shipping",
            submitButtonDisabled: "Calculating...",
            errorGeneralMsg: "Error : [messages].",
            errorCountrySupportMsg: "We do not ship to this destination.",
            templateId: "shipping-calculator-response-template",
            wrapperId: "wrapper-response",
            customerIsLoggedIn: !1,
            moneyFormat: "${{amount}}"
        },
        _render = function(e) {
            var t = jQuery("#" + _config.templateId),
                r = jQuery("#" + _config.wrapperId);
            if (t.length && r.length) {
                var templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                };
                var n = Handlebars.compile(jQuery.trim(t.html())),
                    a = n(e);
                if (jQuery(a).appendTo(r), "undefined" != typeof Currency && "function" == typeof Currency.convertAll) {
                    var i = "";
                    jQuery("[name=currencies]").size() ? i = jQuery("[name=currencies]").val() : jQuery("#currencies span.selected").size() && (i = jQuery("#currencies span.selected").attr("data-currency")), "" !== i && Currency.convertAll(shopCurrency, i, "#wrapper-response span.money, #estimated-shipping span.money")
                }
            }
        },
        _enableButtons = function() {
            jQuery(".get-rates").removeAttr("disabled").removeClass("disabled").val(_config.submitButton)
        },
        _disableButtons = function() {
            jQuery(".get-rates").val(_config.submitButtonDisabled).attr("disabled", "disabled").addClass("disabled")
        },
        _getCartShippingRatesForDestination = function(e) {
            var t = {
                type: "POST",
                url: theme.cartUrl + "/prepare_shipping_rates",
                data: jQuery.param({
                    shipping_address: e
                }),
                success: _pollForCartShippingRatesForDestination(e),
                error: _onError
            };
            jQuery.ajax(t)
        },
        _pollForCartShippingRatesForDestination = function(e) {
            var t = function() {
                jQuery.ajax(theme.cartUrl + "/async_shipping_rates", {
                    dataType: "json",
                    success: function(r, n, a) {
                        200 === a.status ? _onCartShippingRatesUpdate(r.shipping_rates, e) : setTimeout(t, 500)
                    },
                    error: _onError
                })
            };
            return t
        },
        _fullMessagesFromErrors = function(e) {
            var t = [];
            return jQuery.each(e, function(e, r) {
                jQuery.each(r, function(r, n) {
                    t.push(e + " " + n)
                })
            }), t
        },
        _onError = function(XMLHttpRequest, textStatus) {
            jQuery("#estimated-shipping").hide(), jQuery("#estimated-shipping em").empty(), _enableButtons();
            var feedback = "",
                data = eval("(" + XMLHttpRequest.responseText + ")");
            feedback = data.message ? data.message + "(" + data.status + "): " + data.description : _config.errorGeneralMsg.replace('[messages]',_fullMessagesFromErrors(data).join("; ")), "Error : country is not supported." === feedback && (feedback = _config.errorCountrySupportMsg), _render({
                rates: [],
                errorFeedback: feedback,
                success: !1
            }), jQuery("#" + _config.wrapperId).show()
        },
        _onCartShippingRatesUpdate = function(e, t) {
            _enableButtons();
            var r = "";
            if (t.zip && (r += t.zip + ", "), t.province && (r += t.province + ", "), r += t.country, e.length) {
                "0.00" == e[0].price ? jQuery("#estimated-shipping em").html("FREE") : jQuery("#estimated-shipping em").html(_formatRate(e[0].price));
                for (var n = 0; n < e.length; n++) e[n].price = _formatRate(e[n].price)
            }
            _render({
                rates: e,
                address: r,
                success: !0
            }), jQuery("#" + _config.wrapperId + ", #estimated-shipping").fadeIn();
            BT.convertCurrencySilence("#" + _config.wrapperId + " span.money");
        },
        _formatRate = function(e) {
            function t(e, t) {
                return "undefined" == typeof e ? t : e
            }
            return '<span class="product-price__price">' + BT.getPriceHtml(e) + '</span>';
        };
    return _init = function() {
        new Shopify.CountryProvinceSelector("address_country", "address_province", {
            hideElement: "address_province_container"
        });
        var e = jQuery("#address_country"),
            t = jQuery("#address_province_label").get(0);
        "undefined" != typeof Countries && (Countries.updateProvinceLabel(e.val(), t), e.change(function() {
            Countries.updateProvinceLabel(e.val(), t)
        })), jQuery(".get-rates").click(function() {
            _disableButtons(), jQuery("#" + _config.wrapperId).empty().hide();
            var e = {};
            e.zip = jQuery("#address_zip").val() || "", e.country = jQuery("#address_country").val() || "", e.province = jQuery("#address_province").val() || "", _getCartShippingRatesForDestination(e)
        }), _config.customerIsLoggedIn && jQuery(".get-rates:eq(0)").trigger("click")
    }, {
        show: function(e) {
            e = e || {}, jQuery.extend(_config, e), jQuery(function() {
                _init()
            })
        },
        getConfig: function() {
            return _config
        },
        formatRate: function(e) {
            return _formatRate(e)
        }
    }
}();
Shopify.Cart.ShippingCalculator.show( {
  submitButton: theme.strings.shippingCalcSubmitButton,
  submitButtonDisabled: theme.strings.shippingCalcSubmitButtonDisabled,
  errorGeneralMsg: theme.strings.shippingCalculatorErrorGeneralMsg,
  errorCountrySupportMsg: theme.strings.shippingCalculatorErrorCountrySupportMsg,
  customerIsLoggedIn: theme.strings.shippingCalcCustomerIsLoggedIn,
  moneyFormat: theme.strings.shippingCalcMoneyFormat                                     
} );