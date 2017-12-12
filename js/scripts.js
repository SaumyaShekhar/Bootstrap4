  $(document).ready(function () {
      $("#mycarousel").carousel({
          interval: 2000
      });
      $("#carousel-button").click(function () {
          if ($("#carousel-button").children("span").hasClass("fa-pause")) {
              $("#mycarousel").carousel('pause');
              $("#carousel-button").children("span").removeClass("fa-pause");
              $("#carousel-button").children("span").addClass("fa-play");
          } else if ($("#carousel-button").children("span").hasClass("fa-play")) {
              $("#mycarousel").carousel('cycle');
              $("#carousel-button").children("span").removeClass("fa-play");
              $("#carousel-button").children("span").addClass("fa-pause");
          }

      });

      //   To Show the reserve Modal on click of Reserve Table Button
      $("#reserveTableButton").click(function () {
          $('#reserveTableModal').modal('show');
      });

      //   To open login Modal on click of Login Button
      $("#loginButton").click(function () {
          $('#loginModal').modal('show');
      });
  });