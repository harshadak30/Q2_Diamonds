import { useState } from "react";
import axiosInstance from "../../helper/axios";

export interface ContactFormData {
  name: string;
  email: string;
  phone_number: string;
  message: string;
}

export interface UseContactUsReturn {
  handleContactSubmit: (data: ContactFormData) => Promise<any>;
  loading: boolean;
  error: string | null;
  success: boolean;
  fieldErrors: FieldErrors;
  resetSuccess: () => void;
}

// Field-specific errors from backend
export interface FieldErrors {
  name?: string;
  email?: string;
  phone_number?: string;
  message?: string;
}

const useContactUs = (): UseContactUsReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const handleContactSubmit = async (data: ContactFormData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    setFieldErrors({});

    try {
      const response = await axiosInstance.post("/api/user-contact/", data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      setSuccess(true);
      console.log("Success:", response.data);
      return response.data;
    } catch (err: any) {
      console.error("Error:", err);

      if (err.response?.data) {
        const backendErrors = err.response.data;

        if (
          backendErrors.name ||
          backendErrors.email ||
          backendErrors.phone_number ||
          backendErrors.message
        ) {
          setFieldErrors({
            name: backendErrors.name?.[0] || backendErrors.name,
            email: backendErrors.email?.[0] || backendErrors.email,
            phone_number:
              backendErrors.phone_number?.[0] || backendErrors.phone_number,
            message: backendErrors.message?.[0] || backendErrors.message,
          });
        }

        const errorMessage =
          backendErrors.message ||
          backendErrors.detail ||
          "Failed to submit form. Please try again.";
        setError(errorMessage);
      } else {
        setError("Network error. Please check your connection.");
      }

      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    handleContactSubmit,
    loading,
    error,
    success,
    fieldErrors,
    resetSuccess: () => setSuccess(false),
  };
};

export default useContactUs;
