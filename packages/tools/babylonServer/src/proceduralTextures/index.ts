import * as ProceduralTexturesLib from "procedural-textures/index";

/**
 * Legacy support, defining window.BABYLON.GridMaterial... (global variable).
 *
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
const globalObject = typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    (<any>globalObject).BABYLON = (<any>globalObject).BABYLON || {};
    for (const mat in ProceduralTexturesLib) {
        (<any>globalObject).BABYLON[mat] = (<any>ProceduralTexturesLib)[mat];
    }
}

export * from "procedural-textures/index";
