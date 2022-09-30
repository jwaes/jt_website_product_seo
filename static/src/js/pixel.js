odoo.define('jt_website_product_seo.tracking', function (require) {

    var publicWidget = require('web.public.widget');

    publicWidget.registry.websiteSaleTrackingMetaPixel = publicWidget.Widget.extend({
        selector: '.oe_website_sale',
        events: {
            'click form[action="/shop/cart/update"] a.a-submit': '_onAddProductIntoCart',
            'click a[href="/shop/checkout"]': '_onCheckoutStart',
            'view_item_event': '_onViewItemX',
            'add_to_cart_event': '_onAddToCart',
        },


        /**
         * @override
         */
        start: function () {
            var self = this;

            // ...
            const $confirmation = this.$('div.oe_website_sale_tx_status');
            if ($confirmation.length) {
                const json = $confirmation.data('order-tracking-info');
                self._trackMetaPixel('track', 'purchase', json);
            }

            return this._super.apply(this, arguments);
        },

        //--------------------------------------------------------------------------
        // Private
        //--------------------------------------------------------------------------

        /**
         * @private
         */
        _trackMetaPixel: function () {
            if(window.fbq){
                const websiteFBQ = window.fbq || function () { };
                websiteFBQ.apply(this, arguments);
            };
        },



        //--------------------------------------------------------------------------
        // Handlers
        //--------------------------------------------------------------------------

        /**
         * @private
         */
        _onViewItemX(event, ...productsTrackingInfo) {
            console.log('view item ... ');
            this._trackMetaPixel('track', 'ViewContent');
        },

        /**
         * @private
         */
        _onAddToCart(event, ...productsTrackingInfo) {
            this._trackMetaPixel('track', 'AddToCart');
        },

        /**
         * @private
         */
        _onAddProductIntoCart: function () {
            this._trackMetaPixel('track', 'AddToCart');
        },
        /**
         * @private
         */
        _onCheckoutStart: function () {
            this._trackMetaPixel('track', 'InitiateCheckout');
        },


    });


    return publicWidget.registry.websiteSaleTrackingMetaPixel;

});