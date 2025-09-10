"use client";

import { useState } from "react";
import { fetchUserAlbums, Album } from "@/utils/data";
import ErrorMessage from "./ErrorMessage";
import { AlbumsList } from "./lists";

export default function ClientAlbums({ userId, initialError }: { userId: string; initialError?: string }) {

    const [error, setError] = useState<string | null>(initialError ?? null);
    const [loading, setLoading] = useState(false);
    const [albums, setAlbums] = useState<Album[] | null>(null);

    async function retry() {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchUserAlbums(userId);
            setAlbums(data);
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
                <p className="text-lg text-blue-400 font-semibold">retrying...</p>
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
        )
    }

    if (error) return <ErrorMessage message={error} color="blue" onRetry={retry} isLoading={loading} />;

    if (albums) return <AlbumsList albums={albums} />;

    // This component is only mounted when SSR failed; otherwise you don't render it.
    return null;
}
