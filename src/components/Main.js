


const Main = (props) => {
    console.log(props)
    return (
        <main>
            <div className="mainContainer">
                <h1>{props.mainTitle}</h1>
            </div>
        </main>
    )
}

export default Main