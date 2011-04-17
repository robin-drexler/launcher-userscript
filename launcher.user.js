// ==UserScript==
// @name          Launcher
// @namespace     http://blog.roc-game.com
// @description   To be written
// @include       *
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js
// @require        http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.0/jquery-ui.min.js
// @require        http://www.openjs.com/scripts/events/keyboard_shortcuts/shortcut.js
// @resource       jQueryUICSS          http://strd6.com/stuff/jqui/theme/ui.all.css
// @resource    ui-bg_diagonals-thick_18_b81900_40x40.png       http://strd6.com/stuff/jqui/theme/images/ui-bg_diagonals-thick_18_b81900_40x40.png
// @resource    ui-bg_glass_100_f6f6f6_1x400.png                http://strd6.com/stuff/jqui/theme/images/ui-bg_glass_100_f6f6f6_1x400.png
// @resource    ui-bg_diagonals-thick_20_666666_40x40.png       http://strd6.com/stuff/jqui/theme/images/ui-bg_diagonals-thick_20_666666_40x40.png
// @resource    ui-bg_glass_65_ffffff_1x400.png                 http://strd6.com/stuff/jqui/theme/images/ui-bg_glass_65_ffffff_1x400.png
// @resource    ui-bg_gloss-wave_35_f6a828_500x100.png          http://strd6.com/stuff/jqui/theme/images/ui-bg_gloss-wave_35_f6a828_500x100.png
// @resource    ui-icons_222222_256x240.png                     http://strd6.com/stuff/jqui/theme/images/ui-icons_222222_256x240.png
// @resource    ui-bg_flat_10_000000_40x100.png                 http://strd6.com/stuff/jqui/theme/images/ui-bg_flat_10_000000_40x100.png
// @resource    ui-icons_ef8c08_256x240.png                     http://strd6.com/stuff/jqui/theme/images/ui-icons_ef8c08_256x240.png
// @resource    ui-icons_ffd27a_256x240.png                     http://strd6.com/stuff/jqui/theme/images/ui-icons_ffd27a_256x240.png
// @resource    ui-bg_glass_100_fdf5ce_1x400.png                http://strd6.com/stuff/jqui/theme/images/ui-bg_glass_100_fdf5ce_1x400.png
// @resource    ui-icons_228ef1_256x240.png                     http://strd6.com/stuff/jqui/theme/images/ui-icons_228ef1_256x240.png
// @resource    ui-icons_ffffff_256x240.png                     http://strd6.com/stuff/jqui/theme/images/ui-icons_ffffff_256x240.png
// @resource    ui-bg_highlight-soft_75_ffe45c_1x100.png        http://strd6.com/stuff/jqui/theme/images/ui-bg_highlight-soft_75_ffe45c_1x100.png
// @resource    ui-bg_highlight-soft_100_eeeeee_1x100.png       http://strd6.com/stuff/jqui/theme/images/ui-bg_highlight-soft_100_eeeeee_1x100.png
// ==/UserScript==

