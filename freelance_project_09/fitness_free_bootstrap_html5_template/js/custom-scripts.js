/*
Author: webthemez.com
Author URL: http://webthemez.com
*/
jQuery(function ($) {
    'use strict';

    // Обработчик события прокрутки окна
    $(window).scroll(function (event) {
        Scroll(); // Вызов функции Scroll при прокрутке
    });

    // Обработчик клика на элементы навигации
    $('.navbar-collapse ul li a').on('click', function () {
        // Анимация прокрутки к элементу, на который ссылается якорь (hash)
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 5 // Прокрутка к элементу с учетом смещения
        }, 2000); // Длительность анимации в миллисекундах
        return false; // Отмена стандартного поведения ссылки
    });

    // Функция Scroll (должна быть определена)
    function Scroll() {
        // Здесь можно добавить код, который будет выполняться при прокрутке окна
        console.log("Прокручено");
    }



    // Функция для отслеживания прокрутки
    function Scroll() {
        var contentTop = []; // Массив для хранения верхних позиций элементов
        var contentBottom = []; // Массив для хранения нижних позиций элементов
        var winTop = $(window).scrollTop(); // Текущая позиция прокрутки окна
        var rangeTop = 200; // Допустимый диапазон для активации элемента
        var rangeBottom = 500; // Не используется в данном коде, но можно добавить для расширенной логики

        // Заполнение массивов contentTop и contentBottom
        $('.navbar-collapse').find('.scroll a').each(function () {
            var target = $($(this).attr('href')); // Получаем целевой элемент по ссылке
            contentTop.push(target.offset().top); // Сохраняем верхнюю позицию
            contentBottom.push(target.offset().top + target.height()); // Сохраняем нижнюю позицию
        });

        // Проверка активного элемента на основе текущей позиции прокрутки
        $.each(contentTop, function (i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.navbar-collapse li.scroll')
                    .removeClass('active') // Убираем класс active у всех элементов
                    .eq(i).addClass('active'); // Добавляем класс active к текущему элементу
            }
        });
    }

    // Обработчик события клика по элементу с id 'tohash'
    $('#tohash').on('click', function () {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 5 // Плавная прокрутка к целевому элементу
        }, 1000); // Длительность анимации 1000 мс (1 секунда)
        return false; // Предотвращаем стандартное поведение ссылки
    });

    // Инициализация WOW.js для анимации при прокрутке
    new WOW().init();

    // Инициализация smoothScroll (если используется)
    smoothScroll.init();



    $(window).load(function () {
        'use strict';
        var $portfolio_selectors = $('.portfolio-filter >li>a');
        var $portfolio = $('.portfolio-items');
        $portfolio.isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $portfolio_selectors.on('click', function () {
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector
            });
            return false;
        });
    });

    $(document).ready(function () {

        $.fn.animateNumbers = function (stop, commas, duration, ease) {
            return this.each(function () {
                var $this = $(this);
                var start = parseInt($this.text().replace(/,/g, ""));
                commas = (commas === undefined) ? true : commas;
                $({
                    value: start
                }).animate({
                    value: stop
                }, {
                    duration: duration == undefined ? 1000 : duration,
                    easing: ease == undefined ? "swing" : ease,
                    step: function () {
                        $this.text(Math.floor(this.value));
                        if (commas) {
                            $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                        }
                    },
                    complete: function () {
                        if (parseInt($this.text()) !== stop) {
                            $this.text(stop);
                            if (commas) {
                                $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                            }
                        }
                    }
                });
            });
        };

        $('.business-stats').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
            var $this = $(this);
            if (visible) {
                $this.animateNumbers($this.data('digit'), false, $this.data('duration'));
                $this.unbind('inview');
            }
        });
    });


    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });


});