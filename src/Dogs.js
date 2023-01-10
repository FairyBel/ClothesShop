function Dogs({anyDogs}){

return(
    <div>
        {anyDogs.map((element => {
            const {id, image} = element;
            return(
                <div key={id}>
                    <p>{id}</p>
                    <img src={image} />
                </div>
            )
        }))}

    </div>
)

}

export default Dogs;