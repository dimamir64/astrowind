/* eslint-disable no-mixed-spaces-and-tabs */
//import React from "@astrojs/react";
//import * as React from 'react';
import GjsEditor from '@grapesjs/react';
import type { Editor } from 'grapesjs';

export default function GPjsEdit() {
  const onEditor = (editor: Editor) => {
    console.log('Editor loaded', { editor });
  };

  return (
    <GjsEditor
      grapesjs="https://unpkg.com/grapesjs"
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      content= '<div style="padding-top:50px; padding-bottom:50px; text-align:center">Test block</div>'
      options={{
        height: '80vh',
        storageManager: {
            id: 'gjs-',             // Prefix identifier that will be used inside storing and loading
            type: 'local',          // Type of the storage
            autosave: true,         // Store data automatically
            autoload: true,         // Autoload stored data on init
            stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
            storeComponents: false, // Enable/Disable storing of components in JSON format
            storeStyles: false,     // Enable/Disable storing of rules/style in JSON format
            storeHtml: true,        // Enable/Disable storing of components as HTML string
            storeCss: true,         // Enable/Disable storing of rules/style as CSS string
        },
        fromElement: true,
        pageManager: true,
        showOffsets: true
        }}
      i18n= {{
         locale: 'ru', // default locale
         localeFallback: "ru",
        messages: { ru: 'ru' },
     }}
      plugins={[
        {
          id: 'grapesjs-advance-components',
          src: 'https://unpkg.com/grapesjs-advance-componentsreset-webpage',
        },
        {
          id: 'grapesjs-project-manager-plus',
          src: 'https://unpkg.com/grapesjs-project-manager-plus',
        },
        {
          id: 'grapesjs-template-manager',
          src: 'https://unpkg.com/grapesjs-template-manager',
        },
        {
          id: 'gjs-blocks-basic',
          src: 'https://unpkg.com/grapesjs-blocks-basic',
        },
        {
          id: 'grapesjs-blocks-flexbox',
          src: 'https://unpkg.com/grapesjs-blocks-flexbox',
        },
        {
          id: 'grapesjs-tui-image-editor',
          src: 'https://unpkg.com/grapesjs-tui-image-editor',
        },
        {
          id: 'grapesjs-tabs',
          src: 'https://unpkg.com/grapesjs-tabs',
        },
        {
          id: 'grapesjs-indexeddb',
          src: 'https://unpkg.com/grapesjs-indexeddb',
        },
        {
          id: 'grapesjs-navbar',
          src: 'https://unpkg.com/grapesjs-navbar',
        },
        {
          id: 'grapesjs-component-countdown',
          src: 'https://unpkg.com/grapesjs-component-countdown',
        },

        {
          id: 'grapesjs-plugin-forms',
          src: 'https://unpkg.com/grapesjs-plugin-forms',
        },
        {
          id: 'grapesjs-plugin-export',
          src: 'https://unpkg.com/grapesjs-plugin-export',
        },
        {
          id: 'grapesjs-custom-code',
          src: 'https://unpkg.com/grapesjs-custom-code',
        },
        {
          id: 'grapesjs-touch',
          src: 'https://unpkg.com/grapesjs-touch',
        },
        {
          id: 'grapesjs-parser-postcss',
          src: 'https://unpkg.com/grapesjs-parser-postcss',
        },
        {
          id: 'grapesjs-tooltip',
          src: 'https://unpkg.com/grapesjs-tooltip',
        },
        {
          id: 'grapesjs-typed',
          src: 'https://unpkg.com/grapesjs-typed',
        },
        {
          id: 'grapesjs-style-bg',
          src: 'https://unpkg.com/grapesjs-style-bg',
        },
        {
          id: 'grapesjs-plugin-ckeditor',
          src: 'https://unpkg.com/grapesjs-plugin-ckeditor',
        },
        {
          id: 'grapesjs-preset-webpage',
          src: 'https://unpkg.com/grapesjs-preset-webpage',
        },
      ]}
      onEditor={onEditor}
    />
  );
}
