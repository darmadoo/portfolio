window.onload = function onLoad() {
  var frontEnd = [];
  var backEnd = [];
  var design = [];
  var tools = [];

  for(var i = 0; i < 3; i++){
    frontEnd[i] = new ProgressBar.Circle('#frontEnd' + (i+1), {
      color: '#630A10',
      trailColor: '#911F27',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeOutBounce',
      duration: 1400,
      text: {
        autoStyleContainer: true
      },
      from: { color: '#aaa', width: 1 },
      to: { color: '#000000', width: 4 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        circle.setText('');
      }
    });

    backEnd[i] = new ProgressBar.Circle('#backEnd' + (i+1), {
      color: '#630A10',
      trailColor: '#911F27',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeOutBounce',
      duration: 1400,
      text: {
        autoStyleContainer: true
      },
      from: { color: '#aaa', width: 1 },
      to: { color: '#3A7563', width: 4 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        circle.setText('');
      }
    });

    tools[i] = new ProgressBar.Circle('#tools' + (i+1), {
      color: '#630A10',
      trailColor: '#911F27',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeOutBounce',
      duration: 1400,
      text: {
        autoStyleContainer: true
      },
      from: { color: '#aaa', width: 1 },
      to: { color: '#F95959', width: 4 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        circle.setText('');
      }
    });

    design[i] = new ProgressBar.Circle('#design' + (i+1), {
      color: '#630A10',
      trailColor: '#911F27',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeOutBounce',
      duration: 1400,
      text: {
        autoStyleContainer: true
      },
      from: { color: '#aaa', width: 1 },
      to: { color: '#5432D3', width: 4 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        circle.setText('');
      }
    });
  }

  function animateCircle(){
    frontEnd[0].animate(0.75);
    frontEnd[1].animate(0.8);
    frontEnd[2].animate(0.7);
    backEnd[0].animate(0.9);
    backEnd[1].animate(0.8);
    backEnd[2].animate(0.75);
    tools[0].animate(0.7);
    tools[1].animate(0.9);
    tools[2].animate(0.9);
    design[0].animate(0.65);
    design[1].animate(0.65);
    design[2].animate(0.65);
  }

  var skillsWrapper = $('.skills-start').waypoint({
      handler: function(direction) {
        if($(window).width() > 1024){
          $(this.element).addClass("skills-cover", setTimeout(function(){
              $(".skills-wrapper").css("visibility", "visible");
              $(".skills-wrapper").addClass("animated fadeInDown", setTimeout(function(){
              animateCircle();  
            }, 500));
          }, 1500));
          $(".skills-cover-intro").css("visibility", "visible");
          $(".skills-cover-intro").addClass("animated flipInX");
          $(".skills-arrowTop").css("visibility", "visible");
          $(".skills-arrowTop").addClass("arrow1");
          $(".skills-arrowBody").css("visibility", "visible");
          $(".skills-arrowBody").addClass("arrow2");
        }
        else{
          $(".skills-wrapper").css("visibility", "visible");
              animateCircle();  
            //   $(".skills-wrapper").addClass("animated fadeIn", setTimeout(function(){
              
            // }, 500));
        }
      },
      offset: "30%"
    })
  
};

