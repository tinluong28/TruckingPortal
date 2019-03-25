import States from "./StateObject";
// All value must be uppercase.
const SelectOptions = {
  states: States,
  yesOrNo: [{ label: "No", value: "no" }, { label: "Yes", value: "yes" }],
  taxIDType: [
    { label: "Select One", value: "" },
    { label: "EIN#", value: "EIN" },
    { label: "SSN#", value: "SSN" },
    { label: "ITIN#", value: "ITIN" }
  ],
  creditType: [
    { label: "Select One", value: "" },
    { label: "Excellent", value: "excellent" },
    { label: "Good", value: "good" },
    { label: "Fair", value: "fair" },
    { label: "Bad", value: "bad" },
    { label: "Risky", value: "risky" }
  ],
  creditHold: [
    { label: "Select One", value: "" },
    { label: "No Holds", value: "no" },
    { label: "Yes / Explain below", value: "yes" }
  ],
  status: [
    { label: "Select One", value: "" },
    { label: "Standard", value: "standard" },
    { label: "Hot", value: "hot" }
  ],
  mode: [{ label: "FCL", value: "FCL" }, { label: "LCL", value: "LCL" }],
  devanning: [
    { label: "No", value: "no" },
    { label: "Full", value: "full" },
    { label: "Partial", value: "partial" }
  ],
  containerSize: [
    { label: "20", value: "20" },
    { label: "40", value: "40" },
    { label: "60", value: "60" },
    { label: "LCL", value: "LCL" }
  ],
  PCSUnit: [
    { label: "PCS", value: "pcs" },
    { label: "PAL", value: "pal" },
    { label: "BOX", value: "box" }
  ],
  weightUnit: [{ label: "KG", value: "KG" }, { label: "LBS", value: "LBS" }],
  dimensionUnit: [{ label: "CBM", value: "CBM" }],
  releaseStatus: [
    { label: "HOLD", value: "hold" },
    { label: "RELEASE", value: "release" }
  ]
};

export default SelectOptions;
