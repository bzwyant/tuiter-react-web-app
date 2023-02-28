import PostSummaryList from "./PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row">
            <div class="d-flex">
                <div class="input-group mb-2 bg-white border rounded-pill">
                    <span class="input-group-text bg-transparent border-0 text-black">
                        <i class="fas fa-search text-muted"></i>
                    </span>
                    <input type="text" class="form-control rounded-pill border-0 ps-1 py-2" placeholder="Search Twitter">
                </div>
                <i class="fas fa-cog fa-2x mt-1 ms-2 text-primary"></i>
            </div>
        </div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        <div class="position-relative">
            <img class="col-12 my-2" src="../../images/starship.jpg" alt="SpaceX Starship">
            <div class="position-absolute bottom-0 text-light fs-3 fw-bold">
                <p class="p-2 m-0">SpaceX's Starship</p>
            </div>
            </img>
        </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent