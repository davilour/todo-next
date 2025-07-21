'use server'
import { amplifyApi } from "@/lib/amplify-server";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { Post } from "@/API";
import { revalidatePath } from "next/cache";

export const listPosts = async (): Promise<Post[]> => {
    const { data } = await amplifyApi.graphql({ query: queries.listPosts });
    return data.listPosts.items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
};

export const fetchPostById = async (id: string): Promise<Post | null> => {
    const { data } = await amplifyApi.graphql({
        query: queries.getPost,
        variables: { id }
    });
    return data.getPost ?? null;
};

export const createposts = async (title: string, content: string) => {
    try {
        const res = await amplifyApi.graphql({
            query: mutations.createPost,
            variables: {
                input: {
                    title,
                    content
                }
            },
        });

        const postResult = res.data.createPost as Post

        if (!postResult.id) {
            throw new Error("Erro ao criar post");
        }
        revalidatePath('/posts');
        return {
            success: true,
            post: {
                id: postResult.id,
                title: postResult.title,
                content: postResult.content,
            },
            createdAt: new Date(postResult.createdAt).toLocaleDateString(),
        }
    }
    catch {
        throw new Error("Erro ao criar post");
    }
};

export const Deleteposts = async (id: string) => {
    await amplifyApi.graphql({
        query: mutations.deletePost,
        variables: {
            input: { id }
        },
    });
    revalidatePath('/post');
};

export const Editposts = async (id: string, title: string, content: string) => {
    await amplifyApi.graphql({
        query: mutations.updatePost,
        variables: {
            input: {
                id,
                title,
                content
            }
        }
    })
    revalidatePath('/post');
}

