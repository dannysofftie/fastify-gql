import { IRequestContext } from '../@types';

/**
 * Update post by id
 *
 * @export
 * @param {*} _
 * @param {*} args
 * @param {IRequestContext} ctx
 * @param {*} info
 * @returns
 */
export function updatePostById(_: any, args: any, ctx: IRequestContext, info: any) {
    //
    return {};
}

/**
 * Delete post by id
 *
 * @export
 * @param {*} _
 * @param {*} args
 * @param {IRequestContext} ctx
 * @param {*} info
 */
export function deletePostById(_: any, args: any, ctx: IRequestContext, info: any) {
    //
}

/**
 * Create a new post by id
 *
 * @export
 * @param {*} _
 * @param {*} args
 * @param {IRequestContext} ctx
 * @param {*} info
 * @returns
 */
export function createNewPost(_: any, args: any, ctx: IRequestContext, info: any) {
    console.log(args['post']['title']);

    return { title: args['post']['title'] };
}

/**
 * Update post by id
 *
 * @export
 * @param {*} _
 * @param {*} args
 * @param {IRequestContext} ctx
 * @param {*} info
 */
export function upvotePostById(_: any, args: any, ctx: IRequestContext, info: any) {
    //
}
