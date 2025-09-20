import { useMutation } from "@tanstack/react-query";
import { emailServiceApi } from "./email-service";

export interface SendEmailParams {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  from?: string;
}

export interface SendTemplateEmailParams {
  to: string;
  template: 'welcome' | 'forgot-password' | 'contact';
  data?: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    resetLink?: string;
  };
}

export interface EmailResponse {
  success: boolean;
  message: string;
  messageId?: string;
  error?: string;
}

export const sendEmail = async (params: SendEmailParams): Promise<EmailResponse> => {
  try {
    const { data } = await emailServiceApi.post<EmailResponse>("/send-email", params);
    return data;
  } catch (error: any) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email",
      error: error.response?.data?.error || error.message
    };
  }
};

export const sendTemplateEmail = async (params: SendTemplateEmailParams): Promise<EmailResponse> => {
  try {
    const { data } = await emailServiceApi.post<EmailResponse>("/send-template", params);
    return data;
  } catch (error: any) {
    console.error("Error sending template email:", error);
    return {
      success: false,
      message: "Failed to send template email",
      error: error.response?.data?.error || error.message
    };
  }
};

export const useSendEmail = () => {
  return useMutation({
    mutationFn: sendEmail,
  });
};

export const useSendTemplateEmail = () => {
  return useMutation({
    mutationFn: sendTemplateEmail,
  });
};

export const useSendContactEmail = () => {
  return useMutation({
    mutationFn: async (formData: { name: string; email: string; company?: string; phone?: string; message: string }) => {
      const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "contact@surfbank.com";
      return sendTemplateEmail({
        to: contactEmail,
        template: "contact",
        data: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || formData.company,
          message: formData.message
        }
      });
    },
  });
};