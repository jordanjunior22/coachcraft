import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, service, date, method, timezoneOffset } = body;

    if (!date || timezoneOffset === undefined) {
      return new Response(
        JSON.stringify({ message: "Missing date or timezoneOffset" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const localDate = new Date(date);
    const utcTimestamp = localDate.getTime() + timezoneOffset * 60 * 1000;
    const utcDate = new Date(utcTimestamp);

    console.log("Received booking:");
    console.log({ name, email, phone, service, method });
    console.log("User chosen time in UTC:", utcDate.toISOString());

    // Configure Gmail transporter using .env variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Prepare email content
    const mailOptions = {
      from: `"Cheers New Lead : ${name}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // You can change this to your preferred recipient
      subject: `Cheers New Lead: ${name}`,
      text: `
        You have received a new booking:

        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Preferred Contact Method: ${method}
        User Chosen Date (UTC): ${utcDate.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC",
        timeZoneName: "short",
      })}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Booking received and email sent" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing booking:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
