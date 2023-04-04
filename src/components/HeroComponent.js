import { useState } from "react";
import HttpFetchHeroes from "../hooks/HttpFetchHeroes";
import ItemList from "./ItemList";

const HttpHeroComponent = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const { data, loading } = HttpFetchHeroes(`character?page=${currentPage}`);

    return <div className="Main-div">
        <div>
            {loading ? <p>Loading...</p> : <ItemList data={data} />}
            <div className="Pagination">
                <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}>
                    Prev
                </button>
                <button
                    onClick={() => { setCurrentPage(p => p + 1); console.log(data.info.pages) }}
                    disabled={currentPage === 42}>
                    Next
                </button>
            </div>
        </div>
    </div>
}

export default HttpHeroComponent;

