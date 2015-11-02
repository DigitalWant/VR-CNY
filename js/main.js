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
var canvas4, ctx4;
var oBody, oCloth, oLeg, oFoot, oAccessory, oBackground;

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

function Colors() {
    this.iPos = 0;
    this.aSets = new Array();
    this.aSets[1] = new Array();
    this.aSets[1][0] = [255, 255, 153];
    this.aSets[1][1] = [255, 211, 81];
    this.aSets[1][2] = [255, 153, 0];
    this.aSets[2] = new Array();
    this.aSets[2][0] = [102, 204, 255];
    this.aSets[2][1] = [10, 169, 254];
    this.aSets[2][2] = [1, 107, 186];
    this.aSets[3] = new Array();
    this.aSets[3][0] = [255, 204, 0];
    this.aSets[3][1] = [255, 153, 0];
    this.aSets[3][2] = [204, 82, 0];
    this.aSets[4] = new Array();
    this.aSets[4][0] = [255, 102, 0];
    this.aSets[4][1] = [204, 82, 0];
    this.aSets[4][2] = [157, 63, 0];
    this.aSets[5] = new Array();
    this.aSets[5][0] = [198, 0, 39];
    this.aSets[5][1] = [157, 0, 32];
    this.aSets[5][2] = [106, 0, 21];
    this.aSets[6] = new Array();
    this.aSets[6][0] = [106, 0, 21];
    this.aSets[6][1] = [53, 0, 11];
    this.aSets[6][2] = [0, 0, 0];
    this.aSets[7] = new Array();
    this.aSets[7][0] = [230, 153, 177];
    this.aSets[7][1] = [215, 91, 132];
    this.aSets[7][2] = [198, 0, 79];
    this.aSets[8] = new Array();
    this.aSets[8][0] = [221, 0, 88];
    this.aSets[8][1] = [155, 0, 62];
    this.aSets[8][2] = [113, 0, 45];
    this.aSets[9] = new Array();
    this.aSets[9][0] = [210, 168, 219];
    this.aSets[9][1] = [188, 125, 202];
    this.aSets[9][2] = [124, 56, 139];
    this.aSets[10] = new Array();
    this.aSets[10][0] = [90, 46, 90];
    this.aSets[10][1] = [62, 32, 62];
    this.aSets[10][2] = [47, 23, 47];
    this.aSets[11] = new Array();
    this.aSets[11][0] = [202, 228, 255];
    this.aSets[11][1] = [147, 201, 255];
    this.aSets[11][2] = [74, 165, 255];
    this.aSets[12] = new Array();
    this.aSets[12][0] = [0, 34, 153];
    this.aSets[12][1] = [0, 24, 98];
    this.aSets[12][2] = [0, 10, 40];
    this.aSets[13] = new Array();
    this.aSets[13][0] = [0, 213, 154];
    this.aSets[13][1] = [0, 151, 109];
    this.aSets[13][2] = [0, 102, 74];
    this.aSets[14] = new Array();
    this.aSets[14][0] = [172, 206, 121];
    this.aSets[14][1] = [131, 175, 65];
    this.aSets[14][2] = [85, 113, 43];
    this.aSets[15] = new Array();
    this.aSets[15][0] = [0, 102, 0];
    this.aSets[15][1] = [0, 51, 0];
    this.aSets[15][2] = [0, 0, 0];
    this.aSets[16] = new Array();
    this.aSets[16][0] = [216, 173, 109];
    this.aSets[16][1] = [200, 141, 53];
    this.aSets[16][2] = [145, 102, 38];
    this.aSets[17] = new Array();
    this.aSets[17][0] = [115, 77, 53];
    this.aSets[17][1] = [82, 54, 37];
    this.aSets[17][2] = [35, 23, 16];
    this.aSets[18] = new Array();
    this.aSets[18][0] = [68, 46, 32];
    this.aSets[18][1] = [35, 23, 16];
    this.aSets[18][2] = [0, 0, 0];
    this.aSets[19] = new Array();
    this.aSets[19][0] = [134, 107, 98];
    this.aSets[19][1] = [90, 73, 67];
    this.aSets[19][2] = [49, 39, 36];
    this.aSets[20] = new Array();
    this.aSets[20][0] = [138, 60, 60];
    this.aSets[20][1] = [97, 41, 41];
    this.aSets[20][2] = [74, 32, 32];
    this.aSets[21] = new Array();
    this.aSets[21][0] = [74, 32, 32];
    this.aSets[21][1] = [33, 14, 14];
    this.aSets[21][2] = [0, 0, 0];
    this.aSets[22] = new Array();
    this.aSets[22][0] = [153, 153, 153];
    this.aSets[22][1] = [102, 102, 102];
    this.aSets[22][2] = [51, 51, 51];
    this.aSets[23] = new Array();
    this.aSets[23][0] = [64, 53, 56];
    this.aSets[23][1] = [40, 33, 41];
    this.aSets[23][2] = [0, 0, 0]
}

