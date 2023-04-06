/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-04-06 17:57:52
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-04-06 18:36:57
 */
import "../css/test.css"

function component() {
  const element = document.createElement("div")
  element.innerHTML = ["Hello", "Webpack"].join(" ")
  element.className = "content"
  console.log("----element")
  return element
}

document.body.appendChild(component())
