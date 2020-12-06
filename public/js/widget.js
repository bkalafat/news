
$(function(){
  typeof $.fn.paraceviriciWidget == "function" &&
  $("#doviz").paraceviriciWidget({
    widget:"slideline",
    wData:{
      category:0,
      currency:"USD-EUR-GBP-CHF-CNY-JPY-SAR"
    },
    wSize:{
      wWidth:"100%",
      wHeight:50
    },
    wColumn: {
      cL: 1
    },
    wContent: {
      cFlag: 2
    },
    wTop: {
      tStat: 2,
      tB: "#305891",
      tC: "#ffffff"
    },
    wLeft: {
      lStat: 0
    },
    wCode: {
      cS: 18
    },
    wPrice: {
      pS: 20
    },
    wChange: {
      cS: 15
    },
    wArrow: {
      aS: 11
    }
  });
  });
