var BTCollectionFilter = {
  selectors: {
    wrap: '.cfs',
    item: '.cfs__item',
    itemTitle: '.cfs__item__title',
    link: '.cfs__link',
    sectionContent: '.section__content',
    dropdown: '.cfs__dropdown',
    dropdownTrigger: '.cfs__dropdown__trigger',
    dropdownTriggerTitle: '.cfs__dropdown__title',
    dropdownTriggerValue: '.cfs__dropdown__value',
    dropdownTriggerTitleTopClass: 'cfs__dropdown__title--top',
    dropdownContent: '.cfs__dropdown__content',
    btn: '.cfs__btn'
  },

  data: {
    isAuto: true
  },

  getAjaxUrl: function(wrap, stopIndex) {
    if(this.data.isAuto) {
      return theme.collectionAllUrl;
    }
    var tags = [];
    var ins = this;
    wrap.find(this.selectors.link + '.selected').each(function() {
      var index = parseInt($(this).parents(ins.selectors.item).first().attr('data-index'));
      if(index <= stopIndex) {
        tags.push($(this).attr('data-value'));
      }
    });
    return theme.collectionAllUrl + '/' + tags.join('+');
  },

  getAutoParams: function(wrap, stopIndex, ignoreIndex) {
    var filterParams = [], params = {}, ins = this;
    if(!ignoreIndex) {
      filterParams.push('btindex=' + stopIndex);
    }
    wrap.find(this.selectors.item).each(function() {
      var index = $(this).attr('data-index')*1;
      if(index <= stopIndex) {
        var optionName = $(this).attr('data-option-name');
        filterParams.push(optionName + '=' + $(this).find(ins.selectors.link + '.selected').attr('data-value'));  
      }
    });
    if(filterParams.length > 0) {
      params.f = filterParams.join(',');
    }
    return params;
  },

  getCompleteUrl: function(wrap, stopIndex) {
    if(this.data.isAuto) {
      var params = this.getAutoParams(wrap, stopIndex, true);
      var newParams = new URLSearchParams(params);
      return this.getAjaxUrl() + '?' + newParams.toString();
    } else {
      return this.getAjaxUrl(wrap, stopIndex);
    }
  },

  detectLastItem: function(wrap) {
    wrap.find(this.selectors.item).last().addClass('last');
  },

  renderData: function(wrap, stopIndex, cb){
    wrap.addClass('rendering');
    var url = this.getAjaxUrl(wrap, stopIndex);
    BT.showLoadingFull();
    var params = {view: 'filter'};
    if(this.data.isAuto) {
      params = this.getAutoParams(wrap, stopIndex);
      params.view = 'filter';
    }
    BT.callAjax(url, 'get', params, null, function(html) {
      var ajaxContent = $(this.selectors.sectionContent, html);
      this.data.isAuto = ajaxContent.attr('data-auto') != undefined;
      wrap.find(this.selectors.sectionContent).html(ajaxContent.html());
      wrap.removeClass('rendering');
      this.detectLastItem(wrap);
      BT.hideLoadingFull();
      if(cb) {
        cb();
      }
    }.bind(this));
  },

  init: function() {
    var ins = this, selectedClass = 'selected', activeClass = 'active';
    $(document).on('click', this.selectors.link, function(e) {
      e.preventDefault();
      var wrap = $(this).parents(ins.selectors.wrap).first();
      if(!wrap.hasClass('rendering')) {
        var item = $(this).parents(ins.selectors.item).first();
        if(!$(this).hasClass(selectedClass)) {
          item.find('.' + selectedClass).removeClass(selectedClass);
          $(this).addClass(selectedClass);
          if(!item.hasClass('last')) {
            // item.find(ins.selectors.itemTitle).text($(this).text());
            var stopIndex = parseInt(item.attr('data-index'));
            ins.renderData(wrap, stopIndex, function() {
              var nextItem = wrap.find(ins.selectors.item + '[data-index="' + (stopIndex + 1) + '"]');
              if(nextItem.length > 0) {
                nextItem.find(ins.selectors.dropdown).addClass(activeClass);
              }
            });
          } else {
            item.find(ins.selectors.dropdown).removeClass(activeClass);
            item.find(ins.selectors.dropdownTriggerValue).text($(this).text());
            item.find(ins.selectors.dropdownTriggerTitle).addClass(ins.selectors.dropdownTriggerTitleTopClass);
          }
        } else {
          item.find(ins.selectors.dropdown).removeClass(activeClass);
          if(!item.hasClass('last')) {
            var stopIndex = parseInt(item.attr('data-index'));
            var nextItem = wrap.find(ins.selectors.item + '[data-index="' + (stopIndex + 1) + '"]');
            if(nextItem.length > 0) {
              nextItem.find(ins.selectors.dropdown).addClass(activeClass);
            }
          }
        }
      }
    });
    $(document).on('click', this.selectors.dropdownTrigger, function(e) {
      var dropdown = $(this).parent(ins.selectors.dropdown);
      if(!dropdown.hasClass(activeClass)) {
        dropdown.addClass(activeClass);
      }
    });
    $(document).on('click', 'body', function(e) {
      if($(e.target).parents(ins.selectors.dropdown).length == 0 && !$(e.target).hasClass(ins.selectors.btn.replace('.',''))) {
        if($(ins.selectors.dropdown + '.' + activeClass).length > 0) {
          $(ins.selectors.dropdown + '.' + activeClass).removeClass(activeClass);
        }
      }
    });
    $(document).on('click', this.selectors.btn, function(e) {
      e.preventDefault();
      var wrap = $(this).parents(ins.selectors.wrap);
      var items = wrap.first().find(ins.selectors.item);
      var completed = true;
      items.each(function() {
        if($(this).find(ins.selectors.link + '.' + selectedClass).length == 0 && completed) {
          $(this).find(ins.selectors.dropdown).addClass(activeClass);
          completed = false;
          return;
        }
      });
      if(completed) {
        window.location.href = ins.getCompleteUrl(wrap, items.length);
      }
    });
  }
};
BTCollectionFilter.init();
theme.collectionFilter = {};
theme.CollectionFilterSection = (function() {
  function renderData(wrap) {
    BTCollectionFilter.renderData(wrap, 0);
  }

  function CollectionFilterSection(container) {
    this.wrap = $(container);
    renderData(this.wrap);
  }

  return CollectionFilterSection;
})();

theme.CollectionFilterSection.prototype = _.assignIn({}, theme.CollectionFilterSection.prototype, {
  onSelect: function() {
  },
  onUnload: function() {
    delete this.wrap;
    delete this.content;
  }
});
theme.sections.constructors['collection-filter'] = theme.CollectionFilterSection;