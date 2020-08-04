$(document).ready(function() {
    $(document).keypress(function(e){
        let todolist = $('#todolist').val()
        var keycode = (event.keyCode ? event.keyCode : event.which);
        $('.col-lg-12:even').css('backgroundColor', 'lightblue')
        $('.col-lg-12:odd').css('backgroundColor', 'lightblue')
        if(keycode == '13'){
            if(todolist == ""){
                alert('Please fill up Todo List')
                e.preventDefault();
            }else{
                $('#post-container').append(`<div id="btn" class="col-lg-12 d-flex"><div id='delete' class='col-lg-3 delete'>Delete</div><div class="col-lg-9">${todolist}</div></div>`)
                e.preventDefault();
            }
            $('input#todolist').val('')
            

        }
        $('#post-container').on('mouseover','#btn', function(e) {
            $(this).children('#delete').show()

        })
        $('#post-container').on('mouseleave','#btn', function(e) {
            $(this).children('#delete').hide()
        })


        $('#post-container').on('click','.delete', function(d) {
            $(this).parent().remove()
        }) 
        
    });
    $('#add').on('click', function(e) {
        $('#todolist').show()
       
    })
})