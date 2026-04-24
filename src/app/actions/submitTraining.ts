"use server";

import { db } from "@/lib/db";
import { sendMail } from "@/lib/mail";

export async function submitTrainingApplication(formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const program = formData.get("program") as string;

    if (!firstName || !lastName || !email || !phone || !program) {
      return { error: "All fields are required." };
    }

    // 1. Save to Database
    const application = await db.trainingApplication.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        program,
      },
    });

    // 2. Send Email via Nodemailer to TMT Admin
    const adminEmail = process.env.SMTP_USER || "info@tmtgroup.com.ng"; 
    const subject = `New Training Application: ${firstName} ${lastName}`;
    const html = `
      <h2>New Physical Training Application Received</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Program of Interest:</strong> ${program}</p>
      <br/>
      <p>Application ID: ${application.id}</p>
    `;

    await sendMail(adminEmail, subject, html);

    return { success: true, message: "Application submitted successfully." };
  } catch (error) {
    console.error("Error submitting training application:", error);
    return { error: "Failed to submit application. Please try again." };
  }
}
