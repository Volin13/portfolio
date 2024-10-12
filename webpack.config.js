const webpack = require('webpack');
const path = require('path');
const languages = ['en', 'uk'];
const translationsContext = require('./src/data/translations.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    index: './src/js/index.js',
    gallery: './src/js/gallery.js',
    projectDetails: './src/js/projectDetails.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/portfolio/',
    // publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|webp|png|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
      {
        test: /\.webmanifest$/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
        },
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'handlebars-loader',
            options: {
              inlineRequires: false,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    ...languages.map(lang => {
      return new HtmlWebpackPlugin({
        filename: `index_${lang}.html`,
        template: `./src/index.hbs`,
        chunks: ['index'],
        templateParameters: {
          currentLang: lang,
          translations: translationsContext[lang],
        },
      });
    }),
    ...languages.map(lang => {
      return new HtmlWebpackPlugin({
        filename: `gallery_${lang}.html`,
        template: './src/gallery.hbs',
        chunks: ['gallery'],
        templateParameters: {
          currentLang: lang,
          translations: translationsContext[lang],
        },
      });
    }),
    ...languages.flatMap(lang => {
      const projects = require(`./src/data/samples_${lang}.json`);
      return projects.items.map(item => {
        return new HtmlWebpackPlugin({
          filename: `projectDetails-${item.id}_${lang}.html`,
          template: './src/templates/projectDetails.hbs',
          chunks: ['common', 'projectDetails'],
          templateParameters: {
            ...item,
            lang,
            currentLang: lang,
            translations: translationsContext[lang],
          },
        });
      });
    }),
    // ...projects.items.map(item => {
    //   return new HtmlWebpackPlugin({
    //     filename: `projectDetails-${item.id}.html`,
    //     template: './src/templates/projectDetails.hbs',
    //     chunks: ['common', 'projectDetails'],
    //     templateParameters: item,
    //   });
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new CompressionPlugin(),
    ...(process.env.NODE_ENV === 'development'
      ? [
          new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false,
            cleanOnceBeforeBuildPatterns: ['**/*', '!assets/**/*'],
          }),
        ]
      : []),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets/skills',
          to: 'assets',
        },
      ],
    }),
    new TerserPlugin(),
    new CssMinimizerPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: {
      // rewrites: [
      //   {
      //     from: /^\/projects\/(\d+)(\?lang=(en|uk))?$/,
      //     to: context => {
      //       const searchParams = new URLSearchParams(context.parsedUrl.search);
      //       const id = context.parsedUrl.pathname.split('/').pop();
      //       const lang = searchParams.get('lang') || 'uk';
      //       return `/projectDetails-${id}_${lang}.html`;
      //     },
      //   },
      //   { from: /^\/$/, to: '/index_uk.html' },
      //   {
      //     from: /^\/(\?lang=uk)?$/,
      //     to: '/index_uk.html',
      //   },
      //   {
      //     from: /^\/(\?lang=en)?$/,
      //     to: '/index_en.html',
      //   },
      //   {
      //     from: /.*\.webmanifest$/,
      //     to: '/site.webmanifest',
      //   },
      //   {
      //     from: /^\/gallery(\?lang=en)?$/,
      //     to: '/gallery_en.html',
      //   },
      //   {
      //     from: /^\/gallery(\?lang=uk)?$/,
      //     to: '/gallery_uk.html',
      //   },
      // ],
      rewrites: [
        { from: /^\/portfolio\/$/, to: '/index_uk.html' },
        { from: /^\/portfolio\/(\?lang=uk)?$/, to: '/index_uk.html' },
        { from: /^\/portfolio\/(\?lang=en)?$/, to: '/index_en.html' },
        {
          from: /^\/portfolio\/gallery(\?lang=en)?$/,
          to: '/gallery_en.html',
        },
        {
          from: /^\/portfolio\/gallery(\?lang=uk)?$/,
          to: '/gallery_uk.html',
        },
      ],
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: 'all',
          minChunks: 2,
          name: 'common',
          priority: -10,
          enforce: true,
        },
      },
    },
  },
};
