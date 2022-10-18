import { useState } from "react"

export default function Form({ getDogs }) {

    let [dogBreed, setDogBreed] = useState('')

    
    // const getBreed = async () => {

    //     try {
    //     const response = await fetch(
    //         `https://dog.ceo/api/breeds/hound/images/random`
    //     );
    //     const data = await response.json();
    //     setDog(data)
    //     } catch (err) {
    //     console.log("Error! No dog fetched :(.")
    //     console.log(err);
    //     }
    // }

    const handleChange = (e) => {
        setDogBreed(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getDogs(dogBreed)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search:</label>
                <br />
                <input 
                    id="search"
                    type="text"
                    value={dogBreed}
                    onChange={handleChange}
                />
                <input type='submit' value='submit' />
            </form>
        </div>
    )
}