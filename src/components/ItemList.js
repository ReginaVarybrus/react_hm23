import ItemCard from "./ItemCard";

const ItemList = (props) => {

    return (

        <div>
            {props.data?.results &&
                props.data.results.map((item) => (
                    <ItemCard key={item.id} className="Hero-Card">
                        <div>
                            <p>{item.name}</p>
                            <p>{item.status}</p>
                            <p>{item.air_date}</p>
                        </div>
                        {/* <img src={item.image}></img> */}
                    </ItemCard>
                ))}
        </div>
    )
}

export default ItemList;