type ClassValue = string | number | null | false | undefined | ClassValue[];

function flatten(input: ClassValue, out: string[]) {
  if (!input) return;
  if (Array.isArray(input)) {
    for (const item of input) flatten(item, out);
    return;
  }
  out.push(String(input));
}

export function cn(...inputs: ClassValue[]) {
  const out: string[] = [];
  for (const input of inputs) flatten(input, out);
  return out.join(" ");
}
