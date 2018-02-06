$(document).ready(function () {

    var rey = { attack: 9, hp: 110, counterAttack: 15 };
    var finn = { attack: 7, hp: 120, counterAttack: 10 };
    var kylo = { attack: 10, hp: 130, counterAttack: 14 };
    var phasma = { attack: 8, hp: 140, counterAttack: 12 };

    $("#rey").children(".hp").text(rey.hp);
    $("#finn").children(".hp").text(finn.hp);
    $("#kylo").children(".hp").text(kylo.hp);
    $("#phasma").children(".hp").text(phasma.hp);


    $("#character-select").on("click", ".character-container", function () { //initial character selection
        $(this).attr("class", "hero"); //change class to hero
        $(".character-container").attr("class", "enemy"); //change all other characters to enemy class
        $("#enemy-choices").append($(".enemy")); //move enemies to the enemy choices div
        $("#character").text("Hero"); //change text of character header
        $("#enemies").text("Enemies"); //add text to enemy area
        $("#enemies").addClass("page-header"); //add header class to enemy area
        $("#hero-div").attr("class", "col-xs-4"); //change column width of hero area to be smaller
        $("#enemy-div").addClass("col-xs-8"); //change column width of enemy area to be larger       
    });

    $("#enemy-choices").on("click", ".enemy", function () { //function when an enemy is clicked
        var attackButton = $("<button>"); //create button element
        $(attackButton).addClass("btn btn-default"); //add class to button
        $(attackButton).attr("id", "attack-button"); //add id to button
        $(attackButton).text("Attack!"); //add text to button
        $("#dynamic-button").append(attackButton); //insert button
        $(this).attr("class", "contestant"); //change class of enemy to contestant
        $(".enemy").attr("class", "enemy-two");
        $("#enemy").append(this); //move contestant to enemy battle area
        $("#fight").addClass("page-header"); //add header class to fight area
        $("#fight").text("Battle Area"); //add text to fight area
        $(".hero").clone().appendTo("#player"); //copy hero to player battle area
    });

    $("#dynamic-button").on("click", "#attack-button", function () {
        var contestantHitPoints = Number($(".contestant").children(".hp").text());

        while (contestantHitPoints > 0) {
            if ($(".hero").children("#rey")) {
                $(".contestant").children(".hp").text(contestantHitPoints - rey.attack);
                rey.attack += rey.attack;
            }
        }


    });

});