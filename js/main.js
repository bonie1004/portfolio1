//풀페이지
new fullpage('#fullpage', {
  // sectionsColor: ['#fff', '#fff', '#fff', 'fff', '#fff', 'fff'],
  navigation: true,
  // navigationTooltips: ['home', 'about', 'skills', 'project', 'design', 'contact'],
  // scrollBar: true,
});

$('menu').click(function () {
  if ($('.header_sitemap').hasClass('on')) {
    $('.header_sitemap').removeClass('on'); // true
  } else {
    $('.header_sitemap').addClass('on'); // false
  }
})

