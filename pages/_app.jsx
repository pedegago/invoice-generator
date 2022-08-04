import DataProvider from "../components/dataProvider/DataProvider";
import Pwa from "../components/pwa/Pwa";
import "../styles/index.scss";

function App({ Component, pageProps }) {
    return (
        <DataProvider>
            <Pwa business="Invoice Generator" themeColor="#425b76" />
            <Component {...pageProps} />
        </DataProvider>
    );
}

export default App;
