/**
 * Face Builder v1.0.4
 * http://codecanyon.net/user/AramisGC
 * http://www.script-tutorials.com/
 *
 * Copyright (c) 2013-2014, Andrey Prikaznov
 * All rights reserved.
 */
var website_url = '/';

//get basic parameter from url
var gender = 'female/';

//canvas face builder relate
var canvas, ctx;
var canvas2, ctx2;
var oHead, oFringe, oEyebrow, oEye, oMouth, oTop;
var oColors, oColorEyebrow, oColorEye, oColorTop, oColorBack;

//canvas body builder relate
var canvas3, ctx3;
var canvas4, ctx4;


var oBody, oCloth, oLeg, oFoot, oAccessory, oBackground;
//adjust head on facebuild
var headPosX_onFacebuild = 0;
var headPosY_onFacebuild = 175;

//adjust head on bodybuild
var headScale = 0.30;
var headPosX = 125;
var headPosY = 10;
var timer;
var loader;
var userMsg = {
  context: '',
  text: $('#msg').val(),
  maxWidth: 100,
  lineHeight: 25,
  x: 0,
  y: 50,
  font: '25pt Calibri',
  fillStyle: '#333'
};
var assetsItems = [];
var statusSaver = [0,0,0,0,0,0,0,0];


//unknow
var iSel = 0;
var app = {
  step: 0,
  swiperLayer: $('.elementSwiper'),
  gameStart: $('.gameStart'),
  gameSteps: $('.nextStep,.prevStep'),
  nextStep: $('.nextStep'),
  prevStep: $('.prevStep'),
  faceItem: $('.faceItem'),
  bodyItem: $('.bodyItem'),
  generate: $('#generate'),

  stepProgram: [
  {
        //step 0. game start
        container: $('.startup'),
        stepFunction: function() {
          app.swiperLayer.hide();
          this.container.show().siblings().hide();

          //Btn control
          app.faceItem.hide();
          app.bodyItem.hide();
          app.generate.hide();
          app.gameSteps.hide();
          app.gameStart.show();

          //begin button
          $('.btnBegin').on('click', function() {
            app.step = app.step + 1;
            app['stepProgram'][app.step]['stepFunction']();
            $.magnificPopup.close();
          });

          //show popup
          $('.open-popup-link').magnificPopup({
            type: 'inline',
            midClick: true,
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
              beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
              }
            }
          });
        }
      },{
        //step 1. choose gender
        container: $('.genderBuild'),
        stepFunction: function() {
          app.swiperLayer.hide();
          this.container.show().siblings().hide();

          //Btn control
          app.faceItem.hide();
          app.bodyItem.hide();
          app.generate.hide();
          app.gameSteps.hide();
          app.nextStep.show().addClass('disable');
          app.gameStart.hide();

          //reset timer
          clearInterval(timer);
          new WOW().init();

          //gender select
          $('.genderBox .item').on('click', function() {
            gender = $(this).attr('val');

            $(this).siblings().removeClass('active').end().addClass('active');
            app.nextStep.removeClass('disable');

          });

        }
      },
    {
      //step 2 build face
      container: $('.faceBuild'),
      stepFunction: function() {
        var $thisContainer = this.container;


        app.faceItem.show();
        app.swiperLayer.show();
        this.container.show().siblings().hide();

        //Btn control
        if (app.faceItem.filter('.active').length == 0) {
          app.faceItem.eq(0).trigger('click');
        } else {
          app.faceItem.filter('.active').trigger('click');
        }

        app.generate.hide();
        app.prevStep.show();

        //adjust iphone 4 position of head
        if (document.documentElement.clientHeight < 500) {
          headPosY_onFacebuild = 90;
        }

        if (!this.container.hasClass('assetsLoaded')){
          console.log('assetsLoaded');
          $.magnificPopup.open({
            items: {
              src: $('<div class="white-popup" ><p>loading Assets...</p></div>'),
            },
            type: 'inline'
          });
          //load assets
          assetsPrepare(gender,function(){
            $thisContainer.addClass('assetsLoaded');
          });
        }
      }
    }, {
      //step 3 build body item
      container: $('.bodyBuild'),
      stepFunction: function() {
        app.swiperLayer.show();
        this.container.show().siblings().hide();

        //Btn control
        app.bodyItem.show().eq(0).trigger('click');
        app.generate.hide();


      }
    }, {
      //step4. put message on final result
      container: $('.msgBuild'),
      stepFunction: function() {
        app.swiperLayer.hide();
        this.container.show().siblings().hide();

        //Btn control
        app.faceItem.hide();
        app.bodyItem.hide();
        app.generate.show();

        app.gameStart.hide();

      }
    }
  ]
}

