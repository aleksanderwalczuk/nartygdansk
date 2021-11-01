function toggleScrollLock(debug=false) {
  if (debug) {
    console.log('toggleScrollLockAction triggered')
  }
  if (document) {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  }
}

export default toggleScrollLock;
