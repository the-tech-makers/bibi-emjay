$.extend(true, BT, {
  /* Desktop Navigation */
  initDesktopNavigation: function(wrap, type) {
    var ins = this;
    var selectors = ins.selectors[type], curWinWidth = this.data.cacheWindowWidth, overlaySelector = this.selectors.overlay;
    var loadedDropdown, resetDropdownStatus = false, resetWithData = false;
    function resetDropdown(wrap) {
      if(!resetDropdownStatus && ins.data.cacheWindowWidth >= ins.options.windowScreen.desktop) {
        resetDropdownStatus = true;
        $(wrap + ' ' + selectors.topItem).each(function() {
          if($(this).find(selectors.dropdown + ' > .row > div').length > 0) {
            $(this).addClass(selectors.parentItem.replace('.', ''));
            $(this).find(selectors.dropdown).removeClass('hide');
          }
        });
      }
    }
    function alignDropdown(wrap) {
      if(type == 'desktopNav') { // Horizontal navigation
        if(ins.data.cacheWindowWidth >= ins.options.windowScreen.desktop && loadedDropdown == true) {
          var parentItems = $(wrap + ' ' + selectors.parentItem);
          if(parentItems.length > 0) {
            $('body').addClass('aligning-menu');
            var parentNav = $(selectors.parentNav);
            var thresholdLeft = parentNav.offset().left;
            var thresholdRight = thresholdLeft + parentNav.outerWidth();
            parentItems.each(function() {
              var dropdown = $(this).children(selectors.dropdown);
              dropdown.css({ 'left' : '', 'right' : '' });
              var centerPoint = $(this).offset().left + $(this).outerWidth()/2;
              var dropdownWidth = dropdown.outerWidth();
              var dropdownHalf = dropdownWidth/2;
              if(!rtl) {
                var leftPoint = $(this).offset().left;
                if(leftPoint + dropdownWidth > thresholdRight) {
                  if(centerPoint + dropdownHalf < thresholdRight) {
                    if(centerPoint - dropdownHalf > thresholdLeft) {
                      var left = centerPoint - dropdownHalf - thresholdLeft - 15;
                      dropdown.css({'left': left});
                    } else {
                      dropdown.css({'left': 0});
                    }
                  } else {
                    dropdown.css({'right': 0, 'left': 'auto'});
                  }
                } else {
                  dropdown.css({'left': (leftPoint - thresholdLeft - 15)});
                }
              } else {
                var rightPoint = $(this).offset().left + $(this).outerWidth();
                if(rightPoint - dropdownWidth < thresholdLeft) {
                  if(centerPoint - dropdownHalf > thresholdLeft) {
                    if(centerPoint + dropdownHalf > thresholdRight) {
                      dropdown.css({'left': 0});
                    } else {
                      var left = centerPoint - dropdownHalf - thresholdLeft + 15;
                      dropdown.css({'left': left});
                    }
                  } else {
                    dropdown.css({'left': 0, 'right': 'auto'});
                  }
                } else {
                  dropdown.css({'left': (rightPoint - thresholdLeft - dropdownWidth + 15)});
                }
              }
            });
            setTimeout(function(){$('body').removeClass('aligning-menu');},300);
          }
        }
      } else { // Vertical navigation
        if(ins.data.cacheWindowWidth >= ins.options.windowScreen.desktop) {
          var parentItems = $(wrap + ' ' + selectors.parentItem + ' > a');
          if(parentItems.length > 0) {
            $('body').addClass('aligning-menu');
            var parentNav = $(selectors.parentNav);
            var thresholdTop = parentNav.offset().top;
            parentItems.each(function() {
              var dropdown = $(this).siblings(selectors.dropdown);
              dropdown.css("top","");
              var centerPoint = $(this).offset().top + $(this).outerHeight()/2;
              var dropdownHalf = dropdown.outerHeight()/2;
              if(centerPoint - dropdownHalf > thresholdTop) {
                var top = centerPoint - dropdownHalf - thresholdTop;
                dropdown.css({'top': top});
              } else {
                dropdown.css({'top': 0});
              }
            });
            setTimeout(function(){$('body').removeClass('aligning-menu');},300);
          }
        }
      }
    }
    function hideOpeningMenu(wrap) {
      $(wrap + ' .nav__item--parent.hover').removeClass('hover');
      $(wrap + ' .nav__item--parent.clicked').removeClass('clicked');
    }
    function initHoverMenu(wrap) {
      if(type != 'desktopNav') { // Init trigger button in the vertical navigation
        $('.vertical-navigation__trigger').unbind('click');
        $('.vertical-navigation__trigger').on('click',function(e) {
          e.preventDefault();
          $(this).toggleClass('open');
          $(this).siblings('.vertical-navigation__inner').toggleClass('open');
        });
      }
      $(document).on('mouseover', wrap + ' .nav__item--parent:not(hover),' + wrap + ' .link-list__item--parent:not(hover)', function(e) {
        e.preventDefault();
        $(this).siblings('.hover').removeClass('hover');
        $(this).addClass('hover');
      });

      $(document).on('mouseout', wrap + ' .nav__item--parent.hover,' + wrap + ' .link-list__item--parent.hover', function(e) {
        e.preventDefault();
        $(this).removeClass('hover');
      });
      
      $(document).on('click', 'body', function(e) {
        if($(e.target).parents(wrap + ' .nav__item--parent').length == 0) {
          $(wrap + ' .nav__item--parent.hover').removeClass('hover');
          $(wrap + ' .nav__item--parent.clicked').removeClass('clicked');
        }
        if($(e.target).parents(wrap + ' .link-list__item--parent').length == 0) {
          $(wrap + ' .link-list__item--parent.hover').removeClass('hover');
          $(wrap + ' .link-list__item--parent.clicked').removeClass('clicked');
        }
      });

      // Show dropdown in tablet
      $(document).on('click', wrap + ' .nav__item--parent:not(clicked) > a,' + wrap + ' .link-list__item--parent:not(clicked) > div > a', function(e) {
        if(curWinWidth >= 992 && curWinWidth <= 1199) {
          if(!$(this).parent().hasClass('clicked')) {
            e.preventDefault();
            $(this).parent().siblings('.clicked').removeClass('hover clicked');
            $(this).parent().addClass('clicked hover').trigger("mouseover");
          }
        }
      });
    }
    function resetNavWithData() {
      if(resetWithData) {
        alignDropdown(wrap);
      } else {
        resetDropdown(wrap);
        ins.applyCustomColorSwatches(wrap);
        alignDropdown(wrap);
        initHoverMenu(wrap);
        ins.initDealCountdown(wrap);
        resetWithData = true;
      }
    }
    function resetNavData() {
      if(ins.data.cacheWindowWidth >= 992) {
        if(loadedDropdown) {
          resetNavWithData();
        } else {
          ins.runLoadingDropdownNavInAjax(wrap, type, function() {
            loadedDropdown = true;
            resetNavWithData();
          });
        }
      }
    }
    if($(wrap).length > 0) {
      loadedDropdown = $(wrap).hasClass('loaded-dropdown');
      resetNavData();
      
      $(window).on(this.data.resizeEventName, function(e) {
        setTimeout(function() {
          resetNavData();
        }, 1000);
        curWinWidth = ins.data.cacheWindowWidth;
      });
    }
  }
});

/********* --- Desktop Navigation --- *********/
theme.desktopNavigation = {};
theme.DesktopNavigationSection = (function() {
  function DesktopNavigationSection(container) {
    BT.initDesktopNavigation('#' + $(container).attr('id'), 'desktopNav');
  }
  return DesktopNavigationSection;
})();

theme.DesktopNavigationSection.prototype = _.assignIn({}, theme.DesktopNavigationSection.prototype, {
  getTopEle: function(ele) {
    return ele.hasClass('nav__item') ? ele : ele.parents('.nav__item');
  },
  onBlockSelect: function(evt) {
    var ele = $(evt.target);
    var topEle = this.getTopEle(ele);
    if(topEle.length > 0) {
      topEle.addClass('open');
    }
  },
  onBlockDeselect: function(evt) {
    var ele = $(evt.target);
    var topEle = this.getTopEle(ele);
    if(topEle.length > 0) {
      topEle.removeClass('open');
    }
  }
});
theme.sections.constructors['navigation'] = theme.DesktopNavigationSection;