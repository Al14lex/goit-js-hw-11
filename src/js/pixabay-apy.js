import {searchImages } from '../main';

export function fetchImages() {
    const params = new URLSearchParams({
        key: '43045926-d10eb038526040017b5fd39ad',
        q: searchImages,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });

    const link = `https://pixabay.com/api/?${params}`;

    return fetch(link).then(res => {
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    });
}