/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-28 08:29:57
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-04-06 18:28:40
 */
import { sum, mul } from "./js/math.js"
const { dateFormat, priceFormat } = require("./js/format")

import "./js/components.js"

console.log(sum(20, 30))
console.log(mul(20, 30))

console.log(dateFormat("1213"))
console.log(priceFormat("1213"))
