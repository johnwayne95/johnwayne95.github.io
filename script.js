//START OF THREE.JS
var audiobutton = document.getElementById('audiobutton');
var audio = document.getElementById('audio');

//creating scene and renderer, don't mess with this too much
var scene = new THREE.Scene(),
            camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10)
            renderer = new THREE.WebGLRenderer( { alpha: true }, {antialias: true});  

      renderer.setSize(window.innerWidth, window.innerHeight); 
      document.body.appendChild(renderer.domElement); 
    //first icosahedron, the large wire one
      var ico = new THREE.Mesh(
                new THREE.IcosahedronGeometry(3.3,1),
                new THREE.MeshPhongMaterial({wireframe: true, color: 0xD65151}
            )); 
    //second isocahedron, smaller solid one
       var ico2Color = new THREE.Color('hsl(0, 62%, 45%)');
       var ico2Mesh = new THREE.MeshPhongMaterial({color: ico2Color});
       var ico2 = new THREE.Mesh(
                new THREE.IcosahedronGeometry(2.3,0), 
                ico2Mesh); 
    //make things look dynamic (lights and fog)
      var light = new THREE.SpotLight(0xffffe6, 1.6, 100, Math.PI/3, 0, 2);
      light.position.set(0.5, 0.5, 10);
      scene.fog = new THREE.Fog(0x1a1a1a, 0, 8.5);
      scene.add(light);

      //add elements to scene
      scene.add(ico); 
      scene.add(ico2);
      camera.position.z = 5;

      //render the scene and do stuff during it
      var render = function () { 
        requestAnimationFrame(render); 
        ico.rotation.x += 0.0004; 
        ico.rotation.y += 0.0007;
        ico.rotation.z += 0.0004;
        ico2.rotation.x -= 0.002; 
        ico2.rotation.y -= 0.001;
        ico2.rotation.z -= 0.002;
        renderer.render(scene, camera);
      }; 
      render();

//for when the window is resized (also better on mobile)
window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}


//END OF THREE.JS

//AUDIO BUTTON
      function audioButton() {
            if(audiobutton.classList.contains('play')) {
                    audiobutton.src = './icons/pause.png';
                    audiobutton.classList.add('pause');
                    audiobutton.classList.remove('play');
                    audio.play();

               } else {
                    audiobutton.src = './icons/play.png';
                     audiobutton.classList.add('play');
                      audiobutton.classList.remove('pause');
                    audio.pause();
                 }
            }


//END OF AUDIO

//SCROLL SMOOTHNESS 
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 650, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });


//CHANGE NAVBAR COLOR WHEN SCROLL
var about = $('.about-me').offset().top;
var portfolio = $('.portfolio').offset().top;
var contact = $('.contact').offset().top;
var navbar = $('.nav.navbar-nav.navbar-right li a');

$(document).scroll(function() {
  if ($(window).scrollTop() >= about && $(window).scrollTop() < portfolio) {
  	navbar.css('color', '#1a1a1a');
    about.css('position','fixed');
  } else if ($(window).scrollTop() >= portfolio && $(window).scrollTop() < contact) {
    navbar.css('color', '#d9d9d9');
  } else if($(window).scrollTop() >= contact) {
    navbar.css('color', '#1a1a1a');
  } else {
    navbar.css('color', '#d9d9d9');
  }
});