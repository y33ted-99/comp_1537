add = function() { 
  console.log("add function was called")
  result = parseInt(jQuery('#operand_1').val()) + parseInt(jQuery('#operand_2').val());

  text = jQuery('#operand_1').val() + " +   " + jQuery('#operand_2').val() + " = "
  result = text + result;
  jQuery('#result').text(result);


  styled_result = "<span id='addStyle'>" + result + "</span>"; 
  
  old_div_content = jQuery('#history').html();
  new_div_content = old_div_content + styled_result + '<br>';
  jQuery('#history').html(new_div_content); 
 
}




sub = function() {
  result = parseInt(jQuery('#operand_1').val()) - parseInt(jQuery('#operand_2').val());

  text = jQuery('#operand_1').val() + " - " + jQuery('#operand_2').val() + " = "
  result = text + result;
  jQuery('#result').html(result);


  result = "<span id='subStyle'>" + result + "</span>";
  old_div_content = jQuery('#history').html();
  new_div_content = old_div_content + result + '<br>';
  jQuery('#history').html(new_div_content);
}


mul = function() {
  result = parseInt(jQuery('#operand_1').val()) * parseInt(jQuery('#operand_2').val());

  text = jQuery('#operand_1').val() + " * " + jQuery('#operand_2').val() + " = "
  result = text + result;
  jQuery('#result').html(result);



  result = "<span id='mulStyle'>" + result + "</span>";
  old_div_content = jQuery('#history').html();
  new_div_content = old_div_content + result + '<br>';
  jQuery('#history').html(new_div_content);
}

div = function() {
  result = parseInt(jQuery('#operand_1').val()) / parseInt(jQuery('#operand_2').val());

  text = jQuery('#operand_1').val() + " / " + jQuery('#operand_2').val() + " = "
  result = text + result;
  jQuery('#result').html(result);


  result = "<span id='divStyle'>" + result + "</span>";
  old_div_content = jQuery('#history').html();
  new_div_content = old_div_content + result + '<br>';
  jQuery('#history').html(new_div_content);
}

show = function() {
  jQuery('#history').show()
}

hide = function() {
  jQuery('#history').hide() 
 
}

setup = function() {
  console.log("setup function was called")
  jQuery('#add_button').click(add);
  jQuery('#sub_button').click(sub);
  jQuery('#mul_button').click(mul);
  jQuery('#div_button').click(div);
  jQuery('#show_button').click(show);
  jQuery('#hide_button').click(hide);
}

jQuery(document).ready(setup);