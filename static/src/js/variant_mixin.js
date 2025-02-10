import VariantMixin from "@website_sale/js/sale_variant_mixin";

const originalOnChangeCombination = VariantMixin._onChangeCombination;

VariantMixin._onChangeCombinationProductPixel = function (ev, $parent, combination) {
    if (window.fbq) {
        window.fbq('track', 'ViewContent');
    };

    originalOnChangeCombination.apply(this, [ev, $parent, combination]);
};

export default VariantMixin;

