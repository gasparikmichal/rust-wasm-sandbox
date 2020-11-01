import init from "./pkg/rust_sandbox.js";

const runWasm = async () => {
  // Instantiate our wasm module
  const wasmSandbox = await init("./pkg/rust_sandbox_bg.wasm");

  // Call the Add function export from wasm, save the result
  const addResult = wasmSandbox.add(24, 24);

  // Set the result onto the body
  document.body.textContent = `addResult: ${addResult}`;
};
runWasm();