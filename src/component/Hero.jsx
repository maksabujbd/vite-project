const Hero = (props) => {

    // let obj = props.item;
    
    // let data = ...this.props;
    // return (
    //     <div>
    //         {/*<h1>{props.title}</h1>*/}
    //         {/*<p>{props.desc}</p>*/}
    //         {/*{console.warn(props.item)}*/}
    //        
    //         <pre>
    //             {JSON.stringify(props.item, null, 2)}
    //             {/*{JSON.stringify(props.item, null, 2)}*/}
    //             {props.map((obj) => {
    //                 <li>{obj.name}</li>
    //             })}
    //         </pre>
    //        
    //         <ul style={{background: 'red', borderRadius: '2px solid red'}}>
    //             {/*<li>Name: {props['item'].name}</li>*/}
    //             {/*<li>Age: {props.item['age']}</li>*/}
    //             {/*<li>City: {props.item['city']}</li>*/}
    //             {/*<li>Name: {props.item}</li>*/}
    //
    //           
    //         </ul>
    //     </div>
    // );
    
    return (
        <>
            
            {/*<pre>{JSON.stringify(props, null, 4)}</pre>*/}
            <div>
                <ul>
                    <li>Name1: {props.name}</li>
                    <li>Age: {props.age}</li>
                    <li>City: {props.city}</li>
                </ul>
            </div>
            {/*<pre>{person.name}</pre>*/}
            <button onClick={props.childBtnClick}>Submit</button>
        </>
    );
};

export default Hero;