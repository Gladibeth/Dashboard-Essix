WebFont.load({
  google: {
    families: ["Lato:300,400,500,700,900"],
  },
});

// Offcanvas menu

$(function () {
  "use strict";

  $('[data-toggle="offcanvas"]').on("click", function () {
    $(".main-sidebar").toggleClass("open");
    
  });
});

// Offcanvas user
$(function () {
  "use strict";

  $('[data-toggle="offprofile"]').on("click", function () {
    if (!$('.main-wrapper-profile').hasClass("open")) {
      $(".main-wrapper-profile").addClass("open");
      $('.main-wrapper').css('overflow-y', 'auto')
    } else {
      $(".main-wrapper-profile").removeClass("open");
    }
    
  });
});
// Menu hamburger

$(".hamburger").on("click", function () {
  if (!$(this).hasClass("is-active")) {
    $(this).addClass("is-active");;
  } else {
    $(this).removeClass("is-active");
  }
});
var options = {
  chart: {
    height: 310,
    type: "area",
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: "Days",
      data: [2, 15, 10, 25, 30, 25, 28]
    }
  ],

  fill: {
    gradient: {
      enabled: true,
      opacityFrom: 0.55,
      opacityTo: 0
    }
  },

  tooltip: {
    theme: "dark"
  },
  xaxis: {
    categories: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ]
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
