$(function() {
  $('a.download').on('click', function () {
    ga('send', 'event', 'iOS App Link');
  });

  $('.overlay-container_content_img').load(function () {
    $(this).animate({ opacity: 1 }, 1000)
  })
  $('.overlay-container_content_img').attr('src', 'https://s3.amazonaws.com/replay-landing-page/FirstFrame.jpg?r=' + Math.random())

  $('video.overlay-container_content_media').on('canplay', function () {
    $(this).delay(1000).animate({ opacity: 1 }, 1000)
  })
});
