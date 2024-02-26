(function() {
  "use strict";
  GOVUK.analyticsPlugins = GOVUK.analyticsPlugins || {};
  GOVUK.analyticsPlugins.downloadLinkTracker = function (options) {
    var options = options || {},
        downloadLinkSelector = options.selector;

    if (downloadLinkSelector) {
      $('body').on('click', downloadLinkSelector, trackDownload);
    }

    function trackDownload(evt) {
      var $link = getLinkFromEvent(evt),
          href = $link.attr('href'),
          linkText = $.trim($link.text());

      GOVUK.analytics.trackPageview(href, linkText, {transport: 'beacon'});
    }

    function getLinkFromEvent(evt) {
      var $target = $(evt.target);

      if (!$target.is('a')) {
        $target = $target.parents('a');
      }

      return $target;
    }
  }
}());
