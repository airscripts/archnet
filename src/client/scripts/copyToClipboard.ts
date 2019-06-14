/**
 * This is a function that takes a string as a parameter
 * and then copies it to the clipboard.
 * 
 * The reason on why we create an input element, is that the select 
 * method only works with this kind of HTML elements.
 */
export default function copyToClipboard(textToCopy: string) {
  let tempInputElement = document.createElement("input");
  
  tempInputElement.type = "text";
  tempInputElement.value = textToCopy;

  document.body.appendChild(tempInputElement);

  tempInputElement.select();
  document.execCommand("copy");

  document.body.removeChild(tempInputElement);
}