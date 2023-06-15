theme.faq = {};
theme.faqSection = (function() {
  function faqSection(container) {
    var $container = this.$container = $(container);
    var sectionId = this.sectionId = $container.attr('data-section-id');
    this.obj = '#faq_' + sectionId;
    theme.faq[this.obj] = '#' + $container.attr('id');
  }

  return faqSection;
})();

theme.faqSection.prototype = _.assignIn({}, theme.faqSection.prototype, {
  onSelect: function(evt) {
    if(evt.detail.load) {
      
    }
  },
  onBlockSelect: function(evt) {
    var ele = $(evt.target);
    var trigger = ele.find('.faq__trigger');
    if(trigger.hasClass('collapsed')) {
      trigger.trigger('click'); 
    }
    if(!BT.isInViewport(ele, evt.currentTarget.defaultView)) {
      var offset = ele.offset().top - 100;
      $('html, body').animate({
        scrollTop: offset
      }, 400);
    }
  },
  onUnload: function() {
    delete theme.faq[this.obj];
  }
});
theme.sections.constructors['faq'] = theme.faqSection;