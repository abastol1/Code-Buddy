$(document).ready(function(){
    // alert("HEY")
    var totalLanguage = {};

    $('#addButton').click(function(){
        // alert("HEY")
        var langName = $('#inputLanguage').val();
        var langLevel = $('#level').val();
        totalLanguage[langName] = langLevel;
        console.log(totalLanguage);

        console.log("Name: " + langName + " Level: " + langLevel);
        var r=$('<input/>').attr({
            type: "button",
            id: "field",
            value: $('#inputLanguage').val()
        });

        $("#languageList").append(r);
        $("#hiddenData").val(totalLanguage);

    })


    $('#signup').click(function(){
        alert("HEY HEYE HEY")
        console.log(totalLanguage);
    })
})