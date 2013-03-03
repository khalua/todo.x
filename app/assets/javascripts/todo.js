$(function() {
  $('#new_priority').click(show_form);
  $('#cancel_priority').click(hide_form);
  $('#create_priority').click(create_priority);
  $('tr').on('click', '.priority', select_priority);

  add_color_boxes();
  init_minicolors();
});

  function init_minicolors()
  {
    var settings = {
    animationSpeed: 100,
    animationEasing: 'swing',
    change: null,
    changeDelay: 0,
    control: 'hue',
    defaultValue: '',
    hide: null,
    hideSpeed: 100,
    inline: false,
    letterCase: 'lowercase',
    opacity: false,
    position: 'default',
    show: null,
    showSpeed: 100,
    swatchPosition: 'left',
    textfield: false,
    theme: 'default'
    };

    $('INPUT.minicolors').minicolors(settings);
  }

  function add_color_boxes()
  {
    //var x = $('.color');
    //console.log(x);
    //$('.color').each(change_text_to_color);
    var colors = $('.color');
    _.each(colors, change_text_to_color);

  }

  function change_text_to_color(object)
  {
    //console.log(object);
    var box = $(object);
    var color = box.text();

    box.removeClass('hide');
    box.css('background-color', color);
    box.text('');
  }

  function show_form ()
  {
    $('.form').removeClass('hide');
    $('#new_priority').addClass('hide');
  }

  function hide_form()
  {
    $('.form').addClass('hide');
  }

  function create_priority()
  {
    var color = $('input.minicolors').minicolors('rgbString');
    var name = $('#name').val();
    var value = $('#value').val();
    var token = $('input[name=authenticity_token]').val();
    var priority_id = $('#priority_id').val();
    // console.log("color " + color);
    // console.log("name " + name);
    // console.log("value " + value);
    // console.log("token " + token);


     $.ajax({
      dataType: 'json',
      type: "POST",
      url: "/priorities",
      data: { id:priority_id, authenticity_token: token, color:color, name:name, value:value } //first is key, second is variable
    }).done(display_priority);

    return false;
  }

  function display_priority(message)
  {
    var color = message.color;
    var name = message.name;
    append_color_box(color, name);
  }

  function append_color_box(color, name)
  {
    //console.log("color:" + color);
    $('tr:last').after('<tr><td class="color ninja"></td><td>'+ name +'</td></tr>');
    $('.ninja').css('background-color', color);
    hide_form();
  }

  function select_priority()
  {
    var selected = $(this);
    var bg_color = rgb2hex(selected.css('background-color'));
    var name = selected.next().text();
    var value = selected.next().next().text();
    var priority_id = selected.next().next().next().text();
    //console.log("bg_color " + bg_color);
    //console.log("name " + name);
    show_form();
    $('input.minicolors').minicolors('value', bg_color);
    $('#name').val(name);
    $('#value').val(value);
    $('#priority_id').val(priority_id);


  }

function rgb2hex(rgb)
{
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
}

  // chyld's code -
  // function display_priority(message)
  // var li = $('<li>');
  // var div1 = $('<div>');
  // div1.addClass('priority').addClass('color');

  // div1.css('background-color', message.color)

