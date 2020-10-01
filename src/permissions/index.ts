import { AuthenticationError } from 'apollo-server-fastify';
import { IRequestContext } from 'fastify';
import { rule, shield } from 'graphql-shield';

export default shield(
    {
        Query: {
            retrievePosts: rule({ cache: 'contextual' })(async (root, args, ctx: IRequestContext, info) => {
                const user = ctx.user;

                if (!user || !user.id) {
                    throw new AuthenticationError('Unauthorized');
                }

                const data = await ctx.prisma.author.findMany({ include: { posts: { where: { author: { email: user.email } } } } });

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
