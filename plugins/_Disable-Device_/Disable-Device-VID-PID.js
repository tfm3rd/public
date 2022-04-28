export function Name() { return "Disabled Device"; }
export function VendorId() { return 0x0000; } // Change to Device Vendor Id
export function ProductId() { return 0x0000; } // Change to Device Product Id
export function Publisher() { return "WhirlwindFX"; }
export function Size() { return [1, 1]; }
export function DefaultPosition() { return [1, 1]; }
export function DefaultScale() { return 0.1; }
export function ControllableParameters(){
	return [];
}

export function LedNames() {
}

export function LedPositions() {
}

export function Validate(endpoint) {
}

export function Image() {
	return "iVBORw0KGgoAAAANSUhEUgAABLAAAAMgCAMAAAAEPmswAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LjljY2M0ZGU5MywgMjAyMi8wMy8xNC0xNDowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjMgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU1RUQ0MUI4QzcyMDExRUNCMTg4RjAxRDUxQkRCNDZFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU1RUQ0MUI5QzcyMDExRUNCMTg4RjAxRDUxQkRCNDZFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTVFRDQxQjZDNzIwMTFFQ0IxODhGMDFENTFCREI0NkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTVFRDQxQjdDNzIwMTFFQ0IxODhGMDFENTFCREI0NkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6C4gKuAAAAM1BMVEX/////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";
}