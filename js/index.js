// Choose story button
$('nav button').on('click', function() {
  $('.story-list').toggleClass('hide');
});

// Open story link on click
$('.story-link').on('click', function() {
  var $this = $(this);
  var storyTitle = $this.attr('data-story');
  $('.app').addClass('hide');
  $('.' + storyTitle).removeClass('hide');
});