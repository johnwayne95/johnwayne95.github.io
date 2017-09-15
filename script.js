var scene;

var camera;

initializeScene();

renderScene();

function initializeScene() {
    if(Detector.webgl) {
        renderer = new THREE.WebGLRenderer({antialias:true});
    } else {
        renderer = new THREE.CanvasRenderer();
    }

    renderer.setClearColor(0x000000, 1);

    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;

    renderer.setsize(canvasWidth, canvasHeight);

    document.getElementById("WebGLCanvas").appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight, 1, 100);
    camera.position.set(0, 0, 10);
    camera.lookAt(scene.position); 
    scene.add(camera);

    var triangleGeometry = new THREE.Geometry(); 
    triangleGeometry.vertices.push(new THREE.Vector3( 0.0,  1.0, 0.0)); 
    triangleGeometry.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0)); 
    triangleGeometry.vertices.push(new THREE.Vector3( 1.0, -1.0, 0.0)); 
    triangleGeometry.faces.push(new THREE.Face3(0, 1, 2));

    var triangleMaterial = new THREE.MeshBasicMaterial({ 
        color:0xFFFFFF, 
        side:THREE.DoubleSide 
    });

    var triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial); 
    triangleMesh.position.set(-1.5, 0.0, 4.0);
    scene.add(triangleMesh);

    var squareGeometry = new THREE.Geometry(); 
    squareGeometry.vertices.push(new THREE.Vector3(-1.0,  1.0, 0.0)); 
    squareGeometry.vertices.push(new THREE.Vector3( 1.0,  1.0, 0.0)); 
    squareGeometry.vertices.push(new THREE.Vector3( 1.0, -1.0, 0.0)); 
    squareGeometry.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0)); 
    squareGeometry.faces.push(new THREE.Face3(0, 1, 2)); 
    squareGeometry.faces.push(new THREE.Face3(0, 2, 3)); 

    var squareMaterial = new THREE.MeshBasicMaterial({ 
        color:0xFFFFFF, 
        side:THREE.DoubleSide 
    });

    var squareMesh = new THREE.Mesh(squareGeometry, squareMaterial); 
        squareMesh.position.set(1.5, 0.0, 4.0); 
        scene.add(squareMesh); 
}

function renderScene() {
    renderer.render(scene, camera);
}