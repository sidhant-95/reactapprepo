export const msalConfig = {
  auth: {
    clientId: "f009895b-bb0c-4c80-931b-39930ee587c5",
    authority: "https://sidhantauthdemo.ciamlogin.com/sidhantauthdemo.onmicrosoft.com",
    knownAuthorities: ["sidhantauthdemo.ciamlogin.com"],
    redirectUri: "https://orange-plant-0c7a55100.2.azurestaticapps.net/"
    //redirectUri: "http://localhost:3000/"
   // protocolMode: "OIDC" 
  }
};

export const loginRequest = {
  scopes: ["api://d0b1868b-b842-4c63-a018-23f4475d016b/access_as_user"]
};