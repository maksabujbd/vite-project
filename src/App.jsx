import Header from "./component/Header.jsx";
import Hero from "./component/Hero.jsx";
import ContactForm from "./component/ContactForm.jsx";
import Footer from "./component/Footer.jsx";
import {Fragment} from "react";

const App = () => {

    let marks = 80;
    const city = ["Dhaka", "London", "Delhi", "Kolkata", "Chittagong"];
    return (
        <>
            <Fragment>
                <Header/>
                <Hero/>
                <ContactForm/>
                <Footer/>
            </Fragment>

            <div>
                <h1 style={{color: 'red'}}>Heading</h1>
                <button onClick={() => alert("Hi, Good Afternoon!")}>Submit</button>

                {
                    marks >= 80 ? <h1>Brilliant Result</h1> : <h1>Average Result</h1>
                }
                {/* immediately invoked function */}

                {(
                    () => {
                        if (marks >= 80 && marks < 100) {
                            return <h1>A+</h1>
                        } else if (marks >= 70 && marks < 80) {
                            return <h1>A</h1>
                        } else if (marks >= 60 && marks < 70) {
                            return <h1>B+</h1>
                        } else {
                            return <h1>F</h1>
                        }
                    }
                )()}

                {/*    Loop inside implementation using map */}

                {
                    city.map((item, index) => {
                        return <li key={index.toString()}>{item}</li>
                    })
                }

            </div>

        </>
    );
};

export default App;