const path = require('path');
const SRC_PATH = path.join(__dirname, '../src');

module.exports = ({ config }) => {
  // Remove the existing css rule
  config.module.rules = config.module.rules.filter(
    f => f.test.toString() !== '/\\.css$/'
  );

  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      include: [SRC_PATH],
      use: [
        {
          loader: 'ts-loader',
        },
        { 
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          query: {
            modules: {
              localIdentName: '[local]__[hash:base64:4]'
            },
          }
        },
      ],
    },
  );
  
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};