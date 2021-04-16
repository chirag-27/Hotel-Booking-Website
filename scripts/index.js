var template = '<div class = "individual-image">'+
'<a href="list.html">'+
    '<img src = "https://media-cdn.tripadvisor.com/media/photo-s/15/4d/46/b8/chennai-madras.jpg" class="cityImages">'+
    '<div class="overlay"><span>Chennai</span></div>'+
'</a>'+
'</div>'+
'<div class = "individual-image">'+
    '<img src = "https://media-cdn.tripadvisor.com/media/photo-s/15/33/fc/fc/agra.jpg" class="cityImages">'+
    '<div class="overlay"><span>Agra</span></div>'+
'</div>'+
'<div class = "individual-image">'+
    '<img src = "https://media-cdn.tripadvisor.com/media/photo-s/10/a3/3b/8a/screenshot-2017-09-12.jpg" class="cityImages">'+
    '<div class="overlay"><span>Jaipur</span></div>'+
'</div>'+
'<div class = "individual-image">'+
    '<img src = "https://media-cdn.tripadvisor.com/media/photo-s/0c/d2/2f/7a/palace-from-the-outside.jpg" class="cityImages">'+
    '<div class="overlay"><span>Bengaluru</span>'+
    '</div>'+
'</div>';

document.getElementsByClassName('cityImgContainer')[1].innerHTML = template;