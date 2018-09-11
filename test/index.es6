require("./sass/style.scss");

require ("jquery");

require('../build/mari-tabs.js');


$(document).ready(function () {

    $('.mari-tabs-content').mariTabs({
        nav: '.mari-tabs-nav'
    });

    $('.mari-tabs-content').on('ml.shown.tab', function(e, index){
           console.log('Shown index - ' + index);
    })

    $('.mari-tabs-content').on('ml.hidden.tab', function(e, index){
        console.log('Hidden index - ' + index);
    })

});