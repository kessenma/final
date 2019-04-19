var APIKey = '9ebae1e3cbf392d194c4864000530b0f497cedfcc2de08d006117d43919e6deb';

$.getJSON('https://api.unsplash.com/search/photos?query=cookies&per_page=50&client_id=9ebae1e3cbf392d194c4864000530b0f497cedfcc2de08d006117d43919e6deb', function(data) {
  console.log(data);
  
  
  var imageList = data.results;
  
  $.each(imageList, function(i, val) {
    
    var image = val;
    var imageURL = val.urls.regular;
    var imageWidth = val.width;
    var imageHeight = val.height;
    
    if (imageWidth > imageHeight) {
      $('.grid').append('<div class="image"><img src="'+ imageURL +'"></div>');
    }   
    
  });  
});