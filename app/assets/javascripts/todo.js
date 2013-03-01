$(function() {
  $('#new_priority').click(show_form);
  $('#cancel_priority').click(hide_form);
 // $('#create_priority').click(create_form);
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
    textfield: true,
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