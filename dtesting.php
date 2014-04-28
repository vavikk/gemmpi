<?php /* Template Name: Distance-testing */ include( 'header.php'); ?>
 
<div class="mb-wrapper"  >

    <div class="container">

        <div class="container-header">
            <h1>Distance Testing</h1>
        </div>





        <div class="col-lg-12  ">

            <p>When you’re making an ad, you want to know if people are going to be able to see it. Is your text big enough? Are those colours going to work?
                <br>
                <br>Our distance testing tool aims to present you with a realistic view of what your ad will look like in the field at a variety of distances, so that you can optimize your creative!</p>
            <br>
            <br>
               <h3>Step 1: Upload your creative</h3>
               <br>
            <div class="row">
             
                <div class="col-lg-6">
                    <div class="fileUpload btn up-button">
                        <span>Upload</span>
                        <input type="file" class="upload" id="imageLoader" />
                    </div>
                    <span>(Must be png or jpg format, and smaller than 5 MB)</span>
                </div>
                
            </div>
                <br>
                <h3>Step 2: Test Readability at Various Distances!</h3>




        </div>




        <div class="col-lg-12">
            
<br>
 
        <div class="canvas-holder">
            <canvas id="canvas" width="1170" height="575"></canvas>
            
        </div>
            


        </div>






    </div>
    <!--container-->

</div>
<!--mb-wrapper-->

<?php include( 'footer.php'); ?>
    <script src="https://code.jquery.com/jquery.js"></script>
     <script src="http://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.4.0/fabric.min.js"></script>
 
<script>
    (function($) {
      var imageLoader = document.getElementById('imageLoader');
          imageLoader.addEventListener('change', handleImage, false);
     var canvas = new fabric.Canvas('canvas',{backgroundColor: 'rgb(240,240,240)'});
     
	fabric.Image.fromURL('dtesting/poster.jpg', function(oImg) {
  canvas.add(oImg);
  oImg.selectable = false;
	}); 
	 
    function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
    var img = new Image();
    img.onload = function(){
    var imgInstance = new fabric.Image(img)
    canvas.add(imgInstance);
    }
    img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
    }
 
 
 
 
    })(jQuery);
</script>
