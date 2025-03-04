import Home from './Home.jsx';
import React from 'react';
import { createRoot } from 'react-dom/client';

frappe.provide('frappe_react');

frappe_react.TestReact = class TestReact {
    constructor({ wrapper, page }) {
        console.log("Bundle....");
        
        this.$wrapper = wrapper;
        this.page = page;

        const $container = $('<div>');
        $container.appendTo(this.$wrapper);

        $('.page-head').remove();

        const root = createRoot($container.get(0));
        root.render(<Home />);
    }
};