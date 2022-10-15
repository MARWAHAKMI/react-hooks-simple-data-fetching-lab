// create your App component here
import React, { useState, useEffect } from "react";

const fetchDog = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    return res.json();
};

const App = () => {
    const [dogImg, setDogImg] = useState(null);

    useEffect(() => {
        fetchDog().then((data) => setDogImg(data.message));
    }, []);

    return (
        <div>
            {dogImg ? (
                <img src={dogImg} alt="A Random Dog" />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
