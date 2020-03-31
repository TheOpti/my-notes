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
  
  config.resolve = {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      components: path.resolve(__dirname, '../src/components/'),
      containers: path.resolve(__dirname, '../src/containers/'),
      context: path.resolve(__dirname, '../src/context/'),
      pages: path.resolve(__dirname, '../src/pages/'),
    }
  };

  return config;
};