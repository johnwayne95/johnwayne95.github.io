var scene = new THREE.Scene(),
            camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
            renderer = new THREE.WebGLRenderer();  

      renderer.setSize(window.innerWidth, window.innerHeight); 
      document.body.appendChild(renderer.domElement); 
      var cube = new THREE.Mesh(
                new THREE.CubeGeometry(2,2,2),
                new THREE.MeshBasicMaterial({wireframe: true, color: 0xFFFFFF}
            )); 

      scene.add(cube); 
      camera.position.z = 5;

      var render = function () { 
        requestAnimationFrame(render); 
        cube.rotation.x += 0.01; 
        cube.rotation.y += 0.01; 
        renderer.render(scene, camera); 
      }; 
      render();