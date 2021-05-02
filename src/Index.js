import {alfa} from "./al";
import chunk from 'lodash/chunk';
import numeral from 'numeral-es6'
import {DateTime} from 'luxon'

console.log("pippo e topolino");
console.log(alfa);
const res = chunk([2,7,6,5,32,12],2);
console.log(res);
console.log(numeral(10000).format('0,0'));
const td = DateTime.now();
console.log(td.toLocaleString());

