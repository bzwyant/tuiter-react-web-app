const PostSummaryItem = (item) => {
    return(`
    <li class="list-group-item d-flex justify-content-between">
        <div>
            <span class="text-secondary">${item.topic}</span>
            <div class="fw-bold">
                ${item.userName}
                <i class="fas fa-check-circle"></i>
                <span class="fw-normal text-secondary">- ${item.time}</span>
            </div>
            <div class="fw-bold">
                ${item.title}
            </div>
        </div>
        <img src=${item.image} class="wd-main-content-image rounded-3 ms-4"/>
    </li>
    `);
}
export default PostSummaryItem;