received_data  = null;s
function process_res(data) {
    received_data = data
    console.log(data)
    $("#result").html(JSON.stringify(data));
}
function findUnicornByName() {
    console.log("findUnicornByName()" + "got called!");
    console.log($("#unicornName").val())

    $.ajax(
        {
            url: "https://comp1537brianmak.netlify.app/assignment%203/findUnicornByName",
            type: "POST",
            data: {
                "unicornName": $("#unicornName").val()
            },
            success: process_res
        }
    )
}

function findUnicornByFood() {
    carrotIsChecked = "unchecked"
    appleIsChecked = "unchecked"
    if ($("#carrot").is(":checked"))
        carrotIsChecked = "checked"

    if ($("#apple").is(":checked"))
        appleIsChecked = "checked"
    
    $.ajax(
        {
            url: "https://comp1537brianmak.netlify.app/assignment%203/findUnicornByFood",
            type: "POST",
            data: {
                "appleIsChecked": appleIsChecked,
                "carrotIsChecked": carrotIsChecked
            },
            success: process_res
        }
    )
}

function setup() {
    $("#findUnicornByName").click(findUnicornByName)
    $("#findUnicornByFood").click(findUnicornByFood)
}
$(document).ready(setup)
