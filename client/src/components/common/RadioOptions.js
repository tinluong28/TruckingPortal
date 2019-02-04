const RadioOptions = {
  status: [
    { label: "Standard", value: "STANDARD", name: "status" },
    { label: "Hot", value: "HOT", name: "status" }
  ],
  mode: [{ label: "FCL", value: "FCL" }, { label: "LCL", value: "LCL" }],
  devanning: [
    { label: "No", value: "NO" },
    { label: "Full", value: "FULL" },
    { label: "Partial", value: "PARTIAL" }
  ],
  containerSize: [
    { label: "20", value: "20" },
    { label: "40", value: "40" },
    { label: "60", value: "60" }
  ],
  PCSUnit: [
    { label: "PCS", value: "PCS" },
    { label: "PAL", value: "PAL" },
    { label: "BOX", value: "BOX" }
  ],
  weightUnit: [{ label: "KG", value: "KG" }, { label: "LBS", value: "LBS" }],
  dimensionUnit: [{ label: "CBM", value: "CBM" }],
  releaseStatus: [
    { label: "HOLD", value: "HOLD" },
    { label: "RLD", value: "RLD" }
  ]
};

export default RadioOptions;
