export {
  // Type aliases
  type ListingStatus,
  type SellingScope,
  type OfferStatus,
  type MediaType,
  type NegotiationStatus,
  type NegotiationRole,
  // Interfaces
  type Ref,
  type RefCreate,
  type RefUpdate,
  type Offer,
  type OfferCreate,
  type OfferUpdate,
  type BeaconSettings,
  type BeaconInfo,
  type RefMedia,
  type Negotiation,
  type NegotiationCreate,
  // DHT payloads
  type PeerMessage,
  type ProposalPayload,
  type ProposalResponsePayload,
  type QueryPayload,
  type AnnouncePayload,
  // Utility functions
  blurLocation,
  haversineDistanceMiles,
} from './types.js';

export {
  // Schema interfaces
  type AttributeField,
  type CategorySchema,
  // Registry & lookups
  CATEGORY_SCHEMAS,
  defaultSchema,
  getCategorySchema,
  buildSchemaOrgLD,
} from './schemas.js';
