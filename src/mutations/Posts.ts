export function updatePostById() {
    //
    return {};
}

export function deletePostById() {
    //
}

export function createNewPost(root, args, ctx, info) {
    console.log(args['post']['title']);

    return { title: args['post']['title'] };
}

export function upvotePostById() {
    //
}
