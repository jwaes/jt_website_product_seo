# -*- coding: utf-8 -*-
{
    'name': "jt_website_product_seo",


    'summary': "Website sale changes for Google search console products",

    'description': "",

    'author': "jaco tech",
    'website': "https://jaco.tech",
    "license": "AGPL-3",


    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.14',

    # any module necessary for this one to work correctly
    'depends': ['base', "website_sale"],

    # always loaded
    'data': [
        'views/res_config_settings_views.xml',
        'views/website_sale_templates.xml',
        'views/website_templates.xml',
    ],
    # only loaded in demonstration mode
    'demo': [

    ],
    'assets': {
        'web.assets_frontend': [
            'sale/static/src/js/variant_mixin.js',
            'website_sale/static/src/js/variant_mixin.js',
            'jt_website_product_seo/static/src/js/pixel.js',
            'jt_website_product_seo/static/src/js/variant_mixin.js',
        ],
    },
}
