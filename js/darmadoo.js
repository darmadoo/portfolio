$(document).ready(function(){
    // $("html,body").animate({ scrollTop: 0 }, "fast");
	$(function() {
		if($(window).width() > 1024){
	        $.scrollify({
	            section : ".panel",
	            interstitialSection : ".footer",
	            easing: "easeOutExpo",
	            scrollbars: false,
	            before:function(i,panels) {
			      var ref = panels[i].attr("data-section-name");

			      $(".sideBar .active").removeClass("active");

			      $(".sideBar").find("a[href=\"#" + ref + "\"]").addClass("active");
			    },
			    afterRender:function() {
			      var pagination = "<ul class=\"sideBar\">";
			      var activeClass = "";
			      $(".panel").each(function(i) {
			      	var name = $(this).attr("data-section-name");
			        activeClass = "";
			        if(i===0) {
			          activeClass = "active";
			        }
			        if((name != "projects2") && (name != "projects3") &&(name != "projects4") && (name != "landing")){
			        	pagination += "<li><a class=\"" + activeClass + " header-size\"  href=\"#" 
			        			   + $(this).attr("data-section-name") + "\">" + name[0].toUpperCase() +"</a></li>";
			        }
			        
			      });

			      pagination += "</ul>";

			      $(".side-bar").append(pagination);
			    }
	        });

		    $(".sideBar a").on("click",$.scrollify.move);
			$(".navBar a").on("click",$.scrollify.move);
		}
    });

    $(function(){
        $("#typed-intro").typed({
            strings: ["mar", "MarkDa", "Mark Daramdi", "Mark Darmadi."],
            typeSpeed: 25,
            startDelay: 4500, 
			backSpeed: 20
        });
    });

    var header = $('.header-wrapper').waypoint({
	    handler: function(direction) {
	      	$(this.element).css("visibility", "visible");	    
	      },
	    offset: "50%"
	})

    var aboutStart = $('.about-start').waypoint({
	    handler: function(direction) {
	      // $(this.element).css("visibility", "visible");
	      $(this.element).addClass("about-cover", setTimeout(function(){
	      	$(".about-wrapper").css("visibility", "visible");
	        $(".about-wrapper").addClass("animated fadeIn");
	        $('#about-start').empty();
          	$('#about-start').remove();
	      }, 1500));
	      $(".about-cover-intro").css("visibility", "visible");
          $(".about-cover-intro").addClass("animated flipInX");
          $(".about-arrowTop").css("visibility", "visible");
          $(".about-arrowTop").addClass("arrow1");
          $(".about-arrowBody").css("visibility", "visible");
          $(".about-arrowBody").addClass("arrow2");
          
	    },
	    offset: "30%"
	})
    var projectsWrapper = $('.projects-start').waypoint({
	    handler: function(direction) {
	      $(this.element).addClass("projects-cover", setTimeout(function(){
	      	$(".projects-wrapper").css("visibility", "visible");
	        $(".projects-wrapper").addClass("animated fadeIn");
	        $('#projects-start').empty();
          	$('#projects-start').remove();
	      }, 1500));
	      $(".projects-cover-intro").css("visibility", "visible");
          $(".projects-cover-intro").addClass("animated flipInX");
          $(".projects-arrowTop").css("visibility", "visible");
          $(".projects-arrowTop").addClass("arrow1");
          $(".projects-arrowBody").css("visibility", "visible");
          $(".projects-arrowBody").addClass("arrow2");
          
	    },
	    offset: "30%"
	})
    var projects2Wrapper = $('.projects-end').waypoint({
	    handler: function(direction) {
	      $(this.element).addClass("projects-cover", setTimeout(function(){
	      	$(".projects-wrapper2").css("visibility", "visible");
	        $(".projects-wrapper2").addClass("animated fadeIn");
	      }, 1500));
	      $(".projects-cover-intro").css("visibility", "visible");
          $(".projects-cover-intro").addClass("animated flipInX");
          $(".projects-arrowTop").css("visibility", "visible");
          $(".projects-arrowTop").addClass("arrow1");
          $(".projects-arrowBody").css("visibility", "visible");
          $(".projects-arrowBody").addClass("arrow2");
	    },
	    offset: "30%"
	})
});