function sendResultToServer(vData) {
  $('.scene .loading').show();
  $.post(
    website_url + 'accept_avatar.php', {
      data: vData
    },
    function(aData) {

      if (aData) {
        $('.result').fadeOut(1000, function() {
          var result = '<hr /><div class="container"><h2>Result is:</h2><img src="cache/result' + aData + '.jpg" /><button class="button download" onclick="window.open(\'cache/result' + aData + '.jpg\');">download result image</button>' +
            '<button class="button" onclick="$(\'.send_email\').toggle();">Send by Email</button>' +
            '<form method="post" action="email.php" class="send_email"><input name="file" value="' + aData + '" type="hidden" />' +
            '<input class="text" name="name" value="" type="text" placeholder="Your Name" /><input class="text" name="email" value="" type="text" placeholder="Your Email" /><input class="button" type="submit" name="submit" /></form></div>';

          $(this).html(result);
          $(this).fadeIn(1000);
          $('.scene .loading').hide();
        });
      }
    }
  );
}

function Head(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0
}

function Fringe(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0
}

function Eye(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0
}

function Eyebrow(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0
}

function Mouth(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0
}

function Top(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0
}

function Body(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0
};

function Cloth(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0
};

function Leg(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0
};

function Foot(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0
};

function Background(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0
};


function clear() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);
  ctx3.clearRect(0, 0, ctx3.canvas.width, ctx3.canvas.height);
  ctx4.clearRect(0, 0, ctx4.canvas.width, ctx4.canvas.height);
}

function drawScene() {
  clear();
  //console.log('instance');
  //ctx bg>head>eyebrow>eye>fringe>mouth
  ctx.drawImage(oBackground.image, oBackground.x2 + oBackground.iSpr * oBackground.w, oBackground.y2, oBackground.w, oBackground.h, oBackground.x, oBackground.y, oBackground.w, oBackground.h);
  ctx.drawImage(oHead.image, oHead.x2 + oHead.iSpr * oHead.w, oHead.y2, oHead.w, oHead.h, oHead.x + headPosX_onFacebuild, oHead.y + headPosY_onFacebuild, oHead.w, oHead.h);
  //ctx.drawImage(oTop.image, oTop.x2 + oTop.iSpr * oTop.w, oTop.y2, oTop.w, oTop.h, oTop.x, oTop.y, oTop.w, oTop.h);
  ctx.drawImage(oEyebrow.image, oEyebrow.x2 + oEyebrow.iSpr * oEyebrow.w, oEyebrow.y2, oEyebrow.w, oEyebrow.h, oEyebrow.x + headPosX_onFacebuild, oEyebrow.y + headPosY_onFacebuild, oEyebrow.w, oEyebrow.h);
  ctx.drawImage(oEye.image, oEye.x2 + oEye.iSpr * oEye.w, oEye.y2, oEye.w, oEye.h, oEye.x + headPosX_onFacebuild, oEye.y + headPosY_onFacebuild, oEye.w, oEye.h);
  ctx.drawImage(oMouth.image, oMouth.x2 + oMouth.iSpr * oMouth.w, oMouth.y2, oMouth.w, oMouth.h, oMouth.x + headPosX_onFacebuild, oMouth.y + headPosY_onFacebuild, oMouth.w, oMouth.h);

  //ctx2
  ctx2.drawImage(oFringe.image, oFringe.x2 + oFringe.iSpr * oFringe.w, oFringe.y2, oFringe.w, oFringe.h, oFringe.x + headPosX_onFacebuild, oFringe.y + headPosY_onFacebuild, oFringe.w, oFringe.h);

  //ctx3 bg>body>foot>cloth>head>eyebrow>eye>fringe>mouth
  ctx3.drawImage(oBackground.image, oBackground.x2 + oBackground.iSpr * oBackground.w, oBackground.y2, oBackground.w, oBackground.h, oBackground.x, oBackground.y, oBackground.w, oBackground.h);
  ctx3.drawImage(oBody.image, oBody.x2 + oBody.iSpr * oBody.w, oBody.y2, oBody.w, oBody.h, oBody.x, oBody.y, oBody.w, oBody.h);
  ctx3.drawImage(oFoot.image, oFoot.x2 + oFoot.iSpr * oFoot.w, oFoot.y2, oFoot.w, oFoot.h, oFoot.x, oFoot.y, oFoot.w, oFoot.h);
  ctx3.drawImage(oCloth.image, oCloth.x2 + oCloth.iSpr * oCloth.w, oCloth.y2, oCloth.w, oCloth.h, oCloth.x, oCloth.y, oCloth.w, oCloth.h);
  ctx3.drawImage(oHead.image, oHead.x2 + oHead.iSpr * oHead.w, oHead.y2, oHead.w, oHead.h, oHead.x + headPosX, oHead.y + headPosY, oHead.w * headScale, oHead.h * headScale);
  ctx3.drawImage(oEyebrow.image, oEyebrow.x2 + oEyebrow.iSpr * oEyebrow.w, oEyebrow.y2, oEyebrow.w, oEyebrow.h, oEyebrow.x + headPosX, oEyebrow.y + headPosY, oEyebrow.w * headScale, oEyebrow.h * headScale);
  ctx3.drawImage(oEye.image, oEye.x2 + oEye.iSpr * oEye.w, oEye.y2, oEye.w, oEye.h, oEye.x + headPosX, oEye.y + headPosY, oEye.w * headScale, oEye.h * headScale);
  ctx3.drawImage(oFringe.image, oFringe.x2 + oFringe.iSpr * oFringe.w, oFringe.y2, oFringe.w, oFringe.h, oFringe.x + headPosX, oFringe.y + headPosY, oFringe.w * headScale, oFringe.h * headScale);
  ctx3.drawImage(oMouth.image, oMouth.x2 + oMouth.iSpr * oMouth.w, oMouth.y2, oMouth.w, oMouth.h, oMouth.x + headPosX, oMouth.y + headPosY, oMouth.w * headScale, oMouth.h * headScale);

  // ctx4 clone from ctx3
  ctx4.drawImage(canvas3, 0, 0);

  // ctx 5
  userMsg.text = $('#msg').val();
  userMsg.context = ctx4;
  ctx4.font = userMsg.font;
  ctx4.fillStyle = userMsg.fillStyle;
  wrapText(userMsg.context, userMsg.text, userMsg.x, userMsg.y, userMsg.maxWidth, userMsg.lineHeight);


}

