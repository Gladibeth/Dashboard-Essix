WebFont.load({
  google: {
    families: ["Lato:300,400,500,700,900"],
  },
});

$('.custom-card.custom-card__border').click(function(){
  $(this).addClass('active');
})
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
