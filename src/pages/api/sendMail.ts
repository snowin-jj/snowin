import type { APIRoute } from 'astro';

interface FormDataType {
  name: string;
  email: string;
  message: string;
}

export const POST: APIRoute = async ({ request }) => {
  const body: FormDataType = await request.json();
  const API_KEY = import.meta.env.DEVMAILER_API_KEY;

  const res = await fetch(
    `https://devmailer.vercel.app/api/sendmail?apikey=${API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: body.name,
        to: 'hello.snowin@gmail.com',
        subject: 'From your website',
        body: `${body.email}: ${body.message}`,
      }),
    },
  );
  const jsonData = await res.json();

  if (!res.ok) {
    return new Response(JSON.stringify({ error: jsonData }), {
      status: res.status || 500,
    });
  }

  return new Response(
    JSON.stringify({
      data: jsonData.message,
    }),
    { status: res.status || 200 },
  );
};
