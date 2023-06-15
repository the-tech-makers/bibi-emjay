/********* --- About section --- *********/
theme.about = {};
theme.AboutSection = (function() {
  function AboutSection(container) {
    this.wrap = $(container);
    BT.initSlider(this.wrap, true);
  }

  return AboutSection;
})();

theme.AboutSection.prototype = _.assignIn({}, theme.AboutSection.prototype, {
  onSelect: function() {
  },
  onUnload: function() {
    delete this.wrap;
  }
});
theme.sections.constructors['about'] = theme.AboutSection;