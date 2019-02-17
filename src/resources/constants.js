export const BASE_URL = 'http://localhost:3001' || `${process.env.REACT_APP_BACKEND}`;

export function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + s4() + s4() + s4();
  }
