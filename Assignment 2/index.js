current_page_id = null;
results_array = null;

function paginate_menu() {
    $("#numbered_buttons_id").empty();
    last_page = Math.ceil(results_array.results.length / 3);
    for (i = 1; i <= last_page; i++) {
        x = `<button id="${i}" class="numbered_buttons_class"> ${i}</button> `;
        $("#numbered_buttons_id").append(x);
    }
}
function process_response(data) {
    results_array = data;
    for (i = 0; i < data.results.length; i++) {

        $("#results").append(data.results[i].original_title + "<br>");

        $("#results").append(data.results[i].overview + "<br>");
        x = data.results[i].poster_path
        image_html = `<img src='https://image.tmdb.org/t/p/w500/${x}'>`
        $("#results").append(image_html + "<br>");

        z = `<button id="${data.results[i].backdrop_path}" class="backdrop_button"> backdrop image!</button>`
        $("#results").append(z + "<br>");
    }
    paginate_menu();
}

function call_ajax() {

    w = $("#movie_name").val();
    $.ajax({
        "url": `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&query=${w}`,
        "type": "GET",
        "success": process_response
    })
    $("header").show();
}

function display_back_drop() {
    w = $(this).attr("id");
    console.log(`<img src="https://image.tmdb.org/t/p/original${w}" width="100"%>`);
    $("#right_div").html(`<img src="https://image.tmdb.org/t/p/original${w}" width="100%">`)


}

function header_button() {
    x = $(this).attr("id");
    $("#results").html(`<h1> Display(${x}, Page_size) </h1>`);
    current_page_id = Number(x);
    $("#prev").show();
    $("#next").show();
}
function first() {
    $("#results").html(`<h1> Display(1, Page_size) </h1>`);
    $("#prev").show();
    $("#next").show();
}

function last() {
    $("#results").html(`<h1> Display(7, Page_size) </h1>`);
    $("#prev").show();
    $("#next").show();
}
function prev() {
    if (current_page_id > 1)
        current_page_id--;
    $("#results").html(`<h1> Display(${current_page_id}, Page_size) </h1>`);
}

function next() {
    if (current_page_id < 7)
        current_page_id++;
    $("#results").html(`<h1> Display(${current_page_id}, Page_size) </h1>`);
}
function setup() {
    $("#find_movie_info").click(call_ajax)
    // $("body").click(()=>{alert()});
    $("body").on("click", ".backdrop_button", display_back_drop)

    $("body").on("click", ".numbered_buttons_class", header_button);

    $("#first").click(first);

    $("#last").click(last);

    $("#prev").click(prev);

    $("#next").click(next);

    $("#prev").hide();

    $("#next").hide();

    $("header").hide();


}

jQuery(document).ready(setup)