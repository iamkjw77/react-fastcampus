/* -------------------------------------------------------------------------- */
// 타입 검사 유틸리티

export const typeIs = (data) => Object.prototype.toString.call(data).slice(8, -1).toLowerCase();

export const isNumber = (data) => typeIs(data) === 'number';

export const isString = (data) => typeIs(data) === 'string';

export const isBoolean = (data) => typeIs(data) === 'boolean';

export const isFunction = (data) => typeIs(data) === 'function';

export const isArray = (data) => typeIs(data) === 'array';

export const isObject = (data) => typeIs(data) === 'object';

/* -------------------------------------------------------------------------- */
// 배열 유틸리티

export const makeArray = (likeArray) => Array.prototype.slice.call(likeArray);

/* -------------------------------------------------------------------------- */
// 시리얼라이즈 유틸리티

export const serialize = (data, prettiy) => !prettiy ? JSON.stringify(data) : JSON.stringify(data, null, 2);

export const deserialize = (json) => JSON.parse(json);

/* -------------------------------------------------------------------------- */
// 믹스인 유틸리티

export const mixins = (...args) => {
  return makeArray(args).reduce(function (o1, o2) {
    for (const key in o2) {
      if (o2.hasOwnProperty(key)) {
        const o1Value = o1[key];
        const o2Value = o2[key];
        if (isObject(o2Value)) {
          o1Value && _checkValueType(isObject, o1Value, key)
          o1[key] = mixins(o1Value || {}, o2Value);
        } 
        else if (isArray(o2Value)) {
          o1Value && _checkValueType(isArray, o1Value, key)
          o1[key] = (o1Value || []).concat(o2Value);
        } 
        else {
          o1[key] = o2Value;
        }
      }
    }
    return o1;
  }, {});
};

const _checkValueType = (method, value, key) => {
  if (!method(value)) {
    const message = '혼합할 각 객체 ' + key + ' 속성 유형이 다릅니다.';
    if (Euid.logger) {
      Euid.logger.error(message)
    } else {
      throw new Error(message);
    }
  }
}

/* -------------------------------------------------------------------------- */
// 모듈 내보내기

// Euid.utils = {
//   typeIs: typeIs,
//   isNumber: isNumber,
//   isString: isString,
//   isBoolean: isBoolean,
//   isFunction: isFunction,
//   isArray: isArray,
//   isObject: isObject,
//   makeArray: makeArray,
//   serialize: serialize,
//   deserialize: deserialize,
//   mixins: mixins,
// };

