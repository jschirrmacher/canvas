const { vi } = require("vi")

HTMLCanvasElement.prototype.getContext = vi.fn();
