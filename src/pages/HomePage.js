import Form from "../components/Form"

export default function HomePage({ dog, getDogs }) {

    const loaded = () => {
        return (
            <div>
                <h1>Random Doggo</h1>
                <img src={dog.message} alt="dog" />
                <br /><br />
                <button>Add to favorites</button>
                <br /><br />
                <Form getDogs={getDogs}/>
            </div>
        )
    }

    const loading = () => {
        return <div>No dog to display FeelsBadMan</div>
    }

    return dog ? loaded() : loading()
}