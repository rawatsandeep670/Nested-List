(function(){
    var app = angular.module("myApp", []);
    $(document).ready(function(){
        $(".menu-container li").css("cursor", "pointer");
        $(".menu-container li").each(function(){
           if($(this).children("ul").length>0){
               $(this).append("<span style='float:right'>></span>");
           }
        });
        
        $(".menu-container li").bind("mouseover", function(){
            $(this).children("ul").css("display", "inline-block");
        });
        $(".menu-container li").bind("mouseout", function(){
            $(this).children("ul").css("display", "none");
        });
        
        var i=1;
        $(".menu-container ul").each(function(){
            
            $(this).css("z-index", i+"");
            i++;
        });
    });
})();
