import type { NextPage } from 'next';
import { Author } from './authors';

export interface Post {
    id: string;
    title: string;
    body: string;
    userId: string;
}


export interface PostWithData {
    id: string;
    title: string;
    body: string;
    userId: string;
    author: Author;
    isShortest: boolean;
}