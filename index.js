const { vi } = require("vite")

HTMLCanvasElement.prototype.getContext = vi.fn();
