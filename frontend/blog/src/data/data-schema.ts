/**
 * Population schema for post blocks in dynamic zones.
 * Defines how each block component type is populated when querying posts.
 * 
 * Used with Strapi's `on` operator to explicitly populate nested
 * components and media fields per block type, since wildcard populate
 * does not deep populate nested components in dynamic zones.
 * 
 * example of how to use types 
 * 
 * // needs the full shape
function applySchema(schema: BlockPopulateSchema) { ... }

// only needs the key names
function getBlock(component: BlockComponent) {
  return postBySlugSchema[component]
}
 * 
 * @see getPostsBySlug
 * @see getPosts
 */




export const postBySlugSchema = {
    'blocks.rich-text': {
      populate: '*'
    },
    'blocks.image': {
      populate: {
        image: true,
        settings: true,
      }
    },
    'blocks.double-image': {
      populate: {
        images: {
          populate: {
            image: true,
            settings: true,
          }
        },
      }
    },
    'blocks.quote': {
      populate: '*'
    },
    'blocks.video': {
      populate: '*'
    },
    'blocks.gallery': {
      populate: '*'
    },
  }


type BlockComponent = keyof typeof postBySlugSchema
export type BlockPopulateSchema = typeof postBySlugSchema
