const userInfo = {
    name: null,
    color: null
}


$(document).ready(init);

function init() {
    console.log('Hello!');

    getDemo();

    $('.js-btn-color').on('click', assignColor);
    $('#js-btn-submit').on('click', submitUser);
    $('#js-btn-submit').hide();
}

function assignColor() {
    userInfo.color = $(this).data('color');
    $('.js-btn-color').hide();
    $('#js-btn-submit').show();
}

function getDemo() {
    $.ajax({
        type: 'GET',
        url: '/demo'
    }).then((response) => {
        console.log(response);
        reset();
        render(response);
    });
}

function reset() {
    $('.js-btn-color').show();
    $('#js-btn-submit').hide();
    $('#js-input-name').val('');
}

function render(arrayOfPeople) {
    $('#js-container').empty();
    for(let person of arrayOfPeople) {
        $('#js-container').append(`
            <div>
                <p>${person.name} - ${person.color}</p>
            </div>
        `);
    }
}

function submitUser() {
    if($('#js-input-name').val() != '') {
        userInfo.name = $('#js-input-name').val();
        postData();
    } else {
        alert('Enter your name!');
    }
}

function postData() {
    userInfo.isUser = true;
    userInfo.testNumber = 3;

    $.ajax({
        type: 'POST',
        url: '/demo',
        data: userInfo
    }).then((response) => {
        getDemo();
    })
}