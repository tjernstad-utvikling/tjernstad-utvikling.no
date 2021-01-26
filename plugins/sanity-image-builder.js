import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '@/sanityClient';

export default ({ _$sanity }, inject) => {
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source).auto('format')
  }
  inject('urlFor', urlFor)
}
