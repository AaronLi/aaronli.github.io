function get_circle_radius(circle_colour){
  //Assumes we're trying to get the radii from the body
  //Assumes units are in vh
  var docStyle = getComputedStyle(document.body);
  var measure = docStyle.getPropertyValue("--"+circle_colour+"_radius");
  var measureInt = parseFloat(measure.substring(0,measure.length-2))/100;
  var unit = measure.substring(measure.length-2) // I have this in case I wish to differentiate between units
  return measureInt*document.documentElement.clientHeight/2 //divide by 2 because width is diameter
}

function place_logo(logo_id, parent_ring, inner_ring){
  var logo = document.getElementById(logo_id);
  //Placing logo in proper x position
  var x_position, y_position;
  var circle_radius = get_circle_radius(parent_ring);
  var inner_circle_radiuse = get_circle_radius(inner_ring);
  var viewport_width = document.documentElement.clientWidth;
  var circle_offscreenpixels_left = circle_radius - (viewport_width/2);
  x_position = Math.max(circle_offscreenpixels_left, 0) + ((circle_radius-inner_circle_radiuse)/2)+(logo.width/2);
  logo.style.left = (x_position).toString()+"px";

  //Placing logo in proper y position
  var angle = Math.acos((circle_radius-x_position)/circle_radius); // cos is x/r where x is distance from the center of the circle
  y_position = circle_radius*Math.sin(angle);
  logo.style.top = (circle_radius-y_position).toString()+"px";
}

function place_logos(){
    place_logo("projects_page", "red", "orange");
    place_logo("insta_logo", "orange", "yellow");
    place_logo("github_logo", "yellow", "white");

}

window.onload = function(){
  place_logos();
};
window.onresize = function(){place_logos()};

