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

function Body(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0;
  this.domEle = '.skip';
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
  this.domEle = '.clothSwiperType';
  this.putOn = ['ctx3'];

};

function Bag(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0;
  this.domEle = '.bagSwiperType';
  this.putOn = ['ctx5'];
}

function Shoes(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0;
  this.domEle = '.shoesSwiperType';
  this.putOn = ['ctx3'];

}

function checkPortrait() {
  if (document.documentElement.clientHeight > document.documentElement.clientWidth) {
    $('body').removeClass('portraitPls');
  } else {
    $('body').addClass('portraitPls');
  }
}


var bagInfo = {
  'female': [{
    hintX:70,
    hintY:250,
    html: "<div class='pale-popup mfp-with-anim text-center'><img src='../images/promo/brand1.png' class='brand' /> <img src='../images/promo/001.png' class='bag' /> <h3>Quilted Lth Small Margot Carryall</h3> <p>货号：36679 IME8B</p> <p>想了解产品详情，请至各大购物村官网的Coach专页</p> </div>"
  }, {
    hintX:70,
    hintY:250,
    html: "<div class='pale-popup mfp-with-anim text-center'><img src='../images/promo/brand1.png' class='brand' /> <img src='../images/promo/002.png' class='bag' /> <h3>Signature Mini Bennett Satchel</h3> <p>货号：36702 IME7P</p> <p>想了解产品详情，请至各大购物村官网的Coach专页</p> </div>"
  }, {
    hintX:70,
    hintY:250,
    html: "<div class='pale-popup mfp-with-anim text-center'><img src='../images/promo/brand1.png' class='brand' /> <img src='../images/promo/003.png' class='bag' /> <h3>Twisted Gathered Kelsey Satchel</h3> <p>货号：37082 IMBLK</p> <p>想了解产品详情，请至各大购物村官网的Coach专页</p> </div>"
  }, {
    hintX:70,
    hintY:250,
    html: "<div class='pale-popup mfp-with-anim text-center'><img src='../images/promo/brand1.png' class='brand' /> <img src='../images/promo/004.png' class='bag' /> <h3>Pebbled Leather Small Kelsey</h3> <p>货号：F37857SV/GM</p> <p>想了解产品详情，请至各大购物村官网的Coach专页</p> </div>"
  }, {
    hintX:70,
    hintY:250,
    html: "<div class='pale-popup mfp-with-anim text-center'><img src='../images/promo/brand1.png' class='brand' /> <img src='../images/promo/005.png' class='bag' /> <h3>Crossgrain Minetta</h3> <p>货号：F36642IMBLK</p> <p>想了解产品详情，请至各大购物村官网的Coach专页</p> </div>"
  }, {
    hintX:70,
    hintY:250,
    html: "<div class='pale-popup mfp-with-anim text-center'><img src='../images/promo/brand1.png' class='brand' /> <img src='../images/promo/006.png' class='bag' /> <h3>Floral Print Mini Christie</h3> <p>货号：F37421SV/M2</p> <p>想了解产品详情，请至各大购物村官网的Coach专页</p> </div>"
  }, {
    hintX:70,
    hintY:250,
    html: "<div class='pale-popup mfp-with-anim text-center'><img src='../images/promo/brand1.png' class='brand' /> <img src='../images/promo/007.png' class='bag' /> <h3>Pebbled Leather Large Wristlet 19</h3> <p>货号：F53340IMBLK</p> <p>想了解产品详情，请至各大购物村官网的Coach专页</p> </div>"
  }, {
    hintX:70,
    hintY:250,
    html: "<div class='pale-popup mfp-with-anim text-center'><img src='../images/promo/brand1.png' class='brand' /> <img src='../images/promo/008.png' class='bag' /> <h3>Exotic Trim Soft Wallet</h3> <p>货号：F53886SVER9</p> <p>想了解产品详情，请至各大购物村官网的Coach专页</p> </div>"
  }],
  'male': [{
    hintX:210,
    hintY:250,
    html: "<div class='pale-popup mfp-with-anim text-center'><img src='../images/promo/brand1.png' class='brand' /> <img src='../images/promo/009.png' class='bag' /> <h3>Small Sullivan Messenger </h3> <p>货号：F72108MID</p> <p>想了解产品详情，请至各大购物村官网的Coach专页</p> </div>"
  }, {
    hintX:210,
    hintY:240,
    html: "<div class='pale-popup mfp-with-anim text-center'><img src='../images/promo/brand1.png' class='brand' /> <img src='../images/promo/010.png' class='bag' /> <h3>Bowery Crossbody Sig PVC</h3> <p>货号：F71877CQ/BK</p> <p>想了解产品详情，请至各大购物村官网的Coach专页</p> </div>"
  }, {
    hintX:210,
    hintY:240,
    html: "<div class='pale-popup mfp-with-anim text-center'><img src='../images/promo/brand1.png' class='brand' /> <img src='../images/promo/011.png' class='bag' /> <h3>Bowery Crossbody</h3> <p>货号：F71842BLK</p> <p>想了解产品详情，请至各大购物村官网的Coach专页</p> </div>"
  }, {
    hintX:70,
    hintY:250,
    html: "<div class='pale-popup mfp-with-anim text-center'><img src='../images/promo/brand1.png' class='brand' /> <img src='../images/promo/012.png' class='bag' /> <h3>Campus Backpack in Signature PVC</h3> <p>货号：F71973CQ/BK</p> <p>想了解产品详情，请至各大购物村官网的Coach专页</p> </div>"
  }]
};



    var website_url = './';

    //get basic parameter from url
    var gender = 'female';

    //canvas face builder relate
    var canvas, ctx;
    var canvas2, ctx2;
    var oHead, oFringe, oEye, oMouth;
    var faceObject = [oHead, oFringe, oEye, oMouth];
    var oColors, oColorEyebrow, oColorEye, oColorTop, oColorBack;

    //canvas body builder relate 3-face, 4-boby, 5-bag
    var canvas3, ctx3;
    var canvas4, ctx4;
    var canvas5, ctx5;

    var canvas6, ctx6;

    var oBody, oCloth, oBag, oShoes, oBackground;
    var bodyObject = [oBackground, oBody,  oCloth, oBag , oShoes ]


    //adjust head on facebuild
    var faceCanvasWidth = 340;
    var faceCanvasHeight = 570;
    var headPosX_onFacebuild = 0;
    var headPosY_onFacebuild = 10;
    var headScaleW_onFacebuild = 1;
    var headScaleH_onFacebuild = 1;
    var headPosY_onFacebuild_onIphone4 = 0;

    //adjust head on bodybuild
    var bodyCanvasWidth = 340;
    var bodyCanvasHeight = 570;
    var headPosX_onBodybuild = 122;
    var headPosY_onBodybuild = 70;
    // var headScaleW_onBodybuild = 0.24;
    // var headScaleH_onBodybuild = 0.24;
    var headScaleW_onBodybuild = 0.22;
    var headScaleH_onBodybuild = 0.22;
    //adjust body on bodybuild
    var bodyPosX_onBodybuild = 0;
    var bodyPosY_onBodybuild = 0;
    var bodyScaleW_onBodybuild = 1;
    var bodyScaleH_onBodybuild = 1;

    //make wish
    var headScaleW_onMakeWishbuild = 1;
    var headScaleH_onMakeWishbuild = 1;
    var bodyScaleW_onMakeWishbuild = 1;
    var bodyScaleH_onMakeWishbuild = 1;




    var timer;
    var timer2;
    var loader;
    var userMsg = {
      context: '',
      text: $('#msg').val(),
      maxWidth: 280,
      lineHeight: 25,
      x: 320 / 2,
      y: 520,
      font: '25pt Calibri',
      fillStyle: '#8d7141'
    };
    var assetsItems = [];

    //unknow
    var iSel = 0;
    var app = {
      step: 0,
      scene: $('.scene'),
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
      faceOption: $('.faceOption'),
      bodyOption: $('.bodyOption'),
      bodyChoice: $('.bodyChoice'),
      bodyItem: $('.bodyItem').not('.ok'),
      bodyItemConfirm: $('.bodyItem').filter('.ok'),
      bodyItemHasBag: false,
      bodyItemCancelBag: $('.elementSwiper').find('.cancelBag'),
      bodyBagHint: $('.bagHint'),
      shareHint: $('.shareHint'),
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
            direction: 'vertical',
            swipeHandler: '.bala',
            autoHeight: false,
            setWrapperSize: true,
            onSlideChangeEnd: function(swiper, event) {
              elementIndex = swiper.activeIndex;
            }
          }

          app.faceItem.fadeIn(2000);
          app.prevStep.show();

          if (gender == "female") {
            app.femaleFaceSwiperLayer.show();
            app.maleFaceSwiperLayer.hide();
            app.faceOption.removeClass('male female').addClass('female');
            this.container.removeClass('male female').addClass('female');

            elementSwiper = new Swiper(app.femaleFaceSwiperLayer, elementonSlideChangeEnd);
          } else {
            app.maleFaceSwiperLayer.show();
            app.femaleFaceSwiperLayer.hide();
            app.faceOption.removeClass('male female').addClass('male');
            this.container.removeClass('male female').addClass('male');


            elementSwiper = new Swiper(app.maleFaceSwiperLayer, elementonSlideChangeEnd);
          }

          //adjust iphone 4 position of head
          if (document.documentElement.clientHeight < 500) {
            headPosY_onFacebuild = headPosY_onFacebuild_onIphone4;
          }

          //TODO: load gender setter
          var makeItLoad = function() {
            //load assets
            assetsPrepareForFace(gender, function() {
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

          //face action bar
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
          // console.log('step3')
          this.container.show().siblings().hide();
          //reset bag setting
          app.bodyItemHasBag = false;
          $(canvas5).hide();


          var $thisContainer = this.container;
          //face element swiper
          var elementSwiper;
          var elementIndex = 0;
          var elementonSlideInit = {
              direction: 'horizontal',
              setWrapperSize: true,
              autoHeight: true,
              spaceBetween: 5,
              // allowSwipeToPrev:false,
              // allowSwipeToNext:false,
              swipeHandler: '.bala',
              onInit: function(swiper, event) {
                elementIndex = app.bodyItem.eq(0).attr('data-draw-squence');
              }
            }
            //app.swiperLayer.hide();
          app.bodyItem.fadeIn(2000);
          if (gender == "female") {
            // console.log(gender);
            app.femaleBodySwiperLayer.show();
            app.maleBodySwiperLayer.hide();
            app.bodyOption.removeClass('male female').addClass('female');
            this.container.removeClass('male female').addClass('female');

            elementSwiper = new Swiper(app.femaleBodySwiperLayer, elementonSlideInit);
          } else {
            // console.log(gender);

            app.maleBodySwiperLayer.show();
            app.femaleBodySwiperLayer.hide();
            app.bodyOption.removeClass('male female').addClass('male');
            this.container.removeClass('male female').addClass('male');

            elementSwiper = new Swiper(app.maleBodySwiperLayer, elementonSlideInit);
          }
          //TODO: load gender setter
          var makeItLoad = function() {
            //load assets
            assetsPrepareForBody(gender, function() {
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

          if (app.bodyItemHasBag == true) {
            $(canvas5).show();
            app.bodyBagHint.show();
          } else {
            $(canvas5).hide();
            app.bodyBagHint.hide()
          }

          //body action bar
          app.bodyItem.on('click', function(e) {
            e.preventDefault();
            $(this).addClass('active').siblings().removeClass('active');
            $thisContainer.addClass('editMode');
             elementSwiper.slideTo($(this).attr('val'));
            elementIndex = $(this).attr('data-draw-squence');
            //elementSwiper.slideTo(elementIndex);

          //  console.log(elementIndex);

          });
          app.bodyItemConfirm.on('click', function(e) {
            e.preventDefault();
            $thisContainer.removeClass('editMode');
          });

          //body item element swiper
          for (var i = 0; i < bodyObject.length; i++) {
            var selector = '.' + gender + 'Body ' + bodyObject[i]['domEle'];
            if ($(selector).size() > 0) {
              var elementItemSize = $(selector).find('.swiper-slide').size();

              bodyObject[i]['instance'] = new Swiper(selector, {
                onSlideChangeStart: function(swiper) {
                  bodyObject[i]['iSpr'] = parseInt(swiper.activeIndex);
                },
                setWrapperSize: true,
                centeredSlides: false,
                slidesPerView: elementItemSize,
                direction: 'vertical',
                allowSwipeToPrev: false,
                allowSwipeToNext: false,
                onTap: function(swiper, event) {
                  bodyObject[elementIndex]['iSpr'] = parseInt(swiper.clickedIndex);
                  $(bodyObject[elementIndex]['instance']['clickedSlide']).removeClass('unselectItem').addClass('activeItem').siblings().removeClass('activeItem').addClass('unselectItem');
                }
              });
            }
          }
          //bag item
          bodyObject[3]['instance'].on('onTap', function(swiper) {
            app.bodyItemHasBag = true;
            $(canvas5).show();
          });
          app.bodyItemCancelBag.on('click', function() {
            app.bodyItemHasBag = false;
            $(canvas5).hide();
          });
          app.bodyBagHint.hide();
          //bag info
          app.bodyItemConfirm.on('click', function() {
            if (app.bodyItemHasBag == true) {
              //console.log('yes')


              var hintX = bagInfo[gender][bodyObject[3]['iSpr']]['hintX'];
              var hintY = bagInfo[gender][bodyObject[3]['iSpr']]['hintY'];
            //  console.log(hintX,hintY);

              app.bodyBagHint.css({
                left:hintX,
                top:hintY
              })


              app.bodyBagHint.show();
              new WOW().init();
            } else {
              //console.log('no')
              app.bodyBagHint.hide();
            }
          });

          //bag hint
          app.bodyBagHint.on('click', function() {
            var selectBagHTML = bagInfo[gender][bodyObject[3]['iSpr']]['html'];

            $.magnificPopup.open({
              mainClass: 'bag-info-popup mfp-3d-unfold',
              items: {
                src: '<div>' + selectBagHTML + '</div>'
              },
              showCloseBtn: true,
              closeBtnInside: true,
              closeMarkup: '<img src="../images/x.png" class="mfp-close" />',
              tError: '<a href="%url%">The content</a> could not be loaded.',
              type: 'inline'
            });
          });

        }
      }, {
        //step4. put message on final result
        container: $('.makeWish'),
        stepFunction: function() {
          //app.swiperLayer.hide();
          this.container.show().siblings().hide();

        }
      }, {
        //step5. leave contact info and preview
        container: $('.contactInfo'),
        stepFunction: function() {
          this.container.show().siblings().hide();
          exportResult()

        }
      }, {
        //step6. share result
        container: $('.share'),
        stepFunction: function() {
          this.container.show().siblings().hide();



          //bag hint
          app.shareHint.on('click', function() {

            $.magnificPopup.open({
              mainClass: 'share-info-popup mfp-3d-unfold',
              items: {
                src: '<div></div>'
              },
              tError: '<a href="%url%">The content</a> could not be loaded.',
              type: 'inline'
            });
          });



        }
      }]
    }



    function clearFace() {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);

    }

    function clearBody() {
      ctx3.clearRect(0, 0, ctx3.canvas.width, ctx3.canvas.height);
      ctx4.clearRect(0, 0, ctx4.canvas.width, ctx4.canvas.height);
      ctx5.clearRect(0, 0, ctx5.canvas.width, ctx5.canvas.height);
    }

    function drawFaceScene() {
      clearFace();

      //ctx bg>head>eyebrow>eye>fringe>mouth
      for (var i = 0; i < faceObject.length; i++) {
        //face builder
        if (faceObject[i].putOn[0] == 'ctx1') {
          ctx.drawImage(
            faceObject[i]['image'],
            faceObject[i].x2 + faceObject[i].iSpr * faceObject[i].w,
            faceObject[i].y2,
            faceObject[i].w,
            faceObject[i].h,
            faceObject[i].x + headPosX_onFacebuild,
            faceObject[i].y + headPosY_onFacebuild,
            faceObject[i].w * headScaleW_onFacebuild,
            faceObject[i].h * headScaleH_onFacebuild);
        }
        if (faceObject[i].putOn[0] == 'ctx2') {
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
      }

    }
    var img = new Image()
    function drawBodyScene() {
      clearBody();

      for (var i = 0; i < bodyObject.length; i++) {

        /// step 1
        var temp_canvas = document.createElement('canvas');
        var temp_ctx = temp_canvas.getContext('2d');
        var temp_canvas2 = document.createElement('canvas');
        var temp_ctx2 = temp_canvas2.getContext('2d');
        var temp_canvas3 = document.createElement('canvas');
        var temp_ctx3 = temp_canvas2.getContext('2d');

        //var img = new Image();
        temp_canvas.width = 320;
        temp_canvas.height = 570;
        temp_canvas2.width = 320 * 0.5;
        temp_canvas2.height = 570 * 0.5;
        temp_canvas3.width = 320 * 0.5 * 0.5 ;
        temp_canvas3.height = 570 * 0.5 * 0.5 ;

        //// logic 1
        temp_ctx.drawImage(canvas, 0, 0, temp_canvas.width, temp_canvas.height, 0, 0, temp_canvas2.width, temp_canvas2.height);
        temp_ctx.drawImage(canvas2, 0, 0, temp_canvas.width, temp_canvas.height, 0, 0, temp_canvas2.width, temp_canvas2.height);

        // var imgData = temp_ctx.getImageData(0, 0, temp_canvas.width, temp_canvas.height);
        // var imgUrlData = temp_canvas.toDataURL("image/png", 1.0);
        // img.src = imgUrlData;
        temp_ctx2.drawImage(temp_canvas, 0, 0, temp_canvas2.width, temp_canvas2.height, 0, 0, temp_canvas3.width, temp_canvas3.height);

        var imgUrlData2 = temp_canvas2.toDataURL("image/png",1.0);
        img.src = imgUrlData2;
        $("#face_result").attr('src',imgUrlData2);

        // ctx4.drawImage(canvas, 0, 0, bodyCanvasWidth, bodyCanvasHeight, headPosX_onBodybuild, headPosY_onBodybuild, faceCanvasWidth * headScaleW_onBodybuild, faceCanvasHeight * headScaleH_onBodybuild);
        // ctx4.drawImage(canvas2, 0, 0, bodyCanvasWidth, bodyCanvasHeight, headPosX_onBodybuild, headPosY_onBodybuild, faceCanvasWidth * headScaleW_onBodybuild, faceCanvasHeight * headScaleH_onBodybuild);


        //body builder
        if (bodyObject[i].putOn[0] == 'ctx3') {
          ctx3.drawImage(

            bodyObject[i].image,
            bodyObject[i].x2 + bodyObject[i].iSpr * bodyObject[i].w,
            bodyObject[i].y2,
            bodyObject[i].w * 1,
            bodyObject[i].h * 1,
            bodyObject[i].x + bodyPosX_onBodybuild,
            bodyObject[i].y + bodyPosY_onBodybuild,
            bodyObject[i].w * bodyScaleW_onBodybuild,
            bodyObject[i].h * bodyScaleH_onBodybuild);
        }
        //bag layer
        if (bodyObject[i].putOn[0] == 'ctx5') {
          ctx5.drawImage(
            bodyObject[i].image,
            bodyObject[i].x2 + bodyObject[i].iSpr * bodyObject[i].w,
            bodyObject[i].y2,
            bodyObject[i].w * 1,
            bodyObject[i].h * 1,
            bodyObject[i].x + bodyPosX_onBodybuild,
            bodyObject[i].y + bodyPosY_onBodybuild,
            bodyObject[i].w * bodyScaleW_onBodybuild,
            bodyObject[i].h * bodyScaleH_onBodybuild);
        }
      }


      //ctx6 is final result
      //face on result

      ctx6.drawImage(canvas3, 0, 0, bodyCanvasWidth, bodyCanvasHeight, 0, 0, bodyCanvasWidth * bodyScaleW_onMakeWishbuild, bodyCanvasHeight * bodyScaleH_onMakeWishbuild);
      ctx6.drawImage(canvas4, 0, 0, bodyCanvasWidth, bodyCanvasHeight, 0, 0, bodyCanvasWidth * bodyScaleW_onMakeWishbuild, bodyCanvasHeight * bodyScaleH_onMakeWishbuild);
      if (app.bodyItemHasBag==true){
        ctx6.drawImage(canvas5, 0, 0, bodyCanvasWidth, bodyCanvasHeight, 0, 0, bodyCanvasWidth * bodyScaleW_onMakeWishbuild, bodyCanvasHeight * bodyScaleH_onMakeWishbuild);
      }
      //console.log(bodyCanvasHeight);

      ctx6.drawImage(temp_canvas2, 0, 0, temp_canvas3.width, temp_canvas3.height, headPosX_onBodybuild, headPosY_onBodybuild, temp_canvas3.width, temp_canvas3.height);


    }

    function exportResult() {
      //put wish on ctx6
      userMsg.text = $('#msg').val();
      userMsg.context = ctx6;
      ctx6.font = userMsg.font;
      ctx6.fillStyle = userMsg.fillStyle;
      wrapText(userMsg.context, userMsg.text, userMsg.x, userMsg.y, userMsg.maxWidth, userMsg.lineHeight);


      var temp_ctx, temp_canvas;
      temp_canvas = document.createElement('canvas');
      temp_ctx = temp_canvas.getContext('2d');
      temp_canvas.width = bodyCanvasWidth;
      temp_canvas.height = bodyCanvasHeight;
      var zdata = ctx6.getImageData(0, 0, bodyCanvasWidth, bodyCanvasHeight);

      //var data = zdata.data;
      //temp_ctx.putImageData(zdata, 0, 0);
      //zdata2 = ctx4.getImageData(5, 5, 330, 477);


      temp_ctx.putImageData(zdata, 0, 0);
      var vData = temp_canvas.toDataURL("image/jpeg", 1.0);
      $('#body_result').attr('src', vData);
      $('#share_result').attr('src', vData);

      //sendResultToServer(vData);
    };

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
      context.textAlign = "center";
      context.fillText(line, x, y);
    };

    //function for build faceItem
    function assetsPrepareForFace(gender, callback) {


      if (typeof(timer) == 'number') {
        clearInterval(timer);
      }

      //canvas
      canvas = document.getElementById('scene');
      ctx = canvas.getContext('2d');
      canvas2 = document.getElementById('scene2');
      ctx2 = canvas2.getContext('2d');

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

      //face part object
      faceObject[0] = new Head(0, 20, 0, 0, faceCanvasWidth, 200, oFaceImage);
      faceObject[1] = new Fringe(0, -60, 0, 0, faceCanvasWidth, 500, oFringeImage);
      faceObject[2] = new Eye(0, 20, 0, 0, faceCanvasWidth, 200, oEyesImage);
      faceObject[3] = new Mouth(0, 20, 0, 0, faceCanvasWidth, 200, oMouthsImage);

      timer = setInterval(drawFaceScene, 100);
    }

    //function for build bodyItem
    function assetsPrepareForBody(gender, callback) {
      if (typeof(timer) == 'number') {
        clearInterval(timer2);
      }
      canvas3 = document.getElementById('scene3');
      ctx3 = canvas3.getContext('2d');
      canvas4 = document.getElementById('scene4');
      ctx4 = canvas4.getContext('2d');
      canvas5 = document.getElementById('scene5');
      ctx5 = canvas5.getContext('2d');
      canvas6 = document.getElementById('scene6');
      ctx6 = canvas6.getContext('2d');

      //body Part
      var oBackgroundImage = new Image();
      oBackgroundImage.src = website_url + 'images/data/background.png';
      oBackgroundImage.onload = function() {};
      var oBodyImage = new Image();
      oBodyImage.src = website_url + 'images/data/' + gender + '/body.png';
      oBodyImage.onload = function() {};
      var oClothImage = new Image();
      oClothImage.src = website_url + 'images/data/' + gender + '/cloth.png';
      oClothImage.onload = function() {};
      var oBagImage = new Image();
      oBagImage.src = website_url + 'images/data/' + gender + '/bag.png';
      oBagImage.onload = function() {};
      var oShoesImage = new Image();
      oShoesImage.src = website_url + 'images/data/' + gender + '/shoes.png';
      oShoesImage.onload = function() {};

      //body part object
      bodyObject[0] = new Background(0, 0, 0, 0, bodyCanvasWidth, bodyCanvasHeight, oBackgroundImage);
      bodyObject[1] = new Body(0, 0, 0, 0, bodyCanvasWidth, bodyCanvasHeight, oBodyImage);
      bodyObject[2] = new Cloth(0, 0, 0, 0, bodyCanvasWidth, bodyCanvasHeight, oClothImage);
      bodyObject[3] = new Bag(0, 0, 0, 0, bodyCanvasWidth, bodyCanvasHeight, oBagImage);
      bodyObject[4] = new Shoes(0, 0, 0, 0, bodyCanvasWidth, bodyCanvasHeight, oShoesImage);

      timer2 = setInterval(drawBodyScene, 100);

    };

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

          //app['stepProgram'][app.step]['stepFunction']();

          //this.container.show().siblings().hide();
          //console.log(app.scene);

          app.scene.eq(app.step).show().siblings().hide();

        }
      });



      // if ($('#share_result').size() > 0) {
      //   //console.log('test');
      //   app['stepProgram'][6]['stepFunction']();
      //
      // } else {
      //   //init the first step
      //   //app['stepProgram'][app.step]['stepFunction']();
      //   app['stepProgram'][app.step]['stepFunction']();
      // }

      app['stepProgram'][app.step]['stepFunction']();


    });
