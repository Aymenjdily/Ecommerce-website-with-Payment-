import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const service = sanityClient({
    projectId:'u8ogdrtz',
    dataset:'production',
    apiVersion:'2022-07-14',
    useCdn:true,
    token:process.env.PUBLIC_TOKEN
})

const builder = imageUrlBuilder(service);

export const urlFor = (source) => builder.image(source);