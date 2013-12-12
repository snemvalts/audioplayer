require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrapAffix: '../bower_components/sass-bootstrap/js/affix',
        bootstrapAlert: '../bower_components/sass-bootstrap/js/alert',
        bootstrapButton: '../bower_components/sass-bootstrap/js/button',
        bootstrapCarousel: '../bower_components/sass-bootstrap/js/carousel',
        bootstrapCollapse: '../bower_components/sass-bootstrap/js/collapse',
        bootstrapDropdown: '../bower_components/sass-bootstrap/js/dropdown',
        bootstrapModal: '../bower_components/sass-bootstrap/js/modal',
        bootstrapPopover: '../bower_components/sass-bootstrap/js/popover',
        bootstrapScrollspy: '../bower_components/sass-bootstrap/js/scrollspy',
        bootstrapTab: '../bower_components/sass-bootstrap/js/tab',
        bootstrapTooltip: '../bower_components/sass-bootstrap/js/tooltip',
        bootstrapTransition: '../bower_components/sass-bootstrap/js/transition'
    },
    shim: {
        bootstrapAffix: {
            deps: ['jquery']
        },
        bootstrapAlert: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapButton: {
            deps: ['jquery']
        },
        bootstrapCarousel: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapCollapse: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapDropdown: {
            deps: ['jquery']
        },
        bootstrapModal:{
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapPopover: {
            deps: ['jquery', 'bootstrapTooltip']
        },
        bootstrapScrollspy: {
            deps: ['jquery']
        },
        bootstrapTab: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapTooltip: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapTransition: {
            deps: ['jquery']
        }
    }
});

require(['app', 'jquery'], function (app, $) {
    'use strict';
    // use app here
    var audio;
    var updateInterval;
    $(".play").click(function(){
        audio.play();
        /*updateInterval = window.setInterval(function(){

        },1000)*/
    })
    $(".pause").click(function(){
        audio.pause();
        console.log(audio.currentTime)
        console.log(audio.totalTime)
    })
   $("#submitInput").click(function(){
    audio = new Audio($("#linkInput").val());
    $(".jumbotron").append(audio);
    $("#submitInput").toggle();
    $("#linkInput").toggle();
    $(".play").toggle()
              .css("margin-left","11.5px");
    $(".pause").toggle()
                .css("display","block")
    progressCalculator()
   })
   function progressCalculator(currentTime,totalTime){
    if($("#progressBar").length == 0) $(".jumbotron").append("<div id='progressBar'></div>")
    if(currentTime !== undefined && totalTime !== undefined){ 
    var percentage = (currentTime/totalTime)*100;
    $("#progressBar").css("width",percentage+"%");
}
}
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});
