/********* --- Single Deal --- *********/
theme.singleDeal = {};
theme.SingleDealSection = (function() {
  function SingleDealSection(container) {
    this.wrap = $(container);
    var sectionId = this.wrap.attr('data-section-id');
    this.suffixEvent = 'single_deal_' + sectionId;

    BT.initScrollingWindowTriggerOnce(this.wrap, this.suffixEvent, -170, function() {
      BT.initDealCountdown(this.wrap);
    }.bind(this));
  }

  return SingleDealSection;
})();

theme.SingleDealSection.prototype = _.assignIn({}, theme.SingleDealSection.prototype, {
  onSelect: function() {
  },
  onUnload: function() {
    BT.destroyScrollingWindowTriggerOnce(this.suffixEvent);
    BT.destroyDealCountdown(this.wrap);
    delete this.suffixEvent;
    delete this.wrap;
  }
});
theme.sections.constructors['single-deal'] = theme.SingleDealSection;