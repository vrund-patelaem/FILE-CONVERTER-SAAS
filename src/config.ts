import { ConfigProps } from '@/types'
import themes from 'daisyui/src/theming/themes'

const config: ConfigProps = {
	// REQUIRED
	appName: 'Make Sync Test',
	// REQUIRED: a short description of your app for SEO tags (can be overwritten)
	appDescription:
		'The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app.',
	// REQUIRED (no https://, not trialing slash at the end, just the naked domain)
	domainName: 'website.name',
	stripe: {
		// Create multiple products in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
		products: [
			{
				type: 'subscription',
				period: 'month',
				title: 'Month',
				productId: 'prod_RfcZbURhjSM2hh',
				subtitle: 'Per month price',
				price: 25,
				isBest: true,
				linkTitle: 'PAY MOTHERFUCKER',
				featuresTitle: 'Features',
				priceId: 'price_1QmHJvEAaaUk2802RQ6OimU5',
				features: [
					{
						title: 'Feature 1',
						disabled: false,
					},
					{
						title: 'Feature 2',
						disabled: true,
					},
				],
			},
			{
				type: 'subscription',
				period: 'year',
				productId: 'prod_RfcZbURhjSM2hh',
				title: 'Year',
				subtitle: 'Per year price',
				price: 25,
				linkTitle: 'PAY MOTHERFUCKER YEAR',
				featuresTitle: 'Features VIP',
				priceId: 'price_1QmHJvEAaaUk2802RQ6OimU5',
				features: [
					{
						title: 'Feature 1',
						disabled: false,
					},
					{
						title: 'Feature 2',
						disabled: false,
					},
				],
			},
		],
	},
	colors: {
		// REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
		theme: 'light',
		// REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
		// OR you can just do this to use a custom color: main: "#f37055". HEX only.
		main: themes['light']['primary'],
	},
	resend: {
		// REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
		fromAdmin: `Dennis at MicroSassFast <hello@microsaasfast.me>`,
		// Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
		supportEmail: 'hello@db2.io',
		// When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
		forwardRepliesTo: 'hello@db2.io',
		subjects: {
			thankYou: 'Welcome to MicroSaaSFast',
		},
	},
}

export default config
