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
                new THREE.IcosahedronGeometry(3,1),
                new THREE.MeshPhongMaterial({wireframe: true, color: 0xD65151}
            )); 
    //second isocahedron, smaller solid one
       var ico2Color = new THREE.Color('hsl(0, 62%, 45%)');
       var ico2Mesh = new THREE.MeshPhongMaterial({color: ico2Color});
       var ico2 = new THREE.Mesh(
                new THREE.IcosahedronGeometry(2,0), 
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
        ico.rotation.x += 0.0006; 
        ico.rotation.y += 0.0009;
        ico.rotation.z += 0.0006;
        ico2.rotation.x -= 0.003; 
        ico2.rotation.y -= 0.002;
        ico2.rotation.z -= 0.003;
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

//START SIDEBAR
var sidebarButton = document.getElementById("sidebar-button");
function openNav() {
    if(sidebarButton.classList.contains('open')) {
      document.getElementById("openSideBar").style.height = "100%";
      sidebarButton.src = './icons/close.png';
      sidebarButton.classList.remove('open');
    } else {
      document.getElementById("openSideBar").style.height = "0";
      sidebarButton.src = './icons/menu.png';
      sidebarButton.classList.add('open');
    }
}

//END SIDEBAR