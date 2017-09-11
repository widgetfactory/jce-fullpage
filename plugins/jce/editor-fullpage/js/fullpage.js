/**
 * @package   	JCE
 * @copyright 	Copyright © 2009-2015 Ryan Demmer. All rights reserved.
 * @license   	GNU/GPL 2 or later - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * JCE is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 */

(function ($) {
    var defaultDocTypes =
        'XHTML 1.0 Transitional=<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">,' +
        'XHTML 1.0 Frameset=<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">,' +
        'XHTML 1.0 Strict=<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">,' +
        'XHTML 1.1=<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">,' +
        'HTML 4.01 Transitional=<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">,' +
        'HTML 4.01 Strict=<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">,' +
        'HTML 4.01 Frameset=<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">,' +
        'HTML 5=<!DOCTYPE HTML>';

    var defaultEncodings =
        'Western european (iso-8859-1)=iso-8859-1,' +
        'Central European (iso-8859-2)=iso-8859-2,' +
        'Unicode (UTF-8)=utf-8,' +
        'Chinese traditional (Big5)=big5,' +
        'Cyrillic (iso-8859-5)=iso-8859-5,' +
        'Japanese (iso-2022-jp)=iso-2022-jp,' +
        'Greek (iso-8859-7)=iso-8859-7,' +
        'Korean (iso-2022-kr)=iso-2022-kr,' +
        'ASCII (us-ascii)=us-ascii';

    var defaultFontNames = 'Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,times new roman,times,serif;Tahoma=tahoma,arial,helvetica,sans-serif;Times New Roman=times new roman,times,serif;Verdana=verdana,arial,helvetica,sans-serif;Impact=impact;WingDings=wingdings';
    var defaultFontSizes = '10px,11px,12px,13px,14px,15px,16px';

    var FullPageDialog = {
        settings: {},
        changedStyle: function () {
            var val, styles = tinyMCEPopup.editor.dom.parseStyle($('#style').val());

            $('#fontface').val(styles['font-face']);
            $('#fontsize').val(styles['font-size']);
            $('#textcolor').val(styles['color']);

            if (val = styles['background-image']) {
                $('#bgimage').val(val.replace(new RegExp("url\\('?([^']*)'?\\)", 'gi'), "$1"));
            } else {
                $('#bgimage').val('');
            }
            $('#bgcolor').val(styles['background-color']);

            // Reset margin form elements
            $('#topmargin').val('');
            $('#rightmargin').val('');
            $('#bottommargin').val('');
            $('#leftmargin').val('');

            // Expand margin
            if (val = styles['margin']) {
                val = val.split(' ');
                styles['margin-top'] = val[0] || '';
                styles['margin-right'] = val[1] || val[0] || '';
                styles['margin-bottom'] = val[2] || val[0] || '';
                styles['margin-left'] = val[3] || val[0] || '';
            }

            if (val = styles['margin-top']) {
                $('#topmargin').val(val.replace(/px/, ''));
            }
            if (val = styles['margin-right']) {
                $('#rightmargin').val(val.replace(/px/, ''));
            }
            if (val = styles['margin-bottom']) {
                $('#bottommargin').val(val.replace(/px/, ''));
            }
            if (val = styles['margin-left']) {
                $('#leftmargin').val(val.replace(/px/, ''));
            }
        },
        changedStyleProp: function () {
            var val, dom = tinyMCEPopup.editor.dom,
                styles = dom.parseStyle($('#style').val());

            styles['font-face'] = $('#fontface').val();
            styles['font-size'] = $('#fontsize').val();
            styles['color'] = $('#textcolor').val();
            styles['background-color'] = $('#bgcolor').val();

            if (val = $('#bgimage').val()) {
                styles['background-image'] = "url('" + val + "')";
            } else {
                styles['background-image'] = '';
            }

            delete styles['margin'];

            if (val = $('#topmargin').val()) {
                styles['margin-top'] = val + "px";
            } else {
                styles['margin-top'] = '';
            }

            if (val = $('#rightmargin').val()) {
                styles['margin-right'] = val + "px";
            } else {
                styles['margin-right'] = '';
            }

            if (val = $('#bottommargin').val()) {
                styles['margin-bottom'] = val + "px";
            } else {
                styles['margin-bottom'] = '';
            }

            if (val = $('#leftmargin').val()) {
                styles['margin-left'] = val + "px";
            } else {
                styles['margin-left'] = '';
            }

            // Serialize, parse and reserialize this will compress redundant styles
            $('#style').val(dom.serializeStyle(dom.parseStyle(dom.serializeStyle(styles))));
            this.changedStyle();
        },
        update: function () {
            var data = {};

            tinymce.each(tinyMCEPopup.dom.select('select,input,textarea'), function (node) {
                data[node.id] = $('#' + node.id).val();
            });

            tinyMCEPopup.editor.plugins.fullpage._dataToHtml(data);
            tinyMCEPopup.close();
        },
        init: function () {
            var form = document.forms[0],
                i, item, list, editor = tinyMCEPopup.editor;

            // Setup doctype select box
            list = editor.getParam("fullpage_doctypes", defaultDocTypes).split(',');
            for (i = 0; i < list.length; i++) {
                item = list[i].split('=');

                if (item.length > 1) {
                    $('#doctype').append(new Option(item[0], item[1]));
                }
            }

            // Setup fonts select box
            list = editor.getParam("theme_advanced_fonts", defaultFontNames).split(';');

            for (i = 0; i < list.length; i++) {
                item = list[i].split('=');

                if (item.length > 1) {
                    $('#fontface').append(new Option(item[0], item[1]));
                }
            }

            // Setup fontsize select box
            list = editor.getParam("fullpage_fontsizes", defaultFontSizes).split(',');

            for (i = 0; i < list.length; i++) {                
                $('#fontsize').append(new Option(list[i], list[i]));
            }

            // Setup encodings select box
            list = editor.getParam("fullpage_encodings", defaultEncodings).split(',');
            for (i = 0; i < list.length; i++) {
                item = list[i].split('=');

                if (item.length > 1) {
                    $('#docencoding').append(new Option(item[0], item[1]));
                }
            }

            // Update form
            tinymce.each(tinyMCEPopup.getWindowArg('data'), function (value, key) {
                $('#' + key).val(value);
            });

            Wf.init();
            
            FullPageDialog.changedStyle();
        }
    };

    window.FullPageDialog = FullPageDialog;

    tinyMCEPopup.onInit.add(FullPageDialog.init, FullPageDialog);
})(jQuery);
