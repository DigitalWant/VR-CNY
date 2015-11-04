/**
 * Face Builder v1.0.4
 * http://codecanyon.net/user/AramisGC
 * http://www.script-tutorials.com/
 *
 * Copyright (c) 2013-2014, Andrey Prikaznov
 * All rights reserved.
*/
var website_url = './';

//get basic parameter from url
var str = window.location.search;
var patt1 = new RegExp("gender=male");
var gender = patt1.test(str) ? 'male/': 'female/';

//canvas face builder relate
var canvas, ctx;
var canvas2, ctx2;
var oHead, oFringe, oEyebrow, oEye, oMouth, oTop;
var oColors, oColorEyebrow, oColorEye, oColorTop, oColorBack;

//canvas body builder relate
var canvas3, ctx3;

var oBody, oCloth, oLeg, oFoot, oAccessory, oBackground;

var headScale = 0.30;
var headPosX = 125;
var headPosY = 10;

//unknow
var iSel = 0;


function sendResultToServer(vData) {
    $('.scene .loading').show();
    $.post(
        website_url + 'accept_avatar.php',
        {
            data: vData
        },
        function(aData) {

            if (aData) {
                $('.result').fadeOut(1000, function () {
                    var result = '<hr /><div class="container"><h2>Result is:</h2><img src="cache/result'+aData+'.jpg" /><button class="button download" onclick="window.open(\'cache/result'+aData+'.jpg\');">download result image</button>'+
                    '<button class="button" onclick="$(\'.send_email\').toggle();">Send by Email</button>'+
                    '<form method="post" action="email.php" class="send_email"><input name="file" value="'+aData+'" type="hidden" />'+
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
  //  ctx4.clearRect(0, 0, ctx4.canvas.width, ctx4.canvas.height);
}

function drawScene() {
    clear();

    //ctx bg>head>eyebrow>eye>fringe>mouth
    ctx.drawImage(oBackground.image, oBackground.x2 + oBackground.iSpr * oBackground.w, oBackground.y2, oBackground.w, oBackground.h, oBackground.x, oBackground.y, oBackground.w, oBackground.h);
    ctx.drawImage(oHead.image, oHead.x2 + oHead.iSpr * oHead.w, oHead.y2, oHead.w, oHead.h, oHead.x, oHead.y, oHead.w, oHead.h);
    //ctx.drawImage(oTop.image, oTop.x2 + oTop.iSpr * oTop.w, oTop.y2, oTop.w, oTop.h, oTop.x, oTop.y, oTop.w, oTop.h);
    ctx.drawImage(oEyebrow.image, oEyebrow.x2 + oEyebrow.iSpr * oEyebrow.w, oEyebrow.y2, oEyebrow.w, oEyebrow.h, oEyebrow.x, oEyebrow.y, oEyebrow.w, oEyebrow.h);
    ctx.drawImage(oEye.image, oEye.x2 + oEye.iSpr * oEye.w, oEye.y2, oEye.w, oEye.h, oEye.x, oEye.y, oEye.w, oEye.h);
    ctx.drawImage(oMouth.image, oMouth.x2 + oMouth.iSpr * oMouth.w, oMouth.y2, oMouth.w, oMouth.h, oMouth.x, oMouth.y, oMouth.w, oMouth.h);

    //ctx2
    ctx2.drawImage(oFringe.image, oFringe.x2 + oFringe.iSpr * oFringe.w, oFringe.y2, oFringe.w, oFringe.h, oFringe.x, oFringe.y, oFringe.w, oFringe.h);

    //ctx3 bg>body>foot>cloth>head>eyebrow>eye>fringe>mouth
    ctx3.drawImage(oBackground.image, oBackground.x2 + oBackground.iSpr * oBackground.w, oBackground.y2, oBackground.w, oBackground.h, oBackground.x, oBackground.y, oBackground.w, oBackground.h);
    ctx3.drawImage(oBody.image, oBody.x2 + oBody.iSpr * oBody.w, oBody.y2, oBody.w, oBody.h, oBody.x, oBody.y, oBody.w, oBody.h);
    ctx3.drawImage(oFoot.image, oFoot.x2 + oFoot.iSpr * oFoot.w, oFoot.y2, oFoot.w, oFoot.h, oFoot.x, oFoot.y, oFoot.w, oFoot.h);
    ctx3.drawImage(oCloth.image, oCloth.x2 + oCloth.iSpr * oCloth.w, oCloth.y2, oCloth.w, oCloth.h, oCloth.x, oCloth.y, oCloth.w, oCloth.h);
    ctx3.drawImage(oHead.image, oHead.x2 + oHead.iSpr * oHead.w, oHead.y2, oHead.w, oHead.h, oHead.x+headPosX, oHead.y+headPosY, oHead.w*headScale, oHead.h*headScale);
    ctx3.drawImage(oEyebrow.image, oEyebrow.x2 + oEyebrow.iSpr * oEyebrow.w, oEyebrow.y2, oEyebrow.w, oEyebrow.h, oEyebrow.x+headPosX, oEyebrow.y+headPosY, oEyebrow.w*headScale, oEyebrow.h*headScale);
    ctx3.drawImage(oEye.image, oEye.x2 + oEye.iSpr * oEye.w, oEye.y2, oEye.w, oEye.h, oEye.x+headPosX, oEye.y+headPosY, oEye.w*headScale, oEye.h*headScale);
    ctx3.drawImage(oFringe.image, oFringe.x2 + oFringe.iSpr * oFringe.w, oFringe.y2, oFringe.w, oFringe.h, oFringe.x+headPosX, oFringe.y+headPosY, oFringe.w*headScale, oFringe.h*headScale);
    ctx3.drawImage(oMouth.image, oMouth.x2 + oMouth.iSpr * oMouth.w, oMouth.y2, oMouth.w, oMouth.h, oMouth.x+headPosX, oMouth.y+headPosY, oMouth.w*headScale, oMouth.h*headScale);
}

function exportResult() {
    var temp_ctx, temp_canvas;
    temp_canvas = document.createElement('canvas');
    temp_ctx = temp_canvas.getContext('2d');
    temp_canvas.width = 330;
    temp_canvas.height = 330;
    var zdata = ctx3.getImageData(5, 5, 330, 477);
    var data = zdata.data;
    temp_ctx.putImageData(zdata, 0, 0);
    zdata2 = ctx3.getImageData(5, 5, 330, 477);


    temp_ctx.putImageData(zdata2, 0, 0);
    var vData = temp_canvas.toDataURL("image/jpeg", 1.0);
    $('#face_result').attr('src', vData);
    sendResultToServer(vData)
}

$(function() {


    //canvas
    canvas = document.getElementById('scene');
    ctx = canvas.getContext('2d');
    canvas2 = document.getElementById('scene2');
    ctx2 = canvas2.getContext('2d');
    canvas3 = document.getElementById('scene3');
    ctx3 = canvas3.getContext('2d');

    //face Part
    var oEyesImage = new Image();
    oEyesImage.src = website_url + 'data/'+gender+'eyes.png';
    oEyesImage.onload = function() {};
    var oEyebrowImage = new Image();
    oEyebrowImage.src = website_url + 'data/'+gender+'eyebrow.png';
    oEyebrowImage.onload = function() {};
    var oMouthsImage = new Image();
    oMouthsImage.src = website_url + 'data/'+gender+'mouths.png';
    oMouthsImage.onload = function() {};
    var oFaceImage = new Image();
    oFaceImage.src = website_url + 'data/'+gender+'face.png';
    oFaceImage.onload = function() {};
    var oFringeImage = new Image();
    oFringeImage.src = website_url + 'data/'+gender+'fringes.png';
    oFringeImage.onload = function() {};
    var oTopsImage = new Image();
    oTopsImage.src = website_url + 'data/'+gender+'tops.png';
    oTopsImage.onload = function() {};

    //body Part
    var oBodyImage = new Image();
    oBodyImage.src = website_url + 'data/' + gender + 'body.png';
    oBodyImage.onload = function(){};
    var oClothImage = new Image();
    oClothImage.src = website_url + 'data/' + gender + 'cloth.png';
    oClothImage.onload = function(){};
    // var oLegImage = new Image();
    // oLegImage.src = website_url + 'data/' + gender + 'leg.png';
    // oLegImage.onload = function(){};
    var oFootImage = new Image();
    oFootImage.src = website_url + 'data/' + gender + 'foot.png';
    oFootImage.onload = function(){};
    var oBackgroundImage = new Image();
    oBackgroundImage.src = website_url + 'data/' + gender + 'background.png';
    oBackgroundImage.onload = function(){};



    //face part object
    oHead = new Head(0, 0, 0, 0, 340, 340, oFaceImage);
    oFringe = new Fringe(0, 0, 0, 0, 340, 340, oFringeImage);
    oEye = new Eye(0, 0, 0, 0, 340, 340, oEyesImage);
    oEyebrow = new Eyebrow(0, 0, 0, 0, 340, 340, oEyebrowImage);
    oMouth = new Mouth(0, 0, 0, 0, 340, 340, oMouthsImage);
    oTop = new Top(0, 0, 0, 0, 340, 340, oTopsImage);

    //body part object
    oBody = new Body(0,0,0,0,340,477,oBodyImage);
    oCloth = new Cloth(0,0,0,0,340,477,oClothImage);
    // oLeg = new Leg(0,0,0,0,340,340,oLeg);
    oFoot = new Foot(0,0,0,0,340,477,oFootImage);
    oBackground = new Background(0,0,0,0,340,340,oBackgroundImage);

    //refresh the canvas
    setInterval(drawScene, 100);
    //swiper
    var faceSwiper = new Swiper('.faceSwiper', {
      onSlideChangeStart: function(swiper) {
        console.log('test');
      }
    });
    $('.aside a').on('click',function(e){
      e.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      faceSwiper.slideTo($(this).attr('val'));
    });

    //face type swiper
    var fringeSwiperType = new Swiper('.fringeSwiperType',{
      onSlideChangeStart:function(swiper){
        oFringe.iSpr = parseInt(swiper.activeIndex);
      }
    });
    var eyebrowSwiperType = new Swiper('.eyebrowSwiperType',{
      onSlideChangeStart:function(swiper){
        oEyebrow.iSpr = parseInt(swiper.activeIndex);
      }
    });
    var eyeSwiperType = new Swiper('.eyeSwiperType',{
      onSlideChangeStart:function(swiper){
        oEye.iSpr = parseInt(swiper.activeIndex);
      }
    });
    var mouthSwiperType = new Swiper('.mouthSwiperType',{
      onSlideChangeStart:function(swiper){
        oMouth.iSpr = parseInt(swiper.activeIndex);
      }
    })



    //iSpr : index SpreadSheet
    $('#eye .type .set div').click(function() {
        oEye.iSpr = parseInt($(this).attr('val'))
    });
    $('#eyebrow .type .set div').click(function() {
        oEyebrow.iSpr = parseInt($(this).attr('val'))
    });
    $('#mouth .type .set div').click(function() {
        oMouth.iSpr = parseInt($(this).attr('val'))
    });
    $('#top .type .set div').click(function() {
        oTop.iSpr = parseInt($(this).attr('val'))
    });
    $('#fringe .type .set div').click(function() {
        oFringe.iSpr = parseInt($(this).attr('val'))
    });
    $('#skin .color .set div').click(function() {
        oHead.iSpr = parseInt($(this).attr('val'))
    });


    //cloth foot accesory bag background
    $('#cloth .type .set div').click(function() {
        oCloth.iSpr = parseInt($(this).attr('val'))
    });
    $('#foot .type .set div').click(function() {
        oFoot.iSpr = parseInt($(this).attr('val'))
    });

    $('#background .type .set div').click(function() {
        oBackground.iSpr = parseInt($(this).attr('val'))
    });


    $('#generate button').click(function() {
        exportResult()
    })
});
