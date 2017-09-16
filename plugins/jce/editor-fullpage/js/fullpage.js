/**
 * @package   	JCE
 * @copyright 	Copyright © 2009-2017 Ryan Demmer. All rights reserved.
 * @license   	GNU/GPL 2 or later - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * JCE is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 */

(function ($, Wf) {
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

    function convertRGBToHex(col) {
        var re = new RegExp("rgb\\s*\\(\\s*([0-9]+).*,\\s*([0-9]+).*,\\s*([0-9]+).*\\)", "gi");

        var rgb = col.replace(re, "$1,$2,$3").split(',');
        if (rgb.length == 3) {
            r = parseInt(rgb[0]).toString(16);
            g = parseInt(rgb[1]).toString(16);
            b = parseInt(rgb[2]).toString(16);

            r = r.length == 1 ? '0' + r : r;
            g = g.length == 1 ? '0' + g : g;
            b = b.length == 1 ? '0' + b : b;

            return "#" + r + g + b;
        }

        return col;
    }

    function convertHexToRGB(col) {
        if (col.indexOf('#') != -1) {
            col = col.replace(new RegExp('[^0-9A-F]', 'gi'), '');

            r = parseInt(col.substring(0, 2), 16);
            g = parseInt(col.substring(2, 4), 16);
            b = parseInt(col.substring(4, 6), 16);

            return "rgb(" + r + "," + g + "," + b + ")";
        }

        return col;
    }

    var attribsMap = {
        "font-family": "font-family",
        "font-size": "font-size",
        "color": "color",
        "background-image": "background-image",
        "background-color": "background-color"
    };

    var FullPageDialog = {
        settings: {},

        setStyles: function () {
            var ed = tinyMCEPopup.editor;
            // create proxy element to extract styles from
            var $proxy = $('<div />'),
                proxy = $proxy.get(0);
            // update with table styles
            $proxy.attr('style', $('#style').val());

            $.each(['background-image', 'background-color', 'color', 'font-size', 'font-family'], function (i, k) {
                var v = ed.dom.getStyle(proxy, k);

                // delete all values
                $proxy.css(k, "");

                if (k === "background-image" && v) {
                    v = v.replace(new RegExp("url\\(['\"]?([^'\"]*)['\"]?\\)", 'gi'), "$1");
                }

                if (k === "background-color" && v) {
                    v = convertRGBToHex(v);
                }

                if (k === "color" && v) {
                    v = convertRGBToHex(v);
                }

                if (k === "font-family" && v) {
                    v = v.toLowerCase();
                }

                // get mapped attribute name
                k = attribsMap[k] || k;

                // update form
                $('#' + k).val(v).change();
            });

            var styles = ed.dom.parseStyle($proxy.attr('style'));

            // remove -moz and -webkit styles
            for (k in styles) {
                if (k.indexOf('-moz-') >= 0 || k.indexOf('-webkit-') >= 0) {
                    delete styles[k];
                }
            }

            // Merge
            $('#style').val(ed.dom.serializeStyle(styles));
        },

        getStyles: function () {
            var dom = tinyMCEPopup.editor.dom;

            var style = $('#style').val();

            var styles = {};

            // values as styles
            $.each(['background-image', 'background-color', 'color', 'font-size', 'font-family'], function (i, k) {
                k = attribsMap[k] || k;

                var v = $('#' + k).val();

                if (k === "background-image") {
                    if (v !== "") {
                        v = 'url("' + v + '")';
                    }
                }

                if (k === "background-color" && v) {
                    if (v !== "") {
                        v = v.charAt(0) === "#" ? v : '#' + v;
                    }
                }

                if (k === "color" && v) {
                    if (v !== "") {
                        v = v.charAt(0) === "#" ? v : '#' + v;
                    }
                }

                styles[k] = v;
            });

            // combine styles
            style = dom.serializeStyle($.extend(dom.parseStyle(style), styles));
            // serialize again to compress
            style = dom.serializeStyle(dom.parseStyle(style));

            return style;
        },

        update: function () {
            var self = this,
                data = {};

            $('select,input,textarea').each(function () {
                var value = $(this).val(),
                    id = this.id;

                // skip inline styles
                if (attribsMap[id]) {
                    return;
                }

                // update styles
                if (id === "style") {
                    value = self.getStyles();
                }

                if ($(this).is(':checkbox')) {
                    value = !!$(this).prop('checked');
                }

                if ($(this).hasClass('color') && value.charAt(0) !== "#") {
                    value = "#" + value;
                }

                data[this.id] = value;
            });

            if (data.stylesheets && typeof data.stylesheets === "string") {
                data.stylesheets = [data.stylesheets];
            }

            tinyMCEPopup.editor.plugins.fullpage.dataToHtml(data);
            tinyMCEPopup.close();
        },

        init: function () {
            var self = this,
                item, list, editor = tinyMCEPopup.editor;

            var doctypeMap = {};

            // Setup doctype select box
            list = editor.getParam("fullpage_doctypes", defaultDocTypes).split(',');

            for (var i = 0; i < list.length; i++) {
                item = list[i].split('=');

                if (item.length > 1) {
                    doctypeMap[item[1]] = item[0];
                    $('#doctype').append(new Option(item[0], item[1]));
                }
            }

            // Setup fonts select box
            list = editor.getParam("theme_advanced_fonts", defaultFontNames).split(';');

            for (var i = 0; i < list.length; i++) {
                item = list[i].split('=');

                if (item.length > 1) {
                    $('#font-family').append(new Option(item[0], item[1]));
                }
            }

            // Setup fontsize select box
            list = editor.getParam("fullpage_fontsizes", defaultFontSizes).split(',');

            for (var i = 0; i < list.length; i++) {
                $('#font-size').append(new Option(list[i], list[i]));
            }

            // Setup encodings select box
            list = editor.getParam("fullpage_encodings", defaultEncodings).split(',');

            for (var i = 0; i < list.length; i++) {
                item = list[i].split('=');

                if (item.length > 1) {
                    $('#docencoding').append(new Option(item[0], item[1]));
                }
            }

            $('#style').on('change', function () {
                self.setStyles();
            });

            var data = tinyMCEPopup.getWindowArg('data');

            // Update form
            $.each(data, function (key, value) {
                if ($('#' + key).is(':checkbox')) {
                    $('#' + key).prop('checked', !!value).change();
                } else {                    
                    $('#' + key).val(function () {                        
                        if (this.nodeName === "SELECT") {
                            $('option', this).each(function () {                                
                                if (value.toLowerCase() === this.value.toLowerCase()) {
                                    value = this.value;

                                    return true;
                                }
                            });
                        }

                        return value;
                    }).change();
                }
            });

            Wf.init();
        }
    };

    window.FullPageDialog = FullPageDialog;

    tinyMCEPopup.onInit.add(FullPageDialog.init, FullPageDialog);
})(jQuery, Wf);
