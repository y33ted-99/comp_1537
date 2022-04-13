received_data  = null;s
function process_res(data) {
    received_data = data
    console.log(data)
    $("#result").html(JSON.stringify(data));
}
function displayunicorns() {
    console.log("displayunicorns()" + "got called!");
    console.log($("#unicorn").val())

    $.ajax(
        {
            url: "http://127.0.0.1:5500/public/index.html/displayunicorns",
            type: "POST",
            data: {
                "unicorns": $("#unicorns").val()
            },
            success: process_res
        }
    )
}

function setup() {
    $("#allUnicorns").click(displayunicorns)
}

$(document).ready(setup)