function exportResult() {
  var temp_ctx, temp_canvas;
  temp_canvas = document.createElement('canvas');
  temp_ctx = temp_canvas.getContext('2d');
  temp_canvas.width = 330;
  temp_canvas.height = 330;
  var zdata = ctx4.getImageData(5, 5, 330, 477);
  var data = zdata.data;
  temp_ctx.putImageData(zdata, 0, 0);
  zdata2 = ctx4.getImageData(5, 5, 330, 477);


  temp_ctx.putImageData(zdata2, 0, 0);
  var vData = temp_canvas.toDataURL("image/jpeg", 1.0);
  $('#face_result').attr('src', vData);
  sendResultToServer(vData);
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
  var words = text.split('');
  var line = '';

  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + '';
    var metrics = context.measureText(testLine);

    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + '';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}

function assetsPrepare(gender,callback) {

  if (typeof(timer) == 'number') {
    clearInterval(timer);
  }

  //canvas
  canvas = document.getElementById('scene');
  ctx = canvas.getContext('2d');
  canvas2 = document.getElementById('scene2');
  ctx2 = canvas2.getContext('2d');
  canvas3 = document.getElementById('scene3');
  ctx3 = canvas3.getContext('2d');
  canvas4 = document.getElementById('scene4');
  ctx4 = canvas4.getContext('2d');


  var oEyesImage = new Image();
  oEyesImage.src = website_url + 'images/data/' + gender + 'eyes.png';
  oEyesImage.onload = function() {assetsItems.push(this)};
  var oEyebrowImage = new Image();
  oEyebrowImage.src = website_url + 'images/data/' + gender + 'eyebrow.png';
  oEyebrowImage.onload = function() {assetsItems.push(this)};
  var oMouthsImage = new Image();
  oMouthsImage.src = website_url + 'images/data/' + gender + 'mouths.png';
  oMouthsImage.onload = function() {assetsItems.push(this)};
  var oFaceImage = new Image();
  oFaceImage.src = website_url + 'images/data/' + gender + 'face.png';
  oFaceImage.onload = function() {assetsItems.push(this)};
  var oFringeImage = new Image();
  oFringeImage.src = website_url + 'images/data/' + gender + 'fringes.png';
  oFringeImage.onload = function() {assetsItems.push(this)};


  //body Part
  var oBodyImage = new Image();
  oBodyImage.src = website_url + 'images/data/' + gender + 'body.png';
  oBodyImage.onload = function() {assetsItems.push(this)};
  var oClothImage = new Image();
  oClothImage.src = website_url + 'images/data/' + gender + 'cloth.png';
  oClothImage.onload = function() {assetsItems.push(this)};
  var oFootImage = new Image();
  oFootImage.src = website_url + 'images/data/' + gender + 'foot.png';
  oFootImage.onload = function() {assetsItems.push(this)};
  var oBackgroundImage = new Image();
  oBackgroundImage.src = website_url + 'images/data/' + gender + 'background.png';
  oBackgroundImage.onload = function() {assetsItems.push(this)};

  //face part object
  oHead = new Head(0, 0, 0, 0, 340, 340, oFaceImage);
  oFringe = new Fringe(0, 0, 0, 0, 340, 340, oFringeImage);
  oEye = new Eye(0, 0, 0, 0, 340, 340, oEyesImage);
  oEyebrow = new Eyebrow(0, 0, 0, 0, 340, 340, oEyebrowImage);
  oMouth = new Mouth(0, 0, 0, 0, 340, 340, oMouthsImage);

  //body part object
  oBody = new Body(0, 0, 0, 0, 340, 477, oBodyImage);
  oCloth = new Cloth(0, 0, 0, 0, 340, 477, oClothImage);
  // oLeg = new Leg(0,0,0,0,340,340,oLeg);
  oFoot = new Foot(0, 0, 0, 0, 340, 477, oFootImage);
  oBackground = new Background(0, 0, 0, 0, 340, 340, oBackgroundImage);


  loader = setInterval(function(){
    console.log(assetsItems.length);
    if (assetsItems.length==9){

      clearInterval(loader);
      timer = setInterval(drawScene, 100);
      assetsItems=[];
      $.magnificPopup.close();
      callback();
    }

  },100);
  //refresh the canvas
  //timer = setInterval(drawScene, 100);
}
function checkAssetsLoad(callback){

  console.log(assetsItems.length);
  if (assetsItems.length==9){

    clearInterval(loader);
    timer = setInterval(drawScene, 100);
    assetsItems=[];
    $.magnificPopup.close();
    callback;
  }

}
function checkPortrait() {
  // body...
  if (document.documentElement.clientHeight > document.documentElement.clientWidth) {
    //console.log('do nothing');
    $('body').removeClass('portraitPls');
  } else {

    //console.log('please use portrait');
    $('body').addClass('portraitPls');

  }

}

