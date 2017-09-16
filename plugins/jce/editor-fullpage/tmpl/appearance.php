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
        <label class="uk-form-label uk-width-3-10" for="font-family"><?php echo WFText::_('WF_FULLPAGE_FONTFACE'); ?></label>
        <div class="uk-form-controls uk-width-7-10">
            <select id="font-family">
                <option value=""><?php echo WFText::_('WF_OPTION_NOT_SET'); ?></option>
            </select>
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="font-size"><?php echo WFText::_('WF_FULLPAGE_FONTSIZE'); ?></label>
        <div class="uk-form-controls uk-width-7-10">
            <select id="font-size">
                <option value=""><?php echo WFText::_('WF_OPTION_NOT_SET'); ?></option>
            </select>
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="color"><?php echo WFText::_('WF_FULLPAGE_TEXTCOLOR'); ?></label>
        <div class="uk-form-controls uk-width-3-10">
            <input id="color" type="text" value="" class="color" size="9" />
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="background-image"><?php echo WFText::_('WF_FULLPAGE_BGIMAGE'); ?></label>
        <div class="uk-form-controls uk-width-7-10">
            <input id="background-image" type="text" value="" class="browser image" />
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="background-color"><?php echo WFText::_('WF_FULLPAGE_BGCOLOR'); ?></label>
        <div class="uk-form-controls uk-width-3-10">
            <input id="background-color" type="text" value="" size="9" class="color" />
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="link_color"><?php echo WFText::_('WF_FULLPAGE_LINK_COLOR'); ?></label>
        <div class="uk-form-controls uk-width-3-10">
            <input id="link_color" type="text" class="color" value="" size="9" />
        </div>
    </div>
    <div class="uk-form-row">
    <label class="uk-form-label uk-width-3-10" for="visited_color"><?php echo WFText::_('WF_FULLPAGE_VISITED_COLOR'); ?></label>
        <div class="uk-form-controls uk-width-3-10">
            <input id="visited_color" class="color" type="text" value="" size="9" />
        </div>
        </div>
    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="active_color"><?php echo WFText::_('WF_FULLPAGE_ACTIVE_COLOR'); ?></label>
        <div class="uk-form-controls uk-width-3-10">
            <input id="active_color" class="color" type="text" value="" size="9" />
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="stylesheets"><?php echo WFText::_('WF_FULLPAGE_STYLESHEET'); ?></label>
        <div class="uk-form-controls uk-width-7-10"><input id="stylesheets" class="browser files" data-filter="css,scss,less" type="text" value="" /></div>
    </div>
    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="style"><?php echo WFText::_('WF_FULLPAGE_STYLE'); ?></label>
        <div class="uk-form-controls uk-width-7-10"><input id="style" type="text" value="" /></div>
    </div>