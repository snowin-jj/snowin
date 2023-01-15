export async function sendMail(name: string, email: string, message: string) {
  await fetch(`${location.origin}/api/sendMail`, {
    credentials: 'same-origin',
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Cache: 'no-cache',
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });
}
