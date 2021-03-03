import { log, success, error } from "./logger.js";
import { serialize } from "./utils.js";

// Euid 모듈 멤버 추출
// const logger = Euid.logger;
// const utils = Euid.utils;

/* -------------------------------------------------------------------------- */

// 테스트 유틸리티
export const test = (title, callback) => {
  console.group('TEST → ' + title);
  try {
    log('테스트 결과:');
    callback();
  } catch (err) {
    error('테스트 실패: ' + err.message);
  }
  console.groupEnd();
};

// 익스펙트 유틸리티
export const expect = (actual /* 결과 값 */) => {
  return {
    toBe: (expected /* 기대 값 */) => {
      if (expected !== actual) {
        error('결과 값(' + serialize(actual) + ')과 기대 값("' + expected + '")이 다릅니다.');
      } else {
        success('결과 값(' + serialize(actual) + ')과 기대 값("' + expected + '")이 같습니다.');
      }
    },
    notToBe: (expected) => {
      // ...
    },
    toBeGreaterThan: (expected) => {
      // ...
    },
    toBeLessThan: (expected) => {
      // ...
    },
  };
};

// Euid.tester = {
//   test,
//   expect,
// };

