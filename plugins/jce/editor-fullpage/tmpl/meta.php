<?php
/**
 * @package       JCE
 * @copyright     Copyright © 2009-2015 Ryan Demmer. All rights reserved.
 * @license       GNU/GPL 2 or later - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * JCE is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 */
defined('_JEXEC') or die('RESTRICTED');
?>
    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="title"><?php echo WFText::_('WF_FULLPAGE_META_TITLE'); ?></label>
        <div class="uk-form-controls uk-width-7-10">
            <input type="text" id="title" value="" />
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="keywords"><?php echo WFText::_('WF_FULLPAGE_META_KEYWORDS'); ?></label>
        <div class="uk-form-controls uk-width-7-10">
            <textarea id="keywords" rows="2"></textarea>
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="metadescription"><?php echo WFText::_('WF_FULLPAGE_META_DESCRIPTION'); ?></label>
        <div class="uk-form-controls uk-width-7-10">
            <textarea id="description" rows="2"></textarea>
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="author"><?php echo WFText::_('WF_FULLPAGE_AUTHOR'); ?></label>
        <div class="uk-form-controls uk-width-7-10"><input type="text" id="author" value="" /></div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="copyright"><?php echo WFText::_('WF_FULLPAGE_COPYRIGHT'); ?></label>
        <div class="uk-form-controls uk-width-7-10">
            <input type="text" id="copyright" value="" />
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="robots"><?php echo WFText::_('WF_FULLPAGE_META_ROBOTS'); ?></label>
        <div class="uk-form-controls uk-width-7-10">
            <select id="robots">
                    <option value=""><?php echo WFText::_('WF_OPTION_NOT_SET'); ?></option>
                    <option value="index,follow"><?php echo WFText::_('WF_FULLPAGE_META_INDEX_FOLLOW'); ?></option>
                    <option value="index,nofollow"><?php echo WFText::_('WF_FULLPAGE_META_INDEX_NOFOLLOW'); ?></option>
                    <option value="noindex,follow"><?php echo WFText::_('WF_FULLPAGE_META_NOINDEX_FOLLOW'); ?></option>
                    <option value="noindex,nofollow"><?php echo WFText::_('WF_FULLPAGE_META_NOINDEX_NOFOLLOW'); ?></option>
            </select>
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="docencoding"><?php echo WFText::_('WF_FULLPAGE_ENCODING'); ?></label>
        <div class="uk-form-controls uk-width-7-10">
            <select id="docencoding">
                    <option value=""><?php echo WFText::_('WF_OPTION_NOT_SET'); ?></option>
            </select>
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="doctype"><?php echo WFText::_('WF_FULLPAGE_DOCTYPES'); ?></label>
        <div class="uk-form-controls uk-width-7-10">
            <select id="doctype">
                <option value=""><?php echo WFText::_('WF_OPTION_NOT_SET'); ?></option>
            </select>
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="langcode"><?php echo WFText::_('WF_FULLPAGE_LANGCODE'); ?></label>
        <div class="uk-form-controls uk-width-7-10">
            <input type="text" id="langcode" value="" />
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="langdir"><?php echo WFText::_('WF_FULLPAGE_LANGDIR'); ?></label>
        <div class="uk-form-controls uk-width-7-10">
            <select id="langdir">
                <option value=""><?php echo WFText::_('WF_OPTION_NOT_SET'); ?></option>
                <option value="ltr"><?php echo WFText::_('WF_FULLPAGE_LTR'); ?></option>
                <option value="rtl"><?php echo WFText::_('WF_FULLPAGE_RTL'); ?></option>
            </select>
        </div>
    </div>

    <div class="uk-form-row">
        <label class="uk-form-label uk-width-3-10" for="xml_pi"><?php echo WFText::_('WF_FULLPAGE_XML_PI'); ?></label>
        <div class="uk-form-controls uk-width-7-10">
            <input type="checkbox" id="xml_pi" class="checkbox" />
        </div>
    </div>