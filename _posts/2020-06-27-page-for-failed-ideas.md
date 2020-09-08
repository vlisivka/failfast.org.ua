---
layout: post
title: Прощання з ідеями
---

<style>
.gplusbtn{
   position:relative;
   display:block;
   width:300px;
   height:300px;
   margin:100px;
   overflow:visible;
   -webkit-border-radius:150px;
   -moz-border-radius:150px;
   border-radius:150px;
   text-decoration:none;
   color:#fff;
}

.gplusbtn:hover,.gplusbtn:active{
   text-decoration:underline;
   color:#fff;
}

.gplusbtn span{
   display:block;
   cursor:pointer;
}

.gplusbtn .border{
   position:absolute;
   z-index:1;
   top:50px;
   left:50px;
   width:160px;
   height:160px;
   border-width:20px;
   border-style:solid;
   border-top-color:rgb(95,144,187);   /* fallback */
   border-right-color:rgb(64,180,73);
   border-bottom-color:rgb(248,204,48);
   border-left-color:rgb(219,74,55);
   -webkit-border-radius:100px;
   -moz-border-radius:100px;
   border-radius:100px;
   -webkit-animation-name:turn;
   -moz-animation-name:turn;
   -webkit-animation-duration:5s;
   -moz-animation-duration:5s;
   -webkit-animation-timing-function:linear;
   -webkit-animation-iteration-count:infinite;
   -moz-animation-timing-function:linear;
   -moz-animation-iteration-count:infinite;
   -webkit-transition:width 0.5s ease-in-out,height 0.5s ease-in-out,-webkit-border-radius 0.5s ease-in-out,border-radius 0.5s ease-in-out,top 0.5s ease-in-out,left 0.5s ease-in-out;
   -moz-transition:width 0.5s ease-in-out,height 0.5s ease-in-out,-webkit-border-radius 0.5s ease-in-out,border-radius 0.5s ease-in-out,top 0.5s ease-in-out,left 0.5s ease-in-out;
   -o-transition:width 0.5s ease-in-out,height 0.5s ease-in-out,-webkit-border-radius 0.5s ease-in-out,border-radius 0.5s ease-in-out,top 0.5s ease-in-out,left 0.5s ease-in-out;
   -ms-transition:width 0.5s ease-in-out,height 0.5s ease-in-out,-webkit-border-radius 0.5s ease-in-out,border-radius 0.5s ease-in-out,top 0.5s ease-in-out,left 0.5s ease-in-out;
   behavior:url(pie.htc);
}

