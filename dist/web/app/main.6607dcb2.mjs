// Compiles a dart2wasm-generated main module from `source` which can then
// be instantiated via the `instantiate` method.
//
// `source` needs to be a `Response` object (or promise thereof) e.g. created
// via the `fetch()` JS API.
export async function compileStreaming(source) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(
      await WebAssembly.compileStreaming(source, builtins), builtins);
}

// Compiles a dart2wasm-generated wasm module from `bytes` which is then
// instantiable via the `instantiate` method.
export async function compile(bytes) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(await WebAssembly.compile(bytes, builtins), builtins);
}

class CompiledApp {
  constructor(module, builtins) {
    this.module = module;
    this.builtins = builtins;
  }

  // The second argument is an options object containing:
  // `loadDeferredModules` is a JS function that takes an array of module names
  //   matching wasm files produced by the dart2wasm compiler. It also takes a
  //   callback that should be invoked for each loaded module with 2 arguments:
  //   (1) the module name, (2) the loaded module in a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`. The callback
  //   returns a Promise that resolves when the module is instantiated.
  //   loadDeferredModules should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  // `loadDeferredId` is a JS function that takes load ID produced by the
  //   compiler when the `use-load-ids` option is passed. Each load ID maps to
  //   one or more wasm files as specified in the emitted JSON file. It also
  //   takes a callback that should be invoked for each loaded module with 2
  //   arguments: (1) the module name, (2) the loaded module in a format
  //   supported by `WebAssembly.compile` or `WebAssembly.compileStreaming`.
  //   The callback returns a Promise that resolves when the module is
  //   instantiated.
  //   loadDeferredId should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  async instantiate(additionalImports, {loadDeferredModules, loadDeferredId} = {}) {
    let dartInstance;

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + value;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
      wrapped.dartFunction = dartFunction;
      wrapped[jsWrappedDartFunctionSymbol] = true;
      return wrapped;
    }

    // Imports
    const dart2wasm = {
            AB: Function.prototype.call.bind(DataView.prototype.getUint8),
      AC: a => a.length,
      AD: (x0,x1) => { x0.fillStyle = x1 },
      AE: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float32Array) return 1;
        return 2;
      },
      AF: (x0,x1,x2) => x0.setProperty(x1,x2),
      AG: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      AH: (x0,x1,x2) => x0.shaderSource(x1,x2),
      AI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      AJ: () => globalThis.WebGL2RenderingContext.DST_ALPHA,
      AK: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      B: s => printToConsole(s),
      BB: Function.prototype.call.bind(DataView.prototype.getInt8),
      BC: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      BD: (x0,x1,x2,x3,x4) => x0.strokeRect(x1,x2,x3,x4),
      BE: x0 => x0.createBuffer(),
      BF: x0 => x0.classList,
      BG: (x0,x1,x2) => new DataView(x0,x1,x2),
      BH: (x0,x1) => x0.compileShader(x1),
      BI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      BJ: () => globalThis.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA,
      BK: x0 => x0.canvas,
      C: Function.prototype.call.bind(Number.prototype.toString),
      CB: (o, i) => o[i],
      CC: x0 => x0.createPanner(),
      CD: (x0,x1,x2,x3,x4,x5) => x0.arc(x1,x2,x3,x4,x5),
      CE: () => globalThis.WebGL2RenderingContext.STREAM_DRAW,
      CF: x0 => x0.documentElement,
      CG: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float64Array) return 1;
        return 2;
      },
      CH: (x0,x1,x2) => x0.getShaderParameter(x1,x2),
      CI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      CJ: () => globalThis.WebGL2RenderingContext.SRC_ALPHA,
      CK: x0 => x0.getSupportedExtensions(),
      D: Function.prototype.call.bind(String.prototype.indexOf),
      DB: o => o.length,
      DC: x0 => x0.positionZ,
      DD: (x0,x1,x2) => x0.scale(x1,x2),
      DE: () => globalThis.WebGL2RenderingContext.DYNAMIC_DRAW,
      DF: (x0,x1) => { x0.checked = x1 },
      DG: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint32Array) return 1;
        return 2;
      },
      DH: (x0,x1) => x0.getShaderInfoLog(x1),
      DI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      DJ: () => globalThis.WebGL2RenderingContext.ONE,
      DK: x0 => x0.height,
      E: (exn) => {
        let stackString = exn.toString();
        let frames = stackString.split('\n');
        let drop = 4;
        if (frames[0].startsWith('Error')) {
            drop += 1;
        }
        return frames.slice(drop).join('\n');
      },
      EB: o => {
        if (o === undefined) return 1;
        var type = typeof o;
        if (type === 'boolean') return 2;
        if (type === 'number') return 3;
        if (type === 'string') return 4;
        if (o instanceof Array) return 5;
        if (ArrayBuffer.isView(o)) {
          if (o instanceof Int8Array) return 6;
          if (o instanceof Uint8Array) return 7;
          if (o instanceof Uint8ClampedArray) return 8;
          if (o instanceof Int16Array) return 9;
          if (o instanceof Uint16Array) return 10;
          if (o instanceof Int32Array) return 11;
          if (o instanceof Uint32Array) return 12;
          if (o instanceof Float32Array) return 13;
          if (o instanceof Float64Array) return 14;
          if (o instanceof DataView) return 15;
        }
        if (o instanceof ArrayBuffer) return 16;
        // Feature check for `SharedArrayBuffer` before doing a type-check.
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
            return 17;
        }
        if (o instanceof Promise) return 18;
        return 19;
      },
      EC: x0 => x0.positionY,
      ED: (x0,x1,x2,x3,x4) => x0.clearRect(x1,x2,x3,x4),
      EE: (x0,x1) => { x0.display = x1 },
      EF: (x0,x1) => { x0.value = x1 },
      EG: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int32Array) return 1;
        return 2;
      },
      EH: () => globalThis.WebGL2RenderingContext.COMPILE_STATUS,
      EI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      EJ: () => globalThis.WebGL2RenderingContext.ZERO,
      EK: x0 => x0.width,
      F: () => new Error().stack,
      FB: x0 => x0.random(),
      FC: x0 => x0.positionX,
      FD: x0 => x0.devicePixelRatio,
      FE: x0 => x0.style,
      FF: (x0,x1,x2) => x0.connect(x1,x2),
      FG: o => o instanceof Int16Array,
      FH: () => globalThis.WebGL2RenderingContext.VERTEX_SHADER,
      FI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      FJ: () => globalThis.WebGL2RenderingContext.BLEND,
      FK: (x0,x1) => { x0.height = x1 },
      G: s => JSON.stringify(s),
      GB: () => globalThis.Math,
      GC: (x0,x1) => { x0.coneInnerAngle = x1 },
      GD: x0 => x0.height,
      GE: (o, m, a) => o[m].apply(o, a),
      GF: (x0,x1,x2,x3) => x0.connect(x1,x2,x3),
      GG: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int8Array) return 1;
        return 2;
      },
      GH: x0 => x0.createFramebuffer(),
      GI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      GJ: () => globalThis.WebGL2RenderingContext.CCW,
      GK: x0 => x0.innerHeight,
      H: (s, p, i) => s.lastIndexOf(p, i),
      HB: (string, times) => string.repeat(times),
      HC: (x0,x1) => { x0.maxDistance = x1 },
      HD: x0 => x0.width,
      HE: x0 => new Array(x0),
      HF: () => new AudioContext(),
      HG: (x0,x1) => x0.getExtension(x1),
      HH: (x0,x1,x2) => x0.bindFramebuffer(x1,x2),
      HI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      HJ: () => globalThis.WebGL2RenderingContext.BACK,
      HK: (x0,x1) => { x0.width = x1 },
      I: Function.prototype.call.bind(Number.prototype.toString),
      IB: x0 => x0.createBufferSource(),
      IC: (x0,x1) => { x0.rolloffFactor = x1 },
      ID: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      IE: o => [o],
      IF: (x0,x1) => { x0.buffer = x1 },
      IG: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_T,
      IH: (x0,x1) => x0.drawBuffers(x1),
      II: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      IJ: () => globalThis.WebGL2RenderingContext.FRONT,
      IK: x0 => x0.innerWidth,
      J: Function.prototype.call.bind(BigInt.prototype.toString),
      JB: x0 => x0.createGain(),
      JC: (x0,x1) => { x0.refDistance = x1 },
      JD: x0 => x0.focus(),
      JE: (o0, o1) => [o0, o1],
      JF: (x0,x1,x2,x3) => x0.createBuffer(x1,x2,x3),
      JG: () => globalThis.WebGL2RenderingContext.REPEAT,
      JH: (x0,x1) => x0.readBuffer(x1),
      JI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      JJ: () => globalThis.WebGL2RenderingContext.CULL_FACE,
      JK: () => globalThis.window,
      K: (exn) => {
        if (exn instanceof Error) {
          return exn.stack;
        } else {
          return null;
        }
      },
      KB: x0 => x0.createStereoPanner(),
      KC: (x0,x1) => { x0.distanceModel = x1 },
      KD: x0 => x0.className,
      KE: (o0, o1, o2) => [o0, o1, o2],
      KF: (x0,x1,x2) => x0.copyToChannel(x1,x2),
      KG: () => globalThis.WebGL2RenderingContext.CLAMP_TO_EDGE,
      KH: x0 => x0.createRenderbuffer(),
      KI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      KJ: () => globalThis.WebGL2RenderingContext.NEVER,
      KK: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      L: o => o === undefined,
      LB: (x0,x1) => x0.connect(x1),
      LC: (x0,x1) => { x0.panningModel = x1 },
      LD: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      LE: (o0, o1, o2, o3) => [o0, o1, o2, o3],
      LF: x0 => x0.sampleRate,
      LG: () => globalThis.WebGL2RenderingContext.TEXTURE_WRAP_S,
      LH: (x0,x1,x2) => x0.bindRenderbuffer(x1,x2),
      LI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      LJ: () => globalThis.WebGL2RenderingContext.ALWAYS,
      LK: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      M: o => String(o),
      MB: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      MC: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      MD: (x0,x1) => x0.deleteBuffer(x1),
      ME: (x0,x1,x2) => { x0[x1] = x2 },
      MF: (x0,x1) => x0.decodeAudioData(x1),
      MG: () => globalThis.WebGL2RenderingContext.TEXTURE_MAG_FILTER,
      MH: (x0,x1,x2,x3,x4,x5) => x0.renderbufferStorageMultisample(x1,x2,x3,x4,x5),
      MI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      MJ: () => globalThis.WebGL2RenderingContext.LEQUAL,
      MK: x0 => x0.type,
      N: (x0,x1) => x0.getElementById(x1),
      NB: o => o,
      NC: (x0,x1,x2) => x0.setTimeout(x1,x2),
      ND: (x0,x1) => x0.deleteVertexArray(x1),
      NE: (x0,x1) => x0.contains(x1),
      NF: (x0,x1) => x0.warn(x1),
      NG: () => globalThis.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR,
      NH: (x0,x1,x2,x3,x4) => x0.framebufferRenderbuffer(x1,x2,x3,x4),
      NI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      NJ: () => globalThis.WebGL2RenderingContext.LESS,
      NK: x0 => x0.reason,
      O: (x0,x1,x2) => x0.setAttribute(x1,x2),
      OB: (x0,x1) => x0.start(x1),
      OC: (x0,x1) => { x0.className = x1 },
      OD: (x0,x1,x2) => x0.bindBuffer(x1,x2),
      OE: x0 => x0.activeElement,
      OF: x0 => x0.createConvolver(),
      OG: () => globalThis.WebGL2RenderingContext.LINEAR,
      OH: (x0,x1,x2,x3,x4,x5) => x0.framebufferTexture2D(x1,x2,x3,x4,x5),
      OI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      OJ: () => globalThis.WebGL2RenderingContext.DEPTH_TEST,
      OK: x0 => x0.message,
      P: (x0,x1) => x0.matchMedia(x1),
      PB: x0 => x0.currentTime,
      PC: s => s.trim(),
      PD: (x0,x1,x2,x3) => x0.bufferData(x1,x2,x3),
      PE: (x0,x1) => x0.querySelectorAll(x1),
      PF: (x0,x1) => x0.disconnect(x1),
      PG: () => globalThis.WebGL2RenderingContext.NEAREST,
      PH: (x0,x1) => x0.checkFramebufferStatus(x1),
      PI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      PJ: (x0,x1,x2,x3,x4) => x0.viewport(x1,x2,x3,x4),
      PK: () => globalThis.document,
      Q: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      QB: (x0,x1) => { x0.onended = x1 },
      QC: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      QD: x0 => new Uint8Array(x0),
      QE: (x0,x1) => x0.item(x1),
      QF: (x0,x1) => x0.createChannelSplitter(x1),
      QG: () => globalThis.WebGL2RenderingContext.TEXTURE_MIN_FILTER,
      QH: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE,
      QI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      QJ: x0 => x0.drawingBufferHeight,
      R: (x0,x1,x2) => x0.addEventListener(x1,x2),
      RB: x0 => x0.disconnect(),
      RC: (x0,x1,x2,x3) => x0.setPosition(x1,x2,x3),
      RD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      RE: x0 => x0.length,
      RF: (x0,x1) => x0.createChannelMerger(x1),
      RG: () => globalThis.WebGL2RenderingContext.RGBA8,
      RH: () => globalThis.WebGL2RenderingContext.DEPTH_ATTACHMENT,
      RI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      RJ: x0 => x0.drawingBufferWidth,
      S: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      SB: x0 => x0.pan,
      SC: (x0,x1,x2,x3,x4,x5,x6) => x0.setOrientation(x1,x2,x3,x4,x5,x6),
      SD: Function.prototype.call.bind(DataView.prototype.setInt32),
      SE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      SF: x0 => x0.destination,
      SG: o => o instanceof Uint8ClampedArray,
      SH: () => globalThis.WebGL2RenderingContext.DEPTH_COMPONENT24,
      SI: x0 => x0.display,
      SJ: (x0,x1,x2,x3,x4) => x0.clearColor(x1,x2,x3,x4),
      T: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      TB: x0 => x0.gain,
      TC: x0 => x0.listener,
      TD: Function.prototype.call.bind(DataView.prototype.setUint32),
      TE: x0 => x0.preventDefault(),
      TF: (o, t) => typeof o === t,
      TG: x0 => x0.data,
      TH: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT1,
      TI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      TJ: (x0,x1) => x0.clear(x1),
      U: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      UB: (x0,x1) => { x0.value = x1 },
      UC: (x0,x1) => x0.getItem(x1),
      UD: Function.prototype.call.bind(DataView.prototype.setInt16),
      UE: x0 => x0.shiftKey,
      UF: x0 => globalThis.Object.keys(x0),
      UG: (x0,x1,x2,x3,x4,x5) => x0.drawImage(x1,x2,x3,x4,x5),
      UH: () => globalThis.WebGL2RenderingContext.COLOR_ATTACHMENT0,
      UI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      UJ: () => globalThis.WebGL2RenderingContext.DEPTH_BUFFER_BIT,
      V: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      VB: x0 => x0.playbackRate,
      VC: (x0,x1,x2) => x0.setItem(x1,x2),
      VD: Function.prototype.call.bind(DataView.prototype.setUint16),
      VE: x0 => x0.code,
      VF: (o, p) => o[p],
      VG: (x0,x1) => x0.createElement(x1),
      VH: () => globalThis.WebGL2RenderingContext.RENDERBUFFER,
      VI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      VJ: () => globalThis.WebGL2RenderingContext.COLOR_BUFFER_BIT,
      W: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      WB: (x0,x1) => { x0.buffer = x1 },
      WC: (x0,x1) => x0.removeItem(x1),
      WD: Function.prototype.call.bind(DataView.prototype.setUint8),
      WE: x0 => x0.defaultPrevented,
      WF: x0 => x0.decode(),
      WG: (x0,x1) => { x0.src = x1 },
      WH: () => globalThis.WebGL2RenderingContext.NONE,
      WI: (d, digits) => d.toFixed(digits),
      WJ: (x0,x1,x2,x3,x4) => x0.drawArraysInstanced(x1,x2,x3,x4),
      X: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      XB: (x0,x1) => x0.cancelScheduledValues(x1),
      XC: o => {
        if (o === null || o === undefined) return 0;
        if (typeof(o) === 'string') return 1;
        return 2;
      },
      XD: Function.prototype.call.bind(DataView.prototype.setInt8),
      XE: x0 => x0.getGamepads(),
      XF: (x0,x1) => x0.getContext(x1),
      XG: x0 => x0.deltaY,
      XH: () => globalThis.WebGL2RenderingContext.FRAMEBUFFER,
      XI: () => typeof dartUseDateNowForTicks !== "undefined",
      XJ: (x0,x1,x2,x3,x4,x5) => x0.drawElementsInstanced(x1,x2,x3,x4,x5),
      Y: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      YB: (x0,x1,x2) => x0.setValueAtTime(x1,x2),
      YC: x0 => x0.localStorage,
      YD: (t, s) => t.set(s),
      YE: x0 => x0.value,
      YF: (x0,x1,x2,x3,x4) => x0.getImageData(x1,x2,x3,x4),
      YG: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      YH: (x0,x1) => x0.deleteQuery(x1),
      YI: () => Date.now(),
      YJ: () => globalThis.WebGL2RenderingContext.UNSIGNED_SHORT,
      Z: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      ZB: (x0,x1,x2) => x0.linearRampToValueAtTime(x1,x2),
      ZC: (s) => +s,
      ZD: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      ZE: x0 => x0.pressed,
      ZF: (x0,x1) => x0.hasAttribute(x1),
      ZG: (x0,x1) => x0.appendChild(x1),
      ZH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      ZI: () => 1000 * performance.now(),
      ZJ: () => globalThis.WebGL2RenderingContext.UNSIGNED_INT,
      a: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      aB: x0 => x0.frequency,
      aC: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      aD: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      aE: x0 => x0.buttons,
      aF: (x0,x1,x2) => x0.bindTexture(x1,x2),
      aG: x0 => x0.top,
      aH: x0 => x0.body,
      aI: (x0,x1) => x0.endQuery(x1),
      aJ: (x0,x1,x2,x3,x4) => x0.drawElements(x1,x2,x3,x4),
      b: (x0,x1) => x0.requestAnimationFrame(x1),
      bB: x0 => x0.value,
      bC: x0 => x0.getBoundingClientRect(),
      bD: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      bE: x0 => x0.axes,
      bF: (x0,x1) => x0.generateMipmap(x1),
      bG: x0 => x0.clientY,
      bH: (a, s) => a.join(s),
      bI: (x0,x1,x2,x3) => x0.drawArrays(x1,x2,x3),
      bJ: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10) => x0.blitFramebuffer(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10),
      c: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      cB: x0 => x0.createBiquadFilter(),
      cC: x0 => x0.restore(),
      cD: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      cE: x0 => x0.id,
      cF: () => globalThis.WebGL2RenderingContext.TEXTURE_2D,
      cG: x0 => x0.left,
      cH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      cI: () => globalThis.WebGL2RenderingContext.TRIANGLES,
      cJ: () => globalThis.WebGL2RenderingContext.DRAW_FRAMEBUFFER,
      d: (x0,x1) => x0.error(x1),
      dB: x0 => x0.start(),
      dC: x0 => x0.save(),
      dD: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      dE: x0 => x0.mapping,
      dF: () => globalThis.WebGL2RenderingContext.TEXTURE_2D_ARRAY,
      dG: x0 => x0.clientX,
      dH: (x0,x1) => { x0.disabled = x1 },
      dI: (x0,x1,x2) => x0.uniform1f(x1,x2),
      dJ: () => globalThis.WebGL2RenderingContext.READ_FRAMEBUFFER,
      e: () => globalThis.console,
      eB: (x0,x1) => { x0.type = x1 },
      eC: (x0,x1,x2,x3,x4) => x0.fillRect(x1,x2,x3,x4),
      eD: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      eE: x0 => x0.connected,
      eF: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11) => x0.texSubImage3D(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11),
      eG: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      eH: (x0,x1) => { x0.type = x1 },
      eI: (x0,x1,x2,x3) => x0.uniform2f(x1,x2,x3),
      eJ: x0 => x0.createQuery(),
      f: (x0,x1) => { x0.textContent = x1 },
      fB: b => !!b,
      fC: (x0,x1,x2,x3) => x0.fillText(x1,x2,x3),
      fD: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      fE: x0 => x0.navigator,
      fF: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => x0.texSubImage2D(x1,x2,x3,x4,x5,x6,x7,x8,x9),
      fG: x0 => x0.readText(),
      fH: (x0,x1) => { x0.id = x1 },
      fI: (x0,x1,x2,x3,x4) => x0.uniform3f(x1,x2,x3,x4),
      fJ: (x0,x1,x2) => x0.beginQuery(x1,x2),
      g: (o, p, r) => o.replaceAll(p, () => r),
      gB: (x0,x1) => { x0.loop = x1 },
      gC: x0 => x0.beginPath(),
      gD: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      gE: (x0,x1) => x0.fetch(x1),
      gF: () => globalThis.WebGL2RenderingContext.UNSIGNED_BYTE,
      gG: x0 => x0.clipboard,
      gH: (x0,x1) => x0.removeChild(x1),
      gI: (x0,x1,x2,x3,x4,x5) => x0.uniform4f(x1,x2,x3,x4,x5),
      gJ: (d, f) => d.toExponential(f),
      h: o => o,
      hB: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      hC: (x0,x1,x2,x3,x4) => x0.rect(x1,x2,x3,x4),
      hD: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint8Array) return 1;
        return 2;
      },
      hE: x0 => x0.json(),
      hF: () => globalThis.WebGL2RenderingContext.RGBA,
      hG: (x0,x1) => x0.writeText(x1),
      hH: x0 => x0.firstChild,
      hI: (x0,x1,x2,x3) => x0.uniformMatrix4fv(x1,x2,x3),
      hJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      i: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'number') return 1;
        return 2;
      },
      iB: x0 => x0.stop(),
      iC: x0 => x0.clip(),
      iD: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      iE: x0 => x0.text(),
      iF: x0 => x0.createTexture(),
      iG: x0 => x0.repeat,
      iH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      iI: (x0,x1,x2) => x0.uniform1i(x1,x2),
      iJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      j: (x0,x1) => x0.removeAttribute(x1),
      jB: Function.prototype.call.bind(String.prototype.toLowerCase),
      jC: (x0,x1,x2) => x0.translate(x1,x2),
      jD: (b, o) => new DataView(b, o),
      jE: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      jF: (x0,x1,x2,x3,x4,x5,x6) => x0.texStorage3D(x1,x2,x3,x4,x5,x6),
      jG: (x0,x1) => x0.getAttribute(x1),
      jH: x0 => x0.checked,
      jI: (x0,x1) => x0.activeTexture(x1),
      jJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      k: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      kB: Object.is,
      kC: x0 => x0.fill(),
      kD: (b, o, l) => new DataView(b, o, l),
      kE: o => o.buffer,
      kF: (x0,x1,x2,x3,x4,x5) => x0.texStorage2D(x1,x2,x3,x4,x5),
      kG: x0 => x0.visibilityState,
      kH: (x0,x1) => { x0.disabled = x1 },
      kI: () => globalThis.WebGL2RenderingContext.TEXTURE0,
      kJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      l: o => o,
      lB: Function.prototype.call.bind(DataView.prototype.setFloat64),
      lC: x0 => x0.stroke(),
      lD: () => globalThis.WebGL2RenderingContext.STATIC_DRAW,
      lE: (a, i) => a.push(i),
      lF: (x0,x1,x2,x3) => x0.texParameteri(x1,x2,x3),
      lG: (x0,x1) => x0.deleteFramebuffer(x1),
      lH: (x0,x1) => { x0.type = x1 },
      lI: (x0,x1) => x0.useProgram(x1),
      lJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      m: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      mB: x0 => x0.state,
      mC: (x0,x1) => { x0.lineWidth = x1 },
      mD: x0 => new Uint16Array(x0),
      mE: o => o.byteOffset,
      mF: (x0,x1,x2,x3) => x0.texParameterf(x1,x2,x3),
      mG: (x0,x1) => x0.deleteTexture(x1),
      mH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      mI: (x0,x1) => x0.enable(x1),
      mJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      n: f => f.dartFunction,
      nB: (x0,x1) => x0.exec(x1),
      nC: (x0,x1) => { x0.strokeStyle = x1 },
      nD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI16ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      nE: (o, offsetInBytes, lengthInBytes) => {
        var dst = new ArrayBuffer(lengthInBytes);
        new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
        return new DataView(dst);
      },
      nF: (x0,x1) => x0.getParameter(x1),
      nG: (x0,x1) => x0.deleteRenderbuffer(x1),
      nH: x0 => x0.value,
      nI: (x0,x1) => x0.disable(x1),
      nJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      o: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      oB: x0 => x0.length,
      oC: (x0,x1,x2) => x0.moveTo(x1,x2),
      oD: o => o instanceof Uint16Array,
      oE: (x0,x1) => x0.test(x1),
      oF: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      oG: (x0,x1) => x0.deleteProgram(x1),
      oH: (x0,x1) => { x0.step = x1 },
      oI: (x0,x1) => x0.depthFunc(x1),
      oJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      p: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      pB: (x0,x1) => { x0.lastIndex = x1 },
      pC: (x0,x1,x2) => x0.lineTo(x1,x2),
      pD: () => globalThis.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER,
      pE: x0 => x0.index,
      pF: o => Object.keys(o),
      pG: (x0,x1) => x0.deleteShader(x1),
      pH: (x0,x1) => { x0.max = x1 },
      pI: (x0,x1) => x0.depthMask(x1),
      pJ: x0 => x0.button,
      q: (p, s, f) => p.then(s, (e) => f(e, e === undefined)),
      qB: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      qC: x0 => x0.closePath(),
      qD: (x0,x1) => x0.enableVertexAttribArray(x1),
      qE: (x0,x1) => x0[x1],
      qF: (o, p) => o[p],
      qG: x0 => x0.createProgram(),
      qH: (x0,x1) => { x0.min = x1 },
      qI: (x0,x1) => x0.cullFace(x1),
      qJ: x0 => x0.document,
      r: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      rB: o => o instanceof RegExp,
      rC: (x0,x1) => x0.measureText(x1),
      rD: (x0,x1,x2,x3,x4,x5,x6) => x0.vertexAttribPointer(x1,x2,x3,x4,x5,x6),
      rE: x0 => x0.flags,
      rF: x0 => new Int8Array(x0),
      rG: (x0,x1,x2) => x0.attachShader(x1,x2),
      rH: x0 => x0.ownerDocument,
      rI: (x0,x1) => x0.frontFace(x1),
      rJ: x0 => x0.matches,
      s: (l, r) => l === r,
      sB: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'boolean') return 1;
        return 2;
      },
      sC: x0 => x0.width,
      sD: () => globalThis.WebGL2RenderingContext.FLOAT,
      sE: x0 => x0.arrayBuffer(),
      sF: x0 => new Uint8ClampedArray(x0),
      sG: (x0,x1) => x0.linkProgram(x1),
      sH: (x0,x1) => { x0.value = x1 },
      sI: (x0,x1,x2) => x0.blendFunc(x1,x2),
      sJ: () => globalThis.WebGL2RenderingContext.VENDOR,
      t: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      tB: x0 => x0.dotAll,
      tC: s => s.toUpperCase(),
      tD: () => globalThis.WebGL2RenderingContext.ARRAY_BUFFER,
      tE: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof ArrayBuffer) return 1;
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
          return 2;
        }
        return 3;
      },
      tF: x0 => new Int16Array(x0),
      tG: (x0,x1,x2) => x0.getProgramParameter(x1,x2),
      tH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      tI: (x0,x1) => x0.blendEquation(x1),
      tJ: () => globalThis.WebGL2RenderingContext.RENDERER,
      u: Function.prototype.call.bind(DataView.prototype.getFloat64),
      uB: x0 => x0.unicode,
      uC: (x0,x1) => { x0.shadowBlur = x1 },
      uD: (x0,x1) => x0.bindVertexArray(x1),
      uE: x0 => x0.status,
      uF: x0 => new Int32Array(x0),
      uG: (x0,x1) => x0.getProgramInfoLog(x1),
      uH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      uI: (x0,x1,x2,x3,x4) => x0.colorMask(x1,x2,x3,x4),
      uJ: () => globalThis.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS,
      v: Function.prototype.call.bind(DataView.prototype.getFloat32),
      vB: x0 => x0.ignoreCase,
      vC: (x0,x1) => { x0.shadowColor = x1 },
      vD: x0 => x0.createVertexArray(),
      vE: x0 => x0.ok,
      vF: x0 => new Uint32Array(x0),
      vG: (x0,x1,x2) => x0.getAttribLocation(x1,x2),
      vH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      vI: () => globalThis.WebGL2RenderingContext.SCISSOR_TEST,
      vJ: () => globalThis.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS,
      w: Function.prototype.call.bind(DataView.prototype.getUint32),
      wB: x0 => x0.multiline,
      wC: (x0,x1) => { x0.textBaseline = x1 },
      wD: (x0,x1,x2,x3) => x0.bufferSubData(x1,x2,x3),
      wE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      wF: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      wG: (x0,x1,x2) => x0.getUniformLocation(x1,x2),
      wH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      wI: () => globalThis.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT,
      wJ: () => globalThis.WebGL2RenderingContext.MAX_SAMPLES,
      x: Function.prototype.call.bind(DataView.prototype.getInt32),
      xB: (string, token) => string.split(token),
      xC: (x0,x1) => { x0.textAlign = x1 },
      xD: x0 => new Float32Array(x0),
      xE: x0 => x0.resume(),
      xF: x0 => new Float64Array(x0),
      xG: () => globalThis.WebGL2RenderingContext.LINK_STATUS,
      xH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      xI: () => globalThis.WebGL2RenderingContext.FUNC_SUBTRACT,
      xJ: () => globalThis.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS,
      y: Function.prototype.call.bind(DataView.prototype.getUint16),
      yB: o => o instanceof Array,
      yC: (x0,x1) => { x0.font = x1 },
      yD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      yE: (x0,x1,x2) => x0.toggle(x1,x2),
      yF: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF64ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      yG: () => globalThis.WebGL2RenderingContext.FRAGMENT_SHADER,
      yH: x0 => x0.value,
      yI: () => globalThis.WebGL2RenderingContext.FUNC_ADD,
      yJ: () => globalThis.WebGL2RenderingContext.MAX_TEXTURE_SIZE,
      z: Function.prototype.call.bind(DataView.prototype.getInt16),
      zB: (a, i) => a[i],
      zC: (x0,x1) => x0.rotate(x1),
      zD: Function.prototype.call.bind(DataView.prototype.setFloat32),
      zE: (x0,x1) => x0.contains(x1),
      zF: x0 => new ArrayBuffer(x0),
      zG: (x0,x1) => x0.createShader(x1),
      zH: (x0,x1) => { x0.value = x1 },
      zI: () => globalThis.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA,
      zJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),

    };

    const baseImports = {
      _: dart2wasm,
      Math: Math,
      Date: Date,
      Object: Object,
      Array: Array,
      Reflect: Reflect,
      WebAssembly: {
        JSTag: WebAssembly.JSTag,
      },
      "": new Proxy({}, { get(_, prop) { return prop; } }),

    };

    const jsStringPolyfill = {
      "charCodeAt": (s, i) => s.charCodeAt(i),
      "compare": (s1, s2) => {
        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
        return 0;
      },
      "concat": (s1, s2) => s1 + s2,
      "equals": (s1, s2) => s1 === s2,
      "fromCharCode": (i) => String.fromCharCode(i),
      "length": (s) => s.length,
      "substring": (s, a, b) => s.substring(a, b),
      "fromCharCodeArray": (a, start, end) => {
        if (end <= start) return '';

        const read = dartInstance.exports.$wasmI16ArrayGet;
        let result = '';
        let index = start;
        const chunkLength = Math.min(end - index, 500);
        let array = new Array(chunkLength);
        while (index < end) {
          const newChunkLength = Math.min(end - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(a, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      },
      "intoCharCodeArray": (s, a, start) => {
        if (s === '') return 0;

        const write = dartInstance.exports.$wasmI16ArraySet;
        for (var i = 0; i < s.length; ++i) {
          write(a, start++, s.charCodeAt(i));
        }
        return s.length;
      },
      "test": (s) => typeof s == "string",
    };


    

    dartInstance = await WebAssembly.instantiate(this.module, {
      ...baseImports,
      ...additionalImports,
      
      "wasm:js-string": jsStringPolyfill,
    });

    return new InstantiatedApp(this, dartInstance);
  }
}

class InstantiatedApp {
  constructor(compiledApp, instantiatedModule) {
    this.compiledApp = compiledApp;
    this.instantiatedModule = instantiatedModule;
  }

  // Call the main function with the given arguments.
  invokeMain(...args) {
    this.instantiatedModule.exports.$invokeMain(args);
  }
}
