/*==================================================================================
    Custom JS (Any custom js code you want to apply should be defined here).
====================================================================================*/

AOS.init({
  duration: 1200,
});

// Hover change image
$(".social-telegram").hover(
  function () {
    $(this).attr("src", "assets/img/image/telegram-icon-c.png");
  },
  function () {
    $(this).attr("src", "assets/img/image/telegram-icon-b.png");
  }
);

$(".social-twitter").hover(
  function () {
    $(this).attr("src", "assets/img/image/twitter-icon-c.png");
  },
  function () {
    $(this).attr("src", "assets/img/image/twitter-icon-b.png");
  }
);

$(".social-mail").hover(
  function () {
    $(this).attr("src", "assets/img/image/mail-icon-c.png");
  },
  function () {
    $(this).attr("src", "assets/img/image/mail-icon-b.png");
  }
);