import States from "./StateObject";
// All value must be uppercase.
const SelectOptions = {
  states: States,
  yesOrNo: [{ label: "No", value: "NO" }, { label: "Yes", value: "YES" }],
  taxIDType: [
    { label: "Select One", value: "" },
    { label: "EIN#", value: "EIN" },
    { label: "SSN#", value: "SSN" },
    { label: "ITIN#", value: "ITIN" }
  ],
  creditType: [
    { label: "Select One", value: "" },
    { label: "Excellent", value: "EXCELLENT" },
    { label: "Good", value: "GOOD" },
    { label: "Fair", value: "FAIR" },
    { label: "Bad", value: "BAD" },
    { label: "Risky", value: "RISKY" }
  ],
  creditHold: [
    { label: "Select One", value: "" },
    { label: "No Holds", value: "NO" },
    { label: "Yes / Explain below", value: "YES" }
  ],
  status: [
    { label: "Select One", value: "" },
    { label: "Standard", value: "STANDARD" },
    { label: "Hot", value: "HOT" }
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
    { label: "60", value: "60" },
    { label: "LCL", value: "LCL" }
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

export default SelectOptions;
