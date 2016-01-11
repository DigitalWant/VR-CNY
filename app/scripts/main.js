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
var gender = 'female';

//canvas face builder relate
var canvas, ctx;
var canvas2, ctx2;
var oHead, oFringe, oEye, oMouth;
// var faceObject = {
//   oHead:{}, oFringe:{}, oEye:{}, oMouth:{}
// };
var faceObject = [oHead, oFringe, oEye, oMouth];

var oColors, oColorEyebrow, oColorEye, oColorTop, oColorBack;

//canvas body builder relate
var canvas3, ctx3;
var canvas4, ctx4;

var oBody, oCloth, oLeg, oFoot, oAccessory, oBackground;
var bodyObject = [oBackground,oBody, oCloth, oLeg, oFoot, oAccessory]

//adjust head on facebuild
var headPosX_onFacebuild = 0;
var headPosY_onFacebuild = 10;
var headScaleW_onFacebuild = 1;
var headScaleH_onFacebuild = 1;
var headPosY_onFacebuild_onIphone4 = 90;
//adjust head on bodybuild
var headPosX_onBodybuild = 0;
var headPosY_onBodybuild = 10;
var headScaleW_onBodybuild = 1;
var headScaleH_onBodybuild = 1;

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

//unknow
var iSel = 0;
var app = {
  step: 0,
  swiperLayer: $('.elementSwiper'),
  femaleFaceSwiperLayer: $('.elementSwiper.femaleFace'),
  maleFaceSwiperLayer: $('.elementSwiper.maleFace'),
  femaleBodySwiperLayer: $('.elementSwiper.femaleBody'),
  maleBodySwiperLayer: $('.elementSwiper.maleBody'),
  gameStart: $('.gameStart'),
  gameSteps: $('.nextStep,.prevStep'),
  nextStep: $('.nextStep'),
  prevStep: $('.prevStep'),
  faceItem: $('.faceItem'),
  bodyItem: $('.bodyItem'),
  generate: $('#generate'),
  stepProgram: [{
    //step 0. game start
    container: $('.startup'),
    stepFunction: function() {
      this.container.show().siblings().hide();
      app.gameSteps.hide();

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
  }, {
    //step 1. choose gender
    container: $('.genderBuild'),
    stepFunction: function() {
      this.container.show().siblings().hide();

      var $thisContainer = this.container;

      //Btn control
      app.gameSteps.hide();
      app.nextStep.show();
      //if this gender hasBeen select
      if (!$thisContainer.data('gender')) {
        app.nextStep.addClass('disable');
      }

      //reset timer
      clearInterval(timer);
      new WOW().init();

      //gender select
      $genderBtns = $('.genderBox .item');

      $genderBtns.on('click', function() {
        gender = $(this).attr('val');
        $thisContainer.data('gender', gender).data('justSelect', true);
        $genderBtns.removeClass('active unselect');
        $(this).addClass('active').siblings().addClass('unselect');
        app.nextStep.removeClass('disable');
      });

    }
  }, {
    //step 2 build face
    container: $('.faceBuild'),
    stepFunction: function() {
      this.container.show().siblings().hide();
      var $thisContainer = this.container;
      //face element swiper
      var elementSwiper;
      var elementIndex = 0;
      var elementonSlideChangeEnd = {
          onSlideChangeEnd: function(swiper, event) {
            elementIndex = swiper.activeIndex;
            //console.log(elementIndex);
          }
        }
        //app.swiperLayer.hide();
      app.faceItem.fadeIn(2000);
      app.prevStep.show();

      if (gender == "female") {
        app.femaleFaceSwiperLayer.show();
        app.maleFaceSwiperLayer.hide();
        elementSwiper = new Swiper(app.femaleFaceSwiperLayer, elementonSlideChangeEnd);
      } else {
        app.maleFaceSwiperLayer.show();
        app.femaleFaceSwiperLayer.hide();
        elementSwiper = new Swiper(app.maleFaceSwiperLayer, elementonSlideChangeEnd);
      }

      //adjust iphone 4 position of head
      if (document.documentElement.clientHeight < 500) {
        headPosY_onFacebuild = headPosY_onFacebuild_onIphone4;
      }

      //TODO load
      var makeItLoad = function() {
        //load assets
        assetsPrepare(gender, function() {
          $thisContainer.data('gender', gender);
        });
      }

      if ($thisContainer.data('gender')) {
        //if didn't loaded assets
        if ($thisContainer.data('gender') == gender) {} else {
          makeItLoad();
        }
      } else {
        makeItLoad();
      }

      app.faceItem.on('click', function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        elementSwiper.slideTo($(this).attr('val'));
      });

      //face item element swiper
      for (var i = 0; i < faceObject.length; i++) {
        faceObject[i]['instance'] = new Swiper('.' + gender + 'Face ' + faceObject[i]['domEle'], {
          onSlideChangeStart: function(swiper) {
            faceObject[i]['iSpr'] = parseInt(swiper.activeIndex);
          },
          centeredSlides: false,
          slidesPerView: 5,
          direction: 'horizontal',
          allowSwipeToPrev: false,
          allowSwipeToNext: false,
          onTap: function(swiper, event) {
            faceObject[elementIndex]['iSpr'] = parseInt(swiper.clickedIndex);
          }
        });
      }

    }
  }, {
    //step 3 build body item
    container: $('.bodyBuild'),
    stepFunction: function() {
      this.container.show().siblings().hide();
      var $thisContainer = this.container;
      //face element swiper
      var elementSwiper;
      var elementIndex = 0;
      var elementonSlideChangeEnd = {
          onSlideChangeEnd: function(swiper, event) {
            elementIndex = swiper.activeIndex;
            //console.log(elementIndex);
          }
        }
        //app.swiperLayer.hide();
      app.bodyItem.fadeIn(2000);

      //   var elementSwiper ;
      //
      //   app.bodyItem.on('click', function(e) {
      //     e.preventDefault();
      //     $(this).addClass('active').siblings().removeClass('active');
      //     elementSwiper.slideTo($(this).attr('val'));
      //   });
      //
      //
      //   if (gender == "female") {
      //     app.femaleBodySwiperLayer.show();
      //     app.maleBodySwiperLayer.hide();
      //     elementSwiper = new Swiper(app.femaleBodySwiperLayer);
      //   } else {
      //     app.maleBodySwiperLayer.show();
      //     app.femaleBodySwiperLayer.hide();
      //     elementSwiper = new Swiper(app.maleBodySwiperLayer);
      //   }
      //
      //
      //
      //   for (var i in bodyObject) {
      //     bodyObject[i]['instance'] = new Swiper('.'+gender+'Body ' + bodyObject[i]['domEle'], {
      //       onSlideChangeStart: function(swiper) {
      //         bodyObject[i]['iSpr'] = parseInt(swiper.activeIndex);
      //       },
      //       centeredSlides: false,
      //       slidesPerView: 5,
      //       direction: 'horizontal',
      //       allowSwipeToPrev: false,
      //       allowSwipeToNext: false,
      //       onTap:function(swiper, event){
      //         //console.log(swiper.clickedIndex);
      //         changeElement(elementSwiper,swiper.clickedIndex);
      //         //swiper.activeIndex = swiper.clickedIndex;
      //         //faceObject[i]['instance'].slideTo(swiper.clickedIndex);
      //       }
      //     });
      //   }
      //
      //
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
  }]
}

function changeElement(elementCategory, elementIndex) {
  console.log(elementCategory, elementIndex);

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
  this.iSpr = 0;
  this.domEle = '.headSwiperType';
  this.putOn = ['ctx1', 'ctx3'];
}

function Fringe(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0;
  this.domEle = '.fringeSwiperType';
  this.putOn = ['ctx2', 'ctx4'];
}

function Eye(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0;
  this.domEle = '.eyeSwiperType';
  this.putOn = ['ctx1', 'ctx3'];
}

function Mouth(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0;
  this.domEle = '.mouthSwiperType';
  this.putOn = ['ctx1', 'ctx3'];
}
//no Eyebrow
// function Eyebrow(x, y, x2, y2, w, h, image) {
//   this.x = x;
//   this.y = y;
//   this.x2 = x2;
//   this.y2 = y2;
//   this.w = w;
//   this.h = h;
//   this.image = image;
//   this.iSpr = 0;
//   this.domEle = '.eyebrowSwiperType';
// }


// function Top(x, y, x2, y2, w, h, image) {
//   this.x = x;
//   this.y = y;
//   this.x2 = x2;
//   this.y2 = y2;
//   this.w = w;
//   this.h = h;
//   this.image = image;
//   this.iSpr = 0
// }

function Body(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0;
  this.putOn = ['ctx3'];

};

function Cloth(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0;
  this.putOn = ['ctx3'];

};

function Leg(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0;
  this.putOn = ['ctx3'];

};

function Foot(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0;
  this.putOn = ['ctx3'];

};

function Background(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0;
  this.domEle = '.backgroundSwiperType';
  this.putOn = ['ctx3'];
};


function clear() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);
  ctx3.clearRect(0, 0, ctx3.canvas.width, ctx3.canvas.height);
  ctx4.clearRect(0, 0, ctx4.canvas.width, ctx4.canvas.height);
}

