import { useEffect, useState } from "react"
import MyComponent from "./MyComponent";

const MyPage = () => {

    const [counter, setCounter] = useState(0);

    const onCounterChange = (newValue) => setCounter(newValue);

    const incrementListener = () => {
        setCounter(counter + 1);
    }




    useEffect(() => {

        const scheduleLoadData = () => {
            setTimeout(() => {
                try {
                    loadData()
                } catch (error) {

                }
                finally {
                    scheduleLoadData();
                }

            }, 1000);
        }


        const loadData = () => {
            fetch("http://localhost:3000/manifest.json").then((result) => {
                result.json().then((data) => {
                    console.log(JSON.stringify(data));
                });
            }).finally(() => {
            });

        }


        scheduleLoadData();
    }, []);


    return (<div>
        <div>Page counter: {counter}</div>
        <input type="button" onClick={incrementListener} value="MyPage increment" />
        <div><MyComponent counterChangeListener={onCounterChange} counter={counter}></MyComponent></div>
    </div>)

}
export default MyPage;