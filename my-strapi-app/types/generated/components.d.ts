import type { Schema, Attribute } from '@strapi/strapi';

export interface ECommerceCart extends Schema.Component {
  collectionName: 'components_e_commerce_carts';
  info: {
    displayName: 'Cart';
    icon: 'shoppingCart';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'e-commerce.cart': ECommerceCart;
    }
  }
}
