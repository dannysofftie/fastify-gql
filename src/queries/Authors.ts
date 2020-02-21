import { IRequestContext } from '../@types';

/**
 * Find author by id
 *
 * @export
 * @param {*} _
 * @param {*} args
 * @param {IRequestContext} ctx
 * @param {*} info
 * @returns
 */
export async function findAuthorById(_: any, args: any, ctx: IRequestContext, info: any) {
    return await ctx.prisma.author.findOne({ where: { id: args['id'] } });
}

/**
 * Retrieve all posts
 *
 * @export
 * @param {*} _
 * @param {*} args
 * @param {IRequestContext} ctx
 * @param {*} info
 * @returns
 */
export async function retrievePosts(_: any, args: any, ctx: IRequestContext, info: any) {
    return await ctx.prisma.post.findMany();
}
