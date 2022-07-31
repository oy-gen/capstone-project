import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => {
      return {
        products: [
          {
            name: 'Meister Candle Beige',
            id: '633710796521',
            image:
              'https://cdn.shopify.com/s/files/1/0002/7502/1865/products/Burning-Buddha-Design-Kerze-Beige.png?v=1648328897',
            description: `Der Meister ist mehr als nur eine Kerze. Er steckt voller Symbolik und spielt mit der Vergänglichkeit der Schönheit. Zündest Du die Kerze an oder ist sie zu schade dazu? Einfach ist die Entscheidung nicht, doch der Meister lockt mit einer Besonderheit und belohnt diejenigen die sich trauen: Nach dem Wegschmelzen offenbart er eine Glücksmünze, auf der alte Weisheiten verewigt sind.Die Herstellung unserer mehrfarbigen Modelle ist sehr aufwendig, wobei das Endresultat nie ganz vorhersehbar ist. Jeder Meister ist ein Unikat mit individuellem Charme und variiert leicht im Aussehen.
            Material: Rapswachs Komposition mit Paraffinanteil, Baumwolldocht, Metallmünze
            Farbe: Beige, durchgefärbt, RAL Kerzengüte Qualität
            Brenndauer: 30h
            Größe:19cm
            Geruch: neutral`,
            RRPprice: 29.9,
          },
          {
            name: 'Meister Candle Mint',
            id: '633710796507',
            image:
              'https://cdn.shopify.com/s/files/1/0002/7502/1865/products/Buddah-Buddha-Kerze-Muenze-figur-Skulptur-Mint2_ca1ce965-4ffa-403a-81a2-76c9537bd52c.png?v=1648330930',
            description: `Der Meister ist mehr als nur eine Kerze. Er steckt voller Symbolik und spielt mit der Vergänglichkeit der Schönheit. Zündest Du die Kerze an oder ist sie zu schade dazu? Einfach ist die Entscheidung nicht, doch der Meister lockt mit einer Besonderheit und belohnt diejenigen die sich trauen: Nach dem Wegschmelzen offenbart er eine Glücksmünze, auf der alte Weisheiten verewigt sind.Die Herstellung unserer mehrfarbigen Modelle ist sehr aufwendig, wobei das Endresultat nie ganz vorhersehbar ist. Jeder Meister ist ein Unikat mit individuellem Charme und variiert leicht im Aussehen.
          Material: Rapswachs Komposition mit Paraffinanteil, Baumwolldocht, Metallmünze
          Farbe: Mint, durchgefärbt, RAL Kerzengüte Qualität
          Brenndauer: 30h
          Größe:19cm
          Geruch: neutral`,
            RRPprice: 29.9,
          },
          {
            name: 'Meister Candle Black',
            id: '633710796552',
            image:
              'https://cdn.shopify.com/s/files/1/0002/7502/1865/products/Burning-Buddha-Designobject-black.png?v=1648329167',
            description: `Der Meister ist mehr als nur eine Kerze. Er steckt voller Symbolik und spielt mit der Vergänglichkeit der Schönheit. Zündest Du die Kerze an oder ist sie zu schade dazu? Einfach ist die Entscheidung nicht, doch der Meister lockt mit einer Besonderheit und belohnt diejenigen die sich trauen: Nach dem Wegschmelzen offenbart er eine Glücksmünze, auf der alte Weisheiten verewigt sind.Die Herstellung unserer mehrfarbigen Modelle ist sehr aufwendig, wobei das Endresultat nie ganz vorhersehbar ist. Jeder Meister ist ein Unikat mit individuellem Charme und variiert leicht im Aussehen.
              Material: Rapswachs Komposition mit Paraffinanteil, Baumwolldocht, Metallmünze
              Farbe: Schwarz, durchgefärbt, glanzbeschichtet, RAL Kerzengüte Qualität
              Brenndauer: 30h
              Größe:19cm
              Geruch: neutral`,
            RRPprice: 34.9,
          },
          {
            name: 'Meister Candle Purpur',
            id: '633710796606',
            image:
              'https://cdn.shopify.com/s/files/1/0002/7502/1865/products/Burning-Buddha-Figur-Designkerze-Lilla-Violet-purple-2.png?v=1648371228',
            description: `Der Meister ist mehr als nur eine Kerze. Er steckt voller Symbolik und spielt mit der Vergänglichkeit der Schönheit. Zündest Du die Kerze an oder ist sie zu schade dazu? Einfach ist die Entscheidung nicht, doch der Meister lockt mit einer Besonderheit und belohnt diejenigen die sich trauen: Nach dem Wegschmelzen offenbart er eine Glücksmünze, auf der alte Weisheiten verewigt sind.Die Herstellung unserer mehrfarbigen Modelle ist sehr aufwendig, wobei das Endresultat nie ganz vorhersehbar ist. Jeder Meister ist ein Unikat mit individuellem Charme und variiert leicht im Aussehen.
                Material: Rapswachs Komposition mit Paraffinanteil, Baumwolldocht, Metallmünze
                Farbe: Violett, durchgefärbt, glanzbeschichtet, RAL Kerzengüte Qualität
                Brenndauer: 30h
                Größe:19cm
                Geruch: neutral`,
            RRPprice: 34.9,
          },

          {
            name: 'Meister Candle Black & White',
            id: '633710796613',
            image:
              'https://cdn.shopify.com/s/files/1/0002/7502/1865/products/Burning-Buddha-Candle-Kerze-Figur-Black-White_f6aede68-f24a-4c19-9a2b-ada7dc1874de.png?v=1648330136',
            description: `Der Meister ist mehr als nur eine Kerze. Er steckt voller Symbolik und spielt mit der Vergänglichkeit der Schönheit. Zündest Du die Kerze an oder ist sie zu schade dazu? Einfach ist die Entscheidung nicht, doch der Meister lockt mit einer Besonderheit und belohnt diejenigen die sich trauen: Nach dem Wegschmelzen offenbart er eine Glücksmünze, auf der alte Weisheiten verewigt sind.Die Herstellung unserer mehrfarbigen Modelle ist sehr aufwendig, wobei das Endresultat nie ganz vorhersehbar ist. Jeder Meister ist ein Unikat mit individuellem Charme und variiert leicht im Aussehen.
            Material: Rapswachs Komposition mit Paraffinanteil, Baumwolldocht, Metallmünze
            Farbe: Schwarz, Beige, durchgefärbt, glanzbeschichtet, RAL Kerzengüte Qualität
            Brenndauer: 30h
            Größe:19cm
            Geruch: neutral`,
            RRPprice: 34.9,
          },
          {
            name: 'Meister Candle Jade',
            id: '633710796569',
            image:
              'https://cdn.shopify.com/s/files/1/0002/7502/1865/products/Burning-Buddha-Skulptur-Kerze-Jade_f70c6cb5-717b-4e88-bc5a-5a072279db5f.png?v=1648370885',
            description: `Der Meister ist mehr als nur eine Kerze. Er steckt voller Symbolik und spielt mit der Vergänglichkeit der Schönheit. Zündest Du die Kerze an oder ist sie zu schade dazu? Einfach ist die Entscheidung nicht, doch der Meister lockt mit einer Besonderheit und belohnt diejenigen die sich trauen: Nach dem Wegschmelzen offenbart er eine Glücksmünze, auf der alte Weisheiten verewigt sind.Die Herstellung unserer mehrfarbigen Modelle ist sehr aufwendig, wobei das Endresultat nie ganz vorhersehbar ist. Jeder Meister ist ein Unikat mit individuellem Charme und variiert leicht im Aussehen.
        Material: Rapswachs Komposition mit Paraffinanteil, Baumwolldocht, Metallmünze
        Farbe: Schwarz, Jadegrün, durchgefärbt, glanzbeschichtet, RAL Kerzengüte Qualität
        Brenndauer: 30h
        Größe:19cm
        Geruch: neutral`,
            RRPprice: 34.9,
          },
          {
            name: 'Sun Candle',
            id: '4170000002000',
            image:
              'https://cdn.shopify.com/s/files/1/0002/7502/1865/products/Burning-Buddha-Sun-Candle_clean_1200x1200.png',
            description: `Die Sonnenkerze spielt mit der Transluzenz des Kerzenwachses. Durch die raffinierte Formgebung leuchtet sie wie eine Sonne und kreiert eine außergewöhnliche Atmosphäre im Raum. Das flackernde Licht fesselt Deinen Blick und lässt ihn nicht mehr los.Auch in der Sonnenkerze wartet die Münze der Weisheit auf Dich. Erst nach dem Abbrennen kommt die versteckte Botschaft zum Vorschein. Welche Weisheit Deine Kerze für Dich bereit hält, entscheidet der Zufall - falls es ihn gibt.
        Material: Raps-Komposition mit Paraffinanteil, Baumwolldocht, Metallmünze
        Farbe: ungefärbt
        Größe: 10cm
        Brenndauer: 50h+
        Geruch: neutral`,
            RRPprice: 34.9,
          },
          {
            name: 'Prisma Candle Lavendel',
            id: '633710796637',
            image:
              'https://cdn.shopify.com/s/files/1/0002/7502/1865/products/Prisma-Candle-of-Wisdom-Lavendel.png?v=1648379917',
            description: `Die Prisma Objekt Kerze verzaubert mit ihrem minimalistisch geometrischen Design. Die Kerze ist nicht bloß ein einfacher Lichtspender - sie spielt mit der Vergänglichkeit der Form. Ob Du sie anzündest bleibt letztlich Dir überlassen, doch eins sei gesagt: Sie ist auch beim Dahinschmelzen ein wahres Erlebnis. Wie in all unseren Kerzen kommt auch hier nach dem Abbrennen eine Glücksmünze zum Vorschein, die Weisheiten nach dem Glückskeks-Prinzip beinhaltet.
        Material: Rapswachs Komposition mit Paraffinanteil, Baumwolldocht
        Farbe: Lavendel durchgefärbt, RAL Kerzengüte Qualität
        Größe: 10cm
        Brenndauer: 40h
        Geruchsneutral`,
            RRPprice: 34.9,
          },
          {
            name: 'Meister Candle Black Gold',
            id: '633710796576',
            image:
              'https://cdn.shopify.com/s/files/1/0002/7502/1865/products/Burning-Buddha-Kerze-Skulptur-gesprenkelt-Meister2.png?v=1648373512',
            description: `Der Meister ist mehr als nur eine Kerze. Er steckt voller Symbolik und spielt mit der Vergänglichkeit der Schönheit. Zündest Du die Kerze an oder ist sie zu schade dazu? Einfach ist die Entscheidung nicht, doch der Meister lockt mit einer Besonderheit und belohnt diejenigen die sich trauen: Nach dem Wegschmelzen offenbart er eine Glücksmünze, auf der alte Weisheiten verewigt sind.Die Herstellung unserer mehrfarbigen Modelle ist sehr aufwendig, wobei das Endresultat nie ganz vorhersehbar ist. Jeder Meister ist ein Unikat mit individuellem Charme und variiert leicht im Aussehen.
        Material: Rapswachs Komposition mit Paraffinanteil, Baumwolldocht, Metallmünze
        Farbe: Schwarz, Jadegrün, durchgefärbt, glanzbeschichtet, RAL Kerzengüte Qualität
        Brenndauer: 30h
        Größe:19cm
        Geruch: neutral`,
            RRPprice: 34.9,
          },
          {
            name: 'Meister Stein Sculpture',
            id: '4170000036258',
            image:
              'https://cdn.shopify.com/s/files/1/0002/7502/1865/products/Moderne-Buddha-Figur-Stein-Staute.png?v=1587120707',
            description: `Die Buddha Figur ist für die Ewigkeit gemacht. Massiv und schwer, eignet sie sich als Haus und Garten Dekoration. Das matt weiße Material kreiert ein schönes Schattenspiel und bringt die geometrische Flächen des Designs besonders gut zur Geltung.Doch das ist nicht Alles: Das Material lässt sich kinderleicht mit Farben und Filzstiften aller Art bemalen. Ob passend zu Deiner Wandfarbe, als neuer Farbakzent in Deinem Interior oder sogar als Dein persönlicher künstlerischer Ausdruck - den Möglichkeiten sind keine Grenzen gesetzt. Gib Deinem Buddha eine persönliche Note!
        Material: Reliefgießmasse, wetterbeständig wenn unbemalt
        Gewicht: ca. 1kg
        Farbe: Schneeweiß
        Größe: 18cm`,
            RRPprice: 34.9,
          },
        ],

        cart: [],

        prices: [
          { id: '633710796576', WSprice: 13.1 },
          { id: '633710796637', WSprice: 14.6 },
          { id: '4170000002000', WSprice: 17.34 },
          { id: '633710796569', WSprice: 15.4 },
          { id: '633710796606', WSprice: 13.6 },
          { id: '4170000036258', WSprice: 14.45 },
          { id: '633710796613', WSprice: 15.4 },
          { id: '633710796552', WSprice: 14.3 },
          { id: '633710796521', WSprice: 17.9 },
          { id: '633710796507', WSprice: 15.12 },
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
            const productExists = state.cart.some(product => product.id === id);
            return {
              prices: state.prices.map(product =>
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
        setPrices: data => {
          set(state => {
            return {
              prices: data,
            };
          });
        },

        setProducts: data => {
          set(state => {
            return {
              products: [...data],
            };
          });
        },

        // loadUser_fetch_deactivated: async () => {
        //   const response = await fetch('/api/users');
        //   const json = await response.json();
        //   const partialUser = json.data[0];
        //   set(state => {
        //     return {
        //       user: {
        //         ...state.user,
        //         ...partialUser,
        //       },
        //     };
        //   });
        // },

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
        setUserData: data => {
          set(state => {
            return {
              user: {
                ...state.user,
                ...data,
              },
            };
          });
        },

        // setUserData_fetch_deactivated: async data => {
        //   const user = get().user;
        //   const response = await fetch('/api/users', {
        //     method: 'PATCH',
        //     body: JSON.stringify({ ...data, _id: user._id }),
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   });
        //   const json = await response.json();
        //   set(state => {
        //     return {
        //       user: {
        //         ...state.user,
        //         ...json.data,
        //       },
        //     };
        //   });
        // },
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
