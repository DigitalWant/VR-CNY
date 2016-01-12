function sendResultToServer(vData) {
  $('.scene .loading').show();
  $.post(
    website_url + 'accept_avatar.php', {
      data: vData
    },
    function(aData) {

      if (aData) {
        $('.result').fadeOut(1000, function() {
          var result = '<hr /><div class="container"><h2>Result is:</h2><img src="cache/result' + aData + '.jpg" /><button class="button download" onclick="window.open(\'cache/result' + aData + '.jpg\');">download result image</button>' +
            '<button class="button" onclick="$(\'.send_email\').toggle();">Send by Email</button>' +
            '<form method="post" action="email.php" class="send_email"><input name="file" value="' + aData + '" type="hidden" />' +
            '<input class="text" name="name" value="" type="text" placeholder="Your Name" /><input class="text" name="email" value="" type="text" placeholder="Your Email" /><input class="button" type="submit" name="submit" /></form></div>';

          $(this).html(result);
          $(this).fadeIn(1000);
          $('.scene .loading').hide();
        });
      }
    }
  );
}
