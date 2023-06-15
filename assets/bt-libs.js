var BT = {
  selectors: {
    sidebar : {
      btn: '.bt-sidebar-btn',
      box: '.bt-sidebar',
      closeBtnCanvas: '.bt-sidebar__close',
      closeSidebarBtn: '.close-menu-btn',
      openClass: 'open-sidebar-canvas'
    },
    overlay: '.overlay',
    slider : {
      useTouchMobile: 'use-touch-mobile',
      default: '.use-slider',
      overFloatClasses: 'ov-slider-tb ov-slider-mb hide-in-loading'
    },
    desktopNav: {
      topItem: '.nav__item',
      parentItem: '.nav__item--parent',
      dropdown: '.nav__item__dropdown',
      parentNav: '.header__wrap'
    },
    verticalNav: {
      topItem: '.nav__item--ver',
      parentItem: '.nav__item--parent',
      dropdown: '.nav__item__dropdown',
      parentNav: '.main-nav--ver'
    },
    dropdown: {
      wrap: ".bt-dropdown",
      trigger: ".bt-dropdown__trigger",
      content: ".bt-dropdown__content"
    },
    productGroup: {
      wrap: ".pg",
      option: ".pg__option",
      swatch: ".pg__option__values",
      optionValue: ".pg__option__value",
      mainImg: '.pg__main-image',
      thumbs: '.pg__thumbs',
      thumbsSmallClass: 'pg__thumbs--small',
      thumbsLargeClass: '.pg__thumbs--large',
      thumbsSlider: '.pg__thumbs--slider',
      thumbsSliderVerticalClass: 'pg__thumbs--slider-vertical',
      thumb: '.pg__thumb',
      thumbLink: '.pg__thumb__link',
      mains: '.pg__mains',
      mainsSlider: '.pg__mains--slider',
      main: '.pg__main',
      mainLink: '.pg__main__link',
      mainLinkModel: '.pg__main__link--model',
      price: '.product-price',
      cartBtn: '.add-cart-btn',
      cartBtnState: '.add-cart-btn--state',
      variantId: '.variant-id',
      variantTitle: '.pg__variant-title',
      loadingClass: 'loading-data',
      groupData: '.group-data',
      isGroupClass: 'is-group',
      reCalcIndexClass: 're-calc-index',
      imgZoom: '.cloudzoom',
      countdown: '.pg__countdown-js',
      syncUrl: '.pg__sync-url',
      labelDeal: '.lb-item--sale',
      labelPercent: '.lb__percent',
      stickySmallPrice: '.sc__small-price',
      singleProgress: '.product-single__progress',
      stockText: '.pg__stock-text',
      stockText1: '.pg__stock-text1',
      stockText2: '.pg__stock-text2',
      stockNumber: '.pg__stock-number--update',
      video: '.pg__video',
      videoYoutube: '.pg__video--youtube',
      videoVimeo: '.pg__video--vimeo',
      sku: '.pg__sku',
      ignoreLightBoxClass: 'ignore-lightbox',
      swatchOutStock: 'swatch__item--soldout',
      storePickupWrap: '.store-availability-container',
      storePickupInner: '.store-availability-inner',
      storePickupBtn: '.store-availability-information__button',
      storePickupModel: '#storePickupPopup',
      storePickupProductTitle: '.store-availabilities-modal__product-title',
      storePickupVariantTitle: '.store-availabilities-modal__variant-title'
    },
    cart: {
      addBtn: '.add-cart-btn',
      updateBtn: '.update-cart-btn',
      header: '.header__cart',
      headerTriggerDesktop: '.header__cart-trigger-desktop',
      headerTriggerMobile: '.header__cart-trigger-mobile',
      number: '.cart-number',
      total: '.cart-total',
      selectOptionClass: 'select-option',
      qtyInput: '.cart__qty-input'
    },
    qtyBox: {
      ctrlBtn: '.qty-box__ctrl',
      decreaseBtnClass: 'qty-box__ctrl--descrease',
      increaseBtnClass: 'qty-box__ctrl--increase',
      inputSyncClass: 'qty-box__input--sync'
    },
    mediaBtn: '.button--media',
    loadingAjaxClass: 'loading-ajax',
    workingClass: 'working',
    qvBtn: '.button--qv',
    qvPopup: '#quickViewPopup',
    selectOptionBtn: '.button--select-option',
    selectOptionPopup: '#selectOptionPopup',
    compare: {
      popup: '#comparePopup',
      btn: '.button--cp',
      removeBtn: '.button-cp--remove',
      variantId: '.variant-id--compare',
      actionsRow: '.actions-row',
      availabilityRow: '.availability-row',
      bestPriceBadge: '.compare-popup__badge',
      headerLink: '.header__link--compare',
      number: '.compare-number'
    },
    wishlist: {
      popup: '#wishlistPopup',
      btn: '.button--wl',
      btnWithText: '.button--wl-text',
      btnText: '.wishlist-text',
      removeBtn: '.button-wl--remove',
      headerLink: '.header__link--wishlist',
      number: '.wishlist-number'
    },
    waitingData: '.waiting-data', // ignore this element when init slider to wait the data is loaded.
    waitingTabData: '.waiting-tab-data', // load data when the correspoding tab is opened.
    waitingScrollData: '.waiting-scroll-data', // load data when element is visible in viewport.
    loadMoreBtn: '.button--more',
    loadingFull: '.loading-full',
    cartMessage: '.cart-message',
    cartModal: {
      wrap: '#cartModal',
      productImage: '.cart-response__image',
      productName: '.cart-response__name',
      variantTitle: '.cart-response__meta-variant-title-wrap',
      variantProp: '.cart-response__meta-propeties',
      price: '.cart-response__price .product-price__price',
      linePrice: '.cart-response__line-price .product-price__price',
      qty: '.cart-response__qty',
      freeShippingText: '.cart-response__free-shipping__text',
      freeShippingProgressBar: '.progress-bar--popup-cart'
    },
    notify: '.notify',
    notifyClassTypes: 'alert-success alert-danger',
    floatField: '.field--float-label',
    floatFieldFirstFocus: '.first-focus',
    /* Recommended products */
    rp: {
      wrap: '.rp',
      item: '.rp__item',
      minuteNumber: '.rp__minute-number',
      closeBtn: '.rp__close'
    },
    /* Newsletter popup */
    newsPopup: {
      id: '#newsletterPopup',
      checkbox: '#newsPopupHide'
    },
    newsTerms: {
      form: '.newsletter-form',
      input: '.news-terms-input',
      error: '.news-terms-error'
    },
    /* Promotion */
    promo: {
      wrap: '.promo',
      closeBtn: '.promo__close'
    },
    upsell: {
      wrap: '.upsell-ele',
      list: '.upsell-list'
    },
    related: {
      wrap: '.related-ele',
      list: '.related-list',
    },
    loadingNotFull: '.loading-not-full',
    infiniteScroll: {
      button: '.infinite-scroll',
      wait: '.wait-infinite-scroll'
    },
    cartTerms: {
      wrap: '.cart-terms',
      popup: '#termsPopup',
      checkbox: '.terms-check',
      label: '.cart-terms__label',
      checkoutBtn: '.checkout-btn',
      paymentBtn: '.shopify-payment-button,.additional-checkout-buttons'
    },
    popupVideo: {
      btn: '.video-thumbnail',
      youtubeBtn: '.js-modal-btn--youtube',
      vimeoBtn: '.js-modal-btn--vimeo'
    },
    searchFull: {
      wrap: '.search-full',
      trigger: '.search-full-trigger',
      content: '.search-full__content',
      input: '.search-full__input',
      inputSync: '.search-full__input-sync',
      loading: '.search-full__loading',
      close: '.search-full__close-js',
      tabTitle: '.search-full__tab-title',
      tabList: '.search-full__tab-list',
      tabContent: '.search-full__content__tab',
      result: '.search-full__result',
      loadedClass: 'loaded',
      suggestProducts: '.search-full__suggest-products'
    },
    ajaxSnippet: '.load-ajax-snippet'
  },
  options: {
    dropdown: {
      duration: 150
    },
    sidebar: {
      duration: 300,
      openEvent: 'click',
      closeEvent: 'click'
    },
    slider: {
      slidesToShow: 4,
      slidesToScroll: 1,
      //asNavFor: wrap + ' .viewmore-main',
      dots: false,
      //centerMode: true,
      focusOnSelect: false,
      infinite: false,
      swipe: true,
      swipeToSlide: true,
      rtl: rtl,
      nextArrow: '<button aria-label="button" class="slick-next button button--style2 button--circle lh1"><span></span></button>',
      prevArrow: '<button aria-label="button" class="slick-prev button button--style2 button--circle lh1"><span></span></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    },
    productGroup: {
      smallSlider: {
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        infinite: false,
        focusOnSelect: true,
        centerMode: false,
        rtl: rtl,
        nextArrow: '<button aria-label="button" class="slick-next button button--style2 button--circle lh1 slick-box"><span></span></button>',
        prevArrow: '<button aria-label="button" class="slick-prev button button--style2 button--circle lh1 slick-box"><span></span></button>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              vertical:false,
              verticalSwiping:false,
              slidesToShow: 5
            }
          }
        ]
      },
      mainSlider: {
        slidesToShow: 1,
        slidesToScroll: 1,
        //asNavFor: wrap + ' .viewmore-thumbs',
        arrows: false,
        fade: false,
        infinite: false,
        swipeToSlide: true,
        arrows: true,
        adaptiveHeight: true,
        lazyLoad: 'ondemand',
        rtl: rtl,
        nextArrow: '<button aria-label="button" class="slick-next button button--style2 button--circle lh1 slick-box"><span></span></button>',
        prevArrow: '<button aria-label="button" class="slick-prev button button--style2 button--circle lh1 slick-box"><span></span></button>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              "dots":true,
              "arrows":false
            }
          }
        ]
      }
    },
    windowScreen: {
      desktop: 768,
      mobile: 767
    },
    productZoom: {zoomSizeMode: 'image',autoInside:true, tintOpacity: 0, zoomPosition: 'inside'},
    countdown: {
      dealCountdownReg : '([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})',
      dealCountdownTpl : $('#bt_countdown_html').html()
    },
    compare: {
      cookieName: 'bt-compare',
      firstLoaded: false
    },
    wishlist: {
      cookieName: 'bt-wishlist'
    },
    productNameHolder: 'product_title',
    notifyDuration: 300,
    notifyTimeout: 3000,
    notifyClassTypes: {
      success: 'success',
      danger: 'danger'
    },
    rp: {
      cookieName: 'rp_hide',
      duration: 700
    },
    newsPopup: {
      cookieName: 'hide_news_popup'
    },
    promo: {
      cookieName: 'hide_promo'
    },
    cartTerms: {
      cookieName: 'cart_terms'
    },
    newsTerms: {
      cookieName: 'news_terms'
    },
    recentView: {
      cookieName: 'recent_view_products'
    },
    desktopNav: {
      view: 'navigation'
    },
    verticalNav: {
      view: 'navigation-vertical'
    }
  },
  data: {
    productGroup: {},
    outStockGroup: {},
    updatingProductOptions: false,
    productVideo: {
      currentPlayer: null,
      currentType: null,
      loadYoutubeApi: false,
      loadVimeoApi: false,
      vimeoPlayers: {}
    },
    productGroupInfiniteScroll: {},
    updateCartRequests: [],
    favicon: null,
    zoom: {
      single: null,
      quickView: null
    },
    rp: {
      openTimeInterval: null
    },
    modalVideoWorking: false,
    loadedSnippets: [],
    thresholdMenu: 0,
    stickyMenuObj: null,
    resizeEventName: 'bt_resize_window',
    scrollEventName: 'bt_scroll_window',
    cacheWindowWidth: $(window).width(),
    isTouchDevide: false,
    thresholdMenuWithPromotion: 33,
    sliderIndex: 0,
    wishlist: {
      loaded: false
    },
    cookieArray: {},
    pageLoaded: false,
    searchSuggestionCurrentType: 'product',
    searchSuggestionCurrentAjaxRequest: null,
    customColorCodes: null,
    customColorCodesLoading: false,
    customColorCodesStack: [],
    initTopBar: false,
    ajaxSetup: false
  },

  shuffleArray: function (d) {
    for (var c = d.length - 1; c > 0; c--) {
      var b = Math.floor(Math.random() * (c + 1));
      var a = d[c];
      d[c] = d[b];
      d[b] = a;
    }
    return d;
  },

  /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution!
   */
  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  getCookie: function (name) {
    try {
      return $.cookie(name);
    } catch(e) {
    }
  },

  setCookie: function(name, value, expire) {
    try {
      var params = {path: '/'};
      if(expire) {
        params.expires = expire;
      }
      $.cookie(name, value, params);
    } catch(e) {
    }
  },

  stripScripts: function(s) {
    var div = document.createElement('div');
    div.innerHTML = s;
    var scripts = div.getElementsByTagName('script');
    var i = scripts.length;
    while (i--) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }
    return div.innerHTML;
  },

  callAjax: function(url, type, data, dataType, cb, cbError) {
    var ins = this;
    return $.ajax({
      type: type,
      url: url,
      data: data,
      dataType: dataType,
      error: function(xhr, textStatus, errorThrown) {
        ins.hideLoadingFull();
        if(xhr.responseJSON != undefined) {
          if(xhr.responseJSON.description != undefined && xhr.responseJSON.description != null) {
            ins.showNotify(xhr.responseJSON.description, ins.options.notifyClassTypes.danger);
          } else if (xhr.responseJSON.message != undefined) {
            ins.showNotify(xhr.responseJSON.message, ins.options.notifyClassTypes.danger);
            //showNotifyMsg(xhr.responseJSON.message, 'error');
          }
        }
        if(cbError) {
          cbError();
        }
      },
      success: function(response){
        cb(response);
      }
    });
  },

  renderSectionByAjaxApi: function(sectionId, data, cb) {
    var ajaxData = data;
    ajaxData.section_id = sectionId;
    this.callAjax(theme.rootUrl, 'get', ajaxData, null, cb);
  },

  requestUpdateCart: function(line, qty, cb, cbError){
    $(this.data.updateCartRequests).each(function(index, xhr) {
      if(xhr && xhr.readyState != 4){
        xhr.abort();
      }
    });
    this.data.updateCartRequests = [];
    this.data.updateCartRequests.push(this.callAjax(theme.cartChangeUrl, 'POST', {line: line, quantity: qty}, 'json', function(cart) {
      if(cb) {
        cb(cart);
      }
    }, cbError));
  },

  requestEmptyCart: function(cb){
    this.callAjax(theme.cartClearUrl, 'POST', {}, 'json', function(cart) {
      if(cb) {
        cb(cart);
      }
    });
  },

  resizeImage : function(t, r) {
    try {
        if ("original" == r) return t;
        var e = t.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);
        return e[1] + "_" + r + "." + e[2]
    } catch (r) {
        return t
    }
  },

  isInViewport : function(ele, windowEle) {
      var elementTop = ele.offset().top;
      var elementBottom = elementTop + ele.outerHeight();
      var viewportTop = $(windowEle).scrollTop();
      var viewportBottom = viewportTop + $(windowEle).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
  },

  rteWrapTable: function(wrap) {
    if(typeof wrap == 'string') {
      wrap = $(wrap);
    }
    //
    wrap.find('table').each(function() {
      $(this).removeAttr('style').removeAttr('border').addClass('table table-bordered table-striped').wrap(
        '<div class="table-responsive"></div>'
      );
    });
  },

  rteWrapEmbed: function(wrap) {
    if(typeof wrap == 'string') {
      wrap = $(wrap);
    }
    wrap.find('.embed-responsive-item,iframe,embed,object,video').each(function() {
      /*$(this).wrap(
        '<div class="embed-responsive"></div>'
      );
      this.src = this.src;*/
      $(this).css('max-width','100%');
    });
  },

  rteWrap: function(wrap) {
    this.rteWrapTable(wrap);
    this.rteWrapEmbed(wrap);
  },

  startLoadingBtn: function(btn) {
    btn.find('i').addClass(this.selectors.loadingAjaxClass);
  },

  endLoadingBtn: function(btn) {
    btn.find('i').removeClass(this.selectors.loadingAjaxClass);
  },

  showLoadingFull: function() {
    if(!this.data.initTopBar) {
      topbar.config(topbarConfig);
      this.data.initTopBar = true;
    }
    topbar.show();
  },

  hideLoadingFull: function() {
    topbar.hide();
  },

  getPriceHtml: function(price) {
    return theme.Currency.formatMoney(price, theme.moneyFormat);
  },

  handleString: function(str) {
    return str.toLowerCase().replace(/\"/g,'').replace(/\'/g,'').replace(/[\(,\*,\)]/g,'').replace(/  /g,' ').replace(/ /g,'-');
  },

  convertCurrencySilence: function(selector) {
    BtCurrency.convertSilence(shopCurrency, BtCurrency.currentCurrency, selector);
  },

  callSnippetAjax: function(snippetName, cb) {
    this.callAjax(theme.rootUrl, 'GET', {view: 'snippet', q: snippetName}, null, function(html) {
      cb(html);
    });
  },

  loadSnippetAjax: function(snippetName, cb, delay) {
    if(this.data.loadedSnippets.indexOf(snippetName) > -1) {
      cb();
    } else {
      var ins = this;
      this.callSnippetAjax(snippetName, function(html) {
        ins.data.loadedSnippets.push(snippetName);
        if($('.snippet-error', html).length == 0) {
          $('body').append(html);
          setTimeout(function() {
            cb();
          }, (delay) ? delay : 300);
        }
      });
    }
  },

  processSameId: function(htmlStr) {
    var cloneIdElements = htmlStr.match(/data-clone-id=\"(.*?)\"/g);
    if(cloneIdElements != null) {
      $.each(cloneIdElements, function(index, value){
        var strFind = value.replace(/data-clone-id=/g,'').replace(/"/g,'');
        var newId = 'clone-' + Math.floor(Math.random() * 100);
        var regex = new RegExp( strFind, 'g' );
        htmlStr = htmlStr.replace(regex, newId);
      });
    }
    return htmlStr;
  },

  showPopup: function(id) {
    var timeout = 0, ins = this, popupClass = id.replace('#','');
    if($('.modal.in:not(.' + popupClass + ')').length > 0) {
      $('.modal.in:not(.' + popupClass + ')').each(function() {
        ins.hidePopup('#' + $(this).attr('id'));
      });
      timeout = 500;
    }
    setTimeout(function() {
      $(id).modal('show');
    }, timeout);
  },

  hidePopup: function(id) {
    $(id).modal('hide');
  },

  showNotify: function(msg, type) {
    var notify = $(this.selectors.notify), activeClass = 'active', ins = this;
    notify.removeClass(this.selectors.notifyClassTypes);
    notify.addClass('alert-' + type);
    notify.html(msg);
    if(notify.hasClass(activeClass)) {
      if(this.data.notifyTimeout) {
        clearTimeout(this.data.notifyTimeout);
      }
      this.hideNotify();
    } else {
      notify.slideDown(ins.options.notifyDuration, function() {
        notify.addClass(activeClass);
        ins.hideNotify();
      }); 
    }
  },

  hideNotify: function() {
    var notify = $(this.selectors.notify), activeClass = 'active', ins = this;
    this.data.notifyTimeout = setTimeout(function() {
      notify.slideUp(ins.options.notifyDuration, function() {
        notify.removeClass(activeClass);
      });
    }, this.options.notifyTimeout);
  },

  runLoadingDropdownNavInAjax: function(wrap, type, cb) {
    var dropdownSelector = this.selectors[type].dropdown;
    var view = this.options[type].view;
    this.callAjax(theme.searchUrl, 'get', {'view': view}, null, function(html){
      $(wrap).find(dropdownSelector).each(function(){
        var dropdownId = '#' + $(this).attr('id');
        $(this).html($(dropdownId, html).html());
      });
      cb();
    });
  },

  openMobileNav: function() {
    $('.mobile-nav').find('.link-list__item__link.active').each(function() {
      var link = $(this);
      link.parents('.link-list__item__dropdown').each(function() {
        var dropdown = $(this);
        dropdown.show();
        dropdown.parent('.link-list__item').addClass('open');
      });
    });
  },

  /* Mobile Navigation */
  initMobileNavigation: function() {
    var openClass = 'open', workingClass = this.selectors.workingClass;
    function showSubmenu(item) {
      if(item.hasClass(workingClass)) {
        return;
      }
      item.addClass(workingClass);
      item.children('.mobile-nav__children').fadeIn(300, function() {
        item.removeClass(workingClass);
      });
    }
    function hideSubmenu(item, cb) {
      if(item.hasClass(workingClass)) {
        return;
      }
      item.addClass(workingClass);
      item.children('.mobile-nav__children').hide();
      item.removeClass(workingClass);
      if(cb) {
        cb();
      }
    }
    $(document).on('click', '.mobile-nav__arrow', function(e) {
      e.preventDefault();
      var arrow = $(this);
      var parent = $(this).parents('.mobile-nav__item').first();
      if(parent.hasClass(workingClass)) {
        return;
      }

      if(!parent.hasClass(openClass)) {
        parent.addClass(openClass);
        showSubmenu(parent);
        parent.siblings('.' + openClass).each(function() {
          var top = arrow.position().top - 60;
          $(this).removeClass(openClass);
          hideSubmenu($(this), function() {
            if(!BT.isInViewport(arrow, window.self)) {
              parent.parents('.bt-sidebar__inner').scrollTop(top);
            }
          }.bind(this));
        });
      } else {
        parent.removeClass(openClass);
        hideSubmenu(parent);
      }
    });
    // this.openMobileNav();
  },

  showDropdown: function(ele) {
    var ins = this;
    ele.find('.load-header-cart').each(function() {
      $(this).removeClass('load-header-cart');
      $(this).html(ins.processSameId($('#header-cart-canvas').html()));
    });
    ele.addClass('active');
  },

  hideDropdown: function(ele){
    ele.removeClass('active');
  },

  initDropdown: function() {
    var dropdownSelector = this.selectors.dropdown,
      ins = this,
      overlaySelector = this.selectors.overlay;
      
    $(document).on('mouseenter', dropdownSelector.wrap, function() {
      if(!ins.data.isTouchDevide) {
        ins.showDropdown($(this));
      }
    }).on('mouseleave', dropdownSelector.wrap, function(e) {
      if(!ins.data.isTouchDevide && !$(e.target).is(':focus')) {
        ins.hideDropdown($(this));
      }
    });
    $(document).on('click', dropdownSelector.trigger, function(e) {
      if(ins.data.isTouchDevide) {
        e.preventDefault();
        var parent = $(this).parents(dropdownSelector.wrap).first();
        if(parent.hasClass('active')) {
          ins.hideDropdown(parent);
        } else {
          var dataGroup = parent.attr('data-group');
          if(dataGroup != undefined) {
            $(dropdownSelector.wrap + '[data-group="' + dataGroup + '"].active').removeClass('active');
          }
          ins.showDropdown(parent);
        }
      }
    });
    $(document).on('click', 'body', function(e) {
      if($(e.target).parents(dropdownSelector.wrap).length == 0) {
        if($(dropdownSelector.wrap + '.active').length > 0) {
          $(dropdownSelector.wrap + '.active').removeClass('active');
        }
      }
    });
  },

  getInputFloatSelector: function() {
    var floatSelector = this.selectors.floatField;
    return floatSelector + ' input[type="text"],' 
      + floatSelector + ' input[type="password"],'
      + floatSelector + ' input[type="number"],'
      + floatSelector + ' input[type="email"],'
      + floatSelector + ' input[type="tel"]';
  },

  initFloatField: function() {
    var floatSelector = this.selectors.floatField, ins = this;
    var inputSelector = this.getInputFloatSelector();
    $(document).on('focus', inputSelector, function() {
      $(this).parents(floatSelector).addClass('active focus');
    });
    $(document).on('blur', inputSelector, function() {
      if($(this).val() == '') {
        $(this).parents(floatSelector).removeClass('active');
      }
      $(this).parents(floatSelector).removeClass('focus');
    });
    if($(this.selectors.floatFieldFirstFocus).length > 0) {
      $(this.selectors.floatFieldFirstFocus).parents(floatSelector).addClass('active focus');
    }
  },

  detectAutoFields: function() {
    var floatSelector = this.selectors.floatField;
    var inputSelector = this.getInputFloatSelector();
      $(inputSelector).each(function() {
        try {
          if($(this).val() != '' || $(this).is(":-webkit-autofill")) {
            $(this).parents(floatSelector).addClass('active');
          }
        } catch(e) {
          if($(this).val() != '') {
            $(this).parents(floatSelector).addClass('active');
          }
        }
    });
  },

  loadCssJsLib: function(libName, cb) {
    if(theme.loadedLibs.indexOf(libName) > -1) {
      if(cb) {
        cb();
      }
    } else {
      if(theme.libs[libName] != undefined) {
        var cssLibs = theme.libs[libName].css, jsLib = theme.libs[libName].js, ins = this;
        if(cssLibs != undefined && theme.loadedCssLibs.indexOf(libName) == -1) {
          theme.loadedCssLibs.push(libName);
          $.each(cssLibs, function(index, fileUrl) {
            $('<link/>', {
               rel: 'stylesheet',
               type: 'text/css',
               href: 'https:' + fileUrl
            }).appendTo('head');
          });
        }
        if(jsLib != undefined) {
          if(theme.pendingJsLibs[libName] == undefined) {
            theme.pendingJsLibs[libName] = [];
            if(ins.data.ajaxSetup == false) {
              $.ajaxSetup({
                  cache: true
              });
              ins.data.ajaxSetup = true;
            }
            $.getScript(
              'https:' + jsLib
            ).then(function() {
              theme.loadedLibs.push(libName);
              if(cb) {
                cb();  
              }
              $.each(theme.pendingJsLibs[libName], function(index, cbItem) {
                cbItem();
                delete theme.pendingJsLibs[libName][index];
              });
            });
          } else {
            if(cb) {
              theme.pendingJsLibs[libName].push(cb);
            }
          }
        } else {
          theme.loadedLibs.push(libName);
          if(cb) {
            cb();
          }
        }
      }
    }
  },

  /* Sidebar */
  initSidebar: function() {
    var ins = this;
    $(document).on(this.options.sidebar.openEvent, this.selectors.sidebar.btn, function(e) {
      e.preventDefault();
      e.stopPropagation();
      var dataPlacement = $(this).attr('data-placement');
      var dataPlacementMobile = $(this).attr('data-placement-mobile');
      var direction = (ins.data.cacheWindowWidth >= 768) ? dataPlacement : (dataPlacementMobile == undefined ? dataPlacement : dataPlacementMobile);
      var block = $(this).attr('data-target');
      if(!$('body').hasClass(ins.selectors.sidebar.openClass)) {
        ins.showSidebar(block, direction, ins.options.sidebar.duration);
      }
    });
    this.initHideNavMobile(300);
  },
  initHideNavMobile: function(duration) {
    var ins = this;
    var triggerSelector = this.selectors.overlay + ',' + this.selectors.sidebar.closeBtnCanvas + ',' + this.selectors.sidebar.closeSidebarBtn;
    $(document).on(ins.options.sidebar.closeEvent, triggerSelector, function(e) {
      e.preventDefault();
      e.stopPropagation();
      if($('body').hasClass(ins.selectors.sidebar.openClass)) {
        ins.hideSidebar(duration, $(ins.selectors.overlay).attr('data-block'));
      }
    });
  },
  showSidebar : function(block, direction, duration) {
    var width = $(block).outerWidth();
    //$('.wrap-all').css({'overflow-x': 'inherit'});
    var dataShow = {}
    $(block).removeAttr('style');
    if(direction == 'left') {
      dataShow.left = 0;
      $(block).css({left: '-100%'});
      $(block).css({right: 'auto'});
    } else if(direction == 'right') {
      dataShow.right = 0;
      $(block).css({right: '-100%'});
      $(block).css({left: 'auto'});
    } else {
      dataShow = 'slideDown';
    }
    $('body').trigger('beforeShowSidebar-' + block.replace('#',''));
    var overlaySelector = this.selectors.overlay;
    $(overlaySelector).attr('data-block', block);

    var ins = this;
    if(dataShow == 'slideDown') {
      var ownCanvasOpenClass = ins.selectors.sidebar.openClass + '--' + $(block).attr('id');
      $('body').addClass(ins.selectors.sidebar.openClass + ' ' + ownCanvasOpenClass);
      $(block).slideDown(duration, function() {
        $(overlaySelector).addClass(direction);
      });
    } else {
      var ownCanvasOpenClass = ins.selectors.sidebar.openClass + '--' + $(block).attr('id');
      $('body').addClass(ins.selectors.sidebar.openClass + ' ' + ownCanvasOpenClass);
      $(block).animate(dataShow,{
        duration: duration,
        complete: function() {
          $(overlaySelector).addClass(direction);
        }
      });
    }
    $(overlaySelector).fadeIn(ins.options.sidebar.duration);
  },
  hideSidebar: function(duration, block) {
    var overlaySelector = this.selectors.overlay;
    var direction = $(overlaySelector).hasClass('left') ? 'left' : ($(overlaySelector).hasClass('up') ? 'up' : 'right');  
    var width = $(block).outerWidth();
    var dataHide = {};//, dataCloseBtn = {opacity: 0, top: '-100px'};
    if(direction == 'left') {
      dataHide.left = '-100%';
    } else if(direction == 'right') {
      dataHide.right = '-100%';
    } else {
      dataHide = 'slideUp';
    }
    var ownCanvasOpenClass = this.selectors.sidebar.openClass + '--' + $(block).attr('id');
    $('body').removeClass(this.selectors.sidebar.openClass + ' ' + ownCanvasOpenClass);
    if(dataHide == 'slideUp') {
      $(block).slideUp(duration, function() {
        $(overlaySelector).removeClass(direction);
        $(block).removeAttr('style');
      });
    } else {
      $(block).animate(dataHide, {
        duration: duration,
        complete: function() {
          $(overlaySelector).removeClass(direction);
          $(block).removeAttr('style');
        }
      });
    }
    $(overlaySelector).fadeOut(duration);
  },

  initSlickSlider: function(ele, useEffect) {
    var dataSlider = {};
    $.extend(true, dataSlider, this.options.slider);
    if(ele.attr('data-slider')) {
      try {
        dataSlider = $.extend(true, dataSlider, JSON.parse(ele.attr('data-slider')));
      } catch(e) {
        ele.addClass('failed');
        dataSlider = this.options.slider;
      }
    }
    if(useEffect) {
      ele.off('beforeChange');
      ele.off('afterSlideChange');
      ele.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var $slider = slick.$slider;
        var $currentSlide = $slider.find('.slick-current').addClass('animate-out');
      });
      ele.on('afterChange', function(event, slick, currentSlide) {
        var $slider = slick.$slider;
        var $allSlides = $slider.find('.slick-slide').removeClass('animate-out');
      });
    }
    ele.slick(dataSlider);
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if(isSafari && ele.hasClass('need-refresh')) {
      ele.slick('refresh');
    }

  },
  initSliderEle: function(ele, useEffect) {
    if(this.data.cacheWindowWidth >= this.options.windowScreen.desktop || !ele.hasClass(this.selectors.slider.useTouchMobile)) {
      var parent = ele.parent();
      parent.height(parent.height());
      parent.css({'overflow': 'hidden'});
      this.preInitSlider(ele);
      this.initSlickSlider(ele, useEffect);
      setTimeout(function() {
        ele.parent().removeAttr('style');
      }, 500);
    } else {
      this.preInitSlider(ele);
    }
  },
  preInitSlider: function(wrap, includeHideClass) {
    if(typeof wrap == 'string') {
      wrap = $(wrap);
    }
    var classes = this.selectors.slider.overFloatClasses;
    if(includeHideClass) {
      classes += ' hide';
    }
    wrap.find('.' + classes.replace(/ /g,',.')).removeClass(classes);
  },
  triggerResizeSlider: function(ele) {
    var ins = this;
    if(ele.hasClass(ins.selectors.slider.useTouchMobile)) {
      $(window).on(ins.data.resizeEventName, function() {
        if(ins.data.cacheWindowWidth >= ins.options.windowScreen.desktop) {
          if(!ele.hasClass('slick-initialized')) {
            ins.initSlickSlider(ele);
          }
        } else {
          if(ele.hasClass('slick-initialized') && ele.hasClass(ins.selectors.slider.useTouchMobile)) {
            setTimeout(function() {
              ele.slick('unslick');
            }, 300);
          }
        }
      });
    }
  },

  getSliderSelector: function() {
    return this.selectors.slider.default + ':not(' + this.selectors.waitingData + ')';
  },

  initSlider: function(wrap, wait, useEffect) {
    var ins = this;
    var sliderSelector = this.getSliderSelector(), touchMobileWrap = 'touch-mobile';
    if(typeof wrap == 'string') {
      wrap = $(wrap);
    }
    var sliders = wrap.find(sliderSelector);
    if(!sliders.length) {
      return;
    }

    if(this.data.cacheWindowWidth >= this.options.windowScreen.desktop || !wrap.hasClass(touchMobileWrap)) {
      if(wait) {
        var suffixEvent = 'init_slider_' + this.data.sliderIndex;
        this.data.sliderIndex++;
        this.initScrollingWindowTriggerOnce(wrap, suffixEvent,  -170, function() {
          sliders.each(function() {
            var ele = $(this);
            ins.initSliderEle(ele, useEffect);
            ins.triggerResizeSlider(ele);
          });
        });
      } else {
        sliders.each(function() {
          var ele = $(this);
          ins.initSliderEle(ele, useEffect);
          ins.triggerResizeSlider(ele);
        });
      }
    } else {
      ins.preInitSlider(wrap);
      sliders.each(function() {
        var ele = $(this);
        ins.triggerResizeSlider(ele);
      });
    }
  },

  destroySlider: function(wrap) {
    if(typeof wrap == 'string') {
      wrap = $(wrap);
    }
    var sliders = wrap.find(this.getSliderSelector());
    if(!sliders.length) {
      return;
    }
    sliders.each(function() {
      var ele = $(this);
      if(ele.hasClass('slick-initialized')) {
        ele.slick('unslick');
      }
    });
  },

  refreshSliderInTabs: function() {
    var ins = this;
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      var windowWidth = ins.data.cacheWindowWidth;
      var tabContent = $(e.target).attr('href');
      var sliderSelector = ins.selectors.slider.default + ':not(' + ins.selectors.waitingData + ')';
      if($(tabContent).find(sliderSelector).length > 0) {
        $(tabContent).find(sliderSelector).each(function() {
          var ele = $(this);
          if(windowWidth >= ins.options.windowScreen.desktop) {
            if(ele.hasClass('slick-initialized')) {
              ele.slick('setPosition');
            }
          } else {
            if(!ele.hasClass(ins.selectors.slider.useTouchMobile) && ele.hasClass('slick-initialized')) {
              ele.slick('setPosition');
            }
          }
        });
      }
    });
  },

  submitCartForm: function(form, btn, cb, cbError) {
    var ins = this;
    if(form.valid()) {
      /*var progressWrap = btn.siblings('.progress');
      var progressBar = progressWrap.find('.progress-bar');
      if(progressWrap) {
        progressWrap.removeClass('hide');
      }*/
      form.ajaxSubmit({
        url: theme.cartAddUrl,
        type: 'post',
        dataType: 'json',
        error: function(xhr, textStatus, errorThrown) {
          if(xhr.responseJSON.description != undefined && xhr.responseJSON.description != null) {
            ins.showNotify(xhr.responseJSON.description, ins.options.notifyClassTypes.danger);
          } else if (xhr.responseJSON.message != undefined) {
            ins.showNotify(xhr.responseJSON.message, ins.options.notifyClassTypes.danger);
            //showNotifyMsg(xhr.responseJSON.message, 'error');
          }
          ins.endLoadingBtn(btn);
          btn.removeClass(ins.selectors.workingClass);
          //showNotifyMsg(xhr.responseJSON.description, 'error');
          /*if(progressWrap) {
            progressBar.width('0%').text('0%');
            progressWrap.addClass('hide');
          }*/
        },
        uploadProgress: function(event, position, total, percentComplete) {
          /*if(progressWrap) {
            progressBar.width(percentComplete + '%').text(percentComplete + '%');  
          }*/
        },
        success: function(data, textStatus, jqXHR, $form) {
          /*if(progressWrap) {
            progressBar.width('0%').text('0%');
            progressWrap.addClass('hide');
          }*/
          cb(data);
        }
      });
    } else {
      cbError();
    }
  },

  updateFaviconBadge: function(number) {
    if(!theme.favicon.enable || this.data.cacheWindowWidth < 768 || !number) {
      return false;
    }
    if(this.data.favicon == null) {
      this.data.favicon = new Favico({
        animation:'slide',
        position: theme.favicon.pos,
        bgColor : theme.favicon.bkgColor,
        textColor : theme.favicon.textColor,
      });
    }
    number = parseInt(number);
    if(number > 0) {
      this.data.favicon.badge(number);
    } else {
      this.data.favicon.reset();
    }
  },

  updateHeaderCartHtml: function(ignoreCartAction) {
    if((theme.cartAction == 'redirect' || theme.cartAction == 'redirect_checkout' ) && ignoreCartAction == false) {
      return;
    }
    var cartSelector = this.selectors.cart, ins = this;
    new Promise(function(resolve, reject) {
      ins.callAjax(theme.rootUrl, 'GET', {view: 'header_cart'}, null, function(response) {
        var htmlHeaderCart, headerCartSelector;
        htmlHeaderCart = $(cartSelector.header, response).html();
        headerCartSelector = cartSelector.header;
        $(headerCartSelector).each(function() {
          $(this).html(ins.processSameId(htmlHeaderCart));
        });
        var number = $(cartSelector.number, response).html();
        var total = $(cartSelector.total, response).html();
        $(cartSelector.number).html(number);
        $(cartSelector.total).html(total);
        ins.updateFaviconBadge(number);
        resolve(cartSelector.header);  
      });
    }).then(function(wrapper) {
      if(wrapper != undefined) {
        ins.convertCurrencySilence(wrapper + ' span.money');
        $(document).trigger('ajaxCart.afterUpdateHeaderCartHtml');
      }
      ins.convertCurrencySilence(cartSelector.total + ' span.money');
      ins.resetCartTerms();
      $(document).trigger('ajaxCart.afterCartLoad');
      // Not run below code on cart page
      if (window.Shopify && Shopify.StorefrontExpressButtons != undefined && !$('body').hasClass('template-cart')) {
        Shopify.StorefrontExpressButtons.initialize();
      }
    }, function(err) {
      // console.log(err);
    });
  },

  generateCartMessage: function(productTitle) {
    return theme.strings.addCartMsg.replace(this.options.productNameHolder, '<strong>' + productTitle + '</strong>');
  },

  updateCartMessage: function(productTitle) {
    $(this.selectors.cartMessage).removeClass('hide').html(this.generateCartMessage(productTitle));
  },

  showPopupCart: function(cartResponse, cb) {
    var ins = this;
    this.loadSnippetAjax('popup-cart', function() {
      ins.loadUpsellInPopup(cartResponse.handle, cartResponse.title);
      ins.updateCartMessage(cartResponse.title);
      var selector = ins.selectors.cartModal;
      // wrap: '#cartModal',
      //   productImage: '.cart-response__image',
      //   productName: '.cart-response__name',
      //   variantTitle: '.cart-response__meta-variant-title',
      //   variantProp: '.cart-response__meta-propeties',
      //   price: '.cart-response__price',
      //   qty: '.cart-response__qty'
      $(selector.productImage).attr('href', cartResponse.url)
        .attr('title', cartResponse.title)
        .find('img')
        .attr('src', ins.resizeImage(cartResponse.image, '360x'))
        .attr('alt', cartResponse.title);
      
      $(selector.productName + ' > a').attr('title', cartResponse.title)
        .attr('href', cartResponse.url)
        .html(cartResponse.product_title);
      
      var variantTitle = $(selector.variantTitle);
      variantTitle.html('');
      if(cartResponse.variant_title != null) {
        $(cartResponse.options_with_values).each(function(index, option) {
          variantTitle.append('<span class="cart-response__meta-variant-title w100 db">' + option.name + ': ' + option.value + '</span>');
        });   
      }

      if(cartResponse.properties) {
        var prop = $(selector.variantProp);
        prop.removeClass('hide');
        prop.html('');
        $.each(cartResponse.properties, function( index, p ){
          var pItem = $('<span class="gutter-ele-small-top w100 db cart__meta-text"></span>')
          pItem.append(index + ': ');
          if(p.indexOf('/uploads/') > 0) {
            pItem.append(p.split("/").pop());
          } else {
            pItem.append(p);
          }
          prop.append(pItem);
        });
      } else {
        $(selector.variantProp).addClass('hide');
      }

      $(selector.qty).html(cartResponse.quantity); 
      $(selector.price).html(ins.getPriceHtml(cartResponse.price)); 
      $(selector.linePrice).html(ins.getPriceHtml(cartResponse.line_price));
      ins.resetCartTerms();
      if(theme.enableFreeShipping) {
        ins.callAjax(theme.cartJsonUrl, 'get', null, 'json', function(cartObj) {
          var freeShippingPercent;
          if(cartObj.total_price >= theme.freeShippingGoal) {
            $(selector.freeShippingText).html(theme.freeShippingGoalText);
            freeShippingPercent = 100;
          } else {
            var remain_amount = theme.freeShippingGoal - cartObj.total_price;
            var remain_amount_html = '<strong>' + ins.getPriceHtml(remain_amount) + '</strong>';
            $(selector.freeShippingText).html(theme.freeShippingProgressText.replace('[remain_amount]',remain_amount_html));
            freeShippingPercent = Math.round((cartObj.total_price*100)/theme.freeShippingGoal);
          }
          $(selector.freeShippingProgressBar).attr('aria-valuenow',freeShippingPercent).css('width',freeShippingPercent + '%');
          $(selector.freeShippingProgressBar + ' span').text(freeShippingPercent + '%');
          BtCurrency.convertSilence(shopCurrency, BtCurrency.currentCurrency, selector.wrap + ' span.money');
          ins.showPopup(selector.wrap);
          cb();
        });
      } else {
        BtCurrency.convertSilence(shopCurrency, BtCurrency.currentCurrency, selector.wrap + ' span.money');
        ins.showPopup(selector.wrap);
        cb();
      }
    });
  },

  enableCartTerms: function() {
    $(this.selectors.cartTerms.checkbox).prop('checked', false);
    $(this.selectors.cartTerms.checkoutBtn).addClass('disabled');
    $(this.selectors.cartTerms.paymentBtn).addClass('disabled');
  },

  disableCartTerms: function() {
    $(this.selectors.cartTerms.checkbox).prop('checked', true);
    $(this.selectors.cartTerms.checkoutBtn).removeClass('disabled');
    $(this.selectors.cartTerms.paymentBtn).removeClass('disabled');
  },

  resetCartTerms: function() {
    if(this.agreeCartTerms()) {
      this.disableCartTerms();
    } else {
      this.enableCartTerms();
    }
  },

  showCartTermsErrorMsg: function(label) {
    label.addClass('notify-terms');
    if(label.siblings('.alert').length == 0) {
      label.parent().append('<div class="alert alert-danger w100 distance-top-ele" style="margin-bottom:0;display:none;">' + theme.strings.cartTermsErrorMsg + '</div>');  
    }
    label.siblings('.alert').show(300);
  },

  hideCartTermsErrorMsg: function() {
    var label = $(this.selectors.cartTerms.label);
    label.removeClass('notify-terms');
    label.siblings('.alert').hide(300);
  },

  initAgreeCartTems: function(){
    if(!theme.cartTerms) {
      return true;
    }
    var ins = this, cookieName = this.options.cartTerms.cookieName, selector = this.selectors.cartTerms;
    this.resetCartTerms();
    $(document).on('change', selector.checkbox, function(e) {
      e.preventDefault();
      if($(this).is(':checked')) {
        ins.setCookie(cookieName, 1);
        if($(this).hasClass('redirect')) {
          window.location.href = '/checkout';
        } else {
          $(selector.checkbox).not(this).prop('checked', true);
          $(selector.checkoutBtn).removeClass('disabled');
          $(selector.paymentBtn).removeClass('disabled');
          ins.hideCartTermsErrorMsg();
        }
      } else {
        ins.setCookie(cookieName, null);
        $(selector.checkbox).not(this).prop('checked', false);
        $(selector.checkoutBtn).addClass('disabled');
        $(selector.paymentBtn).addClass('disabled');
      }
    });
    $(document).on('click', '.shopify-payment-button,' + selector.checkoutBtn, function(e) {
      if($(this).hasClass('disabled')) {
        e.preventDefault();
        ins.showCartTermsErrorMsg($(this).parent().siblings(selector.wrap).find(selector.label).first());
      } else {
        if($(this).hasClass('checkout-btn--redirect')) {
          window.location.href = theme.rootUrl + 'checkout';
        }
      }
    });
  },

  agreeCartTerms: function() {
    if(!theme.cartTerms) {
      return true;
    }
    var cookieName = this.options.cartTerms.cookieName;
    var cookie = this.getCookie(cookieName);
    if(cookie == undefined || cookie == null || cookie == 'null') {
      return false;
    }
    return true;
  },

  runCartAction: function(cartResponse, cb) {
    if(theme.cartAction == 'redirect') {
      window.location.href = theme.cartUrl;
    } else if (theme.cartAction == 'redirect_checkout') {
      if(this.agreeCartTerms()) {
        window.location.href = '/checkout';
      } else {
        this.updateHeaderCartHtml(true);
        var ins = this;
        this.loadSnippetAjax('popup-terms', function() {
          if($(ins.selectors.cartTerms.popup).length > 0) {
            ins.showPopup(ins.selectors.cartTerms.popup);
            cb();
          }
        });
      }
    } else if(theme.cartAction == 'popup') {
      this.updateHeaderCartHtml(false);
      this.showPopupCart(cartResponse, cb);
    } else if(theme.cartAction == 'open_cart') {
      this.updateHeaderCartHtml(false);
      setTimeout(function() {
        $('.cart-sidebar-trigger').trigger('click');
        cb();
      }, 300);
    } else if(theme.cartAction == 'notify_msg') {
      this.updateHeaderCartHtml(false);
      this.showNotify(this.generateCartMessage(cartResponse.title), this.options.notifyClassTypes.success);
      cb();
    } else {
      this.updateHeaderCartHtml(false);
      cb();
    }
  },

  initCartEvent: function () {
    var ins = this, cartSelector = this.selectors.cart;
    $(document).on('click', cartSelector.addBtn, function(e) {
      e.preventDefault();
      var btn = $(this);
      if(btn.hasClass(ins.selectors.workingClass)) {
        return;
      }
      // Add product to cart
      var form = $(this).parents('form');

      btn.addClass(ins.selectors.workingClass);
      ins.startLoadingBtn(btn);
      ins.submitCartForm(form, btn, function(response) {
        ins.runCartAction(response, function() {
          ins.endLoadingBtn(btn);
          if((theme.cartAction == 'open_cart' || theme.cartAction == 'notify_msg') && btn.parents('.modal').length > 0) {
            ins.hidePopup('#' + btn.parents('.modal').first().attr('id'));
          }
        });
        btn.removeClass(ins.selectors.workingClass);
      }, function() {
        ins.endLoadingBtn(btn);
        btn.removeClass(ins.selectors.workingClass);
      });
    });

    $(document).on('click', cartSelector.updateBtn, function(e) {
      e.preventDefault();
      if($(this).hasClass(ins.selectors.workingClass)) {
        return;
      }
      $(this).addClass(ins.selectors.workingClass);
      if($(this).attr('data-toggle') == 'tooltip') {
        $(this).tooltip('hide');
        if($(this).hasClass('cart__remove')) {
          $(this).removeAttr('data-toggle');
        }
      }
      var line = $(this).attr('data-index');
      var value = $(this).attr('data-value');
      var i = $(this).find('i');
      i.addClass(ins.selectors.loadingAjaxClass);
      if(isNaN(value)) {
        if($(value).length == 0) {
          $(this).find('i').removeClass(ins.selectors.loadingAjaxClass);
          $(this).removeClass(ins.selectors.workingClass);
          return;
        }
        // value is selector to an input
        value = $(value).val();
      }
      ins.requestUpdateCart(line, value, function() {
        ins.updateHeaderCartHtml(true);
      }, function() {
        i.removeClass(ins.selectors.loadingAjaxClass);
      });
    });

    $(document).on('change', cartSelector.qtyInput, function() {
      var line = $(this).attr('data-line');
      ins.showLoadingFull();
      ins.requestUpdateCart(line, $(this).val(), function() {
        ins.updateHeaderCartHtml(true);
        ins.hideLoadingFull();
      }, function() {
        ins.hideLoadingFull();
      });
    });
  },

  hideSearchFull: function() {
    $(this.selectors.searchFull.wrap).fadeOut();
    $('body').removeClass('open-search-suggest');
  },

  renderSearchFullContent: function(html) {
    var selector = this.selectors.searchFull;
    this.data.searchSuggestionCurrentAjaxRequest = null;
    $(selector.loading).removeClass(this.selectors.loadingAjaxClass);
    $(selector.content + '__' + this.data.searchSuggestionCurrentType).addClass(selector.loadedClass);
    var resultWrap = $(selector.content + '__' + this.data.searchSuggestionCurrentType + ' ' + selector.result);
    resultWrap.html(html);
    $(selector.suggestProducts).hide();
    if(this.data.searchSuggestionCurrentType == 'product') {
      this.convertCurrencySilence(resultWrap.find('span.money'));
      this.initDealCountdown(resultWrap);
      this.applyCustomColorSwatches(resultWrap);
      this.reLoadReview(resultWrap);
      this.popularAddedWishlistItems(resultWrap);
    }
  },

  initSearchSuggestion: function () {
    var selector = this.selectors.searchFull, workingClass = 'working', snippetName = 'search-full', promo = this.selectors.promo.wrap;
    var ins = this;
    var resetHeight = false, tempTerm = undefined;
    function showSearchContent() {
      $(selector.wrap).fadeIn();
      $('body').addClass('open-search-suggest');
    }
    $(document).on('click', selector.trigger, function(e, term, hideSuggestProducts) {
      e.preventDefault();
      if(term != undefined) {
        tempTerm = term;
      }
      if($(this).hasClass(workingClass)) {
        return;
      }
      var btn = $(this);
      btn.addClass(workingClass);
      showSearchContent();
      btn.removeClass(workingClass);
      if(tempTerm != undefined) {
        $(selector.input).val(tempTerm);
        $(selector.input).trigger('change');
        tempTerm = undefined;
      }
      $(selector.input).focus();
    });
    $(document).on('click', selector.close, function(e) {
      e.preventDefault();
      ins.hideSearchFull();
    });
    if(!theme.searchSuggest.enable) {
      return;
    }
    var loadedClass = 'loaded';
    var needResetLoaded = false;
    var dataSearch = {options:{prefix:'last'}};
    $(document).on('keyup change', selector.input, $.throttle(500, function(evt) {
      var input = $(this);
      var term = input.val(); 
      if (term.length >= 3 && term != input.attr('data-term')) {
        if (ins.data.searchSuggestionCurrentAjaxRequest != null) {
          ins.data.searchSuggestionCurrentAjaxRequest.abort();
        }
        var searchURL = theme.searchUrl + '?view=suggest&q=' + term + '&type=' + ins.data.searchSuggestionCurrentType;
        $(selector.loading).addClass(ins.selectors.loadingAjaxClass);
        input.attr('data-term', term);
        needResetLoaded = true;
        ins.data.searchSuggestionCurrentAjaxRequest = ins.callAjax(searchURL, 'get', dataSearch, null, function(html) {
          $(selector.tabList).removeClass('hide');
          $(selector.content).removeClass('hide');
          $(selector.tabContent + ':not(.active)').removeClass(loadedClass);
          needResetLoaded = false;
          ins.renderSearchFullContent(html);
          $(window).trigger('renderedSearchFullContent', [term]);
        });
      }
    }));
    $(document).on('keyup change', selector.inputSync, $.throttle(500, function(evt) {
      var input = $(this);
      var term = input.val();
      if (term.length >= 3 && term != $(this).attr('term')) {
        $(selector.inputSync).siblings('button').find('i').addClass(ins.selectors.loadingAjaxClass);
        $(selector.trigger).trigger('click', [term, true]);
      }
    }));
    $(window).on('renderedSearchFullContent', function(e, term) {
      $(selector.inputSync).attr('term', term);
      $(selector.inputSync).siblings('button').find('i').removeClass(ins.selectors.loadingAjaxClass);
    });
    $(document).on('shown.bs.tab', selector.tabTitle, function (e) {
      var target = $(e.target);
      var tabContent = $(target.attr('href'));
      if(needResetLoaded) {
        $(selector.tabContent + ':not(.active)').removeClass(loadedClass);
        needResetLoaded = false;
      }
      ins.data.searchSuggestionCurrentType = target.attr('data-type');
      if(!tabContent.hasClass(selector.loadedClass)) {
        if (ins.data.searchSuggestionCurrentAjaxRequest != null) { 
          ins.data.searchSuggestionCurrentAjaxRequest.abort();
          
        };
        var term = $(selector.input).val();
        var url = theme.searchUrl + '?view=suggest&q=' + term + '&type=' + ins.data.searchSuggestionCurrentType;
        ins.data.searchSuggestionCurrentAjaxRequest = ins.callAjax(url, 'get', dataSearch, null, function(html) {
          ins.renderSearchFullContent(html);
          $(window).trigger('renderedSearchFullContent', [term]);
        });
      }
    });
  },

  loadUpsell: function(wrap) {
    if(typeof wrap == 'undefined' || wrap.length == 0) {
      return;
    }
    var ins = this, selector = this.selectors.upsell;
    var productHandle = wrap.attr('data-handle');
    var list = wrap.find(selector.list);
    if(list.hasClass('slick-initialized')) {
      list.slick('unslick');
    }
    list.html('');
    list.siblings(this.selectors.loadingNotFull).show();
    wrap.show();
    var limit = upsellRandom ? 100 : parseInt(wrap.attr('data-limit'));
    this.callAjax(theme.rootUrl + 'products/' + productHandle, 'GET', {view:'upsell_tags'}, null, function(responseTags) {
      new Promise(function(resolve, reject) {
        var upsellTags = $.parseJSON(responseTags.replace('<!-- BEGIN template -->','').replace('<!-- product.upsell_tags -->','').replace('<!-- END template -->','')), upsellList = [], upsellIds = [], index = 0;
        var tagsLength = upsellTags.length;
        if(tagsLength == 0) {
          resolve([]);
        }
        var view = wrap.attr('data-slider') ? 'upsell_slider' : 'upsell';
        $(upsellTags).each(function(indexTag, tag) {
          ins.callAjax(theme.collectionAllUrl + '/' + tag, 'GET', {view:view}, null, function(responseUpsell) {
            $('.product-item', responseUpsell).each(function() {
              if(upsellIds.indexOf($(this).attr('data-id')) < 0 && $(this).attr('data-handle') != productHandle && index < limit) {
                upsellList.push($(this).html());
                upsellIds.push($(this).attr('data-id'));
                index++;
              }
            });
            
            if(indexTag == tagsLength - 1) {
              if(upsellRandom) {
                upsellList = ins.shuffleArray(upsellList);
              }
              resolve(upsellList);
            }
          });  
        });
      }).then(function(upsellList) {
        list.siblings(ins.selectors.loadingNotFull).hide();
        if(upsellList.length > 0) {
          var index = 0;
          $(upsellList).each(function(i, value) {
            if(index < limit) {
              list.append(value);  
            }
            index++;
          });
          ins.convertCurrencySilence(list.find('span.money'));
          ins.applyCustomColorSwatches(list);
          ins.initSlider(wrap, false, false);
          ins.popularAddedWishlistItems(wrap);
        } else {
          wrap.hide();
        }
      }, function(e) {
        // console.log(e);
      });
    });
  },

  loadUpsellInPopup: function(productHandle, productTitle) {
    var ins = this;
    var upsellEle = $(this.selectors.cartModal.wrap + ' ' + this.selectors.upsell.wrap);
    if(typeof upsellEle == 'undefined' || upsellEle.length == 0) {
      return;
    }
    upsellEle.attr('data-handle', productHandle);
    upsellEle.find('.upsell-title').html(theme.strings.upsellTitle.replace(this.options.productNameHolder, '<strong>' + productTitle + '</strong>'));
    this.loadUpsell(upsellEle);
  },

  addRecommendationUrls: function(ele, urls) {
    var qvBtn = this.selectors.qvBtn;
    var hrefSelector = 'a.item__image,a.item__name,' + qvBtn;
    ele.find('.item').each(function() {
      var handle = $(this).attr('data-product-handle');
      if(urls[handle]) {
        $(this).find(hrefSelector).attr('href', urls[handle]);
        $(this).find('.effect-hover__bkg').attr('onclick', "window.location.href = '" + urls[handle] + "';");
      }
    })
  },

  gotoSliderIndex: function(slider, index) {
    slider.slick('slickGoTo', index, true);
  },

  getUnitPriceHtml: function(pg, variant) {
    if(variant.unit_price_measurement != undefined) {
      var html = '<span class="w100 gutter-ele' + (!pg.hasClass('product-single') ? '-small' : '') + '-top product-price__unit db">';
      html += this.getPriceHtml(variant.unit_price) + '<span class="product-price__unit__separator">/</span><span class="product-price__unit__base">'
      + (variant.unit_price_measurement.reference_value != 1 ? variant.unit_price_measurement.reference_value : '') + variant.unit_price_measurement.reference_unit + '</span>';
      html += '</span>';
      return html;
    }
    return '';
  },

  getVariantPriceHtml: function(pg, variant) {
    var priceHtml = '';
    if(variant.compare_at_price > variant.price) {
      priceHtml += '<span class="product-price__price">' + this.getPriceHtml(variant.price) + '</span>';
      priceHtml += '<s class="product-price__price product-price__sale">' + this.getPriceHtml(variant.compare_at_price) + '</s>';
    } else {
      priceHtml += '<span class="product-price__price">' + this.getPriceHtml(variant.price) + '</span>';
    }
    if(variant.available == false && pg.attr('data-ignore-sold-out-text') == undefined) {
      priceHtml += '<span class="product-price__sold-out">' + theme.strings.soldOut + '</span>';
    }
    priceHtml += this.getUnitPriceHtml(pg, variant);
    return priceHtml;
  },

  initProductGroup: function() {
    var selector = this.selectors.productGroup, options = this.options.productGroup, ins = this;
    // Init small images slider
    // this.initProductThumbsSlider();
    // this.initProductMainSliderAndZoom();
    
    $(document).on('click change', selector.optionValue, function(e) {
      e.preventDefault();
      var btn = $(this);
      var pg = btn.parents(selector.wrap).first();
      var productHandle = pg.attr('data-product-handle');
      if($(this).hasClass('disabled') 
        || ($(this).hasClass('selected') && ins.data.productGroup[productHandle] != undefined) 
        || (e.type == 'click' && e.target.nodeName == 'SELECT')) {
        return;
      }
      new Promise(function(resolve, reject) {
        ins.data.updatingProductOptions = true;
        if(ins.data.productGroup[productHandle] == undefined) {
          // Load product data
          pg.addClass(selector.loadingClass);
          ins.callAjax(theme.rootUrl + 'products/' + productHandle, 'get', {view: 'tjson'}, null, function(response) {
            ins.data.productGroup[productHandle] = $.parseJSON(response.replace('<!-- BEGIN template -->','').replace('<!-- product.tjson -->','').replace('<!-- END template -->',''));
            pg.removeClass(selector.loadingClass);
            resolve();
          });
        } else {
          resolve();
        }
      }).then(function() {
        // Create current select
        var currentOption = btn.parents(selector.option);
        var currentOptionIndex = currentOption.attr('data-index');
        var currentSelect = [];
        var optionFormat = btn.prop("tagName").toLowerCase();
        pg.find(selector.option).each(function() {
          var index = $(this).attr('data-index'), value;
          if(index != currentOptionIndex) {
            if($(this).hasClass('swatch')) {
              value = $(this).find('.selected').attr('data-value');
            } else {
              value = $(this).find(selector.optionValue).val();
            }
          } else {
            if(optionFormat == 'a') {
              value = btn.attr('data-value');
            } else {
              value = btn.val();
            }
          }
          currentSelect.push(value);
          if($(this).hasClass(selector.isGroupClass)) {
            pg.find(selector.groupData).attr('data-value', value);
          }
        });

        // Find new variant base on current select
        var optionSize = currentSelect.length,
          newVariant,
          newVariant1,
          newVariant2,
          newVariant3,
          availableOption2 = [],
          availableOption3 = [],
          variantsMatchOption1 = [];
          variantsMatchOption2 = [],
          resetOutStockGroup = (ins.data.outStockGroup[productHandle] == undefined && !currentOption.hasClass('last')),
          isLastOption = currentOption.hasClass('last');
          if(resetOutStockGroup) {
            ins.data.outStockGroup[productHandle] = [];
          }
        $.each(ins.data.productGroup[productHandle], function(variantId, variant) {
          if(variant.options[0] == currentSelect[0]) {
            if(newVariant == undefined) {
              newVariant = variant;
            }
            if(newVariant1 == undefined && (variant.available || isLastOption)) {
              newVariant1 = variant;
            }
            if(optionSize > 1) {
              if(availableOption2.indexOf(variant.options[1]) == -1) {
                availableOption2.push(variant.options[1]);
              }
              variantsMatchOption1.push(variant);
              if(variant.options[1] == currentSelect[1]) {
                if(newVariant2 == undefined && (variant.available || isLastOption)) {
                  newVariant2 = variant;
                }
                variantsMatchOption2.push(variant);
                if(optionSize > 2) {
                  if(variant.options[2] == currentSelect[2] && newVariant3 == undefined && (variant.available || isLastOption)) {
                    newVariant3 = variant;
                  }
                  availableOption3.push(variant.options[2]);
                }
              }
            }
          }
          if(resetOutStockGroup && !variant.available) {
            ins.data.outStockGroup[productHandle].push(variant.title);
          }
        });
        if(!isLastOption) {
          if(optionSize > 1 && availableOption2.indexOf(currentSelect[1]) == -1) {
            variantsMatchOption2 = [];
            availableOption3 = [];
            if(pg.find(selector.option + '[data-index="1"] .pg__option__values a').length > 0) {
              pg.find(selector.option + '[data-index="1"] .pg__option__values a').each(function() {
                if(availableOption2.indexOf($(this).attr('data-value')) > -1) {
                  currentSelect[1] = availableOption2[0];
                  return;
                }
              });
            } else if(pg.find(selector.option + '[data-index="1"] .pg__option__value option').length > 0) {
              pg.find(selector.option + '[data-index="1"] .pg__option__value option').each(function() {
                if(availableOption2.indexOf($(this).attr('value')) > -1) {
                  currentSelect[1] = availableOption2[0];
                  return;
                }
              });
            }
            $.each(variantsMatchOption1, function(index, variant) {
              if(variant.options[0] == currentSelect[0] 
                && variant.options[1] == currentSelect[1]) {
                if(newVariant2 == undefined && variant.available) {
                  newVariant2 = variant;
                }
                variantsMatchOption2.push(variant);
                if(optionSize > 2) {
                  availableOption3.push(variant.options[2]);
                }
              }
            });
          }
          if(optionSize > 2) {
            if(availableOption3.indexOf(currentSelect[2]) == -1) {
              if(pg.find(selector.option + '[data-index="2"] .pg__option__values a').length > 0) {
                pg.find(selector.option + '[data-index="2"] .pg__option__values a').each(function() {
                  if(availableOption2.indexOf($(this).attr('data-value')) > -1) {
                    currentSelect[2] = availableOption3[0];
                    return;
                  }
                });
              } else if(pg.find(selector.option + '[data-index="2"] .pg__option__value option').length > 0) {
                pg.find(selector.option + '[data-index="2"] .pg__option__value option').each(function() {
                  if(availableOption2.indexOf($(this).attr('value')) > -1) {
                    currentSelect[2] = availableOption3[0];
                    return;
                  }
                });
              }
            }
            $.each(variantsMatchOption2, function(index, variant) {
              if(newVariant3 == undefined
                  && variant.options[0] == currentSelect[0] 
                  && variant.options[1] == currentSelect[1]
                  && variant.options[2] == currentSelect[2]
                  && variant.available) {
                newVariant3 = variant;
              }
            });
          }
        }
        if(newVariant3 != undefined) {
          newVariant = newVariant3;
        } else if (newVariant2 != undefined) {
          newVariant = newVariant2;
        } else if(newVariant1 != undefined) {
          newVariant = newVariant1;
        }
        ins.loadCssJsLib('product-global', function() {
          ins.updateNewVariant(pg, newVariant, availableOption2, availableOption3, true, true, currentOption.hasClass('last'));
          setTimeout(function(){
            ins.data.updatingProductOptions = false;
          }, 300);
        });
      }, function(err) {
        setTimeout(function(){
          ins.data.updatingProductOptions = false;
        }, 300);
        // console.log(err);
      });
    });
    $(document).on('click', selector.storePickupBtn, function(e) {
      e.preventDefault();
      BT.showPopup(selector.storePickupModel);
    });
  },

  initQtyBox: function() {
    var selector = this.selectors.qtyBox;
    $(document).on('click', selector.ctrlBtn, function(e) {
      e.preventDefault();
      var input = $(this).siblings('input').first();
      var value = parseInt(input.val());
      if($(this).hasClass(selector.decreaseBtnClass)) {
        if(value > 1) {
          input.val(value - 1);
          if(input.hasClass(selector.inputSyncClass)) {
            input.trigger('change');
          }
        }
      } else {
        input.val(value + 1);
        if(input.hasClass(selector.inputSyncClass)) {
          input.trigger('change');
        }
      }
    });
  },

  runCountDown: function (ele, timeValue, pattern) {
    var tplHour = (ele.attr('data-tpl-hour') != undefined) ? ($(ele.attr('data-tpl-hour')).html()) : theme.strings.countdownTplHour;
    var tplDay = (ele.attr('data-tpl-day') != undefined) ? ($(ele.attr('data-tpl-day')).html()) : theme.strings.countdownTplDay;
    var tplWeek = (ele.attr('data-tpl-week') != undefined) ? ($(ele.attr('data-tpl-week')).html()) : theme.strings.countdownTplWeek;

    var ins = this;
    ele.countdown(timeValue)
    .on('update.countdown', function(event) {
      var format = tplHour;
      if(event.offset.totalDays > 0) {
        format = tplDay;
      }
      if(event.offset.weeks > 0) {
        format = tplWeek;
      }
      $(this).html(event.strftime(format));
    })
    .on('finish.countdown', function(event) {
      var extend = parseInt(ele.attr('data-extend'));
      if(pattern == 1 && extend != undefined && Number.isInteger(extend) && extend > 0) {
        var productId = ele.data('product-id');
        var cookieName = 'countdown_extend_' + productId;
        var date = new Date();
        var times = date.getTime() + extend*86400*1000;
        ins.setCookie(cookieName, times, null);
        date.setTime(times);
        timeValue = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
          + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        ins.runCountDown(ele, timeValue, 1);
      } else {
        $(this).html(theme.strings.countdownExpiredMsg);
        // .parent().addClass('disabled');
        // $(this).parent().addClass('hide');
      }
    });
  },

  initReverseCountdown: function(ele, reverse, productId) {
    var cookieName = 'countdown_reverse_' + productId, ins = this;
    var cookieCountdown = this.getCookie(cookieName), times;
    if(cookieCountdown == undefined || cookieCountdown == NaN || cookieCountdown == 'NaN' || cookieCountdown == 'null' || cookieCountdown == null) {
      var timesText = reverse.split(':');
      if(timesText.length == 4) {
        var days = parseInt(timesText[0]);
        var hours = parseInt(timesText[1]);
        var minutes = parseInt(timesText[2]);
        var seconds = parseInt(timesText[3]);
        if(hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 && seconds >= 0 && seconds <= 59) {
          var date = new Date();
          times = date.getTime() + (days*86400 + hours*3600 + minutes*60 + seconds)*1000;
        }
      }
      this.setCookie(cookieName, times, null);
    } else {
      times = parseInt(cookieCountdown);
    }
    if(times != undefined) {
      var currentDate = new Date();
      var currentTime = currentDate.getTime();
      if(times <= currentTime - 30*60) {
        times = null;
        var timesText = reverse.split(':');
        if(timesText.length == 4) {
          var days = parseInt(timesText[0]);
          var hours = parseInt(timesText[1]);
          var minutes = parseInt(timesText[2]);
          var seconds = parseInt(timesText[3]);
          if(hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 && seconds >= 0 && seconds <= 59) {
            times = currentTime + (days*86400 + hours*3600 + minutes*60 + seconds)*1000;
          }
        }
        this.setCookie(cookieName, times, null);
      }
      if(times) {
        currentDate.setTime(times);
        var timeValue = currentDate.getFullYear() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getDate()
          + ' ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
        this.runCountDown(ele, timeValue, 2);
      }
    }
  },

  initDealCountdown: function(wrap) {
    if(typeof wrap == 'string') {
      wrap = $(wrap);
    }
    var ins = this;
    if(wrap.find(this.selectors.productGroup.countdown).length > 0) {
      wrap.find(this.selectors.productGroup.countdown).each(function() {
        var dataDeal = $(this).attr('data-timer');
        var pattern1 = /^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/;
        var pattern2 = /^\d{1,2}:\d{2}:\d{2}:\d{2}$/;

        if(dataDeal != undefined && dataDeal != '') {
          if(pattern1.test(dataDeal) == true) {
            ins.runCountDown($(this), dataDeal, 1);  
          } else if(pattern2.test(dataDeal)) {
            var productId = $(this).data('product-id');
            ins.initReverseCountdown($(this), dataDeal, productId);
          }
        } 
      });
    }
  },

  destroyDealCountdown: function(wrap) {
    if(typeof wrap == 'string') {
      wrap = $(wrap);
    }
    if(wrap.find(this.selectors.productGroup.countdown).length > 0) {
      wrap.find(this.selectors.productGroup.countdown).each(function() {
        $(this).countdown("stop");
      });
    }
  },

  reLoadReview: function (wrap) {
    if(!theme.review.enable) {
      return;
    }
    if(typeof wrap == 'string') {
      wrap = $(wrap);
    }
    if(theme.review.app == 'product_review') {
      if(typeof SPR != 'undefined' && typeof SPR.$ != 'undefined') {
        return SPR.initDomEls(), SPR.loadBadges();
      }
    } else if(theme.review.app == 'yotpo') {
      var api = new Yotpo.API(yotpo);
      api.refreshWidgets();
    }
  },

  runProgressBar: function(progressBar) {
    if(progressBar.length > 0) {
      progressBar.width(progressBar.data('width') + '%');
    }
  },

  // Quick view popup
  initQuickView: function() {
    var ins = this, qvPopupSelector = this.selectors.qvPopup, workingClass = this.selectors.workingClass;
    $(document).on('click', this.selectors.qvBtn, function(e) {
      e.preventDefault();
      if($(this).hasClass(workingClass)) {
        return;
      }
      $(this).addClass(workingClass);
      var url = $(this).attr('href'), btn = $(this);
      ins.startLoadingBtn(btn);
      ins.loadCssJsLib('quickViewPopup');
        
      ins.callAjax(url, 'GET', {view: 'quick_view'}, null, function(html) {
        var jsonScript = $('.product-single-json', html);
        if(jsonScript.length > 0) {
          ins.data.productGroup[jsonScript.attr('data-handle')] = $.parseJSON(jsonScript.html());
          ins.addProductRecentView(jsonScript.attr('data-handle'));
        }
        var qvContentEle = $(qvPopupSelector).find('.product-section-content');
        qvContentEle.html(ins.stripScripts($('#shopify-section-product-template', html).html()));
        if($('.model-json', html).length > 0) {
          qvContentEle.append($('.model-json', html));
        }
        ins.showPopup(qvPopupSelector);
        ins.convertCurrencySilence(qvPopupSelector + ' span.money');
        ins.applyCustomColorSwatches(qvPopupSelector);
        ins.endLoadingBtn(btn);
        ins.rteWrap(qvPopupSelector + ' .rte');
        btn.removeClass(workingClass);
        ins.reLoadReview(qvPopupSelector);
        ins.runProgressBar($(qvPopupSelector + ' .progress-bar'));
        ins.popularAddedWishlistItems(qvPopupSelector);
      });
    });
    $(document).on('show.bs.modal',qvPopupSelector, function () {
      ins.loadCssJsLib('product-global', function() {
        ins.init3dModel($(qvPopupSelector), $(qvPopupSelector + ' .model-json').attr('id').replace('ModelJson-',''));
        setTimeout(function() {
          ins.initProductThumbsSlider(qvPopupSelector);
          ins.initProductMainSliderAndZoom(qvPopupSelector, 0, 0);
        }, 500);
      });
      ins.initDealCountdown(qvPopupSelector);
    });
    $(document).on('hidden.bs.modal',qvPopupSelector, function () {
      ins.destroyProductMainSliderAndZoom(qvPopupSelector);
      ins.destroyProductThumbsSlider(qvPopupSelector);
      ins.destroyDealCountdown(qvPopupSelector);
    });
  },

  initSelectOption: function() {
    var ins = this, selectOptionPopupSelector = this.selectors.selectOptionPopup, workingClass = this.selectors.workingClass;
    $(document).on('click', this.selectors.selectOptionBtn, function(e) {
      e.preventDefault();
      if($(this).hasClass(workingClass)) {
        return;
      }
      $(this).addClass(workingClass);
      var url = $(this).attr('href'), btn = $(this);
      ins.startLoadingBtn(btn);
      ins.loadSnippetAjax('popup-select-option', function() {
        ins.callAjax(url, 'GET', {view: 'select_option'}, null, function(html) {
          var jsonScript = $('.product-single-json', html);
          if(jsonScript.length > 0) {
            ins.data.productGroup[jsonScript.attr('data-handle')] = $.parseJSON(jsonScript.html());
          }
          $(selectOptionPopupSelector).find('.product-section-content').html(ins.stripScripts(html));
          ins.convertCurrencySilence(selectOptionPopupSelector + ' span.money');
          ins.applyCustomColorSwatches(selectOptionPopupSelector);
          ins.endLoadingBtn(btn);
          ins.showPopup(selectOptionPopupSelector);
          btn.removeClass(workingClass);
        });
      });
    });
  },

  // Comparison popup
  getCookieItemsValue: function(returnArr, cookieName) {
    if(typeof this.data.cookieArray[cookieName] == 'undefined') {
      var handleStr = this.getCookie(cookieName);
      if(handleStr == undefined || handleStr == '') {
        this.data.cookieArray[cookieName] = [];
      } else {
        this.data.cookieArray[cookieName] = handleStr.split(',');
      }
    }
    if(returnArr) {
      return this.data.cookieArray[cookieName];
    }
    return this.data.cookieArray[cookieName].join(',');
  },

  isProductExistInCookie: function(productHandle, cookieName) {
    var items = this.getCookieItemsValue(true, cookieName);
    return items.indexOf(productHandle) >= 0;
  },

  addProductToCookie: function(productHandle, cookieName) {
    var items = this.getCookieItemsValue(true, cookieName);
    if(items.indexOf(productHandle) < 0) {
      items.push(productHandle);
      this.data.cookieArray[cookieName] = items;
      this.setCookie(cookieName, items.join(','), null);
    }
  },
  
  removeProductFromCookie: function(productHandle, cookieName) {
    if(this.data.cookieArray[cookieName] != undefined && this.data.cookieArray[cookieName].indexOf(productHandle) >= 0) {
      this.data.cookieArray[cookieName].splice(this.data.cookieArray[cookieName].indexOf(productHandle), 1);
      this.setCookie(cookieName, this.data.cookieArray[cookieName].join(','), null);
    }
  },

  loadCompare: function(cb) { 
    var ins = this;
    this.loadCssJsLib('quickViewPopup');
    this.callAjax(theme.rootUrl, 'GET', {view: 'compare', q: ins.getCookieItemsValue(false, ins.options.compare.cookieName)}, null, function(html) {
      ins.loadSnippetAjax('popup-compare', function() {
        var popupContent = $(ins.selectors.compare.popup).find('.compare-content');
        popupContent.html(ins.stripScripts(html));
        ins.rteWrap(ins.selectors.compare.popup + ' .rte');
        ins.applyCustomColorSwatches(popupContent);
        ins.convertCurrencySilence(popupContent.find('span.money'));
        ins.findBestPriceInCompare();
        ins.reLoadReview(popupContent);
        ins.firstLoaded = true;
        if(cb) {
          cb();
        }
      });
    });
  },

  findBestPriceInCompare: function() {
    var selector = this.selectors.compare, ins = this;
    var badges = $(selector.bestPriceBadge), index = -1, bestPrice = 0, popup = $(selector.popup);
    if(badges.length > 0) {
      badges.each(function() {
        var badge = $(this);
        var currentIndex = badge.parents('td').attr('data-index');
        var available = !popup.find('td[data-index="' + currentIndex + '"]' + selector.availabilityRow + ' ' + ins.selectors.productGroup.stockText).hasClass('soldout');
        var price = parseFloat($(this).attr('data-price'));
        if(available && (bestPrice == 0 || price < bestPrice)) {
          bestPrice = price;
          index = $(this).parents('td').attr('data-index');
        }
      });
      badges.addClass('hide');
      $(selector.popup + ' td[data-index="' + index + '"] ' + selector.bestPriceBadge).removeClass('hide');
    }
  },

  afterUpdatedVariantCompare: function(selectVariant) {
    var selector = this.selectors.productGroup;
    var index = selectVariant.attr('data-index'), pg = selectVariant.parents(selector.wrap), table = selectVariant.parents('table'), variantId = selectVariant.val();
    var variants = this.data.productGroup[pg.attr('data-product-handle')];
    if(variants != undefined) {
      var newVariant = variants[variantId];
      if(newVariant != undefined) {
        // Update price
        var priceCol = table.find('td[data-index="' + index + '"] ' + selector.price);        
        priceCol.html(this.getVariantPriceHtml(pg, newVariant));    
        this.convertCurrencySilence(priceCol.find('span.money'));
        priceCol.parent().find(this.selectors.compare.bestPriceBadge).attr('data-price', newVariant.price);
        
        // Update main image
        if(newVariant.featured_media != null && newVariant.featured_media.src != null) {
          var img = table.find('td[data-index="' + index + '"] ' + selector.mainImg);
          img.parent(':not(.not-loading)').addClass('loading');
          img.attr('data-src', this.resizeImage(newVariant.featured_media.src, img.attr('data-image-size')).replace('_1x1.', '_{width}x.'));
          img.addClass('lazyload');
        }

        // Update actions and availability row
        var actionsRow = table.find('td[data-index="' + index + '"]' + this.selectors.compare.actionsRow);
        var availabilityRow = table.find('td[data-index="' + index + '"]' + this.selectors.compare.availabilityRow);
        var cartBtn = actionsRow.find(this.selectors.cart.addBtn);
        if(newVariant.available) {
          cartBtn.removeAttr('disabled');
          cartBtn.removeClass('soldout');
          cartBtn.attr('title', theme.strings.addToCart).tooltip('fixTitle');
          cartBtn.find('span').text(theme.strings.addToCart);
          availabilityRow.find(selector.stockText).text(theme.strings.instockText).removeClass('soldout');
        } else {
          cartBtn.attr('disabled', 'disabled');
          cartBtn.addClass('soldout');
          cartBtn.attr('title', theme.strings.soldOut).tooltip('fixTitle');
          cartBtn.find('span').text(theme.strings.soldOut);
          availabilityRow.find(selector.stockText).text(theme.strings.soldOut).addClass('soldout');
        }
        actionsRow.find(selector.variantId).val(variantId);

        this.findBestPriceInCompare();
      }
    }
  },

  initCompareEvent: function() {
    var ins = this, workingClass = 'working', selector = this.selectors.compare, cookieName = this.options.compare.cookieName;
    $(selector.number).text(this.getCookieItemsValue(true, cookieName).length);
    $(document).on('click', selector.btn, function(e) {
      e.preventDefault();
      var handle = $(this).attr('data-handle'), btn = $(this);
      if(ins.isProductExistInCookie(handle, cookieName) && $(ins.selectors.compare.popup).find('table').length > 0) {
        ins.showPopup(ins.selectors.compare.popup);
      } else {
        ins.addProductToCookie(handle, cookieName);
        $(selector.number).text(ins.getCookieItemsValue(true, cookieName).length);
        ins.startLoadingBtn(btn);
        ins.loadCompare(function() {
          ins.endLoadingBtn(btn);
          ins.showPopup(ins.selectors.compare.popup);
        });  
      }
    });

    $(document).on('click', selector.removeBtn, function(e) {
      e.preventDefault();
      var handle = $(this).attr('data-handle');
      ins.removeProductFromCookie(handle, cookieName);
      $(selector.number).text(ins.getCookieItemsValue(true, cookieName).length);
      ins.loadCompare();
    });

    $(document).on('click', selector.headerLink, function(e) {
      e.preventDefault();
      var btn = $(this);
      if(btn.hasClass(workingClass)) {
        return;
      }
      btn.addClass(workingClass);
      if(ins.firstLoaded) {
        ins.showPopup(ins.selectors.compare.popup);
        btn.removeClass(workingClass);
      } else {
        ins.showLoadingFull();
        ins.loadCompare(function() {
          ins.hideLoadingFull();
          ins.showPopup(ins.selectors.compare.popup);
          btn.removeClass(workingClass);
        });  
      }
    });
    
    $(document).on('change', selector.variantId, function(e) {
      ins.afterUpdatedVariantCompare($(this));
    });
  },

  loadDynamicProductsAjax: function(params, page, cb) {
    var data = {
      'view': 'dynamic_ajax',
      'q': params,
      'page': page
    }
    this.callAjax(theme.rootUrl, 'GET', data, null, cb);
  },

  addProductMetaData: function(wrap, inAjax) {
    if(inAjax) {
      this.convertCurrencySilence(wrap.find('span.money'));
      this.reLoadReview(wrap);
    }
    this.initDealCountdown(wrap);
    this.applyCustomColorSwatches(wrap);
    this.popularAddedWishlistItems(wrap);
  },

  afterLoadDynamicProductsAjaxInTab: function(parent, html) {
    var ins = this;
    parent.removeClass(this.selectors.waitingData.replace('.',''));
    parent.append($('.products', html).html());
    
    var loadMoreBtn = parent.siblings(this.selectors.loadMoreBtn);
    if(loadMoreBtn.length > 0) {
      loadMoreBtn.remove();
    }
    if($(this.selectors.loadMoreBtn, html).length > 0) {
      parent.parent().append($(this.selectors.loadMoreBtn, html).get(0).outerHTML);
    }
  },

  destroyInfiniteScroll: function(idSave) {
    if(typeof this.data.productGroupInfiniteScroll[idSave] != 'undefined') {
      $.each(this.data.productGroupInfiniteScroll[idSave], function(index, obj) {
        obj.destroy();
      });
    }
  },

  initInfiniteScroll: function(wrap) {
    if(typeof wrap == 'string') {
      wrap = $(wrap);
    }
    if(wrap.find(this.selectors.infiniteScroll.button).length > 0) {
      var ins = this;
      this.loadCssJsLib('waypoint', function() {
        ins.loadCssJsLib('infinite', function() {
          wrap.find(ins.selectors.infiniteScroll.button).each(function() {
            var dataIdSave = $(this).attr('data-id-save');
            if(typeof ins.data.productGroupInfiniteScroll[dataIdSave] == 'undefined') {
              ins.data.productGroupInfiniteScroll[dataIdSave] = [];
            }
            var element = $(this).siblings('.products').first();
            var dataId = $(this).attr('data-id');
            ins.data.productGroupInfiniteScroll[dataIdSave].push(new Waypoint.Infinite({
              element: element,
              items: '.grid__item',
              more: dataId,
              onAfterPageLoad: function($items) {
                ins.applyCustomColorSwatches($items);
                BtCurrency.convertSilence(shopCurrency, BtCurrency.currentCurrency, $items.find('span.money'));
                ins.initDealCountdown($items);
                ins.reLoadReview($items);
              }
            }));  
          }); 
        });  
      });
    }
  },

  invertColor: function(hex, bw) {
      if (hex.indexOf('#') === 0) {
          hex = hex.slice(1);
      }
      // convert 3-digit hex to 6-digits.
      if (hex.length === 3) {
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length !== 6) {
        return false;
      }
      var r = parseInt(hex.slice(0, 2), 16),
          g = parseInt(hex.slice(2, 4), 16),
          b = parseInt(hex.slice(4, 6), 16);
      if (bw) {
          // http://stackoverflow.com/a/3943023/112731
          return (r * 0.299 + g * 0.587 + b * 0.114) > 186
              ? '#000000'
              : '#FFFFFF';
      }
      // invert color components
      r = (255 - r).toString(16);
      g = (255 - g).toString(16);
      b = (255 - b).toString(16);
      // pad each with zeros and return
      return "#" + this.padZero(r) + this.padZero(g) + this.padZero(b);
  },

  padZero: function(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
  },

  loadCustomColorCodes: function(cb) {
    if(this.data.customColorCodes != null || this.data.customColorCodesLoading) {
      cb();
    } else if(this.data.customColorCodesLoading == false) {
      var ins = this;
      this.data.customColorCodesLoading = true;
      this.callAjax(theme.rootUrl, 'get', {view:'color_codes'}, null, function(response) {
        ins.data.customColorCodes = $.parseJSON(response.replace('<!-- BEGIN template --><!-- index.color_codes -->','').replace('<!-- END template -->',''));
        ins.data.customColorCodesLoading = false;
        if(ins.data.customColorCodesStack.length > 0) {
          $.each(ins.data.customColorCodesStack, function(index, value) {
            ins.runCustomColorCodes(value);
            delete ins.data.customColorCodesStack[index];
          });
        }
        cb();
      });
    }
  },

  runCustomColorCodes: function(wrap) {
    if(typeof wrap == 'string') {
      wrap = $(wrap);
    }
    var ins = this;
    wrap.find('.color-load:not(.color-loaded)').each(function() {
      var colorTag = $(this).attr('data-color-tag');
      if(colorTag != undefined) {
        var swatchData = ins.data.customColorCodes[colorTag];
        if(swatchData != undefined) {
          if(swatchData.color != undefined) {
            $(this).css('background-color', swatchData.color);
            if(!$(this).hasClass('ignore-color-text')) {
              var newColor = ins.invertColor(swatchData.color, true);
              if(newColor) {
                $(this).css('color', newColor);
              }
            }
          }
          if(swatchData.image != undefined) {
            var imageUrl = ins.resizeImage(swatchData.image, '46x46_crop_center');
            $(this).css('background-image', 'url(' + imageUrl + ')');
          } 
        }
      }
      $(this).addClass('color-loaded');
    });
  },

  applyCustomColorSwatches: function(wrap) {
    var ins = this;
    this.loadCustomColorCodes(function() {
      if(ins.data.customColorCodesLoading) {
        ins.data.customColorCodesStack.push(wrap);
      } else {
        ins.runCustomColorCodes(wrap);
      }
    });
  },

  initLoadMoreBtn: function() {
    var ins = this;
    $(document).on('click', this.selectors.loadMoreBtn, function(e) {
      e.preventDefault();
      var btn = $(this);
      if(btn.hasClass(ins.selectors.workingClass)) {
        return;
      }
      btn.addClass(ins.selectors.workingClass).prepend('<i class="' + ins.selectors.loadingAjaxClass + '" style="margin-right: 5px;"></i>');
      var href = $(this).attr('data-href');
      var parent = $(this).siblings('.grid');
      if(href == undefined) {
        ins.loadDynamicProductsAjax($(this).attr('data-ajax-params'), 2, function(html) {
          ins.afterLoadDynamicProductsAjaxInTab(parent, html);
          ins.addProductMetaData(parent, true);
        });
      } else {
        ins.callAjax(href, 'GET', null, null, function(html) {
          ins.afterLoadDynamicProductsAjaxInTab(parent, html);
          ins.addProductMetaData(parent, true);
        });
      }
    });
  },

  updateThresholdMenu: function(addtionalHeight) {
    this.data.thresholdMenu += addtionalHeight;
  },

  calculateThresholdAndFixSticker: function() {
    var height = this.data.stickyMenuObj.outerHeight();
    this.data.thresholdMenu = this.data.stickyMenuObj.offset().top + height;
    this.fixedHeightSticker(height);
  },

  updateStickyMenuObj: function(obj) {
    if(obj.hasClass('use-sticky')) {
      this.data.stickyMenuObj = obj;
    } else {
      this.data.stickyMenuObj = obj.parents('.use-sticky').first();
    }
  },

  openStickyMenu: function() {
    if($(window).scrollTop() > this.data.thresholdMenu) {
      if(!this.data.stickyMenuObj.hasClass('active')) {
        this.data.stickyMenuObj.addClass('active');
      }
    } else {
      this.hideStickyMenu();
    }
  },

  hideStickyMenu: function() {
    if(this.data.stickyMenuObj.hasClass('active') && !$('body').hasClass('open-search-suggest')) {
      this.data.stickyMenuObj.removeClass('active');
    } 
  },

  fixedHeightSticker: function(height) {
    this.data.sticker.height(height);
  },

  initStickyMenu: function() {
    if(!$('.use-sticky').length) {
      this.initPromotion();
      return;
    }
    var ins = this;
    var obj = $('.use-sticky--desktop');
    if(ins.data.cacheWindowWidth < 992) {
      obj = $('.use-sticky--mobile');
    }
    this.data.sticker = $('.header-sticker');
    this.data.stickyMenuObj = $('.header-sticker__inner')
    // this.updateStickyMenuObj(obj);
    this.calculateThresholdAndFixSticker();
    this.initPromotion();
    var timeout = 0;
    var lastScrollTop = 0; 
    $(window).on(this.data.scrollEventName, function(e, direction) {
      if(ins.data.pageLoaded && ins.data.updatingProductOptions == false) {
        if(direction == 'down') {
          ins.hideStickyMenu();
        } else {
          ins.openStickyMenu();
        }
      }
    });
    $(window).on(this.data.resizeEventName,function(e) {
      // if(ins.data.cacheWindowWidth < 992) {
      //   obj = $('.use-sticky--mobile').removeClass('active');
      // } else {
      //   obj = $('.use-sticky--desktop').removeClass('active');
      //   obj = $('.use-sticky--desktop');
      //   obj.parents('.use-sticky').removeClass('active');
      // }
      // ins.updateStickyMenuObj(obj);
      ins.calculateThresholdAndFixSticker();
    });
  },

  initRecommendedProducts: function() {
    if(!theme.enableRecommendedProducts) {
      return;
    }
    
    setTimeout(function() {
      var cookieName = this.options.rp.cookieName;
      var cookie = this.getCookie(cookieName);
      if(cookie != undefined) {
        return;
      }
      this.loadCssJsLib('recommendedProducts');
    }.bind(this), 8000);
  },

  initNewsTerms: function(wrap) {
    if(!theme.newsTerms) {
      return;
    }
    var form = $(wrap + ' ' + this.selectors.newsTerms.form);
    var input = $(wrap + ' ' + this.selectors.newsTerms.input);
    var error = $(wrap + ' ' + this.selectors.newsTerms.error);
    var cookieName = this.options.newsTerms.cookieName;
    var cookieValue = this.getCookie(cookieName);
    var ins = this;
    
    form.unbind('submit');
    input.unbind('change');
    if(cookieValue == '1') {
      input.attr('checked','checked');
    }

    input.on('change', function() {
      if($(this).is(':checked')) {
        ins.setCookie(cookieName, 1);
        if(error.hasClass('working')) {
          error.fadeOut();
          error.removeClass('working');
        }
      } else {
        ins.setCookie(cookieName, 0);
      }
    });

    form.on('submit', function(e) {
      if(!input.is(':checked')) {
        e.preventDefault();
        error.fadeIn();
        error.addClass('working');
      }
    })
  },

  initNewsletterPopup: function() {
    if(!theme.enableNewsPopup || location.hash.substr(1) == 'newsletter-popup-form') {
      return;
    }
    setTimeout(function() {
      if($('body').hasClass('modal-open') || $('body').hasClass('open-search-suggest')) {
        return;
      }
      this.loadCssJsLib("newsletterPopup");
    }.bind(this), 8000);
  },

  initPromotion: function() {
    var selector = this.selectors.promo, ins = this;
    if($(selector.wrap).length > 0) {
      var cookieName = this.options.promo.cookieName;
      var cookie = this.getCookie(cookieName);
      var hasStickyMenu = ($('.use-sticky').length > 0);
      if(cookie == undefined || cookie == null || cookie == 'null') {
        $(selector.wrap).slideDown(300, function() {
          if(hasStickyMenu) {
            if(ins.data.cacheWindowWidth >= 992) {
              ins.updateThresholdMenu($(selector.wrap).outerHeight());
            } else {
              ins.updateThresholdMenu(ins.data.thresholdMenuWithPromotion);
            }
          }
          $(selector.wrap).removeClass('close');
        });
      }
      $(document).on('click touchend', selector.closeBtn, function(e) {
        e.preventDefault();
        $(selector.wrap).slideUp(300, function() {
          if(hasStickyMenu) {
            if(ins.data.cacheWindowWidth >= 992) {
              ins.updateThresholdMenu($(selector.wrap).outerHeight()*(-1));
            } else {
              ins.updateThresholdMenu(ins.data.thresholdMenuWithPromotion*(-1));
            }
          }
          $(selector.wrap).addClass('close');
        });
        ins.setCookie(cookieName, 1, 1);
      });
    }
  },

  initBackTopButton: function() {
    var $backTop = $('#back-top');
    if($backTop.length){
      $(document).on('click touchend', '#back-top a', function() {
        $('body,html').animate({
          scrollTop: 0
        }, 800);
        return false;
      });
    }
  },

  initCookieConsent: function() {
    if(!theme.enableCookieConsent) {
      return;
    }
    var ins = this;
    setTimeout(function() {
      var cookieName = 'cookie_consent';
      var cookie = ins.getCookie(cookieName);
      if(cookie != undefined) {
        return;
      }
      ins.loadSnippetAjax('cookie-consent', function() {
        if($('.cookie_consent').length > 0) {
          $('.cookie_consent').slideDown(300);
          $(document).on('click', '.cookie_consent__close', function(e) {
            e.preventDefault();
            ins.setCookie(cookieName, 1);
            $('.cookie_consent').slideUp(300);
          });
        }
      });
    }, 9000);
  },

  initPopupVideo: function() {
    var ins = this, selector = this.selectors.popupVideo, videoSrc;
    $(document).on('click', selector.btn, function(e) {
      e.preventDefault();
      if(ins.data.modalVideoWorking) {
        return;
      }
      var btn = $(this);
      new Promise(function(resolve, reject) {
        ins.data.modalVideoWorking = true;
        if(theme.loadedLibs.indexOf('modalvideo') > -1) {
          resolve(btn);
        } else {
          ins.loadCssJsLib('modalvideo', function() {
            $(selector.youtubeBtn).modalVideo();
            $(selector.vimeoBtn).modalVideo({channel:'vimeo'});
            resolve(btn);
          });
        }
      }).then(function(btn) {
        ins.data.modalVideoWorking = false;
        var videoId = btn.attr('data-video-id');
        var videoType = btn.attr('data-video-type');
        if(videoType == 'youtube') {
          $(selector.youtubeBtn).attr('data-video-id', videoId);
          $(selector.youtubeBtn).trigger('click');
        } else {
          $(selector.vimeoBtn).attr('data-video-id', videoId);
          $(selector.vimeoBtn).trigger('click');
        }
      }, function(err) {
        // console.log(err);
      });
    });
  },

  loadWishlist: function(cb) { 
    var ins = this, selector = this.selectors.wishlist, cookieName = this.options.wishlist.cookieName;
    var cookieValue = this.getCookieItemsValue(false, cookieName);
    if(cookieValue == '' || cookieValue == undefined) {
      this.loadSnippetAjax('popup-wishlist', function() {
        var popupContent = $(selector.popup).find('.content');
        ins.appendWishlistEmtptyStr(popupContent);
        ins.data.wishlist.loaded = true;
        if(cb) {
          cb();
        }
      });
    } else {
      this.callAjax(theme.rootUrl, 'GET', {view: 'wishlist', q: cookieValue}, null, function(html) {
        ins.loadSnippetAjax('popup-wishlist', function() {
          var popupContent = $(selector.popup).find('.content');
          popupContent.html(ins.stripScripts(html));
          if(!popupContent.hasClass('grid')) {
            popupContent.addClass('grid grid--medium')
          }
          ins.applyCustomColorSwatches(popupContent);
          ins.convertCurrencySilence(popupContent.find('span.money'));
          ins.reLoadReview(popupContent);
          ins.data.wishlist.loaded = true;
          if(cb) {
            cb();
          }
        });
      });
    }
  },

  popularAddedWishlistItems: function(wrap){
    if(!theme.enableWishlist){
      return;
    }
    if(typeof wrap == 'string') {
      wrap = $(wrap);
    }
    var selector = this.selectors.wishlist, cookieName = this.options.wishlist.cookieName, ins = this;
    var btnSelector = '', btnWithTextSelector = '', textSelector = '';
    var items = this.getCookieItemsValue(true, cookieName);
    if(items.length > 0) {
     $.each(items, function( index, value ) {
        if(btnSelector != '') {
          btnSelector += ',';
          textSelector += ',';
        }
        btnSelector += selector.btn + '[data-handle="' + value + '"]';
        textSelector += selector.btnWithText + '[data-handle="' + value + '"] ' + selector.btnText;
      });
    }
    wrap.find(btnSelector).addClass('added').attr('title', theme.strings.addedWishlistTitle);
    wrap.find(textSelector).text(theme.strings.addedWishlistTitle);
  },

  appendWishlistEmtptyStr: function(popupContent) {
    popupContent.removeClass('grid grid--medium')
    popupContent.html('<div class="alert alert-danger"><span>' + theme.strings.wishlistEmpty +'</span></div>');
  },

  initWishlist: function() {
    if(!theme.enableWishlist){
      return;
    }
    var selector = this.selectors.wishlist, cookieName = this.options.wishlist.cookieName, ins = this;
    var items = this.getCookieItemsValue(true, cookieName);
    var workingClass = 'working';
    this.popularAddedWishlistItems('body');
    $(selector.number).text(items.length);
    $(document).on('click', selector.btn, function(e){
      e.preventDefault();
      var handle = $(this).attr('data-handle'), btn = $(this);
      if(ins.isProductExistInCookie(handle, cookieName)) {
        ins.removeProductFromCookie(handle, cookieName);
        $(selector.btn + '[data-handle="' + handle + '"]').removeClass('added').attr('title', theme.strings.addWishlistTitle);
        $(selector.btnWithText + '[data-handle="' + handle + '"] ' + selector.btnText).text(theme.strings.addWishlistTitle);
      } else {
        ins.addProductToCookie(handle, cookieName);
        $(selector.btn + '[data-handle="' + handle + '"]').addClass('added').attr('title', theme.strings.addedWishlistTitle);
        $(selector.btnWithText + '[data-handle="' + handle + '"] ' + selector.btnText).text(theme.strings.addedWishlistTitle);
      }
      $(selector.btn + '[data-handle="' + handle + '"][data-toggle="tooltip"]').tooltip('fixTitle');
      if($(this).attr('data-toggle') == 'tooltip') {
        $(this).tooltip('show');
      }
      $(selector.number).text(ins.getCookieItemsValue(true, cookieName).length);
      ins.data.wishlist.loaded = false;
      $(selector.headerLink + ' i').addClass(ins.selectors.ringClass);
    });

    $(document).on('click', selector.removeBtn, function(e) {
      e.preventDefault();
      var handle = $(this).attr('data-handle');
      ins.removeProductFromCookie(handle, cookieName);
      $(selector.number).text(ins.getCookieItemsValue(true, cookieName).length);
      $(selector.btn + '[data-handle="' + handle + '"]').removeClass('added').attr('title', theme.strings.addWishlistTitle);
      $(selector.btn + '[data-handle="' + handle + '"][data-toggle="tooltip"]').tooltip('fixTitle');
      $(selector.btnWithText + '[data-handle="' + handle + '"] ' + selector.btnText).text(theme.strings.addWishlistTitle);
      if($(this).attr('data-toggle') == 'tooltip') {
        $(this).tooltip('hide');
      }
      $(selector.popup + ' .item[data-product-handle="' + handle + '"]').remove();
      if($(selector.popup).find('.item').length == 0) {
        var popupContent = $(selector.popup).find('.content');
        ins.appendWishlistEmtptyStr(popupContent);
      }
    });

    $(document).on('click', selector.headerLink, function(e) {
      e.preventDefault();
      var btn = $(this);
      if(btn.hasClass(workingClass)) {
        return;
      }
      btn.addClass(workingClass);
      if(ins.data.wishlist.loaded) {
        ins.showPopup(selector.popup);
        btn.removeClass(workingClass);
      } else {
        ins.showLoadingFull();
        ins.loadWishlist(function() {
          ins.hideLoadingFull();
          ins.showPopup(selector.popup);
          btn.removeClass(workingClass);
        });  
      }
    });
  },

  initExpandTrigger: function() {
    var workingClass = 'working';
    $(document).on('click touchend', '.expand-trigger', function(e) {
      e.preventDefault();
      if($(this).hasClass('working')) {
        return;
      }
      var btn = $(this);
      btn.addClass('working');
      var effect = "slideDown";
      if(btn.hasClass('open')) {
        effect = "slideUp";
      }
      btn.toggleClass('open');
      if(effect == 'slideDown') {
        btn.siblings('.expand-content').slideDown(300, function() {
          btn.removeClass(workingClass);
        });
      } else {
        btn.siblings('.expand-content').slideUp(300, function() {
          btn.removeClass(workingClass);
        });
      }
    });
  },

  initResizeWindowTrigger: function() {
    this.data.cacheWindowWidth = $(window).width();
    var ins = this;
    $(window).resize($.debounce( 250, function(e) {
      var wwidth = $(window).width();
      if(ins.data.cacheWindowWidth!==wwidth){
        ins.data.cacheWindowWidth = $(window).width();
        $(window).trigger(ins.data.resizeEventName);
      }
    }));
  },

  initScrollingWindow: function() {
    var lastScrollTop = 0, ins = this;
    $(window).scroll($.throttle(100, function(e) {
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop){
        $(window).trigger(ins.data.scrollEventName, ['down']);
      } else {
        $(window).trigger(ins.data.scrollEventName, ['up']);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }));
    $(window).on(this.data.resizeEventName,function(e) {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      lastScrollTop = st <= 0 ? 0 : st;  
    });
  },

  initScrollingWindowTriggerOnce: function(ele, suffixEvent, additionalOffset, cb) {
    additionalOffset = (additionalOffset != undefined) ? additionalOffset : 0;
    var offset = ele.offset().top + additionalOffset;
    if(window.pageYOffset + window.innerHeight > offset) {
      cb();
    } else {
      var ins = this, runCb = false, event = 'scroll.' + suffixEvent, resizeEvent = this.data.resizeEventName + '.scroll_' + suffixEvent;
      $(window).on(event, $.throttle( 250, function(e) {
        if(window.pageYOffset + window.innerHeight > offset) {
          $(window).off(event);
          $(window).off(resizeEvent);
          if(!runCb) {
            runCb = true;
            cb();
          }
        }
      }));
      $(window).on(resizeEvent , function() {
        if(runCb) {
          $(window).off(resizeEvent);
          return;
        }
        setTimeout(function() {
          offset = ele.offset().top + additionalOffset;
          if(window.pageYOffset + window.innerHeight > offset) {
            $(window).off(event);
            $(window).off(resizeEvent);
            if(!runCb) {
              runCb = true;
              cb();
            }
          }
        }, 300);
      });
    }
  },

  destroyScrollingWindowTriggerOnce: function(suffixEvent) {
    $(window).off('scroll.' + suffixEvent);
    $(window).off(this.data.resizeEventName + '.scroll_' + suffixEvent);
  },

  renderColumnsAjaxLoading: function(wrap, limit) {
    var template = '<div class="pcol__item item dib w100 gutter-ele-bottom"><div class="flex flex-wrap flex-align-space-between"><div class="pcol__item__left col-xs-4 no-gutter--left"><div class="item__image img-container loading" style="padding-top:130%;"></div></div><div class="pcol__item__right col-xs-8 no-gutter"><span class="db w100 loading" style="height:20px;"></span><div class="gutter-ele-top"><span class="db w100 loading" style="height:20px;"></span></div><div class="gutter-ele-top"><span class="db w100 loading" style="height:20px;"></span></div></div></div></div>';
    var items = '';
    var i = 0;
    for(i; i < limit; i++) {
      items += template;
    }
    wrap.html(items);
  },

  loadProductColumnsAjax: function($container) {
    var workingClass = 'working', ins = this;
    if($container.hasClass('load-product-columns-ajax')) {
      this.loadCssJsLib('waypoint', function() {
        var wp = $container.waypoint(function(direction) {
          if($container.hasClass(workingClass)) {
            return;
          }
          wp[0].destroy();
          $container.addClass(workingClass);
          // var parent = $(this.element).parent();
          // var limit = parseInt(trigger.attr('data-limit'));
          // ins.renderColumnsAjaxLoading(parent, limit);
          // trigger.remove();
          $container.find('.pcol__items').each(function() {
            ins.renderColumnsAjaxLoading($(this), parseInt($(this).attr('data-limit')));
          });
          ins.renderSectionByAjaxApi($container.attr('data-section-id'), {view: 'ajax'}, function(htmlResponse) {
            $container.find('.pcol__items').each(function() {
              $(this).html($('#' + $(this).attr('id'), htmlResponse).html());
              $(this).removeClass('waiting-data');
            });
            ins.addProductMetaData($container, true);
            ins.initSlider($container, false, false);
          });
        }, {
          triggerOnce: true,
          offset: '100%'
        });
      });
    }
  },

  addProductRecentView: function(productHandle) {
    if(!theme.enableRecentView) {
      return;
    }
    this.addProductToCookie(productHandle, this.options.recentView.cookieName);
  },

  loadRequireCss: function() {
    if(theme.requireCss.length > 0) {
      var ins = this;
      $(theme.requireCss).each(function(index, value) {
        ins.loadCssJsLib(value);
      });
    }
  },

  initProductCustomFields: function() {
    $(document).on('change', '.pg__field__ele', function() {
      console.log($(this).val());
      var targetEle = $($(this).attr('data-target'));
      if(targetEle.hasClass('pg__field__group-checkbox')) {
        // Collect values
        var values = [];
        $(this).parents('.pg__field').find('.pg__field__ele').each(function() {
          if($(this).is(':checked')) {
            values.push($(this).val());
          }
        });
        targetEle.val(values.join(', '));
      } else {
        if($(this).is(':checked')) {
          targetEle.prop('checked', true);
        } else {
          targetEle.prop('checked', false);
        }
      }
      targetEle.valid();
    });
    $(document).on('click', '.pg__field__radio', function() {
      var targetEle = $($(this).attr('data-target'));
      targetEle.val($(this).val());
      targetEle.valid();
    });
  },
  init: function() {
    this.initFloatField();
    this.initMobileNavigation();
    this.initSearchSuggestion();
    this.initResizeWindowTrigger();
    this.initScrollingWindow();
    this.initDropdown();
    this.initProductGroup();
    this.initCartEvent();
    this.initQtyBox();
    this.refreshSliderInTabs();
    this.initQuickView();
    this.initSelectOption();
    this.initCompareEvent();
    this.initWishlist();
    this.initLoadMoreBtn();
    this.initRecommendedProducts();
    this.initNewsletterPopup();
    this.initCookieConsent();
    this.initExpandTrigger();
    $('body').tooltip({selector: '[data-toggle="tooltip"]', trigger: 'hover', container: 'body'}); 
    setTimeout(function() {
      this.updateFaviconBadge(theme.cartNumber);
      this.initBackTopButton();
      this.initAgreeCartTems();
      this.initPopupVideo();
      this.initProductCustomFields();
    }.bind(this), 500);
    if(theme.disableCopy) {
      document.addEventListener('contextmenu', function(event){ event.preventDefault(); }); 
    }
    $(document).one('touchstart', function() {
      this.data.isTouchDevide = true;
    }.bind(this));
  }
};

$(window).on('load', function() {
  BT.detectAutoFields();
  BT.initSidebar();
  setTimeout(function() {
    BT.data.pageLoaded = true;
  }, 500);
  BT.initStickyMenu();
  /*setTimeout(function() {
    window.lazySizesConfig.expand = 370;
    window.lazySizes.init();
  }, 5000);*/
});