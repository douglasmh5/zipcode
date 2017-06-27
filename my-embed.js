$(document).ready(function () {

    function checkZip(value) {
        return (/(02332)/).test(value);
    }

    $('#test').on('click', function (e) {
        e.preventDefault;
        var value = $('#zip').val();
        if (checkZip(value)) {
            alert('valid zip');
        } else {
            alert('invalid zip');
        }
    });

});
