/**
 * The sleep function takes a number as a paramter and indicates the 
 * seconds that the runtime as to wait till continue.
 */
export default function sleep(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}