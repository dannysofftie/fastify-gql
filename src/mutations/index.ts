import { createNewPost, deletePostById, updatePostById, upvotePostById } from './Posts';

export default {
    Mutation: {
        upvotePostById,
        createNewPost,
        deletePostById,
        updatePostById,
    },
};
