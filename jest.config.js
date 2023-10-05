module.exports = {
  testIgnorePatterns: ["/node_modules/", "/.next/"], //faz com que o JEST não procure testes nestas pastas
  setupFilesAfterEnv: [
    //basicamente é uma array de arquivos que eu posso passar para o JEST executar antes dos testes
    "<rootDir>/src/tests/setupTests.js",
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node-modules/babel-jest", //tranforma todo os os arquivos ts para js para o JEST entender
  },
  testEnvironment: "jsdom", //indica em qual ambiente nossos testes estão sendo executado. Para q o JEST consiga simular esse ambiente criando a arvore do DOM em JS
};
