/********* --- Mobile Navigation --- *********/
theme.mobileNavigation = {};
theme.MobileNavigationSection = (function() {
  function resetParentArrow($container) {
    $container.find('.mobile-nav__item--parent').each(function() {
      if($(this).find('.mobile-nav__children__block').length == 0) {
        $(this).find('.mobile-nav__arrow').addClass('hide');
      }
    });
  }
  function MobileNavigationSection(container) {
    var $container = $(container);
    var loadingEvent = 'beforeShowSidebar-sidebar-mobile-nav';
    $('body').unbind(loadingEvent);
    if(!$container.hasClass('use-ajax-loading')) {
      resetParentArrow($container);
    } else {
      $('body').one(loadingEvent, function(e) {
        BT.callAjax(theme.rootUrl, 'GET', {view: 'ajax', section_id: $container.attr('data-section-id')}, null, function(response) {
          $container.html($('nav',response).html());
          resetParentArrow($container);
        });
      });
    }
  }
  return MobileNavigationSection;
})();

theme.MobileNavigationSection.prototype = _.assignIn({}, theme.MobileNavigationSection.prototype, {
  hasOpenedSidebarMenu: function() {
    return $('body').hasClass('open-sidebar-canvas--sidebar-mobile-nav');
  },
  openSidebarMenu: function() {
    if(!this.hasOpenedSidebarMenu() && BT.data.cacheWindowWidth <= BT.options.windowScreen.mobile) {
      $('.mobile-nav-bar').trigger('click');
    }
  },
  closeSidebarMenu: function() {
    $('#sidebar-mobile-nav .bt-sidebar__close').trigger('click');
  },
  getTopEle: function(ele) {
    return ele.hasClass('mobile-nav__item') ? ele : ele.parents('.mobile-nav__item');
  },
  toggleSubItem: function(ele, action) {
    var topEle = this.getTopEle(ele);
    if(topEle.hasClass('mobile-nav__item--parent')) {
      if(!ele.hasClass('mobile-nav__item--parent') && ((action == 'open' && !topEle.hasClass('open')) || (action == 'close' && topEle.hasClass('open')))) {
        topEle.find('.mobile-nav__top-link-wrap .mobile-nav__arrow').trigger('click');  
      }
    }
  },
  onSelect: function(evt) {
    if(BT.data.cacheWindowWidth > BT.options.windowScreen.mobile) {
      BT.showNotify('Please adjust to the mobile screen to see the changes.', BT.options.notifyClassTypes.danger);
    } else {
      this.openSidebarMenu();
    }
  },
  onDeselect: function(evt) {
    this.closeSidebarMenu();
  },
  onBlockSelect: function(evt) {
    this.openSidebarMenu();
    var ele = $(evt.target);
    this.toggleSubItem(ele, 'open');
  },
  onBlockDeselect: function(evt) {
    var ele = $(evt.target);
    this.toggleSubItem(ele, 'close');
  }
});
theme.sections.constructors['navigation-mobile'] = theme.MobileNavigationSection;