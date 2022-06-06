import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    set => {
      return {
        StoreLogo:
          'https://cdn.shopify.com/s/files/1/0002/7502/1865/files/Candles-of-Wisdom_logo_v1_rgb_shopify_logosmaller_black.png?v=1624907146',

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
            WSprice: 17.4,
            quantity: 0,
            sum: 0,
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
            WSprice: 17.4,
            quantity: 0,
            sum: 0,
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
            WSprice: 19.4,
            quantity: 0,
            sum: 0,
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
            WSprice: 19.4,
            quantity: 0,
            sum: 0,
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
            WSprice: 19.6,
            quantity: 0,
            sum: 0,
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
            WSprice: 19.6,
            quantity: 0,
            sum: 0,
          },
          {
            name: 'Sun Candle',
            id: '4170000002000',
            image:
              'https://cdn.shopify.com/s/files/1/0002/7502/1865/files/Burning-Buddha-Sun-Candle.png?v=1652898466',
            description: `Die Sonnenkerze spielt mit der Transluzenz des Kerzenwachses. Durch die raffinierte Formgebung leuchtet sie wie eine Sonne und kreiert eine außergewöhnliche Atmosphäre im Raum. Das flackernde Licht fesselt Deinen Blick und lässt ihn nicht mehr los.Auch in der Sonnenkerze wartet die Münze der Weisheit auf Dich. Erst nach dem Abbrennen kommt die versteckte Botschaft zum Vorschein. Welche Weisheit Deine Kerze für Dich bereit hält, entscheidet der Zufall - falls es ihn gibt.
        Material: Raps-Komposition mit Paraffinanteil, Baumwolldocht, Metallmünze
        Farbe: ungefärbt
        Größe: 10cm
        Brenndauer: 50h+
        Geruch: neutral`,
            RRPprice: 34.9,
            WSprice: 17.4,
            quantity: 0,
            sum: 0,
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
            WSprice: 17.4,
            quantity: 0,
            sum: 0,
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
            WSprice: 19.6,
            quantity: 0,
            sum: 0,
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
            WSprice: 17.4,
            quantity: 0,
            sum: 0,
          },
        ],

        totals: {
          TotalTaxes: 0,
          TotalPrice: 0,
          SubTotalPrice: 0,
          SubTotalPriceInclShipping: 0,
          TotalShipping: 0,
          TotalQuantity: 0,
          TotalParcels: 0,
        },

        seller: {
          ProductsInParcel: 20,
          ParcelPrice: 9.9,
          Taxes: 19,
        },

        buyer: {
          LocalPickup: false,
          ShippingBilling: false,
          BillingFirstName: '',
          BillingLastName: '',
          BillingCompany: '',
          BillingExtraAddressLine: '',
          BillingStreetAndNumber: '',
          BillingZip: '',
          BillingCity: '',
          BillingCountry: '',
          BillingVAT: '',
          ShippingFirstName: '',
          ShippingLastName: '',
          ShippingCompany: '',
          ShippingExtraAddressLine: '',
          ShippingStreetAndNumber: '',
          ShippingZip: '',
          ShippingCity: '',
          ShippingCountry: '',
        },

        updateTotal: () => {
          set(state => {
            const calcSubTotalPrice = state.products
              .map(product => product.sum)
              .reduce((prev, curr) => prev + curr);
            const calcTotalProducts = state.products
              .map(product => product.quantity)
              .reduce((prev, curr) => prev + curr);
            const calcTotalParcels = Math.ceil(
              calcTotalProducts / state.seller.ProductsInParcel
            );
            const calcTotalShipping =
              calcTotalParcels * state.seller.ParcelPrice;
            const calcSubTotalPriceInclShipping =
              calcSubTotalPrice + calcTotalShipping;
            const calcTotalTaxes =
              calcSubTotalPriceInclShipping * (state.seller.Taxes / 100);
            const calcTotalPrice =
              calcSubTotalPriceInclShipping + calcTotalTaxes;
            return {
              totals: {
                TotalTaxes: calcTotalTaxes,
                TotalPrice: calcTotalPrice,
                SubTotalPrice: calcSubTotalPrice,
                SubTotalPriceInclShipping: calcSubTotalPriceInclShipping,
                TotalShipping: calcTotalShipping,
                TotalQuantity: calcTotalProducts,
                TotalParcels: calcTotalParcels,
              },
            };
          });
        },
        changeLocalPickup: (boolean) => {
          set(state => {
            return {
              buyer: {
                LocalPickup: boolean,
              },
            };
          });
        },
        changeShippingBilling: (boolean) => {
          set(state => {
            return {
              buyer: {
                ShippingBilling: boolean,
              },
            };
          });
        },
        setQuantity: (id, quantity) => {
          set(state => {
            return {
              products: state.products.map(product =>
                product.id === id
                  ? {
                      ...product,
                      quantity: quantity,
                      sum: product.WSprice * quantity,
                    }
                  : product
              ),
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
