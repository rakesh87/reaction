import { SimpleSchema } from "meteor/aldeed:simple-schema";
import { PackageConfig } from "/lib/collections/schemas/registry";

export const ShopifyConnectPackageConfig = new SimpleSchema([
  PackageConfig, {
    "settings.apiKey": {
      type: String,
      label: "API Key",
      optional: true
    },
    "settings.password": {
      type: String,
      label: "API Password",
      optional: true
    },
    "settings.sharedSecret": {
      type: String,
      label: "API Shared Secret",
      optional: true
    },
    "settings.shopifyDomain": {
      type: String,
      label: "Shopify Domain (e.g. my-store.myshopify.com)",
      optional: true
    }
  }
]);