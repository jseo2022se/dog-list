export default function SelectDog({ selectBreed }) {

  const handleBreed = (e) => {
    e.preventDefault()
    selectBreed(e.target.value)
  }

  return(
    <>
    <h2>Select dog</h2>
      <input type="text" id="breed" />
      <button onClick={handleBreed}>Submit</button>
    </>
  )

}