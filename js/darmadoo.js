$(document).ready(function(){
	$(function(){
        $("#typed-intro").typed({
        	contentType: 'text', 
            strings: ["mar", "MarkDa", "Mark Daramdi", "Mark Darmadi."],
            typeSpeed: 25,
            startDelay: 4500, 
			backSpeed: 20
        });
    });

	$(function() {
		if($(window).width() > 1024){
	        $.scrollify({
	            section : ".panel",
	            interstitialSection : ".footer",
	            easing: "easeOutExpo",
	            setHeights: false,
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

			$(".sideBar a").click(function(e){
				e.preventDefault();
				var target = $(this).attr("href");
				$.scrollify.move(target);
			});

			$(".navBar a").click(function(e){
				var target = $(this).attr("href");
				if($(window).width() > 1024){
					e.preventDefault();
					var target = $(this).attr("href");
					$.scrollify.move(target);
				}
				else{
					console.log("ASD");
					$('html, body').animate({
				        scrollTop: $(target).offset().top
				    }, 1000, 'easeInOutQuint');
				}
			});
				
		}
    });

	$(".sideBar a").click(function(e){
		e.preventDefault();
		var target = $(this).attr("href");
		$.scrollify.move(target);
	});

	$(".navBar a").click(function(e){
		e.preventDefault();
		var target = $(this).attr("href");
		$.scrollify.move(target);
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
	      if($(window).width() > 1024){
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
          }
          else{
          	$(".about-wrapper").css("visibility", "visible");
	        $(".about-wrapper").addClass("animated fadeIn");
	        $('#about-start').empty();
          	$('#about-start').remove();
          }
	    },
	    offset: "30%"
	})
    var projectsWrapper = $('.projects-start').waypoint({
	    handler: function(direction) {
    		if($(window).width() > 1024){
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
	      }
	      else{
	      	$(".projects-wrapper").css("visibility", "visible");
	        $(".projects-wrapper").addClass("animated fadeIn");
	        $('#projects-start').empty();
          	$('#projects-start').remove();
	      }
          
	    },
	    offset: "30%"
	})
    var projects2Wrapper = $('.projects-end').waypoint({
	    handler: function(direction) {
	    if($(window).width() > 1024){	
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
	      }
	      else{
	      	$(".projects-wrapper2").css("visibility", "visible");
	        $(".projects-wrapper2").addClass("animated fadeIn");
	      }
	    },
	    offset: "30%"
	})
});

var gradient = ["#911F27", "#912128", "#92232A", "#93252C", "#94272E", "#952930", "#962B32", "#972D34", "#982F36", "#993138", "#9A333A", "#9B353C", "#9C373E", "#9C3940", "#9D3B42", "#9E3D44", "#9F3F46", "#A04147", "#A14349", "#A2454B", "#A3484D", "#A44A4F", "#A54C51", "#A64E53", "#A75055", "#A75257", "#A85459", "#A9565B", "#AA585D", "#AB5A5F", "#AC5C61", "#AD5E63", "#AE6065", "#AF6267", "#B06468", "#B1666A", "#B2686C", "#B36A6E", "#B36C70", "#B46E72", "#B57174", "#B67376", "#B77578", "#B8777A", "#B9797C", "#BA7B7E", "#BB7D80", "#BC7F82", "#BD8184", "#BE8386", "#BE8587", "#BF8789", "#C0898B", "#C18B8D", "#C28D8F", "#C38F91", "#C49193", "#C59395", "#C69597", "#C79799", "#C89A9B", "#C99C9D", "#C99E9F", "#CAA0A1", "#CBA2A3", "#CCA4A5", "#CDA6A7", "#CEA8A8", "#CFAAAA", "#D0ACAC", "#D1AEAE", "#D2B0B0", "#D3B2B2", "#D4B4B4", "#D5B6B6", "#D5B8B8", "#D6BABA", "#D7BCBC", "#D8BEBE", "#D9C0C0", "#DAC3C2", "#DBC5C4", "#DCC7C6", "#DDC9C7", "#DECBC9", "#DFCDCB", "#E0CFCD", "#E0D1CF", "#E1D3D1", "#E2D5D3", "#E3D7D5", "#E4D9D7", "#E5DBD9", "#E6DDDB", "#E7DFDD", "#E8E1DF", "#E9E3E1", "#EAE5E3", "#EBE7E5", "#ECEAE7"],
el = document.getElementsByTagName('body')[0],
height = Math.round(el.offsetHeight / 1200);

function scroll(){
	var i = Math.floor(el.scrollTop / height);  
    if($(window).width() <= 1024){
		$(".panel").css("background-color", gradient[i]);
	}
}