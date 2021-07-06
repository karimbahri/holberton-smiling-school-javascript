'use strict';

$().ready(function () {
    $.ajax({
        type: 'GET',
        url: 'https://smileschool-api.hbtn.info/xml/quotes',
        dataType: 'xml',
        success: function (quotes) {
            insertCarousel();

            const data = [];
            $(quotes).find('quote').each(function (i) {
                data[i] = {};
                data[i].pic = $(this).find('pic_url').text();
                data[i].name = $(this).find('name').text();
                data[i].title = $(this).find('title').text();
                data[i].text = $(this).find('text').text();
            });
            setCarouselQuotes(data);
            // data.forEach(element => {console.log(element)});
        },
        error: function (err) {
            console.error(`Erro : ${err}`);
        }
    })

    $.ajax({
        type: 'GET',
        url: 'https://smileschool-api.hbtn.info/xml/popular-tutorials',
        dataType: 'xml',
        success: function(data) {
            insertCardsCarousel('.container-1', 'carousel-popular-2');
            console.log(data);
            const items = [];
            $(data).find('video').each(function (i) {
                // const item = [
                //     {
                //         title: "",
                //         "sub-title": "",
                //         thumb_url: "",
                //         author: "",
                //         author_pic_url: "",
                //         duration: "",
                //         topic: "",
                //         keywords: "",
                //         },
                // ]
                items[i] = {};
                items[i].title = $(this).find('title').text();
                items[i].sub = $(this).find('sub-title').text();
                items[i].thumb_url = $(this).find('thumb_url').text();
                items[i].author = $(this).find('author').text();
                items[i].author_pic_url = $(this).find('author_pic_url').text();
                items[i].duration = $(this).find('duration').text();
                items[i].topic = $(this).find('topic').text();
                items[i].keywords = $(this).find('keywords').text();
            })
            console.log(items);
            setPopularsCardsdata(items);
        }
    })

    $.ajax({
        type: 'GET',
        url: 'https://smileschool-api.hbtn.info/xml/latest-videos',
        dataType: 'xml',
        success: function (data) {
            const items = [];
            $(data).find('video').each(function (i) {
                // const item = [
                //     {
                //         title: "",
                //         "sub-title": "",
                //         thumb_url: "",
                //         author: "",
                //         author_pic_url: "",
                //         duration: "",
                //         topic: "",
                //         keywords: "",
                //         },
                // ]
                items[i] = {};
                items[i].title = $(this).find('title').text();
                items[i].sub = $(this).find('sub-title').text();
                items[i].thumb_url = $(this).find('thumb_url').text();
                items[i].author = $(this).find('author').text();
                items[i].author_pic_url = $(this).find('author_pic_url').text();
                items[i].duration = $(this).find('duration').text();
                items[i].topic = $(this).find('topic').text();
                items[i].keywords = $(this).find('keywords').text();
            })
            insertCardsCarousel('.container-2', 'carousel-popular-2');
            setPopularsCardsdata(items);
            console.log('----', items);
        }
    })
})


const setCarouselQuotes = function (data) {
    let i = 1;
    data.forEach(element => {
        console.log(element);
        const item = $(`.inner-item-${i}`);
        item.html(`<div class="container-fluid row d-md-flex justify-content-center align-items-center h-100 p-5">
                        <img src="${element.pic}" class="rounded-circle" width="150px" alt="profile_5">
                        <p class="p-0 pl-md-5 w-75">${element.text} <br><br> <span class="name mt-5">${element.name}</span><br><span class="mt-3">${element.title}</span>  </p>
                    </div>`);
        i++;
    });
}

const insertCarousel = function () {
    $('.quotes-section').html(`<div id="carouselExampleControls" class="carousel slide h-100" data-ride="carousel">
    <div class="carousel-inner h-100">
        <div class="carousel-item inner-item-1 active h-100">
            <!-- <div class="container-fluid row d-md-flex justify-content-center align-items-center h-100 p-5">
                <img src="images/profile_5.jpg" class="rounded-circle" width="150px" alt="profile_5">
                <p class="p-0 pl-md-5 w-75"><span class="lt">&#60;&#60;</span>Those tutorials are concise and go staight to the point. I can't think of a better place to learn smiling. And it's so fun! <br><br> <span class="name mt-5">Person Name</span><br><span class="mt-3">weather presenter</span>  </p>
                
            </div> -->
            <div class="loader"></div>
        </div>
        <div class="carousel-item inner-item-2 h-100">
            <!-- <div class="container-fluid row d-md-flex justify-content-center align-items-center h-100 p-5">
                <img src="images/profile_5.jpg" class="rounded-circle" width="150px" alt="profile_5">
                <p class="p-0 pl-md-5 w-75"><span class="lt">&#60;&#60;</span>Those tutorials are concise and go staight to the point. I can't think of a better place to learn smiling. And it's so fun! <br><br> <span class="name mt-5">Person Name</span><br><span class="mt-3">weather presenter</span>  </p>
                
            </div> -->
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="" aria-hidden="true"><img src="images/arrow_white_left.png" alt="left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="" aria-hidden="true"><img src="images/arrow_white_right.png" alt="right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>`);
}

const insertCardsCarousel = function(selector, id) {
    $(selector).html(`
    <div id="${id}" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="d-flex justify-content-between">
            <div class="famous-1">
                
            </div>
            <div class="famous-2">
                
            </div>
            <div class="famous-3">
                
            </div>
            <div class="famous-4">
                
            </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="d-flex justify-content-between">
            <div class="famous-5">
                
            </div>
            <div class="famous-6">
                
            </div>
            <div class="famous-7">
                
            </div>
            <div class="famous-8">
                
            </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev prev" href="#${id}" role="button" data-slide="prev">
      <span class="" aria-hidden="true"><img src="images/arrow_black_left.png" alt="left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next next" href="#${id}" role="button" data-slide="next">
      <span class="" aria-hidden="true"><img src="images/arrow_black_right.png" alt="right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
    `);
}
const setPopularsCardsdata = function(data) {
    let i = 1;
    data.forEach(element => {
        $(`.famous-${i}`).html(`
        <div class="d-flex justify-content-center align-items-center">
        <img src="${element.thumb_url}" alt="card-img" width="250px">
        <img class="position-absolute" src="images/play.png" width="100px" height="100px" alt="play">
    </div>
    <div class="p-4">
        <h3>${element.title}</h3>
        <p class="text-secondary">${element['sub']}</p>
        <img class="rounded-circle" src="${element.author_pic_url}" alt="profile_1" width="40px">
        <span class="purple">${element.author}</span>
        <div class="p-2">
            ${setStars(element.star)}
            <span class="m-2 p-1"><p class="d-inline text-secondary">${element.duration}</p></span>
        </div>
    </div>
        `);
        i++;
    })
}
const setStars = function(star) {
    let rating = '', i = 0;
    for (i = 0 ; i < star ; i++)
        rating += `<img src="images/star_on.png" alt="star" width="20px">`;
    while (i < 5) {
        rating += `<img src="images/star_off.png" alt="star" width="20px">`;
        // console.log(i);
        i++;
    }
    // console.log(rating);
    return rating;
}