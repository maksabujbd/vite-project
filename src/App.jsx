import Header from "./component/Header.jsx";
import Hero from "./component/Hero.jsx";
import ContactForm from "./component/ContactForm.jsx";
import Footer from "./component/Footer.jsx";
import React, {Fragment, useRef} from "react";
import PersistantMutableValue from "./pages/PersistantMutableValue.jsx";
import CachingUsingUseRef from "./pages/CachingUsingUseRef.jsx";
import UseState from "./pages/UseState.jsx";
import UseStateWithObject from "./pages/UseStateWithObject.jsx";
import TodoAppUsingUseState from "./pages/TodoAppUsingUseState.jsx";
import FormWithUseState from "./pages/FormWithUseState.jsx";
import ExampleUseEffect from "./pages/ExampleUseEffect.jsx";
import ExampleReactRouter from "./pages/ExampleReactRouter.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

const App = () => {

    // let FirstName = useRef();
    // let LastName = useRef();

    let demoRef = useRef();

    const Change = () => {
        demoRef.classList.add('text-primary');
        demoRef.classList.remove('text-success');
    }

    let firstName, lastName = useRef();

    let marks = 90;
    const city = ["Dhaka", "London", "Delhi", "Kolkata", "Chittagong"];
    const status = true;

    const save = () => {
        let fName = firstName.value;
        let lName = lastName.value;
        alert(fName + " " + lName);
    }

    const loginStatusBtn = (status) => {
        if (status) {
            return <button>Logout Btn</button>
        } else {
            return <button>Login Btn</button>
        }
    }

    // switch (status){
    //     case true:
    //         return <button>Logout Btn</button>
    //     case false:
    //         return <button>Login Btn</button>
    //     default:
    //         return null;
    // }

    const ItemObj = {
        id: 1,
        name: 'Abdul Kader',
        age: 36,
        city: 'Dhaka'
    }

    const btnClick = () => {
        alert('Hello!!!!');
    }

    function Demo() {
        alert('Hello Regular Function!!!');
    }

    const demo1 = () => {
        alert('Hello Arrow Function')
    }

    const postFromData = (event) => {
        // Disabled default setting of form
        event.preventDefault();
        alert('Form Submitted');
    }

    let myHeadLine = useRef();

    const change = () => {
        myHeadLine.current.innerHTML = "<ul><li>A</li><li>B</li></ul>";
    }

    let myImg = useRef();
    const imgChange = () => {
        myImg.current.src = "https://placehold.co/800x600";
        myImg.current.setAttribute('height', '200');
        myImg.current.setAttribute('width', '100');
    }

    return (
        <>
            <div className="container">
                {/*<Fragment>*/}
                {/*    <Header/>*/}
                {/*    <Hero/>*/}
                {/*    <ContactForm/>*/}
                {/*    <Footer/>*/}
                {/*</Fragment>*/}

                {/*<div>*/}
                {/*    <h1 style={{color: 'red'}}>Heading</h1>*/}
                {/*    <button onClick={() => alert("Hi, Good Afternoon!")}>Submit</button>*/}

                {/*    {*/}
                {/*        marks >= 80 ? <h1>Brilliant Result</h1> : <h1>Average Result</h1>*/}
                {/*    }*/}
                {/*    /!* immediately invoked function *!/*/}

                {/*    {(*/}
                {/*        () => {*/}
                {/*            if (marks >= 80 && marks < 100) {*/}
                {/*                return <h1>A+</h1>*/}
                {/*            } else if (marks >= 70 && marks < 80) {*/}
                {/*                return <h1>A</h1>*/}
                {/*            } else if (marks >= 60 && marks < 70) {*/}
                {/*                return <h1>B+</h1>*/}
                {/*            } else {*/}
                {/*                return <h1>F</h1>*/}
                {/*            }*/}
                {/*        }*/}
                {/*    )()}*/}

                {/*    /!* Loop inside implementation using map *!/*/}

                {/*    {*/}
                {/*        city.map((item, index) => {*/}
                {/*            return <li key={index.toString()}>{item}</li>*/}
                {/*        })*/}
                {/*    }*/}

                {/*</div>*/}

                {/*/!*    Conditional Rendering    *!/*/}
                {/*<h1>Login Status</h1>*/}
                {/*{loginStatusBtn(true)}*/}

                {/*/!* Ternary or If else *!/*/}

                {/*{*/}
                {/*    status ?*/}
                {/*        <button>Logout Button</button> :*/}
                {/*        <button>Login Button</button>*/}
                {/*}*/}

                {/*/!*    Logical && and ||    *!/*/}

                {/*<br/>*/}
                {/*<h1>Login Status</h1>*/}
                {/*{*/}
                {/*    status && <button>Logout Button1</button>*/}
                {/*}*/}

                {/*/!*    Immediately invoked function for conditional rendering *!/*/}

                {/*{(() => {*/}
                {/*    if (status) {*/}
                {/*        return <button>Logout Button2</button>*/}
                {/*    } else {*/}
                {/*        return <button>Login Button2</button>*/}
                {/*    }*/}
                {/*})()}*/}

                {/*<Hero childBtnClick={btnClick} {...ItemObj}/>*/}
                {/*/!*<ul>*!/*/}
                {/*/!*    <li>Name: {ItemObj['name']}</li>*!/*/}
                {/*/!*    <li>Age: {ItemObj.age}</li>*!/*/}
                {/*/!*    <li>City: {ItemObj.city}</li>*!/*/}
                {/*/!*</ul>*!/*/}

                {/*<div>*/}
                {/*    <button onClick={demo1}>Submit</button>*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*    <form onSubmit={postFromData}>*/}
                {/*        <input placeholder='name'/>*/}
                {/*        <button type="submit">Submit</button>*/}
                {/*    </form>*/}
                {/*</div>*/}

                {/*<h1 ref={myHeadLine}>UseRef</h1>*/}

                {/*<img ref={myImg} src="https://placehold.co/600x400" alt=""/>*/}
                {/*<button onClick={imgChange}>Click</button>*/}
                {/*<br/>*/}
                {/*<br/>*/}
                {/*<div>*/}
                {/*    /!*<input ref={(fname)=>firstName=fname} placeholder="FirstName"/>*!/*/}
                {/*    /!*<br/>*!/*/}
                {/*    /!*<br/>*!/*/}
                {/*    /!*<input ref={(lname)=>lastName=lname} placeholder="LastName"/>*!/*/}
                {/*    /!*<br/>*!/*/}
                {/*    /!*<br/>*!/*/}
                {/*    <input ref={(a)=>firstName=a} placeholder="First Name"/><br/><br/>*/}
                {/*    <input ref={(a)=>lastName=a} placeholder="Last Name"/><br/><br/>*/}
                {/*    */}
                {/*    <button onClick={save}>Submit</button>*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*    <h1 className="text-success" ref={(h)=>demoRef=h}>Learn React</h1>*/}
                {/*    <button className="btn btn-success" onClick={()=>Change()}>Change</button>*/}
                {/*</div>*/}

                {/*<PersistantMutableValue/>*/}

                {/*<CachingUsingUseRef/>*/}

                {/*<UseState/>*/}
                {/*<UseStateWithObject/>*/}
                {/*<TodoAppUsingUseState/>*/}
                {/*<FormWithUseState/>*/}

                {/*<ExampleUseEffect/>*/}

                {/*<ExampleReactRouter/>*/}

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/example-react-router" element={<ExampleReactRouter/>}/>
                        <Route path="/product/:id/:name" element={<ProductPage/>}/>
                        <Route path="profile/:facebookId/:youtubeId" element={<ProfilePage/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>

            </div>
        </>
    );
};

export default App;