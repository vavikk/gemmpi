 
var io = require('socket.io').listen(80);
io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('myEvent', function (data) {
    alert(data);
  });
});


    /*var squares = $('.squares');
    var rightB = $('#right');
    var leftB = $('#left');
    var downB = $('#down');
    var startB = $('#start');
    var upB = $('#up');
    var ar = [];
    var totalItems = 12
    var itemsInRow = 4;
    
    
    
    var set_ItemsInRow = function() {
        var squares_width = $( window ).width();
        
        if( squares_width < 1070 && squares_width > 800 ) {
            itemsInRow = 3;    
        } 
        else if ( squares_width < 800 && squares_width > 541 ) {
            itemsInRow = 2;
        }
        else if ( squares_width < 541 ) {
            itemsInRow = 1;
        }
    
    }
    
    set_ItemsInRow();
     
    // indexing the square
    $( ".sq" ).each(function( index ) {
      ar[index] =  $( this );
    });
    
    
    
    startB.on('click',function(){
        var active =$('.sel');
        //squares.addClass('view-full');
        
           
        active
          
            .addClass("sel-out")
            .find(".loader")
                .velocity({ height:250 }, { delay:30, duration:1500,easing:[ 0,0,.25,1], complete: 
                    function() { 
                                                
                        var position = active.position();
                        $('body').append('<div id="fake_square" style=" top: '+position.top +'px; left: '+position.left+'px;"><img src="../img/Preloader_5.gif" alt="" class="ajax-loader"></div>');
                        active.css("display","none");                         
                        squares.velocity(
                            { 
                                translateZ:"-1250" 
                            }, 
                                
                            { 
                                duration: 500,
                                easing:[ 0,0,.25,1]
                            }
                        ); 
                        $('#fake_square')
                            .velocity(
                                { 
                                    rotateX: "180deg",
                                    height:"100%",
                                    width: "100%", 
                                    top:0, 
                                    left:0, 
                                    margin:0 
                                }, 
                                { 
                                    delay:0, 
                                    duration: 500,
                                    easing:[ 0,0,.25,1],
                                    complete: 
                                        function() { 
                                            $('#fake_square').velocity(
                                                { 
                                                    backgroundColor: "#000"
                                                }, 

                                                { 
                                                    delay: 5000,
                                                    duration: 2600,
                                                    easing:[ 0,0,.25,1]
                                                }
                                            ); 
                                         
                                            $('.ajax-loader').velocity(
                                                { 
                                                    opacity: 1,
                                                     
                                                }, 

                                                { 
                                                    delay: 350,
                                                    duration: 500,
                                                    easing:[ .8,0,.25,1]
                                                }
                                            ); 
                                            
                                            $('.white-background-box').velocity(
                                                { 
                                                    height: "100%" 
                                                }, 

                                                { 
                                                    delay:5000,
                                                    duration: 500,
                                                    easing:[ .8,0,.25,1]
                                                }
                                            ); 
                                        
                                        } 
                                }
                             );       
                  
                   
                    } }) 
                
                //.velocity({ rotateY:"180deg" }, {   duration:1500, easing:[ 0,0,.25,1] }); 
                   
       
                
    })
    
    downB.on('click',function(){
        var active =$('.sel');
        var activeIndex = active.index();
        if(activeIndex < totalItems - itemsInRow ){ 
            var nextIndex = activeIndex + itemsInRow;
            var next = $( "li:eq("+nextIndex+")" ) ;
            $('.sel').removeClass('sel');
            next.addClass('sel')    
        }  
    })
    upB.on('click',function(){
        var active =$('.sel');
        var activeIndex = active.index();
        if(activeIndex >= itemsInRow ){ 
            var nextIndex = activeIndex - itemsInRow;
            var next = $( "li:eq("+nextIndex+")" ) ;
            $('.sel').removeClass('sel');
            next.addClass('sel')    
        }  
    })
    
    rightB.on('click',function(){
        var active =$('.sel');
         
        if(!active.is("li:last-child")){  
            var next = active.next();
            $('.sel').removeClass('sel');
            next.addClass('sel')    
        }  
        
    })
    leftB.on('click',function(){
        var active =$('.sel');
        if(!active.is("li:first-child")){  
            var next = active.prev();
            $('.sel').removeClass('sel');
            next.addClass('sel')    
        }  
        
       
    })
    
    */
    