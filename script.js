var scene = new THREE.Scene(),
            camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
            renderer = new THREE.WebGLRenderer( { alpha: true });  

      renderer.setSize(window.innerWidth, window.innerHeight); 
      document.body.appendChild(renderer.domElement); 
      var ico = new THREE.Mesh(
                new THREE.IcosahedronGeometry(3,1),
                new THREE.MeshBasicMaterial({wireframe: true, color: 0xff8080}
            )); 

      scene.add(ico); 
      camera.position.z = 5;

      var render = function () { 
        requestAnimationFrame(render); 
        ico.rotation.x += 0.002; 
        ico.rotation.y += 0.003; 
        renderer.render(scene, camera); 
      }; 
      render();