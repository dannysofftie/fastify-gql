import { AuthenticationError } from 'apollo-server-fastify';
import { rule, shield } from 'graphql-shield';
import { IRequestContext } from '../@types';

export default shield(
    {
        Query: {
            retrievePosts: rule({ cache: 'contextual' })(async (root, args, ctx: IRequestContext, info) => {
                const user = ctx.user;

                if (!user || !user.id) {
                    throw new AuthenticationError('Unauthorized');
                }

                const data = await ctx.prisma.author.findMany({ include: { posts: { where: { author: { id: user.id } } } } });

                if (data) {
                    return true;
                }

                return true;
            }),
            // other query permissions here
        },
    },
    {
        allowExternalErrors: true,
    }
);
