import DataProvider from "../components/dataProvider/DataProvider";
import "../styles/index.scss";

function App({ Component, pageProps }) {
    return (
        <DataProvider>
            <Component {...pageProps} />
        </DataProvider>
    );
}

export default App;
