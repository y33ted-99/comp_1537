function calc(operation) {

    first_op = jQuery('#operand_1').val();
    second_op = jQuery('#operand_2').val()
    first_op_int = parseInt(first_op);
    second_op_int = parseInt(second_op);
    button_text = "<button class='hide'> remove this</button>";

    switch (operation) {
        case "add_":
            result = first_op_int + second_op_int;
            text = first_op + " +  " + second_op + " = ";

            styled_result = "<span id='addStyle'>" + text + result + button_text + "</span>";
            break;
        case "sub_":
            result = first_op_int - second_op_int;
            text = first_op + " - " + second_op + " = ";
            styled_result = "<span id='subStyle'>" + text + result + button_text + "</span>";
            break;
        case "mul_":
            result = first_op_int * second_op_int;
            text = first_op + " * " + second_op + " = ";
            styled_result = "<span id='mulStyle'>" + text + result + button_text + "</span>";
            break;
        case "div_":
            result = first_op_int / second_op_int;
            text = first_op + " / " + second_op + " = ";
            styled_result = "<span id='divStyle'>" + text + result + button_text + "</span>";
            break;
        default:
            console.log("Something bad happened!");
    }

    result = text + result;
    jQuery('#result').html(result);
    old_div_content = jQuery('#history').html();
    new_div_content = old_div_content + styled_result + '<br>';
    jQuery('#history').html(new_div_content);
}

function hidethis() {
    $(this).parent().remove();
}

setup = function () {
    jQuery('.button_').click(function () {
        calc(this.id);
    });
    $('body').on("click", '.hide', hidethis)
}

jQuery(document).ready(setup);