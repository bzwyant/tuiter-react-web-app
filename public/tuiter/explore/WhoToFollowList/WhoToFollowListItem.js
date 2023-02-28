const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item d-flex justify-content-between">
       <div class="d-flex">
          <img class="wd-account-image rounded-circle" src=${who.avatarIcon}>
          <div class="ms-2">
              <div class="fw-bold d-flex flex-nowrap m-lg-0">
                  ${who.userName}
                  <i class="fas fa-check-circle align-self-center ms-1"></i>
              </div>
              @${who.handle}
              </div>
          </div>
          <button type="button" class="btn btn-primary rounded-pill wd-follow-button align-self-center">
              Follow
          </button>
    </li>
    `);
}

export default WhoToFollowListItem