// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	// we deactivate the Server Side Rendering
	ssr: false,
  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_FIREBASE_API_KEY,
      authDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NUXT_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NUXT_FIREBASE_SENDER_ID,
      appId: process.env.NUXT_FIREBASE_APP_ID,
      measurementId: process.env.NUXT_FIREBASE_ANALYTICS_ID,
    }
	},
	// Add nuxt-vuefire module
	modules: [
    "nuxt-vuefire",
    'nuxt-icon',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
		["@nuxtjs/google-fonts", {
			families: {
				Quicksand: true,
			},
      preload: true,
      display: 'swap'
		}],
  ],
	vuefire: {
		auth: true, // enable Firebase Authentication
		config: {
      apiKey: process.env.NUXT_FIREBASE_API_KEY,
      authDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NUXT_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NUXT_FIREBASE_SENDER_ID,
      appId: process.env.NUXT_FIREBASE_APP_ID,
      measurementId: process.env.NUXT_FIREBASE_ANALYTICS_ID,
		},
	},
  pinia: {
    autoImports: [
      ['defineStore', 'definePiniaStore'],
    ],
  },
  css: ['~/assets/css/main.css'],
});
