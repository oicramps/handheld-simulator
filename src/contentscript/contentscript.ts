function simulateScanCode(code) {
  const node = document.activeElement;
  const setValue = Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype,
    "value"
  ).set;
  const event: any = new Event("input", { bubbles: true });
  try {
    setValue.call(node, code);
  } catch {
    console.error("There is no fields called 'value' in this page");
  }
  node.dispatchEvent(event);
  event.simulated = true;
  let e: any = new CustomEvent("keyup");
  e.altKey = false;
  e.ctrlKey = true;
  e.shiftKey = false;
  e.metaKey = false;
  e.bubbles = true;
  e.key = "\r";
  e.keyCode = e.key.charCodeAt(0);
  e.which = e.keyCode;
  window.dispatchEvent(e);
  const audio = new Audio(
    "http://soundbible.com/mp3/Beep-SoundBible.com-923660219.mp3"
  );
  audio.play();
}

function inject(fn) {
  const script = document.createElement("script");
  script.text = `${fn.toString()}`;
  console.log("script.text ", script.text )
  document.documentElement.appendChild(script);
}

inject(simulateScanCode);

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "fill") {
    simulateScanCode(request.message);
    window.dispatchEvent(new Event("keyup"));
  }
});
