export interface ProjectInterface {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: documentType.project;
    _updatedAt: string;
    author: authorRef;
    body: Array<any>;
    mainImage: mainImage;
    publishedAt: string;
    slug: slug;
    title: string;
}

export interface authorRef {
    _ref: string;
    _type: blockType.reference;
}

export enum blockType {
    reference = 'reference',
    image = 'image',
    slug = 'slug'
}
export enum documentType {
    project = 'project'
}

export interface mainImage {
    _type: blockType.image;
    asset: {
        _ref: string;
        _type: blockType.reference;
    };
}

export interface slug {
    _type: blockType.slug;
    current: string;
}
