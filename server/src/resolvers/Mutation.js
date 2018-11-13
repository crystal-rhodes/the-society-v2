import bcrypt from 'bcryptjs';
import getUserId from '../utils/getUserId';
import generateToken from '../utils/generateToken';
import hashPassword from '../utils/hashPassword';

const Mutation = {
      async login(parent, {data}, { prisma }, info) {
        const user = await prisma.query.user({
            where: {
                email: data.email
            }
        })

        if (!user) {
            throw new Error('Unable to login')
        }

        const isMatch = await bcrypt.compare(data.password, user.password)

        if (!isMatch) {
            throw new Error('Unable to login')
        }

        return {
            user,
            token: generateToken(user.id)
        }
    },
    async createUser(parent, {data}, {prisma}, info) {
        const password = await hashPassword(data.password)

        const user = await prisma.mutation.createUser({ 
            data: {
                ...data,
                password
            }
        });
        
        return {
            user,
            token: generateToken(user.id)
        }
    },
    async deleteUser(parent, args , {prisma, request}, info) {
        const userId = getUserId(request);

        return prisma.mutation.deleteUser({where: {id: userId}}, info);
    },
    async updateUser(parent, {data}, { prisma, request }, info) {
        const userId = getUserId(request);

        if (typeof data.password === 'string') {
            data.password = await hashPassword(data.password);
        }

        return prisma.mutation.updateUser({where: {id: userId}, data}, info)
    },
    async createPost(parent, args, { prisma, request }, info) {
        console.log('eherq');
        const userId = getUserId(request)

        return prisma.mutation.createPost({
            data: {
                title: args.data.title,
                body: args.data.body,
                published: args.data.published,
                author: {
                    connect: {
                        id: userId
                    }
                }
            }
        }, info)
    },
    async deletePost(parent, {id}, {prisma, request}, info) {
        const userId = getUserId(request);

        const postExists = await prisma.exists.Post({
            id, 
            author: { id: userId }
        });

        if (!postExists) {
            throw new Error('Unable to delete post');
        }

        return prisma.mutation.deletePost({where: {id}}, info);
    },
    async updatePost(parent, {id, data}, {prisma, request}, info) {
        const userId = getUserId(request);

        const postExists = await prisma.exists.Post({
            id,
            author: { id: userId }
        }, info);
        
        const isPublished = await prisma.exists.Post({
            id,
            published: true
        })

        if (!postExists) {
            throw new Error('Unable to update post');
        }

        if (isPublished && !data.published) {
            const deletedComments = await prisma.mutation.deleteManyComments({
                where: {
                    post: {
                        id
                    }
                }
            })
        }

        return prisma.mutation.updatePost({where: {id}, data}, info);
    },
    async createComment(parent, {data}, {prisma, request}, info) {
        const userId = getUserId(request);

        const postExists = await prisma.exists.Post({ id: data.post, published: true });

        if (!postExists) {
            throw new Error('Unable to create comment');
        }

        return prisma.mutation.createComment({
            data: {
                ...data,
                author: {
                    connect: {
                        id: userId
                    }
                },
                post: {
                    connect: {
                        id: data.post
                    }
                }
            }}, info);
    },
    async deleteComment(parent, {id}, {prisma, request}, info) {
        const userId = getUserId(request);
        console.log(userId)

        const isPostOwner = await prisma.exists.Comment({
            id,
            post: {
                author: { id: userId}
            }
        });

        console.log(isPostOwner)

        const commentExists = await prisma.exists.Comment({
            id,
            author: { id: userId}
        });

        
        console.log(commentExists)

        if (!commentExists || !isPostOwner) {
            throw new Error('Unable to delete comment');
        }

        return prisma.mutation.deleteComment({where: {id}}, info);
    },
    async updateComment(parent, {id, data}, {prisma, request}, info) {
        const userId = getUserId(request);

        const commentExists = await prisma.exists.Comment({
            id,
            author: { id: userId }
        });

        if (!commentExists) {
            throw new Error('Unable to update comment');
        }

        return prisma.mutation.updateComment({where: {id}, data}, info);
    },
}

export {Mutation as default}