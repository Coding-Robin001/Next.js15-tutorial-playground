// components/ClientPosts.tsx
"use client";

import { useState } from "react";
import { fetchUserPosts, Post } from "@/utils/data";
import ErrorMessage from "./ErrorMessage";
import PostsList from "./postsList";

export default function ClientPosts({
    userId,
    initialError,
}: {
    userId: string;
    initialError?: string;
}) {
    const [error, setError] = useState<string | null>(initialError ?? null);
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState<Post[] | null>(null);

    async function retry() {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchUserPosts(userId);
            setPosts(data);
        } catch (e: any) {
            setError(e?.message ?? "Failed to fetch posts");
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        // match your Suspense fallback visually
        return (
            <div className="flex flex-col items-center justify-center gap-3 h-100 w-[500px]">
                <p className="text-lg text-red-400 font-semibold">Loading posts...</p>
                <div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (error) return <ErrorMessage message={error} color="red" onRetry={retry} isLoading={loading} />;

    if (posts) return <PostsList posts={posts} />;

    // This component is only mounted when SSR failed; otherwise you don't render it.
    return null;
}
