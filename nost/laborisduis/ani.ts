// Assuming strType is a type alias for string
type strType = string;

// 'ts' variable is cast to 'strType' which is less specific than its original type
let ts2: strType = ts as strType;
