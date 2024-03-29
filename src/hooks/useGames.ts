import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface IPlatform {
    id: number;
    name: string;
    slug: string;
}

export interface IGame {
    id: number;
    name: string;
    metacritic: number;
    background_image: string;
    parent_platforms: { platform: IPlatform }[];
}

interface IFetchGamesResponse {
    count: number;
    results: IGame[];
}

const useGames = () => {
    const [games, setGames] = useState<IGame[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
            .get<IFetchGamesResponse>("/games", { signal: controller.signal })
            .then((res) => {
                setGames(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false); // we need to put twice setloading because it's not working from `finally`when we're at a `strict` mode
            });

        return () => controller.abort();
    }, []);

    return { games, error, isLoading };
};

export default useGames;
