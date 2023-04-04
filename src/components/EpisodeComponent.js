import { useState } from "react";
import HttpFetchEpisodes from "../hooks/HttpFetchEpisodes";
import ItemList from "./ItemList";

const HttpEpisodeComponent = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const { data, loading } = HttpFetchEpisodes(`episode?page=${currentPage}`);

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
                    disabled={currentPage === 3}>
                    Next
                </button>
            </div>
        </div>
    </div>
}

export default HttpEpisodeComponent;