$(document).ready( function() {

    var resources = {
      'ui-bg_diagonals-thick_18_b81900_40x40.png': GM_getResourceURL('ui-bg_diagonals-thick_18_b81900_40x40.png'), 
      'ui-bg_glass_100_f6f6f6_1x400.png': GM_getResourceURL('ui-bg_glass_100_f6f6f6_1x400.png'),
      'ui-bg_diagonals-thick_20_666666_40x40.png': GM_getResourceURL('ui-bg_diagonals-thick_20_666666_40x40.png'),
      'ui-bg_glass_65_ffffff_1x400.png': GM_getResourceURL('ui-bg_glass_65_ffffff_1x400.png'),
      'ui-bg_gloss-wave_35_f6a828_500x100.png': GM_getResourceURL('ui-bg_gloss-wave_35_f6a828_500x100.png'),
      'ui-icons_222222_256x240.png': GM_getResourceURL('ui-icons_222222_256x240.png'),
      'ui-bg_flat_10_000000_40x100.png': GM_getResourceURL('ui-bg_flat_10_000000_40x100.png'),
      'ui-icons_ef8c08_256x240.png': GM_getResourceURL('ui-icons_ef8c08_256x240.png'),
      'ui-icons_ffd27a_256x240.png': GM_getResourceURL('ui-icons_ffd27a_256x240.png'),
      'ui-bg_glass_100_fdf5ce_1x400.png': GM_getResourceURL('ui-bg_glass_100_fdf5ce_1x400.png'),
      'ui-icons_228ef1_256x240.png': GM_getResourceURL('ui-icons_228ef1_256x240.png'),
      'ui-icons_ffffff_256x240.png': GM_getResourceURL('ui-icons_ffffff_256x240.png'),
      'ui-bg_highlight-soft_75_ffe45c_1x100.png': GM_getResourceURL('ui-bg_highlight-soft_75_ffe45c_1x100.png'),
      'ui-bg_highlight-soft_100_eeeeee_1x100.png': GM_getResourceURL('ui-bg_highlight-soft_100_eeeeee_1x100.png')
    };
 
    var head = document.getElementsByTagName('head')[0];
 
    var style = document.createElement('style');
    style.type = 'text/css';
 
    var css = GM_getResourceText ('jQueryUICSS');
    $.each(resources, function(resourceName, resourceUrl) {
      console.log(resourceName + ': ' + resourceUrl);
      css = css.replace( 'images/' + resourceName, resourceUrl);
    });
 
    style.innerHTML = css;
    head.appendChild(style);

    var style = '#l-launcher {' +
    'width:400px;' +
    'height:50px;' + 
    'position:absolute;' +
    'left:50%;' + 
    'top:50%;' + 
    'margin:-25px 0 0 -200px;' + 
    'z-index:1000;' + 
    '}' + 
    '#l-launcher-text {' + 
    'font-weight:bold;' + 
    'font-size: 40px;' + 
    '}' + 
    '#l-launcher-wrapper {' + 
    'position:fixed;' + 
    'top:0px;' +
    'left:0px;' + 
    'width:100%;' + 
    'height:100%;'  + 
    'background-color:rgba(0,0,0,0.5);' + 
    'display:none;' + 
    '}';
    GM_addStyle(style);
    
    
    var launcherElements = ' ' +
    '<div id="l-launcher-wrapper">' +
    '   <div id="l-launcher">' +
    '       <input style="width:100%; height:100%;" type="text" id="l-launcher-text"/>' +
    '   <div>' +
    '</div>';

    $('body').append(launcherElements);
    $launcherWrapper = $('#l-launcher-wrapper');
    $launcher = $('#l-launcher');
    $launcherTextField = $('#l-launcher-text');

    $launcherTextField.focus();
    var anchorTags;
    $anchors = $('a');

    $foo = new Array($anchors.length);

    $anchors.each(function(index, value) {
        $foo[index] = {
            label: $(value).text(), 
            elm: $(value)
        };
    });
    console.log("sss");
    $launcherTextField.autocomplete({
        minLength: 0,
        source: $foo,
        create: function() {
            alert('gogogo');
        },
        select: function( event, ui ) {
            elm = ui.item.elm;
             window.location = elm.attr('href');
/*
            if(elm.attr('onclick')) {
                elm.click();
            } else {
                window.location = elm.attr('href');
            }*/
                return false;
        }
    })
    .data( "autocomplete" )._renderItem = function( ul, item ) {
        return $( "<li></li>" )
        .data( "item.autocomplete", item )
        .append( "<a>" + item.label + "</a>" )
        .appendTo( ul );
    };
    
    shortcut.add('Ctrl+Space', function(){
                $launcherWrapper.toggle();
                document.getElementById('l-launcher-text').focus();
            });
  

});
