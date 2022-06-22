import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => {
      return {
        products: [],

        cart: [],

        prices: [
          { id: 'gid://shopify/Product/550127108137', WSprice: 13.1 },
          { id: 'gid://shopify/Product/563837960233', WSprice: 14.6 },
          { id: 'gid://shopify/Product/747547820128', WSprice: 17.34 },
          { id: 'gid://shopify/Product/1329300734048', WSprice: 15.4 },
          { id: 'gid://shopify/Product/1329956159584', WSprice: 13.6 },
          { id: 'gid://shopify/Product/1396584185952', WSprice: 14.45 },
          { id: 'gid://shopify/Product/1851114946656', WSprice: 15.4 },
          { id: 'gid://shopify/Product/1927457767520', WSprice: 14.3 },
          { id: 'gid://shopify/Product/1929023455328', WSprice: 17.9 },
          { id: 'gid://shopify/Product/1929042919520', WSprice: 15.12 },
          { id: 'gid://shopify/Product/1938219696224', WSprice: 15.4 },
          { id: 'gid://shopify/Product/2285011632224', WSprice: 13.6 },
          { id: 'gid://shopify/Product/2285038731360', WSprice: 14.45 },
          { id: 'gid://shopify/Product/2288399941728', WSprice: 15.4 },
          { id: 'gid://shopify/Product/4569885409376', WSprice: 14.3 },
          { id: 'gid://shopify/Product/1929023455328', WSprice: 17.9 },
          { id: 'gid://shopify/Product/6070864052411', WSprice: 15.12 },
        ],

        seller: {
          productsPerParcel: 20,
          domesticShipping: 9.9,
          internationalShipping: 9.9,
          minItems: 1,
          maxItems: 12,
          VAT: 19,
          logoImage:
            'https://cdn.shopify.com/s/files/1/0002/7502/1865/files/Candles-of-Wisdom_logo_v1_rgb_shopify_logosmaller_black.png?v=1624907146',
          backgroundImage:
            'https://cdn.shopify.com/s/files/1/0002/7502/1865/files/Burning-Buddha-geometrische-Designkerze-Raute-Set_6f7ddb1c-1083-48f5-8a4f-8185bd4f156c.jpg?v=1613518298',
        },

        user: {
          isSeller: false,
          localPickup: false,
          differentShipping: false,
          billingFirstName: '',
          billingLastName: '',
          billingCompany: '',
          billingOptionalLine: '',
          billingStreetAndNumber: '',
          billingZip: '',
          billingCity: '',
          billingCountry: '',
          shippingFirstName: '',
          shippingLastName: '',
          shippingCompany: '',
          shippingOptionalLine: '',
          shippingStreetAndNumber: '',
          shippingZip: '',
          shippingCity: '',
          shippingCountry: '',
        },

        setWSprice: (id, price) => {
          set(state => {
            return {
              products: state.products.map(product =>
                product.id === id
                  ? {
                      ...product,
                      WSprice: price,
                    }
                  : product
              ),
            };
          });
        },

        setQuantity: (productId, quantity) => {
          set(state => {
            const productExists = state.cart.some(
              product => product.id === productId
            );
            if (productExists) {
              return {
                cart: state.cart.map(product =>
                  product.id === productId
                    ? {
                        ...product,
                        quantity,
                      }
                    : product
                ),
              };
            } else {
              return {
                cart: [
                  {
                    id: productId,
                    quantity,
                  },
                  ...state.cart,
                ],
              };
            }
          });
        },

        setProducts: data => {
          set(state => {
            return {
              products: [...data],
            };
          });
        },

        loadUser: async () => {
          const response = await fetch('/api/users');
          const json = await response.json();
          const partialUser = json.data[0];
          set(state => {
            return {
              user: {
                ...state.user,
                ...partialUser,
              },
            };
          });
        },
        setSellerData: data => {
          set(state => {
            return {
              seller: {
                ...state.seller,
                ...data,
              },
            };
          });
        },

        setUserData: async data => {
          const user = get().user;
          const response = await fetch('/api/users', {
            method: 'PATCH',
            body: JSON.stringify({ ...data, _id: user._id }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const json = await response.json();
          set(state => {
            return {
              user: {
                ...state.user,
                ...json.data,
              },
            };
          });
        },
      };
    },
    {
      name: 'OrderInfo',
      getStorage: () => ({
        setItem: (...args) => window.localStorage.setItem(...args),
        getItem: async (...args) =>
          new Promise(resolve => {
            if (typeof window === 'undefined') {
              resolve(null);
            } else {
              setTimeout(() => {
                resolve(window.localStorage.getItem(...args));
              }, 0);
            }
          }),
        removeItem: (...args) => window.localStorage.removeItem(...args),
      }),
    }
  )
);

export default useStore;
