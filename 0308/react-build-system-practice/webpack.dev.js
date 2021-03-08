// node.js
const path = require('path');
const getAbsolutePath = (dirPath) => path.resolve(__dirname, dirPath);

// CommonJS 진영의 내보내기
module.exports = {
  // 번들 모드 설정
  mode: 'development',
  // 엔트리 (진입)
  entry: {
    main: './src/index.js',
  },
  // 출력 설정
  output: {
    // 경로(path)
    path: getAbsolutePath('public'),
    // 파일 이름(filename)
    // main의 이름값이 name으로 들어감
    filename: 'js/[name].js',
    publicPath: '/',
  },
  // 모듈(규칙) - 로더 객체
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  // 개발 서버 설정
  devServer: {
    contentBase: getAbsolutePath('public'),
    index: 'index.html',
    port: 9000,
    hot: true,
  },
};
