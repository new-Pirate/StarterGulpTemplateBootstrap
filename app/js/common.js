$(function() {

   
    $(".tab").click(function () {
        $(".content").removeClass("active")



        if ($(this).hasClass("tab-1")) {
            
            if ($(".content-1").hasClass("active")) {
                $(".content-1").removeClass("active")
            } else {
                $(".content-1").addClass("active")
            }
        } else if ($(this).hasClass("tab-2")) {
            if ($(".content-2").hasClass("active")) {
                $(".content-2").removeClass("active")
            } else {
                $(".content-2").addClass("active")
            }
        } else if ($(this).hasClass("tab-3")) {
            if ($(".content-3").hasClass("active")) {
                $(".content-3").removeClass("active")
            } else {
                $(".content-3").addClass("active")
            }
        }else if ($(this).hasClass("tab-4")) {
            if ($(".content-4").hasClass("active")) {
                $(".content-4").removeClass("active")
            } else {
                $(".content-4").addClass("active")
            }
        }
            
            
        
  
});
});
