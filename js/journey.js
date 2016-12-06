//sources:
/*http://imagemap-generator.dariodomi.de/
http://middle-earth.thehobbit.com/
http://www.tk421.net/lotr/film/
https://bbs.boingboing.net/t/university-of-oxford-acquires-rare-map-of-middle-earth-annotated-by-tolkien/77548/4*/


//frodos journey
/*var frodo = document.getElementById('rivendell');
frodo.onmouseover = function() {
  document.getElementById('one').style.display = 'block';
}
frodo.onmouseout = function() {
  document.getElementById('one').style.display = 'none';
}*/

$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#rivendell').hover(function(e) {
    $('div#one').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#one').hide();
  });

  $('div#rivendell').mousemove(function(e) {
    $("div#one").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var frodo = document.getElementById('mines');
frodo.onmouseover = function() {
  document.getElementById('two').style.display = 'block';
}
frodo.onmouseout = function() {
  document.getElementById('two').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#mines').hover(function(e) {
    $('div#two').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#two').hide();
  });

  $('div#mines').mousemove(function(e) {
    $("div#two").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var frodo = document.getElementById('loth');
frodo.onmouseover = function() {
  document.getElementById('three').style.display = 'block';
}
frodo.onmouseout = function() {
  document.getElementById('three').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#loth').hover(function(e) {
    $('div#three').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#three').hide();
  });

  $('div#loth').mousemove(function(e) {
    $("div#three").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});

/*var frodo = document.getElementById('blackgate');
frodo.onmouseover = function() {
  document.getElementById('four').style.display = 'block';
}
frodo.onmouseout = function() {
  document.getElementById('four').style.display = 'none';
}*/
$(function(){
  var moveLeft = -180;
  var moveDown = 10;

  $('div#blackgate').hover(function(e) {
    $('div#four').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#four').hide();
  });

  $('div#blackgate').mousemove(function(e) {
    $("div#four").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var frodo = document.getElementById('shelobs');
frodo.onmouseover = function() {
  document.getElementById('five').style.display = 'block';
}
frodo.onmouseout = function() {
  document.getElementById('five').style.display = 'none';
}*/
$(function(){
  var moveLeft = -180;
  var moveDown = -235;

  $('div#shelobs').hover(function(e) {
    $('div#five').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#five').hide();
  });

  $('div#shelobs').mousemove(function(e) {
    $("div#five").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var frodo = document.getElementById('mordor');
frodo.onmouseover = function() {
  document.getElementById('six').style.display = 'block';
}
frodo.onmouseout = function() {
  document.getElementById('six').style.display = 'none';
}*/
//end of frodos journey
$(function(){
  var moveLeft = -300;
  var moveDown = 10;

  $('div#mordor').hover(function(e) {
    $('div#six').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#six').hide();
  });

  $('div#mordor').mousemove(function(e) {
    $("div#six").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
//start of sam's journey
/*var sam = document.getElementById('rivendell-sam');
sam.onmouseover = function() {
  document.getElementById('seven').style.display = 'block';
}
sam.onmouseout = function() {
  document.getElementById('seven').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#rivendell-sam').hover(function(e) {
    $('div#seven').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#seven').hide();
  });

  $('div#rivendell').mousemove(function(e) {
    $("div#seven").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var sam = document.getElementById('mines-sam');
sam.onmouseover = function() {
  document.getElementById('eight').style.display = 'block';
}
sam.onmouseout = function() {
  document.getElementById('eight').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#mines-sam').hover(function(e) {
    $('div#eight').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#eight').hide();
  });

  $('div#mines-sam').mousemove(function(e) {
    $("div#eight").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var sam = document.getElementById('loth-sam');
sam.onmouseover = function() {
  document.getElementById('nine').style.display = 'block';
}
sam.onmouseout = function() {
  document.getElementById('nine').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#loth-sam').hover(function(e) {
    $('div#nine').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#nine').hide();
  });

  $('div#loth-sam').mousemove(function(e) {
    $("div#nine").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var sam = document.getElementById('gate-sam');
sam.onmouseover = function() {
  document.getElementById('ten').style.display = 'block';
}
sam.onmouseout = function() {
  document.getElementById('ten').style.display = 'none';
}*/
$(function(){
  var moveLeft = -180;
  var moveDown = 10;

  $('div#gate-sam').hover(function(e) {
    $('div#ten').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#ten').hide();
  });

  $('div#gate-sam').mousemove(function(e) {
    $("div#ten").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var sam = document.getElementById('shelob-sam');
sam.onmouseover = function() {
  document.getElementById('eleven').style.display = 'block';
}
sam.onmouseout = function() {
  document.getElementById('eleven').style.display = 'none';
}*/
$(function(){
  var moveLeft = -180;
  var moveDown = -170;

  $('div#shelob-sam').hover(function(e) {
    $('div#eleven').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#eleven').hide();
  });

  $('div#shelob-sam').mousemove(function(e) {
    $("div#eleven").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var sam = document.getElementById('mordor-sam');
sam.onmouseover = function() {
  document.getElementById('twelve').style.display = 'block';
}
sam.onmouseout = function() {
  document.getElementById('twelve').style.display = 'none';
}*/
$(function(){
  var moveLeft = -300;
  var moveDown = 10;

  $('div#mordor-sam').hover(function(e) {
    $('div#twelve').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#twelve').hide();
  });

  $('div#mordor-sam').mousemove(function(e) {
    $("div#twelve").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
//end of sams journey

//start of merrys journey
/*var merry = document.getElementById('rivendell-merry');
merry.onmouseover = function() {
  document.getElementById('merry-one').style.display = 'block';
}
merry.onmouseout = function() {
  document.getElementById('merry-one').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#rivendell-merry').hover(function(e) {
    $('div#merry-one').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#merry-one').hide();
  });

  $('div#rivendell-merry').mousemove(function(e) {
    $("div#merry-one").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var merry = document.getElementById('mines-merry');
merry.onmouseover = function() {
  document.getElementById('merry-two').style.display = 'block';
}
merry.onmouseout = function() {
  document.getElementById('merry-two').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#mines-merry').hover(function(e) {
    $('div#merry-two').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#merry-two').hide();
  });

  $('div#mines-merry').mousemove(function(e) {
    $("div#merry-two").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var merry = document.getElementById('loth-merry');
merry.onmouseover = function() {
  document.getElementById('merry-three').style.display = 'block';
}
merry.onmouseout = function() {
  document.getElementById('merry-three').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#loth-merry').hover(function(e) {
    $('div#merry-three').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#merry-three').hide();
  });

  $('div#loth-merry').mousemove(function(e) {
    $("div#merry-three").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var merry = document.getElementById('fangorn-merry');
merry.onmouseover = function() {
  document.getElementById('merry-four').style.display = 'block';
}
merry.onmouseout = function() {
  document.getElementById('merry-four').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#fangorn-merry').hover(function(e) {
    $('div#merry-four').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#merry-four').hide();
  });

  $('div#fangorn-merry').mousemove(function(e) {
    $("div#merry-four").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var merry = document.getElementById('isengard-merry');
merry.onmouseover = function() {
  document.getElementById('merry-five').style.display = 'block';
}
merry.onmouseout = function() {
  document.getElementById('merry-five').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#isengard-merry').hover(function(e) {
    $('div#merry-five').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#merry-five').hide();
  });

  $('div#isengard-merry').mousemove(function(e) {
    $("div#merry-five").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var merry = document.getElementById('edoras-merry');
merry.onmouseover = function() {
  document.getElementById('merry-six').style.display = 'block';
}
merry.onmouseout = function() {
  document.getElementById('merry-six').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#edoras-merry').hover(function(e) {
    $('div#merry-six').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#merry-six').hide();
  });

  $('div#edoras-merry').mousemove(function(e) {
    $("div#merry-six").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var merry = document.getElementById('minas-merry');
merry.onmouseover = function() {
  document.getElementById('merry-seven').style.display = 'block';
}
merry.onmouseout = function() {
  document.getElementById('merry-seven').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = -180;

  $('div#minas-merry').hover(function(e) {
    $('div#merry-seven').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#merry-seven').hide();
  });

  $('div#minas-merry').mousemove(function(e) {
    $("div#merry-seven").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var merry = document.getElementById('black-merry');
merry.onmouseover = function() {
  document.getElementById('merry-eight').style.display = 'block';
}
merry.onmouseout = function() {
  document.getElementById('merry-eight').style.display = 'none';
}*/
$(function(){
  var moveLeft = -210;
  var moveDown = 10;

  $('div#black-merry').hover(function(e) {
    $('div#merry-eight').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#merry-eight').hide();
  });

  $('div#black-merry').mousemove(function(e) {
    $("div#merry-eight").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
//end of merrys journey
//start of pippins journey
/*var pip = document.getElementById('rivendell-pip');
pip.onmouseover = function() {
  document.getElementById('pip-one').style.display = 'block';
}
pip.onmouseout = function() {
  document.getElementById('pip-one').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#rivendell-pip').hover(function(e) {
    $('div#pip-one').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#pip-one').hide();
  });

  $('div#rivendell-pip').mousemove(function(e) {
    $("div#pip-one").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var pip = document.getElementById('mines-pip');
pip.onmouseover = function() {
  document.getElementById('pip-two').style.display = 'block';
}
pip.onmouseout = function() {
  document.getElementById('pip-two').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#mines-pip').hover(function(e) {
    $('div#pip-two').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#pip-two').hide();
  });

  $('div#mines-pip').mousemove(function(e) {
    $("div#pip-two").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var pip = document.getElementById('loth-pip');
pip.onmouseover = function() {
  document.getElementById('pip-three').style.display = 'block';
}
pip.onmouseout = function() {
  document.getElementById('pip-three').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#loth-pip').hover(function(e) {
    $('div#pip-three').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#pip-three').hide();
  });

  $('div#loth-pip').mousemove(function(e) {
    $("div#pip-three").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var pip = document.getElementById('fangorn-pip');
pip.onmouseover = function() {
  document.getElementById('pip-four').style.display = 'block';
}
pip.onmouseout = function() {
  document.getElementById('pip-four').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#fangorn-pip').hover(function(e) {
    $('div#pip-four').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#pip-four').hide();
  });

  $('div#fangorn-pip').mousemove(function(e) {
    $("div#pip-four").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var pip = document.getElementById('isengard-pip');
pip.onmouseover = function() {
  document.getElementById('pip-five').style.display = 'block';
}
pip.onmouseout = function() {
  document.getElementById('pip-five').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#isengard-pip').hover(function(e) {
    $('div#pip-five').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#pip-five').hide();
  });

  $('div#isengard-pip').mousemove(function(e) {
    $("div#pip-five").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var pip = document.getElementById('edoras-pip');
pip.onmouseover = function() {
  document.getElementById('pip-six').style.display = 'block';
}
pip.onmouseout = function() {
  document.getElementById('pip-six').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#edoras-pip').hover(function(e) {
    $('div#pip-six').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#pip-six').hide();
  });

  $('div#edoras-pip').mousemove(function(e) {
    $("div#pip-six").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var pip = document.getElementById('minas-pip');
pip.onmouseover = function() {
  document.getElementById('pip-seven').style.display = 'block';
}
pip.onmouseout = function() {
  document.getElementById('pip-seven').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = -150;

  $('div#minas-pip').hover(function(e) {
    $('div#pip-seven').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#pip-seven').hide();
  });

  $('div#minas-pip').mousemove(function(e) {
    $("div#pip-seven").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});


$(function(){
  var moveLeft = -230;
  var moveDown = 10;

  $('div#gate-pip').hover(function(e) {
    $('div#pip-eight').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#pip-eight').hide();
  });

  $('div#gate-pip').mousemove(function(e) {
    $("div#pip-eight").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
//end of pippins journey
//start of gandalfs journey 
/*var gandalf = document.getElementById('rivendell-gandalf');
gandalf.onmouseover = function() {
  document.getElementById('gandalf-one').style.display = 'block';
}
gandalf.onmouseout = function() {
  document.getElementById('gandalf-one').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#rivendell-gandalf').hover(function(e) {
    $('div#gandalf-one').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#gandalf-one').hide();
  });

  $('div#rivendell-gandalf').mousemove(function(e) {
    $("div#gandalf-one").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var gandalf = document.getElementById('mines-gandalf');
gandalf.onmouseover = function() {
  document.getElementById('gandalf-two').style.display = 'block';
}
gandalf.onmouseout = function() {
  document.getElementById('gandalf-two').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#mines-gandalf').hover(function(e) {
    $('div#gandalf-two').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#gandalf-two').hide();
  });

  $('div#mines-gandalf').mousemove(function(e) {
    $("div#gandalf-two").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var gandalf = document.getElementById('morgoth-gandalf');
gandalf.onmouseover = function() {
  document.getElementById('gandalf-three').style.display = 'block';
}
gandalf.onmouseout = function() {
  document.getElementById('gandalf-three').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#morgoth-gandalf').hover(function(e) {
    $('div#gandalf-three').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#gandalf-three').hide();
  });

  $('div#morgoth-gandalf').mousemove(function(e) {
    $("div#gandalf-three").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var gandalf = document.getElementById('fangorn-gandalf');
gandalf.onmouseover = function() {
  document.getElementById('gandalf-four').style.display = 'block';
}
gandalf.onmouseout = function() {
  document.getElementById('gandalf-four').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#fangorn-gandalf').hover(function(e) {
    $('div#gandalf-four').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#gandalf-four').hide();
  });

  $('div#fangorn-gandalf').mousemove(function(e) {
    $("div#gandalf-four").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var gandalf = document.getElementById('edoras-gandalf');
gandalf.onmouseover = function() {
  document.getElementById('gandalf-five').style.display = 'block';
}
gandalf.onmouseout = function() {
  document.getElementById('gandalf-five').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#edoras-gandalf').hover(function(e) {
    $('div#gandalf-five').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#gandalf-five').hide();
  });

  $('div#edoras-gandalf').mousemove(function(e) {
    $("div#gandalf-five").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var gandalf = document.getElementById('helms-gandalf');
gandalf.onmouseover = function() {
  document.getElementById('gandalf-six').style.display = 'block';
}
gandalf.onmouseout = function() {
  document.getElementById('gandalf-six').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#helms-gandalf').hover(function(e) {
    $('div#gandalf-six').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#gandalf-six').hide();
  });

  $('div#helms-gandalf').mousemove(function(e) {
    $("div#gandalf-six").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});


$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#isengard-gandalf').hover(function(e) {
    $('div#gandalf-seven').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#gandalf-seven').hide();
  });

  $('div#isengard-gandalf').mousemove(function(e) {
    $("div#gandalf-seven").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var gandalf = document.getElementById('minas-gandalf');
gandalf.onmouseover = function() {
  document.getElementById('gandalf-eight').style.display = 'block';
}
gandalf.onmouseout = function() {
  document.getElementById('gandalf-eight').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#minas-gandalf').hover(function(e) {
    $('div#gandalf-eight').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#gandalf-eight').hide();
  });

  $('div#minas-gandalf').mousemove(function(e) {
    $("div#gandalf-eight").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});


$(function(){
  var moveLeft = -215;
  var moveDown = 10;

  $('div#black-gandalf').hover(function(e) {
    $('div#gandalf-nine').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#gandalf-nine').hide();
  });

  $('div#black-gandalf').mousemove(function(e) {
    $("div#gandalf-nine").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});


$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#rivendell-bor').hover(function(e) {
    $('div#bor-one').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#bor-one').hide();
  });

  $('div#rivendell-bor').mousemove(function(e) {
    $("div#bor-one").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});


$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#mines-bor').hover(function(e) {
    $('div#bor-two').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#bor-two').hide();
  });

  $('div#mines-bor').mousemove(function(e) {
    $("div#bor-two").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var boromir = document.getElementById('loth-bor');
boromir.onmouseover = function() {
  document.getElementById('bor-three').style.display = 'block';
}
boromir.onmouseout = function() {
  document.getElementById('bor-three').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#loth-bor').hover(function(e) {
    $('div#bor-three').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#bor-three').hide();
  });

  $('div#loth-bor').mousemove(function(e) {
    $("div#bor-three").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
//end of boromirs journey

//start of aragon's journey
/*var aragon = document.getElementById('rivendell-aragon');
aragon.onmouseover = function() {
  document.getElementById('aragon-one').style.display = 'block';
}
aragon.onmouseout = function() {
  document.getElementById('aragon-one').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#rivendell-aragon').hover(function(e) {
    $('div#aragon-one').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#aragon-one').hide();
  });

  $('div#rivendell-aragon').mousemove(function(e) {
    $("div#aragon-one").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var aragon = document.getElementById('mines-aragon');
aragon.onmouseover = function() {
  document.getElementById('aragon-two').style.display = 'block';
}
aragon.onmouseout = function() {
  document.getElementById('aragon-two').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#mines-aragon').hover(function(e) {
    $('div#aragon-two').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#aragon-two').hide();
  });

  $('div#mines-aragon').mousemove(function(e) {
    $("div#aragon-two").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var aragon = document.getElementById('loth-aragon');
aragon.onmouseover = function() {
  document.getElementById('aragon-three').style.display = 'block';
}
aragon.onmouseout = function() {
  document.getElementById('aragon-three').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#loth-aragon').hover(function(e) {
    $('div#aragon-three').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#aragon-three').hide();
  });

  $('div#loth-aragon').mousemove(function(e) {
    $("div#aragon-three").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var aragon = document.getElementById('fangorn-aragon');
aragon.onmouseover = function() {
  document.getElementById('aragon-four').style.display = 'block';
}
aragon.onmouseout = function() {
  document.getElementById('aragon-four').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#fangorn-aragon').hover(function(e) {
    $('div#aragon-four').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#aragon-four').hide();
  });

  $('div#fangorn-aragon').mousemove(function(e) {
    $("div#aragon-four").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var aragon = document.getElementById('edoras-aragon');
aragon.onmouseover = function() {
  document.getElementById('aragon-five').style.display = 'block';
}
aragon.onmouseout = function() {
  document.getElementById('aragon-five').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#edoras-aragon').hover(function(e) {
    $('div#aragon-five').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#aragon-five').hide();
  });

  $('div#edoras-aragon').mousemove(function(e) {
    $("div#aragon-five").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var aragon = document.getElementById('helms-aragon');
aragon.onmouseover = function() {
  document.getElementById('aragon-six').style.display = 'block';
}
aragon.onmouseout = function() {
  document.getElementById('aragon-six').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = -120;

  $('div#helms-aragon').hover(function(e) {
    $('div#aragon-six').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#aragon-six').hide();
  });

  $('div#helms-aragon').mousemove(function(e) {
    $("div#aragon-six").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var aragon = document.getElementById('isengard-aragon');
aragon.onmouseover = function() {
  document.getElementById('aragon-seven').style.display = 'block';
}
aragon.onmouseout = function() {
  document.getElementById('aragon-seven').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#isengard-aragon').hover(function(e) {
    $('div#aragon-seven').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#aragon-seven').hide();
  });

  $('div#isengard-aragon').mousemove(function(e) {
    $("div#aragon-seven").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var aragon = document.getElementById('dead-aragon');
aragon.onmouseover = function() {
  document.getElementById('aragon-eight').style.display = 'block';
}
aragon.onmouseout = function() {
  document.getElementById('aragon-eight').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#dead-aragon').hover(function(e) {
    $('div#aragon-eight').show();

  }, function() {
    $('div#aragon-eight').hide();
    $(this).css('cursor','pointer');
  });

  $('div#dead-aragon').mousemove(function(e) {
    $("div#aragon-eight").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var aragon = document.getElementById('minas-aragon');
aragon.onmouseover = function() {
  document.getElementById('aragon-nine').style.display = 'block';
}
aragon.onmouseout = function() {
  document.getElementById('aragon-nine').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = -150;

  $('div#minas-aragon').hover(function(e) {
    $('div#aragon-nine').show();
  }, function() {
    $('div#aragon-nine').hide();
    $(this).css('cursor','pointer');
  });

  $('div#minas-aragon').mousemove(function(e) {
    $("div#aragon-nine").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var aragon = document.getElementById('dark-aragon');
aragon.onmouseover = function() {
  document.getElementById('aragon-ten').style.display = 'block';
}
aragon.onmouseout = function() {
  document.getElementById('aragon-ten').style.display = 'none';
}*/
$(function(){
  var moveLeft = -215;
  var moveDown = 10;

  $('div#dark-aragon').hover(function(e) {
    $('div#aragon-ten').show();
  }, function() {
    $('div#aragon-ten').hide();
    $(this).css('cursor','pointer');
  });

  $('div#dark-aragon').mousemove(function(e) {
    $("div#aragon-ten").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
//end of aragon's journey
//start of legolas's journey
/*var legolas = document.getElementById('rivendell-lego');
legolas.onmouseover = function() {
  document.getElementById('lego-one').style.display = 'block';
}
legolas.onmouseout = function() {
  document.getElementById('lego-one').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#rivendell-lego').hover(function(e) {
    $('div#lego-one').show();
  }, function() {
    $('div#lego-one').hide();
  });

  $('div#rivendell-lego').mousemove(function(e) {
    $("div#lego-one").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var legolas = document.getElementById('mines-lego');
legolas.onmouseover = function() {
  document.getElementById('lego-two').style.display = 'block';
}
legolas.onmouseout = function() {
  document.getElementById('lego-two').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#mines-lego').hover(function(e) {
    $('div#lego-two').show();
  }, function() {
    $('div#lego-two').hide();
  });

  $('div#mines-lego').mousemove(function(e) {
    $("div#lego-two").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var legolas = document.getElementById('loth-lego');
legolas.onmouseover = function() {
  document.getElementById('lego-three').style.display = 'block';
}
legolas.onmouseout = function() {
  document.getElementById('lego-three').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#loth-lego').hover(function(e) {
    $('div#lego-three').show();
  }, function() {
    $('div#lego-three').hide();
  });

  $('div#loth-lego').mousemove(function(e) {
    $("div#lego-three").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var legolas = document.getElementById('fangorn-lego');
legolas.onmouseover = function() {
  document.getElementById('lego-four').style.display = 'block';
}
legolas.onmouseout = function() {
  document.getElementById('lego-four').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#fangorn-lego').hover(function(e) {
    $('div#lego-four').show();
  }, function() {
    $('div#lego-four').hide();
  });

  $('div#fangorn-lego').mousemove(function(e) {
    $("div#lego-four").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var legolas = document.getElementById('edoras-lego');
legolas.onmouseover = function() {
  document.getElementById('lego-five').style.display = 'block';
}
legolas.onmouseout = function() {
  document.getElementById('lego-five').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#edoras-lego').hover(function(e) {
    $('div#lego-five').show();
  }, function() {
    $('div#lego-five').hide();
  });

  $('div#edoras-lego').mousemove(function(e) {
    $("div#lego-five").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var legolas = document.getElementById('helm-lego');
legolas.onmouseover = function() {
  document.getElementById('lego-six').style.display = 'block';
}
legolas.onmouseout = function() {
  document.getElementById('lego-six').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#helm-lego').hover(function(e) {
    $('div#lego-six').show();
  }, function() {
    $('div#lego-six').hide();
  });

  $('div#helm-lego').mousemove(function(e) {
    $("div#lego-six").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var legolas = document.getElementById('isengard-lego');
legolas.onmouseover = function() {
  document.getElementById('lego-seven').style.display = 'block';
}
legolas.onmouseout = function() {
  document.getElementById('lego-seven').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#isengard-lego').hover(function(e) {
    $('div#lego-seven').show();
  }, function() {
    $('div#lego-seven').hide();
  });

  $('div#isengard-lego').mousemove(function(e) {
    $("div#lego-seven").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var legolas = document.getElementById('dead-lego');
legolas.onmouseover = function() {
  document.getElementById('lego-eight').style.display = 'block';
}
legolas.onmouseout = function() {
  document.getElementById('lego-eight').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#dead-lego').hover(function(e) {
    $('div#lego-eight').show();
  }, function() {
    $('div#lego-eight').hide();
  });

  $('div#dead-lego').mousemove(function(e) {
    $("div#lego-eight").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var legolas = document.getElementById('minas-lego');
legolas.onmouseover = function() {
  document.getElementById('lego-nine').style.display = 'block';
}
legolas.onmouseout = function() {
  document.getElementById('lego-nine').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = -150;

  $('div#minas-lego').hover(function(e) {
    $('div#lego-nine').show();
  }, function() {
    $('div#lego-nine').hide();
  });

  $('div#minas-lego').mousemove(function(e) {
    $("div#lego-nine").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var legolas = document.getElementById('dark-lego');
legolas.onmouseover = function() {
  document.getElementById('lego-ten').style.display = 'block';
}
legolas.onmouseout = function() {
  document.getElementById('lego-ten').style.display = 'none';
}*/
$(function(){
  var moveLeft = -210;
  var moveDown = 10;

  $('div#dark-lego').hover(function(e) {
    $('div#lego-ten').show();
  }, function() {
    $('div#lego-ten').hide();
  });

  $('div#dark-lego').mousemove(function(e) {
    $("div#lego-ten").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});

//end of legolas's journey

//start of gimlis journey
/*var gimli = document.getElementById('rivendell-gimli');
gimli.onmouseover = function() {
  document.getElementById('gimli-one').style.display = 'block';
}
gimli.onmouseout = function() {
  document.getElementById('gimli-one').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#rivendell-gimli').hover(function(e) {
    $('div#gimli-one').show();
  }, function() {
    $('div#gimli-one').hide();
  });

  $('div#rivendell-gimli').mousemove(function(e) {
    $("div#gimli-one").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var gimli = document.getElementById('mines-gimli');
gimli.onmouseover = function() {
  document.getElementById('gimli-two').style.display = 'block';
}
gimli.onmouseout = function() {
  document.getElementById('gimli-two').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#mines-gimli').hover(function(e) {
    $('div#gimli-two').show();
  }, function() {
    $('div#gimli-two').hide();
  });

  $('div#mines-gimli').mousemove(function(e) {
    $("div#gimli-two").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var gimli = document.getElementById('loth-gimli');
gimli.onmouseover = function() {
  document.getElementById('gimli-three').style.display = 'block';
}
gimli.onmouseout = function() {
  document.getElementById('gimli-three').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#loth-gimli').hover(function(e) {
    $('div#gimli-three').show();
  }, function() {
    $('div#gimli-three').hide();
  });

  $('div#loth-gimli').mousemove(function(e) {
    $("div#gimli-three").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var gimli = document.getElementById('fangorn-gimli');
gimli.onmouseover = function() {
  document.getElementById('gimli-four').style.display = 'block';
}
gimli.onmouseout = function() {
  document.getElementById('gimli-four').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#fangorn-gimli').hover(function(e) {
    $('div#gimli-four').show();
  }, function() {
    $('div#gimli-four').hide();
  });

  $('div#fangorn-gimli').mousemove(function(e) {
    $("div#gimli-four").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var gimli = document.getElementById('edoras-gimli');
gimli.onmouseover = function() {
  document.getElementById('gimli-five').style.display = 'block';
}
gimli.onmouseout = function() {
  document.getElementById('gimli-five').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#edoras-gimli').hover(function(e) {
    $('div#gimli-five').show();
  }, function() {
    $('div#gimli-five').hide();
  });

  $('div#edoras-gimli').mousemove(function(e) {
    $("div#gimli-five").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var gimli = document.getElementById('helm-gimli');
gimli.onmouseover = function() {
  document.getElementById('gimli-six').style.display = 'block';
}
gimli.onmouseout = function() {
  document.getElementById('gimli-six').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#helm-gimli').hover(function(e) {
    $('div#gimli-six').show();
  }, function() {
    $('div#gimli-six').hide();
  });

  $('div#helm-gimli').mousemove(function(e) {
    $("div#gimli-six").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var gimli = document.getElementById('isengard-gimli');
gimli.onmouseover = function() {
  document.getElementById('gimli-seven').style.display = 'block';
}
gimli.onmouseout = function() {
  document.getElementById('gimli-seven').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#isengard-gimli').hover(function(e) {
    $('div#gimli-seven').show();
  }, function() {
    $('div#gimli-seven').hide();
  });

  $('div#isengard-gimli').mousemove(function(e) {
    $("div#gimli-seven").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var gimli = document.getElementById('dead-gimli');
gimli.onmouseover = function() {
  document.getElementById('gimli-eight').style.display = 'block';
}
gimli.onmouseout = function() {
  document.getElementById('gimli-eight').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = 10;

  $('div#dead-gimli').hover(function(e) {
    $('div#gimli-eight').show();
  }, function() {
    $('div#gimli-eight').hide();
    $(this).css('cursor','pointer');
  });

  $('div#dead-gimli').mousemove(function(e) {
    $("div#gimli-eight").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var gimli = document.getElementById('minas-gimli');
gimli.onmouseover = function() {
  document.getElementById('gimli-nine').style.display = 'block';
}
gimli.onmouseout = function() {
  document.getElementById('gimli-nine').style.display = 'none';
}*/
$(function(){
  var moveLeft = 20;
  var moveDown = -150;

  $('div#minas-gimli').hover(function(e) {
    $('div#gimli-nine').show();
  }, function() {
    $('div#gimli-nine').hide();
    $(this).css('cursor','pointer');
  });

  $('div#minas-gimli').mousemove(function(e) {
    $("div#gimli-nine").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
/*var gimli = document.getElementById('dark-gimli');
gimli.onmouseover = function() {
  document.getElementById('gimli-ten').style.display = 'block';
}
gimli.onmouseout = function() {
  document.getElementById('gimli-ten').style.display = 'none';
}*/
$(function(){
  var moveLeft = -210;
  var moveDown = 10;

  $('div#dark-gimli').hover(function(e) {
    $('div#gimli-ten').show();
    $(this).css('cursor','pointer');
  }, function() {
    $('div#gimli-ten').hide();
    $(this).css('cursor','pointer');
  });

  $('div#dark-gimli').mousemove(function(e) {
    $("div#gimli-ten").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
});
//end of gimlis journey


var element = document.getElementById('frodo-rive');
var rivendell = document.getElementById('rivendell');

rivendell.addEventListener('click', function(){
  if(element.requestFullscreen){
		element.requestFullscreen();
	}else if(element.webkitRequestFullscreen){
		element.webkitRequestFullscreen();
	}else if(element.mozRequestFullScreen){
		element.mozRequestFullScreen();
	}else if(element.msRequestFullscreen){
		element.msRequestFullscreen();
	}else{
    if(element.exitFullscreen){
      element.exitFullscreen();
    }else if(element.webkitExitFullscreen){
      element.webkitExitFullscreen();
    }else if(element.mozCancelFullScreen){
      element.mozCancelFullScreen();
    }else if(element.msExitFullscreen){
      element.msExitFullscreen();
    }
  }
});

var elementloth = document.getElementById('frodo-loth');
var loth = document.getElementById('loth');

loth.addEventListener('click', function(){
  if(elementloth.requestFullscreen){
    elementloth.requestFullscreen();
  }else if(elementloth.webkitRequestFullscreen){
    elementloth.webkitRequestFullscreen();
  }else if(elementloth.mozRequestFullScreen){
    elementloth.mozRequestFullScreen();
  }else if(elementloth.msRequestFullscreen){
    elementloth.msRequestFullscreen();
  }
});

var elementgate = document.getElementById('frodo-gate');
var gate = document.getElementById('blackgate');

gate.addEventListener('click', function(){
  if(elementgate.requestFullscreen){
    elementgate.requestFullscreen();
  }else if(elementgate.webkitRequestFullscreen){
    elementgate.webkitRequestFullscreen();
  }else if(elementgate.mozRequestFullScreen){
    elementgate.mozRequestFullScreen();
  }else if(elementgate.msRequestFullscreen){
    elementgate.msRequestFullscreen();
  }
});

var elementshe = document.getElementById('frodo-shelobs');
var she = document.getElementById('shelobs');


she.addEventListener('click', function(){
  if(elementshe.requestFullscreen){
    elementshe.requestFullscreen();
  }else if(elementshe.webkitRequestFullscreen){
    elementshe.webkitRequestFullscreen();
  }else if(elementshe.mozRequestFullScreen){
    elementshe.mozRequestFullScreen();
  }else if(elementshe.msRequestFullscreen){
    elementshe.msRequestFullscreen();
  }
});

var pipmer = document.getElementById('merpip-mines');
var pipmines = document.getElementById('mines-pip');


pipmines.addEventListener('click', function(){
  if(pipmer.requestFullscreen){
    pipmer.requestFullscreen();
  }else if(pipmer.webkitRequestFullscreen){
   pipmer.webkitRequestFullscreen();
  }else if(pipmer.mozRequestFullScreen){
    pipmer.mozRequestFullScreen();
  }else if(pipmer.msRequestFullscreen){
   pipmer.msRequestFullscreen();
  }
});

var merpip = document.getElementById('merpip-mines');
var mermines = document.getElementById('mines-merry');


mermines.addEventListener('click', function(){
  if(merpip.requestFullscreen){
    merpip.requestFullscreen();
  }else if(merpip.webkitRequestFullscreen){
    merpip.webkitRequestFullscreen();
  }else if(merpip.mozRequestFullScreen){
    merpip.mozRequestFullScreen();
  }else if(merpip.msRequestFullscreen){
   merpip.msRequestFullscreen();
  }
});
var merpipisen = document.getElementById('merpip-isengard');
var merisen = document.getElementById('isengard-merry');


merisen.addEventListener('click', function(){
  if(merpipisen.requestFullscreen){
    merpipisen.requestFullscreen();
  }else if(merpipisen.webkitRequestFullscreen){
    merpipisen.webkitRequestFullscreen();
  }else if(merpipisen.mozRequestFullScreen){
    merpipisen.mozRequestFullScreen();
  }else if(merpipisen.msRequestFullscreen){
   merpipisen.msRequestFullscreen();
  }
});

var merpipisen = document.getElementById('merpip-isengard');
var pipisen = document.getElementById('isengard-pip');

pipisen.addEventListener('click', function(){
  if(merpipisen.requestFullscreen){
    merpipisen.requestFullscreen();
  }else if(merpipisen.webkitRequestFullscreen){
    merpipisen.webkitRequestFullscreen();
  }else if(merpipisen.mozRequestFullScreen){
    merpipisen.mozRequestFullScreen();
  }else if(merpipisen.msRequestFullscreen){
   merpipisen.msRequestFullscreen();
  }
});

var arahelm = document.getElementById('aragon-helm');
var aragon = document.getElementById('helms-aragon');

aragon.addEventListener('click', function(){
  if(arahelm.requestFullscreen){
    arahelm.requestFullscreen();
  }else if(arahelm.webkitRequestFullscreen){
    arahelm.webkitRequestFullscreen();
  }else if(arahelm.mozRequestFullScreen){
    arahelm.mozRequestFullScreen();
  }else if(arahelm.msRequestFullscreen){
   arahelm.msRequestFullscreen();
  }
});
var aramin = document.getElementById('aragon-minas');
var aragonmin = document.getElementById('minas-aragon');


aragonmin.addEventListener('click', function(){
  if(aramin.requestFullscreen){
    aramin.requestFullscreen();
  }else if(aramin.webkitRequestFullscreen){
    aramin.webkitRequestFullscreen();
  }else if(aramin.mozRequestFullScreen){
    aramin.mozRequestFullScreen();
  }else if(aramin.msRequestFullscreen){
   aramin.msRequestFullscreen();
  }
});

var legomin = document.getElementById('legolas-minas');
var legolasmin = document.getElementById('minas-lego');


legolasmin.addEventListener('click', function(){
  if(legomin.requestFullscreen){
    legomin.requestFullscreen();
  }else if(legomin.webkitRequestFullscreen){
    legomin.webkitRequestFullscreen();
  }else if(legomin.mozRequestFullScreen){
    legomin.mozRequestFullScreen();
  }else if(legomin.msRequestFullscreen){
    legomin.msRequestFullscreen();
  }
});

var ganrive = document.getElementById('gandalf-rivendell');
var gandalfriv = document.getElementById('rivendell-gandalf');

gandalfriv.addEventListener('click', function(){
  if(ganrive.requestFullscreen){
    ganrive.requestFullscreen();
  }else if(ganrive.webkitRequestFullscreen){
    ganrive.webkitRequestFullscreen();
  }else if(ganrive.mozRequestFullScreen){
    ganrive.mozRequestFullScreen();
  }else if(ganrive.msRequestFullscreen){
    ganrive.msRequestFullscreen();
  }
});

var ganmin = document.getElementById('gandalf-mines');
var gandalfmines = document.getElementById('mines-gandalf');

gandalfmines.addEventListener('click', function(){
  if(ganmin.requestFullscreen){
    ganmin.requestFullscreen();
  }else if(ganmin.webkitRequestFullscreen){
    ganmin.webkitRequestFullscreen();
  }else if(ganmin.mozRequestFullScreen){
    ganmin.mozRequestFullScreen();
  }else if(ganmin.msRequestFullscreen){
    ganmin.msRequestFullscreen();
  }
});
var ganfan = document.getElementById('gandalf-fangorn');
var gandalffan = document.getElementById('fangorn-gandalf');


gandalffan.addEventListener('click', function(){
  if(ganfan.requestFullscreen){
    ganfan.requestFullscreen();
  }else if(ganfan.webkitRequestFullscreen){
    ganfan.webkitRequestFullscreen();
  }else if(ganfan.mozRequestFullScreen){
    ganfan.mozRequestFullScreen();
  }else if(ganfan.msRequestFullscreen){
    ganfan.msRequestFullscreen();
  }
});




