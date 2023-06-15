theme.instagram = {};
theme.InstagramSection = (function() {
  function InstagramSection(container) {
    var $container = $(container);
    BT.initSlider($container, true, false);
  }

  return InstagramSection;
})();
theme.sections.constructors['instagram'] = theme.InstagramSection;