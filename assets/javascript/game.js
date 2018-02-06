$(document).ready(function () {

    var rey = { name: "rey", attack: 9, hp: 110, counterAttack: 15 };
    var finn = { name: "finn", attack: 7, hp: 120, counterAttack: 10 };
    var kylo = { name: "kylo", attack: 10, hp: 130, counterAttack: 14 };
    var phasma = { name: "phasma", attack: 8, hp: 140, counterAttack: 12 };
    var characters = [rey, finn, kylo, phasma];

    $("#rey").attr({
        "data-attack": rey.attack,
        "data-hp": rey.hp,
        "data-counterAttack": rey.counterAttack
    });

    $("#finn").attr({
        "data-attack": finn.attack,
        "data-hp": finn.hp,
        "data-counterAttack": finn.counterAttack
    });

    $("#kylo").attr({
        "data-attack": kylo.attack,
        "data-hp": kylo.hp,
        "data-counterAttack": kylo.counterAttack
    });

    $("#phasma").attr({
        "data-attack": phasma.attack,
        "data-hp": phasma.hp,
        "data-counterAttack": phasma.counterAttack
    });

    for (var i = 0; i < characters.length; i++) {
        $("#" + characters[i].name).children(".hp").text(characters[i].hp);
    }



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
        $(".enemy").attr("class", "enemy-two"); //change class of other enemies to enemy-two
        $("#enemy").append(this); //move contestant to enemy battle area
        $("#fight").addClass("page-header"); //add header class to fight area
        $("#fight").text("Battle Area"); //add text to fight area
        $(".hero").clone().appendTo("#player"); //copy hero to player battle area
    });

    $("#dynamic-button").on("click", "#attack-button", function () {
        var contestantHitPoints = Number($(".contestant").attr("data-hp"));
        var heroAttack = Number($(".hero").attr("data-attack"));
        contestantHitPoints = contestantHitPoints - heroAttack;
        $(".contestant").children(".hp").text(contestantHitPoints - heroAttack);
        heroAttack += heroAttack;
    });
});