.gplusbtn .button{
   position:absolute;
   z-index:2;
   top:75px;
   left:75px;
   width:148px;
   height:148px;
   background-color:#E1E1E1;
   border:1px solid #999;
   -webkit-border-radius:75px;
   -moz-border-radius:75px;
   border-radius:75px;
   -webkit-transition:width 0.5s ease-in-out,height 0.5s ease-in-out,-webkit-border-radius 0.5s ease-in-out,border-radius 0.5s ease-in-out,top 0.5s ease-in-out,left 0.5s ease-in-out,background 0.6s ease-in;
   -moz-transition:width 0.5s ease-in-out,height 0.5s ease-in-out,-webkit-border-radius 0.5s ease-in-out,border-radius 0.5s ease-in-out,top 0.5s ease-in-out,left 0.5s ease-in-out,background 0.6s ease-in;
   -o-transition:width 0.5s ease-in-out,height 0.5s ease-in-out,-webkit-border-radius 0.5s ease-in-out,border-radius 0.5s ease-in-out,top 0.5s ease-in-out,left 0.5s ease-in-out,background 0.6s ease-in;
   -ms-transition:width 0.5s ease-in-out,height 0.5s ease-in-out,-webkit-border-radius 0.5s ease-in-out,border-radius 0.5s ease-in-out,top 0.5s ease-in-out,left 0.5s ease-in-out,background 0.6s ease-in;
}
.gplusbtn .button .button-inner{
   position:absolute;
   top:14px;
   left:14px;
   width:118px;
   height:118px;
   color:#fff;
   background-color:#4797CF;
   border:1px solid #e1e1e1;
   -webkit-border-radius:60px;
   -moz-border-radius:60px;
   border-radius:60px;
   -webkit-box-shadow:inset 0 1px 0px 1px #427093;
   -moz-box-shadow:inset 0 1px 0px 1px #427093;
   box-shadow:inset 0 1px 0px 1px #427093;
   text-align:center;
   line-height:118px;
   font-family:Helvetica,Arial,sans-serif;
   font-style:normal;
   font-weight:normal;
   font-size:14px;
   color:#fff;
   -webkit-transition:width 0.5s ease-in-out,height 0.5s ease-in-out,-webkit-border-radius 0.5s ease-in-out,border-radius 0.5s ease-in-out,top 0.5s ease-in-out,left 0.5s ease-in-out,border-width 0.5s ease-in-out;
   -moz-transition:width 0.5s ease-in-out,height 0.5s ease-in-out,-webkit-border-radius 0.5s ease-in-out,border-radius 0.5s ease-in-out,top 0.5s ease-in-out,left 0.5s ease-in-out,border-width 0.5s ease-in-out;
   -o-transition:width 0.5s ease-in-out,height 0.5s ease-in-out,-webkit-border-radius 0.5s ease-in-out,border-radius 0.5s ease-in-out,top 0.5s ease-in-out,left 0.5s ease-in-out,border-width 0.5s ease-in-out;
   -ms-transition:width 0.5s ease-in-out,height 0.5s ease-in-out,-webkit-border-radius 0.5s ease-in-out,border-radius 0.5s ease-in-out,top 0.5s ease-in-out,left 0.5s ease-in-out,border-width 0.5s ease-in-out;
}

.gplusbtn:hover .border{
   top:0;
   left:0;
   width:260px;
   height:260px;
   -webkit-border-radius:150px;
   -moz-border-radius:150px;
   border-radius:150px;
}
.gplusbtn:hover .button{
   top:30px;
   left:30px;
   width:238px;
   height:238px;
   background-color:#fff;
   -webkit-border-radius:120px;
   -moz-border-radius:120px;
   border-radius:120px;
}
.gplusbtn:hover .button .button-inner{
   top:5px;
   left:5px;
   color:#fff;
   border-width:55px;
   border-color:#e1e1e1;
   -webkit-border-radius:120px;
   -moz-border-radius:120px;
   border-radius:120px;
}


@-webkit-keyframes turn{
   from{-webkit-transform:rotate(0deg);}
   to{-webkit-transform:rotate(360deg);}
}
@-moz-keyframes turn{
   from{-moz-transform:rotate(0deg);}
   to{-moz-transform:rotate(360deg);}
}
</style>

Для стартапера, часто дуже важко розстатися зі своєю старою ідеєю, та
почати працювати над новою. Люди емоційно привʼязуються до того, у що
вклали багато праці, про що мають багато спогадів. Розставання зі старою
ідеєю, це як прощання зі старим другом. Але, житя триває, треба рухатися
уперед.

На цій сторінці можна офіційно розпрощатися зі своєю невдалою ідеєю, так
би мовити «відпустити її», або офіційно розлучитися. Подивіться на цю
магічну кнопку! Подивіться як вона крутиться! Після того як ви її
натисните, стара ідея нарешті піде від вас. Принаймні ми на це
сподіваємося.

<label for="idea">Ідея стартапу:</label>
<div><script>
function clear_idea() {
  var idea = document.getElementById("idea");
  idea.value = '';
}
</script><textarea id="idea" name="idea" rows="4" cols="40" alt="Введіть текст вашої ідеї та натисність кнопку «FAIL»." onfocus="clear_idea()">
Введіть текст вашої ідеї та натисність кнопку «FAIL»...
</textarea></div><div><a class="gplusbtn" title="this is a button" href="#" onclick="clear_idea(); return false;">
      <span class="border">
      </span>
      <span class="button">
         <span class="button-inner">FAIL</span>
      </span>
</a></div>