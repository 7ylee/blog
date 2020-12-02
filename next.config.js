const prod = process.env.NODE_ENV === 'production';

module.exports = {
    basePath: prod ? '/blog' : '',
    assetPrefix: prod ? '/blog/' : ''
};
