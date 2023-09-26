import { getApps, initializeApp, cert } from "firebase-admin/app";
import { ServiceAccount } from 'firebase-admin';
// import firebaseServerConfig from '../service-account.json';

const firebaseServerConfig = {
  type: process.env.NUXT_SA_TYPE,
  project_id: process.env.NUXT_SA_PROJECT_ID,
  private_key_id: process.env.NUXT_SA_PRIVATE_KEY_ID,
  private_key: process.env.NUXT_SA_PRIVATE_KEY,
  client_email: process.env.NUXT_SA_CLIENT_EMAIL,
  client_id: process.env.NUXT_SA_CLIENT_ID,
  auth_uri: process.env.NUXT_SA_AUTH_URI,
  token_uri: process.env.NUXT_SA_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.NUXT_SA_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.NUXT_SA_CLIENT_X509_CERT_URL,
  universe_domain: process.env.NUXT_SA_UNIVERSE_DOMAIN,
}

export default function useFirebaseServer() {
  let app;
  if (getApps().length === 0) {
    app = initializeApp({
      credential: cert(firebaseServerConfig as ServiceAccount)
    });
  }
  return {
    app
  };
}
