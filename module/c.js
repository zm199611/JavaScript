// default export
export default 1;


// named export
export const a =function() {};
const b = 2
export{
    b
}

// default import
export const a = function(){
    const a = 2;
    export {
        b
    }
}
export default{
    a:1,
    b:2
}
// 都只是数据导入,并不是解构
import { a,b } from '../js';
import React, { component } from 'react';