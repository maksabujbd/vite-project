import Header from "./component/Header.jsx";
import Hero from "./component/Hero.jsx";
import ContactForm from "./component/ContactForm.jsx";
import Footer from "./component/Footer.jsx";
import {Fragment} from "react";

const App = () => {

    let marks = 90;
    const city = ["Dhaka", "London", "Delhi", "Kolkata", "Chittagong"];
    const status = true;

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
    
    const btnClick = () =>{
        alert('Hello!!!!');
    }
    
    function Demo(){
        alert('Hello Regular Function!!!');
    }
    
    const demo1 = () =>{
        alert('Hello Arrow Function')
    }
    
    const postFromData = (event) =>{
        // Disabled default setting of form
        event.preventDefault(); 
        alert('Form Submitted');
    }

    return (
        <>
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
            
            <div>
                <form onSubmit={postFromData}>
                    <input placeholder='name'/>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </>
    );
};

export default App;