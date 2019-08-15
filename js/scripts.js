$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var name = $("input#your-name").val();
    var color = $("input:radio[name=fav-color]:checked").val();
    var personality = $("#personality").val();
    var food = $("input:radio[name=favorite-food]:checked").val();
    if (!name || !color || !personality || !food){
      alert("Please fill in all fields before submiting, fool");
    }
    else {
      $("#name-result").text(name);
      if (food.toLowerCase() === "soup-hater"){
        $("#option5").show();
      }
      else if (color.toLowerCase() === "green" || personality === "Kindness" || food === "ramen"){
        $("#option1").show();
      }
      else if (color.toLowerCase() === "yellow" || food.toLowerCase() === "pho" || personality === "Humbleness"){
        $("#option2").show();
      }
      else if (personality.toLowerCase() === "humor" || color === "rainbow" || personality === "Shy"){
        $("#option3").show();
      }
      else {
        $("#option4").show();
      }
      $("#quiz-result").show();
      $("#quiz").hide();
    }
  });
});