function drawScene() {

  // console.log(allObject[gender].oHead);


  clear();

  //ctx bg>head>eyebrow>eye>fringe>mouth
  // ctx.drawImage(oBackground.image, oBackground.x2 + oBackground.iSpr * oBackground.w, oBackground.y2, oBackground.w, oBackground.h, oBackground.x, oBackground.y, oBackground.w, oBackground.h);
  for (var i = 0; i < faceObject.length; i++) {
    //console.log(faceObject)

    if (faceObject[i].putOn.indexOf('ctx1')) {
      ctx.drawImage(
        faceObject[i]['image'],
        faceObject[i].x2 + faceObject[i].iSpr * faceObject[i].w,
        faceObject[i].y2,
        faceObject[i].w,
        faceObject[i].h,
        faceObject[i].x + headPosX_onFacebuild,
        faceObject[i].y + headPosY_onFacebuild,
        faceObject[i].w,
        faceObject[i].h);
    }

    if (faceObject[i].putOn.indexOf('ctx2')) {
      ctx2.drawImage(
        faceObject[i]['image'],
        faceObject[i].x2 + faceObject[i].iSpr * faceObject[i].w,
        faceObject[i].y2,
        faceObject[i].w * 1,
        faceObject[i].h * 1,
        faceObject[i].x + headPosX_onFacebuild,
        faceObject[i].y + headPosY_onFacebuild,
        faceObject[i].w * headScaleW_onFacebuild,
        faceObject[i].h * headScaleH_onFacebuild);
    }

    if (faceObject[i].putOn.indexOf('ctx3') ){
      //ctx3 bg>body>foot>cloth>head>eyebrow>eye>fringe>mouth
      ctx3.drawImage(
        faceObject[i].image,
        faceObject[i].x2 + faceObject[i].iSpr * faceObject[i].w,
        faceObject[i].y2,
        faceObject[i].w * 1,
        faceObject[i].h * 1,
        faceObject[i].x + headPosX_onBodybuild,
        faceObject[i].y + headPosY_onBodybuild,
        faceObject[i].w * headScaleW_onBodybuild,
        faceObject[i].h * headScaleH_onBodybuild);
    }
  }


  //ctx.drawImage(oTop.image, oTop.x2 + oTop.iSpr * oTop.w, oTop.y2, oTop.w, oTop.h, oTop.x, oTop.y, oTop.w, oTop.h);
  //ctx.drawImage(oEyebrow.image, oEyebrow.x2 + oEyebrow.iSpr * oEyebrow.w, oEyebrow.y2, oEyebrow.w, oEyebrow.h, oEyebrow.x + headPosX_onFacebuild, oEyebrow.y + headPosY_onFacebuild, oEyebrow.w, oEyebrow.h);
  //ctx.drawImage(faceObject['oEye'].image, faceObject['oEye'].x2 + faceObject['oEye'].iSpr * faceObject['oEye'].w, faceObject['oEye'].y2, faceObject['oEye'].w, faceObject['oEye'].h, faceObject['oEye'].x + headPosX_onFacebuild, faceObject['oEye'].y + headPosY_onFacebuild, faceObject['oEye'].w, faceObject['oEye'].h);
  //ctx.drawImage(oMouth.image, oMouth.x2 + oMouth.iSpr * oMouth.w, oMouth.y2, oMouth.w, oMouth.h, oMouth.x + headPosX_onFacebuild, oMouth.y + headPosY_onFacebuild, oMouth.w, oMouth.h);


  // ctx3.drawImage(oBackground.image, oBackground.x2 + oBackground.iSpr * oBackground.w, oBackground.y2, oBackground.w, oBackground.h, oBackground.x, oBackground.y, oBackground.w, oBackground.h);
  // ctx3.drawImage(oBody.image, oBody.x2 + oBody.iSpr * oBody.w, oBody.y2, oBody.w, oBody.h, oBody.x, oBody.y, oBody.w, oBody.h);
  // ctx3.drawImage(oFoot.image, oFoot.x2 + oFoot.iSpr * oFoot.w, oFoot.y2, oFoot.w, oFoot.h, oFoot.x, oFoot.y, oFoot.w, oFoot.h);
  // ctx3.drawImage(oCloth.image, oCloth.x2 + oCloth.iSpr * oCloth.w, oCloth.y2, oCloth.w, oCloth.h, oCloth.x, oCloth.y, oCloth.w, oCloth.h);
  // ctx3.drawImage(oHead.image, oHead.x2 + oHead.iSpr * oHead.w, oHead.y2, oHead.w, oHead.h, oHead.x + headPosX, oHead.y + headPosY, oHead.w * headScale, oHead.h * headScale);
  // ctx3.drawImage(oEyebrow.image, oEyebrow.x2 + oEyebrow.iSpr * oEyebrow.w, oEyebrow.y2, oEyebrow.w, oEyebrow.h, oEyebrow.x + headPosX, oEyebrow.y + headPosY, oEyebrow.w * headScale, oEyebrow.h * headScale);
  // ctx3.drawImage(oEye.image, oEye.x2 + oEye.iSpr * oEye.w, oEye.y2, oEye.w, oEye.h, oEye.x + headPosX, oEye.y + headPosY, oEye.w * headScale, oEye.h * headScale);
  // ctx3.drawImage(oFringe.image, oFringe.x2 + oFringe.iSpr * oFringe.w, oFringe.y2, oFringe.w, oFringe.h, oFringe.x + headPosX, oFringe.y + headPosY, oFringe.w * headScale, oFringe.h * headScale);
  // ctx3.drawImage(oMouth.image, oMouth.x2 + oMouth.iSpr * oMouth.w, oMouth.y2, oMouth.w, oMouth.h, oMouth.x + headPosX, oMouth.y + headPosY, oMouth.w * headScale, oMouth.h * headScale);

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

function assetsPrepare(gender, callback) {

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

  //face Part
  var oEyesImage = new Image();
  oEyesImage.src = website_url + 'images/data/' + gender + '/eyes.png';
  oEyesImage.onload = function() {};
  var oMouthsImage = new Image();
  oMouthsImage.src = website_url + 'images/data/' + gender + '/mouths.png';
  oMouthsImage.onload = function() {};
  var oFaceImage = new Image();
  oFaceImage.src = website_url + 'images/data/' + gender + '/face.png';
  oFaceImage.onload = function() {};
  var oFringeImage = new Image();
  oFringeImage.src = website_url + 'images/data/' + gender + '/fringes.png';
  oFringeImage.onload = function() {};


  //body Part
  // var oBodyImage = new Image();
  // oBodyImage.src = website_url + 'images/data/' + gender + '/body.png';
  // oBodyImage.onload = function() {};
  // var oClothImage = new Image();
  // oClothImage.src = website_url + 'images/data/' + gender + '/cloth.png';
  // oClothImage.onload = function() {};
  // var oFootImage = new Image();
  // oFootImage.src = website_url + 'images/data/' + gender + '/foot.png';
  // oFootImage.onload = function() {};
  var oBackgroundImage = new Image();
  oBackgroundImage.src = website_url + 'images/data/' + gender + '/background.png';
  oBackgroundImage.onload = function() {};

  //face part object
  faceObject[0] = new Head(0, 0, 0, 0, 340, 340, oFaceImage);
  faceObject[1] = new Fringe(0, 0, 0, 0, 340, 340, oFringeImage);
  faceObject[2] = new Eye(0, 0, 0, 0, 340, 340, oEyesImage);
  faceObject[3] = new Mouth(0, 0, 0, 0, 340, 340, oMouthsImage);

  //body part object
  // oBody = new Body(0, 0, 0, 0, 340, 477, oBodyImage);
  // oCloth = new Cloth(0, 0, 0, 0, 340, 477, oClothImage);
  // // oLeg = new Leg(0,0,0,0,340,340,oLeg);
  // oFoot = new Foot(0, 0, 0, 0, 340, 477, oFootImage);
  bodyObject[0] = new Background(0, 0, 0, 0, 340, 340, oBackgroundImage);


  // loader = setInterval(function() {
  //   console.log(assetsItems.length);
  //   if (assetsItems.length == 9) {
  //
  //     clearInterval(loader);
  //     timer = setInterval(drawScene, 100);
  //     assetsItems = [];
  //     $.magnificPopup.close();
  //     callback();
  //   }
  //
  // }, 100);
  //refresh the canvas
  timer = setInterval(drawScene, 1000);
}

// function checkAssetsLoad(callback) {
//   console.log(assetsItems.length);
//   if (assetsItems.length == 9) {
//     clearInterval(loader);
//     timer = setInterval(drawScene, 100);
//     assetsItems = [];
//     $.magnificPopup.close();
//     callback;
//   }
// }

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
