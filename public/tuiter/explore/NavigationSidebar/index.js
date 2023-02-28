const NavigationSidebar = () => {
    return(`
   <div class="list-group">
        <a class="list-group-item" href="/">
            <i class="fab fa-twitter"></i>
        </a>
        <a class="list-group-item d-flex" href="../../home.html">
            <i class="fa fa-home align-self-center me-2"></i>
            <span class="d-none d-xl-block align-self-center">Home</span>
        </a>
        <a class="list-group-item active d-flex" href="/">
            <i class="fa fa-hashtag align-self-center me-2"></i>
            <span class="d-none d-xl-block">Explore</span>
        </a>
        <a class="list-group-item d-flex" href="/">
            <i class="fa fa-bell align-self-center me-2"></i>
            <span class="d-none d-xl-block">Notifications</span>
        </a>
        <a class="list-group-item d-flex" href="/">
            <i class="fa fa-envelope align-self-center me-2"></i>
            <span class="d-none d-xl-block">Messages</span>
        </a>
        <a class="list-group-item d-flex" href="/">
            <i class="fa fa-bookmark align-self-center me-2"></i>
            <span class="d-none d-xl-block">Bookmarks</span>
        </a>
        <a class="list-group-item d-flex" href="/">
            <i class="fa fa-list align-self-center me-2"></i>
            <span class="d-none d-xl-block">Lists</span>
        </a>
        <a class="list-group-item d-flex" href="/">
            <i class="fa fa-user align-self-center me-2"></i>
            <span class="d-none d-xl-block">Profile</span>
        </a>
        <a class="list-group-item d-flex" href="/">
            <i class="fas fa-ellipsis-h align-self-center me-2"></i>
            <span class="d-none d-xl-block">More</span>
        </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;