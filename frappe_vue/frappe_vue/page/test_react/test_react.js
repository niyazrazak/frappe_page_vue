frappe.pages['test-react'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Test React',
		single_column: true
	});
	frappe.require('test_react.bundle.js').then(() => {
        new frappe_react.TestReact({
            wrapper: $(page.main),
            page: page
        });
    });
};