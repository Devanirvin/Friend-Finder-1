
$("#submit").on("click", (event) => {
    event.preventDefault();

    
    var userData = {
        name: $('#nameEntry').val().trim(),
        photo: $('#photoLink').val().trim(),
        scores: [
            $("#questionOne").val().trim(),
            $("#questionTwo").val().trim(), 
            $("#questionThree").val().trim(), 
            $("#questionFour").val().trim(), 
            $("#questionFive").val().trim(), 
            $("#questionSix").val().trim(), 
            $("#questionSeven").val().trim(), 
            $("#questionEight").val().trim(), 
            $("#questionNine").val().trim(), 
            $("#questionTen").val().trim()
        ]
    };

   
    $.post("/api/friends", userData, (data) => {


    });

});