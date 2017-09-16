var scene = new THREE.Scene(),
            camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10)
            renderer = new THREE.WebGLRenderer( { alpha: true });  

      renderer.setSize(window.innerWidth, window.innerHeight); 
      document.body.appendChild(renderer.domElement); 
      var ico = new THREE.Mesh(
                new THREE.IcosahedronGeometry(3,1),
                new THREE.MeshPhongMaterial({wireframe: true, color: 0xBB2C2C}
            )); 

       var ico2 = new THREE.Mesh(
                new THREE.IcosahedronGeometry(1.85,0),
                new THREE.MeshPhongMaterial({color: 0x991313}
            )); 

      var light = new THREE.SpotLight(0xffffe6, 1.6, 100, Math.PI/3, 0, 2);
      light.position.set(0.5, 0.5, 10);
      scene.fog = new THREE.Fog(0x1a1a1a, 0, 7.5);
      scene.add(light);

      scene.add(ico); 
      scene.add(ico2);
      camera.position.z = 5;

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