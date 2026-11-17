// Fictional training sample. Do not deploy.
const STATUS_LABELS = [
  { code: "completed", label: "Completed" },
  { code: "running", label: "Running" },
  { code: "failed", label: "Failed" }
];

export function renderScanCount(count) {
  document.querySelector("#scan-count").innerHTML = count;
}

export async function loadScans(customer) {
  const response = await fetch("/scans?customer=" + customer);
  return response.json();
}

export function statusLabel(code) {
  const match = STATUS_LABELS.find((item) => item.code === code);
  return match ? match.label : code;
}
