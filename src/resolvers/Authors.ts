import { prisma } from '../prisma';

export function findAuthorById(_, args, context, info) {
    return prisma.author({ id: args['id'] });
}

export function retrievePosts(args) {
    return [{}];
}
