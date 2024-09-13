// export function isBoolean(value) {
//   return value === true || value === false;
// }

// export function isNumber(value) {
//   return typeof value === "number";
// }

// export function isNull(value) {
//   return value === null;
// }

// export function isString(value) {
//   return typeof value === "string";
// }

// export function isSymbol(value) {
//   return typeof value === "symbol";
// }

// export function isUndefined(value) {
//   return value === undefined;
// }

export function isArray(value) {
  return Array.isArray(value);
}

export function isFunction(value) {
  return typeof value === "function";
}

export function isObject(value) {
  return typeof value === "object" && Object.keys(value).length >= 0;
}

export function isPlainObject(value) {
  throw "Not implemented!";
}