$(function() {

  checkPortrait();
  $(window).on('resize', checkPortrait);



  //swiper
  var elementSwiper = new Swiper('.elementSwiper', {
    onSlideChangeStart: function(swiper) {
      console.log(swiper.activeIndex);
    }
  });

  $('.faceOption a').on('click', function(e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
    elementSwiper.slideTo($(this).attr('val'));

  });
  $('.bodyOption a').on('click', function(e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
    elementSwiper.slideTo($(this).attr('val'));

  });
  //face type swiper
  var skinSwiperType = new Swiper('.headSwiperType', {
    onSlideChangeStart: function(swiper) {
      oHead.iSpr = parseInt(swiper.activeIndex);
    }
  });


  var fringeSwiperType = new Swiper('.fringeSwiperType', {
    onSlideChangeStart: function(swiper) {
      oFringe.iSpr = parseInt(swiper.activeIndex);
    }
  });
  var eyebrowSwiperType = new Swiper('.eyebrowSwiperType', {
    onSlideChangeStart: function(swiper) {
      oEyebrow.iSpr = parseInt(swiper.activeIndex);
    }
  });
  var eyeSwiperType = new Swiper('.eyeSwiperType', {
    onSlideChangeStart: function(swiper) {
      oEye.iSpr = parseInt(swiper.activeIndex);
    }
  });
  var mouthSwiperType = new Swiper('.mouthSwiperType', {
    onSlideChangeStart: function(swiper) {
      oMouth.iSpr = parseInt(swiper.activeIndex);
    }
  });
  var backgroundSwiperType = new Swiper('.backgroundSwiperType', {
    onSlideChangeStart: function(swiper) {
      oBackground.iSpr = parseInt(swiper.activeIndex);
    }
  });
  var clothSwiperType = new Swiper('.clothSwiperType', {
    onSlideChangeStart: function(swiper) {
      oCloth.iSpr = parseInt(swiper.activeIndex);
    }
  });
  var footSwiperType = new Swiper('.footSwiperType', {
    onSlideChangeStart: function(swiper) {
      oFoot.iSpr = parseInt(swiper.activeIndex);
    }
  });



  $('#generate button').click(function() {
    exportResult();
  });

  //cloth foot accesory bag background
  app.nextStep.on('click', function() {
    if (app.step < app.stepProgram.length - 1 && app.nextStep.hasClass('disable') == false) {
      app.step = app.step + 1;
      app['stepProgram'][app.step]['stepFunction']();
    }
  });

  app.prevStep.on('click', function() {
    if (app.step > 0 && $(this).hasClass('disable') == false) {
      app.step = app.step - 1;
      app['stepProgram'][app.step]['stepFunction']();
    }
  });

  //init the first step
  app['stepProgram'][app.step]['stepFunction']();

});
