$(function() {

    $(".burger-btn").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = 1;
        console.log(newDevoured);
        var newDevouredState = {
            devoured: newDevoured
        }
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(function() {
            location.reload();
        })
    });

    $("#burger-submit").on("click", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger-input").val().trim()
        };
            if (newBurger.burger_name !== "") {
            console.log(newBurger);
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function() {
                location.reload();
            });
        };
    });

});