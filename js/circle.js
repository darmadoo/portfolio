window.onload = function onLoad() {
  var html = new ProgressBar.Circle('#html-circle', {
    color: '#aaa',
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

      var value = Math.round(circle.value() * 10);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });

  var css = new ProgressBar.Circle('#css-circle', {
    color: '#aaa',
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

      var value = Math.round(circle.value() * 10);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });

  var js = new ProgressBar.Circle('#js-circle', {
    color: '#aaa',
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

      var value = Math.round(circle.value() * 10);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });

  var j = new ProgressBar.Circle('#java-circle', {
    color: '#aaa',
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
    to: { color: '#FFDE7D', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 10);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });

  var python = new ProgressBar.Circle('#python-circle', {
    color: '#aaa',
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
    to: { color: '#FFDE7D', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 10);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });

  var c = new ProgressBar.Circle('#c-circle', {
    color: '#aaa',
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
    to: { color: '#FFDE7D', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 10);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });

  var git = new ProgressBar.Circle('#git-circle', {
    color: '#aaa',
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
    to: { color: '#30E3CA', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 10);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });

  var github = new ProgressBar.Circle('#github-circle', {
    color: '#aaa',
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
    to: { color: '#30E3CA', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 10);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });

  var eclipse = new ProgressBar.Circle('#eclipse-circle', {
    color: '#aaa',
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
    to: { color: '#30E3CA', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 10);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });

  var xd = new ProgressBar.Circle('#xd-circle', {
    color: '#aaa',
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
    to: { color: '#FF2E63', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 10);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });

  var ps = new ProgressBar.Circle('#ps-circle', {
    color: '#aaa',
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
    to: { color: '#FF2E63', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 10);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });

  var ai = new ProgressBar.Circle('#ai-circle', {
    color: '#aaa',
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
    to: { color: '#FF2E63', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 10);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });


  html.text.style.fontFamily = "'Raleway', sans-serif";
  html.text.style.fontSize = '1.5em';
  // html.animate(0.75);

  css.text.style.fontFamily = "'Raleway', sans-serif";
  css.text.style.fontSize = '1.5em';
  css.animate(0.8);

  js.text.style.fontFamily = "'Raleway', sans-serif";
  js.text.style.fontSize = '1.5em';
  js.animate(0.7);

  j.text.style.fontFamily = "'Raleway', sans-serif";
  j.text.style.fontSize = '1.5em';
  j.animate(0.9);

  python.text.style.fontFamily = "'Raleway', sans-serif";
  python.text.style.fontSize = '1.5em';
  python.animate(0.75);

  c.text.style.fontFamily = "'Raleway', sans-serif";
  c.text.style.fontSize = '1.5em';
  c.animate(0.8);

  git.text.style.fontFamily = "'Raleway', sans-serif";
  git.text.style.fontSize = '1.5em';
  git.animate(0.9);

  github.text.style.fontFamily = "'Raleway', sans-serif";
  github.text.style.fontSize = '1.5em';
  github.animate(0.9);

  eclipse.text.style.fontFamily = "'Raleway', sans-serif";
  eclipse.text.style.fontSize = '1.5em';
  eclipse.animate(0.7);

  xd.text.style.fontFamily = "'Raleway', sans-serif";
  xd.text.style.fontSize = '1.5em';
  xd.animate(0.65);

  ps.text.style.fontFamily = "'Raleway', sans-serif";
  ps.text.style.fontSize = '1.5em';
  ps.animate(0.65);

  ai.text.style.fontFamily = "'Raleway', sans-serif";
  ai.text.style.fontSize = '1.5em';
  ai.animate(0.65);

  var waypoint = new Waypoint({
    element: document.getElementById('html-circle'),
    handler: function(direction) {
      html.animate(0.75);
    },
    offset: '75%'
  })

};