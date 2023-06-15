theme.verticalNavigation = {};
theme.VerticalNavigationSection = (function() {
  function VerticalNavigationSection(container) {
    BT.initDesktopNavigation('#' + $(container).attr('id'), 'verticalNav');
  }

  return VerticalNavigationSection;
})();

theme.VerticalNavigationSection.prototype = _.assignIn({}, theme.VerticalNavigationSection.prototype, {
  getTopEle: function(ele) {
    return ele.hasClass('nav__item') ? ele : ele.parents('.nav__item');
  },
  onSelect: function(evt) {
    var ele = $(evt.target);
    ele.children('.vertical-navigation__trigger').trigger('click');
  },
  onDeselect: function(evt) {
    var ele = $(evt.target);
    ele.children('.vertical-navigation__trigger').trigger('click');
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
theme.sections.constructors['navigation-vertical'] = theme.VerticalNavigationSection;