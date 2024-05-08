import App from "./App";
import Advantages from "./components/advantages/Advantages";
import ResponsiveAppBar from "./components/appbar/Appbar";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function Routes({ path }) {
    const getComponent = () => {
        switch (path) {
            case "/":
                return <App />
            case "/contact":
                return <Contact />
            case "/advantage-of-school":
                return <Advantages />
            default:
                return <App />
        }
    }

    return (
        <>
            <ResponsiveAppBar />
            {getComponent()}
            <Footer />
        </>
    )
}