//face part model
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

//body part model
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
}

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

function Accessory(x, y, x2, y2, w, h, image) {
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.w = w;
  this.h = h;
  this.image = image;
  this.iSpr = 0
};


//reset
function clear() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);
    ctx3.clearRect(0, 0, ctx3.canvas.width, ctx3.canvas.height);
  //ctx4.clearRect(0, 0, ctx4.canvas.width, ctx4.canvas.height);
}

//canvas draw

function drawScene() {
    clear();
    //ctx
    ctx.drawImage(oHead.image, oHead.x2 + oHead.iSpr * oHead.w, oHead.y2, oHead.w, oHead.h, oHead.x, oHead.y, oHead.w, oHead.h);
    ctx.drawImage(oTop.image, oTop.x2 + oTop.iSpr * oTop.w, oTop.y2, oTop.w, oTop.h, oTop.x, oTop.y, oTop.w, oTop.h);
    if (oColorTop.iPos > 0) {
        var iCp = oColorTop.iPos;
        var zdata = ctx.getImageData(0, 252, 340, 88);
        var data = zdata.data;
        for (var i = 0, n = data.length; i < n; i += 4) {
            if (data[i] < 253 && data[i + 1] < 253 && data[i + 2] < 253 && data[i] > 120 && data[i + 1] > 120 && data[i + 2] > 120 && data[i] != 218 && data[i + 1] != 218 && data[i + 2] != 218) {
                data[i] = (oColorTop.aSets[iCp][1][0] / 255) * data[i];
                data[i + 1] = (oColorTop.aSets[iCp][1][1] / 255) * data[i + 1];
                data[i + 2] = (oColorTop.aSets[iCp][1][2] / 255) * data[i + 2];
                data[i + 3] = 255
            }
        }
        ctx.putImageData(zdata, 0, 252)
    }
    ctx.drawImage(oEyebrow.image, oEyebrow.x2 + oEyebrow.iSpr * oEyebrow.w, oEyebrow.y2, oEyebrow.w, oEyebrow.h, oEyebrow.x, oEyebrow.y, oEyebrow.w, oEyebrow.h);
    if (oColorEyebrow.iPos > 0) {
        var iCp = oColorEyebrow.iPos;
        var zdata = ctx.getImageData(0, 110, 340, 60);
        var data = zdata.data;
        for (var i = 0, n = data.length; i < n; i += 4) {
            if (data[i] == 255 && data[i + 1] == 255 && data[i + 2] == 255) {
                data[i] = (oColorEyebrow.aSets[iCp][1][0] / 255) * data[i];
                data[i + 1] = (oColorEyebrow.aSets[iCp][1][1] / 255) * data[i + 1];
                data[i + 2] = (oColorEyebrow.aSets[iCp][1][2] / 255) * data[i + 2];
                data[i + 3] = 255
            }
        }
        ctx.putImageData(zdata, 0, 110)
    }
    ctx.drawImage(oEye.image, oEye.x2 + oEye.iSpr * oEye.w, oEye.y2, oEye.w, oEye.h, oEye.x, oEye.y, oEye.w, oEye.h);
    if (oColorEye.iPos > 0) {
        var iCp = oColorEye.iPos;
        var zdata = ctx.getImageData(90, 130, 160, 100);
        var data = zdata.data;
        for (var i = 0, n = data.length; i < n; i += 4) {
            if (data[i] < 253 && data[i + 1] < 253 && data[i + 2] < 253 && data[i] > 120 && data[i + 1] > 120 && data[i + 2] > 120 && data[i] != 218 && data[i + 1] != 218 && data[i + 2] != 218) {
                data[i] = (oColorEye.aSets[iCp][1][0] / 255) * data[i];
                data[i + 1] = (oColorEye.aSets[iCp][1][1] / 255) * data[i + 1];
                data[i + 2] = (oColorEye.aSets[iCp][1][2] / 255) * data[i + 2];
                data[i + 3] = 255
            }
        }
        ctx.putImageData(zdata, 90, 130)
    }
    if (oColorBack.iPos > 0) {
        var iCp = oColorBack.iPos;
        var zdata = ctx.getImageData(3, 3, 335, 335);
        var data = zdata.data;
        for (var i = 0, n = data.length; i < n; i += 4) {
            if (data[i] == 254 && data[i + 1] == 254 && data[i + 2] == 254) {
                data[i] = (oColorBack.aSets[iCp][1][0]);
                data[i + 1] = (oColorBack.aSets[iCp][1][1]);
                data[i + 2] = (oColorBack.aSets[iCp][1][2]);
                data[i + 3] = 255
            }
        }
        ctx.putImageData(zdata, 2, 2)
    }
    //ctx2
    ctx2.drawImage(oFringe.image, oFringe.x2 + oFringe.iSpr * oFringe.w, oFringe.y2, oFringe.w, oFringe.h, oFringe.x, oFringe.y, oFringe.w, oFringe.h);
    if (oColors.iPos > 0) {
        var iCp = oColors.iPos;
        var zdata = ctx2.getImageData(0, 0, 340, 340);
        var data = zdata.data;
        for (var i = 0, n = data.length; i < n; i += 4) {
            if (data[i] == 255 && data[i + 1] == 255 && data[i + 2] == 255) {
                data[i] = oColors.aSets[iCp][0][0];
                data[i + 1] = oColors.aSets[iCp][0][1];
                data[i + 2] = oColors.aSets[iCp][0][2];
                data[i + 3] = 255
            } else if (data[i] == 195 && data[i + 1] == 195 && data[i + 2] == 195) {
                data[i] = oColors.aSets[iCp][1][0];
                data[i + 1] = oColors.aSets[iCp][1][1];
                data[i + 2] = oColors.aSets[iCp][1][2];
                data[i + 3] = 255
            } else if (data[i] == 153 && data[i + 1] == 153 && data[i + 2] == 153) {
                data[i] = oColors.aSets[iCp][2][0];
                data[i + 1] = oColors.aSets[iCp][2][1];
                data[i + 2] = oColors.aSets[iCp][2][2];
                data[i + 3] = 255
            } else if (data[i] < 255 && data[i + 1] < 255 && data[i + 2] < 255 && data[i] > 58 && data[i + 1] > 58 && data[i + 2] > 58) {
                data[i] = (oColors.aSets[iCp][1][0] / 255) * data[i];
                data[i + 1] = (oColors.aSets[iCp][1][1] / 255) * data[i + 1];
                data[i + 2] = (oColors.aSets[iCp][1][2] / 255) * data[i + 2];
                data[i + 3] = 255
            }
        }
        ctx2.putImageData(zdata, 0, 0)
    }
    ctx.drawImage(oMouth.image, oMouth.x2 + oMouth.iSpr * oMouth.w, oMouth.y2, oMouth.w, oMouth.h, oMouth.x, oMouth.y, oMouth.w, oMouth.h);

    //ctx3 background
    ctx3.drawImage(oBody.image, oBody.x2 + oBody.iSpr * oBody.w, oBody.y2, oBody.w, oBody.h, oBody.x, oBody.y, oBody.w, oBody.h);





}

