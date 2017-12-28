$(document).ready(function() {
    $.ajax({
        url: "https://g64vzck9m8.execute-api.eu-west-1.amazonaws.com/prod/list"
    }).then(function(data) {
       $('.list').append(data);
    });
})