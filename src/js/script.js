$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 3000,
    dotsClass: 'slick-dots',
    prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/slider/right.svg"></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: true,
          arrows: false,
          variableWidth: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
          variableWidth: true
        }
      },
      {
        breakpoint: 575,
        settings: {
          dots: false,
          arrows: false,
          variableWidth: false
        }
      },
    ]
  });

  $('ul.catalog__choose').on('click', 'li:not(.catalog__choose_active)', function () {
    $(this)
      .addClass('catalog__choose_items_active').siblings().removeClass('catalog__choose_items_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog__cards_content').eq(i).toggleClass('catalog__cards_content_active');
        $('.catalog__cards_list').eq(i).toggleClass('catalog__cards_list_active');
      })
    });
  }

  toggleSlide('.catalog__cards_link');
  toggleSlide('.catalog__cards_back');

  //modal

  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.overlay__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
  $('.btn_mini').on('click', function () {
    $('.overlay, #order').fadeIn('slow');
  });

  $('.btn_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .overlay__subheader').text($('.catalog__cards_header').eq(i).text());
      $('.overlay, #order').fadeIn('slow')
    })

  });

  //VALIDATE FORMS

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Enter your name, more then 2 symbols",
          minlength: jQuery.validator.format("At least {0} characters required!")
        },
        phone: "Enter your phone number",
        email: {
          required: "Enter your email",
          email: "Not correct."
        }
      }


    });

  }

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  //MASK 
  $('input[name=phone]').mask("+380(99) 999-9999");

  jQuery('.button_main').click(function () {
    var form = jQuery(this).closest('form');

    if (form.valid()) {
      //   form.css('opacity','.5');
      var actUrl = form.attr('action');

      jQuery.ajax({
        url: actUrl,
        type: 'post',
        dataType: 'html',
        data: form.serialize(),
        success: function (data) {
          //   form.html(data);
          //   form.css('opacity','1');
          //   form.find('.status');
          $('#thanks').modal('show'); // для бутстрапа
        },
        error: function () {
          form.find('.overlay').html('серверная ошибка');
        }
      });
    }
  });

  //SMOTH SCROLL AND PAGEUP

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href^='#']").click(function () {
    const _href = $(this).attr("href");
    $("html.body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });

  //ANIMATION WOW

  new WOW().init();

});