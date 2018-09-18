function get_circle_radius(circle_colour){
  //Assumes we're trying to get the radii from the body
  //Assumes units are in vh
  var style = getComputedStyle(document.body);
  var measure = style.getPropertyValue("--"+circle_colour+"_radius");
  var measureInt = parseFloat(measure.substring(0,measure.length-2))/100;
  var unit = measure.substring(measure.length-2) // I have this in case I wish to differentiate between units
  return measureInt*document.documentElement.clientHeight/2 //divide by 2 because width is diameter
}

function place_logo(logo_id, ring_color){
  var logo = document.getElementById(logo_id);

  //Placing logo in proper x position
  var x_position = 0;
  var circle_radius = get_circle_radius(ring_color);
  var viewport_width = document.documentElement.clientWidth;
  
}
