import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    // auth provider
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
