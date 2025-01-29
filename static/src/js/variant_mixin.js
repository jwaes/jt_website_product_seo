import VariantMixin from "@website_sale/js/variant_mixin";

const originalOnChangeCombination = VariantMixin._onChangeCombination;

VariantMixin._onChangeCombinationProductPixel = function (ev, $parent, combination) {
    if (window.fbq) {
        window.fbq('track', 'ViewContent');
    };

    originalOnChangeCombination.apply(this, [ev, $parent, combination]);
};

export default VariantMixin;