function exportResult() {
    var temp_ctx, temp_canvas;
    temp_canvas = document.createElement('canvas');
    temp_ctx = temp_canvas.getContext('2d');
    temp_canvas.width = 330;
    temp_canvas.height = 330;
    var zdata = ctx.getImageData(5, 5, 330, 330);
    var data = zdata.data;
    temp_ctx.putImageData(zdata, 0, 0);
    zdata2 = ctx2.getImageData(5, 5, 330, 330);
    var data2 = zdata2.data;
    for (var i = 0, n = data2.length; i < n; i += 4) {
        if (data2[i] == 0 && data2[i + 1] == 0 && data2[i + 2] == 0 && data2[i + 3] == 0) {
            data2[i] = data[i];
            data2[i + 1] = data[i + 1];
            data2[i + 2] = data[i + 2];
            data2[i + 3] = 255
        }
    }
    temp_ctx.putImageData(zdata2, 0, 0);
    var vData = temp_canvas.toDataURL("image/jpeg", 1.0);
    $('#face_result').attr('src', vData);
    sendResultToServer(vData)
}



$(function() {

    //swiper

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
    var oLegImage = new Image();
    oLegImage.src = website_url + 'data/' + gender + 'leg.png';
    oLegImage.onload = function(){};
    var oFootImage = new Image();
    oFootImage.src = website_url + 'data/' + gender + 'foot.png';
    oFootImage.onload = function(){};
    var oBackgroundImage = new Image();
    oBackgroundImage.src = website_url + 'data/' + gender + 'background.png';
    oBackgroundImage.onload = function(){};



    //face part color object
    oColors = new Colors();
    oColorEyebrow = new Colors();
    oColorEye = new Colors();
    oColorTop = new Colors();
    oColorBack = new Colors();

    //face part object
    oHead = new Head(0, 0, 0, 0, 340, 340, oFaceImage);
    oFringe = new Fringe(0, 0, 0, 0, 340, 340, oFringeImage);
    oEye = new Eye(0, 0, 0, 0, 340, 340, oEyesImage);
    oEyebrow = new Eyebrow(0, 0, 0, 0, 340, 340, oEyebrowImage);
    oMouth = new Mouth(0, 0, 0, 0, 340, 340, oMouthsImage);
    oTop = new Top(0, 0, 0, 0, 340, 340, oTopsImage);

    //body part object
    oBody = new Body(0,0,0,0,340,340,oBodyImage);
    oCloth = new Cloth(0,0,0,0,340,340,oClothImage);
    oLeg = new Leg(0,0,0,0,340,340,oLeg);
    oFoot = new Foot(0,0,0,0,340,340,oFoot);
    oBackground = new Background(0,0,0,0,340,340,oBackground);

    //refresh the canvas
    setInterval(drawScene, 100);

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
    $('#fringe .color .set div').click(function() {
        oColors.iPos = parseInt($(this).attr('val'))
    });
    $('#eyebrow .color .set div').click(function() {
        oColorEyebrow.iPos = parseInt($(this).attr('val'))
    });
    $('#top .color .set div').click(function() {
        oColorTop.iPos = parseInt($(this).attr('val'))
    });
    $('#eye .color .set div').click(function() {
        oColorEye.iPos = parseInt($(this).attr('val'))
    });
    $('#back .color .set div').click(function() {
        oColorBack.iPos = parseInt($(this).attr('val'))
    });
    $('#generate button').click(function() {
        exportResult()
    })
});
