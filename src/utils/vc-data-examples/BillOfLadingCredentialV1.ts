export const BillOfLadingCredentialV1 = {
    type: 'BillOfLadingCredentialV1',
      data: {
        '@type': ['CargoReceipt', 'BillOfLading'],
        shipper: {
          '@type': ['Person', 'PersonE'],
        },
        recipient: {
          '@type': ['Person', 'PersonE'],
        },
        shipment: {
          '@type': 'Shipment',
          hasValue: {
            '@type': 'MonetaryAmount',
          },
          shippedOn: '',
          originAddress: {
            '@type': 'PostalAddress',
          },
          deliveryAddress: {
            '@type': 'PostalAddress',
          },
          orderedItem: {
            '@type': ['Product', 'ProductE'],
            hasValue: {
              '@type': 'MonetaryAmount',
              value: '1000',
              currency: 'USD',
            },
          },
        },
        portLoading: {
          '@type': ['Place', 'Port'],
          name: 'Port 1',
        },
        portUnloading: {
          '@type': ['Place', 'Port'],
          name: 'Port 2',
        },
      },
}