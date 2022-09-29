odoo.define('jt_website_product_seo.VariantMixin', function (require) {
    'use strict';

    var VariantMixin = require('sale.VariantMixin');
    var publicWidget = require('web.public.widget');

    require('website_sale.website_sale');

    /**
     * Addition to the variant_mixin._onChangeCombination
     *
     * This will prevent the user from selecting a quantity that is not available in the
     * stock for that product.
     *
     * It will also display various info/warning messages regarding the select product's stock.
     *
     * This behavior is only applied for the web shop (and not on the SO form)
     * and only for the main product.
     *
     * @param {MouseEvent} ev
     * @param {$.Element} $parent
     * @param {Array} combination
     */
    VariantMixin._onChangeCombinationProductPixel = function (ev, $parent, combination) {
        if(window.fbq){
            window.fbq('track', 'ViewContent');
        };
    };


    publicWidget.registry.WebsiteSale.include({
        /**
         * Adds the product properties updating to the regular _onChangeCombination method
         * @override
         */
        _onChangeCombination: function () {
            this._super.apply(this, arguments);
            VariantMixin._onChangeCombinationProductPixel.apply(this, arguments);
        },

    });

    return VariantMixin;

});
