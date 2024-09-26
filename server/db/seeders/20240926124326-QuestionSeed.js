"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          themeId: 1,
          question:
            "Знакомый нам «испанский стыд». Это калька с глагола «поёживаться». Уверены, что такое поведение со стороны подростков вам знакомо. Но и они о вас так думают, так что вы квиты.",
          answer: "кринж",
          image: "https://r4.mt.ru/r5/photo3F82/20734740530-0/jpg/bp.jpeg",
          point: 100,
        },
        {
          themeId: 1,
          question:
            "Напряжённое состояние, в котором человек не контролирует ситуацию и злится от бессилия. Он совершает ошибки, из-за чего ещё больше нервничает и только ухудшает положение дел. Это может случиться в самый ответственный момент как в игре, так и в жизни.",
          answer: "тильт",
          image:
            "https://virtus-img.cdnvideo.ru/images/og-jpg/plain/e4/e4eda7cc8874914b99c1164b35dbf9cd.jpeg",
          point: 200,
        },
        {
          themeId: 1,
          question:
            "Мужчина, который перестал за собой следить. Он вам не масик. Ему, как правило, за 30, у него немодная причёска, неопрятная одежда и пивное брюшко. На дорогие развлечения у него нет денег, поэтому он смотрит футбол по телевизору и ходит на рыбалку. Если сначала это слово было довольно обидным, то сейчас существуют целые сообщества, в которых мужчины делятся фотографиями того, как проводят досуг за телевизором или с удочкой в руках и вполне довольны своим образом жизни.",
          answer: "скуф",
          image:
            "https://steamuserimages-a.akamaihd.net/ugc/1861674122685150723/7178928AA1578AAA4AFCF887BB23B9DAA4992F87/?imw=512&amp;imh=265&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
          point: 300,
        },
        {
          themeId: 1,
          question:
            "Переводится с английского как убогий. Так называют что-то недоработанное, банальное и унылое, то есть полный отстой. «Этот код — настоящий ..., удали его и никогда никому не показывай!».",
          answer: "лейм",
          image:
            "https://cdn-edge.kwork.ru/pics/t3/02/31679031-65cec9d61d7bd.jpg",
          point: 400,
        },
        {
          themeId: 1,
          question:
            "Представлять, воображать отношения между персонажами/кумирами/знакомыми, заниматься сводничеством. Слово пошло от части английских слов, обозначающих отношения, — friendship (дружба), relationship (отношения).",
          answer: "шипперить",
          image:
            "https://i.pinimg.com/originals/a2/75/50/a275505656c525fe9761a7f0fcb7510d.png",
          point: 500,
        },
        //////////////
        {
          themeId: 2,
          question:
            "Этот мифическое существо обитает в лесах и может внезапно появиться перед своими жертвами, заставляя их испытывать ужас. Он известен своей безликой худой фигурой и длинными конечностями. Кто это?",
          answer: "Слендермен",
          image:
            "https://play-lh.googleusercontent.com/proxy/ukttJSy5djrEou6Kl2lh5-085cI-TNBi9m27K3ffFIextgVWatk8nmFRJChtS4INoyj3r81Q9Q09epWwGtRkDFj3jA9YuWYw0jGbCuFuxjE_sji2Ny8cvJxPXw=s1920-w1920-h1080",
          point: 100,
        },
        {
          themeId: 2,
          question:
            "Этот персонаж известен своим зловещим внешним видом и маниакальными наклонностями. Он появляется ночью в 3 часа ночи если ты не спишь и произносит фразу 'иди спать', оставляя за собой следы насилия. Кто это?",
          answer: "Джефф убийца",
          image:
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQFNQvE-6rwdeC3oGfkoKY8D-EJX8TizHZ3Vu68nEFwjy2JxlMK",
          point: 200,
        },
        {
          themeId: 2,
          question:
            "Это паранормальное пространство, где люди могут застрять навсегда, окруженное бесконечными коридорами и странными звуками. Попав туда, трудно найти выход. Что это?",
          answer: "Бэкрумс",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/b/bb/HobbyTown_USA_Oshkosh_interior_under_construction_2002_%28The_Backrooms%29.jpg",
          point: 300,
        },
        {
          themeId: 2,
          question:
            "Этот персонаж стал известен благодаря своему жуткому внешнему виду и распространению в интернете. Он якобы может связываться с людьми через мессенджеры, заставляя их выполнять опасные задания. Кто это?",
          answer: "Момо",
          image:
            "https://www.iguides.ru/upload/medialibrary/c28/c28ba66696b2f66cd7590bef98f582c7.jpg",
          point: 400,
        },
        {
          themeId: 2,
          question:
            "Этот жуткий пес с широкими улыбкой и яркими глазами может внезапно появиться в темноте, вызывая у людей чувство тревоги и страха. Кто это?",
          answer: "Смайл дог",
          image: "https://i.ytimg.com/vi/35cJcBdf3V0/maxresdefault.jpg",
          point: 500,
        },
        //////////
        {
          themeId: 3,
          question:
            "Кто с третьей фазы включил бы трек Егор Крид – Девочка с картинки?",
          answer: "Наташа",
          image:
            "https://freshpic.art/img/2020-07/08/0uwvpbg89u52vt9cryh5h5k6m.jpg",
          point: 100,
        },
        {
          themeId: 3,
          question:
            "Кто с третьей фазы включил бы трек Big Baby Tape – Brigada?",
          answer: "Ростик",
          image:
            "https://cdns-images.dzcdn.net/images/cover/6522edec8dba8312fc877d5c79fdb4e2/1900x1900-000000-80-0-0.jpg",
          point: 200,
        },
        {
          themeId: 3,
          question: "Кто с третьей фазы включил бы трек Пика – Патимэйкер?",
          answer: "Егор",
          image:
            "https://cdns-images.dzcdn.net/images/cover/a92606ae333ce704968dc28d31bce3ec/1900x1900-000000-80-0-0.jpg",
          point: 300,
        },
        {
          themeId: 3,
          question: "Кто с третьей фазы включил бы трек Doja Cat – Juicy?",
          answer: "Амантур",
          image:
            "https://static.wikia.nocookie.net/dojacat/images/3/30/Amala_%28Deluxe_%28cover_art%29.png/revision/latest?cb=20200816143857",
          point: 400,
        },
        {
          themeId: 3,
          question: "Кто с третьей фазы включил бы трек Miyagi – Самурай?",
          answer: "Арсен",
          image:
            "https://images.genius.com/f0851bb3db073356fc7badc79806879f.1000x1000x1.png",
          point: 500,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
