/*
Theme by: WebThemez.com
Note: Please use our back link in your site
*/
$(function () {
  // Инициализация слайдшоу с помощью плагина Vegas
  $.vegas('slideshow', {
    delay: 8000, // Задержка между сменой фонов в миллисекундах
    backgrounds: [
      { src: 'images/background4.jpg', fade: 4000 }, // Фон 1 с эффектом затухания
      { src: 'images/background3.jpg', fade: 4000 }, // Фон 2 с эффектом затухания
      { src: 'images/background2.jpg', fade: 4000 }, // Фон 3 с эффектом затухания
      { src: 'images/background1.jpg', fade: 4000 }  // Фон 4 с эффектом затухания
    ]
  })('overlay'); // Применение оверлея к слайдшоу

  var endDate = "December 01, 2025 15:03:25"; // Дата окончания для обратного отсчета

  // Инициализация простого таймера обратного отсчета
  $('.countdown.simple').countdown({ date: endDate });

  // Инициализация стилизованного таймера обратного отсчета
  $('.countdown.styled').countdown({
    date: endDate,
    render: function (data) {
      $(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>days</span></div>" +
                      "<div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div>" +
                      "<div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div>" +
                      "<div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
    }
  });

  // Инициализация таймера обратного отсчета с коллбеком
  $('.countdown.callback').countdown({
    date: +(new Date) + 10000, // Устанавливаем дату окончания на 10 секунд вперед
    render: function (data) {
      $(this.el).text(this.leadingZeros(data.sec, 2) + " sec"); // Отображаем только секунды
    },
    onEnd: function () {
      $(this.el).addClass('ended'); // Добавляем класс 'ended' по завершении отсчета
    }
  }).on("click", function () {
    // При клике на элемент таймера сбрасываем его и запускаем заново
    $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
  });

});


/* ▎Пояснение кода:

• $(function() {...}) — это сокращенная запись для $(document).ready(), которая запускает код после полной загрузки DOM.

• $.vegas('slideshow', {...}) — инициализирует слайдшоу с фоновыми изображениями и задержкой между сменами.

• $('.countdown.simple').countdown({...}) — создает простой таймер обратного отсчета до указанной даты.

• $('.countdown.styled').countdown({...}) — создает стилизованный таймер, который отображает дни, часы, минуты и секунды.

• $('.countdown.callback').countdown({...}) — создает таймер, который обновляется каждые секунды и добавляет класс 'ended' по завершении.

• .on("click", function() {...}) — добавляет обработчик клика для перезапуска таймера.

Этот код позволяет создать красивое слайдшоу и несколько различных таймеров обратного отсчета на веб-странице.*/