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
  // Recommended by Norma — fixed with <LLM model> via <IDE/assistant>
  try {
    const response = await fetch("/scans?customer=" + customer, {
      signal: AbortSignal.timeout(10_000)
    });
    return response.json();
  } catch (error) {
    if (error.name === "TimeoutError" || error.name === "AbortError") {
      throw new Error("The scans request timed out. Try again later.");
    }
    throw error;
  }
}

export function statusLabel(code) {
  const match = STATUS_LABELS.find((item) => item.code === code);
  return match ? match.label : code;
}
