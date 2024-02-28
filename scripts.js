var img = document.getElementById("cat");
var isDog = false;
function loadcat(){
  img.src = "loading.png"
  if(isDog){
    $.ajax({
      url: "https://api.thedogapi.com/v1/images/search",
      dataType: "json",
      success: function(data){
        var cat = data[0].url;
        console.log(data.url)
        console.log(cat)
        img.src = cat;
        console.log(data)
      },
      error: function(){
        img.src = "error.png"
        console.error("error loading goober :(")
        console.log(data);
      }
      
    })
  }else{
    $.ajax({
      url: "https://api.thecatapi.com/v1/images/search",
      dataType: "json",
      success: function(data){
        var cat = data[0].url;
        console.log(data.url)
        console.log(cat)
        img.src = cat;
        console.log(data)
      },
      error: function(){
        img.src = "error.png"
        console.error("error loading goober :(")
        console.log(data);
      }
      
    })
  }
  
}
function dogcat(){
  isDog = !isDog;
  if(isDog){
    document.getElementById("dogcat").innerHTML = "switch to cat"
  }else{
    document.getElementById("dogcat").innerHTML = "switch to dog"
  }
}