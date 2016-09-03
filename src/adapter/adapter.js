/**
 * index.js
 */

const canvas = require('./../canvas/canvas');
const effects = require('./../effects/effects');

const handleType = (type) => {
    switch (type.toLowerCase()) {
        case 'lark':
            return effects.lark;
        case 'reyes':
            return effects.reyes;
        case 'juno':
            return effects.juno;
        case 'slumber':
            return effects.slumber;
        case 'crema':
            return effects.crema;
        case 'ludwig':
            return effects.ludwig;
        case 'aden':
            return effects.aden;
        case 'perpetua':
            return effects.perpetua;
        case 'amaro':
            return effects.amaro;
        case 'mayfair':
            return effects.mayfair;
        case 'rise':
            return effects.rise;
        case 'hudson':
            return effects.hudson;
        case 'valencia':
            return effects.valencia;
        case 'xpro2':
            return effects.xpro2;
        case 'sierra':
            return effects.sierra;
        case 'willow':
            return effects.willow;
        case 'lofi':
            return effects.lofi;
        case 'earlybird':
            return effects.earlybird;
        case 'brannan':
            return effects.brannan;
        case 'inkwell':
            return effects.inkwell;
        case 'hefe':
            return effects.hefe;
        case 'nashville':
            return effects.nashville;
        case 'sutro':
            return effects.sutro;
        case 'toaster':
            return effects.toaster;
        case 'walden':
            return effects.walden;
        case 'nineteenseventyseven':
        case '1977':
            return effects.nineteenSeventySeven;
        case 'kelvin':
            return effects.kelvin;
        case 'enhance':
            return effects.enhance;
        case 'grayscale':
            return effects.grayscale;
        case 'sepia':
            return effects.sepia;
        case 'luminance':
            return effects.luminance;
        case 'opacity':
            return effects.opacity;
        case 'brighten':
            return effects.brighten;
        case 'darken':
            return effects.darken;
        case 'threshold':
            return effects.threshold;
        case 'negaposi':
            return effects.negaposi;
        case 'brightnesscontrast':
            return effects.brightnessContrast;
        case 'huerotate':
            return effects.hueRotate;
        case 'saturate':
            return effects.saturate;
        case 'horizontalflip':
            return effects.horizontalFlip;
        case 'verticalflip':
            return effects.verticalFlip;
        case 'doubleflip':
            return effects.doubleFlip;
        case 'horizontalmirror':
            return effects.horizontalMirror;
        case 'verticalmirror':
            return effects.verticalMirror;
        case 'xymirror':
            return effects.XYMirror;
        default:
            throw new Error(type + 'is not supported');
    }
};

// TODO: implement logic when base64 is passed
// TODO: implement optionsArgs for some effects which use options
// TODO: increase supported options
module.exports.filter = (input, type, optionArgs) => {
    const options = !optionArgs ? optionArgs : {};

    let imageData = input;
    let convertResult = {};
    if (Buffer.isBuffer(input)) {
        convertResult = canvas.convert(input);
        imageData = convertResult.imageData;
    }

    const func = handleType(type);
    const newImageData = func.apply(this, [imageData, options]);

    if (convertResult.context) {
        convertResult.context.putImageData(newImageData, 0, 0);
        return canvas.getBase64(convertResult.canvas);
    }
    return newImageData;
};

