frappe.pages['test-vue'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Test Vue',
		single_column: true
	});

	frappe.require('test_vue.bundle.js').then(() => {
		new frappe_vue.TestVue({ wrapper: page.main, page });
	})
}