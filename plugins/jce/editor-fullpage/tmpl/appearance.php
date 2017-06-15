<?php
/**
 * @package     JCE
 * @copyright   Copyright © 2009-2015 Ryan Demmer. All rights reserved.
 * @license     GNU/GPL 2 or later - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * JCE is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 */
defined('_JEXEC') or die('RESTRICTED');
?>
    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="fontface"><?php echo WFText::_('WF_FULLPAGE_FONTFACE'); ?></label>
        <div class="uk-form-controls uk-width-7-10">
            <select id="fontface" onchange="FullPageDialog.changedStyleProp();">
                <option value=""><?php echo WFText::_('WF_OPTION_NOT_SET'); ?></option>
            </select>
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="fontsize"><?php echo WFText::_('WF_FULLPAGE_FONTSIZE'); ?></label>
        <div class="uk-form-controls uk-width-7-10">
            <select id="fontsize" onchange="FullPageDialog.changedStyleProp();">
                <option value=""><?php echo WFText::_('WF_OPTION_NOT_SET'); ?></option>
            </select>
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="textcolor"><?php echo WFText::_('WF_FULLPAGE_TEXTCOLOR'); ?></label>
        <div class="uk-form-controls uk-width-3-10">
            <input id="textcolor" type="text" value="" class="color" size="9" onchange="FullPageDialog.changedStyleProp();" />
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="bgimage"><?php echo WFText::_('WF_FULLPAGE_BGIMAGE'); ?></label>
        <div class="uk-form-controls uk-width-7-10">
            <input id="bgimage" type="text" value="" class="browser image" onchange="FullPageDialog.changedStyleProp();" />
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="bgcolor"><?php echo WFText::_('WF_FULLPAGE_BGCOLOR'); ?></label>
        <div class="uk-form-controls uk-width-3-10">
            <input id="bgcolor" type="text" value="" size="9" class="color" onchange="FullPageDialog.changedStyleProp();" />
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="leftmargin"><?php echo WFText::_('WF_FULLPAGE_LEFT_MARGIN'); ?></label>
        <div class="uk-form-controls uk-width-1-10"><input id="leftmargin" type="text" value="" onchange="FullPageDialog.changedStyleProp();" /></div>
        <label class="uk-form-label uk-width-3-10 uk-margin-left" for="rightmargin"><?php echo WFText::_('WF_FULLPAGE_RIGHT_MARGIN'); ?></label>
        <div class="uk-form-controls uk-width-1-10"><input id="rightmargin" type="text" value="" onchange="FullPageDialog.changedStyleProp();" /></div>
    </div>
    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="topmargin"><?php echo WFText::_('WF_FULLPAGE_TOP_MARGIN'); ?></label>
        <div class="uk-form-controls uk-width-1-10"><input id="topmargin" type="text" value="" onchange="FullPageDialog.changedStyleProp();" /></div>
        <label class="uk-form-label uk-width-3-10 uk-margin-left" for="bottommargin"><?php echo WFText::_('WF_FULLPAGE_BOTTOM_MARGIN'); ?></label>
        <div class="uk-form-controls uk-width-1-10"><input id="bottommargin" type="text" value="" onchange="FullPageDialog.changedStyleProp();" /></div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="link_color"><?php echo WFText::_('WF_FULLPAGE_LINK_COLOR'); ?></label>
        <div class="uk-form-controls uk-width-3-10">
            <input id="link_color" type="text" class="color" value="" size="9" onchange="FullPageDialog.changedStyleProp();" />
        </div>
    </div>
    <div class="uk-form-row">
    <label class="uk-form-label uk-width-3-10" for="visited_color"><?php echo WFText::_('WF_FULLPAGE_VISITED_COLOR'); ?></label>
        <div class="uk-form-controls uk-width-3-10">
            <input id="visited_color" class="color" type="text" value="" size="9" onchange="FullPageDialog.changedStyleProp();" />
        </div>
        </div>
    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="active_color"><?php echo WFText::_('WF_FULLPAGE_ACTIVE_COLOR'); ?></label>
        <div class="uk-form-controls uk-width-3-10">
            <input id="active_color" class="color" type="text" value="" size="9" onchange="FullPageDialog.changedStyleProp();" />
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="stylesheet"><?php echo WFText::_('WF_FULLPAGE_STYLESHEET'); ?></label>
        <div class="uk-form-controls uk-width-7-10"><input id="stylesheet" class="browser files" data-filter="css,scss,less" type="text" value="" /></div>
    </div>
    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="style"><?php echo WFText::_('WF_FULLPAGE_STYLE'); ?></label>
        <div class="uk-form-controls uk-width-7-10"><input id="style" type="text" value="" onchange="FullPageDialog.changedStyle();" /></div>
    </div>