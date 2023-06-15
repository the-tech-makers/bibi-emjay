/********* --- Newsletter Section --- *********/
theme.newsletter = {};
theme.NewsletterSection = (function() {
  function NewsletterSection(container) {
    var $container = $(container);
    BT.initNewsTerms('#' + $container.attr('id'));
  }

  return NewsletterSection;
})();
theme.sections.constructors['newsletter'] = theme.NewsletterSection;