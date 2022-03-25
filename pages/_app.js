import '../styles/globals.css';
import Layout from '../components/Layout';
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </Layout>
  )
}

export default MyApp;