// var contenidoQR = document.getElementById("contenido");
var videoQR;
var estado = 0;

let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
          scanner.addListener('scan', function (content) {
            var contenido = document.getElementById("contenido").innerHTML = content;
            console.log(contenido);
            $('#videoModal').modal({
                show: true
                
            })
            estado = 2;
            if(estado === 2){
              videoQR = document.getElementById("videoQR");
              console.log("entra al if");
               videoQR.onended = function() {
                    console.log("entra al onended");
                       $('#videoModal').modal('hide');
                  };
              
            }
                     
          });
          Instascan.Camera.getCameras().then(function (cameras) {
            if (cameras.length > 0) {
              scanner.start(cameras[0]);
            } else {
              console.error('No cameras found.');
            }
          }).catch(function (e) {
            console.error(e);
          });


$('#cerrarVideo').click(function() {
    
  videoQR = document.getElementById("videoQR");
  videoQR.pause();
  console.log("Cerróx2");
  console.log(estado);
});

$('#cerrarVideo2').click(function() {
    
  videoQR = document.getElementById("videoQR");
  videoQR.pause();
  console.log("Cerró");
});



// videoQR.onended = function() {
//   console.log("entra al onended");
//       $('#videoModal').modal({
//         show: false
//       })
// };


         