window.onload = function onLoad() {
  var html = new ProgressBar.Circle('#html-circle', {
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
      // var value = Math.round(circle.value() * 10);
      // if (value === 0) {
      //   circle.setText('');
      // } else {
      //   circle.setText(value);
      // }

    }
  });

  var css = new ProgressBar.Circle('#css-circle', {
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
      // var value = Math.round(circle.value() * 10);
      // if (value === 0) {
      //   circle.setText('');
      // } else {
      //   circle.setText(value);
      // }

    }
  });

  var js = new ProgressBar.Circle('#js-circle', {
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
      // var value = Math.round(circle.value() * 10);
      // if (value === 0) {
      //   circle.setText('');
      // } else {
      //   circle.setText(value);
      // }

    }
  });

  var j = new ProgressBar.Circle('#java-circle', {
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
      // var value = Math.round(circle.value() * 10);
      // if (value === 0) {
      //   circle.setText('');
      // } else {
      //   circle.setText(value);
      // }

    }
  });

  var python = new ProgressBar.Circle('#python-circle', {
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
      // var value = Math.round(circle.value() * 10);
      // if (value === 0) {
      //   circle.setText('');
      // } else {
      //   circle.setText(value);
      // }
    }
  });

  var c = new ProgressBar.Circle('#c-circle', {
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
      // var value = Math.round(circle.value() * 10);
      // if (value === 0) {
      //   circle.setText('');
      // } else {
      //   circle.setText(value);
      // }
    }
  });

  var heroku = new ProgressBar.Circle('#heroku-circle', {
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
      // var value = Math.round(circle.value() * 10);
      // if (value === 0) {
      //   circle.setText('');
      // } else {
      //   circle.setText(value);
      // }

    }
  });

  var github = new ProgressBar.Circle('#github-circle', {
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
      // var value = Math.round(circle.value() * 10);
      // if (value === 0) {
      //   circle.setText('');
      // } else {
      //   circle.setText(value);
      // }
    }
  });

  var eclipse = new ProgressBar.Circle('#eclipse-circle', {
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
      // var value = Math.round(circle.value() * 10);
      // if (value === 0) {
      //   circle.setText('');
      // } else {
      //   circle.setText(value);
      // }

    }
  });

  var xd = new ProgressBar.Circle('#xd-circle', {
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
      // var value = Math.round(circle.value() * 10);
      // if (value === 0) {
      //   circle.setText('');
      // } else {
      //   circle.setText(value);
      // }

    }
  });

  var ps = new ProgressBar.Circle('#ps-circle', {
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
      // var value = Math.round(circle.value() * 10);
      // if (value === 0) {
      //   circle.setText('');
      // } else {
      //   circle.setText(value);
      // }
    }
  });

  var ai = new ProgressBar.Circle('#ai-circle', {
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
      // var value = Math.round(circle.value() * 10);
      // if (value === 0) {
      //   circle.setText('');
      // } else {
      //   circle.setText(value);
      // }

    }
  });

  var skillsWrapper = $('.skills-start').waypoint({
      handler: function(direction) {
        $(this.element).addClass("skills-cover", setTimeout(function(){
          $(".skills-wrapper").css("visibility", "visible");
          $(".skills-wrapper").addClass("animated fadeInDown", setTimeout(function(){
            html.animate(0.75);
            css.animate(0.8);
            js.animate(0.7);
            j.animate(0.9);
            c.animate(0.8);
            python.animate(0.75);
            eclipse.animate(0.7);
            github.animate(0.9);
            heroku.animate(0.9);
            xd.animate(0.65);
            ps.animate(0.65);
            ai.animate(0.65);
          }, 500));
        }, 1500));
        $(".skills-cover-intro").css("visibility", "visible");
          $(".skills-cover-intro").addClass("animated flipInX");
          $(".skills-arrowTop").css("visibility", "visible");
          $(".skills-arrowTop").addClass("arrow1");
          $(".skills-arrowBody").css("visibility", "visible");
          $(".skills-arrowBody").addClass("arrow2");
      },
      offset: "100%"
    })

  
};

