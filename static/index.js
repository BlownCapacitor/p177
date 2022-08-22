$(document).ready(function () {
    getTemplates();
})

function getTemplates() {
    $.ajax({
        url: "/get-template",
        type: "get",
        success: function (result) {
            guessing(result.puzzle)
        },
        error: function (result) {
            alert(result.responseJSON.message)
        }
    })
}
function guessing(randomWord) {
    $("#blanks").empty();
    for (let i = 0; i < randomWord.inputs; i++) {
        let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`
        $("#blanks").append(input_html)
    }
    $("#category").html(randomWord.category)
    var gameOver=false
   
    $(".clickable").click(function () {
        var correct = false;      
        let id = $(this).attr("id");
        var life = parseInt($("#life").text())
        for (var i = 0; i < randomWord.word1.length; i++) {
            if (randomWord.word1.charAt(i).toLowerCase() == id) {

               if (life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)) {

                    $(".fill_blanks").eq(i).html(id);
                    correct = true;
                    if ($("#blanks").text() === randomWord.word1.toLowerCase()) {
                        $("#result").text("You Win!")
                        correct = true;
                        gameOver=true
                    }
                }                
            }
         }
       
        if (life > 0 && correct!=true && gameOver!=true) {           
            life = life - 1
            $("#life").text(life)
        }
        else if (life == 0) {
            $("#result").text("You Lose! Please try again.")
        }
    })
}