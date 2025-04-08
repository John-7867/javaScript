const appConfig = {
  appName: "JavaApp",
  version: "2.0.0",
  apiEndpoints: {
    login: "/api/login",
    register: "/api/register"
  },
  isProduction: falce
}

console.log(appConfig.apiEndpoints.login)