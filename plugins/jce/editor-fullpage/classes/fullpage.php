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

require_once WF_EDITOR_LIBRARIES . '/classes/plugin.php';

class WFFullpagePlugin extends WFEditorPlugin
{
    public function __construct()
    {
        parent::__construct(
            array(
                'colorpicker' => true,
                'base_path' => dirname(__DIR__)
            )
        );

        WFLanguage::load('plg_jce_editor_fullpage', JPATH_ADMINISTRATOR);
    }

    public function display()
    {
        parent::display();

        $document = WFDocument::getInstance();

        $document->setTitle(WFText::_('WF_FULLPAGE_TITLE'));

        $document->addScript(array('plugins/jce/editor-fullpage/js/fullpage.js'), 'joomla');
        $document->addStyleSheet(array('plugins/jce/editor-fullpage/css/fullpage.css'), 'joomla');

        $document->addScriptDeclaration('FullPageDialog.settings='.json_encode($this->getSettings()).';');

        $tabs = WFTabs::getInstance(array('base_path' => WF_EDITOR_PLUGIN));

        $tabs->addTab('meta');
        $tabs->addTab('appearance');
    }
}
