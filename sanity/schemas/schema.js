// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document types
import board from './documents/board'
import equipe from './documents/equipe'
import event from './documents/event'
import honoraryMember from './documents/honoraryMember'
import partner from './documents/partner'
import Ressources from './documents/ressources'
// import winnerAwardOvation from './documents/winnerAwardOvation'

// Object types
import venue from './objects/venue'
import eventType from './objects/eventType'
import mainImage from './objects/mainImage'
import richText from './objects/richText'
import customTime from './objects/customTime'
import weekly from './objects/recurrenceType/weekly'
import daily from './objects/recurrenceType/daily'
import singleEvent from './objects/recurrenceType/single'
import free from './objects/rate/free'
import regularRate from './objects/rate/regularRate'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'event',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    board,
    equipe,
    event,
    honoraryMember,
    partner,
    Ressources,
    // winnerAwardOvation,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    customTime,
    daily,
    eventType,
    free,
    mainImage,
    regularRate,
    richText,
    singleEvent,
    venue,
    weekly,
  ])
})
