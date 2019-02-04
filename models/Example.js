results: [
  {
    pro: "123456789",
    terms: "Prepaid",
    status: {
      activityCode: "OK",
      activity: "delivered to destination",
      trailer: "702249",
      signedBy: "customer signature here",
      serviceCenter: {
        id: "DET",
        phone: "8888601909",
        fax: null,
        name: "Detroit",
        address1: null,
        address2: null,
        city: "WARREN",
        state: "MI",
        zip: "48092"
      },
      time: "2014-12-04T10:03:00"
    },
    shipper: {
      address1: "6450 Poe Avenue",
      address2: "Suite 311",
      city: "Dayton",
      name: "Dayton Freight Lines, Inc.",
      state: "OH",
      zip: "45414"
    },
    consignee: {
      address1: "123 North Main St.",
      address2: "",
      city: "WARREN",
      name: "Consignee name",
      state: "MI",
      zip: "48092"
    },
    entryDate: "2014-12-03T00:00:00",
    pickupDate: "2014-12-03T00:00:00",
    estimatedDeliveryDate: null,
    isAppointment: false,
    appointmentFrom: null,
    appointmentTo: null,
    deliveryDate: "2014-12-04T00:00:00",
    handlingUnits: 3,
    weight: 1175,
    originServiceCenter: {
      id: "DAY",
      phone: "8008606400",
      fax: null,
      name: "Dayton",
      address1: "6265 Executive Blvd.",
      address2: "",
      city: "DAYTON",
      state: "OH",
      zip: "45424"
    },
    destinationServiceCenter: {
      id: "DET",
      phone: "8888601909",
      fax: null,
      name: "Detroit",
      address1: "32717 Hollingsworth Ave.",
      address2: "",
      city: "WARREN",
      state: "MI",
      zip: "48092"
    },
    originPartner: null,
    destinationPartner: null,
    billOfLadingNumbers: ["bill of lading numbers here"],
    purchaseOrders: ["Purchase order numbers here"],
    shipperNumbers: ["shipper numbers here"],
    charges: 123.45,
    discount: 12.34,
    details: [
      {
        handlingUnits: 1,
        class: "85",
        packaging: "DR",
        isHazardous: false,
        description: "Freight description here",
        weight: 419,
        rate: 12,
        charges: 50.45
      },
      {
        handlingUnits: 1,
        class: "65",
        packaging: "DR",
        isHazardous: true,
        description: "DRUM Description",
        weight: 397,
        rate: 12,
        charges: 50.0
      },
      {
        handlingUnits: 1,
        class: "70",
        packaging: "DR",
        isHazardous: true,
        description: "DRUM Description here",
        weight: 359,
        rate: 12,
        charges: 23.0
      }
    ],
    relatedShipments: []
  }
];
