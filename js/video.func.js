$(function () {
    $('video').on('contextmenu',function() { return false; });
    var myPlayer = videojs('my_video_1');
    var countToTimePopup = true;
    
    
    $.get(quizzlink, function (data) {
       $(".quizz-content").append(data);
    });
    
    $(".quizz-content").on("click", ".quizz-choice:not([answer])", function(){
        $(this).attr("disabled", "true");
        $(this).siblings().attr("disabled", "true");
        $(this).addClass("wrongchose");
        $(this).siblings("[answer]").addClass("rightchose");
        $("#quizz-all").text(Number($("#quizz-all").text()) + 1);
    });
    
    $(".quizz-content").on("click", ".quizz-choice[answer]", function(){
        $(this).attr("disabled", "true");
        $(this).siblings().attr("disabled", "true");
        $(this).addClass("rightchose");
        $("#quizz-all").text(Number($("#quizz-all").text()) + 1);
        $("#quizz-score").text(Number($("#quizz-score").text()) + 1);
    });
    
    $(".quizz-close").click(function(){
        $("#popup").fadeOut("slow");
        $(document).keypress(function(e){
            // press Enter
            if(e.which === 13){
                if(!myPlayer.isFullscreen()){myPlayer.requestFullscreen();}
                else {myPlayer.exitFullscreen();}  
            }
            // Press -
            if(e.which === 45){
                myPlayer.volume(myPlayer.volume() - 0.1);
            }
            // Press +
            if(e.which === 61 || e.which == 43){
                myPlayer.volume(myPlayer.volume() + 0.1);
            }
            // Press M
            if(e.which === 109){
                myPlayer.muted() === true ? 
                myPlayer.muted(false) :
                myPlayer.muted(true);
            }
            // Press Space
            if(e.which === 32){
                myPlayer.paused() === true ? 
                myPlayer.play() :
                myPlayer.pause();
            }
            // Press Q
            if(e.which === 113){
                myPlayer.pause();
                if(myPlayer.isFullscreen()){myPlayer.exitFullscreen();}
                $("#popup").fadeIn("slow");
                $(document).off("keypress");
            }
        });
    });
    
    $(".quizz-fullscreen").click(function () {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
            $(this).find("span").toggleClass("vjs-icon-fullscreen-enter");
            $(this).find("span").toggleClass("vjs-icon-fullscreen-exit");
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            $(this).find("span").toggleClass("vjs-icon-fullscreen-enter");
            $(this).find("span").toggleClass("vjs-icon-fullscreen-exit");
        }
    });
    
    $(".quizz-again").click(function(){
        $(".quizz-choice").removeAttr("disabled");
        $(".quizz-choice").removeClass("rightchose");
        $(".quizz-choice").removeClass("wrongchose");
        $("#quizz-all").text("0");
        $("#quizz-score").text("0");
    });
    
    myPlayer.on("timeupdate", function () {
        if (myPlayer.currentTime() >= timeToPopup && myPlayer.currentTime() < timeToPopup + 1 && countToTimePopup === true) {
            countToTimePopup = false;
            myPlayer.pause();
            if(myPlayer.isFullscreen()){myPlayer.exitFullscreen();}
            $("#popup").fadeIn("slow");
            $(document).off("keypress");
        }
    });
        
    myPlayer.on( "dblclick", function(){
        
        if(!myPlayer.isFullscreen()){myPlayer.requestFullscreen();}
        else {myPlayer.exitFullscreen();} 
    });
    
    myPlayer.on("useractive",function(){
        $("#videohotkey").css("display","block");
    });
    
    myPlayer.on("userinactive",function(){
        $("#videohotkey").css("display","none");
    });
    
    $(document).keypress(function(e){
        // press Enter
        if(e.which === 13){
            if(!myPlayer.isFullscreen()){myPlayer.requestFullscreen();}
            else {myPlayer.exitFullscreen();}  
        }
        // Press -
        if(e.which === 45){
            myPlayer.volume(myPlayer.volume() - 0.1);
        }
        // Press +
        if(e.which === 61 || e.which == 43){
            myPlayer.volume(myPlayer.volume() + 0.1);
        }
        // Press M
        if(e.which === 109){
            myPlayer.muted() === true ? 
            myPlayer.muted(false) :
            myPlayer.muted(true);
        }
        // Press Space
        if(e.which === 32){
            myPlayer.paused() === true ? 
            myPlayer.play() :
            myPlayer.pause();
        }
        // Press Q
        if(e.which === 113){
            myPlayer.pause();
            if(myPlayer.isFullscreen()){myPlayer.exitFullscreen();}
            $("#popup").fadeIn("slow");
            $(document).off("keypress");
        }
    });
    $(document).keydown(function(e){
        // Press Left Arrow
        if(e.which === 37){
            myPlayer.currentTime(myPlayer.currentTime() - 4);
        }
        // Press Right Arrow
        if(e.which === 39){
            myPlayer.currentTime(myPlayer.currentTime() + 4);
        }
        // Press Down Arrow
        if(e.which === 40){
            myPlayer.volume(myPlayer.volume() - 0.1);
        }
        // Press Up Arrow
        if(e.which === 38){
            myPlayer.volume(myPlayer.volume() + 0.1);
        }
    });

});

