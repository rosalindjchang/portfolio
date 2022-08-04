$(document).ready(function(){

    $(".laimg").hide();
    $("#la").hover(function(){
        $(".laimg").show();
    },
    function(){
        $(".laimg").hide();
    }
    );
    
    $("#instrumentlogo").hide();
    $("#instrument").hover(function(){
        $("#instrumentlogo").show();
    },
    function(){
        $("#instrumentlogo").hide();
    }
    );
    
     $("#ministryimg").hide();
    $("#ministry").hover(function(){
        $("#ministryimg").show();
    },
    function(){
        $("#ministryimg").hide();
    }
    );
    
    $("#bookimg").hide();
    $("#book").hover(function(){
        $("#bookimg").show();
    },
    function(){
        $("#bookimg").hide();
    }
    );
    
     $("#hairimg").hide();
    $("#pixie").hover(function(){
        $("#hairimg").show();
    },
    function(){
        $("#hairimg").hide();
    }
    );
    
     $("#blobimg").hide();
    $("#blob").hover(function(){
        $(".blobcategory").addClass("blackborder");
        $("#blobimg").show();
    },
    function(){
        $("#blobimg").hide();
        $(".blobcategory").removeClass("blackborder");
    }
    );
    
     $("#okimg").hide();
    $("#ok").hover(function(){
        $("#okimg").show();
        $(".okcategory").addClass("blackborder");
    },
    function(){
        $("#okimg").hide();
        $(".okcategory").removeClass("blackborder");
    }
    );
    
      $("#fineimg").hide();
    $("#fine").hover(function(){
        $(".finecategory").addClass("blackborder");
        $("#fineimg").show();
    },
    function(){
        $("#fineimg").hide();
        $(".finecategory").removeClass("blackborder");
    }
    );
    
      $("#afterhoursimg").hide();
    $("#afterhours").hover(function(){
        $(".aftercategory").addClass("blackborder");
        $("#afterhoursimg").show();
    },
    function(){
        $("#afterhoursimg").hide();
        $(".aftercategory").removeClass("blackborder");
    }
    );
    
      $("#pixelimg").hide();
    $("#pixel").hover(function(){
        $(".pixelcategory").addClass("blackborder");
        $("#pixelimg").show();
    },
    function(){
        $("#pixelimg").hide();
        $(".pixelcategory").removeClass("blackborder");
    }
    );
    
      $("#spaceimg").hide();
    $("#spacejanitor").hover(function(){
        $(".spacecategory").addClass("blackborder");
        $("#spaceimg").show();
    },
    function(){
        $(".spacecategory").removeClass("blackborder");
        $("#spaceimg").hide();
    }
    );
    
      $("#lacfimg").hide();
    $("#lacf").hover(function(){
        $(".lacfcategory").addClass("blackborder");
        $("#lacfimg").show();
    },
    function(){
        $(".lacfcategory").removeClass("blackborder");
        $("#lacfimg").hide();
    }
    );
    
       $("#ucla4allimg").hide();
    $("#ucla4all").hover(function(){
        $(".uclacategory").addClass("blackborder");
        $("#ucla4allimg").show();
    },
    function(){
        $(".uclacategory").removeClass("blackborder");
        $("#ucla4allimg").hide();
    }
    );
    
    
    
    
});