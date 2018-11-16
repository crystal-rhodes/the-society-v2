import getUserId from "../utils/getUserId";

const Query = {
    myPosts(parent, args, {
        prisma,
        request
    }, info) {
        const userId = getUserId(request);

        const opArgs = {
            first: args.first,
            skip: args.skip,
            after: args.after,
            
            where: {
                author: {
                    id: userId
                }
            }
        };

        if (args.query) {
            opArgs.where.OR = [{
                title_contains: args.query
            }, {
                body_contains: args.query
            }]
        }

        return prisma.query.posts(opArgs, info)
    },
    users(parent, {query, first, skip, after, orderBy}, {
        prisma
    }, info) {
        const opArgs = {
            first, skip, after, orderBy,
        };

        if (query) {
            opArgs.where = {
                OR: [{
                    name_contains: query
                }]
            }
        }

        return prisma.query.users(opArgs, info);
    },
    posts(parent, args, {
        prisma
    }, info) {
        const opArgs = {
            first: args.first,
            skip: args.skip,
            after: args.after,
            orderBy: args.orderBy,
            where: {
                published: true
            }
        };

        if (args.query) {
            opArgs.where.OR = [{
                title_contains: args.query
            }, {
                body_contains: args.query
            }]
        }

        return prisma.query.posts(opArgs, info);
    },
    comments(parent, args, {
        prisma
    }, info) {
        const opArgs = {
            first: args.first,
            skip: args.skip,
            after: args.after,
            orderBy: args.orderBy,
        };

        if (args.query) {
            opArgs.where = {
                text_contains: args.query
            }
        }

        return prisma.query.comments(opArgs, info);
    },
    me(parent, args, {
        prisma,
        request
    }, info) {
        const userId = getUserId(request);

        return prisma.query.user({
            where: {
                id: userId
            }
        }, info);
    },
    async post(parent, {
        id
    }, {
        prisma,
        request
    }, info) {
        const userId = getUserId(request, false);

        const posts = await prisma.query.posts({
            where: {
                id,
                OR: [{
                    published: true
                }, {
                    author: {
                        id: userId
                    }
                }]
            }
        }, info);

        if (posts.length === 0) {
            throw new Error('Post not found');
        }

        return posts[0];
    },

    async comment(parent, {
        id
    }, {
        prisma,
        request
    }, info) {
        const userId = getUserId(request, false);

        const comments = await prisma.query.comments({
            where: {
                id,
                author: {
                    id: userId
                }
            }
        }, info);

        if (comments.length === 0) {
            throw new Error('Comment not found');
        }

        return comments[0];
    }
}

export {
    Query as
    default
}