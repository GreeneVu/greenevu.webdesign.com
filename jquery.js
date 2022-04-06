
  $(document).ready(function() {
    $(".bg").click(function(obj) {
      // implement jQuery for click here
      $("#bgimage").css("bgi", $(this).html("<img id='picForJquery'"));
      $("#bgimage").slideDown(1000);

    });

    $(".bg").mouseenter(function() {
      // implement jQuery for mouseenter here
      $(this).css("opacity", "0.5");
      $(".centre").slideUp(1000);

    });
    $(".bg").mouseleave(function() {
      // implement jQuery for mouseleave here
      $(this).css("opacity", "1.0");
      // $(".centre").slideUp(1000);
      $(".centre").slideUp(1000);


    });
  });
